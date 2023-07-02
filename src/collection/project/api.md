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

* ### 前端

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

![image-20230630231124235](https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202307010940465.png)

​	jest脚本命令中有`jest`不知道是否需要删掉，鱼皮的文件中没有出现，可能是跟某些版本有关，奇奇妙妙，记录一下

![image-20230630233743871](https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202307010940466.png)

* ### 后端

3. 后端项目初始化

​	直接使用鱼总提供的万能模板`springboot-init`,改成项目的名字，然后全局搜索关键字进行替换

​	连接数据库

​	测试运行

4. 数据库库表设计

​	**接口信息表**

```sql
# 数据库初始化
# @author <a href="https://github.com/liyupi">程序员鱼皮</a>
# @from <a href="https://yupi.icu">编程导航知识星球</a>
-- 创建库
create database if not exists myapi;

-- 切换库
use myapi;

-- 用户表
create table if not exists user
(
    id           bigint auto_increment comment 'id' primary key,
    userName     varchar(256)                           null comment '用户昵称',
    userAccount  varchar(256)                           not null comment '账号',
    userAvatar   varchar(1024)                          null comment '用户头像',
    gender       tinyint                                null comment '性别',
    userRole     varchar(256) default 'user'            not null comment '用户角色：user / admin',
    userPassword varchar(512)                           not null comment '密码',
    `accessKey` varchar(512) not null comment 'accessKey',
    `secretKey` varchar(512) not null comment 'secretKey',
    createTime   datetime     default CURRENT_TIMESTAMP not null comment '创建时间',
    updateTime   datetime     default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP comment '更新时间',
    isDelete     tinyint      default 0                 not null comment '是否删除',
    constraint uni_userAccount
        unique (userAccount)
) comment '用户';

-- 接口信息
create table if not exists myapi.`interface_info`
(
    `id` bigint not null auto_increment comment '主键' primary key,
    `name` varchar(256) not null comment '名称',
    `description` varchar(256) null comment '描述',
    `url` varchar(512) not null comment '接口地址',
    `requestHeader` text null comment '请求头',
    `responseHeader` text null comment '响应头',
    `status` int default 0 not null comment '接口状态（0-关闭，1-开启）',
    `method` varchar(256) not null comment '请求类型',
    `userId` bigint not null comment '创建人',
    `createTime` datetime default CURRENT_TIMESTAMP not null comment '创建时间',
    `updateTime` datetime default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP comment '更新时间',
    `isDelete` tinyint default 0 not null comment '是否删除(0-未删, 1-已删)'
) comment '接口信息';

-- 用户调用接口关系表
create table if not exists myapi.`user_interface_info`
(
    `id` bigint not null auto_increment comment '主键' primary key,
    `userId` bigint not null comment '调用用户 id',
    `interfaceInfoId` bigint not null comment '接口 id',
    `totalNum` int default 0 not null comment '总调用次数',
    `leftNum` int default 0 not null comment '剩余调用次数',
    `status` int default 0 not null comment '0-正常，1-禁用',
    `createTime` datetime default CURRENT_TIMESTAMP not null comment '创建时间',
    `updateTime` datetime default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP comment '更新时间',
    `isDelete` tinyint default 0 not null comment '是否删除(0-未删, 1-已删)'
) comment '用户调用接口关系';

insert into myapi.`interface_info` (`name`, `description`, `url`, `requestHeader`, `responseHeader`, `status`, `method`, `userId`) values ('许擎宇', '薛聪健', 'www.cary-king.net', '潘博涛', '谭聪健', 0, '石炫明', 9500534531);
insert into myapi.`interface_info` (`name`, `description`, `url`, `requestHeader`, `responseHeader`, `status`, `method`, `userId`) values ('陆弘文', '白志强', 'www.leslee-kuhn.net', '潘懿轩', '马鸿涛', 0, '陈峻熙', 3982575846);
insert into myapi.`interface_info` (`name`, `description`, `url`, `requestHeader`, `responseHeader`, `status`, `method`, `userId`) values ('毛建辉', '罗文', 'www.rosaria-kilback.io', '冯子默', '彭哲瀚', 0, '赵远航', 121776355);
insert into myapi.`interface_info` (`name`, `description`, `url`, `requestHeader`, `responseHeader`, `status`, `method`, `userId`) values ('彭雨泽', '蔡煜祺', 'www.norris-bergstrom.biz', '董思源', '田晓博', 0, '潘擎宇', 740);
insert into myapi.`interface_info` (`name`, `description`, `url`, `requestHeader`, `responseHeader`, `status`, `method`, `userId`) values ('傅志强', '陈梓晨', 'www.jordan-reinger.com', '金志强', '熊锦程', 0, '邓睿渊', 35542559);
insert into myapi.`interface_info` (`name`, `description`, `url`, `requestHeader`, `responseHeader`, `status`, `method`, `userId`) values ('吕黎昕', '孔越彬', 'www.fe-okon.info', '万伟宸', '林昊然', 0, '孟荣轩', 1445);
insert into myapi.`interface_info` (`name`, `description`, `url`, `requestHeader`, `responseHeader`, `status`, `method`, `userId`) values ('夏雪松', '许子骞', 'www.lashawna-legros.co', '蔡昊然', '胡鹏涛', 0, '钟立辉', 34075514);
insert into myapi.`interface_info` (`name`, `description`, `url`, `requestHeader`, `responseHeader`, `status`, `method`, `userId`) values ('严钰轩', '阎志泽', 'www.kay-funk.biz', '莫皓轩', '郭黎昕', 0, '龚天宇', 70956);
insert into myapi.`interface_info` (`name`, `description`, `url`, `requestHeader`, `responseHeader`, `status`, `method`, `userId`) values ('萧嘉懿', '曹熠彤', 'www.margarette-lindgren.biz', '田泽洋', '邓睿渊', 0, '梁志强', 98);
insert into myapi.`interface_info` (`name`, `description`, `url`, `requestHeader`, `responseHeader`, `status`, `method`, `userId`) values ('杜驰', '冯思源', 'www.vashti-auer.org', '黎健柏', '武博文', 0, '李伟宸', 9);
insert into myapi.`interface_info` (`name`, `description`, `url`, `requestHeader`, `responseHeader`, `status`, `method`, `userId`) values ('史金鑫', '蔡鹏涛', 'www.diann-keebler.org', '徐烨霖', '阎建辉', 0, '李烨伟', 125);
insert into myapi.`interface_info` (`name`, `description`, `url`, `requestHeader`, `responseHeader`, `status`, `method`, `userId`) values ('林炫明', '贾旭尧', 'www.dotty-kuvalis.io', '梁雨泽', '龙伟泽', 0, '许智渊', 79998);
insert into myapi.`interface_info` (`name`, `description`, `url`, `requestHeader`, `responseHeader`, `status`, `method`, `userId`) values ('何钰轩', '赖智宸', 'www.andy-adams.net', '崔思淼', '白鸿煊', 0, '邵振家', 7167482751);
insert into myapi.`interface_info` (`name`, `description`, `url`, `requestHeader`, `responseHeader`, `status`, `method`, `userId`) values ('魏志强', '于立诚', 'www.ione-aufderhar.biz', '朱懿轩', '万智渊', 0, '唐昊强', 741098);
insert into myapi.`interface_info` (`name`, `description`, `url`, `requestHeader`, `responseHeader`, `status`, `method`, `userId`) values ('严君浩', '金胤祥', 'www.duane-boyle.org', '雷昊焱', '侯思聪', 0, '郝思', 580514);
insert into myapi.`interface_info` (`name`, `description`, `url`, `requestHeader`, `responseHeader`, `status`, `method`, `userId`) values ('姚皓轩', '金鹏', 'www.lyda-klein.biz', '杜昊强', '邵志泽', 0, '冯鸿涛', 6546);
insert into myapi.`interface_info` (`name`, `description`, `url`, `requestHeader`, `responseHeader`, `status`, `method`, `userId`) values ('廖驰', '沈泽洋', 'www.consuelo-sipes.info', '彭昊然', '邓耀杰', 0, '周彬', 7761037);
insert into myapi.`interface_info` (`name`, `description`, `url`, `requestHeader`, `responseHeader`, `status`, `method`, `userId`) values ('赖智渊', '邓志泽', 'www.emerson-mann.co', '熊明哲', '贺哲瀚', 0, '田鹏', 381422);
insert into myapi.`interface_info` (`name`, `description`, `url`, `requestHeader`, `responseHeader`, `status`, `method`, `userId`) values ('许涛', '陆致远', 'www.vella-ankunding.name', '贾哲瀚', '莫昊焱', 0, '袁越彬', 4218096);
insert into myapi.`interface_info` (`name`, `description`, `url`, `requestHeader`, `responseHeader`, `status`, `method`, `userId`) values ('吕峻熙', '沈鹏飞', 'www.shari-reichel.org', '郭鸿煊', '覃烨霖', 0, '熊黎昕', 493);

```



> 利用`MyBatisX`插件生成接口管理的增删改查代码

然后复制到已经创建好的dao、service、mapper包里，此时，增删改查操作已完成，就这么简单

然后还剩一个controller层，直接复制一份模板中的controller层的代码，进行复用 

跑通后端

* ### 前端

使用oneapi插件自动生成（openapi规范）

![image-20230701235258820](https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202307012353984.png)



> 先前，我们登陆时是采用的start假数据进行登录，此时使用dev，登陆页面是存在问题的，因为脚手架自动生成的页面会强制要求登录，此时的登录接口与我们oneapi自动生成的接口对应不上，需要手动进行更改User》》Login》》index.tsx
>

因为没有开发注册页面，可以从注册中心项目中复制一个过来

为了便捷的进行开发，先从swagger注册一个账号，然后登录发现没有进行跳转，通过分析得出，是因为前端没有记录用户的登录状态，所以要进一步进行完善，在typings.d.ts中进行定义全局登录态

































