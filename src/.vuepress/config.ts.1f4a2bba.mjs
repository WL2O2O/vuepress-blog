// src/.vuepress/config.ts
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { commentPlugin } from "vuepress-plugin-comment2";
import { pwaPlugin } from "vuepress-plugin-pwa2";
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var navbar_default = navbar([
  {
    text: "\u535A\u5BA2",
    icon: "home",
    link: "/blog.md"
  },
  {
    text: "CS\u4E4B\u8DEF",
    icon: "branch",
    link: "/collection/"
    // 开启子导航栏的语句：
    // children: ["tutorial/", "markdown/", "vuepress/", "customize/"],
  },
  {
    text: "\u77E5\u8BC6\u661F\u7403",
    icon: "discover",
    link: "/zhishixingqiu/"
  },
  {
    text: "CS\u751F\u6DAF\u89C4\u5212",
    icon: "guide",
    link: "/guider/"
  },
  {
    text: "\u5B9D\u85CF\u8D44\u6E90",
    icon: "like",
    children: [
      {
        text: "PDF\u5929\u5802",
        icon: "java",
        link: "/pdf/README.md"
      },
      {
        text: "APP\u6574\u5408",
        icon: "hot",
        link: "/app/README.md"
      }
    ]
  },
  {
    text: "Hexo\u535A\u5BA2",
    icon: "heading",
    link: "https://rl0206.love"
  }
]);

// src/.vuepress/sidebar.ts
import { sidebar } from "vuepress-theme-hope";
var sidebarConfig = sidebar({
  "/zhishixingqiu/": [
    "readme.md",
    "map",
    "may",
    "june",
    "july",
    "august"
  ],
  "/demo/": [
    "readme.md",
    "\u4FEE\u4ED9\u524D\u8A00"
  ],
  "/redis/": [
    "readme.md",
    "Redis"
  ],
  "/mianshi/": [
    "readme.md",
    "\u601D\u7EF4\u5BFC\u56FE"
  ],
  // 你可以省略 .md 扩展名，以 / 结尾的路径会被推断为 /README.md(区分大小写)
  "/nice-article/itmind/": [
    "readme.md",
    "ideapxideajhideayjjhmideazxjhzcmpjjcyjjhqcyx",
    "yigkymxczideatsyqdffblwxjcywdxbxt",
    "ideapjazjczxjhmzcmyjjhcxgxz",
    "ideajhmideajhmideapxideajhmideazcmideayjjhm",
    "navicatmacyjpx",
    "navicatzxbwindowspjbjc",
    "typorayjpx",
    "typoramaczwpjbhyjjdkptmarkdownbjqmksimacsocom",
    "xshellazpjbjcxshellpxffxbxt",
    "pycharmjhpxmazjcnyrgxxbxt",
    "yang1"
  ],
  "/pdf/": [
    "README.md"
  ],
  "/xuexiluxian/": [
    {
      text: "Java\u5B66\u4E60\u8DEF\u7EBF",
      prefix: "java/",
      collapsible: true,
      children: [
        "yitiaolong",
        "thread",
        "jvm"
      ]
    },
    "c",
    "ccc",
    "python",
    "go",
    "os",
    "qianduan",
    "algorithm",
    "lanqiaobei",
    "bigdata",
    "android",
    "mysql",
    "donet"
  ],
  "/sidebar/sanfene/": [
    "nixi",
    "javase",
    "collection",
    "javathread",
    "jvm",
    "spring",
    "redis",
    "mybatis",
    "mysql",
    "os",
    "network",
    "rocketmq"
  ],
  // 必须放在最后面
  "/": [
    {
      text: "\u4E00\u3001\u524D\u8A00",
      link: "home"
    },
    {
      text: "\u4E8C\u3001Java\u6838\u5FC3",
      collapsible: true,
      children: [
        {
          prefix: "overview/",
          text: "2.1 Java\u6982\u8FF0",
          collapsible: true,
          children: [
            "what-is-java",
            "java-history",
            "java-can-do-what",
            "jdk-install-config",
            "IDEA-install-config",
            "hello-world"
          ]
        },
        {
          text: "2.2 Java\u8BED\u6CD5\u57FA\u7840",
          collapsible: true,
          children: [
            "basic-extra-meal/48-keywords",
            "basic-extra-meal/java-naming",
            "basic-grammar/javadoc",
            "basic-grammar/basic-data-type",
            "basic-grammar/type-cast",
            "basic-grammar/operator",
            "basic-grammar/flow-control"
          ]
        },
        {
          text: "2.3 \u6570\u7EC4&\u5B57\u7B26\u4E32",
          collapsible: true,
          children: [
            "array/array",
            "array/print",
            "string/immutable",
            "string/constant-pool",
            "string/intern",
            "string/equals",
            "string/join",
            "string/split"
          ]
        },
        {
          text: "2.4 \u9762\u5411\u5BF9\u8C61\u7F16\u7A0B",
          collapsible: true,
          children: [
            "oo/object-class",
            "oo/package",
            "oo/var",
            "oo/method",
            "oo/construct",
            "oo/access-control",
            "oo/code-init",
            "oo/abstract",
            "oo/interface",
            "oo/abstract-vs-interface",
            "oo/inner-class",
            "oo/this-super",
            "basic-extra-meal/override-overload",
            "oo/static",
            "oo/final",
            "oo/encapsulation",
            "oo/extends-bigsai",
            "oo/polymorphism"
          ]
        },
        {
          text: "2.5 \u96C6\u5408\u6846\u67B6\uFF08\u5BB9\u5668\uFF09",
          collapsible: true,
          children: [
            "collection/gailan",
            "collection/arraylist",
            "collection/linkedlist",
            "collection/list-war-2",
            "collection/iterator-iterable",
            "collection/fail-fast",
            "collection/hashmap",
            "collection/linkedhashmap",
            "collection/treemap",
            "collection/arraydeque",
            "collection/PriorityQueue",
            "collection/WeakHashMap"
          ]
        },
        {
          text: "2.6 IO",
          collapsible: true,
          prefix: "io/",
          children: [
            "shangtou",
            "file-path",
            "stream",
            "reader-writer",
            "buffer",
            "char-byte",
            "serialize",
            "Serializbale",
            "transient",
            "print"
          ]
        },
        {
          text: "2.7 \u5F02\u5E38\u5904\u7406",
          collapsible: true,
          prefix: "exception/",
          children: [
            "gailan",
            "try-with-resouces",
            "shijian",
            "npe"
          ]
        },
        {
          text: "2.8 \u5E38\u7528\u5DE5\u5177\u7C7B",
          collapsible: true,
          prefix: "common-tool/",
          children: [
            "arrays",
            "collections",
            "hutool",
            "guava",
            "utils"
          ]
        },
        {
          text: "2.9 Java\u65B0\u7279\u6027",
          prefix: "java8/",
          collapsible: true,
          children: [
            "stream",
            "optional",
            "Lambda"
          ]
        },
        {
          text: "2.10 Java\u91CD\u8981\u77E5\u8BC6\u70B9",
          prefix: "basic-extra-meal/",
          collapsible: true,
          children: [
            "java-unicode",
            "int-cache",
            "box",
            "deep-copy",
            "hashcode",
            "equals-hashcode",
            "Overriding",
            "pass-by-value",
            "comparable-omparator",
            "jdk9-char-byte-string",
            "jdk-while-for-wuxian-xunhuan",
            "class-object",
            "instanceof",
            "instanceof-jvm",
            "immutable",
            "varables",
            "generic",
            "true-generic",
            "annotation",
            "enum",
            "fanshe"
          ]
        },
        {
          text: "2.11 \u7F51\u7EDC\u7F16\u7A0B",
          collapsible: true,
          prefix: "socket/",
          children: [
            "socket",
            "http"
          ]
        },
        {
          text: "2.12 NIO",
          collapsible: true,
          prefix: "nio/",
          children: [
            "why",
            "rumen",
            "moxing",
            "network-connect",
            "BIONIOAIO"
          ]
        },
        {
          text: "2.13 \u5E76\u53D1\u7F16\u7A0B",
          collapsible: true,
          prefix: "thread/",
          children: [
            "wangzhe-thread",
            "thread-state-and-method",
            "thread-group-and-thread-priority",
            "why-need-thread",
            "thread-bring-some-problem",
            "jmm",
            "volatile",
            "synchronized-1",
            "synchronized",
            "cas",
            "aqs",
            "lock",
            "suo",
            "pianxiangsuo",
            "reentrantLock",
            "ReentrantReadWriteLock",
            "condition",
            "LockSupport",
            "map",
            "ConcurrentHashMap",
            "ConcurrentLinkedQueue",
            "CopyOnWriteArrayList",
            "ThreadLocal",
            "BlockingQueue",
            "pool",
            "ScheduledThreadPoolExecutor",
            "atomic",
            "CountDownLatch",
            "fork-join",
            "shengchanzhe-xiaofeizhe"
          ]
        },
        {
          text: "2.14 JVM",
          prefix: "jvm/",
          collapsible: true,
          children: [
            "what-is-jvm",
            "how-run-java-code",
            "class-load",
            "class-file-jiegou",
            "bytecode",
            "zijiema-zhiling",
            "how-jvm-run-zijiema-zhiling",
            "hsdb",
            "asm",
            "compile-jdk",
            "neicun-jiegou",
            "whereis-the-object",
            "gc",
            "tujie-gc",
            "meituan-9-gc",
            "problem-tools",
            "jit",
            "oom",
            "cpu-percent-100",
            "zongjie"
          ]
        }
      ]
    },
    {
      text: "\u4E09\u3001Java\u4F01\u4E1A\u7EA7\u5F00\u53D1",
      collapsible: true,
      children: [
        {
          text: "3.1 \u5F00\u53D1/\u6784\u5EFA\u5DE5\u5177",
          collapsible: true,
          children: [
            {
              text: "3.1.1 Nginx",
              children: [
                "nginx/nginx"
              ]
            },
            {
              text: "3.1.2 IDE",
              collapsible: true,
              children: [
                "ide/4-debug-skill",
                "ide/xechat",
                "ide/shenji-chajian-10"
              ]
            },
            {
              text: "3.1.3 Maven",
              collapsible: true,
              children: [
                "maven/maven"
              ]
            },
            {
              text: "3.1.4 Git",
              collapsible: true,
              children: [
                "git/git-qiyuan"
              ]
            }
          ]
        },
        {
          text: "3.3 Spring",
          collapsible: true,
          children: [
            {
              text: "Spring AOP\u626B\u76F2",
              link: "springboot/aop-log"
            },
            {
              text: "Spring IoC\u626B\u76F2",
              link: "springboot/ioc"
            }
          ]
        },
        {
          text: "3.4 SpringBoot",
          collapsible: true,
          children: [
            {
              text: "\u642D\u5EFA\u7B2C\u4E00\u4E2ASpring Boot\u9879\u76EE",
              link: "springboot/initializr"
            },
            {
              text: "\u6574\u5408MySQL\u548CDruid",
              link: "springboot/mysql-druid"
            },
            {
              text: "\u6574\u5408JPA",
              link: "springboot/jpa"
            },
            {
              text: "\u6574\u5408Thymeleaf",
              link: "springboot/thymeleaf"
            },
            {
              text: "\u5F00\u542F\u4E8B\u52A1\u652F\u6301",
              link: "springboot/transaction"
            },
            {
              text: "\u8FC7\u6EE4\u5668\u3001\u62E6\u622A\u5668\u3001\u76D1\u542C\u5668",
              link: "springboot/Filter-Interceptor-Listener"
            },
            {
              text: "\u6574\u5408Redis\u5B9E\u73B0\u7F13\u5B58",
              link: "redis/redis-springboot"
            },
            {
              text: "\u6574\u5408Logback",
              link: "springboot/logback"
            },
            {
              text: "\u6574\u5408Swagger-UI",
              link: "springboot/swagger"
            },
            {
              text: "\u6574\u5408Knife4j",
              link: "gongju/knife4j"
            },
            {
              text: "\u6574\u5408SpringTask",
              link: "springboot/springtask"
            },
            {
              text: "\u6574\u5408MyBatis-Plus AutoGenerator",
              link: "kaiyuan/auto-generator"
            },
            "springboot/quartz",
            "springboot/mybatis",
            "springboot/docker",
            "springboot/macos-codingmore-run",
            "springboot/windows-codingmore-run",
            "springboot/linux-codingmore-run",
            "springboot/validator"
          ]
        },
        {
          text: "3.5 Netty",
          collapsible: true,
          children: [
            "netty/rumen"
          ]
        },
        {
          text: "3.6 \u8F85\u52A9\u5DE5\u5177",
          collapsible: true,
          children: [
            "gongju/choco",
            "gongju/brew",
            "gongju/tabby",
            "gongju/warp",
            "gongju/windterm",
            "gongju/chiner",
            "gongju/DBeaver"
          ]
        },
        {
          text: "3.7 \u5F00\u6E90\u8F6E\u5B50",
          collapsible: true,
          children: [
            {
              text: "HTTP\u8C03\u7528\u6846\u67B6Forest",
              link: "gongju/forest"
            },
            {
              text: "\u5355\u5143\u6D4B\u8BD5Junit",
              link: "gongju/junit"
            },
            {
              text: "\u963F\u91CC\u5F00\u6E90\u7684fastjson",
              link: "gongju/fastjson"
            },
            {
              text: "\u8C37\u6B4C\u5F00\u6E90\u7684Gson",
              link: "gongju/gson"
            },
            {
              text: "SpringBoot\u5185\u7F6E\u7684Jackson",
              link: "gongju/jackson"
            },
            {
              text: "\u65E5\u5FD7\u6846\u67B6\u7684\u9F3B\u7956Log4j",
              link: "gongju/log4j"
            },
            {
              text: "\u9AD8\u6027\u80FD\u65E5\u5FD7\u6846\u67B6Log4j2",
              link: "gongju/log4j2"
            },
            {
              text: "Spring Boot\u5185\u7F6E\u7684Logback",
              link: "gongju/logback"
            },
            {
              text: "\u65E5\u5FD7\u95E8\u9762SLF4J",
              link: "gongju/slf4j"
            }
          ]
        },
        {
          text: "3.8 \u5206\u5E03\u5F0F",
          collapsible: true,
          children: [
            {
              text: "Elasticsearch\u5165\u95E8",
              link: "elasticsearch/rumen"
            },
            {
              text: "\u804A\u804AZooKeeper",
              link: "zookeeper/jibenjieshao"
            },
            {
              text: "\u804A\u804A\u5FAE\u670D\u52A1\u7F51\u5173",
              link: "microservice/api-wangguan"
            }
          ]
        },
        {
          text: "3.9 \u6D88\u606F\u961F\u5217",
          collapsible: true,
          children: [
            {
              text: "RabbitMQ\u5165\u95E8",
              link: "mq/rabbitmq-rumen"
            },
            {
              text: "\u5982\u4F55\u4FDD\u969C\u6D88\u606F\u4E0D\u4E22\u5931",
              link: "mq/100-budiushi"
            },
            "mq/kafka"
          ]
        }
      ]
    },
    {
      text: "\u56DB\u3001\u6570\u636E\u5E93",
      collapsible: true,
      children: [
        {
          text: "MySQL",
          collapsible: true,
          children: [
            {
              text: "MySQL\u548CRedis\u6570\u636E\u4E00\u81F4\u6027",
              link: "mysql/redis-shuju-yizhixing"
            }
          ]
        },
        {
          text: "Redis",
          collapsible: true,
          children: [
            {
              text: "Redis\u5165\u95E8",
              link: "redis/rumen"
            },
            {
              text: "\u7F13\u5B58\u96EA\u5D29\u3001\u7A7F\u900F\u3001\u51FB\u7A7F",
              link: "redis/xuebeng-chuantou-jichuan"
            }
          ]
        },
        {
          text: "MongoDB",
          collapsible: true,
          children: [
            "mongodb/rumen"
          ]
        }
      ]
    },
    {
      text: "\u4E94\u3001\u8BA1\u7B97\u673A\u57FA\u7840",
      collapsible: true,
      prefix: "cs/",
      children: [
        {
          text: "\u8BA1\u7B97\u673A\u64CD\u4F5C\u7CFB\u7EDF",
          link: "os"
        },
        {
          text: "\u8BA1\u7B97\u673A\u7F51\u7EDC",
          link: "wangluo"
        }
      ]
    },
    {
      text: "\u516D\u3001\u6C42\u804C\u9762\u8BD5",
      collapsible: true,
      children: [
        {
          text: "\u9762\u8BD5\u9898&\u516B\u80A1\u6587",
          collapsible: true,
          prefix: "interview/",
          children: [
            "java-34",
            "java-hashmap-13",
            "redis-12",
            "mysql-60",
            "dubbo-17",
            "java-basic-baguwen",
            "java-thread-baguwen",
            "java-jvm-baguwen",
            "mianshiguan-bigfile-miaochuan",
            "mianshiguan-fenkufenbiao",
            "mianshiguan-youhuiquan"
          ]
        },
        {
          text: "\u4F18\u8D28\u9762\u7ECF",
          collapsible: true,
          prefix: "mianjing/",
          children: [
            "shanganaliyun",
            "shezynmjfxhelmtttjddd",
            "xuelybdzheloffer",
            "huanxgzl",
            "quzjlsspdx",
            "zheisnylzldhzd",
            "chengxyspnhxagzl"
          ]
        },
        {
          text: "\u9762\u8BD5\u51C6\u5907",
          collapsible: true,
          children: [
            "nice-article/weixin/zijxjjdyfqzgl",
            "nice-article/weixin/miansmtgl",
            "nice-article/weixin/luoczbmsddyb",
            "nice-article/weixin/youdxzhhmjzlycfx"
          ]
        },
        {
          text: "\u57CE\u5E02\u9009\u62E9",
          prefix: "cityselect/",
          collapsible: true,
          children: [
            "beijing",
            "chengdu",
            "guangzhou",
            "hangzhou",
            "nanjing",
            "qingdao",
            "shenzhen",
            "suzhou",
            "xian",
            "zhengzhou",
            "jinan"
          ]
        }
      ]
    },
    {
      text: "\u4E03\u3001\u5B66\u4E60\u5EFA\u8BAE",
      collapsible: true,
      prefix: "xuexijianyi/",
      children: [
        "LearnCS-ByYourself",
        "read-csapp",
        "electron-information-engineering",
        "gaokao-zhiyuan-cs",
        "test-programmer-read-books",
        "xiaozhao-java-should-master",
        "chengxuyuan-fuye",
        "ruhzfzdgzzcxcz",
        "gaobingfa-jingyan-hsmcomputer",
        "hr-xinzi",
        "35-weiji",
        "20ren-it-quma",
        "benkesheng-ali-tengxun",
        "408"
      ]
    },
    {
      text: "\u516B\u3001\u77E5\u8BC6\u5E93\u642D\u5EFA",
      collapsible: true,
      prefix: "szjy/",
      children: [
        "buy-cloud-server",
        "install-baota-mianban",
        "buy-domain",
        "record-domain",
        "https-domain"
      ]
    },
    {
      text: "\u4E5D\u3001\u8054\u7CFB\u4F5C\u8005",
      collapsible: true,
      prefix: "about-the-author/",
      children: [
        "bzhan-10wan",
        "zhihu-1000wan",
        "csdn-1000wan",
        "readme.md"
      ]
    }
  ]
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  // 配置多颜色切换
  hostname: "https://wlei224.gitee.io/",
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f"
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
    url: "/aboutguider/"
  },
  // 加密
  encrypt: {
    config: {
      // 这只会加密 config/page.html
      "/nice-article/itmind/xshellazpjbjcxshellpxffxbxt.html": ["1110", "0224"],
      "/nice-article/itmind/ideapjazjczxjhmzcmyjjhcxgxz.html": ["1110", "0224"]
    }
  },
  // 提示文字
  encryptLocales: {
    placeholder: "\u5531\u3001\u8DF3\u3001rap\u3001\u7BEE\u7403\u{1F3C0}\uFF01",
    /**
     * Passwrod error hint
     */
    errorHint: "\u54C8\u54C8\uFF0C\u4F60\u5E72\u561B~"
  },
  // navbar
  navbar: navbar_default,
  // sidebar
  sidebar: sidebarConfig,
  // 页脚支持
  footer: '<a href="https://beian.miit.gov.cn/" target="_blank">\u8C6BICP\u59072021038026\u53F7-1</a><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/beian.png" height="15px" width="15px" /><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41030502000411"><span>\u8C6B\u516C\u7F51\u5B89\u5907 41030502000411\u53F7</span></a>',
  displayFooter: true,
  // 文章信息，可以填入数组，数组的顺序是各条目显示的顺序
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "Word", "ReadingTime"],
  blog: {
    // 个人介绍页地址
    intro: "/aboutguider/",
    sidebarDisplay: "mobile",
    // 博主头像
    avatar: "/author.png",
    // 圆角
    roundAvatar: true,
    // 座右铭
    description: "\u6CA1\u6709\u4EC0\u4E48\u4F7F\u6211\u505C\u7559\u2014\u2014\u9664\u4E86\u76EE\u7684\uFF0C\u7EB5\u7136\u5CB8\u65C1\u6709\u73AB\u7470\u3001\u6709\u7EFF\u836B\u3001\u6709\u5B81\u9759\u7684\u6E2F\u6E7E\uFF0C\u6211\u662F\u4E0D\u7CFB\u4E4B\u821F\u3002",
    medias: {
      Zhihu: "https://www.zhihu.com/people/cmower",
      CSDN: "https://blog.csdn.net/qing_gee",
      Github: "https://github.com/itwanger",
      Gitee: "https://gitee.com/itwanger"
    }
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
      gfm: true
    }
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  // TODO: 配置多颜色切换 2023/04/26 已解决
  // 按照官方教程，配置主题多颜色需要配置在config.ts也就是本文件中，
  // 由于把theme.ts单独拎了出去，然后在全局配置文件config.ts中引入即可，多颜色切换已解决
  // 中文
  lang: "zh-CN",
  // 标题
  title: "CS_GUIDER",
  // 描述
  description: "\u8BB0\u5F55\u6211\u7684CS\u4E4B\u8DEF,\u4E3A\u4F60\u70B9\u4EAE\u4E00\u5EA7\u706F\u5854!",
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
        content: "no-cache, no-store, must-revalidate"
      }
    ],
    ["meta", { "http-equiv": "Pragma", content: "no-cache" }],
    ["meta", { "http-equiv": "Expires", content: "0" }],
    [
      "meta",
      {
        name: "keywords",
        content: "Java, Java\u57FA\u7840, \u5E76\u53D1\u7F16\u7A0B, JVM, \u865A\u62DF\u673A, \u6570\u636E\u5E93, MySQL, Spring, Redis, MyBatis, SpringBoot, IDEA, \u6C42\u804C\u9762\u8BD5, \u9762\u6E23\u9006\u88AD, \u5B66\u4E60\u8DEF\u7EBF"
      }
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "script",
      {},
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
      "script",
      {
        type: "module",
        src: "https://unpkg.com/@waline/client@v2/dist/waline.mjs",
        async: true
      }
    ],
    [
      "script",
      {
        type: "module"
      },
      `
        import { init } from 'https://unpkg.com/@waline/client@v2/dist/waline.mjs';
        init({
          el: '#waline',
          serverURL: 'https://cs-guider-6cmm99f2s-wl2o2o.vercel.app/',
        });
      `
    ]
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
        statusBarColor: "black"
      },
      msTile: {
        image: "/logo.png",
        color: "#ffffff"
      },
      manifest: {
        icons: [
          {
            src: "/logo.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png"
          },
          {
            src: "/logo.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png"
          },
          {
            src: "/logo.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/logo.png",
            sizes: "192x192",
            type: "image/png"
          }
        ]
      }
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
      reaction: true
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
          placeholder: "\u641C\u7D22\u6587\u6863",
          translations: {
            button: {
              buttonText: "\u641C\u7D22\u6587\u6863",
              buttonAriaLabel: "\u641C\u7D22\u6587\u6863"
            },
            modal: {
              searchBox: {
                resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
                resetButtonAriaLabel: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
                cancelButtonText: "\u53D6\u6D88",
                cancelButtonAriaLabel: "\u53D6\u6D88"
              },
              startScreen: {
                recentSearchesTitle: "\u641C\u7D22\u5386\u53F2",
                noRecentSearchesText: "\u6CA1\u6709\u641C\u7D22\u5386\u53F2",
                saveRecentSearchButtonTitle: "\u4FDD\u5B58\u81F3\u641C\u7D22\u5386\u53F2",
                removeRecentSearchButtonTitle: "\u4ECE\u641C\u7D22\u5386\u53F2\u4E2D\u79FB\u9664"
              },
              errorScreen: {
                titleText: "\u65E0\u6CD5\u83B7\u53D6\u7ED3\u679C",
                helpText: "\u4F60\u53EF\u80FD\u9700\u8981\u68C0\u67E5\u4F60\u7684\u7F51\u7EDC\u8FDE\u63A5"
              },
              footer: {
                selectText: "\u9009\u62E9",
                navigateText: "\u5207\u6362",
                closeText: "\u5173\u95ED",
                searchByText: "\u641C\u7D22\u63D0\u4F9B\u8005"
              },
              noResultsScreen: {
                noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
                suggestedQueryText: "\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u67E5\u8BE2"
              }
            }
          }
        }
      }
    })
  ],
  // 引入主题的相关配置元素
  theme: theme_default
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
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9DU19HVUlERVIvZG9jcy9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxDU19HVUlERVJcXFxcZG9jc1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovQ1NfR1VJREVSL2RvY3Mvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkb2NzZWFyY2hQbHVnaW4gfSBmcm9tIFwiQHZ1ZXByZXNzL3BsdWdpbi1kb2NzZWFyY2hcIjtcbmltcG9ydCB7IGNvbW1lbnRQbHVnaW4gfSBmcm9tIFwidnVlcHJlc3MtcGx1Z2luLWNvbW1lbnQyXCI7XG5pbXBvcnQgeyBwd2FQbHVnaW4gfSBmcm9tIFwidnVlcHJlc3MtcGx1Z2luLXB3YTJcIjtcbmltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tIFwidnVlcHJlc3NcIjtcbi8vIFx1NUYxNVx1NTE2NVx1NEUzQlx1OTg5OFx1OTE0RFx1N0Y2RVxuaW1wb3J0IHRoZW1lIGZyb20gXCIuL3RoZW1lXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgLy8gVE9ETzogXHU5MTREXHU3RjZFXHU1OTFBXHU5ODlDXHU4MjcyXHU1MjA3XHU2MzYyIDIwMjMvMDQvMjYgXHU1REYyXHU4OUUzXHU1MUIzXG4gIC8vIFx1NjMwOVx1NzE2N1x1NUI5OFx1NjVCOVx1NjU1OVx1N0EwQlx1RkYwQ1x1OTE0RFx1N0Y2RVx1NEUzQlx1OTg5OFx1NTkxQVx1OTg5Q1x1ODI3Mlx1OTcwMFx1ODk4MVx1OTE0RFx1N0Y2RVx1NTcyOGNvbmZpZy50c1x1NEU1Rlx1NUMzMVx1NjYyRlx1NjcyQ1x1NjU4N1x1NEVGNlx1NEUyRFx1RkYwQ1xuICAvLyBcdTc1MzFcdTRFOEVcdTYyOEF0aGVtZS50c1x1NTM1NVx1NzJFQ1x1NjJDRVx1NEU4Nlx1NTFGQVx1NTNCQlx1RkYwQ1x1NzEzNlx1NTQwRVx1NTcyOFx1NTE2OFx1NUM0MFx1OTE0RFx1N0Y2RVx1NjU4N1x1NEVGNmNvbmZpZy50c1x1NEUyRFx1NUYxNVx1NTE2NVx1NTM3M1x1NTNFRlx1RkYwQ1x1NTkxQVx1OTg5Q1x1ODI3Mlx1NTIwN1x1NjM2Mlx1NURGMlx1ODlFM1x1NTFCM1xuICBcbiAgLy8gXHU0RTJEXHU2NTg3XG4gIGxhbmc6IFwiemgtQ05cIixcbiAgLy8gXHU2ODA3XHU5ODk4XG4gIHRpdGxlOiBcIkNTX0dVSURFUlwiLFxuICAvLyBcdTYzQ0ZcdThGRjBcbiAgZGVzY3JpcHRpb246IFwiXHU4QkIwXHU1RjU1XHU2MjExXHU3Njg0Q1NcdTRFNEJcdThERUYsXHU0RTNBXHU0RjYwXHU3MEI5XHU0RUFFXHU0RTAwXHU1RUE3XHU3MDZGXHU1ODU0IVwiLFxuICAvLyBIVE1MIFx1NzZFRVx1NUY1NVxuICBkZXN0OiBcInNyYy8udnVlcHJlc3MvZGlzdFwiLFxuICAvLyBcdTU5ODJcdTY3OUNcdTRGNjBcdTZCNjNcdTU3MjhcdTRGN0ZcdTc1MjggUFdBIFx1NjNEMlx1NEVGNlx1RkYwQ1x1NjIxMVx1NEVFQ1x1NjNBOFx1ODM1MFx1NTcyOFx1NEY2MFx1NzY4NCBWdWVQcmVzcyBcdTkxNERcdTdGNkVcdTY1ODdcdTRFRjZcdTRFMkRcdThCQkVcdTdGNkUgXG4gIHNob3VsZFByZWZldGNoOiBmYWxzZSxcblxuICBoZWFkOiBbXG4gICAgLy8gbWV0YVxuICAgIFtcIm1ldGFcIiwgeyBuYW1lOiBcInJvYm90c1wiLCBjb250ZW50OiBcImFsbFwiIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBuYW1lOiBcImF1dGhvclwiLCBjb250ZW50OiBcIldMZWkyMjRcIiB9XSxcbiAgICBbXG4gICAgICBcIm1ldGFcIixcbiAgICAgIHtcbiAgICAgICAgXCJodHRwLWVxdWl2XCI6IFwiQ2FjaGUtQ29udHJvbFwiLFxuICAgICAgICBjb250ZW50OiBcIm5vLWNhY2hlLCBuby1zdG9yZSwgbXVzdC1yZXZhbGlkYXRlXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgW1wibWV0YVwiLCB7IFwiaHR0cC1lcXVpdlwiOiBcIlByYWdtYVwiLCBjb250ZW50OiBcIm5vLWNhY2hlXCIgfV0sXG4gICAgW1wibWV0YVwiLCB7IFwiaHR0cC1lcXVpdlwiOiBcIkV4cGlyZXNcIiwgY29udGVudDogXCIwXCIgfV0sXG4gICAgW1xuICAgICAgXCJtZXRhXCIsXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwia2V5d29yZHNcIixcbiAgICAgICAgY29udGVudDpcbiAgICAgICAgICBcIkphdmEsIEphdmFcdTU3RkFcdTc4NDAsIFx1NUU3Nlx1NTNEMVx1N0YxNlx1N0EwQiwgSlZNLCBcdTg2NUFcdTYyREZcdTY3M0EsIFx1NjU3MFx1NjM2RVx1NUU5MywgTXlTUUwsIFNwcmluZywgUmVkaXMsIE15QmF0aXMsIFNwcmluZ0Jvb3QsIElERUEsIFx1NkM0Mlx1ODA0Q1x1OTc2Mlx1OEJENSwgXHU5NzYyXHU2RTIzXHU5MDA2XHU4OEFELCBcdTVCNjZcdTRFNjBcdThERUZcdTdFQkZcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXCJtZXRhXCIsIHsgbmFtZTogXCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIsIGNvbnRlbnQ6IFwieWVzXCIgfV0sXG4gICAgW1xuICAgICAgXCJzY3JpcHRcIix7fSxcbiAgICAgIGBcbiAgICAgICAgdmFyIF9obXQgPSBfaG10IHx8IFtdO1xuICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGhtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICBobS5zcmMgPSBcImh0dHBzOi8vaG0uYmFpZHUuY29tL2htLmpzPzUyMzBhYzE0MzY1MGJmNWViM2MxNGYzZmI5YjFkM2VjXCI7XG4gICAgICAgICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTsgXG4gICAgICAgICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShobSwgcyk7XG4gICAgICAgIH0pKCk7XG4gICAgICBgXG4gICAgXSxcbiAgICAvLyBcdTkxNERcdTdGNkVcdTk2M0ZcdTkxQ0NcdTc2ODRjZG5cbiAgICAvLyBbXG4gICAgLy8gICBcImxpbmtcIixcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAvLyAgICAgaHJlZjogXCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzMxODA2MjRfN2N5MTBsN2pxcWguY3NzXCIsXG4gICAgLy8gICB9LFxuICAgIC8vIF0sXG5cbiAgICAvLyBcdTRFRTVcdTRFMEJcdTY2MkZcdTkxNERcdTdGNkVkb2NzZWFyY2hcdTc2ODRcdTkxNERcdTdGNkVcdUZGMENcdTY2ODJcdTY1RjZcdTZDRThcdTkxQ0FcdTYzODlcbiAgICAvLyAvLyBcdTU2RTBcdTRFM0FcdTRFMERcdTY2MkZ2dWVwcmVzc1x1OUVEOFx1OEJBNFx1NEUzQlx1OTg5OFx1RkYwQ1x1NTZFMFx1NkI2NFx1OTcwMFx1ODk4MVx1NjI0Qlx1NTJBOFx1OTE0RFx1N0Y2RVx1NjQxQ1x1N0QyMlx1Njg0Nlx1NzY4NGNzc1x1NjgzN1x1NUYwRlx1RkYwQ1x1NTk4Mlx1NEUwQlx1RkYxQVxuICAgIC8vIFtcbiAgICAvLyAgIFwibGlua1wiLFxuICAgIC8vICAge1xuICAgIC8vICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgIC8vICAgICBocmVmOiBcIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vQGRvY3NlYXJjaC9jc3NAM1wiXG4gICAgLy8gICB9LFxuICAgIC8vIF0sICBcbiAgICAvLyBbXG4gICAgLy8gICBcInNjcmlwdFwiLFxuICAgIC8vICAge1xuICAgIC8vICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9AZG9jc2VhcmNoL2pzQDNcIlxuICAgIC8vICAgfSBcbiAgICAvLyBdLFxuICAgIC8vIC8vIFx1NjAyN1x1ODBGRFx1NEYxOFx1NTMxNlxuICAgIC8vIFtcbiAgICAvLyAgIFwibGlua1wiLFxuICAgIC8vICAge1xuICAgIC8vICAgICByZWw6IFwicHJlY29ubmVjdFwiLFxuICAgIC8vICAgICBocmVmOiBcImh0dHBzOi8vMllOTTU5N0ZRMy1kc24uYWxnb2xpYS5uZXQgY3Jvc3NvcmlnaW5cIixcbiAgICAvLyAgICAgLy8gY3Jvc3NvcmlnaW46IC8sXG4gICAgLy8gICB9XG4gICAgLy8gXSxcbiAgICAvLyBbXG4gICAgLy8gICAnbGluaycsXG4gICAgLy8gICB7IFxuICAgIC8vICAgICByZWw6ICdzdHlsZXNoZWV0JywgXG4gICAgLy8gICAgIGhyZWY6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2RvY3NlYXJjaC5qc0AzL2Rpc3QvY2RuL2RvY3NlYXJjaC5taW4uY3NzJyBcbiAgICAvLyAgIH1cbiAgICAvLyBdLCBcbiAgICAvLyBcdTkxNERcdTdGNkV3YWxpbmVcdThCQzRcdThCQkFcdTYzRDJcdTRFRjZcbiAgICBbXG4gICAgICBcImxpbmtcIixcbiAgICAgIHtcbiAgICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL3VucGtnLmNvbS9Ad2FsaW5lL2NsaWVudEB2Mi9kaXN0L3dhbGluZS5jc3NcIlxuICAgICAgfVxuICAgIF0sXG4gICAgW1xuICAgICAgJ3NjcmlwdCcsXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdtb2R1bGUnLFxuICAgICAgICBzcmM6ICdodHRwczovL3VucGtnLmNvbS9Ad2FsaW5lL2NsaWVudEB2Mi9kaXN0L3dhbGluZS5tanMnLFxuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXG4gICAgICAnc2NyaXB0JyxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ21vZHVsZScsXG4gICAgICB9LFxuICAgICAgYFxuICAgICAgICBpbXBvcnQgeyBpbml0IH0gZnJvbSAnaHR0cHM6Ly91bnBrZy5jb20vQHdhbGluZS9jbGllbnRAdjIvZGlzdC93YWxpbmUubWpzJztcbiAgICAgICAgaW5pdCh7XG4gICAgICAgICAgZWw6ICcjd2FsaW5lJyxcbiAgICAgICAgICBzZXJ2ZXJVUkw6ICdodHRwczovL2NzLWd1aWRlci02Y21tOTlmMnMtd2wybzJvLnZlcmNlbC5hcHAvJyxcbiAgICAgICAgfSk7XG4gICAgICBgLFxuICAgIF0sXG4gIF0sXG5cbiAgcGx1Z2luczogW1xuICAgIC8vIFByb2dyZXNzaXZlIFdlYiBhcHBcdUZGMENcdTUzNzNcdTZFMTBcdThGREJcdTVGMEZcdTdGNTFcdTdFRENcdTVFOTRcdTc1MjhcdTdBMEJcdTVFOEZcdUZGMENcbiAgICAvLyBcdTUxNDFcdThCQjhcdTdGNTFcdTdBRDlcdTkwMUFcdThGQzdcdTY1MkZcdTYzMDFcdThCRTVcdTcyNzlcdTYwMjdcdTc2ODRcdTZENEZcdTg5QzhcdTU2NjhcdTVDMDZcdTdGNTFcdTdBRDlcdTRGNUNcdTRFM0EgQXBwIFx1NUI4OVx1ODhDNVx1NTcyOFx1NUJGOVx1NUU5NFx1NUU3M1x1NTNGMFx1NEUwQVx1MzAwMlxuICAgIHB3YVBsdWdpbih7XG4gICAgICAvLyBmYXZpY29uLmljb1x1NEUwMFx1ODIyQ1x1NzUyOFx1NEU4RVx1NEY1Q1x1NEUzQVx1N0YyOVx1NzU2NVx1NzY4NFx1N0Y1MVx1N0FEOVx1NjgwN1x1NUZENyxcdTVCODNcdTY2M0VcdTc5M0FcdTRGNERcdTRFOEVcdTZENEZcdTg5QzhcdTU2NjhcdTc2ODRcdTU3MzBcdTU3NDBcdTY4MEZcdTYyMTZcdTgwMDVcdTU3MjhcdTY4MDdcdTdCN0VcdTRFMEEsXHU3NTI4XHU0RThFXHU2NjNFXHU3OTNBXHU3RjUxXHU3QUQ5XHU3Njg0bG9nbyxcbiAgICAgIC8vIGZhdmljb246IFwiaHR0cDovL2ltYWdlcy5ybDAyMDYubG92ZS8yMDIzMDQyMDAwNTc4MDIuaWNvXCIsXG4gICAgICBmYXZpY29uOiBcImh0dHA6Ly9pbWFnZXMucmwwMjA2LmxvdmUvMjAyMzA0MjIxMzI5MDgzLmljb1wiLFxuICAgICAgLy8gXHU0RTNCXHU5ODk4XHU4MjcyIFx1N0VDRlx1NkQ0Qlx1OEJENVx1RkYwQ1x1NEUwQlx1NTIxN3RoZW1lY29sb3JcdThCRURcdTUzRTVcdTRFMERcdThENzdcdTRGNUNcdTc1MjhcbiAgICAgIC8vIHRoZW1lQ29sb3I6IFwiI2ZiOWI1ZlwiLFxuICAgICAgYXBwbGU6IHtcbiAgICAgICAgaWNvbjogXCIvbG9nby5wbmdcIixcbiAgICAgICAgc3RhdHVzQmFyQ29sb3I6IFwiYmxhY2tcIixcbiAgICAgIH0sXG4gICAgICBtc1RpbGU6IHtcbiAgICAgICAgaW1hZ2U6IFwiL2xvZ28ucG5nXCIsXG4gICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgIH0sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvbG9nby5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2xvZ28ucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIi9sb2dvLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvbG9nby5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gXHU3NTU5XHU4QTAwXG4gICAgLy8gY29tbWVudFBsdWdpbih7XG4gICAgLy8gICBwcm92aWRlcjogXCJHaXNjdXNcIixcbiAgICAvLyAgIHJlcG8gOlwiaXR3YW5nZXIvdG9iZWJldHRlcmphdmFlci1naXNjdXNcIixcbiAgICAvLyAgIHJlcG9JZDpcIlJfa2dET0hCSnNzZ1wiLFxuICAgIC8vICAgY2F0ZWdvcnk6XCJBbm5vdW5jZW1lbnRzXCIsXG4gICAgLy8gICBjYXRlZ29yeUlkOlwiRElDX2t3RE9IQkpzc3M0Q09KT3hcIixcbiAgICAvLyB9KSxcbiAgICAvLyBXYWxpbmUgXHU5MTREXHU3RjZFXG4gICAgY29tbWVudFBsdWdpbih7XG4gICAgICBwcm92aWRlcjogXCJXYWxpbmVcIixcbiAgICAgIHNlcnZlclVSTDogXCJodHRwczovL2NzLWd1aWRlci02Y21tOTlmMnMtd2wybzJvLnZlcmNlbC5hcHAvXCIsXG4gICAgICAvLyBcdTRFM0FcdTY1ODdcdTdBRTBcdTU4OUVcdTUyQTBcdTg4NjhcdTYwQzVcdTRFOTJcdTUyQThcdTUyOUZcdTgwRkRcdUZGMENcdThCQkVcdTdGNkVcdTRFM0EgdHJ1ZSBcdTYzRDBcdTRGOUJcdTlFRDhcdThCQTRcdTg4NjhcdTYwQzVcdUZGMENcdTRFNUZcdTUzRUZcdTRFRTVcdTkwMUFcdThGQzdcdThCQkVcdTdGNkVcdTg4NjhcdTYwQzVcdTU3MzBcdTU3NDBcdTY1NzBcdTdFQzRcdTY3NjVcdTgxRUFcdTVCOUFcdTRFNDlcdTg4NjhcdTYwQzVcdTU2RkVcdTcyNDdcdUZGMENcdTY3MDBcdTU5MjdcdTY1MkZcdTYzMDEgOCBcdTRFMkFcdTg4NjhcdTYwQzVcdTMwMDJcbiAgICAgIHJlYWN0aW9uOiB0cnVlLFxuICAgIH0pLFxuICAgIC8vIFx1NTNFQVx1ODBGRFx1NjQxQ1x1N0QyMlxuICAgIGRvY3NlYXJjaFBsdWdpbih7XG4gICAgICBhcHBJZDogXCIyWU5NNTk3RlEzXCIsXG4gICAgICBhcGlLZXk6IFwiNTA2NjMzYjcwYjE5ZjhlZWNhNGFlN2Y1M2U1NTllZjRcIixcbiAgICAgIGluZGV4TmFtZTogXCJ3bGVpMjI0LWdpdGVlXCIsXG4gICAgICAvLyBjb250YWluZXI6ICcjIyMgUkVQTEFDRSBNRSBXSVRIIEEgQ09OVEFJTkVSIChlLmcuIGRpdikgIyMjJyxcbiAgICAgIC8vIGRlYnVnOiBmYWxzZSxcbiAgICAgIGxvY2FsZXM6IHtcbiAgICAgICAgXCIvXCI6IHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjNcIixcbiAgICAgICAgICB0cmFuc2xhdGlvbnM6IHtcbiAgICAgICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIlx1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2M1wiLFxuICAgICAgICAgICAgICBidXR0b25BcmlhTGFiZWw6IFwiXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kYWw6IHtcbiAgICAgICAgICAgICAgc2VhcmNoQm94OiB7XG4gICAgICAgICAgICAgICAgcmVzZXRCdXR0b25UaXRsZTogXCJcdTZFMDVcdTk2NjRcdTY3RTVcdThCRTJcdTY3NjFcdTRFRjZcIixcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvbkFyaWFMYWJlbDogXCJcdTZFMDVcdTk2NjRcdTY3RTVcdThCRTJcdTY3NjFcdTRFRjZcIixcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIlx1NTNENlx1NkQ4OFwiLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkFyaWFMYWJlbDogXCJcdTUzRDZcdTZEODhcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3RhcnRTY3JlZW46IHtcbiAgICAgICAgICAgICAgICByZWNlbnRTZWFyY2hlc1RpdGxlOiBcIlx1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMlwiLFxuICAgICAgICAgICAgICAgIG5vUmVjZW50U2VhcmNoZXNUZXh0OiBcIlx1NkNBMVx1NjcwOVx1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMlwiLFxuICAgICAgICAgICAgICAgIHNhdmVSZWNlbnRTZWFyY2hCdXR0b25UaXRsZTogXCJcdTRGRERcdTVCNThcdTgxRjNcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjJcIixcbiAgICAgICAgICAgICAgICByZW1vdmVSZWNlbnRTZWFyY2hCdXR0b25UaXRsZTogXCJcdTRFQ0VcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjJcdTRFMkRcdTc5RkJcdTk2NjRcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXJyb3JTY3JlZW46IHtcbiAgICAgICAgICAgICAgICB0aXRsZVRleHQ6IFwiXHU2NUUwXHU2Q0Q1XHU4M0I3XHU1M0Q2XHU3RUQzXHU2NzlDXCIsXG4gICAgICAgICAgICAgICAgaGVscFRleHQ6IFwiXHU0RjYwXHU1M0VGXHU4MEZEXHU5NzAwXHU4OTgxXHU2OEMwXHU2N0U1XHU0RjYwXHU3Njg0XHU3RjUxXHU3RURDXHU4RkRFXHU2M0E1XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgICAgIHNlbGVjdFRleHQ6IFwiXHU5MDA5XHU2MkU5XCIsXG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUZXh0OiBcIlx1NTIwN1x1NjM2MlwiLFxuICAgICAgICAgICAgICAgIGNsb3NlVGV4dDogXCJcdTUxNzNcdTk1RURcIixcbiAgICAgICAgICAgICAgICBzZWFyY2hCeVRleHQ6IFwiXHU2NDFDXHU3RDIyXHU2M0QwXHU0RjlCXHU4MDA1XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG5vUmVzdWx0c1NjcmVlbjoge1xuICAgICAgICAgICAgICAgIG5vUmVzdWx0c1RleHQ6IFwiXHU2NUUwXHU2Q0Q1XHU2MjdFXHU1MjMwXHU3NkY4XHU1MTczXHU3RUQzXHU2NzlDXCIsXG4gICAgICAgICAgICAgICAgc3VnZ2VzdGVkUXVlcnlUZXh0OiBcIlx1NEY2MFx1NTNFRlx1NEVFNVx1NUMxRFx1OEJENVx1NjdFNVx1OEJFMlwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgLy8gXHU1RjE1XHU1MTY1XHU0RTNCXHU5ODk4XHU3Njg0XHU3NkY4XHU1MTczXHU5MTREXHU3RjZFXHU1MTQzXHU3RDIwXG4gIHRoZW1lLFxuICAvLyBUT0RPIFxuICAvLyAvLyBcdTZERkJcdTUyQTByb2xsdXBPcHRpb25zXHU5MTREXHU3RjZFXHU5ODc5XG4gIC8vIGJ1bmRsZXJDb25maWc6IHtcbiAgLy8gICByb2xsdXBPcHRpb25zOiB7XG4gIC8vICAgICBvdXRwdXQ6IHtcbiAgLy8gICAgICAgLy8gXHU4QzAzXHU2NTc0Y2h1bmtcdTU5MjdcdTVDMEZcdThCNjZcdTU0NEFcdTc2ODRcdTk2NTBcdTUyMzZcbiAgLy8gICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAyMDAwLFxuICAvLyAgICAgICAvLyBcdTRGN0ZcdTc1MjhtYW51YWxDaHVua3NcdTY3NjVcdThGREJcdTg4NENcdTRFRTNcdTc4MDFcdTU3NTdcdTUyMDZcdTUyNzJcbiAgLy8gICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XG4gIC8vICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzXCIpKSB7XG4gIC8vICAgICAgICAgICByZXR1cm4gXCJ2ZW5kb3JcIjtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH0sXG4gIC8vICAgICB9LFxuICAvLyAgIH0sXG4gIC8vIH0sXG5cbn0pO1xuXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6L0NTX0dVSURFUi9kb2NzL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXENTX0dVSURFUlxcXFxkb2NzXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L0NTX0dVSURFUi9kb2NzL3NyYy8udnVlcHJlc3MvdGhlbWUudHNcIjtpbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuLy8gXHU1RjE1XHU1MTY1XHU1QkZDXHU4MjJBXHU2ODBGXHU1NDhDXHU0RkE3XHU4RkI5XHU2ODBGXHU1MjMwdGhlbWUudHMsIHRoZW1lLnRzXHU2NzAwXHU3RUM4XHU0RjFBXHU1RjE1XHU1MTY1XHU1MjMwY29uZmlnLnRzXG5pbXBvcnQgbmF2YmFyIGZyb20gXCIuL25hdmJhclwiO1xuaW1wb3J0IHsgc2lkZWJhckNvbmZpZyB9IGZyb20gXCIuL3NpZGViYXJcIjtcbmV4cG9ydCBkZWZhdWx0IGhvcGVUaGVtZSh7XG4gIC8vIFx1OTE0RFx1N0Y2RVx1NTkxQVx1OTg5Q1x1ODI3Mlx1NTIwN1x1NjM2MlxuICBob3N0bmFtZTogXCJodHRwczovL3dsZWkyMjQuZ2l0ZWUuaW8vXCIsXG4gICAgdGhlbWVDb2xvcjoge1xuICAgICAgYmx1ZTogXCIjMjE5NmYzXCIsXG4gICAgICByZWQ6IFwiI2YyNmQ2ZFwiLFxuICAgICAgZ3JlZW46IFwiIzNlYWY3Y1wiLFxuICAgICAgb3JhbmdlOiBcIiNmYjliNWZcIixcbiAgICB9LFxuICBcbiAgLy8gXHU3RjUxXHU3QUQ5XHU1NkZFXHU2ODA3XG4gIGxvZ286IFwiL2Zhdmljb24uaWNvXCIsXG4gIC8vIEdpdCBcdTRFRDNcdTVFOTNcdTU0OENcdTdGMTZcdThGOTFcdTk0RkVcdTYzQTVcbiAgcmVwbzogXCJodHRwczovL2dpdGVlLmNvbS9XTGVpMjI0L1dMZWkyMjQuZ2l0XCIsXG4gIHJlcG9MYWJlbDogXCJHaXRlZVwiLFxuICBkb2NzRGlyOiBcImRvY3NcIixcbiAgLy8gXHU0RUU1XHU1MjREXHU3Njg0XHU5RUQ4XHU4QkE0XHU0RUQzXHU1RTkzXHU1MjA2XHU2NTJGXHU1NDBEXHVGRjBDXHU2NUI5XHU0RkJGXHU2M0QwXHU0RUE0IHByIFx1NTQ4QyBpc3N1ZVxuICBkb2NzQnJhbmNoOiBcIm1hc3RlclwiLFxuXG4gIC8vIFx1NTE2OFx1NUM0Rlx1NjMwOVx1OTRBRVxuICBmdWxsc2NyZWVuOiB0cnVlLFxuICAvLyBcdTU3MjhcdTZERjFcdTgyNzJcdTZBMjFcdTVGMEZcdUZGMENcdTZENDVcdTgyNzJcdTZBMjFcdTVGMEZcdTU0OENcdTgxRUFcdTUyQThcdTRFNEJcdTk1RjRcdTUyMDdcdTYzNjIgKFx1OUVEOFx1OEJBNClcbiAgZGFya21vZGU6IFwic3dpdGNoXCIsXG4gIC8vIFx1N0VBRlx1NTFDMFx1NkEyMVx1NUYwRlx1RkYwQ1x1NEYxQVx1Nzk4MVx1NzUyOFx1NEUwMFx1NEU5Qlx1ODJCMVx1NTRFOFx1NzY4NFx1NTJBOFx1NzUzQlx1NEVFNVx1NTNDQVx1NEUwMFx1NEU5Qlx1ODI3Mlx1NUY2OVxuICAvLyBwdXJlOiB0cnVlLFxuXG4gIC8vIFx1OTYzRlx1OTFDQ1x1NURGNFx1NURGNFx1NzdFMlx1OTFDRlx1NUU5M1x1NTZGRVx1NjgwN1x1NzY4NFx1NTI0RFx1N0YwMFxuICAvLyBpY29uUHJlZml4OiBcImljb25mb250IGljb24tXCIsXG5cbiAgLy8gaG9tZVx1OTg3NVx1NTQ4Q1x1NUJGQ1x1ODIyQVx1NjgwRkljb25mb250IFx1N0NCRVx1OTAwOVx1NTZGRVx1NjgwNyBcdTU0OEMgXHU5NjNGXHU5MUNDXHU1OTg4XHU1OTg4XHU3Njg0XHU0RTkyXHU2NUE1XG4gIGljb25Bc3NldHM6IFwiaWNvbmZvbnRcIixcblxuICAvLyBcdTUxNjhcdTVDNDBcdTlFRDhcdThCQTRcdTRGNUNcdTgwMDVcbiAgYXV0aG9yOiB7XG4gICAgbmFtZTogXCJXTGVpMjI0XCIsXG4gICAgdXJsOiBcIi9hYm91dGd1aWRlci9cIixcbiAgfSxcblxuICAvLyBcdTUyQTBcdTVCQzZcbiAgZW5jcnlwdDoge1xuICAgIGNvbmZpZzoge1xuICAgICAgLy8gXHU4RkQ5XHU1M0VBXHU0RjFBXHU1MkEwXHU1QkM2IGNvbmZpZy9wYWdlLmh0bWxcbiAgICAgIFwiL25pY2UtYXJ0aWNsZS9pdG1pbmQveHNoZWxsYXpwamJqY3hzaGVsbHB4ZmZ4Ynh0Lmh0bWxcIjogW1wiMTExMFwiLCBcIjAyMjRcIl0sXG4gICAgICBcIi9uaWNlLWFydGljbGUvaXRtaW5kL2lkZWFwamF6amN6eGpobXpjbXlqamhjeGd4ei5odG1sXCI6IFtcIjExMTBcIiwgXCIwMjI0XCJdLFxuICAgIH0sXG4gIH0sXG4gIC8vIFx1NjNEMFx1NzkzQVx1NjU4N1x1NUI1N1xuICBlbmNyeXB0TG9jYWxlczoge1xuICAgIHBsYWNlaG9sZGVyOiBcIlx1NTUzMVx1MzAwMVx1OERGM1x1MzAwMXJhcFx1MzAwMVx1N0JFRVx1NzQwM1x1RDgzQ1x1REZDMFx1RkYwMVwiLFxuXG4gICAgLyoqXG4gICAgICogUGFzc3dyb2QgZXJyb3IgaGludFxuICAgICAqL1xuICAgIGVycm9ySGludDogXCJcdTU0QzhcdTU0QzhcdUZGMENcdTRGNjBcdTVFNzJcdTU2MUJ+XCIsXG4gIH0sXG5cbiAgLy8gbmF2YmFyXG4gIG5hdmJhcjogbmF2YmFyLFxuXG4gIC8vIHNpZGViYXJcbiAgc2lkZWJhcjogc2lkZWJhckNvbmZpZyxcblxuICAvLyBcdTk4NzVcdTgxMUFcdTY1MkZcdTYzMDFcbiAgZm9vdGVyOiAnPGEgaHJlZj1cImh0dHBzOi8vYmVpYW4ubWlpdC5nb3YuY24vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHU4QzZCSUNQXHU1OTA3MjAyMTAzODAyNlx1NTNGNy0xPC9hPidcbiAgKyc8aW1nIHNyYz1cImh0dHBzOi8vY2RuLnRvYmViZXR0ZXJqYXZhZXIuY29tL3RvYmViZXR0ZXJqYXZhZXIvaW1hZ2VzL2JlaWFuLnBuZ1wiIGhlaWdodD1cIjE1cHhcIiB3aWR0aD1cIjE1cHhcIiAvPidcbiAgKyc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cDovL3d3dy5iZWlhbi5nb3YuY24vcG9ydGFsL3JlZ2lzdGVyU3lzdGVtSW5mbz9yZWNvcmRjb2RlPTQxMDMwNTAyMDAwNDExXCI+J1xuICArJzxzcGFuPlx1OEM2Qlx1NTE2Q1x1N0Y1MVx1NUI4OVx1NTkwNyA0MTAzMDUwMjAwMDQxMVx1NTNGNzwvc3Bhbj4nXG4gICsnPC9hPicsXG4gIGRpc3BsYXlGb290ZXI6IHRydWUsXG5cbiAgLy8gXHU2NTg3XHU3QUUwXHU0RkUxXHU2MDZGXHVGRjBDXHU1M0VGXHU0RUU1XHU1ODZCXHU1MTY1XHU2NTcwXHU3RUM0XHVGRjBDXHU2NTcwXHU3RUM0XHU3Njg0XHU5ODdBXHU1RThGXHU2NjJGXHU1NDA0XHU2NzYxXHU3NkVFXHU2NjNFXHU3OTNBXHU3Njg0XHU5ODdBXHU1RThGXG4gIHBhZ2VJbmZvOiBbXCJBdXRob3JcIiwgXCJPcmlnaW5hbFwiLCBcIkRhdGVcIiwgXCJDYXRlZ29yeVwiLCBcIlRhZ1wiLCBcIldvcmRcIixcIlJlYWRpbmdUaW1lXCJdLFxuXG4gIGJsb2c6IHtcbiAgICAvLyBcdTRFMkFcdTRFQkFcdTRFQ0JcdTdFQ0RcdTk4NzVcdTU3MzBcdTU3NDBcbiAgICBpbnRybzogXCIvYWJvdXRndWlkZXIvXCIsXG4gICAgc2lkZWJhckRpc3BsYXk6IFwibW9iaWxlXCIsXG4gICAgLy8gXHU1MzVBXHU0RTNCXHU1OTM0XHU1MENGXG4gICAgYXZhdGFyOiBcIi9hdXRob3IucG5nXCIsXG4gICAgLy8gXHU1NzA2XHU4OUQyXG4gICAgcm91bmRBdmF0YXI6IHRydWUsXG4gICAgLy8gXHU1RUE3XHU1M0YzXHU5NEVEXG4gICAgZGVzY3JpcHRpb246XCJcdTZDQTFcdTY3MDlcdTRFQzBcdTRFNDhcdTRGN0ZcdTYyMTFcdTUwNUNcdTc1NTlcdTIwMTRcdTIwMTRcdTk2NjRcdTRFODZcdTc2RUVcdTc2ODRcdUZGMENcdTdFQjVcdTcxMzZcdTVDQjhcdTY1QzFcdTY3MDlcdTczQUJcdTc0NzBcdTMwMDFcdTY3MDlcdTdFRkZcdTgzNkJcdTMwMDFcdTY3MDlcdTVCODFcdTk3NTlcdTc2ODRcdTZFMkZcdTZFN0VcdUZGMENcdTYyMTFcdTY2MkZcdTRFMERcdTdDRkJcdTRFNEJcdTgyMUZcdTMwMDJcIixcbiAgICBtZWRpYXM6IHtcbiAgICAgIFpoaWh1OiBcImh0dHBzOi8vd3d3LnpoaWh1LmNvbS9wZW9wbGUvY21vd2VyXCIsXG4gICAgICBDU0ROOiBcImh0dHBzOi8vYmxvZy5jc2RuLm5ldC9xaW5nX2dlZVwiLFxuICAgICAgR2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9pdHdhbmdlclwiLFxuICAgICAgR2l0ZWU6IFwiaHR0cHM6Ly9naXRlZS5jb20vaXR3YW5nZXJcIixcbiAgICB9LFxuICB9LFxuXG4gIHBsdWdpbnM6IHtcbiAgICAvLyBcdTVGMDBcdTU0MkZcdTUzNUFcdTVCQTJcdTUyOUZcdTgwRkRcbiAgICBibG9nOiB7XG4gICAgICAvLyBcdTU0MkZcdTc1MjhcdTUzNUFcdTVCQTJcdTgxRUFcdTUyQThcdTY0NThcdTg5ODFcbiAgICAgIC8vIGF1dG9FeGNlcnB0OiB0cnVlLFxuICAgIH0sXG4gICAgXG4gICAgLy8gXHU4QkU1XHU2M0QyXHU0RUY2XHU0RjFBXHU3NkQxXHU1NDJDXHU5ODc1XHU5NzYyXHU2RURBXHU1MkE4XHU0RThCXHU0RUY2XHUzMDAyXHU1RjUzXHU5ODc1XHU5NzYyXHU2RURBXHU1MkE4XHU4MUYzXHU2N0QwXHU0RTJBIFx1NjgwN1x1OTg5OFx1OTUxQVx1NzBCOSBcdTU0MEVcdUZGMENcdTU5ODJcdTY3OUNcdTVCNThcdTU3MjhcdTVCRjlcdTVFOTRcdTc2ODQgXHU2ODA3XHU5ODk4XHU5NEZFXHU2M0E1IFx1RkYwQ1x1OTBBM1x1NEU0OFx1OEJFNVx1NjNEMlx1NEVGNlx1NEYxQVx1NUMwNlx1OERFRlx1NzUzMSBIYXNoIFx1NjZGNFx1NjUzOVx1NEUzQVx1OEJFNSBcdTY4MDdcdTk4OThcdTk1MUFcdTcwQjkgXHUzMDAyXG4gICAgYWN0aXZlSGVhZGVyTGlua3M6IHRydWUsXG5cbiAgICBtZEVuaGFuY2U6IHtcbiAgICAgIC8vIFx1NkRGQlx1NTJBMFx1OTAwOVx1OTg3OVx1NTM2MVx1NjUyRlx1NjMwMVxuICAgICAgdGFiczogdHJ1ZSxcbiAgICAgIC8vIFx1NkQ0MVx1N0EwQlx1NTZGRVxuICAgICAgbWVybWFpZDogdHJ1ZSxcbiAgICAgIC8vIFx1NjUyRlx1NjMwMVx1NEVGQlx1NTJBMVx1NTIxN1x1ODg2OFxuICAgICAgdGFza2xpc3Q6IHRydWUsXG5cbiAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NTZGRVx1NzI0N1x1NjFEMlx1NTJBMFx1OEY3RFxuICAgICAgaW1nTGF6eWxvYWQ6IHRydWUsXG4gICAgICAvLyBcdTU0MkZcdTc1MjhcdTU2RkVcdTcyNDdcdTY4MDdcdThCQjBcbiAgICAgIGltZ01hcms6IHRydWUsXG4gICAgICAvLyBcdTU0MkZcdTc1MjhcdTU2RkVcdTcyNDdcdTU5MjdcdTVDMEZcbiAgICAgIGltZ1NpemU6IHRydWUsXG5cbiAgICAgIC8vIFRPRE86IFx1NTQwRVx1N0VFRFx1NTkwNFx1NzQwNiAyMDIzLzQvMjFcdTVERjJcdTg5RTNcdTUxQjNcbiAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NTZGRVx1NzI0N1x1NjgwN1x1OTg5OFxuICAgICAgZmlndXJlOiB0cnVlLFxuXG4gICAgICAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTVCRjlcdTlGNTBcbiAgICAgIGFsaWduOiB0cnVlLFxuXG4gICAgICAvLyBcdTY1MkZcdTYzMDFcdTVFN0JcdTcwNkZcdTcyNDdcbiAgICAgIHByZXNlbnRhdGlvbjogdHJ1ZSxcblxuICAgICAgLy8gXHU5NEZFXHU2M0E1XHU2OEMwXHU2N0U1XG4gICAgICBsaW5rQ2hlY2s6IFwiYWx3YXlzXCIsXG5cbiAgICAgIC8vIFx1NEY2MFx1NzY4NCBNYXJrZG93biBcdTg4NENcdTRFM0FcdTRFMEUgR2l0SHViIFx1NEZERFx1NjMwMVx1NEUwMFx1ODFGNFxuICAgICAgZ2ZtOiB0cnVlLFxuICAgIH0sXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTovQ1NfR1VJREVSL2RvY3Mvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcQ1NfR1VJREVSXFxcXGRvY3NcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxuYXZiYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L0NTX0dVSURFUi9kb2NzL3NyYy8udnVlcHJlc3MvbmF2YmFyLnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5hdmJhcihbXHJcbiAgeyBcclxuICAgIHRleHQ6IFwiXHU1MzVBXHU1QkEyXCIsXHJcbiAgICBpY29uOiBcImhvbWVcIixcclxuICAgIGxpbms6IFwiL2Jsb2cubWRcIiBcclxuICB9LFxyXG4gIHsgXHJcbiAgICB0ZXh0OiBcIkNTXHU0RTRCXHU4REVGXCIsIFxyXG4gICAgaWNvbjogXCJicmFuY2hcIiwgXHJcbiAgICBsaW5rOiBcIi9jb2xsZWN0aW9uL1wiLFxyXG4gICAgLy8gXHU1RjAwXHU1NDJGXHU1QjUwXHU1QkZDXHU4MjJBXHU2ODBGXHU3Njg0XHU4QkVEXHU1M0U1XHVGRjFBXHJcbiAgICAvLyBjaGlsZHJlbjogW1widHV0b3JpYWwvXCIsIFwibWFya2Rvd24vXCIsIFwidnVlcHJlc3MvXCIsIFwiY3VzdG9taXplL1wiXSxcclxuICB9LFxyXG4gIHsgXHJcbiAgICB0ZXh0OiBcIlx1NzdFNVx1OEJDNlx1NjYxRlx1NzQwM1wiLCBcclxuICAgIGljb246IFwiZGlzY292ZXJcIiwgXHJcbiAgICBsaW5rOiBcIi96aGlzaGl4aW5ncWl1L1wiIFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogXCJDU1x1NzUxRlx1NkRBRlx1ODlDNFx1NTIxMlwiLFxyXG4gICAgaWNvbjogXCJndWlkZVwiLFxyXG4gICAgbGluazogXCIvZ3VpZGVyL1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIlx1NUI5RFx1ODVDRlx1OEQ0NFx1NkU5MFwiLFxyXG4gICAgaWNvbjogXCJsaWtlXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJQREZcdTU5MjlcdTU4MDJcIiwgXHJcbiAgICAgICAgaWNvbjogXCJqYXZhXCIsIFxyXG4gICAgICAgIGxpbms6IFwiL3BkZi9SRUFETUUubWRcIiBcclxuICAgICAgfSxcclxuICAgICAgeyBcclxuICAgICAgICB0ZXh0OiBcIkFQUFx1NjU3NFx1NTQwOFwiLCBcclxuICAgICAgICBpY29uOiBcImhvdFwiLCBcclxuICAgICAgICBsaW5rOiBcIi9hcHAvUkVBRE1FLm1kXCIgXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogXCJIZXhvXHU1MzVBXHU1QkEyXCIsXHJcbiAgICBpY29uOiBcImhlYWRpbmdcIiwgXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcmwwMjA2LmxvdmVcIlxyXG4gIH0sXHJcbl0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6L0NTX0dVSURFUi9kb2NzL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXENTX0dVSURFUlxcXFxkb2NzXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovQ1NfR1VJREVSL2RvY3Mvc3JjLy52dWVwcmVzcy9zaWRlYmFyLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcbmV4cG9ydCBjb25zdCBzaWRlYmFyQ29uZmlnID0gc2lkZWJhcih7XHJcbiAgXCIvemhpc2hpeGluZ3FpdS9cIjogW1xyXG4gICAgXCJyZWFkbWUubWRcIixcclxuICAgIFwibWFwXCIsXHJcbiAgICBcIm1heVwiLFxyXG4gICAgXCJqdW5lXCIsXHJcbiAgICBcImp1bHlcIixcclxuICAgIFwiYXVndXN0XCJcclxuICBdLFxyXG4gIFwiL2RlbW8vXCI6IFtcclxuICAgIFwicmVhZG1lLm1kXCIsXHJcbiAgICBcIlx1NEZFRVx1NEVEOVx1NTI0RFx1OEEwMFwiXHJcbiAgXSxcclxuICBcIi9yZWRpcy9cIjpbXHJcbiAgICBcInJlYWRtZS5tZFwiLFxyXG4gICAgXCJSZWRpc1wiXHJcbiAgXSxcclxuICBcIi9taWFuc2hpL1wiOltcclxuICAgIFwicmVhZG1lLm1kXCIsXHJcbiAgICBcIlx1NjAxRFx1N0VGNFx1NUJGQ1x1NTZGRVwiXHJcbiAgXSxcclxuICAvLyBcdTRGNjBcdTUzRUZcdTRFRTVcdTc3MDFcdTc1NjUgLm1kIFx1NjI2OVx1NUM1NVx1NTQwRFx1RkYwQ1x1NEVFNSAvIFx1N0VEM1x1NUMzRVx1NzY4NFx1OERFRlx1NUY4NFx1NEYxQVx1ODhBQlx1NjNBOFx1NjVBRFx1NEUzQSAvUkVBRE1FLm1kKFx1NTMzQVx1NTIwNlx1NTkyN1x1NUMwRlx1NTE5OSlcclxuICBcIi9uaWNlLWFydGljbGUvaXRtaW5kL1wiOiBbXHJcbiAgICBcInJlYWRtZS5tZFwiLFxyXG4gICAgXCJpZGVhcHhpZGVhamhpZGVheWpqaG1pZGVhenhqaHpjbXBqamN5ampocWN5eFwiLFxyXG4gICAgXCJ5aWdreW14Y3ppZGVhdHN5cWRmZmJsd3hqY3l3ZHhieHRcIixcclxuICAgIFwiaWRlYXBqYXpqY3p4amhtemNteWpqaGN4Z3h6XCIsXHJcbiAgICBcImlkZWFqaG1pZGVhamhtaWRlYXB4aWRlYWpobWlkZWF6Y21pZGVheWpqaG1cIixcclxuICAgIFwibmF2aWNhdG1hY3lqcHhcIixcclxuICAgIFwibmF2aWNhdHp4YndpbmRvd3NwamJqY1wiLFxyXG4gICAgXCJ0eXBvcmF5anB4XCIsXHJcbiAgICBcInR5cG9yYW1hY3p3cGpiaHlqamRrcHRtYXJrZG93bmJqcW1rc2ltYWNzb2NvbVwiLFxyXG4gICAgXCJ4c2hlbGxhenBqYmpjeHNoZWxscHhmZnhieHRcIixcclxuICAgIFwicHljaGFybWpocHhtYXpqY255cmd4eGJ4dFwiLFxyXG4gICAgXCJ5YW5nMVwiLFxyXG4gIF0sXHJcbiAgXCIvcGRmL1wiOiBbXHJcbiAgICBcIlJFQURNRS5tZFwiLFxyXG4gIF0sXHJcbiAgXCIveHVleGlsdXhpYW4vXCI6IFtcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJKYXZhXHU1QjY2XHU0RTYwXHU4REVGXHU3RUJGXCIsXHJcbiAgICAgIHByZWZpeDogXCJqYXZhL1wiLFxyXG4gICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICBcInlpdGlhb2xvbmdcIixcclxuICAgICAgICBcInRocmVhZFwiLFxyXG4gICAgICAgIFwianZtXCIsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgXCJjXCIsXHJcbiAgICBcImNjY1wiLFxyXG4gICAgXCJweXRob25cIixcclxuICAgIFwiZ29cIixcclxuICAgIFwib3NcIixcclxuICAgIFwicWlhbmR1YW5cIixcclxuICAgIFwiYWxnb3JpdGhtXCIsXHJcbiAgICBcImxhbnFpYW9iZWlcIixcclxuICAgIFwiYmlnZGF0YVwiLFxyXG4gICAgXCJhbmRyb2lkXCIsXHJcbiAgICBcIm15c3FsXCIsXHJcbiAgICBcImRvbmV0XCIsXHJcbiAgXSxcclxuICBcIi9zaWRlYmFyL3NhbmZlbmUvXCI6IFtcclxuICAgIFwibml4aVwiLFxyXG4gICAgXCJqYXZhc2VcIixcclxuICAgIFwiY29sbGVjdGlvblwiLFxyXG4gICAgXCJqYXZhdGhyZWFkXCIsXHJcbiAgICBcImp2bVwiLFxyXG4gICAgXCJzcHJpbmdcIixcclxuICAgIFwicmVkaXNcIixcclxuICAgIFwibXliYXRpc1wiLFxyXG4gICAgXCJteXNxbFwiLFxyXG4gICAgXCJvc1wiLFxyXG4gICAgXCJuZXR3b3JrXCIsXHJcbiAgICBcInJvY2tldG1xXCIsXHJcbiAgXSxcclxuICAvLyBcdTVGQzVcdTk4N0JcdTY1M0VcdTU3MjhcdTY3MDBcdTU0MEVcdTk3NjJcclxuICBcIi9cIjogW1xyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlx1NEUwMFx1MzAwMVx1NTI0RFx1OEEwMFwiLFxyXG4gICAgICBsaW5rOiBcImhvbWVcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiXHU0RThDXHUzMDAxSmF2YVx1NjgzOFx1NUZDM1wiLFxyXG4gICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcmVmaXg6IFwib3ZlcnZpZXcvXCIsXHJcbiAgICAgICAgICB0ZXh0OiBcIjIuMSBKYXZhXHU2OTgyXHU4RkYwXCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICBcIndoYXQtaXMtamF2YVwiLFxyXG4gICAgICAgICAgXCJqYXZhLWhpc3RvcnlcIixcclxuICAgICAgICAgIFwiamF2YS1jYW4tZG8td2hhdFwiLFxyXG4gICAgICAgICAgXCJqZGstaW5zdGFsbC1jb25maWdcIixcclxuICAgICAgICAgIFwiSURFQS1pbnN0YWxsLWNvbmZpZ1wiLFxyXG4gICAgICAgICAgXCJoZWxsby13b3JsZFwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiMi4yIEphdmFcdThCRURcdTZDRDVcdTU3RkFcdTc4NDBcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIFwiYmFzaWMtZXh0cmEtbWVhbC80OC1rZXl3b3Jkc1wiLFxyXG4gICAgICAgICAgXCJiYXNpYy1leHRyYS1tZWFsL2phdmEtbmFtaW5nXCIsXHJcbiAgICAgICAgICBcImJhc2ljLWdyYW1tYXIvamF2YWRvY1wiLFxyXG4gICAgICAgICAgXCJiYXNpYy1ncmFtbWFyL2Jhc2ljLWRhdGEtdHlwZVwiLFxyXG4gICAgICAgICAgXCJiYXNpYy1ncmFtbWFyL3R5cGUtY2FzdFwiLFxyXG4gICAgICAgICAgXCJiYXNpYy1ncmFtbWFyL29wZXJhdG9yXCIsXHJcbiAgICAgICAgICBcImJhc2ljLWdyYW1tYXIvZmxvdy1jb250cm9sXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCIyLjMgXHU2NTcwXHU3RUM0Jlx1NUI1N1x1N0IyNlx1NEUzMlwiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgXCJhcnJheS9hcnJheVwiLFxyXG4gICAgICAgICAgXCJhcnJheS9wcmludFwiLFxyXG4gICAgICAgICAgXCJzdHJpbmcvaW1tdXRhYmxlXCIsXHJcbiAgICAgICAgICBcInN0cmluZy9jb25zdGFudC1wb29sXCIsXHJcbiAgICAgICAgICBcInN0cmluZy9pbnRlcm5cIixcclxuICAgICAgICAgIFwic3RyaW5nL2VxdWFsc1wiLFxyXG4gICAgICAgICAgXCJzdHJpbmcvam9pblwiLFxyXG4gICAgICAgICAgXCJzdHJpbmcvc3BsaXRcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIjIuNCBcdTk3NjJcdTU0MTFcdTVCRjlcdThDNjFcdTdGMTZcdTdBMEJcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIFwib28vb2JqZWN0LWNsYXNzXCIsXHJcbiAgICAgICAgICBcIm9vL3BhY2thZ2VcIixcclxuICAgICAgICAgIFwib28vdmFyXCIsXHJcbiAgICAgICAgICBcIm9vL21ldGhvZFwiLFxyXG4gICAgICAgICAgXCJvby9jb25zdHJ1Y3RcIixcclxuICAgICAgICAgIFwib28vYWNjZXNzLWNvbnRyb2xcIixcclxuICAgICAgICAgIFwib28vY29kZS1pbml0XCIsXHJcbiAgICAgICAgICBcIm9vL2Fic3RyYWN0XCIsXHJcbiAgICAgICAgICBcIm9vL2ludGVyZmFjZVwiLFxyXG4gICAgICAgICAgXCJvby9hYnN0cmFjdC12cy1pbnRlcmZhY2VcIixcclxuICAgICAgICAgIFwib28vaW5uZXItY2xhc3NcIixcclxuICAgICAgICAgIFwib28vdGhpcy1zdXBlclwiLFxyXG4gICAgICAgICAgXCJiYXNpYy1leHRyYS1tZWFsL292ZXJyaWRlLW92ZXJsb2FkXCIsXHJcbiAgICAgICAgICBcIm9vL3N0YXRpY1wiLFxyXG4gICAgICAgICAgXCJvby9maW5hbFwiLFxyXG4gICAgICAgICAgXCJvby9lbmNhcHN1bGF0aW9uXCIsXHJcbiAgICAgICAgICBcIm9vL2V4dGVuZHMtYmlnc2FpXCIsXHJcbiAgICAgICAgICBcIm9vL3BvbHltb3JwaGlzbVwiLFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCIyLjUgXHU5NkM2XHU1NDA4XHU2ODQ2XHU2N0I2XHVGRjA4XHU1QkI5XHU1NjY4XHVGRjA5XCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFwiY29sbGVjdGlvbi9nYWlsYW5cIixcclxuICAgICAgICAgIFwiY29sbGVjdGlvbi9hcnJheWxpc3RcIixcclxuICAgICAgICAgIFwiY29sbGVjdGlvbi9saW5rZWRsaXN0XCIsXHJcbiAgICAgICAgICBcImNvbGxlY3Rpb24vbGlzdC13YXItMlwiLFxyXG4gICAgICAgICAgXCJjb2xsZWN0aW9uL2l0ZXJhdG9yLWl0ZXJhYmxlXCIsXHJcbiAgICAgICAgICBcImNvbGxlY3Rpb24vZmFpbC1mYXN0XCIsXHJcbiAgICAgICAgICBcImNvbGxlY3Rpb24vaGFzaG1hcFwiLFxyXG4gICAgICAgICAgXCJjb2xsZWN0aW9uL2xpbmtlZGhhc2htYXBcIixcclxuICAgICAgICAgIFwiY29sbGVjdGlvbi90cmVlbWFwXCIsXHJcbiAgICAgICAgICBcImNvbGxlY3Rpb24vYXJyYXlkZXF1ZVwiLFxyXG4gICAgICAgICAgXCJjb2xsZWN0aW9uL1ByaW9yaXR5UXVldWVcIixcclxuICAgICAgICAgIFwiY29sbGVjdGlvbi9XZWFrSGFzaE1hcFwiLFxyXG4gICAgICAgICBcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIjIuNiBJT1wiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBwcmVmaXg6XCJpby9cIixcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICBcInNoYW5ndG91XCIsXHJcbiAgICAgICAgICBcImZpbGUtcGF0aFwiLFxyXG4gICAgICAgICAgXCJzdHJlYW1cIixcclxuICAgICAgICAgIFwicmVhZGVyLXdyaXRlclwiLFxyXG4gICAgICAgICAgXCJidWZmZXJcIixcclxuICAgICAgICAgIFwiY2hhci1ieXRlXCIsXHJcbiAgICAgICAgICBcInNlcmlhbGl6ZVwiLFxyXG4gICAgICAgICAgXCJTZXJpYWxpemJhbGVcIixcclxuICAgICAgICAgIFwidHJhbnNpZW50XCIsXHJcbiAgICAgICAgICBcInByaW50XCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCIyLjcgXHU1RjAyXHU1RTM4XHU1OTA0XHU3NDA2XCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHByZWZpeDpcImV4Y2VwdGlvbi9cIixcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICBcImdhaWxhblwiLFxyXG4gICAgICAgICAgXCJ0cnktd2l0aC1yZXNvdWNlc1wiLFxyXG4gICAgICAgICAgXCJzaGlqaWFuXCIsXHJcbiAgICAgICAgICBcIm5wZVwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiMi44IFx1NUUzOFx1NzUyOFx1NURFNVx1NTE3N1x1N0M3QlwiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBwcmVmaXg6XCJjb21tb24tdG9vbC9cIixcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICBcImFycmF5c1wiLFxyXG4gICAgICAgICAgXCJjb2xsZWN0aW9uc1wiLFxyXG4gICAgICAgICAgXCJodXRvb2xcIixcclxuICAgICAgICAgIFwiZ3VhdmFcIixcclxuICAgICAgICAgIFwidXRpbHNcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIjIuOSBKYXZhXHU2NUIwXHU3Mjc5XHU2MDI3XCIsXHJcbiAgICAgICAgICBwcmVmaXg6IFwiamF2YTgvXCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICBcInN0cmVhbVwiLFxyXG4gICAgICAgICAgXCJvcHRpb25hbFwiLFxyXG4gICAgICAgICAgXCJMYW1iZGFcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIjIuMTAgSmF2YVx1OTFDRFx1ODk4MVx1NzdFNVx1OEJDNlx1NzBCOVwiLFxyXG4gICAgICAgICAgcHJlZml4OlwiYmFzaWMtZXh0cmEtbWVhbC9cIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIFwiamF2YS11bmljb2RlXCIsXHJcbiAgICAgICAgICBcImludC1jYWNoZVwiLFxyXG4gICAgICAgICAgXCJib3hcIixcclxuICAgICAgICAgIFwiZGVlcC1jb3B5XCIsXHJcbiAgICAgICAgICBcImhhc2hjb2RlXCIsXHJcbiAgICAgICAgICBcImVxdWFscy1oYXNoY29kZVwiLFxyXG4gICAgICAgICAgXCJPdmVycmlkaW5nXCIsXHJcbiAgICAgICAgICBcInBhc3MtYnktdmFsdWVcIixcclxuICAgICAgICAgIFwiY29tcGFyYWJsZS1vbXBhcmF0b3JcIixcclxuICAgICAgICAgIFwiamRrOS1jaGFyLWJ5dGUtc3RyaW5nXCIsXHJcbiAgICAgICAgICBcImpkay13aGlsZS1mb3Itd3V4aWFuLXh1bmh1YW5cIixcclxuICAgICAgICAgIFwiY2xhc3Mtb2JqZWN0XCIsXHJcbiAgICAgICAgICBcImluc3RhbmNlb2ZcIixcclxuICAgICAgICAgIFwiaW5zdGFuY2VvZi1qdm1cIixcclxuICAgICAgICAgIFwiaW1tdXRhYmxlXCIsXHJcbiAgICAgICAgICBcInZhcmFibGVzXCIsXHJcbiAgICAgICAgICBcImdlbmVyaWNcIixcclxuICAgICAgICAgIFwidHJ1ZS1nZW5lcmljXCIsXHJcbiAgICAgICAgICBcImFubm90YXRpb25cIixcclxuICAgICAgICAgIFwiZW51bVwiLFxyXG4gICAgICAgICAgXCJmYW5zaGVcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIjIuMTEgXHU3RjUxXHU3RURDXHU3RjE2XHU3QTBCXCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHByZWZpeDogXCJzb2NrZXQvXCIsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcInNvY2tldFwiLFxyXG4gICAgICAgICAgICBcImh0dHBcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIjIuMTIgTklPXCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHByZWZpeDogXCJuaW8vXCIsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIndoeVwiLFxyXG4gICAgICAgICAgICBcInJ1bWVuXCIsXHJcbiAgICAgICAgICAgIFwibW94aW5nXCIsXHJcbiAgICAgICAgICAgIFwibmV0d29yay1jb25uZWN0XCIsXHJcbiAgICAgICAgICAgIFwiQklPTklPQUlPXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCIyLjEzIFx1NUU3Nlx1NTNEMVx1N0YxNlx1N0EwQlwiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBwcmVmaXg6IFwidGhyZWFkL1wiLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIFwid2FuZ3poZS10aHJlYWRcIixcclxuICAgICAgICAgIFwidGhyZWFkLXN0YXRlLWFuZC1tZXRob2RcIixcclxuICAgICAgICAgIFwidGhyZWFkLWdyb3VwLWFuZC10aHJlYWQtcHJpb3JpdHlcIixcclxuICAgICAgICAgIFwid2h5LW5lZWQtdGhyZWFkXCIsXHJcbiAgICAgICAgICBcInRocmVhZC1icmluZy1zb21lLXByb2JsZW1cIixcclxuICAgICAgICAgIFwiam1tXCIsXHJcbiAgICAgICAgICBcInZvbGF0aWxlXCIsXHJcbiAgICAgICAgICBcInN5bmNocm9uaXplZC0xXCIsXHJcbiAgICAgICAgICBcInN5bmNocm9uaXplZFwiLFxyXG4gICAgICAgICAgXCJjYXNcIixcclxuICAgICAgICAgIFwiYXFzXCIsXHJcbiAgICAgICAgICBcImxvY2tcIixcclxuICAgICAgICAgIFwic3VvXCIsXHJcbiAgICAgICAgICBcInBpYW54aWFuZ3N1b1wiLFxyXG4gICAgICAgICAgXCJyZWVudHJhbnRMb2NrXCIsXHJcbiAgICAgICAgICBcIlJlZW50cmFudFJlYWRXcml0ZUxvY2tcIixcclxuICAgICAgICAgIFwiY29uZGl0aW9uXCIsXHJcbiAgICAgICAgICBcIkxvY2tTdXBwb3J0XCIsXHJcbiAgICAgICAgICBcIm1hcFwiLFxyXG4gICAgICAgICAgXCJDb25jdXJyZW50SGFzaE1hcFwiLFxyXG4gICAgICAgICAgXCJDb25jdXJyZW50TGlua2VkUXVldWVcIixcclxuICAgICAgICAgIFwiQ29weU9uV3JpdGVBcnJheUxpc3RcIixcclxuICAgICAgICAgIFwiVGhyZWFkTG9jYWxcIixcclxuICAgICAgICAgIFwiQmxvY2tpbmdRdWV1ZVwiLFxyXG4gICAgICAgICAgXCJwb29sXCIsXHJcbiAgICAgICAgICBcIlNjaGVkdWxlZFRocmVhZFBvb2xFeGVjdXRvclwiLFxyXG4gICAgICAgICAgXCJhdG9taWNcIixcclxuICAgICAgICAgIFwiQ291bnREb3duTGF0Y2hcIixcclxuICAgICAgICAgIFwiZm9yay1qb2luXCIsXHJcbiAgICAgICAgICBcInNoZW5nY2hhbnpoZS14aWFvZmVpemhlXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCIyLjE0IEpWTVwiLFxyXG4gICAgICAgICAgcHJlZml4OiBcImp2bS9cIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIFwid2hhdC1pcy1qdm1cIixcclxuICAgICAgICAgIFwiaG93LXJ1bi1qYXZhLWNvZGVcIixcclxuICAgICAgICAgIFwiY2xhc3MtbG9hZFwiLFxyXG4gICAgICAgICAgXCJjbGFzcy1maWxlLWppZWdvdVwiLFxyXG4gICAgICAgICAgXCJieXRlY29kZVwiLFxyXG4gICAgICAgICAgXCJ6aWppZW1hLXpoaWxpbmdcIixcclxuICAgICAgICAgIFwiaG93LWp2bS1ydW4temlqaWVtYS16aGlsaW5nXCIsXHJcbiAgICAgICAgICBcImhzZGJcIixcclxuICAgICAgICAgIFwiYXNtXCIsXHJcbiAgICAgICAgICBcImNvbXBpbGUtamRrXCIsXHJcbiAgICAgICAgICBcIm5laWN1bi1qaWVnb3VcIixcclxuICAgICAgICAgIFwid2hlcmVpcy10aGUtb2JqZWN0XCIsXHJcbiAgICAgICAgICBcImdjXCIsXHJcbiAgICAgICAgICBcInR1amllLWdjXCIsXHJcbiAgICAgICAgICBcIm1laXR1YW4tOS1nY1wiLFxyXG4gICAgICAgICAgXCJwcm9ibGVtLXRvb2xzXCIsXHJcbiAgICAgICAgICBcImppdFwiLFxyXG4gICAgICAgICAgXCJvb21cIixcclxuICAgICAgICAgIFwiY3B1LXBlcmNlbnQtMTAwXCIsXHJcbiAgICAgICAgICBcInpvbmdqaWVcIixcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJcdTRFMDlcdTMwMDFKYXZhXHU0RjAxXHU0RTFBXHU3RUE3XHU1RjAwXHU1M0QxXCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiMy4xIFx1NUYwMFx1NTNEMS9cdTY3ODRcdTVFRkFcdTVERTVcdTUxNzdcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiMy4xLjEgTmdpbnhcIixcclxuICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgXCJuZ2lueC9uZ2lueFwiLFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIjMuMS4yIElERVwiLFxyXG4gICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgXCJpZGUvNC1kZWJ1Zy1za2lsbFwiLFxyXG4gICAgICAgICAgICAgIFwiaWRlL3hlY2hhdFwiLFxyXG4gICAgICAgICAgICAgIFwiaWRlL3NoZW5qaS1jaGFqaWFuLTEwXCIsXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiMy4xLjMgTWF2ZW5cIixcclxuICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgIFwibWF2ZW4vbWF2ZW5cIixcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCIzLjEuNCBHaXRcIixcclxuICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgIFwiZ2l0L2dpdC1xaXl1YW5cIixcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiMy4zIFNwcmluZ1wiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJTcHJpbmcgQU9QXHU2MjZCXHU3NkYyXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJzcHJpbmdib290L2FvcC1sb2dcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiU3ByaW5nIElvQ1x1NjI2Qlx1NzZGMlwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwic3ByaW5nYm9vdC9pb2NcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIjMuNCBTcHJpbmdCb290XCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlx1NjQyRFx1NUVGQVx1N0IyQ1x1NEUwMFx1NEUyQVNwcmluZyBCb290XHU5ODc5XHU3NkVFXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJzcHJpbmdib290L2luaXRpYWxpenJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU2NTc0XHU1NDA4TXlTUUxcdTU0OENEcnVpZFwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwic3ByaW5nYm9vdC9teXNxbC1kcnVpZFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTY1NzRcdTU0MDhKUEFcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcInNwcmluZ2Jvb3QvanBhXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlx1NjU3NFx1NTQwOFRoeW1lbGVhZlwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwic3ByaW5nYm9vdC90aHltZWxlYWZcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU1RjAwXHU1NDJGXHU0RThCXHU1MkExXHU2NTJGXHU2MzAxXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJzcHJpbmdib290L3RyYW5zYWN0aW9uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlx1OEZDN1x1NkVFNFx1NTY2OFx1MzAwMVx1NjJFNlx1NjIyQVx1NTY2OFx1MzAwMVx1NzZEMVx1NTQyQ1x1NTY2OFwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwic3ByaW5nYm9vdC9GaWx0ZXItSW50ZXJjZXB0b3ItTGlzdGVuZXJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU2NTc0XHU1NDA4UmVkaXNcdTVCOUVcdTczQjBcdTdGMTNcdTVCNThcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcInJlZGlzL3JlZGlzLXNwcmluZ2Jvb3RcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU2NTc0XHU1NDA4TG9nYmFja1wiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwic3ByaW5nYm9vdC9sb2diYWNrXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU2NTc0XHU1NDA4U3dhZ2dlci1VSVwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwic3ByaW5nYm9vdC9zd2FnZ2VyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU2NTc0XHU1NDA4S25pZmU0alwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwiZ29uZ2p1L2tuaWZlNGpcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTY1NzRcdTU0MDhTcHJpbmdUYXNrXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJzcHJpbmdib290L3NwcmluZ3Rhc2tcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTY1NzRcdTU0MDhNeUJhdGlzLVBsdXMgQXV0b0dlbmVyYXRvclwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwia2FpeXVhbi9hdXRvLWdlbmVyYXRvclwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInNwcmluZ2Jvb3QvcXVhcnR6XCIsXHJcbiAgICAgICAgICAgIFwic3ByaW5nYm9vdC9teWJhdGlzXCIsXHJcbiAgICAgICAgICAgIFwic3ByaW5nYm9vdC9kb2NrZXJcIixcclxuICAgICAgICAgICAgXCJzcHJpbmdib290L21hY29zLWNvZGluZ21vcmUtcnVuXCIsXHJcbiAgICAgICAgICAgIFwic3ByaW5nYm9vdC93aW5kb3dzLWNvZGluZ21vcmUtcnVuXCIsXHJcbiAgICAgICAgICAgIFwic3ByaW5nYm9vdC9saW51eC1jb2Rpbmdtb3JlLXJ1blwiLFxyXG4gICAgICAgICAgICBcInNwcmluZ2Jvb3QvdmFsaWRhdG9yXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCIzLjUgTmV0dHlcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgXCJuZXR0eS9ydW1lblwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiMy42IFx1OEY4NVx1NTJBOVx1NURFNVx1NTE3N1wiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcImdvbmdqdS9jaG9jb1wiLFxyXG4gICAgICAgICAgICBcImdvbmdqdS9icmV3XCIsXHJcbiAgICAgICAgICAgIFwiZ29uZ2p1L3RhYmJ5XCIsXHJcbiAgICAgICAgICAgIFwiZ29uZ2p1L3dhcnBcIixcclxuICAgICAgICAgICAgXCJnb25nanUvd2luZHRlcm1cIixcclxuICAgICAgICAgICAgXCJnb25nanUvY2hpbmVyXCIsXHJcbiAgICAgICAgICAgIFwiZ29uZ2p1L0RCZWF2ZXJcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIjMuNyBcdTVGMDBcdTZFOTBcdThGNkVcdTVCNTBcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiSFRUUFx1OEMwM1x1NzUyOFx1Njg0Nlx1NjdCNkZvcmVzdFwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwiZ29uZ2p1L2ZvcmVzdFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTUzNTVcdTUxNDNcdTZENEJcdThCRDVKdW5pdFwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwiZ29uZ2p1L2p1bml0XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlx1OTYzRlx1OTFDQ1x1NUYwMFx1NkU5MFx1NzY4NGZhc3Rqc29uXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJnb25nanUvZmFzdGpzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU4QzM3XHU2QjRDXHU1RjAwXHU2RTkwXHU3Njg0R3NvblwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwiZ29uZ2p1L2dzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiU3ByaW5nQm9vdFx1NTE4NVx1N0Y2RVx1NzY4NEphY2tzb25cIixcclxuICAgICAgICAgICAgICBsaW5rOiBcImdvbmdqdS9qYWNrc29uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlx1NjVFNVx1NUZEN1x1Njg0Nlx1NjdCNlx1NzY4NFx1OUYzQlx1Nzk1NkxvZzRqXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJnb25nanUvbG9nNGpcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU5QUQ4XHU2MDI3XHU4MEZEXHU2NUU1XHU1RkQ3XHU2ODQ2XHU2N0I2TG9nNGoyXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJnb25nanUvbG9nNGoyXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlNwcmluZyBCb290XHU1MTg1XHU3RjZFXHU3Njg0TG9nYmFja1wiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwiZ29uZ2p1L2xvZ2JhY2tcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU2NUU1XHU1RkQ3XHU5NUU4XHU5NzYyU0xGNEpcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcImdvbmdqdS9zbGY0alwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIjMuOCBcdTUyMDZcdTVFMDNcdTVGMEZcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiRWxhc3RpY3NlYXJjaFx1NTE2NVx1OTVFOFwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwiZWxhc3RpY3NlYXJjaC9ydW1lblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlx1ODA0QVx1ODA0QVpvb0tlZXBlclwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwiem9va2VlcGVyL2ppYmVuamllc2hhb1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlx1ODA0QVx1ODA0QVx1NUZBRVx1NjcwRFx1NTJBMVx1N0Y1MVx1NTE3M1wiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwibWljcm9zZXJ2aWNlL2FwaS13YW5nZ3VhblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCIzLjkgXHU2RDg4XHU2MDZGXHU5NjFGXHU1MjE3XCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlJhYmJpdE1RXHU1MTY1XHU5NUU4XCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJtcS9yYWJiaXRtcS1ydW1lblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlx1NTk4Mlx1NEY1NVx1NEZERFx1OTY5Q1x1NkQ4OFx1NjA2Rlx1NEUwRFx1NEUyMlx1NTkzMVwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwibXEvMTAwLWJ1ZGl1c2hpXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtcS9rYWZrYVwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJcdTU2REJcdTMwMDFcdTY1NzBcdTYzNkVcdTVFOTNcIixcclxuICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJNeVNRTFwiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJNeVNRTFx1NTQ4Q1JlZGlzXHU2NTcwXHU2MzZFXHU0RTAwXHU4MUY0XHU2MDI3XCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJteXNxbC9yZWRpcy1zaHVqdS15aXpoaXhpbmdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiUmVkaXNcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiUmVkaXNcdTUxNjVcdTk1RThcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcInJlZGlzL3J1bWVuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU3RjEzXHU1QjU4XHU5NkVBXHU1RDI5XHUzMDAxXHU3QTdGXHU5MDBGXHUzMDAxXHU1MUZCXHU3QTdGXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJyZWRpcy94dWViZW5nLWNodWFudG91LWppY2h1YW5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiTW9uZ29EQlwiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIm1vbmdvZGIvcnVtZW5cIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiXHU0RTk0XHUzMDAxXHU4QkExXHU3Qjk3XHU2NzNBXHU1N0ZBXHU3ODQwXCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICBwcmVmaXg6IFwiY3MvXCIsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJcdThCQTFcdTdCOTdcdTY3M0FcdTY0Q0RcdTRGNUNcdTdDRkJcdTdFREZcIixcclxuICAgICAgICAgIGxpbms6IFwib3NcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiXHU4QkExXHU3Qjk3XHU2NzNBXHU3RjUxXHU3RURDXCIsXHJcbiAgICAgICAgICBsaW5rOiBcIndhbmdsdW9cIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJcdTUxNkRcdTMwMDFcdTZDNDJcdTgwNENcdTk3NjJcdThCRDVcIixcclxuICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJcdTk3NjJcdThCRDVcdTk4OTgmXHU1MTZCXHU4MEExXHU2NTg3XCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHByZWZpeDpcImludGVydmlldy9cIixcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwiamF2YS0zNFwiLFxyXG4gICAgICAgICAgICBcImphdmEtaGFzaG1hcC0xM1wiLFxyXG4gICAgICAgICAgICBcInJlZGlzLTEyXCIsXHJcbiAgICAgICAgICAgIFwibXlzcWwtNjBcIixcclxuICAgICAgICAgICAgXCJkdWJiby0xN1wiLFxyXG4gICAgICAgICAgICBcImphdmEtYmFzaWMtYmFndXdlblwiLFxyXG4gICAgICAgICAgICBcImphdmEtdGhyZWFkLWJhZ3V3ZW5cIixcclxuICAgICAgICAgICAgXCJqYXZhLWp2bS1iYWd1d2VuXCIsXHJcbiAgICAgICAgICAgIFwibWlhbnNoaWd1YW4tYmlnZmlsZS1taWFvY2h1YW5cIixcclxuICAgICAgICAgICAgXCJtaWFuc2hpZ3Vhbi1mZW5rdWZlbmJpYW9cIixcclxuICAgICAgICAgICAgXCJtaWFuc2hpZ3Vhbi15b3VodWlxdWFuXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJcdTRGMThcdThEMjhcdTk3NjJcdTdFQ0ZcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgcHJlZml4OlwibWlhbmppbmcvXCIsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcInNoYW5nYW5hbGl5dW5cIixcclxuICAgICAgICAgICAgXCJzaGV6eW5tamZ4aGVsbXR0dGpkZGRcIixcclxuICAgICAgICAgICAgXCJ4dWVseWJkemhlbG9mZmVyXCIsXHJcbiAgICAgICAgICAgIFwiaHVhbnhnemxcIixcclxuICAgICAgICAgICAgXCJxdXpqbHNzcGR4XCIsXHJcbiAgICAgICAgICAgIFwiemhlaXNueWx6bGRoemRcIixcclxuICAgICAgICAgICAgXCJjaGVuZ3h5c3BuaHhhZ3psXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJcdTk3NjJcdThCRDVcdTUxQzZcdTU5MDdcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgXCJuaWNlLWFydGljbGUvd2VpeGluL3ppanhqamR5ZnF6Z2xcIixcclxuICAgICAgICAgICAgXCJuaWNlLWFydGljbGUvd2VpeGluL21pYW5zbXRnbFwiLFxyXG4gICAgICAgICAgICBcIm5pY2UtYXJ0aWNsZS93ZWl4aW4vbHVvY3pibXNkZHliXCIsXHJcbiAgICAgICAgICAgIFwibmljZS1hcnRpY2xlL3dlaXhpbi95b3VkeHpoaG1qemx5Y2Z4XCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJcdTU3Q0VcdTVFMDJcdTkwMDlcdTYyRTlcIixcclxuICAgICAgICAgIHByZWZpeDogXCJjaXR5c2VsZWN0L1wiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcImJlaWppbmdcIixcclxuICAgICAgICAgICAgXCJjaGVuZ2R1XCIsXHJcbiAgICAgICAgICAgIFwiZ3Vhbmd6aG91XCIsXHJcbiAgICAgICAgICAgIFwiaGFuZ3pob3VcIixcclxuICAgICAgICAgICAgXCJuYW5qaW5nXCIsXHJcbiAgICAgICAgICAgIFwicWluZ2Rhb1wiLFxyXG4gICAgICAgICAgICBcInNoZW56aGVuXCIsXHJcbiAgICAgICAgICAgIFwic3V6aG91XCIsXHJcbiAgICAgICAgICAgIFwieGlhblwiLFxyXG4gICAgICAgICAgICBcInpoZW5nemhvdVwiLFxyXG4gICAgICAgICAgICBcImppbmFuXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlx1NEUwM1x1MzAwMVx1NUI2Nlx1NEU2MFx1NUVGQVx1OEJBRVwiLFxyXG4gICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgcHJlZml4OiBcInh1ZXhpamlhbnlpL1wiLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgXCJMZWFybkNTLUJ5WW91cnNlbGZcIixcclxuICAgICAgICAgIFwicmVhZC1jc2FwcFwiLFxyXG4gICAgICAgICAgXCJlbGVjdHJvbi1pbmZvcm1hdGlvbi1lbmdpbmVlcmluZ1wiLFxyXG4gICAgICAgICAgXCJnYW9rYW8temhpeXVhbi1jc1wiLFxyXG4gICAgICAgICAgXCJ0ZXN0LXByb2dyYW1tZXItcmVhZC1ib29rc1wiLFxyXG4gICAgICAgICAgXCJ4aWFvemhhby1qYXZhLXNob3VsZC1tYXN0ZXJcIixcclxuICAgICAgICAgIFwiY2hlbmd4dXl1YW4tZnV5ZVwiLFxyXG4gICAgICAgICAgXCJydWh6ZnpkZ3p6Y3hjelwiLFxyXG4gICAgICAgICAgXCJnYW9iaW5nZmEtamluZ3lhbi1oc21jb21wdXRlclwiLFxyXG4gICAgICAgICAgXCJoci14aW56aVwiLFxyXG4gICAgICAgICAgXCIzNS13ZWlqaVwiLFxyXG4gICAgICAgICAgXCIyMHJlbi1pdC1xdW1hXCIsXHJcbiAgICAgICAgICBcImJlbmtlc2hlbmctYWxpLXRlbmd4dW5cIixcclxuICAgICAgICAgIFwiNDA4XCIsXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiXHU1MTZCXHUzMDAxXHU3N0U1XHU4QkM2XHU1RTkzXHU2NDJEXHU1RUZBXCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICBwcmVmaXg6IFwic3pqeS9cIixcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIFwiYnV5LWNsb3VkLXNlcnZlclwiLFxyXG4gICAgICAgICAgXCJpbnN0YWxsLWJhb3RhLW1pYW5iYW5cIixcclxuICAgICAgICAgIFwiYnV5LWRvbWFpblwiLFxyXG4gICAgICAgICAgXCJyZWNvcmQtZG9tYWluXCIsXHJcbiAgICAgICAgICBcImh0dHBzLWRvbWFpblwiLFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlx1NEU1RFx1MzAwMVx1ODA1NFx1N0NGQlx1NEY1Q1x1ODAwNVwiLFxyXG4gICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgcHJlZml4OiBcImFib3V0LXRoZS1hdXRob3IvXCIsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgXCJiemhhbi0xMHdhblwiLFxyXG4gICAgICAgIFwiemhpaHUtMTAwMHdhblwiLFxyXG4gICAgICAgIFwiY3Nkbi0xMDAwd2FuXCIsXHJcbiAgICAgICAgXCJyZWFkbWUubWRcIixcclxuICAgICAgICBcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxufSk7XHJcblxyXG5cclxuXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlEsU0FBUyx1QkFBdUI7QUFDM1MsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxpQkFBaUI7QUFDMUIsU0FBUyx3QkFBd0I7OztBQ0h3TyxTQUFTLGlCQUFpQjs7O0FDQXhCLFNBQVMsY0FBYztBQUVsUyxJQUFPLGlCQUFRLE9BQU87QUFBQSxFQUNwQjtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQTtBQUFBLEVBR1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzs7O0FDOUM0USxTQUFTLGVBQWU7QUFDOVIsSUFBTSxnQkFBZ0IsUUFBUTtBQUFBLEVBQ25DLG1CQUFtQjtBQUFBLElBQ2pCO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUEsRUFDQSxXQUFVO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUEsRUFDQSxhQUFZO0FBQUEsSUFDVjtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUVBLHlCQUF5QjtBQUFBLElBQ3ZCO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGlCQUFpQjtBQUFBLElBQ2Y7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLHFCQUFxQjtBQUFBLElBQ25CO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUVBLEtBQUs7QUFBQSxJQUNIO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsVUFDRSxRQUFRO0FBQUEsVUFDUixNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDVjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDVjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1Y7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDVjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFFQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFFVjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFFQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixRQUFPO0FBQUEsVUFDUCxVQUFVO0FBQUEsWUFDVjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsUUFBTztBQUFBLFVBQ1AsVUFBVTtBQUFBLFlBQ1Y7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFFBQU87QUFBQSxVQUNQLFVBQVU7QUFBQSxZQUNWO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFVBQ1IsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1Y7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sUUFBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1Y7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsUUFBUTtBQUFBLFVBQ1IsVUFBVTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixRQUFRO0FBQUEsVUFDUixVQUFVO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFFBQVE7QUFBQSxVQUNSLFVBQVU7QUFBQSxZQUNWO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNWO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBRUE7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFVBQVU7QUFBQSxnQkFDUjtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sYUFBYTtBQUFBLGNBQ2IsVUFBVTtBQUFBLGdCQUNWO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sYUFBYTtBQUFBLGNBQ2IsVUFBVTtBQUFBLGdCQUNWO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixhQUFhO0FBQUEsY0FDYixVQUFVO0FBQUEsZ0JBQ1Y7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNSO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNSO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxVQUVGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNSO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNSO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDUjtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixRQUFPO0FBQUEsVUFDUCxVQUFVO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFFBQU87QUFBQSxVQUNQLFVBQVU7QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFVBQ1IsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7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
