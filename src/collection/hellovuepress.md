---
title: vuepress-theme-hope
shortTitle: 网站搭建过程记录
category:
  - 项目专栏
tag:
  - 网站搭建
description: 记录一下本站的搭建过程
head:
  - - meta
    - name: keywords
      content: vue,vuepress,vuepress-theme-hope,我的小破站
--- 

# 通过vuepress更新个人博客

## 博客搭建教程

> 本教程使用 pnpm 作为项目管理器，因为 VuePress 和 VuePress Theme Hope 都是通过 pnpm 来管理依赖的。

### 1、安装 Pnpm

在终端中输入下列命令安装 pnpm:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

### 2、初始化项目

```cmd
pnpm create vuepress-theme-hope my-docs
```

### 3、常用命令

- `vuepress dev [dir]` 会启动一个开发服务器，以便让你在本地开发你的 VuePress 站点。
- `vuepress build [dir]` 会将你的 VuePress 站点构建成静态文件，以便你进行后续部署。

> 使用模板
>
> 如果你在使用 VuePress Theme Hope 模板，你可以在 `package.json` 中发现下列三个命令:
>
> 
>
> ```json
> {
>   "scripts": {
>     "docs:build": "vuepress build src",
>     "docs:clean-dev": "vuepress dev src --clean-cache",
>     "docs:dev": "vuepress dev src"
>   }
> }
> ```
>
> 这意味着你可以使用:
>
> - `pnpm docs:dev` 启动开发服务器
> - `pnpm docs:build` 构建项目并输出
> - `pnpm docs:clean-dev` 清除缓存并启动开发服务器

### 4、 升级版本

如果你需要升级主题和 VuePress 版本，请执行以下命令:

```cmd
pnpm dlx vp-update
```

## 完善基本框架

### 1、了解基本结构

### 2、完善导航栏以及相关配置

3、



![](http://images.rl0206.love/202304181527666.png)

![](http://images.rl0206.love/202304192047438.png)

![](http://images.rl0206.love/202304221329083.ico)

### [评论插件：Waline](https://plugin-comment2.vuejs.press/zh/guide/waline.html)

#### 数据库

* 首先登录[leancloud](https://console.leancloud.app/apps)，注册数据库，记录`APP ID`,`APP Key` 和 `Master Key`以便后续使用；

#### 服务端

* 登录[Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample) 进行服务端部署，设置环境变量之后，重新部署，即可获得serveUrl。
  * 我获取到的服务端地址：https://cs-guider-6cmm99f2s-wl2o2o.vercel.app/

> 此时可以配置自己的域名，以便进行管理，不配置域名就通过以上服务端地址进行管理即可。
>
> **配置域名之后的管理网址**：
>
> - 评论系统：example.your-domain.com
> - 评论管理：example.your-domain.com/ui

#### 客户端

#### 使用插件

在插件选项中设置 `provider: "Waline"`，同时设置服务端地址 `serverURL` 为上一步获取到的值。

此时，将 `<CommentService>` 组件放置在你网站中合适的位置 (通常是页面的底部)，即可使用 Waline 评论功能。

提示

你也可以传入其他 Waline 支持的选项 (除了 `el`)。

详情请见 [Waline 配置](https://plugin-comment2.vuejs.press/zh/config/waline.html)

#### 评论管理 (管理端)

1. 部署完成后，请访问 `<serverURL>/ui/register` 进行注册。首个注册的人会被设定成管理员。
2. 管理员登陆后，即可看到评论管理界面。在这里可以修改、标记或删除评论。
3. 用户也可通过评论框注册账号，登陆后会跳转到自己的档案页。
