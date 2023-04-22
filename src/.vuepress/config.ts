import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { commentPlugin } from "vuepress-plugin-comment2";
import { pwaPlugin } from "vuepress-plugin-pwa2";
import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  // TODO: 配置多颜色切换
  
  // 中文
  lang: "zh-CN",
  // 标题
  title: "CS_GUIDER",
  // 描述
  description: "记录我的CS之路,为你点亮一座灯塔!",
  // HTML 目录
  dest: "src/.vuepress/dist",
  // 如果你正在使用 PWA 插件，我们推荐在你的 VuePress 配置文件中设置 
  shouldPrefetch: false,

  head: [
    // meta
    ["meta", { name: "robots", content: "all" }],
    ["meta", { name: "author", content: "WLei224" }],
    [
      "meta",
      {
        "http-equiv": "Cache-Control",
        content: "no-cache, no-store, must-revalidate",
      },
    ],
    ["meta", { "http-equiv": "Pragma", content: "no-cache" }],
    ["meta", { "http-equiv": "Expires", content: "0" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "Java, Java基础, 并发编程, JVM, 虚拟机, 数据库, MySQL, Spring, Redis, MyBatis, SpringBoot, IDEA, 求职面试, 面渣逆袭, 学习路线",
      },
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "script",{},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?5230ac143650bf5eb3c14f3fb9b1d3ec";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `
    ],
    // 配置阿里的cdn
    // [
    //   "link",
    //   {
    //     rel: "stylesheet",
    //     href: "//at.alicdn.com/t/font_3180624_7cy10l7jqqh.css",
    //   },
    // ],

    // 以下是配置docsearch的配置，暂时注释掉
    // // 因为不是vuepress默认主题，因此需要手动配置搜索框的css样式，如下：
    // [
    //   "link",
    //   {
    //     rel: "stylesheet",
    //     href: "//cdn.jsdelivr.net/npm/@docsearch/css@3"
    //   },
    // ],  
    // [
    //   "script",
    //   {
    //     src: "https://cdn.jsdelivr.net/npm/@docsearch/js@3"
    //   } 
    // ],
    // // 性能优化
    // [
    //   "link",
    //   {
    //     rel: "preconnect",
    //     href: "https://2YNM597FQ3-dsn.algolia.net crossorigin",
    //     // crossorigin: /,
    //   }
    // ],
    // [
    //   'link',
    //   { 
    //     rel: 'stylesheet', 
    //     href: 'https://cdn.jsdelivr.net/npm/docsearch.js@3/dist/cdn/docsearch.min.css' 
    //   }
    // ], 
    // 配置waline评论插件
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://unpkg.com/@waline/client@v2/dist/waline.css"
      }
    ],
    [
      'script',
      {
        type: 'module',
        src: 'https://unpkg.com/@waline/client@v2/dist/waline.mjs',
        async: true,
      },
    ],
    [
      'script',
      {
        type: 'module',
      },
      `
        import { init } from 'https://unpkg.com/@waline/client@v2/dist/waline.mjs';
        init({
          el: '#waline',
          serverURL: 'https://cs-guider-6cmm99f2s-wl2o2o.vercel.app/',
        });
      `,
    ],
  ],

  plugins: [
    // Progressive Web app，即渐进式网络应用程序，
    // 允许网站通过支持该特性的浏览器将网站作为 App 安装在对应平台上。
    pwaPlugin({
      // favicon.ico一般用于作为缩略的网站标志,它显示位于浏览器的地址栏或者在标签上,用于显示网站的logo,
      // favicon: "http://images.rl0206.love/202304200057802.ico",
      favicon: "http://images.rl0206.love/202304221329083.ico",
      // 主题色 经测试，下列themecolor语句不起作用
      // themeColor: "#fb9b5f",
      apple: {
        icon: "/logo.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/logo.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/logo.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/logo.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/logo.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/logo.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
    // 留言
    // commentPlugin({
    //   provider: "Giscus",
    //   repo :"itwanger/tobebetterjavaer-giscus",
    //   repoId:"R_kgDOHBJssg",
    //   category:"Announcements",
    //   categoryId:"DIC_kwDOHBJsss4COJOx",
    // }),
    // Waline 配置
    commentPlugin({
      provider: "Waline",
      serverURL: "https://cs-guider-6cmm99f2s-wl2o2o.vercel.app/",
      // 为文章增加表情互动功能，设置为 true 提供默认表情，也可以通过设置表情地址数组来自定义表情图片，最大支持 8 个表情。
      reaction: true,
    }),
    // 只能搜索
    docsearchPlugin({
      appId: "2YNM597FQ3",
      apiKey: "506633b70b19f8eeca4ae7f53e559ef4",
      indexName: "wlei224-gitee",
      // container: '### REPLACE ME WITH A CONTAINER (e.g. div) ###',
      // debug: false,
      locales: {
        "/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
              },
            },
          },
        },
      },
    }),
  ],
  // 引入主题等配置元素
  theme,
  // // 配置主题色选择器：https://theme-hope.vuejs.press/zh/guide/interface/theme-color.html#%E8%AE%BE%E7%BD%AE%E9%BB%98%E8%AE%A4%E4%B8%BB%E9%A2%98%E8%89%B2
  // theme: hopeTheme({
  //   themeColor: {
  //     blue: "#2196f3",
  //     red: "#f26d6d",
  //     green: "#3eaf7c",
  //     orange: "#fb9b5f",
  //   },
  // }),

  // TODO 
  // // 添加rollupOptions配置项
  // bundlerConfig: {
  //   rollupOptions: {
  //     output: {
  //       // 调整chunk大小警告的限制
  //       chunkSizeWarningLimit: 2000,
  //       // 使用manualChunks来进行代码块分割
  //       manualChunks(id) {
  //         if (id.includes("node_modules")) {
  //           return "vendor";
  //         }
  //       },
  //     },
  //   },
  // },

});

