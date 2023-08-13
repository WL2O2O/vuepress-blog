import{_ as p,X as e,Y as a,Z as i}from"./framework-b0c8e9b4.js";const t={},l=i('<h1 id="smart-oj" tabindex="-1"><a class="header-anchor" href="#smart-oj" aria-hidden="true">#</a> Smart OJ</h1><h2 id="项目介绍" tabindex="-1"><a class="header-anchor" href="#项目介绍" aria-hidden="true">#</a> 项目介绍</h2><p>OJ ： Online Judge（在线判题评测系统）</p><p>用户可以选择题目练习，在线编写代码，测试代码，提交代码，系统会根据设置好的答案对用户提交的代码进行评测，给出评测结果！</p><p><strong>难点</strong>:判题系统</p><blockquote><p>OJ 系统的常用概念 ac 表示你的题目通过，结果正确 题目限制：时间限制、内存限制 题目介绍 题目输入 题目输出 题目输入用例 题目输出用例</p><p>普通测评：管理员设置题目的输入和输出用例，比如我输入 1，你要输出 2 才是正确的；交给判题机去执行用户的代码，给用户的代码喂输入用例，比如 1，看用户程序的执行结果是否和标准答案的输出一致。 （比对用例文件）</p><p>特殊测评（SPJ）：管理员设置题目的输入和输出，比如我输入 1，用户的答案只要是 &gt; 0 或 &lt; 2 都是正确的；特判程序，不是通过对比用例文件是否一致这种死板的程序来检验，而是要专门根据这道题目写一个特殊的判断程序，程序接收题目的输入（1）、标准输出用例（2）、用户的结果（1.5） ，特判程序根据这些值来比较是否正确。</p><p>交互测评：让用户输入一个例子，就给一个输出结果，交互比较灵活，没办法通过简单的、死板的输入输出文件来搞定</p><p>不能让用户随便引入包、随便遍历、暴力破解，需要使用正确的算法。 =&gt; 安全性</p><p>判题过程是异步的 =&gt; 异步化</p><p>提交之后，会生成一个提交记录，有运行的结果以及运行信息（时间限制、内存限制）</p></blockquote><h2 id="项目开发流程" tabindex="-1"><a class="header-anchor" href="#项目开发流程" aria-hidden="true">#</a> 项目开发流程</h2><ol><li><p>项目简介、项目调研、项目需求分析</p></li><li><p>核心业务流程</p></li><li><p>项目功能模块</p></li><li><p>技术选型</p></li><li><p>项目初始化</p></li><li><p>项目开发</p></li><li><p>测试</p></li><li><p>优化</p><p>（代码提交、代码审核、产品验收）</p></li><li><p>上线</p></li></ol>',8),r=[l];function o(n,c){return e(),a("div",null,r)}const d=p(t,[["render",o],["__file","oj.html.vue"]]);export{d as default};
