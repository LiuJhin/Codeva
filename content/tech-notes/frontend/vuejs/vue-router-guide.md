---
title: 'Vue Router 4 完整指南'
description: '掌握Vue Router 4的核心功能，构建单页面应用的路由系统'
date: '2024-02-15'
tags: ['vue-router', 'spa', 'navigation', '前端']
author: 'CodeVa Team'
category: 'frontend'
subcategory: 'vuejs'
---

# Vue Router 4 完整指南

Vue Router 是 Vue.js 官方的路由管理器，用于构建单页面应用程序。

## 安装和基本设置

### 安装

```bash
npm install vue-router@4
```

### 基本配置

```javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

### 在应用中使用

```javascript
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
```

## 路由配置

### 动态路由

```javascript
const routes = [
  // 动态段以冒号开始
  { path: '/user/:id', component: User },
  // 可以有多个动态段
  { path: '/user/:id/post/:postId', component: UserPost },
  // 可选参数
  { path: '/user/:id?', component: User }
]
```

在组件中访问参数：

```javascript
// Composition API
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    
    // 访问路由参数
    console.log(route.params.id)
    
    return {}
  }
}
```

### 嵌套路由

```javascript
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      // 空路径意味着默认子路由
      { path: '', component: UserHome },
      // /user/:id/profile
      { path: 'profile', component: UserProfile },
      // /user/:id/posts
      { path: 'posts', component: UserPosts }
    ]
  }
]
```

父组件需要包含 `<router-view>`：

```vue
<template>
  <div class="user">
    <h2>User {{ $route.params.id }}</h2>
    <router-view></router-view>
  </div>
</template>
```

### 命名路由

```javascript
const routes = [
  {
    path: '/user/:username',
    name: 'user',
    component: User
  }
]
```

使用命名路由导航：

```javascript
// 编程式导航
router.push({ name: 'user', params: { username: 'john' } })
```

```vue
<!-- 声明式导航 -->
<router-link :to="{ name: 'user', params: { username: 'john' } }">
  User John
</router-link>
```

## 导航

### 声明式导航

```vue
<template>
  <!-- 基本用法 -->
  <router-link to="/about">About</router-link>
  
  <!-- 使用对象 -->
  <router-link :to="{ path: '/about' }">About</router-link>
  
  <!-- 命名路由 -->
  <router-link :to="{ name: 'user', params: { id: 123 } }">
    User
  </router-link>
  
  <!-- 带查询参数 -->
  <router-link :to="{ path: '/search', query: { q: 'vue' } }">
    Search
  </router-link>
</template>
```

### 编程式导航

```javascript
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    
    const goToUser = (id) => {
      // 字符串路径
      router.push('/user/' + id)
      
      // 对象
      router.push({ path: '/user/' + id })
      
      // 命名路由
      router.push({ name: 'user', params: { id } })
      
      // 带查询参数
      router.push({ path: '/search', query: { q: 'vue' } })
    }
    
    const goBack = () => {
      router.go(-1) // 后退一步
    }
    
    const replace = () => {
      router.replace('/home') // 替换当前路由
    }
    
    return {
      goToUser,
      goBack,
      replace
    }
  }
}
```

## 路由守卫

### 全局守卫

```javascript
// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 检查用户是否已登录
  if (to.meta.requiresAuth && !isLoggedIn()) {
    next('/login')
  } else {
    next()
  }
})

// 全局后置钩子
router.afterEach((to, from) => {
  // 发送页面浏览统计
  analytics.track('page_view', {
    page_title: to.meta.title,
    page_path: to.path
  })
})
```

### 路由独享守卫

```javascript
const routes = [
  {
    path: '/admin',
    component: Admin,
    beforeEnter: (to, from, next) => {
      if (!isAdmin()) {
        next('/unauthorized')
      } else {
        next()
      }
    }
  }
]
```

### 组件内守卫

```javascript
export default {
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被确认前调用
    // 不能获取组件实例 `this`
    next(vm => {
      // 通过 `vm` 访问组件实例
    })
  },
  
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 可以访问组件实例 `this`
    this.fetchData(to.params.id)
    next()
  },
  
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    if (this.hasUnsavedChanges) {
      const answer = window.confirm('确定要离开吗？未保存的更改将丢失。')
      if (answer) {
        next()
      } else {
        next(false)
      }
    } else {
      next()
    }
  }
}
```

## 路由元信息

```javascript
const routes = [
  {
    path: '/admin',
    component: Admin,
    meta: {
      requiresAuth: true,
      title: '管理后台',
      roles: ['admin']
    }
  }
]
```

使用元信息：

```javascript
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = to.meta.title
  }
  
  // 检查权限
  if (to.meta.requiresAuth) {
    if (!isLoggedIn()) {
      next('/login')
      return
    }
    
    if (to.meta.roles && !hasRole(to.meta.roles)) {
      next('/unauthorized')
      return
    }
  }
  
  next()
})
```

## 懒加载

```javascript
const routes = [
  {
    path: '/about',
    name: 'About',
    // 路由级别的代码分割
    component: () => import('../views/About.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    // 可以给 chunk 命名
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue')
  }
]
```

## 实用技巧

### 监听路由变化

```javascript
import { watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    
    watch(
      () => route.params.id,
      (newId, oldId) => {
        // 响应路由参数的变化
        fetchUser(newId)
      }
    )
    
    return {}
  }
}
```

### 滚动行为

```javascript
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0 }
    }
  }
})
```

### 过渡动画

```vue
<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
```

## 总结

Vue Router 4 提供了强大而灵活的路由功能：
- 支持动态路由和嵌套路由
- 完善的导航守卫系统
- 代码分割和懒加载
- 良好的 TypeScript 支持

合理使用这些功能可以构建出用户体验优秀的单页面应用。