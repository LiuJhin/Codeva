---
title: 'Node.js Express 框架完全指南'
description: '深入学习Express.js框架，掌握现代Node.js后端开发的核心技能'
date: '2024-02-28'
tags: ['nodejs', 'express', 'backend', 'javascript', 'api']
author: 'CodeVa Team'
category: 'backend'
subcategory: 'nodejs'
---

# Node.js Express 框架完全指南

Express.js是Node.js最流行的Web应用框架，提供了构建Web应用和API的强大工具集。

## Express 基础

### 安装和初始化

```bash
# 创建新项目
mkdir my-express-app
cd my-express-app
npm init -y

# 安装Express
npm install express

# 安装开发依赖
npm install --save-dev nodemon
```

### 基础服务器设置

```javascript
// app.js
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

// 基础中间件
app.use(express.json()) // 解析JSON请求体
app.use(express.urlencoded({ extended: true })) // 解析URL编码请求体

// 基础路由
app.get('/', (req, res) => {
  res.json({ message: 'Hello Express!' })
})

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

module.exports = app
```

### package.json 脚本配置

```json
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "jest"
  }
}
```

## 路由系统

### 基础路由

```javascript
// routes/users.js
const express = require('express')
const router = express.Router()

// GET /users
router.get('/', (req, res) => {
  res.json({ users: [] })
})

// GET /users/:id
router.get('/:id', (req, res) => {
  const { id } = req.params
  res.json({ user: { id, name: 'John Doe' } })
})

// POST /users
router.post('/', (req, res) => {
  const { name, email } = req.body
  
  // 验证输入
  if (!name || !email) {
    return res.status(400).json({ 
      error: 'Name and email are required' 
    })
  }
  
  // 创建用户逻辑
  const newUser = { id: Date.now(), name, email }
  res.status(201).json({ user: newUser })
})

// PUT /users/:id
router.put('/:id', (req, res) => {
  const { id } = req.params
  const { name, email } = req.body
  
  // 更新用户逻辑
  const updatedUser = { id, name, email }
  res.json({ user: updatedUser })
})

// DELETE /users/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params
  
  // 删除用户逻辑
  res.status(204).send()
})

module.exports = router
```

### 路由参数和查询

```javascript
// 路由参数
app.get('/users/:id/posts/:postId', (req, res) => {
  const { id, postId } = req.params
  res.json({ userId: id, postId })
})

// 查询参数
app.get('/search', (req, res) => {
  const { q, page = 1, limit = 10 } = req.query
  
  res.json({
    query: q,
    page: parseInt(page),
    limit: parseInt(limit),
    results: []
  })
})

// 通配符路由
app.get('/files/*', (req, res) => {
  const filePath = req.params[0]
  res.json({ filePath })
})

// 正则表达式路由
app.get(/.*fly$/, (req, res) => {
  res.send('Ends with "fly"')
})
```

### 路由模块化

```javascript
// app.js
const express = require('express')
const userRoutes = require('./routes/users')
const postRoutes = require('./routes/posts')
const authRoutes = require('./routes/auth')

const app = express()

// 中间件
app.use(express.json())

// 路由
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/auth', authRoutes)

// 404处理
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

module.exports = app
```

## 中间件

### 内置中间件

```javascript
const express = require('express')
const path = require('path')
const app = express()

// JSON解析
app.use(express.json({ limit: '10mb' }))

// URL编码解析
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// 静态文件服务
app.use('/static', express.static(path.join(__dirname, 'public')))

// 多个静态目录
app.use('/uploads', express.static('uploads'))
app.use('/assets', express.static('assets'))
```

### 第三方中间件

```javascript
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
const rateLimit = require('express-rate-limit')

// 安全头
app.use(helmet())

// CORS配置
app.use(cors({
  origin: ['http://localhost:3000', 'https://myapp.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

// 日志记录
app.use(morgan('combined'))

// 压缩响应
app.use(compression())

// 速率限制
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15分钟
  max: 100, // 最多100个请求
  message: 'Too many requests from this IP'
})
app.use('/api/', limiter)
```

### 自定义中间件

```javascript
// 日志中间件
const logger = (req, res, next) => {
  const timestamp = new Date().toISOString()
  console.log(`${timestamp} - ${req.method} ${req.url}`)
  next()
}

// 认证中间件
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' })
  }
  
  try {
    // 验证token逻辑
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' })
  }
}

// 权限检查中间件
const authorize = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Not authenticated' })
    }
    
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' })
    }
    
    next()
  }
}

// 验证中间件
const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body)
    if (error) {
      return res.status(400).json({ 
        error: error.details[0].message 
      })
    }
    next()
  }
}

// 使用中间件
app.use(logger)
app.use('/api/protected', authenticate)
app.use('/api/admin', authenticate, authorize(['admin']))
```

## 错误处理

### 全局错误处理

```javascript
// 错误处理中间件
const errorHandler = (err, req, res, next) => {
  console.error(err.stack)
  
  // 默认错误
  let error = {
    message: err.message || 'Internal Server Error',
    status: err.status || 500
  }
  
  // 特定错误类型处理
  if (err.name === 'ValidationError') {
    error.status = 400
    error.message = Object.values(err.errors).map(e => e.message).join(', ')
  }
  
  if (err.name === 'CastError') {
    error.status = 400
    error.message = 'Invalid ID format'
  }
  
  if (err.code === 11000) {
    error.status = 400
    error.message = 'Duplicate field value'
  }
  
  // 开发环境显示详细错误
  if (process.env.NODE_ENV === 'development') {
    error.stack = err.stack
  }
  
  res.status(error.status).json({ error })
}

// 404处理
const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`)
  error.status = 404
  next(error)
}

// 异步错误处理包装器
const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }
}

// 使用
app.use(notFound)
app.use(errorHandler)

// 在路由中使用asyncHandler
app.get('/users/:id', asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  if (!user) {
    const error = new Error('User not found')
    error.status = 404
    throw error
  }
  res.json({ user })
}))
```

### 自定义错误类

```javascript
class AppError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'
    this.isOperational = true
    
    Error.captureStackTrace(this, this.constructor)
  }
}

class ValidationError extends AppError {
  constructor(message) {
    super(message, 400)
  }
}

class NotFoundError extends AppError {
  constructor(message = 'Resource not found') {
    super(message, 404)
  }
}

class UnauthorizedError extends AppError {
  constructor(message = 'Unauthorized') {
    super(message, 401)
  }
}

module.exports = {
  AppError,
  ValidationError,
  NotFoundError,
  UnauthorizedError
}
```

## 数据库集成

### MongoDB with Mongoose

```javascript
const mongoose = require('mongoose')

// 连接数据库
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

// 用户模型
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
    select: false // 默认不返回密码
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

// 密码加密中间件
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next()
  
  const bcrypt = require('bcryptjs')
  this.password = await bcrypt.hash(this.password, 12)
  next()
})

// 实例方法
userSchema.methods.comparePassword = async function(candidatePassword) {
  const bcrypt = require('bcryptjs')
  return await bcrypt.compare(candidatePassword, this.password)
}

const User = mongoose.model('User', userSchema)

// 用户控制器
const userController = {
  // 获取所有用户
  getUsers: asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, search } = req.query
    
    const query = search ? {
      $or: [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ]
    } : {}
    
    const users = await User.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 })
    
    const total = await User.countDocuments(query)
    
    res.json({
      users,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    })
  }),
  
  // 获取单个用户
  getUser: asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) {
      throw new NotFoundError('User not found')
    }
    res.json({ user })
  }),
  
  // 创建用户
  createUser: asyncHandler(async (req, res) => {
    const user = await User.create(req.body)
    res.status(201).json({ user })
  }),
  
  // 更新用户
  updateUser: asyncHandler(async (req, res) => {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    
    if (!user) {
      throw new NotFoundError('User not found')
    }
    
    res.json({ user })
  }),
  
  // 删除用户
  deleteUser: asyncHandler(async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) {
      throw new NotFoundError('User not found')
    }
    res.status(204).send()
  })
}

module.exports = { connectDB, User, userController }
```

## 身份验证和授权

### JWT认证

```javascript
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// JWT工具函数
const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '7d'
  })
}

const generateRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: '30d'
  })
}

// 认证控制器
const authController = {
  // 注册
  register: asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    
    // 检查用户是否已存在
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      throw new ValidationError('User already exists')
    }
    
    // 创建用户
    const user = await User.create({ name, email, password })
    
    // 生成token
    const token = generateToken({ id: user._id })
    const refreshToken = generateRefreshToken({ id: user._id })
    
    // 设置cookie
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000 // 30天
    })
    
    res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token
    })
  }),
  
  // 登录
  login: asyncHandler(async (req, res) => {
    const { email, password } = req.body
    
    // 验证输入
    if (!email || !password) {
      throw new ValidationError('Please provide email and password')
    }
    
    // 查找用户并包含密码
    const user = await User.findOne({ email }).select('+password')
    if (!user || !(await user.comparePassword(password))) {
      throw new UnauthorizedError('Invalid credentials')
    }
    
    // 生成token
    const token = generateToken({ id: user._id })
    const refreshToken = generateRefreshToken({ id: user._id })
    
    // 设置cookie
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000
    })
    
    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token
    })
  }),
  
  // 刷新token
  refreshToken: asyncHandler(async (req, res) => {
    const { refreshToken } = req.cookies
    
    if (!refreshToken) {
      throw new UnauthorizedError('No refresh token provided')
    }
    
    try {
      const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET)
      const user = await User.findById(decoded.id)
      
      if (!user) {
        throw new UnauthorizedError('User not found')
      }
      
      const newToken = generateToken({ id: user._id })
      const newRefreshToken = generateRefreshToken({ id: user._id })
      
      res.cookie('refreshToken', newRefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000
      })
      
      res.json({ token: newToken })
    } catch (error) {
      throw new UnauthorizedError('Invalid refresh token')
    }
  }),
  
  // 登出
  logout: (req, res) => {
    res.clearCookie('refreshToken')
    res.json({ message: 'Logged out successfully' })
  },
  
  // 获取当前用户
  getMe: asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id)
    res.json({ user })
  })
}

module.exports = authController
```

## 文件上传

### Multer文件上传

```javascript
const multer = require('multer')
const path = require('path')
const fs = require('fs').promises

// 存储配置
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const uploadPath = 'uploads/'
    try {
      await fs.mkdir(uploadPath, { recursive: true })
      cb(null, uploadPath)
    } catch (error) {
      cb(error)
    }
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  }
})

// 文件过滤
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx/
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = allowedTypes.test(file.mimetype)
  
  if (mimetype && extname) {
    return cb(null, true)
  } else {
    cb(new Error('Invalid file type'))
  }
}

// Multer配置
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  },
  fileFilter: fileFilter
})

// 文件上传路由
app.post('/api/upload/single', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' })
  }
  
  res.json({
    message: 'File uploaded successfully',
    file: {
      filename: req.file.filename,
      originalname: req.file.originalname,
      size: req.file.size,
      path: req.file.path
    }
  })
})

// 多文件上传
app.post('/api/upload/multiple', upload.array('files', 5), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: 'No files uploaded' })
  }
  
  const files = req.files.map(file => ({
    filename: file.filename,
    originalname: file.originalname,
    size: file.size,
    path: file.path
  }))
  
  res.json({
    message: 'Files uploaded successfully',
    files
  })
})

// 文件下载
app.get('/api/download/:filename', (req, res) => {
  const filename = req.params.filename
  const filePath = path.join(__dirname, 'uploads', filename)
  
  res.download(filePath, (err) => {
    if (err) {
      res.status(404).json({ error: 'File not found' })
    }
  })
})
```

## API文档

### Swagger集成

```javascript
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

// Swagger配置
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API',
      version: '1.0.0',
      description: 'A simple Express API'
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Development server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: ['./routes/*.js'] // 路径到包含OpenAPI定义的文件
}

const specs = swaggerJsdoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

// 在路由文件中添加文档注释
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                 totalPages:
 *                   type: integer
 *                 currentPage:
 *                   type: integer
 *                 total:
 *                   type: integer
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The user name
 *         email:
 *           type: string
 *           description: The user email
 *         role:
 *           type: string
 *           enum: [user, admin]
 *           description: The user role
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the user was created
 */
```

## 测试

### Jest和Supertest

```javascript
// tests/setup.js
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')

let mongoServer

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create()
  const mongoUri = mongoServer.getUri()
  await mongoose.connect(mongoUri)
})

afterAll(async () => {
  await mongoose.disconnect()
  await mongoServer.stop()
})

afterEach(async () => {
  const collections = mongoose.connection.collections
  for (const key in collections) {
    const collection = collections[key]
    await collection.deleteMany({})
  }
})

// tests/users.test.js
const request = require('supertest')
const app = require('../app')
const User = require('../models/User')

describe('User API', () => {
  describe('GET /api/users', () => {
    it('should return empty array when no users exist', async () => {
      const res = await request(app)
        .get('/api/users')
        .expect(200)
      
      expect(res.body.users).toEqual([])
      expect(res.body.total).toBe(0)
    })
    
    it('should return users when they exist', async () => {
      // 创建测试用户
      await User.create({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123'
      })
      
      const res = await request(app)
        .get('/api/users')
        .expect(200)
      
      expect(res.body.users).toHaveLength(1)
      expect(res.body.users[0].name).toBe('John Doe')
    })
  })
  
  describe('POST /api/users', () => {
    it('should create a new user', async () => {
      const userData = {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: 'password123'
      }
      
      const res = await request(app)
        .post('/api/users')
        .send(userData)
        .expect(201)
      
      expect(res.body.user.name).toBe(userData.name)
      expect(res.body.user.email).toBe(userData.email)
      expect(res.body.user.password).toBeUndefined()
    })
    
    it('should return error for invalid data', async () => {
      const res = await request(app)
        .post('/api/users')
        .send({ name: 'John' }) // 缺少email和password
        .expect(400)
      
      expect(res.body.error).toBeDefined()
    })
  })
})
```

## 部署和生产优化

### 生产环境配置

```javascript
// config/production.js
module.exports = {
  // 安全配置
  helmet: {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'"],
        imgSrc: ["'self'", "data:", "https:"]
      }
    }
  },
  
  // CORS配置
  cors: {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || [],
    credentials: true
  },
  
  // 速率限制
  rateLimit: {
    windowMs: 15 * 60 * 1000,
    max: 100
  },
  
  // 数据库配置
  database: {
    uri: process.env.MONGODB_URI,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000
    }
  }
}

// 环境变量示例 (.env)
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb://localhost:27017/myapp
JWT_SECRET=your-super-secret-jwt-key
JWT_REFRESH_SECRET=your-refresh-secret
JWT_EXPIRE=7d
ALLOWED_ORIGINS=https://myapp.com,https://www.myapp.com
```

### PM2部署配置

```javascript
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'my-express-app',
    script: 'app.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
}
```

## 总结

Express.js提供了构建现代Web应用的完整工具集：

1. **灵活的路由系统**：支持各种路由模式
2. **强大的中间件**：处理各种横切关注点
3. **完善的错误处理**：优雅处理各种异常情况
4. **数据库集成**：轻松连接各种数据库
5. **安全特性**：内置多种安全防护
6. **测试支持**：完整的测试生态系统

掌握这些概念和模式，你就能构建出高质量、可维护的Node.js应用。