const n=JSON.parse('{"key":"v-95bfbf7e","path":"/cainiao/abstractandinterface.html","title":"抽象类与接口","lang":"zh-CN","frontmatter":{"title":"抽象类与接口","shortTitle":"抽象类与接口","category":["菜鸟日记"],"tag":["Java基础"],"description":"说一说抽象类与接口","head":[["meta",{"name":"keywords","content":"Java,Java SE,Java基础,Java教程,Java程序员进阶之路,Java入门,教程,java数组,数组,复盘Java基础知识,Java随笔,Java抽象类,Java接口,抽象类与接口的区别"}],["meta",{"property":"og:url","content":"https://wlei224.gitee.io/cainiao/abstractandinterface.html"}],["meta",{"property":"og:site_name","content":"CS_GUIDER"}],["meta",{"property":"og:title","content":"抽象类与接口"}],["meta",{"property":"og:description","content":"说一说抽象类与接口"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-14T08:54:23.000Z"}],["meta",{"property":"article:author","content":"WLei224"}],["meta",{"property":"article:tag","content":"Java基础"}],["meta",{"property":"article:modified_time","content":"2023-05-14T08:54:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"抽象类与接口\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-14T08:54:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"WLei224\\",\\"url\\":\\"/aboutguider/\\"}]}"]]},"headers":[{"level":2,"title":"抽象类(abstract class)和接口(interface)有什么区别？","slug":"抽象类-abstract-class-和接口-interface-有什么区别","link":"#抽象类-abstract-class-和接口-interface-有什么区别","children":[{"level":3,"title":"代码示例：","slug":"代码示例","link":"#代码示例","children":[]},{"level":3,"title":"区别：","slug":"区别","link":"#区别","children":[]}]}],"git":{"createdTime":1684054463000,"updatedTime":1684054463000,"contributors":[{"name":"WLei224","email":"1149630057@qq.com","commits":1}]},"readingTime":{"minutes":1.52,"words":455},"filePathRelative":"cainiao/abstractandinterface.md","localizedDate":"2023年5月14日","excerpt":"<h2> 抽象类(abstract class)和接口(interface)有什么区别？</h2>\\n<h3> 代码示例：</h3>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">// 抽象类</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">abstract</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Animal</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 非抽象方法</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">eat</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Animal is eating.\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token comment\\">// 抽象方法</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">abstract</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">makeSound</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 实现抽象类的子类</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Dog</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">Animal</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 实现抽象方法</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">makeSound</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Dog is barking.\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 接口</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">Shape</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 接口中的常量</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">final</span> <span class=\\"token keyword\\">double</span> <span class=\\"token constant\\">PI</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">3.14</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token comment\\">// 抽象方法</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">double</span> <span class=\\"token function\\">getArea</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token comment\\">// 抽象方法</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">double</span> <span class=\\"token function\\">getPerimeter</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 实现接口的类</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Circle</span> <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\">Shape</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">double</span> radius<span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">Circle</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">double</span> radius<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>radius <span class=\\"token operator\\">=</span> radius<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token comment\\">// 实现接口的抽象方法</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">double</span> <span class=\\"token function\\">getArea</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token constant\\">PI</span> <span class=\\"token operator\\">*</span> radius <span class=\\"token operator\\">*</span> radius<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token comment\\">// 实现接口的抽象方法</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">double</span> <span class=\\"token function\\">getPerimeter</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token number\\">2</span> <span class=\\"token operator\\">*</span> <span class=\\"token constant\\">PI</span> <span class=\\"token operator\\">*</span> radius<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
