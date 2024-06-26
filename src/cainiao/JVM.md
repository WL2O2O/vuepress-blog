---
title: 一篇文章搞懂JVM
shortTitle: 深度剖析JVM
category:
  - 菜鸟日记
tag:
  - JVM
description: 是平时的学习记录
head:
  - - meta
    - name: keywords
      content: Java,Java SE,Java基础,Java教程,Java程序员进阶之路,Java入门,教程,java数组,数组,复盘Java基础知识,Java随笔,Java程序员进阶之路, Java底层, Java虚拟机, Java JVM面试题
---



# `JVM`

> 图文详解 50 道Java虚拟机高频面试题，这次面试，一定吊打面试官，整理：csguider，戳[转载链接](https://mp.weixin.qq.com/s/bHhqhl8mH3OAPt3EkaVc8Q)，作者：三分恶，戳[原文链接](https://mp.weixin.qq.com/s/XYsEJyIo46jXhHE1sOR_0Q)

## 一、引言

1. 是什么

> JVM--Java虚拟机，是实现Java编程语言平台无关性特性的基石。

2. 有什么用

Java源程序-（`javac编译` `编译型`）

->.class文件-(`JVM` `解释型`)

->OS机器码

图解：

![](https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/jvm-1.png)

> 这就是说Java 语言“编译与解释并存”的原因

此处的`JVM`：不同OS拥有不同的JVM，正因为有了中间层这个字节码文件，才可以实现跨平台操作

## 二、JVM内存管理

### 内存区域划分：

按照虚拟机内存规范划分：

![JVM-2024-06-02-21-19-16](https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/JVM-2024-06-02-21-19-16.png)

JVM分为线程共享与隔离区，如上图所示。

下面来介绍一下以上区域的具体功能：

在此之前先说一下线程与进程，这里引用一个博客的图片：

![](https://img-blog.csdnimg.cn/58369465841a4cdea8083b6951dff710.png#pic_center)



1. 程序计数器

​	也被称为PC寄存器，是一块较小的内存空间。它可以看作是当前线程所在执行的行号治时期。

2. Java虚拟机栈

   



