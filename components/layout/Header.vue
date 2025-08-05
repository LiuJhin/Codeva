<template>
  <header
    class="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50"
  >
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink
            to="/"
            class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
          >
            CodeVa
          </NuxtLink>
        </div>

        <!-- 导航菜单 -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-1">
            <NuxtLink
              to="/"
              class="nav-item text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden group"
            >
              <span class="relative z-10">首页</span>
              <div
                class="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
              ></div>
            </NuxtLink>

            <!-- 技术实验笔记菜单 - 带二级菜单 -->
            <div class="relative group">
              <button
                class="nav-item text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center relative overflow-hidden group"
              >
                <span class="relative z-10 flex items-center">
                  技术实验笔记
                  <svg
                    class="ml-2 w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                ></div>
              </button>
              <!-- 二级菜单 -->
              <div
                class="dropdown-menu absolute left-0 mt-3 w-80 bg-white dark:bg-gray-900 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-300 dark:border-gray-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-800 ease-out transform translate-y-6 scale-90 group-hover:translate-y-0 group-hover:scale-100 z-50"
              >
                <div class="p-8">
                  <div class="space-y-2">
                    <!-- 前端技术栈 - 带三级菜单 -->
                    <div class="relative group/submenu">
                      <NuxtLink
                        to="/tech-notes/frontend"
                        class="dropdown-item flex items-center px-5 py-5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-blue-50/90 dark:hover:bg-blue-900/30 transition-all duration-500 rounded-2xl group/item transform hover:translate-x-3 hover:scale-105"
                      >
                        <div
                          class="w-2 h-2 bg-blue-500 rounded-full mr-4 group-hover/item:scale-200 group-hover/item:bg-blue-600 transition-all duration-500 group-hover/item:shadow-lg group-hover/item:shadow-blue-500/50"
                        ></div>
                        <div class="flex-1">
                          <div class="font-medium text-base leading-tight">
                            前端技术栈
                          </div>
                          <div
                            class="text-sm text-gray-500 dark:text-gray-400 mt-0.5"
                          >
                            现代前端开发技术
                          </div>
                        </div>
                        <svg
                          class="w-4 h-4 text-gray-400 group-hover/item:text-blue-500 group-hover/item:translate-x-1 transition-all duration-300"
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

                      <!-- 三级菜单 -->
                      <div
                        class="absolute left-full top-0 ml-2 w-64 bg-white dark:bg-gray-900 backdrop-blur-2xl rounded-2xl shadow-xl border border-gray-300 dark:border-gray-600 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-500 ease-out transform translate-x-4 scale-95 group-hover/submenu:translate-x-0 group-hover/submenu:scale-100 z-60"
                      >
                        <div class="p-4">
                          <div class="space-y-1">
                            <NuxtLink
                              to="/tech-notes/frontend/threejs"
                              class="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/80 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300"
                            >
                              <div
                                class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"
                              ></div>
                              Three.js
                            </NuxtLink>
                            <NuxtLink
                              to="/tech-notes/frontend/vuejs"
                              class="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/80 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300"
                            >
                              <div
                                class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"
                              ></div>
                              Vue.js
                            </NuxtLink>
                            <NuxtLink
                              to="/tech-notes/frontend/react"
                              class="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/80 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300"
                            >
                              <div
                                class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"
                              ></div>
                              React
                            </NuxtLink>
                            <NuxtLink
                              to="/tech-notes/frontend/typescript"
                              class="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/80 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300"
                            >
                              <div
                                class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"
                              ></div>
                              TypeScript
                            </NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- 数据结构与算法 - 带三级菜单 -->
                    <div class="relative group/submenu">
                      <NuxtLink
                        to="/tech-notes/algorithms"
                        class="dropdown-item flex items-center px-5 py-5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-blue-50/90 dark:hover:bg-blue-900/30 transition-all duration-500 rounded-2xl group/item transform hover:translate-x-3 hover:scale-105"
                      >
                        <div
                          class="w-2 h-2 bg-indigo-500 rounded-full mr-4 group-hover/item:scale-200 group-hover/item:bg-indigo-600 transition-all duration-500 group-hover/item:shadow-lg group-hover/item:shadow-indigo-500/50"
                        ></div>
                        <div class="flex-1">
                          <div class="font-medium text-base leading-tight">
                            数据结构与算法
                          </div>
                          <div
                            class="text-sm text-gray-500 dark:text-gray-400 mt-0.5"
                          >
                            算法基础与实现
                          </div>
                        </div>
                        <svg
                          class="w-4 h-4 text-gray-400 group-hover/item:text-indigo-500 group-hover/item:translate-x-1 transition-all duration-300"
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

                      <!-- 三级菜单 -->
                      <div
                        class="absolute left-full top-0 ml-2 w-64 bg-white dark:bg-gray-900 backdrop-blur-2xl rounded-2xl shadow-xl border border-gray-300 dark:border-gray-600 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-500 ease-out transform translate-x-4 scale-95 group-hover/submenu:translate-x-0 group-hover/submenu:scale-100 z-60"
                      >
                        <div class="p-4">
                          <div class="space-y-1">
                            <NuxtLink
                              to="/tech-notes/algorithms/data-structures"
                              class="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/80 dark:hover:bg-indigo-900/20 rounded-lg transition-all duration-300"
                            >
                              <div
                                class="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3"
                              ></div>
                              数据结构
                            </NuxtLink>
                            <NuxtLink
                              to="/tech-notes/algorithms/sorting"
                              class="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/80 dark:hover:bg-indigo-900/20 rounded-lg transition-all duration-300"
                            >
                              <div
                                class="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3"
                              ></div>
                              排序算法
                            </NuxtLink>
                            <NuxtLink
                              to="/tech-notes/algorithms/searching"
                              class="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/80 dark:hover:bg-indigo-900/20 rounded-lg transition-all duration-300"
                            >
                              <div
                                class="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3"
                              ></div>
                              搜索算法
                            </NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- 服务端开发 -->
                    <NuxtLink
                      to="/tech-notes/backend"
                      class="dropdown-item flex items-center px-5 py-5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-all duration-400 rounded-2xl group/item transform hover:translate-x-1"
                    >
                      <div
                        class="w-2 h-2 bg-green-500 rounded-full mr-4 group-hover/item:scale-150 transition-transform duration-300"
                      ></div>
                      <div class="flex-1">
                        <div class="font-medium text-base leading-tight">
                          服务端开发
                        </div>
                        <div
                          class="text-sm text-gray-500 dark:text-gray-400 mt-0.5"
                        >
                          后端架构与实现
                        </div>
                      </div>
                      <svg
                        class="w-4 h-4 text-gray-400 group-hover/item:text-green-500 group-hover/item:translate-x-1 transition-all duration-300"
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

                    <!-- 系统架构设计 -->
                    <NuxtLink
                      to="/tech-notes/architecture"
                      class="dropdown-item flex items-center px-5 py-5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-all duration-400 rounded-2xl group/item transform hover:translate-x-1"
                    >
                      <div
                        class="w-2 h-2 bg-purple-500 rounded-full mr-4 group-hover/item:scale-150 transition-transform duration-300"
                      ></div>
                      <div class="flex-1">
                        <div class="font-medium text-base leading-tight">
                          系统架构设计
                        </div>
                        <div
                          class="text-sm text-gray-500 dark:text-gray-400 mt-0.5"
                        >
                          大型系统设计思路
                        </div>
                      </div>
                      <svg
                        class="w-4 h-4 text-gray-400 group-hover/item:text-purple-500 group-hover/item:translate-x-1 transition-all duration-300"
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

                    <!-- 运维与部署 -->
                    <NuxtLink
                      to="/tech-notes/devops"
                      class="dropdown-item flex items-center px-5 py-5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-all duration-400 rounded-2xl group/item transform hover:translate-x-1"
                    >
                      <div
                        class="w-2 h-2 bg-orange-500 rounded-full mr-4 group-hover/item:scale-150 transition-transform duration-300"
                      ></div>
                      <div class="flex-1">
                        <div class="font-medium text-base leading-tight">
                          运维与部署
                        </div>
                        <div
                          class="text-sm text-gray-500 dark:text-gray-400 mt-0.5"
                        >
                          DevOps实践经验
                        </div>
                      </div>
                      <svg
                        class="w-4 h-4 text-gray-400 group-hover/item:text-orange-500 group-hover/item:translate-x-1 transition-all duration-300"
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

                    <!-- AI/人工智能 -->
                    <NuxtLink
                      to="/tech-notes/ai"
                      class="dropdown-item flex items-center px-5 py-5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-all duration-400 rounded-2xl group/item transform hover:translate-x-1"
                    >
                      <div
                        class="w-2 h-2 bg-red-500 rounded-full mr-4 group-hover/item:scale-150 transition-transform duration-300"
                      ></div>
                      <div class="flex-1">
                        <div class="font-medium text-base leading-tight">
                          AI/人工智能
                        </div>
                        <div
                          class="text-sm text-gray-500 dark:text-gray-400 mt-0.5"
                        >
                          机器学习与AI应用
                        </div>
                      </div>
                      <svg
                        class="w-4 h-4 text-gray-400 group-hover/item:text-red-500 group-hover/item:translate-x-1 transition-all duration-300"
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

                    <!-- 技术思辨 -->
                    <NuxtLink
                      to="/tech-notes/thinking"
                      class="dropdown-item flex items-center px-5 py-5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-all duration-400 rounded-2xl group/item transform hover:translate-x-1"
                    >
                      <div
                        class="w-2 h-2 bg-indigo-500 rounded-full mr-4 group-hover/item:scale-150 transition-transform duration-300"
                      ></div>
                      <div class="flex-1">
                        <div class="font-medium text-base leading-tight">
                          技术思辨
                        </div>
                        <div
                          class="text-sm text-gray-500 dark:text-gray-400 mt-0.5"
                        >
                          技术哲学与思考
                        </div>
                      </div>
                      <svg
                        class="w-4 h-4 text-gray-400 group-hover/item:text-indigo-500 group-hover/item:translate-x-1 transition-all duration-300"
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
                </div>
              </div>
            </div>

            <!-- 项目菜单 - 带二级菜单 -->
            <div class="relative group">
              <button
                class="nav-item text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center relative overflow-hidden group"
              >
                <span class="relative z-10 flex items-center">
                  项目
                  <svg
                    class="ml-2 w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                ></div>
              </button>
              <!-- 二级菜单 -->
              <div
                class="dropdown-menu absolute left-0 mt-3 w-96 bg-white dark:bg-gray-900 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-300 dark:border-gray-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-800 ease-out transform translate-y-6 scale-90 group-hover:translate-y-0 group-hover:scale-100 z-50"
              >
                <div class="p-8">
                  <div class="grid grid-cols-2 gap-4">
                    <NuxtLink
                      to="/projects/web"
                      class="dropdown-item flex flex-col items-center p-6 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-all duration-400 rounded-2xl group/item transform hover:scale-105"
                    >
                      <div
                        class="w-12 h-12 bg-blue-500/10 dark:bg-blue-500/20 rounded-2xl flex items-center justify-center mb-3 group-hover/item:bg-blue-500 group-hover/item:scale-110 transition-all duration-300"
                      >
                        <svg
                          class="w-6 h-6 text-blue-500 group-hover/item:text-white transition-colors duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                          ></path>
                        </svg>
                      </div>
                      <div class="text-center">
                        <div class="font-medium text-sm leading-tight mb-1">
                          Web开发
                        </div>
                        <div class="text-xs text-gray-500 dark:text-gray-400">
                          现代化网站
                        </div>
                      </div>
                    </NuxtLink>

                    <NuxtLink
                      to="/projects/mobile"
                      class="dropdown-item flex flex-col items-center p-6 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-all duration-400 rounded-2xl group/item transform hover:scale-105"
                    >
                      <div
                        class="w-12 h-12 bg-purple-500/10 dark:bg-purple-500/20 rounded-2xl flex items-center justify-center mb-3 group-hover/item:bg-purple-500 group-hover/item:scale-110 transition-all duration-300"
                      >
                        <svg
                          class="w-6 h-6 text-purple-500 group-hover/item:text-white transition-colors duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
                          ></path>
                        </svg>
                      </div>
                      <div class="text-center">
                        <div class="font-medium text-sm leading-tight mb-1">
                          移动应用
                        </div>
                        <div class="text-xs text-gray-500 dark:text-gray-400">
                          跨平台开发
                        </div>
                      </div>
                    </NuxtLink>

                    <!-- UI/UX设计 - 带三级菜单 -->
                    <div class="relative group/submenu">
                      <NuxtLink
                        to="/projects/design"
                        class="dropdown-item flex flex-col items-center p-6 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-all duration-400 rounded-2xl group/item transform hover:scale-105"
                      >
                        <div
                          class="w-12 h-12 bg-green-500/10 dark:bg-green-500/20 rounded-2xl flex items-center justify-center mb-3 group-hover/item:bg-green-500 group-hover/item:scale-110 transition-all duration-300"
                        >
                          <svg
                            class="w-6 h-6 text-green-500 group-hover/item:text-white transition-colors duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                            ></path>
                          </svg>
                        </div>
                        <div class="text-center">
                          <div class="font-medium text-sm leading-tight mb-1">
                            UI/UX设计
                          </div>
                          <div class="text-xs text-gray-500 dark:text-gray-400">
                            用户体验
                          </div>
                        </div>
                      </NuxtLink>

                      <!-- 三级菜单 -->
                      <div
                        class="absolute left-full top-0 ml-2 w-64 bg-white dark:bg-gray-900 backdrop-blur-2xl rounded-2xl shadow-xl border border-gray-300 dark:border-gray-600 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-500 ease-out transform translate-x-4 scale-95 group-hover/submenu:translate-x-0 group-hover/submenu:scale-100 z-60"
                      >
                        <div class="p-4">
                          <div class="space-y-1">
                            <NuxtLink
                              to="/projects/design/mobile"
                              class="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50/80 dark:hover:bg-green-900/20 rounded-lg transition-all duration-300"
                            >
                              <div
                                class="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"
                              ></div>
                              移动端设计
                            </NuxtLink>
                            <NuxtLink
                              to="/projects/design/web"
                              class="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50/80 dark:hover:bg-green-900/20 rounded-lg transition-all duration-300"
                            >
                              <div
                                class="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"
                              ></div>
                              网页设计
                            </NuxtLink>
                            <NuxtLink
                              to="/projects/design/branding"
                              class="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50/80 dark:hover:bg-green-900/20 rounded-lg transition-all duration-300"
                            >
                              <div
                                class="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"
                              ></div>
                              品牌设计
                            </NuxtLink>
                            <NuxtLink
                              to="/projects/design/prototyping"
                              class="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50/80 dark:hover:bg-green-900/20 rounded-lg transition-all duration-300"
                            >
                              <div
                                class="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"
                              ></div>
                              原型设计
                            </NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- 案例研究 - 带三级菜单 -->
                    <div class="relative group/submenu">
                      <NuxtLink
                        to="/projects/case-studies"
                        class="dropdown-item flex flex-col items-center p-6 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-all duration-400 rounded-2xl group/item transform hover:scale-105"
                      >
                        <div
                          class="w-12 h-12 bg-orange-500/10 dark:bg-orange-500/20 rounded-2xl flex items-center justify-center mb-3 group-hover/item:bg-orange-500 group-hover/item:scale-110 transition-all duration-300"
                        >
                          <svg
                            class="w-6 h-6 text-orange-500 group-hover/item:text-white transition-colors duration-300"
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
                        <div class="text-center">
                          <div class="font-medium text-sm leading-tight mb-1">
                            案例研究
                          </div>
                          <div class="text-xs text-gray-500 dark:text-gray-400">
                            成功项目
                          </div>
                        </div>
                      </NuxtLink>

                      <!-- 三级菜单 -->
                      <div
                        class="absolute left-full top-0 ml-2 w-64 bg-white dark:bg-gray-900 backdrop-blur-2xl rounded-2xl shadow-xl border border-gray-300 dark:border-gray-600 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-500 ease-out transform translate-x-4 scale-95 group-hover/submenu:translate-x-0 group-hover/submenu:scale-100 z-60"
                      >
                        <div class="p-4">
                          <div class="space-y-1">
                            <NuxtLink
                              to="/projects/case-studies/ecommerce"
                              class="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50/80 dark:hover:bg-orange-900/20 rounded-lg transition-all duration-300"
                            >
                              <div
                                class="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"
                              ></div>
                              电商平台
                            </NuxtLink>
                            <NuxtLink
                              to="/projects/case-studies/fintech"
                              class="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50/80 dark:hover:bg-orange-900/20 rounded-lg transition-all duration-300"
                            >
                              <div
                                class="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"
                              ></div>
                              金融科技
                            </NuxtLink>
                            <NuxtLink
                              to="/projects/case-studies/healthcare"
                              class="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50/80 dark:hover:bg-orange-900/20 rounded-lg transition-all duration-300"
                            >
                              <div
                                class="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"
                              ></div>
                              医疗健康
                            </NuxtLink>
                            <NuxtLink
                              to="/projects/case-studies/education"
                              class="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50/80 dark:hover:bg-orange-900/20 rounded-lg transition-all duration-300"
                            >
                              <div
                                class="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"
                              ></div>
                              在线教育
                            </NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 联系菜单 - 带二级菜单 -->
            <div class="relative group">
              <button
                class="nav-item text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center relative overflow-hidden group"
              >
                <span class="relative z-10 flex items-center">
                  联系
                  <svg
                    class="ml-2 w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                ></div>
              </button>
              <!-- 二级菜单 -->
              <div
                class="dropdown-menu absolute left-0 mt-3 w-80 bg-white dark:bg-gray-900 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-300 dark:border-gray-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-800 ease-out transform translate-y-6 scale-90 group-hover:translate-y-0 group-hover:scale-100 z-50"
              >
                <div class="p-8">
                  <div class="space-y-2">
                    <NuxtLink
                      to="/contact"
                      class="dropdown-item flex items-center px-5 py-5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-all duration-400 rounded-2xl group/item transform hover:translate-x-1"
                    >
                      <div
                        class="w-2 h-2 bg-purple-500 rounded-full mr-4 group-hover/item:scale-150 transition-transform duration-300"
                      ></div>
                      <div class="flex-1">
                        <div class="font-medium text-base leading-tight">
                          联系我们
                        </div>
                        <div
                          class="text-sm text-gray-500 dark:text-gray-400 mt-0.5"
                        >
                          与我们取得联系
                        </div>
                      </div>
                      <svg
                        class="w-4 h-4 text-gray-400 group-hover/item:text-purple-500 group-hover/item:translate-x-1 transition-all duration-300"
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 主题切换按钮 -->
        <div class="flex items-center space-x-4">
          <button
            @click="toggleTheme"
            class="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <svg
              v-if="isDark"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"
              />
            </svg>
            <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              />
            </svg>
          </button>

          <!-- 移动端菜单按钮 -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- 移动端菜单 -->
      <div v-show="isMobileMenuOpen" class="md:hidden">
        <div
          class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700"
        >
          <NuxtLink
            to="/"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            @click="closeMobileMenu"
          >
            首页
          </NuxtLink>

          <!-- 移动端关于菜单 -->
          <div>
            <button
              @click="toggleMobileSubmenu('about')"
              class="w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center justify-between"
            >
              关于
              <svg
                :class="[
                  'w-4 h-4 transition-transform',
                  mobileSubmenus.about ? 'rotate-180' : '',
                ]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div v-show="mobileSubmenus.about" class="pl-4 space-y-1">
              <NuxtLink
                to="/about/company"
                class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 text-sm transition-colors"
                @click="closeMobileMenu"
              >
                公司介绍
              </NuxtLink>
              <NuxtLink
                to="/about/team"
                class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 text-sm transition-colors"
                @click="closeMobileMenu"
              >
                团队成员
              </NuxtLink>
              <NuxtLink
                to="/about/history"
                class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 text-sm transition-colors"
                @click="closeMobileMenu"
              >
                发展历程
              </NuxtLink>
            </div>
          </div>

          <!-- 移动端项目菜单 -->
          <div>
            <button
              @click="toggleMobileSubmenu('projects')"
              class="w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center justify-between"
            >
              项目
              <svg
                :class="[
                  'w-4 h-4 transition-transform',
                  mobileSubmenus.projects ? 'rotate-180' : '',
                ]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div v-show="mobileSubmenus.projects" class="pl-4 space-y-1">
              <NuxtLink
                to="/projects/web"
                class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 text-sm transition-colors"
                @click="closeMobileMenu"
              >
                Web开发
              </NuxtLink>
              <NuxtLink
                to="/projects/mobile"
                class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 text-sm transition-colors"
                @click="closeMobileMenu"
              >
                移动应用
              </NuxtLink>
              <NuxtLink
                to="/projects/design"
                class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 text-sm transition-colors"
                @click="closeMobileMenu"
              >
                UI/UX设计
              </NuxtLink>
              <NuxtLink
                to="/projects/case-studies"
                class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 text-sm transition-colors"
                @click="closeMobileMenu"
              >
                案例研究
              </NuxtLink>
            </div>
          </div>

          <NuxtLink
            to="/contact"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            @click="closeMobileMenu"
          >
            联系
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// 移动端菜单状态
const isMobileMenuOpen = ref(false);

// 移动端二级菜单状态
const mobileSubmenus = ref({
  about: false,
  projects: false,
});

// 主题状态
const isDark = ref(false);

// 切换移动端菜单
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // 关闭菜单时同时关闭所有二级菜单
  if (!isMobileMenuOpen.value) {
    mobileSubmenus.value.about = false;
    mobileSubmenus.value.projects = false;
  }
};

// 关闭移动端菜单
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  mobileSubmenus.value.about = false;
  mobileSubmenus.value.projects = false;
};

// 切换移动端二级菜单
const toggleMobileSubmenu = (menu: "about" | "projects") => {
  mobileSubmenus.value[menu] = !mobileSubmenus.value[menu];
};

// 切换主题
const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

// 初始化主题
onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  }
});
</script>

<style scoped>
/* 自定义样式 */
.router-link-active {
  @apply text-blue-600 dark:text-blue-400;
}
</style>
