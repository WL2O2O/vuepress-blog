---
title: 聚合搜索中台
shortTitle: 一个聚合搜索中台项目
category:
  - 实践练习
tag:
  - 实践练习
description: 鱼皮知识星球
head:
  - - meta
    - name: keywords
      content: imooc,实战课程,Spring Boot项目,Spring Boot项目推荐, 聚合搜索平台
---



# 聚合搜索项目

## 项目介绍

> 聚合搜索就是输入一个关键字，对于用户可以使用户在同一个入口搜索到不同的内容分类，不同形式的内容，提升用户的检索效率；对于企业来说无需对每一个项目进行搜索功能的开发，当有新的内容或者新的网站，可以进行复用，提高开发效率。

## 技术栈

前端：

* Vue
* Ant Design Vue
* Lodash

后端：

* Spring Boot
* MySQL
* ES
* 数据抓取
* 数据同步（Logstash、Canal）
* Guava Retrying
* 怎么保证API的稳定性？

## 业务流程

1. 先得到不同分类的数据
2. 提供一个搜索页面
3. 业务优化（关键词高亮、防抖节流）

> `package.json`

```
{
  "name": "yuso-frontend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
  	// "^4.0.0-rc.5"这个版本不行：Can't resolve 'ant-design-vue/dist/antd.css' 
    "ant-design-vue": "^3.3.0-beta.4",
    "axios": "^1.3.4",
    "core-js": "^3.8.3",
    "vue": "^3.2.13",
    "vue-router": "^4.0.3"
  },
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^5.4.0",
    "@typescript-eslint/parser": "^5.4.0",
    "@vue/cli-plugin-babel": "~5.0.0",
    "@vue/cli-plugin-eslint": "~5.0.0",
    "@vue/cli-plugin-router": "~5.0.0",
    "@vue/cli-plugin-typescript": "~5.0.0",
    "@vue/cli-service": "~5.0.0",
    "@vue/eslint-config-typescript": "^9.1.0",
    "eslint": "^7.32.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-vue": "^8.0.3",
    "prettier": "^2.4.1",
    "typescript": "~4.5.5"
  }
}
```

## 开发计划

* 前端初始化
* 后端初始化
* 前端搜索页面开发
* 整合`Axios`
* 后端搜索接口开发



### 前端开发

用URL来记录用户的搜索状态，以便于进行分享。也就是将URL状态与页面状态同步

核心小技巧：把同步状态改成单向的，即只允许URL改变页面状态，不允许反向修改

**步骤分析：**

1. 用户进行页面搜索的时候，URL地址跟着同步改变；
2. 当URL变动时，页面状态也随之改变（监听URL的变动）

