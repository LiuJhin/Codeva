<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            我们的服务
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            为不同需求的客户提供专业的云服务解决方案
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 共享主机 -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <div
              class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
                ></path>
              </svg>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              共享主机
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              适合个人网站和小型企业的经济实惠解决方案
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• 无限带宽</li>
              <li>• 免费SSL证书</li>
              <li>• 一键安装应用</li>
              <li>• 24/7技术支持</li>
            </ul>
          </div>

          <!-- VPS主机 -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <div
              class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                ></path>
              </svg>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              VPS主机
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              独立资源，完全控制权，适合中型企业
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• 独立IP地址</li>
              <li>• Root访问权限</li>
              <li>• 可扩展资源</li>
              <li>• 高性能SSD存储</li>
            </ul>
          </div>

          <!-- 云服务器 -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <div
              class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                ></path>
              </svg>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              云服务器
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              弹性扩展，按需付费，适合快速增长的业务
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• 弹性计算资源</li>
              <li>• 自动备份</li>
              <li>• 负载均衡</li>
              <li>• API管理</li>
            </ul>
          </div>

          <!-- 专用服务器 -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <div
              class="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-red-600 dark:text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              专用服务器
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              最高性能和安全性，适合大型企业应用
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• 独享硬件资源</li>
              <li>• 企业级安全</li>
              <li>• 定制化配置</li>
              <li>• 专属技术支持</li>
            </ul>
          </div>

          <!-- 域名服务 -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <div
              class="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-yellow-600 dark:text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
                ></path>
              </svg>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              域名服务
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              域名注册、转移和管理的一站式服务
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• 多种顶级域名</li>
              <li>• 域名隐私保护</li>
              <li>• DNS管理</li>
              <li>• 域名转移服务</li>
            </ul>
          </div>

          <!-- SSL证书 -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <div
              class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              SSL证书
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              保护网站安全，提升用户信任度
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• 多种证书类型</li>
              <li>• 自动安装配置</li>
              <li>• 通配符证书</li>
              <li>• 证书管理工具</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "服务项目 - 云服务提供商",
  meta: [
    {
      name: "description",
      content:
        "提供共享主机、VPS、云服务器、专用服务器、域名和SSL证书等全方位云服务解决方案。",
    },
  ],
});
</script>
