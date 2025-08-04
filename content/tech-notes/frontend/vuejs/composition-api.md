---
title: 'Vue 3 Composition API 深度解析'
description: '深入理解Vue 3 Composition API的核心概念和最佳实践'
date: '2024-01-20'
tags: ['vue3', 'composition-api', '响应式', '前端']
author: 'CodeVa Team'
category: 'frontend'
subcategory: 'vuejs'
---

# Vue 3 Composition API 深度解析

Vue 3 引入的 Composition API 为我们提供了更灵活、更强大的组件逻辑组织方式。

## 什么是 Composition API？

Composition API 是 Vue 3 中新增的一套 API，它允许我们使用函数的方式来组织组件的逻辑，而不是传统的选项式 API。

## 核心概念

### 1. setup() 函数

`setup()` 是 Composition API 的入口点：

```javascript
import { ref, reactive } from 'vue'

export default {
  setup() {
    // 响应式数据
    const count = ref(0)
    const state = reactive({
      name: 'Vue 3',
      version: '3.0'
    })

    // 方法
    const increment = () => {
      count.value++
    }

    // 返回给模板使用
    return {
      count,
      state,
      increment
    }
  }
}
```

### 2. 响应式 API

#### ref()
用于创建响应式的基本数据类型：

```javascript
const count = ref(0)
const message = ref('Hello Vue 3')

// 访问值需要使用 .value
console.log(count.value) // 0
count.value = 1
```

#### reactive()
用于创建响应式的对象：

```javascript
const state = reactive({
  count: 0,
  message: 'Hello'
})

// 直接访问属性
console.log(state.count) // 0
state.count = 1
```

## 生命周期钩子

Composition API 中的生命周期钩子：

```javascript
import { 
  onMounted, 
  onUpdated, 
  onUnmounted 
} from 'vue'

export default {
  setup() {
    onMounted(() => {
      console.log('组件已挂载')
    })

    onUpdated(() => {
      console.log('组件已更新')
    })

    onUnmounted(() => {
      console.log('组件即将卸载')
    })
  }
}
```

## 计算属性和侦听器

### computed()

```javascript
import { ref, computed } from 'vue'

setup() {
  const count = ref(0)
  
  const doubleCount = computed(() => {
    return count.value * 2
  })
  
  return { count, doubleCount }
}
```

### watch() 和 watchEffect()

```javascript
import { ref, watch, watchEffect } from 'vue'

setup() {
  const count = ref(0)
  
  // watch
  watch(count, (newValue, oldValue) => {
    console.log(`count changed from ${oldValue} to ${newValue}`)
  })
  
  // watchEffect
  watchEffect(() => {
    console.log(`count is ${count.value}`)
  })
  
  return { count }
}
```

## 组合式函数 (Composables)

创建可复用的逻辑：

```javascript
// composables/useCounter.js
import { ref } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initialValue
  
  return {
    count,
    increment,
    decrement,
    reset
  }
}
```

在组件中使用：

```javascript
import { useCounter } from './composables/useCounter'

export default {
  setup() {
    const { count, increment, decrement, reset } = useCounter(10)
    
    return {
      count,
      increment,
      decrement,
      reset
    }
  }
}
```

## 最佳实践

1. **逻辑分组**: 将相关的逻辑组织在一起
2. **提取可复用逻辑**: 使用组合式函数
3. **类型安全**: 结合 TypeScript 使用
4. **性能优化**: 合理使用 `readonly`、`shallowRef` 等 API

## 总结

Composition API 为 Vue 3 带来了更强的逻辑复用能力和更好的 TypeScript 支持，是现代 Vue 开发的重要特性。