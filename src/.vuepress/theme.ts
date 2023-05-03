import { hopeTheme } from "vuepress-theme-hope";
// 引入导航栏和侧边栏到theme.ts, theme.ts最终会引入到config.ts
import navbar from "./navbar";
import { sidebarConfig } from "./sidebar";
export default hopeTheme({
  // 配置多颜色切换
  hostname: "https://wlei224.gitee.io/",
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#00ceac",
    purple: "#ed7196",
  },
  
  // 网站图标
  logo: "/favicon.ico",
  // Git 仓库和编辑链接
  repo: "https://gitee.com/WLei224/WLei224.git",
  repoLabel: "Gitee",
  docsDir: "docs",
  // 以前的默认仓库分支名，方便提交 pr 和 issue
  docsBranch: "master",

  // 全屏按钮
  fullscreen: true,
  // 在深色模式，浅色模式和自动之间切换 (默认)
  darkmode: "switch",
  // 纯净模式，会禁用一些花哨的动画以及一些色彩
  // pure: true,

  // 阿里巴巴矢量库图标的前缀
  // iconPrefix: "iconfont icon-",

  // home页和导航栏Iconfont 精选图标 和 阿里妈妈的互斥
  iconAssets: "iconfont",

  // 全局默认作者
  author: {
    name: "WLei224",
    url: "/aboutguider/",
  },

  // 加密
  encrypt: {
    config: {
      // 这只会加密 config/page.html
      "/nice-article/itmind/xshellazpjbjcxshellpxffxbxt.html": ["1110", "0224"],
      "/nice-article/itmind/ideapjazjczxjhmzcmyjjhcxgxz.html": ["1110", "0224"],
    },
  },
  // 提示文字
  encryptLocales: {
    placeholder: "唱、跳、rap、篮球🏀！",

    /**
     * Passwrod error hint
     */
    errorHint: "哈哈，你干嘛~",
  },

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebarConfig,

  // 页脚支持
  footer: '<a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备2023001822号</a>'
  +'<img src="http://images.rl0206.love/202305030138722.png" height="15px" width="15px" />'
  +'<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41078102000226">'
  +'<span>豫公网安备 41078102000226号</span>'
  +'</a>',
  displayFooter: true,

  // 文章信息，可以填入数组，数组的顺序是各条目显示的顺序
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "Word","ReadingTime"],

  blog: {
    // 个人介绍页地址
    intro: "/aboutguider/",
    sidebarDisplay: "mobile",
    // 博主头像
    avatar: "/author.png",
    // 圆角
    roundAvatar: true,
    // 座右铭
    description:"目光放远(方向务必正确); 脚步放稳(眼高切勿手低); 道阻且长(静心切勿浮躁); 行则将至(唯有Persistence)!",
    medias: {
      // 无内置图标
      // CSDN: "https://blog.csdn.net/wl2oo1",
      Github: "https://github.com/WL2O2O",
      Gitee: "https://gitee.com/WLei224",
      // Email: "1149630057@qq.com",
      QQ: "http://images.rl0206.love/202305031112485.png",
      Wechat: "http://images.rl0206.love/202305031112714.png"
    },
  },

  plugins: {
    // 移动端开启一键复制
    copyCode: {
      showInMobile: true,
    },
    // 开启博客功能
    blog: {
      // 启用博客自动摘要
      // autoExcerpt: true,
    },
    // // Waline 配置
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://cs-guider-6cmm99f2s-wl2o2o.vercel.app/",
    //   // 为文章增加表情互动功能，设置为 true 提供默认表情，也可以通过设置表情地址数组来自定义表情图片，最大支持 8 个表情。
    //   reaction: true,
    // },
    comment: {
      provider: "Giscus",
      repo: "WL2O2O/CS_GUIDER_Giscus",
      repoId: "R_kgDOJYdTQw",
      category: "Announcements",
      categoryId: "DIC_kwDOJYdTQ84CWKC6"
    },
    // Progressive Web app，即渐进式网络应用程序，
    // 允许网站通过支持该特性的浏览器将网站作为 App 安装在对应平台上。
    pwa: {
      // favicon.ico一般用于作为缩略的网站标志,它显示位于浏览器的地址栏或者在标签上,用于显示网站的logo,
      favicon: "http://images.rl0206.love/202304221329083.ico",
      maxSize: 3072,
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
    },
    
    // 该插件会监听页面滚动事件。当页面滚动至某个 标题锚点 后，如果存在对应的 标题链接 ，那么该插件会将路由 Hash 更改为该 标题锚点 。
    activeHeaderLinks: true,

    mdEnhance: {
      // 添加选项卡支持
      tabs: true,
      // 流程图
      mermaid: true,
      // 支持任务列表
      tasklist: true,

      // 启用图片懒加载
      imgLazyload: true,
      // 启用图片标记
      imgMark: true,
      // 启用图片大小
      imgSize: true,

      // TODO: 后续处理 2023/4/21已解决
      // 启用图片标题
      figure: true,

      // 自定义对齐
      align: true,

      // 支持幻灯片
      presentation: true,

      // 链接检查
      linkCheck: "always",

      // 你的 Markdown 行为与 GitHub 保持一致
      gfm: true,
    },
  },
});
