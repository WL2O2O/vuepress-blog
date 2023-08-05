import{_ as e,X as n,Y as i,Z as t}from"./framework-b0c8e9b4.js";const l={},d=t(`<h1 id="bug记录" tabindex="-1"><a class="header-anchor" href="#bug记录" aria-hidden="true">#</a> Bug记录</h1><h2 id="git篇" tabindex="-1"><a class="header-anchor" href="#git篇" aria-hidden="true">#</a> Git篇</h2><ol><li><code>git pull gitee</code>出现问题</li></ol><blockquote><p>You asked to pull from the remote &#39;gitee&#39;, but did not specify a branch. Because this is not the default configured remote for your current branch, you must specify a branch on the command line.</p></blockquote><p><strong>解决办法：</strong></p><p>首先，主要是命令使用不规范导致，应该是<code>gitee pull gitee(远程仓库别名) + master（分支名） </code></p><p>其次，针对以上错误，也可以编辑工作目录下的<code>.git/config文件</code>文件内容，增加如下代码：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>[branch &quot;master&quot;]
  remote = origin
  merge = refs/heads/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>github图床上传的图片显示失败</li></ol><p><strong>解决办法：</strong></p><p><code>TODO:</code></p><h2 id="项目篇" tabindex="-1"><a class="header-anchor" href="#项目篇" aria-hidden="true">#</a> 项目篇</h2><ul><li><h3 id="api项目" tabindex="-1"><a class="header-anchor" href="#api项目" aria-hidden="true">#</a> API项目</h3></li></ul><ol><li>粗心大意导致的错误（前后对比）</li></ol><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;CreateModal
     columns={columns}
     onCancel={() =&gt; {
       // 注意这里
       handleUpdateModalOpen(false);
     }}
     onSubmit={(values) =&gt; {
       handleAdd(values);
     }}
     visible={createModalOpen}
/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;CreateModal
  columns={columns}
  onCancel={() =&gt; {
    handleModalOpen(false);
  }}
  onSubmit={(values) =&gt; {
    handleAdd(values);
  }}
  visible={createModalOpen} 
/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><ol start="2"><li><p>终于又碰到了一个bugssss！！！头疼得很！--controller类更改运行不生效</p><p>发生在Spring Boot API项目的模拟接口项目：更改controller类后，发现重新运行之后页面没有改变，更改无效，此时需要对maven重新打jar包，更改才会生效，ChatGPT说是因为热部署的问题。</p><p>bug缘由：早在我把模拟接口项目整个粘贴到后端项目中时就已经存在bug了，之前没有发现，尝试把这个项目单独拎出来的话没问题。</p><p><strong>解决方法：</strong></p><ul><li>我先试试是不是maven的module没有配置好（因为是直接把模拟接口项目直接粘贴到后端项目中了）</li><li>后续整合网管业务的时候，遇到了项目包名不一致的问题，然后在包名重命名中出现了n个问题，最后迫不得已将项目重构了，然后在项目中直接创建module是没有问题的，因此证实了上述猜想中的module没有配置好！</li></ul></li><li><p>当Springboot项目中引入了Mabatis，但是没有进行配置，会导致项目运行的时候报错：找不到配置，如图：</p><figure><img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202308032056940.png" alt="image-20230803205650059" tabindex="0" loading="lazy"><figcaption>image-20230803205650059</figcaption></figure><ul><li><p><strong>解决方法</strong>:在启动类上添加一个排除数据库配置的注解：</p><blockquote></blockquote></li></ul></li></ol><h2 id="工具篇" tabindex="-1"><a class="header-anchor" href="#工具篇" aria-hidden="true">#</a> 工具篇</h2><h3 id="pnpm" tabindex="-1"><a class="header-anchor" href="#pnpm" aria-hidden="true">#</a> pnpm</h3><h3 id="hutool" tabindex="-1"><a class="header-anchor" href="#hutool" aria-hidden="true">#</a> HuTool</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cn.hutool.core.io.IORuntimeException: ConnectException: Connection refused: connect

	at cn.hutool.http.HttpRequest.send<span class="token punctuation">(</span>HttpRequest.java:1328<span class="token punctuation">)</span>
	at cn.hutool.http.HttpRequest.doExecute<span class="token punctuation">(</span>HttpRequest.java:1176<span class="token punctuation">)</span>
	cn.hutool.http.HttpRequest.send<span class="token punctuation">(</span>HttpRequest.java:1323<span class="token punctuation">)</span>
	<span class="token punctuation">..</span>. <span class="token number">73</span> <span class="token function">more</span>

Disconnected from the target VM, address: <span class="token string">&#39;127.0.0.1:6928&#39;</span>, transport: <span class="token string">&#39;socket&#39;</span>

Process finished with <span class="token builtin class-name">exit</span> code <span class="token parameter variable">-1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解决方法：</strong></p><p>​ 待补充！！！</p><h3 id="nacos" tabindex="-1"><a class="header-anchor" href="#nacos" aria-hidden="true">#</a> Nacos</h3><h4 id="找不到相关service服务" tabindex="-1"><a class="header-anchor" href="#找不到相关service服务" aria-hidden="true">#</a> 找不到相关Service服务</h4><ul><li>消费者与提供者项目包名不一致导致找不到service服务</li></ul><blockquote><p>遇到一个<code>nocos</code>小BUG：</p><p>Dubbo整合nocos的时候，提供者与消费者的包名不一样，这时，提供者将接口的信息注册到nacos文档时，用到的是provider的包名路径，如果出现消费者的包名路径与提供者的包名不同的时候，这时消费者就会报错找不到提供者的Service服务，如图：</p><figure><img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202307311932647.png" alt="image-20230731193204173" tabindex="0" loading="lazy"><figcaption>image-20230731193204173</figcaption></figure></blockquote><h4 id="端口被占用" tabindex="-1"><a class="header-anchor" href="#端口被占用" aria-hidden="true">#</a> 端口被占用</h4><blockquote><p>netstat -ano | findstr 8848</p><p>taskkill /pid 1244 /f</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202308040415943.png" alt="解除端口占用的命令" tabindex="0" loading="lazy"><figcaption>解除端口占用的命令</figcaption></figure><ul><li><code>maven</code></li></ul><blockquote><p>问题1：</p></blockquote><p>​ Spring Boot项目涉及到多个模块时，应该怎么办？</p><p>​ 方案一：</p><p>​ 类似于maven项目的多模块编译</p><p>​ 方案二：</p><p>​ 将pom文件设置为maven项目</p><p>​ <img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202308010328505.png" alt="将pom文件设置为maven项目" style="zoom:33%;"></p><blockquote><p>问题2：</p></blockquote><p>​ 自己开发<code>SDK</code>时，pom文件中忘记去掉<code>&lt;build&gt;&lt;/build&gt;</code>标签时，当使用maven执行install命令时，maven会报错：没有可执行的main。</p><p>​ 如图：</p><p>​ <img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202308020023072.png" alt="image-20230802002346028" loading="lazy"></p><blockquote><p>问题3：</p></blockquote><p>​ 想用maven的多模块编译，父模块用<code>&lt;models&gt;</code>子模块用<code>&lt;parent&gt;</code>，用下面的依赖配置，是没问题的，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;parent&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
        &lt;version&gt;2.7.7&lt;/version&gt;
        &lt;relativePath/&gt; &lt;!-- lookup parent from repository --&gt;
    &lt;/parent&gt;

    &lt;groupId&gt;com.csguider&lt;/groupId&gt;
    &lt;artifactId&gt;smartapi-gateway&lt;/artifactId&gt;
    &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;

    &lt;name&gt;smartapi-gateway&lt;/name&gt;
    &lt;description&gt;Demo project for Spring Boot&lt;/description&gt;

    &lt;properties&gt;
        &lt;java.version&gt;1.8&lt;/java.version&gt;
        &lt;spring-cloud.version&gt;2021.0.5&lt;/spring-cloud.version&gt;
    &lt;/properties&gt;

    &lt;dependencies&gt;
        &lt;!-- https://mvnrepository.com/artifact/org.apache.dubbo/dubbo --&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.apache.dubbo&lt;/groupId&gt;
            &lt;artifactId&gt;dubbo&lt;/artifactId&gt;
            &lt;version&gt;3.0.9&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.alibaba.nacos&lt;/groupId&gt;
            &lt;artifactId&gt;nacos-client&lt;/artifactId&gt;
            &lt;version&gt;2.1.0&lt;/version&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
            &lt;artifactId&gt;spring-cloud-starter-gateway&lt;/artifactId&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-devtools&lt;/artifactId&gt;
            &lt;scope&gt;runtime&lt;/scope&gt;
            &lt;optional&gt;true&lt;/optional&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
            &lt;artifactId&gt;lombok&lt;/artifactId&gt;
            &lt;optional&gt;true&lt;/optional&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
            &lt;scope&gt;test&lt;/scope&gt;
        &lt;/dependency&gt;
        &lt;!--这个依赖引入先打个注释，是通过快捷键自动引入的。&lt;scope&gt;这个标签先打个标签,表示作用域--&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.csguider&lt;/groupId&gt;
            &lt;artifactId&gt;smartapi-client-sdk&lt;/artifactId&gt;
            &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
    &lt;dependencyManagement&gt;
        &lt;dependencies&gt;
            &lt;dependency&gt;
                &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
                &lt;artifactId&gt;spring-cloud-dependencies&lt;/artifactId&gt;
                &lt;version&gt;\${spring-cloud.version}&lt;/version&gt;
                &lt;type&gt;pom&lt;/type&gt;
                &lt;scope&gt;import&lt;/scope&gt;
            &lt;/dependency&gt;
        &lt;/dependencies&gt;
    &lt;/dependencyManagement&gt;

    &lt;build&gt;
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
                &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
                &lt;configuration&gt;
                    &lt;excludes&gt;
                        &lt;exclude&gt;
                            &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
                            &lt;artifactId&gt;lombok&lt;/artifactId&gt;
                        &lt;/exclude&gt;
                    &lt;/excludes&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;

&lt;/project&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我把parent换成父类时，会报错：</p><figure><img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202308020207946.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>解决方法：</li></ul><blockquote><ul><li>set spring.main.web-application-type=reactive</li></ul><p><code>spring.main.web-application-type=reactive</code> 是针对 Spring Boot 2.x版本引入的一个配置属性，用于指定应用程序的类型。它有两个可能的值：<code>servlet</code>（默认值）和<code>reactive</code>。</p><p>当将 <code>spring.main.web-application-type</code> 设置为 <code>reactive</code> 时，您的应用程序将使用反应式编程模型。这意味着您的应用程序将使用 WebFlux 框架，而不是传统的 Servlet 框架。</p><p>使用反应式编程模型可以提供更好的性能和可扩展性，因为它使用了非阻塞的 I/O 和事件驱动的编程模型。这种模型特别适用于高并发和异步处理场景。</p><p>要使用反应式编程模型，您需要相应地更新您的应用程序代码，以便使用 WebFlux 相关的的基础设施和 API。例如，您需要使用 <code>@Controller</code> 替换 <code>@ControllerAdvice</code>，并使用 <code>ServerWebExchange</code> 对象访问 HTTP 请求和响应。</p><p>总之，将 <code>spring.main.web-application-type</code> 设置为 <code>reactive</code> 将使您的应用程序使用 WebFlux 框架，以获得更好的性能和可扩展性。但请注意，您需要对应用程序代码进行相应的更改，以适应反应式编程模型。</p><p>要设置 <code>spring.main.web-application-type</code> 为 <code>reactive</code>，您需要在应用的配置文件 <code>application.yml</code> 或 <code>application.properties</code> 中添加以下配置1：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring:
	main:
    	web-application-type: reactive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，您告诉 Spring Boot 应用程序使用响应式的 Web 应用类型。同时，请注意，您需要相应地更新您的应用程序代码，以使用 WebFlux 相关的基础设施和 API，例如使用 <code>@Controller</code> 替换 <code>@ControllerAdvice</code>，并使用 <code>ServerWebExchange</code> 对象访问 HTTP 请求和响应1。</p></blockquote>`,49),a=[d];function s(r,o){return n(),i("div",null,a)}const v=e(l,[["render",s],["__file","Bugsss.html.vue"]]);export{v as default};
