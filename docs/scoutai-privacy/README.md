---
title: ScoutAI 隐私权政策
description: ScoutAI - DevTools AI Diagnostics Chrome 扩展的隐私权政策。
---

# ScoutAI 隐私权政策

生效日期：2026 年 6 月 23 日

ScoutAI - DevTools AI Diagnostics（以下简称 “ScoutAI”）重视用户隐私。本隐私权政策说明 ScoutAI Chrome 扩展如何处理数据，以及这些数据如何被使用和保护。

## 扩展用途

ScoutAI 是一个 Chrome DevTools 扩展，用于帮助开发者分析当前正在检查的网页。它可以基于 DevTools 数据分析 Network 请求、页面性能、SEO 信息、内存风险和 Console 报错，并在用户启用模型能力时生成 AI 辅助总结。

## 我们处理的数据

ScoutAI 只处理提供 DevTools 诊断功能所必需的数据，且仅限当前 DevTools 正在检查的页面。

可能处理的数据包括：

- 当前检查页面的 URL、标题、meta 信息、canonical、H1、图片 alt、JSON-LD 等页面元数据。
- 当前 DevTools 会话中的 Network / HAR 请求信息，例如请求 URL、状态码、资源类型、耗时、TTFB 和传输大小。
- 页面性能数据，例如 Navigation Timing、Web Vitals、LCP、TTFB、资源加载信息和长任务相关信息。
- DOM、内存和资源统计信息，例如 DOM 节点数量、文档数量、事件监听器数量、运行时内存快照等。
- 用户按需触发 Console 分析时采集的控制台错误、警告、异常、来源 URL、行列号和调用栈。
- 用户在 ScoutAI 对话框中输入的问题。
- 用户在配置中心主动填写的模型服务商、Base URL、模型名称和 API Key。

## 本地存储

ScoutAI 会使用 Chrome 本地存储保存以下配置：

- 模型配置和模型列表。
- 用户配置的 API Key。
- 默认模型选择。
- UI 偏好设置，例如侧栏宽度。

这些配置保存在用户浏览器本地。ScoutAI 不会将这些配置上传到 ScoutAI 自有服务器。

## AI 模型服务

ScoutAI 的模型分析功能是可选的。用户可以选择不启用模型，此时 ScoutAI 会尽可能使用本地规则和 DevTools 数据进行分析。

当用户启用模型功能并配置 API Key 后，ScoutAI 可能会向用户选择的模型服务商发送以下数据：

- 用户输入的问题。
- 当前页面相关的必要诊断结果，例如 Network 摘要、性能指标、SEO 检查结果、Console 报错摘要或内存诊断结果。

这些数据只会发送到用户在配置中心选择和配置的模型服务商，例如 DeepSeek、GLM、OpenAI 兼容接口或 Claude 兼容接口。模型服务商如何处理这些请求数据，受其各自隐私政策和服务条款约束。

ScoutAI 不会将模型返回内容作为远程代码执行。模型返回内容只会作为文本或 Markdown 展示给用户。

## 权限用途

ScoutAI 请求以下 Chrome 权限：

### `storage`

用于在 Chrome 本地存储中保存模型配置、API Key、默认模型选择和 UI 偏好设置。

### `debugger`

用于在用户明确请求相关诊断时调用 Chrome DevTools Protocol，例如内存诊断、HeapProfiler 采样、Performance 指标读取，以及按需采集 Console 错误。

ScoutAI 不会在后台持续调试网页。Console 报错分析会在用户请求时短暂开启调试，采集完成后关闭调试。

### 模型 API 主机权限

ScoutAI 请求访问以下模型 API 域名：

- `https://api.deepseek.com/*`
- `https://open.bigmodel.cn/*`
- `https://api.openai.com/*`
- `https://api.anthropic.com/*`

这些主机权限仅用于在用户启用并配置对应模型服务商后，发送用户主动请求的诊断问题和必要的诊断结果。ScoutAI 不会使用这些权限读取浏览历史、访问任意网页或向网页注入代码。

## 不会收集的数据

ScoutAI 不会收集以下数据：

- 姓名、邮箱、电话号码、地址等个人身份信息。
- 支付信息、银行卡信息或交易记录。
- 健康信息。
- 精确地理位置。
- 跨网站浏览历史。
- 用户在网页中的点击、滚动、键盘输入等行为记录。
- 网站登录密码、验证码、证件号码或 PIN。

## 数据共享与出售

ScoutAI 不会出售用户数据。

除用户主动配置并启用的模型服务商外，ScoutAI 不会向第三方共享用户数据。用户启用模型能力时，必要的诊断数据会发送到用户选择的模型 API，用于生成分析结果。

## 远程代码

ScoutAI 不下载或执行远程托管代码。扩展的 JavaScript、CSS 和 UI 资源均随扩展包一起发布。

ScoutAI 可能会请求用户配置的模型 API，但模型 API 返回内容仅作为文本数据展示或总结，不会作为 JavaScript 或其他可执行代码运行。

## 数据保留

ScoutAI 的诊断数据主要在当前 DevTools 会话中临时处理。模型配置和 API Key 会保存在 Chrome 本地存储中，直到用户修改、删除扩展配置或卸载扩展。

## 政策更新

如果本隐私权政策发生变化，更新后的内容将发布在本页面，并修改生效日期。

## 联系方式

如对本隐私权政策有疑问，请通过 Chrome Web Store 中显示的开发者联系方式联系开发者。
