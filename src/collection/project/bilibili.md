---
title: 仿哔哩哔哩项目
shortTitle: 仿哔哩哔哩项目笔记
category:
  - 实践练习
tag:
  - 实践练习
description: imooc实战课程
head:
  - - meta
    - name: keywords
      content: imooc,实战课程,Spring Boot练手项目,Spring Boot
---
## 为什么选择仿哔哩哔哩呢？

### 从项目角度和技术角度两个维度来看：

> 项目角度：规模大、不同种类的用户群体、高流量、个性化功能针对不同的用户；
>
> 技术角度：经典高并发与异步问题、视频流+弹幕定制化功能。

### 项目大纲：（[课程链接](https://coding.imooc.com/class/556.html)）

> 第一章：项目整体介绍、课程设计逻辑、学习方法
>
> 第二章：项目架构、环境搭建、效果展示
>
> 第三章：通用配置、用户相关功能
>
> 第四章：视频流+弹幕加载、性能优化
>
> 第五章：全局搜索、系统广播、数据统计、智能推荐
>
> 第六章：总结复盘、切面编程、自动化部署、负载均衡

## 从搭建环境开始你的仿哔哩哔哩项目（初入江湖）

### **项目架构：**

基本过程：需求分析--》功能设计--》全局架构（承载、可复用）

### **业务（功能架构）：**

顶层：用户服务，如注册登录、大会员权限、查找感兴趣视频等

中间层：在线视频播放设置、实施弹幕

底层：管理后台，如：视频上传、数据统计、系统消息推送

### **技术架构：**

技术选型：`SpringBoot2.x`+ `Mysql` + `MyBatis` + `Maven`

开发模式：项目采用经典`MVC`，模式控制层（`Controller层`）、服务层（`Service层`）、数据层（`Dao层`）

### **部署架构:**

前端：服务转发 + 负载均衡

后端：业务处理 + 功能实现

工具：缓存 + 队列

### **开发环境：**

`OS`：`Java`的跨平台，任意OS即可

开发工具：`IntelliJ IDEA`，推荐版本2018及以后

必备：`JDK1.8`、`Maven`

### **创建多模块、多环境项目：**

多模块：经典MVC

多环境：添加不同的properties配置文件（测试、部署）

配置好项目的JDK版本与Maven仓库

### **项目运行:**

在`pom.xml`文件中一i纳入`SpringBoot`框架依赖:

```xml
<parent>
    <artifactId>spring-boot-starter-parent</artifactId>
    <groupId>org.springframework.boot</groupId>
    <version>2.5.1</version>
</parent>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <version>2.5.1</version>
</dependency>
```

在子模块`pom.xml`文件中添加模块间依赖关系:

```xml
<!--配置模块间的依赖关系-->
<dependency>
    <groupId>org.example</groupId>
    <artifactId>imooc-bilibili-dao</artifactId>
    <version>1.0-SNAPSHOT</version>
</dependency>
```

添加启动入口，启动项目：

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

/**
 * @author WLei224
 * @create 2023/4/28 21:34
 */
@SpringBootApplication
public class ImoocBilibiliApp {
    public static void main(String[] args) {
        ApplicationContext app = SpringApplication.run(ImoocBilibiliApp.class, args);
    }
}
```

多环境配置：

在Service包下创建一个`application.properties`配置文件:

在Controller包下创建多个生产环境：`application-test.properties`、`application-online.properties`

```properties
#profiles可用于切换生产环境
spring.profiles.active=test
```

### **数据库的搭建与持久层框架：**

配置`MySQL`数据库:

引入`MySQL`数据库和持久层`Mybatis`依赖：（`Mybatis`特点：XML形式管理，支持动态`sql`）

```xml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.27</version>
</dependency>
<dependency>     		     
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>2.2.0</version>
</dependency>
```

将数据库连接写入`application.properties`配置文件：

```properties
#datasource
spring.datasource.url=jdbc:mysql://localhost:3306/imooc_bilibili
spring.datasource.username=root
spring.datasource.password=root(你的密码)
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
```

将`Mybatis`配置写入可复用的`application.properties`配置文件中：

```properties
#mybatis
mybatis.mapper-locations=classpath:mapper/*.xml
#项目启动时，告诉SpringBoot扫描class、interface的路径，统一实例化，然后与mapper进行关联
mybatis.type-aliases-package=com.imooc.bilibili.dao
```

**开发一个小Demo：**（在持久层`Dao`层进行）

首先要将`mapper`与`dao`层实体类进行关联：(`Demo.xml`)

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD MAPPER 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<!--namespace对应着dao层Java实体类文件-->
<mapper namespace="com.imooc.bilibili.dao.DemoDao">

    <select id="query" parameterType="java.lang.Long" resultType="java.lang.Long">
        select id from t_demo where id = #{id}
    </select>

</mapper>
```

`Controller:` 

```java
package com.imooc.bilibili.api;
import com.imooc.bilibili.service.DemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author WLei224
 * @create 2023/4/29 1:50
 */
@RestController
public class DemoApi {

    @Autowired
    private DemoService demoService;


    @GetMapping("/query")
    public Long query(Long id){
        return demoService.query(id);
    }

}
```

`Service:`

```java
package com.imooc.bilibili.service;

import com.imooc.bilibili.dao.DemoDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author WLei224
 * @create 2023/4/29 1:33
 */
@Service
public class DemoService {

    @Autowired
    private DemoDao demoDao;

    public Long query(Long id){
        return demoDao.query(id);
    }
}
```

`Dao:`

```java
package com.imooc.bilibili.dao;

import org.apache.ibatis.annotations.Mapper;

/**
 * @author WLei224
 * @create 2023/4/29 1:04
 */
//如何将DemoDao与mapper对应起来呢？ 为什么声明成为接口呢?因为@mapper注解在启动时会自动匹配，把dao的文件封装成一个实体类，从而实现自动实例化的操作
@Mapper
public interface DemoDao {
    public Long query(Long id);
}
```

### 效率提升：实现热部署：

> 热部署：热部署就是当应用程序正在运行的时候升级软件或修改某一部分代码、配置文件时，无需手动重启应用，即可使修改的部分生效
>
> 配置方法：`spring-boot-devtools`依赖工具+IDEA配置

1、`IDEA:`Files-->Settings-->Compiles-->Build Project Automately

2、`IDEA注册表：Ctrl+Alt+Shift+/`打开`compiler document save enabled`和`compiler automake allow when app runing`

3、编辑启动类的配置：![image-20230429132152997](http://images.rl0206.love/202304291326170.png)

4、引入全局`pom.xml`依赖：

```xml
<!-- 热部署 -->
<dependency>
     <groupId>org.springframework.boot</groupId>
     <artifactId>spring-boot-devtools</artifactId>
     <version>2.0.4.RELEASE</version>
     <!-- 启用 -->
     <optional>true</optional>
</dependency>
```

热部署已完成。
## 3从用户功能体验后端经典开发模式（窥得门路）

### 用户模块开发概要与接口设计

> **`RESTful`风格接口设计：**
>
> RESTful架构、HTTP方法语义、HTTP方法幂等性、RESTful接口设计原则
>
> **用户模块开发概要：**通用功能与通用配置、用户相关功能

### RESTful接口

> REST全称是：Representational State Transfer，中文为表述性状态转移，REST指的是一组架构约束条件和原则
>
> RESTful表述的是资源的状态转移，在Web中资源就是URI(Uniform Resource Identifier)
>
> 如果一个架构符合REST的约束条件和原则，我们就称它为RESTful架构，HTTP是目前与REST相关的唯一实例
>
> RESTful架构应该遵循统一的接口原则，应该使用标准的HTTP方法，如GET和POST，并且遵循这些方法的语义

### HTTP方法的语义

![image-20230429164253420](http://images.rl0206.love/202304291643114.png)

### POST和PUT的区别

这两个概念非常容易混淆，POST通常被认为创建资源，PUT通常被认为更新资源，而实际上，二者均可用于创建资源，更为本质的差别实在幂等性方面。

> 所谓幂等性，如果一个操作执行一次和执行多次的后果是一样的，那么这个操作就具有幂等性。
>
> 例如：GET获取多次，   无副作用，  具有幂等性
>
> ​	 DELETE删除多次，无副作用，  具有幂等性
>
> ​	 POST提交会创建不同的资源，  不具有幂等性（实例如下图）
>
> ​	 PUT是创建或更新，无副作用，  具有幂等性

![image-20230429165143109](http://images.rl0206.love/202304291651182.png)

`Demo：RESTfulApi:`

```java
package com.imooc.bilibili.api;

import org.springframework.web.bind.annotation.*;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
/**
 * @author WLei224
 * @create 2023/4/30 11:01
 */
@RestController
public class RESTfulApi {
    private final Map<Integer,Map<String,Object>> dataMap;
    // 声明一个构造方法，同时初始化datamap，进行传参
    public RESTfulApi() {
        dataMap = new HashMap<>();

        for (int i = 1; i < 3; i++) {
            Map<String,Object> data = new HashMap<>();
            data.put("id",i);
            data.put("name","name"+i);
            dataMap.put(i,data);
        }
    }
    // 开始写RESTful的相关方法
    @GetMapping("objects/{id}")
    public Map<String,Object> getData(@PathVariable Integer id){
        return dataMap.get(id);
    }

    @DeleteMapping("objects/{id}")
    public String deleteData(@PathVariable Integer id){
        dataMap.remove(id);
        return "Success";
    }

    @PostMapping("objects")
    public String postData(@RequestBody Map<String,Object> data){
        Integer[] idArray = dataMap.keySet().toArray(new Integer[0]);
        Arrays.sort(idArray);
        int nextId = idArray[idArray.length-1] + 1;
        // data.put("id",nextId);
        // data.put("name","name" + nextId);
        dataMap.put(nextId,data);
        return "Success!";
    }
	// 区别就在于幂等性，存在则更新，不存在则新增
    @PutMapping("objects")
    public String putData(@RequestBody Map<String,Object> data){
        Integer id = Integer.valueOf(String.valueOf(data.get("id")));
        Map<String,Object> hasData = dataMap.get(id);
        if (hasData == null) {
            Integer[] idArray = dataMap.keySet().toArray(new Integer[0]);
            Arrays.sort(idArray);
            int nextId = idArray[idArray.length-1] + 1;
            // data.put("id",nextId);
            // data.put("name","name" + nextId);
            dataMap.put(nextId,data);
        } else {
            dataMap.put(id,data);
        }
        return "Success!";
    }
}
```

### RESTful接口URL命名原则：

> 1、HTTP方法后跟的URL必须是名词的复数形式
>
> 2、URL总不采用大小写混合的驼峰命名，尽量全部小写，如果涉及多个单词，可用”-“连接
>
> 3、示例：/users、/users-fans、 反例：/getUser、/getUserFans

### RESTful接口URL分级原则

> 1、一级用来定位资源分类，如：/users表示需要定位到用户相关资源
>
> 2、二级仍用来定位具体某个资源，如：/users/20/fans/1表示id为20的用户的id为1的粉丝

### RESTful接口命名示例

![image-20230430153315090](http://images.rl0206.love/202304301533812.png)

![image-20230430153406940](http://images.rl0206.love/202304301534235.png)

###  通用功能与配置

通用功能：加解密工具（`AES`、`RSA`、`MD5`）、json数据返回类

顶层POM.xml添加commons-codec依赖，

添加对应的工具包到service包的util包下

通用配置：Json转换配置

>  `什么是AES加密`

`AES:`

*Advanced Encryption Standard*高级加密标准，是最常见的对称加密算法，对称加密即加解密只有一个密钥，可使用密钥恢复明文，加密速度非常快。

`使用场景：`

适合发送大量数据的场合。

`看下源码：`

![image-20230519170635001](http://images.rl0206.love/202305191736417.png)

> `什么是RSA加密？`

`RSA:`

是一种非对称加密，即：有公钥与私钥之分，公钥用于数据加密，私钥用于数据解密，同样是可逆的，即可以通过私钥进行解密。公钥提供给外部进行使用，私钥放在服务器，保护数据安全。

`特点：`

加密安全性很高，但是加密速度非常之慢。

`使用场景：`

由特点可知，加密慢，但是安全。因此适合对加密次数要求较少的场景。例如：用户的登陆，加密一次，便不用加密，而且安全性还较高。

`拓展：`那么非对称加密的流程是什么，在实际应用中是如何进行加密的？

下面以用户注册登录场景为例，来说一下非对称加密在实际中的应用：

因为RSA加密中的公钥是提供给外部进行加密使用的，用户在前端注册登录时，为了保证输入的密码其安全性（防止拦截后密码泄露），将公钥返回到前端，前端使用公钥进行加密，加密后的暗文通过接口然后传给后端，后端再通过私钥进行解密，得到密码。

