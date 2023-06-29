import{_ as i,X as e,Y as t,Z as u}from"./framework-8bd09bfb.js";const n={},l=u(`<h1 id="聚合搜索项目" tabindex="-1"><a class="header-anchor" href="#聚合搜索项目" aria-hidden="true">#</a> 聚合搜索项目</h1><h2 id="项目介绍" tabindex="-1"><a class="header-anchor" href="#项目介绍" aria-hidden="true">#</a> 项目介绍</h2><blockquote><p>聚合搜索就是输入一个关键字，对于用户可以使用户在同一个入口搜索到不同的内容分类，不同形式的内容，提升用户的检索效率；对于企业来说无需对每一个项目进行搜索功能的开发，当有新的内容或者新的网站，可以进行复用，提高开发效率。</p></blockquote><h2 id="技术栈" tabindex="-1"><a class="header-anchor" href="#技术栈" aria-hidden="true">#</a> 技术栈</h2><p>前端：</p><ul><li>Vue</li><li>Ant Design Vue</li><li>Lodash</li></ul><p>后端：</p><ul><li>Spring Boot</li><li>MySQL</li><li>ES</li><li>数据抓取</li><li>数据同步（Logstash、Canal）</li><li>Guava Retrying</li><li>怎么保证API的稳定性？</li></ul><h2 id="业务流程" tabindex="-1"><a class="header-anchor" href="#业务流程" aria-hidden="true">#</a> 业务流程</h2><ol><li>先得到不同分类的数据</li><li>提供一个搜索页面</li><li>业务优化（关键词高亮、防抖节流）</li></ol><blockquote><p><code>package.json</code></p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;yuso-frontend&quot;,
  &quot;version&quot;: &quot;0.1.0&quot;,
  &quot;private&quot;: true,
  &quot;scripts&quot;: {
    &quot;serve&quot;: &quot;vue-cli-service serve&quot;,
    &quot;build&quot;: &quot;vue-cli-service build&quot;,
    &quot;lint&quot;: &quot;vue-cli-service lint&quot;
  },
  &quot;dependencies&quot;: {
  	// &quot;^4.0.0-rc.5&quot;这个版本不行：Can&#39;t resolve &#39;ant-design-vue/dist/antd.css&#39; 
    &quot;ant-design-vue&quot;: &quot;^3.3.0-beta.4&quot;,
    &quot;axios&quot;: &quot;^1.3.4&quot;,
    &quot;core-js&quot;: &quot;^3.8.3&quot;,
    &quot;vue&quot;: &quot;^3.2.13&quot;,
    &quot;vue-router&quot;: &quot;^4.0.3&quot;
  },
  &quot;devDependencies&quot;: {
    &quot;@typescript-eslint/eslint-plugin&quot;: &quot;^5.4.0&quot;,
    &quot;@typescript-eslint/parser&quot;: &quot;^5.4.0&quot;,
    &quot;@vue/cli-plugin-babel&quot;: &quot;~5.0.0&quot;,
    &quot;@vue/cli-plugin-eslint&quot;: &quot;~5.0.0&quot;,
    &quot;@vue/cli-plugin-router&quot;: &quot;~5.0.0&quot;,
    &quot;@vue/cli-plugin-typescript&quot;: &quot;~5.0.0&quot;,
    &quot;@vue/cli-service&quot;: &quot;~5.0.0&quot;,
    &quot;@vue/eslint-config-typescript&quot;: &quot;^9.1.0&quot;,
    &quot;eslint&quot;: &quot;^7.32.0&quot;,
    &quot;eslint-config-prettier&quot;: &quot;^8.3.0&quot;,
    &quot;eslint-plugin-prettier&quot;: &quot;^4.0.0&quot;,
    &quot;eslint-plugin-vue&quot;: &quot;^8.0.3&quot;,
    &quot;prettier&quot;: &quot;^2.4.1&quot;,
    &quot;typescript&quot;: &quot;~4.5.5&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开发计划" tabindex="-1"><a class="header-anchor" href="#开发计划" aria-hidden="true">#</a> 开发计划</h2><ul><li>前端初始化</li><li>后端初始化</li><li>前端搜索页面开发</li><li>整合<code>Axios</code></li><li>后端搜索接口开发</li></ul><h3 id="前端开发" tabindex="-1"><a class="header-anchor" href="#前端开发" aria-hidden="true">#</a> 前端开发</h3><p>用URL来记录用户的搜索状态，以便于进行分享。也就是将URL状态与页面状态同步</p><p>核心小技巧：把同步状态改成单向的，即只允许URL改变页面状态，不允许反向修改</p><p><strong>步骤分析：</strong></p><ol><li>用户进行页面搜索的时候，URL地址跟着同步改变；</li><li>当URL变动时，页面状态也随之改变（监听URL的变动）</li></ol>`,19),o=[l];function s(d,a){return e(),t("div",null,o)}const q=i(n,[["render",s],["__file","aggregateSearch.html.vue"]]);export{q as default};
