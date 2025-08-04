---
title: 'TypeScript 高级类型系统'
description: '深入理解TypeScript的高级类型特性，掌握类型编程技巧'
date: '2024-02-10'
tags: ['typescript', '高级类型', '泛型', '类型编程']
author: 'CodeVa Team'
category: 'frontend'
subcategory: 'typescript'
---

# TypeScript 高级类型系统

TypeScript 的类型系统非常强大，本文将深入探讨其高级特性和实用技巧。

## 泛型 (Generics)

### 基础泛型

```typescript
// 泛型函数
function identity<T>(arg: T): T {
  return arg
}

const result1 = identity<string>('hello')
const result2 = identity(42) // 类型推断

// 泛型接口
interface GenericIdentityFn<T> {
  (arg: T): T
}

const myIdentity: GenericIdentityFn<number> = identity
```

### 泛型约束

```typescript
interface Lengthwise {
  length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

loggingIdentity('hello') // ✅
loggingIdentity([1, 2, 3]) // ✅
// loggingIdentity(3) // ❌ 数字没有 length 属性
```

### 条件类型

```typescript
// 基础条件类型
type IsString<T> = T extends string ? true : false

type Test1 = IsString<string> // true
type Test2 = IsString<number> // false

// 分布式条件类型
type ToArray<T> = T extends any ? T[] : never

type StrArrOrNumArr = ToArray<string | number>
// 结果: string[] | number[]
```

## 映射类型 (Mapped Types)

### 内置映射类型

```typescript
interface Person {
  name: string
  age: number
  email: string
}

// Partial - 所有属性变为可选
type PartialPerson = Partial<Person>
// { name?: string; age?: number; email?: string }

// Required - 所有属性变为必需
type RequiredPerson = Required<PartialPerson>

// Readonly - 所有属性变为只读
type ReadonlyPerson = Readonly<Person>

// Pick - 选择特定属性
type PersonName = Pick<Person, 'name' | 'age'>
// { name: string; age: number }

// Omit - 排除特定属性
type PersonWithoutEmail = Omit<Person, 'email'>
// { name: string; age: number }
```

### 自定义映射类型

```typescript
// 将所有属性转换为字符串
type Stringify<T> = {
  [K in keyof T]: string
}

type StringifiedPerson = Stringify<Person>
// { name: string; age: string; email: string }

// 可选的子集
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

type PersonWithOptionalEmail = Optional<Person, 'email'>
// { name: string; age: number; email?: string }
```

## 模板字面量类型

```typescript
// 基础模板字面量类型
type Greeting = `Hello, ${string}!`

const greeting1: Greeting = 'Hello, World!' // ✅
const greeting2: Greeting = 'Hi, World!' // ❌

// 结合联合类型
type EventName<T extends string> = `on${Capitalize<T>}`

type ButtonEvents = EventName<'click' | 'hover' | 'focus'>
// 'onClick' | 'onHover' | 'onFocus'

// 复杂的模板字面量类型
type CSSProperty = 
  | 'margin' 
  | 'padding' 
  | 'border'

type CSSDirection = 'top' | 'right' | 'bottom' | 'left'

type DirectionalProperty = `${CSSProperty}-${CSSDirection}`
// 'margin-top' | 'margin-right' | ... | 'border-left'
```

## 工具类型进阶

### 深度操作类型

```typescript
// 深度只读
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
}

// 深度可选
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

interface NestedObject {
  user: {
    profile: {
      name: string
      settings: {
        theme: string
      }
    }
  }
}

type ReadonlyNested = DeepReadonly<NestedObject>
// 所有嵌套属性都是只读的
```

### 函数类型操作

```typescript
// 提取函数参数类型
type Parameters<T extends (...args: any) => any> = 
  T extends (...args: infer P) => any ? P : never

// 提取函数返回类型
type ReturnType<T extends (...args: any) => any> = 
  T extends (...args: any) => infer R ? R : any

function example(a: string, b: number): boolean {
  return true
}

type ExampleParams = Parameters<typeof example> // [string, number]
type ExampleReturn = ReturnType<typeof example> // boolean

// 构造函数类型
type ConstructorParameters<T extends abstract new (...args: any) => any> = 
  T extends abstract new (...args: infer P) => any ? P : never

class MyClass {
  constructor(name: string, age: number) {}
}

type MyClassParams = ConstructorParameters<typeof MyClass> // [string, number]
```

## 类型编程实战

### 对象路径类型

```typescript
// 生成对象的所有可能路径
type Paths<T> = T extends object ? {
  [K in keyof T]: K extends string | number ?
    T[K] extends object ?
      K | `${K}.${Paths<T[K]>}`
    : K
  : never
}[keyof T] : never

interface User {
  profile: {
    personal: {
      name: string
      age: number
    }
    settings: {
      theme: string
    }
  }
  posts: Array<{ title: string }>
}

type UserPaths = Paths<User>
// 'profile' | 'posts' | 'profile.personal' | 'profile.settings' | 
// 'profile.personal.name' | 'profile.personal.age' | 'profile.settings.theme'

// 根据路径获取值类型
type PathValue<T, P extends string> = 
  P extends keyof T ? T[P] :
  P extends `${infer K}.${infer Rest}` ?
    K extends keyof T ? PathValue<T[K], Rest> : never
  : never

type NameType = PathValue<User, 'profile.personal.name'> // string
```

### 类型安全的事件系统

```typescript
interface EventMap {
  'user:login': { userId: string; timestamp: number }
  'user:logout': { userId: string }
  'post:create': { postId: string; title: string }
  'post:delete': { postId: string }
}

class TypedEventEmitter<T extends Record<string, any>> {
  private listeners: {
    [K in keyof T]?: Array<(data: T[K]) => void>
  } = {}

  on<K extends keyof T>(event: K, listener: (data: T[K]) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }
    this.listeners[event]!.push(listener)
  }

  emit<K extends keyof T>(event: K, data: T[K]) {
    const eventListeners = this.listeners[event]
    if (eventListeners) {
      eventListeners.forEach(listener => listener(data))
    }
  }
}

const emitter = new TypedEventEmitter<EventMap>()

// 类型安全的事件监听
emitter.on('user:login', (data) => {
  // data 的类型自动推断为 { userId: string; timestamp: number }
  console.log(`User ${data.userId} logged in at ${data.timestamp}`)
})

// 类型安全的事件发射
emitter.emit('user:login', {
  userId: '123',
  timestamp: Date.now()
})
```

### 表单验证类型

```typescript
// 验证规则类型
type ValidationRule<T> = {
  required?: boolean
  minLength?: T extends string ? number : never
  maxLength?: T extends string ? number : never
  min?: T extends number ? number : never
  max?: T extends number ? number : never
  pattern?: T extends string ? RegExp : never
  custom?: (value: T) => boolean | string
}

// 表单配置类型
type FormConfig<T> = {
  [K in keyof T]: ValidationRule<T[K]>
}

// 验证错误类型
type ValidationErrors<T> = {
  [K in keyof T]?: string[]
}

interface LoginForm {
  email: string
  password: string
  age: number
}

const loginConfig: FormConfig<LoginForm> = {
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    minLength: 5
  },
  password: {
    required: true,
    minLength: 8
  },
  age: {
    required: true,
    min: 18,
    max: 120
  }
}

function validateForm<T>(
  data: T, 
  config: FormConfig<T>
): ValidationErrors<T> {
  const errors: ValidationErrors<T> = {}
  
  // 验证逻辑实现...
  
  return errors
}
```

## 类型体操技巧

### 数组操作类型

```typescript
// 数组第一个元素类型
type Head<T extends readonly any[]> = T extends readonly [infer H, ...any[]] ? H : never

// 数组尾部类型
type Tail<T extends readonly any[]> = T extends readonly [any, ...infer T] ? T : []

// 数组长度
type Length<T extends readonly any[]> = T['length']

// 数组反转
type Reverse<T extends readonly any[]> = T extends readonly [...infer Rest, infer Last]
  ? [Last, ...Reverse<Rest>]
  : []

type Example = [1, 2, 3, 4]
type ExampleHead = Head<Example> // 1
type ExampleTail = Tail<Example> // [2, 3, 4]
type ExampleLength = Length<Example> // 4
type ExampleReverse = Reverse<Example> // [4, 3, 2, 1]
```

### 字符串操作类型

```typescript
// 字符串长度
type StringLength<S extends string, Counter extends any[] = []> = 
  S extends `${string}${infer Rest}` 
    ? StringLength<Rest, [...Counter, any]>
    : Counter['length']

// 字符串替换
type Replace<S extends string, From extends string, To extends string> = 
  S extends `${infer Prefix}${From}${infer Suffix}`
    ? `${Prefix}${To}${Suffix}`
    : S

// 驼峰转换
type CamelCase<S extends string> = 
  S extends `${infer P1}_${infer P2}${infer P3}`
    ? `${P1}${Uppercase<P2>}${CamelCase<P3>}`
    : S

type TestLength = StringLength<'hello'> // 5
type TestReplace = Replace<'hello world', 'world', 'TypeScript'> // 'hello TypeScript'
type TestCamel = CamelCase<'hello_world_test'> // 'helloWorldTest'
```

## 最佳实践

1. **渐进式类型化**: 从 `any` 开始，逐步添加类型
2. **利用类型推断**: 让 TypeScript 自动推断类型
3. **合理使用泛型**: 提高代码复用性
4. **类型守卫**: 运行时类型检查
5. **严格模式**: 启用严格的类型检查选项

## 总结

TypeScript 的高级类型系统为我们提供了强大的类型编程能力，通过合理运用这些特性，可以构建更安全、更可维护的代码。