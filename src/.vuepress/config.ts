import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { defineUserConfig } from "vuepress";
// 引入主题配置
import theme from "./theme";
export default defineUserConfig({
  // TODO: 配置多颜色切换 2023/04/26 已解决
  // 按照官方教程，配置主题多颜色需要配置在config.ts也就是本文件中，
  // 由于把theme.ts单独拎了出去，然后在全局配置文件config.ts中引入即可，多颜色切换已解决
  
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
    // 搜索功能
    docsearchPlugin({
      appId: "2YNM597FQ3",
      apiKey: "c57eed21810689379dcf044a75c7568b",
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
  // 引入主题的相关配置元素
  theme,
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

