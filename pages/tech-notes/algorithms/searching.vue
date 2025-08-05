<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 dark:from-gray-900 dark:to-gray-800">
    <div class="container mx-auto px-4 py-16">
      <!-- 页面标题 -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          搜索算法
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          掌握各种搜索算法的原理和实现，包括线性搜索、二分搜索、深度优先搜索、广度优先搜索等。
        </p>
      </div>

      <!-- 文章列表 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <article
          v-for="article in data?.value || []"
          :key="article._path"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
        >
          <div class="p-8">
            <!-- 文章标题 -->
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
              {{ article.title }}
            </h2>
            
            <!-- 文章描述 -->
            <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {{ article.description }}
            </p>
            
            <!-- 标签 -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tag in article.tags || []"
                :key="tag"
                class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm rounded-full"
              >
                {{ tag }}
              </span>
            </div>
            
            <!-- 文章元信息 -->
            <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span>{{ formatDate(article.date) }}</span>
              <span>{{ article.author }}</span>
            </div>
            
            <!-- 阅读按钮 -->
            <NuxtLink
              :to="article._path"
              class="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              阅读文章
              <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </NuxtLink>
          </div>
        </article>
      </div>

      <!-- 空状态 -->
      <div v-if="!data?.value || data.value.length === 0" class="text-center py-16">
        <div class="text-gray-400 dark:text-gray-500 mb-4">
          <svg class="mx-auto w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-2">暂无文章</h3>
        <p class="text-gray-600 dark:text-gray-400">搜索算法相关文章正在准备中...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 页面元数据
useHead({
  title: '搜索算法 - CodeVa技术笔记',
  meta: [
    {
      name: 'description',
      content: '深入学习各种搜索算法，包括线性搜索、二分搜索、深度优先搜索、广度优先搜索、A*算法等。'
    },
    {
      name: 'keywords',
      content: '搜索算法,二分查找,DFS,BFS,线性搜索,哈希查找,字符串匹配,KMP算法'
    }
  ]
})

// 获取搜索算法相关文章
const { data, pending, error } = await useAsyncData('searching-articles', () => {
  return queryContent('tech-notes/algorithms/searching').find()
})

// 格式化日期
function formatDate(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
/* 自定义样式 */
.container {
  max-width: 1200px;
}

/* 卡片悬停效果 */
article:hover {
  transform: translateY(-4px);
}

/* 渐变背景动画 */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.bg-gradient-to-br {
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
</style>