---
title: 'React 状态管理最佳实践'
description: '深入探讨React应用中的状态管理策略，从本地状态到全局状态管理'
date: '2024-02-18'
tags: ['react', 'state-management', 'redux', 'zustand', '前端']
author: 'CodeVa Team'
category: 'frontend'
subcategory: 'react'
---

# React 状态管理最佳实践

状态管理是React应用开发中的核心概念。选择合适的状态管理策略对应用的可维护性和性能至关重要。

## 状态的分类

### 本地状态 (Local State)

本地状态是组件内部的状态，只影响当前组件：

```javascript
function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
```

### 共享状态 (Shared State)

多个组件需要访问的状态：

```javascript
// 通过 props 传递
function App() {
  const [user, setUser] = useState(null)
  
  return (
    <div>
      <Header user={user} />
      <Profile user={user} setUser={setUser} />
    </div>
  )
}
```

### 全局状态 (Global State)

整个应用都可能需要访问的状态，如用户信息、主题设置等。

## 状态提升 (Lifting State Up)

当多个组件需要共享状态时，将状态提升到它们的共同父组件：

```javascript
function App() {
  const [todos, setTodos] = useState([])
  
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }])
  }
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }
  
  return (
    <div>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} />
      <TodoStats todos={todos} />
    </div>
  )
}

function TodoForm({ onAdd }) {
  const [text, setText] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      onAdd(text)
      setText('')
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo..."
      />
      <button type="submit">Add</button>
    </form>
  )
}

function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <span style={{ 
            textDecoration: todo.completed ? 'line-through' : 'none' 
          }}>
            {todo.text}
          </span>
        </li>
      ))}
    </ul>
  )
}

function TodoStats({ todos }) {
  const total = todos.length
  const completed = todos.filter(todo => todo.completed).length
  const remaining = total - completed
  
  return (
    <div>
      <p>Total: {total}</p>
      <p>Completed: {completed}</p>
      <p>Remaining: {remaining}</p>
    </div>
  )
}
```

## Context API

对于深层嵌套的组件，使用 Context API 避免 prop drilling：

```javascript
// 创建 Context
const TodoContext = createContext()

// Provider 组件
function TodoProvider({ children }) {
  const [todos, setTodos] = useState([])
  
  const addTodo = (text) => {
    setTodos(prev => [...prev, { 
      id: Date.now(), 
      text, 
      completed: false 
    }])
  }
  
  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }
  
  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }
  
  const value = {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo
  }
  
  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}

// 自定义 Hook
function useTodos() {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('useTodos must be used within TodoProvider')
  }
  return context
}

// 使用 Context
function App() {
  return (
    <TodoProvider>
      <div>
        <TodoForm />
        <TodoList />
        <TodoStats />
      </div>
    </TodoProvider>
  )
}

function TodoForm() {
  const { addTodo } = useTodos()
  const [text, setText] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      addTodo(text)
      setText('')
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo..."
      />
      <button type="submit">Add</button>
    </form>
  )
}
```

## useReducer 进阶状态管理

对于复杂的状态逻辑，使用 `useReducer`：

```javascript
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
          text: action.payload,
          completed: false
        }]
      }
    
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      }
    
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      }
    
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      }
    
    default:
      return state
  }
}

const initialState = {
  todos: [],
  filter: 'all' // 'all', 'active', 'completed'
}

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  
  const addTodo = (text) => {
    dispatch({ type: 'ADD_TODO', payload: text })
  }
  
  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id })
  }
  
  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id })
  }
  
  const setFilter = (filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter })
  }
  
  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' })
  }
  
  const filteredTodos = useMemo(() => {
    switch (state.filter) {
      case 'active':
        return state.todos.filter(todo => !todo.completed)
      case 'completed':
        return state.todos.filter(todo => todo.completed)
      default:
        return state.todos
    }
  }, [state.todos, state.filter])
  
  return (
    <div>
      <TodoForm onAdd={addTodo} />
      <TodoFilters 
        currentFilter={state.filter} 
        onFilterChange={setFilter}
        onClearCompleted={clearCompleted}
      />
      <TodoList 
        todos={filteredTodos} 
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  )
}
```

## 第三方状态管理库

### Zustand

轻量级的状态管理库：

```javascript
import { create } from 'zustand'

// 创建 store
const useTodoStore = create((set, get) => ({
  todos: [],
  filter: 'all',
  
  addTodo: (text) => set((state) => ({
    todos: [...state.todos, {
      id: Date.now(),
      text,
      completed: false
    }]
  })),
  
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  })),
  
  deleteTodo: (id) => set((state) => ({
    todos: state.todos.filter(todo => todo.id !== id)
  })),
  
  setFilter: (filter) => set({ filter }),
  
  clearCompleted: () => set((state) => ({
    todos: state.todos.filter(todo => !todo.completed)
  })),
  
  // 计算属性
  get filteredTodos() {
    const { todos, filter } = get()
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }
}))

// 使用 store
function TodoApp() {
  const { 
    filteredTodos, 
    filter, 
    addTodo, 
    toggleTodo, 
    deleteTodo, 
    setFilter, 
    clearCompleted 
  } = useTodoStore()
  
  return (
    <div>
      <TodoForm onAdd={addTodo} />
      <TodoFilters 
        currentFilter={filter} 
        onFilterChange={setFilter}
        onClearCompleted={clearCompleted}
      />
      <TodoList 
        todos={filteredTodos} 
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  )
}

// 只订阅特定状态
function TodoStats() {
  const todos = useTodoStore(state => state.todos)
  
  const stats = useMemo(() => {
    const total = todos.length
    const completed = todos.filter(todo => todo.completed).length
    return { total, completed, remaining: total - completed }
  }, [todos])
  
  return (
    <div>
      <p>Total: {stats.total}</p>
      <p>Completed: {stats.completed}</p>
      <p>Remaining: {stats.remaining}</p>
    </div>
  )
}
```

### Redux Toolkit

现代 Redux 的推荐方式：

```javascript
import { createSlice, configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'

// 创建 slice
const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    filter: 'all'
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: Date.now(),
        text: action.payload,
        completed: false
      })
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload)
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    clearCompleted: (state) => {
      state.items = state.items.filter(todo => !todo.completed)
    }
  }
})

export const { addTodo, toggleTodo, deleteTodo, setFilter, clearCompleted } = todoSlice.actions

// 选择器
const selectTodos = (state) => state.todos.items
const selectFilter = (state) => state.todos.filter
const selectFilteredTodos = (state) => {
  const todos = selectTodos(state)
  const filter = selectFilter(state)
  
  switch (filter) {
    case 'active':
      return todos.filter(todo => !todo.completed)
    case 'completed':
      return todos.filter(todo => todo.completed)
    default:
      return todos
  }
}

// 配置 store
const store = configureStore({
  reducer: {
    todos: todoSlice.reducer
  }
})

// 使用 Redux
function TodoApp() {
  const filteredTodos = useSelector(selectFilteredTodos)
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch()
  
  const handleAddTodo = (text) => {
    dispatch(addTodo(text))
  }
  
  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id))
  }
  
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }
  
  const handleSetFilter = (newFilter) => {
    dispatch(setFilter(newFilter))
  }
  
  const handleClearCompleted = () => {
    dispatch(clearCompleted())
  }
  
  return (
    <div>
      <TodoForm onAdd={handleAddTodo} />
      <TodoFilters 
        currentFilter={filter} 
        onFilterChange={handleSetFilter}
        onClearCompleted={handleClearCompleted}
      />
      <TodoList 
        todos={filteredTodos} 
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  )
}
```

## 状态管理最佳实践

### 1. 选择合适的状态管理方案

```javascript
// 简单应用：本地状态 + Context
// 中等复杂度：useReducer + Context
// 复杂应用：Zustand 或 Redux Toolkit

// 决策树
function chooseStateManagement(appComplexity, teamSize, requirements) {
  if (appComplexity === 'simple' && teamSize < 3) {
    return 'useState + Context'
  }
  
  if (appComplexity === 'medium' || requirements.includes('timeTravel')) {
    return 'useReducer + Context'
  }
  
  if (appComplexity === 'complex' || teamSize > 5) {
    return 'Redux Toolkit'
  }
  
  return 'Zustand' // 默认推荐
}
```

### 2. 状态结构设计

```javascript
// ❌ 扁平化过度
const badState = {
  userName: '',
  userEmail: '',
  userAge: 0,
  todoText: '',
  todoCompleted: false,
  settingsTheme: 'light',
  settingsLanguage: 'en'
}

// ✅ 合理分组
const goodState = {
  user: {
    name: '',
    email: '',
    age: 0
  },
  todos: {
    items: [],
    filter: 'all'
  },
  settings: {
    theme: 'light',
    language: 'en'
  }
}
```

### 3. 避免不必要的重新渲染

```javascript
// 使用 React.memo
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

// 使用 useCallback
function TodoList({ todos }) {
  const handleToggle = useCallback((id) => {
    // 处理逻辑
  }, [])
  
  const handleDelete = useCallback((id) => {
    // 处理逻辑
  }, [])
  
  return (
    <div>
      {todos.map(todo => (
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
```

### 4. 状态持久化

```javascript
// 自定义 Hook 实现持久化
function usePersistedState(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })
  
  const setPersistedState = useCallback((value) => {
    setState(value)
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Failed to persist state:', error)
    }
  }, [key])
  
  return [state, setPersistedState]
}

// 使用
function App() {
  const [todos, setTodos] = usePersistedState('todos', [])
  const [settings, setSettings] = usePersistedState('settings', {
    theme: 'light',
    language: 'en'
  })
  
  // ...
}
```

## 总结

选择状态管理方案的原则：

1. **从简单开始**：优先使用 React 内置的状态管理
2. **按需升级**：当内置方案不够用时再考虑第三方库
3. **团队一致**：确保团队成员都熟悉选择的方案
4. **性能优先**：避免不必要的重新渲染
5. **可维护性**：保持状态结构清晰，逻辑分离

记住，最好的状态管理方案是最适合你的项目和团队的方案。