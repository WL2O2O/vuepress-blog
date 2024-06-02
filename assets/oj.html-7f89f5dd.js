const t=JSON.parse('{"key":"v-6e9c2f30","path":"/collection/project/oj.html","title":"在线判题系统","lang":"zh-CN","frontmatter":{"title":"在线判题系统","shortTitle":"OJ","category":["实践练习"],"tag":["实践练习"],"description":"鱼皮知识星球","head":[["meta",{"name":"keywords","content":"imooc,实战课程,Vue3, Spring Boot项目,Spring Boot项目推荐, 在线判题系统项目"}],["meta",{"property":"og:url","content":"https://wlei224.gitee.io/collection/project/oj.html"}],["meta",{"property":"og:site_name","content":"CS_GUIDER"}],["meta",{"property":"og:title","content":"在线判题系统"}],["meta",{"property":"og:description","content":"鱼皮知识星球"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-02T17:44:02.000Z"}],["meta",{"property":"article:author","content":"WLei224"}],["meta",{"property":"article:tag","content":"实践练习"}],["meta",{"property":"article:modified_time","content":"2024-06-02T17:44:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在线判题系统\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-02T17:44:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"WLei224\\",\\"url\\":\\"/aboutguider/\\"}]}"]]},"headers":[{"level":2,"title":"项目介绍","slug":"项目介绍","link":"#项目介绍","children":[]},{"level":2,"title":"项目开发流程","slug":"项目开发流程","link":"#项目开发流程","children":[]}],"git":{"createdTime":1717350242000,"updatedTime":1717350242000,"contributors":[{"name":"WLei224","email":"1149630057@qq.com","commits":1}]},"readingTime":{"minutes":2,"words":599},"filePathRelative":"collection/project/oj.md","localizedDate":"2024年6月2日","excerpt":"<h1> Smart OJ</h1>\\n<h2> 项目介绍</h2>\\n<p>OJ ： Online Judge（在线判题评测系统）</p>\\n<p>用户可以选择题目练习，在线编写代码，测试代码，提交代码，系统会根据设置好的答案对用户提交的代码进行评测，给出评测结果！</p>\\n<p><strong>难点</strong>:判题系统</p>\\n<blockquote>\\n<p>OJ 系统的常用概念\\nac 表示你的题目通过，结果正确\\n题目限制：时间限制、内存限制\\n题目介绍\\n题目输入\\n题目输出\\n题目输入用例\\n题目输出用例</p>\\n<p>普通测评：管理员设置题目的输入和输出用例，比如我输入 1，你要输出 2 才是正确的；交给判题机去执行用户的代码，给用户的代码喂输入用例，比如 1，看用户程序的执行结果是否和标准答案的输出一致。\\n（比对用例文件）</p>\\n<p>特殊测评（SPJ）：管理员设置题目的输入和输出，比如我输入 1，用户的答案只要是 &gt; 0 或 &lt; 2 都是正确的；特判程序，不是通过对比用例文件是否一致这种死板的程序来检验，而是要专门根据这道题目写一个特殊的判断程序，程序接收题目的输入（1）、标准输出用例（2）、用户的结果（1.5） ，特判程序根据这些值来比较是否正确。</p>\\n<p>交互测评：让用户输入一个例子，就给一个输出结果，交互比较灵活，没办法通过简单的、死板的输入输出文件来搞定</p>\\n<p>不能让用户随便引入包、随便遍历、暴力破解，需要使用正确的算法。 =&gt; 安全性</p>\\n<p>判题过程是异步的 =&gt; 异步化</p>\\n<p>提交之后，会生成一个提交记录，有运行的结果以及运行信息（时间限制、内存限制）</p>\\n</blockquote>"}');export{t as data};