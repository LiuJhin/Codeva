---
title: "排序算法详解"
description: "深入理解各种排序算法的原理、实现和性能分析"
date: "2025-01-08"
tags: ["算法", "排序", "时间复杂度", "空间复杂度"]
author: "CodeVa Team"
---

# 排序算法详解

排序是计算机科学中最基础也是最重要的算法之一。本文将详细介绍各种排序算法的原理、实现和性能特点。

## 算法分类

### 按稳定性分类
- **稳定排序**：相等元素的相对位置不变
- **不稳定排序**：相等元素的相对位置可能改变

### 按时间复杂度分类
- **O(n²)**：冒泡排序、选择排序、插入排序
- **O(n log n)**：归并排序、快速排序、堆排序
- **O(n)**：计数排序、桶排序、基数排序（特定条件下）

## 简单排序算法

### 1. 冒泡排序（Bubble Sort）

```javascript
function bubbleSort(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        
        // 如果没有交换，说明已经有序
        if (!swapped) break;
    }
    
    return arr;
}

// 时间复杂度：O(n²)
// 空间复杂度：O(1)
// 稳定性：稳定
```

### 2. 选择排序（Selection Sort）

```javascript
function selectionSort(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        // 找到最小元素的索引
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        // 交换
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    
    return arr;
}

// 时间复杂度：O(n²)
// 空间复杂度：O(1)
// 稳定性：不稳定
```

### 3. 插入排序（Insertion Sort）

```javascript
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;
        
        // 将大于key的元素向后移动
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = key;
    }
    
    return arr;
}

// 时间复杂度：O(n²)
// 空间复杂度：O(1)
// 稳定性：稳定
```

## 高效排序算法

### 1. 归并排序（Merge Sort）

```javascript
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    
    // 添加剩余元素
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }
    
    return result;
}

// 时间复杂度：O(n log n)
// 空间复杂度：O(n)
// 稳定性：稳定
```

### 2. 快速排序（Quick Sort）

```javascript
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

// 随机化快速排序
function randomizedQuickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // 随机选择pivot
        const randomIndex = Math.floor(Math.random() * (high - low + 1)) + low;
        [arr[randomIndex], arr[high]] = [arr[high], arr[randomIndex]];
        
        const pivotIndex = partition(arr, low, high);
        randomizedQuickSort(arr, low, pivotIndex - 1);
        randomizedQuickSort(arr, pivotIndex + 1, high);
    }
    
    return arr;
}

// 时间复杂度：平均O(n log n)，最坏O(n²)
// 空间复杂度：O(log n)
// 稳定性：不稳定
```

### 3. 堆排序（Heap Sort）

```javascript
function heapSort(arr) {
    const n = arr.length;
    
    // 构建最大堆
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    
    // 逐个提取元素
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    
    return arr;
}

function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

// 时间复杂度：O(n log n)
// 空间复杂度：O(1)
// 稳定性：不稳定
```

## 线性时间排序

### 1. 计数排序（Counting Sort）

```javascript
function countingSort(arr, maxValue) {
    const count = new Array(maxValue + 1).fill(0);
    const output = new Array(arr.length);
    
    // 统计每个元素的出现次数
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    
    // 计算累积计数
    for (let i = 1; i <= maxValue; i++) {
        count[i] += count[i - 1];
    }
    
    // 构建输出数组
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }
    
    return output;
}

// 时间复杂度：O(n + k)，k为数据范围
// 空间复杂度：O(k)
// 稳定性：稳定
```

### 2. 桶排序（Bucket Sort）

```javascript
function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) return arr;
    
    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);
    
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const buckets = new Array(bucketCount).fill(null).map(() => []);
    
    // 将元素分配到桶中
    for (let i = 0; i < arr.length; i++) {
        const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
        buckets[bucketIndex].push(arr[i]);
    }
    
    // 对每个桶进行排序并合并
    const result = [];
    for (let i = 0; i < buckets.length; i++) {
        if (buckets[i].length > 0) {
            buckets[i].sort((a, b) => a - b);
            result.push(...buckets[i]);
        }
    }
    
    return result;
}

// 时间复杂度：平均O(n + k)，最坏O(n²)
// 空间复杂度：O(n + k)
// 稳定性：稳定
```

### 3. 基数排序（Radix Sort）

```javascript
function radixSort(arr) {
    const maxNum = Math.max(...arr);
    const maxDigits = maxNum.toString().length;
    
    for (let digit = 0; digit < maxDigits; digit++) {
        arr = countingSortByDigit(arr, digit);
    }
    
    return arr;
}

function countingSortByDigit(arr, digit) {
    const count = new Array(10).fill(0);
    const output = new Array(arr.length);
    
    // 统计每个数字的出现次数
    for (let i = 0; i < arr.length; i++) {
        const digitValue = Math.floor(arr[i] / Math.pow(10, digit)) % 10;
        count[digitValue]++;
    }
    
    // 计算累积计数
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    
    // 构建输出数组
    for (let i = arr.length - 1; i >= 0; i--) {
        const digitValue = Math.floor(arr[i] / Math.pow(10, digit)) % 10;
        output[count[digitValue] - 1] = arr[i];
        count[digitValue]--;
    }
    
    return output;
}

// 时间复杂度：O(d * (n + k))，d为最大数字位数
// 空间复杂度：O(n + k)
// 稳定性：稳定
```

## 性能对比

| 算法 | 最好时间 | 平均时间 | 最坏时间 | 空间复杂度 | 稳定性 |
|------|----------|----------|----------|------------|--------|
| 冒泡排序 | O(n) | O(n²) | O(n²) | O(1) | 稳定 |
| 选择排序 | O(n²) | O(n²) | O(n²) | O(1) | 不稳定 |
| 插入排序 | O(n) | O(n²) | O(n²) | O(1) | 稳定 |
| 归并排序 | O(n log n) | O(n log n) | O(n log n) | O(n) | 稳定 |
| 快速排序 | O(n log n) | O(n log n) | O(n²) | O(log n) | 不稳定 |
| 堆排序 | O(n log n) | O(n log n) | O(n log n) | O(1) | 不稳定 |
| 计数排序 | O(n + k) | O(n + k) | O(n + k) | O(k) | 稳定 |
| 桶排序 | O(n + k) | O(n + k) | O(n²) | O(n + k) | 稳定 |
| 基数排序 | O(d(n + k)) | O(d(n + k)) | O(d(n + k)) | O(n + k) | 稳定 |

## 选择建议

1. **小规模数据**：插入排序（简单高效）
2. **大规模数据**：快速排序或归并排序
3. **需要稳定性**：归并排序或插入排序
4. **内存受限**：堆排序或快速排序
5. **特定数据范围**：计数排序或基数排序
6. **几乎有序的数据**：插入排序

## 总结

排序算法是算法学习的重要基础，不同的算法适用于不同的场景。理解各种排序算法的原理和特点，能够帮助我们在实际开发中选择最合适的排序方法，提高程序的性能和效率。