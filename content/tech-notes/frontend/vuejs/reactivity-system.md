---
title: 'Vue 3 响应式系统原理'
description: '深入理解Vue 3响应式系统的实现原理和工作机制'
date: '2024-01-25'
tags: ['vue3', '响应式', 'proxy', '源码分析']
author: 'CodeVa Team'
category: 'frontend'
subcategory: 'vuejs'
---

# Vue 3 响应式系统原理

Vue 3 的响应式系统是其核心特性之一，基于 ES6 Proxy 实现，相比 Vue 2 有了显著的改进。

## 响应式系统概述

Vue 3 的响应式系统主要包括：
- **响应式对象创建**: `reactive()`, `ref()`, `readonly()`
- **依赖收集**: 追踪数据的访问
- **派发更新**: 数据变化时触发更新

## Proxy vs Object.defineProperty

### Vue 2 的限制

```javascript
// Vue 2 无法检测到这些变化
const obj = { a: 1 }

// 新增属性
obj.b = 2 // 无法检测

// 删除属性
delete obj.a // 无法检测

// 数组索引赋值
const arr = [1, 2, 3]
arr[0] = 4 // 无法检测
```

### Vue 3 的改进

```javascript
// Vue 3 可以检测所有变化
const state = reactive({ a: 1 })

// 新增属性 ✅
state.b = 2

// 删除属性 ✅
delete state.a

// 数组操作 ✅
const arr = reactive([1, 2, 3])
arr[0] = 4
arr.push(5)
```

## 核心 API 实现原理

### reactive()

```javascript
// 简化版实现
function reactive(target) {
  return new Proxy(target, {
    get(target, key, receiver) {
      // 依赖收集
      track(target, key)
      return Reflect.get(target, key, receiver)
    },
    
    set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver)
      // 派发更新
      trigger(target, key)
      return result
    }
  })
}
```

### ref()

```javascript
// 简化版实现
function ref(value) {
  return {
    get value() {
      track(this, 'value')
      return this._value
    },
    
    set value(newValue) {
      this._value = newValue
      trigger(this, 'value')
    },
    
    _value: value
  }
}
```

## 依赖收集机制

### 全局状态管理

```javascript
let activeEffect = null
const targetMap = new WeakMap()

function track(target, key) {
  if (!activeEffect) return
  
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()))
  }
  
  let dep = depsMap.get(key)
  if (!dep) {
    depsMap.set(key, (dep = new Set()))
  }
  
  dep.add(activeEffect)
}
```

### 副作用函数

```javascript
function effect(fn) {
  const effectFn = () => {
    activeEffect = effectFn
    fn()
    activeEffect = null
  }
  
  effectFn()
  return effectFn
}
```

## 派发更新机制

```javascript
function trigger(target, key) {
  const depsMap = targetMap.get(target)
  if (!depsMap) return
  
  const dep = depsMap.get(key)
  if (!dep) return
  
  dep.forEach(effect => {
    effect()
  })
}
```

## 计算属性实现

```javascript
function computed(getter) {
  let value
  let dirty = true
  
  const effectFn = effect(getter, {
    lazy: true,
    scheduler() {
      dirty = true
      // 触发计算属性的依赖更新
      trigger(computed, 'value')
    }
  })
  
  const obj = {
    get value() {
      if (dirty) {
        value = effectFn()
        dirty = false
      }
      track(obj, 'value')
      return value
    }
  }
  
  return obj
}
```

## 侦听器实现

```javascript
function watch(source, callback, options = {}) {
  let getter
  
  if (typeof source === 'function') {
    getter = source
  } else {
    getter = () => traverse(source)
  }
  
  let oldValue
  
  const job = () => {
    const newValue = effectFn()
    callback(newValue, oldValue)
    oldValue = newValue
  }
  
  const effectFn = effect(getter, {
    lazy: true,
    scheduler: job
  })
  
  if (options.immediate) {
    job()
  } else {
    oldValue = effectFn()
  }
}
```

## 性能优化

### 1. 浅层响应式

```javascript
const state = shallowReactive({
  nested: { count: 0 }
})

// 只有第一层是响应式的
state.nested = { count: 1 } // 触发更新
state.nested.count = 2 // 不触发更新
```

### 2. 只读响应式

```javascript
const original = reactive({ count: 0 })
const copy = readonly(original)

// copy.count = 1 // 警告：无法修改只读属性
```

### 3. 标记原始对象

```javascript
const raw = markRaw({ count: 0 })
const state = reactive({ raw })

// raw 不会被转换为响应式
state.raw.count = 1 // 不触发更新
```

## 最佳实践

1. **合理选择 API**: 基本类型用 `ref()`，对象用 `reactive()`
2. **避免解构**: 解构会丢失响应式
3. **使用 `toRefs()`**: 安全地解构响应式对象
4. **性能考虑**: 大型对象考虑使用 `shallowReactive()`

## 总结

Vue 3 的响应式系统通过 Proxy 实现了更完善的数据劫持，解决了 Vue 2 的诸多限制，为开发者提供了更强大、更灵活的响应式编程体验。