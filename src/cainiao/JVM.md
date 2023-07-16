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

## 一、引言

1. 是什么

> JVM--Java虚拟机，是实现Java编程语言平台无关性特性的基石。

2. 有什么用

Java源程序-（`javac编译` `编译型`）

->.class文件-(`JVM` `解释型`)

->OS机器码

> 这就是说Java 语言“编译与解释并存”的原因

此处的`JVM`：不同OS拥有不同的JVM，正因为有了中间层这个字节码文件，才可以实现跨平台操作

## 二、JVM内存管理

