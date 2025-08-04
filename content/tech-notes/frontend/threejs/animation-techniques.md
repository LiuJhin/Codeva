---
title: 'Three.js 动画技术详解'
description: '掌握Three.js中的各种动画技术，创建流畅的3D动画效果'
date: '2024-01-25'
tags: ['threejs', '动画', 'tween', '关键帧']
author: 'CodeVa Team'
category: 'frontend'
subcategory: 'threejs'
---

# Three.js 动画技术详解

动画是3D场景的灵魂，本文将介绍Three.js中实现动画的各种技术和最佳实践。

## 基础动画循环

### requestAnimationFrame

最基本的动画实现方式：

```javascript
function animate() {
  requestAnimationFrame(animate);
  
  // 更新对象属性
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  
  // 渲染场景
  renderer.render(scene, camera);
}

animate();
```

### 时间控制

使用时间来控制动画速度：

```javascript
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  
  const elapsedTime = clock.getElapsedTime();
  
  // 基于时间的旋转
  cube.rotation.x = elapsedTime;
  cube.rotation.y = elapsedTime * 0.5;
  
  renderer.render(scene, camera);
}
```

## Tween.js 补间动画

### 安装和基础使用

```bash
npm install @tweenjs/tween.js
```

```javascript
import * as TWEEN from '@tweenjs/tween.js';

// 创建补间动画
const tween = new TWEEN.Tween(cube.position)
  .to({ x: 5, y: 5, z: 5 }, 2000)
  .easing(TWEEN.Easing.Quadratic.Out)
  .start();

// 在动画循环中更新
function animate() {
  requestAnimationFrame(animate);
  
  TWEEN.update();
  renderer.render(scene, camera);
}
```

### 链式动画

```javascript
const tween1 = new TWEEN.Tween(cube.position)
  .to({ x: 5 }, 1000)
  .easing(TWEEN.Easing.Quadratic.Out);

const tween2 = new TWEEN.Tween(cube.position)
  .to({ y: 5 }, 1000)
  .easing(TWEEN.Easing.Quadratic.Out);

const tween3 = new TWEEN.Tween(cube.position)
  .to({ z: 5 }, 1000)
  .easing(TWEEN.Easing.Quadratic.Out);

// 链接动画
tween1.chain(tween2);
tween2.chain(tween3);
tween3.chain(tween1); // 循环

tween1.start();
```

## 关键帧动画

### AnimationMixer

Three.js内置的动画系统：

```javascript
// 创建动画混合器
const mixer = new THREE.AnimationMixer(model);

// 创建关键帧轨道
const positionKF = new THREE.VectorKeyframeTrack(
  '.position',
  [0, 1, 2],
  [0, 0, 0, 5, 0, 0, 0, 5, 0]
);

const rotationKF = new THREE.QuaternionKeyframeTrack(
  '.quaternion',
  [0, 1, 2],
  [0, 0, 0, 1, 0, 0, 0.7071, 0.7071, 0, 0, 0, 1]
);

// 创建动画剪辑
const clip = new THREE.AnimationClip('Action', 2, [positionKF, rotationKF]);

// 创建动画动作
const action = mixer.clipAction(clip);
action.play();

// 在动画循环中更新
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  
  const deltaTime = clock.getDelta();
  mixer.update(deltaTime);
  
  renderer.render(scene, camera);
}
```

## 物理动画

### 弹簧动画

```javascript
class SpringAnimation {
  constructor(target, destination, stiffness = 0.1, damping = 0.9) {
    this.target = target;
    this.destination = destination;
    this.velocity = { x: 0, y: 0, z: 0 };
    this.stiffness = stiffness;
    this.damping = damping;
  }
  
  update() {
    // 计算弹簧力
    const force = {
      x: (this.destination.x - this.target.x) * this.stiffness,
      y: (this.destination.y - this.target.y) * this.stiffness,
      z: (this.destination.z - this.target.z) * this.stiffness
    };
    
    // 更新速度
    this.velocity.x += force.x;
    this.velocity.y += force.y;
    this.velocity.z += force.z;
    
    // 应用阻尼
    this.velocity.x *= this.damping;
    this.velocity.y *= this.damping;
    this.velocity.z *= this.damping;
    
    // 更新位置
    this.target.x += this.velocity.x;
    this.target.y += this.velocity.y;
    this.target.z += this.velocity.z;
  }
}

// 使用示例
const spring = new SpringAnimation(
  cube.position,
  { x: 5, y: 0, z: 0 }
);

function animate() {
  requestAnimationFrame(animate);
  
  spring.update();
  renderer.render(scene, camera);
}
```

## 相机动画

### 轨道控制器动画

```javascript
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const controls = new OrbitControls(camera, renderer.domElement);

// 动画到指定位置
function animateCameraTo(position, target) {
  new TWEEN.Tween(camera.position)
    .to(position, 2000)
    .easing(TWEEN.Easing.Quadratic.Out)
    .start();
    
  new TWEEN.Tween(controls.target)
    .to(target, 2000)
    .easing(TWEEN.Easing.Quadratic.Out)
    .onUpdate(() => {
      controls.update();
    })
    .start();
}

// 使用
animateCameraTo(
  { x: 10, y: 10, z: 10 },
  { x: 0, y: 0, z: 0 }
);
```

## 性能优化

### 1. 对象池

```javascript
class ObjectPool {
  constructor(createFn, resetFn) {
    this.createFn = createFn;
    this.resetFn = resetFn;
    this.pool = [];
  }
  
  get() {
    if (this.pool.length > 0) {
      return this.pool.pop();
    }
    return this.createFn();
  }
  
  release(obj) {
    this.resetFn(obj);
    this.pool.push(obj);
  }
}
```

### 2. 批量更新

```javascript
// 使用InstancedMesh进行批量动画
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial();
const instancedMesh = new THREE.InstancedMesh(geometry, material, 1000);

const matrix = new THREE.Matrix4();
const position = new THREE.Vector3();
const rotation = new THREE.Euler();
const scale = new THREE.Vector3(1, 1, 1);

for (let i = 0; i < 1000; i++) {
  position.set(
    Math.random() * 100 - 50,
    Math.random() * 100 - 50,
    Math.random() * 100 - 50
  );
  
  rotation.set(
    Math.random() * Math.PI,
    Math.random() * Math.PI,
    Math.random() * Math.PI
  );
  
  matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);
  instancedMesh.setMatrixAt(i, matrix);
}

instancedMesh.instanceMatrix.needsUpdate = true;
```

## 最佳实践

1. **使用时间控制**：确保动画在不同帧率下保持一致
2. **合理使用缓动函数**：让动画更自然
3. **避免过度动画**：性能和用户体验的平衡
4. **预加载资源**：避免动画过程中的卡顿
5. **使用对象池**：减少垃圾回收的影响

掌握这些动画技术，你就能创建出令人印象深刻的3D动画效果！