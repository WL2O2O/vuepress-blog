---
title: Redis学习笔记
shortTitle: Redis基础篇
category:
  - Redis
tag:
  - Redis
description: Redis基础语法，以及相关模板
head:
  - - meta
    - name: keywords
      content: 嘿嘿
--- 

# 黑马Redis

## Redis数据结构介绍

![image-20230416085738929](http://images.rl0206.love/202304250154402.png)

[redis帮助文档](https://redis.io/commands/)

## Redis命令 

![image-20230416091404745](http://images.rl0206.love/202304250154407.png)

![image-20230416092238674](http://images.rl0206.love/202304250154409.png)

![image-20230416093225232](http://images.rl0206.love/202304250154410.png)

![image-20230416094344011](http://images.rl0206.love/202304250154411.png)

![image-20230416100340583](http://images.rl0206.love/202304250154412.png)

![image-20230416100753096](http://images.rl0206.love/202304250154413.png)

![image-20230416101608129](http://images.rl0206.love/202304250154414.png)

![image-20230416101850417](http://images.rl0206.love/202304250154415.png)

![image-20230416102809805](http://images.rl0206.love/202304250154416.png) 

![image-20230416103712554](http://images.rl0206.love/202304250154417.png)

![image-20230416105319879](http://images.rl0206.love/202304250154419.png)

注意：所有的排名都是升序，若要降序，则在Z的后面加REV即可。

## Redis客户端

![image-20230416111339698](http://images.rl0206.love/202304250154420.png)

![image-20230416111856694](http://images.rl0206.love/202304250154421.png)

 Jedis使用的基本步骤：

1.引入依赖

2.创建Jedis对象，建立连接

3.使用Jedis，方法名与Redis命令一致

4.释放资源



1、引入依赖

```Java
<dependency>
    <groupId>redis.clients</groupId>
    <artifactId>jedis</artifactId>
    <version>3.7.0</version>
</dependency>
```

2、使用Jedis连接池创建连接

Jedis本身是线程不安全的，并且频繁的创建和销毁连接会有性能损耗，因此我们推荐大家使用Jedis连接池代替Jedis的直连方式。

```Java
public class JedisConnectionFactory {
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
     jedisPool = new JedisPool(jedisPoolConfig, "192.168.150.101", 6379,
         1000, "123321");
   }
   // 获取Jedis对象
   public static Jedis getJedis(){
     return jedisPool.getResource();
   }
 }
```

3、使用Jedis进行单元测试

```java
private Jedis jedis;
  // 单元测试的注释写法
  @BeforeEach
  void setUp() {
    // 建立连接
    jedis = JedisConnectionFactory.getJedis();
    // 设置密码
    jedis.auth("123321");
    // 选择库
    jedis.select(0);
}
  @Test
  void testString() {
    // 插入数据，方法名称就是redis命令名称，非常简单
    String result = jedis.set("name", "张三");
    System.out.println("result = " + result); 
    // 获取数据
    String name = jedis.get("name");
    System.out.println("name = " + name);
}
  @AfterEach
  void tearDown() {
    // 释放资源
    if (jedis != null) {
      jedis.close();
    }
}
```

## SpringDataRedis

> 打破Redis只接收String，接收Object类，内部通过JDK的序列化工具进行转换。（即传入一个Object对象，会将其序列化，将其“剁碎”，传入Redis，若想不剁碎，就需要重写RedisTemplate的序列化方式）

 那我们如何重写呢？

```Java
```

存：自动化将对象转JSON,

取：JSON反序列化为对象

什么原理呢？

我们会发现，在自动化转JSON时，会在JSON中第一行加入User的CLASS属性（对应的是User类的名称），所以说在反序列化的时候，会将对应的User写进来。巧妙之处就在于JSON串第一行的Class名称记录。

尽管序列化方式可以满足我们的需求，但时仍然存在问题：为了在反序列化时知道对象的类型，JSON选择将类的Class类型写入JSON结果中，存入Redis，因此导致了额外的内存开销。

那么，如何解决？如何节省内存空间？

为了节约内存空间，一般不会使用JSON序列化工具，而会使用String序列化器，但这只能存储String类型的键值对，所以我们的解决方案就是：用的到对象反序列化时，再手动创建对象的序列化和反序列化。

![image-20230419105307964](http://images.rl0206.love/202304250154422.png)

Redis序列化两种方案：

第一种：自定义Templete，修改RedisTemplete的序列化器为GenericJachson2JsonRedisSerializer；

```
public class RedisConfig{
	@Bean
	public RedisTemplete<String,Object> redisTemplete(RedisConnectionFactory connectionFactory){
		
	}
}
```

第二种：使用RedisRedisTemplete，手动序列化，读取时，手动反序列化。
