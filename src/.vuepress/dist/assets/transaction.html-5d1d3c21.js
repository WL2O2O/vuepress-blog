const t=JSON.parse('{"key":"v-582f0022","path":"/cainiao/transaction.html","title":"MySQL事务","lang":"zh-CN","frontmatter":{"title":"MySQL事务","shortTitle":"什么是事务","category":["菜鸟日记"],"tag":["MySQL"],"description":"课上实践项目","head":[["meta",{"name":"keywords","content":"Java,Java SE,Java基础,Java教程,Java程序员进阶之路,Java入门,教程,MySQL,数据库,复盘Java基础知识,Java随笔"}],["meta",{"property":"og:url","content":"https://wlei224.gitee.io/cainiao/transaction.html"}],["meta",{"property":"og:site_name","content":"CS_GUIDER"}],["meta",{"property":"og:title","content":"MySQL事务"}],["meta",{"property":"og:description","content":"课上实践项目"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-05T11:40:59.000Z"}],["meta",{"property":"article:author","content":"WLei224"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:modified_time","content":"2023-06-05T11:40:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL事务\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-05T11:40:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"WLei224\\",\\"url\\":\\"/aboutguider/\\"}]}"]]},"headers":[{"level":2,"title":"事务","slug":"事务","link":"#事务","children":[]}],"git":{"createdTime":1685965259000,"updatedTime":1685965259000,"contributors":[{"name":"WLei224","email":"1149630057@qq.com","commits":1}]},"readingTime":{"minutes":16.04,"words":4813},"filePathRelative":"cainiao/transaction.md","localizedDate":"2023年6月5日","excerpt":"<h2> 事务</h2>\\n<blockquote>\\n<h4> 一、什么是事务</h4>\\n</blockquote>\\n<p>1.事务定义\\n事务:事务是一个最小的不可在分的工作单元;通常一个事务对应一个完整的业务(例如银行账户转账业务，该业务是一个最小的T元)\\n一个完整的业务需要批量的DML(inset、update、 delete)语句共同联合完成\\n事务只和DML语句有关，或者说DML语句才有事务。这个和业务逻辑有关，业务逻辑不同，DML语句的个数不同0\\n2.事务是什么?\\n多个操作同时进行.那么同时成功，那么同时失败。这就是事务\\n事务有四个特性:一致性、持久性、原子性、隔离性\\n比如有一个订单业务\\n1.订单表当中添加一条记录\\n2.商品数量数据更新(减少)\\n3.当多个任务同时进行操作的时候，这些任务只能同时成功，或者同时失败.\\n4.事务的四大性质\\n1.原子性:事务是一个不可分割的工作单位，要么同时成功，要么同时失败。例:当两个人发起转账业务时，如果A转账发起，而B因为一些原因不能成功接受，事务最终将不会提交，则A和B的请求最终不会成功。\\n2.持久性:一旦事务提交，他对数据库的改变就是永久的。注:只要提交了事务，将会对数据库的数据进行永久性刷新。\\n3.隔离性:多个事务之间相互隔离的，互不干扰\\n4.一致性: 事务执行接收之后，数据库完整性不被破坏\\n注意:只有当前三条性质都满足了，才能保证事务的一致性</p>"}');export{t as data};
