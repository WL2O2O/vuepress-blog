import{_ as e,X as i,Y as n,Z as a}from"./framework-8bd09bfb.js";const d={},l=a(`<h2 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h2><blockquote><h4 id="一、什么是事务" tabindex="-1"><a class="header-anchor" href="#一、什么是事务" aria-hidden="true">#</a> 一、什么是事务</h4></blockquote><p>1.事务定义 事务:事务是一个最小的不可在分的工作单元;通常一个事务对应一个完整的业务(例如银行账户转账业务，该业务是一个最小的T元) 一个完整的业务需要批量的DML(inset、update、 delete)语句共同联合完成 事务只和DML语句有关，或者说DML语句才有事务。这个和业务逻辑有关，业务逻辑不同，DML语句的个数不同0 2.事务是什么? 多个操作同时进行.那么同时成功，那么同时失败。这就是事务 事务有四个特性:一致性、持久性、原子性、隔离性 比如有一个订单业务 1.订单表当中添加一条记录 2.商品数量数据更新(减少) 3.当多个任务同时进行操作的时候，这些任务只能同时成功，或者同时失败. 4.事务的四大性质 1.原子性:事务是一个不可分割的工作单位，要么同时成功，要么同时失败。例:当两个人发起转账业务时，如果A转账发起，而B因为一些原因不能成功接受，事务最终将不会提交，则A和B的请求最终不会成功。 2.持久性:一旦事务提交，他对数据库的改变就是永久的。注:只要提交了事务，将会对数据库的数据进行永久性刷新。 3.隔离性:多个事务之间相互隔离的，互不干扰 4.一致性: 事务执行接收之后，数据库完整性不被破坏 注意:只有当前三条性质都满足了，才能保证事务的一致性</p><p>​ 在mysql中，事务是一种机制、一个操作序列，是访问和更新数据库的程序执行单元。事务中包含一个或多个数据库操作命令，会把所有的命令作为一个整体一起向系统提交或撤销操作请求，即这一组数据库命令要么都执行，要么都不执行。例如：银行取钱 注意mysql的事务是自动提交的 ​ oracle的关系数据库范例的实现通过第一个DML语句隐式开始执行某个事务，事务一直延续到COMMIT或ROLLBACK语句执行为止SAVEPOINT命令不是SQL标准的一部分，实际上是编程人员反向撤销一些语句的简便方式。不需要单独考虑它，它不终止事务。 ​ <strong>所谓的“自动提交：</strong> ​ 在结束对提交处理的讨论之前，我们有必要阐明一下经常被提及的“自动提交”(有时候也被称为隐式提交)。您经常会听到这样的说法:Orade在某些情况下可以进行“自动提交”。执行DDL语句就是其中一种情况，退出某个用户进程(SQLPus)则是另一种情况。自动提交”纯子虚写有。执行某条DDL语句时，实现这个DDL命令的源代妈包含了一个完全正规的COMMIT令。但是，退出用户进程时的情况是怎样呢?如果在WINDOWS终端上使用SQL<em>Plus并执行一条DML语句，然后再执行“退出&quot;命令，就会提交事务。这是因为SQL</em>Plus中的“退出“命令嵌入了一条COMMIT语句。但是，单击SQL<em>Plus商口的右上角会出现怎样的情况呢? 此时，关团SQLPlus爱，如果再次登录SQLPlus，您会发现已回滚了事务，这是因为为Microsoft Windows编写SQL</em>Plus的编程人员在关团SQL<em>Plus窗口的代中嵌入了一条ROLLBACK语自。SQL</em>PLUS在其他平台上的行为可能有所不同，唯一的确认方法是测试。因此，以不同方式退出。</p><h4 id="二、转账案例" tabindex="-1"><a class="header-anchor" href="#二、转账案例" aria-hidden="true">#</a> 二、转账案例</h4><h5 id="_2-1-创建user表" tabindex="-1"><a class="header-anchor" href="#_2-1-创建user表" aria-hidden="true">#</a> 2.1 创建user表</h5><h5 id="_2-2-转账操作" tabindex="-1"><a class="header-anchor" href="#_2-2-转账操作" aria-hidden="true">#</a> 2.2 转账操作</h5><p>create table account ( id int auto_increment primary key, name varchar(20), money int ); 用于恢复数据 UPDATE account SET money = 2000 where name = &#39;张三&#39; or NAME =&#39;李四&#39;</p><p>1、将张三账户余额-1000 UPDATE account SET money = money-1000 WHERE NAME = &#39;张三&#39;; SELECT * from account WHERE NAME = &#39;张三&#39;</p><p>2、将李四账户余额+1000 UPDATE account SET money = money+2000 WHERE NAME = &#39;李四&#39;; SELECT * from account WHERE NAME = &#39;李四&#39;</p><h4 id="三、事务的操作" tabindex="-1"><a class="header-anchor" href="#三、事务的操作" aria-hidden="true">#</a> 三、事务的操作</h4><h5 id="_3-1查看事务提交方式" tabindex="-1"><a class="header-anchor" href="#_3-1查看事务提交方式" aria-hidden="true">#</a> 3.1查看事务提交方式</h5><p>SELECT @@autocommit</p><p>set @@autocommit = 0</p><p>表示手动提交，即使用 MySQL 客户端执行 SQL 命令后必须使用commit命令执行事务，否则所执行的 SQL 命令无效，如果想撤销事务则使用 rollback 命令。1 表示自动提交，即在 MySQL 客户端不在需要手动执行 commit 命令。</p><h5 id="_3-2提交事务" tabindex="-1"><a class="header-anchor" href="#_3-2提交事务" aria-hidden="true">#</a> 3.2提交事务</h5><p>COMMIT</p><p>​ 1.COMMIT命令 许多人(甚至某些经验丰富的DBA) 在提交处理这个环节上都会出现不完全或者完全错误的理解oracle体系结构的情况。执行COMMIT命令时发生的所有物理操作时LGWR进程将日志缓中区的内容刷新到磁盘。DBWn进程完全没有执行任何操作。对于oracle数据库来说，这是一个非常重要的性能特性。 ​ 注意:执行COMMIT命令时，DBWn进程不会进行任何操作作。为了使某个事务持久，所需的全部工作是将组成这个事务的变更写入磁盘(不必使实际表数据存在于磁盘的数据文件上)。如果变更以多重重做日志文件的形式存在于磁盘上，那么在出现使数据库受损的事件时，通过从数据库受损前所做的备份中还原数据文件以及应用重做日志文件中的变更，就可以重新实例化事务。</p><h5 id="_3-3回滚事务" tabindex="-1"><a class="header-anchor" href="#_3-3回滚事务" aria-hidden="true">#</a> 3.3回滚事务</h5><p>ROLLBACK 事务回滚就是如果没有操作成功，所有的sql就会倒序重新把数据恢复到原来得样子，这样保证数据不会出错 2.ROLLBACK命令 在事务处理过程中，Oracle会保存事务处理之前数据的映像。在事务处理过程中，会将这个映像提供给查询数据的其他会话。如果出现错误，或者会话故意请求回滚，那么它也可以用来自动回滚事务。回滚之前数据的状态是，数据已经改变，但反转这些变更所需的信息是可用的。为了满足隔离性原则，会将这些信息提供给其他所有会话。回滚会恢复数据改变之前的映像，从而抛弃所有变更;事务插入的所有行都会删除，事务删除的所有行都会重新插入表中，已经更新的行会回到原始状态。其他会话根本不知道发生了什么，它们绝对看不到这些变更，处理事务的会话现在会将数据看做事务开始之前的数据。</p><h5 id="_3-4开启事务" tabindex="-1"><a class="header-anchor" href="#_3-4开启事务" aria-hidden="true">#</a> 3.4开启事务</h5><p>START TRANSACTION 或 BEGIN</p><p>oracle: 事务的开始和结束 会话开始事务的时间从它发出DML命令时开始。事务持续执行任何数量的DML命令，知道会话发出COMMIT或者ROLLBACK语向为止。只有提交的变更才会变的永久，才会对其他会话可见。不可能嵌套事务，SQL标准不允许用户启动一个事务，然后在终止第一个事务之前再启动另一个事务。使用PL/SQL (Oracle专有的第三代语言)可以这样做，但它不是行业标准的SQL。显示事务控制语句有COMMIT、ROLLBACK SAVEPOINT。除了用户发出的COMMIT或者ROLLBACK之外，还有一些情况会隐式终止事务: 1.发出DDL或DCL语句 2.退出用户工具 (SQL*PLUS、SQL Developer或者其他工具) 3.客户会话终止 4.系统崩溃 如果用户发出DDL (CREATE、ALTER或DROP) 或者DCL (GRANT或REVOKE) 命令，就会提交正在处理的事务(如果有的话):会让它变的永久，并且对其他所有用户都可见。这是因为DDL和DCL命令本身都是是事务。因为在SQL中不可能损套事务，所以如果用户已经在运行事务，就会提交用户已经运行的语句，以及组成DDL和DCL的语句。如果用户通过发出DML命今来启动事务，然后在没有显示发出COMMIT或者ROLLBACK命令的情况下退出正在使用的工具，事务就会终上-但是使用COMMIT终上还是ROLLBACK终止，则完全取决于如何写工具。许多工具有不同的行为，这取决于退出工具的方式。不营在哪种情况下，都应该是受控制的退出，因此编程人员应该发出COMMIT或ROLLBACK金令。但他们必须进行选择如果客户的会话因为某种原因而失败，那么数据库总是会回滚事务，这种失败可能有多种原因，用户进程终止或者在提作系统级别被终止，到数据库服务器的网络连接中断，或者运行该客户工具的计算机崩溃。在所有这些情况中，都没有依次发出COMMIT或ROLLBACK语句，现在轮到数据库来检测发生的情况。行为是终止会话，回滚活动的事务。如果失败发生在服务器端，其行为也是这样。如果数据库服务器因为某种原因崩溃，那么当它下一次启动时，就会回滚来自所有会话的所有之前正在处理的事务。</p><h4 id="四、事务的四大特征" tabindex="-1"><a class="header-anchor" href="#四、事务的四大特征" aria-hidden="true">#</a> 四、事务的四大特征</h4><p>1、原子性（Atomicity） 　　原子性是指事务包含的所有 　　操作要么全部成功，要么全部失败回滚，因此事务的操作如果成功就必须要完全应用到数据库，如果操作失败则不能对数据库有任何影响。</p><p>2、一致性（Consistency） 　　一致性是指事务必须使数据库从一个一致性状态变换到另一个一致性状态，也就是说一个事务执行之前和执行之后都必须处于一致性状态。 　　拿转账来说，假设用户A和用户B两者的钱加起来一共是5000，那么不管A和B之间如何转账，转几次账，事务结束后两个用户的钱相加起来应该还得是5000，这就是事务的一致性。</p><p>3、隔离性（Isolation） 　　隔离性是当多个用户并发访问数据库时，比如操作同一张表时，数据库为每一个用户开启的事务，不能被其他事务的操作所干扰，多个并发事务之间要相互隔离。 　　即要达到这么一种效果：对于任意两个并发的事务T1和T2，在事务T1看来，T2要么在T1开始之前就已经结束，要么在T1结束之后才开始，这样每个事务都感觉不到有其他事务在并发地执行。</p><p>4、持久性（Durability） 　　持久性是指一个事务一旦被提交了，那么对数据库中的数据的改变就是永久性的，即便是在数据库系统遇到故障的情况下也不会丢失提交事务的操作。 　　例如我们在使用JDBC操作数据库时，在提交事务方法后，提示用户事务操作完成，当我们程序执行完成直到看到提示后，就可以认定事务以及正确提交，即使这时候数据库出现了问题，也必须要将我们的事务完全执行完成，否则就会造成我们看到提示事务处理完毕，但是数据库因为故障而没有执行事务的重大错误</p><h4 id="五、事务隔离基别" tabindex="-1"><a class="header-anchor" href="#五、事务隔离基别" aria-hidden="true">#</a> 五、事务隔离基别</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>读未提交(Read Uncommitted)：
	 允许脏读取，但不允许更新丢失。如果一个事务已经开始写数据，则另外一个事务则不允许同时进行写操作，但允许其他事务读此行数据。该隔离级别可以通过“排他写锁”实现。

	举个例子:小何其实是准备给小美转520元的，但是按岔了成250于是250块钱被转给了小美，当然这个时候小何还没有提交事务。这个时候小美一下看到了账户上面的250，十分的生气，啪的一下子就小何拉黑了。手机扔到了一边。小何在转账的时候也发现了转成了250，连忙回滚事务，将转账金额改成了520后才提交了事务。然后小何开心的拿起手机，发信息给小美，却发现被拉黑了。。。而这个时候，其实小何账上少了520，小美多了520，但是小美手机扔到了一遍，还以为小何给她转了250.而这种错误就叫做脏读(读了未提交事务的数据)。

读提交(Read Committed)：
 允许不可重复读取，但不允许脏读取。这可以通过“瞬间共享读锁”和“排他写锁”实现。读取数据的事务允许其他事务继续访问该行数据，但是未提交的写事务将会禁止其他事务访问该行。

	举个例子：小美和小何拿着520的账户去逛街买衣服，小美选了一件500的衣服，支付前，小美的账户上面查看有520元，于是小美升出二维码支付，但是这个时候，学校在绑定的小美的账户上面扣除了300的书本费，并且提交了事务，小美的账户被更新成为了220元，小美这时被告知账上没有足够的前支付。但是小美很纳闷，我刚不是有钱的吗？这就是不可重复读（同一个事务两次读取的内容不一样，读取无法重复）

可重复读取（Repeatable Read）：
	禁止不可重复读取和脏读取，但是有时可能出现幻读数据。这可以通过**“共享读锁”和“排他写锁”实现。读取数据的事务将会禁止写事务**（但允许读事务），写事务则禁止任何其他事务。

可重复读比较简单，就是在小美结账时不让其他的UPDATE操作动她的账户，当学校的扣费事务到来时拒绝掉，这个时候你就可以重复读取到相同的账户金额，并且付款成功。但是这种情况可能出现幻读的情况，其实本质原因是因为可重复读只能解决其他的UPDATE事务，对于INSERT操作无能为力。那幻读又是什么？

举个例子：小美被告知账上没钱时，比较惊讶，于是她来到了学校教务处查询自己账户记录。(小美事务开启)小红看到自己的账户上面时被扣了300元书本费，还剩下220元，于是小红提出让老师打印自己的账户记录回家报销，但是在这个时候，好男人小何怕小美伤心又给小美转账了300元，并且完成了事务，提交了小何事务。于是在打印的账户记录出现了300的入账记录，小美十分开心，对着小何说：&quot;我是不是出现了幻觉，刚刚不是只有220元的吗？怎么多了300元？&quot;，小何此时深藏功与名，而这个就叫做幻读。

序列化(Serializable)：
提供严格的事务隔离。它要求事务序列化执行，事务只能一个接着一个地执行，不能并发执行。仅仅通过“行级锁”是无法实现事务序列化的，必须通过其他机制保证新插入的数据不会被刚执行查询操作的事务访问到。

序列化就是按部就班的执行，可以避免脏读、不可重复读与幻读，但是可想而知，这种方式会降低数据库的效率。

在序列化（Serializable）事务隔离级别下，所有的事务都会按照顺序逐个执行，而且每个事务都会读取到其他事务提交前的数据快照，因此在事务 T1 执行期间，如果事务 T2 插入了新的数据并提交了事务，那么这些新的数据对事务 T1 是不可见的，因此事务 T1 不会查询到事务 T2 插入的数据。

具体来说，如果事务 T1 先查询了数据表信息，然后事务 T2 插入了一条新的数据并提交了事务，那么在事务 T1 执行期间，这些新的数据对事务 T1 是不可见的，即使在事务 T2 提交事务之后，事务 T1 也不会查询到这些新的数据。

需要注意的是，在序列化隔离级别下，事务会被强制串行执行，即使有多个事务并发执行，也会保证它们能够按照顺序执行，从而避免了幻读、不可重复读等问题。因此，在这个隔离级别下，事务 T1 和事务 T2 插入或更新的数据虽然可能存在冲突，但是它们不会相互影响，也不会互相读取对方提交的数据。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="六、查看事务隔离级别" tabindex="-1"><a class="header-anchor" href="#六、查看事务隔离级别" aria-hidden="true">#</a> 六、查看事务隔离级别</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#查看事务隔离级别
	5.7之前
SELECT @@transaction_isolation

#设置事务隔离级别
set session transaction isolation level   填写以下几个事务  ;
读未提交(Read Uncommitted)：
读提交(Read Committed)：
可重复读取（Repeatable Read）：
序列化(Serializable)：


session：当前会话，也就是当前连接。

global：全局，不包含当前连接，之后新获取的连接都会生效。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202306051100898.png" alt="1685861365330" tabindex="0" loading="lazy"><figcaption>1685861365330</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>设置事务隔离级别为   read uncommitted    并开启事务    演示脏读数据
要一起打开两个第一个设置事务隔离级别和开启事务start transaction
第二个也要开启事务start transaction，这几个级别都这样
然后开启下一个级别的情况下两边都要进行提交commit；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202306051100900.png" alt="1685861569904" loading="lazy"><img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202306051100902.png" alt="1685861842042" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>设置事务隔离级别为   read committed    并开启事务    演示脏读数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202306051100903.png" alt="1685862300090" tabindex="0" loading="lazy"><figcaption>1685862300090</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202306051100904.png" alt="1685862320137" tabindex="0" loading="lazy"><figcaption>1685862320137</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>设置事务隔离级别为   read committed    并开启事务    演示不可重复读数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202306051100905.png" alt="1685865723425" loading="lazy"><img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202306051100906.png" alt="1685865734957" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>什么是幻读
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202306051100907.png" alt="1685866356451" loading="lazy"><img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202306051100908.png" alt="1685866370205" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>解决幻读问题
设置事务隔离级别为  serializable 可以规避全部的并发事务问题但性能最差
注意：事务级别越高，数据越安全，但性能越差，反之亦然
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202306051100909.png" alt="1685866707034" tabindex="0" loading="lazy"><figcaption>1685866707034</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202306051100910.png" alt="1685866720304" tabindex="0" loading="lazy"><figcaption>1685866720304</figcaption></figure>`,45),s=[l];function r(t,c){return i(),n("div",null,s)}const v=e(d,[["render",r],["__file","transaction.html.vue"]]);export{v as default};
