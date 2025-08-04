<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950">
    <!-- 动态背景 -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- 精细网格 -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <!-- 动态光效 -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-400/10 rounded-full blur-3xl animate-pulse-slow" />
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 2s" />
    </div>

    <div class="relative z-10 container mx-auto px-6 py-20">
      <!-- 页面标题 -->
      <div class="text-center mb-20">
        <div class="space-y-4">
          <h1 class="text-6xl md:text-7xl font-thin tracking-tight text-gray-900 dark:text-white transition-colors duration-700 leading-none">
            TypeScript
          </h1>
          <div class="text-4xl md:text-5xl font-light bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent leading-none">
            技术文章
          </div>
        </div>
        <p class="text-xl font-light text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-12 leading-relaxed">
          掌握TypeScript类型系统和高级特性
        </p>
      </div>

      <!-- 返回按钮 -->
      <div class="mb-12">
        <NuxtLink
          to="/tech-notes/frontend"
          class="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span>返回前端技术笔记</span>
        </NuxtLink>
      </div>

      <!-- 文章列表 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <article
          v-for="article in data?.value || []"
          :key="article._path"
            class="group relative overflow-hidden rounded-[1.5rem] bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl border border-gray-200/30 dark:border-gray-700/30 p-8 hover:bg-white/90 dark:hover:bg-gray-900/90 hover:shadow-[0_24px_48px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_24px_48px_rgba(0,0,0,0.3)] transform hover:-translate-y-2 hover:scale-[1.01] transition-all duration-400 ease-out"
          >
            <!-- 背景装饰 -->
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 dark:from-indigo-400/10 dark:to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            
            <!-- 发光效果 -->
            <div class="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-400/20 dark:to-purple-400/20 blur-xl" />

            <div class="relative z-10">
              <!-- 文章图标 -->
              <div class="mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-indigo-500/30 group-hover:scale-105 transition-all duration-400">
                  <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                  </svg>
                </div>
              </div>

              <!-- 文章内容 -->
              <div class="space-y-4">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-400">
                  {{ article.title }}
                </h3>
                
                <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {{ article.description }}
                </p>

                <!-- 文章元信息 -->
                <div class="flex items-center justify-between pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                  <div class="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-500">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{{ formatDate(article.date) }}</span>
                  </div>
                  
                  <NuxtLink
                    :to="article._path"
                    class="inline-flex items-center space-x-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-sm font-medium transition-colors duration-300"
                  >
                    <span>阅读文章</span>
                    <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </article>
      </div>
    </div>
  </div>
</template>

<script setup>
// 获取文章列表
const { data } = await useAsyncData('typescript-articles', () => 
  queryContent('tech-notes/frontend/typescript').find()
)

// 页面元数据
useHead({
  title: 'TypeScript 技术文章 - CodeVa',
  meta: [
    {
      name: 'description',
      content: '掌握TypeScript类型系统和高级特性，提升代码质量和开发效率'
    },
    {
      property: 'og:title',
      content: 'TypeScript 技术文章 - CodeVa'
    },
    {
      property: 'og:description',
      content: '掌握TypeScript类型系统和高级特性，提升代码质量和开发效率'
    }
  ]
})

// 格式化日期
const formatDate = (dateString) => {
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
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 硬件加速优化 */
.group {
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;
}

/* 响应式优化 */
@media (max-width: 768px) {
  .group {
    transition-duration: 300ms;
  }
}

/* 减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
  .group {
    transition: none;
  }
  
  .animate-pulse-slow {
    animation: none;
  }
}
</style>