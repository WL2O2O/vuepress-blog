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

1. `git pull`出现问题

> You asked to pull from the remote 'gitee', but did not specify
> a branch. Because this is not the default configured remote
> for your current branch, you must specify a branch on the command line.

**解决办法：**编辑工作目录下的`.git/config文件`文件内容，增加如下代码：

```xml
[branch "master"]
  remote = origin
  merge = refs/heads/master
```
