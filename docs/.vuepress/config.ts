import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
const { path } = require('@vuepress/utils')

export default defineUserConfig<DefaultThemeOptions>({
  // site config
  lang: "en-US",
  title: "Vue Ganttastic",
  description: "A simple and customizable Gantt chart component for Vue",
  base: '/vue-ganttastic/',
  clientAppEnhanceFiles: path.resolve(
    __dirname,
    './clientAppEnhance.ts'
  ),
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          }
        }
      }
    ]
  ],
  // theme and its config
  themeConfig: {
    logo: 'https://user-images.githubusercontent.com/28678851/148047714-301f07df-4101-48b8-9e47-1f272b290e80.png',
    extractHeaders: true,
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/InfectoOne/vue-ganttastic',
      }
    ],

    sidebar: [
      "./introduction.md",
      "./getting-started.md",
      "./common-use-cases.md",
      "./examples.md",
      "./GGanttChart.md",
      "./GGanttRow.md"
    ]

  },
})