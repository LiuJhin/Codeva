<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            项目案例
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            展示我们为客户提供的优质云服务解决方案
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Web项目 -->
          <NuxtLink to="/projects/web" class="group">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:shadow-xl transition-shadow duration-300">
              <div class="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"></path>
                </svg>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Web应用项目</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">为企业客户提供高性能Web应用托管服务</p>
                <div class="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  <span class="text-sm font-medium">查看详情</span>
                  <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </NuxtLink>

          <!-- 移动应用项目 -->
          <NuxtLink to="/projects/mobile" class="group">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:shadow-xl transition-shadow duration-300">
              <div class="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"></path>
                </svg>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">移动应用项目</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">移动应用后端服务和API托管解决方案</p>
                <div class="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  <span class="text-sm font-medium">查看详情</span>
                  <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </NuxtLink>

          <!-- 设计项目 -->
          <NuxtLink to="/projects/design" class="group">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:shadow-xl transition-shadow duration-300">
              <div class="h-48 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                </svg>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">设计项目</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">创意设计工作室的云存储和协作平台</p>
                <div class="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  <span class="text-sm font-medium">查看详情</span>
                  <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </NuxtLink>

          <!-- 案例研究 -->
          <NuxtLink to="/projects/case-studies" class="group">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:shadow-xl transition-shadow duration-300">
              <div class="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">案例研究</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">深度分析成功项目的技术实现和业务价值</p>
                <div class="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  <span class="text-sm font-medium">查看详情</span>
                  <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: '项目案例 - 云服务提供商',
  meta: [
    { name: 'description', content: '查看我们为客户提供的Web应用、移动应用、设计项目等云服务解决方案案例。' }
  ]
})
</script>