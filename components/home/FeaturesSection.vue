<template>
  <section class="py-20 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left content -->
        <div>
          <div class="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-800 dark:text-blue-200 text-sm font-medium mb-6">
            <span class="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Experience Fast, Secure, & Affordable
          </div>
          
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Experience Fast, Secure, & Affordable Hosting with Us
          </h2>
          
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Our hosting solutions combine cutting-edge technology with unmatched reliability to deliver exceptional performance for your websites and applications.
          </p>
          
          <!-- Feature list -->
          <div class="space-y-6 mb-8">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Lightning Fast Performance
                </h3>
                <p class="text-gray-600 dark:text-gray-400">
                  SSD storage and optimized servers ensure your websites load in milliseconds, providing exceptional user experience.
                </p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Advanced Security Protection
                </h3>
                <p class="text-gray-600 dark:text-gray-400">
                  Multi-layered security with SSL certificates, DDoS protection, and regular security updates keep your data safe.
                </p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Cost-Effective Solutions
                </h3>
                <p class="text-gray-600 dark:text-gray-400">
                  Competitive pricing with no hidden fees, offering excellent value for premium hosting services.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 mb-8">
            <div class="text-center">
              <div class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">99.9%</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">1200+</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Websites</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">24/7</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Support</div>
            </div>
          </div>
          
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Get Started Today
          </button>
        </div>
        
        <!-- Right illustration -->
        <div class="relative">
          <!-- Main dashboard mockup -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <!-- Dashboard header -->
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <span class="font-semibold text-gray-900 dark:text-white">Dashboard</span>
              </div>
              <div class="flex space-x-1">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            <!-- Performance metrics -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <div class="text-sm text-blue-600 dark:text-blue-400 mb-1">CPU Usage</div>
                <div class="text-2xl font-bold text-blue-700 dark:text-blue-300">23%</div>
                <div class="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2 mt-2">
                  <div class="bg-blue-600 h-2 rounded-full" style="width: 23%"></div>
                </div>
              </div>
              <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <div class="text-sm text-green-600 dark:text-green-400 mb-1">Memory</div>
                <div class="text-2xl font-bold text-green-700 dark:text-green-300">67%</div>
                <div class="w-full bg-green-200 dark:bg-green-800 rounded-full h-2 mt-2">
                  <div class="bg-green-600 h-2 rounded-full" style="width: 67%"></div>
                </div>
              </div>
            </div>
            
            <!-- Traffic chart -->
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div class="text-sm text-gray-600 dark:text-gray-400 mb-3">Traffic Overview</div>
              <div class="flex items-end space-x-2 h-20">
                <div class="bg-blue-400 w-4 h-8 rounded-t"></div>
                <div class="bg-blue-500 w-4 h-12 rounded-t"></div>
                <div class="bg-blue-600 w-4 h-16 rounded-t"></div>
                <div class="bg-blue-500 w-4 h-10 rounded-t"></div>
                <div class="bg-blue-400 w-4 h-14 rounded-t"></div>
                <div class="bg-blue-600 w-4 h-18 rounded-t"></div>
                <div class="bg-blue-500 w-4 h-12 rounded-t"></div>
              </div>
            </div>
          </div>
          
          <!-- Floating elements -->
          <div class="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg transform rotate-12 animate-bounce flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          
          <div class="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full shadow-lg animate-pulse flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>