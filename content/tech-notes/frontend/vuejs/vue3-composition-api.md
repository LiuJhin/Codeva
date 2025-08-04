---
title: 'Vue 3 Composition API 深度解析'
description: '深入理解Vue 3 Composition API的核心概念和最佳实践'
date: '2024-02-10'
tags: ['vue3', 'composition-api', 'javascript', '前端']
author: 'CodeVa Team'
category: 'frontend'
subcategory: 'vuejs'
---

# Vue 3 Composition API 深度解析

Vue 3 引入的 Composition API 为我们提供了一种更灵活、更强大的方式来组织和复用组件逻辑。

## 为什么需要 Composition API？

### Options API 的局限性

在 Vue 2 中，我们主要使用 Options API：

```javascript
export default {
  data() {
    return {
      count: 0,
      message: 'Hello'
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  computed: {
    doubleCount() {
      return this.count * 2
    }
  }
}
```

这种方式在小型组件中工作良好，但在大型组件中会遇到问题：
- 逻辑分散在不同的选项中
- 难以复用逻辑
- TypeScript 支持不够完善

## Composition API 基础

### setup 函数

`setup` 是 Composition API 的入口点：

```javascript
import { ref, computed } from 'vue'

export default {
  setup() {
    // 响应式数据
    const count = ref(0)
    const message = ref('Hello')
    
    // 计算属性
    const doubleCount = computed(() => count.value * 2)
    
    // 方法
    const increment = () => {
      count.value++
    }
    
    // 返回给模板使用
    return {
      count,
      message,
      doubleCount,
      increment
    }
  }
}
```

### 响应式 API

#### ref

`ref` 用于创建响应式的基本数据类型：

```javascript
import { ref } from 'vue'

const count = ref(0)
const message = ref('Hello World')

// 访问值需要使用 .value
console.log(count.value) // 0
count.value = 1
```

#### reactive

`reactive` 用于创建响应式的对象：

```javascript
import { reactive } from 'vue'

const state = reactive({
  count: 0,
  message: 'Hello'
})

// 直接访问属性
console.log(state.count) // 0
state.count = 1
```

#### computed

计算属性的创建：

```javascript
import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() => count.value * 2)

// 可写的计算属性
const fullName = computed({
  get() {
    return `${firstName.value} ${lastName.value}`
  },
  set(value) {
    [firstName.value, lastName.value] = value.split(' ')
  }
})
```

## 生命周期钩子

Composition API 中的生命周期钩子：

```javascript
import { 
  onMounted, 
  onUpdated, 
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount
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

## 逻辑复用

### 组合式函数 (Composables)

创建可复用的逻辑：

```javascript
// composables/useCounter.js
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initialValue
  
  const isEven = computed(() => count.value % 2 === 0)
  
  return {
    count,
    increment,
    decrement,
    reset,
    isEven
  }
}
```

在组件中使用：

```javascript
import { useCounter } from './composables/useCounter'

export default {
  setup() {
    const { count, increment, decrement, isEven } = useCounter(10)
    
    return {
      count,
      increment,
      decrement,
      isEven
    }
  }
}
```

## 最佳实践

### 1. 合理组织代码

```javascript
export default {
  setup() {
    // 1. 响应式数据
    const loading = ref(false)
    const error = ref(null)
    const data = ref([])
    
    // 2. 计算属性
    const hasData = computed(() => data.value.length > 0)
    
    // 3. 方法
    const fetchData = async () => {
      loading.value = true
      try {
        const response = await api.getData()
        data.value = response.data
      } catch (err) {
        error.value = err.message
      } finally {
        loading.value = false
      }
    }
    
    // 4. 生命周期
    onMounted(() => {
      fetchData()
    })
    
    // 5. 返回
    return {
      loading,
      error,
      data,
      hasData,
      fetchData
    }
  }
}
```

### 2. 使用 TypeScript

```typescript
import { ref, computed, Ref } from 'vue'

interface User {
  id: number
  name: string
  email: string
}

export function useUser() {
  const user: Ref<User | null> = ref(null)
  const loading = ref(false)
  
  const isLoggedIn = computed(() => user.value !== null)
  
  const login = async (credentials: LoginCredentials): Promise<void> => {
    loading.value = true
    try {
      user.value = await authService.login(credentials)
    } finally {
      loading.value = false
    }
  }
  
  return {
    user: readonly(user),
    loading: readonly(loading),
    isLoggedIn,
    login
  }
}
```

## 总结

Composition API 为 Vue 3 带来了：
- 更好的逻辑复用能力
- 更清晰的代码组织
- 更好的 TypeScript 支持
- 更灵活的组件设计

虽然学习曲线稍陡，但掌握后能显著提升开发效率和代码质量。