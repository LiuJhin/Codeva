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
            移动应用项目
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            为移动应用提供稳定可靠的后端服务和API托管解决方案
          </p>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">移动后端服务</h2>
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 dark:text-white">RESTful API</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">标准化API接口设计和管理</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 dark:text-white">推送服务</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">实时消息推送和通知服务</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 dark:text-white">用户认证</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">安全的用户登录和权限管理</p>
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
                  <h3 class="font-medium text-gray-900 dark:text-white">数据同步</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">多设备数据实时同步</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 dark:text-white">文件存储</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">云端文件存储和CDN加速</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 dark:text-white">分析统计</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">用户行为分析和数据统计</p>
                </div>
              </div>
            </div>
          </div>

          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">支持平台</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div class="text-2xl mb-2">📱</div>
              <div class="text-sm font-medium text-gray-900 dark:text-white">iOS</div>
            </div>
            <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div class="text-2xl mb-2">🤖</div>
              <div class="text-sm font-medium text-gray-900 dark:text-white">Android</div>
            </div>
            <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div class="text-2xl mb-2">⚛️</div>
              <div class="text-sm font-medium text-gray-900 dark:text-white">React Native</div>
            </div>
            <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div class="text-2xl mb-2">🎯</div>
              <div class="text-sm font-medium text-gray-900 dark:text-white">Flutter</div>
            </div>
          </div>

          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">成功案例</h2>
          <div class="space-y-6">
            <div class="border-l-4 border-blue-500 pl-4">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">社交应用项目</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-2">为社交应用提供实时聊天、图片分享等后端服务，支持千万级用户。</p>
              <div class="text-sm text-gray-500 dark:text-gray-400">技术成果: 消息延迟<100ms，图片上传速度提升3倍</div>
            </div>
            <div class="border-l-4 border-green-500 pl-4">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">电商移动端</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-2">为电商平台移动端提供商品管理、订单处理、支付集成等API服务。</p>
              <div class="text-sm text-gray-500 dark:text-gray-400">业务价值: 移动端交易量增长150%，用户留存率提升25%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: '移动应用项目 - 云服务提供商',
  meta: [
    { name: 'description', content: '专业的移动应用后端服务，提供API托管、推送服务、用户认证、数据同步等移动开发解决方案。' }
  ]
})
</script>