---
title: 'Three.js 入门指南'
description: '学习Three.js的基础知识，从零开始创建3D场景'
date: '2024-01-15'
tags: ['threejs', '3d', 'webgl', '前端']
author: 'CodeVa Team'
category: 'frontend'
subcategory: 'threejs'
---

# Three.js 入门指南

Three.js 是一个强大的JavaScript 3D库，让我们能够在浏览器中创建令人惊叹的3D体验。

## 什么是Three.js？

Three.js 是一个跨浏览器的JavaScript库，用于在网页浏览器中创建和显示动画的3D计算机图形。它使用WebGL技术，让开发者能够轻松地在网页中创建3D场景。

## 核心概念

### 1. 场景 (Scene)
场景是所有3D对象的容器，就像一个舞台。

```javascript
const scene = new THREE.Scene();
```

### 2. 相机 (Camera)
相机定义了我们观察3D世界的视角。

```javascript
const camera = new THREE.PerspectiveCamera(
  75, // 视野角度
  window.innerWidth / window.innerHeight, // 宽高比
  0.1, // 近裁剪面
  1000 // 远裁剪面
);
```

### 3. 渲染器 (Renderer)
渲染器负责将3D场景渲染到2D屏幕上。

```javascript
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```

## 创建第一个3D场景

让我们创建一个简单的旋转立方体：

```javascript
// 创建几何体
const geometry = new THREE.BoxGeometry();

// 创建材质
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// 创建网格
const cube = new THREE.Mesh(geometry, material);

// 添加到场景
scene.add(cube);

// 设置相机位置
camera.position.z = 5;

// 渲染循环
function animate() {
  requestAnimationFrame(animate);
  
  // 旋转立方体
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  
  // 渲染场景
  renderer.render(scene, camera);
}

animate();
```

## 下一步

- 学习更多几何体类型
- 探索不同的材质和光照
- 添加交互功能
- 优化性能

继续关注我们的Three.js系列教程！