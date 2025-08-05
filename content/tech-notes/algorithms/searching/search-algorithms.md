---
title: "搜索算法详解"
description: "掌握各种搜索算法的原理、实现和应用场景"
date: "2025-01-08"
tags: ["算法", "搜索", "二分查找", "DFS", "BFS"]
author: "CodeVa Team"
---

# 搜索算法详解

搜索算法是在数据结构中查找特定元素的方法。根据数据的组织方式和搜索策略，可以分为多种类型。

## 线性搜索

### 顺序搜索（Linear Search）

最简单的搜索算法，逐个检查每个元素。

```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// 时间复杂度：O(n)
// 空间复杂度：O(1)
// 适用场景：无序数组、小规模数据
```

### 哨兵搜索（Sentinel Search）

通过在数组末尾添加哨兵元素来减少比较次数。

```javascript
function sentinelSearch(arr, target) {
    const n = arr.length;
    const last = arr[n - 1];
    
    // 设置哨兵
    arr[n - 1] = target;
    
    let i = 0;
    while (arr[i] !== target) {
        i++;
    }
    
    // 恢复原值
    arr[n - 1] = last;
    
    // 检查是否找到目标或者目标就是最后一个元素
    if (i < n - 1 || arr[n - 1] === target) {
        return i;
    }
    
    return -1;
}
```

## 二分搜索

### 标准二分搜索（Binary Search）

适用于有序数组的高效搜索算法。

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

// 递归实现
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }
    
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}

// 时间复杂度：O(log n)
// 空间复杂度：O(1) 迭代版本，O(log n) 递归版本
```

### 二分搜索变种

#### 查找第一个等于目标值的位置

```javascript
function findFirst(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            result = mid;
            right = mid - 1; // 继续向左搜索
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}
```

#### 查找最后一个等于目标值的位置

```javascript
function findLast(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            result = mid;
            left = mid + 1; // 继续向右搜索
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}
```

#### 查找第一个大于等于目标值的位置

```javascript
function findFirstGreaterEqual(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = arr.length;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] >= target) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return result;
}
```

## 树的搜索

### 深度优先搜索（DFS）

#### 二叉树DFS

```javascript
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 前序遍历
function preorderDFS(root, target) {
    if (!root) return false;
    
    if (root.val === target) return true;
    
    return preorderDFS(root.left, target) || preorderDFS(root.right, target);
}

// 中序遍历
function inorderDFS(root, target) {
    if (!root) return false;
    
    if (inorderDFS(root.left, target)) return true;
    if (root.val === target) return true;
    return inorderDFS(root.right, target);
}

// 后序遍历
function postorderDFS(root, target) {
    if (!root) return false;
    
    if (postorderDFS(root.left, target)) return true;
    if (postorderDFS(root.right, target)) return true;
    return root.val === target;
}

// 迭代实现DFS
function iterativeDFS(root, target) {
    if (!root) return false;
    
    const stack = [root];
    
    while (stack.length > 0) {
        const node = stack.pop();
        
        if (node.val === target) {
            return true;
        }
        
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    
    return false;
}
```

#### 图的DFS

```javascript
function graphDFS(graph, start, target, visited = new Set()) {
    if (start === target) return true;
    
    visited.add(start);
    
    for (const neighbor of graph[start] || []) {
        if (!visited.has(neighbor)) {
            if (graphDFS(graph, neighbor, target, visited)) {
                return true;
            }
        }
    }
    
    return false;
}

// 迭代实现
function iterativeGraphDFS(graph, start, target) {
    const stack = [start];
    const visited = new Set();
    
    while (stack.length > 0) {
        const node = stack.pop();
        
        if (node === target) return true;
        
        if (!visited.has(node)) {
            visited.add(node);
            
            for (const neighbor of graph[node] || []) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
    
    return false;
}
```

### 广度优先搜索（BFS）

#### 二叉树BFS

```javascript
function treeBFS(root, target) {
    if (!root) return false;
    
    const queue = [root];
    
    while (queue.length > 0) {
        const node = queue.shift();
        
        if (node.val === target) {
            return true;
        }
        
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    
    return false;
}

// 层序遍历
function levelOrder(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    
    return result;
}
```

#### 图的BFS

```javascript
function graphBFS(graph, start, target) {
    const queue = [start];
    const visited = new Set([start]);
    
    while (queue.length > 0) {
        const node = queue.shift();
        
        if (node === target) return true;
        
        for (const neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    
    return false;
}

// 最短路径BFS
function shortestPath(graph, start, target) {
    const queue = [[start, [start]]];
    const visited = new Set([start]);
    
    while (queue.length > 0) {
        const [node, path] = queue.shift();
        
        if (node === target) {
            return path;
        }
        
        for (const neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, [...path, neighbor]]);
            }
        }
    }
    
    return null;
}
```

## 高级搜索算法

### 插值搜索（Interpolation Search）

适用于均匀分布的有序数组。

```javascript
function interpolationSearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right && target >= arr[left] && target <= arr[right]) {
        if (left === right) {
            return arr[left] === target ? left : -1;
        }
        
        // 插值公式
        const pos = left + Math.floor(
            ((target - arr[left]) / (arr[right] - arr[left])) * (right - left)
        );
        
        if (arr[pos] === target) {
            return pos;
        } else if (arr[pos] < target) {
            left = pos + 1;
        } else {
            right = pos - 1;
        }
    }
    
    return -1;
}

// 时间复杂度：平均O(log log n)，最坏O(n)
```

### 指数搜索（Exponential Search）

```javascript
function exponentialSearch(arr, target) {
    if (arr[0] === target) return 0;
    
    // 找到范围
    let bound = 1;
    while (bound < arr.length && arr[bound] <= target) {
        bound *= 2;
    }
    
    // 在找到的范围内进行二分搜索
    return binarySearch(
        arr.slice(bound / 2, Math.min(bound, arr.length)),
        target
    ) + bound / 2;
}

// 时间复杂度：O(log n)
```

### 跳跃搜索（Jump Search）

```javascript
function jumpSearch(arr, target) {
    const n = arr.length;
    const step = Math.floor(Math.sqrt(n));
    let prev = 0;
    
    // 跳跃查找
    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) return -1;
    }
    
    // 线性搜索
    while (arr[prev] < target) {
        prev++;
        if (prev === Math.min(step, n)) return -1;
    }
    
    return arr[prev] === target ? prev : -1;
}

// 时间复杂度：O(√n)
```

## 字符串搜索

### KMP算法

```javascript
function buildLPS(pattern) {
    const lps = new Array(pattern.length).fill(0);
    let len = 0;
    let i = 1;
    
    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    
    return lps;
}

function KMPSearch(text, pattern) {
    const lps = buildLPS(pattern);
    const result = [];
    let i = 0; // text的索引
    let j = 0; // pattern的索引
    
    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }
        
        if (j === pattern.length) {
            result.push(i - j);
            j = lps[j - 1];
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    
    return result;
}

// 时间复杂度：O(n + m)
```

## 性能对比

| 算法 | 时间复杂度 | 空间复杂度 | 适用场景 |
|------|------------|------------|----------|
| 线性搜索 | O(n) | O(1) | 无序数据、小规模 |
| 二分搜索 | O(log n) | O(1) | 有序数组 |
| 插值搜索 | O(log log n) | O(1) | 均匀分布的有序数据 |
| 指数搜索 | O(log n) | O(1) | 无界或大规模有序数据 |
| 跳跃搜索 | O(√n) | O(1) | 有序数组，介于线性和二分之间 |
| DFS | O(V + E) | O(V) | 图遍历、路径查找 |
| BFS | O(V + E) | O(V) | 最短路径、层次遍历 |
| KMP | O(n + m) | O(m) | 字符串模式匹配 |

## 应用场景

1. **数据库索引**：B树、B+树搜索
2. **搜索引擎**：倒排索引、全文搜索
3. **游戏AI**：A*算法、Minimax
4. **网络路由**：最短路径算法
5. **文本编辑器**：字符串搜索和替换

## 总结

搜索算法的选择取决于数据的特性和应用场景。理解不同搜索算法的原理和适用条件，能够帮助我们在实际开发中选择最合适的搜索策略，提高程序的效率和性能。