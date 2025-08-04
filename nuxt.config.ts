// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // 模块配置
  modules: ["@nuxt/content"],

  // Nuxt Content configuration
  content: {
    // Content module configuration
  },

  // CSS配置
  css: ["~/assets/css/main.css"],

  // PostCSS配置 - 使用Nuxt内置的PostCSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // 应用配置
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "CodeVa - 现代化Web开发解决方案",
      meta: [
        {
          name: "description",
          content:
            "专注于现代化Web开发，提供高质量的前端解决方案和用户体验设计",
        },
        {
          name: "keywords",
          content: "Web开发, 前端开发, Vue.js, Nuxt.js, TypeScript",
        },
        { name: "author", content: "CodeVa Team" },
        { property: "og:title", content: "CodeVa - 现代化Web开发解决方案" },
        {
          property: "og:description",
          content:
            "专注于现代化Web开发，提供高质量的前端解决方案和用户体验设计",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
        },
      ],
    },
  },

  // TypeScript配置
  typescript: {
    typeCheck: true,
  },
});
