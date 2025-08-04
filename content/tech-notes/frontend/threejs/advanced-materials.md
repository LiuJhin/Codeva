---
title: 'Three.js 高级材质与光照'
description: '深入了解Three.js中的各种材质类型和光照系统'
date: '2024-01-20'
tags: ['threejs', '材质', '光照', 'webgl']
author: 'CodeVa Team'
category: 'frontend'
subcategory: 'threejs'
---

# Three.js 高级材质与光照

在Three.js中，材质和光照是创建逼真3D场景的关键要素。本文将深入探讨各种材质类型和光照技术。

## 材质类型

### 1. MeshBasicMaterial
最基础的材质，不受光照影响。

```javascript
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true
});
```

### 2. MeshLambertMaterial
漫反射材质，适合创建无光泽表面。

```javascript
const material = new THREE.MeshLambertMaterial({
  color: 0x00ff00
});
```

### 3. MeshPhongMaterial
支持镜面反射的材质。

```javascript
const material = new THREE.MeshPhongMaterial({
  color: 0x0000ff,
  shininess: 100,
  specular: 0x222222
});
```

### 4. MeshStandardMaterial
基于物理的渲染材质，最接近真实世界。

```javascript
const material = new THREE.MeshStandardMaterial({
  color: 0x888888,
  metalness: 0.5,
  roughness: 0.1
});
```

## 光照系统

### 环境光 (AmbientLight)
提供均匀的全局照明。

```javascript
const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);
```

### 方向光 (DirectionalLight)
模拟太阳光的平行光线。

```javascript
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);
```

### 点光源 (PointLight)
从一个点向四周发射光线。

```javascript
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);
```

### 聚光灯 (SpotLight)
锥形光束，类似手电筒。

```javascript
const spotLight = new THREE.SpotLight(0xffffff, 1);
spotLight.position.set(0, 10, 0);
spotLight.angle = Math.PI / 6;
scene.add(spotLight);
```

## 纹理贴图

### 基础纹理

```javascript
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('path/to/texture.jpg');

const material = new THREE.MeshStandardMaterial({
  map: texture
});
```

### 法线贴图

```javascript
const normalMap = textureLoader.load('path/to/normal.jpg');
material.normalMap = normalMap;
```

### 环境贴图

```javascript
const cubeTextureLoader = new THREE.CubeTextureLoader();
const envMap = cubeTextureLoader.load([
  'px.jpg', 'nx.jpg',
  'py.jpg', 'ny.jpg',
  'pz.jpg', 'nz.jpg'
]);

material.envMap = envMap;
```

## 实践示例

创建一个具有真实感的金属球：

```javascript
// 创建球体几何
const geometry = new THREE.SphereGeometry(1, 32, 32);

// 创建金属材质
const material = new THREE.MeshStandardMaterial({
  color: 0x888888,
  metalness: 0.9,
  roughness: 0.1
});

// 创建网格
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// 添加光照
const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 5, 5);

scene.add(ambientLight);
scene.add(directionalLight);
```

## 性能优化建议

1. **合理使用材质类型**：根据需求选择合适的材质
2. **光照数量控制**：避免过多的动态光源
3. **纹理优化**：使用合适的纹理尺寸和格式
4. **材质复用**：相同材质的对象共享材质实例

掌握材质和光照是创建高质量3D场景的基础！