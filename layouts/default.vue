<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- 导航栏组件 -->
    <LayoutHeader />

    <!-- 主内容区域 -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- 页脚组件 -->
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
// 布局组件现在只负责组织结构，具体逻辑在各个组件中处理
</script>

<style scoped>
/* 布局样式 */
</style>
