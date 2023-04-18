import { navbar } from "vuepress-theme-hope";

export default navbar([
  { 
    text: "博客",
    icon: "gaishu",
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
    text: "学习路线",
    icon: "luxian",
    link: "/xuexiluxian/"
  },
  {
    text: "珍藏资源",
    icon: "youzhi",
    children: [
      {
        text: "PDF下载", 
        icon: "java", 
        link: "/pdf/readme.md" 
      },
      { 
        text: "面渣逆袭", 
        icon: "zhunbei", 
        link: "/sidebar/sanfene/nixi.md" 
      },
      { 
        text: "破解合集",
        icon: "zhongyaotishi",
        link: "/nice-article/itmind/" 
      },
    ],
  },
  {
    text: "Hexo博客",
    icon: "discover", 
    link: "https://rl0206.love"
  },
]);
