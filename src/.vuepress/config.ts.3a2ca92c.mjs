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
    "java",
    "programmer-111",
    "java-concurrent",
    "github-java-jiaocheng-115-star",
    "shejimoshi",
    "java-leetcode",
    "ali-java-shouce",
    "yuanyifeng-c-language",
    "bat-shuati",
    "os",
    "progit",
    "jianli"
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
  hostname: "https://wlei224.gitee.io/",
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
  // TODO: 配置多颜色切换
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
      favicon: "/favicon.ico",
      // 主题色 经测试，下列themecolor语句不起作用
      // themeColor: "#fb9b5f",
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black"
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff"
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png"
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png"
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/assets/icon/chrome-192.png",
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
  // 引入主题等配置元素
  theme: theme_default
  // // 配置主题色选择器：https://theme-hope.vuejs.press/zh/guide/interface/theme-color.html#%E8%AE%BE%E7%BD%AE%E9%BB%98%E8%AE%A4%E4%B8%BB%E9%A2%98%E8%89%B2
  // theme: hopeTheme({
  //   themeColor: {
  //     blue: "#2196f3",
  //     red: "#f26d6d",
  //     green: "#3eaf7c",
  //     orange: "#fb9b5f",
  //   },
  // }),
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9DU19HVUlERVIvZG9jcy9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxDU19HVUlERVJcXFxcZG9jc1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovQ1NfR1VJREVSL2RvY3Mvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkb2NzZWFyY2hQbHVnaW4gfSBmcm9tIFwiQHZ1ZXByZXNzL3BsdWdpbi1kb2NzZWFyY2hcIjtcbmltcG9ydCB7IGNvbW1lbnRQbHVnaW4gfSBmcm9tIFwidnVlcHJlc3MtcGx1Z2luLWNvbW1lbnQyXCI7XG5pbXBvcnQgeyBwd2FQbHVnaW4gfSBmcm9tIFwidnVlcHJlc3MtcGx1Z2luLXB3YTJcIjtcbmltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tIFwidnVlcHJlc3NcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgLy8gVE9ETzogXHU5MTREXHU3RjZFXHU1OTFBXHU5ODlDXHU4MjcyXHU1MjA3XHU2MzYyXG4gIFxuICAvLyBcdTRFMkRcdTY1ODdcbiAgbGFuZzogXCJ6aC1DTlwiLFxuICAvLyBcdTY4MDdcdTk4OThcbiAgdGl0bGU6IFwiQ1NfR1VJREVSXCIsXG4gIC8vIFx1NjNDRlx1OEZGMFxuICBkZXNjcmlwdGlvbjogXCJcdThCQjBcdTVGNTVcdTYyMTFcdTc2ODRDU1x1NEU0Qlx1OERFRixcdTRFM0FcdTRGNjBcdTcwQjlcdTRFQUVcdTRFMDBcdTVFQTdcdTcwNkZcdTU4NTQhXCIsXG4gIC8vIEhUTUwgXHU3NkVFXHU1RjU1XG4gIGRlc3Q6IFwic3JjLy52dWVwcmVzcy9kaXN0XCIsXG4gIC8vIFx1NTk4Mlx1Njc5Q1x1NEY2MFx1NkI2M1x1NTcyOFx1NEY3Rlx1NzUyOCBQV0EgXHU2M0QyXHU0RUY2XHVGRjBDXHU2MjExXHU0RUVDXHU2M0E4XHU4MzUwXHU1NzI4XHU0RjYwXHU3Njg0IFZ1ZVByZXNzIFx1OTE0RFx1N0Y2RVx1NjU4N1x1NEVGNlx1NEUyRFx1OEJCRVx1N0Y2RSBcbiAgc2hvdWxkUHJlZmV0Y2g6IGZhbHNlLFxuXG4gIGhlYWQ6IFtcbiAgICAvLyBtZXRhXG4gICAgW1wibWV0YVwiLCB7IG5hbWU6IFwicm9ib3RzXCIsIGNvbnRlbnQ6IFwiYWxsXCIgfV0sXG4gICAgW1wibWV0YVwiLCB7IG5hbWU6IFwiYXV0aG9yXCIsIGNvbnRlbnQ6IFwiV0xlaTIyNFwiIH1dLFxuICAgIFtcbiAgICAgIFwibWV0YVwiLFxuICAgICAge1xuICAgICAgICBcImh0dHAtZXF1aXZcIjogXCJDYWNoZS1Db250cm9sXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwibm8tY2FjaGUsIG5vLXN0b3JlLCBtdXN0LXJldmFsaWRhdGVcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXCJtZXRhXCIsIHsgXCJodHRwLWVxdWl2XCI6IFwiUHJhZ21hXCIsIGNvbnRlbnQ6IFwibm8tY2FjaGVcIiB9XSxcbiAgICBbXCJtZXRhXCIsIHsgXCJodHRwLWVxdWl2XCI6IFwiRXhwaXJlc1wiLCBjb250ZW50OiBcIjBcIiB9XSxcbiAgICBbXG4gICAgICBcIm1ldGFcIixcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJrZXl3b3Jkc1wiLFxuICAgICAgICBjb250ZW50OlxuICAgICAgICAgIFwiSmF2YSwgSmF2YVx1NTdGQVx1Nzg0MCwgXHU1RTc2XHU1M0QxXHU3RjE2XHU3QTBCLCBKVk0sIFx1ODY1QVx1NjJERlx1NjczQSwgXHU2NTcwXHU2MzZFXHU1RTkzLCBNeVNRTCwgU3ByaW5nLCBSZWRpcywgTXlCYXRpcywgU3ByaW5nQm9vdCwgSURFQSwgXHU2QzQyXHU4MDRDXHU5NzYyXHU4QkQ1LCBcdTk3NjJcdTZFMjNcdTkwMDZcdTg4QUQsIFx1NUI2Nlx1NEU2MFx1OERFRlx1N0VCRlwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFtcIm1ldGFcIiwgeyBuYW1lOiBcImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiwgY29udGVudDogXCJ5ZXNcIiB9XSxcbiAgICBbXG4gICAgICBcInNjcmlwdFwiLHt9LFxuICAgICAgYFxuICAgICAgICB2YXIgX2htdCA9IF9obXQgfHwgW107XG4gICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgaG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgIGhtLnNyYyA9IFwiaHR0cHM6Ly9obS5iYWlkdS5jb20vaG0uanM/NTIzMGFjMTQzNjUwYmY1ZWIzYzE0ZjNmYjliMWQzZWNcIjtcbiAgICAgICAgICB2YXIgcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdOyBcbiAgICAgICAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGhtLCBzKTtcbiAgICAgICAgfSkoKTtcbiAgICAgIGBcbiAgICBdLFxuICAgIC8vIFx1OTE0RFx1N0Y2RVx1OTYzRlx1OTFDQ1x1NzY4NGNkblxuICAgIC8vIFtcbiAgICAvLyAgIFwibGlua1wiLFxuICAgIC8vICAge1xuICAgIC8vICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgIC8vICAgICBocmVmOiBcIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMzE4MDYyNF83Y3kxMGw3anFxaC5jc3NcIixcbiAgICAvLyAgIH0sXG4gICAgLy8gXSxcblxuICAgIC8vIFx1NEVFNVx1NEUwQlx1NjYyRlx1OTE0RFx1N0Y2RWRvY3NlYXJjaFx1NzY4NFx1OTE0RFx1N0Y2RVx1RkYwQ1x1NjY4Mlx1NjVGNlx1NkNFOFx1OTFDQVx1NjM4OVxuICAgIC8vIC8vIFx1NTZFMFx1NEUzQVx1NEUwRFx1NjYyRnZ1ZXByZXNzXHU5RUQ4XHU4QkE0XHU0RTNCXHU5ODk4XHVGRjBDXHU1NkUwXHU2QjY0XHU5NzAwXHU4OTgxXHU2MjRCXHU1MkE4XHU5MTREXHU3RjZFXHU2NDFDXHU3RDIyXHU2ODQ2XHU3Njg0Y3NzXHU2ODM3XHU1RjBGXHVGRjBDXHU1OTgyXHU0RTBCXHVGRjFBXG4gICAgLy8gW1xuICAgIC8vICAgXCJsaW5rXCIsXG4gICAgLy8gICB7XG4gICAgLy8gICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgLy8gICAgIGhyZWY6IFwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9AZG9jc2VhcmNoL2Nzc0AzXCJcbiAgICAvLyAgIH0sXG4gICAgLy8gXSwgIFxuICAgIC8vIFtcbiAgICAvLyAgIFwic2NyaXB0XCIsXG4gICAgLy8gICB7XG4gICAgLy8gICAgIHNyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL0Bkb2NzZWFyY2gvanNAM1wiXG4gICAgLy8gICB9IFxuICAgIC8vIF0sXG4gICAgLy8gLy8gXHU2MDI3XHU4MEZEXHU0RjE4XHU1MzE2XG4gICAgLy8gW1xuICAgIC8vICAgXCJsaW5rXCIsXG4gICAgLy8gICB7XG4gICAgLy8gICAgIHJlbDogXCJwcmVjb25uZWN0XCIsXG4gICAgLy8gICAgIGhyZWY6IFwiaHR0cHM6Ly8yWU5NNTk3RlEzLWRzbi5hbGdvbGlhLm5ldCBjcm9zc29yaWdpblwiLFxuICAgIC8vICAgICAvLyBjcm9zc29yaWdpbjogLyxcbiAgICAvLyAgIH1cbiAgICAvLyBdLFxuICAgIC8vIFtcbiAgICAvLyAgICdsaW5rJyxcbiAgICAvLyAgIHsgXG4gICAgLy8gICAgIHJlbDogJ3N0eWxlc2hlZXQnLCBcbiAgICAvLyAgICAgaHJlZjogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vZG9jc2VhcmNoLmpzQDMvZGlzdC9jZG4vZG9jc2VhcmNoLm1pbi5jc3MnIFxuICAgIC8vICAgfVxuICAgIC8vIF0sIFxuICAgIC8vIFx1OTE0RFx1N0Y2RXdhbGluZVx1OEJDNFx1OEJCQVx1NjNEMlx1NEVGNlxuICAgIFtcbiAgICAgIFwibGlua1wiLFxuICAgICAge1xuICAgICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgICBocmVmOiBcImh0dHBzOi8vdW5wa2cuY29tL0B3YWxpbmUvY2xpZW50QHYyL2Rpc3Qvd2FsaW5lLmNzc1wiXG4gICAgICB9XG4gICAgXSxcbiAgICBbXG4gICAgICAnc2NyaXB0JyxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ21vZHVsZScsXG4gICAgICAgIHNyYzogJ2h0dHBzOi8vdW5wa2cuY29tL0B3YWxpbmUvY2xpZW50QHYyL2Rpc3Qvd2FsaW5lLm1qcycsXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFtcbiAgICAgICdzY3JpcHQnLFxuICAgICAge1xuICAgICAgICB0eXBlOiAnbW9kdWxlJyxcbiAgICAgIH0sXG4gICAgICBgXG4gICAgICAgIGltcG9ydCB7IGluaXQgfSBmcm9tICdodHRwczovL3VucGtnLmNvbS9Ad2FsaW5lL2NsaWVudEB2Mi9kaXN0L3dhbGluZS5tanMnO1xuICAgICAgICBpbml0KHtcbiAgICAgICAgICBlbDogJyN3YWxpbmUnLFxuICAgICAgICAgIHNlcnZlclVSTDogJ2h0dHBzOi8vY3MtZ3VpZGVyLTZjbW05OWYycy13bDJvMm8udmVyY2VsLmFwcC8nLFxuICAgICAgICB9KTtcbiAgICAgIGAsXG4gICAgXSxcbiAgXSxcblxuICBwbHVnaW5zOiBbXG4gICAgLy8gUHJvZ3Jlc3NpdmUgV2ViIGFwcFx1RkYwQ1x1NTM3M1x1NkUxMFx1OEZEQlx1NUYwRlx1N0Y1MVx1N0VEQ1x1NUU5NFx1NzUyOFx1N0EwQlx1NUU4Rlx1RkYwQ1xuICAgIC8vIFx1NTE0MVx1OEJCOFx1N0Y1MVx1N0FEOVx1OTAxQVx1OEZDN1x1NjUyRlx1NjMwMVx1OEJFNVx1NzI3OVx1NjAyN1x1NzY4NFx1NkQ0Rlx1ODlDOFx1NTY2OFx1NUMwNlx1N0Y1MVx1N0FEOVx1NEY1Q1x1NEUzQSBBcHAgXHU1Qjg5XHU4OEM1XHU1NzI4XHU1QkY5XHU1RTk0XHU1RTczXHU1M0YwXHU0RTBBXHUzMDAyXG4gICAgcHdhUGx1Z2luKHtcbiAgICAgIC8vIGZhdmljb24uaWNvXHU0RTAwXHU4MjJDXHU3NTI4XHU0RThFXHU0RjVDXHU0RTNBXHU3RjI5XHU3NTY1XHU3Njg0XHU3RjUxXHU3QUQ5XHU2ODA3XHU1RkQ3LFx1NUI4M1x1NjYzRVx1NzkzQVx1NEY0RFx1NEU4RVx1NkQ0Rlx1ODlDOFx1NTY2OFx1NzY4NFx1NTczMFx1NTc0MFx1NjgwRlx1NjIxNlx1ODAwNVx1NTcyOFx1NjgwN1x1N0I3RVx1NEUwQSxcdTc1MjhcdTRFOEVcdTY2M0VcdTc5M0FcdTdGNTFcdTdBRDlcdTc2ODRsb2dvLFxuICAgICAgLy8gZmF2aWNvbjogXCJodHRwOi8vaW1hZ2VzLnJsMDIwNi5sb3ZlLzIwMjMwNDIwMDA1NzgwMi5pY29cIixcbiAgICAgIGZhdmljb246IFwiL2Zhdmljb24uaWNvXCIsXG4gICAgICAvLyBcdTRFM0JcdTk4OThcdTgyNzIgXHU3RUNGXHU2RDRCXHU4QkQ1XHVGRjBDXHU0RTBCXHU1MjE3dGhlbWVjb2xvclx1OEJFRFx1NTNFNVx1NEUwRFx1OEQ3N1x1NEY1Q1x1NzUyOFxuICAgICAgLy8gdGhlbWVDb2xvcjogXCIjZmI5YjVmXCIsXG4gICAgICBhcHBsZToge1xuICAgICAgICBpY29uOiBcIi9hc3NldHMvaWNvbi9hcHBsZS1pY29uLTE1Mi5wbmdcIixcbiAgICAgICAgc3RhdHVzQmFyQ29sb3I6IFwiYmxhY2tcIixcbiAgICAgIH0sXG4gICAgICBtc1RpbGU6IHtcbiAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9pY29uL21zLWljb24tMTQ0LnBuZ1wiLFxuICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICB9LFxuICAgICAgbWFuaWZlc3Q6IHtcbiAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTUxMi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTE5Mi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS01MTIucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtMTkyLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBcdTc1NTlcdThBMDBcbiAgICAvLyBjb21tZW50UGx1Z2luKHtcbiAgICAvLyAgIHByb3ZpZGVyOiBcIkdpc2N1c1wiLFxuICAgIC8vICAgcmVwbyA6XCJpdHdhbmdlci90b2JlYmV0dGVyamF2YWVyLWdpc2N1c1wiLFxuICAgIC8vICAgcmVwb0lkOlwiUl9rZ0RPSEJKc3NnXCIsXG4gICAgLy8gICBjYXRlZ29yeTpcIkFubm91bmNlbWVudHNcIixcbiAgICAvLyAgIGNhdGVnb3J5SWQ6XCJESUNfa3dET0hCSnNzczRDT0pPeFwiLFxuICAgIC8vIH0pLFxuICAgIC8vIFdhbGluZSBcdTkxNERcdTdGNkVcbiAgICBjb21tZW50UGx1Z2luKHtcbiAgICAgIHByb3ZpZGVyOiBcIldhbGluZVwiLFxuICAgICAgc2VydmVyVVJMOiBcImh0dHBzOi8vY3MtZ3VpZGVyLTZjbW05OWYycy13bDJvMm8udmVyY2VsLmFwcC9cIixcbiAgICAgIC8vIFx1NEUzQVx1NjU4N1x1N0FFMFx1NTg5RVx1NTJBMFx1ODg2OFx1NjBDNVx1NEU5Mlx1NTJBOFx1NTI5Rlx1ODBGRFx1RkYwQ1x1OEJCRVx1N0Y2RVx1NEUzQSB0cnVlIFx1NjNEMFx1NEY5Qlx1OUVEOFx1OEJBNFx1ODg2OFx1NjBDNVx1RkYwQ1x1NEU1Rlx1NTNFRlx1NEVFNVx1OTAxQVx1OEZDN1x1OEJCRVx1N0Y2RVx1ODg2OFx1NjBDNVx1NTczMFx1NTc0MFx1NjU3MFx1N0VDNFx1Njc2NVx1ODFFQVx1NUI5QVx1NEU0OVx1ODg2OFx1NjBDNVx1NTZGRVx1NzI0N1x1RkYwQ1x1NjcwMFx1NTkyN1x1NjUyRlx1NjMwMSA4IFx1NEUyQVx1ODg2OFx1NjBDNVx1MzAwMlxuICAgICAgcmVhY3Rpb246IHRydWUsXG4gICAgfSksXG4gICAgLy8gXHU1M0VBXHU4MEZEXHU2NDFDXHU3RDIyXG4gICAgZG9jc2VhcmNoUGx1Z2luKHtcbiAgICAgIGFwcElkOiBcIjJZTk01OTdGUTNcIixcbiAgICAgIGFwaUtleTogXCI1MDY2MzNiNzBiMTlmOGVlY2E0YWU3ZjUzZTU1OWVmNFwiLFxuICAgICAgaW5kZXhOYW1lOiBcIndsZWkyMjQtZ2l0ZWVcIixcbiAgICAgIC8vIGNvbnRhaW5lcjogJyMjIyBSRVBMQUNFIE1FIFdJVEggQSBDT05UQUlORVIgKGUuZy4gZGl2KSAjIyMnLFxuICAgICAgLy8gZGVidWc6IGZhbHNlLFxuICAgICAgbG9jYWxlczoge1xuICAgICAgICBcIi9cIjoge1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlx1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2M1wiLFxuICAgICAgICAgIHRyYW5zbGF0aW9uczoge1xuICAgICAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzXCIsXG4gICAgICAgICAgICAgIGJ1dHRvbkFyaWFMYWJlbDogXCJcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RhbDoge1xuICAgICAgICAgICAgICBzZWFyY2hCb3g6IHtcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvblRpdGxlOiBcIlx1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNlwiLFxuICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uQXJpYUxhYmVsOiBcIlx1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNlwiLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiXHU1M0Q2XHU2RDg4XCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uQXJpYUxhYmVsOiBcIlx1NTNENlx1NkQ4OFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzdGFydFNjcmVlbjoge1xuICAgICAgICAgICAgICAgIHJlY2VudFNlYXJjaGVzVGl0bGU6IFwiXHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyXCIsXG4gICAgICAgICAgICAgICAgbm9SZWNlbnRTZWFyY2hlc1RleHQ6IFwiXHU2Q0ExXHU2NzA5XHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyXCIsXG4gICAgICAgICAgICAgICAgc2F2ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOiBcIlx1NEZERFx1NUI1OFx1ODFGM1x1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMlwiLFxuICAgICAgICAgICAgICAgIHJlbW92ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOiBcIlx1NEVDRVx1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMlx1NEUyRFx1NzlGQlx1OTY2NFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBlcnJvclNjcmVlbjoge1xuICAgICAgICAgICAgICAgIHRpdGxlVGV4dDogXCJcdTY1RTBcdTZDRDVcdTgzQjdcdTUzRDZcdTdFRDNcdTY3OUNcIixcbiAgICAgICAgICAgICAgICBoZWxwVGV4dDogXCJcdTRGNjBcdTUzRUZcdTgwRkRcdTk3MDBcdTg5ODFcdTY4QzBcdTY3RTVcdTRGNjBcdTc2ODRcdTdGNTFcdTdFRENcdThGREVcdTYzQTVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0VGV4dDogXCJcdTkwMDlcdTYyRTlcIixcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRleHQ6IFwiXHU1MjA3XHU2MzYyXCIsXG4gICAgICAgICAgICAgICAgY2xvc2VUZXh0OiBcIlx1NTE3M1x1OTVFRFwiLFxuICAgICAgICAgICAgICAgIHNlYXJjaEJ5VGV4dDogXCJcdTY0MUNcdTdEMjJcdTYzRDBcdTRGOUJcdTgwMDVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbm9SZXN1bHRzU2NyZWVuOiB7XG4gICAgICAgICAgICAgICAgbm9SZXN1bHRzVGV4dDogXCJcdTY1RTBcdTZDRDVcdTYyN0VcdTUyMzBcdTc2RjhcdTUxNzNcdTdFRDNcdTY3OUNcIixcbiAgICAgICAgICAgICAgICBzdWdnZXN0ZWRRdWVyeVRleHQ6IFwiXHU0RjYwXHU1M0VGXHU0RUU1XHU1QzFEXHU4QkQ1XHU2N0U1XHU4QkUyXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICAvLyBcdTVGMTVcdTUxNjVcdTRFM0JcdTk4OThcdTdCNDlcdTkxNERcdTdGNkVcdTUxNDNcdTdEMjBcbiAgdGhlbWUsXG4gIC8vIC8vIFx1OTE0RFx1N0Y2RVx1NEUzQlx1OTg5OFx1ODI3Mlx1OTAwOVx1NjJFOVx1NTY2OFx1RkYxQWh0dHBzOi8vdGhlbWUtaG9wZS52dWVqcy5wcmVzcy96aC9ndWlkZS9pbnRlcmZhY2UvdGhlbWUtY29sb3IuaHRtbCMlRTglQUUlQkUlRTclQkQlQUUlRTklQkIlOTglRTglQUUlQTQlRTQlQjglQkIlRTklQTIlOTglRTglODklQjJcbiAgLy8gdGhlbWU6IGhvcGVUaGVtZSh7XG4gIC8vICAgdGhlbWVDb2xvcjoge1xuICAvLyAgICAgYmx1ZTogXCIjMjE5NmYzXCIsXG4gIC8vICAgICByZWQ6IFwiI2YyNmQ2ZFwiLFxuICAvLyAgICAgZ3JlZW46IFwiIzNlYWY3Y1wiLFxuICAvLyAgICAgb3JhbmdlOiBcIiNmYjliNWZcIixcbiAgLy8gICB9LFxuICAvLyB9KSxcblxufSk7XG5cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTovQ1NfR1VJREVSL2RvY3Mvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcQ1NfR1VJREVSXFxcXGRvY3NcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFx0aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovQ1NfR1VJREVSL2RvY3Mvc3JjLy52dWVwcmVzcy90aGVtZS50c1wiO2ltcG9ydCB7IGhvcGVUaGVtZSB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5pbXBvcnQgbmF2YmFyIGZyb20gXCIuL25hdmJhclwiO1xuaW1wb3J0IHsgc2lkZWJhckNvbmZpZyB9IGZyb20gXCIuL3NpZGViYXJcIjtcbmV4cG9ydCBkZWZhdWx0IGhvcGVUaGVtZSh7XG4gIGhvc3RuYW1lOiBcImh0dHBzOi8vd2xlaTIyNC5naXRlZS5pby9cIixcblxuICAvLyBcdTdGNTFcdTdBRDlcdTU2RkVcdTY4MDdcbiAgbG9nbzogXCIvZmF2aWNvbi5pY29cIixcbiAgLy8gR2l0IFx1NEVEM1x1NUU5M1x1NTQ4Q1x1N0YxNlx1OEY5MVx1OTRGRVx1NjNBNVxuICByZXBvOiBcImh0dHBzOi8vZ2l0ZWUuY29tL1dMZWkyMjQvV0xlaTIyNC5naXRcIixcbiAgcmVwb0xhYmVsOiBcIkdpdGVlXCIsXG4gIGRvY3NEaXI6IFwiZG9jc1wiLFxuICAvLyBcdTRFRTVcdTUyNERcdTc2ODRcdTlFRDhcdThCQTRcdTRFRDNcdTVFOTNcdTUyMDZcdTY1MkZcdTU0MERcdUZGMENcdTY1QjlcdTRGQkZcdTYzRDBcdTRFQTQgcHIgXHU1NDhDIGlzc3VlXG4gIGRvY3NCcmFuY2g6IFwibWFzdGVyXCIsXG5cbiAgLy8gXHU1MTY4XHU1QzRGXHU2MzA5XHU5NEFFXG4gIGZ1bGxzY3JlZW46IHRydWUsXG4gIC8vIFx1NTcyOFx1NkRGMVx1ODI3Mlx1NkEyMVx1NUYwRlx1RkYwQ1x1NkQ0NVx1ODI3Mlx1NkEyMVx1NUYwRlx1NTQ4Q1x1ODFFQVx1NTJBOFx1NEU0Qlx1OTVGNFx1NTIwN1x1NjM2MiAoXHU5RUQ4XHU4QkE0KVxuICBkYXJrbW9kZTogXCJzd2l0Y2hcIixcbiAgLy8gXHU3RUFGXHU1MUMwXHU2QTIxXHU1RjBGXHVGRjBDXHU0RjFBXHU3OTgxXHU3NTI4XHU0RTAwXHU0RTlCXHU4MkIxXHU1NEU4XHU3Njg0XHU1MkE4XHU3NTNCXHU0RUU1XHU1M0NBXHU0RTAwXHU0RTlCXHU4MjcyXHU1RjY5XG4gIC8vIHB1cmU6IHRydWUsXG5cbiAgLy8gXHU5NjNGXHU5MUNDXHU1REY0XHU1REY0XHU3N0UyXHU5MUNGXHU1RTkzXHU1NkZFXHU2ODA3XHU3Njg0XHU1MjREXHU3RjAwXG4gIC8vIGljb25QcmVmaXg6IFwiaWNvbmZvbnQgaWNvbi1cIixcblxuICAvLyBob21lXHU5ODc1XHU1NDhDXHU1QkZDXHU4MjJBXHU2ODBGSWNvbmZvbnQgXHU3Q0JFXHU5MDA5XHU1NkZFXHU2ODA3IFx1NTQ4QyBcdTk2M0ZcdTkxQ0NcdTU5ODhcdTU5ODhcdTc2ODRcdTRFOTJcdTY1QTVcbiAgaWNvbkFzc2V0czogXCJpY29uZm9udFwiLFxuXG4gIC8vIFx1NTE2OFx1NUM0MFx1OUVEOFx1OEJBNFx1NEY1Q1x1ODAwNVxuICBhdXRob3I6IHtcbiAgICBuYW1lOiBcIldMZWkyMjRcIixcbiAgICB1cmw6IFwiL2Fib3V0Z3VpZGVyL1wiLFxuICB9LFxuXG4gIC8vIFx1NTJBMFx1NUJDNlxuICBlbmNyeXB0OiB7XG4gICAgY29uZmlnOiB7XG4gICAgICAvLyBcdThGRDlcdTUzRUFcdTRGMUFcdTUyQTBcdTVCQzYgY29uZmlnL3BhZ2UuaHRtbFxuICAgICAgXCIvbmljZS1hcnRpY2xlL2l0bWluZC94c2hlbGxhenBqYmpjeHNoZWxscHhmZnhieHQuaHRtbFwiOiBbXCIxMTEwXCIsIFwiMDIyNFwiXSxcbiAgICAgIFwiL25pY2UtYXJ0aWNsZS9pdG1pbmQvaWRlYXBqYXpqY3p4amhtemNteWpqaGN4Z3h6Lmh0bWxcIjogW1wiMTExMFwiLCBcIjAyMjRcIl0sXG4gICAgfSxcbiAgfSxcbiAgLy8gXHU2M0QwXHU3OTNBXHU2NTg3XHU1QjU3XG4gIGVuY3J5cHRMb2NhbGVzOiB7XG4gICAgcGxhY2Vob2xkZXI6IFwiXHU1NTMxXHUzMDAxXHU4REYzXHUzMDAxcmFwXHUzMDAxXHU3QkVFXHU3NDAzXHVEODNDXHVERkMwXHVGRjAxXCIsXG5cbiAgICAvKipcbiAgICAgKiBQYXNzd3JvZCBlcnJvciBoaW50XG4gICAgICovXG4gICAgZXJyb3JIaW50OiBcIlx1NTRDOFx1NTRDOFx1RkYwQ1x1NEY2MFx1NUU3Mlx1NTYxQn5cIixcbiAgfSxcblxuICAvLyBuYXZiYXJcbiAgbmF2YmFyOiBuYXZiYXIsXG5cbiAgLy8gc2lkZWJhclxuICBzaWRlYmFyOiBzaWRlYmFyQ29uZmlnLFxuXG4gIC8vIFx1OTg3NVx1ODExQVx1NjUyRlx1NjMwMVxuICBmb290ZXI6ICc8YSBocmVmPVwiaHR0cHM6Ly9iZWlhbi5taWl0Lmdvdi5jbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cdThDNkJJQ1BcdTU5MDcyMDIxMDM4MDI2XHU1M0Y3LTE8L2E+J1xuICArJzxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4udG9iZWJldHRlcmphdmFlci5jb20vdG9iZWJldHRlcmphdmFlci9pbWFnZXMvYmVpYW4ucG5nXCIgaGVpZ2h0PVwiMTVweFwiIHdpZHRoPVwiMTVweFwiIC8+J1xuICArJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vd3d3LmJlaWFuLmdvdi5jbi9wb3J0YWwvcmVnaXN0ZXJTeXN0ZW1JbmZvP3JlY29yZGNvZGU9NDEwMzA1MDIwMDA0MTFcIj4nXG4gICsnPHNwYW4+XHU4QzZCXHU1MTZDXHU3RjUxXHU1Qjg5XHU1OTA3IDQxMDMwNTAyMDAwNDExXHU1M0Y3PC9zcGFuPidcbiAgKyc8L2E+JyxcbiAgZGlzcGxheUZvb3RlcjogdHJ1ZSxcblxuICAvLyBcdTY1ODdcdTdBRTBcdTRGRTFcdTYwNkZcdUZGMENcdTUzRUZcdTRFRTVcdTU4NkJcdTUxNjVcdTY1NzBcdTdFQzRcdUZGMENcdTY1NzBcdTdFQzRcdTc2ODRcdTk4N0FcdTVFOEZcdTY2MkZcdTU0MDRcdTY3NjFcdTc2RUVcdTY2M0VcdTc5M0FcdTc2ODRcdTk4N0FcdTVFOEZcbiAgcGFnZUluZm86IFtcIkF1dGhvclwiLCBcIk9yaWdpbmFsXCIsIFwiRGF0ZVwiLCBcIkNhdGVnb3J5XCIsIFwiVGFnXCIsIFwiV29yZFwiLFwiUmVhZGluZ1RpbWVcIl0sXG5cbiAgYmxvZzoge1xuICAgIC8vIFx1NEUyQVx1NEVCQVx1NEVDQlx1N0VDRFx1OTg3NVx1NTczMFx1NTc0MFxuICAgIGludHJvOiBcIi9hYm91dGd1aWRlci9cIixcbiAgICBzaWRlYmFyRGlzcGxheTogXCJtb2JpbGVcIixcbiAgICAvLyBcdTUzNUFcdTRFM0JcdTU5MzRcdTUwQ0ZcbiAgICBhdmF0YXI6IFwiL2F1dGhvci5wbmdcIixcbiAgICAvLyBcdTU3MDZcdTg5RDJcbiAgICByb3VuZEF2YXRhcjogdHJ1ZSxcbiAgICAvLyBcdTVFQTdcdTUzRjNcdTk0RURcbiAgICBkZXNjcmlwdGlvbjpcIlx1NkNBMVx1NjcwOVx1NEVDMFx1NEU0OFx1NEY3Rlx1NjIxMVx1NTA1Q1x1NzU1OVx1MjAxNFx1MjAxNFx1OTY2NFx1NEU4Nlx1NzZFRVx1NzY4NFx1RkYwQ1x1N0VCNVx1NzEzNlx1NUNCOFx1NjVDMVx1NjcwOVx1NzNBQlx1NzQ3MFx1MzAwMVx1NjcwOVx1N0VGRlx1ODM2Qlx1MzAwMVx1NjcwOVx1NUI4MVx1OTc1OVx1NzY4NFx1NkUyRlx1NkU3RVx1RkYwQ1x1NjIxMVx1NjYyRlx1NEUwRFx1N0NGQlx1NEU0Qlx1ODIxRlx1MzAwMlwiLFxuICAgIG1lZGlhczoge1xuICAgICAgWmhpaHU6IFwiaHR0cHM6Ly93d3cuemhpaHUuY29tL3Blb3BsZS9jbW93ZXJcIixcbiAgICAgIENTRE46IFwiaHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FpbmdfZ2VlXCIsXG4gICAgICBHaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2l0d2FuZ2VyXCIsXG4gICAgICBHaXRlZTogXCJodHRwczovL2dpdGVlLmNvbS9pdHdhbmdlclwiLFxuICAgIH0sXG4gIH0sXG5cbiAgcGx1Z2luczoge1xuICAgIC8vIFx1NUYwMFx1NTQyRlx1NTM1QVx1NUJBMlx1NTI5Rlx1ODBGRFxuICAgIGJsb2c6IHtcbiAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NTM1QVx1NUJBMlx1ODFFQVx1NTJBOFx1NjQ1OFx1ODk4MVxuICAgICAgLy8gYXV0b0V4Y2VycHQ6IHRydWUsXG4gICAgfSxcbiAgICBcbiAgICAvLyBcdThCRTVcdTYzRDJcdTRFRjZcdTRGMUFcdTc2RDFcdTU0MkNcdTk4NzVcdTk3NjJcdTZFREFcdTUyQThcdTRFOEJcdTRFRjZcdTMwMDJcdTVGNTNcdTk4NzVcdTk3NjJcdTZFREFcdTUyQThcdTgxRjNcdTY3RDBcdTRFMkEgXHU2ODA3XHU5ODk4XHU5NTFBXHU3MEI5IFx1NTQwRVx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NUI1OFx1NTcyOFx1NUJGOVx1NUU5NFx1NzY4NCBcdTY4MDdcdTk4OThcdTk0RkVcdTYzQTUgXHVGRjBDXHU5MEEzXHU0RTQ4XHU4QkU1XHU2M0QyXHU0RUY2XHU0RjFBXHU1QzA2XHU4REVGXHU3NTMxIEhhc2ggXHU2NkY0XHU2NTM5XHU0RTNBXHU4QkU1IFx1NjgwN1x1OTg5OFx1OTUxQVx1NzBCOSBcdTMwMDJcbiAgICBhY3RpdmVIZWFkZXJMaW5rczogdHJ1ZSxcblxuICAgIG1kRW5oYW5jZToge1xuICAgICAgLy8gXHU2REZCXHU1MkEwXHU5MDA5XHU5ODc5XHU1MzYxXHU2NTJGXHU2MzAxXG4gICAgICB0YWJzOiB0cnVlLFxuICAgICAgLy8gXHU2RDQxXHU3QTBCXHU1NkZFXG4gICAgICBtZXJtYWlkOiB0cnVlLFxuICAgICAgLy8gXHU2NTJGXHU2MzAxXHU0RUZCXHU1MkExXHU1MjE3XHU4ODY4XG4gICAgICB0YXNrbGlzdDogdHJ1ZSxcblxuICAgICAgLy8gXHU1NDJGXHU3NTI4XHU1NkZFXHU3MjQ3XHU2MUQyXHU1MkEwXHU4RjdEXG4gICAgICBpbWdMYXp5bG9hZDogdHJ1ZSxcbiAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NTZGRVx1NzI0N1x1NjgwN1x1OEJCMFxuICAgICAgaW1nTWFyazogdHJ1ZSxcbiAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NTZGRVx1NzI0N1x1NTkyN1x1NUMwRlxuICAgICAgaW1nU2l6ZTogdHJ1ZSxcblxuICAgICAgLy8gVE9ETzogXHU1NDBFXHU3RUVEXHU1OTA0XHU3NDA2IDIwMjMvNC8yMVx1NURGMlx1ODlFM1x1NTFCM1xuICAgICAgLy8gXHU1NDJGXHU3NTI4XHU1NkZFXHU3MjQ3XHU2ODA3XHU5ODk4XG4gICAgICBmaWd1cmU6IHRydWUsXG5cbiAgICAgIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NUJGOVx1OUY1MFxuICAgICAgYWxpZ246IHRydWUsXG5cbiAgICAgIC8vIFx1NjUyRlx1NjMwMVx1NUU3Qlx1NzA2Rlx1NzI0N1xuICAgICAgcHJlc2VudGF0aW9uOiB0cnVlLFxuXG4gICAgICAvLyBcdTk0RkVcdTYzQTVcdTY4QzBcdTY3RTVcbiAgICAgIGxpbmtDaGVjazogXCJhbHdheXNcIixcblxuICAgICAgLy8gXHU0RjYwXHU3Njg0IE1hcmtkb3duIFx1ODg0Q1x1NEUzQVx1NEUwRSBHaXRIdWIgXHU0RkREXHU2MzAxXHU0RTAwXHU4MUY0XG4gICAgICBnZm06IHRydWUsXG4gICAgfSxcbiAgfSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9DU19HVUlERVIvZG9jcy9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxDU19HVUlERVJcXFxcZG9jc1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXG5hdmJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovQ1NfR1VJREVSL2RvY3Mvc3JjLy52dWVwcmVzcy9uYXZiYXIudHNcIjtpbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmF2YmFyKFtcclxuICB7IFxyXG4gICAgdGV4dDogXCJcdTUzNUFcdTVCQTJcIixcclxuICAgIGljb246IFwiaG9tZVwiLFxyXG4gICAgbGluazogXCIvYmxvZy5tZFwiIFxyXG4gIH0sXHJcbiAgeyBcclxuICAgIHRleHQ6IFwiQ1NcdTRFNEJcdThERUZcIiwgXHJcbiAgICBpY29uOiBcImJyYW5jaFwiLCBcclxuICAgIGxpbms6IFwiL2NvbGxlY3Rpb24vXCIsXHJcbiAgICAvLyBcdTVGMDBcdTU0MkZcdTVCNTBcdTVCRkNcdTgyMkFcdTY4MEZcdTc2ODRcdThCRURcdTUzRTVcdUZGMUFcclxuICAgIC8vIGNoaWxkcmVuOiBbXCJ0dXRvcmlhbC9cIiwgXCJtYXJrZG93bi9cIiwgXCJ2dWVwcmVzcy9cIiwgXCJjdXN0b21pemUvXCJdLFxyXG4gIH0sXHJcbiAgeyBcclxuICAgIHRleHQ6IFwiXHU3N0U1XHU4QkM2XHU2NjFGXHU3NDAzXCIsIFxyXG4gICAgaWNvbjogXCJkaXNjb3ZlclwiLCBcclxuICAgIGxpbms6IFwiL3poaXNoaXhpbmdxaXUvXCIgXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIkNTXHU3NTFGXHU2REFGXHU4OUM0XHU1MjEyXCIsXHJcbiAgICBpY29uOiBcImd1aWRlXCIsXHJcbiAgICBsaW5rOiBcIi9ndWlkZXIvXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6IFwiXHU1QjlEXHU4NUNGXHU4RDQ0XHU2RTkwXCIsXHJcbiAgICBpY29uOiBcImxpa2VcIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlBERlx1NTkyOVx1NTgwMlwiLCBcclxuICAgICAgICBpY29uOiBcImphdmFcIiwgXHJcbiAgICAgICAgbGluazogXCIvcGRmL1JFQURNRS5tZFwiIFxyXG4gICAgICB9LFxyXG4gICAgICB7IFxyXG4gICAgICAgIHRleHQ6IFwiQVBQXHU2NTc0XHU1NDA4XCIsIFxyXG4gICAgICAgIGljb246IFwiaG90XCIsIFxyXG4gICAgICAgIGxpbms6IFwiL2FwcC9SRUFETUUubWRcIiBcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIkhleG9cdTUzNUFcdTVCQTJcIixcclxuICAgIGljb246IFwiaGVhZGluZ1wiLCBcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9ybDAyMDYubG92ZVwiXHJcbiAgfSxcclxuXSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTovQ1NfR1VJREVSL2RvY3Mvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcQ1NfR1VJREVSXFxcXGRvY3NcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxzaWRlYmFyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9DU19HVUlERVIvZG9jcy9zcmMvLnZ1ZXByZXNzL3NpZGViYXIudHNcIjtpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcclxuZXhwb3J0IGNvbnN0IHNpZGViYXJDb25maWcgPSBzaWRlYmFyKHtcclxuICBcIi96aGlzaGl4aW5ncWl1L1wiOiBbXHJcbiAgICBcInJlYWRtZS5tZFwiLFxyXG4gICAgXCJtYXBcIixcclxuICAgIFwibWF5XCIsXHJcbiAgICBcImp1bmVcIixcclxuICAgIFwianVseVwiLFxyXG4gICAgXCJhdWd1c3RcIlxyXG4gIF0sXHJcbiAgLy8gXHU0RjYwXHU1M0VGXHU0RUU1XHU3NzAxXHU3NTY1IC5tZCBcdTYyNjlcdTVDNTVcdTU0MERcdUZGMENcdTRFRTUgLyBcdTdFRDNcdTVDM0VcdTc2ODRcdThERUZcdTVGODRcdTRGMUFcdTg4QUJcdTYzQThcdTY1QURcdTRFM0EgL1JFQURNRS5tZChcdTUzM0FcdTUyMDZcdTU5MjdcdTVDMEZcdTUxOTkpXHJcbiAgXCIvbmljZS1hcnRpY2xlL2l0bWluZC9cIjogW1xyXG4gICAgXCJyZWFkbWUubWRcIixcclxuICAgIFwiaWRlYXB4aWRlYWpoaWRlYXlqamhtaWRlYXp4amh6Y21wampjeWpqaHFjeXhcIixcclxuICAgIFwieWlna3lteGN6aWRlYXRzeXFkZmZibHd4amN5d2R4Ynh0XCIsXHJcbiAgICBcImlkZWFwamF6amN6eGpobXpjbXlqamhjeGd4elwiLFxyXG4gICAgXCJpZGVhamhtaWRlYWpobWlkZWFweGlkZWFqaG1pZGVhemNtaWRlYXlqamhtXCIsXHJcbiAgICBcIm5hdmljYXRtYWN5anB4XCIsXHJcbiAgICBcIm5hdmljYXR6eGJ3aW5kb3dzcGpiamNcIixcclxuICAgIFwidHlwb3JheWpweFwiLFxyXG4gICAgXCJ0eXBvcmFtYWN6d3BqYmh5ampka3B0bWFya2Rvd25ianFta3NpbWFjc29jb21cIixcclxuICAgIFwieHNoZWxsYXpwamJqY3hzaGVsbHB4ZmZ4Ynh0XCIsXHJcbiAgICBcInB5Y2hhcm1qaHB4bWF6amNueXJneHhieHRcIixcclxuICAgIFwieWFuZzFcIixcclxuICBdLFxyXG4gIFwiL3BkZi9cIjogW1xyXG4gICAgXCJqYXZhXCIsXHJcbiAgICBcInByb2dyYW1tZXItMTExXCIsXHJcbiAgICBcImphdmEtY29uY3VycmVudFwiLFxyXG4gICAgXCJnaXRodWItamF2YS1qaWFvY2hlbmctMTE1LXN0YXJcIixcclxuICAgIFwic2hlamltb3NoaVwiLFxyXG4gICAgXCJqYXZhLWxlZXRjb2RlXCIsXHJcbiAgICBcImFsaS1qYXZhLXNob3VjZVwiLFxyXG4gICAgXCJ5dWFueWlmZW5nLWMtbGFuZ3VhZ2VcIixcclxuICAgIFwiYmF0LXNodWF0aVwiLFxyXG4gICAgXCJvc1wiLFxyXG4gICAgXCJwcm9naXRcIixcclxuICAgIFwiamlhbmxpXCIsXHJcbiAgXSxcclxuICBcIi94dWV4aWx1eGlhbi9cIjogW1xyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIkphdmFcdTVCNjZcdTRFNjBcdThERUZcdTdFQkZcIixcclxuICAgICAgcHJlZml4OiBcImphdmEvXCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIFwieWl0aWFvbG9uZ1wiLFxyXG4gICAgICAgIFwidGhyZWFkXCIsXHJcbiAgICAgICAgXCJqdm1cIixcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBcImNcIixcclxuICAgIFwiY2NjXCIsXHJcbiAgICBcInB5dGhvblwiLFxyXG4gICAgXCJnb1wiLFxyXG4gICAgXCJvc1wiLFxyXG4gICAgXCJxaWFuZHVhblwiLFxyXG4gICAgXCJhbGdvcml0aG1cIixcclxuICAgIFwibGFucWlhb2JlaVwiLFxyXG4gICAgXCJiaWdkYXRhXCIsXHJcbiAgICBcImFuZHJvaWRcIixcclxuICAgIFwibXlzcWxcIixcclxuICAgIFwiZG9uZXRcIixcclxuICBdLFxyXG4gIFwiL3NpZGViYXIvc2FuZmVuZS9cIjogW1xyXG4gICAgXCJuaXhpXCIsXHJcbiAgICBcImphdmFzZVwiLFxyXG4gICAgXCJjb2xsZWN0aW9uXCIsXHJcbiAgICBcImphdmF0aHJlYWRcIixcclxuICAgIFwianZtXCIsXHJcbiAgICBcInNwcmluZ1wiLFxyXG4gICAgXCJyZWRpc1wiLFxyXG4gICAgXCJteWJhdGlzXCIsXHJcbiAgICBcIm15c3FsXCIsXHJcbiAgICBcIm9zXCIsXHJcbiAgICBcIm5ldHdvcmtcIixcclxuICAgIFwicm9ja2V0bXFcIixcclxuICBdLFxyXG4gIC8vIFx1NUZDNVx1OTg3Qlx1NjUzRVx1NTcyOFx1NjcwMFx1NTQwRVx1OTc2MlxyXG4gIFwiL1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiXHU0RTAwXHUzMDAxXHU1MjREXHU4QTAwXCIsXHJcbiAgICAgIGxpbms6IFwiaG9tZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJcdTRFOENcdTMwMDFKYXZhXHU2ODM4XHU1RkMzXCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByZWZpeDogXCJvdmVydmlldy9cIixcclxuICAgICAgICAgIHRleHQ6IFwiMi4xIEphdmFcdTY5ODJcdThGRjBcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIFwid2hhdC1pcy1qYXZhXCIsXHJcbiAgICAgICAgICBcImphdmEtaGlzdG9yeVwiLFxyXG4gICAgICAgICAgXCJqYXZhLWNhbi1kby13aGF0XCIsXHJcbiAgICAgICAgICBcImpkay1pbnN0YWxsLWNvbmZpZ1wiLFxyXG4gICAgICAgICAgXCJJREVBLWluc3RhbGwtY29uZmlnXCIsXHJcbiAgICAgICAgICBcImhlbGxvLXdvcmxkXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCIyLjIgSmF2YVx1OEJFRFx1NkNENVx1NTdGQVx1Nzg0MFwiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgXCJiYXNpYy1leHRyYS1tZWFsLzQ4LWtleXdvcmRzXCIsXHJcbiAgICAgICAgICBcImJhc2ljLWV4dHJhLW1lYWwvamF2YS1uYW1pbmdcIixcclxuICAgICAgICAgIFwiYmFzaWMtZ3JhbW1hci9qYXZhZG9jXCIsXHJcbiAgICAgICAgICBcImJhc2ljLWdyYW1tYXIvYmFzaWMtZGF0YS10eXBlXCIsXHJcbiAgICAgICAgICBcImJhc2ljLWdyYW1tYXIvdHlwZS1jYXN0XCIsXHJcbiAgICAgICAgICBcImJhc2ljLWdyYW1tYXIvb3BlcmF0b3JcIixcclxuICAgICAgICAgIFwiYmFzaWMtZ3JhbW1hci9mbG93LWNvbnRyb2xcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIjIuMyBcdTY1NzBcdTdFQzQmXHU1QjU3XHU3QjI2XHU0RTMyXCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICBcImFycmF5L2FycmF5XCIsXHJcbiAgICAgICAgICBcImFycmF5L3ByaW50XCIsXHJcbiAgICAgICAgICBcInN0cmluZy9pbW11dGFibGVcIixcclxuICAgICAgICAgIFwic3RyaW5nL2NvbnN0YW50LXBvb2xcIixcclxuICAgICAgICAgIFwic3RyaW5nL2ludGVyblwiLFxyXG4gICAgICAgICAgXCJzdHJpbmcvZXF1YWxzXCIsXHJcbiAgICAgICAgICBcInN0cmluZy9qb2luXCIsXHJcbiAgICAgICAgICBcInN0cmluZy9zcGxpdFwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiMi40IFx1OTc2Mlx1NTQxMVx1NUJGOVx1OEM2MVx1N0YxNlx1N0EwQlwiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgXCJvby9vYmplY3QtY2xhc3NcIixcclxuICAgICAgICAgIFwib28vcGFja2FnZVwiLFxyXG4gICAgICAgICAgXCJvby92YXJcIixcclxuICAgICAgICAgIFwib28vbWV0aG9kXCIsXHJcbiAgICAgICAgICBcIm9vL2NvbnN0cnVjdFwiLFxyXG4gICAgICAgICAgXCJvby9hY2Nlc3MtY29udHJvbFwiLFxyXG4gICAgICAgICAgXCJvby9jb2RlLWluaXRcIixcclxuICAgICAgICAgIFwib28vYWJzdHJhY3RcIixcclxuICAgICAgICAgIFwib28vaW50ZXJmYWNlXCIsXHJcbiAgICAgICAgICBcIm9vL2Fic3RyYWN0LXZzLWludGVyZmFjZVwiLFxyXG4gICAgICAgICAgXCJvby9pbm5lci1jbGFzc1wiLFxyXG4gICAgICAgICAgXCJvby90aGlzLXN1cGVyXCIsXHJcbiAgICAgICAgICBcImJhc2ljLWV4dHJhLW1lYWwvb3ZlcnJpZGUtb3ZlcmxvYWRcIixcclxuICAgICAgICAgIFwib28vc3RhdGljXCIsXHJcbiAgICAgICAgICBcIm9vL2ZpbmFsXCIsXHJcbiAgICAgICAgICBcIm9vL2VuY2Fwc3VsYXRpb25cIixcclxuICAgICAgICAgIFwib28vZXh0ZW5kcy1iaWdzYWlcIixcclxuICAgICAgICAgIFwib28vcG9seW1vcnBoaXNtXCIsXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIjIuNSBcdTk2QzZcdTU0MDhcdTY4NDZcdTY3QjZcdUZGMDhcdTVCQjlcdTU2NjhcdUZGMDlcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXCJjb2xsZWN0aW9uL2dhaWxhblwiLFxyXG4gICAgICAgICAgXCJjb2xsZWN0aW9uL2FycmF5bGlzdFwiLFxyXG4gICAgICAgICAgXCJjb2xsZWN0aW9uL2xpbmtlZGxpc3RcIixcclxuICAgICAgICAgIFwiY29sbGVjdGlvbi9saXN0LXdhci0yXCIsXHJcbiAgICAgICAgICBcImNvbGxlY3Rpb24vaXRlcmF0b3ItaXRlcmFibGVcIixcclxuICAgICAgICAgIFwiY29sbGVjdGlvbi9mYWlsLWZhc3RcIixcclxuICAgICAgICAgIFwiY29sbGVjdGlvbi9oYXNobWFwXCIsXHJcbiAgICAgICAgICBcImNvbGxlY3Rpb24vbGlua2VkaGFzaG1hcFwiLFxyXG4gICAgICAgICAgXCJjb2xsZWN0aW9uL3RyZWVtYXBcIixcclxuICAgICAgICAgIFwiY29sbGVjdGlvbi9hcnJheWRlcXVlXCIsXHJcbiAgICAgICAgICBcImNvbGxlY3Rpb24vUHJpb3JpdHlRdWV1ZVwiLFxyXG4gICAgICAgICAgXCJjb2xsZWN0aW9uL1dlYWtIYXNoTWFwXCIsXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiMi42IElPXCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHByZWZpeDpcImlvL1wiLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIFwic2hhbmd0b3VcIixcclxuICAgICAgICAgIFwiZmlsZS1wYXRoXCIsXHJcbiAgICAgICAgICBcInN0cmVhbVwiLFxyXG4gICAgICAgICAgXCJyZWFkZXItd3JpdGVyXCIsXHJcbiAgICAgICAgICBcImJ1ZmZlclwiLFxyXG4gICAgICAgICAgXCJjaGFyLWJ5dGVcIixcclxuICAgICAgICAgIFwic2VyaWFsaXplXCIsXHJcbiAgICAgICAgICBcIlNlcmlhbGl6YmFsZVwiLFxyXG4gICAgICAgICAgXCJ0cmFuc2llbnRcIixcclxuICAgICAgICAgIFwicHJpbnRcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIjIuNyBcdTVGMDJcdTVFMzhcdTU5MDRcdTc0MDZcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgcHJlZml4OlwiZXhjZXB0aW9uL1wiLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIFwiZ2FpbGFuXCIsXHJcbiAgICAgICAgICBcInRyeS13aXRoLXJlc291Y2VzXCIsXHJcbiAgICAgICAgICBcInNoaWppYW5cIixcclxuICAgICAgICAgIFwibnBlXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCIyLjggXHU1RTM4XHU3NTI4XHU1REU1XHU1MTc3XHU3QzdCXCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHByZWZpeDpcImNvbW1vbi10b29sL1wiLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIFwiYXJyYXlzXCIsXHJcbiAgICAgICAgICBcImNvbGxlY3Rpb25zXCIsXHJcbiAgICAgICAgICBcImh1dG9vbFwiLFxyXG4gICAgICAgICAgXCJndWF2YVwiLFxyXG4gICAgICAgICAgXCJ1dGlsc1wiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiMi45IEphdmFcdTY1QjBcdTcyNzlcdTYwMjdcIixcclxuICAgICAgICAgIHByZWZpeDogXCJqYXZhOC9cIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIFwic3RyZWFtXCIsXHJcbiAgICAgICAgICBcIm9wdGlvbmFsXCIsXHJcbiAgICAgICAgICBcIkxhbWJkYVwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiMi4xMCBKYXZhXHU5MUNEXHU4OTgxXHU3N0U1XHU4QkM2XHU3MEI5XCIsXHJcbiAgICAgICAgICBwcmVmaXg6XCJiYXNpYy1leHRyYS1tZWFsL1wiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgXCJqYXZhLXVuaWNvZGVcIixcclxuICAgICAgICAgIFwiaW50LWNhY2hlXCIsXHJcbiAgICAgICAgICBcImJveFwiLFxyXG4gICAgICAgICAgXCJkZWVwLWNvcHlcIixcclxuICAgICAgICAgIFwiaGFzaGNvZGVcIixcclxuICAgICAgICAgIFwiZXF1YWxzLWhhc2hjb2RlXCIsXHJcbiAgICAgICAgICBcIk92ZXJyaWRpbmdcIixcclxuICAgICAgICAgIFwicGFzcy1ieS12YWx1ZVwiLFxyXG4gICAgICAgICAgXCJjb21wYXJhYmxlLW9tcGFyYXRvclwiLFxyXG4gICAgICAgICAgXCJqZGs5LWNoYXItYnl0ZS1zdHJpbmdcIixcclxuICAgICAgICAgIFwiamRrLXdoaWxlLWZvci13dXhpYW4teHVuaHVhblwiLFxyXG4gICAgICAgICAgXCJjbGFzcy1vYmplY3RcIixcclxuICAgICAgICAgIFwiaW5zdGFuY2VvZlwiLFxyXG4gICAgICAgICAgXCJpbnN0YW5jZW9mLWp2bVwiLFxyXG4gICAgICAgICAgXCJpbW11dGFibGVcIixcclxuICAgICAgICAgIFwidmFyYWJsZXNcIixcclxuICAgICAgICAgIFwiZ2VuZXJpY1wiLFxyXG4gICAgICAgICAgXCJ0cnVlLWdlbmVyaWNcIixcclxuICAgICAgICAgIFwiYW5ub3RhdGlvblwiLFxyXG4gICAgICAgICAgXCJlbnVtXCIsXHJcbiAgICAgICAgICBcImZhbnNoZVwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiMi4xMSBcdTdGNTFcdTdFRENcdTdGMTZcdTdBMEJcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgcHJlZml4OiBcInNvY2tldC9cIixcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwic29ja2V0XCIsXHJcbiAgICAgICAgICAgIFwiaHR0cFwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiMi4xMiBOSU9cIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgcHJlZml4OiBcIm5pby9cIixcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwid2h5XCIsXHJcbiAgICAgICAgICAgIFwicnVtZW5cIixcclxuICAgICAgICAgICAgXCJtb3hpbmdcIixcclxuICAgICAgICAgICAgXCJuZXR3b3JrLWNvbm5lY3RcIixcclxuICAgICAgICAgICAgXCJCSU9OSU9BSU9cIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIjIuMTMgXHU1RTc2XHU1M0QxXHU3RjE2XHU3QTBCXCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHByZWZpeDogXCJ0aHJlYWQvXCIsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgXCJ3YW5nemhlLXRocmVhZFwiLFxyXG4gICAgICAgICAgXCJ0aHJlYWQtc3RhdGUtYW5kLW1ldGhvZFwiLFxyXG4gICAgICAgICAgXCJ0aHJlYWQtZ3JvdXAtYW5kLXRocmVhZC1wcmlvcml0eVwiLFxyXG4gICAgICAgICAgXCJ3aHktbmVlZC10aHJlYWRcIixcclxuICAgICAgICAgIFwidGhyZWFkLWJyaW5nLXNvbWUtcHJvYmxlbVwiLFxyXG4gICAgICAgICAgXCJqbW1cIixcclxuICAgICAgICAgIFwidm9sYXRpbGVcIixcclxuICAgICAgICAgIFwic3luY2hyb25pemVkLTFcIixcclxuICAgICAgICAgIFwic3luY2hyb25pemVkXCIsXHJcbiAgICAgICAgICBcImNhc1wiLFxyXG4gICAgICAgICAgXCJhcXNcIixcclxuICAgICAgICAgIFwibG9ja1wiLFxyXG4gICAgICAgICAgXCJzdW9cIixcclxuICAgICAgICAgIFwicGlhbnhpYW5nc3VvXCIsXHJcbiAgICAgICAgICBcInJlZW50cmFudExvY2tcIixcclxuICAgICAgICAgIFwiUmVlbnRyYW50UmVhZFdyaXRlTG9ja1wiLFxyXG4gICAgICAgICAgXCJjb25kaXRpb25cIixcclxuICAgICAgICAgIFwiTG9ja1N1cHBvcnRcIixcclxuICAgICAgICAgIFwibWFwXCIsXHJcbiAgICAgICAgICBcIkNvbmN1cnJlbnRIYXNoTWFwXCIsXHJcbiAgICAgICAgICBcIkNvbmN1cnJlbnRMaW5rZWRRdWV1ZVwiLFxyXG4gICAgICAgICAgXCJDb3B5T25Xcml0ZUFycmF5TGlzdFwiLFxyXG4gICAgICAgICAgXCJUaHJlYWRMb2NhbFwiLFxyXG4gICAgICAgICAgXCJCbG9ja2luZ1F1ZXVlXCIsXHJcbiAgICAgICAgICBcInBvb2xcIixcclxuICAgICAgICAgIFwiU2NoZWR1bGVkVGhyZWFkUG9vbEV4ZWN1dG9yXCIsXHJcbiAgICAgICAgICBcImF0b21pY1wiLFxyXG4gICAgICAgICAgXCJDb3VudERvd25MYXRjaFwiLFxyXG4gICAgICAgICAgXCJmb3JrLWpvaW5cIixcclxuICAgICAgICAgIFwic2hlbmdjaGFuemhlLXhpYW9mZWl6aGVcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIjIuMTQgSlZNXCIsXHJcbiAgICAgICAgICBwcmVmaXg6IFwianZtL1wiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgXCJ3aGF0LWlzLWp2bVwiLFxyXG4gICAgICAgICAgXCJob3ctcnVuLWphdmEtY29kZVwiLFxyXG4gICAgICAgICAgXCJjbGFzcy1sb2FkXCIsXHJcbiAgICAgICAgICBcImNsYXNzLWZpbGUtamllZ291XCIsXHJcbiAgICAgICAgICBcImJ5dGVjb2RlXCIsXHJcbiAgICAgICAgICBcInppamllbWEtemhpbGluZ1wiLFxyXG4gICAgICAgICAgXCJob3ctanZtLXJ1bi16aWppZW1hLXpoaWxpbmdcIixcclxuICAgICAgICAgIFwiaHNkYlwiLFxyXG4gICAgICAgICAgXCJhc21cIixcclxuICAgICAgICAgIFwiY29tcGlsZS1qZGtcIixcclxuICAgICAgICAgIFwibmVpY3VuLWppZWdvdVwiLFxyXG4gICAgICAgICAgXCJ3aGVyZWlzLXRoZS1vYmplY3RcIixcclxuICAgICAgICAgIFwiZ2NcIixcclxuICAgICAgICAgIFwidHVqaWUtZ2NcIixcclxuICAgICAgICAgIFwibWVpdHVhbi05LWdjXCIsXHJcbiAgICAgICAgICBcInByb2JsZW0tdG9vbHNcIixcclxuICAgICAgICAgIFwiaml0XCIsXHJcbiAgICAgICAgICBcIm9vbVwiLFxyXG4gICAgICAgICAgXCJjcHUtcGVyY2VudC0xMDBcIixcclxuICAgICAgICAgIFwiem9uZ2ppZVwiLFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlx1NEUwOVx1MzAwMUphdmFcdTRGMDFcdTRFMUFcdTdFQTdcdTVGMDBcdTUzRDFcIixcclxuICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCIzLjEgXHU1RjAwXHU1M0QxL1x1Njc4NFx1NUVGQVx1NURFNVx1NTE3N1wiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCIzLjEuMSBOZ2lueFwiLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICBcIm5naW54L25naW54XCIsXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiMy4xLjIgSURFXCIsXHJcbiAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICBcImlkZS80LWRlYnVnLXNraWxsXCIsXHJcbiAgICAgICAgICAgICAgXCJpZGUveGVjaGF0XCIsXHJcbiAgICAgICAgICAgICAgXCJpZGUvc2hlbmppLWNoYWppYW4tMTBcIixcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCIzLjEuMyBNYXZlblwiLFxyXG4gICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgXCJtYXZlbi9tYXZlblwiLFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIjMuMS40IEdpdFwiLFxyXG4gICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgXCJnaXQvZ2l0LXFpeXVhblwiLFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCIzLjMgU3ByaW5nXCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlNwcmluZyBBT1BcdTYyNkJcdTc2RjJcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcInNwcmluZ2Jvb3QvYW9wLWxvZ1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJTcHJpbmcgSW9DXHU2MjZCXHU3NkYyXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJzcHJpbmdib290L2lvY1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiMy40IFNwcmluZ0Jvb3RcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU2NDJEXHU1RUZBXHU3QjJDXHU0RTAwXHU0RTJBU3ByaW5nIEJvb3RcdTk4NzlcdTc2RUVcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcInNwcmluZ2Jvb3QvaW5pdGlhbGl6clwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTY1NzRcdTU0MDhNeVNRTFx1NTQ4Q0RydWlkXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJzcHJpbmdib290L215c3FsLWRydWlkXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlx1NjU3NFx1NTQwOEpQQVwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwic3ByaW5nYm9vdC9qcGFcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU2NTc0XHU1NDA4VGh5bWVsZWFmXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJzcHJpbmdib290L3RoeW1lbGVhZlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTVGMDBcdTU0MkZcdTRFOEJcdTUyQTFcdTY1MkZcdTYzMDFcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcInNwcmluZ2Jvb3QvdHJhbnNhY3Rpb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU4RkM3XHU2RUU0XHU1NjY4XHUzMDAxXHU2MkU2XHU2MjJBXHU1NjY4XHUzMDAxXHU3NkQxXHU1NDJDXHU1NjY4XCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJzcHJpbmdib290L0ZpbHRlci1JbnRlcmNlcHRvci1MaXN0ZW5lclwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTY1NzRcdTU0MDhSZWRpc1x1NUI5RVx1NzNCMFx1N0YxM1x1NUI1OFwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwicmVkaXMvcmVkaXMtc3ByaW5nYm9vdFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTY1NzRcdTU0MDhMb2diYWNrXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJzcHJpbmdib290L2xvZ2JhY2tcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTY1NzRcdTU0MDhTd2FnZ2VyLVVJXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJzcHJpbmdib290L3N3YWdnZXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTY1NzRcdTU0MDhLbmlmZTRqXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJnb25nanUva25pZmU0alwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlx1NjU3NFx1NTQwOFNwcmluZ1Rhc2tcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcInNwcmluZ2Jvb3Qvc3ByaW5ndGFza1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlx1NjU3NFx1NTQwOE15QmF0aXMtUGx1cyBBdXRvR2VuZXJhdG9yXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJrYWl5dWFuL2F1dG8tZ2VuZXJhdG9yXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic3ByaW5nYm9vdC9xdWFydHpcIixcclxuICAgICAgICAgICAgXCJzcHJpbmdib290L215YmF0aXNcIixcclxuICAgICAgICAgICAgXCJzcHJpbmdib290L2RvY2tlclwiLFxyXG4gICAgICAgICAgICBcInNwcmluZ2Jvb3QvbWFjb3MtY29kaW5nbW9yZS1ydW5cIixcclxuICAgICAgICAgICAgXCJzcHJpbmdib290L3dpbmRvd3MtY29kaW5nbW9yZS1ydW5cIixcclxuICAgICAgICAgICAgXCJzcHJpbmdib290L2xpbnV4LWNvZGluZ21vcmUtcnVuXCIsXHJcbiAgICAgICAgICAgIFwic3ByaW5nYm9vdC92YWxpZGF0b3JcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIjMuNSBOZXR0eVwiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIm5ldHR5L3J1bWVuXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCIzLjYgXHU4Rjg1XHU1MkE5XHU1REU1XHU1MTc3XCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwiZ29uZ2p1L2Nob2NvXCIsXHJcbiAgICAgICAgICAgIFwiZ29uZ2p1L2JyZXdcIixcclxuICAgICAgICAgICAgXCJnb25nanUvdGFiYnlcIixcclxuICAgICAgICAgICAgXCJnb25nanUvd2FycFwiLFxyXG4gICAgICAgICAgICBcImdvbmdqdS93aW5kdGVybVwiLFxyXG4gICAgICAgICAgICBcImdvbmdqdS9jaGluZXJcIixcclxuICAgICAgICAgICAgXCJnb25nanUvREJlYXZlclwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiMy43IFx1NUYwMFx1NkU5MFx1OEY2RVx1NUI1MFwiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJIVFRQXHU4QzAzXHU3NTI4XHU2ODQ2XHU2N0I2Rm9yZXN0XCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJnb25nanUvZm9yZXN0XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlx1NTM1NVx1NTE0M1x1NkQ0Qlx1OEJENUp1bml0XCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJnb25nanUvanVuaXRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU5NjNGXHU5MUNDXHU1RjAwXHU2RTkwXHU3Njg0ZmFzdGpzb25cIixcclxuICAgICAgICAgICAgICBsaW5rOiBcImdvbmdqdS9mYXN0anNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdThDMzdcdTZCNENcdTVGMDBcdTZFOTBcdTc2ODRHc29uXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJnb25nanUvZ3NvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJTcHJpbmdCb290XHU1MTg1XHU3RjZFXHU3Njg0SmFja3NvblwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwiZ29uZ2p1L2phY2tzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU2NUU1XHU1RkQ3XHU2ODQ2XHU2N0I2XHU3Njg0XHU5RjNCXHU3OTU2TG9nNGpcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcImdvbmdqdS9sb2c0alwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTlBRDhcdTYwMjdcdTgwRkRcdTY1RTVcdTVGRDdcdTY4NDZcdTY3QjZMb2c0ajJcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcImdvbmdqdS9sb2c0ajJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiU3ByaW5nIEJvb3RcdTUxODVcdTdGNkVcdTc2ODRMb2diYWNrXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJnb25nanUvbG9nYmFja1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTY1RTVcdTVGRDdcdTk1RThcdTk3NjJTTEY0SlwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwiZ29uZ2p1L3NsZjRqXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiMy44IFx1NTIwNlx1NUUwM1x1NUYwRlwiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJFbGFzdGljc2VhcmNoXHU1MTY1XHU5NUU4XCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJlbGFzdGljc2VhcmNoL3J1bWVuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU4MDRBXHU4MDRBWm9vS2VlcGVyXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJ6b29rZWVwZXIvamliZW5qaWVzaGFvXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU4MDRBXHU4MDRBXHU1RkFFXHU2NzBEXHU1MkExXHU3RjUxXHU1MTczXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJtaWNyb3NlcnZpY2UvYXBpLXdhbmdndWFuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIjMuOSBcdTZEODhcdTYwNkZcdTk2MUZcdTUyMTdcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiUmFiYml0TVFcdTUxNjVcdTk1RThcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcIm1xL3JhYmJpdG1xLXJ1bWVuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU1OTgyXHU0RjU1XHU0RkREXHU5NjlDXHU2RDg4XHU2MDZGXHU0RTBEXHU0RTIyXHU1OTMxXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJtcS8xMDAtYnVkaXVzaGlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1xL2thZmthXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlx1NTZEQlx1MzAwMVx1NjU3MFx1NjM2RVx1NUU5M1wiLFxyXG4gICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIk15U1FMXCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIk15U1FMXHU1NDhDUmVkaXNcdTY1NzBcdTYzNkVcdTRFMDBcdTgxRjRcdTYwMjdcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcIm15c3FsL3JlZGlzLXNodWp1LXlpemhpeGluZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJSZWRpc1wiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJSZWRpc1x1NTE2NVx1OTVFOFwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwicmVkaXMvcnVtZW5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTdGMTNcdTVCNThcdTk2RUFcdTVEMjlcdTMwMDFcdTdBN0ZcdTkwMEZcdTMwMDFcdTUxRkJcdTdBN0ZcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcInJlZGlzL3h1ZWJlbmctY2h1YW50b3UtamljaHVhblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJNb25nb0RCXCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwibW9uZ29kYi9ydW1lblwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJcdTRFOTRcdTMwMDFcdThCQTFcdTdCOTdcdTY3M0FcdTU3RkFcdTc4NDBcIixcclxuICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgIHByZWZpeDogXCJjcy9cIixcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlx1OEJBMVx1N0I5N1x1NjczQVx1NjRDRFx1NEY1Q1x1N0NGQlx1N0VERlwiLFxyXG4gICAgICAgICAgbGluazogXCJvc1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJcdThCQTFcdTdCOTdcdTY3M0FcdTdGNTFcdTdFRENcIixcclxuICAgICAgICAgIGxpbms6IFwid2FuZ2x1b1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlx1NTE2RFx1MzAwMVx1NkM0Mlx1ODA0Q1x1OTc2Mlx1OEJENVwiLFxyXG4gICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlx1OTc2Mlx1OEJENVx1OTg5OCZcdTUxNkJcdTgwQTFcdTY1ODdcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgcHJlZml4OlwiaW50ZXJ2aWV3L1wiLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgXCJqYXZhLTM0XCIsXHJcbiAgICAgICAgICAgIFwiamF2YS1oYXNobWFwLTEzXCIsXHJcbiAgICAgICAgICAgIFwicmVkaXMtMTJcIixcclxuICAgICAgICAgICAgXCJteXNxbC02MFwiLFxyXG4gICAgICAgICAgICBcImR1YmJvLTE3XCIsXHJcbiAgICAgICAgICAgIFwiamF2YS1iYXNpYy1iYWd1d2VuXCIsXHJcbiAgICAgICAgICAgIFwiamF2YS10aHJlYWQtYmFndXdlblwiLFxyXG4gICAgICAgICAgICBcImphdmEtanZtLWJhZ3V3ZW5cIixcclxuICAgICAgICAgICAgXCJtaWFuc2hpZ3Vhbi1iaWdmaWxlLW1pYW9jaHVhblwiLFxyXG4gICAgICAgICAgICBcIm1pYW5zaGlndWFuLWZlbmt1ZmVuYmlhb1wiLFxyXG4gICAgICAgICAgICBcIm1pYW5zaGlndWFuLXlvdWh1aXF1YW5cIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlx1NEYxOFx1OEQyOFx1OTc2Mlx1N0VDRlwiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBwcmVmaXg6XCJtaWFuamluZy9cIixcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwic2hhbmdhbmFsaXl1blwiLFxyXG4gICAgICAgICAgICBcInNoZXp5bm1qZnhoZWxtdHR0amRkZFwiLFxyXG4gICAgICAgICAgICBcInh1ZWx5YmR6aGVsb2ZmZXJcIixcclxuICAgICAgICAgICAgXCJodWFueGd6bFwiLFxyXG4gICAgICAgICAgICBcInF1empsc3NwZHhcIixcclxuICAgICAgICAgICAgXCJ6aGVpc255bHpsZGh6ZFwiLFxyXG4gICAgICAgICAgICBcImNoZW5neHlzcG5oeGFnemxcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlx1OTc2Mlx1OEJENVx1NTFDNlx1NTkwN1wiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIm5pY2UtYXJ0aWNsZS93ZWl4aW4vemlqeGpqZHlmcXpnbFwiLFxyXG4gICAgICAgICAgICBcIm5pY2UtYXJ0aWNsZS93ZWl4aW4vbWlhbnNtdGdsXCIsXHJcbiAgICAgICAgICAgIFwibmljZS1hcnRpY2xlL3dlaXhpbi9sdW9jemJtc2RkeWJcIixcclxuICAgICAgICAgICAgXCJuaWNlLWFydGljbGUvd2VpeGluL3lvdWR4emhobWp6bHljZnhcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlx1NTdDRVx1NUUwMlx1OTAwOVx1NjJFOVwiLFxyXG4gICAgICAgICAgcHJlZml4OiBcImNpdHlzZWxlY3QvXCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwiYmVpamluZ1wiLFxyXG4gICAgICAgICAgICBcImNoZW5nZHVcIixcclxuICAgICAgICAgICAgXCJndWFuZ3pob3VcIixcclxuICAgICAgICAgICAgXCJoYW5nemhvdVwiLFxyXG4gICAgICAgICAgICBcIm5hbmppbmdcIixcclxuICAgICAgICAgICAgXCJxaW5nZGFvXCIsXHJcbiAgICAgICAgICAgIFwic2hlbnpoZW5cIixcclxuICAgICAgICAgICAgXCJzdXpob3VcIixcclxuICAgICAgICAgICAgXCJ4aWFuXCIsXHJcbiAgICAgICAgICAgIFwiemhlbmd6aG91XCIsXHJcbiAgICAgICAgICAgIFwiamluYW5cIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiXHU0RTAzXHUzMDAxXHU1QjY2XHU0RTYwXHU1RUZBXHU4QkFFXCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICBwcmVmaXg6IFwieHVleGlqaWFueWkvXCIsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICBcIkxlYXJuQ1MtQnlZb3Vyc2VsZlwiLFxyXG4gICAgICAgICAgXCJyZWFkLWNzYXBwXCIsXHJcbiAgICAgICAgICBcImVsZWN0cm9uLWluZm9ybWF0aW9uLWVuZ2luZWVyaW5nXCIsXHJcbiAgICAgICAgICBcImdhb2thby16aGl5dWFuLWNzXCIsXHJcbiAgICAgICAgICBcInRlc3QtcHJvZ3JhbW1lci1yZWFkLWJvb2tzXCIsXHJcbiAgICAgICAgICBcInhpYW96aGFvLWphdmEtc2hvdWxkLW1hc3RlclwiLFxyXG4gICAgICAgICAgXCJjaGVuZ3h1eXVhbi1mdXllXCIsXHJcbiAgICAgICAgICBcInJ1aHpmemRnenpjeGN6XCIsXHJcbiAgICAgICAgICBcImdhb2JpbmdmYS1qaW5neWFuLWhzbWNvbXB1dGVyXCIsXHJcbiAgICAgICAgICBcImhyLXhpbnppXCIsXHJcbiAgICAgICAgICBcIjM1LXdlaWppXCIsXHJcbiAgICAgICAgICBcIjIwcmVuLWl0LXF1bWFcIixcclxuICAgICAgICAgIFwiYmVua2VzaGVuZy1hbGktdGVuZ3h1blwiLFxyXG4gICAgICAgICAgXCI0MDhcIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJcdTUxNkJcdTMwMDFcdTc3RTVcdThCQzZcdTVFOTNcdTY0MkRcdTVFRkFcIixcclxuICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgIHByZWZpeDogXCJzemp5L1wiLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgXCJidXktY2xvdWQtc2VydmVyXCIsXHJcbiAgICAgICAgICBcImluc3RhbGwtYmFvdGEtbWlhbmJhblwiLFxyXG4gICAgICAgICAgXCJidXktZG9tYWluXCIsXHJcbiAgICAgICAgICBcInJlY29yZC1kb21haW5cIixcclxuICAgICAgICAgIFwiaHR0cHMtZG9tYWluXCIsXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiXHU0RTVEXHUzMDAxXHU4MDU0XHU3Q0ZCXHU0RjVDXHU4MDA1XCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICBwcmVmaXg6IFwiYWJvdXQtdGhlLWF1dGhvci9cIixcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICBcImJ6aGFuLTEwd2FuXCIsXHJcbiAgICAgICAgXCJ6aGlodS0xMDAwd2FuXCIsXHJcbiAgICAgICAgXCJjc2RuLTEwMDB3YW5cIixcclxuICAgICAgICBcInJlYWRtZS5tZFwiLFxyXG4gICAgICAgIFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG59KTtcclxuXHJcblxyXG5cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyUSxTQUFTLHVCQUF1QjtBQUMzUyxTQUFTLHFCQUFxQjtBQUM5QixTQUFTLGlCQUFpQjtBQUMxQixTQUFTLHdCQUF3Qjs7O0FDSHdPLFNBQVMsaUJBQWlCOzs7QUNBeEIsU0FBUyxjQUFjO0FBRWxTLElBQU8saUJBQVEsT0FBTztBQUFBLEVBQ3BCO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBO0FBQUEsRUFHUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsTUFDUjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOzs7QUM5QzRRLFNBQVMsZUFBZTtBQUM5UixJQUFNLGdCQUFnQixRQUFRO0FBQUEsRUFDbkMsbUJBQW1CO0FBQUEsSUFDakI7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUEseUJBQXlCO0FBQUEsSUFDdkI7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUEsRUFDQSxpQkFBaUI7QUFBQSxJQUNmO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUEsRUFDQSxxQkFBcUI7QUFBQSxJQUNuQjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxLQUFLO0FBQUEsSUFDSDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0UsUUFBUTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1Y7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1Y7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNWO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1Y7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBRUE7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBRVY7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBRUE7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsUUFBTztBQUFBLFVBQ1AsVUFBVTtBQUFBLFlBQ1Y7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFFBQU87QUFBQSxVQUNQLFVBQVU7QUFBQSxZQUNWO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixRQUFPO0FBQUEsVUFDUCxVQUFVO0FBQUEsWUFDVjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNWO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFFBQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNWO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFFBQVE7QUFBQSxVQUNSLFVBQVU7QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsUUFBUTtBQUFBLFVBQ1IsVUFBVTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixRQUFRO0FBQUEsVUFDUixVQUFVO0FBQUEsWUFDVjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDVjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUVBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNSO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixVQUFVO0FBQUEsZ0JBQ1I7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLGFBQWE7QUFBQSxjQUNiLFVBQVU7QUFBQSxnQkFDVjtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLGFBQWE7QUFBQSxjQUNiLFVBQVU7QUFBQSxnQkFDVjtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sYUFBYTtBQUFBLGNBQ2IsVUFBVTtBQUFBLGdCQUNWO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNSO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDUjtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDUjtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFFRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDUjtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDUjtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNSO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxRQUNSO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsUUFBTztBQUFBLFVBQ1AsVUFBVTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixRQUFPO0FBQUEsVUFDUCxVQUFVO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFB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
