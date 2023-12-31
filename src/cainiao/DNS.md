---
title: DNS服务器配置
shortTitle: 头歌平台DNS服务器配置
category:
  - 菜鸟日记
tag:
  - 实践练习
description: 课上实践项目
head:
  - - meta
    - name: keywords
      content: Linux,ubantu,DNS,DNS服务器配置,头歌教学实践平台,教程,Linux网络实战,头歌,头歌教学实践平台,Ubuntu系统
---

@[TOC](头歌实践教学平台-Linux网络实战（一）-DNS配置（Ubuntu系统）)
见者有缘，欢迎大家访问我的博客【CS_GUIDER】：https://wlei224.gitee.io   或   www.csguider.icu（部署在github，可能访问慢）

> ## 写在前面
>
> 别划走！！！这篇博客就是你要找的头歌教学实践平台上的：第四关：DNS服务器配置的保姆级通关步骤。
>
> ![头歌实践教学平台-Linux网络实战（一）第四关](https://img-blog.csdnimg.cn/d5cb120009f04799a922533bde76d046.png#pic_center)
> ![成功图](https://img-blog.csdnimg.cn/5d1ccfb83506428892cd288db82f3035.png#pic_center) 如上图所示，本关题解笔者已经通过，并测验了多次，为避免出错，可以先按照如下步骤，直接复制即可，通关后想了解原理，再回过头来一步一步进行，如果遇到什么问题，欢迎在评论区进行讨论！
# 通关前的啰嗦（属于知识补充，不想看就跳过）
## 相关知识背景
**域名**：`Internet`上某一台计算机或计算机组的名称，是`IP地址`的映射。域名解析实际上就是把域名映射回`IP地址`。

**域名解析的过程**：当一个浏览者在浏览器地址框中打入某一个域名，或者从其他网站点击了链接来到了这个域名，浏览器向这个用户的上网接入商发出域名请求，接入商的`DNS服务器`要查询域名数据库，看这个域名的`DNS服务器`是什么。然后到`DNS服务器`中抓取`DNS记录`，也就是获取这个域名指向哪一个`IP地址`。在获得这个`IP信息`后，接入商的服务器就去这个`IP地址`所对应的服务器上抓取网页内容，然后传输给发出请求的浏览器。
Linux中`/etc/resolv.conf`文件是`DNS客户机`配置文件，用于设置`DNS服务器`的`IP地址`及`DNS域名`，还包含了主机的域名搜索顺序。

**正解与反解的Zone意义**：
`DNS系统`最主要的功能就是互查主机名与`IP`，由于计算机在网络上只认识`IP地址`，所以，一般来说，我们称由主机名查找`IP`的过程为正解，由`IP`查询得到主机名为反解。

Zone(区域)：一个正解或反解的设置就是一个zone，通常一个配置文件就是一个zone。

# 通关保姆级步骤
Tips：头歌平台的环境是ubantu版本的Linux系统，在Linux系统下可以通过Ctrl+insert进行复制，Shift+insert进行粘贴。
## 安装DNS服务器并开启服务

> 注意：严格按照如下两个步骤进行bind任务环境的安装与初始化。
>
> | 1、更新安装源后、安装DNS服务器（共两个命令） | apt-get update          | apt-get install bind9 |
> | :------------------------------------------- | ----------------------- | --------------------- |
> | **2、开启DNS服务**                           | **service bind9 start** |                       |
>
> 具体编程要求如下：
> 先有域名test.com，然后将该域名与IP地址：10.40.211.244相绑定在一起。

**避雷器提醒**：准备bind和host环境时，一定要先下载bind，再下载host！否则会影响映射成功，原因待补充... ...

补充原因：

> 在配置DNS服务器时，需要先下载BIND软件包，因为BIND是一种开源的DNS服务器软件，它实现了域名解析服务，可以将域名转换为IP地址。如果没有安装BIND软件包，则无法实现DNS服务器的基本功能。
>
> 下载HOST软件包是为了建立本地域名解析服务，可以将本地主机名映射到IP地址。如果先下载HOST软件包而没有安装BIND软件包，则无法将域名解析请求转发到DNS服务器，这会导致域名无法解析成功。因此，在配置DNS服务器时，需要先安装BIND软件包，再安装HOST软件包，以确保域名解析服务能够正常运行。



## 一、标题配置域名和IP的正解与反解zone：

命令：

```cmd
vi /etc/bind/named.conf.default-zones
```


添加如下:


```javascript
zone "test.com"{  
    type master;  
    file "/etc/bind/db.test.com";  
};		//正向解析

zone "211.40.10.in-addr.arpa"{  
    type master;
    file "/etc/bind/db.10";  
};  	//反向解析
```



## 二、新建/etc/bind/db.test.com文件
命令：

```cmd
vi /etc/bind/db.test.com
```

添加如下:


```javascript
;  
; BIND data file for local loopback interface  
;  
$TTL    604800  
@       IN      SOA     test.com. root.test.com. (  
                                     2         ; Serial  
   	                            604800         ; Refresh  
	                             86400         ; Retry  
	                           2419200         ; Expire  
	                            604800 )       ; Negative Cache TTL
;  
@       IN      NS      test.com.  
@       IN      A       10.40.211.244  
```


## 三、新建/etc/bind/db.10文件
命令：

```cmd
vi /etc/bind/db.10
```

添加如下:


```javascript
;  
; BIND reverse data file for local loopback interface  
;  
$TTL    604800  
@       IN      SOA     test.com. root.test.com. (  
                                    1         ; Serial  
                               604800         ; Refresh  
                                86400         ; Retry  
                              2419200         ; Expire  
                               604800 )       ; Negative Cache TTL  
;  
@       IN      NS      test.com.  
244      IN      PTR     test.com. 
```


## 四、修改DNS服务器搜索顺序，将本地作为DNS搜索的第一搜索目录
命令：

```cmd
vim /etc/resolv.conf
```

打开/etc/resolv.conf文件后添加到第一行：

```cmd
nameserver 127.0.0.1 
```

![使用vi命令打开文件后添加一行：nameserver 127.0.0.1](https://img-blog.csdnimg.cn/ac450769cec5475fb849462364cf24ec.png#pic_center)

## 五、不要忘记重新启动bind服务器
```cmd
service bind9 restart
```


## 六、最后安装host命令
```cmd
apt-get install host
```


## 七、查询域名和IP是否关联
第一步：
```cmd
host test.com
```
第二步：
```cmd
host 10.40.211.244
```

结束！
直接开始评测！

## 头歌课程网址
头歌实践教学平台：https://www.educoder.net/shixuns/qpmhnsiy/challenges

> ## 写在最后
>
> 无论你是计算机小白，还是佬儿，或者是考研党，或者是摸鱼翁，能在CSDN相遇即是缘分，欢迎大家访问我的博客：https://wlei224.gitee.io 或者 www.csguider.icu，如果你对写博文很感兴趣，或者说想加入我一起打造这个小网站，你可以在博客的评论区，或者本文的评论区联系我，总之，话不多说，一起努力！
>
> 送给大家八个字：慢下来，走好每一步！
>
> CS_GUIDER博客域名：https://wlei224.gitee.io   或   www.csguider.icu（部署在github，可能访问慢）![CS_GUIDER](https://img-blog.csdnimg.cn/a27ded70f81f415089e0f067476b6d87.png#pic_center)