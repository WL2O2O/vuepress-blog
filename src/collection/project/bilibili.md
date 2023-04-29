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
      content: imooc,实战课程
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