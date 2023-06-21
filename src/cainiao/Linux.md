---
title: Linux常用命令积累
shortTitle: Linux常用命令
isOriginal: true
sticky: true
star: true
category:
  - 菜鸟日记
tag:
  - Linux
description: 课下点滴积累
head:
  - - meta
    - name: keywords
      content: Linux,Docker,Linux常用命令,docker常用命令,FireWall常用命令
---
```cmd
 docker相关命令：
 	#docker pull之后，使用如下命令进行创建和启动容器，因为懒的配置，所以使用默认配置。
 		docker run -itd --name redis -p 6379:6379 redis
 	#docker ps：查看运行中的CONTAINER
 	#docker进入容器
 		docker exec -it mymongo /bin/bash
 	#这个是使容器处于docker运行便自启动
 		docker update redis --restart=always 
 	#docker重启命令
 		systemctl restart docker
 	#容器重启命令
 		docker restart redis(自己命的名字或者CONTAINER ID)
 启动     systemctl start firewalld
 关闭     systemctl stop firewalld
 查看状态  systemctl status firewalld
 查看状态  firewall-cmd --state
 开机启用  systemctl enable firewalld
 开机禁用  systemctl disable firewalld
 查看端口  firewall-cmd --zone=public --list-ports
 添加端口  firewall-cmd --add-port=443/tcp --permanent //永久添加443端口,协议为tcp 
 重新加载  firewall-cmd --reload //重新加载

 删除端口  firewall-cmd --zone=public --remove-port=80/tcp --permanent //删除tcp下的80端口

 

 参数介绍：
 firewall-cmd：是Linux提供的操作firewall的一个工具(注意没有字母“d”)；
 --permanent：表示设置为持久；
 --add-port：标识添加的端口
 --remove-port:标识删除的端口
```

> Linux常用命令？怎么查看项目的日志？
    >
    > 1. ls：列出当前目录下的文件和子目录。
    >
    > 2. cd：改变当前工作目录。
    >
    > 3. mkdir：创建一个新目录。
    >
    > 4. rm：删除文件或目录。
    >
    > 5. cp：复制文件或目录。
    >
    > 6. mv：移动文件或目录。
    >
    > 7. touch：创建一个新文件或修改文件的时间戳。
    >
    > 8. cat：查看文件的内容。
    >
    > 9. grep：在文件中查找指定的字符串。
    >
    > 10. ps：查看当前运行的进程。
    >
    > 11. top：查看系统资源使用情况。
    >
    > 12. df：查看文件系统使用情况。
    >
    > 13. du：查看目录大小。
    >
    > 14. tar：归档和压缩文件。
    >
    > 15. ssh：远程登录到另一台主机。
    >
    > 要查看部署到Linux上的项目日志，可以使用以下命令：
    >
    > 1. tail：查看文件的末尾几行。
    >
    > 例如，要查看Tomcat日志文件的最后100行，可以使用以下命令：
    >
    > ```
    > tail -n 100 /var/log/tomcat/catalina.out
    > ```
    >
    > 2. less：查看大文件的内容。
    >
    > 例如，要查看一个1GB的日志文件，可以使用以下命令：
    >
    > ```
    > less /var/log/myapp.log
    > ```
    >
    > 在less中，可以使用Page Up、Page Down、上下方向键等进行滚动和搜索。要退出less，可以使用q键。
    >
    > 3. grep：在日志文件中查找指定的字符串。
    >
    > 例如，要查找myapp日志文件中包含ERROR的行，可以使用以下命令：
    >
    > ```
    > grep ERROR /var/log/myapp.log
    > ```
    >
    > 以上是一些常用的Linux命令，可以帮助开发者快速定位和解决问题。