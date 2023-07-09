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
> ![image-20230708205543307](E:/Master/TyporaImages/api/image-20230708205543307.png)
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

3.修改数据库接口字段为1

**下线接口**（仅管理员） 

1.校验该接口是否存在

2.修改数据库接口字段为 0



> 待办事件：
>
> 流程：
>
> **后端**增加上线下线接口
>
> **前端**添加上线、下线按钮、、增加用户浏览页面、查看接口文档、申请签名
>
> **后端**申请签名（更改完善数据库写生成签名的算法）
>
> **前端**
>
> 新增在线调用的按钮
>
> **后端**
>
> 开发在线调用的jie'kou
>
> 







### 前端浏览接口，查看接口文档，申请签名（注册） 

































