<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            联系我们
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            我们随时为您提供专业的技术支持和咨询服务
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- 联系表单 -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700"
          >
            <h2
              class="text-2xl font-semibold text-gray-900 dark:text-white mb-6"
            >
              发送消息
            </h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  姓名 *
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  邮箱 *
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="请输入您的邮箱地址"
                />
              </div>
              <div>
                <label
                  for="subject"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  主题 *
                </label>
                <input
                  type="text"
                  id="subject"
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="请输入消息主题"
                />
              </div>
              <div>
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  消息内容 *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  placeholder="请详细描述您的问题或需求"
                ></textarea>
              </div>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span v-if="isSubmitting">发送中...</span>
                <span v-else>发送消息</span>
              </button>
            </form>
          </div>

          <!-- 联系信息 -->
          <div class="space-y-8">
            <div
              class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700"
            >
              <h2
                class="text-2xl font-semibold text-gray-900 dark:text-white mb-6"
              >
                联系信息
              </h2>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div
                    class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <svg
                      class="w-5 h-5 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3
                      class="text-lg font-medium text-gray-900 dark:text-white mb-1"
                    >
                      办公地址
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300">
                      北京市朝阳区建国门外大街1号<br />国贸大厦A座2008室
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div
                    class="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <svg
                      class="w-5 h-5 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3
                      class="text-lg font-medium text-gray-900 dark:text-white mb-1"
                    >
                      联系电话
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300">
                      400-888-9999<br />010-8888-9999
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div
                    class="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <svg
                      class="w-5 h-5 text-purple-600 dark:text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3
                      class="text-lg font-medium text-gray-900 dark:text-white mb-1"
                    >
                      邮箱地址
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300">
                      support@example.com<br />sales@example.com
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div
                    class="w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <svg
                      class="w-5 h-5 text-yellow-600 dark:text-yellow-400"
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
                  </div>
                  <div>
                    <h3
                      class="text-lg font-medium text-gray-900 dark:text-white mb-1"
                    >
                      工作时间
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300">
                      周一至周五：9:00 - 18:00<br />周末及节假日：10:00 - 16:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700"
            >
              <h2
                class="text-2xl font-semibold text-gray-900 dark:text-white mb-6"
              >
                技术支持
              </h2>
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-gray-600 dark:text-gray-300"
                    >24/7 在线技术支持</span
                  >
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-gray-600 dark:text-gray-300"
                    >平均响应时间：15分钟</span
                  >
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-gray-600 dark:text-gray-300"
                    >多语言支持团队</span
                  >
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-gray-600 dark:text-gray-300"
                    >远程协助服务</span
                  >
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
const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;

  // 模拟表单提交
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // 重置表单
  form.value = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  isSubmitting.value = false;

  // 显示成功消息（这里可以集成实际的通知系统）
  alert("消息发送成功！我们会尽快回复您。");
};

useHead({
  title: "联系我们 - 云服务提供商",
  meta: [
    {
      name: "description",
      content:
        "联系我们获取专业的云服务支持，24/7技术支持，多种联系方式，快速响应您的需求。",
    },
  ],
});
</script>
