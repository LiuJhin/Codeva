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
        <NuxtLink
          to="/tech-notes/frontend/threejs"
          class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Three.js
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
        <span class="text-gray-900 dark:text-white font-medium">{{
          data?.title
        }}</span>
      </nav>

      <!-- 文章内容 -->
      <article class="max-w-4xl mx-auto">
        <!-- 文章头部 -->
        <header
          class="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-8 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {{ data?.title }}
          </h1>

          <p
            class="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
          >
            {{ data?.description }}
          </p>

          <!-- 文章元信息 -->
          <div
            class="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400"
          >
            <div class="flex items-center" v-if="data?.createdAt">
              <svg
                class="w-4 h-4 mr-2"
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
              <span>{{ formatDate(data.value?.createdAt) }}</span>
            </div>

            <div class="flex items-center">
              <svg
                class="w-4 h-4 mr-2"
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
              <span>{{ data.value?.readingTime || "5 分钟阅读" }}</span>
            </div>

            <div class="flex items-center" v-if="data.value?.author">
              <svg
                class="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              <span>{{ data.value?.author }}</span>
            </div>
          </div>

          <!-- 标签 -->
          <div
            class="flex flex-wrap gap-2 mt-6"
            v-if="data.value?.tags && data.value.tags.length > 0"
          >
            <span
              v-for="tag in data.value.tags"
              :key="tag"
              class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium"
            >
              {{ tag }}
            </span>
          </div>
        </header>

        <!-- 文章正文 -->
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <ContentRenderer :value="data" />
          </div>
        </div>

        <!-- 文章导航 -->
        <nav class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <NuxtLink
            v-if="prev"
            :to="prev._path"
            class="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
          >
            <div
              class="flex items-center text-blue-600 dark:text-blue-400 mb-2"
            >
              <svg
                class="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span class="text-sm font-medium">上一篇</span>
            </div>
            <h3
              class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
            >
              {{ prev.title }}
            </h3>
          </NuxtLink>

          <NuxtLink
            v-if="next"
            :to="next._path"
            class="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 md:text-right"
          >
            <div
              class="flex items-center justify-end text-blue-600 dark:text-blue-400 mb-2"
            >
              <span class="text-sm font-medium">下一篇</span>
              <svg
                class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
            </div>
            <h3
              class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
            >
              {{ next.title }}
            </h3>
          </NuxtLink>
        </nav>

        <!-- 返回列表 -->
        <div class="mt-12 text-center">
          <NuxtLink
            to="/tech-notes/frontend/threejs"
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg
              class="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span>返回 Three.js 教程列表</span>
          </NuxtLink>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;
const slugPath = Array.isArray(slug) ? slug.join("/") : slug;

// 获取文章内容
const { data } = await useAsyncData(`threejs-${slugPath}`, () => {
  return queryContent("tech-notes", "frontend", "threejs", slugPath).findOne();
});

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "文章未找到",
  });
}

// 获取上一篇和下一篇文章
const { data: navigation } = await useAsyncData(
  `threejs-nav-${slugPath}`,
  () => {
    return queryContent("tech-notes", "frontend", "threejs")
      .where({ _draft: { $ne: true } })
      .sort({ createdAt: 1 })
      .findSurround(data.value?._path);
  }
);

const [prev, next] = navigation.value || [null, null];

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

// 页面元数据
useHead({
  title: `${data.value?.title} - Three.js 教程 - CodeVa 技术实验笔记`,
  meta: [
    {
      name: "description",
      content: data.value?.description || "Three.js 3D开发教程",
    },
    {
      name: "keywords",
      content: data.value?.tags
        ? data.value.tags.join(", ")
        : "Three.js, 3D, JavaScript, WebGL",
    },
    {
      property: "og:title",
      content: data.value?.title,
    },
    {
      property: "og:description",
      content: data.value?.description || "Three.js 3D开发教程",
    },
    {
      property: "og:type",
      content: "article",
    },
  ],
});
</script>

<style>
/* 自定义 prose 样式 */
.prose {
  @apply text-gray-800 dark:text-gray-200;
}

.prose h1,
.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6 {
  @apply text-gray-900 dark:text-white;
}

.prose code {
  @apply bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-1 py-0.5 rounded text-sm;
}

.prose pre {
  @apply bg-gray-900 dark:bg-gray-950 rounded-lg;
}

.prose pre code {
  @apply bg-transparent text-gray-100 p-0;
}

.prose blockquote {
  @apply border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 pl-4 py-2 italic;
}

.prose a {
  @apply text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors;
}

.prose img {
  @apply rounded-lg shadow-lg;
}

.prose table {
  @apply border-collapse border border-gray-300 dark:border-gray-600;
}

.prose th,
.prose td {
  @apply border border-gray-300 dark:border-gray-600 px-4 py-2;
}

.prose th {
  @apply bg-gray-100 dark:bg-gray-800 font-semibold;
}
</style>
