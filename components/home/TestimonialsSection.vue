<template>
  <section class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          See What Customers Say
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our satisfied customers have to say about our hosting services.
        </p>
      </div>
      
      <!-- Testimonials grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Testimonial 1 -->
        <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
          <div class="flex items-center mb-6">
            <div class="flex text-yellow-400">
              <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>
          
          <blockquote class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            "The hosting service has been exceptional. Our website loads incredibly fast and we've experienced zero downtime in the past year. The support team is always responsive and knowledgeable."
          </blockquote>
          
          <div class="flex items-center">
            <img 
              class="w-12 h-12 rounded-full object-cover mr-4" 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face" 
              alt="John Anderson"
            >
            <div>
              <div class="font-semibold text-gray-900 dark:text-white">John Anderson</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">CEO, TechStart</div>
            </div>
          </div>
        </div>
        
        <!-- Testimonial 2 -->
        <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
          <div class="flex items-center mb-6">
            <div class="flex text-yellow-400">
              <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>
          
          <blockquote class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            "Migrating to this hosting platform was the best decision we made. The performance improvement was immediate, and the security features give us peace of mind. Highly recommended!"
          </blockquote>
          
          <div class="flex items-center">
            <img 
              class="w-12 h-12 rounded-full object-cover mr-4" 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=48&h=48&fit=crop&crop=face" 
              alt="Sarah Chen"
            >
            <div>
              <div class="font-semibold text-gray-900 dark:text-white">Sarah Chen</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Marketing Director</div>
            </div>
          </div>
        </div>
        
        <!-- Testimonial 3 -->
        <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
          <div class="flex items-center mb-6">
            <div class="flex text-yellow-400">
              <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>
          
          <blockquote class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            "Outstanding customer service and reliable hosting. When we had questions during setup, their team guided us through everything. Our e-commerce site runs smoothly 24/7."
          </blockquote>
          
          <div class="flex items-center">
            <img 
              class="w-12 h-12 rounded-full object-cover mr-4" 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face" 
              alt="Michael Rodriguez"
            >
            <div>
              <div class="font-semibold text-gray-900 dark:text-white">Michael Rodriguez</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">E-commerce Owner</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom stats -->
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">99.9%</div>
          <div class="text-gray-600 dark:text-gray-400">Uptime Guarantee</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">10k+</div>
          <div class="text-gray-600 dark:text-gray-400">Happy Customers</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
          <div class="text-gray-600 dark:text-gray-400">Expert Support</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">5+</div>
          <div class="text-gray-600 dark:text-gray-400">Years Experience</div>
        </div>
      </div>
    </div>
  </section>
</template>