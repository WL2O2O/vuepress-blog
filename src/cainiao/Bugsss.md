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
   
   * 我先试试是不是maven的module没有配置好
   * ​	





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

问题：Spring Boot项目涉及到多个模块时，应该怎么办？

​	方案一：

​		类似于maven项目的多模块编译

​	方案二：

​		将pom文件设置为maven项目

​		<img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202308010328505.png" alt="将pom文件设置为maven项目" style="zoom:33%;" />

