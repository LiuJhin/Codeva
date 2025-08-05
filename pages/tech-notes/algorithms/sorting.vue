<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100 dark:from-gray-900 dark:to-gray-800">
    <div class="container mx-auto px-4 py-16">
      <!-- 页面标题 -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          排序算法
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          深入理解各种排序算法的原理、实现和性能特点，掌握不同场景下的最优排序策略。
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
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
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
                class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full"
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
              class="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
          </svg>
        </div>
        <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-2">暂无文章</h3>
        <p class="text-gray-600 dark:text-gray-400">排序算法相关文章正在准备中...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 页面元数据
useHead({
  title: '排序算法 - CodeVa技术笔记',
  meta: [
    {
      name: 'description',
      content: '深入学习各种排序算法，包括冒泡排序、快速排序、归并排序、堆排序等的原理实现和性能分析。'
    },
    {
      name: 'keywords',
      content: '排序算法,快速排序,归并排序,堆排序,冒泡排序,插入排序,选择排序,时间复杂度'
    }
  ]
})

// 获取排序算法相关文章
const { data, pending, error } = await useAsyncData('sorting-articles', () => {
  return queryContent('tech-notes/algorithms/sorting').find()
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