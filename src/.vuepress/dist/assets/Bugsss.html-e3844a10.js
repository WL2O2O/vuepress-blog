import{_ as e,X as i,Y as n,Z as a}from"./framework-b0c8e9b4.js";const l={},d=a(`<h1 id="bug记录" tabindex="-1"><a class="header-anchor" href="#bug记录" aria-hidden="true">#</a> Bug记录</h1><h2 id="git篇" tabindex="-1"><a class="header-anchor" href="#git篇" aria-hidden="true">#</a> Git篇</h2><ol><li><code>git pull gitee</code>出现问题</li></ol><blockquote><p>You asked to pull from the remote &#39;gitee&#39;, but did not specify a branch. Because this is not the default configured remote for your current branch, you must specify a branch on the command line.</p></blockquote><p><strong>解决办法：</strong></p><p>首先，主要是命令使用不规范导致，应该是<code>gitee pull gitee(远程仓库别名) + master（分支名） </code></p><p>其次，针对以上错误，也可以编辑工作目录下的<code>.git/config文件</code>文件内容，增加如下代码：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>[branch &quot;master&quot;]
  remote = origin
  merge = refs/heads/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目篇" tabindex="-1"><a class="header-anchor" href="#项目篇" aria-hidden="true">#</a> 项目篇</h2><ul><li><h3 id="api项目" tabindex="-1"><a class="header-anchor" href="#api项目" aria-hidden="true">#</a> API项目</h3></li></ul><ol><li>粗心大意导致的错误（前后对比）</li></ol><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;CreateModal
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,13),s=[d];function t(r,c){return i(),n("div",null,s)}const o=e(l,[["render",t],["__file","Bugsss.html.vue"]]);export{o as default};
