# 博客全站视觉升级 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将现有 Jekyll 博客升级为内容优先、响应式且支持深色模式的中文个人技术博客。

**Architecture:** 保留原生 Jekyll 和静态资源结构，用统一默认布局承载全局导航与页脚，用文章布局承载文章元信息与正文。CSS 负责全部视觉和响应式规则，轻量 JavaScript 只负责主题和移动导航交互。

**Tech Stack:** Jekyll, Liquid, HTML5, CSS3, Vanilla JavaScript

---

### Task 1: 完善站点配置与页面结构

**Files:**
- Modify: `_config.yml`
- Modify: `_layouts/default.html`
- Create: `_layouts/post.html`
- Modify: `index.html`
- Create: `about.md`
- Modify: `_posts/2015-05-04-test.md`

- [x] **Step 1:** 在 `_config.yml` 中补齐站点标题、描述、作者、GitHub 地址和 Markdown 配置。
- [x] **Step 2:** 将默认布局改造成语义化的全站外壳，加入跳转正文、导航、主题按钮与页脚。
- [x] **Step 3:** 新增文章布局，展示标题、日期、阅读时长和正文。
- [x] **Step 4:** 将首页实现为介绍、最新文章卡片和其余文章列表。
- [x] **Step 5:** 增加关于页并扩展示例文章内容，用于验证正文组件。

### Task 2: 建立完整视觉系统

**Files:**
- Modify: `stylesheets/stylesheet.css`

- [x] **Step 1:** 定义浅色与深色设计令牌、排版比例、容器和焦点状态。
- [x] **Step 2:** 实现导航、首页介绍、置顶文章、文章列表与页脚样式。
- [x] **Step 3:** 实现文章正文、代码、引用、列表、表格和图片样式。
- [x] **Step 4:** 添加移动导航、响应式布局和减少动效适配。

### Task 3: 实现轻量交互

**Files:**
- Modify: `javascripts/main.js`

- [x] **Step 1:** 实现系统主题检测、手动切换和 `localStorage` 持久化。
- [x] **Step 2:** 实现移动导航展开、状态同步和导航后关闭。
- [x] **Step 3:** 自动更新页脚年份。

### Task 4: 构建与浏览器验证

**Files:**
- Verify: all changed files

- [x] **Step 1:** 运行可用的 Jekyll 构建或静态结构检查，修复错误。
- [x] **Step 2:** 启动本地站点并在浏览器验证首页、文章页、关于页。
- [x] **Step 3:** 验证桌面、移动端、深色模式和键盘交互。
