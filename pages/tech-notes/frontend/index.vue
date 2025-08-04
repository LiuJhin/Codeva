<template>
  <div
    class="min-h-screen bg-white dark:bg-black transition-colors duration-700 overflow-hidden"
  >
    <!-- Apple风格背景 -->
    <div class="fixed inset-0 pointer-events-none">
      <!-- 极简渐变背景 -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30 dark:from-black dark:via-gray-950 dark:to-black transition-all duration-700"
      ></div>

      <!-- 动态光效 -->
      <div
        class="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/5 dark:bg-blue-400/3 rounded-full blur-3xl animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/5 dark:bg-purple-400/3 rounded-full blur-3xl animate-pulse-slow"
        style="animation-delay: 3s"
      ></div>

      <!-- 微妙网格 -->
      <div class="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]">
        <div
          class="h-full w-full"
          style="
            background-image:
              linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
            background-size: 80px 80px;
          "
        ></div>
      </div>
    </div>

    <div class="relative z-10 container mx-auto px-8 py-24">
      <!-- Apple风格标题 -->
      <div class="text-center mb-32">
        <div class="space-y-8">
          <div class="space-y-4">
            <h1
              class="text-8xl md:text-9xl font-thin tracking-tight text-gray-900 dark:text-white transition-colors duration-700 leading-none"
            >
              前端
            </h1>
            <div
              class="text-6xl md:text-7xl font-light bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent leading-none"
            >
              技术笔记
            </div>
          </div>
          <p
            class="text-xl font-light text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-12 leading-relaxed"
          >
            探索现代前端开发的无限可能
          </p>
        </div>
      </div>

      <!-- Apple风格卡片网格 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- Three.js -->
        <NuxtLink
          to="/tech-notes/frontend/threejs"
          class="group relative overflow-hidden rounded-[2rem] bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl border border-gray-200/30 dark:border-gray-700/30 p-12 hover:bg-white/90 dark:hover:bg-gray-900/90 hover:shadow-[0_32px_64px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_32px_64px_rgba(0,0,0,0.3)] transform hover:-translate-y-3 hover:scale-[1.01]"
        >
          <!-- 背景装饰 -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 dark:from-blue-400/10 dark:to-cyan-400/10 opacity-0 group-hover:opacity-100"
          ></div>

          <div class="relative z-10">
            <div class="flex items-start space-x-8 mb-10">
              <div class="relative">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 rounded-[1.25rem] flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/30 group-hover:scale-105"
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
                <!-- 光晕效果 -->
                <div
                  class="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-[1.25rem] blur-md opacity-0 group-hover:opacity-30 -z-10"
                ></div>
              </div>
              <div class="flex-1">
                <h3
                  class="text-3xl font-medium text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 tracking-tight"
                >
                  Three.js
                </h3>
                <div
                  class="text-sm font-medium text-blue-600/70 dark:text-blue-400/70 uppercase tracking-wider"
                >
                  3D Graphics Library
                </div>
              </div>
            </div>
            <p
              class="text-gray-600 dark:text-gray-400 mb-10 text-lg leading-relaxed font-light"
            >
              强大的JavaScript 3D库，创建令人惊叹的沉浸式Web体验
            </p>
            <div class="flex items-center justify-between">
              <div
                class="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300"
              >
                <span class="text-base">探索文章</span>
                <svg
                  class="w-5 h-5 ml-3 group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </div>
              <!-- 状态指示器 -->
              <div class="flex items-center space-x-2">
                <div
                  class="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"
                ></div>
                <span
                  class="text-xs text-gray-500 dark:text-gray-400 font-medium"
                  >活跃</span
                >
              </div>
            </div>
          </div>
        </NuxtLink>

        <!-- Vue.js -->
        <NuxtLink
          to="/tech-notes/frontend/vuejs"
          class="group relative overflow-hidden rounded-[2rem] bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl border border-gray-200/30 dark:border-gray-700/30 p-12 hover:bg-white/90 dark:hover:bg-gray-900/90 hover:shadow-[0_32px_64px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_32px_64px_rgba(0,0,0,0.3)] transform hover:-translate-y-3 hover:scale-[1.01]"
        >
          <!-- 背景装饰 -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 dark:from-green-400/10 dark:to-emerald-400/10 opacity-0 group-hover:opacity-100"
          ></div>

          <div class="relative z-10">
            <div class="flex items-start space-x-8 mb-10">
              <div class="relative">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 rounded-[1.25rem] flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-green-500/30 group-hover:scale-105"
                >
                  <svg
                    class="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2 3h3.5L12 15l6.5-12H22L12 21 2 3z" />
                  </svg>
                </div>
                <!-- 光晕效果 -->
                <div
                  class="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-[1.25rem] blur-md opacity-0 group-hover:opacity-30 -z-10"
                ></div>
              </div>
              <div class="flex-1">
                <h3
                  class="text-3xl font-medium text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 tracking-tight"
                >
                  Vue.js
                </h3>
                <div
                  class="text-sm font-medium text-green-600/70 dark:text-green-400/70 uppercase tracking-wider"
                >
                  Progressive Framework
                </div>
              </div>
            </div>
            <p
              class="text-gray-600 dark:text-gray-400 mb-10 text-lg leading-relaxed font-light"
            >
              渐进式JavaScript框架，构建用户界面的优雅解决方案
            </p>
            <div class="flex items-center justify-between">
              <div
                class="flex items-center text-green-600 dark:text-green-400 font-medium group-hover:text-green-700 dark:group-hover:text-green-300"
              >
                <span class="text-base">探索文章</span>
                <svg
                  class="w-5 h-5 ml-3 group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </div>
              <!-- 状态指示器 -->
              <div class="flex items-center space-x-2">
                <div
                  class="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"
                ></div>
                <span
                  class="text-xs text-gray-500 dark:text-gray-400 font-medium"
                  >活跃</span
                >
              </div>
            </div>
          </div>
        </NuxtLink>

        <!-- React -->
        <NuxtLink
          to="/tech-notes/frontend/react"
          class="group relative overflow-hidden rounded-[2rem] bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl border border-gray-200/30 dark:border-gray-700/30 p-12 hover:bg-white/90 dark:hover:bg-gray-900/90 hover:shadow-[0_32px_64px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_32px_64px_rgba(0,0,0,0.3)] transform hover:-translate-y-3 hover:scale-[1.01]"
        >
          <!-- 背景装饰 -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 dark:from-cyan-400/10 dark:to-blue-400/10 opacity-0 group-hover:opacity-100"
          ></div>

          <div class="relative z-10">
            <div class="flex items-start space-x-8 mb-10">
              <div class="relative">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-600 rounded-[1.25rem] flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-cyan-500/30 group-hover:scale-105"
                >
                  <svg
                    class="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26S20.07 10.37 17.97 9.74c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26"
                    />
                  </svg>
                </div>
                <!-- 光晕效果 -->
                <div
                  class="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[1.25rem] blur-md opacity-0 group-hover:opacity-30 -z-10"
                ></div>
              </div>
              <div class="flex-1">
                <h3
                  class="text-3xl font-medium text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 tracking-tight"
                >
                  React
                </h3>
                <div
                  class="text-sm font-medium text-cyan-600/70 dark:text-cyan-400/70 uppercase tracking-wider"
                >
                  UI Library
                </div>
              </div>
            </div>
            <p
              class="text-gray-600 dark:text-gray-400 mb-10 text-lg leading-relaxed font-light"
            >
              用于构建用户界面的JavaScript库，组件化开发的典范
            </p>
            <div class="flex items-center justify-between">
              <div
                class="flex items-center text-cyan-600 dark:text-cyan-400 font-medium group-hover:text-cyan-700 dark:group-hover:text-cyan-300"
              >
                <span class="text-base">探索文章</span>
                <svg
                  class="w-5 h-5 ml-3 group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </div>
              <!-- 状态指示器 -->
              <div class="flex items-center space-x-2">
                <div
                  class="w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full animate-pulse"
                ></div>
                <span
                  class="text-xs text-gray-500 dark:text-gray-400 font-medium"
                  >活跃</span
                >
              </div>
            </div>
          </div>
        </NuxtLink>

        <!-- TypeScript -->
        <NuxtLink
          to="/tech-notes/frontend/typescript"
          class="group relative overflow-hidden rounded-[2rem] bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl border border-gray-200/30 dark:border-gray-700/30 p-12 hover:bg-white/90 dark:hover:bg-gray-900/90 hover:shadow-[0_32px_64px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_32px_64px_rgba(0,0,0,0.3)] transform hover:-translate-y-3 hover:scale-[1.01]"
        >
          <!-- 背景装饰 -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 dark:from-indigo-400/10 dark:to-purple-400/10 opacity-0 group-hover:opacity-100"
          ></div>

          <div class="relative z-10">
            <div class="flex items-start space-x-8 mb-10">
              <div class="relative">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 rounded-[1.25rem] flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-indigo-500/30 group-hover:scale-105"
                >
                  <svg
                    class="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
                    />
                  </svg>
                </div>
                <!-- 光晕效果 -->
                <div
                  class="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[1.25rem] blur-md opacity-0 group-hover:opacity-30 -z-10"
                ></div>
              </div>
              <div class="flex-1">
                <h3
                  class="text-3xl font-medium text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 tracking-tight"
                >
                  TypeScript
                </h3>
                <div
                  class="text-sm font-medium text-indigo-600/70 dark:text-indigo-400/70 uppercase tracking-wider"
                >
                  Typed JavaScript
                </div>
              </div>
            </div>
            <p
              class="text-gray-600 dark:text-gray-400 mb-10 text-lg leading-relaxed font-light"
            >
              JavaScript的超集，提供静态类型检查和现代开发体验
            </p>
            <div class="flex items-center justify-between">
              <div
                class="flex items-center text-indigo-600 dark:text-indigo-400 font-medium group-hover:text-indigo-700 dark:group-hover:text-indigo-300"
              >
                <span class="text-base">探索文章</span>
                <svg
                  class="w-5 h-5 ml-3 group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </div>
              <!-- 状态指示器 -->
              <div class="flex items-center space-x-2">
                <div
                  class="w-2 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full animate-pulse"
                ></div>
                <span
                  class="text-xs text-gray-500 dark:text-gray-400 font-medium"
                  >活跃</span
                >
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// 页面元数据
definePageMeta({
  title: "前端技术笔记",
  description:
    "探索现代前端开发技术，包括Vue.js、React、Three.js等前沿技术的学习笔记和实践经验",
});

// SEO 优化
useHead({
  title: "前端技术笔记 - 现代Web开发技术分享",
  meta: [
    {
      name: "description",
      content:
        "深入学习现代前端开发技术，包括Vue.js、React、Three.js、TypeScript等。分享实用的开发经验、最佳实践和技术洞察。",
    },
    {
      name: "keywords",
      content:
        "Vue.js, React, Three.js, TypeScript, 前端开发, JavaScript, Web开发, 技术笔记",
    },
    {
      property: "og:title",
      content: "前端技术笔记 - 现代Web开发技术分享",
    },
    {
      property: "og:description",
      content: "深入学习现代前端开发技术，分享实用的开发经验和技术洞察",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
});
</script>

<style scoped>
@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.02);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

/* 优化的过渡效果 - 使用更流畅的缓动函数 */
* {
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* 卡片专用的流畅过渡 */
.group {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform, box-shadow, background-color;
}

/* 图标容器的优化过渡 */
.group .relative > div {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform, box-shadow;
}

/* 背景装饰的流畅过渡 */
.group .absolute {
  transition: opacity 0.4s ease-out;
}

/* 文字颜色过渡优化 */
.group h3,
.group span,
.group svg {
  transition: all 0.3s ease-out;
}

/* 优化的backdrop-blur效果 */
.backdrop-blur-xl {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

.backdrop-blur-2xl {
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
}

/* 硬件加速优化 */
.group,
.group > div,
.animate-pulse {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

/* 响应式字体大小优化 */
@media (max-width: 768px) {
  .text-8xl {
    font-size: 4rem;
  }
  .text-9xl {
    font-size: 5rem;
  }
  .text-6xl {
    font-size: 3rem;
  }
  .text-7xl {
    font-size: 3.5rem;
  }

  /* 移动端动画优化 */
  .group {
    transition-duration: 0.3s;
  }
}

/* 减少动画在低性能设备上的影响 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
