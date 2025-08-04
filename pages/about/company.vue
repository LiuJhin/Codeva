<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <div class="mb-8">
          <NuxtLink to="/about" class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            返回关于我们
          </NuxtLink>
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            公司简介
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            了解我们的发展历程、企业文化和核心价值观
          </p>
        </div>

        <div class="space-y-8">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">公司概况</h2>
            <div class="prose prose-lg dark:prose-invert max-w-none">
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                我们成立于2015年，是一家专注于云计算服务的创新型企业。经过多年的发展，我们已经成为行业内领先的云服务提供商，为全球超过10万家企业提供稳定可靠的云计算解决方案。
              </p>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                公司总部位于北京，在上海、深圳、成都等地设有分支机构，拥有员工超过500人。我们的服务覆盖全球20多个国家和地区，数据中心遍布亚太、欧洲、北美等主要市场。
              </p>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">企业愿景</h2>
            <div class="grid md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">创新驱动</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm">持续技术创新，引领云计算发展趋势</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">全球服务</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm">构建全球化服务网络，服务世界各地客户</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">安全可靠</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm">提供企业级安全保障，确保数据安全</p>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">核心价值观</h2>
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span class="text-blue-600 dark:text-blue-400 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">客户至上</h3>
                  <p class="text-gray-600 dark:text-gray-300">始终以客户需求为导向，提供超越期望的服务体验，与客户共同成长。</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span class="text-green-600 dark:text-green-400 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">技术领先</h3>
                  <p class="text-gray-600 dark:text-gray-300">持续投入研发，保持技术领先优势，为客户提供最先进的云计算解决方案。</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span class="text-purple-600 dark:text-purple-400 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">诚信合作</h3>
                  <p class="text-gray-600 dark:text-gray-300">坚持诚信经营，与合作伙伴建立长期稳定的合作关系，实现互利共赢。</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span class="text-orange-600 dark:text-orange-400 font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">持续创新</h3>
                  <p class="text-gray-600 dark:text-gray-300">鼓励创新思维，勇于尝试新技术新模式，推动行业发展和进步。</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">发展数据</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10万+</div>
                <div class="text-gray-600 dark:text-gray-300">服务客户</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">500+</div>
                <div class="text-gray-600 dark:text-gray-300">员工数量</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">20+</div>
                <div class="text-gray-600 dark:text-gray-300">服务国家</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">99.99%</div>
                <div class="text-gray-600 dark:text-gray-300">服务可用性</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: '公司简介 - 云服务提供商',
  meta: [
    { name: 'description', content: '了解我们的企业发展历程、核心价值观和愿景使命，专业的云计算服务提供商。' }
  ]
})
</script>