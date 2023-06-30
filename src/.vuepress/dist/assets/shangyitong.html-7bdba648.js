import{_ as l,X as s,Y as r,$ as e,a0 as n,a1 as a,Z as d,C as t}from"./framework-b0c8e9b4.js";const c={},v=d('<blockquote><p>欢迎观看我的医院预约挂号平台项目笔记</p><p>axiba,图片在typora软件更新时被意外删除了！！！</p><figure><img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202306211602425.png" alt="测试一下" tabindex="0" loading="lazy"><figcaption>测试一下</figcaption></figure></blockquote><h1 id="尚医通学习笔记" tabindex="-1"><a class="header-anchor" href="#尚医通学习笔记" aria-hidden="true">#</a> 尚医通学习笔记</h1><p><em>前言：按照计划跟做项目，发现仍有一些令人不解的坑，为了解决问题耗费了更多的事件，通过手写和电子笔记以此列举学习成果，以便更好的复习。</em></p><blockquote><h2 id="项目介绍篇" tabindex="-1"><a class="header-anchor" href="#项目介绍篇" aria-hidden="true">#</a> 项目介绍篇</h2></blockquote><p>是一个预约挂号，就医问诊，解决患者就医难看病难的平台。</p><p>平台：用户前台（用户预约挂号）、管理员后台、医院管理后台（上传医院信息）</p><blockquote><h2 id="技术框架" tabindex="-1"><a class="header-anchor" href="#技术框架" aria-hidden="true">#</a> 技术框架</h2></blockquote><p>微服务：使用<code>Docker</code>作为微服务的部署，启动中间件</p><p>​ <code>Spring Cloud</code> 作为整体框架，</p><p>​ <code>nacos</code>注册中心</p><p>​ <code>feign</code>远程调用</p><p>​ <code>GateWay</code>网关</p><p>数据库：</p><p>​ <code>MongoDB</code>、<code>MySQL</code>作为数据库</p><p>中间件：</p><p>​ <code>Rabbitmq</code>消息队列、<code>redis</code></p><p>功能性类库：</p><p>​ <code>JWT</code>登录验证、<code>EasyExcell</code>数据库导入导出</p><blockquote><h2 id="业务流程" tabindex="-1"><a class="header-anchor" href="#业务流程" aria-hidden="true">#</a> 业务流程</h2></blockquote><p>医院通过医院管理后台上传医院的基本信息、预约规则信息、科室信息、排班信息。然后又管理平台进行审核，通过后预约挂号平台进行展示，用户就可以进行根据需求选择挂号，会调用医院挂号接口进行挂号，挂号成功之后，进行支付，取号，同时也可以取消预约，对应的预约状态也会进行实时更新。</p><blockquote><h2 id="项目亮点" tabindex="-1"><a class="header-anchor" href="#项目亮点" aria-hidden="true">#</a> 项目亮点</h2></blockquote><p>真实全面、贴合实际</p><p>什么是服务端渲染？</p><p>服务器先把数据请求好，并且拼接到恩安政的页面当中，再返回给客户端。</p><p>从何处请求数据呢？答：从后端，所以运行项目的时候，要先运行后端，否则会报错！</p><p>数据库是怎么划分的？</p><p>数据库分为MySQL和MongoDB，其中MySQL是关系型数据库，用来存储用户、订单、预约等关系型数据，MongoDB是一个介于关系数据库和非关系数据库之间的产品,是非关系数据库当中功能最丰富,最像关系数据库的,它支持的数据结构非常松散,是类似json的bson格式,因此可以存储比较复杂的数据类型。因为大多数数据操作在内存中进行，所以效率较高。本项目中用来存储一些医院本身的信息和一些不固定的信息，比较灵活!</p><p>后端亮点：</p><blockquote><h2 id="项目启动" tabindex="-1"><a class="header-anchor" href="#项目启动" aria-hidden="true">#</a> 项目启动</h2></blockquote><p>后端</p><p>启动服务：</p><p>nacos</p><blockquote><p>可以用来管理微服务，提供服务的注册与发现，作为配置中心管理动态配置</p></blockquote><blockquote><h2 id="简历部分" tabindex="-1"><a class="header-anchor" href="#简历部分" aria-hidden="true">#</a> 简历部分</h2></blockquote><p>前端：使用webpack来减小项目体积以及运行速度</p><h2 id="p64-redis" tabindex="-1"><a class="header-anchor" href="#p64-redis" aria-hidden="true">#</a> P64 redis</h2><p>redis连接不上，贴一篇文章，包含conf文件的配置与redis.cli客户端的运行命令</p>',37),o={href:"https://blog.csdn.net/magicproblem/article/details/113238030",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.runoob.com/redis/redis-install.html",target:"_blank",rel:"noopener noreferrer"},u=d(`<h2 id="p65-配置nginx" tabindex="-1"><a class="header-anchor" href="#p65-配置nginx" aria-hidden="true">#</a> P65 配置nginx</h2><h2 id="p66-mongodb" tabindex="-1"><a class="header-anchor" href="#p66-mongodb" aria-hidden="true">#</a> P66 <code>MongoDB</code></h2><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run -d --restart=always -p 27017:27017 --name mymongo -v /data/db:/data/db -d mongo
docker exec -it mongo bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-TXT line-numbers-mode" data-ext="TXT"><pre class="language-TXT"><code>1、 Help查看命令提示 
db.help();
2、 切换/创建数据库
use test
如果数据库不存在，则创建数据库，否则切换到指定数据库
3、 查询所有数据库 
show dbs;
4、 删除当前使用数据库 
db.dropDatabase();
5、 查看当前使用的数据库 
db.getName();
6、 显示当前db状态 
db.stats();
7、 当前db版本 
db.version();
8、 查看当前db的链接机器地址 
db.getMongo〇;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过下图实例，我们也可以更直观的的了解Mongo中的一些概念：</p><h2 id="p67-——-p72-springboot整合mongodb" tabindex="-1"><a class="header-anchor" href="#p67-——-p72-springboot整合mongodb" aria-hidden="true">#</a> P67 —— P72 SpringBoot整合MongoDB</h2><p>mongo Template CRUD实现方法：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>常用方法
mongoTemplate.findAll(User.class): 查询User文档的全部数据
mongoTemplate.findById(&lt;id&gt;, User.class): 查询User文档id为id的数据
mongoTemplate.find(query, User.class);: 根据query内的查询条件查询
mongoTemplate.upsert(query, update, User.class): 修改
mongoTemplate.remove(query, User.class): 删除
mongoTemplate.insert(User): 新增
Query对象
1、创建一个query对象（用来封装所有条件对象)，再创建一个criteria对象（用来构建条件）
2、 精准条件：criteria.and(“key”).is(“条件”)
模糊条件：criteria.and(“key”).regex(“条件”)
3、封装条件：query.addCriteria(criteria)
4、大于（创建新的criteria）：Criteria gt = Criteria.where(“key”).gt（“条件”）
小于（创建新的criteria）：Criteria lt = Criteria.where(“key”).lt（“条件”）
5、Query.addCriteria(new Criteria().andOperator(gt,lt));
6、一个query中只能有一个andOperator()。其参数也可以是Criteria数组。
7、排序 ：query.with（new Sort(Sort.Direction.ASC, &quot;age&quot;). and(new Sort(Sort.Direction.DESC, &quot;date&quot;)))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模糊查询方法：</p><blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//模糊查询
 @Test
 public void findUsersLikeName() {
     String name = &quot;est&quot;;
     String regex = String.format(&quot;%s%s%s&quot;, &quot;^.*&quot;, name, &quot;.*$&quot;);
     //regex正则表达式
     Pattern pattern = Pattern.compile(regex, Pattern.CASE_INSENSITIVE);
     Query query = new Query(Criteria.where(&quot;name&quot;).regex(pattern));
     List&lt;User&gt; userList = mongoTemplate.find(query, User.class);
     System.out.println(userList);
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>mongo repository CURD 实现方法：</p><p>总结一波，方法调用来说，整体差不多，都挺麻烦，但是不难看出，MongoTemplate更加灵活，MongoRepogistory简单一些。</p><h2 id="p73-数据接口-上传医院接口" tabindex="-1"><a class="header-anchor" href="#p73-数据接口-上传医院接口" aria-hidden="true">#</a> P73 数据接口-上传医院接口</h2><p>需求和准备——&gt;基础类创建——&gt;初步实现</p><p>涉及：json转换工具(JSONObject:map-&gt;字符串-&gt;对象）</p><h2 id="p79-mongodb模糊查询-带分页" tabindex="-1"><a class="header-anchor" href="#p79-mongodb模糊查询-带分页" aria-hidden="true">#</a> P79 mongodb模糊查询（带分页）</h2><blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Override
 public Page&lt;Department&gt; findPageDepartment(int page, int limit, DepartmentQueryVo departmentQueryVo) {
     //创建PageABLE对象，设置当前页与记录数
     Pageable pageable = PageRequest.of(page-1,limit);

     //将QueryVo对象转换成department对象
     Department department = new Department();
     BeanUtils.copyProperties(departmentQueryVo,department);
     //创建example对象,这是mongodb中模糊查询的规则
     ExampleMatcher matcher = ExampleMatcher.matching()
             .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING)
             .withIgnoreCase(true);
     Example&lt;Department&gt; example = Example.of(department,matcher);
     Page&lt;Department&gt; all = departmentRepository.findAll(example, pageable);
     return all;
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>踩坑记录：</strong></p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>访问mongo:
	环境：部署在虚拟机中的docker
	问题：navicat无法远程连接mongo——&gt;?
		解决：1、开启管理员root模式、重启docker：systemctl restart docker、进入mongo容器：docker exec -it /bin/bash、虚拟机配置文件bindIp设置为：0.0.0.0（可远程访问）
		
	问题：控制台空指针异常、前端显示数据异常——&gt;?
		解决：因为部署在虚拟机中，IP地址会改变，yygh_hosp中需要将配置文件更改为正确的IP。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>git许久未用，可能之前踩坑埋雷了，用以下方法得以解决：</p><h2 id="p80-后台系统-医院管理-需求和nacos启动" tabindex="-1"><a class="header-anchor" href="#p80-后台系统-医院管理-需求和nacos启动" aria-hidden="true">#</a> P80 后台系统-医院管理-需求和nacos启动</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>nacos访问地址：http://虚拟机IP:8848/nacos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>记录一下：nacos（注册中心）可以远程调用两个springBoot项目，为什么要远程调用，因为项目的开发微服务可能部署在不同的服务器之上，因此需要注册中心nacos来管理。</p><blockquote><p>重点记忆，需要和熟练！！！</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//mongodb的条件查询带分页

Controller:

//医院列表(条件查询带分页)
 //因为本方法是通过路径传递当前页值与记录数值，所以方法体中需要通过@PathVariable注解将值取到；
 //又因为本方法设计条件查询，条件已经被封装到Vo类中，所以方法体中需要传入Vo类。
 @PostMapping(&quot;list/{page}/{limit}&quot;)
 public Result listHosp(@PathVariable Integer page,
                        @PathVariable Integer limit,
                        HospitalQueryVo hospitalQueryVo) {
     Page&lt;Hospital&gt; pageModel = hospitalService.selectHospPage(page,limit,hospitalQueryVo);
     return Result.ok(pageModel);
 }

service：

//条件查询医院列表分页
 Page&lt;Hospital&gt; selectHospPage(Integer page, Integer limit, HospitalQueryVo hospitalQueryVo);

service实现类：

//医院列表（条件查询分页）  以下三个步骤是查询MOngoDB中的步骤
 @Override
 public Page&lt;Hospital&gt; selectHospPage(Integer page, Integer limit, HospitalQueryVo hospitalQueryVo) {
     //创建pageable对象
     Pageable pageable = PageRequest.of(page-1,limit);
     //创建条件查询匹配器
     ExampleMatcher matcher = ExampleMatcher.matching()
             .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING)
             .withIgnoreCase(true);
     //对象转换 Vo-&gt;hospital
     Hospital hospital = new Hospital();
     //通过bean工具类 直接进行对象转换 Vo-&gt;hospital
     BeanUtils.copyProperties(hospitalQueryVo,hospital);
     //创建example实例对象
     Example&lt;Hospital&gt; example = Example.of(hospital,matcher);
     //调用方法
     Page&lt;Hospital&gt; all = hospitalRepository.findAll(example, pageable);
     return all;
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="p88-医院列表-前端整合" tabindex="-1"><a class="header-anchor" href="#p88-医院列表-前端整合" aria-hidden="true">#</a> P88 医院列表，前端整合</h2><p><strong>踩大坑记录：</strong></p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>大坑！项目停滞！
	1、nacos、redis连接不上，拒绝连接的问题
    	解决方案：虚拟机本地redis-&gt;docker安装redis容器，并实现自启动、使用shell远程连接vm更加便捷！
    			若还是connect refused，就查看防火墙是否开放端口，若是使用的云服务器，则配置安全组开放端口。
    2、跨域问题：域名路径、域名端口、提交方式（get、post）都会造成跨域问题！
    	解决方案：idea中分页listHosp方法写成PostMapping，改成GetMapping即可!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>Linux相关命令：
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>firewalled相关命令：
	(1)允许TCP的443端口到internal区域
   		firewall-cmd --zone=internal --add-port=443/tcp
   		firewall-cmd --list-all --zone=internal
 
	(2)从internal区域将TCP的443端口移除
   		firewall-cmd --zone=internal --remove-port=443/tcp
 
	(3)允许UDP的2048-2050端口到默认区域
   		firewall-cmd --add-port=2048-2050/udp
   		firewall-cmd --list-all
   		
   		
启动systemctl start firewalld
关闭systemctl stop firewalld
查看状态systemctl status firewalld
查看状态firewall-cmd --state
开机启用systemctl enable firewalld
开机禁用systemctl disable firewalld
查看端口
   		firewall-cmd --zone=public --list-ports

添加端口
      firewall-cmd --add-port=443/tcp --permanent //永久添加443端口,协议为tcp 
重新加载
      firewall-cmd --reload //重新加载

删除端口
      firewall-cmd --zone=public --remove-port=80/tcp --permanent //删除tcp下的80端口

参数介绍：
firewall-cmd：是Linux提供的操作firewall的一个工具(注意没有字母“d”)；
--permanent：表示设置为持久；
--add-port：标识添加的端口
--remove-port:标识删除的端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下一步p89：实现更新医院上线状态功能。</p><h2 id="p89-p90医院的上线以及查看详细信息的功能" tabindex="-1"><a class="header-anchor" href="#p89-p90医院的上线以及查看详细信息的功能" aria-hidden="true">#</a> P89-P90医院的上线以及查看详细信息的功能</h2><p>过程：常规的Controller-&gt;Service-&gt;ServiceImpl</p><p>问题：隐藏路由跳转真实路由：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>this.$router.push({ path: &#39;/hospSet/list&#39; })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="p91排班管理" tabindex="-1"><a class="header-anchor" href="#p91排班管理" aria-hidden="true">#</a> P91排班管理</h2><p>这块代码逻辑比较复杂，可以借此锻炼自己的需求分析+逻辑实现。</p><blockquote><p>赶进度，代码逻辑已经实现，从本初开始cv代码！！！P92</p><div class="language-TXT line-numbers-mode" data-ext="TXT"><pre class="language-TXT"><code>以下代码必须整理明白，搞清楚其中的逻辑，需求如何实现！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//根据医院编号，查询医院所有科室列表P92
    @Override
    public List&lt;DepartmentVo&gt; findDeptTree(String hoscode) {
        //创建list集合，用于最终数据封装
        List&lt;DepartmentVo&gt; result = new ArrayList&lt;&gt;();

        //根据医院编号，查询医院所有科室信息
        Department departmentQuery = new Department();
        departmentQuery.setHoscode(hoscode);
        Example example = Example.of(departmentQuery);

        List&lt;Department&gt; departmentList = departmentRepository.findAll(example);
        /**
         * 从本处开始cv
         * P92
         */
        //根据大科室编号  bigcode 分组，获取每个大科室里面下级子科室
        Map&lt;String, List&lt;Department&gt;&gt; deparmentMap =
                departmentList.stream().collect(Collectors.groupingBy(Department::getBigcode));
        //遍历map集合 deparmentMap
        for(Map.Entry&lt;String,List&lt;Department&gt;&gt; entry : deparmentMap.entrySet()) {
            //大科室编号
            String bigcode = entry.getKey();
            //大科室编号对应的全局数据
            List&lt;Department&gt; deparment1List = entry.getValue();
            //封装大科室
            DepartmentVo departmentVo1 = new DepartmentVo();
            departmentVo1.setDepcode(bigcode);
            departmentVo1.setDepname(deparment1List.get(0).getBigname());

            //封装小科室
            List&lt;DepartmentVo&gt; children = new ArrayList&lt;&gt;();
            for(Department department: deparment1List) {
                DepartmentVo departmentVo2 =  new DepartmentVo();
                departmentVo2.setDepcode(department.getDepcode());
                departmentVo2.setDepname(department.getDepname());
                //封装到list集合
                children.add(departmentVo2);
            }
            //把小科室list集合放到大科室children里面
            departmentVo1.setChildren(children);
            //放到最终result里面
            result.add(departmentVo1);
        }
        //返回
        return result;

    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="p93显示科室的前端整合" tabindex="-1"><a class="header-anchor" href="#p93显示科室的前端整合" aria-hidden="true">#</a> P93显示科室的前端整合</h2><p>一些基础的前端隐藏路由-》界面elemenUI+信息显示</p><p>完成科室信息树形结构显示</p><h2 id="p94" tabindex="-1"><a class="header-anchor" href="#p94" aria-hidden="true">#</a> P94</h2><p>接下来完成每个科室的树形结构排版信息显示。</p><p>涉及到信息的统计、分析与聚合（分组之后的数据）</p><h2 id="p95科室排班的分页信息显示" tabindex="-1"><a class="header-anchor" href="#p95科室排班的分页信息显示" aria-hidden="true">#</a> P95科室排班的分页信息显示</h2><p>注意此处的代码逻辑书写，自己找时间练习</p><h2 id="p98" tabindex="-1"><a class="header-anchor" href="#p98" aria-hidden="true">#</a> P98</h2><p>遇到了排班详细信息不显示的问题，暂未解决！</p>`,48);function p(b,g){const i=t("ExternalLinkIcon");return s(),r("div",null,[v,e("p",null,[e("a",o,[n("redis虚拟机与本地连接"),a(i)])]),e("p",null,[e("a",m,[n("虚拟机运行redis"),a(i)])]),u])}const x=l(c,[["render",p],["__file","shangyitong.html.vue"]]);export{x as default};
