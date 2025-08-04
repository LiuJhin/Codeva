---
title: 'React Hooks 完全指南'
description: '深入理解React Hooks的原理和最佳实践，掌握现代React开发'
date: '2024-02-20'
tags: ['react', 'hooks', 'javascript', '前端']
author: 'CodeVa Team'
category: 'frontend'
subcategory: 'react'
---

# React Hooks 完全指南

React Hooks 是 React 16.8 引入的新特性，让我们能在函数组件中使用状态和其他 React 特性。

## 为什么需要 Hooks？

### 类组件的问题

在 Hooks 之前，我们需要使用类组件来管理状态：

```javascript
class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  
  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }
  
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}
```

类组件的问题：
- 代码冗长
- 难以复用状态逻辑
- 生命周期方法复杂
- this 绑定问题

## 基础 Hooks

### useState

`useState` 让函数组件拥有状态：

```javascript
import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}
```

#### 多个状态变量

```javascript
function UserProfile() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState(0)
  
  return (
    <form>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input 
        type="number"
        value={age} 
        onChange={(e) => setAge(parseInt(e.target.value))}
        placeholder="Age"
      />
    </form>
  )
}
```

#### 对象状态

```javascript
function UserForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  })
  
  const updateUser = (field, value) => {
    setUser(prevUser => ({
      ...prevUser,
      [field]: value
    }))
  }
  
  return (
    <form>
      <input 
        value={user.name} 
        onChange={(e) => updateUser('name', e.target.value)}
      />
      <input 
        value={user.email} 
        onChange={(e) => updateUser('email', e.target.value)}
      />
    </form>
  )
}
```

### useEffect

`useEffect` 处理副作用，相当于 `componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount` 的组合：

```javascript
import React, { useState, useEffect } from 'react'

function UserProfile({ userId }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/api/users/${userId}`)
        const userData = await response.json()
        setUser(userData)
      } catch (error) {
        console.error('Failed to fetch user:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchUser()
  }, [userId]) // 依赖数组
  
  if (loading) return <div>Loading...</div>
  if (!user) return <div>User not found</div>
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  )
}
```

#### 清理副作用

```javascript
function Timer() {
  const [seconds, setSeconds] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000)
    
    // 清理函数
    return () => clearInterval(interval)
  }, []) // 空依赖数组，只在挂载时执行
  
  return <div>Timer: {seconds}s</div>
}
```

### useContext

`useContext` 简化了 Context 的使用：

```javascript
// 创建 Context
const ThemeContext = React.createContext()

// Provider 组件
function App() {
  const [theme, setTheme] = useState('light')
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Main />
    </ThemeContext.Provider>
  )
}

// 使用 Context
function Header() {
  const { theme, setTheme } = useContext(ThemeContext)
  
  return (
    <header className={`header-${theme}`}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </header>
  )
}
```

## 高级 Hooks

### useReducer

对于复杂的状态逻辑，`useReducer` 比 `useState` 更合适：

```javascript
const initialState = {
  count: 0,
  step: 1
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step }
    case 'decrement':
      return { ...state, count: state.count - state.step }
    case 'setStep':
      return { ...state, step: action.payload }
    case 'reset':
      return initialState
    default:
      throw new Error('Unknown action type')
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Step: {state.step}</p>
      
      <button onClick={() => dispatch({ type: 'increment' })}>
        +{state.step}
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        -{state.step}
      </button>
      
      <input 
        type="number" 
        value={state.step}
        onChange={(e) => dispatch({ 
          type: 'setStep', 
          payload: parseInt(e.target.value) 
        })}
      />
      
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
    </div>
  )
}
```

### useMemo

`useMemo` 用于优化性能，缓存计算结果：

```javascript
function ExpensiveComponent({ items, filter }) {
  const filteredItems = useMemo(() => {
    console.log('Filtering items...') // 只在依赖变化时执行
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    )
  }, [items, filter])
  
  const totalPrice = useMemo(() => {
    return filteredItems.reduce((sum, item) => sum + item.price, 0)
  }, [filteredItems])
  
  return (
    <div>
      <p>Total items: {filteredItems.length}</p>
      <p>Total price: ${totalPrice}</p>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  )
}
```

### useCallback

`useCallback` 缓存函数，避免不必要的重新渲染：

```javascript
function TodoList({ todos, onToggle, onDelete }) {
  const [filter, setFilter] = useState('all')
  
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed)
      case 'active':
        return todos.filter(todo => !todo.completed)
      default:
        return todos
    }
  }, [todos, filter])
  
  const handleToggle = useCallback((id) => {
    onToggle(id)
  }, [onToggle])
  
  const handleDelete = useCallback((id) => {
    onDelete(id)
  }, [onDelete])
  
  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </div>
  )
}

// 使用 React.memo 优化子组件
const TodoItem = React.memo(({ todo, onToggle, onDelete }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  )
})
```

### useRef

`useRef` 用于访问 DOM 元素或保存可变值：

```javascript
function FocusInput() {
  const inputRef = useRef(null)
  const countRef = useRef(0)
  
  const focusInput = () => {
    inputRef.current.focus()
  }
  
  const incrementCount = () => {
    countRef.current += 1
    console.log('Count:', countRef.current)
  }
  
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  )
}
```

## 自定义 Hooks

自定义 Hooks 让我们能够复用状态逻辑：

### useLocalStorage

```javascript
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error('Error reading localStorage:', error)
      return initialValue
    }
  })
  
  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error('Error setting localStorage:', error)
    }
  }, [key, storedValue])
  
  return [storedValue, setValue]
}

// 使用
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  const [language, setLanguage] = useLocalStorage('language', 'en')
  
  return (
    <div>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="zh">中文</option>
      </select>
    </div>
  )
}
```

### useFetch

```javascript
function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [url])
  
  return { data, loading, error }
}

// 使用
function UserList() {
  const { data: users, loading, error } = useFetch('/api/users')
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  
  return (
    <ul>
      {users?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
```

## Hooks 规则和最佳实践

### Hooks 规则

1. **只在顶层调用 Hooks**
   ```javascript
   // ❌ 错误
   function Component() {
     if (condition) {
       const [state, setState] = useState(0) // 不要在条件语句中调用
     }
   }
   
   // ✅ 正确
   function Component() {
     const [state, setState] = useState(0)
     
     if (condition) {
       // 在这里使用 state
     }
   }
   ```

2. **只在 React 函数中调用 Hooks**
   - React 函数组件
   - 自定义 Hooks

### 最佳实践

1. **合理使用依赖数组**
   ```javascript
   // ❌ 缺少依赖
   useEffect(() => {
     fetchUser(userId)
   }, []) // 应该包含 userId
   
   // ✅ 正确
   useEffect(() => {
     fetchUser(userId)
   }, [userId])
   ```

2. **避免过度优化**
   ```javascript
   // ❌ 不必要的 useMemo
   const simpleValue = useMemo(() => props.value * 2, [props.value])
   
   // ✅ 直接计算
   const simpleValue = props.value * 2
   ```

3. **合理拆分状态**
   ```javascript
   // ❌ 过度拆分
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [email, setEmail] = useState('')
   const [phone, setPhone] = useState('')
   
   // ✅ 合理分组
   const [personalInfo, setPersonalInfo] = useState({
     firstName: '',
     lastName: '',
     email: '',
     phone: ''
   })
   ```

## 总结

React Hooks 带来了：
- 更简洁的代码
- 更好的逻辑复用
- 更容易测试
- 更好的性能优化选项

掌握 Hooks 是现代 React 开发的必备技能，它让我们能够写出更优雅、更易维护的代码。