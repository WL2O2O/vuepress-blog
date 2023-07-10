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



