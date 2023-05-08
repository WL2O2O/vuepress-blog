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

### [评论插件：giscus](https://giscus.app/zh-CN)

#### 选择仓库

选择 giscus 连接到的仓库。请确保：

1. **此仓库是[公开的](https://docs.github.com/en/github/administering-a-repository/managing-repository-settings/setting-repository-visibility#making-a-repository-public)**，否则访客将无法查看 discussion。
2. **[giscus](https://github.com/apps/giscus) app 已安装**否则访客将无法评论和回应。
3. **Discussions**功能已[在你的仓库中启用](https://docs.github.com/en/github/administering-a-repository/managing-repository-settings/enabling-or-disabling-github-discussions-for-a-repository)。

仓库：（输入用户名/仓库名）

*一个**公开的（public）** GitHub 仓库。Discussion 将被连接到此仓库。*

#### 选择页面与嵌入的 discussion 之间的映射关系。

建议选择：**Discussion 的标题包含页面的 `pathname`**

#### Discussion 分类

选择新 discussions 所在的分类。 推荐使用**公告（announcements）**类型的分类，以确保新 discussion 只能由仓库维护者和 giscus 创建。

#### 启用 giscus

```js
<script src="https://giscus.app/client.js"
        data-repo="[在此输入仓库]"
        data-repo-id="[在此输入仓库 ID]"
        data-category="[在此输入分类名]"
        data-category-id="[在此输入分类 ID]"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async>
</script>
```

完成以上几项之后，上面代码段中会出现对应的repo、repoId、category、categoryId，复制下来，稍后有用。

在theme.ts中添加如下配置：

```
plugins：{
	comment: {
   		provider: "Giscus",
   		repo: "WL2O2O/CS_GUIDER_Giscus",
  		repoId: "your id",
   		category: "Announcements",
   		categoryId: "yours id"
 	 },
}
```

## 解决自动部署git pages：

新创建一个autopush.bat文件，将以下代码复制到文件中：

```bat
@echo off
git add .
git commit -m "update article"
git pull origin master
git push origin master
```

此时推送到gitee是正常的，但是推送之后，git pages的页面不会自动更新，于是经过百度，了解到可以通过Git的Webhooks功能，来实现git pages的自动更新。

了解一下webHook：

> 每次您 push 代码后，都会给远程 HTTP URL 发送一个 POST 请求 [更多说明 »](https://gitee.com/help/categories/40)
>
> WebHook 增加对钉钉的支持 [更多说明 »](https://gitee.com/help/articles/4135)
>
> WebHook 增加对企业微信的支持 [更多说明 »](https://gitee.com/help/articles/4296)
>
> WebHook 增加对飞书的支持 [更多说明 »](https://gitee.com/help/articles/4297)

以下是在Windows系统中使用Git的Webhooks功能自动更新Gitee Pages的步骤：

1. 在Gitee仓库的设置页面中，找到Webhooks设置，并添加一个新的Webhook，将Payload URL设置为你的博客页面的URL。
2. 在你的Vuepress博客项目中添加一个post-commit钩子脚本，用于向Gitee仓库发送Webhooks请求，触发Gitee Pages更新。在项目的.git/hooks目录中创建一个post-commit.bat文件，内容如下：

```bat
@echo off
curl -X POST https://gitee.com/api/v5/repos/{WLei224}/{WLei224}/hooks/{0c8adb9d-f0cf-450b-8d75-3cc56ac7bf3c}/trigger\?access_token\={583af4fe8a6611d418da106c6c8bae88}
```

将上述命令中的{用户名}、{仓库名}、{Webhook ID}和{访问令牌}替换为你自己的信息。其中，Webhook ID可以在Gitee仓库的Webhooks设置页面中找到，访问令牌可以在Gitee账号的个人设置页面中生成。

1. 为post-commit.bat文件添加可执行权限。在终端中进入项目的.git/hooks目录，执行以下命令：

```bash
chmod +x post-commit.bat
```

1. 推送代码到Gitee仓库，当你执行git commit命令后，post-commit.bat脚本会自动发送Webhooks请求，触发Gitee Pages更新。

通过上述步骤，你可以在Windows系统中实现自动更新Gitee Pages，提高博客发布的效率和便捷性。
