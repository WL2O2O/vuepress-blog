import { navbar } from "vuepress-theme-hope";

export default navbar([
  { 
    text: "博客",
    icon: "home",
    link: "/blog.md" 
  },
  { 
    text: "CS之路", 
    icon: "branch", 
    link: "/collection/",
    // 开启子导航栏的语句：
    // children: ["tutorial/", "markdown/", "vuepress/", "customize/"],
  },
  {
    text: "宝藏资源",
    icon: "like",
    children: [
      {
        text: "PDF天堂", 
        icon: "java", 
        link: "/pdf/README.md" 
      },
      { 
        text: "APP整合", 
        icon: "hot", 
        link: "/app/README.md" 
      },
    ],
  },
  {
    text: "Hexo博客",
    icon: "heading", 
    link: "https://csguider.icu/hexoblog"
  },
]);
