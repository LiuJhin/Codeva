---
title: 'Three.js 光照与阴影系统'
description: '深入学习Three.js中的光照模型和阴影渲染技术，创建逼真的3D场景'
date: '2024-02-25'
tags: ['threejs', 'lighting', 'shadows', '3d', 'webgl']
author: 'CodeVa Team'
category: 'frontend'
subcategory: 'threejs'
---

# Three.js 光照与阴影系统

光照和阴影是创建逼真3D场景的关键要素。Three.js提供了多种光源类型和阴影渲染技术。

## 光照基础

### 光照模型

Three.js使用基于物理的光照模型，主要包括：

- **环境光 (Ambient Light)**：均匀照亮所有物体
- **方向光 (Directional Light)**：平行光线，如太阳光
- **点光源 (Point Light)**：从一点向四周发射光线
- **聚光灯 (Spot Light)**：锥形光束
- **半球光 (Hemisphere Light)**：天空和地面的渐变光照
- **区域光 (RectArea Light)**：矩形区域光源

### 基础光照设置

```javascript
import * as THREE from 'three'

// 创建场景
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
document.body.appendChild(renderer.domElement)

// 环境光 - 提供基础照明
const ambientLight = new THREE.AmbientLight(0x404040, 0.3)
scene.add(ambientLight)

// 方向光 - 主要光源
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(10, 10, 5)
directionalLight.castShadow = true
scene.add(directionalLight)

// 创建一个简单的场景
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
cube.castShadow = true
scene.add(cube)

// 地面
const planeGeometry = new THREE.PlaneGeometry(20, 20)
const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xcccccc })
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.rotation.x = -Math.PI / 2
plane.position.y = -1
plane.receiveShadow = true
scene.add(plane)

camera.position.z = 5

function animate() {
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}

animate()
```

## 光源类型详解

### 环境光 (AmbientLight)

环境光均匀地照亮场景中的所有物体，没有方向性：

```javascript
// 基础环境光
const ambientLight = new THREE.AmbientLight(0x404040, 0.4)
scene.add(ambientLight)

// 动态环境光
function updateAmbientLight(time) {
  const intensity = 0.2 + 0.3 * Math.sin(time * 0.001)
  ambientLight.intensity = intensity
}
```

### 方向光 (DirectionalLight)

方向光模拟远距离光源，如太阳：

```javascript
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(10, 10, 5)
directionalLight.target.position.set(0, 0, 0)

// 阴影配置
directionalLight.castShadow = true
directionalLight.shadow.mapSize.width = 2048
directionalLight.shadow.mapSize.height = 2048
directionalLight.shadow.camera.near = 0.5
directionalLight.shadow.camera.far = 50
directionalLight.shadow.camera.left = -10
directionalLight.shadow.camera.right = 10
directionalLight.shadow.camera.top = 10
directionalLight.shadow.camera.bottom = -10

scene.add(directionalLight)
scene.add(directionalLight.target)

// 光源辅助器
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5)
scene.add(directionalLightHelper)

// 阴影相机辅助器
const shadowCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera)
scene.add(shadowCameraHelper)
```

### 点光源 (PointLight)

点光源从一个点向四周发射光线：

```javascript
const pointLight = new THREE.PointLight(0xff0000, 1, 100)
pointLight.position.set(10, 10, 10)
pointLight.castShadow = true

// 阴影配置
pointLight.shadow.mapSize.width = 1024
pointLight.shadow.mapSize.height = 1024
pointLight.shadow.camera.near = 0.1
pointLight.shadow.camera.far = 25

scene.add(pointLight)

// 点光源辅助器
const pointLightHelper = new THREE.PointLightHelper(pointLight, 1)
scene.add(pointLightHelper)

// 动态点光源
function animatePointLight(time) {
  pointLight.position.x = Math.sin(time * 0.001) * 10
  pointLight.position.z = Math.cos(time * 0.001) * 10
  pointLight.intensity = 0.5 + 0.5 * Math.sin(time * 0.002)
}
```

### 聚光灯 (SpotLight)

聚光灯产生锥形光束：

```javascript
const spotLight = new THREE.SpotLight(0xffffff, 1, 100, Math.PI / 4, 0.5)
spotLight.position.set(15, 20, 5)
spotLight.target.position.set(0, 0, 0)
spotLight.castShadow = true

// 阴影配置
spotLight.shadow.mapSize.width = 1024
spotLight.shadow.mapSize.height = 1024
spotLight.shadow.camera.near = 0.5
spotLight.shadow.camera.far = 50
spotLight.shadow.camera.fov = 30

scene.add(spotLight)
scene.add(spotLight.target)

// 聚光灯辅助器
const spotLightHelper = new THREE.SpotLightHelper(spotLight)
scene.add(spotLightHelper)

// 动态聚光灯
function animateSpotLight(time) {
  spotLight.angle = Math.PI / 6 + Math.sin(time * 0.001) * Math.PI / 12
  spotLight.penumbra = 0.2 + 0.3 * Math.sin(time * 0.002)
}
```

### 半球光 (HemisphereLight)

半球光模拟天空和地面的渐变光照：

```javascript
const hemisphereLight = new THREE.HemisphereLight(0x87CEEB, 0x8B4513, 0.6)
hemisphereLight.position.set(0, 20, 0)
scene.add(hemisphereLight)

// 半球光辅助器
const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight, 5)
scene.add(hemisphereLightHelper)
```

### 区域光 (RectAreaLight)

区域光模拟矩形光源，如窗户或显示器：

```javascript
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js'
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js'

// 初始化区域光
RectAreaLightUniformsLib.init()

const rectAreaLight = new THREE.RectAreaLight(0xffffff, 2, 10, 10)
rectAreaLight.position.set(5, 5, 0)
rectAreaLight.lookAt(0, 0, 0)
scene.add(rectAreaLight)

// 区域光辅助器
const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight)
scene.add(rectAreaLightHelper)
```

## 阴影系统

### 阴影基础配置

```javascript
// 启用阴影
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap // 软阴影

// 其他阴影类型
// renderer.shadowMap.type = THREE.BasicShadowMap     // 基础阴影
// renderer.shadowMap.type = THREE.PCFShadowMap       // PCF阴影
// renderer.shadowMap.type = THREE.VSMShadowMap       // VSM阴影

// 物体阴影设置
const cube = new THREE.Mesh(geometry, material)
cube.castShadow = true    // 投射阴影
cube.receiveShadow = true // 接收阴影
scene.add(cube)
```

### 阴影质量优化

```javascript
class ShadowManager {
  constructor(renderer) {
    this.renderer = renderer
    this.setupShadows()
  }
  
  setupShadows() {
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.shadowMap.autoUpdate = false // 手动更新以提高性能
  }
  
  configureLightShadow(light, mapSize = 2048, near = 0.1, far = 100) {
    light.castShadow = true
    light.shadow.mapSize.width = mapSize
    light.shadow.mapSize.height = mapSize
    light.shadow.camera.near = near
    light.shadow.camera.far = far
    
    // 减少阴影痤疮
    light.shadow.bias = -0.0001
    light.shadow.normalBias = 0.02
    
    return light
  }
  
  updateShadows() {
    this.renderer.shadowMap.needsUpdate = true
  }
  
  // 动态阴影质量调整
  setShadowQuality(quality) {
    const qualities = {
      low: { mapSize: 512, type: THREE.BasicShadowMap },
      medium: { mapSize: 1024, type: THREE.PCFShadowMap },
      high: { mapSize: 2048, type: THREE.PCFSoftShadowMap },
      ultra: { mapSize: 4096, type: THREE.PCFSoftShadowMap }
    }
    
    const config = qualities[quality] || qualities.medium
    this.renderer.shadowMap.type = config.type
    
    // 更新所有光源的阴影贴图大小
    this.updateAllLightShadowMaps(config.mapSize)
  }
  
  updateAllLightShadowMaps(mapSize) {
    // 遍历场景中的所有光源并更新阴影贴图大小
    // 这需要根据具体的光源管理方式来实现
  }
}
```

## 高级光照技术

### 动态光照系统

```javascript
class DynamicLightingSystem {
  constructor(scene) {
    this.scene = scene
    this.lights = []
    this.timeOfDay = 0 // 0-24小时
    this.setupLights()
  }
  
  setupLights() {
    // 太阳光（方向光）
    this.sunLight = new THREE.DirectionalLight(0xffffff, 1)
    this.sunLight.castShadow = true
    this.configureSunShadow()
    this.scene.add(this.sunLight)
    
    // 月光
    this.moonLight = new THREE.DirectionalLight(0x4169E1, 0.2)
    this.moonLight.castShadow = true
    this.scene.add(this.moonLight)
    
    // 环境光
    this.ambientLight = new THREE.AmbientLight(0x404040, 0.1)
    this.scene.add(this.ambientLight)
    
    // 天空盒
    this.setupSkybox()
  }
  
  configureSunShadow() {
    this.sunLight.shadow.mapSize.width = 2048
    this.sunLight.shadow.mapSize.height = 2048
    this.sunLight.shadow.camera.near = 0.5
    this.sunLight.shadow.camera.far = 100
    this.sunLight.shadow.camera.left = -20
    this.sunLight.shadow.camera.right = 20
    this.sunLight.shadow.camera.top = 20
    this.sunLight.shadow.camera.bottom = -20
  }
  
  setupSkybox() {
    const skyGeometry = new THREE.SphereGeometry(500, 32, 32)
    const skyMaterial = new THREE.MeshBasicMaterial({
      color: 0x87CEEB,
      side: THREE.BackSide
    })
    this.skybox = new THREE.Mesh(skyGeometry, skyMaterial)
    this.scene.add(this.skybox)
  }
  
  updateTimeOfDay(time) {
    this.timeOfDay = time % 24
    
    // 太阳位置
    const sunAngle = (this.timeOfDay - 6) * Math.PI / 12 // 6点为日出
    this.sunLight.position.set(
      Math.cos(sunAngle) * 50,
      Math.sin(sunAngle) * 50,
      0
    )
    
    // 光照强度
    const sunIntensity = Math.max(0, Math.sin(sunAngle))
    this.sunLight.intensity = sunIntensity
    
    // 月光（与太阳相对）
    this.moonLight.position.set(
      -Math.cos(sunAngle) * 50,
      -Math.sin(sunAngle) * 50,
      0
    )
    this.moonLight.intensity = Math.max(0, -Math.sin(sunAngle)) * 0.3
    
    // 环境光强度
    this.ambientLight.intensity = 0.1 + sunIntensity * 0.2
    
    // 天空颜色
    this.updateSkyColor(sunAngle)
  }
  
  updateSkyColor(sunAngle) {
    const dayColor = new THREE.Color(0x87CEEB)   // 天蓝色
    const sunsetColor = new THREE.Color(0xFF6347) // 橙红色
    const nightColor = new THREE.Color(0x191970)  // 深蓝色
    
    let skyColor
    if (sunAngle > 0) {
      // 白天
      if (sunAngle < Math.PI / 6) {
        // 日出/日落
        skyColor = dayColor.clone().lerp(sunsetColor, 1 - sunAngle / (Math.PI / 6))
      } else {
        skyColor = dayColor
      }
    } else {
      // 夜晚
      skyColor = nightColor
    }
    
    this.skybox.material.color = skyColor
  }
  
  addDynamicLight(type, options) {
    let light
    
    switch (type) {
      case 'point':
        light = new THREE.PointLight(options.color, options.intensity, options.distance)
        break
      case 'spot':
        light = new THREE.SpotLight(options.color, options.intensity, options.distance, options.angle)
        break
      default:
        return
    }
    
    light.position.copy(options.position)
    if (options.castShadow) {
      light.castShadow = true
      this.configureLightShadow(light)
    }
    
    this.lights.push(light)
    this.scene.add(light)
    
    return light
  }
  
  configureLightShadow(light) {
    light.shadow.mapSize.width = 1024
    light.shadow.mapSize.height = 1024
    light.shadow.camera.near = 0.1
    light.shadow.camera.far = 25
  }
}

// 使用示例
const lightingSystem = new DynamicLightingSystem(scene)

// 动画循环
function animate() {
  const time = Date.now() * 0.001
  
  // 更新时间（24小时循环）
  const timeOfDay = (time * 0.1) % 24
  lightingSystem.updateTimeOfDay(timeOfDay)
  
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
```

### 体积光效果

```javascript
class VolumetricLighting {
  constructor(scene, renderer) {
    this.scene = scene
    this.renderer = renderer
    this.setupVolumetricLight()
  }
  
  setupVolumetricLight() {
    // 创建体积光几何体
    const coneGeometry = new THREE.ConeGeometry(5, 10, 8, 1, true)
    
    // 体积光材质
    const volumetricMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        lightPosition: { value: new THREE.Vector3(0, 10, 0) },
        lightColor: { value: new THREE.Color(0xffffff) },
        density: { value: 0.1 }
      },
      vertexShader: `
        varying vec3 vPosition;
        varying vec3 vNormal;
        
        void main() {
          vPosition = position;
          vNormal = normal;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 lightPosition;
        uniform vec3 lightColor;
        uniform float density;
        
        varying vec3 vPosition;
        varying vec3 vNormal;
        
        void main() {
          float distance = length(vPosition - lightPosition);
          float attenuation = 1.0 / (1.0 + distance * 0.1);
          
          // 添加噪声效果
          float noise = sin(vPosition.x * 10.0 + time) * sin(vPosition.y * 10.0 + time) * 0.1;
          float alpha = (density + noise) * attenuation;
          
          gl_FragColor = vec4(lightColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    })
    
    this.volumetricMesh = new THREE.Mesh(coneGeometry, volumetricMaterial)
    this.volumetricMesh.position.set(0, 5, 0)
    this.scene.add(this.volumetricMesh)
  }
  
  update(time) {
    this.volumetricMesh.material.uniforms.time.value = time
  }
}
```

## 性能优化

### 光照性能优化策略

```javascript
class LightingOptimizer {
  constructor(scene, renderer) {
    this.scene = scene
    this.renderer = renderer
    this.activeLights = []
    this.lightPool = []
    this.maxLights = 8 // WebGL限制
  }
  
  // 光源池管理
  createLightPool(count) {
    for (let i = 0; i < count; i++) {
      const light = new THREE.PointLight(0xffffff, 0, 0)
      light.visible = false
      this.lightPool.push(light)
      this.scene.add(light)
    }
  }
  
  // 获取可用光源
  getAvailableLight() {
    for (const light of this.lightPool) {
      if (!light.visible) {
        return light
      }
    }
    return null
  }
  
  // 激活光源
  activateLight(position, color, intensity, distance) {
    const light = this.getAvailableLight()
    if (light && this.activeLights.length < this.maxLights) {
      light.position.copy(position)
      light.color.set(color)
      light.intensity = intensity
      light.distance = distance
      light.visible = true
      this.activeLights.push(light)
      return light
    }
    return null
  }
  
  // 停用光源
  deactivateLight(light) {
    light.visible = false
    light.intensity = 0
    const index = this.activeLights.indexOf(light)
    if (index > -1) {
      this.activeLights.splice(index, 1)
    }
  }
  
  // 距离剔除
  cullLightsByDistance(cameraPosition, maxDistance) {
    for (let i = this.activeLights.length - 1; i >= 0; i--) {
      const light = this.activeLights[i]
      const distance = light.position.distanceTo(cameraPosition)
      
      if (distance > maxDistance) {
        this.deactivateLight(light)
      }
    }
  }
  
  // 动态阴影质量
  adjustShadowQuality(cameraPosition) {
    for (const light of this.activeLights) {
      if (light.castShadow) {
        const distance = light.position.distanceTo(cameraPosition)
        
        if (distance < 10) {
          light.shadow.mapSize.setScalar(2048)
        } else if (distance < 25) {
          light.shadow.mapSize.setScalar(1024)
        } else {
          light.shadow.mapSize.setScalar(512)
        }
        
        light.shadow.needsUpdate = true
      }
    }
  }
}
```

## 实际应用示例

### 室内场景光照

```javascript
class InteriorLighting {
  constructor(scene) {
    this.scene = scene
    this.setupInteriorLights()
  }
  
  setupInteriorLights() {
    // 主要环境光
    const ambientLight = new THREE.AmbientLight(0x404040, 0.2)
    this.scene.add(ambientLight)
    
    // 窗户光（区域光）
    const windowLight = new THREE.RectAreaLight(0xffffff, 2, 4, 6)
    windowLight.position.set(-5, 3, 0)
    windowLight.lookAt(0, 0, 0)
    this.scene.add(windowLight)
    
    // 吊灯（点光源）
    const ceilingLight = new THREE.PointLight(0xfff8dc, 1, 15)
    ceilingLight.position.set(0, 4, 0)
    ceilingLight.castShadow = true
    this.scene.add(ceilingLight)
    
    // 台灯（聚光灯）
    const deskLamp = new THREE.SpotLight(0xffffff, 0.8, 10, Math.PI / 6, 0.3)
    deskLamp.position.set(3, 2, 2)
    deskLamp.target.position.set(3, 0, 2)
    deskLamp.castShadow = true
    this.scene.add(deskLamp)
    this.scene.add(deskLamp.target)
  }
}
```

### 户外场景光照

```javascript
class OutdoorLighting {
  constructor(scene) {
    this.scene = scene
    this.setupOutdoorLights()
  }
  
  setupOutdoorLights() {
    // 太阳光
    const sunLight = new THREE.DirectionalLight(0xffffff, 1)
    sunLight.position.set(50, 50, 25)
    sunLight.castShadow = true
    sunLight.shadow.mapSize.width = 4096
    sunLight.shadow.mapSize.height = 4096
    sunLight.shadow.camera.near = 0.5
    sunLight.shadow.camera.far = 200
    sunLight.shadow.camera.left = -50
    sunLight.shadow.camera.right = 50
    sunLight.shadow.camera.top = 50
    sunLight.shadow.camera.bottom = -50
    this.scene.add(sunLight)
    
    // 天空光
    const skyLight = new THREE.HemisphereLight(0x87CEEB, 0x8B4513, 0.3)
    this.scene.add(skyLight)
    
    // 街灯
    this.addStreetLights()
  }
  
  addStreetLights() {
    const streetLightPositions = [
      new THREE.Vector3(-10, 5, -10),
      new THREE.Vector3(10, 5, -10),
      new THREE.Vector3(-10, 5, 10),
      new THREE.Vector3(10, 5, 10)
    ]
    
    streetLightPositions.forEach(position => {
      const streetLight = new THREE.PointLight(0xffa500, 0.5, 20)
      streetLight.position.copy(position)
      streetLight.castShadow = true
      this.scene.add(streetLight)
    })
  }
}
```

## 总结

Three.js的光照和阴影系统提供了创建逼真3D场景的强大工具：

1. **多种光源类型**：满足不同场景需求
2. **阴影系统**：增加场景的真实感
3. **性能优化**：确保流畅的渲染体验
4. **动态光照**：创建生动的视觉效果

掌握这些技术能让你创建出专业级的3D可视化应用。记住要根据项目需求平衡视觉质量和性能表现。