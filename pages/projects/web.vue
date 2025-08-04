<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <div class="mb-8">
          <NuxtLink to="/projects" class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            返回项目列表
          </NuxtLink>
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Web应用项目
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            为企业客户提供高性能、可扩展的Web应用托管服务
          </p>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">项目特色</h2>
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 dark:text-white">高性能架构</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">采用CDN加速和负载均衡技术</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 dark:text-white">自动扩展</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">根据流量自动调整服务器资源</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 dark:text-white">安全防护</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">WAF防火墙和DDoS防护</p>
                </div>
              </div>
            </div>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 dark:text-white">数据备份</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">自动化备份和快速恢复</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 dark:text-white">监控告警</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">实时监控和智能告警系统</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 dark:text-white">技术支持</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">专业团队24/7技术支持</p>
                </div>
              </div>
            </div>
          </div>

          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">技术栈支持</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div class="text-2xl mb-2">⚛️</div>
              <div class="text-sm font-medium text-gray-900 dark:text-white">React</div>
            </div>
            <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div class="text-2xl mb-2">💚</div>
              <div class="text-sm font-medium text-gray-900 dark:text-white">Vue.js</div>
            </div>
            <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div class="text-2xl mb-2">🅰️</div>
              <div class="text-sm font-medium text-gray-900 dark:text-white">Angular</div>
            </div>
            <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div class="text-2xl mb-2">🟢</div>
              <div class="text-sm font-medium text-gray-900 dark:text-white">Node.js</div>
            </div>
          </div>

          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">成功案例</h2>
          <div class="space-y-6">
            <div class="border-l-4 border-blue-500 pl-4">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">电商平台项目</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-2">为大型电商平台提供高并发Web应用托管服务，支持日均百万级访问量。</p>
              <div class="text-sm text-gray-500 dark:text-gray-400">性能提升: 响应时间减少60%，可用性达到99.99%</div>
            </div>
            <div class="border-l-4 border-green-500 pl-4">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">企业管理系统</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-2">为跨国企业部署全球化的管理系统，支持多地区访问优化。</p>
              <div class="text-sm text-gray-500 dark:text-gray-400">业务价值: 运营效率提升40%，IT成本降低30%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Web应用项目 - 云服务提供商',
  meta: [
    { name: 'description', content: '专业的Web应用托管服务，高性能架构，自动扩展，安全防护，为企业提供可靠的云计算解决方案。' }
  ]
})
</script>