<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-6xl mx-auto">
        <div class="mb-8">
          <NuxtLink to="/projects" class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            返回项目列表
          </NuxtLink>
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            案例研究
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            深度分析成功项目的技术实现和业务价值
          </p>
        </div>

        <div class="space-y-8">
          <!-- 案例1 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div class="flex items-start justify-between mb-6">
              <div>
                <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">全球电商平台云迁移项目</h2>
                <div class="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>电商行业</span>
                  <span>•</span>
                  <span>2023年</span>
                  <span>•</span>
                  <span>6个月项目周期</span>
                </div>
              </div>
              <div class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                已完成
              </div>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">项目挑战</h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• 日均访问量超过500万次</li>
                  <li>• 需要99.99%的服务可用性</li>
                  <li>• 全球多地区部署需求</li>
                  <li>• 零停机时间迁移要求</li>
                </ul>
                
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 mt-6">解决方案</h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• 采用微服务架构设计</li>
                  <li>• 实施蓝绿部署策略</li>
                  <li>• 配置全球CDN加速</li>
                  <li>• 建立多层监控体系</li>
                </ul>
              </div>
              
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">关键指标</h3>
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                    <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">99.99%</div>
                    <div class="text-sm text-gray-600 dark:text-gray-300">服务可用性</div>
                  </div>
                  <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                    <div class="text-2xl font-bold text-green-600 dark:text-green-400">60%</div>
                    <div class="text-sm text-gray-600 dark:text-gray-300">响应时间减少</div>
                  </div>
                  <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                    <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">40%</div>
                    <div class="text-sm text-gray-600 dark:text-gray-300">成本节约</div>
                  </div>
                  <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                    <div class="text-2xl font-bold text-orange-600 dark:text-orange-400">0</div>
                    <div class="text-sm text-gray-600 dark:text-gray-300">停机时间</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 案例2 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div class="flex items-start justify-between mb-6">
              <div>
                <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">金融科技公司数据中台建设</h2>
                <div class="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>金融科技</span>
                  <span>•</span>
                  <span>2023年</span>
                  <span>•</span>
                  <span>8个月项目周期</span>
                </div>
              </div>
              <div class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                已完成
              </div>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">项目背景</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  客户需要构建统一的数据中台，整合多个业务系统的数据，提供实时分析和决策支持。
                </p>
                
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">技术架构</h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• 实时数据流处理</li>
                  <li>• 分布式存储系统</li>
                  <li>• 机器学习平台</li>
                  <li>• 可视化分析工具</li>
                </ul>
              </div>
              
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">业务成果</h3>
                <div class="space-y-4">
                  <div class="border-l-4 border-blue-500 pl-4">
                    <div class="font-semibold text-gray-900 dark:text-white">数据处理能力</div>
                    <div class="text-sm text-gray-600 dark:text-gray-300">每日处理10TB+数据，实时性<1秒</div>
                  </div>
                  <div class="border-l-4 border-green-500 pl-4">
                    <div class="font-semibold text-gray-900 dark:text-white">决策效率</div>
                    <div class="text-sm text-gray-600 dark:text-gray-300">业务决策时间从天级缩短到分钟级</div>
                  </div>
                  <div class="border-l-4 border-purple-500 pl-4">
                    <div class="font-semibold text-gray-900 dark:text-white">风控能力</div>
                    <div class="text-sm text-gray-600 dark:text-gray-300">风险识别准确率提升至95%+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 案例3 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div class="flex items-start justify-between mb-6">
              <div>
                <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">教育平台在线学习系统</h2>
                <div class="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>在线教育</span>
                  <span>•</span>
                  <span>2023年</span>
                  <span>•</span>
                  <span>4个月项目周期</span>
                </div>
              </div>
              <div class="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">
                进行中
              </div>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">项目需求</h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• 支持10万+并发用户</li>
                  <li>• 高清视频流畅播放</li>
                  <li>• 实时互动功能</li>
                  <li>• 学习数据分析</li>
                </ul>
                
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 mt-6">当前进展</h3>
                <div class="space-y-3">
                  <div class="flex items-center">
                    <div class="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                    <span class="text-gray-600 dark:text-gray-300">基础架构部署完成</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                    <span class="text-gray-600 dark:text-gray-300">视频服务集成完成</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                    <span class="text-gray-600 dark:text-gray-300">用户系统开发中</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">预期目标</h3>
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                    <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">10万+</div>
                    <div class="text-sm text-gray-600 dark:text-gray-300">并发用户</div>
                  </div>
                  <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                    <div class="text-2xl font-bold text-green-600 dark:text-green-400">4K</div>
                    <div class="text-sm text-gray-600 dark:text-gray-300">视频质量</div>
                  </div>
                  <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                    <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">99.9%</div>
                    <div class="text-sm text-gray-600 dark:text-gray-300">服务可用性</div>
                  </div>
                  <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                    <div class="text-2xl font-bold text-orange-600 dark:text-orange-400"><2s</div>
                    <div class="text-sm text-gray-600 dark:text-gray-300">视频加载时间</div>
                  </div>
                </div>
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
  title: '案例研究 - 云服务提供商',
  meta: [
    { name: 'description', content: '深度分析云服务成功案例，包括电商平台、金融科技、在线教育等行业的技术实现和业务价值。' }
  ]
})
</script>