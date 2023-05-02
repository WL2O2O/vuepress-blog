import{_ as a,X as e,Y as l,Z as n,$ as t,a0 as p,a1 as s,C as o}from"./framework-28352652.js";const c={},d=s('<h1 id="黑马redis" tabindex="-1"><a class="header-anchor" href="#黑马redis" aria-hidden="true">#</a> 黑马Redis</h1><h2 id="redis介绍" tabindex="-1"><a class="header-anchor" href="#redis介绍" aria-hidden="true">#</a> Redis介绍</h2><p>简介：什么是Redis？Redis是一种基于键值对的非关系型数据库。</p><p>优点：</p><ul><li>满足很多使用场景。Redis数据库比一般的键值对数据库要强大很多，Redis中的value支持多种数据类型与数据结构，例如：String、hash、list、Set、zset（有序集合）、Bitmaps（位图）、HyperLogLog、GEO（地理信息定位）等。<img src="http://images.rl0206.love/202305030140180.png" alt="Redis基本数据结构" loading="lazy"></li><li>基于内存，读写性能出色。同时内存数据可定时通过快照和日志的形式保存到硬盘之上，做到断电不丢失。</li><li>还提供了键过期、发布订阅、事物、流水线、Lua脚本等附加功能。</li></ul><p>应用领域：</p><ul><li>缓存：应用最广的地方，很多web应用都会选择使用Redis作为缓存，以降低数据源压力，提高响应速度。<img src="http://images.rl0206.love/202305030140036.png" alt="Redis缓存" loading="lazy"></li><li>计数器：天然计数功能，可用来记录浏览量、点赞量等</li><li>排行榜：借助Redis提供的列表和有序集合数据结构，合理使用数据结构构建排行榜系统</li><li>社交网络：点赞与差评、粉丝、共同好友、推送、刷新</li><li>消息队列：提供了发布订阅的功能和阻塞队列的功能，可以满足一般消息队列功能</li><li>分布式锁：分布式环境下，利用Redis是西安分布式锁</li></ul><figure><img src="http://images.rl0206.love/202305021641013.png" alt="Redis数据结构介绍" tabindex="0" loading="lazy"><figcaption>Redis数据结构介绍</figcaption></figure><p>Redis有五种基本数据结构。</p><p><strong><code>string</code></strong></p><p>字符串最基础的数据结构。字符串类型的值实际可以是字符串（简单的字符串、复杂的字符串（例如JSON、XML））、数字 （整数、浮点数），甚至是二进制（图片、音频、视频），但是值最大不能超过512MB。</p><p>字符串主要有以下几个典型使用场景：</p><ul><li>缓存功能</li><li>计数</li><li>共享Session</li><li>限速</li></ul><p><strong><code>hash</code></strong></p><p>哈希类型是指键值本身又是一个键值对结构。</p><p>哈希主要有以下典型应用场景：</p><ul><li>缓存用户信息</li><li>缓存对象</li></ul><p><strong><code>list</code></strong></p><p>列表（list）类型是用来存储多个有序的字符串。列表是一种比较灵活的数据结构，它可以充当栈和队列的角色</p><p>列表主要有以下几种使用场景：</p><ul><li>消息队列</li><li>文章列表</li></ul><p><strong><code>set</code></strong></p><p>集合（set）类型也是用来保存多个的字符串元素，但和列表类型不一 样的是，集合中不允许有重复元素，并且集合中的元素是无序的。</p><p>集合主要有如下使用场景：</p><ul><li>标签（tag）</li><li>共同关注</li></ul><p><strong><code>sorted set</code></strong></p><p>有序集合中的元素可以排序。但是它和列表使用索引下标作为排序依据不同的是，它给每个元素设置一个权重（score）作为排序的依据。</p><p>有序集合主要应用场景：</p><ul><li>用户点赞统计</li><li>用户排序</li></ul><p>Redis为什么快？</p><blockquote><p>Redis的速度⾮常的快，单机的Redis就可以⽀撑每秒十几万的并发，相对于MySQL来说，性能是MySQL的⼏⼗倍。速度快的原因主要有⼏点：</p></blockquote><ul><li>完全基于内存</li><li>使用单线程，避免线程切换和竟态产生的消耗</li><li>基于非阻塞的IO多路复用机制</li><li>C语言实现，优化过的数据结构基于几种基本的数据结构，Redis做了大量优化，性能高</li></ul><p>怎么理解多路复用？</p><blockquote><p>引用知乎上一个高赞的回答来解释什么是I/O多路复用。假设你是一个老师，让30个学生解答一道题目，然后检查学生做的是否正确，你有下面几个选择：</p></blockquote><ul><li>第一种选择：按顺序逐个检查，先检查A，然后是B，之后是C、D。。。这中间如果有一个学生卡住，全班都会被耽误。这种模式就好比，你用循环挨个处理socket，根本不具有并发能力。</li><li>第二种选择：你创建30个分身，每个分身检查一个学生的答案是否正确。 这种类似于为每一个用户创建一个进程或者- 线程处理连接。</li><li>第三种选择，你站在讲台上等，谁解答完谁举手。这时C、D举手，表示他们解答问题完毕，你下去依次检查C、D的答案，然后继续回到讲台上等。此时E、A又举手，然后去处理E和A。</li></ul><p>第一种就是阻塞IO模型，第三种就是I/O复用模型。</p><figure><img src="http://images.rl0206.love/202305021556308.png" alt="I/O模型" tabindex="0" loading="lazy"><figcaption>I/O模型</figcaption></figure><p>Redis如何数据持久化？</p><blockquote><p>Redis是完全基于内存的，要想避免数据断电丢失，就必须把数据持久化，数据持久化的方式有两种：RDB、AOF</p></blockquote><ul><li><p>RDB：RDB持久化是把当前进程数据生成快照保存到硬盘的过程，触发RDB持久化过程分为手动触发和自动触发。RDB⽂件是⼀个压缩的⼆进制⽂件，通过它可以还原某个时刻数据库的状态。由于RDB⽂件是保存在硬盘上的，所以即使Redis崩溃或者退出，只要RDB⽂件存在，就可以⽤它来恢复还原数据库的状态。</p><ul><li>手动触发分别对应save和bgsave命令: <img src="http://images.rl0206.love/202305030140505.png" alt="save和bgsave" loading="lazy"><ul><li>save命令：阻塞当前Redis服务器，直到RDB过程完成为止，对于内存比较大的实例会造成长时间阻塞，线上环境不建议使用。</li><li>bgsave命令：Redis进程执行fork操作创建子进程，RDB持久化过程由子进程负责，完成后自动结束。阻塞只发生在fork阶段，一般时间很短。</li></ul></li><li>以下场景会自动触发RDB持久化： <ul><li>使用save相关配置，如“save m n”。表示m秒内数据集存在n次修改时，自动触发bgsave。</li><li>如果从节点执行全量复制操作，主节点自动执行bgsave生成RDB文件并发送给从节点</li><li>执行debug reload命令重新加载Redis时，也会自动触发save操作</li><li>默认情况下执行shutdown命令时，如果没有开启AOF持久化功能则自动执行bgsave。</li></ul></li></ul></li><li><p>AOF（append only file）持久化：以独立日志的方式记录每次写命令， 重启时再重新执行AOF文件中的命令达到恢复数据的目的。AOF的主要作用是解决了数据持久化的实时性，目前已经是Redis持久化的主流方式</p><ul><li><p>AOF的工作流程操作：命令写入 （append）、文件同步（sync）、文件重写（rewrite）、重启加载 （load）</p><figure><img src="http://images.rl0206.love/202305030141847.png" alt="AOF工作流程" tabindex="0" loading="lazy"><figcaption>AOF工作流程</figcaption></figure></li><li><p>流程如下：</p><ul><li>1）所有的写入命令会追加到aof_buf（缓冲区）中。</li><li>2）AOF缓冲区根据对应的策略向硬盘做同步操作。</li><li>3）随着AOF文件越来越大，需要定期对AOF文件进行重写，达到压缩 的目的。</li><li>4）当Redis服务器重启时，可以加载AOF文件进行数据恢复。</li></ul></li></ul></li></ul><h2 id="redis命令" tabindex="-1"><a class="header-anchor" href="#redis命令" aria-hidden="true">#</a> Redis命令</h2>',41),r={href:"https://redis.io/commands/",target:"_blank",rel:"noopener noreferrer"},u=s(`<figure><img src="http://images.rl0206.love/202305021641017.png" alt="image-20230416091404745" tabindex="0" loading="lazy"><figcaption>image-20230416091404745</figcaption></figure><figure><img src="http://images.rl0206.love/202305021641018.png" alt="image-20230416092238674" tabindex="0" loading="lazy"><figcaption>image-20230416092238674</figcaption></figure><figure><img src="http://images.rl0206.love/202305021641019.png" alt="image-20230416093225232" tabindex="0" loading="lazy"><figcaption>image-20230416093225232</figcaption></figure><figure><img src="http://images.rl0206.love/202305021641020.png" alt="image-20230416094344011" tabindex="0" loading="lazy"><figcaption>image-20230416094344011</figcaption></figure><figure><img src="http://images.rl0206.love/202305021641021.png" alt="image-20230416100340583" tabindex="0" loading="lazy"><figcaption>image-20230416100340583</figcaption></figure><figure><img src="http://images.rl0206.love/202305021641022.png" alt="image-20230416100753096" tabindex="0" loading="lazy"><figcaption>image-20230416100753096</figcaption></figure><figure><img src="http://images.rl0206.love/202305021641023.png" alt="image-20230416101608129" tabindex="0" loading="lazy"><figcaption>image-20230416101608129</figcaption></figure><figure><img src="http://images.rl0206.love/202305021641024.png" alt="image-20230416101850417" tabindex="0" loading="lazy"><figcaption>image-20230416101850417</figcaption></figure><figure><img src="http://images.rl0206.love/202305021641026.png" alt="image-20230416102809805" tabindex="0" loading="lazy"><figcaption>image-20230416102809805</figcaption></figure><figure><img src="http://images.rl0206.love/202305021641027.png" alt="image-20230416103712554" tabindex="0" loading="lazy"><figcaption>image-20230416103712554</figcaption></figure><figure><img src="http://images.rl0206.love/202305021641028.png" alt="image-20230416105319879" tabindex="0" loading="lazy"><figcaption>image-20230416105319879</figcaption></figure><p>注意：所有的排名都是升序，若要降序，则在Z的后面加REV即可。</p><h2 id="redis进阶" tabindex="-1"><a class="header-anchor" href="#redis进阶" aria-hidden="true">#</a> Redis进阶</h2><blockquote><p>什么是主从复制？</p></blockquote><ul><li><strong>主从复制</strong>，是指将一台 Redis 服务器的数据，复制到其他的 Redis 服务器。前者称为 <strong>主节点(master)</strong>，后者称为 <strong>从节点(slave)</strong>。且数据的复制是 <strong>单向</strong> 的，只能由主节点到从节点。Redis 主从复制支持 <strong>主从同步</strong> 和 <strong>从从同步</strong> 两种，后者是 Redis 后续版本新增的功能，以减轻主节点的同步负担。</li></ul><blockquote><p>主从复制什么作用？</p></blockquote><ul><li><strong>数据冗余：</strong> 主从复制实现了数据的热备份，是持久化之外的一种数据冗余方式。</li><li><strong>故障恢复：</strong> 当主节点出现问题时，可以由从节点提供服务，实现快速的故障恢复 <em>(实际上是一种服务的冗余)</em>。</li><li><strong>负载均衡：</strong> 在主从复制的基础上，配合读写分离，可以由主节点提供写服务，由从节点提供读服务 <em>（即写 Redis 数据时应用连接主节点，读 Redis 数据时应用连接从节点）</em>，分担服务器负载。尤其是在写少读多的场景下，通过多个从节点分担读负载，可以大大提高 Redis 服务器的并发量。</li><li><strong>高可用基石：</strong> 除了上述作用以外，主从复制还是哨兵和集群能够实施的 <strong>基础</strong>，因此说主从复制是 Redis 高可用的基础。</li></ul><blockquote><p>Redis主从有几种常见的拓扑结构？</p></blockquote><p>Redis的复制拓扑结构可以支持单层或多层复制。</p><p>根据拓扑结构的复杂性可以分为三种：一主一从、一主多从、树状主从。</p><ul><li><p>一主一从结构</p><ul><li><p>一主一从结构是最简单的复制拓扑结构。应用场景：用于主节点出现宕机时从节点提供故障转移支持（故障恢复）</p><figure><img src="http://images.rl0206.love/202305030141752.png" alt="一主一从结构" tabindex="0" loading="lazy"><figcaption>一主一从结构</figcaption></figure></li></ul></li><li><p>一主多从</p><ul><li><p>一主多从结构（又称星形拓扑结构）。应用场景：使得应用端可以利用多个从节点实现读写分离，对于读占比较大的场景，可以把读命令发送到从节点来分担主节点压力（负载均衡）。</p><figure><img src="http://images.rl0206.love/202305030141889.png" alt="一主多从结构" tabindex="0" loading="lazy"><figcaption>一主多从结构</figcaption></figure></li></ul></li><li><p>树状主从</p><ul><li><p>树状主从结构（又称树状拓扑结构）。应用场景：使得从节点不但可以复制主节点数据，同时可以作为其他从节点的主节点继续向下层复制。通过引入复制中间层，可以有效降低主节点负载和需要传送给从节点的数据量（负载均衡）。</p><figure><img src="http://images.rl0206.love/202305030141766.png" alt="树状主从结构" tabindex="0" loading="lazy"><figcaption>树状主从结构</figcaption></figure></li></ul></li></ul><p>上面说了什么是？什么用？ 以及常见的拓扑结构，接下来详细说一说主从的基本原理，一起搞懂Redis主从吧！</p><h2 id="redis客户端" tabindex="-1"><a class="header-anchor" href="#redis客户端" aria-hidden="true">#</a> Redis客户端</h2><figure><img src="http://images.rl0206.love/202305021641029.png" alt="image-20230416111339698" tabindex="0" loading="lazy"><figcaption>image-20230416111339698</figcaption></figure><figure><img src="http://images.rl0206.love/202305021641030.png" alt="image-20230416111856694" tabindex="0" loading="lazy"><figcaption>image-20230416111856694</figcaption></figure><p>Jedis使用的基本步骤：</p><p>1.引入依赖</p><p>2.创建Jedis对象，建立连接</p><p>3.使用Jedis，方法名与Redis命令一致</p><p>4.释放资源</p><p>1、引入依赖</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>&lt;dependency&gt;
    &lt;groupId&gt;redis.clients&lt;/groupId&gt;
    &lt;artifactId&gt;jedis&lt;/artifactId&gt;
    &lt;version&gt;3.7.0&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、使用Jedis连接池创建连接</p><p>Jedis本身是线程不安全的，并且频繁的创建和销毁连接会有性能损耗，因此我们推荐大家使用Jedis连接池代替Jedis的直连方式。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class JedisConnectionFactory {
   private static final JedisPool jedisPool;

   static {
     JedisPoolConfig jedisPoolConfig = new JedisPoolConfig();
     // 最大连接
     jedisPoolConfig.setMaxTotal(8);
     // 最大空闲连接
     jedisPoolConfig.setMaxIdle(8); 
     // 最小空闲连接
     jedisPoolConfig.setMinIdle(0);
     // 设置最长等待时间， ms
     jedisPoolConfig.setMaxWaitMillis(200);
     jedisPool = new JedisPool(jedisPoolConfig, &quot;192.168.150.101&quot;, 6379,
         1000, &quot;123321&quot;);
   }
   // 获取Jedis对象
   public static Jedis getJedis(){
     return jedisPool.getResource();
   }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、使用Jedis进行单元测试</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">Jedis</span> jedis<span class="token punctuation">;</span>
  <span class="token comment">// 单元测试的注释写法</span>
  <span class="token annotation punctuation">@BeforeEach</span>
  <span class="token keyword">void</span> <span class="token function">setUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 建立连接</span>
    jedis <span class="token operator">=</span> <span class="token class-name">JedisConnectionFactory</span><span class="token punctuation">.</span><span class="token function">getJedis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置密码</span>
    jedis<span class="token punctuation">.</span><span class="token function">auth</span><span class="token punctuation">(</span><span class="token string">&quot;123321&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 选择库</span>
    jedis<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 插入数据，方法名称就是redis命令名称，非常简单</span>
    <span class="token class-name">String</span> result <span class="token operator">=</span> jedis<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;result = &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token comment">// 获取数据</span>
    <span class="token class-name">String</span> name <span class="token operator">=</span> jedis<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name = &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
  <span class="token annotation punctuation">@AfterEach</span>
  <span class="token keyword">void</span> <span class="token function">tearDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 释放资源</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>jedis <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      jedis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="springdataredis" tabindex="-1"><a class="header-anchor" href="#springdataredis" aria-hidden="true">#</a> SpringDataRedis</h2><blockquote><p>打破Redis只接收String，接收Object类，内部通过JDK的序列化工具进行转换。（即传入一个Object对象，会将其序列化，将其“剁碎”，传入Redis，若想不剁碎，就需要重写RedisTemplate的序列化方式）</p></blockquote><p>那我们如何重写呢？</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>存：自动化将对象转JSON,</p><p>取：JSON反序列化为对象</p><p>什么原理呢？</p><p>我们会发现，在自动化转JSON时，会在JSON中第一行加入User的CLASS属性（对应的是User类的名称），所以说在反序列化的时候，会将对应的User写进来。巧妙之处就在于JSON串第一行的Class名称记录。</p><p>尽管序列化方式可以满足我们的需求，但时仍然存在问题：为了在反序列化时知道对象的类型，JSON选择将类的Class类型写入JSON结果中，存入Redis，因此导致了额外的内存开销。</p><p>那么，如何解决？如何节省内存空间？</p><p>为了节约内存空间，一般不会使用JSON序列化工具，而会使用String序列化器，但这只能存储String类型的键值对，所以我们的解决方案就是：用的到对象反序列化时，再手动创建对象的序列化和反序列化。</p><figure><img src="http://images.rl0206.love/202305021641031.png" alt="image-20230419105307964" tabindex="0" loading="lazy"><figcaption>image-20230419105307964</figcaption></figure><p>Redis序列化两种方案：</p><p>第一种：自定义Templete，修改RedisTemplete的序列化器为GenericJachson2JsonRedisSerializer；</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class RedisConfig{
	@Bean
	public RedisTemplete&lt;String,Object&gt; redisTemplete(RedisConnectionFactory connectionFactory){
		
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种：使用RedisRedisTemplete，手动序列化，读取时，手动反序列化。</p>`,53);function g(m,v){const i=o("ExternalLinkIcon");return e(),l("div",null,[d,n("p",null,[n("a",r,[t("redis帮助文档"),p(i)])]),u])}const f=a(c,[["render",g],["__file","Redis.html.vue"]]);export{f as default};
