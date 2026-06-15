<script setup lang="ts">
import { RouterLink } from 'vue-router'
import '../styles/index.css'
</script>

<template>
  <main class="not-found site-shell">
    <p class="eyebrow">404 / NOT FOUND</p>
    <h1>这页还没有内容。</h1>
    <RouterLink to="/">← 返回首页</RouterLink>
  </main>
</template>
