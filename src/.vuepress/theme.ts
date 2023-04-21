import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import { sidebarConfig } from "./sidebar";
export default hopeTheme({
  hostname: "https://wlei224.gitee.io/",

  // 网站图标
  logo: "http://images.rl0206.love/202304181527666.png",
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
  footer: '<a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备2021038026号-1</a>'
  +'<img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/beian.png" height="15px" width="15px" />'
  +'<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41030502000411">'
  +'<span>豫公网安备 41030502000411号</span>'
  +'</a>',
  displayFooter: true,

  // 文章信息，可以填入数组，数组的顺序是各条目显示的顺序
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "Word","ReadingTime"],

  blog: {
    // 个人介绍页地址
    intro: "/aboutguider/",
    sidebarDisplay: "mobile",
    // 博主头像
    avatar: "http://images.rl0206.love/202304192047438.png",
    // 圆角
    roundAvatar: true,
    // 座右铭
    description:"没有什么使我停留——除了目的，纵然岸旁有玫瑰、有绿荫、有宁静的港湾，我是不系之舟。",
    medias: {
      Zhihu: "https://www.zhihu.com/people/cmower",
      CSDN: "https://blog.csdn.net/qing_gee",
      Github: "https://github.com/itwanger",
      Gitee: "https://gitee.com/itwanger",
    },
  },

  plugins: {
    // 开启博客功能
    blog: {
      // 启用博客自动摘要
      // autoExcerpt: true,
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
