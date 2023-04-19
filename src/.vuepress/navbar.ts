import { navbar } from "vuepress-theme-hope";

export default navbar([
  { 
    text: "博客",
    icon: "home",
    link: "/blog.md" 
  },
  { 
    text: "CS之路", 
    icon: "lujing", 
    link: "/collection/" 
  },
  { 
    text: "知识星球", 
    icon: "Artboard", 
    link: "/zhishixingqiu/" 
  },
  {
    text: "CS生涯规划",
    icon: "guide",
    link: "/guider/"
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
    link: "https://rl0206.love"
  },
]);
