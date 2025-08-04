---
title: 'CI/CD流水线设计与实践'
description: '全面介绍持续集成和持续部署的最佳实践，包括工具选择、流水线设计、自动化测试和部署策略'
date: '2024-03-01'
tags: ['cicd', 'devops', 'automation', 'jenkins', 'github-actions', 'docker']
author: 'CodeVa Team'
category: 'devops'
subcategory: 'automation'
---

# CI/CD流水线设计与实践

CI/CD（持续集成/持续部署）是现代软件开发的核心实践，通过自动化构建、测试和部署流程，提高开发效率和软件质量。

## CI/CD概述

### 核心概念

```mermaid
graph LR
    A[代码提交] --> B[持续集成 CI]
    B --> C[自动化测试]
    C --> D[构建制品]
    D --> E[持续部署 CD]
    E --> F[测试环境]
    F --> G[预生产环境]
    G --> H[生产环境]
    
    B --> B1[代码检查]
    B --> B2[单元测试]
    B --> B3[集成测试]
    
    E --> E1[自动部署]
    E --> E2[环境配置]
    E --> E3[健康检查]
```

### CI/CD的价值

| 方面 | 传统方式 | CI/CD方式 | 改进效果 |
|------|----------|-----------|----------|
| 部署频率 | 周/月 | 日/小时 | 10-100倍提升 |
| 部署时间 | 小时/天 | 分钟 | 90%+时间节省 |
| 故障恢复 | 小时/天 | 分钟 | 快速回滚 |
| 变更失败率 | 10-30% | 0-15% | 质量显著提升 |

## 流水线设计原则

### 1. 流水线架构

```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  # 代码质量检查
  code-quality:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Lint code
      run: npm run lint
    
    - name: Check code formatting
      run: npm run format:check
    
    - name: Type checking
      run: npm run type-check
    
    - name: Security audit
      run: npm audit --audit-level moderate

  # 单元测试
  unit-tests:
    runs-on: ubuntu-latest
    needs: code-quality
    strategy:
      matrix:
        node-version: [16, 18, 20]
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run unit tests
      run: npm run test:unit -- --coverage
    
    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage/lcov.info
        flags: unittests
        name: codecov-umbrella

  # 集成测试
  integration-tests:
    runs-on: ubuntu-latest
    needs: unit-tests
    services:
      postgres:
        image: postgres:14
        env:
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: testdb
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432
      
      redis:
        image: redis:7
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 6379:6379
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run database migrations
      run: npm run db:migrate
      env:
        DATABASE_URL: postgresql://postgres:postgres@localhost:5432/testdb
    
    - name: Run integration tests
      run: npm run test:integration
      env:
        DATABASE_URL: postgresql://postgres:postgres@localhost:5432/testdb
        REDIS_URL: redis://localhost:6379

  # 构建和推送镜像
  build-and-push:
    runs-on: ubuntu-latest
    needs: [unit-tests, integration-tests]
    if: github.event_name == 'push'
    outputs:
      image-digest: ${{ steps.build.outputs.digest }}
      image-tag: ${{ steps.meta.outputs.tags }}
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v2
    
    - name: Log in to Container Registry
      uses: docker/login-action@v2
      with:
        registry: ${{ env.REGISTRY }}
        username: ${{ github.actor }}
        password: ${{ secrets.GITHUB_TOKEN }}
    
    - name: Extract metadata
      id: meta
      uses: docker/metadata-action@v4
      with:
        images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
        tags: |
          type=ref,event=branch
          type=ref,event=pr
          type=sha,prefix={{branch}}-
          type=raw,value=latest,enable={{is_default_branch}}
    
    - name: Build and push Docker image
      id: build
      uses: docker/build-push-action@v4
      with:
        context: .
        platforms: linux/amd64,linux/arm64
        push: true
        tags: ${{ steps.meta.outputs.tags }}
        labels: ${{ steps.meta.outputs.labels }}
        cache-from: type=gha
        cache-to: type=gha,mode=max

  # 安全扫描
  security-scan:
    runs-on: ubuntu-latest
    needs: build-and-push
    if: github.event_name == 'push'
    
    steps:
    - name: Run Trivy vulnerability scanner
      uses: aquasecurity/trivy-action@master
      with:
        image-ref: ${{ needs.build-and-push.outputs.image-tag }}
        format: 'sarif'
        output: 'trivy-results.sarif'
    
    - name: Upload Trivy scan results to GitHub Security tab
      uses: github/codeql-action/upload-sarif@v2
      with:
        sarif_file: 'trivy-results.sarif'

  # 部署到测试环境
  deploy-staging:
    runs-on: ubuntu-latest
    needs: [build-and-push, security-scan]
    if: github.ref == 'refs/heads/develop'
    environment:
      name: staging
      url: https://staging.example.com
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to staging
      run: |
        echo "Deploying to staging environment"
        # 实际部署逻辑
        kubectl set image deployment/app app=${{ needs.build-and-push.outputs.image-tag }} -n staging
        kubectl rollout status deployment/app -n staging
    
    - name: Run smoke tests
      run: |
        npm run test:smoke -- --env=staging

  # 部署到生产环境
  deploy-production:
    runs-on: ubuntu-latest
    needs: [build-and-push, security-scan]
    if: github.ref == 'refs/heads/main'
    environment:
      name: production
      url: https://example.com
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to production
      run: |
        echo "Deploying to production environment"
        # 蓝绿部署或金丝雀部署
        kubectl apply -f k8s/production/
        kubectl set image deployment/app app=${{ needs.build-and-push.outputs.image-tag }} -n production
        kubectl rollout status deployment/app -n production
    
    - name: Run health checks
      run: |
        npm run test:health -- --env=production
    
    - name: Notify deployment
      uses: 8398a7/action-slack@v3
      with:
        status: ${{ job.status }}
        channel: '#deployments'
        webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

### 2. Jenkins流水线

```groovy
// Jenkinsfile
pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'your-registry.com'
        IMAGE_NAME = 'your-app'
        KUBECONFIG = credentials('kubeconfig')
    }
    
    options {
        buildDiscarder(logRotator(numToKeepStr: '10'))
        timeout(time: 1, unit: 'HOURS')
        retry(3)
    }
    
    triggers {
        pollSCM('H/5 * * * *')
        cron('H 2 * * *') // 每日构建
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
                script {
                    env.GIT_COMMIT_SHORT = sh(
                        script: 'git rev-parse --short HEAD',
                        returnStdout: true
                    ).trim()
                    env.BUILD_TAG = "${env.BRANCH_NAME}-${env.GIT_COMMIT_SHORT}-${env.BUILD_NUMBER}"
                }
            }
        }
        
        stage('Code Quality') {
            parallel {
                stage('Lint') {
                    steps {
                        sh 'npm ci'
                        sh 'npm run lint'
                    }
                    post {
                        always {
                            publishHTML([
                                allowMissing: false,
                                alwaysLinkToLastBuild: true,
                                keepAll: true,
                                reportDir: 'reports',
                                reportFiles: 'eslint.html',
                                reportName: 'ESLint Report'
                            ])
                        }
                    }
                }
                
                stage('Security Scan') {
                    steps {
                        sh 'npm audit --audit-level moderate'
                        sh 'npm run security:scan'
                    }
                }
                
                stage('Code Coverage') {
                    steps {
                        sh 'npm run test:coverage'
                    }
                    post {
                        always {
                            publishCoverage(
                                adapters: [coberturaAdapter('coverage/cobertura-coverage.xml')],
                                sourceFileResolver: sourceFiles('STORE_LAST_BUILD')
                            )
                        }
                    }
                }
            }
        }
        
        stage('Test') {
            parallel {
                stage('Unit Tests') {
                    steps {
                        sh 'npm run test:unit'
                    }
                    post {
                        always {
                            junit 'reports/junit.xml'
                        }
                    }
                }
                
                stage('Integration Tests') {
                    steps {
                        script {
                            docker.image('postgres:14').withRun('-e POSTGRES_DB=testdb -e POSTGRES_PASSWORD=test') { db ->
                                docker.image('redis:7').withRun() { redis ->
                                    sh """
                                        export DATABASE_URL=postgresql://postgres:test@${db.host}:${db.port}/testdb
                                        export REDIS_URL=redis://${redis.host}:${redis.port}
                                        npm run test:integration
                                    """
                                }
                            }
                        }
                    }
                }
            }
        }
        
        stage('Build') {
            steps {
                script {
                    def image = docker.build("${DOCKER_REGISTRY}/${IMAGE_NAME}:${BUILD_TAG}")
                    
                    // 多架构构建
                    sh """
                        docker buildx create --use
                        docker buildx build \
                            --platform linux/amd64,linux/arm64 \
                            --tag ${DOCKER_REGISTRY}/${IMAGE_NAME}:${BUILD_TAG} \
                            --tag ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest \
                            --push .
                    """
                }
            }
        }
        
        stage('Security Scan Image') {
            steps {
                script {
                    sh """
                        docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \
                            aquasec/trivy image --exit-code 1 --severity HIGH,CRITICAL \
                            ${DOCKER_REGISTRY}/${IMAGE_NAME}:${BUILD_TAG}
                    """
                }
            }
        }
        
        stage('Deploy to Staging') {
            when {
                branch 'develop'
            }
            steps {
                script {
                    kubernetesDeploy(
                        configs: 'k8s/staging/*.yaml',
                        kubeconfigId: 'kubeconfig',
                        enableConfigSubstitution: true
                    )
                    
                    // 等待部署完成
                    sh 'kubectl rollout status deployment/app -n staging --timeout=300s'
                    
                    // 运行烟雾测试
                    sh 'npm run test:smoke -- --env=staging'
                }
            }
        }
        
        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                script {
                    // 人工确认
                    input message: 'Deploy to production?', ok: 'Deploy',
                          submitterParameter: 'DEPLOYER'
                    
                    // 蓝绿部署
                    sh """
                        # 更新蓝色环境
                        kubectl set image deployment/app-blue app=${DOCKER_REGISTRY}/${IMAGE_NAME}:${BUILD_TAG} -n production
                        kubectl rollout status deployment/app-blue -n production --timeout=300s
                        
                        # 运行健康检查
                        npm run test:health -- --env=production-blue
                        
                        # 切换流量
                        kubectl patch service app-service -n production -p '{"spec":{"selector":{"version":"blue"}}}'
                        
                        # 等待一段时间确保稳定
                        sleep 60
                        
                        # 更新绿色环境为新版本（为下次部署准备）
                        kubectl set image deployment/app-green app=${DOCKER_REGISTRY}/${IMAGE_NAME}:${BUILD_TAG} -n production
                    """
                }
            }
            post {
                success {
                    slackSend(
                        channel: '#deployments',
                        color: 'good',
                        message: "✅ Successfully deployed ${IMAGE_NAME}:${BUILD_TAG} to production by ${env.DEPLOYER}"
                    )
                }
                failure {
                    slackSend(
                        channel: '#deployments',
                        color: 'danger',
                        message: "❌ Failed to deploy ${IMAGE_NAME}:${BUILD_TAG} to production"
                    )
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
        failure {
            emailext(
                subject: "Build Failed: ${env.JOB_NAME} - ${env.BUILD_NUMBER}",
                body: "Build failed. Check console output at ${env.BUILD_URL}",
                to: "${env.CHANGE_AUTHOR_EMAIL}"
            )
        }
    }
}
```

## 自动化测试策略

### 1. 测试金字塔

```javascript
// 单元测试示例
// tests/unit/userService.test.js
const { UserService } = require('../../src/services/userService')
const { UserRepository } = require('../../src/repositories/userRepository')

jest.mock('../../src/repositories/userRepository')

describe('UserService', () => {
  let userService
  let mockUserRepository
  
  beforeEach(() => {
    mockUserRepository = new UserRepository()
    userService = new UserService(mockUserRepository)
  })
  
  describe('createUser', () => {
    it('should create user with valid data', async () => {
      // Arrange
      const userData = {
        email: 'test@example.com',
        name: 'Test User',
        password: 'securePassword123'
      }
      
      const expectedUser = {
        id: '123',
        ...userData,
        password: 'hashedPassword',
        createdAt: new Date()
      }
      
      mockUserRepository.findByEmail.mockResolvedValue(null)
      mockUserRepository.create.mockResolvedValue(expectedUser)
      
      // Act
      const result = await userService.createUser(userData)
      
      // Assert
      expect(result).toEqual(expectedUser)
      expect(mockUserRepository.findByEmail).toHaveBeenCalledWith(userData.email)
      expect(mockUserRepository.create).toHaveBeenCalledWith({
        ...userData,
        password: expect.any(String) // 密码应该被哈希
      })
    })
    
    it('should throw error if user already exists', async () => {
      // Arrange
      const userData = {
        email: 'existing@example.com',
        name: 'Existing User',
        password: 'password123'
      }
      
      mockUserRepository.findByEmail.mockResolvedValue({ id: '456' })
      
      // Act & Assert
      await expect(userService.createUser(userData))
        .rejects.toThrow('User already exists')
    })
  })
})

// 集成测试示例
// tests/integration/userAPI.test.js
const request = require('supertest')
const app = require('../../src/app')
const { setupTestDB, cleanupTestDB } = require('../helpers/database')

describe('User API Integration Tests', () => {
  beforeAll(async () => {
    await setupTestDB()
  })
  
  afterAll(async () => {
    await cleanupTestDB()
  })
  
  describe('POST /api/users', () => {
    it('should create a new user', async () => {
      const userData = {
        email: 'integration@example.com',
        name: 'Integration Test User',
        password: 'testPassword123'
      }
      
      const response = await request(app)
        .post('/api/users')
        .send(userData)
        .expect(201)
      
      expect(response.body).toMatchObject({
        id: expect.any(String),
        email: userData.email,
        name: userData.name,
        createdAt: expect.any(String)
      })
      
      expect(response.body.password).toBeUndefined()
    })
    
    it('should return 400 for invalid email', async () => {
      const invalidUserData = {
        email: 'invalid-email',
        name: 'Test User',
        password: 'password123'
      }
      
      const response = await request(app)
        .post('/api/users')
        .send(invalidUserData)
        .expect(400)
      
      expect(response.body.error).toContain('Invalid email')
    })
  })
})

// 端到端测试示例
// tests/e2e/userRegistration.test.js
const { test, expect } = require('@playwright/test')

test.describe('User Registration Flow', () => {
  test('should allow user to register and login', async ({ page }) => {
    // 访问注册页面
    await page.goto('/register')
    
    // 填写注册表单
    await page.fill('[data-testid="email-input"]', 'e2e@example.com')
    await page.fill('[data-testid="name-input"]', 'E2E Test User')
    await page.fill('[data-testid="password-input"]', 'testPassword123')
    await page.fill('[data-testid="confirm-password-input"]', 'testPassword123')
    
    // 提交表单
    await page.click('[data-testid="register-button"]')
    
    // 验证注册成功
    await expect(page.locator('[data-testid="success-message"]'))
      .toContainText('Registration successful')
    
    // 验证重定向到登录页面
    await expect(page).toHaveURL('/login')
    
    // 使用新账户登录
    await page.fill('[data-testid="login-email"]', 'e2e@example.com')
    await page.fill('[data-testid="login-password"]', 'testPassword123')
    await page.click('[data-testid="login-button"]')
    
    // 验证登录成功
    await expect(page).toHaveURL('/dashboard')
    await expect(page.locator('[data-testid="user-name"]'))
      .toContainText('E2E Test User')
  })
  
  test('should show validation errors for invalid input', async ({ page }) => {
    await page.goto('/register')
    
    // 提交空表单
    await page.click('[data-testid="register-button"]')
    
    // 验证错误消息
    await expect(page.locator('[data-testid="email-error"]'))
      .toContainText('Email is required')
    await expect(page.locator('[data-testid="name-error"]'))
      .toContainText('Name is required')
    await expect(page.locator('[data-testid="password-error"]'))
      .toContainText('Password is required')
  })
})
```

### 2. 测试配置和工具

```javascript
// jest.config.js
module.exports = {
  // 测试环境
  testEnvironment: 'node',
  
  // 测试文件匹配模式
  testMatch: [
    '**/tests/**/*.test.js',
    '**/src/**/__tests__/*.js'
  ],
  
  // 覆盖率配置
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html', 'cobertura'],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.test.js',
    '!src/config/**',
    '!src/migrations/**'
  ],
  
  // 覆盖率阈值
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  
  // 设置和清理
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  
  // 模块映射
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  
  // 测试超时
  testTimeout: 10000,
  
  // 并行测试
  maxWorkers: '50%',
  
  // 报告器
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: 'reports',
      outputName: 'junit.xml'
    }],
    ['jest-html-reporters', {
      publicPath: 'reports',
      filename: 'jest-report.html'
    }]
  ]
}

// tests/setup.js
const { setupTestDB, cleanupTestDB } = require('./helpers/database')

// 全局设置
beforeAll(async () => {
  await setupTestDB()
})

// 全局清理
afterAll(async () => {
  await cleanupTestDB()
})

// 每个测试后清理
afterEach(async () => {
  // 清理测试数据
  await cleanupTestData()
})

// 扩展Jest匹配器
expect.extend({
  toBeValidEmail(received) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const pass = emailRegex.test(received)
    
    return {
      message: () => `expected ${received} ${pass ? 'not ' : ''}to be a valid email`,
      pass
    }
  }
})
```

## 部署策略

### 1. 蓝绿部署

```yaml
# k8s/blue-green-deployment.yaml
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: app-rollout
spec:
  replicas: 5
  strategy:
    blueGreen:
      # 活跃服务
      activeService: app-active
      # 预览服务
      previewService: app-preview
      # 自动提升
      autoPromotionEnabled: false
      # 预提升分析
      prePromotionAnalysis:
        templates:
        - templateName: success-rate
        args:
        - name: service-name
          value: app-preview
      # 提升后分析
      postPromotionAnalysis:
        templates:
        - templateName: success-rate
        args:
        - name: service-name
          value: app-active
      # 缩放时间
      scaleDownDelaySeconds: 30
      previewReplicaCount: 1
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: app
        image: myapp:latest
        ports:
        - containerPort: 8080
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "256Mi"
            cpu: "200m"
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 5

---
apiVersion: v1
kind: Service
metadata:
  name: app-active
spec:
  selector:
    app: myapp
  ports:
  - port: 80
    targetPort: 8080

---
apiVersion: v1
kind: Service
metadata:
  name: app-preview
spec:
  selector:
    app: myapp
  ports:
  - port: 80
    targetPort: 8080

---
# 分析模板
apiVersion: argoproj.io/v1alpha1
kind: AnalysisTemplate
metadata:
  name: success-rate
spec:
  args:
  - name: service-name
  metrics:
  - name: success-rate
    interval: 60s
    count: 5
    successCondition: result[0] >= 0.95
    provider:
      prometheus:
        address: http://prometheus:9090
        query: |
          sum(rate(http_requests_total{service="{{args.service-name}}",status!~"5.."}[5m])) /
          sum(rate(http_requests_total{service="{{args.service-name}}"}[5m]))
```

### 2. 金丝雀部署

```yaml
# k8s/canary-deployment.yaml
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: app-canary
spec:
  replicas: 10
  strategy:
    canary:
      # 金丝雀步骤
      steps:
      - setWeight: 10
      - pause: {duration: 60s}
      - analysis:
          templates:
          - templateName: canary-analysis
          args:
          - name: canary-service
            value: app-canary
      - setWeight: 25
      - pause: {duration: 300s}
      - analysis:
          templates:
          - templateName: canary-analysis
          args:
          - name: canary-service
            value: app-canary
      - setWeight: 50
      - pause: {duration: 600s}
      - analysis:
          templates:
          - templateName: canary-analysis
          args:
          - name: canary-service
            value: app-canary
      - setWeight: 75
      - pause: {duration: 600s}
      
      # 流量分割
      trafficRouting:
        nginx:
          stableIngress: app-stable
          annotationPrefix: nginx.ingress.kubernetes.io
          additionalIngressAnnotations:
            canary-by-header: X-Canary
            canary-by-header-value: "true"
      
      # 分析配置
      analysis:
        templates:
        - templateName: canary-analysis
        startingStep: 2
        args:
        - name: canary-service
          value: app-canary
  
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: app
        image: myapp:latest
        ports:
        - containerPort: 8080

---
apiVersion: argoproj.io/v1alpha1
kind: AnalysisTemplate
metadata:
  name: canary-analysis
spec:
  args:
  - name: canary-service
  metrics:
  - name: success-rate
    interval: 60s
    successCondition: result[0] >= 0.95
    failureLimit: 3
    provider:
      prometheus:
        address: http://prometheus:9090
        query: |
          sum(rate(http_requests_total{service="{{args.canary-service}}",status!~"5.."}[5m])) /
          sum(rate(http_requests_total{service="{{args.canary-service}}"}[5m]))
  
  - name: avg-response-time
    interval: 60s
    successCondition: result[0] <= 500
    failureLimit: 3
    provider:
      prometheus:
        address: http://prometheus:9090
        query: |
          sum(rate(http_request_duration_seconds_sum{service="{{args.canary-service}}"}[5m])) /
          sum(rate(http_request_duration_seconds_count{service="{{args.canary-service}}"}[5m])) * 1000
  
  - name: error-rate
    interval: 60s
    successCondition: result[0] <= 0.05
    failureLimit: 3
    provider:
      prometheus:
        address: http://prometheus:9090
        query: |
          sum(rate(http_requests_total{service="{{args.canary-service}}",status=~"5.."}[5m])) /
          sum(rate(http_requests_total{service="{{args.canary-service}}"}[5m]))
```

### 3. 部署脚本

```bash
#!/bin/bash
# deploy.sh - 智能部署脚本

set -euo pipefail

# 配置
APP_NAME="myapp"
NAMESPACE="production"
IMAGE_TAG="${1:-latest}"
DEPLOYMENT_STRATEGY="${2:-rolling}"
HEALTH_CHECK_TIMEOUT=300
ROLLBACK_ON_FAILURE=true

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING: $1${NC}"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
    exit 1
}

# 预检查
pre_deployment_checks() {
    log "Running pre-deployment checks..."
    
    # 检查kubectl连接
    if ! kubectl cluster-info &>/dev/null; then
        error "Cannot connect to Kubernetes cluster"
    fi
    
    # 检查命名空间
    if ! kubectl get namespace "$NAMESPACE" &>/dev/null; then
        error "Namespace $NAMESPACE does not exist"
    fi
    
    # 检查镜像是否存在
    if ! docker manifest inspect "$APP_NAME:$IMAGE_TAG" &>/dev/null; then
        error "Image $APP_NAME:$IMAGE_TAG does not exist"
    fi
    
    # 检查资源配额
    local cpu_request=$(kubectl get deployment "$APP_NAME" -n "$NAMESPACE" -o jsonpath='{.spec.template.spec.containers[0].resources.requests.cpu}' 2>/dev/null || echo "100m")
    local memory_request=$(kubectl get deployment "$APP_NAME" -n "$NAMESPACE" -o jsonpath='{.spec.template.spec.containers[0].resources.requests.memory}' 2>/dev/null || echo "128Mi")
    
    log "Resource requirements: CPU=$cpu_request, Memory=$memory_request"
}

# 备份当前部署
backup_current_deployment() {
    log "Backing up current deployment..."
    
    local backup_file="backup-${APP_NAME}-$(date +%Y%m%d-%H%M%S).yaml"
    
    if kubectl get deployment "$APP_NAME" -n "$NAMESPACE" &>/dev/null; then
        kubectl get deployment "$APP_NAME" -n "$NAMESPACE" -o yaml > "$backup_file"
        log "Current deployment backed up to $backup_file"
        echo "$backup_file" > .last_backup
    else
        warn "No existing deployment found to backup"
    fi
}

# 滚动更新部署
rolling_deployment() {
    log "Starting rolling deployment..."
    
    # 更新镜像
    kubectl set image deployment/"$APP_NAME" "$APP_NAME"="$APP_NAME:$IMAGE_TAG" -n "$NAMESPACE"
    
    # 等待部署完成
    if kubectl rollout status deployment/"$APP_NAME" -n "$NAMESPACE" --timeout="${HEALTH_CHECK_TIMEOUT}s"; then
        log "Rolling deployment completed successfully"
    else
        error "Rolling deployment failed"
    fi
}

# 蓝绿部署
blue_green_deployment() {
    log "Starting blue-green deployment..."
    
    # 检查Argo Rollouts是否可用
    if ! kubectl get crd rollouts.argoproj.io &>/dev/null; then
        error "Argo Rollouts CRD not found. Please install Argo Rollouts."
    fi
    
    # 更新Rollout
    kubectl argo rollouts set image "$APP_NAME" "$APP_NAME"="$APP_NAME:$IMAGE_TAG" -n "$NAMESPACE"
    
    # 等待Rollout完成
    kubectl argo rollouts get rollout "$APP_NAME" -n "$NAMESPACE" --watch
}

# 金丝雀部署
canary_deployment() {
    log "Starting canary deployment..."
    
    # 更新Rollout
    kubectl argo rollouts set image "$APP_NAME" "$APP_NAME"="$APP_NAME:$IMAGE_TAG" -n "$NAMESPACE"
    
    # 监控金丝雀部署
    kubectl argo rollouts get rollout "$APP_NAME" -n "$NAMESPACE" --watch
}

# 健康检查
health_check() {
    log "Running health checks..."
    
    local max_attempts=30
    local attempt=1
    
    while [ $attempt -le $max_attempts ]; do
        local ready_replicas=$(kubectl get deployment "$APP_NAME" -n "$NAMESPACE" -o jsonpath='{.status.readyReplicas}' 2>/dev/null || echo "0")
        local desired_replicas=$(kubectl get deployment "$APP_NAME" -n "$NAMESPACE" -o jsonpath='{.spec.replicas}' 2>/dev/null || echo "1")
        
        if [ "$ready_replicas" = "$desired_replicas" ] && [ "$ready_replicas" != "0" ]; then
            log "Health check passed: $ready_replicas/$desired_replicas replicas ready"
            return 0
        fi
        
        log "Health check attempt $attempt/$max_attempts: $ready_replicas/$desired_replicas replicas ready"
        sleep 10
        ((attempt++))
    done
    
    error "Health check failed: Not all replicas are ready"
}

# 烟雾测试
smoke_tests() {
    log "Running smoke tests..."
    
    # 获取服务端点
    local service_ip=$(kubectl get service "$APP_NAME" -n "$NAMESPACE" -o jsonpath='{.status.loadBalancer.ingress[0].ip}' 2>/dev/null || echo "")
    
    if [ -z "$service_ip" ]; then
        service_ip=$(kubectl get service "$APP_NAME" -n "$NAMESPACE" -o jsonpath='{.spec.clusterIP}')
        warn "Using cluster IP for smoke tests: $service_ip"
    fi
    
    # 基本健康检查
    if curl -f "http://$service_ip/health" --max-time 10 &>/dev/null; then
        log "Smoke test passed: Health endpoint responding"
    else
        error "Smoke test failed: Health endpoint not responding"
    fi
    
    # 运行自定义测试
    if [ -f "smoke-tests.sh" ]; then
        log "Running custom smoke tests..."
        bash smoke-tests.sh "$service_ip"
    fi
}

# 回滚
rollback() {
    warn "Rolling back deployment..."
    
    if [ -f ".last_backup" ]; then
        local backup_file=$(cat .last_backup)
        if [ -f "$backup_file" ]; then
            kubectl apply -f "$backup_file"
            kubectl rollout status deployment/"$APP_NAME" -n "$NAMESPACE" --timeout="${HEALTH_CHECK_TIMEOUT}s"
            log "Rollback completed using backup: $backup_file"
        else
            kubectl rollout undo deployment/"$APP_NAME" -n "$NAMESPACE"
            log "Rollback completed using kubectl undo"
        fi
    else
        kubectl rollout undo deployment/"$APP_NAME" -n "$NAMESPACE"
        log "Rollback completed using kubectl undo"
    fi
}

# 清理
cleanup() {
    log "Cleaning up..."
    
    # 清理旧的ReplicaSets
    kubectl delete replicaset -l app="$APP_NAME" -n "$NAMESPACE" --field-selector='status.replicas=0'
    
    # 清理旧的备份文件（保留最近5个）
    ls -t backup-${APP_NAME}-*.yaml 2>/dev/null | tail -n +6 | xargs rm -f
}

# 发送通知
send_notification() {
    local status="$1"
    local message="$2"
    
    if [ -n "${SLACK_WEBHOOK:-}" ]; then
        local color="good"
        [ "$status" = "failure" ] && color="danger"
        
        curl -X POST -H 'Content-type: application/json' \
            --data "{\"attachments\":[{\"color\":\"$color\",\"text\":\"$message\"}]}" \
            "$SLACK_WEBHOOK"
    fi
    
    log "Notification sent: $message"
}

# 主函数
main() {
    log "Starting deployment of $APP_NAME:$IMAGE_TAG using $DEPLOYMENT_STRATEGY strategy"
    
    # 设置错误处理
    if [ "$ROLLBACK_ON_FAILURE" = true ]; then
        trap 'rollback; send_notification "failure" "Deployment failed and rolled back: $APP_NAME:$IMAGE_TAG"' ERR
    fi
    
    # 执行部署步骤
    pre_deployment_checks
    backup_current_deployment
    
    case "$DEPLOYMENT_STRATEGY" in
        "rolling")
            rolling_deployment
            ;;
        "blue-green")
            blue_green_deployment
            ;;
        "canary")
            canary_deployment
            ;;
        *)
            error "Unknown deployment strategy: $DEPLOYMENT_STRATEGY"
            ;;
    esac
    
    health_check
    smoke_tests
    cleanup
    
    send_notification "success" "Deployment successful: $APP_NAME:$IMAGE_TAG"
    log "Deployment completed successfully!"
}

# 执行主函数
main "$@"
```

## 监控和告警

### 1. Prometheus监控配置

```yaml
# prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  - "alert_rules.yml"

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          - alertmanager:9093

scrape_configs:
  # Jenkins监控
  - job_name: 'jenkins'
    static_configs:
      - targets: ['jenkins:8080']
    metrics_path: '/prometheus'
    scrape_interval: 30s
  
  # 应用监控
  - job_name: 'app'
    kubernetes_sd_configs:
      - role: pod
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        action: keep
        regex: true
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_path]
        action: replace
        target_label: __metrics_path__
        regex: (.+)
  
  # Kubernetes集群监控
  - job_name: 'kubernetes-apiservers'
    kubernetes_sd_configs:
      - role: endpoints
    scheme: https
    tls_config:
      ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
    bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
    relabel_configs:
      - source_labels: [__meta_kubernetes_namespace, __meta_kubernetes_service_name, __meta_kubernetes_endpoint_port_name]
        action: keep
        regex: default;kubernetes;https
  
  # Node Exporter
  - job_name: 'node-exporter'
    kubernetes_sd_configs:
      - role: endpoints
    relabel_configs:
      - source_labels: [__meta_kubernetes_endpoints_name]
        regex: 'node-exporter'
        action: keep
```

### 2. 告警规则

```yaml
# alert_rules.yml
groups:
- name: ci-cd-alerts
  rules:
  # Jenkins构建失败
  - alert: JenkinsBuildFailure
    expr: increase(jenkins_builds_failed_total[5m]) > 0
    for: 0m
    labels:
      severity: warning
      team: devops
    annotations:
      summary: "Jenkins build failed"
      description: "Jenkins job {{ $labels.job_name }} has failed"
  
  # 部署频率异常
  - alert: LowDeploymentFrequency
    expr: increase(deployments_total[24h]) < 1
    for: 0m
    labels:
      severity: info
      team: devops
    annotations:
      summary: "Low deployment frequency"
      description: "No deployments in the last 24 hours"
  
  # 部署失败率高
  - alert: HighDeploymentFailureRate
    expr: |
      (
        increase(deployments_failed_total[1h]) /
        increase(deployments_total[1h])
      ) > 0.2
    for: 5m
    labels:
      severity: critical
      team: devops
    annotations:
      summary: "High deployment failure rate"
      description: "Deployment failure rate is {{ $value | humanizePercentage }} over the last hour"

- name: application-alerts
  rules:
  # 应用错误率高
  - alert: HighErrorRate
    expr: |
      (
        sum(rate(http_requests_total{status=~"5.."}[5m])) by (service) /
        sum(rate(http_requests_total[5m])) by (service)
      ) > 0.05
    for: 5m
    labels:
      severity: critical
      team: backend
    annotations:
      summary: "High error rate detected"
      description: "Service {{ $labels.service }} has error rate of {{ $value | humanizePercentage }}"
  
  # 响应时间过长
  - alert: HighResponseTime
    expr: |
      histogram_quantile(0.95,
        sum(rate(http_request_duration_seconds_bucket[5m])) by (le, service)
      ) > 1
    for: 5m
    labels:
      severity: warning
      team: backend
    annotations:
      summary: "High response time detected"
      description: "Service {{ $labels.service }} 95th percentile response time is {{ $value }}s"
  
  # 内存使用率高
  - alert: HighMemoryUsage
    expr: |
      (
        container_memory_working_set_bytes{container!=""} /
        container_spec_memory_limit_bytes{container!=""}
      ) > 0.9
    for: 5m
    labels:
      severity: warning
      team: platform
    annotations:
      summary: "High memory usage"
      description: "Container {{ $labels.container }} memory usage is {{ $value | humanizePercentage }}"

- name: infrastructure-alerts
  rules:
  # 节点不可用
  - alert: NodeDown
    expr: up{job="node-exporter"} == 0
    for: 5m
    labels:
      severity: critical
      team: platform
    annotations:
      summary: "Node is down"
      description: "Node {{ $labels.instance }} has been down for more than 5 minutes"
  
  # 磁盘空间不足
  - alert: DiskSpaceLow
    expr: |
      (
        node_filesystem_avail_bytes{mountpoint="/"} /
        node_filesystem_size_bytes{mountpoint="/"}
      ) < 0.1
    for: 5m
    labels:
      severity: warning
      team: platform
    annotations:
      summary: "Low disk space"
      description: "Node {{ $labels.instance }} has less than 10% disk space remaining"
```

### 3. Grafana仪表板

```json
{
  "dashboard": {
    "id": null,
    "title": "CI/CD Pipeline Dashboard",
    "tags": ["cicd", "devops"],
    "timezone": "browser",
    "panels": [
      {
        "id": 1,
        "title": "Build Success Rate",
        "type": "stat",
        "targets": [
          {
            "expr": "(sum(increase(jenkins_builds_success_total[24h])) / sum(increase(jenkins_builds_total[24h]))) * 100",
            "legendFormat": "Success Rate"
          }
        ],
        "fieldConfig": {
          "defaults": {
            "unit": "percent",
            "min": 0,
            "max": 100,
            "thresholds": {
              "steps": [
                {"color": "red", "value": 0},
                {"color": "yellow", "value": 80},
                {"color": "green", "value": 95}
              ]
            }
          }
        }
      },
      {
        "id": 2,
        "title": "Deployment Frequency",
        "type": "graph",
        "targets": [
          {
            "expr": "increase(deployments_total[1h])",
            "legendFormat": "Deployments per hour"
          }
        ],
        "yAxes": [
          {
            "label": "Count",
            "min": 0
          }
        ]
      },
      {
        "id": 3,
        "title": "Lead Time",
        "type": "graph",
        "targets": [
          {
            "expr": "histogram_quantile(0.5, sum(rate(deployment_lead_time_seconds_bucket[5m])) by (le))",
            "legendFormat": "Median Lead Time"
          },
          {
            "expr": "histogram_quantile(0.95, sum(rate(deployment_lead_time_seconds_bucket[5m])) by (le))",
            "legendFormat": "95th Percentile Lead Time"
          }
        ],
        "yAxes": [
          {
            "label": "Time (seconds)",
            "min": 0
          }
        ]
      },
      {
        "id": 4,
        "title": "Mean Time to Recovery",
        "type": "stat",
        "targets": [
          {
            "expr": "avg(recovery_time_seconds)",
            "legendFormat": "MTTR"
          }
        ],
        "fieldConfig": {
          "defaults": {
            "unit": "s",
            "thresholds": {
              "steps": [
                {"color": "green", "value": 0},
                {"color": "yellow", "value": 300},
                {"color": "red", "value": 1800}
              ]
            }
          }
        }
      }
    ],
    "time": {
      "from": "now-24h",
      "to": "now"
    },
    "refresh": "30s"
  }
}
```

## 总结

CI/CD流水线是现代软件开发的基础设施，通过自动化和标准化提升开发效率：

### 关键成功因素

1. **流水线设计**：清晰的阶段划分、并行执行、快速反馈
2. **测试策略**：完整的测试金字塔、自动化测试、质量门禁
3. **部署策略**：渐进式部署、自动回滚、零停机部署
4. **监控告警**：全面监控、智能告警、可观测性
5. **安全集成**：安全扫描、合规检查、秘密管理

### 最佳实践

- **快速反馈**：构建时间控制在10分钟内
- **失败快速**：尽早发现问题，快速失败
- **环境一致性**：开发、测试、生产环境保持一致
- **版本控制**：所有配置和脚本都应版本化
- **文档化**：流程文档化，便于团队协作

通过持续改进CI/CD流水线，可以显著提升软件交付的速度、质量和可靠性。