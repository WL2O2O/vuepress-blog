import { sidebar } from "vuepress-theme-hope";
export const sidebarConfig = sidebar({
  "/guider/": [
    "README.md",
    "javaroute"
  ],
  "/cainiao/": [
    "readme.md",
    "修仙前言",
    "abstractandinterface",
    "article",
    "Bugsss",
    "collection",
    "DMDatabase",
    "DNS",
    "Educoder",
    "git",
    "hellovuepress",
    "JVM",
    "javaessay",    
    "Linux",
    "MyLanqiaoNote",
    "mysql",
    "netty",
    "object",
    "tip",
    "transaction",
  ],
  "/redis/":[
    "readme.md",
    "Redis"
  ],
  "/mianshi/":[
    "readme.md",
    "mindmap",
    "resumeRules",
    "myfirstoffer",
    "mianshiQA"
  ],
  "/collection/":[
    "README.md",
    {
      text: "项目实操笔记",
      prefix: "project/",
      collapsible: true,
      children: [
        "aggregateSearch",
        "api",
        "bilibili",
        "CampousLostAndFound",
        "oj",
        "shangyitong",
        "SSM",
      ],
    },
  ],
  "/suanfa/": [
      "README.md",
      "001.两数之和",
      "026.删除有序数组中的重复项",
      "JZ06 从尾到头打印链表",
  ],
  "/pdf/": [
    "README.md",
  ],
  
  // 必须放在最后面,这是默认目录
  // "/": [
  //   {
  //     text: "一、前言",
  //     link: "home",
  //   },
  //   {
  //     text: "二、Java核心",
  //     collapsible: true,
  //     children: [
  //       {
  //         prefix: "overview/",
  //         text: "2.1 Java概述",
  //         collapsible: true,
  //         children: [
  //         "what-is-java",
  //         "java-history",
  //         "java-can-do-what",
  //         "jdk-install-config",
  //         "IDEA-install-config",
  //         "hello-world",
  //         ],
  //       },
  //     ],
  //   },
    
  // ],
});



