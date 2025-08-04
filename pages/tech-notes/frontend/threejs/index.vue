<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900"
  >
    <div class="container mx-auto px-4 py-16">
      <!-- 面包屑导航 -->
      <nav
        class="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8"
      >
        <NuxtLink
          to="/tech-notes"
          class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          技术实验笔记
        </NuxtLink>
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
        <NuxtLink
          to="/tech-notes/frontend"
          class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          前端技术栈
        </NuxtLink>
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
        <span class="text-gray-900 dark:text-white font-medium">Three.js</span>
      </nav>

      <!-- 页面标题 -->
      <div class="text-center mb-16">
        <div class="flex items-center justify-center mb-6">
          <div
            class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6"
          >
            <svg
              class="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              />
            </svg>
          </div>
          <h1 class="text-5xl font-bold text-gray-900 dark:text-white">
            Three.js 教程
          </h1>
        </div>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          掌握强大的JavaScript 3D库，创建令人惊叹的3D Web体验
        </p>
      </div>

      <!-- 文章列表 -->
      <div class="max-w-4xl mx-auto">
        <div class="grid gap-8">
          <!-- 文章卡片 -->
          <article
            v-for="article in finalArticles"
            :key="article._path"
            class="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
          >
            <div class="flex items-start justify-between mb-6">
              <div class="flex-1">
                <h2
                  class="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                >
                  <NuxtLink :to="article._path" class="hover:underline">
                    {{ article.title }}
                  </NuxtLink>
                </h2>
                <p
                  class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
                >
                  {{ article.description }}
                </p>

                <!-- 标签 -->
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="tag in article.tags"
                    :key="tag"
                    class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium"
                  >
                    {{ tag }}
                  </span>
                </div>

                <!-- 阅读时间和日期 -->
                <div
                  class="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4"
                >
                  <div class="flex items-center">
                    <svg
                      class="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>{{ article.readingTime || "5 分钟阅读" }}</span>
                  </div>
                  <div class="flex items-center" v-if="article.createdAt">
                    <svg
                      class="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span>{{ formatDate(article.createdAt) }}</span>
                  </div>
                </div>
              </div>

              <!-- 阅读按钮 -->
              <NuxtLink
                :to="article._path"
                class="ml-6 flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span class="mr-2">阅读文章</span>
                <svg
                  class="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </NuxtLink>
            </div>
          </article>
        </div>

        <!-- 空状态 -->
        <div
          v-if="!finalArticles || finalArticles.length === 0"
          class="text-center py-16"
        >
          <div
            class="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg
              class="w-12 h-12 text-gray-400 dark:text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            暂无文章
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            Three.js 相关文章正在准备中，敬请期待！
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 页面元数据
useHead({
  title: "Three.js 教程 - CodeVa 技术实验笔记",
  meta: [
    {
      name: "description",
      content:
        "Three.js 3D开发教程，从基础入门到高级应用，掌握JavaScript 3D编程技能",
    },
    {
      name: "keywords",
      content: "Three.js, 3D, JavaScript, WebGL, 前端开发, 3D动画",
    },
  ],
});

// 格式化日期
const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>
