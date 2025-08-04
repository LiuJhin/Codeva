<template>
  <div>
    <!-- Hero Section -->
    <HomeHeroSection />

    <!-- Services Section -->
    <HomeServicesSection />

    <!-- Stats Section -->
    <HomeStatsSection />

    <!-- Features Section -->
    <HomeFeaturesSection />

    <!-- Testimonials Section -->
    <HomeTestimonialsSection />

    <!-- Contact Section -->
    <HomeContactSection />
  </div>
</template>

<script setup lang="ts">
// Import home page components
import HomeHeroSection from "~/components/home/HeroSection.vue";
import HomeServicesSection from "~/components/home/ServicesSection.vue";
import HomeStatsSection from "~/components/home/StatsSection.vue";
import HomeFeaturesSection from "~/components/home/FeaturesSection.vue";
import HomeTestimonialsSection from "~/components/home/TestimonialsSection.vue";
import HomeContactSection from "~/components/home/ContactSection.vue";

// 设置页面元数据
useHead({
  title: "CodeVa - 现代化Web开发解决方案",
  meta: [
    {
      name: "description",
      content: "专注于现代化Web开发，提供高质量的前端解决方案和用户体验设计",
    },
  ],
});
</script>
