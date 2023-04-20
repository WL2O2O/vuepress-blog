import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { commentPlugin } from "vuepress-plugin-comment2";
import { pwaPlugin } from "vuepress-plugin-pwa2";
import { defineUserConfig } from "vuepress";
import theme from "./theme";
// 配置主题色选择器：https://theme-hope.vuejs.press/zh/guide/interface/theme-color.html#%E8%AE%BE%E7%BD%AE%E9%BB%98%E8%AE%A4%E4%B8%BB%E9%A2%98%E8%89%B2
import { hopeTheme } from "vuepress-theme-hope";
export default defineUserConfig({
  // 中文
  lang: "zh-CN",
  // 标题
  title: "CS_GUIDER",
  // 描述
  description: "记录我的CS之路,为你点亮一座灯塔！",
  // HTML 目录
  dest: "./dist",
  // 如果你正在使用 PWA 插件，我们推荐在你的 VuePress 配置文件中设置 
  shouldPrefetch: false,

  head: [
    // meta
    ["meta", { name: "robots", content: "all" }],
    ["meta", { name: "author", content: "沉默王二" }],
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
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_3180624_7cy10l7jqqh.css",
        // rel: "stylesheet",
        // href: "//cdn.jsdelivr.net/npm/@docsearch/css@3"
      },
    ],
  ],

  plugins: [
    // Progressive Web app，即渐进式网络应用程序，
    // 允许网站通过支持该特性的浏览器将网站作为 App 安装在对应平台上。
    pwaPlugin({
      // favicon.ico一般用于作为缩略的网站标志,它显示位于浏览器的地址栏或者在标签上,用于显示网站的logo,
      favicon: "http://images.rl0206.love/202304200057802.ico",
      // // 主题色
      themeColor: "#096dd9",
      // themeColor: {
      //   blue: "#096dd9",
      //   red: "#f26d6d",
      //   green: "#3eaf7c",
      //   orange: "#fb9b5f",
      // },
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
    // 留言
    commentPlugin({
      provider: "Giscus",
      repo :"itwanger/tobebetterjavaer-giscus",
      repoId:"R_kgDOHBJssg",
      category:"Announcements",
      categoryId:"DIC_kwDOHBJsss4COJOx",
    }),
    // 只能搜索

  //   <script src="https://cdn.jsdelivr.net/npm/@docsearch/js@3"></script>
  // <script type="text/javascript">

  //   docsearch({

  //     appId: 2YNM597FQ3,

  //     apiKey: 506633b70b19f8eeca4ae7f53e559ef4,

  //     indexName: wlei224-gitee,

  //     

  //   });

  // </script>
    docsearchPlugin({
      appId: "2YNM597FQ3",
      apiKey: "506633b70b19f8eeca4ae7f53e559ef4",
      indexName: "wlei224-gitee",
      container: '### REPLACE ME WITH A CONTAINER (e.g. div) ###',
      debug: false,
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
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
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

  theme,
});

