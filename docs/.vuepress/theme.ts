import type { Theme } from 'vuepress'
import { path } from '@vuepress/utils'

export const blogTheme = (): Theme => ({
  name: 'vuepress-theme-wghust-blog',
  clientConfigFile: path.resolve(__dirname, 'client.ts'),
})
