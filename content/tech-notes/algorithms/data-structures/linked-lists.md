---
title: "链表数据结构"
description: "深入学习链表的实现、操作和经典算法题解"
date: "2025-01-08"
tags: ["数据结构", "链表", "指针", "算法"]
author: "CodeVa Team"
---

# 链表数据结构

链表是一种线性数据结构，元素在内存中不必连续存储。每个节点包含数据和指向下一个节点的指针。

## 链表基础

### 链表的特点
- 动态大小，可以在运行时增长或缩小
- 插入和删除操作高效（O(1)）
- 不支持随机访问，访问元素需要遍历
- 额外的内存开销（存储指针）

### 链表节点定义

```javascript
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
```

## 单链表实现

```javascript
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    // 在头部插入
    prepend(val) {
        const newNode = new ListNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    
    // 在尾部插入
    append(val) {
        const newNode = new ListNode(val);
        
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    
    // 删除指定值的节点
    remove(val) {
        if (!this.head) return false;
        
        if (this.head.val === val) {
            this.head = this.head.next;
            this.size--;
            return true;
        }
        
        let current = this.head;
        while (current.next && current.next.val !== val) {
            current = current.next;
        }
        
        if (current.next) {
            current.next = current.next.next;
            this.size--;
            return true;
        }
        
        return false;
    }
    
    // 查找节点
    find(val) {
        let current = this.head;
        while (current) {
            if (current.val === val) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
    
    // 转换为数组
    toArray() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.val);
            current = current.next;
        }
        return result;
    }
}
```

## 双链表

```javascript
class DoublyListNode {
    constructor(val = 0, next = null, prev = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    // 在头部插入
    prepend(val) {
        const newNode = new DoublyListNode(val);
        
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }
    
    // 在尾部插入
    append(val) {
        const newNode = new DoublyListNode(val);
        
        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }
}
```

## 经典算法题

### 1. 反转链表

```javascript
function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
}
```

### 2. 检测环形链表

```javascript
function hasCycle(head) {
    if (!head || !head.next) return false;
    
    let slow = head;
    let fast = head.next;
    
    while (fast && fast.next) {
        if (slow === fast) return true;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return false;
}
```

### 3. 合并两个有序链表

```javascript
function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    current.next = l1 || l2;
    return dummy.next;
}
```

### 4. 删除链表的倒数第N个节点

```javascript
function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
    
    let first = dummy;
    let second = dummy;
    
    // 移动first指针n+1步
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }
    
    // 同时移动两个指针
    while (first) {
        first = first.next;
        second = second.next;
    }
    
    // 删除节点
    second.next = second.next.next;
    return dummy.next;
}
```

## 时间复杂度对比

| 操作 | 数组 | 链表 |
|------|------|------|
| 访问 | O(1) | O(n) |
| 搜索 | O(n) | O(n) |
| 插入 | O(n) | O(1) |
| 删除 | O(n) | O(1) |

## 常用技巧

1. **虚拟头节点**：简化边界条件处理
2. **双指针**：快慢指针检测环，间隔指针找倒数第k个
3. **递归**：很多链表问题可以用递归优雅解决
4. **哈希表**：辅助解决复杂问题

## 应用场景

- **LRU缓存**：双向链表 + 哈希表
- **撤销功能**：链表存储操作历史
- **音乐播放列表**：循环链表
- **浏览器历史**：双向链表

## 总结

链表是重要的基础数据结构，虽然在现代编程中直接使用较少，但理解链表的原理和操作对于掌握其他数据结构（如栈、队列、图）非常重要。多练习经典的链表算法题，能够提高指针操作和递归思维能力。