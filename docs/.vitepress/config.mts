import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "k1ch3r's silly \"docs\"",
  description: "Trying to write down thoughts and learnings in my dev journey.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Concepts', link: '/misc' },
      { text: 'Styling', link: '/style' },
      { text: 'Rendering', link: '/compose' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    
    footer: 
      { message: 'made with 🤔🤯😱 by k1ch3r' },
      // { copyright: '© 2021 k1ch3r' }
    
  }
})
