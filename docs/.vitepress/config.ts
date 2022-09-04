import { defineConfig } from 'vitepress'
import sidebar from './sidebarConfig'
import nav from './navConfig'

const config= defineConfig({
    title: 'Home',
    description: 'Just playing around.',
    // 头部head
    head: [
        // 添加图标
        ['link', { rel: 'icon', href: 'logo.png' }]
    ],
    
    themeConfig: {
        nav,
        footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2022-present WangSJ'
        },
        sidebar
      }
  })

  export default config