<template>
  <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- 公司信息 -->
        <div class="col-span-1 md:col-span-2">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">CodeVa</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            专注于现代化Web开发，提供高质量的前端解决方案和用户体验设计。
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <span class="sr-only">GitHub</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <span class="sr-only">Twitter</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- 快速链接 -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">快速链接</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">首页</NuxtLink></li>
            <li><NuxtLink to="/about" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">关于我们</NuxtLink></li>
            <li><NuxtLink to="/projects" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">项目展示</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">联系我们</NuxtLink></li>
          </ul>
        </div>
        
        <!-- 联系信息 -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">联系方式</h3>
          <ul class="space-y-2">
            <li class="text-gray-600 dark:text-gray-400">邮箱: hello@codeva.com</li>
            <li class="text-gray-600 dark:text-gray-400">电话: +86 138 0013 8000</li>
            <li class="text-gray-600 dark:text-gray-400">地址: 北京市朝阳区</li>
          </ul>
        </div>
      </div>
      
      <!-- 版权信息 -->
      <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
        <p class="text-center text-gray-600 dark:text-gray-400">
          © {{ new Date().getFullYear() }} CodeVa. 保留所有权利。
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer组件不需要额外的逻辑
</script>

<style scoped>
/* Footer特定样式 */
</style>