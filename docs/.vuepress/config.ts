import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { blogTheme } from './theme'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '王彬彬',
  description: '记录软件工程、产品设计与数字生活。',
  theme: blogTheme(),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    })
  ]
})
