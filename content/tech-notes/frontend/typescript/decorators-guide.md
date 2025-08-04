---
title: 'TypeScript 装饰器完全指南'
description: '深入理解TypeScript装饰器的原理和应用，掌握元编程技巧'
date: '2024-02-15'
tags: ['typescript', '装饰器', '元编程', 'decorator']
author: 'CodeVa Team'
category: 'frontend'
subcategory: 'typescript'
---

# TypeScript 装饰器完全指南

装饰器是TypeScript的一个实验性特性，提供了一种在声明时修改类、方法、属性或参数的方式。

## 装饰器基础

### 启用装饰器

在 `tsconfig.json` 中启用装饰器支持：

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

### 装饰器语法

```typescript
// 装饰器是一个函数
function MyDecorator(target: any) {
  console.log('装饰器被调用')
}

// 使用装饰器
@MyDecorator
class MyClass {
  // ...
}
```

## 类装饰器

### 基础类装饰器

```typescript
function sealed(constructor: Function) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}

@sealed
class Greeter {
  greeting: string
  
  constructor(message: string) {
    this.greeting = message
  }
  
  greet() {
    return `Hello, ${this.greeting}`
  }
}
```

### 装饰器工厂

```typescript
function Component(config: { selector: string; template: string }) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      selector = config.selector
      template = config.template
      
      render() {
        console.log(`Rendering ${this.selector}: ${this.template}`)
      }
    }
  }
}

@Component({
  selector: 'app-user',
  template: '<div>User Component</div>'
})
class UserComponent {
  name = 'User'
}

const user = new UserComponent()
// user.render() // Rendering app-user: <div>User Component</div>
```

### 类装饰器组合

```typescript
function Timestamped<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    timestamp = new Date()
  }
}

function Logged<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    log() {
      console.log(`${constructor.name} instance created`)
    }
  }
}

@Timestamped
@Logged
class User {
  constructor(public name: string) {}
}

const user = new User('Alice')
// user.log() // User instance created
// console.log(user.timestamp) // 当前时间戳
```

## 方法装饰器

### 基础方法装饰器

```typescript
function log(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value
  
  descriptor.value = function (...args: any[]) {
    console.log(`调用方法 ${propertyName}，参数:`, args)
    const result = method.apply(this, args)
    console.log(`方法 ${propertyName} 返回:`, result)
    return result
  }
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b
  }
  
  @log
  multiply(a: number, b: number): number {
    return a * b
  }
}

const calc = new Calculator()
calc.add(2, 3) // 输出日志和结果
```

### 性能监控装饰器

```typescript
function measure(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value
  
  descriptor.value = function (...args: any[]) {
    const start = performance.now()
    const result = method.apply(this, args)
    const end = performance.now()
    
    console.log(`${propertyName} 执行时间: ${end - start}ms`)
    return result
  }
}

class DataProcessor {
  @measure
  processLargeDataset(data: any[]) {
    // 模拟耗时操作
    return data.map(item => ({ ...item, processed: true }))
  }
}
```

### 缓存装饰器

```typescript
function cache(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value
  const cacheMap = new Map()
  
  descriptor.value = function (...args: any[]) {
    const key = JSON.stringify(args)
    
    if (cacheMap.has(key)) {
      console.log(`缓存命中: ${propertyName}`)
      return cacheMap.get(key)
    }
    
    const result = method.apply(this, args)
    cacheMap.set(key, result)
    console.log(`缓存存储: ${propertyName}`)
    return result
  }
}

class MathService {
  @cache
  fibonacci(n: number): number {
    if (n <= 1) return n
    return this.fibonacci(n - 1) + this.fibonacci(n - 2)
  }
  
  @cache
  factorial(n: number): number {
    if (n <= 1) return 1
    return n * this.factorial(n - 1)
  }
}
```

## 属性装饰器

### 基础属性装饰器

```typescript
function readonly(target: any, propertyName: string) {
  Object.defineProperty(target, propertyName, {
    writable: false,
    configurable: false
  })
}

function format(formatString: string) {
  return function (target: any, propertyName: string) {
    let value: string
    
    const getter = () => value
    const setter = (newVal: string) => {
      value = formatString.replace('%s', newVal)
    }
    
    Object.defineProperty(target, propertyName, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    })
  }
}

class User {
  @readonly
  id: number = 1
  
  @format('用户名: %s')
  name: string
  
  constructor(name: string) {
    this.name = name
  }
}

const user = new User('Alice')
console.log(user.name) // "用户名: Alice"
// user.id = 2 // 错误：无法修改只读属性
```

### 验证装饰器

```typescript
function validate(validationFn: (value: any) => boolean, errorMessage: string) {
  return function (target: any, propertyName: string) {
    let value: any
    
    const getter = () => value
    const setter = (newVal: any) => {
      if (!validationFn(newVal)) {
        throw new Error(`${propertyName}: ${errorMessage}`)
      }
      value = newVal
    }
    
    Object.defineProperty(target, propertyName, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    })
  }
}

class Person {
  @validate(val => typeof val === 'string' && val.length > 0, '姓名不能为空')
  name: string
  
  @validate(val => typeof val === 'number' && val >= 0 && val <= 150, '年龄必须在0-150之间')
  age: number
  
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const person = new Person('Bob', 25)
// person.age = -5 // 抛出错误
```

## 参数装饰器

### 基础参数装饰器

```typescript
function required(target: any, propertyName: string, parameterIndex: number) {
  const existingRequiredParameters: number[] = 
    Reflect.getOwnMetadata('required', target, propertyName) || []
  
  existingRequiredParameters.push(parameterIndex)
  
  Reflect.defineMetadata('required', existingRequiredParameters, target, propertyName)
}

function validate(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value
  
  descriptor.value = function (...args: any[]) {
    const requiredParameters: number[] = 
      Reflect.getOwnMetadata('required', target, propertyName) || []
    
    for (const parameterIndex of requiredParameters) {
      if (args[parameterIndex] === undefined || args[parameterIndex] === null) {
        throw new Error(`参数 ${parameterIndex} 是必需的`)
      }
    }
    
    return method.apply(this, args)
  }
}

class UserService {
  @validate
  createUser(@required name: string, @required email: string, age?: number) {
    return { name, email, age }
  }
}

const service = new UserService()
// service.createUser('Alice', null) // 抛出错误
service.createUser('Alice', 'alice@example.com') // 正常执行
```

## 访问器装饰器

```typescript
function configurable(value: boolean) {
  return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
    descriptor.configurable = value
  }
}

function enumerable(value: boolean) {
  return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value
  }
}

class Point {
  private _x: number
  private _y: number
  
  constructor(x: number, y: number) {
    this._x = x
    this._y = y
  }
  
  @configurable(false)
  @enumerable(true)
  get x() {
    return this._x
  }
  
  set x(value: number) {
    this._x = value
  }
  
  @configurable(false)
  @enumerable(true)
  get y() {
    return this._y
  }
  
  set y(value: number) {
    this._y = value
  }
}
```

## 实际应用案例

### 依赖注入系统

```typescript
const METADATA_KEY = {
  INJECTABLE: 'injectable',
  INJECT: 'inject'
}

function Injectable(target: any) {
  Reflect.defineMetadata(METADATA_KEY.INJECTABLE, true, target)
  return target
}

function Inject(token: string) {
  return function (target: any, propertyName: string, parameterIndex: number) {
    const existingTokens = Reflect.getOwnMetadata(METADATA_KEY.INJECT, target) || []
    existingTokens[parameterIndex] = token
    Reflect.defineMetadata(METADATA_KEY.INJECT, existingTokens, target)
  }
}

class Container {
  private services = new Map<string, any>()
  
  register<T>(token: string, service: new (...args: any[]) => T) {
    this.services.set(token, service)
  }
  
  resolve<T>(token: string): T {
    const serviceConstructor = this.services.get(token)
    if (!serviceConstructor) {
      throw new Error(`Service ${token} not found`)
    }
    
    const tokens = Reflect.getOwnMetadata(METADATA_KEY.INJECT, serviceConstructor) || []
    const dependencies = tokens.map((depToken: string) => 
      depToken ? this.resolve(depToken) : undefined
    )
    
    return new serviceConstructor(...dependencies)
  }
}

@Injectable
class DatabaseService {
  connect() {
    console.log('连接数据库')
  }
}

@Injectable
class UserService {
  constructor(@Inject('DatabaseService') private db: DatabaseService) {}
  
  getUsers() {
    this.db.connect()
    return ['Alice', 'Bob']
  }
}

const container = new Container()
container.register('DatabaseService', DatabaseService)
container.register('UserService', UserService)

const userService = container.resolve<UserService>('UserService')
userService.getUsers()
```

### API 路由装饰器

```typescript
interface RouteMetadata {
  path: string
  method: string
}

function Controller(basePath: string) {
  return function (target: any) {
    Reflect.defineMetadata('basePath', basePath, target)
  }
}

function Get(path: string) {
  return function (target: any, propertyName: string) {
    const routes: RouteMetadata[] = Reflect.getOwnMetadata('routes', target) || []
    routes.push({ path, method: 'GET' })
    Reflect.defineMetadata('routes', routes, target)
    Reflect.defineMetadata('route', { path, method: 'GET' }, target, propertyName)
  }
}

function Post(path: string) {
  return function (target: any, propertyName: string) {
    const routes: RouteMetadata[] = Reflect.getOwnMetadata('routes', target) || []
    routes.push({ path, method: 'POST' })
    Reflect.defineMetadata('routes', routes, target)
    Reflect.defineMetadata('route', { path, method: 'POST' }, target, propertyName)
  }
}

@Controller('/api/users')
class UserController {
  @Get('/')
  getUsers() {
    return ['Alice', 'Bob']
  }
  
  @Get('/:id')
  getUserById() {
    return { id: 1, name: 'Alice' }
  }
  
  @Post('/')
  createUser() {
    return { id: 2, name: 'Charlie' }
  }
}

// 路由注册器
function registerRoutes(controller: any) {
  const basePath = Reflect.getMetadata('basePath', controller)
  const routes = Reflect.getMetadata('routes', controller.prototype) || []
  
  routes.forEach((route: RouteMetadata) => {
    console.log(`注册路由: ${route.method} ${basePath}${route.path}`)
  })
}

registerRoutes(UserController)
```

## 最佳实践

1. **谨慎使用**: 装饰器是实验性特性，使用时要考虑兼容性
2. **保持简单**: 装饰器逻辑应该简单明了
3. **组合使用**: 多个简单装饰器组合比一个复杂装饰器更好
4. **类型安全**: 确保装饰器不破坏类型安全
5. **文档说明**: 为自定义装饰器编写清晰的文档

## 总结

TypeScript 装饰器提供了强大的元编程能力，可以用于实现依赖注入、AOP、验证等功能。虽然是实验性特性，但在合适的场景下能够显著提升代码的可维护性和可读性。