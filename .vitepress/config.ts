import { defineConfig } from 'vitepress'
import renderPermaLink from './render-perma-link'
import MarkDownItCustomAnchor from './markdown-it-custom-anchor'

const ogDescription = '全栈养成'
const ogTitle = 'SJiNa'
const ogUrl = 'https://vitejs.dev'

export default defineConfig({
  title: 'SJiNa',
  description: '个人博客',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml+png', href: '/logo.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@vite_js' }],
    ['meta', { name: 'theme-color', content: '#646cff' }]
  ],

  vue: {
    reactivityTransform: true
  },

  themeConfig: {
    logo: '/logo.png',

    editLink: {
      text: '为此页提供修改建议',
      pattern: 'https://github.com/vitejs/docs-cn/edit/main/:path'
    },

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/vite_js' },
      { icon: 'discord', link: 'https://chat.vitejs.dev' },
      { icon: 'github', link: 'https://github.com/vitejs/vite' }
    ],

    algolia: {
      appId: 'FXWBT57VAA',
      apiKey: 'df489d46bef65e55c6c74037251ec548',
      indexName: 'data',
    },

    carbonAds: {
      code: '',
      placement: ''
    },

    localeLinks: {
      text: '简体中文',
      items: [
        // { text: 'English', link: 'https://vitejs.dev' },
      ]
    },

    footer: {
      copyright:
        'Copyright © 2022-present WangSJ'
    },

    nav: [
      { text: '前端', link: '/guide/', activeMatch: '/guide/' },
      { text: '后端', link: '/config/', activeMatch: '/config/' },
      { text: '其它工程能力', link: '/plugins/', activeMatch: '/plugins/' },
      {
        text: '相关链接',
        items: [
          { text: 'Team', link: '/team' },
          {
            text: 'Twitter',
            link: 'https://twitter.com/vite_js'
          },
          {
            text: 'Discord Chat',
            link: 'https://chat.vitejs.dev'
          },
          {
            text: 'Awesome Vite',
            link: 'https://github.com/vitejs/awesome-vite'
          },
          {
            text: 'Dev.to 社区',
            link: 'https://dev.to/t/vite'
          },
          {
            text: 'Rollup 插件兼容',
            link: 'https://vite-rollup-plugins.patak.dev/'
          },
          {
            text: '更新日志',
            link: 'https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md'
          }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            {
              text: '为什么选 Vite',
              link: '/guide/why'
            },
            {
              text: '开始',
              link: '/guide/'
            },
          ]
        },
        {
          text: 'API',
          items: [
            {
              text: '配置参考',
              link: '/config/'
            }
          ]
        }
      ],
      '/config/': [
        {
          text: '配置',
          items: [
            
            {
              text: '共享选项',
              link: '/config/shared-options'
            },
          ]
        }
      ]
    }
  },

  markdown: {
    anchor: {
      permalink: renderPermaLink
    },
    config: (md) => {
      md.use(MarkDownItCustomAnchor)
    }
  }
})
