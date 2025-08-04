---
title: 'React Hooks 完全指南'
description: '深入理解React Hooks的原理和最佳实践，掌握现代React开发'
date: '2024-01-30'
tags: ['react', 'hooks', 'useState', 'useEffect']
author: 'CodeVa Team'
category: 'frontend'
subcategory: 'react'
---

# React Hooks 完全指南

React Hooks 是 React 16.8 引入的新特性，让我们能够在函数组件中使用状态和其他 React 特性。

## 什么是 Hooks？

Hooks 是一些可以让你在函数组件里"钩入" React state 及生命周期等特性的函数。

## 基础 Hooks

### useState

`useState` 让函数组件拥有状态：

```jsx
import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}
```

### useEffect

`useEffect` 用于处理副作用：

```jsx
import React, { useState, useEffect } from 'react'

function Example() {
  const [count, setCount] = useState(0)

  // 相当于 componentDidMount 和 componentDidUpdate
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}
```

### useContext

`useContext` 用于消费 Context：

```jsx
const ThemeContext = React.createContext()

function ThemedButton() {
  const theme = useContext(ThemeContext)
  return (
    <button style={{ background: theme.background }}>
      I am styled by theme context!
    </button>
  )
}
```

## 高级 Hooks

### useReducer

`useReducer` 是 `useState` 的替代方案：

```jsx
const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>
      <button onClick={() => dispatch({ type: 'increment' })}>
        +
      </button>
    </>
  )
}
```

### useMemo

`useMemo` 用于性能优化：

```jsx
function ExpensiveComponent({ items }) {
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0)
  }, [items])

  return <div>Total: {expensiveValue}</div>
}
```

### useCallback

`useCallback` 返回一个 memoized 回调函数：

```jsx
function Parent({ items }) {
  const [count, setCount] = useState(0)
  
  const handleClick = useCallback(() => {
    console.log('Button clicked')
  }, [])
  
  return (
    <div>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  )
}
```

## 自定义 Hooks

创建可复用的逻辑：

```jsx
// 自定义 Hook
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)
  
  const increment = useCallback(() => {
    setCount(count => count + 1)
  }, [])
  
  const decrement = useCallback(() => {
    setCount(count => count - 1)
  }, [])
  
  const reset = useCallback(() => {
    setCount(initialValue)
  }, [initialValue])
  
  return { count, increment, decrement, reset }
}

// 使用自定义 Hook
function Counter() {
  const { count, increment, decrement, reset } = useCounter(10)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
```

## Hooks 规则

1. **只在最顶层使用 Hook**
   - 不要在循环、条件或嵌套函数中调用 Hook

2. **只在 React 函数中调用 Hook**
   - 在 React 函数组件中调用 Hook
   - 在自定义 Hook 中调用其他 Hook

## 常见模式

### 数据获取

```jsx
function useApi(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(url)
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [url])
  
  return { data, loading, error }
}
```

### 本地存储

```jsx
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })
  
  const setValue = (value) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }
  
  return [storedValue, setValue]
}
```

## 性能优化

1. **使用 React.memo**
2. **合理使用 useMemo 和 useCallback**
3. **避免不必要的重新渲染**
4. **优化依赖数组**

## 最佳实践

1. **保持 Hook 简单**
2. **提取自定义 Hook**
3. **正确处理依赖**
4. **避免过度优化**

## 总结

React Hooks 为函数组件带来了强大的能力，让我们能够更好地组织和复用组件逻辑，是现代 React 开发的核心特性。