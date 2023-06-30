---
title: API开放平台
shortTitle: API开放平台
category:
  - 实践练习
tag:
  - 实践练习
description: 鱼皮知识星球
head:
  - - meta
    - name: keywords
      content: imooc,实战课程,Spring Boot项目,Spring Boot项目推荐, API开放平台
---

# API开放平台

## 项目介绍

> 前端开发的时候有有时会需要后端的接口，如果此时有一个API接口可以使用，那么就无需后端借口了

一个提供API接口调用的平台，用户可以注册与登录，开通接口的调用权限，用户可以使用接口，每次调用会进行次数统计。管理院可以发布接口、下线接口、接入接口，以及可视化接口的调用情况。



一个API接口平台：

1. 防止攻击
2. 使用限制
3. 统计调用次数
4. 计费
5. 流量保护
6. API接入

## 预计完成时间

5-6周





## 业务流程

前台、SDK、API网关、模拟接口、后台    共五个子模块



**难点**：思想



## 技术选型



* 前端
  * Ant Design Pro
  * React
  * Ant Design Pro Components
  * Umi
  * Umi Request（Axios的封装）--请求库（前后端联调）
* 后端
  * Spring Boot
  * Spring Boot Stater（SDK开发）--可以发布到maven仓库----**简历亮点**
  * ？？？？？？（网关、限流、日志实现）

## 项目计划

### Day01--项目初始化

项目介绍、设计、技术选型

基础项目的搭建

接口管理

用户查看接口的权限



### Day02--接口调用

接口调用

接口文档的展示、接口在线调用

保证调用的安全性（API签名认证）

客户端的SDK开发



### Day03--接口计费与保护

统计用户调用次数

限流

计费

日志

开通

### Day04--管理员统计分析

提供可视化平台，展示所有接口的调用情况，便于管理价格

接口预警

## 需求分析

1. 管理员可以对接口信息进行增删改查

2. 用户可以访问前台，查看接口信息



## 今日计划

1. 项目脚手架搭建（初始化项目）10分钟前端、5-10分钟后端 
1. 管理员可以对接口信息进行增删改查
1. 用户可以访问前台，查看接口的信息









## 开始开发

1. 使用Ant Design Pro提供的`pro-cli`来快速的初始化脚手架。

   ```bash
   # 查看node和npm版本
   建议16和8
   # 使用 npm
   npm i @ant-design/pro-cli -g
   pro create myapi-frontend
   # 下载项目所需要的依赖
   yarn
   此时可能会遇到node版本要求的问题，因为版本更新迭代的原因，我当时要求的是使用16.14.0的node版本，
   如果感觉切换node版本麻烦的话，这里推荐使用nvm（node的版本管理工具），使用方法自行百度
   ```

2. 项目瘦身

	遇到了一个大坑，星球的球友们也都遇到了，下面是球友的解决方法，亲测有效。

   ```bash
   # 关闭ESLint中与Prettier重复的规则，确保代码格式化的一致性
   yarn add eslint-config-prettier --dev
   # 用于检查和修复JavaScript代码中的常见问题
   yarn add eslint-plugin-unicorn --dev
   ```
### 项目去除国际化存在问题的解决方法

![image-20230630231124235](E:/Master/TyporaImages/api/image-20230630231124235.png)

​	jest脚本命令中有`jest`不知道是否需要删掉，鱼皮的文件中没有出现，可能是跟某些版本有关，奇奇妙妙，记录一下

![image-20230630233743871](E:/Master/TyporaImages/api/image-20230630233743871.png)

3. 后端项目初始化

​	直接使用鱼总提供的万能模板`springboot-init`,改成项目的名字，然后全局搜索关键字进行替换

​	连接数据库

​	测试运行

4. 数据库库表设计

​	**接口信息表**

​	id

​	name

​	description 描述

​	url 请求地址

​	reqHeader 请求头

​	responseHeader 响应头

​	status 接口状态 0-关闭 1-开启

​	method 请求类型

​	userId

​	creatTime

​	updateTime

​	isDelete 







































