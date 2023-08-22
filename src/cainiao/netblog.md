---
title: netblog
date: 2023-08-22 01:23:17
tags:
  - 建站
---



# 博客上云

> 博客的访问速度实在是太慢了，准备尝试把博客部署到华为云ECS。
>
> 环境：
>
> 华为云CentOS

新鲜事第一步：打开官方文档

​	[Hexo博客的官方文档](https://hexo.io/zh-cn/docs/)

## 安装前提

安装 Hexo 相当简单，只需要先安装下列应用程序即可：

- [Node.js](http://nodejs.org/) (Node.js 版本需不低于 10.13，建议使用 Node.js 12.0 及以上版本)
- [Git](http://git-scm.com/)

如果您的电脑中已经安装上述必备程序，那么恭喜您！你可以直接前往 [安装 Hexo](https://hexo.io/zh-cn/docs/#安装-Hexo) 步骤。

### Node的安装

为了后续排错方便，我们使用 NVM 来进行 Node 的安装。

```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/
$ source ~/.bashrc
```

![image-20230822013352104](https://cs-wlei224.obs.cn-south-1.myhuaweicloud.com/blog-imgs/202308220133637.png)

### Git的安装

```
yum install git-core
```

![image-20230822013716334](https://cs-wlei224.obs.cn-south-1.myhuaweicloud.com/blog-imgs/202308220137246.png)

安装完毕！！！

## Hexo脚手架安装

### 直接全局安装：

```
$ npm install -g hexo-cli
```

安装很慢的话，可以先设置npm的淘宝镜像：

```
$ npm config set registry https://registry.npm.taobao.org
```

官网也给出了进阶局部安装方法，如下：

### 进阶安装和使用

> 对于熟悉 npm 的进阶用户，可以仅局部安装 `hexo` 包。
>
> ```
> $ npm install hexo
> ```
>
> 安装以后，可以使用以下两种方式执行 Hexo：
>
> 1. `npx hexo <command>`
>
> 2. Linux 用户可以将 Hexo 所在的目录下的 `node_modules` 添加到环境变量之中即可直接使用 `hexo <command>`：
>
>    ```
>    echo 'PATH="$PATH:./node_modules/.bin"' >> ~/.profile
>    ```

### Node.js 版本限制

如果你坚持使用旧的 Node.js，你可以考虑安装 Hexo 的过去版本。

请注意，我们不提供对过去版本 Hexo 的错误修复。

我们强烈建议永远安装 [最新版本](https://www.npmjs.com/package/hexo?activeTab=versions) 的 Hexo，以及 [推荐的 Node.js 版本](https://hexo.io/zh-cn/docs/#安装前提)。

| Hexo 版本   | 最低版本 (Node.js 版本) | 最高版本 (Node.js 版本) |
| :---------- | :---------------------- | :---------------------- |
| 6.2+        | 12.13.0                 | latest                  |
| 6.0+        | 12.13.0                 | 18.5.0                  |
| 5.0+        | 10.13.0                 | 12.0.0                  |
| 4.1 - 4.2   | 8.10                    | 10.0.0                  |
| 4.0         | 8.6                     | 8.10.0                  |
| 3.3 - 3.9   | 6.9                     | 8.0.0                   |
| 3.2 - 3.3   | 0.12                    | 未知                    |
| 3.0 - 3.1   | 0.10 或 iojs            | 未知                    |
| 0.0.1 - 2.8 | 0.10                    | 未知                    |
