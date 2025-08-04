<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-6xl mx-auto">
        <div class="mb-8">
          <NuxtLink to="/about" class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            返回关于我们
          </NuxtLink>
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            团队介绍
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            认识我们的专业团队，他们是公司发展的核心力量
          </p>
        </div>

        <div class="space-y-12">
          <!-- 领导团队 -->
          <div>
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">领导团队</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 text-center">
                <div class="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span class="text-white text-2xl font-bold">张</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">张明</h3>
                <p class="text-blue-600 dark:text-blue-400 mb-3">首席执行官 (CEO)</p>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  拥有15年云计算行业经验，曾任职于知名互联网公司，专注于企业数字化转型。
                </p>
                <div class="flex justify-center space-x-3">
                  <div class="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 text-center">
                <div class="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span class="text-white text-2xl font-bold">李</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">李华</h3>
                <p class="text-blue-600 dark:text-blue-400 mb-3">首席技术官 (CTO)</p>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  计算机博士，云计算架构专家，拥有多项技术专利，致力于技术创新和产品研发。
                </p>
                <div class="flex justify-center space-x-3">
                  <div class="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 text-center">
                <div class="w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span class="text-white text-2xl font-bold">王</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">王芳</h3>
                <p class="text-blue-600 dark:text-blue-400 mb-3">首席运营官 (COO)</p>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  MBA学位，拥有丰富的运营管理经验，专注于业务流程优化和团队建设。
                </p>
                <div class="flex justify-center space-x-3">
                  <div class="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 部门团队 -->
          <div>
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">核心部门</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 text-center">
                <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">研发部</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">120+ 工程师</p>
                <p class="text-gray-600 dark:text-gray-300 text-xs">
                  负责产品研发、技术创新和系统架构设计
                </p>
              </div>

              <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 text-center">
                <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">运维部</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">80+ 工程师</p>
                <p class="text-gray-600 dark:text-gray-300 text-xs">
                  确保系统稳定运行，提供7x24小时技术支持
                </p>
              </div>

              <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 text-center">
                <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">销售部</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">60+ 销售</p>
                <p class="text-gray-600 dark:text-gray-300 text-xs">
                  负责市场拓展、客户关系维护和业务增长
                </p>
              </div>

              <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 text-center">
                <div class="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg class="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364L18.364 5.636"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">客服部</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">40+ 客服</p>
                <p class="text-gray-600 dark:text-gray-300 text-xs">
                  提供专业客户服务，解决客户问题和需求
                </p>
              </div>
            </div>
          </div>

          <!-- 团队文化 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">团队文化</h2>
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">工作环境</h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    开放式办公空间
                  </li>
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    弹性工作时间
                  </li>
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    远程办公支持
                  </li>
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    健身房和休闲区
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">员工福利</h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    竞争力薪酬体系
                  </li>
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    股权激励计划
                  </li>
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    培训发展机会
                  </li>
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    年度团建活动
                  </li>
                </ul>
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
  title: '团队介绍 - 云服务提供商',
  meta: [
    { name: 'description', content: '了解我们的专业团队，包括领导团队、核心部门和团队文化，共同为客户提供优质云服务。' }
  ]
})
</script>