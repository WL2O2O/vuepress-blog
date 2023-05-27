import{_ as n,X as s,Y as a,$ as e}from"./framework-bb3ac5ef.js";const t={},i=e(`<h1 id="educoder头歌java笔记" tabindex="-1"><a class="header-anchor" href="#educoder头歌java笔记" aria-hidden="true">#</a> educoder头歌Java笔记</h1><h2 id="coding中遇到的问题合集" tabindex="-1"><a class="header-anchor" href="#coding中遇到的问题合集" aria-hidden="true">#</a> <em>Coding中遇到的问题合集：</em></h2><p>““.equals(name) 和name.equals(““) 的区别：</p><p>​ 两个都是比较“”的地址和name的地址是否指向同一个地址，即判断name是否为“”；建议用前者，因为name可能是null，此时name.equals(&quot;&quot;)就会报错，而前者则会避免这个问题</p><p>避免了抛出空指针异常NullPointerException。</p><p>leetcode回文数：</p><ul><li>(s.charAt(i)).get(map) &amp;&amp; map.get(s.charAt(i))，问题同上；出现了抛出空指针异常的问题，使用前者后，测试通过。</li><li>遇到了char与string的类型不匹配的情况，不可强制转换，最后利用string类的replace方法替换字符串，得到了解决。</li></ul><p>​</p><h2 id="对象的构造方法实例" tabindex="-1"><a class="header-anchor" href="#对象的构造方法实例" aria-hidden="true">#</a> 对象的构造方法实例</h2><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>import java.util.Scanner;

public class Test {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String name = sc.next();
		String sex = sc.next();
		/****** Begin ******/
		//分别使用两种构造器来创建Person对象  
		Person a=new Person();
		Person b=new Person(name,sex);
		/****** End ******/
	}
}
//创建Person对象，并创建两种构造方法
/****** Begin ******/
class Person{																	class swap{
	public Person(){																public swap(int a,int b,int c){
		System.out.println(&quot;一个人被创建了&quot;);							c=a;a=b;b=c;

​	}
​	public Person(String name,String sex){
​		System.out.println(&quot;姓名：&quot;+name+&quot;，性别：&quot;+sex+&quot;，被创建了&quot;);
​	}
}
/****** End ******/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>千万注意！！！！！ 变量名字一定看清楚，上面的代码中，误将name写成了neme!!!!!</p><figure><img src="http://images.rl0206.love/202305070013234.png" alt="image-20220617145157883" tabindex="0" loading="lazy"><figcaption>image-20220617145157883</figcaption></figure><p><code>JAVA</code>中<code>变量</code>的命名和前面第一章所学的<code>标识符</code>命名规则是一样的，不过还是有一些不同，总结下来规则与规范一共有六点：</p><ol><li><p>由字母，下划线，美元符号（$），数字组成，但第一个字符不能是数字。</p></li><li><p>如果变量名是复合型的那么我们采用驼峰式，或者蛇形式的方式。 驼峰式：<code>teaCup</code>（表示茶杯的意思），<code>stuAge</code>（学生年龄） 蛇形式：<code>tea_cup</code>，<code>stu_age</code></p></li><li><p>如果是单个单词就全小写就行了。</p></li><li><p>千万不要用中文拼音来表达：例如学生年龄：<code>xueShengNianling</code>。</p></li><li><p>在一个方法中变量名不能重复。</p></li><li><p>变量一定要给自己一个确定的类型。</p><h2 id="java中的数据类型" tabindex="-1"><a class="header-anchor" href="#java中的数据类型" aria-hidden="true">#</a> JAVA中的数据类型</h2><p><code>Java</code>基本类型共有八种，基本类型可以分为三类，字符类型<code>char</code>，布尔类型<code>boolean</code>以及数值类型<code>byte、short、int、long、float、double</code>。数值类型又可以分为整数类型<code>byte、short、int、long</code>和浮点数类型<code>float、double</code>。</p><p><code>基本类型不包括String</code></p><h2 id="java类型转换" tabindex="-1"><a class="header-anchor" href="#java类型转换" aria-hidden="true">#</a> java类型转换</h2><figure><img src="http://images.rl0206.love/202305070013237.png" alt="image-20220617152252543" tabindex="0" loading="lazy"><figcaption>image-20220617152252543</figcaption></figure></li></ol><p>强制类型转换就是将：<strong>表数范围大的数向表数范围小的进行转换</strong>。</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <img src="http://images.rl0206.love/202305070013238.png" alt="image-20220617152333029" loading="lazy"></h2><h2 id="怎么使用scanner" tabindex="-1"><a class="header-anchor" href="#怎么使用scanner" aria-hidden="true">#</a> 怎么使用Scanner</h2><p>​ 第一种方法：</p><ol><li><p>在类的声明之前，引入扫描仪（<code>Scanner</code>）：</p><p><code>import java.util.Scanner;</code></p></li><li><p>在方法中创建一个扫描仪</p><p><code>Scanner input = new Scanner(System.in);</code></p><p>第二种方法：</p><p>引入并创建扫描器：<code>java.util.Scanner s = new java.util.Scanner(System.in); </code></p></li><li><p>通过扫描仪获取从键盘输入的数据</p><p><code>int i = input.nextInt();</code></p><p><code>String s = input.next();</code></p><h4 id="三目运算符之判断是否闰年" tabindex="-1"><a class="header-anchor" href="#三目运算符之判断是否闰年" aria-hidden="true">#</a> 三目运算符之判断是否闰年？</h4></li></ol><p>result=(year%400==0 || year%4==0 &amp;&amp; year%100!=0)? true:false;</p><p>​ System.out.println(year + &quot;年是否为闰年:&quot; + result);</p><h4 id="运算符优先级别排序正确的是" tabindex="-1"><a class="header-anchor" href="#运算符优先级别排序正确的是" aria-hidden="true">#</a> 运算符优先级别排序正确的是()</h4><p>A、 由高向低分别是:()、 ! 、算术运算符、关系运算符、逻辑运算符、赋值 运算符;</p><h2 id="循环综合练习" tabindex="-1"><a class="header-anchor" href="#循环综合练习" aria-hidden="true">#</a> 循环综合练习：</h2><p><strong>Java中的两种循环：</strong></p><p>在 Java 语言中，用于循环的语句有两个，一个是 for 循环，一个是 while 循环。而 for 循环其实还有两种实现方法，对于初学者来说，或许仅知道一般的 for 循环，即：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>for(初始化条件; 限制条件; 迭代语句) {
    // 循环体
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而不太了解高级的 for 循环，即：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>for(变量类型 变量名 : 集合) {
    // 循环体
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在本文中，咱们就一起来了解了解这两种 for 循环的使用方法以及区别。 <strong>demo示例：</strong></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>import java.util.Arrays;

/**
 * @author 维C果糖
 * @create 2017-03-31-上午9:30
 */

public class ForDemo {
    public static void main(String[] args) {

        int[] arr = new int[]{2, 0, 1, 5, 11, 20};

        System.out.println(&quot;第一种 for 循环方法：&quot;);

        for (int i = 0; i &lt; arr.length; i++) {
            System.out.print(arr[i] + &quot; &quot;);
        }

        System.out.println();

        System.out.println(&quot;高级的 for 循环方法：&quot;);

        for (int i : arr){
            System.out.print(i + &quot; &quot;);

        }

        System.out.println();

        System.out.println(&quot;用 Arrays 的 toString() 方法打印数组：&quot;);

        System.out.println(Arrays.toString(arr));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果：</strong></p><figure><img src="https://img-blog.csdn.net/20170331095210507?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzUyNDY2MjA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" alt="for" tabindex="0" loading="lazy"><figcaption>for</figcaption></figure><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>ATM经典案例：

package step4;

import java.util.Scanner;

public class ForPractice4 {

  public static void main(String[] args) {

​    /*****start*****/

​    Scanner input = new Scanner(System.in);     

   

​    System.out.println(&quot;欢迎使用中国人民银行ATM取款机&quot;);     //在循环体外，只输出一次  

​    

​    int capital = 1000;   //总资金  

​    

​    while(true) {                    //循环体设为true，无限循环

​      System.out.println(&quot;输入取款金额：&quot;);     //循环外层控制“输入金额”

​      int a = input.nextInt();                  //准备接收输入数据

​    

​      if(a &gt; capital) {                        //执行判断语句，如果输出金额大于总金额，则返回返回外层循环

​        System.out.println(&quot;目前余额：&quot;+capital+&quot;无法满足您的取款需求！&quot;);   

​        continue;                          //返回外层循环

​        

​      }else {                           //如果“输入金额”小于capital，则，分支判断开始

​          capital = capital - a;

​          

​          System.out.println(&quot;剩余金额：&quot;+capital+&quot;，是否继续（&#39;1&#39;：结束，&#39;2&#39;：继续）：&quot;);

​            //资金等于总资金 - 取款额度

​          

​          int change = input.nextInt();      //控制输入“1”，“2”，判断是否结束程序

​          if (change == 1) {

​            System.out.println(&quot;取款结束！&quot;);    //如果为1，程序终止

​            break;

​            

​          }else {                         //如果为其他，则返回外层循环

​            continue;

​          }

​      }

​    

​    }

​    /*****end*****/

  }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第1关-将给定的整数进行由小至大排序" tabindex="-1"><a class="header-anchor" href="#第1关-将给定的整数进行由小至大排序" aria-hidden="true">#</a> 第1关：将给定的整数进行由小至大排序</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> int a;

​    if(x&gt;y){

​      a=y;

​      y=x;

​      x=a;

​    }

​    

​    if(x&gt;z){

​      a=x;

​      x=z;

​      z=a;

​    }

​    if(y&gt;z){

​      a=z;

​      z=y;

​      y=a;

​    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关于质数-难度级别-⭐⭐⭐" tabindex="-1"><a class="header-anchor" href="#关于质数-难度级别-⭐⭐⭐" aria-hidden="true">#</a> 关于质数：（难度级别：⭐⭐⭐）</h2><p>级别1：解题代码2022-07-02 23:30已解锁</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">step2</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FindZhiShu</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**********begin**********/</span>
<span class="token comment">//由于偶数中只有2是质数，此处直接将2的值进行输出，如下代码中查找质数时，只需考虑奇数即可</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">+</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//定义标签</span>
        <span class="token constant">OUT</span><span class="token operator">:</span>
        <span class="token comment">//1不是质数，2是质数但是已经打印输出，因此循环中i的值从3开始即可，i+=2是因为在循环中我们不再考虑偶数</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">+=</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//请补充程序判断i是否是质数并打印i，如果是质数按照 System.out.print(i+&quot; &quot;); 格式进行打印 </span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">%</span> j <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//如果i对j求余数等于0说明i不是质数</span>
                    <span class="token keyword">continue</span> <span class="token constant">OUT</span><span class="token punctuation">;</span>
               <span class="token punctuation">}</span>  
           <span class="token punctuation">}</span>            
            <span class="token comment">//说明i是质数 </span>
           <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
       <span class="token punctuation">}</span> 
        <span class="token doc-comment comment">/**********end**********/</span> 
    <span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">step2</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FindZhiShu</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		   <span class="token comment">/*
		     打印输出质数的时候务必按照如下格式：System.out.print(质数+&quot; &quot;)；
		     使用print进行打印同时被打印输出的质数后加上一个空格，
		     以便于与平台提供的结果格式保持一致！
            */</span>   
		   <span class="token doc-comment comment">/**********begin**********/</span>
            a<span class="token operator">:</span><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>		<span class="token comment">//此循环遍历次数较多，若对代码效率有要求，则可进一步改进代码：如下：</span>
                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>i<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">%</span>j<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">continue</span> a<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
           <span class="token doc-comment comment">/**********end**********/</span>	
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
		<span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>改进之后的代码<span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
<span class="token keyword">package</span> <span class="token namespace">step2</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FindZhiShu</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		   <span class="token comment">/*
		     打印输出质数的时候务必按照如下格式：System.out.print(质数+&quot; &quot;)；
		     使用print进行打印同时被打印输出的质数后加上一个空格，
		     以便于与平台提供的结果格式保持一致！
            */</span>   
		   <span class="token doc-comment comment">/**********begin**********/</span>

	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;2 &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//因为2是特殊的质数，又因下面循环会自动跳过偶数，因此先将2打印出来。</span>
	        a<span class="token operator">:</span><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span>i<span class="token operator">+=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>i<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span>
	            <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">%</span>j<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	                <span class="token keyword">continue</span> a<span class="token punctuation">;</span>		<span class="token comment">//此方法运用了给循环做标记，以此可以对continue和break进行明确的命令指示。</span>
	            <span class="token punctuation">}</span>
	            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	        <span class="token punctuation">}</span>
	       <span class="token doc-comment comment">/**********end**********/</span>	
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拓展知识-break与continue" tabindex="-1"><a class="header-anchor" href="#拓展知识-break与continue" aria-hidden="true">#</a> 拓展知识：（break与continue）</h2><h5 id="break关键字" tabindex="-1"><a class="header-anchor" href="#break关键字" aria-hidden="true">#</a> break关键字</h5><p>先来看一段代码的运行效果，如下：</p><figure><img src="https://data.educoder.net/api/attachments/189112" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>可以发现只要你一直输入<code>1</code>程序就会不断的提示你输入选项，可是当你输入<code>2</code>的时候程序就会终止，你能根据这个运行结果想到要实现这个效果，需要编写什么代码吗？ 可能你已经猜到了，需要使用到<code>break</code>关键字，<code>break</code>翻译过来是“打断”的意思，放在<code>Java</code>程序中的作用就是：<strong>结束整个循环过程</strong> 好了，现在来一起看看刚刚那段效果的源代码吧。</p><figure><img src="https://data.educoder.net/api/attachments/189205" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>现在你应该基本了解<code>break</code>的用法了，不过我还有个小秘密要告诉你：</p><figure><img src="https://data.educoder.net/api/attachments/189207" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如果我们在循环中使用<code>switch</code>语句，那么在<code>switch</code>语句中<code>break</code>就不能结束当前循环了，而只能结束<code>switch</code>语句。</p><h5 id="continue关键字" tabindex="-1"><a class="header-anchor" href="#continue关键字" aria-hidden="true">#</a> continue关键字</h5><p><code>continue</code>关键字的用途是：<strong>结束一次循环事件，开始下一个循环事件</strong>，也就是忽略该语句之后的语句，执行循环体的下一次循环。 例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int i = 0;  while(i &lt; 4){  if(i == 2){  i++;  continue;  }  System.out.println(i);  i++;  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出结果： <code>0</code><code>1</code><code>3</code></p><h5 id="static关键字" tabindex="-1"><a class="header-anchor" href="#static关键字" aria-hidden="true">#</a> static关键字</h5><p>​ 关于静态代码块你只需要记住一句话：在<strong>类被加载的时候</strong>运行且<strong>只运行一次</strong>。</p><p>​ 静态方法不能使用类的非静态变量；</p><p>​ 静态方法可以直接调用静态方法，但是调用普通方法只能通过对象的实例才能调用。</p><h2 id="数组的两种初始化方法" tabindex="-1"><a class="header-anchor" href="#数组的两种初始化方法" aria-hidden="true">#</a> 数组的两种初始化方法：</h2><h4 id="_1-静态初始化" tabindex="-1"><a class="header-anchor" href="#_1-静态初始化" aria-hidden="true">#</a> 1.静态初始化</h4><p><strong>在程序运行前就能确定数组的大小和数组中的初始数据</strong>我们称之为静态初始化。 例如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>float[] stuScores = {80.0f,70.0f,90.0f,66.5f};  int[] nums = {80,70, 90,66};  char[] chs = {‘a’,’b’, ‘c’,’d’};  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-动态初始化" tabindex="-1"><a class="header-anchor" href="#_2-动态初始化" aria-hidden="true">#</a> 2.动态初始化</h4><p><strong>数组的大小或数组中数据在程序运行时才能决定</strong>，且用到<code>new</code>这个关键字来确定数组的大小或初始数据我们称之为动态初始化。 定义数组：<code>变量类型[] 数组名 = new 数据类型 [ 数组长度 ];</code></p><figure><img src="https://data.educoder.net/api/attachments/189931" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>定义数组与初始化分离：</p><figure><img src="https://data.educoder.net/api/attachments/189927" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>赋值： 初始化之后就可以向数组中放数据了，数组中元素都是通过下标来访问的，例如向 <code>stuScores</code>数组中存放学生成绩：</p><figure><img src="https://data.educoder.net/api/attachments/189928" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="动态创建数组并循环赋值" tabindex="-1"><a class="header-anchor" href="#动态创建数组并循环赋值" aria-hidden="true">#</a> 动态创建数组并循环赋值：</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>int[] arr = new int[sc.nextInt()];

for(int i = 0 ; i&lt; arr.length ; i++){

   arr[i] = sc.nextInt();

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组基础" tabindex="-1"><a class="header-anchor" href="#数组基础" aria-hidden="true">#</a> 数组基础</h2><h4 id="如何获取数组的长度" tabindex="-1"><a class="header-anchor" href="#如何获取数组的长度" aria-hidden="true">#</a> 如何获取数组的长度：</h4><p>数组的<code>length</code>属性用于记录数组中有多少个元素或存储单元，即记录数组的长度是多少。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int[] nums = new int[10];//声明一个int型数组并动态初始化其大小为10
System.out.println(nums.length);//显示当前数组的大小  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：<code>10</code></p><h4 id="一维数组的遍历" tabindex="-1"><a class="header-anchor" href="#一维数组的遍历" aria-hidden="true">#</a> 一维数组的遍历:</h4><p>通俗的理解，遍历数组就是：<strong>把数组中的元素都看一遍</strong>。</p><p>示例如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>int[] arr = {1,3,5,7,9};  
for(int i = 0 ; i&lt;arr.length; i++){
	System.out.print(arr[i] + &quot;,&quot;);  
}  
//输出：\`1,3,5,7,9\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="二维数组的遍历" tabindex="-1"><a class="header-anchor" href="#二维数组的遍历" aria-hidden="true">#</a> 二维数组的遍历：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for(int i =0;i&lt;scores.length;i++){
            for(int j=0;j&lt;scores[i].length;j++)		//此处要加上遍历的行数，，即j&lt;scores[i].length
            System.out.println(scores[i][j]);
            System.out.println();
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="如何获取数组的最大值" tabindex="-1"><a class="header-anchor" href="#如何获取数组的最大值" aria-hidden="true">#</a> 如何获取数组的最大值：</h4><p>要求出数组的最大值，是不是很像是打擂台呢？</p><figure><img src="https://data.educoder.net/api/attachments/193188" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>对于一群人我们不知道谁最厉害，所以我们准备一个擂台，并挑选第一个人为擂主（max），擂台下的人不断的（循环）来挑战擂主。</p><h4 id="数据类型强制转换" tabindex="-1"><a class="header-anchor" href="#数据类型强制转换" aria-hidden="true">#</a> 数据类型强制转换：</h4><p>测试输入：<code>5</code>，<code>1</code>，<code>151</code>，<code>12</code>，<code>22</code>，<code>100</code>； 预期输出： <code>平均值：57.2</code><code>最大值：151</code></p><p>提示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int a = 3;  int b = 2;  System.out.println(a/b);  System.out.println((double)a/b);  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出： <code>1</code><code>1.5</code></p><p>例题如下：</p><h4 id="编程要求" tabindex="-1"><a class="header-anchor" href="#编程要求" aria-hidden="true">#</a> 编程要求</h4><p>根据提示，在右侧编辑器<code>Begin-End</code>处补充代码，计算并输出数组的平均值和最大值。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">step3</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Scanner</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> scores <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		
		<span class="token comment">//循环给数组赋值</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">&lt;</span> scores<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			scores<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token doc-comment comment">/********** Begin **********/</span>
		<span class="token comment">//在这里计算数组scores的平均值和最大值</span>
		<span class="token keyword">int</span> sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>max<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> av<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//此处是因为提前声明了一个double变量，否则则需要强制类型转换。</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>scores<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            sum<span class="token operator">+=</span>scores<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        av<span class="token operator">=</span>sum<span class="token operator">/</span>scores<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>scores<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>max<span class="token operator">&lt;</span>scores<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                max<span class="token operator">=</span>scores<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;平均值：&quot;</span> <span class="token operator">+</span>av <span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token comment">//若不声明多变量，则用这句强制转换类型。</span>
        <span class="token comment">//System.out.println(&quot;平均值：&quot; +(double)sum/scores.length );</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;最大值：&quot;</span> <span class="token operator">+</span>max <span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token doc-comment comment">/********** End **********/</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取二维数组的行列长度" tabindex="-1"><a class="header-anchor" href="#获取二维数组的行列长度" aria-hidden="true">#</a> 获取二维数组的行列长度：</h4><p>二维数组定义：<code>int array[][] = new int[3][3];</code> 获取行数： <code>int rowLength = array.length;</code> 获取列数： <code>int colLength = array[0].length;</code></p><h4 id="二维数组的遍历-1" tabindex="-1"><a class="header-anchor" href="#二维数组的遍历-1" aria-hidden="true">#</a> 二维数组的遍历</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Test</span><span class="token punctuation">{</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>		<span class="token comment">//此处要加上遍历的行数，，即j&lt;scores[i].length</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="知识拓展" tabindex="-1"><a class="header-anchor" href="#知识拓展" aria-hidden="true">#</a> <em>知识拓展</em></h4><p><strong>for-each</strong></p><p>for-each 循环通常用于遍历数组和集合，它的使用规则比普通的 for 循环还要简单，不需要初始变量，不需要条件，不需要下标来自增或者自减。来看一下语法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span>元素类型 元素 <span class="token operator">:</span> 数组或集合<span class="token punctuation">)</span><span class="token punctuation">{</span>  
<span class="token comment">// 要执行的代码</span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>来看一下示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ForEachExample</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> strs <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;一枚有趣的程序员&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> str <span class="token operator">:</span> strs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>沉默王二
一枚有趣的程序员
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="两数交换" tabindex="-1"><a class="header-anchor" href="#两数交换" aria-hidden="true">#</a> 两数交换:</h4><p>两个变量数值的交换有三种换发：</p><p>（1）借助中间量交换 （开发常用）</p><p>理解：三个杯子，两杯装水，其中一个空杯子用作容器。</p><p>int x = 10; int y = 20; int z = x; x = y; y = z; 　（2）位移运算交换 （面试常用）</p><p>理解：涉及到了异或运算符的规则：一个数对另一个数位异或两次，该数不变</p><p>int x = 10; int y = 20; x = x ^ y; y = x ^ y; x = x ^ y; 　（3）数值相加减交换</p><p>理解：先求得两数的和再进行减运算</p><p>int x = 10; int y = 20; x = x + y; y = x - y; x = x - y;</p><h2 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h2><h4 id="选择排序" tabindex="-1"><a class="header-anchor" href="#选择排序" aria-hidden="true">#</a> 选择排序：</h4><h5 id="实现过程" tabindex="-1"><a class="header-anchor" href="#实现过程" aria-hidden="true">#</a> 实现过程</h5><p>为了实现选择排序，我们需要<strong>求出最大值</strong>，并且和相比较的数据<strong>交换位置</strong>：接下来我们对数组<code>int[] arr = {6,5,8,0,2,9}</code>来进行<strong>第一趟循环</strong>，将最大值移动到数组的第一位。</p><figure><img src="https://data.educoder.net/api/attachments/191743" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>代码实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int[] arr = {6,5,8,0,2,9};for (int i = 0; i &lt; arr.length-1; i++) {      if(arr[0] &lt; arr[i+1]){          int temp = arr[0];          arr[0] = arr[i+1];          arr[i+1] = temp;      }  }  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一次循环操作就可以找出数组中的最大值，并将其移动到数组的首位，所以对于一个长度为<code>6</code>的数组，我们只需要进行<code>5</code>（length-1）次上述操作即可将数组降序排序了。</p><p>接下来我们进行<strong>第二趟循环</strong>，求第二大的值，并将其移动到数组的第二个位置。因为我们已经求出了最大值，所以这一次循环，最大值不用参与比较。</p><figure><img src="https://data.educoder.net/api/attachments/191767" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>代码实现：</p><figure><img src="https://data.educoder.net/api/attachments/191770" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>结果：<code>[9, 8, 5, 0, 2, 6]</code></p><p>可以发现经过两轮循环我们找出了数组中最大的两个值，并且移动他们到了数组的前两位。</p><p>现在按照上述步骤就可以实现数组的排序了，不过如果我们照搬上述代码，就会有很多冗余的代码，所以需要你来改进，怎么改进是需要你思考的。</p><p><strong>告诉你一个秘密</strong>：使用<code>Arrays.toString(数组)</code>可以直接输出数组中的值哦！ 如下：</p><figure><img src="https://data.educoder.net/api/attachments/191773" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>输出结果：<code>[6, 5, 8, 0, 2, 9]</code></p><p><strong>思考题</strong>：</p><p>本关所讲述的选择排序是一个简化版本，如果你想要学习优化版可以根据下列图片，编写出相应代码，然后在评论区贴出来哦。</p><figure><img src="https://data.educoder.net/api/attachments/192416" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>上图就是一个使用选择排序将一个数组中数据从小到大排序的过程，请思考如何用代码实现上述过程。</p><p>原理：每一次从待排序的数据元素中选出最小的一个元素，存放在序列的起始位置，直到全部待排序的数据元素排完。</p><hr><p>本关难度较大，但这是学习数组绕不过去的一关，多思考，多尝试，你能成功的，加油！</p>`,140),p=[i];function c(o,l){return s(),a("div",null,p)}const r=n(t,[["render",c],["__file","Educoder.html.vue"]]);export{r as default};
