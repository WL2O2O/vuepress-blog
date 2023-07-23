import{_ as e,X as n,Y as a,Z as s}from"./framework-8bd09bfb.js";const i={},l=s(`<h1 id="bug记录" tabindex="-1"><a class="header-anchor" href="#bug记录" aria-hidden="true">#</a> Bug记录</h1><h2 id="git篇" tabindex="-1"><a class="header-anchor" href="#git篇" aria-hidden="true">#</a> Git篇</h2><ol><li><code>git pull gitee</code>出现问题</li></ol><blockquote><p>You asked to pull from the remote &#39;gitee&#39;, but did not specify a branch. Because this is not the default configured remote for your current branch, you must specify a branch on the command line.</p></blockquote><p><strong>解决办法：</strong></p><p>首先，主要是命令使用不规范导致，应该是<code>gitee pull gitee(远程仓库别名) + master（分支名） </code></p><p>其次，针对以上错误，也可以编辑工作目录下的<code>.git/config文件</code>文件内容，增加如下代码：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>[branch &quot;master&quot;]
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="工具篇" tabindex="-1"><a class="header-anchor" href="#工具篇" aria-hidden="true">#</a> 工具篇</h2><ul><li><h3 id="pnpm" tabindex="-1"><a class="header-anchor" href="#pnpm" aria-hidden="true">#</a> <code>pnpm</code></h3></li><li><h3 id="hutool" tabindex="-1"><a class="header-anchor" href="#hutool" aria-hidden="true">#</a> <code>HuTool</code></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cn.hutool.core.io.IORuntimeException: ConnectException: Connection refused: connect

	at cn.hutool.http.HttpRequest.send<span class="token punctuation">(</span>HttpRequest.java:1328<span class="token punctuation">)</span>
	at cn.hutool.http.HttpRequest.doExecute<span class="token punctuation">(</span>HttpRequest.java:1176<span class="token punctuation">)</span>
	cn.hutool.http.HttpRequest.send<span class="token punctuation">(</span>HttpRequest.java:1323<span class="token punctuation">)</span>
	<span class="token punctuation">..</span>. <span class="token number">73</span> <span class="token function">more</span>

Disconnected from the target VM, address: <span class="token string">&#39;127.0.0.1:6928&#39;</span>, transport: <span class="token string">&#39;socket&#39;</span>

Process finished with <span class="token builtin class-name">exit</span> code <span class="token parameter variable">-1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解决方法：</strong></p>`,20),t=[l];function d(c,o){return n(),a("div",null,t)}const u=e(i,[["render",d],["__file","Bugsss.html.vue"]]);export{u as default};
