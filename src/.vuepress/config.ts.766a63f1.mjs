// src/.vuepress/config.ts
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
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
    text: "CS\u89C4\u5212",
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
  "/guider/": [
    "README.md",
    "javaroute"
  ],
  "/zhishixingqiu/": [
    "readme.md",
    "map",
    "may",
    "june",
    "july",
    "august"
  ],
  "/cainiao/": [
    "readme.md",
    "\u4FEE\u4ED9\u524D\u8A00",
    "Educoder",
    "MyLanqiaoNote",
    "hellovuepress",
    "Linux",
    "javaessay"
  ],
  "/jieyou/": [
    "readme.md",
    "intro"
  ],
  "/redis/": [
    "readme.md",
    "Redis"
  ],
  "/mianshi/": [
    "readme.md",
    "\u601D\u7EF4\u5BFC\u56FE"
  ],
  "/collection/": [
    "README.md",
    {
      text: "\u9879\u76EE\u5B9E\u64CD\u7B14\u8BB0",
      prefix: "project/",
      collapsible: true,
      children: [
        "shangyitong",
        "bilibili",
        "SSM"
      ]
    }
  ],
  "/suanfa/": [
    "README.md",
    "001.\u4E24\u6570\u4E4B\u548C.md",
    "026.\u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879.md"
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
    green: "#00ceac",
    purple: "#ed7196"
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
  footer: '<a href="https://beian.miit.gov.cn/" target="_blank">\u8C6BICP\u59072023001822\u53F7</a><img src="http://images.rl0206.love/202305030138722.png" height="15px" width="15px" /><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41078102000226"><span>\u8C6B\u516C\u7F51\u5B89\u5907 41078102000226\u53F7</span></a>',
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
    description: "\u76EE\u5149\u653E\u8FDC(\u65B9\u5411\u52A1\u5FC5\u6B63\u786E); \u811A\u6B65\u653E\u7A33(\u773C\u9AD8\u5207\u52FF\u624B\u4F4E); \u9053\u963B\u4E14\u957F(\u9759\u5FC3\u5207\u52FF\u6D6E\u8E81); \u884C\u5219\u5C06\u81F3(\u552F\u6709Persistence)!",
    medias: {
      // 无内置图标
      // CSDN: "https://blog.csdn.net/wl2oo1",
      Github: "https://github.com/WL2O2O",
      Gitee: "https://gitee.com/WLei224",
      // Email: "1149630057@qq.com",
      QQ: "http://images.rl0206.love/202305031112485.png",
      Wechat: "http://images.rl0206.love/202305031112714.png"
    }
  },
  plugins: {
    // 移动端开启一键复制
    copyCode: {
      showInMobile: true
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
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_3180624_7cy10l7jqqh.css"
      }
    ]
  ],
  plugins: [
    // 搜索功能
    docsearchPlugin({
      appId: "2YNM597FQ3",
      apiKey: "c57eed21810689379dcf044a75c7568b",
      indexName: "wlei224-gitee",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9DU19HVUlERVIvZG9jcy9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxDU19HVUlERVJcXFxcZG9jc1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovQ1NfR1VJREVSL2RvY3Mvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkb2NzZWFyY2hQbHVnaW4gfSBmcm9tIFwiQHZ1ZXByZXNzL3BsdWdpbi1kb2NzZWFyY2hcIjtcbmltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tIFwidnVlcHJlc3NcIjtcbi8vIFx1NUYxNVx1NTE2NVx1NEUzQlx1OTg5OFx1OTE0RFx1N0Y2RVxuaW1wb3J0IHRoZW1lIGZyb20gXCIuL3RoZW1lXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgLy8gVE9ETzogXHU5MTREXHU3RjZFXHU1OTFBXHU5ODlDXHU4MjcyXHU1MjA3XHU2MzYyIDIwMjMvMDQvMjYgXHU1REYyXHU4OUUzXHU1MUIzXG4gIC8vIFx1NjMwOVx1NzE2N1x1NUI5OFx1NjVCOVx1NjU1OVx1N0EwQlx1RkYwQ1x1OTE0RFx1N0Y2RVx1NEUzQlx1OTg5OFx1NTkxQVx1OTg5Q1x1ODI3Mlx1OTcwMFx1ODk4MVx1OTE0RFx1N0Y2RVx1NTcyOGNvbmZpZy50c1x1NEU1Rlx1NUMzMVx1NjYyRlx1NjcyQ1x1NjU4N1x1NEVGNlx1NEUyRFx1RkYwQ1xuICAvLyBcdTc1MzFcdTRFOEVcdTYyOEF0aGVtZS50c1x1NTM1NVx1NzJFQ1x1NjJDRVx1NEU4Nlx1NTFGQVx1NTNCQlx1RkYwQ1x1NzEzNlx1NTQwRVx1NTcyOFx1NTE2OFx1NUM0MFx1OTE0RFx1N0Y2RVx1NjU4N1x1NEVGNmNvbmZpZy50c1x1NEUyRFx1NUYxNVx1NTE2NVx1NTM3M1x1NTNFRlx1RkYwQ1x1NTkxQVx1OTg5Q1x1ODI3Mlx1NTIwN1x1NjM2Mlx1NURGMlx1ODlFM1x1NTFCM1xuICBcbiAgLy8gXHU0RTJEXHU2NTg3XG4gIGxhbmc6IFwiemgtQ05cIixcbiAgLy8gXHU2ODA3XHU5ODk4XG4gIHRpdGxlOiBcIkNTX0dVSURFUlwiLFxuICAvLyBcdTYzQ0ZcdThGRjBcbiAgZGVzY3JpcHRpb246IFwiXHU4QkIwXHU1RjU1XHU2MjExXHU3Njg0Q1NcdTRFNEJcdThERUYsXHU0RTNBXHU0RjYwXHU3MEI5XHU0RUFFXHU0RTAwXHU1RUE3XHU3MDZGXHU1ODU0IVwiLFxuICAvLyBIVE1MIFx1NzZFRVx1NUY1NVxuICBkZXN0OiBcInNyYy8udnVlcHJlc3MvZGlzdFwiLFxuICAvLyBcdTU5ODJcdTY3OUNcdTRGNjBcdTZCNjNcdTU3MjhcdTRGN0ZcdTc1MjggUFdBIFx1NjNEMlx1NEVGNlx1RkYwQ1x1NjIxMVx1NEVFQ1x1NjNBOFx1ODM1MFx1NTcyOFx1NEY2MFx1NzY4NCBWdWVQcmVzcyBcdTkxNERcdTdGNkVcdTY1ODdcdTRFRjZcdTRFMkRcdThCQkVcdTdGNkUgXG4gIHNob3VsZFByZWZldGNoOiBmYWxzZSxcblxuICBoZWFkOiBbXG4gICAgLy8gbWV0YVxuICAgIFtcIm1ldGFcIiwgeyBuYW1lOiBcInJvYm90c1wiLCBjb250ZW50OiBcImFsbFwiIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBuYW1lOiBcImF1dGhvclwiLCBjb250ZW50OiBcIldMZWkyMjRcIiB9XSxcbiAgICBbXG4gICAgICBcIm1ldGFcIixcbiAgICAgIHtcbiAgICAgICAgXCJodHRwLWVxdWl2XCI6IFwiQ2FjaGUtQ29udHJvbFwiLFxuICAgICAgICBjb250ZW50OiBcIm5vLWNhY2hlLCBuby1zdG9yZSwgbXVzdC1yZXZhbGlkYXRlXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgW1wibWV0YVwiLCB7IFwiaHR0cC1lcXVpdlwiOiBcIlByYWdtYVwiLCBjb250ZW50OiBcIm5vLWNhY2hlXCIgfV0sXG4gICAgW1wibWV0YVwiLCB7IFwiaHR0cC1lcXVpdlwiOiBcIkV4cGlyZXNcIiwgY29udGVudDogXCIwXCIgfV0sXG4gICAgW1xuICAgICAgXCJtZXRhXCIsXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwia2V5d29yZHNcIixcbiAgICAgICAgY29udGVudDpcbiAgICAgICAgICBcIkphdmEsIEphdmFcdTU3RkFcdTc4NDAsIFx1NUU3Nlx1NTNEMVx1N0YxNlx1N0EwQiwgSlZNLCBcdTg2NUFcdTYyREZcdTY3M0EsIFx1NjU3MFx1NjM2RVx1NUU5MywgTXlTUUwsIFNwcmluZywgUmVkaXMsIE15QmF0aXMsIFNwcmluZ0Jvb3QsIElERUEsIFx1NkM0Mlx1ODA0Q1x1OTc2Mlx1OEJENSwgXHU5NzYyXHU2RTIzXHU5MDA2XHU4OEFELCBcdTVCNjZcdTRFNjBcdThERUZcdTdFQkZcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXCJtZXRhXCIsIHsgbmFtZTogXCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIsIGNvbnRlbnQ6IFwieWVzXCIgfV0sXG4gICAgW1xuICAgICAgXCJzY3JpcHRcIix7fSxcbiAgICAgIGBcbiAgICAgICAgdmFyIF9obXQgPSBfaG10IHx8IFtdO1xuICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGhtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICBobS5zcmMgPSBcImh0dHBzOi8vaG0uYmFpZHUuY29tL2htLmpzPzUyMzBhYzE0MzY1MGJmNWViM2MxNGYzZmI5YjFkM2VjXCI7XG4gICAgICAgICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTsgXG4gICAgICAgICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShobSwgcyk7XG4gICAgICAgIH0pKCk7XG4gICAgICBgXG4gICAgXSxcbiAgICAvLyBcdTkxNERcdTdGNkVcdTk2M0ZcdTkxQ0NcdTc2ODRjZG5cbiAgICBbXG4gICAgICBcImxpbmtcIixcbiAgICAgIHtcbiAgICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgICAgaHJlZjogXCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzMxODA2MjRfN2N5MTBsN2pxcWguY3NzXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIF0sXG4gIHBsdWdpbnM6IFtcbiAgICAvLyBcdTY0MUNcdTdEMjJcdTUyOUZcdTgwRkRcbiAgICBkb2NzZWFyY2hQbHVnaW4oe1xuICAgICAgYXBwSWQ6IFwiMllOTTU5N0ZRM1wiLFxuICAgICAgYXBpS2V5OiBcImM1N2VlZDIxODEwNjg5Mzc5ZGNmMDQ0YTc1Yzc1NjhiXCIsXG4gICAgICBpbmRleE5hbWU6IFwid2xlaTIyNC1naXRlZVwiLFxuICAgICAgbG9jYWxlczoge1xuICAgICAgICBcIi9cIjoge1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlx1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2M1wiLFxuICAgICAgICAgIHRyYW5zbGF0aW9uczoge1xuICAgICAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzXCIsXG4gICAgICAgICAgICAgIGJ1dHRvbkFyaWFMYWJlbDogXCJcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RhbDoge1xuICAgICAgICAgICAgICBzZWFyY2hCb3g6IHtcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvblRpdGxlOiBcIlx1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNlwiLFxuICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uQXJpYUxhYmVsOiBcIlx1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNlwiLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiXHU1M0Q2XHU2RDg4XCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uQXJpYUxhYmVsOiBcIlx1NTNENlx1NkQ4OFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzdGFydFNjcmVlbjoge1xuICAgICAgICAgICAgICAgIHJlY2VudFNlYXJjaGVzVGl0bGU6IFwiXHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyXCIsXG4gICAgICAgICAgICAgICAgbm9SZWNlbnRTZWFyY2hlc1RleHQ6IFwiXHU2Q0ExXHU2NzA5XHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyXCIsXG4gICAgICAgICAgICAgICAgc2F2ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOiBcIlx1NEZERFx1NUI1OFx1ODFGM1x1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMlwiLFxuICAgICAgICAgICAgICAgIHJlbW92ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOiBcIlx1NEVDRVx1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMlx1NEUyRFx1NzlGQlx1OTY2NFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBlcnJvclNjcmVlbjoge1xuICAgICAgICAgICAgICAgIHRpdGxlVGV4dDogXCJcdTY1RTBcdTZDRDVcdTgzQjdcdTUzRDZcdTdFRDNcdTY3OUNcIixcbiAgICAgICAgICAgICAgICBoZWxwVGV4dDogXCJcdTRGNjBcdTUzRUZcdTgwRkRcdTk3MDBcdTg5ODFcdTY4QzBcdTY3RTVcdTRGNjBcdTc2ODRcdTdGNTFcdTdFRENcdThGREVcdTYzQTVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0VGV4dDogXCJcdTkwMDlcdTYyRTlcIixcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRleHQ6IFwiXHU1MjA3XHU2MzYyXCIsXG4gICAgICAgICAgICAgICAgY2xvc2VUZXh0OiBcIlx1NTE3M1x1OTVFRFwiLFxuICAgICAgICAgICAgICAgIHNlYXJjaEJ5VGV4dDogXCJcdTY0MUNcdTdEMjJcdTYzRDBcdTRGOUJcdTgwMDVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbm9SZXN1bHRzU2NyZWVuOiB7XG4gICAgICAgICAgICAgICAgbm9SZXN1bHRzVGV4dDogXCJcdTY1RTBcdTZDRDVcdTYyN0VcdTUyMzBcdTc2RjhcdTUxNzNcdTdFRDNcdTY3OUNcIixcbiAgICAgICAgICAgICAgICBzdWdnZXN0ZWRRdWVyeVRleHQ6IFwiXHU0RjYwXHU1M0VGXHU0RUU1XHU1QzFEXHU4QkQ1XHU2N0U1XHU4QkUyXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICAvLyBcdTVGMTVcdTUxNjVcdTRFM0JcdTk4OThcdTc2ODRcdTc2RjhcdTUxNzNcdTkxNERcdTdGNkVcdTUxNDNcdTdEMjBcbiAgdGhlbWUsXG4gIC8vIFRPRE8gXG4gIC8vIC8vIFx1NkRGQlx1NTJBMHJvbGx1cE9wdGlvbnNcdTkxNERcdTdGNkVcdTk4NzlcbiAgLy8gYnVuZGxlckNvbmZpZzoge1xuICAvLyAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgLy8gICAgIG91dHB1dDoge1xuICAvLyAgICAgICAvLyBcdThDMDNcdTY1NzRjaHVua1x1NTkyN1x1NUMwRlx1OEI2Nlx1NTQ0QVx1NzY4NFx1OTY1MFx1NTIzNlxuICAvLyAgICAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDIwMDAsXG4gIC8vICAgICAgIC8vIFx1NEY3Rlx1NzUyOG1hbnVhbENodW5rc1x1Njc2NVx1OEZEQlx1ODg0Q1x1NEVFM1x1NzgwMVx1NTc1N1x1NTIwNlx1NTI3MlxuICAvLyAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcbiAgLy8gICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJub2RlX21vZHVsZXNcIikpIHtcbiAgLy8gICAgICAgICAgIHJldHVybiBcInZlbmRvclwiO1xuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfSxcbiAgLy8gICAgIH0sXG4gIC8vICAgfSxcbiAgLy8gfSxcblxufSk7XG5cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTovQ1NfR1VJREVSL2RvY3Mvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcQ1NfR1VJREVSXFxcXGRvY3NcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFx0aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovQ1NfR1VJREVSL2RvY3Mvc3JjLy52dWVwcmVzcy90aGVtZS50c1wiO2ltcG9ydCB7IGhvcGVUaGVtZSB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG4vLyBcdTVGMTVcdTUxNjVcdTVCRkNcdTgyMkFcdTY4MEZcdTU0OENcdTRGQTdcdThGQjlcdTY4MEZcdTUyMzB0aGVtZS50cywgdGhlbWUudHNcdTY3MDBcdTdFQzhcdTRGMUFcdTVGMTVcdTUxNjVcdTUyMzBjb25maWcudHNcbmltcG9ydCBuYXZiYXIgZnJvbSBcIi4vbmF2YmFyXCI7XG5pbXBvcnQgeyBzaWRlYmFyQ29uZmlnIH0gZnJvbSBcIi4vc2lkZWJhclwiO1xuZXhwb3J0IGRlZmF1bHQgaG9wZVRoZW1lKHtcbiAgLy8gXHU5MTREXHU3RjZFXHU1OTFBXHU5ODlDXHU4MjcyXHU1MjA3XHU2MzYyXG4gIGhvc3RuYW1lOiBcImh0dHBzOi8vd2xlaTIyNC5naXRlZS5pby9cIixcbiAgdGhlbWVDb2xvcjoge1xuICAgIGJsdWU6IFwiIzIxOTZmM1wiLFxuICAgIHJlZDogXCIjZjI2ZDZkXCIsXG4gICAgZ3JlZW46IFwiIzAwY2VhY1wiLFxuICAgIHB1cnBsZTogXCIjZWQ3MTk2XCIsXG4gIH0sXG4gIFxuICAvLyBcdTdGNTFcdTdBRDlcdTU2RkVcdTY4MDdcbiAgbG9nbzogXCIvZmF2aWNvbi5pY29cIixcbiAgLy8gR2l0IFx1NEVEM1x1NUU5M1x1NTQ4Q1x1N0YxNlx1OEY5MVx1OTRGRVx1NjNBNVxuICByZXBvOiBcImh0dHBzOi8vZ2l0ZWUuY29tL1dMZWkyMjQvV0xlaTIyNC5naXRcIixcbiAgcmVwb0xhYmVsOiBcIkdpdGVlXCIsXG4gIGRvY3NEaXI6IFwiZG9jc1wiLFxuICAvLyBcdTRFRTVcdTUyNERcdTc2ODRcdTlFRDhcdThCQTRcdTRFRDNcdTVFOTNcdTUyMDZcdTY1MkZcdTU0MERcdUZGMENcdTY1QjlcdTRGQkZcdTYzRDBcdTRFQTQgcHIgXHU1NDhDIGlzc3VlXG4gIGRvY3NCcmFuY2g6IFwibWFzdGVyXCIsXG5cbiAgLy8gXHU1MTY4XHU1QzRGXHU2MzA5XHU5NEFFXG4gIGZ1bGxzY3JlZW46IHRydWUsXG4gIC8vIFx1NTcyOFx1NkRGMVx1ODI3Mlx1NkEyMVx1NUYwRlx1RkYwQ1x1NkQ0NVx1ODI3Mlx1NkEyMVx1NUYwRlx1NTQ4Q1x1ODFFQVx1NTJBOFx1NEU0Qlx1OTVGNFx1NTIwN1x1NjM2MiAoXHU5RUQ4XHU4QkE0KVxuICBkYXJrbW9kZTogXCJzd2l0Y2hcIixcbiAgLy8gXHU3RUFGXHU1MUMwXHU2QTIxXHU1RjBGXHVGRjBDXHU0RjFBXHU3OTgxXHU3NTI4XHU0RTAwXHU0RTlCXHU4MkIxXHU1NEU4XHU3Njg0XHU1MkE4XHU3NTNCXHU0RUU1XHU1M0NBXHU0RTAwXHU0RTlCXHU4MjcyXHU1RjY5XG4gIC8vIHB1cmU6IHRydWUsXG5cbiAgLy8gXHU5NjNGXHU5MUNDXHU1REY0XHU1REY0XHU3N0UyXHU5MUNGXHU1RTkzXHU1NkZFXHU2ODA3XHU3Njg0XHU1MjREXHU3RjAwXG4gIC8vIGljb25QcmVmaXg6IFwiaWNvbmZvbnQgaWNvbi1cIixcblxuICAvLyBob21lXHU5ODc1XHU1NDhDXHU1QkZDXHU4MjJBXHU2ODBGSWNvbmZvbnQgXHU3Q0JFXHU5MDA5XHU1NkZFXHU2ODA3IFx1NTQ4QyBcdTk2M0ZcdTkxQ0NcdTU5ODhcdTU5ODhcdTc2ODRcdTRFOTJcdTY1QTVcbiAgaWNvbkFzc2V0czogXCJpY29uZm9udFwiLFxuXG4gIC8vIFx1NTE2OFx1NUM0MFx1OUVEOFx1OEJBNFx1NEY1Q1x1ODAwNVxuICBhdXRob3I6IHtcbiAgICBuYW1lOiBcIldMZWkyMjRcIixcbiAgICB1cmw6IFwiL2Fib3V0Z3VpZGVyL1wiLFxuICB9LFxuXG4gIC8vIFx1NTJBMFx1NUJDNlxuICBlbmNyeXB0OiB7XG4gICAgY29uZmlnOiB7XG4gICAgICAvLyBcdThGRDlcdTUzRUFcdTRGMUFcdTUyQTBcdTVCQzYgY29uZmlnL3BhZ2UuaHRtbFxuICAgICAgXCIvbmljZS1hcnRpY2xlL2l0bWluZC94c2hlbGxhenBqYmpjeHNoZWxscHhmZnhieHQuaHRtbFwiOiBbXCIxMTEwXCIsIFwiMDIyNFwiXSxcbiAgICAgIFwiL25pY2UtYXJ0aWNsZS9pdG1pbmQvaWRlYXBqYXpqY3p4amhtemNteWpqaGN4Z3h6Lmh0bWxcIjogW1wiMTExMFwiLCBcIjAyMjRcIl0sXG4gICAgfSxcbiAgfSxcbiAgLy8gXHU2M0QwXHU3OTNBXHU2NTg3XHU1QjU3XG4gIGVuY3J5cHRMb2NhbGVzOiB7XG4gICAgcGxhY2Vob2xkZXI6IFwiXHU1NTMxXHUzMDAxXHU4REYzXHUzMDAxcmFwXHUzMDAxXHU3QkVFXHU3NDAzXHVEODNDXHVERkMwXHVGRjAxXCIsXG5cbiAgICAvKipcbiAgICAgKiBQYXNzd3JvZCBlcnJvciBoaW50XG4gICAgICovXG4gICAgZXJyb3JIaW50OiBcIlx1NTRDOFx1NTRDOFx1RkYwQ1x1NEY2MFx1NUU3Mlx1NTYxQn5cIixcbiAgfSxcblxuICAvLyBuYXZiYXJcbiAgbmF2YmFyOiBuYXZiYXIsXG5cbiAgLy8gc2lkZWJhclxuICBzaWRlYmFyOiBzaWRlYmFyQ29uZmlnLFxuXG4gIC8vIFx1OTg3NVx1ODExQVx1NjUyRlx1NjMwMVxuICBmb290ZXI6ICc8YSBocmVmPVwiaHR0cHM6Ly9iZWlhbi5taWl0Lmdvdi5jbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cdThDNkJJQ1BcdTU5MDcyMDIzMDAxODIyXHU1M0Y3PC9hPidcbiAgKyc8aW1nIHNyYz1cImh0dHA6Ly9pbWFnZXMucmwwMjA2LmxvdmUvMjAyMzA1MDMwMTM4NzIyLnBuZ1wiIGhlaWdodD1cIjE1cHhcIiB3aWR0aD1cIjE1cHhcIiAvPidcbiAgKyc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cDovL3d3dy5iZWlhbi5nb3YuY24vcG9ydGFsL3JlZ2lzdGVyU3lzdGVtSW5mbz9yZWNvcmRjb2RlPTQxMDc4MTAyMDAwMjI2XCI+J1xuICArJzxzcGFuPlx1OEM2Qlx1NTE2Q1x1N0Y1MVx1NUI4OVx1NTkwNyA0MTA3ODEwMjAwMDIyNlx1NTNGNzwvc3Bhbj4nXG4gICsnPC9hPicsXG4gIGRpc3BsYXlGb290ZXI6IHRydWUsXG5cbiAgLy8gXHU2NTg3XHU3QUUwXHU0RkUxXHU2MDZGXHVGRjBDXHU1M0VGXHU0RUU1XHU1ODZCXHU1MTY1XHU2NTcwXHU3RUM0XHVGRjBDXHU2NTcwXHU3RUM0XHU3Njg0XHU5ODdBXHU1RThGXHU2NjJGXHU1NDA0XHU2NzYxXHU3NkVFXHU2NjNFXHU3OTNBXHU3Njg0XHU5ODdBXHU1RThGXG4gIHBhZ2VJbmZvOiBbXCJBdXRob3JcIiwgXCJPcmlnaW5hbFwiLCBcIkRhdGVcIiwgXCJDYXRlZ29yeVwiLCBcIlRhZ1wiLCBcIldvcmRcIixcIlJlYWRpbmdUaW1lXCJdLFxuXG4gIGJsb2c6IHtcbiAgICAvLyBcdTRFMkFcdTRFQkFcdTRFQ0JcdTdFQ0RcdTk4NzVcdTU3MzBcdTU3NDBcbiAgICBpbnRybzogXCIvYWJvdXRndWlkZXIvXCIsXG4gICAgc2lkZWJhckRpc3BsYXk6IFwibW9iaWxlXCIsXG4gICAgLy8gXHU1MzVBXHU0RTNCXHU1OTM0XHU1MENGXG4gICAgYXZhdGFyOiBcIi9hdXRob3IucG5nXCIsXG4gICAgLy8gXHU1NzA2XHU4OUQyXG4gICAgcm91bmRBdmF0YXI6IHRydWUsXG4gICAgLy8gXHU1RUE3XHU1M0YzXHU5NEVEXG4gICAgZGVzY3JpcHRpb246XCJcdTc2RUVcdTUxNDlcdTY1M0VcdThGREMoXHU2NUI5XHU1NDExXHU1MkExXHU1RkM1XHU2QjYzXHU3ODZFKTsgXHU4MTFBXHU2QjY1XHU2NTNFXHU3QTMzKFx1NzczQ1x1OUFEOFx1NTIwN1x1NTJGRlx1NjI0Qlx1NEY0RSk7IFx1OTA1M1x1OTYzQlx1NEUxNFx1OTU3RihcdTk3NTlcdTVGQzNcdTUyMDdcdTUyRkZcdTZENkVcdThFODEpOyBcdTg4NENcdTUyMTlcdTVDMDZcdTgxRjMoXHU1NTJGXHU2NzA5UGVyc2lzdGVuY2UpIVwiLFxuICAgIG1lZGlhczoge1xuICAgICAgLy8gXHU2NUUwXHU1MTg1XHU3RjZFXHU1NkZFXHU2ODA3XG4gICAgICAvLyBDU0ROOiBcImh0dHBzOi8vYmxvZy5jc2RuLm5ldC93bDJvbzFcIixcbiAgICAgIEdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vV0wyTzJPXCIsXG4gICAgICBHaXRlZTogXCJodHRwczovL2dpdGVlLmNvbS9XTGVpMjI0XCIsXG4gICAgICAvLyBFbWFpbDogXCIxMTQ5NjMwMDU3QHFxLmNvbVwiLFxuICAgICAgUVE6IFwiaHR0cDovL2ltYWdlcy5ybDAyMDYubG92ZS8yMDIzMDUwMzExMTI0ODUucG5nXCIsXG4gICAgICBXZWNoYXQ6IFwiaHR0cDovL2ltYWdlcy5ybDAyMDYubG92ZS8yMDIzMDUwMzExMTI3MTQucG5nXCJcbiAgICB9LFxuICB9LFxuXG4gIHBsdWdpbnM6IHtcbiAgICAvLyBcdTc5RkJcdTUyQThcdTdBRUZcdTVGMDBcdTU0MkZcdTRFMDBcdTk1MkVcdTU5MERcdTUyMzZcbiAgICBjb3B5Q29kZToge1xuICAgICAgc2hvd0luTW9iaWxlOiB0cnVlLFxuICAgIH0sXG4gICAgLy8gXHU1RjAwXHU1NDJGXHU1MzVBXHU1QkEyXHU1MjlGXHU4MEZEXG4gICAgYmxvZzoge1xuICAgICAgLy8gXHU1NDJGXHU3NTI4XHU1MzVBXHU1QkEyXHU4MUVBXHU1MkE4XHU2NDU4XHU4OTgxXG4gICAgICAvLyBhdXRvRXhjZXJwdDogdHJ1ZSxcbiAgICB9LFxuICAgIC8vIC8vIFdhbGluZSBcdTkxNERcdTdGNkVcbiAgICAvLyBjb21tZW50OiB7XG4gICAgLy8gICBwcm92aWRlcjogXCJXYWxpbmVcIixcbiAgICAvLyAgIHNlcnZlclVSTDogXCJodHRwczovL2NzLWd1aWRlci02Y21tOTlmMnMtd2wybzJvLnZlcmNlbC5hcHAvXCIsXG4gICAgLy8gICAvLyBcdTRFM0FcdTY1ODdcdTdBRTBcdTU4OUVcdTUyQTBcdTg4NjhcdTYwQzVcdTRFOTJcdTUyQThcdTUyOUZcdTgwRkRcdUZGMENcdThCQkVcdTdGNkVcdTRFM0EgdHJ1ZSBcdTYzRDBcdTRGOUJcdTlFRDhcdThCQTRcdTg4NjhcdTYwQzVcdUZGMENcdTRFNUZcdTUzRUZcdTRFRTVcdTkwMUFcdThGQzdcdThCQkVcdTdGNkVcdTg4NjhcdTYwQzVcdTU3MzBcdTU3NDBcdTY1NzBcdTdFQzRcdTY3NjVcdTgxRUFcdTVCOUFcdTRFNDlcdTg4NjhcdTYwQzVcdTU2RkVcdTcyNDdcdUZGMENcdTY3MDBcdTU5MjdcdTY1MkZcdTYzMDEgOCBcdTRFMkFcdTg4NjhcdTYwQzVcdTMwMDJcbiAgICAvLyAgIHJlYWN0aW9uOiB0cnVlLFxuICAgIC8vIH0sXG4gICAgY29tbWVudDoge1xuICAgICAgcHJvdmlkZXI6IFwiR2lzY3VzXCIsXG4gICAgICByZXBvOiBcIldMMk8yTy9DU19HVUlERVJfR2lzY3VzXCIsXG4gICAgICByZXBvSWQ6IFwiUl9rZ0RPSllkVFF3XCIsXG4gICAgICBjYXRlZ29yeTogXCJBbm5vdW5jZW1lbnRzXCIsXG4gICAgICBjYXRlZ29yeUlkOiBcIkRJQ19rd0RPSllkVFE4NENXS0M2XCJcbiAgICB9LFxuICAgIC8vIFByb2dyZXNzaXZlIFdlYiBhcHBcdUZGMENcdTUzNzNcdTZFMTBcdThGREJcdTVGMEZcdTdGNTFcdTdFRENcdTVFOTRcdTc1MjhcdTdBMEJcdTVFOEZcdUZGMENcbiAgICAvLyBcdTUxNDFcdThCQjhcdTdGNTFcdTdBRDlcdTkwMUFcdThGQzdcdTY1MkZcdTYzMDFcdThCRTVcdTcyNzlcdTYwMjdcdTc2ODRcdTZENEZcdTg5QzhcdTU2NjhcdTVDMDZcdTdGNTFcdTdBRDlcdTRGNUNcdTRFM0EgQXBwIFx1NUI4OVx1ODhDNVx1NTcyOFx1NUJGOVx1NUU5NFx1NUU3M1x1NTNGMFx1NEUwQVx1MzAwMlxuICAgIHB3YToge1xuICAgICAgLy8gZmF2aWNvbi5pY29cdTRFMDBcdTgyMkNcdTc1MjhcdTRFOEVcdTRGNUNcdTRFM0FcdTdGMjlcdTc1NjVcdTc2ODRcdTdGNTFcdTdBRDlcdTY4MDdcdTVGRDcsXHU1QjgzXHU2NjNFXHU3OTNBXHU0RjREXHU0RThFXHU2RDRGXHU4OUM4XHU1NjY4XHU3Njg0XHU1NzMwXHU1NzQwXHU2ODBGXHU2MjE2XHU4MDA1XHU1NzI4XHU2ODA3XHU3QjdFXHU0RTBBLFx1NzUyOFx1NEU4RVx1NjYzRVx1NzkzQVx1N0Y1MVx1N0FEOVx1NzY4NGxvZ28sXG4gICAgICBmYXZpY29uOiBcImh0dHA6Ly9pbWFnZXMucmwwMjA2LmxvdmUvMjAyMzA0MjIxMzI5MDgzLmljb1wiLFxuICAgICAgbWF4U2l6ZTogMzA3MixcbiAgICAgIGFwcGxlOiB7XG4gICAgICAgIGljb246IFwiL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXR1c0JhckNvbG9yOiBcImJsYWNrXCIsXG4gICAgICB9LFxuICAgICAgbXNUaWxlOiB7XG4gICAgICAgIGltYWdlOiBcIi9sb2dvLnBuZ1wiLFxuICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICB9LFxuICAgICAgbWFuaWZlc3Q6IHtcbiAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2xvZ28ucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIi9sb2dvLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvbG9nby5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2xvZ28ucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgXG4gICAgLy8gXHU4QkU1XHU2M0QyXHU0RUY2XHU0RjFBXHU3NkQxXHU1NDJDXHU5ODc1XHU5NzYyXHU2RURBXHU1MkE4XHU0RThCXHU0RUY2XHUzMDAyXHU1RjUzXHU5ODc1XHU5NzYyXHU2RURBXHU1MkE4XHU4MUYzXHU2N0QwXHU0RTJBIFx1NjgwN1x1OTg5OFx1OTUxQVx1NzBCOSBcdTU0MEVcdUZGMENcdTU5ODJcdTY3OUNcdTVCNThcdTU3MjhcdTVCRjlcdTVFOTRcdTc2ODQgXHU2ODA3XHU5ODk4XHU5NEZFXHU2M0E1IFx1RkYwQ1x1OTBBM1x1NEU0OFx1OEJFNVx1NjNEMlx1NEVGNlx1NEYxQVx1NUMwNlx1OERFRlx1NzUzMSBIYXNoIFx1NjZGNFx1NjUzOVx1NEUzQVx1OEJFNSBcdTY4MDdcdTk4OThcdTk1MUFcdTcwQjkgXHUzMDAyXG4gICAgYWN0aXZlSGVhZGVyTGlua3M6IHRydWUsXG5cbiAgICBtZEVuaGFuY2U6IHtcbiAgICAgIC8vIFx1NkRGQlx1NTJBMFx1OTAwOVx1OTg3OVx1NTM2MVx1NjUyRlx1NjMwMVxuICAgICAgdGFiczogdHJ1ZSxcbiAgICAgIC8vIFx1NkQ0MVx1N0EwQlx1NTZGRVxuICAgICAgbWVybWFpZDogdHJ1ZSxcbiAgICAgIC8vIFx1NjUyRlx1NjMwMVx1NEVGQlx1NTJBMVx1NTIxN1x1ODg2OFxuICAgICAgdGFza2xpc3Q6IHRydWUsXG5cbiAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NTZGRVx1NzI0N1x1NjFEMlx1NTJBMFx1OEY3RFxuICAgICAgaW1nTGF6eWxvYWQ6IHRydWUsXG4gICAgICAvLyBcdTU0MkZcdTc1MjhcdTU2RkVcdTcyNDdcdTY4MDdcdThCQjBcbiAgICAgIGltZ01hcms6IHRydWUsXG4gICAgICAvLyBcdTU0MkZcdTc1MjhcdTU2RkVcdTcyNDdcdTU5MjdcdTVDMEZcbiAgICAgIGltZ1NpemU6IHRydWUsXG5cbiAgICAgIC8vIFRPRE86IFx1NTQwRVx1N0VFRFx1NTkwNFx1NzQwNiAyMDIzLzQvMjFcdTVERjJcdTg5RTNcdTUxQjNcbiAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NTZGRVx1NzI0N1x1NjgwN1x1OTg5OFxuICAgICAgZmlndXJlOiB0cnVlLFxuXG4gICAgICAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTVCRjlcdTlGNTBcbiAgICAgIGFsaWduOiB0cnVlLFxuXG4gICAgICAvLyBcdTY1MkZcdTYzMDFcdTVFN0JcdTcwNkZcdTcyNDdcbiAgICAgIHByZXNlbnRhdGlvbjogdHJ1ZSxcblxuICAgICAgLy8gXHU5NEZFXHU2M0E1XHU2OEMwXHU2N0U1XG4gICAgICBsaW5rQ2hlY2s6IFwiYWx3YXlzXCIsXG5cbiAgICAgIC8vIFx1NEY2MFx1NzY4NCBNYXJrZG93biBcdTg4NENcdTRFM0FcdTRFMEUgR2l0SHViIFx1NEZERFx1NjMwMVx1NEUwMFx1ODFGNFxuICAgICAgZ2ZtOiB0cnVlLFxuICAgIH0sXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTovQ1NfR1VJREVSL2RvY3Mvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcQ1NfR1VJREVSXFxcXGRvY3NcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxuYXZiYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L0NTX0dVSURFUi9kb2NzL3NyYy8udnVlcHJlc3MvbmF2YmFyLnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5hdmJhcihbXHJcbiAgeyBcclxuICAgIHRleHQ6IFwiXHU1MzVBXHU1QkEyXCIsXHJcbiAgICBpY29uOiBcImhvbWVcIixcclxuICAgIGxpbms6IFwiL2Jsb2cubWRcIiBcclxuICB9LFxyXG4gIHsgXHJcbiAgICB0ZXh0OiBcIkNTXHU0RTRCXHU4REVGXCIsIFxyXG4gICAgaWNvbjogXCJicmFuY2hcIiwgXHJcbiAgICBsaW5rOiBcIi9jb2xsZWN0aW9uL1wiLFxyXG4gICAgLy8gXHU1RjAwXHU1NDJGXHU1QjUwXHU1QkZDXHU4MjJBXHU2ODBGXHU3Njg0XHU4QkVEXHU1M0U1XHVGRjFBXHJcbiAgICAvLyBjaGlsZHJlbjogW1widHV0b3JpYWwvXCIsIFwibWFya2Rvd24vXCIsIFwidnVlcHJlc3MvXCIsIFwiY3VzdG9taXplL1wiXSxcclxuICB9LFxyXG4gIHsgXHJcbiAgICB0ZXh0OiBcIlx1NzdFNVx1OEJDNlx1NjYxRlx1NzQwM1wiLCBcclxuICAgIGljb246IFwiZGlzY292ZXJcIiwgXHJcbiAgICBsaW5rOiBcIi96aGlzaGl4aW5ncWl1L1wiIFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogXCJDU1x1ODlDNFx1NTIxMlwiLFxyXG4gICAgaWNvbjogXCJndWlkZVwiLFxyXG4gICAgbGluazogXCIvZ3VpZGVyL1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIlx1NUI5RFx1ODVDRlx1OEQ0NFx1NkU5MFwiLFxyXG4gICAgaWNvbjogXCJsaWtlXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJQREZcdTU5MjlcdTU4MDJcIiwgXHJcbiAgICAgICAgaWNvbjogXCJqYXZhXCIsIFxyXG4gICAgICAgIGxpbms6IFwiL3BkZi9SRUFETUUubWRcIiBcclxuICAgICAgfSxcclxuICAgICAgeyBcclxuICAgICAgICB0ZXh0OiBcIkFQUFx1NjU3NFx1NTQwOFwiLCBcclxuICAgICAgICBpY29uOiBcImhvdFwiLCBcclxuICAgICAgICBsaW5rOiBcIi9hcHAvUkVBRE1FLm1kXCIgXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogXCJIZXhvXHU1MzVBXHU1QkEyXCIsXHJcbiAgICBpY29uOiBcImhlYWRpbmdcIiwgXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcmwwMjA2LmxvdmVcIlxyXG4gIH0sXHJcbl0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6L0NTX0dVSURFUi9kb2NzL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXENTX0dVSURFUlxcXFxkb2NzXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovQ1NfR1VJREVSL2RvY3Mvc3JjLy52dWVwcmVzcy9zaWRlYmFyLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcbmV4cG9ydCBjb25zdCBzaWRlYmFyQ29uZmlnID0gc2lkZWJhcih7XHJcbiAgXCIvZ3VpZGVyL1wiOiBbXHJcbiAgICBcIlJFQURNRS5tZFwiLFxyXG4gICAgXCJqYXZhcm91dGVcIlxyXG4gIF0sXHJcbiAgXCIvemhpc2hpeGluZ3FpdS9cIjogW1xyXG4gICAgXCJyZWFkbWUubWRcIixcclxuICAgIFwibWFwXCIsXHJcbiAgICBcIm1heVwiLFxyXG4gICAgXCJqdW5lXCIsXHJcbiAgICBcImp1bHlcIixcclxuICAgIFwiYXVndXN0XCJcclxuICBdLFxyXG4gIFwiL2NhaW5pYW8vXCI6IFtcclxuICAgIFwicmVhZG1lLm1kXCIsXHJcbiAgICBcIlx1NEZFRVx1NEVEOVx1NTI0RFx1OEEwMFwiLFxyXG4gICAgXCJFZHVjb2RlclwiLFxyXG4gICAgXCJNeUxhbnFpYW9Ob3RlXCIsXHJcbiAgICBcImhlbGxvdnVlcHJlc3NcIixcclxuICAgIFwiTGludXhcIixcclxuICAgIFwiamF2YWVzc2F5XCJcclxuICBdLFxyXG4gIFwiL2ppZXlvdS9cIjogW1xyXG4gICAgXCJyZWFkbWUubWRcIixcclxuICAgIFwiaW50cm9cIlxyXG4gIF0sXHJcbiAgXCIvcmVkaXMvXCI6W1xyXG4gICAgXCJyZWFkbWUubWRcIixcclxuICAgIFwiUmVkaXNcIlxyXG4gIF0sXHJcbiAgXCIvbWlhbnNoaS9cIjpbXHJcbiAgICBcInJlYWRtZS5tZFwiLFxyXG4gICAgXCJcdTYwMURcdTdFRjRcdTVCRkNcdTU2RkVcIlxyXG4gIF0sXHJcbiAgXCIvY29sbGVjdGlvbi9cIjpbXHJcbiAgICBcIlJFQURNRS5tZFwiLFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlx1OTg3OVx1NzZFRVx1NUI5RVx1NjRDRFx1N0IxNFx1OEJCMFwiLFxyXG4gICAgICBwcmVmaXg6IFwicHJvamVjdC9cIixcclxuICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgXCJzaGFuZ3lpdG9uZ1wiLFxyXG4gICAgICAgIFwiYmlsaWJpbGlcIixcclxuICAgICAgICBcIlNTTVwiLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIFwiL3N1YW5mYS9cIjogW1xyXG4gICAgICBcIlJFQURNRS5tZFwiLFxyXG4gICAgICBcIjAwMS5cdTRFMjRcdTY1NzBcdTRFNEJcdTU0OEMubWRcIixcclxuICAgICAgXCIwMjYuXHU1MjIwXHU5NjY0XHU2NzA5XHU1RThGXHU2NTcwXHU3RUM0XHU0RTJEXHU3Njg0XHU5MUNEXHU1OTBEXHU5ODc5Lm1kXCIsXHJcbiAgXSxcclxuICBcIi9wZGYvXCI6IFtcclxuICAgIFwiUkVBRE1FLm1kXCIsXHJcbiAgXSxcclxuICBcIi94dWV4aWx1eGlhbi9cIjogW1xyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIkphdmFcdTVCNjZcdTRFNjBcdThERUZcdTdFQkZcIixcclxuICAgICAgcHJlZml4OiBcImphdmEvXCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIFwieWl0aWFvbG9uZ1wiLFxyXG4gICAgICAgIFwidGhyZWFkXCIsXHJcbiAgICAgICAgXCJqdm1cIixcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBcImNcIixcclxuICAgIFwiY2NjXCIsXHJcbiAgICBcInB5dGhvblwiLFxyXG4gICAgXCJnb1wiLFxyXG4gICAgXCJvc1wiLFxyXG4gICAgXCJxaWFuZHVhblwiLFxyXG4gICAgXCJhbGdvcml0aG1cIixcclxuICAgIFwibGFucWlhb2JlaVwiLFxyXG4gICAgXCJiaWdkYXRhXCIsXHJcbiAgICBcImFuZHJvaWRcIixcclxuICAgIFwibXlzcWxcIixcclxuICAgIFwiZG9uZXRcIixcclxuICBdLFxyXG4gIFwiL3NpZGViYXIvc2FuZmVuZS9cIjogW1xyXG4gICAgXCJuaXhpXCIsXHJcbiAgICBcImphdmFzZVwiLFxyXG4gICAgXCJjb2xsZWN0aW9uXCIsXHJcbiAgICBcImphdmF0aHJlYWRcIixcclxuICAgIFwianZtXCIsXHJcbiAgICBcInNwcmluZ1wiLFxyXG4gICAgXCJyZWRpc1wiLFxyXG4gICAgXCJteWJhdGlzXCIsXHJcbiAgICBcIm15c3FsXCIsXHJcbiAgICBcIm9zXCIsXHJcbiAgICBcIm5ldHdvcmtcIixcclxuICAgIFwicm9ja2V0bXFcIixcclxuICBdLFxyXG4gIC8vIFx1NUZDNVx1OTg3Qlx1NjUzRVx1NTcyOFx1NjcwMFx1NTQwRVx1OTc2MlxyXG4gIFwiL1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiXHU0RTAwXHUzMDAxXHU1MjREXHU4QTAwXCIsXHJcbiAgICAgIGxpbms6IFwiaG9tZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJcdTRFOENcdTMwMDFKYXZhXHU2ODM4XHU1RkMzXCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByZWZpeDogXCJvdmVydmlldy9cIixcclxuICAgICAgICAgIHRleHQ6IFwiMi4xIEphdmFcdTY5ODJcdThGRjBcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIFwid2hhdC1pcy1qYXZhXCIsXHJcbiAgICAgICAgICBcImphdmEtaGlzdG9yeVwiLFxyXG4gICAgICAgICAgXCJqYXZhLWNhbi1kby13aGF0XCIsXHJcbiAgICAgICAgICBcImpkay1pbnN0YWxsLWNvbmZpZ1wiLFxyXG4gICAgICAgICAgXCJJREVBLWluc3RhbGwtY29uZmlnXCIsXHJcbiAgICAgICAgICBcImhlbGxvLXdvcmxkXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCIyLjIgSmF2YVx1OEJFRFx1NkNENVx1NTdGQVx1Nzg0MFwiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgXCJiYXNpYy1leHRyYS1tZWFsLzQ4LWtleXdvcmRzXCIsXHJcbiAgICAgICAgICBcImJhc2ljLWV4dHJhLW1lYWwvamF2YS1uYW1pbmdcIixcclxuICAgICAgICAgIFwiYmFzaWMtZ3JhbW1hci9qYXZhZG9jXCIsXHJcbiAgICAgICAgICBcImJhc2ljLWdyYW1tYXIvYmFzaWMtZGF0YS10eXBlXCIsXHJcbiAgICAgICAgICBcImJhc2ljLWdyYW1tYXIvdHlwZS1jYXN0XCIsXHJcbiAgICAgICAgICBcImJhc2ljLWdyYW1tYXIvb3BlcmF0b3JcIixcclxuICAgICAgICAgIFwiYmFzaWMtZ3JhbW1hci9mbG93LWNvbnRyb2xcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIjIuMyBcdTY1NzBcdTdFQzQmXHU1QjU3XHU3QjI2XHU0RTMyXCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICBcImFycmF5L2FycmF5XCIsXHJcbiAgICAgICAgICBcImFycmF5L3ByaW50XCIsXHJcbiAgICAgICAgICBcInN0cmluZy9pbW11dGFibGVcIixcclxuICAgICAgICAgIFwic3RyaW5nL2NvbnN0YW50LXBvb2xcIixcclxuICAgICAgICAgIFwic3RyaW5nL2ludGVyblwiLFxyXG4gICAgICAgICAgXCJzdHJpbmcvZXF1YWxzXCIsXHJcbiAgICAgICAgICBcInN0cmluZy9qb2luXCIsXHJcbiAgICAgICAgICBcInN0cmluZy9zcGxpdFwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiMi40IFx1OTc2Mlx1NTQxMVx1NUJGOVx1OEM2MVx1N0YxNlx1N0EwQlwiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgXCJvby9vYmplY3QtY2xhc3NcIixcclxuICAgICAgICAgIFwib28vcGFja2FnZVwiLFxyXG4gICAgICAgICAgXCJvby92YXJcIixcclxuICAgICAgICAgIFwib28vbWV0aG9kXCIsXHJcbiAgICAgICAgICBcIm9vL2NvbnN0cnVjdFwiLFxyXG4gICAgICAgICAgXCJvby9hY2Nlc3MtY29udHJvbFwiLFxyXG4gICAgICAgICAgXCJvby9jb2RlLWluaXRcIixcclxuICAgICAgICAgIFwib28vYWJzdHJhY3RcIixcclxuICAgICAgICAgIFwib28vaW50ZXJmYWNlXCIsXHJcbiAgICAgICAgICBcIm9vL2Fic3RyYWN0LXZzLWludGVyZmFjZVwiLFxyXG4gICAgICAgICAgXCJvby9pbm5lci1jbGFzc1wiLFxyXG4gICAgICAgICAgXCJvby90aGlzLXN1cGVyXCIsXHJcbiAgICAgICAgICBcImJhc2ljLWV4dHJhLW1lYWwvb3ZlcnJpZGUtb3ZlcmxvYWRcIixcclxuICAgICAgICAgIFwib28vc3RhdGljXCIsXHJcbiAgICAgICAgICBcIm9vL2ZpbmFsXCIsXHJcbiAgICAgICAgICBcIm9vL2VuY2Fwc3VsYXRpb25cIixcclxuICAgICAgICAgIFwib28vZXh0ZW5kcy1iaWdzYWlcIixcclxuICAgICAgICAgIFwib28vcG9seW1vcnBoaXNtXCIsXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIjIuNSBcdTk2QzZcdTU0MDhcdTY4NDZcdTY3QjZcdUZGMDhcdTVCQjlcdTU2NjhcdUZGMDlcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXCJjb2xsZWN0aW9uL2dhaWxhblwiLFxyXG4gICAgICAgICAgXCJjb2xsZWN0aW9uL2FycmF5bGlzdFwiLFxyXG4gICAgICAgICAgXCJjb2xsZWN0aW9uL2xpbmtlZGxpc3RcIixcclxuICAgICAgICAgIFwiY29sbGVjdGlvbi9saXN0LXdhci0yXCIsXHJcbiAgICAgICAgICBcImNvbGxlY3Rpb24vaXRlcmF0b3ItaXRlcmFibGVcIixcclxuICAgICAgICAgIFwiY29sbGVjdGlvbi9mYWlsLWZhc3RcIixcclxuICAgICAgICAgIFwiY29sbGVjdGlvbi9oYXNobWFwXCIsXHJcbiAgICAgICAgICBcImNvbGxlY3Rpb24vbGlua2VkaGFzaG1hcFwiLFxyXG4gICAgICAgICAgXCJjb2xsZWN0aW9uL3RyZWVtYXBcIixcclxuICAgICAgICAgIFwiY29sbGVjdGlvbi9hcnJheWRlcXVlXCIsXHJcbiAgICAgICAgICBcImNvbGxlY3Rpb24vUHJpb3JpdHlRdWV1ZVwiLFxyXG4gICAgICAgICAgXCJjb2xsZWN0aW9uL1dlYWtIYXNoTWFwXCIsXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiMi42IElPXCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHByZWZpeDpcImlvL1wiLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIFwic2hhbmd0b3VcIixcclxuICAgICAgICAgIFwiZmlsZS1wYXRoXCIsXHJcbiAgICAgICAgICBcInN0cmVhbVwiLFxyXG4gICAgICAgICAgXCJyZWFkZXItd3JpdGVyXCIsXHJcbiAgICAgICAgICBcImJ1ZmZlclwiLFxyXG4gICAgICAgICAgXCJjaGFyLWJ5dGVcIixcclxuICAgICAgICAgIFwic2VyaWFsaXplXCIsXHJcbiAgICAgICAgICBcIlNlcmlhbGl6YmFsZVwiLFxyXG4gICAgICAgICAgXCJ0cmFuc2llbnRcIixcclxuICAgICAgICAgIFwicHJpbnRcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIjIuNyBcdTVGMDJcdTVFMzhcdTU5MDRcdTc0MDZcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgcHJlZml4OlwiZXhjZXB0aW9uL1wiLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIFwiZ2FpbGFuXCIsXHJcbiAgICAgICAgICBcInRyeS13aXRoLXJlc291Y2VzXCIsXHJcbiAgICAgICAgICBcInNoaWppYW5cIixcclxuICAgICAgICAgIFwibnBlXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCIyLjggXHU1RTM4XHU3NTI4XHU1REU1XHU1MTc3XHU3QzdCXCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHByZWZpeDpcImNvbW1vbi10b29sL1wiLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIFwiYXJyYXlzXCIsXHJcbiAgICAgICAgICBcImNvbGxlY3Rpb25zXCIsXHJcbiAgICAgICAgICBcImh1dG9vbFwiLFxyXG4gICAgICAgICAgXCJndWF2YVwiLFxyXG4gICAgICAgICAgXCJ1dGlsc1wiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiMi45IEphdmFcdTY1QjBcdTcyNzlcdTYwMjdcIixcclxuICAgICAgICAgIHByZWZpeDogXCJqYXZhOC9cIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIFwic3RyZWFtXCIsXHJcbiAgICAgICAgICBcIm9wdGlvbmFsXCIsXHJcbiAgICAgICAgICBcIkxhbWJkYVwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiMi4xMCBKYXZhXHU5MUNEXHU4OTgxXHU3N0U1XHU4QkM2XHU3MEI5XCIsXHJcbiAgICAgICAgICBwcmVmaXg6XCJiYXNpYy1leHRyYS1tZWFsL1wiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgXCJqYXZhLXVuaWNvZGVcIixcclxuICAgICAgICAgIFwiaW50LWNhY2hlXCIsXHJcbiAgICAgICAgICBcImJveFwiLFxyXG4gICAgICAgICAgXCJkZWVwLWNvcHlcIixcclxuICAgICAgICAgIFwiaGFzaGNvZGVcIixcclxuICAgICAgICAgIFwiZXF1YWxzLWhhc2hjb2RlXCIsXHJcbiAgICAgICAgICBcIk92ZXJyaWRpbmdcIixcclxuICAgICAgICAgIFwicGFzcy1ieS12YWx1ZVwiLFxyXG4gICAgICAgICAgXCJjb21wYXJhYmxlLW9tcGFyYXRvclwiLFxyXG4gICAgICAgICAgXCJqZGs5LWNoYXItYnl0ZS1zdHJpbmdcIixcclxuICAgICAgICAgIFwiamRrLXdoaWxlLWZvci13dXhpYW4teHVuaHVhblwiLFxyXG4gICAgICAgICAgXCJjbGFzcy1vYmplY3RcIixcclxuICAgICAgICAgIFwiaW5zdGFuY2VvZlwiLFxyXG4gICAgICAgICAgXCJpbnN0YW5jZW9mLWp2bVwiLFxyXG4gICAgICAgICAgXCJpbW11dGFibGVcIixcclxuICAgICAgICAgIFwidmFyYWJsZXNcIixcclxuICAgICAgICAgIFwiZ2VuZXJpY1wiLFxyXG4gICAgICAgICAgXCJ0cnVlLWdlbmVyaWNcIixcclxuICAgICAgICAgIFwiYW5ub3RhdGlvblwiLFxyXG4gICAgICAgICAgXCJlbnVtXCIsXHJcbiAgICAgICAgICBcImZhbnNoZVwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiMi4xMSBcdTdGNTFcdTdFRENcdTdGMTZcdTdBMEJcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgcHJlZml4OiBcInNvY2tldC9cIixcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwic29ja2V0XCIsXHJcbiAgICAgICAgICAgIFwiaHR0cFwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiMi4xMiBOSU9cIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgcHJlZml4OiBcIm5pby9cIixcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwid2h5XCIsXHJcbiAgICAgICAgICAgIFwicnVtZW5cIixcclxuICAgICAgICAgICAgXCJtb3hpbmdcIixcclxuICAgICAgICAgICAgXCJuZXR3b3JrLWNvbm5lY3RcIixcclxuICAgICAgICAgICAgXCJCSU9OSU9BSU9cIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIjIuMTMgXHU1RTc2XHU1M0QxXHU3RjE2XHU3QTBCXCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHByZWZpeDogXCJ0aHJlYWQvXCIsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgXCJ3YW5nemhlLXRocmVhZFwiLFxyXG4gICAgICAgICAgXCJ0aHJlYWQtc3RhdGUtYW5kLW1ldGhvZFwiLFxyXG4gICAgICAgICAgXCJ0aHJlYWQtZ3JvdXAtYW5kLXRocmVhZC1wcmlvcml0eVwiLFxyXG4gICAgICAgICAgXCJ3aHktbmVlZC10aHJlYWRcIixcclxuICAgICAgICAgIFwidGhyZWFkLWJyaW5nLXNvbWUtcHJvYmxlbVwiLFxyXG4gICAgICAgICAgXCJqbW1cIixcclxuICAgICAgICAgIFwidm9sYXRpbGVcIixcclxuICAgICAgICAgIFwic3luY2hyb25pemVkLTFcIixcclxuICAgICAgICAgIFwic3luY2hyb25pemVkXCIsXHJcbiAgICAgICAgICBcImNhc1wiLFxyXG4gICAgICAgICAgXCJhcXNcIixcclxuICAgICAgICAgIFwibG9ja1wiLFxyXG4gICAgICAgICAgXCJzdW9cIixcclxuICAgICAgICAgIFwicGlhbnhpYW5nc3VvXCIsXHJcbiAgICAgICAgICBcInJlZW50cmFudExvY2tcIixcclxuICAgICAgICAgIFwiUmVlbnRyYW50UmVhZFdyaXRlTG9ja1wiLFxyXG4gICAgICAgICAgXCJjb25kaXRpb25cIixcclxuICAgICAgICAgIFwiTG9ja1N1cHBvcnRcIixcclxuICAgICAgICAgIFwibWFwXCIsXHJcbiAgICAgICAgICBcIkNvbmN1cnJlbnRIYXNoTWFwXCIsXHJcbiAgICAgICAgICBcIkNvbmN1cnJlbnRMaW5rZWRRdWV1ZVwiLFxyXG4gICAgICAgICAgXCJDb3B5T25Xcml0ZUFycmF5TGlzdFwiLFxyXG4gICAgICAgICAgXCJUaHJlYWRMb2NhbFwiLFxyXG4gICAgICAgICAgXCJCbG9ja2luZ1F1ZXVlXCIsXHJcbiAgICAgICAgICBcInBvb2xcIixcclxuICAgICAgICAgIFwiU2NoZWR1bGVkVGhyZWFkUG9vbEV4ZWN1dG9yXCIsXHJcbiAgICAgICAgICBcImF0b21pY1wiLFxyXG4gICAgICAgICAgXCJDb3VudERvd25MYXRjaFwiLFxyXG4gICAgICAgICAgXCJmb3JrLWpvaW5cIixcclxuICAgICAgICAgIFwic2hlbmdjaGFuemhlLXhpYW9mZWl6aGVcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIjIuMTQgSlZNXCIsXHJcbiAgICAgICAgICBwcmVmaXg6IFwianZtL1wiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgXCJ3aGF0LWlzLWp2bVwiLFxyXG4gICAgICAgICAgXCJob3ctcnVuLWphdmEtY29kZVwiLFxyXG4gICAgICAgICAgXCJjbGFzcy1sb2FkXCIsXHJcbiAgICAgICAgICBcImNsYXNzLWZpbGUtamllZ291XCIsXHJcbiAgICAgICAgICBcImJ5dGVjb2RlXCIsXHJcbiAgICAgICAgICBcInppamllbWEtemhpbGluZ1wiLFxyXG4gICAgICAgICAgXCJob3ctanZtLXJ1bi16aWppZW1hLXpoaWxpbmdcIixcclxuICAgICAgICAgIFwiaHNkYlwiLFxyXG4gICAgICAgICAgXCJhc21cIixcclxuICAgICAgICAgIFwiY29tcGlsZS1qZGtcIixcclxuICAgICAgICAgIFwibmVpY3VuLWppZWdvdVwiLFxyXG4gICAgICAgICAgXCJ3aGVyZWlzLXRoZS1vYmplY3RcIixcclxuICAgICAgICAgIFwiZ2NcIixcclxuICAgICAgICAgIFwidHVqaWUtZ2NcIixcclxuICAgICAgICAgIFwibWVpdHVhbi05LWdjXCIsXHJcbiAgICAgICAgICBcInByb2JsZW0tdG9vbHNcIixcclxuICAgICAgICAgIFwiaml0XCIsXHJcbiAgICAgICAgICBcIm9vbVwiLFxyXG4gICAgICAgICAgXCJjcHUtcGVyY2VudC0xMDBcIixcclxuICAgICAgICAgIFwiem9uZ2ppZVwiLFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlx1NEUwOVx1MzAwMUphdmFcdTRGMDFcdTRFMUFcdTdFQTdcdTVGMDBcdTUzRDFcIixcclxuICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCIzLjEgXHU1RjAwXHU1M0QxL1x1Njc4NFx1NUVGQVx1NURFNVx1NTE3N1wiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCIzLjEuMSBOZ2lueFwiLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICBcIm5naW54L25naW54XCIsXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiMy4xLjIgSURFXCIsXHJcbiAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICBcImlkZS80LWRlYnVnLXNraWxsXCIsXHJcbiAgICAgICAgICAgICAgXCJpZGUveGVjaGF0XCIsXHJcbiAgICAgICAgICAgICAgXCJpZGUvc2hlbmppLWNoYWppYW4tMTBcIixcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCIzLjEuMyBNYXZlblwiLFxyXG4gICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgXCJtYXZlbi9tYXZlblwiLFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIjMuMS40IEdpdFwiLFxyXG4gICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgXCJnaXQvZ2l0LXFpeXVhblwiLFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCIzLjMgU3ByaW5nXCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlNwcmluZyBBT1BcdTYyNkJcdTc2RjJcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcInNwcmluZ2Jvb3QvYW9wLWxvZ1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJTcHJpbmcgSW9DXHU2MjZCXHU3NkYyXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJzcHJpbmdib290L2lvY1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiMy40IFNwcmluZ0Jvb3RcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU2NDJEXHU1RUZBXHU3QjJDXHU0RTAwXHU0RTJBU3ByaW5nIEJvb3RcdTk4NzlcdTc2RUVcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcInNwcmluZ2Jvb3QvaW5pdGlhbGl6clwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTY1NzRcdTU0MDhNeVNRTFx1NTQ4Q0RydWlkXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJzcHJpbmdib290L215c3FsLWRydWlkXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlx1NjU3NFx1NTQwOEpQQVwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwic3ByaW5nYm9vdC9qcGFcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU2NTc0XHU1NDA4VGh5bWVsZWFmXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJzcHJpbmdib290L3RoeW1lbGVhZlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTVGMDBcdTU0MkZcdTRFOEJcdTUyQTFcdTY1MkZcdTYzMDFcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcInNwcmluZ2Jvb3QvdHJhbnNhY3Rpb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU4RkM3XHU2RUU0XHU1NjY4XHUzMDAxXHU2MkU2XHU2MjJBXHU1NjY4XHUzMDAxXHU3NkQxXHU1NDJDXHU1NjY4XCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJzcHJpbmdib290L0ZpbHRlci1JbnRlcmNlcHRvci1MaXN0ZW5lclwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTY1NzRcdTU0MDhSZWRpc1x1NUI5RVx1NzNCMFx1N0YxM1x1NUI1OFwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwicmVkaXMvcmVkaXMtc3ByaW5nYm9vdFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTY1NzRcdTU0MDhMb2diYWNrXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJzcHJpbmdib290L2xvZ2JhY2tcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTY1NzRcdTU0MDhTd2FnZ2VyLVVJXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJzcHJpbmdib290L3N3YWdnZXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTY1NzRcdTU0MDhLbmlmZTRqXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJnb25nanUva25pZmU0alwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlx1NjU3NFx1NTQwOFNwcmluZ1Rhc2tcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcInNwcmluZ2Jvb3Qvc3ByaW5ndGFza1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlx1NjU3NFx1NTQwOE15QmF0aXMtUGx1cyBBdXRvR2VuZXJhdG9yXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJrYWl5dWFuL2F1dG8tZ2VuZXJhdG9yXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic3ByaW5nYm9vdC9xdWFydHpcIixcclxuICAgICAgICAgICAgXCJzcHJpbmdib290L215YmF0aXNcIixcclxuICAgICAgICAgICAgXCJzcHJpbmdib290L2RvY2tlclwiLFxyXG4gICAgICAgICAgICBcInNwcmluZ2Jvb3QvbWFjb3MtY29kaW5nbW9yZS1ydW5cIixcclxuICAgICAgICAgICAgXCJzcHJpbmdib290L3dpbmRvd3MtY29kaW5nbW9yZS1ydW5cIixcclxuICAgICAgICAgICAgXCJzcHJpbmdib290L2xpbnV4LWNvZGluZ21vcmUtcnVuXCIsXHJcbiAgICAgICAgICAgIFwic3ByaW5nYm9vdC92YWxpZGF0b3JcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIjMuNSBOZXR0eVwiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIm5ldHR5L3J1bWVuXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCIzLjYgXHU4Rjg1XHU1MkE5XHU1REU1XHU1MTc3XCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwiZ29uZ2p1L2Nob2NvXCIsXHJcbiAgICAgICAgICAgIFwiZ29uZ2p1L2JyZXdcIixcclxuICAgICAgICAgICAgXCJnb25nanUvdGFiYnlcIixcclxuICAgICAgICAgICAgXCJnb25nanUvd2FycFwiLFxyXG4gICAgICAgICAgICBcImdvbmdqdS93aW5kdGVybVwiLFxyXG4gICAgICAgICAgICBcImdvbmdqdS9jaGluZXJcIixcclxuICAgICAgICAgICAgXCJnb25nanUvREJlYXZlclwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiMy43IFx1NUYwMFx1NkU5MFx1OEY2RVx1NUI1MFwiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJIVFRQXHU4QzAzXHU3NTI4XHU2ODQ2XHU2N0I2Rm9yZXN0XCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJnb25nanUvZm9yZXN0XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlx1NTM1NVx1NTE0M1x1NkQ0Qlx1OEJENUp1bml0XCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJnb25nanUvanVuaXRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU5NjNGXHU5MUNDXHU1RjAwXHU2RTkwXHU3Njg0ZmFzdGpzb25cIixcclxuICAgICAgICAgICAgICBsaW5rOiBcImdvbmdqdS9mYXN0anNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdThDMzdcdTZCNENcdTVGMDBcdTZFOTBcdTc2ODRHc29uXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJnb25nanUvZ3NvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJTcHJpbmdCb290XHU1MTg1XHU3RjZFXHU3Njg0SmFja3NvblwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwiZ29uZ2p1L2phY2tzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU2NUU1XHU1RkQ3XHU2ODQ2XHU2N0I2XHU3Njg0XHU5RjNCXHU3OTU2TG9nNGpcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcImdvbmdqdS9sb2c0alwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTlBRDhcdTYwMjdcdTgwRkRcdTY1RTVcdTVGRDdcdTY4NDZcdTY3QjZMb2c0ajJcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcImdvbmdqdS9sb2c0ajJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiU3ByaW5nIEJvb3RcdTUxODVcdTdGNkVcdTc2ODRMb2diYWNrXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJnb25nanUvbG9nYmFja1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTY1RTVcdTVGRDdcdTk1RThcdTk3NjJTTEY0SlwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwiZ29uZ2p1L3NsZjRqXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiMy44IFx1NTIwNlx1NUUwM1x1NUYwRlwiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJFbGFzdGljc2VhcmNoXHU1MTY1XHU5NUU4XCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJlbGFzdGljc2VhcmNoL3J1bWVuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU4MDRBXHU4MDRBWm9vS2VlcGVyXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJ6b29rZWVwZXIvamliZW5qaWVzaGFvXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU4MDRBXHU4MDRBXHU1RkFFXHU2NzBEXHU1MkExXHU3RjUxXHU1MTczXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJtaWNyb3NlcnZpY2UvYXBpLXdhbmdndWFuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIjMuOSBcdTZEODhcdTYwNkZcdTk2MUZcdTUyMTdcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiUmFiYml0TVFcdTUxNjVcdTk1RThcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcIm1xL3JhYmJpdG1xLXJ1bWVuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU1OTgyXHU0RjU1XHU0RkREXHU5NjlDXHU2RDg4XHU2MDZGXHU0RTBEXHU0RTIyXHU1OTMxXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJtcS8xMDAtYnVkaXVzaGlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1xL2thZmthXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlx1NTZEQlx1MzAwMVx1NjU3MFx1NjM2RVx1NUU5M1wiLFxyXG4gICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIk15U1FMXCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIk15U1FMXHU1NDhDUmVkaXNcdTY1NzBcdTYzNkVcdTRFMDBcdTgxRjRcdTYwMjdcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcIm15c3FsL3JlZGlzLXNodWp1LXlpemhpeGluZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJSZWRpc1wiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJSZWRpc1x1NTE2NVx1OTVFOFwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwicmVkaXMvcnVtZW5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTdGMTNcdTVCNThcdTk2RUFcdTVEMjlcdTMwMDFcdTdBN0ZcdTkwMEZcdTMwMDFcdTUxRkJcdTdBN0ZcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcInJlZGlzL3h1ZWJlbmctY2h1YW50b3UtamljaHVhblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJNb25nb0RCXCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwibW9uZ29kYi9ydW1lblwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJcdTRFOTRcdTMwMDFcdThCQTFcdTdCOTdcdTY3M0FcdTU3RkFcdTc4NDBcIixcclxuICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgIHByZWZpeDogXCJjcy9cIixcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlx1OEJBMVx1N0I5N1x1NjczQVx1NjRDRFx1NEY1Q1x1N0NGQlx1N0VERlwiLFxyXG4gICAgICAgICAgbGluazogXCJvc1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJcdThCQTFcdTdCOTdcdTY3M0FcdTdGNTFcdTdFRENcIixcclxuICAgICAgICAgIGxpbms6IFwid2FuZ2x1b1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlx1NTE2RFx1MzAwMVx1NkM0Mlx1ODA0Q1x1OTc2Mlx1OEJENVwiLFxyXG4gICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlx1OTc2Mlx1OEJENVx1OTg5OCZcdTUxNkJcdTgwQTFcdTY1ODdcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgcHJlZml4OlwiaW50ZXJ2aWV3L1wiLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgXCJqYXZhLTM0XCIsXHJcbiAgICAgICAgICAgIFwiamF2YS1oYXNobWFwLTEzXCIsXHJcbiAgICAgICAgICAgIFwicmVkaXMtMTJcIixcclxuICAgICAgICAgICAgXCJteXNxbC02MFwiLFxyXG4gICAgICAgICAgICBcImR1YmJvLTE3XCIsXHJcbiAgICAgICAgICAgIFwiamF2YS1iYXNpYy1iYWd1d2VuXCIsXHJcbiAgICAgICAgICAgIFwiamF2YS10aHJlYWQtYmFndXdlblwiLFxyXG4gICAgICAgICAgICBcImphdmEtanZtLWJhZ3V3ZW5cIixcclxuICAgICAgICAgICAgXCJtaWFuc2hpZ3Vhbi1iaWdmaWxlLW1pYW9jaHVhblwiLFxyXG4gICAgICAgICAgICBcIm1pYW5zaGlndWFuLWZlbmt1ZmVuYmlhb1wiLFxyXG4gICAgICAgICAgICBcIm1pYW5zaGlndWFuLXlvdWh1aXF1YW5cIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlx1NEYxOFx1OEQyOFx1OTc2Mlx1N0VDRlwiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBwcmVmaXg6XCJtaWFuamluZy9cIixcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwic2hhbmdhbmFsaXl1blwiLFxyXG4gICAgICAgICAgICBcInNoZXp5bm1qZnhoZWxtdHR0amRkZFwiLFxyXG4gICAgICAgICAgICBcInh1ZWx5YmR6aGVsb2ZmZXJcIixcclxuICAgICAgICAgICAgXCJodWFueGd6bFwiLFxyXG4gICAgICAgICAgICBcInF1empsc3NwZHhcIixcclxuICAgICAgICAgICAgXCJ6aGVpc255bHpsZGh6ZFwiLFxyXG4gICAgICAgICAgICBcImNoZW5neHlzcG5oeGFnemxcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlx1OTc2Mlx1OEJENVx1NTFDNlx1NTkwN1wiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIm5pY2UtYXJ0aWNsZS93ZWl4aW4vemlqeGpqZHlmcXpnbFwiLFxyXG4gICAgICAgICAgICBcIm5pY2UtYXJ0aWNsZS93ZWl4aW4vbWlhbnNtdGdsXCIsXHJcbiAgICAgICAgICAgIFwibmljZS1hcnRpY2xlL3dlaXhpbi9sdW9jemJtc2RkeWJcIixcclxuICAgICAgICAgICAgXCJuaWNlLWFydGljbGUvd2VpeGluL3lvdWR4emhobWp6bHljZnhcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlx1NTdDRVx1NUUwMlx1OTAwOVx1NjJFOVwiLFxyXG4gICAgICAgICAgcHJlZml4OiBcImNpdHlzZWxlY3QvXCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwiYmVpamluZ1wiLFxyXG4gICAgICAgICAgICBcImNoZW5nZHVcIixcclxuICAgICAgICAgICAgXCJndWFuZ3pob3VcIixcclxuICAgICAgICAgICAgXCJoYW5nemhvdVwiLFxyXG4gICAgICAgICAgICBcIm5hbmppbmdcIixcclxuICAgICAgICAgICAgXCJxaW5nZGFvXCIsXHJcbiAgICAgICAgICAgIFwic2hlbnpoZW5cIixcclxuICAgICAgICAgICAgXCJzdXpob3VcIixcclxuICAgICAgICAgICAgXCJ4aWFuXCIsXHJcbiAgICAgICAgICAgIFwiemhlbmd6aG91XCIsXHJcbiAgICAgICAgICAgIFwiamluYW5cIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiXHU0RTAzXHUzMDAxXHU1QjY2XHU0RTYwXHU1RUZBXHU4QkFFXCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICBwcmVmaXg6IFwieHVleGlqaWFueWkvXCIsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICBcIkxlYXJuQ1MtQnlZb3Vyc2VsZlwiLFxyXG4gICAgICAgICAgXCJyZWFkLWNzYXBwXCIsXHJcbiAgICAgICAgICBcImVsZWN0cm9uLWluZm9ybWF0aW9uLWVuZ2luZWVyaW5nXCIsXHJcbiAgICAgICAgICBcImdhb2thby16aGl5dWFuLWNzXCIsXHJcbiAgICAgICAgICBcInRlc3QtcHJvZ3JhbW1lci1yZWFkLWJvb2tzXCIsXHJcbiAgICAgICAgICBcInhpYW96aGFvLWphdmEtc2hvdWxkLW1hc3RlclwiLFxyXG4gICAgICAgICAgXCJjaGVuZ3h1eXVhbi1mdXllXCIsXHJcbiAgICAgICAgICBcInJ1aHpmemRnenpjeGN6XCIsXHJcbiAgICAgICAgICBcImdhb2JpbmdmYS1qaW5neWFuLWhzbWNvbXB1dGVyXCIsXHJcbiAgICAgICAgICBcImhyLXhpbnppXCIsXHJcbiAgICAgICAgICBcIjM1LXdlaWppXCIsXHJcbiAgICAgICAgICBcIjIwcmVuLWl0LXF1bWFcIixcclxuICAgICAgICAgIFwiYmVua2VzaGVuZy1hbGktdGVuZ3h1blwiLFxyXG4gICAgICAgICAgXCI0MDhcIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJcdTUxNkJcdTMwMDFcdTc3RTVcdThCQzZcdTVFOTNcdTY0MkRcdTVFRkFcIixcclxuICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgIHByZWZpeDogXCJzemp5L1wiLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgXCJidXktY2xvdWQtc2VydmVyXCIsXHJcbiAgICAgICAgICBcImluc3RhbGwtYmFvdGEtbWlhbmJhblwiLFxyXG4gICAgICAgICAgXCJidXktZG9tYWluXCIsXHJcbiAgICAgICAgICBcInJlY29yZC1kb21haW5cIixcclxuICAgICAgICAgIFwiaHR0cHMtZG9tYWluXCIsXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiXHU0RTVEXHUzMDAxXHU4MDU0XHU3Q0ZCXHU0RjVDXHU4MDA1XCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICBwcmVmaXg6IFwiYWJvdXQtdGhlLWF1dGhvci9cIixcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICBcImJ6aGFuLTEwd2FuXCIsXHJcbiAgICAgICAgXCJ6aGlodS0xMDAwd2FuXCIsXHJcbiAgICAgICAgXCJjc2RuLTEwMDB3YW5cIixcclxuICAgICAgICBcInJlYWRtZS5tZFwiLFxyXG4gICAgICAgIFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG59KTtcclxuXHJcblxyXG5cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyUSxTQUFTLHVCQUF1QjtBQUMzUyxTQUFTLHdCQUF3Qjs7O0FDRHdPLFNBQVMsaUJBQWlCOzs7QUNBeEIsU0FBUyxjQUFjO0FBRWxTLElBQU8saUJBQVEsT0FBTztBQUFBLEVBQ3BCO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBO0FBQUEsRUFHUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsTUFDUjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOzs7QUM5QzRRLFNBQVMsZUFBZTtBQUM5UixJQUFNLGdCQUFnQixRQUFRO0FBQUEsRUFDbkMsWUFBWTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBQ0EsbUJBQW1CO0FBQUEsSUFDakI7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBVTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBQ0EsYUFBWTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBQ0EsZ0JBQWU7QUFBQSxJQUNiO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0o7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQO0FBQUEsRUFDRjtBQUFBLEVBQ0EsaUJBQWlCO0FBQUEsSUFDZjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBQ0EscUJBQXFCO0FBQUEsSUFDbkI7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUEsS0FBSztBQUFBLElBQ0g7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxVQUNFLFFBQVE7QUFBQSxVQUNSLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNWO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNWO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDVjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNWO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUVBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUVWO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUVBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFFBQU87QUFBQSxVQUNQLFVBQVU7QUFBQSxZQUNWO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixRQUFPO0FBQUEsVUFDUCxVQUFVO0FBQUEsWUFDVjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsUUFBTztBQUFBLFVBQ1AsVUFBVTtBQUFBLFlBQ1Y7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDVjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixRQUFPO0FBQUEsVUFDUCxhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDVjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixRQUFRO0FBQUEsVUFDUixVQUFVO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFFBQVE7QUFBQSxVQUNSLFVBQVU7QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsUUFBUTtBQUFBLFVBQ1IsVUFBVTtBQUFBLFlBQ1Y7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFVBQ1IsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1Y7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFFQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDUjtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sVUFBVTtBQUFBLGdCQUNSO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixhQUFhO0FBQUEsY0FDYixVQUFVO0FBQUEsZ0JBQ1Y7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixhQUFhO0FBQUEsY0FDYixVQUFVO0FBQUEsZ0JBQ1Y7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLGFBQWE7QUFBQSxjQUNiLFVBQVU7QUFBQSxnQkFDVjtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDUjtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFVBRUY7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDUjtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNSO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFFBQU87QUFBQSxVQUNQLFVBQVU7QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsUUFBTztBQUFBLFVBQ1AsVUFBVTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZ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
