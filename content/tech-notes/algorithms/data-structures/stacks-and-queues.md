---
title: "栈与队列"
description: "掌握栈和队列的实现原理、操作特点和实际应用场景"
date: "2025-01-08"
tags: ["数据结构", "栈", "队列", "LIFO", "FIFO"]
author: "CodeVa Team"
---

# 栈与队列

栈和队列是两种重要的线性数据结构，它们在数据的存取方式上有着本质的区别。

## 栈（Stack）

栈是一种后进先出（LIFO - Last In First Out）的数据结构。

### 栈的特点
- 只能在栈顶进行插入和删除操作
- 后进先出的访问顺序
- 主要操作：push（入栈）、pop（出栈）、peek/top（查看栈顶）

### 栈的实现

#### 基于数组的实现

```javascript
class ArrayStack {
    constructor() {
        this.items = [];
    }
    
    // 入栈
    push(element) {
        this.items.push(element);
    }
    
    // 出栈
    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.items.pop();
    }
    
    // 查看栈顶元素
    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.items[this.items.length - 1];
    }
    
    // 检查是否为空
    isEmpty() {
        return this.items.length === 0;
    }
    
    // 获取栈的大小
    size() {
        return this.items.length;
    }
    
    // 清空栈
    clear() {
        this.items = [];
    }
}
```

#### 基于链表的实现

```javascript
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedStack {
    constructor() {
        this.top = null;
        this.count = 0;
    }
    
    push(element) {
        const node = new ListNode(element);
        node.next = this.top;
        this.top = node;
        this.count++;
    }
    
    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        const value = this.top.val;
        this.top = this.top.next;
        this.count--;
        return value;
    }
    
    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.top.val;
    }
    
    isEmpty() {
        return this.top === null;
    }
    
    size() {
        return this.count;
    }
}
```

## 队列（Queue）

队列是一种先进先出（FIFO - First In First Out）的数据结构。

### 队列的特点
- 在队尾插入元素，在队头删除元素
- 先进先出的访问顺序
- 主要操作：enqueue（入队）、dequeue（出队）、front（查看队头）

### 队列的实现

#### 基于数组的实现

```javascript
class ArrayQueue {
    constructor() {
        this.items = [];
    }
    
    // 入队
    enqueue(element) {
        this.items.push(element);
    }
    
    // 出队
    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.items.shift();
    }
    
    // 查看队头元素
    front() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.items[0];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
}
```

#### 循环队列实现

```javascript
class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.front = 0;
        this.rear = 0;
        this.count = 0;
    }
    
    enqueue(element) {
        if (this.isFull()) {
            throw new Error('Queue is full');
        }
        this.items[this.rear] = element;
        this.rear = (this.rear + 1) % this.capacity;
        this.count++;
    }
    
    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        const element = this.items[this.front];
        this.items[this.front] = undefined;
        this.front = (this.front + 1) % this.capacity;
        this.count--;
        return element;
    }
    
    peek() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.items[this.front];
    }
    
    isEmpty() {
        return this.count === 0;
    }
    
    isFull() {
        return this.count === this.capacity;
    }
    
    size() {
        return this.count;
    }
}
```

## 双端队列（Deque）

```javascript
class Deque {
    constructor() {
        this.items = [];
    }
    
    // 前端添加
    addFront(element) {
        this.items.unshift(element);
    }
    
    // 后端添加
    addRear(element) {
        this.items.push(element);
    }
    
    // 前端移除
    removeFront() {
        if (this.isEmpty()) {
            throw new Error('Deque is empty');
        }
        return this.items.shift();
    }
    
    // 后端移除
    removeRear() {
        if (this.isEmpty()) {
            throw new Error('Deque is empty');
        }
        return this.items.pop();
    }
    
    peekFront() {
        if (this.isEmpty()) {
            throw new Error('Deque is empty');
        }
        return this.items[0];
    }
    
    peekRear() {
        if (this.isEmpty()) {
            throw new Error('Deque is empty');
        }
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
}
```

## 经典算法题

### 1. 有效的括号

```javascript
function isValid(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}
```

### 2. 用栈实现队列

```javascript
class MyQueue {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }
    
    push(x) {
        this.inStack.push(x);
    }
    
    pop() {
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack.pop();
    }
    
    peek() {
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack[this.outStack.length - 1];
    }
    
    empty() {
        return this.inStack.length === 0 && this.outStack.length === 0;
    }
}
```

### 3. 滑动窗口最大值

```javascript
function maxSlidingWindow(nums, k) {
    const result = [];
    const deque = []; // 存储索引
    
    for (let i = 0; i < nums.length; i++) {
        // 移除超出窗口范围的元素
        while (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }
        
        // 移除比当前元素小的元素
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        
        deque.push(i);
        
        // 当窗口大小达到k时，记录最大值
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    
    return result;
}
```

## 时间复杂度

| 操作 | 栈 | 队列 | 双端队列 |
|------|----|----- |---------|
| 插入 | O(1) | O(1) | O(1) |
| 删除 | O(1) | O(1) | O(1) |
| 查看 | O(1) | O(1) | O(1) |
| 搜索 | O(n) | O(n) | O(n) |

## 应用场景

### 栈的应用
- **函数调用栈**：程序执行时的函数调用管理
- **表达式求值**：中缀、后缀表达式转换和计算
- **括号匹配**：检查括号是否正确配对
- **浏览器历史**：后退功能
- **撤销操作**：编辑器的撤销功能

### 队列的应用
- **BFS算法**：广度优先搜索
- **任务调度**：操作系统的进程调度
- **缓冲区**：数据流处理
- **打印队列**：打印任务管理
- **网络请求**：请求排队处理

### 双端队列的应用
- **滑动窗口问题**：维护窗口内的最值
- **回文检测**：从两端同时检查
- **LRU缓存**：结合哈希表实现

## 总结

栈和队列是计算机科学中的基础数据结构，它们的简单性和实用性使得它们在各种算法和应用中都有广泛的使用。理解它们的工作原理和实现方式，对于解决复杂的编程问题非常重要。