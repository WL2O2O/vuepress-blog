import{_ as e,X as i,Y as n,a1 as d}from"./framework-28352652.js";const l={},s=d(`<div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code> docker相关命令：
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),r=[s];function a(c,t){return i(),n("div",null,r)}const m=e(l,[["render",a],["__file","Linux.html.vue"]]);export{m as default};
