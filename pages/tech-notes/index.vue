<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
    <div class="container mx-auto px-4 py-16">
      <!-- 页面标题 -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          技术实验笔记
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          记录技术探索的点点滴滴，分享实践经验和深度思考，构建完整的技术知识体系。
        </p>
      </div>

      <!-- 技术分类网格 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- 数据结构与算法 -->
        <NuxtLink
          to="/tech-notes/algorithms"
          class="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <div class="p-8">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              数据结构与算法
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              深入学习数据结构和算法的核心概念，包括数组、链表、树、图、排序、搜索等基础知识。
            </p>
            <div class="flex items-center text-blue-600 dark:text-blue-400 font-medium">
              <span>探索算法世界</span>
              <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <!-- 前端技术 -->
        <NuxtLink
          to="/tech-notes/frontend"
          class="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <div class="p-8">
            <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
              前端技术
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              现代前端开发技术栈，包括Vue.js、React、TypeScript、Three.js等框架和工具的实践经验。
            </p>
            <div class="flex items-center text-green-600 dark:text-green-400 font-medium">
              <span>前端技术探索</span>
              <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <!-- 后端技术 -->
        <NuxtLink
          to="/tech-notes/backend"
          class="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <div class="p-8">
            <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              后端技术
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              服务端开发技术，包括API设计、数据库优化、微服务架构、性能调优等核心技术。
            </p>
            <div class="flex items-center text-purple-600 dark:text-purple-400 font-medium">
              <span>后端技术深度</span>
              <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <!-- 人工智能 -->
        <NuxtLink
          to="/tech-notes/ai"
          class="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <div class="p-8">
            <div class="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
              人工智能
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              AI技术探索，包括机器学习、深度学习、自然语言处理、计算机视觉等前沿技术。
            </p>
            <div class="flex items-center text-red-600 dark:text-red-400 font-medium">
              <span>AI技术前沿</span>
              <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <!-- 系统架构 -->
        <NuxtLink
          to="/tech-notes/architecture"
          class="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <div class="p-8">
            <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              系统架构
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              大型系统设计与架构模式，包括分布式系统、微服务、高可用性、可扩展性等架构实践。
            </p>
            <div class="flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
              <span>架构设计思考</span>
              <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <!-- DevOps运维 -->
        <NuxtLink
          to="/tech-notes/devops"
          class="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <div class="p-8">
            <div class="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
              DevOps运维
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              DevOps实践与运维技术，包括CI/CD、容器化、监控告警、自动化部署等运维工具链。
            </p>
            <div class="flex items-center text-yellow-600 dark:text-yellow-400 font-medium">
              <span>运维自动化</span>
              <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <!-- 技术思考 -->
        <NuxtLink
          to="/tech-notes/thinking"
          class="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <div class="p-8">
            <div class="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
              技术思考
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              技术发展趋势分析、编程哲学思考、团队协作经验、技术选型决策等深度思考内容。
            </p>
            <div class="flex items-center text-gray-600 dark:text-gray-400 font-medium">
              <span>深度思考</span>
              <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- 统计信息 -->
      <div class="mt-16 text-center">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">7</div>
            <div class="text-gray-600 dark:text-gray-300">技术分类</div>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div class="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">50+</div>
            <div class="text-gray-600 dark:text-gray-300">技术文章</div>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">持续更新</div>
            <div class="text-gray-600 dark:text-gray-300">知识积累</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 页面元数据
useHead({
  title: '技术实验笔记 - CodeVa',
  meta: [
    {
      name: 'description',
      content: '记录技术探索的点点滴滴，分享实践经验和深度思考，涵盖前端、后端、算法、AI、架构、运维等技术领域。'
    },
    {
      name: 'keywords',
      content: '技术笔记,前端开发,后端技术,数据结构,算法,人工智能,系统架构,DevOps,技术思考'
    }
  ]
})
</script>

<style scoped>
/* 自定义样式 */
.container {
  max-width: 1200px;
}

/* 卡片悬停效果 */
.group:hover {
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