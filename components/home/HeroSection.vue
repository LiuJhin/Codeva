<template>
  <section class="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-blob"></div>
      <div class="absolute top-0 -left-4 w-96 h-96 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-20 w-96 h-96 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left content -->
        <div class="text-center lg:text-left">
          <div class="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-800 dark:text-blue-200 text-sm font-medium mb-6">
            <span class="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Discover Seamless Web Hosting Services
          </div>
          
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Discover Seamless
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Web Hosting
            </span>
            Services
          </h1>
          
          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Experience lightning-fast performance, unmatched reliability, and 24/7 support with our premium web hosting solutions designed for modern businesses.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button class="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400">
              Learn More
            </button>
          </div>
          
          <!-- Trust indicators -->
          <div class="flex items-center justify-center lg:justify-start mt-12 space-x-8">
            <div class="flex items-center space-x-2">
              <div class="flex -space-x-2">
                <img class="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="User 1">
                <img class="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face" alt="User 2">
                <img class="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" alt="User 3">
              </div>
              <span class="text-sm text-gray-600 dark:text-gray-400">Trusted by 10k+ users</span>
            </div>
          </div>
        </div>
        
        <!-- Right content - Illustration -->
        <div class="relative">
          <div class="relative z-10">
            <!-- Main server illustration -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div class="space-y-4">
                <!-- Server rack -->
                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                  <div class="flex items-center space-x-2 mb-3">
                    <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div class="space-y-2">
                    <div class="h-2 bg-blue-200 dark:bg-blue-600 rounded animate-pulse"></div>
                    <div class="h-2 bg-blue-300 dark:bg-blue-500 rounded w-3/4"></div>
                    <div class="h-2 bg-blue-200 dark:bg-blue-600 rounded w-1/2 animate-pulse"></div>
                  </div>
                </div>
                
                <!-- Network connections -->
                <div class="flex justify-between items-center">
                  <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                    </svg>
                  </div>
                  <div class="flex-1 mx-4">
                    <div class="h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
                  </div>
                  <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Floating elements -->
            <div class="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg transform rotate-12 animate-bounce"></div>
            <div class="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full shadow-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>