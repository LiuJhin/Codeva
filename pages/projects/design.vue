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
            设计项目
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            为创意设计工作室提供专业的云存储和协作平台解决方案
          </p>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">设计云服务</h2>
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 dark:text-white">大文件存储</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">支持PSD、AI等大型设计文件</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 dark:text-white">版本控制</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">设计文件版本管理和历史记录</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 dark:text-white">团队协作</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">多人实时协作和评论功能</p>
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
                  <h3 class="font-medium text-gray-900 dark:text-white">快速预览</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">在线预览各种格式设计文件</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 dark:text-white">安全分享</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">客户预览链接和权限控制</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 dark:text-white">自动备份</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">定时备份和灾难恢复</p>
                </div>
              </div>
            </div>
          </div>

          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">支持软件</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div class="text-2xl mb-2">🎨</div>
              <div class="text-sm font-medium text-gray-900 dark:text-white">Photoshop</div>
            </div>
            <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div class="text-2xl mb-2">✏️</div>
              <div class="text-sm font-medium text-gray-900 dark:text-white">Illustrator</div>
            </div>
            <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div class="text-2xl mb-2">🎭</div>
              <div class="text-sm font-medium text-gray-900 dark:text-white">Figma</div>
            </div>
            <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div class="text-2xl mb-2">💎</div>
              <div class="text-sm font-medium text-gray-900 dark:text-white">Sketch</div>
            </div>
          </div>

          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">成功案例</h2>
          <div class="space-y-6">
            <div class="border-l-4 border-blue-500 pl-4">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">创意工作室项目</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-2">为知名创意工作室搭建云端协作平台，支持50+设计师同时在线协作。</p>
              <div class="text-sm text-gray-500 dark:text-gray-400">效果提升: 项目交付速度提升40%，文件管理效率提升60%</div>
            </div>
            <div class="border-l-4 border-green-500 pl-4">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">品牌设计公司</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-2">为品牌设计公司提供客户作品展示和反馈收集平台。</p>
              <div class="text-sm text-gray-500 dark:text-gray-400">业务价值: 客户满意度提升30%，修改轮次减少50%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: '设计项目 - 云服务提供商',
  meta: [
    { name: 'description', content: '专业的设计云服务，支持大文件存储、版本控制、团队协作，为创意工作室提供完整解决方案。' }
  ]
})
</script>