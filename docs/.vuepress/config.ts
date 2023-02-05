import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '随记小博',
  description: '十年磨砺',
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '沉淀',
        link: '/experience',
      },
      {
        text: '探索',
        link: '/explore'
      },
      {
        text: '感悟',
        link: '/think'
      },
      {
        text: '旅游',
        link: '/travel'
      }
    ],
  }),
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