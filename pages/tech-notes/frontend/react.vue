<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
    <!-- 动态背景 -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- 精细网格 -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <!-- 动态光效 -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow" />
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 2s" />
    </div>

    <div class="relative z-10 container mx-auto px-6 py-20">
      <!-- 页面标题 -->
      <div class="text-center mb-20">
        <div class="space-y-4">
          <h1 class="text-6xl md:text-7xl font-thin tracking-tight text-gray-900 dark:text-white transition-colors duration-700 leading-none">
            React
          </h1>
          <div class="text-4xl md:text-5xl font-light bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent leading-none">
            技术文章
          </div>
        </div>
        <p class="text-xl font-light text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-12 leading-relaxed">
          掌握React现代开发技术和最佳实践
        </p>
      </div>

      <!-- 返回按钮 -->
      <div class="mb-12">
        <NuxtLink
          to="/tech-notes/frontend"
          class="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
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
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 dark:from-blue-400/10 dark:to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            
            <!-- 发光效果 -->
            <div class="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-400/20 dark:to-cyan-400/20 blur-xl" />

            <div class="relative z-10">
              <!-- 文章图标 -->
              <div class="mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/30 group-hover:scale-105 transition-all duration-400">
                  <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.992-1.36-1.56z"/>
                  </svg>
                </div>
              </div>

              <!-- 文章内容 -->
              <div class="space-y-4">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-400">
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
                    class="inline-flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-300"
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
const { data } = await useAsyncData('react-articles', () => 
  queryContent('tech-notes/frontend/react').find()
)

// 页面元数据
useHead({
  title: 'React 技术文章 - CodeVa',
  meta: [
    {
      name: 'description',
      content: '掌握React现代开发技术和最佳实践，提升前端开发技能'
    },
    {
      property: 'og:title',
      content: 'React 技术文章 - CodeVa'
    },
    {
      property: 'og:description',
      content: '掌握React现代开发技术和最佳实践，提升前端开发技能'
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