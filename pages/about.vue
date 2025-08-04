<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          关于我们
        </h1>
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-6">
            我们是一家专业的云服务提供商，致力于为客户提供高质量、可靠的托管解决方案。
          </p>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            自成立以来，我们一直专注于为各种规模的企业提供优质的云计算服务，包括共享主机、VPS、云服务器和专用服务器等。
          </p>
          <h2
            class="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4"
          >
            我们的使命
          </h2>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            通过提供稳定、安全、高性能的云服务，帮助客户实现业务目标，推动数字化转型。
          </p>
          <h2
            class="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4"
          >
            核心优势
          </h2>
          <ul
            class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2"
          >
            <li>99.9% 服务可用性保证</li>
            <li>24/7 专业技术支持</li>
            <li>企业级安全防护</li>
            <li>灵活的扩展方案</li>
            <li>竞争力的价格优势</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "关于我们 - 云服务提供商",
  meta: [
    {
      name: "description",
      content:
        "了解我们的云服务提供商，专业的托管解决方案，99.9%可用性保证，24/7技术支持。",
    },
  ],
});
</script>
