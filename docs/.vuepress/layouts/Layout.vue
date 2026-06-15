<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Content, usePageData, usePageFrontmatter } from '@vuepress/client'
import '../styles/index.css'

const page = usePageData()
const frontmatter = usePageFrontmatter()
const menuOpen = ref(false)
const theme = ref<'light' | 'dark'>('light')

const isHome = computed(() => page.value.path === '/')
const isArticle = computed(() => page.value.path.startsWith('/articles/'))
const pageDescription = computed(() => String(frontmatter.value.description || ''))

const articles = [
  {
    title: '重新开始维护这个博客',
    description: '从一次重新设计开始，继续建立属于自己的长期写作空间。',
    date: '2026.06.15',
    link: '/articles/restart.html',
  },
]

const setTheme = (nextTheme: 'light' | 'dark') => {
  theme.value = nextTheme
  document.documentElement.dataset.theme = nextTheme
  localStorage.setItem('theme', nextTheme)
}

const toggleTheme = () => setTheme(theme.value === 'dark' ? 'light' : 'dark')

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  setTheme(savedTheme === 'dark' || (!savedTheme && systemDark) ? 'dark' : 'light')
})
</script>

<template>
  <a class="skip-link" href="#main-content">跳到正文</a>
  <header class="site-header">
    <div class="site-shell header-inner">
      <RouterLink class="site-brand" to="/" aria-label="王彬彬首页">
        王彬彬 <span class="brand-mark" aria-hidden="true"></span>
      </RouterLink>
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="site-nav"
        aria-label="打开导航"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span>
      </button>
      <nav id="site-nav" class="site-nav" :class="{ 'is-open': menuOpen }" aria-label="主导航">
        <RouterLink to="/" @click="menuOpen = false">文章</RouterLink>
        <RouterLink to="/about.html" @click="menuOpen = false">关于</RouterLink>
        <a href="https://github.com/wghust" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        <button class="theme-toggle" type="button" :aria-label="theme === 'dark' ? '切换浅色模式' : '切换深色模式'" @click="toggleTheme">
          <span aria-hidden="true">{{ theme === 'dark' ? '☾' : '☼' }}</span>
        </button>
      </nav>
    </div>
  </header>

  <main id="main-content">
    <template v-if="isHome">
      <section class="home-hero site-shell">
        <p class="eyebrow">软件 · 产品 · 数字生活</p>
        <h1>写代码，<br>也写思考。</h1>
        <p class="hero-intro">记录软件工程、产品设计与数字生活。少一些噪音，多一些值得回看的东西。</p>
      </section>
      <section class="articles-section site-shell" aria-labelledby="latest-writing">
        <div class="section-heading">
          <h2 id="latest-writing">最新文章</h2>
          <span>{{ articles.length }} 篇记录</span>
        </div>
        <article v-if="articles[0]" class="featured-post">
          <RouterLink :to="articles[0].link">
            <div class="featured-meta"><span>最近更新</span><time>{{ articles[0].date }}</time></div>
            <h3>{{ articles[0].title }}</h3>
            <p>{{ articles[0].description }}</p>
            <span class="read-more">阅读全文 <span aria-hidden="true">→</span></span>
          </RouterLink>
        </article>
        <div v-if="articles.length > 1" class="post-list">
          <article v-for="article in articles.slice(1)" :key="article.link" class="post-list-item">
            <RouterLink :to="article.link">
              <time>{{ article.date }}</time>
              <div><h3>{{ article.title }}</h3><p>{{ article.description }}</p></div>
              <span aria-hidden="true">↗</span>
            </RouterLink>
          </article>
        </div>
      </section>
    </template>

    <article v-else-if="isArticle" class="post-page">
      <header class="post-header site-shell reading-shell">
        <RouterLink class="eyebrow back-link" to="/">← 返回文章列表</RouterLink>
        <h1>{{ page.title }}</h1>
        <p v-if="pageDescription" class="post-description">{{ pageDescription }}</p>
        <div class="post-meta"><span>{{ frontmatter.date }}</span><span>·</span><span>约 3 分钟阅读</span></div>
      </header>
      <Content class="post-content site-shell reading-shell" />
    </article>

    <Content v-else class="content-page site-shell reading-shell" />
  </main>

  <footer class="site-footer">
    <div class="site-shell footer-inner">
      <p>© 2026 王彬彬. 保持好奇，持续创造。</p>
      <div><a href="https://github.com/wghust">GitHub</a><a href="#main-content">返回顶部 ↑</a></div>
    </div>
  </footer>
</template>
