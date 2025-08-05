---
title: "数组与字符串"
description: "深入理解数组和字符串的基本操作、常见算法和优化技巧"
date: "2025-01-08"
tags: ["数据结构", "数组", "字符串", "算法"]
author: "CodeVa Team"
---

# 数组与字符串

数组和字符串是编程中最基础也是最重要的数据结构。掌握它们的操作技巧对于解决算法问题至关重要。

## 数组基础

### 数组的特点
- 连续的内存空间
- 随机访问，时间复杂度 O(1)
- 插入和删除操作可能需要移动元素

### 常见操作

```javascript
// 数组初始化
const arr = new Array(5).fill(0);
const arr2 = [1, 2, 3, 4, 5];

// 遍历数组
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 使用forEach
arr.forEach((item, index) => {
    console.log(`Index: ${index}, Value: ${item}`);
});
```

## 双指针技巧

双指针是处理数组问题的重要技巧：

```javascript
// 反转数组
function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    
    return arr;
}
```

## 字符串处理

### 字符串特点
- 在JavaScript中字符串是不可变的
- 可以像数组一样访问字符
- 丰富的内置方法

### 常用方法

```javascript
const str = "Hello World";

// 字符串长度
console.log(str.length);

// 字符访问
console.log(str[0]); // 'H'
console.log(str.charAt(0)); // 'H'

// 子字符串
console.log(str.substring(0, 5)); // 'Hello'
console.log(str.slice(0, 5)); // 'Hello'

// 查找
console.log(str.indexOf('o')); // 4
console.log(str.includes('World')); // true
```

## 经典算法题

### 1. 两数之和

```javascript
function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}
```

### 2. 最长回文子串

```javascript
function longestPalindrome(s) {
    if (!s || s.length < 2) return s;
    
    let start = 0;
    let maxLen = 1;
    
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currentLen = right - left + 1;
            if (currentLen > maxLen) {
                start = left;
                maxLen = currentLen;
            }
            left--;
            right++;
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i); // 奇数长度
        expandAroundCenter(i, i + 1); // 偶数长度
    }
    
    return s.substring(start, start + maxLen);
}
```

## 时间复杂度分析

| 操作 | 时间复杂度 | 说明 |
|------|------------|------|
| 访问 | O(1) | 通过索引直接访问 |
| 搜索 | O(n) | 线性搜索 |
| 插入 | O(n) | 可能需要移动元素 |
| 删除 | O(n) | 可能需要移动元素 |

## 实践建议

1. **熟练掌握基本操作**：数组和字符串的基本操作要烂熟于心
2. **理解时间复杂度**：选择合适的算法和数据结构
3. **多练习经典题目**：LeetCode上的数组和字符串题目
4. **掌握常用技巧**：双指针、滑动窗口、哈希表等

## 总结

数组和字符串是算法学习的基础，掌握好它们的操作和常见算法模式，为后续学习更复杂的数据结构和算法打下坚实基础。