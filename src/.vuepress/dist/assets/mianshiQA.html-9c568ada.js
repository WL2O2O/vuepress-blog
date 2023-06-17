const n=JSON.parse('{"key":"v-7d08789b","path":"/mianshi/mianshiQA.html","title":"面试问答","lang":"zh-CN","frontmatter":{"title":"面试问答","shortTitle":"Java开发岗面试问答","sticky":true,"category":["面经"],"tag":["Java"],"description":"Java开发岗面试经验，我的第一次面试","head":[["meta",{"name":"keywords","content":"Java,Java SE,Java基础,Java教程,Java程序员进阶之路,Java入门,教程,复盘Java基础知识,Java随笔,复盘Java基础知识, 面试经验, 面试官怎么问, Java面试会问什么, 面试怎么回答, Java面试怎么准备"}],["meta",{"property":"og:url","content":"https://wlei224.gitee.io/mianshi/mianshiQA.html"}],["meta",{"property":"og:site_name","content":"CS_GUIDER"}],["meta",{"property":"og:title","content":"面试问答"}],["meta",{"property":"og:description","content":"Java开发岗面试经验，我的第一次面试"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-17T00:20:00.000Z"}],["meta",{"property":"article:author","content":"WLei224"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:modified_time","content":"2023-06-17T00:20:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"面试问答\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-17T00:20:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"WLei224\\",\\"url\\":\\"/aboutguider/\\"}]}"]]},"headers":[],"git":{"createdTime":1686961200000,"updatedTime":1686961200000,"contributors":[{"name":"WLei224","email":"1149630057@qq.com","commits":1}]},"readingTime":{"minutes":10.95,"words":3285},"filePathRelative":"mianshi/mianshiQA.md","localizedDate":"2023年6月17日","excerpt":"<blockquote>\\n<p>真实面试流程：</p>\\n</blockquote>\\n<ol>\\n<li>\\n<p>先自我介绍一下</p>\\n</li>\\n<li>\\n<p>Java都学了哪些技术栈（可能要看与简历是否一致）</p>\\n</li>\\n<li>\\n<p>你的第一个项目后台是用JSP写的吗？（是jsp写的前台，说错了，回答了是，但是没有过多问）</p>\\n</li>\\n<li>\\n<p>这两个项目中说一个你比较熟悉的项目。（紧张，还有点卡壳，项目部分准备的不充分，大意了）</p>\\n</li>\\n<li>\\n<p>数据库用的MongoDB？（回答用的MongoDB和Redis以及mysql）</p>\\n</li>\\n<li>\\n<p>项目中用到了Redis的哪些？（用到了Redis的缓存，用于缓存一些不用频繁更新的数据，加载起来比较快）</p>\\n</li>\\n<li>\\n<p>哪些数据做了缓存？（省市区三级联动信息，还有医院的科室信息）然后追问：这些信息是不需要经常改动的是吧？所以你就不用考虑读写不一致的问题？</p>\\n</li>\\n<li>\\n<p>Redis是用的集群的还是？（随便回答了一下）</p>\\n</li>\\n<li>\\n<p>你这个项目还涉及支付功能了吧？你是怎么做的？（是的，支付功能调用了微信的接口，通过OAuth2机制，支付的流程等）</p>\\n</li>\\n<li>\\n<p>像这个项目比较难的地方有哪些？（支付模块中，多人预约下单，没有涉及到订单超卖的问题）</p>\\n</li>\\n<li>\\n<blockquote>\\n<p>注册中心用的什么？（nacos）说说你对nacos的理解？（没有答上来）</p>\\n<p>Nacos主要用于实现服务注册和发现、配置管理、服务路由和负载均衡、服务熔断和降级等功能，是构建微服务架构的重要组件。</p>\\n<p>Spring Cloud Nacos并不是一款全能的服务治理组件，但它提供了方便集成的API，可以与Spring Cloud和Nacos的其他组件集成，来实现服务熔断、降级、负载均衡等功能，常用注解有：</p>\\n<p>@NacosPropertySource、@NacosInjected、@NacosValue、@NacosConfigurationProperties、@EnableDiscoveryClient</p>\\n</blockquote>\\n</li>\\n<li>\\n<blockquote>\\n<p>rabbitMQ做了哪部分的功能？</p>\\n<p>实现定时向用户推送预约挂号的消息</p>\\n</blockquote>\\n</li>\\n<li>\\n<blockquote>\\n<p>常用的集合有哪些？</p>\\n<ol>\\n<li>List：List是一种有序的集合，允许存储重复的元素。Java中常用的List实现类有ArrayList、LinkedList和Vector。</li>\\n<li>Set：Set是一种不允许存储重复元素的集合。Java中常用的Set实现类有HashSet、LinkedHashSet和TreeSet。</li>\\n<li>Map：Map是一种键值对的映射表，每个键对应一个值。Java中常用的Map实现类有HashMap、LinkedHashMap和TreeMap。</li>\\n<li>Queue：Queue是一种先进先出（FIFO）的队列，通常用于实现任务调度、消息传递等功能。Java中常用的Queue实现类有LinkedList、PriorityQueue和ArrayDeque。</li>\\n<li>Stack：Stack是一种后进先出（LIFO）的栈，通常用于实现回溯、撤销等功能。Java中提供了Stack类作为栈的实现。</li>\\n<li>Vector：Vector是一种可以动态增长和缩小的数组，与ArrayList相似，但是Vector是线程安全的，因此在多线程环境下使用较为安全。</li>\\n<li>Hashtable：Hashtable是一种使用键值对存储数据的哈希表，与HashMap相似，但是Hashtable是线程安全的，因此在多线程环境下使用较为安全。</li>\\n</ol>\\n</blockquote>\\n</li>\\n<li>\\n<blockquote>\\n<p>什么是反射？反射的底层用了什么？</p>\\n<p>反射是Java语言的一种特性，允许程序在运行的时候动态的获取到类的相关信息，包括类的属性、方法和构造器等。通过反射，程序可以在运行时动态地创建对象、调用方法、访问属性，无需再编译时确定这些信息。反射使得Java程序具有更高的灵活性和可拓展性。</p>\\n<p>反射的底层主要用到了JVM的动态加载和动态链接机制。</p>\\n<p><em>在Java程序运行时，JVM会根据类的全限定名从类路径中找到对应的字节码文件，然后将其加载到内存中，并生成对应的Class对象。这个过程称为类的动态加载（Dynamic Loading）。</em></p>\\n<p><em>在类加载完成后，JVM会使用字节码解析器将类的字节码文件解析成JVM可以理解的数据结构，例如方法表（Method Table）、字段表（Field Table）等。然后，JVM根据这些数据结构生成对应的Class对象，该对象包含了类的所有信息，例如类的名称、父类、接口、方法、属性等。这个过程称为类的动态链接（Dynamic Linking）。</em></p>\\n<p>在类加载和链接过程中，JVM会将类的字节码文件解析成JVM可以理解的数据结构，并生成对应的Class对象。程序可以通过Class对象获取类的信息，并在运行时动态地操作类的信息。</p>\\n</blockquote>\\n</li>\\n<li>\\n<blockquote>\\n<p>SpringMVC Spring SpringBoot常用注解？@Controller 和 @RestController有什么区别？</p>\\n<ol>\\n<li>@Controller：标识该类为Spring MVC中的Controller组件，用于处理HTTP请求。</li>\\n<li>@RestController：是@Controller的扩展，用于表示该类中的所有方法都返回JSON或XML格式的数据，常用于实现RESTful API。</li>\\n<li>@RequestMapping：用于映射HTTP请求的URL路径，可以用于类级别和方法级别。</li>\\n<li>@RequestParam：用于获取请求参数的值，常用于GET请求。</li>\\n<li>@PathVariable：用于获取URL中的占位符参数值，常用于RESTful API中。</li>\\n<li>@Autowired：用于自动装配Spring Bean，常用于依赖注入。</li>\\n<li>@Component：通用的注解，用于标识Spring Bean。</li>\\n<li>@Service：用于标识业务逻辑层的组件。</li>\\n<li>@Repository：用于标识数据访问层的组件。</li>\\n<li>@Configuration：用于标识配置类，常用于配置Spring Bean。</li>\\n</ol>\\n<p>关于@Controller和@RestController的区别，主要在于返回值的不同。@Controller用于处理HTTP请求并返回视图，而@RestController则返回JSON或XML格式的数据，常用于实现RESTful API。在@RestController中，方法的返回值会直接作为HTTP Response的Body部分返回给客户端，而在@Controller中，方法的返回值通常是视图名称或ModelAndView对象。</p>\\n<p>因此，如果需要返回JSON或XML格式的数据，应该使用@RestController；如果需要返回视图，则应该使用@Controller。</p>\\n</blockquote>\\n</li>\\n<li>\\n<blockquote>\\n<p>MyBatis中$和#有什么区别？</p>\\n<p>在MyBatis中，#和$都是用于传递参数的符号，但它们的含义和使用方式有所不同。</p>\\n<p>#用于传递参数时，会将参数值转义并放入SQL语句中，例如：</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>SELECT * FROM user WHERE id = #{id}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div><p>在执行SQL语句时，MyBatis会使用PreparedStatement进行参数绑定，避免SQL注入的问题。</p>\\n<p>$用于传递参数时，会将参数的值直接替换到SQL语句中，例如：</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>SELECT * FROM user WHERE id = ${id}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div><p>在执行SQL语句时，MyBatis不会对参数进行转义和检查，存在SQL注入的风险。</p>\\n<p>因此，使用#可以提高应用程序的安全性，避免SQL注入的问题，但是需要注意的是，在拼接动态SQL语句时，$可以提高SQL语句的灵活性和可读性。如果使用$时，需要自行确保参数的安全性，避免SQL注入的风险。</p>\\n</blockquote>\\n</li>\\n<li>\\n<blockquote>\\n<p>SpringBoot中打的jar包和普通的包有什么区别？</p>\\n<p>在Spring Boot中，可以使用Maven或Gradle构建打包应用程序。针对应用程序的不同打包方式，产生的包也会有所不同，主要区别如下：</p>\\n<ol>\\n<li>\\n<p>普通的包：通常是将应用程序打包成WAR或JAR格式的文件，可以在运行时通过Java命令或容器进行启动，需要事先安装或配置Java运行环境。</p>\\n</li>\\n<li>\\n<p>Spring Boot的可执行JAR包：是一种自包含的、可以直接运行的应用程序包，包含了应用程序的全部依赖和配置信息，不需要事先安装或配置Java运行环境。通过执行该JAR包，可以直接启动应用程序。</p>\\n</li>\\n</ol>\\n<p>Spring Boot的可执行JAR包相对于普通的包，具有以下优点：</p>\\n<ol>\\n<li>\\n<p>简化部署：Spring Boot的可执行JAR包是自包含的，不需要事先安装或配置Java运行环境，使得部署变得更加简单和便捷。</p>\\n</li>\\n<li>\\n<p>依赖管理：Spring Boot使用Maven或Gradle进行依赖管理，可以自动管理依赖的版本和冲突，避免了版本管理的繁琐和错误。</p>\\n</li>\\n<li>\\n<p>配置管理：Spring Boot可以通过配置文件、注解和代码进行配置，具有更加灵活和方便的配置管理方式。</p>\\n</li>\\n<li>\\n<p>内嵌容器：Spring Boot可以内嵌Tomcat、Jetty或Undertow等Web容器，不需要额外安装和配置容器，使得应用程序更加轻量级和便捷。</p>\\n</li>\\n</ol>\\n<p>总之，Spring Boot的可执行JAR包相对于普通的包，具有更加简单、便捷、灵活和轻量级的特点，能够更好地满足现代应用程序的需求。</p>\\n</blockquote>\\n</li>\\n<li>\\n<p>技术栈都学到哪些了？（意思是我掌握的不太牢固）</p>\\n</li>\\n<li>\\n<blockquote>\\n<p>MySql做过一些优化吗？（索引优化做了哪些？怎么查看一个sql用到了索引 expalin）</p>\\n<p>是的，MySQL中有很多优化技巧，其中索引优化是最基本、最重要的一种优化方式。下面是一些常见的索引优化技巧：</p>\\n<ol>\\n<li>\\n<p>确保表中的主键和外键都被索引：主键和外键是查询中最常用的字段，如果没有索引会导致查询变慢。</p>\\n</li>\\n<li>\\n<p>对经常查询的列建立索引：如果某个列的查询频率较高，可以建立索引，加速查询。</p>\\n</li>\\n<li>\\n<p>使用复合索引：如果查询中包含多个列，可以使用复合索引，将多个列组合在一起建立索引，提高查询效率。</p>\\n</li>\\n<li>\\n<p>避免在索引列上使用函数或表达式：如果在索引列上使用函数或表达式，会导致索引失效，降低查询效率。</p>\\n</li>\\n<li>\\n<p>避免使用全表扫描：如果查询中没有使用索引，会导致全表扫描，影响查询性能。</p>\\n</li>\\n<li>\\n<p>使用覆盖索引查询：如果查询的列已经被索引覆盖，可以使用覆盖索引查询，避免查询表中的其他列，提高查询效率。</p>\\n</li>\\n<li>\\n<p>定期进行索引维护：可以定期进行索引重构、碎片整理等操作，提高索引的效率和查询性能。</p>\\n</li>\\n</ol>\\n<p>查看一个SQL语句是否使用了索引，可以使用EXPLAIN关键字，例如：</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>EXPLAIN SELECT * FROM user WHERE id = 1;\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div><p>执行该SQL语句后，MySQL会返回查询计划，包括使用的索引、扫描的行数、使用的排序方式等信息。如果查询中使用了索引，那么在查询计划中会看到Using index或Using where等信息。如果查询中没有使用索引，那么在查询计划中会看到Using full scan或Using temporary等信息。</p>\\n</blockquote>\\n</li>\\n<li>\\n<p>多线程平时用过吗？（sychronized和concurrentHashMap）</p>\\n</li>\\n<li>\\n<blockquote>\\n<p>Linux常用命令？怎么查看项目的日志？</p>\\n<ol>\\n<li>\\n<p>ls：列出当前目录下的文件和子目录。</p>\\n</li>\\n<li>\\n<p>cd：改变当前工作目录。</p>\\n</li>\\n<li>\\n<p>mkdir：创建一个新目录。</p>\\n</li>\\n<li>\\n<p>rm：删除文件或目录。</p>\\n</li>\\n<li>\\n<p>cp：复制文件或目录。</p>\\n</li>\\n<li>\\n<p>mv：移动文件或目录。</p>\\n</li>\\n<li>\\n<p>touch：创建一个新文件或修改文件的时间戳。</p>\\n</li>\\n<li>\\n<p>cat：查看文件的内容。</p>\\n</li>\\n<li>\\n<p>grep：在文件中查找指定的字符串。</p>\\n</li>\\n<li>\\n<p>ps：查看当前运行的进程。</p>\\n</li>\\n<li>\\n<p>top：查看系统资源使用情况。</p>\\n</li>\\n<li>\\n<p>df：查看文件系统使用情况。</p>\\n</li>\\n<li>\\n<p>du：查看目录大小。</p>\\n</li>\\n<li>\\n<p>tar：归档和压缩文件。</p>\\n</li>\\n<li>\\n<p>ssh：远程登录到另一台主机。</p>\\n</li>\\n</ol>\\n<p>要查看部署到Linux上的项目日志，可以使用以下命令：</p>\\n<ol>\\n<li>tail：查看文件的末尾几行。</li>\\n</ol>\\n<p>例如，要查看Tomcat日志文件的最后100行，可以使用以下命令：</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>tail -n 100 /var/log/tomcat/catalina.out\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div><ol start=\\"2\\">\\n<li>less：查看大文件的内容。</li>\\n</ol>\\n<p>例如，要查看一个1GB的日志文件，可以使用以下命令：</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>less /var/log/myapp.log\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div><p>在less中，可以使用Page Up、Page Down、上下方向键等进行滚动和搜索。要退出less，可以使用q键。</p>\\n<ol start=\\"3\\">\\n<li>grep：在日志文件中查找指定的字符串。</li>\\n</ol>\\n<p>例如，要查找myapp日志文件中包含ERROR的行，可以使用以下命令：</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>grep ERROR /var/log/myapp.log\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div><p>以上是一些常用的Linux命令，可以帮助开发者快速定位和解决问题。</p>\\n</blockquote>\\n</li>\\n<li>\\n<p>期望薪资和能到岗的时间。</p>\\n</li>\\n</ol>"}');export{n as data};
