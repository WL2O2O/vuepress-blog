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

> 写在最前面：
>
> ​	学到的知识与收到的建议：
>
> 	1. 把自己所有的数据库建表语句总结到一起，后续有用；
> 	1. 记录Bug文档
> 	1. 多记录一些需求的解决方案、提高自己的架构能力

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

1. 继续开发接口管理前端页面 15min
2. 开发模拟API接口 5min
3. 开发调用接口的代码 10-20min
4. 保证调用的安全性（API签名认证） 15min
5. 客户端SDK的开发 15min
6. 管理员接口的发布与调用 15min
7. 接口文档的展示、接口在线调用 15min



### Day03--接口计费与保护

统计用户调用次数

限流

计费

日志

开通

### Day04--管理员统计分析

提供可视化平台，展示所有接口的调用情况，便于管理价格

接口预警





## Day01 需求分析

1. 管理员可以对接口信息进行增删改查

2. 用户可以访问前台，查看接口信息

### 今日计划

1. 项目脚手架搭建（初始化项目）10分钟前端、5-10分钟后端 
1. 管理员可以对接口信息进行增删改查
1. 用户可以访问前台，查看接口的信息









### 项目初始化（前后端）

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
) comment  '接口信息';

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



> 留一个小bug，数据库建表语句直接套用的最终建表语句，user表中涉及到两个关于key的字段，手动改成了可以为空，若有问题，后续再做出更改

> 利用`MyBatisX`插件生成接口管理的增删改查代码

将生成的代码逻辑复制到项目的dao、service、mapper包里，

然后还剩一个controller层，直接复制一份模板中的controller层的代码，进行复用

注意此时模糊查询使用的字段不是content，而是description，进行相应的更改。

此时，增删改查操作已完成，就这么简单 

跑通后端

* ### 前端

使用oneapi插件自动生成（openapi规范）

![image-20230701235258820](https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202307012353984.png)



> 先前，我们登陆时是采用的start假数据进行登录，此时使用dev，登陆页面是存在问题的，因为脚手架自动生成的页面会强制要求登录，此时的登录接口与我们oneapi自动生成的接口对应不上，需要手动进行更改User》》Login》》index.tsx
>

因为没有开发注册页面，可以从注册中心项目中复制一个过来

为了便捷的进行开发，先从swagger注册一个账号，然后登录发现没有进行跳转，通过分析得出，是因为前端没有记录用户的登录状态，所以要进一步进行完善，在typings.d.ts中进行定义全局登录态



改造页面，将前端展示的表格，用来展示自己的数据





## Day02 接口调用开发（前端）

> 首先发现一个问题，使用后端swagger进行user密码更改的时候，密码没有进行加密，会导致前端进行校验的时候返回用户名或者密码不正确的信息

* ### 优化前端展示页面（改路由，先不删）

  * 保持前后端组件名一致
  * 优化页面代码
  * 首页没有页面，后续进行开发一个非管理员用户可以看到的页面
  * 调整导航栏的位置，可以先使用antDesignPro框架提供的切换导航布局小设置
  
* ### 新建模态框的编写真的很搞心态，最后的原因竟然是因为一个小的错误（静下心来）（血泪教训，做完项目过一遍react）

* ### 完善修改框

  * 此处设计到React的核心知识点，也是重中之重（useEffect、useRef）

  * ```tsx
    const formRef = useRef<ProFormInstance>();
    
    useEffect(() => {
      if(formRef){
        formRef.current?.setFieldsValue(values);
      } 
    }, [values])
    
    return (
        <Modal visible={visible} footer={null} onCancel={() => onCancel?.()}>
          <ProTable
            type="form"
            columns={columns}
            // 因为这里使用的form组件，只会初始化一次，所以会造成点击修改按钮进行修改的话，数据是不会变的
            // form={{
            //   initialValues: values
            // }}
            
            // 所以此处用到了监听
            formRef={formRef}
            
            onSubmit={async (value) => {
              onSubmit?.(value);
            }}
          />
        </Modal>
      );
    ```

  * > 此处有Bug，后端报空指针


* ### 完善删除框

  * 仿照以上步骤完成

  * > 此时发现进行相关操作之后数据不会自动更新，所以我们引入actionRef，它可以拿到proTable的控制权，使用actionRef.current?.reload()





### 模拟接口项目（smartapi-interface）（后端）

提供三个模拟接口

1. GET接口
2. POST接口（url传参）
3. POST接口（Restful）





### 开始开发模拟接口项目部分

采用创建几个controller控制层小接口，前端传参进行调用，但是这样不符合逻辑，所以我们要通过后端来进行传参！



### 开发调用接口

几种HTTP调用方式

	1. HttpClient
	1. RestTemplete
	1. 工具（OKHttp、HuTool）

这里我们使用HuTool来进行调用[HuTool](https://hutool.cn/docs/#/)



参考文档是一个好东西，利用好



那么现在已经开发好调用接口了，但是用户调用你的接口，或者黑客黑你的接口，所以需要对调用者进行一个调用限制，那么如何加以限制？

这时可以联想一下我们平时调用第三方接口时，都会有一些key



### API 签名认证（客户端与服务端有点迷惑，后续捋顺）



**本质：**

1. 签发签名

	2. 使用签名(校验签名)



**为什么需要？**

1. 保证安全性，不能随便一个人就可以调用



**怎么实现？（复杂、无序、无规律）**

通过http request header头传递参数。

参数1：assesKey：调用的标识（一串无规则字符串） User A、B

参数2：secretKey：相当于密码

也就是用户名和密钥，区别就是ak、sk是无状态的

在服务端数据库表中新增以上两个字段，用户客户端进行校验。





但是这样的方法时容易被拦截的，不能把密钥直接在服务器之间进行传递，要进行加密。所以要对密码进一步进行加密。



参数3：用户请求参数（更严格）



参数4：sign

加密方式：对称机密、非对称加密、不可解密加密（MD5）



用户参数 + 密钥 ==》 **签名生成算法** ==》不可解密的值

wl + abcdefgh ==》afdasfafszv（通过签名算法加密）

那么如何知道这个签名是否正确？

**服务端会通过用一摸一样的参数和算法去生成签名，只要和用户才能属的签名一致，则正确!**





**怎么防重放？**

参数5：加nonce随机数，保证只能用一次，但是服务端也要保存随机数

参数6：timestamp时间戳（加上时间戳可以保证随机数可以清除）

**API签名认证是一个很灵活的设计，具体要有哪些参数、参数名一定要根据实际场景来（比如userId、appId、version、固定值等）**



思考：难道开发者每次调用接口都需要自己来写签名算法吗？









### 开发一个简单易用的SDK



理想情况：开发者只需要关心调用哪些接口、传递哪些参数，就跟调用自己的代码一样简单。



开发stater的好处：

1. 开发者引入之后，可以直接在application.yml中写配置，自动创建客户端。



### 创建SDK项目（开发starter）（简历亮点）

引入依赖：

1. lombook
2. Spring Configuration Processor（自动生成配置文件写代码的提示）



改造pom依赖，一定要删掉build标签内的代码，因为我们在进行构建依赖包，不是要直接运行的jar的项目





尝试把打好的包发布到maven中









## Day03 接口保护与优化



> 此时，我们发现鱼总的后端项目模块中已经包含前面单独创建好的SDK和interface模拟接口项目了，那么我们如何把这两个添加到后端的项目中呢？
>
> 方案一：
>
> ​	受尚医通项目的影响，我想应该可以通过增加子模块的方法拉进行添加，但是添加之后好像是不太行，跟鱼总的不一样，这种方法应该是可以使多个项目在同一个窗口中打开（解决了之前我的疑虑）
>
> 方案二：
>
> ​	我们看到鱼总的后端项目中，另外两个项目（SDK和interface）是两个目录的标识，于是我就直接复制粘贴到后端项目的文件夹中了，然后Java源文件会变成红J，可以通过右键rsc下main下的Java文件夹，然后mark Directory as--》Sources Root，将Java文件夹标记为源码根目录，如图所示：
>
> ![image-20230708205543307](https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202307092023528.png)
>
> 然后我们发现maven的pom依赖文件的图标也不对，也通过桐言的方法，右键--》add maven project标记为maven项目，大功告成！

1.开发接口发布/下线的功能（管理员）

2.前端浏览接口，查看 接口文档，申请签名（注册）

3.在线测试（用户）

4.统一用户调用接口次数

5.优化系统-API网关

### 开发接口发布/下线的功能（仅管理员） 

> 此处又涉及到了一个待学知识点：
>
> Spring的AOP切面应用
>
> 可以用来通过注解的方式进行权限管理。

### 后端接口： 

**发布接口**（仅管理员） 

1.校验该接口是否存在

2.判断接口是否可以被调用

​	利用开发好的SDK，通过调用接口看是否能够进行调用的通

​	第一步：启动smartapi-interface项目

​	第二步：在smartapi-backend中引入SDK的依赖

​	第三步：在application.yml中写入ak、sk

​	第四步：在接口中引入客户端的实例

​			@Resource

​			private SmartApiClient smartapiclient

> TODO:
>
> > >  1. 判断接口是否可以调用时，由固定方法名改为可以根据测试地址进行调用
> > >  2. 用户测试接口判断接口是否可以调用时，由固定方法名改为可以根据测试地址进行调用

3.修改数据库接口字段为1

**下线接口**（仅管理员） 

1.校验该接口是否存在

2.修改数据库接口字段为 0

按钮已添加并完善。测试中出现一个经典问题，如图所示：

![image-20230710000821503](https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202307100008989.png)



> 待办事件：
>
> 流程：
>
> 
>
> **前端**添加上线、下线按钮、√、增加用户浏览页面、查看接口文档、申请签名
>
> **后端**申请签名（更改完善数据库写生成签名的算法）
>
> **前端**
>
> 新增在线调用的按钮
>
> **后端**
>
> 开发在线调用的接口
>
> 







### 前端浏览接口

```react
import { PageContainer } from '@ant-design/pro-components';
import React, {useEffect, useState} from 'react';
import {List, message} from "antd";
import {
  listInterfaceInfoByPageUsingGET
} from "@/services/smartapi-backend/interfaceInfoController";


/**
 * 主页
 * @constructor
 */
const Index: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<API.InterfaceInfo[]>([]);
  const [total ,setTotal] = useState<number>(0);

  const loadData = async (current=1 , pageSize = 8 ) =>{
    setLoading(true);
    try {
      const res = await listInterfaceInfoByPageUsingGET({
        current,pageSize
      });
      setList(res?.data?.records ?? []);
      setTotal(res?.data?.total ?? 0);

    } catch (error: any) {

      message.error('请求失败,'+error.message);
      return false;
    }
    setLoading(false);
  }
  useEffect(() => {
    loadData();
  },[])


  return (
    <PageContainer title="在线接口开放平台">
      <List
        className="my-list"
        loading={loading}
        itemLayout="horizontal"
        dataSource={list}
        renderItem={item => {

          const apiLink =`/interface_info/${item.id}`;
          return(
            <List.Item
              actions={[<a key={item.id} href={apiLink}>查看</a>]}
            >
              <List.Item.Meta
                title={<a href={apiLink}>{item.name}</a>}
                description={item.description}
              />
            </List.Item>
          )
        }

        }
        pagination ={
          {
            // eslint-disable-next-line @typescript-eslint/no-shadow
            showTotal(total: number){
              return '总数：' +total;
            },
            pageSize: 8,
            total,
            onChange(page,pageSize){
              loadData(page,pageSize);
            }
          }
        }
      />
    </PageContainer>
  );
};

export default Index;
```

### 查看接口文档

```react
import { PageContainer } from '@ant-design/pro-components';
import React, {useEffect, useState} from 'react';
import {Card, Descriptions, message} from "antd";
import {
  getInterfaceInfoByIdUsingGET,

} from "@/services/smartapi-backend/interfaceInfoController";
import { useParams} from "@@/exports";


/**
 * 主页
 * @constructor
 */
const Index: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<API.InterfaceInfo>();
  const params  = useParams();

  const loadData = async () =>{
    if (!params.id){
      message.error('参数不存在');
      return ;
    }
    setLoading(true);
    try {
      const res = await getInterfaceInfoByIdUsingGET({
        id: Number(params.id)
      });
      setData(res.data);

    } catch (error: any) {

      message.error('请求失败,'+error.message);
      return false;
    }
    setLoading(false);
  }
  useEffect(() => {
    loadData();
  },[])

  return (
    <PageContainer title="查看接口文档">
      <Card>
        {
          data?(
            <Descriptions title={data.name} column={1}>
              <Descriptions.Item label="描述">{data.description}</Descriptions.Item>
              <Descriptions.Item label="接口状态">{data.status? '正常': '关闭'}</Descriptions.Item>
              <Descriptions.Item label="请求地址">{data.url}</Descriptions.Item>
              <Descriptions.Item label="请求方法">{data.method}</Descriptions.Item>
              <Descriptions.Item label="请求头">{data.requestHeader}</Descriptions.Item>
              <Descriptions.Item label="响应头">{data.responseHeader}</Descriptions.Item>
              <Descriptions.Item label="创建时间">{data.createTime}</Descriptions.Item>
              <Descriptions.Item label="更新时间">{data.updateTime}</Descriptions.Item>
            </Descriptions>
          ):(
            <>接口不存在</>
          )}
      </Card>
    </PageContainer>
  );
};

export default Index;
```

### 申请签名（注册） 

通过数据库新增字段、更改用户注册的逻辑（使用DigestUtil加密算法生成ak、sk，然后加入数据库）

> 留一个小作业:
>
> 新增一个小拓展功能：用户可以手动更改自己的ak、sk

### 新建真实数据（前端）

**新建这些真实的数据**

```text
getUsernameByPost,

获取用户名,

http://localhost:8123/name/user,

{”Content-Type“: ”application/json“},

{”Content-Type“: ”application/json“},

```

oh my god，此时发现遗忘了一个重要的请求参数字段，于是通过建表语句、IDEA客户端modify table，来增加这么一个字段。

修改相应的model实体包中的字段信息以及向mybatisplus.xml中添加这个字段。

重启项目---》前端重新使用openai插件生成接口

前端也需要完善修改组件的表单列名，新增一个requestParams

完成！

**完善接口信息的请求参数信息**

**在线调用**

前端界面的编写，通过ant design组件库利用现成的表单组件来完成在线按钮的添加与请求参数的基本表单。

![image-20230710023831281](https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202307100238354.png)

请求参数的类型（JSON类型）

> 又一个小作业：
>
> 在线调用的扩展点：
>
> 先跑通整个流程，然后根据请求头和请求类型的不同设计不同的表单和界面，增强用户体验



### 后端调用流程

![image-20230710024253445](https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202307100242406.png)

按照标准的企业开发流程来说：

一定会选择第一种开发方式，不然后期的网关与计费就毫无作用，

第二种方式可以用来自己调用测试。



流程：

1. 前端将用户输入的请求参数与要进行测试的接口id发给平台后端
2. 在调用前进行一些校验
3. 平台后端去调用模拟接口

```Java
/**
     * 测试调用
     *
     * @param interfaceInfoInvokeRequest
     * @param request
     * @return
     */
    @PostMapping("/invoke")
    public BaseResponse<Object> invokeInterfaceInfo(@RequestBody InterfaceInfoInvokeRequest interfaceInfoInvokeRequest,
                                                    HttpServletRequest request) {
        if (interfaceInfoInvokeRequest == null || interfaceInfoInvokeRequest.getId() <= 0) {
            throw new BusinessException(ErrorCode.PARAMS_ERROR);
        }
        long id = interfaceInfoInvokeRequest.getId();
        String userRequestParams = interfaceInfoInvokeRequest.getUserRequestParams();
        // 判断是否存在
        InterfaceInfo oldInterfaceInfo = interfaceInfoService.getById(id);
        if (oldInterfaceInfo == null) {
            throw new BusinessException(ErrorCode.NOT_FOUND_ERROR);
        }
        if (oldInterfaceInfo.getStatus() == InterfaceInfoStatusEnum.OFFLINE.getValue()) {
            throw new BusinessException(ErrorCode.PARAMS_ERROR, "接口已关闭");
        }
        User loginUser = userService.getLoginUser(request);
        String accessKey = loginUser.getAccessKey();
        String secretKey = loginUser.getSecretKey();
        MyClient tempClient = new MyClient(accessKey, secretKey);
        Gson gson = new Gson();
        com.wl.smartapiclientsdk.model.User user = gson.fromJson(userRequestParams, com.wl.smartapiclientsdk.model.User.class);
        String usernameByPost = tempClient.getUserNameByPost(user);
        return ResultUtils.success(usernameByPost);
    }
```

后端调用逻辑已完成

现在继续完善前端的接口，将前端点击调用按钮后改为我们刚才通过后端实现的真实的功能。

```
const onFinish = (values: any) => {
    if (!params.id){
      message.error('接口不存在');
      return ;
    }
    try {
      invokeInterfaceInfoUsingPOST({
        id: params.id,
        ...values
      })
      message.success('请求成功');
      return true;
    } catch (error: any) {
      message.error('请求失败，' + error.message);
    }
  };
```

逻辑打通之后还要进行回显数据：

```
// async 是设置同步的意思

 const onFinish = async (values: any) => {
    if (!params.id){
      message.error('接口不存在');
      return ;
    }
    try {
// 等待

      const res = await invokeInterfaceInfoUsingPOST({
        id: params.id,
        ...values
      })
// 将res.data赋给setInvokeRes

      setInvokeRes(res.data);
      message.success('请求成功');
      return true;
    } catch (error: any) {
      message.error('请求失败，' + error.message);
    }
  };
```

然后在表单处新增一个卡片，用于接收invokeRes进行数据回显。

已完成，测试通过！

并且完善了一个缓冲显示的loading



TODO:

> >  1. 判断接口是否可以调用时，由固定方法名改为可以根据测试地址进行调用
> >  2. 用户测试接口判断接口是否可以调用时，由固定方法名改为可以根据测试地址进行调用
> >  3. 此时任何人调用模拟接口都是可以的，因为我们的SDK是写死在配置文件中的，所以后续再进行完善，从数据库中进行校验！



over！

下面我们的网关用Spring Cloud GateWay实现



## Day04 

1. 开发接口调用次数统计  20min

2. 优化系统的架构---学习架构设计、接触应用场景==>面对一个需求就会自然而然地提高开发效率。 60min

   （怎么把一个项目的架构设计做的更加合理，涉及到API网关的知识）

   * 网关是什么？
   * 网关的作用？
   * 网关的应用场景以及实现？
   * 结合业务去应用网关

### 接口调用次数统计

需求：

	1. 用户每次调用接口成功，次数加1（或者设定一定的调用次数，每次减1）
	1. 给用户分配或者用户自助申请接口调用次数

> 业务流程：
>
> 1. 用户调用接口（之前已完成）
> 2. 修改数据库，调用次数（加1或者减1）

设计库表：

> 哪个用户？哪个接口？
>
> 用户 => 接口（多对多）

用户接口关系表：

```
-- 用户调用接口关系表
create table if not exists smartapi.`user_interface_info`
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
```

### 步骤：

1. 开发基本的增删改查（给管理员使用）

   > 直接使用Mybatis-X生成相关的实体类（注意在删除字段上米娜加上逻辑删除@TableLogic）、mapper、service实现类没然后移动到项目对应的包中。
   >
   > 复制写好的Controller，改那些增删改查！ 完成√

2. 开发用户调用接口次数加1（或者减1）

   问：如果每个接口的方法，都写调用次数 + 1，是不是比较麻烦，如果在本项目中，将这个调用次数+ 1，封装成一个方法，也是可以的，但是`代码侵入性很强！`

   致命问题是：接口开发者需要自己进行调用！

   解决方法：

   1. Spring中的AOP（推荐，是Spring的一个核心特性）
   2. Servelet中的拦截器、过滤器（Fillter）
   3. 通用的方法（缺点：代码侵入性强，需要自己调用）
   4. 网关



简单说一下AOP切面的基本过程：

> 先说一下AOP切面的作用：
>
> 就相当于在接口或者方法调用前或者调用之后帮你做一些事情，其底层的原理就是动态代理。
>
> 使用AOP切面的
>
> 优点：
>
> 独立于接口，在每个接口调用前后加 1
>
> 缺点：
>
> 只存在于单个项目中，如果每个团队都要写一个自己的切面
>
> // TODO：下去看一下AOP的流程，熟悉一下



我们在这个项目中使用网关来实现接口调用次数。

网关就当与在所有接口的入口前加了一层检票口，如图所示：

![image-20230716015231451](https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202307160152994.png)

因为网关实现的有调用次数的统计，所以开发者可以通关网关来查看，而用户调用接口时直接输入请求参数、请求地址即可。

### 网关：

这里为什么写这么多理论呢？写代码不一定是最重要的，重要的是思想！逻辑思想明白之后，无非就是看文档、百度实现。

> 什么是网关呢？就相当于车票检票口，统一去检票。
>
> 优点？统一去进行一些操作、处理一些问题。
>
> 作用？
>
> 1. 路由
>
> 2. 负载均衡
>
> 3. 统一鉴权
>
> 4. 统一处理跨域
>
> 5. 统一业务处理（缓存）
>
> 6. 访问控制
>
> 7. 发布控制（灰度发布，也就是慢慢控制接口的流量，不断开放给更多用户，然后达到升级接口的目的）
>
> 8. 流量染色（给流量添加一些标识，比如新的请求头信息）
>
> 9. 统一接口保护 
>
>    1. 限制请求
>
>    2. 信息脱敏（网关可以操作你的请求口，进而抹去敏感信息）
>
>    3. 降级（熔断，保险起见，接口下线后，可以返回一些提示信息）
>
>    4. 限流
>
>       （// TODO：学习令牌桶算法，学习露桶算法，学习一下）
>
>    5. RedislimitHandler
>
>    6. 超时时间
>
>    7. 重试（业务保护）
>
> 10. 统一日志
>
> 11. 统一文档（将下游项目的文档统一聚合，展示到一个页面）



### 路由

起到转发的作用，比如有接口A和接口B,网关会记录这些信息，根据用户访问的地址和参数，转发请求到对应的接口（服务器/集群）

用户a调用接口A

/a=>接口A /b=>接口B

https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/#gateway-request-predicates-factories

### 负载均衡 

在路由的基础上可以转发到某一个服务器

/c => 服务A/ 集群A（随机转发到其中的某一个机器）

uri从固定地址改成b:xx

### 统一鉴权 

判断用户是否有权限进行操作，无论访问什么接口，我都统一去判断权限，不用重复写

### 统一处理跨域 

网关统一处理跨域，不用在每个项目单独处理

https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/#cors-configuration

### 统一业务处理 

把每个项目中都要做的通用逻辑放到上层（网关），统一处理，比如本项目的次数统计

### 访问控制 

黑白名单，比如限制ddos ip

### 发布控制 

灰度发布，比如上线新接口，先给新接口分配 20%流量，老接口80% ,再慢慢调整比例

https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/#the-weight-route-predicate- factory

### 流量染色 

区分用户来源

给请求（流量）添加一些标识，一般是设置请求头中，添加新的请求头 https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/#the-addrequestheader-gatewayfilter-factory

全局染色：https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/#default-filters

### 接口保护 

1 限制请求 https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/#requestheadersiz-gatewayfilter-factory 

2 信息脱敏 https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/#the-removerequestheader-gatewayfilter-factory 

3 降级（熔断） 进行兜底 https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/#fallback-headers 

4 限流 https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/#the-requestratelimiter-gatewayfilter-factory 

5 超时时间   超时就中断 https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/#http-timeouts-configuration 

6 重试（业务保护）： https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/#the-retry-gatewayfilter-factory 

### 统一日志 

统一的请求，响应信息记录

### 统一文档 

将下游项目的文档进行聚合，在一个页面统一查看

建议用：https://doc.xiaominfo.com/docs/middleware-sources/,aggregation-introduction


### 网关的分类

1. 全局网关（接入层网关）：作用是负载均衡、请求日志，不和业务逻辑绑定

2. 业务网关（微服务网关：会有一些业务逻辑）：作用是根据不同的请求转发到不同的项目接口

   参考文章：https://blog.csdn.net/qq21040559/article/,details/,122961395

### 实现

1. Nginx（推荐的全局型网关）

2. Kong网关（适合API网关）--收费！！

3. `Spring Cloud Gateway`（取代了Zuul，因为架构设计并不太好，并发量也有限）

   > 优点：用到了NIO、多路复用、底层Netty、React模型；
   >
   > 最大的亮点：可以用Java代码写逻辑，其他网关都需要学习一些其他语言（Nginx需要学到一些Lua脚本）

网关技术选型：https://zhuanlan.zhihu.com/p/500587132

### Spring Cloud Gateway用法

官网是最好的老是去看官网

去看官网：https://spring.io/projects/spring-cloud-gateway

官方文档：https://docs.spring.io/spring-cloud-gateway/docs/current/reference//html/





### 创建一个Gateway项目

小作业：完成官网的小demo（编程式demo）





## Day05 把API网关应用到项目中

任务：

1. 完成统一的用户鉴权、统一的接口调用次数统计（API网关应用）
2. 完善功能



### 将用到的特性

1. 路由（转发请求到模拟接口项目）

2. ~~负载均衡（需要用到注册中心）~~
3. 统一鉴权(accessKey，secretKey)
4. 统一处理跨域
5. 统一业务处理（每次请求接口后，接口调用次数+1）
6. 访问控制（黑白名单）
7. ~~发布控制~~
8. 流量染色(记录请求是否为网关来的)
9. ~~统一接口保护~~ 
   1. 限制请求
   2. 信息脱敏
   3. 降级（熔断）
   4. 限流 学习令牌桶算法，学习露桶算法，学习一下RedislimitHandler
   5. 超时时间
   6. 重试（业务保护）
10. 统一日志(记录每次的请求和响应)
11. ~~统一文档~~



### 业务逻辑：

> 为什么会用到API网关？
>
> 结合架构图来说，简单来说也就是加一个检票口，同时也可以添加流量染色、链路追踪的功能、灰度发布等等。。。

1. 用户发送请求到API网关（请求转发）
2. *请求日志*
3. *黑白名单*
4. 用户鉴权（如何？判断ak、sk）
5. 请求的模拟接口是否存在？
6. 请求转发，调用模拟接口
7. 响应日志
8. 调用成功，接口调用次数 + 1
9. 调用失败，返回规范错误码



