---
title: 我的Bugs
shortTitle: 我的Bugs
star: true
category:
  - 菜鸟日记
tag:
  - Git
description: 课下点滴积累
head:
  - - meta
    - name: keywords
      content: Git,Git常用命令,Git命令清单,最常用git命令,常用的60条git命令 
---

# Bug记录

## Git篇

1. `git pull gitee`出现问题

> You asked to pull from the remote 'gitee', but did not specify
> a branch. Because this is not the default configured remote
> for your current branch, you must specify a branch on the command line.

**解决办法：**

首先，主要是命令使用不规范导致，应该是`gitee pull gitee(远程仓库别名) + master（分支名） `

其次，针对以上错误，也可以编辑工作目录下的`.git/config文件`文件内容，增加如下代码：

```xml
[branch "master"]
  remote = origin
  merge = refs/heads/master
```

2. github图床上传的图片显示失败

**解决办法：**

`TODO:`

## 项目篇

* ### API项目

1. 粗心大意导致的错误（前后对比）

> ```
> <CreateModal
>      columns={columns}
>      onCancel={() => {
>        // 注意这里
>        handleUpdateModalOpen(false);
>      }}
>      onSubmit={(values) => {
>        handleAdd(values);
>      }}
>      visible={createModalOpen}
> />
> ```

> ```
> <CreateModal
>   columns={columns}
>   onCancel={() => {
>     handleModalOpen(false);
>   }}
>   onSubmit={(values) => {
>     handleAdd(values);
>   }}
>   visible={createModalOpen} 
> />
> ```

2. 终于又碰到了一个bugssss！！！头疼得很！--controller类更改运行不生效

   发生在Spring Boot API项目的模拟接口项目：更改controller类后，发现重新运行之后页面没有改变，更改无效，此时需要对maven重新打jar包，更改才会生效，ChatGPT说是因为热部署的问题。

   bug缘由：早在我把模拟接口项目整个粘贴到后端项目中时就已经存在bug了，之前没有发现，尝试把这个项目单独拎出来的话没问题。

   解决方法：
   
   * 我先试试是不是maven的module没有配置好（因为是直接把模拟接口项目直接粘贴到后端项目中了）
   * 后续整合网管业务的时候，遇到了项目包名不一致的问题，然后在包名重命名中出现了n个问题，最后迫不得已将项目重构了，然后在项目中直接创建module是没有问题的，因此证实了上述猜想中的module没有配置好！





## 工具篇

* ### `pnpm`





* ### `HuTool`

```shell
cn.hutool.core.io.IORuntimeException: ConnectException: Connection refused: connect

	at cn.hutool.http.HttpRequest.send(HttpRequest.java:1328)
	at cn.hutool.http.HttpRequest.doExecute(HttpRequest.java:1176)
	cn.hutool.http.HttpRequest.send(HttpRequest.java:1323)
	... 73 more

Disconnected from the target VM, address: '127.0.0.1:6928', transport: 'socket'

Process finished with exit code -1
```

**解决方法：**



* `Nacos`

> 遇到一个`nocos`小BUG：
>
> Dubbo整合nocos的时候，提供者与消费者的包名不一样，这时，提供者将接口的信息注册到nacos文档时，用到的是provider的包名路径，如果出现消费者的包名路径与提供者的包名不同的时候，这时消费者就会报错找不到提供者的Service服务，如图：
>
> ![image-20230731193204173](https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202307311932647.png)

* `maven`

> 问题1：
>

​	Spring Boot项目涉及到多个模块时，应该怎么办？

​	方案一：

​		类似于maven项目的多模块编译

​	方案二：

​		将pom文件设置为maven项目

​		<img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202308010328505.png" alt="将pom文件设置为maven项目" style="zoom:33%;" />

> 问题2：
>

​	自己开发`SDK`时，pom文件中忘记去掉`<build></build>`标签时，当使用maven执行install命令时，maven会报错：没有可执行的main。

​	如图：

​	![image-20230802002346028](https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202308020023072.png)

> 问题3：
>

​	想用maven的多模块编译，父模块用`<models>`子模块用`<parent>`，用下面的依赖配置，是没问题的，

```
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.7.7</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>

    <groupId>com.csguider</groupId>
    <artifactId>smartapi-gateway</artifactId>
    <version>0.0.1-SNAPSHOT</version>

    <name>smartapi-gateway</name>
    <description>Demo project for Spring Boot</description>

    <properties>
        <java.version>1.8</java.version>
        <spring-cloud.version>2021.0.5</spring-cloud.version>
    </properties>

    <dependencies>
        <!-- https://mvnrepository.com/artifact/org.apache.dubbo/dubbo -->
        <dependency>
            <groupId>org.apache.dubbo</groupId>
            <artifactId>dubbo</artifactId>
            <version>3.0.9</version>
        </dependency>
        <dependency>
            <groupId>com.alibaba.nacos</groupId>
            <artifactId>nacos-client</artifactId>
            <version>2.1.0</version>
        </dependency>

        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-gateway</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>

        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <!--这个依赖引入先打个注释，是通过快捷键自动引入的。<scope>这个标签先打个标签,表示作用域-->
        <dependency>
            <groupId>com.csguider</groupId>
            <artifactId>smartapi-client-sdk</artifactId>
            <version>0.0.1-SNAPSHOT</version>
        </dependency>
    </dependencies>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.cloud</groupId>
                <artifactId>spring-cloud-dependencies</artifactId>
                <version>${spring-cloud.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <excludes>
                        <exclude>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                        </exclude>
                    </excludes>
                </configuration>
            </plugin>
        </plugins>
    </build>

</project>
```

当我把parent换成父类时，会报错：

![](https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202308020207946.png)

* 解决方法：

> * set spring.main.web-application-type=reactive
>
> `spring.main.web-application-type=reactive` 是针对 Spring Boot 2.x版本引入的一个配置属性，用于指定应用程序的类型。它有两个可能的值：`servlet`（默认值）和`reactive`。
>
> 当将 `spring.main.web-application-type` 设置为 `reactive` 时，您的应用程序将使用反应式编程模型。这意味着您的应用程序将使用 WebFlux 框架，而不是传统的 Servlet 框架。
>
> 使用反应式编程模型可以提供更好的性能和可扩展性，因为它使用了非阻塞的 I/O 和事件驱动的编程模型。这种模型特别适用于高并发和异步处理场景。
>
> 要使用反应式编程模型，您需要相应地更新您的应用程序代码，以便使用 WebFlux 相关的的基础设施和 API。例如，您需要使用 `@Controller` 替换 `@ControllerAdvice`，并使用 `ServerWebExchange` 对象访问 HTTP 请求和响应。
>
> 总之，将 `spring.main.web-application-type` 设置为 `reactive` 将使您的应用程序使用 WebFlux 框架，以获得更好的性能和可扩展性。但请注意，您需要对应用程序代码进行相应的更改，以适应反应式编程模型。
>
> 要设置 `spring.main.web-application-type` 为 `reactive`，您需要在应用的配置文件 `application.yml` 或 `application.properties` 中添加以下配置1：
>
> ```
> spring:
> 	main:
>     	web-application-type: reactive
> ```
>
> 这样，您告诉 Spring Boot 应用程序使用响应式的 Web 应用类型。同时，请注意，您需要相应地更新您的应用程序代码，以使用 WebFlux 相关的基础设施和 API，例如使用 `@Controller` 替换 `@ControllerAdvice`，并使用 `ServerWebExchange` 对象访问 HTTP 请求和响应1。

