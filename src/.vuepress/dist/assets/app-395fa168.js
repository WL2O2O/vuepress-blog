import{d as y,r as S,a as on,b as kl,c as E,i as W,e as cn,f as El,g as _l,o as V,h as b,j as t,k as Me,l as ui,m as F,n as Un,p as wa,q as wl,s as Be,u as Sl,t as Al,w as j,v as xl,x as Il,y as Ll,z as Tl,T as ye,A as U,B as Cl,R as q,C as Q,D as Wn,E as he,F as ee,G as je,H as Dl,I as di,J as Ml,K as tn,L as un,M as Bl,N as Pl,O as Qn,P as Sa,Q as Ol,S as Rl,U as Vl,V as $l,W as jl}from"./framework-b0c8e9b4.js";const zl="modulepreload",Nl=function(e){return"/"+e},Aa={},v=function(n,a,i){if(!a||a.length===0)return n();const l=document.getElementsByTagName("link");return Promise.all(a.map(s=>{if(s=Nl(s),s in Aa)return;Aa[s]=!0;const r=s.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(!!i)for(let d=l.length-1;d>=0;d--){const p=l[d];if(p.href===s&&(!r||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${o}`))return;const u=document.createElement("link");if(u.rel=r?"stylesheet":zl,r||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),r)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>n())},ql={"v-35f5db9e":()=>v(()=>import("./blog.html-a9f55566.js"),[]).then(({data:e})=>e),"v-8daa1a0e":()=>v(()=>import("./index.html-c02a20a4.js"),[]).then(({data:e})=>e),"v-744498a7":()=>v(()=>import("./index.html-09b9cc43.js"),[]).then(({data:e})=>e),"v-95bfbf7e":()=>v(()=>import("./abstractandinterface.html-aebf7653.js"),[]).then(({data:e})=>e),"v-52f4ced7":()=>v(()=>import("./article.html-916141af.js"),[]).then(({data:e})=>e),"v-4b382146":()=>v(()=>import("./Bugsss.html-e03a5587.js"),[]).then(({data:e})=>e),"v-005f5747":()=>v(()=>import("./collection.html-a6d1af64.js"),[]).then(({data:e})=>e),"v-6f754481":()=>v(()=>import("./DMDatabase.html-dfd17dcd.js"),[]).then(({data:e})=>e),"v-d9623eb8":()=>v(()=>import("./DNS.html-acbca35c.js"),[]).then(({data:e})=>e),"v-ec77fd94":()=>v(()=>import("./Educoder.html-79701fbd.js"),[]).then(({data:e})=>e),"v-d89fa10a":()=>v(()=>import("./git.html-4328f0ae.js"),[]).then(({data:e})=>e),"v-191a2f1e":()=>v(()=>import("./hellovuepress.html-734b1757.js"),[]).then(({data:e})=>e),"v-3318da52":()=>v(()=>import("./javaessay.html-63676bd4.js"),[]).then(({data:e})=>e),"v-c0ea97a8":()=>v(()=>import("./JVM.html-ab4f60a3.js"),[]).then(({data:e})=>e),"v-048e8a32":()=>v(()=>import("./library.html-f2ebf4df.js"),[]).then(({data:e})=>e),"v-0eb09a8e":()=>v(()=>import("./Linux.html-82be60bf.js"),[]).then(({data:e})=>e),"v-8035fcb0":()=>v(()=>import("./MyLanqiaoNote.html-8e3fad1e.js"),[]).then(({data:e})=>e),"v-4c8df8aa":()=>v(()=>import("./mysql.html-3e49e7a4.js"),[]).then(({data:e})=>e),"v-556ca76b":()=>v(()=>import("./netty.html-1da8978b.js"),[]).then(({data:e})=>e),"v-17c62546":()=>v(()=>import("./object.html-d7ea2e0b.js"),[]).then(({data:e})=>e),"v-71344198":()=>v(()=>import("./index.html-feffdc66.js"),[]).then(({data:e})=>e),"v-5967d75c":()=>v(()=>import("./tip.html-b37badb4.js"),[]).then(({data:e})=>e),"v-582f0022":()=>v(()=>import("./transaction.html-5d1d3c21.js"),[]).then(({data:e})=>e),"v-3d497a28":()=>v(()=>import("./修仙前言.html-677836ae.js"),[]).then(({data:e})=>e),"v-bd986690":()=>v(()=>import("./index.html-6ea6e9bf.js"),[]).then(({data:e})=>e),"v-64164596":()=>v(()=>import("./introduce.html-99d61f72.js"),[]).then(({data:e})=>e),"v-7d08789b":()=>v(()=>import("./mianshiQA.html-f5fbeccd.js"),[]).then(({data:e})=>e),"v-031ba3e8":()=>v(()=>import("./mindmap.html-5fe4201d.js"),[]).then(({data:e})=>e),"v-c806ba38":()=>v(()=>import("./myfirstoffer.html-c9d22b6d.js"),[]).then(({data:e})=>e),"v-2f327590":()=>v(()=>import("./NKLeJingLing.html-a1dd2128.js"),[]).then(({data:e})=>e),"v-6fc15a3d":()=>v(()=>import("./index.html-eacde7fc.js"),[]).then(({data:e})=>e),"v-c4736ae8":()=>v(()=>import("./resumeRules.html-89ed93a5.js"),[]).then(({data:e})=>e),"v-744b3bf6":()=>v(()=>import("./index.html-8cc260b8.js"),[]).then(({data:e})=>e),"v-dc384366":()=>v(()=>import("./index.html-81690580.js"),[]).then(({data:e})=>e),"v-8c5ee32a":()=>v(()=>import("./Redis.html-30c9a1b2.js"),[]).then(({data:e})=>e),"v-714f7799":()=>v(()=>import("./001.两数之和.html-738ffd64.js"),[]).then(({data:e})=>e),"v-d43273ca":()=>v(()=>import("./026.删除有序数组中的重复项.html-0c84a199.js"),[]).then(({data:e})=>e),"v-113b160a":()=>v(()=>import("./example.html-eb913934.js"),[]).then(({data:e})=>e),"v-d86466ce":()=>v(()=>import("./JZ06 从尾到头打印链表.html-99e0e281.js"),[]).then(({data:e})=>e),"v-0ab8f568":()=>v(()=>import("./index.html-b6e5330b.js"),[]).then(({data:e})=>e),"v-6d8dfae0":()=>v(()=>import("./aggregateSearch.html-dc73d79c.js"),[]).then(({data:e})=>e),"v-5575e5ed":()=>v(()=>import("./api.html-3d31979f.js"),[]).then(({data:e})=>e),"v-7ae534ba":()=>v(()=>import("./bilibili.html-7e0bac9c.js"),[]).then(({data:e})=>e),"v-11396e4c":()=>v(()=>import("./CampousLostAndFound.html-a32b5a3f.js"),[]).then(({data:e})=>e),"v-6e9c2f30":()=>v(()=>import("./oj.html-3fe69da3.js"),[]).then(({data:e})=>e),"v-5425233e":()=>v(()=>import("./shangyitong.html-3230e70b.js"),[]).then(({data:e})=>e),"v-794909fa":()=>v(()=>import("./SSM.html-55d1a4e6.js"),[]).then(({data:e})=>e),"v-3706649a":()=>v(()=>import("./404.html-6db882f3.js"),[]).then(({data:e})=>e),"v-f9e30908":()=>v(()=>import("./index.html-ace30bdb.js"),[]).then(({data:e})=>e),"v-c75ea624":()=>v(()=>import("./index.html-fe3aaa47.js"),[]).then(({data:e})=>e),"v-5bc93818":()=>v(()=>import("./index.html-112a1f54.js"),[]).then(({data:e})=>e),"v-744d024e":()=>v(()=>import("./index.html-8effe582.js"),[]).then(({data:e})=>e),"v-e52c881c":()=>v(()=>import("./index.html-9062cd9d.js"),[]).then(({data:e})=>e),"v-154dc4c4":()=>v(()=>import("./index.html-bc64aa84.js"),[]).then(({data:e})=>e),"v-01560935":()=>v(()=>import("./index.html-c2648a8a.js"),[]).then(({data:e})=>e),"v-9c08d936":()=>v(()=>import("./index.html-1693983a.js"),[]).then(({data:e})=>e),"v-68cf5b32":()=>v(()=>import("./index.html-0d390574.js"),[]).then(({data:e})=>e),"v-76bcc2c8":()=>v(()=>import("./index.html-529e3988.js"),[]).then(({data:e})=>e),"v-7e2e33bc":()=>v(()=>import("./index.html-fbc7fc47.js"),[]).then(({data:e})=>e),"v-4d3e340d":()=>v(()=>import("./index.html-c99f2993.js"),[]).then(({data:e})=>e),"v-b310d42a":()=>v(()=>import("./index.html-32b9ddc0.js"),[]).then(({data:e})=>e),"v-cd88c8a6":()=>v(()=>import("./index.html-3a402904.js"),[]).then(({data:e})=>e),"v-ea729656":()=>v(()=>import("./index.html-7bfcbf30.js"),[]).then(({data:e})=>e),"v-a9f4e09e":()=>v(()=>import("./index.html-356d448d.js"),[]).then(({data:e})=>e),"v-c7db86c6":()=>v(()=>import("./index.html-eb0eb552.js"),[]).then(({data:e})=>e),"v-116a43a7":()=>v(()=>import("./index.html-2f1f2fd1.js"),[]).then(({data:e})=>e),"v-5cd3874e":()=>v(()=>import("./index.html-46f3cd45.js"),[]).then(({data:e})=>e),"v-65f3d995":()=>v(()=>import("./index.html-588ecf55.js"),[]).then(({data:e})=>e),"v-7b320286":()=>v(()=>import("./index.html-aa2b412d.js"),[]).then(({data:e})=>e),"v-8848dfa8":()=>v(()=>import("./index.html-103eef94.js"),[]).then(({data:e})=>e),"v-2a4d47ed":()=>v(()=>import("./index.html-e8b6069d.js"),[]).then(({data:e})=>e),"v-06be9332":()=>v(()=>import("./index.html-9467f209.js"),[]).then(({data:e})=>e),"v-b30dba08":()=>v(()=>import("./index.html-960d26e1.js"),[]).then(({data:e})=>e),"v-cf17f078":()=>v(()=>import("./index.html-00c965ac.js"),[]).then(({data:e})=>e),"v-211f44ee":()=>v(()=>import("./index.html-a4732824.js"),[]).then(({data:e})=>e),"v-a920ffc4":()=>v(()=>import("./index.html-31da0bc5.js"),[]).then(({data:e})=>e),"v-1bee38ca":()=>v(()=>import("./index.html-3109069f.js"),[]).then(({data:e})=>e),"v-1ab7314a":()=>v(()=>import("./index.html-b68fe63b.js"),[]).then(({data:e})=>e),"v-0c74f160":()=>v(()=>import("./index.html-2e84ade0.js"),[]).then(({data:e})=>e),"v-b7d62b20":()=>v(()=>import("./index.html-c9e3472c.js"),[]).then(({data:e})=>e),"v-1c575968":()=>v(()=>import("./index.html-c7eae968.js"),[]).then(({data:e})=>e),"v-a0ba2788":()=>v(()=>import("./index.html-ba39930c.js"),[]).then(({data:e})=>e),"v-28a1d8bf":()=>v(()=>import("./index.html-44b9256d.js"),[]).then(({data:e})=>e),"v-6a46ce40":()=>v(()=>import("./index.html-3f448663.js"),[]).then(({data:e})=>e),"v-3b5171b1":()=>v(()=>import("./index.html-29c83e55.js"),[]).then(({data:e})=>e),"v-d6bd47b4":()=>v(()=>import("./index.html-10832de6.js"),[]).then(({data:e})=>e),"v-b308ce6a":()=>v(()=>import("./index.html-d06c5b81.js"),[]).then(({data:e})=>e),"v-0d1f4c3c":()=>v(()=>import("./index.html-586c39bf.js"),[]).then(({data:e})=>e),"v-46b9d66c":()=>v(()=>import("./index.html-9f0f3599.js"),[]).then(({data:e})=>e),"v-89367940":()=>v(()=>import("./index.html-92c10b95.js"),[]).then(({data:e})=>e),"v-eba48dea":()=>v(()=>import("./index.html-1d0fe627.js"),[]).then(({data:e})=>e),"v-3b1c4252":()=>v(()=>import("./index.html-aa977ad3.js"),[]).then(({data:e})=>e)},Fl=JSON.parse('{"base":"/","lang":"zh-CN","title":"CS_GUIDER","description":"记录我的CS之路,为你点亮一座灯塔!","head":[["meta",{"name":"robots","content":"all"}],["meta",{"name":"author","content":"WLei224"}],["meta",{"http-equiv":"Cache-Control","content":"no-cache, no-store, must-revalidate"}],["meta",{"http-equiv":"Pragma","content":"no-cache"}],["meta",{"http-equiv":"Expires","content":"0"}],["meta",{"name":"keywords","content":"Java, Java基础, 并发编程, JVM, 虚拟机, 数据库, MySQL, Spring, Redis, MyBatis, SpringBoot, IDEA, 求职面试, 面渣逆袭, 学习路线"}],["meta",{"name":"apple-mobile-web-app-capable","content":"yes"}],["script",{},"\\n        var _hmt = _hmt || [];\\n        (function() {\\n          var hm = document.createElement(\\"script\\");\\n          hm.src = \\"https://hm.baidu.com/hm.js?5230ac143650bf5eb3c14f3fb9b1d3ec\\";\\n          var s = document.getElementsByTagName(\\"script\\")[0]; \\n          s.parentNode.insertBefore(hm, s);\\n        })();\\n      "],["link",{"rel":"stylesheet","href":"//at.alicdn.com/t/font_3180624_7cy10l7jqqh.css"}],["link",{"rel":"icon","href":"http://images.rl0206.love/202304221329083.ico"}],["link",{"rel":"icon","href":"/logo.png","type":"image/png","sizes":"512x512"}],["link",{"rel":"icon","href":"/logo.png","type":"image/png","sizes":"192x192"}],["link",{"rel":"icon","href":"/logo.png","type":"image/png","sizes":"512x512"}],["link",{"rel":"icon","href":"/logo.png","type":"image/png","sizes":"192x192"}],["link",{"rel":"manifest","href":"/manifest.webmanifest","crossorigin":"use-credentials"}],["meta",{"name":"theme-color","content":"#46bd87"}],["link",{"rel":"apple-touch-icon","href":"/logo.png"}],["meta",{"name":"apple-mobile-web-app-status-bar-style","content":"black"}],["meta",{"name":"msapplication-TileImage","content":"/logo.png"}],["meta",{"name":"msapplication-TileColor","content":"#ffffff"}],["meta",{"name":"viewport","content":"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"}]],"locales":{}}'),vi={"v-35f5db9e":y(()=>v(()=>import("./blog.html-571b2a3d.js"),["assets/blog.html-571b2a3d.js","assets/framework-b0c8e9b4.js"])),"v-8daa1a0e":y(()=>v(()=>import("./index.html-c852da12.js"),["assets/index.html-c852da12.js","assets/framework-b0c8e9b4.js"])),"v-744498a7":y(()=>v(()=>import("./index.html-c030f0d4.js"),["assets/index.html-c030f0d4.js","assets/framework-b0c8e9b4.js"])),"v-95bfbf7e":y(()=>v(()=>import("./abstractandinterface.html-a3d71d5f.js"),["assets/abstractandinterface.html-a3d71d5f.js","assets/framework-b0c8e9b4.js"])),"v-52f4ced7":y(()=>v(()=>import("./article.html-c9de11e3.js"),["assets/article.html-c9de11e3.js","assets/framework-b0c8e9b4.js"])),"v-4b382146":y(()=>v(()=>import("./Bugsss.html-cb2134d3.js"),["assets/Bugsss.html-cb2134d3.js","assets/framework-b0c8e9b4.js"])),"v-005f5747":y(()=>v(()=>import("./collection.html-6e31aca5.js"),["assets/collection.html-6e31aca5.js","assets/framework-b0c8e9b4.js"])),"v-6f754481":y(()=>v(()=>import("./DMDatabase.html-e5b29f4b.js"),["assets/DMDatabase.html-e5b29f4b.js","assets/framework-b0c8e9b4.js"])),"v-d9623eb8":y(()=>v(()=>import("./DNS.html-1e1c9ecf.js"),["assets/DNS.html-1e1c9ecf.js","assets/framework-b0c8e9b4.js"])),"v-ec77fd94":y(()=>v(()=>import("./Educoder.html-2e3b3072.js"),["assets/Educoder.html-2e3b3072.js","assets/framework-b0c8e9b4.js"])),"v-d89fa10a":y(()=>v(()=>import("./git.html-80d31201.js"),["assets/git.html-80d31201.js","assets/framework-b0c8e9b4.js"])),"v-191a2f1e":y(()=>v(()=>import("./hellovuepress.html-49770c12.js"),["assets/hellovuepress.html-49770c12.js","assets/framework-b0c8e9b4.js"])),"v-3318da52":y(()=>v(()=>import("./javaessay.html-5bb8719d.js"),["assets/javaessay.html-5bb8719d.js","assets/framework-b0c8e9b4.js"])),"v-c0ea97a8":y(()=>v(()=>import("./JVM.html-cad8b4e1.js"),["assets/JVM.html-cad8b4e1.js","assets/framework-b0c8e9b4.js"])),"v-048e8a32":y(()=>v(()=>import("./library.html-049cc2ee.js"),["assets/library.html-049cc2ee.js","assets/framework-b0c8e9b4.js"])),"v-0eb09a8e":y(()=>v(()=>import("./Linux.html-ebfd4a0d.js"),["assets/Linux.html-ebfd4a0d.js","assets/framework-b0c8e9b4.js"])),"v-8035fcb0":y(()=>v(()=>import("./MyLanqiaoNote.html-21af6329.js"),["assets/MyLanqiaoNote.html-21af6329.js","assets/framework-b0c8e9b4.js"])),"v-4c8df8aa":y(()=>v(()=>import("./mysql.html-a12d051d.js"),["assets/mysql.html-a12d051d.js","assets/framework-b0c8e9b4.js"])),"v-556ca76b":y(()=>v(()=>import("./netty.html-c21da56b.js"),["assets/netty.html-c21da56b.js","assets/framework-b0c8e9b4.js"])),"v-17c62546":y(()=>v(()=>import("./object.html-14fce821.js"),["assets/object.html-14fce821.js","assets/framework-b0c8e9b4.js"])),"v-71344198":y(()=>v(()=>import("./index.html-4a41ff20.js"),["assets/index.html-4a41ff20.js","assets/framework-b0c8e9b4.js"])),"v-5967d75c":y(()=>v(()=>import("./tip.html-c48aac43.js"),["assets/tip.html-c48aac43.js","assets/framework-b0c8e9b4.js"])),"v-582f0022":y(()=>v(()=>import("./transaction.html-4be36893.js"),["assets/transaction.html-4be36893.js","assets/framework-b0c8e9b4.js"])),"v-3d497a28":y(()=>v(()=>import("./修仙前言.html-c2fd2964.js"),["assets/修仙前言.html-c2fd2964.js","assets/framework-b0c8e9b4.js"])),"v-bd986690":y(()=>v(()=>import("./index.html-7730b826.js"),["assets/index.html-7730b826.js","assets/framework-b0c8e9b4.js"])),"v-64164596":y(()=>v(()=>import("./introduce.html-d982bf7e.js"),["assets/introduce.html-d982bf7e.js","assets/framework-b0c8e9b4.js"])),"v-7d08789b":y(()=>v(()=>import("./mianshiQA.html-032052be.js"),["assets/mianshiQA.html-032052be.js","assets/framework-b0c8e9b4.js"])),"v-031ba3e8":y(()=>v(()=>import("./mindmap.html-b8639208.js"),["assets/mindmap.html-b8639208.js","assets/framework-b0c8e9b4.js"])),"v-c806ba38":y(()=>v(()=>import("./myfirstoffer.html-8df9dd45.js"),["assets/myfirstoffer.html-8df9dd45.js","assets/framework-b0c8e9b4.js"])),"v-2f327590":y(()=>v(()=>import("./NKLeJingLing.html-10c42f3b.js"),["assets/NKLeJingLing.html-10c42f3b.js","assets/framework-b0c8e9b4.js"])),"v-6fc15a3d":y(()=>v(()=>import("./index.html-d3120d1f.js"),["assets/index.html-d3120d1f.js","assets/framework-b0c8e9b4.js"])),"v-c4736ae8":y(()=>v(()=>import("./resumeRules.html-6b37c4ca.js"),["assets/resumeRules.html-6b37c4ca.js","assets/framework-b0c8e9b4.js"])),"v-744b3bf6":y(()=>v(()=>import("./index.html-bb561ff5.js"),["assets/index.html-bb561ff5.js","assets/framework-b0c8e9b4.js"])),"v-dc384366":y(()=>v(()=>import("./index.html-18f8948d.js"),["assets/index.html-18f8948d.js","assets/framework-b0c8e9b4.js"])),"v-8c5ee32a":y(()=>v(()=>import("./Redis.html-02a0f1ae.js"),["assets/Redis.html-02a0f1ae.js","assets/framework-b0c8e9b4.js"])),"v-714f7799":y(()=>v(()=>import("./001.两数之和.html-16d04271.js"),["assets/001.两数之和.html-16d04271.js","assets/framework-b0c8e9b4.js"])),"v-d43273ca":y(()=>v(()=>import("./026.删除有序数组中的重复项.html-e73f40b9.js"),["assets/026.删除有序数组中的重复项.html-e73f40b9.js","assets/framework-b0c8e9b4.js"])),"v-113b160a":y(()=>v(()=>import("./example.html-e47b1c06.js"),["assets/example.html-e47b1c06.js","assets/framework-b0c8e9b4.js"])),"v-d86466ce":y(()=>v(()=>import("./JZ06 从尾到头打印链表.html-ceade419.js"),["assets/JZ06 从尾到头打印链表.html-ceade419.js","assets/framework-b0c8e9b4.js"])),"v-0ab8f568":y(()=>v(()=>import("./index.html-6761a301.js"),["assets/index.html-6761a301.js","assets/framework-b0c8e9b4.js"])),"v-6d8dfae0":y(()=>v(()=>import("./aggregateSearch.html-fcb6d8f9.js"),["assets/aggregateSearch.html-fcb6d8f9.js","assets/framework-b0c8e9b4.js"])),"v-5575e5ed":y(()=>v(()=>import("./api.html-103c76ad.js"),["assets/api.html-103c76ad.js","assets/framework-b0c8e9b4.js"])),"v-7ae534ba":y(()=>v(()=>import("./bilibili.html-fcd4a2e2.js"),["assets/bilibili.html-fcd4a2e2.js","assets/framework-b0c8e9b4.js"])),"v-11396e4c":y(()=>v(()=>import("./CampousLostAndFound.html-b472c16c.js"),["assets/CampousLostAndFound.html-b472c16c.js","assets/framework-b0c8e9b4.js"])),"v-6e9c2f30":y(()=>v(()=>import("./oj.html-2ebefdcb.js"),["assets/oj.html-2ebefdcb.js","assets/framework-b0c8e9b4.js"])),"v-5425233e":y(()=>v(()=>import("./shangyitong.html-aec03a74.js"),["assets/shangyitong.html-aec03a74.js","assets/framework-b0c8e9b4.js"])),"v-794909fa":y(()=>v(()=>import("./SSM.html-923db063.js"),["assets/SSM.html-923db063.js","assets/framework-b0c8e9b4.js"])),"v-3706649a":y(()=>v(()=>import("./404.html-f0a56942.js"),["assets/404.html-f0a56942.js","assets/framework-b0c8e9b4.js"])),"v-f9e30908":y(()=>v(()=>import("./index.html-08e60feb.js"),["assets/index.html-08e60feb.js","assets/framework-b0c8e9b4.js"])),"v-c75ea624":y(()=>v(()=>import("./index.html-de2b841e.js"),["assets/index.html-de2b841e.js","assets/framework-b0c8e9b4.js"])),"v-5bc93818":y(()=>v(()=>import("./index.html-61946532.js"),["assets/index.html-61946532.js","assets/framework-b0c8e9b4.js"])),"v-744d024e":y(()=>v(()=>import("./index.html-e9023a67.js"),["assets/index.html-e9023a67.js","assets/framework-b0c8e9b4.js"])),"v-e52c881c":y(()=>v(()=>import("./index.html-641b2c60.js"),["assets/index.html-641b2c60.js","assets/framework-b0c8e9b4.js"])),"v-154dc4c4":y(()=>v(()=>import("./index.html-033c390f.js"),["assets/index.html-033c390f.js","assets/framework-b0c8e9b4.js"])),"v-01560935":y(()=>v(()=>import("./index.html-e0e01d8c.js"),["assets/index.html-e0e01d8c.js","assets/framework-b0c8e9b4.js"])),"v-9c08d936":y(()=>v(()=>import("./index.html-6781250b.js"),["assets/index.html-6781250b.js","assets/framework-b0c8e9b4.js"])),"v-68cf5b32":y(()=>v(()=>import("./index.html-562d0a58.js"),["assets/index.html-562d0a58.js","assets/framework-b0c8e9b4.js"])),"v-76bcc2c8":y(()=>v(()=>import("./index.html-200a4d5a.js"),["assets/index.html-200a4d5a.js","assets/framework-b0c8e9b4.js"])),"v-7e2e33bc":y(()=>v(()=>import("./index.html-8046f833.js"),["assets/index.html-8046f833.js","assets/framework-b0c8e9b4.js"])),"v-4d3e340d":y(()=>v(()=>import("./index.html-bb2d5023.js"),["assets/index.html-bb2d5023.js","assets/framework-b0c8e9b4.js"])),"v-b310d42a":y(()=>v(()=>import("./index.html-774ec92c.js"),["assets/index.html-774ec92c.js","assets/framework-b0c8e9b4.js"])),"v-cd88c8a6":y(()=>v(()=>import("./index.html-d85cc222.js"),["assets/index.html-d85cc222.js","assets/framework-b0c8e9b4.js"])),"v-ea729656":y(()=>v(()=>import("./index.html-156011b1.js"),["assets/index.html-156011b1.js","assets/framework-b0c8e9b4.js"])),"v-a9f4e09e":y(()=>v(()=>import("./index.html-8dd5af49.js"),["assets/index.html-8dd5af49.js","assets/framework-b0c8e9b4.js"])),"v-c7db86c6":y(()=>v(()=>import("./index.html-15b17896.js"),["assets/index.html-15b17896.js","assets/framework-b0c8e9b4.js"])),"v-116a43a7":y(()=>v(()=>import("./index.html-3b74b9d3.js"),["assets/index.html-3b74b9d3.js","assets/framework-b0c8e9b4.js"])),"v-5cd3874e":y(()=>v(()=>import("./index.html-0467bdb7.js"),["assets/index.html-0467bdb7.js","assets/framework-b0c8e9b4.js"])),"v-65f3d995":y(()=>v(()=>import("./index.html-ca8bc5b2.js"),["assets/index.html-ca8bc5b2.js","assets/framework-b0c8e9b4.js"])),"v-7b320286":y(()=>v(()=>import("./index.html-0e2e2810.js"),["assets/index.html-0e2e2810.js","assets/framework-b0c8e9b4.js"])),"v-8848dfa8":y(()=>v(()=>import("./index.html-6e9f38a1.js"),["assets/index.html-6e9f38a1.js","assets/framework-b0c8e9b4.js"])),"v-2a4d47ed":y(()=>v(()=>import("./index.html-eaf05512.js"),["assets/index.html-eaf05512.js","assets/framework-b0c8e9b4.js"])),"v-06be9332":y(()=>v(()=>import("./index.html-0e5ebae5.js"),["assets/index.html-0e5ebae5.js","assets/framework-b0c8e9b4.js"])),"v-b30dba08":y(()=>v(()=>import("./index.html-9b54c8bc.js"),["assets/index.html-9b54c8bc.js","assets/framework-b0c8e9b4.js"])),"v-cf17f078":y(()=>v(()=>import("./index.html-55d5a387.js"),["assets/index.html-55d5a387.js","assets/framework-b0c8e9b4.js"])),"v-211f44ee":y(()=>v(()=>import("./index.html-2ded5fcc.js"),["assets/index.html-2ded5fcc.js","assets/framework-b0c8e9b4.js"])),"v-a920ffc4":y(()=>v(()=>import("./index.html-27206ba8.js"),["assets/index.html-27206ba8.js","assets/framework-b0c8e9b4.js"])),"v-1bee38ca":y(()=>v(()=>import("./index.html-1ddfa11b.js"),["assets/index.html-1ddfa11b.js","assets/framework-b0c8e9b4.js"])),"v-1ab7314a":y(()=>v(()=>import("./index.html-918320aa.js"),["assets/index.html-918320aa.js","assets/framework-b0c8e9b4.js"])),"v-0c74f160":y(()=>v(()=>import("./index.html-6be60705.js"),["assets/index.html-6be60705.js","assets/framework-b0c8e9b4.js"])),"v-b7d62b20":y(()=>v(()=>import("./index.html-c5405cca.js"),["assets/index.html-c5405cca.js","assets/framework-b0c8e9b4.js"])),"v-1c575968":y(()=>v(()=>import("./index.html-5aa6ab0d.js"),["assets/index.html-5aa6ab0d.js","assets/framework-b0c8e9b4.js"])),"v-a0ba2788":y(()=>v(()=>import("./index.html-66de5954.js"),["assets/index.html-66de5954.js","assets/framework-b0c8e9b4.js"])),"v-28a1d8bf":y(()=>v(()=>import("./index.html-ba0a70c5.js"),["assets/index.html-ba0a70c5.js","assets/framework-b0c8e9b4.js"])),"v-6a46ce40":y(()=>v(()=>import("./index.html-ee3aa8fc.js"),["assets/index.html-ee3aa8fc.js","assets/framework-b0c8e9b4.js"])),"v-3b5171b1":y(()=>v(()=>import("./index.html-1176db75.js"),["assets/index.html-1176db75.js","assets/framework-b0c8e9b4.js"])),"v-d6bd47b4":y(()=>v(()=>import("./index.html-3b7293f1.js"),["assets/index.html-3b7293f1.js","assets/framework-b0c8e9b4.js"])),"v-b308ce6a":y(()=>v(()=>import("./index.html-6b93bc40.js"),["assets/index.html-6b93bc40.js","assets/framework-b0c8e9b4.js"])),"v-0d1f4c3c":y(()=>v(()=>import("./index.html-7218f078.js"),["assets/index.html-7218f078.js","assets/framework-b0c8e9b4.js"])),"v-46b9d66c":y(()=>v(()=>import("./index.html-c4cf7373.js"),["assets/index.html-c4cf7373.js","assets/framework-b0c8e9b4.js"])),"v-89367940":y(()=>v(()=>import("./index.html-fb22c161.js"),["assets/index.html-fb22c161.js","assets/framework-b0c8e9b4.js"])),"v-eba48dea":y(()=>v(()=>import("./index.html-5f00ee75.js"),["assets/index.html-5f00ee75.js","assets/framework-b0c8e9b4.js"])),"v-3b1c4252":y(()=>v(()=>import("./index.html-d854b2be.js"),["assets/index.html-d854b2be.js","assets/framework-b0c8e9b4.js"]))};var Hl=Symbol(""),Jl=S(ql),pi=on({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),me=S(pi),B=()=>me,mi=Symbol(""),R=()=>{const e=F(mi);if(!e)throw new Error("usePageFrontmatter() is called without provider.");return e},bi=Symbol(""),Gl=()=>{const e=F(bi);if(!e)throw new Error("usePageHead() is called without provider.");return e},hi=Symbol(""),Ul=()=>{const e=F(hi);if(!e)throw new Error("usePageHeadTitle() is called without provider.");return e},gi=Symbol(""),dn=()=>{const e=F(gi);if(!e)throw new Error("usePageLang() is called without provider.");return e},fi=Symbol(""),Wl=()=>{const e=F(fi);if(!e)throw new Error("usePageLayout() is called without provider.");return e},Kn=Symbol(""),ie=()=>{const e=F(Kn);if(!e)throw new Error("useRouteLocale() is called without provider.");return e},Le=S(Fl),yi=()=>Le,ki=Symbol(""),ze=()=>{const e=F(ki);if(!e)throw new Error("useSiteLocaleData() is called without provider.");return e},Ql=Symbol(""),Kl="Layout",Yl="NotFound",oe=kl({resolveLayouts:e=>e.reduce((n,a)=>({...n,...a.layouts}),{}),resolvePageData:async e=>{const n=Jl.value[e];return await(n==null?void 0:n())??pi},resolvePageFrontmatter:e=>e.frontmatter,resolvePageHead:(e,n,a)=>{const i=W(n.description)?n.description:a.description,l=[...cn(n.head)?n.head:[],...a.head,["title",{},e],["meta",{name:"description",content:i}]];return El(l)},resolvePageHeadTitle:(e,n)=>[e.title,n.title].filter(a=>!!a).join(" | "),resolvePageLang:e=>e.lang||"en",resolvePageLayout:(e,n)=>{let a;if(e.path){const i=e.frontmatter.layout;W(i)?a=i:a=Kl}else a=Yl;return n[a]},resolveRouteLocale:(e,n)=>_l(e,n),resolveSiteLocaleData:(e,n)=>({...e,...e.locales[n]})}),vn=E({name:"ClientOnly",setup(e,n){const a=S(!1);return V(()=>{a.value=!0}),()=>{var i,l;return a.value?(l=(i=n.slots).default)==null?void 0:l.call(i):null}}}),Yn=E({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(e){const n=B(),a=b(()=>vi[e.pageKey||n.value.key]);return()=>a.value?t(a.value):t("div","404 Not Found")}}),X=(e={})=>e,J=e=>Me(e)?e:`/${ui(e)}`;const Xl={};var G=Uint8Array,ge=Uint16Array,Ei=Uint32Array,_i=new G([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),wi=new G([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Zl=new G([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Si=function(e,n){for(var a=new ge(31),i=0;i<31;++i)a[i]=n+=1<<e[i-1];for(var l=new Ei(a[30]),i=1;i<30;++i)for(var s=a[i];s<a[i+1];++s)l[s]=s-a[i]<<5|i;return[a,l]},Ai=Si(_i,2),xi=Ai[0],es=Ai[1];xi[28]=258,es[258]=28;var ns=Si(wi,0),as=ns[0],Mn=new ge(32768);for(var z=0;z<32768;++z){var ve=(z&43690)>>>1|(z&21845)<<1;ve=(ve&52428)>>>2|(ve&13107)<<2,ve=(ve&61680)>>>4|(ve&3855)<<4,Mn[z]=((ve&65280)>>>8|(ve&255)<<8)>>>1}var Re=function(e,n,a){for(var i=e.length,l=0,s=new ge(n);l<i;++l)e[l]&&++s[e[l]-1];var r=new ge(n);for(l=0;l<n;++l)r[l]=r[l-1]+s[l-1]<<1;var o;if(a){o=new ge(1<<n);var c=15-n;for(l=0;l<i;++l)if(e[l])for(var u=l<<4|e[l],d=n-e[l],p=r[e[l]-1]++<<d,m=p|(1<<d)-1;p<=m;++p)o[Mn[p]>>>c]=u}else for(o=new ge(i),l=0;l<i;++l)e[l]&&(o[l]=Mn[r[e[l]-1]++]>>>15-e[l]);return o},Ne=new G(288);for(var z=0;z<144;++z)Ne[z]=8;for(var z=144;z<256;++z)Ne[z]=9;for(var z=256;z<280;++z)Ne[z]=7;for(var z=280;z<288;++z)Ne[z]=8;var Ii=new G(32);for(var z=0;z<32;++z)Ii[z]=5;var is=Re(Ne,9,1),ts=Re(Ii,5,1),wn=function(e){for(var n=e[0],a=1;a<e.length;++a)e[a]>n&&(n=e[a]);return n},ne=function(e,n,a){var i=n/8|0;return(e[i]|e[i+1]<<8)>>(n&7)&a},Sn=function(e,n){var a=n/8|0;return(e[a]|e[a+1]<<8|e[a+2]<<16)>>(n&7)},ls=function(e){return(e+7)/8|0},Xn=function(e,n,a){(n==null||n<0)&&(n=0),(a==null||a>e.length)&&(a=e.length);var i=new(e.BYTES_PER_ELEMENT==2?ge:e.BYTES_PER_ELEMENT==4?Ei:G)(a-n);return i.set(e.subarray(n,a)),i},ss=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ae=function(e,n,a){var i=new Error(n||ss[e]);if(i.code=e,Error.captureStackTrace&&Error.captureStackTrace(i,ae),!a)throw i;return i},rs=function(e,n,a){var i=e.length;if(!i||a&&a.f&&!a.l)return n||new G(0);var l=!n||a,s=!a||a.i;a||(a={}),n||(n=new G(i*3));var r=function(ka){var Ea=n.length;if(ka>Ea){var _a=new G(Math.max(Ea*2,ka));_a.set(n),n=_a}},o=a.f||0,c=a.p||0,u=a.b||0,d=a.l,p=a.d,m=a.m,h=a.n,g=i*8;do{if(!d){o=ne(e,c,1);var _=ne(e,c+1,3);if(c+=3,_)if(_==1)d=is,p=ts,m=9,h=5;else if(_==2){var A=ne(e,c,31)+257,T=ne(e,c+10,15)+4,M=A+ne(e,c+5,31)+1;c+=14;for(var C=new G(M),x=new G(19),I=0;I<T;++I)x[Zl[I]]=ne(e,c+I*3,7);c+=T*3;for(var N=wn(x),re=(1<<N)-1,gl=Re(x,N,1),I=0;I<M;){var ha=gl[ne(e,c,re)];c+=ha&15;var f=ha>>>4;if(f<16)C[I++]=f;else{var we=0,Ze=0;for(f==16?(Ze=3+ne(e,c,3),c+=2,we=C[I-1]):f==17?(Ze=3+ne(e,c,7),c+=3):f==18&&(Ze=11+ne(e,c,127),c+=7);Ze--;)C[I++]=we}}var ga=C.subarray(0,A),de=C.subarray(A);m=wn(ga),h=wn(de),d=Re(ga,m,1),p=Re(de,h,1)}else ae(1);else{var f=ls(c)+4,w=e[f-4]|e[f-3]<<8,k=f+w;if(k>i){s&&ae(0);break}l&&r(u+w),n.set(e.subarray(f,k),u),a.b=u+=w,a.p=c=k*8,a.f=o;continue}if(c>g){s&&ae(0);break}}l&&r(u+131072);for(var fl=(1<<m)-1,yl=(1<<h)-1,kn=c;;kn=c){var we=d[Sn(e,c)&fl],Se=we>>>4;if(c+=we&15,c>g){s&&ae(0);break}if(we||ae(2),Se<256)n[u++]=Se;else if(Se==256){kn=c,d=null;break}else{var fa=Se-254;if(Se>264){var I=Se-257,Oe=_i[I];fa=ne(e,c,(1<<Oe)-1)+xi[I],c+=Oe}var En=p[Sn(e,c)&yl],_n=En>>>4;En||ae(3),c+=En&15;var de=as[_n];if(_n>3){var Oe=wi[_n];de+=Sn(e,c)&(1<<Oe)-1,c+=Oe}if(c>g){s&&ae(0);break}l&&r(u+131072);for(var ya=u+fa;u<ya;u+=4)n[u]=n[u-de],n[u+1]=n[u+1-de],n[u+2]=n[u+2-de],n[u+3]=n[u+3-de];u=ya}}a.l=d,a.p=kn,a.b=u,a.f=o,d&&(o=1,a.m=m,a.d=p,a.n=h)}while(!o);return u==n.length?n:Xn(n,0,u)},os=new G(0),cs=function(e){((e[0]&15)!=8||e[0]>>>4>7||(e[0]<<8|e[1])%31)&&ae(6,"invalid zlib data"),e[1]&32&&ae(6,"invalid zlib data: preset dictionaries not supported")};function us(e,n){return rs((cs(e),e.subarray(2,-4)),n)}var xa=typeof TextEncoder<"u"&&new TextEncoder,Bn=typeof TextDecoder<"u"&&new TextDecoder,ds=0;try{Bn.decode(os,{stream:!0}),ds=1}catch{}var vs=function(e){for(var n="",a=0;;){var i=e[a++],l=(i>127)+(i>223)+(i>239);if(a+l>e.length)return[n,Xn(e,a-1)];l?l==3?(i=((i&15)<<18|(e[a++]&63)<<12|(e[a++]&63)<<6|e[a++]&63)-65536,n+=String.fromCharCode(55296|i>>10,56320|i&1023)):l&1?n+=String.fromCharCode((i&31)<<6|e[a++]&63):n+=String.fromCharCode((i&15)<<12|(e[a++]&63)<<6|e[a++]&63):n+=String.fromCharCode(i)}};function ps(e,n){if(n){for(var a=new G(e.length),i=0;i<e.length;++i)a[i]=e.charCodeAt(i);return a}if(xa)return xa.encode(e);for(var l=e.length,s=new G(e.length+(e.length>>1)),r=0,o=function(d){s[r++]=d},i=0;i<l;++i){if(r+5>s.length){var c=new G(r+8+(l-i<<1));c.set(s),s=c}var u=e.charCodeAt(i);u<128||n?o(u):u<2048?(o(192|u>>6),o(128|u&63)):u>55295&&u<57344?(u=65536+(u&1023<<10)|e.charCodeAt(++i)&1023,o(240|u>>18),o(128|u>>12&63),o(128|u>>6&63),o(128|u&63)):(o(224|u>>12),o(128|u>>6&63),o(128|u&63))}return Xn(s,0,r)}function ms(e,n){if(n){for(var a="",i=0;i<e.length;i+=16384)a+=String.fromCharCode.apply(null,e.subarray(i,i+16384));return a}else{if(Bn)return Bn.decode(e);var l=vs(e),s=l[0],r=l[1];return r.length&&ae(8),s}}const L=({name:e="",color:n="currentColor"},{slots:a})=>{var i;return t("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${e}-icon`],viewBox:"0 0 1024 1024",fill:n,"aria-label":`${e} icon`},(i=a.default)==null?void 0:i.call(a))};L.displayName="IconBase";const pn=({size:e=48,stroke:n=4,wrapper:a=!0,height:i=2*e})=>{const l=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[t("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),t("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round"},[t("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),t("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return a?t("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${i}px`},l):l};pn.displayName="LoadingIcon";const Li=(e,{slots:n})=>{var a;return((a=n.default)==null?void 0:a.call(n))||null},Ti=()=>t(L,{name:"github"},()=>t("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));Ti.displayName="GitHubIcon";const Ci=()=>t(L,{name:"gitlab"},()=>t("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));Ci.displayName="GitLabIcon";const Di=()=>t(L,{name:"gitee"},()=>t("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));Di.displayName="GiteeIcon";const Mi=()=>t(L,{name:"bitbucket"},()=>t("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));Mi.displayName="BitbucketIcon";const Bi=()=>t(L,{name:"source"},()=>t("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));Bi.displayName="SourceIcon";const Pi=Array.isArray,bs=e=>typeof e=="function",hs=e=>typeof e=="string";var Oi=e=>/^(https?:)?\/\//.test(e),Ri=e=>Object.prototype.toString.call(e)==="[object Object]";const ce=(e,n)=>{const a=n?n._instance:Un();return Ri(a==null?void 0:a.appContext.components)&&(e in a.appContext.components||wa(e)in a.appContext.components||wl(wa(e))in a.appContext.components)},ke=e=>typeof e=="string";function gs(e){return e}function fs(e,n=!0){Un()?V(e):n?e():Be(e)}function ys(e,n=!1){const a=S(),i=()=>a.value=!!e();return i(),fs(i,n),a}const Ia=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},La="__vueuse_ssr_handlers__";Ia[La]=Ia[La]||{};var Ta;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ta||(Ta={}));var ks=Object.defineProperty,Ca=Object.getOwnPropertySymbols,Es=Object.prototype.hasOwnProperty,_s=Object.prototype.propertyIsEnumerable,Da=(e,n,a)=>n in e?ks(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,ws=(e,n)=>{for(var a in n||(n={}))Es.call(n,a)&&Da(e,a,n[a]);if(Ca)for(var a of Ca(n))_s.call(n,a)&&Da(e,a,n[a]);return e};const Ss={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ws({linear:gs},Ss);const As=()=>ys(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),xs=()=>{const e=As();return b(()=>e.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},Ee=e=>{const n=ie();return b(()=>e[n.value])},Zn=(e="")=>{if(e){if(typeof e=="number")return new Date(e);const n=Date.parse(e.toString());if(!Number.isNaN(n))return new Date(n)}return null},mn=(e,n)=>{let a=1;for(let i=0;i<e.length;i++)a+=e.charCodeAt(i),a+=a<<10,a^=a>>6;return a+=a<<3,a^=a>>11,a%n},Ce=(e,n)=>ke(e)&&e.startsWith(n),Ae=(e,n)=>ke(e)&&e.endsWith(n),qe=Object.entries,Z=Object.keys,Ma=e=>Ri(e)&&ke(e.name),$e=(e,n=!1)=>e?Pi(e)?e.map(a=>ke(a)?{name:a}:Ma(a)?a:null).filter(a=>a!==null):ke(e)?[{name:e}]:Ma(e)?[e]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${n?"":"| false"} | undefined\`, but got`,e),[]):[],Vi=(e,n)=>{if(e){if(Pi(e)&&e.every(ke))return e;if(ke(e))return[e];console.error(`Expect ${n||"value"} to be \`string[] | string | undefined\`, but got`,e)}return[]},$i=e=>Vi(e,"category"),ji=e=>Vi(e,"tag"),bn=e=>Ce(e,"/");let Is=class{constructor(){this.messageElements={};const n="message-container",a=document.getElementById(n);a?this.containerElement=a:(this.containerElement=document.createElement("div"),this.containerElement.id=n,document.body.appendChild(this.containerElement))}pop(n,a=2e3){const i=document.createElement("div"),l=Date.now();return i.className="message move-in",i.innerHTML=n,this.containerElement.appendChild(i),this.messageElements[l]=i,a>0&&setTimeout(()=>{this.close(l)},a),l}close(n){if(n){const a=this.messageElements[n];a.classList.remove("move-in"),a.classList.add("move-out"),a.addEventListener("animationend",()=>{a.remove(),delete this.messageElements[n]})}else Z(this.messageElements).forEach(a=>this.close(Number(a)))}destroy(){document.body.removeChild(this.containerElement)}};const zi=/#.*$/u,Ls=e=>{const n=zi.exec(e);return n?n[0]:""},Ba=e=>decodeURI(e).replace(zi,"").replace(/(index)?\.(md|html)$/,""),ea=(e,n)=>{if(n===void 0)return!1;const a=Ba(e.path),i=Ba(n),l=Ls(n);return l?l===e.hash&&(!i||a===i):a===i},Ni=e=>{const n=atob(e);return ms(us(ps(n,!0)))},Ts=e=>Oi(e)?e:`https://github.com/${e}`,qi=e=>!Oi(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,Fe=(e,...n)=>{const a=e.resolve(...n),i=a.matched[a.matched.length-1];if(!(i!=null&&i.redirect))return a;const{redirect:l}=i,s=bs(l)?l(a):l,r=hs(s)?{path:s}:s;return Fe(e,{hash:a.hash,query:a.query,params:a.params,...r})};var Pa;const He=typeof window<"u",Cs=e=>typeof e=="function",Ds=e=>typeof e=="string",ln=()=>{},Pn=He&&((Pa=window==null?void 0:window.navigator)==null?void 0:Pa.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function se(e){return typeof e=="function"?e():Sl(e)}function Fi(e,n){function a(...i){return new Promise((l,s)=>{Promise.resolve(e(()=>n.apply(this,i),{fn:n,thisArg:this,args:i})).then(l).catch(s)})}return a}const Hi=e=>e();function Ms(e,n=!0,a=!0,i=!1){let l=0,s,r=!0,o=ln,c;const u=()=>{s&&(clearTimeout(s),s=void 0,o(),o=ln)};return p=>{const m=se(e),h=Date.now()-l,g=()=>c=p();return u(),m<=0?(l=Date.now(),g()):(h>m&&(a||!r)?(l=Date.now(),g()):n&&(c=new Promise((_,f)=>{o=i?f:_,s=setTimeout(()=>{l=Date.now(),r=!0,_(g()),u()},Math.max(0,m-h))})),!a&&!s&&(s=setTimeout(()=>r=!0,m)),r=!1,c)}}function Bs(e=Hi){const n=S(!0);function a(){n.value=!1}function i(){n.value=!0}const l=(...s)=>{n.value&&e(...s)};return{isActive:on(n),pause:a,resume:i,eventFilter:l}}function Ps(e){return e}function _e(e){return xl()?(Il(e),!0):!1}function Os(e,n=200,a=!1,i=!0,l=!1){return Fi(Ms(n,a,i,l),e)}function Ji(e){return typeof e=="function"?b(e):S(e)}function Gi(e,n=!0){Un()?V(e):n?e():Be(e)}function Rs(e,n,a={}){const{immediate:i=!0}=a,l=S(!1);let s=null;function r(){s&&(clearTimeout(s),s=null)}function o(){l.value=!1,r()}function c(...u){r(),l.value=!0,s=setTimeout(()=>{l.value=!1,s=null,e(...u)},se(n))}return i&&(l.value=!0,He&&c()),_e(o),{isPending:on(l),start:c,stop:o}}function Oa(e=!1,n={}){const{truthyValue:a=!0,falsyValue:i=!1}=n,l=Al(e),s=S(e);function r(o){if(arguments.length)return s.value=o,s.value;{const c=se(a);return s.value=s.value===c?se(i):c,s.value}}return l?r:[s,r]}var Ra=Object.getOwnPropertySymbols,Vs=Object.prototype.hasOwnProperty,$s=Object.prototype.propertyIsEnumerable,js=(e,n)=>{var a={};for(var i in e)Vs.call(e,i)&&n.indexOf(i)<0&&(a[i]=e[i]);if(e!=null&&Ra)for(var i of Ra(e))n.indexOf(i)<0&&$s.call(e,i)&&(a[i]=e[i]);return a};function zs(e,n,a={}){const i=a,{eventFilter:l=Hi}=i,s=js(i,["eventFilter"]);return j(e,Fi(l,n),s)}var Ns=Object.defineProperty,qs=Object.defineProperties,Fs=Object.getOwnPropertyDescriptors,sn=Object.getOwnPropertySymbols,Ui=Object.prototype.hasOwnProperty,Wi=Object.prototype.propertyIsEnumerable,Va=(e,n,a)=>n in e?Ns(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,Hs=(e,n)=>{for(var a in n||(n={}))Ui.call(n,a)&&Va(e,a,n[a]);if(sn)for(var a of sn(n))Wi.call(n,a)&&Va(e,a,n[a]);return e},Js=(e,n)=>qs(e,Fs(n)),Gs=(e,n)=>{var a={};for(var i in e)Ui.call(e,i)&&n.indexOf(i)<0&&(a[i]=e[i]);if(e!=null&&sn)for(var i of sn(e))n.indexOf(i)<0&&Wi.call(e,i)&&(a[i]=e[i]);return a};function Us(e,n,a={}){const i=a,{eventFilter:l}=i,s=Gs(i,["eventFilter"]),{eventFilter:r,pause:o,resume:c,isActive:u}=Bs(l);return{stop:zs(e,n,Js(Hs({},s),{eventFilter:r})),pause:o,resume:c,isActive:u}}function fe(e){var n;const a=se(e);return(n=a==null?void 0:a.$el)!=null?n:a}const be=He?window:void 0,Qi=He?window.document:void 0,Ws=He?window.navigator:void 0;function H(...e){let n,a,i,l;if(Ds(e[0])||Array.isArray(e[0])?([a,i,l]=e,n=be):[n,a,i,l]=e,!n)return ln;Array.isArray(a)||(a=[a]),Array.isArray(i)||(i=[i]);const s=[],r=()=>{s.forEach(d=>d()),s.length=0},o=(d,p,m,h)=>(d.addEventListener(p,m,h),()=>d.removeEventListener(p,m,h)),c=j(()=>[fe(n),se(l)],([d,p])=>{r(),d&&s.push(...a.flatMap(m=>i.map(h=>o(d,m,h,p))))},{immediate:!0,flush:"post"}),u=()=>{c(),r()};return _e(u),u}let $a=!1;function Qs(e,n,a={}){const{window:i=be,ignore:l=[],capture:s=!0,detectIframe:r=!1}=a;if(!i)return;Pn&&!$a&&($a=!0,Array.from(i.document.body.children).forEach(m=>m.addEventListener("click",ln)));let o=!0;const c=m=>l.some(h=>{if(typeof h=="string")return Array.from(i.document.querySelectorAll(h)).some(g=>g===m.target||m.composedPath().includes(g));{const g=fe(h);return g&&(m.target===g||m.composedPath().includes(g))}}),d=[H(i,"click",m=>{const h=fe(e);if(!(!h||h===m.target||m.composedPath().includes(h))){if(m.detail===0&&(o=!c(m)),!o){o=!0;return}n(m)}},{passive:!0,capture:s}),H(i,"pointerdown",m=>{const h=fe(e);h&&(o=!m.composedPath().includes(h)&&!c(m))},{passive:!0}),r&&H(i,"blur",m=>{var h;const g=fe(e);((h=i.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(g!=null&&g.contains(i.document.activeElement))&&n(m)})].filter(Boolean);return()=>d.forEach(m=>m())}function hn(e,n=!1){const a=S(),i=()=>a.value=Boolean(e());return i(),Gi(i,n),a}function Ks(e,n={}){const{window:a=be}=n,i=hn(()=>a&&"matchMedia"in a&&typeof a.matchMedia=="function");let l;const s=S(!1),r=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",o):l.removeListener(o))},o=()=>{i.value&&(r(),l=a.matchMedia(Ji(e).value),s.value=l.matches,"addEventListener"in l?l.addEventListener("change",o):l.addListener(o))};return Tl(o),_e(()=>r()),s}function Ys(e={}){const{navigator:n=Ws,read:a=!1,source:i,copiedDuring:l=1500,legacy:s=!1}=e,r=["copy","cut"],o=hn(()=>n&&"clipboard"in n),c=b(()=>o.value||s),u=S(""),d=S(!1),p=Rs(()=>d.value=!1,l);function m(){o.value?n.clipboard.readText().then(f=>{u.value=f}):u.value=_()}if(c.value&&a)for(const f of r)H(f,m);async function h(f=se(i)){c.value&&f!=null&&(o.value?await n.clipboard.writeText(f):g(f),u.value=f,d.value=!0,p.start())}function g(f){const w=document.createElement("textarea");w.value=f??"",w.style.position="absolute",w.style.opacity="0",document.body.appendChild(w),w.select(),document.execCommand("copy"),w.remove()}function _(){var f,w,k;return(k=(w=(f=document==null?void 0:document.getSelection)==null?void 0:f.call(document))==null?void 0:w.toString())!=null?k:""}return{isSupported:c,text:u,copied:d,copy:h}}const On=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Rn="__vueuse_ssr_handlers__";On[Rn]=On[Rn]||{};const Xs=On[Rn];function Zs(e,n){return Xs[e]||n}function er(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var nr=Object.defineProperty,ja=Object.getOwnPropertySymbols,ar=Object.prototype.hasOwnProperty,ir=Object.prototype.propertyIsEnumerable,za=(e,n,a)=>n in e?nr(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,Na=(e,n)=>{for(var a in n||(n={}))ar.call(n,a)&&za(e,a,n[a]);if(ja)for(var a of ja(n))ir.call(n,a)&&za(e,a,n[a]);return e};const tr={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},qa="vueuse-storage";function Je(e,n,a,i={}){var l;const{flush:s="pre",deep:r=!0,listenToStorageChanges:o=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:p=be,eventFilter:m,onError:h=I=>{console.error(I)}}=i,g=(d?Ll:S)(n);if(!a)try{a=Zs("getDefaultStorage",()=>{var I;return(I=be)==null?void 0:I.localStorage})()}catch(I){h(I)}if(!a)return g;const _=se(n),f=er(_),w=(l=i.serializer)!=null?l:tr[f],{pause:k,resume:A}=Us(g,()=>T(g.value),{flush:s,deep:r,eventFilter:m});return p&&o&&(H(p,"storage",x),H(p,qa,C)),x(),g;function T(I){try{if(I==null)a.removeItem(e);else{const N=w.write(I),re=a.getItem(e);re!==N&&(a.setItem(e,N),p&&p.dispatchEvent(new CustomEvent(qa,{detail:{key:e,oldValue:re,newValue:N,storageArea:a}})))}}catch(N){h(N)}}function M(I){const N=I?I.newValue:a.getItem(e);if(N==null)return c&&_!==null&&a.setItem(e,w.write(_)),_;if(!I&&u){const re=w.read(N);return Cs(u)?u(re,_):f==="object"&&!Array.isArray(re)?Na(Na({},_),re):re}else return typeof N!="string"?N:w.read(N)}function C(I){x(I.detail)}function x(I){if(!(I&&I.storageArea!==a)){if(I&&I.key==null){g.value=_;return}if(!(I&&I.key!==e)){k();try{g.value=M(I)}catch(N){h(N)}finally{I?Be(A):A()}}}}}function lr(e){return Ks("(prefers-color-scheme: dark)",e)}const Fa=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function na(e,n={}){const{document:a=Qi,autoExit:i=!1}=n,l=e||(a==null?void 0:a.querySelector("html")),s=S(!1);let r=Fa[0];const o=hn(()=>{if(a){for(const _ of Fa)if(_[1]in a)return r=_,!0}else return!1;return!1}),[c,u,d,,p]=r;async function m(){o.value&&(a!=null&&a[d]&&await a[u](),s.value=!1)}async function h(){if(!o.value)return;await m();const _=fe(l);_&&(await _[c](),s.value=!0)}async function g(){s.value?await m():await h()}return a&&H(a,p,()=>{s.value=!!(a!=null&&a[d])},!1),i&&_e(m),{isSupported:o,isFullscreen:s,enter:h,exit:m,toggle:g}}var Ha=Object.getOwnPropertySymbols,sr=Object.prototype.hasOwnProperty,rr=Object.prototype.propertyIsEnumerable,or=(e,n)=>{var a={};for(var i in e)sr.call(e,i)&&n.indexOf(i)<0&&(a[i]=e[i]);if(e!=null&&Ha)for(var i of Ha(e))n.indexOf(i)<0&&rr.call(e,i)&&(a[i]=e[i]);return a};function Ki(e,n,a={}){const i=a,{window:l=be}=i,s=or(i,["window"]);let r;const o=hn(()=>l&&"MutationObserver"in l),c=()=>{r&&(r.disconnect(),r=void 0)},u=j(()=>fe(e),p=>{c(),o.value&&l&&p&&(r=new MutationObserver(n),r.observe(p,s))},{immediate:!0}),d=()=>{c(),u()};return _e(d),{isSupported:o,stop:d}}var Ja;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ja||(Ja={}));function Yi(e){const n=window.getComputedStyle(e);if(n.overflowX==="scroll"||n.overflowY==="scroll"||n.overflowX==="auto"&&e.clientHeight<e.scrollHeight||n.overflowY==="auto"&&e.clientWidth<e.scrollWidth)return!0;{const a=e.parentNode;return!a||a.tagName==="BODY"?!1:Yi(a)}}function cr(e){const n=e||window.event,a=n.target;return Yi(a)?!1:n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)}function Xi(e,n=!1){const a=S(n);let i=null,l;j(Ji(e),o=>{if(o){const c=o;l=c.style.overflow,a.value&&(c.style.overflow="hidden")}},{immediate:!0});const s=()=>{const o=se(e);!o||a.value||(Pn&&(i=H(o,"touchmove",c=>{cr(c)},{passive:!1})),o.style.overflow="hidden",a.value=!0)},r=()=>{const o=se(e);!o||!a.value||(Pn&&(i==null||i()),o.style.overflow=l,a.value=!1)};return _e(r),b({get(){return a.value},set(o){o?s():r()}})}function Zi(e,n,a={}){const{window:i=be}=a;return Je(e,n,i==null?void 0:i.sessionStorage,a)}let ur=0;function dr(e,n={}){const a=S(!1),{document:i=Qi,immediate:l=!0,manual:s=!1,id:r=`vueuse_styletag_${++ur}`}=n,o=S(e);let c=()=>{};const u=()=>{if(!i)return;const p=i.getElementById(r)||i.createElement("style");p.isConnected||(p.type="text/css",p.id=r,n.media&&(p.media=n.media),i.head.appendChild(p)),!a.value&&(c=j(o,m=>{p.textContent=m},{immediate:!0}),a.value=!0)},d=()=>{!i||!a.value||(c(),i.head.removeChild(i.getElementById(r)),a.value=!1)};return l&&!s&&Gi(u),s||_e(d),{id:r,css:o,unload:d,load:u,isLoaded:on(a)}}var vr=Object.defineProperty,Ga=Object.getOwnPropertySymbols,pr=Object.prototype.hasOwnProperty,mr=Object.prototype.propertyIsEnumerable,Ua=(e,n,a)=>n in e?vr(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,br=(e,n)=>{for(var a in n||(n={}))pr.call(n,a)&&Ua(e,a,n[a]);if(Ga)for(var a of Ga(n))mr.call(n,a)&&Ua(e,a,n[a]);return e};const hr={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};br({linear:Ps},hr);function gr({window:e=be}={}){if(!e)return{x:S(0),y:S(0)};const n=S(e.scrollX),a=S(e.scrollY);return H(e,"scroll",()=>{n.value=e.scrollX,a.value=e.scrollY},{capture:!1,passive:!0}),{x:n,y:a}}const et=({type:e="info",text:n="",vertical:a="top",color:i},{slots:l})=>{var s;return t("span",{class:["badge",e,{diy:i}],style:{verticalAlign:a,...i?{backgroundColor:i}:{}}},n||((s=l.default)==null?void 0:s.call(l)))};et.displayName="Badge";var fr=E({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(e){const n=b(()=>{const i=["font-icon icon"],l=`iconfont icon-${e.icon}`;return i.push(l),i}),a=b(()=>{const i={};return e.color&&(i.color=e.color),e.size&&(i["font-size"]=Number.isNaN(Number(e.size))?e.size:`${e.size}px`),Z(i).length?i:null});return()=>e.icon?t("span",{key:e.icon,class:n.value,style:a.value}):null}});const nt=()=>t(L,{name:"back-to-top"},()=>[t("path",{d:"M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"}),t("path",{d:"m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"})]);nt.displayName="BackToTopIcon";var yr=E({name:"BackToTop",props:{threshold:{type:Number,default:300}},setup(e){const n=R(),a=Ee({"/":{backToTop:"返回顶部"}}),{y:i}=gr(),l=b(()=>n.value.backToTop!==!1&&i.value>e.threshold);return()=>t(ye,{name:"fade"},()=>l.value?t("button",{type:"button",class:"back-to-top","aria-label":a.value.backToTop,"data-balloon-pos":"left",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},t(nt)):null)}});const kr=X({enhance:({app:e})=>{ce("Badge")||e.component("Badge",et),ce("FontIcon")||e.component("FontIcon",fr)},setup:()=>{dr(`  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `)},rootComponents:[()=>t(yr,{threshold:300})]});function at(e,n,a){var i,l,s;n===void 0&&(n=50),a===void 0&&(a={});var r=(i=a.isImmediate)!=null&&i,o=(l=a.callback)!=null&&l,c=a.maxWait,u=Date.now(),d=[];function p(){if(c!==void 0){var h=Date.now()-u;if(h+n>=c)return c-h}return n}var m=function(){var h=[].slice.call(arguments),g=this;return new Promise(function(_,f){var w=r&&s===void 0;if(s!==void 0&&clearTimeout(s),s=setTimeout(function(){if(s=void 0,u=Date.now(),!r){var A=e.apply(g,h);o&&o(A),d.forEach(function(T){return(0,T.resolve)(A)}),d=[]}},p()),w){var k=e.apply(g,h);return o&&o(k),_(k)}d.push({resolve:_,reject:f})})};return m.cancel=function(h){s!==void 0&&clearTimeout(s),d.forEach(function(g){return(0,g.reject)(h)}),d=[]},m}const Er=({headerLinkSelector:e,headerAnchorSelector:n,delay:a,offset:i=5})=>{const l=U(),r=at(()=>{var _,f;const o=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(o-0)<i){Wa(l,"");return}const u=window.innerHeight+o,d=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),p=Math.abs(d-u)<i,m=Array.from(document.querySelectorAll(e)),g=Array.from(document.querySelectorAll(n)).filter(w=>m.some(k=>k.hash===w.hash));for(let w=0;w<g.length;w++){const k=g[w],A=g[w+1],T=o>=(((_=k.parentElement)==null?void 0:_.offsetTop)??0)-i,M=!A||o<(((f=A.parentElement)==null?void 0:f.offsetTop)??0)-i;if(!(T&&M))continue;const x=decodeURIComponent(l.currentRoute.value.hash),I=decodeURIComponent(k.hash);if(x===I)return;if(p){for(let N=w+1;N<g.length;N++)if(x===decodeURIComponent(g[N].hash))return}Wa(l,I);return}},a);V(()=>{window.addEventListener("scroll",r)}),Cl(()=>{window.removeEventListener("scroll",r)})},Wa=async(e,n)=>{const{scrollBehavior:a}=e.options;e.options.scrollBehavior=void 0,await e.replace({query:e.currentRoute.value.query,hash:n,force:!0}).finally(()=>e.options.scrollBehavior=a)},_r=".sidebar-link, .toc-link",wr=".header-anchor",Sr=200,Ar=5,xr=X({setup(){Er({headerLinkSelector:_r,headerAnchorSelector:wr,delay:Sr,offset:Ar})}});var Ir=E({name:"AutoCatalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean},setup(e,{slots:n}){const a=Ee({"/":{title:"目录"}}),i=B(),l=U(),s=yi(),r=u=>{const d=u.I;return typeof d>"u"||d},o=()=>{const u=e.base||i.value.path.replace(/\/[^/]+$/,"/"),d=l.getRoutes(),p=[];return d.filter(({meta:m,path:h})=>{if(!Ce(h,u)||h===u)return!1;if(u==="/"){const g=Z(s.value.locales).filter(_=>_!=="/");if(h==="/404.html"||g.some(_=>Ce(h,_)))return!1}return(Ae(h,".html")&&!Ae(h,"/index.html")||Ae(h,"/"))&&r(m)}).map(({path:m,meta:h})=>{const g=m.substring(u.length).split("/").length;return{title:h.t||"",icon:h.i,base:m.replace(/\/[^/]+\/?$/,"/"),order:h.O||null,level:Ae(m,"/")?g-1:g,path:m}}).filter(({title:m,level:h})=>typeof m=="string"&&m&&h<=e.level).sort(({title:m,level:h,path:g,order:_},{title:f,level:w,path:k,order:A})=>h-w||(Ae(g,"/index.html")?-1:Ae(k,"/index.html")?1:_===null?A===null?m.localeCompare(f):A:A===null?_:_>0?A>0?_-A:-1:A<0?_-A:1)).forEach(m=>{var h;const{base:g,level:_}=m;switch(_){case 1:p.push(m);break;case 2:{const f=p.find(w=>w.path===g);f&&(f.children??(f.children=[])).push(m);break}default:{const f=p.find(w=>w.path===g.replace(/\/[^/]+\/$/,"/"));if(f){const w=(h=f.children)==null?void 0:h.find(k=>k.path===g);w&&(w.children??(w.children=[])).push(m)}}}}),p},c=b(()=>o());return()=>t("div",{class:"auto-catalog-wrapper"},[t("h2",{class:"main-title"},a.value.title),c.value.map(({children:u=[],icon:d,path:p,title:m},h)=>[t("h3",{id:m,class:["child-title",{"has-children":u.length}]},[t("a",{href:`#${m}`,class:"header-anchor"},"#"),t(q,{class:"catalog-title",to:p},()=>[e.index?`${h+1}.`:null,d&&n.icon?n.icon({icon:d}):null,m||"Unknown"])]),u.length?t("ul",{class:"child-catalog-wrapper"},u.map(({children:g=[],icon:_,path:f,title:w},k)=>t("li",{class:"child-catalog-item"},[t("div",{class:["sub-title",{"has-children":g.length}]},[t("a",{href:`#${w}`,class:"header-anchor"},"#"),t(q,{class:"catalog-title",to:f},()=>[e.index?`${h+1}.${k+1}`:null,_&&n.icon?n.icon({icon:_}):null,w||"Unknown"])]),g.length?t("div",{class:"sub-catalog-wrapper"},g.map(({icon:A,path:T,title:M},C)=>t(q,{class:"sub-catalog-item",to:T},()=>[e.index?`${h+1}.${k+1}.${C+1}`:null,A&&n.icon?n.icon({icon:A}):null,M||"Unknown"]))):null]))):null])])}}),Lr=X({enhance:({app:e})=>{ce("AutoCatalog",e)||e.component("AutoCatalog",n=>t(Ir,n,{icon:({icon:a})=>t(Q("HopeIcon"),{icon:a})}))}});const Tr=t("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[t("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),t("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),it=E({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(e){const n=ie(),a=b(()=>e.locales[n.value]??{openInNewWindow:"open in new window"});return()=>t("span",[Tr,t("span",{class:"external-link-icon-sr-only"},a.value.openInNewWindow)])}}),Cr={},Dr=X({enhance({app:e}){e.component("ExternalLinkIcon",t(it,{locales:Cr}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const P={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:e=>{const n=P.isStarted();e=An(e,P.settings.minimum,1),P.status=e===1?null:e;const a=P.render(!n),i=a.querySelector(P.settings.barSelector),l=P.settings.speed,s=P.settings.easing;return a.offsetWidth,Mr(r=>{en(i,{transform:"translate3d("+Qa(e)+"%,0,0)",transition:"all "+l+"ms "+s}),e===1?(en(a,{transition:"none",opacity:"1"}),a.offsetWidth,setTimeout(function(){en(a,{transition:"all "+l+"ms linear",opacity:"0"}),setTimeout(function(){P.remove(),r()},l)},l)):setTimeout(()=>r(),l)}),P},isStarted:()=>typeof P.status=="number",start:()=>{P.status||P.set(0);const e=()=>{setTimeout(()=>{P.status&&(P.trickle(),e())},P.settings.trickleSpeed)};return P.settings.trickle&&e(),P},done:e=>!e&&!P.status?P:P.inc(.3+.5*Math.random()).set(1),inc:e=>{let n=P.status;return n?(typeof e!="number"&&(e=(1-n)*An(Math.random()*n,.1,.95)),n=An(n+e,0,.994),P.set(n)):P.start()},trickle:()=>P.inc(Math.random()*P.settings.trickleRate),render:e=>{if(P.isRendered())return document.getElementById("nprogress");Ka(document.documentElement,"nprogress-busy");const n=document.createElement("div");n.id="nprogress",n.innerHTML=P.settings.template;const a=n.querySelector(P.settings.barSelector),i=e?"-100":Qa(P.status||0),l=document.querySelector(P.settings.parent);return en(a,{transition:"all 0 linear",transform:"translate3d("+i+"%,0,0)"}),l!==document.body&&Ka(l,"nprogress-custom-parent"),l==null||l.appendChild(n),n},remove:()=>{Ya(document.documentElement,"nprogress-busy"),Ya(document.querySelector(P.settings.parent),"nprogress-custom-parent");const e=document.getElementById("nprogress");e&&Br(e)},isRendered:()=>!!document.getElementById("nprogress")},An=(e,n,a)=>e<n?n:e>a?a:e,Qa=e=>(-1+e)*100,Mr=function(){const e=[];function n(){const a=e.shift();a&&a(n)}return function(a){e.push(a),e.length===1&&n()}}(),en=function(){const e=["Webkit","O","Moz","ms"],n={};function a(r){return r.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(o,c){return c.toUpperCase()})}function i(r){const o=document.body.style;if(r in o)return r;let c=e.length;const u=r.charAt(0).toUpperCase()+r.slice(1);let d;for(;c--;)if(d=e[c]+u,d in o)return d;return r}function l(r){return r=a(r),n[r]||(n[r]=i(r))}function s(r,o,c){o=l(o),r.style[o]=c}return function(r,o){for(const c in o){const u=o[c];u!==void 0&&Object.prototype.hasOwnProperty.call(o,c)&&s(r,c,u)}}}(),tt=(e,n)=>(typeof e=="string"?e:aa(e)).indexOf(" "+n+" ")>=0,Ka=(e,n)=>{const a=aa(e),i=a+n;tt(a,n)||(e.className=i.substring(1))},Ya=(e,n)=>{const a=aa(e);if(!tt(e,n))return;const i=a.replace(" "+n+" "," ");e.className=i.substring(1,i.length-1)},aa=e=>(" "+(e.className||"")+" ").replace(/\s+/gi," "),Br=e=>{e&&e.parentNode&&e.parentNode.removeChild(e)};const Pr=()=>{V(()=>{const e=U(),n=new Set;n.add(e.currentRoute.value.path),e.beforeEach(a=>{n.has(a.path)||P.start()}),e.afterEach(a=>{n.add(a.path),P.done()})})},Or=X({setup(){Pr()}}),Rr=JSON.parse('{"encrypt":{"config":{"/collection/project/article.html":["$2a$10$SSaNt9SGHO8oH4L86W.u2.fmOf63D0fMEsFxRgkG9XBipyHL7KNva","$2a$10$KTZ0/o0cwVnrqh6BiIdk.eJrUt2StqmTwC8dRs4RT.EqEq0kuyoIy"]}},"themeColor":{"orange":"#fb9b5f","red":"#f26d6d","green":"#00ceac","purple":"#ed7196"},"logo":"/favicon.ico","repo":"https://gitee.com/WLei224/WLei224.git","repoLabel":"Gitee","docsDir":"docs","docsBranch":"master","fullscreen":true,"darkmode":"switch","author":{"name":"WLei224","url":"/aboutguider/"},"encryptLocales":{"placeholder":"唱、跳、rap、篮球🏀！","errorHint":"哈哈，你干嘛~"},"footer":"<a href=\\"https://beian.miit.gov.cn/\\" target=\\"_blank\\">豫ICP备2023001822号</a><img src=\\"http://images.rl0206.love/202305030138722.png\\" height=\\"15px\\" width=\\"15px\\" /><a target=\\"_blank\\" href=\\"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41078102000226\\"><span>豫公网安备 41078102000226号</span></a>","displayFooter":true,"pageInfo":["Author","Original","Date","Category","Tag","Word","ReadingTime"],"blog":{"intro":"/aboutguider/","sidebarDisplay":"mobile","avatar":"/author.png","roundAvatar":true,"description":"目光放远(方向务必正确); 脚步放稳(眼高切勿手低); 道阻且长(静心切勿浮躁); 行则将至(唯有Persistence)!","medias":{"Github":"https://github.com/WL2O2O","Gitee":"https://gitee.com/WLei224","QQ":"https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202306171742597.png","Wechat":"https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202306171742840.png"}},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"收藏"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":[{"text":"博客","icon":"home","link":"/blog.md"},{"text":"CS之路","icon":"branch","link":"/collection/"},{"text":"PDF天堂","icon":"java","link":"/pdf/README.md"},{"text":"APP整合","icon":"hot","link":"/app/README.md"},{"text":"Hexo博客","icon":"heading","link":"https://csguider.icu/hexoblog"}],"sidebar":{"/guider/":["README.md","javaroute"],"/cainiao/":["README.md","修仙前言","abstractandinterface","article","Bugsss","collection","DMDatabase","DNS","Educoder","git","hellovuepress","JVM","javaessay","Linux","MyLanqiaoNote","mysql","netty","object","tip","transaction"],"/redis/":["README.md","Redis"],"/mianshi/":["README.md","mindmap","resumeRules","myfirstoffer","mianshiQA"],"/collection/":["README.md",{"text":"项目实操笔记","prefix":"project/","collapsible":true,"children":["aggregateSearch","api","bilibili","CampousLostAndFound","oj","shangyitong","SSM"]}],"/suanfa/":["README.md","001.两数之和","026.删除有序数组中的重复项","JZ06 从尾到头打印链表"],"/pdf/":["README.md"],"/":[{"text":"一、前言","link":"home"},{"text":"二、Java核心","collapsible":true,"children":[{"prefix":"overview/","text":"2.1 Java概述","collapsible":true,"children":["what-is-java","java-history","java-can-do-what","jdk-install-config","IDEA-install-config","hello-world"]}]}]}}}}'),Vr=S(Rr),lt=()=>Vr,st=Symbol(""),$r=()=>{const e=F(st);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},jr=(e,n)=>{var a;return{...e,...(a=e.locales)==null?void 0:a[n]}},zr=X({enhance({app:e}){const n=lt(),a=e._context.provides[Kn],i=b(()=>jr(n.value,a.value));e.provide(st,i),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return n.value}},$themeLocale:{get(){return i.value}}})}});const Xa=["de","gsw","en","es","fr","id","it","ja","ko","pl","ro","ru","tr","vi","zh-CN","zh-TW"],le={provider:"Giscus",lightTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-beta.203/templates/giscus/light.css",darkTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-beta.203/templates/giscus/dark.css",repo:"WL2O2O/CS_GUIDER_Giscus",repoId:"R_kgDOJYdTQw",category:"Announcements",categoryId:"DIC_kwDOJYdTQ84CWKC6"},{repo:Nr,repoId:qr,category:Fr,categoryId:Hr}=le;var Jr=E({name:"GiscusComment",props:{darkmode:Boolean},setup(e){const n=R(),a=B(),i=S(!1),l=b(()=>{const o=dn().value;if(Xa.includes(o))return o;const c=o.split("-")[0];return Xa.includes(c)?c:"en"}),s=b(()=>{const o=le.comment!==!1,c=n.value.comment;return!!c||o!==!1&&c!==!1}),r=b(()=>({repo:Nr,repoId:qr,category:Fr,categoryId:Hr,lang:l.value,theme:e.darkmode?le.darkTheme:le.lightTheme,mapping:le.mapping||"pathname",term:J(a.value.path),inputPosition:le.inputPosition||"top",reactionsEnabled:le.reactionsEnabled===!1?"0":"1",strict:le.strict===!1?"0":"1",loading:le.lazyLoading===!1?"eager":"lazy",emitMetadata:"0"}));return V(async()=>{await v(()=>import("./giscus-2f1671b8.js"),[]),i.value=!0}),()=>t("div",{class:["giscus-wrapper",{"input-top":le.inputPosition!=="bottom"}],id:"comment",style:{display:s.value?"block":"none"}},i.value?t("giscus-widget",r.value):t(pn))}});const Gr={provider:"Giscus",lightTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-beta.203/templates/giscus/light.css",darkTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-beta.203/templates/giscus/dark.css",repo:"WL2O2O/CS_GUIDER_Giscus",repoId:"R_kgDOJYdTQw",category:"Announcements",categoryId:"DIC_kwDOJYdTQ84CWKC6"}.comment!==!1,Ur=E({name:"CommentService",props:{darkmode:Boolean},setup(e){const n=R(),a=b(()=>n.value.comment||Gr&&n.value.comment!==!1);return()=>t(Jr,{darkmode:e.darkmode,style:{display:a.value?"block":"none"}})}});var Wr=X({enhance:({app:e})=>{e.component("CommentService",Ur)}});const Qr=800,Kr=2e3,Yr={"/":{copy:"复制代码",copied:"已复制",hint:"复制成功"}},Xr=!1,Zr=['.theme-hope-content div[class*="language-"] pre'],Za=!0,xn=new Map,eo=()=>{const{copy:e}=Ys({legacy:!0}),n=Ee(Yr),a=B(),i=xs(),l=o=>{if(!o.hasAttribute("copy-code-registered")){const c=document.createElement("button");c.type="button",c.classList.add("copy-code-button"),c.innerHTML='<div class="copy-icon" />',c.setAttribute("aria-label",n.value.copy),c.setAttribute("data-copied",n.value.copied),o.parentElement&&o.parentElement.insertBefore(c,o),o.setAttribute("copy-code-registered","")}},s=()=>Be().then(()=>new Promise(o=>{setTimeout(()=>{Zr.forEach(c=>{document.querySelectorAll(c).forEach(l)}),o()},Qr)})),r=(o,c,u)=>{let{innerText:d=""}=c;/language-(shellscript|shell|bash|sh|zsh)/.test(o.classList.toString())&&(d=d.replace(/^ *(\$|>) /gm,"")),e(d).then(()=>{u.classList.add("copied"),clearTimeout(xn.get(u));const p=setTimeout(()=>{u.classList.remove("copied"),u.blur(),xn.delete(u)},Kr);xn.set(u,p)})};V(()=>{(!i.value||Za)&&s(),H("click",o=>{const c=o.target;if(c.matches('div[class*="language-"] > button.copy')){const u=c.parentElement,d=c.nextElementSibling;d&&r(u,d,c)}else if(c.matches('div[class*="language-"] div.copy-icon')){const u=c.parentElement,d=u.parentElement,p=u.nextElementSibling;p&&r(d,p,u)}}),j(()=>a.value.path,()=>{(!i.value||Za)&&s()})})};var no=X({setup:()=>{eo()}});const ao=e=>({dark:e,background:e?"#1e1e1e":"#fff",primaryColor:e?"#389d70":"#4abf8a",primaryBorderColor:e?"#389d70":"#4abf8a",primaryTextColor:"#fff",secondaryColor:"#ffb500",secondaryBorderColor:e?"#fff":"#000",secondaryTextColor:e?"#ddd":"#333",tertiaryColor:e?"#282828":"#efeef4",tertiaryBorderColor:e?"#bbb":"#242424",tertiaryTextColor:e?"#ddd":"#333",noteBkgColor:e?"#f6d365":"#fff5ad",noteTextColor:"#242424",noteBorderColor:e?"#f6d365":"#333",lineColor:e?"#d3d3d3":"#333",textColor:e?"#fff":"#242424",mainBkg:e?"#389d70":"#4abf8a",errorBkgColor:"#eb4d5d",errorTextColor:"#fff",nodeBorder:e?"#389d70":"#4abf8a",nodeTextColor:e?"#fff":"#242424",signalTextColor:e?"#9e9e9e":"#242424",classText:"#fff",labelColor:"#fff",fillType0:e?"#cf1322":"#f1636e",fillType1:"#f39c12",fillType2:"#2ecc71",fillType3:"#fa541c",fillType4:"#25a55b",fillType5:"#13c2c2",fillType6:"#096dd9",fillType7:"#aa6fe9"});var io=E({name:"Mermaid",props:{id:{type:String,required:!0},code:{type:String,required:!0}},setup(e){const n=S(),a=S(""),i=S(!1),l=b(()=>Ni(e.code)),s=async()=>Promise.all([v(()=>import("./mermaid.core-31f70e82.js").then(r=>r.aJ),[]),new Promise(r=>setTimeout(r,800))]).then(async([{default:r}])=>{const o={useMaxWidth:!1};r.initialize({theme:"base",themeVariables:ao(i.value),flowchart:o,sequence:o,journey:o,gantt:o,er:o,pie:o,startOnLoad:!1}),a.value=(await r.render(e.id,l.value)).svg});return V(()=>{const r=document.documentElement,o=()=>r.classList.contains("dark")||r.getAttribute("data-theme")==="dark";i.value=o(),s(),Ki(r,()=>{i.value=o()},{attributeFilter:["class","data-theme"],attributes:!0}),j(i,()=>s())}),()=>t("div",{ref:n,class:"mermaid-wrapper"},a.value?t("div",{class:"mermaid-content",innerHTML:a.value}):t(pn,{class:"mermaid-loading",height:96}))}});const to=()=>v(()=>import("./markdown.esm-0191f9da.js"),[]),lo=()=>v(()=>import("./reveal.esm-ab04f0b1.js"),[]),so=()=>[lo(),to()];var ro=E({name:"Presentation",props:{id:{type:String,required:!0},code:{type:String,required:!0},theme:{type:String,default:"auto"}},setup(e){const n=R(),a=S(""),i=S(!0),l=S();let s=null;const r=async o=>{const c=[new Promise(m=>setTimeout(m,800)),...so()],[,u,...d]=await Promise.all(c),p=new u.default(o,{plugins:d.map(({default:m})=>m)});return await p.initialize({backgroundTransition:"slide",hash:n.value.layout==="Slide",mouseWheel:n.value.layout==="Slide",transition:"slide",slideNumber:!0,...n.value.reveal||{},embedded:n.value.layout!=="Slide"}),p.configure({backgroundTransition:"slide"}),p};return V(async()=>{const o=l.value;o&&(a.value=Ni(e.code),o.setAttribute("id",e.id),o.setAttribute("data-theme",e.theme),s=await r(o),i.value=!1)}),Wn(()=>{s==null||s.destroy()}),()=>t("div",{class:"presentation-wrapper"},[t("div",{ref:l,class:["reveal","reveal-viewport"]},t("div",{class:"slides",innerHTML:`<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${a.value}<\/script></section>`})),i.value?t(pn,{class:"reveal-loading",height:400}):null])}});const In=Je("VUEPRESS_TAB_STORE",{});var oo=E({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},setup(e,{slots:n}){const a=S(e.active),i=S([]),l=()=>{if(e.tabId){const{title:u,id:d=u}=e.data[a.value];In.value[e.tabId]=d}},s=(u=a.value)=>{a.value=u<i.value.length-1?u+1:0,i.value[a.value].focus()},r=(u=a.value)=>{a.value=u>0?u-1:i.value.length-1,i.value[a.value].focus()},o=(u,d)=>{u.key===" "||u.key==="Enter"?(u.preventDefault(),a.value=d):u.key==="ArrowRight"?(u.preventDefault(),s()):u.key==="ArrowLeft"&&(u.preventDefault(),r()),l()},c=()=>{if(e.tabId){const u=e.data.findIndex(({title:d,id:p=d})=>In.value[e.tabId]===p);if(u!==-1)return u}return e.active};return V(()=>{a.value=c(),j(()=>In.value[e.tabId],(u,d)=>{if(e.tabId&&u!==d){const p=e.data.findIndex(({title:m,id:h=m})=>h===u);p!==-1&&(a.value=p)}})}),()=>e.data.length?t("div",{class:"tab-list"},[t("div",{class:"tab-list-nav",role:"tablist"},e.data.map(({title:u},d)=>{const p=d===a.value;return t("button",{type:"button",ref:m=>{m&&(i.value[d]=m)},class:["tab-list-nav-item",{active:p}],role:"tab","aria-controls":`tab-${e.id}-${d}`,"aria-selected":p,onClick:()=>{a.value=d,l()},onKeydown:m=>o(m,d)},u)})),e.data.map(({title:u,id:d=u},p)=>{var m;const h=p===a.value;return t("div",{class:["tab-item",{active:h}],id:`tab-${e.id}-${p}`,role:"tabpanel","aria-expanded":h},(m=n[`tab${p}`])==null?void 0:m.call(n,{title:u,value:d,isActive:h}))})]):null}});const co=X({enhance:({app:e})=>{e.component("Mermaid",io),e.component("Presentation",ro),e.component("Tabs",oo)}});const uo=".theme-hope-content :not(a) > img:not([no-view])",vo={"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}},po=800,mo={},bo='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',ho=e=>W(e)?Array.from(document.querySelectorAll(e)):e.map(n=>Array.from(document.querySelectorAll(n))).flat(),rt=e=>new Promise((n,a)=>{e.complete?n({type:"image",element:e,src:e.src,width:e.naturalWidth,height:e.naturalHeight,alt:e.alt,msrc:e.src}):(e.onload=()=>n(rt(e)),e.onerror=i=>a(i))}),go=()=>{const{isSupported:e,toggle:n}=na(),a=Ee(vo),i=B();let l;const s=o=>{o.on("uiRegister",()=>{e&&o.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{n()}}),o.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(c,u)=>{c.setAttribute("download",""),c.setAttribute("target","_blank"),c.setAttribute("rel","noopener"),u.on("change",()=>{c.setAttribute("href",u.currSlide.data.src)})}}),o.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:(c,u)=>{const d=[];let p=-1;for(let m=0;m<u.getNumItems();m++){const h=document.createElement("div");h.className="photo-swipe-bullet",h.onclick=g=>{u.goTo(d.indexOf(g.target))},d.push(h),c.appendChild(h)}u.on("change",()=>{p>=0&&d[p].classList.remove("active"),d[u.currIndex].classList.add("active"),p=u.currIndex})}})})},r=()=>Promise.all([v(()=>import("./photoswipe.esm-36cd6c3c.js"),[]),Be().then(()=>new Promise(o=>setTimeout(o,po)).then(()=>ho(uo)))]).then(([{default:o},c])=>{const u=c.map(d=>({html:bo,element:d,msrc:d.src}));c.forEach((d,p)=>{const m=()=>{l=new o({preloaderDelay:0,showHideAnimationType:"zoom",...a.value,...mo,dataSource:u,index:p,closeOnVerticalDrag:!0,wheelToZoom:!1}),s(l),l.addFilter("thumbEl",()=>d),l.addFilter("placeholderSrc",()=>d.src),l.init()};d.style.cursor="zoom-in",d.addEventListener("click",()=>{m()}),d.addEventListener("keypress",({key:h})=>{h==="Enter"&&m()})}),c.forEach((d,p)=>{rt(d).then(m=>{u.splice(p,1,m),l==null||l.refreshSlideContent(p)})})});V(()=>{H("wheel",()=>{l==null||l.close()}),r(),j(()=>i.value.path,()=>r())})};var fo=X({setup:()=>{go()}});function yo(e){return{all:e=e||new Map,on:function(n,a){var i=e.get(n);i?i.push(a):e.set(n,[a])},off:function(n,a){var i=e.get(n);i&&(a?i.splice(i.indexOf(a)>>>0,1):e.set(n,[]))},emit:function(n,a){var i=e.get(n);i&&i.slice().map(function(l){l(a)}),(i=e.get("*"))&&i.slice().map(function(l){l(n,a)})}}}const ot=Symbol(""),ko=()=>{const e=F(ot);if(!e)throw new Error("usePWAEvent() is called without provider.");return e},Eo=async e=>{const{register:n}=await v(()=>import("./index-70769223.js"),[]);n(J("service-worker.js"),{ready(a){console.log("[PWA]: Service worker is active"),e.emit("ready",a)},registered(a){console.log("[PWA]: Service worker has been registered."),e.emit("registered",a)},cached(a){console.log("[PWA]: Content has been cached for offline usage"),e.emit("cached",a)},async updatefound(a){await navigator.serviceWorker.getRegistration()&&(console.log("[PWA]: New content is downloading."),e.emit("updatefound",a))},updated(a){console.log("[PWA]: New content is available, please refresh.");const i="service-worker-version",l=Number(localStorage.getItem(i)||0);localStorage.setItem(i,(l+1).toString()),localStorage.removeItem("manifest"),e.emit("updated",a)},offline(){console.log("[PWA]: No internet connection found. App is running in offline mode."),e.emit("offline")},error(a){console.log("[PWA]: Error during service worker registration:",a),e.emit("error",a)}})},_o=()=>{const e=yo();he(ot,e),V(async()=>{var n;let a=!1;(n=navigator.serviceWorker)!=null&&n.controller&&navigator.serviceWorker.addEventListener("controllerchange",()=>{a||(a=!0,window.location.reload())}),await Eo(e)})},ct=()=>t(L,{name:"update"},()=>t("path",{d:"M949.949 146.25v255.826c0 21.981-13.989 35.97-35.97 35.97H658.154c-13.988 0-25.983-7.992-33.973-21.981-5.997-13.989-4-27.977 7.991-39.97l79.942-77.946c-55.954-51.973-121.918-77.955-199.863-77.955-37.975 0-75.95 8.002-113.924 21.99-37.975 15.985-67.948 37.976-91.934 63.957-25.982 23.987-47.973 53.96-63.957 91.934-29.983 73.955-29.983 153.895 0 227.85 15.984 37.976 37.975 67.947 63.957 91.934 23.986 25.982 53.959 47.973 91.934 63.956 37.974 13.989 75.95 21.991 113.924 21.991 45.967 0 87.942-9.998 127.913-29.982 41.976-17.99 75.951-45.967 101.931-83.943 7.993-4 11.994-5.995 13.989-5.995 5.997 0 9.998 1.994 13.988 5.995l77.958 77.946c3.989 4 5.986 7.993 5.986 11.994 0 1.994-1.996 5.995-3.99 11.994-43.973 51.962-93.941 91.934-151.9 117.914-53.958 25.983-115.92 39.972-185.874 39.972-61.961 0-119.921-11.984-169.89-33.973-57.96-25.985-105.923-57.963-139.896-93.943-35.98-33.972-67.958-81.936-93.94-139.897-45.967-101.93-45.967-237.846 0-339.777 25.982-57.96 57.96-105.923 93.94-139.896 33.973-35.98 81.936-67.958 139.896-93.94 49.968-21.99 107.928-33.974 169.89-33.974 55.963 0 109.923 9.988 161.885 29.973 53.97 21.99 101.933 51.963 139.908 89.938l73.954-73.944c9.987-9.998 23.987-13.988 39.971-8.002 13.988 8.002 21.98 19.995 21.98 33.984z"}));ct.displayName="UpdateIcon";const wo={"/":{install:"安装",iOSInstall:"点击分享按钮然后点击“添加到主屏幕”",cancel:"取消",close:"关闭",prevImage:"上一张图片",nextImage:"下一张图片",desc:"详情",feature:"主要特色",explain:"该应用可以安装在你的 PC 或移动设备上。这将使该 Web 应用程序外观和行为与其他应用程序相同。它将在出现在应用程序列表中，并可以固定到主屏幕，开始菜单或任务栏。此 Web 应用程序还将能够与其他应用程序和你的操作系统安全地进行交互。",hint:"发现新内容可用",update:"新内容已就绪"}};const So=e=>{const n=e.waiting;if(!n)return;const a=new MessageChannel;n.postMessage({type:"SKIP_WAITING"},[a.port2])};var Ao=E({name:"SWUpdatePopup",setup(e,{slots:n}){const a=Ee(wo),i=S(),l=b(()=>!!i.value),s=()=>{i.value&&(So(i.value),i.value=void 0)};return V(()=>{ko().on("updated",r=>{r&&(i.value=r)})}),()=>t(ye,{name:"popup"},()=>{var r;return((r=n.default)==null?void 0:r.call(n,{enabled:l.value,reload:s}))||(l.value?t("button",{type:"button",class:"sw-update-popup",tabindex:0,onClick:()=>s()},[a.value.update,t("span",{class:"icon-wrapper"},t(ct))]):null)})}});const xo=X({setup:()=>{_o()},rootComponents:[Ao]}),te=()=>lt(),D=()=>$r(),Pe=()=>b(()=>!!te().value.pure);var Ln=E({name:"EmptyComponent",setup:()=>()=>null});const ia={},ut=e=>{const{icon:n=""}=e;return Me(n)?t("img",{class:"icon",src:n,"no-view":""}):bn(n)?t("img",{class:"icon",src:J(n),"no-view":""}):t(Q("FontIcon"),e)};ut.displayName="HopeIcon";var Y=ut,$=(e=>(e.type="y",e.title="t",e.shortTitle="s",e.icon="i",e.author="a",e.date="d",e.localizedDate="l",e.category="c",e.tag="g",e.isEncrypted="n",e.isOriginal="o",e.readingTime="r",e.excerpt="e",e.sticky="u",e.cover="v",e.index="I",e.order="O",e))($||{}),dt=(e=>(e.article="a",e.home="h",e.slide="s",e.page="p",e))(dt||{});const Te=(e,n=!1)=>{const a=U(),{fullPath:i,meta:l,name:s}=Fe(a,encodeURI(e));return{text:!n&&l[$.shortTitle]?l[$.shortTitle]:l[$.title]||e,link:s==="404"?e:i,...l[$.icon]?{icon:l[$.icon]}:{}}},Ge=()=>{const e=U(),n=ee();return a=>{if(a)if(bn(a))n.path!==a&&e.push(a);else if(Me(a)||di(a))window&&window.open(a);else{const i=n.path.slice(0,n.path.lastIndexOf("/"));e.push(`${i}/${encodeURI(a)}`)}}},vt=()=>{const e=D(),n=R();return b(()=>{const{author:a}=n.value;return a?$e(a):a===!1?[]:$e(e.value.author,!1)})},Io=()=>{const e=R();return b(()=>$i(e.value.category).map(n=>{var a,i;return{name:n,path:((i=(a=F(Symbol.for("categoryMap")))==null?void 0:a.value.map[n])==null?void 0:i.path)||""}}))},Lo=()=>{const e=R();return b(()=>ji(e.value.tag).map(n=>{var a,i;return{name:n,path:((i=(a=F(Symbol.for("tagMap")))==null?void 0:a.value.map[n])==null?void 0:i.path)||""}}))},To=()=>{const e=R(),n=B();return b(()=>{const a=Zn(e.value.date);if(a)return a;const{createdTime:i}=n.value.git||{};return i?new Date(i):null})},Co=()=>{const e=D(),n=B(),a=R(),i=vt(),l=Io(),s=Lo(),r=To(),o=b(()=>({author:i.value,category:l.value,date:r.value,localizedDate:n.value.localizedDate,tag:s.value,isOriginal:a.value.isOriginal||!1,readingTime:n.value.readingTime||null,pageview:"pageview"in a.value?a.value.pageview:!0})),c=b(()=>"pageInfo"in a.value?a.value.pageInfo:"pageInfo"in e.value?e.value.pageInfo:null);return{info:o,items:c}},Ue=()=>{const e=te(),n=S(!1),a=S(!1),i=()=>{n.value=window.innerWidth<=(e.value.mobileBreakPoint||719),a.value=window.innerWidth>=(e.value.pcBreakPoint||1440)};return V(()=>{i(),H("resize",i,!1),H("orientationchange",i,!1)}),{isMobile:n,isPC:a}},pt=Symbol(""),We=()=>{const e=F(pt);if(!e)throw new Error("useDarkmode() is called without provider.");return e},Do=e=>{const n=te(),a=lr(),i=Je("vuepress-theme-hope-scheme","auto"),l=b(()=>n.value.darkmode||"switch"),s=b(()=>{const o=l.value;return o==="disable"?!1:o==="enable"?!0:o==="auto"?a.value:o==="toggle"?i.value==="dark":i.value==="dark"||i.value==="auto"&&a.value}),r=b(()=>{const o=l.value;return o==="switch"||o==="toggle"});e.provide(pt,{canToggle:r,config:l,isDarkmode:s,status:i}),Object.defineProperties(e.config.globalProperties,{$isDarkmode:{get:()=>s.value}})},Mo=()=>{const{isDarkmode:e}=We(),n=(a=e.value)=>document.documentElement.setAttribute("data-theme",a?"dark":"light");V(()=>{j(e,n,{immediate:!0})})};var K=E({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],setup(e,{attrs:n,emit:a,slots:i}){const l=ee(),s=yi(),r=je(e,"config"),o=b(()=>Me(r.value.link)),c=b(()=>di(r.value.link)||Ml(r.value.link)),u=b(()=>c.value?void 0:r.value.target||(o.value?"_blank":void 0)),d=b(()=>u.value==="_blank"),p=b(()=>!o.value&&!c.value&&!d.value),m=b(()=>c.value?void 0:r.value.rel||(d.value?"noopener noreferrer":void 0)),h=b(()=>r.value.ariaLabel||r.value.text),g=b(()=>{if(e.exact)return!1;const f=Z(s.value.locales);return f.length?f.every(w=>w!==r.value.link):r.value.link!=="/"}),_=b(()=>p.value?r.value.activeMatch?new RegExp(r.value.activeMatch).test(l.path):g.value?Ce(l.path,r.value.link):l.path===r.value.link:!1);return()=>{var f,w,k;const{text:A,icon:T,link:M}=r.value;return p.value?t(q,{to:M,"aria-label":h.value,...n,class:["nav-link",{active:_.value},n.class],onFocusout:()=>a("focusout")},()=>{var C,x,I;return((C=i.default)==null?void 0:C.call(i))||[((x=i.before)==null?void 0:x.call(i))||t(Y,{icon:T}),A,(I=i.after)==null?void 0:I.call(i)]}):t("a",{href:M,rel:m.value,target:u.value,"aria-label":h.value,...n,class:["nav-link",n.class],onFocusout:()=>a("focusout")},((f=i.default)==null?void 0:f.call(i))||[((w=i.before)==null?void 0:w.call(i))||t(Y,{icon:T}),A,e.noExternalLinkIcon?null:t(it),(k=i.after)==null?void 0:k.call(i)])}}});const De=(e,n,a=!1)=>"activeMatch"in n?new RegExp(n.activeMatch).test(e.path):ea(e,n.link)?!0:n.children&&!a?n.children.some(i=>De(e,i)):!1,mt=(e,n)=>n.type==="group"?n.children.some(a=>a.type==="group"?mt(e,a):a.type==="page"&&De(e,a,!0))||"prefix"in n&&ea(e,n.prefix):!1,bt=(e,n)=>W(e.link)?t(K,{...n,config:e}):t("p",n,[t(Y,{icon:e.icon}),e.text]),ht=e=>{const n=ee();return e?t("ul",{class:"sidebar-sub-headers"},e.map(a=>{const i=De(n,a,!0);return t("li",{class:"sidebar-sub-header"},[bt(a,{class:["sidebar-link","heading",{active:i}]}),ht(a.children)])})):null},Tn=(e="",n="")=>bn(n)?n:`${Bl(e)}${n}`,Bo=(e,n)=>{const a=B();return{type:"heading",text:e.title,link:`${a.value.path}#${e.slug}`,children:ta(e.children,n)}},ta=(e,n)=>n>0?e.map(a=>Bo(a,n-1)):[],gt=e=>{const n=B();return ta(n.value.headers,e)},Vn=(e,n,a="")=>{const i=B(),l=(s,r=a)=>{var o;const c=W(s)?Te(Tn(r,s)):s.link?{...s,...tn(s.link)?{}:{link:Te(Tn(r,s.link)).link}}:s;if("children"in c){const u=Tn(r,c.prefix),d=c.children==="structure"?ia[u]:c.children;return{type:"group",...c,prefix:u,children:d.map(p=>l(p,u))}}return{type:"page",...c,children:c.link===i.value.path?ta(((o=i.value.headers[0])==null?void 0:o.level)===1?i.value.headers[0].children:i.value.headers,n):[]}};return e.map(s=>l(s))},Po=(e,n)=>{const a=B(),i=Z(e).sort((l,s)=>s.length-l.length);for(const l of i)if(Ce(decodeURI(a.value.path),l)){const s=e[l];return s?Vn(s==="structure"?ia[l]:s==="heading"?gt(n):s,n,l):[]}return console.warn(`${a.value.path} is missing sidebar config.`),[]},Oo=()=>{const e=ie(),n=R(),a=D(),i=n.value.home?!1:n.value.sidebar??a.value.sidebar??"structure",l=n.value.headerDepth??a.value.headerDepth??2;return i===!1?[]:i==="heading"?gt(l):i==="structure"?Vn(ia[e.value],l,e.value):cn(i)?Vn(i,l):un(i)?Po(i,l):[]},ft=Symbol(""),Ro=()=>{const e=b(()=>Oo());he(ft,e)},la=()=>{const e=F(ft);if(!e)throw new Error("useSidebarItems() is called without provider.");return e};var Vo=E({name:"PageFooter",setup(){const e=R(),n=D(),a=vt(),i=b(()=>{const{copyright:r,footer:o}=e.value;return o!==!1&&!!(r||o||n.value.displayFooter)}),l=b(()=>{const{footer:r}=e.value;return r===!1?!1:W(r)?r:n.value.footer||""}),s=b(()=>"copyright"in e.value?e.value.copyright:"copyright"in n.value?n.value.copyright:a.value.length?`Copyright © ${new Date().getFullYear()} ${a.value[0].name}`:!1);return()=>i.value?t("footer",{class:"footer-wrapper"},[l.value?t("div",{class:"footer",innerHTML:l.value}):null,s.value?t("div",{class:"copyright",innerHTML:s.value}):null]):null}}),yt=E({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},setup(e,{slots:n}){const a=B(),i=je(e,"config"),l=b(()=>i.value.ariaLabel||i.value.text),s=S(!1);j(()=>a.value.path,()=>{s.value=!1});const r=o=>{o.detail===0&&(s.value=!s.value)};return()=>{var o;return t("div",{class:["dropdown-wrapper",{open:s.value}]},[t("button",{type:"button",class:"dropdown-title","aria-label":l.value,onClick:r},[((o=n.title)==null?void 0:o.call(n))||t("span",{class:"title"},[t(Y,{icon:i.value.icon}),e.config.text]),t("span",{class:"arrow"}),t("ul",{class:"nav-dropdown"},i.value.children.map((c,u)=>{const d=u===i.value.children.length-1;return t("li",{class:"dropdown-item"},"children"in c?[t("h4",{class:"dropdown-subtitle"},c.link?t(K,{config:c,onFocusout:()=>{c.children.length===0&&d&&(s.value=!1)}}):t("span",c.text)),t("ul",{class:"dropdown-subitem-wrapper"},c.children.map((p,m)=>t("li",{class:"dropdown-subitem"},t(K,{config:p,onFocusout:()=>{m===c.children.length-1&&d&&(s.value=!1)}}))))]:t(K,{config:c,onFocusout:()=>{d&&(s.value=!1)}}))}))])])}}});const kt=()=>t(L,{name:"i18n"},()=>[t("path",{d:"M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"})]);kt.displayName="I18nIcon";const Et=(e,n="")=>W(e)?Te(`${n}${e}`):"children"in e?{...e,...e.link&&!tn(e.link)?Te(`${n}${e.link}`):{},children:e.children.map(a=>Et(a,`${n}${e.prefix||""}`))}:{...e,link:tn(e.link)?e.link:Te(`${n}${e.link}`).link},_t=()=>b(()=>(D().value.navbar||[]).map(e=>Et(e))),$o=()=>{const e=U(),n=ee(),a=ie(),i=ze(),l=te(),s=D();return b(()=>{const r=Z(i.value.locales);if(r.length<2)return null;const{path:o,fullPath:c}=e.currentRoute.value,{navbarLocales:u}=s.value;return{text:"",ariaLabel:u==null?void 0:u.selectLangAriaLabel,children:[...r.map(d=>{var p,m,h;const g=((p=i.value.locales)==null?void 0:p[d])??{},_=((m=l.value.locales)==null?void 0:m[d])??{},f=g.lang||"",w=((h=_.navbarLocales)==null?void 0:h.langName)??f;let k;if(f===i.value.lang)k=o;else{const A=o.replace(a.value,d);k=e.getRoutes().some(T=>T.path===A)?c.replace(o,A):_.home??d}return{text:w,link:k}}),...qe(l.value.extraLocales||{}).map(([d,p])=>({text:d,link:p.replace(":route",n.path.replace(a.value,""))}))]}})},jo=()=>{const e=D(),n=b(()=>e.value.repo||null),a=b(()=>n.value?Ts(n.value):null),i=b(()=>n.value?qi(n.value):null),l=b(()=>a.value?e.value.repoLabel??(i.value===null?"Source":i.value):null);return b(()=>!a.value||!l.value||e.value.repoDisplay===!1?null:{type:i.value||"Source",label:l.value,link:a.value})};E({name:"LanguageDropdown",setup(){const e=$o();return()=>e.value?t("div",{class:"nav-item"},t(yt,{class:"i18n-dropdown",config:e.value},{title:()=>{var n;return t(kt,{"aria-label":(n=e.value)==null?void 0:n.ariaLabel,style:{width:"1rem",height:"1rem",verticalAlign:"middle"}})}})):null}});var zo=E({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(e){const n=B(),a=je(e,"config"),i=b(()=>a.value.ariaLabel||a.value.text),l=S(!1);j(()=>n.value.path,()=>{l.value=!1});const s=(r,o)=>o[o.length-1]===r;return()=>[t("button",{type:"button",class:["nav-screen-dropdown-title",{active:l.value}],"aria-label":i.value,onClick:()=>{l.value=!l.value}},[t("span",{class:"title"},[t(Y,{icon:a.value.icon}),e.config.text]),t("span",{class:["arrow",l.value?"down":"end"]})]),t("ul",{class:["nav-screen-dropdown",{hide:!l.value}]},a.value.children.map(r=>t("li",{class:"dropdown-item"},"children"in r?[t("h4",{class:"dropdown-subtitle"},r.link?t(K,{config:r,onFocusout:()=>{s(r,a.value.children)&&r.children.length===0&&(l.value=!1)}}):t("span",r.text)),t("ul",{class:"dropdown-subitem-wrapper"},r.children.map(o=>t("li",{class:"dropdown-subitem"},t(K,{config:o,onFocusout:()=>{s(o,r.children)&&s(r,a.value.children)&&(l.value=!1)}}))))]:t(K,{config:r,onFocusout:()=>{s(r,a.value.children)&&(l.value=!1)}}))))]}}),No=E({name:"NavScreenLinks",setup(){const e=_t();return()=>e.value.length?t("nav",{class:"nav-screen-links"},e.value.map(n=>t("div",{class:"navbar-links-item"},"children"in n?t(zo,{config:n}):t(K,{config:n})))):null}});const wt=()=>t(L,{name:"dark"},()=>t("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));wt.displayName="DarkIcon";const St=()=>t(L,{name:"light"},()=>t("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));St.displayName="LightIcon";const At=()=>t(L,{name:"auto"},()=>t("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));At.displayName="AutoIcon";const xt=()=>t(L,{name:"enter-fullscreen"},()=>t("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));xt.displayName="EnterFullScreenIcon";const It=()=>t(L,{name:"cancel-fullscreen"},()=>t("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));It.displayName="CancelFullScreenIcon";const Lt=()=>t(L,{name:"outlook"},()=>[t("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);Lt.displayName="OutlookIcon";var Tt=E({name:"AppearanceSwitch",setup(){const{config:e,status:n}=We(),a=()=>{e.value==="switch"?n.value={light:"dark",dark:"auto",auto:"light"}[n.value]:n.value=n.value==="light"?"dark":"light"};return()=>t("button",{type:"button",id:"appearance-switch",onClick:()=>a()},[t(At,{style:{display:n.value==="auto"?"block":"none"}}),t(wt,{style:{display:n.value==="dark"?"block":"none"}}),t(St,{style:{display:n.value==="light"?"block":"none"}})])}}),qo=E({name:"AppearanceMode",setup(){const e=D(),{canToggle:n}=We(),a=b(()=>e.value.outlookLocales.darkmode);return()=>n.value?t("div",{class:"appearance-wrapper"},[t("label",{class:"appearance-title",for:"appearance-switch"},a.value),t(Tt)]):null}}),Fo=E({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(e){const n=(a="")=>{const i=document.documentElement.classList,l=Z(e.themeColor).map(s=>`theme-${s}`);if(!a){localStorage.removeItem("theme"),i.remove(...l);return}i.remove(...l.filter(s=>s!==`theme-${a}`)),i.add(`theme-${a}`),localStorage.setItem("theme",a)};return V(()=>{const a=localStorage.getItem("theme");a&&n(a)}),()=>t("ul",{id:"theme-color-picker"},[t("li",t("span",{class:"theme-color",onClick:()=>n()})),qe(e.themeColor).map(([a,i])=>t("li",t("span",{style:{background:i},onClick:()=>n(a)})))])}}),Ho=E({name:"ThemeColor",setup(){const e=te(),n=D(),a=b(()=>n.value.outlookLocales.themeColor),i=b(()=>{const{themeColor:l}=e.value;return l===!1?null:l});return()=>i.value?t("div",{class:"theme-color-wrapper"},[t("label",{class:"theme-color-title",for:"theme-color-picker"},a.value),t(Fo,{themeColor:i.value})]):null}}),Ct=E({name:"ToggleFullScreenButton",setup(){const e=D(),{isSupported:n,isFullscreen:a,toggle:i}=na(),l=b(()=>e.value.outlookLocales.fullscreen);return()=>n?t("div",{class:"full-screen-wrapper"},[t("label",{class:"full-screen-title",for:"full-screen-switch"},l.value),t("button",{type:"button",class:"full-screen",id:"full-screen-switch",ariaPressed:a.value,onClick:()=>i()},a.value?t(It):t(xt))]):null}}),Dt=E({name:"OutlookSettings",setup(){const e=te(),n=Pe(),a=b(()=>!n.value&&!!e.value.themeColor),i=b(()=>!n.value&&e.value.fullscreen);return()=>t(vn,()=>[a.value?t(Ho):null,t(qo),i.value?t(Ct):null])}}),Jo=E({name:"NavScreen",props:{show:Boolean},emits:["close"],setup(e,{emit:n,slots:a}){const i=B(),{isMobile:l}=Ue(),s=S(),r=Xi(s);return V(()=>{s.value=document.body,j(l,o=>{!o&&e.show&&(r.value=!1,n("close"))}),j(()=>i.value.path,()=>{r.value=!1,n("close")})}),Wn(()=>{r.value=!1}),()=>t(ye,{name:"fade",onEnter:()=>{r.value=!0},onAfterLeave:()=>{r.value=!1}},()=>{var o,c;return e.show?t("div",{id:"nav-screen"},t("div",{class:"container"},[(o=a.before)==null?void 0:o.call(a),t(No),t("div",{class:"outlook-wrapper"},t(Dt)),(c=a.after)==null?void 0:c.call(a)])):null})}}),Go=E({name:"NavbarBrand",setup(){const e=ie(),n=ze(),a=D(),i=b(()=>a.value.home||e.value),l=b(()=>n.value.title),s=b(()=>a.value.logo?J(a.value.logo):null),r=b(()=>a.value.logoDark?J(a.value.logoDark):null);return()=>t(q,{to:i.value,class:"brand"},()=>[s.value?t("img",{class:["logo",{light:!!r.value}],src:s.value,alt:l.value}):null,r.value?t("img",{class:["logo dark"],src:r.value,alt:l.value}):null,l.value?t("span",{class:["site-name",{"hide-in-pad":s.value&&a.value.hideSiteNameOnMobile!==!1}]},l.value):null])}}),Uo=E({name:"NavbarLinks",setup(){const e=_t();return()=>e.value.length?t("nav",{class:"nav-links"},e.value.map(n=>t("div",{class:"nav-item hide-in-mobile"},"children"in n?t(yt,{config:n}):t(K,{config:n})))):null}}),Wo=E({name:"RepoLink",components:{BitbucketIcon:Mi,GiteeIcon:Di,GitHubIcon:Ti,GitLabIcon:Ci,SourceIcon:Bi},setup(){const e=jo();return()=>e.value?t("div",{class:"nav-item"},t("a",{class:"repo-link",href:e.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":e.value.label},t(Q(`${e.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const Mt=({active:e=!1},{emit:n})=>t("button",{type:"button",class:["toggle-navbar-button",{"is-active":e}],"aria-label":"Toggle Navbar","aria-expanded":e,"aria-controls":"nav-screen",onClick:()=>n("toggle")},t("span",{class:"button-container"},[t("span",{class:"button-top"}),t("span",{class:"button-middle"}),t("span",{class:"button-bottom"})]));Mt.displayName="ToggleNavbarButton";var Qo=Mt;const $n=(e,{emit:n})=>t("button",{type:"button",class:"toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>n("toggle")},t("span",{class:"icon"}));$n.displayName="ToggleSidebarButton",$n.emits=["toggle"];var Ko=$n,Yo=E({name:"OutlookButton",setup(){const{isSupported:e}=na(),n=te(),a=Pe(),i=B(),{canToggle:l}=We(),s=S(!1),r=b(()=>!a.value&&!!n.value.themeColor),o=b(()=>!a.value&&n.value.fullscreen&&e);return j(()=>i.value.path,()=>{s.value=!1}),()=>l.value||o.value||r.value?t("div",{class:"nav-item hide-in-mobile"},l.value&&!o.value&&!r.value?t(Tt):o.value&&!l.value&&!r.value?t(Ct):t("button",{type:"button",class:["outlook-button",{open:s.value}],tabindex:"-1","aria-hidden":!0},[t(Lt),t("div",{class:"outlook-dropdown"},t(Dt))])):null}}),Xo=E({name:"NavBar",emits:["toggleSidebar"],setup(e,{emit:n,slots:a}){const i=D(),{isMobile:l}=Ue(),s=S(!1),r=b(()=>{const{navbarAutoHide:d="mobile"}=i.value;return d!=="none"&&(d==="always"||l.value)}),o=b(()=>i.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),c={Brand:Go,Language:Ln,Links:Uo,Repo:Wo,Outlook:Yo,Search:ce("Docsearch")?Q("Docsearch"):ce("SearchBox")?Q("SearchBox"):Ln},u=d=>c[d]??(ce(d)?Q(d):Ln);return()=>{var d,p,m,h,g,_;return[t("header",{class:["navbar",{"auto-hide":r.value,"hide-icon":i.value.navbarIcon===!1}],id:"navbar"},[t("div",{class:"navbar-start"},[t(Ko,{onToggle:()=>{s.value&&(s.value=!1),n("toggleSidebar")}}),(d=a.startBefore)==null?void 0:d.call(a),(o.value.start||[]).map(f=>t(u(f))),(p=a.startAfter)==null?void 0:p.call(a)]),t("div",{class:"navbar-center"},[(m=a.centerBefore)==null?void 0:m.call(a),(o.value.center||[]).map(f=>t(u(f))),(h=a.centerAfter)==null?void 0:h.call(a)]),t("div",{class:"navbar-end"},[(g=a.endBefore)==null?void 0:g.call(a),(o.value.end||[]).map(f=>t(u(f))),(_=a.endAfter)==null?void 0:_.call(a),t(Qo,{active:s.value,onToggle:()=>{s.value=!s.value}})])]),t(Jo,{show:s.value,onClose:()=>{s.value=!1}},{before:()=>{var f;return(f=a.screenTop)==null?void 0:f.call(a)},after:()=>{var f;return(f=a.screenBottom)==null?void 0:f.call(a)}})]}}}),Zo=E({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(e){const n=ee();return()=>[bt(e.config,{class:["sidebar-link",`sidebar-${e.config.type}`,{active:De(n,e.config,!0)}],exact:!0}),ht(e.config.children)]}}),ec=E({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(e,{emit:n}){const a=ee(),i=b(()=>De(a,e.config)),l=b(()=>De(a,e.config,!0));return()=>{const{collapsible:s,children:r=[],icon:o,prefix:c,link:u,text:d}=e.config;return t("section",{class:"sidebar-group"},[t(s?"button":"p",{class:["sidebar-heading",{clickable:s||u,exact:l.value,active:i.value}],...s?{type:"button",onClick:()=>n("toggle"),onKeydown:p=>{p.key==="Enter"&&n("toggle")}}:{}},[t(Y,{icon:o}),u?t(q,{to:u,class:"title"},()=>d):t("span",{class:"title"},d),s?t("span",{class:["arrow",e.open?"down":"end"]}):null]),e.open||!s?t(Bt,{key:c,config:r}):null])}}}),Bt=E({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(e){const n=ee(),a=S(-1),i=l=>{a.value=l===a.value?-1:l};return j(()=>n.path,()=>{const l=e.config.findIndex(s=>mt(n,s));a.value=l},{immediate:!0,flush:"post"}),()=>t("ul",{class:"sidebar-links"},e.config.map((l,s)=>t("li",l.type==="group"?t(ec,{config:l,open:s===a.value,onToggle:()=>i(s)}):t(Zo,{config:l}))))}}),nc=E({name:"SideBar",setup(e,{slots:n}){const a=ee(),i=D(),l=la(),s=S();return V(()=>{j(()=>a.hash,r=>{const o=document.querySelector(`.sidebar a.sidebar-link[href="${a.path}${r}"]`);if(!o)return;const{top:c,height:u}=s.value.getBoundingClientRect(),{top:d,height:p}=o.getBoundingClientRect();d<c?o.scrollIntoView(!0):d+p>c+u&&o.scrollIntoView(!1)})}),()=>{var r,o,c;return t("aside",{class:["sidebar",{"hide-icon":i.value.sidebarIcon===!1}],id:"sidebar",ref:s},[(r=n.top)==null?void 0:r.call(n),((o=n.default)==null?void 0:o.call(n))||t(Bt,{config:l.value}),(c=n.bottom)==null?void 0:c.call(n)])}}}),sa=E({name:"CommonWrapper",props:{noNavbar:Boolean,noSidebar:Boolean},setup(e,{slots:n}){const a=U(),i=B(),l=R(),s=D(),{isMobile:r,isPC:o}=Ue(),[c,u]=Oa(!1),[d,p]=Oa(!1),m=la(),h=S(!1),g=b(()=>e.noNavbar||l.value.navbar===!1||s.value.navbar===!1?!1:!!(i.value.title||s.value.logo||s.value.repo||s.value.navbar)),_=b(()=>e.noSidebar?!1:l.value.sidebar!==!1&&m.value.length!==0&&!l.value.home),f={x:0,y:0},w=C=>{f.x=C.changedTouches[0].clientX,f.y=C.changedTouches[0].clientY},k=C=>{const x=C.changedTouches[0].clientX-f.x,I=C.changedTouches[0].clientY-f.y;Math.abs(x)>Math.abs(I)*1.5&&Math.abs(x)>40&&(x>0&&f.x<=80?u(!0):u(!1))},A=b(()=>l.value.home?!1:l.value.toc||s.value.toc!==!1&&l.value.toc!==!1),T=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let M=0;return H("scroll",Os(()=>{const C=T();C<=58||C<M?h.value=!1:M+200<C&&!c.value&&(h.value=!0),M=C},300,!0)),j(r,C=>{C||u(!1)}),V(()=>{const C=Xi(document.body);j(c,I=>{C.value=I});const x=a.afterEach(()=>{u(!1)});Wn(()=>{C.value=!1,x()})}),()=>t(ce("GlobalEncrypt")?Q("GlobalEncrypt"):Li,()=>{var C;return t("div",{class:["theme-container",{"no-navbar":!g.value,"no-sidebar":!_.value&&!(n.sidebar||n.sidebarTop||n.sidebarBottom),"has-toc":A.value,"hide-navbar":h.value,"sidebar-collapsed":!r.value&&!o.value&&d.value,"sidebar-open":r.value&&c.value},l.value.containerClass||""],onTouchStart:w,onTouchEnd:k},[g.value?t(Xo,{onToggleSidebar:()=>u()},{startBefore:()=>{var x;return(x=n.navbarStartBefore)==null?void 0:x.call(n)},startAfter:()=>{var x;return(x=n.navbarStartAfter)==null?void 0:x.call(n)},centerBefore:()=>{var x;return(x=n.navbarCenterBefore)==null?void 0:x.call(n)},centerAfter:()=>{var x;return(x=n.navbarCenterAfter)==null?void 0:x.call(n)},endBefore:()=>{var x;return(x=n.navbarEndBefore)==null?void 0:x.call(n)},endAfter:()=>{var x;return(x=n.navbarEndAfter)==null?void 0:x.call(n)},screenTop:()=>{var x;return(x=n.navScreenTop)==null?void 0:x.call(n)},screenBottom:()=>{var x;return(x=n.navScreenBottom)==null?void 0:x.call(n)}}):null,t(ye,{name:"fade"},()=>c.value?t("div",{class:"sidebar-mask",onClick:()=>u(!1)}):null),t(ye,{name:"fade"},()=>r.value?null:t("div",{class:"toggle-sidebar-wrapper",onClick:()=>p()},t("span",{class:["arrow",d.value?"end":"start"]}))),t(nc,{},{...n.sidebar?{default:()=>{var x;return(x=n.sidebar)==null?void 0:x.call(n)}}:{},top:()=>{var x;return(x=n.sidebarTop)==null?void 0:x.call(n)},bottom:()=>{var x;return(x=n.sidebarBottom)==null?void 0:x.call(n)}}),(C=n.default)==null?void 0:C.call(n),t(Vo)])})}}),O=E({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},setup(e,{slots:n}){const a=l=>{l.style.transition=`transform ${e.duration}s ease-in-out ${e.delay}s, opacity ${e.duration}s ease-in-out ${e.delay}s`,l.style.transform="translateY(-20px)",l.style.opacity="0"},i=l=>{l.style.transform="translateY(0)",l.style.opacity="1"};return()=>t(e.type==="single"?ye:Dl,{name:"drop",appear:e.appear,onAppear:a,onAfterAppear:i,onEnter:a,onAfterEnter:i,onBeforeLeave:a},()=>{var l;return(l=n.default)==null?void 0:l.call(n)})}});const jn=({custom:e})=>t(Yn,{class:["theme-hope-content",{custom:e}]});jn.displayName="MarkdownContent",jn.props={custom:Boolean};var ra=jn;const Pt=()=>t(L,{name:"author"},()=>t("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));Pt.displayName="AuthorIcon";const Ot=()=>t(L,{name:"calendar"},()=>t("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));Ot.displayName="CalendarIcon";const Rt=()=>t(L,{name:"category"},()=>t("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));Rt.displayName="CategoryIcon";const Vt=()=>t(L,{name:"eye"},()=>t("path",{d:"M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"}));Vt.displayName="EyeIcon";const $t=()=>t(L,{name:"fire"},()=>t("path",{d:"M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"}));$t.displayName="FireIcon";const jt=()=>t(L,{name:"print"},()=>t("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));jt.displayName="PrintIcon";const zt=()=>t(L,{name:"tag"},()=>t("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));zt.displayName="TagIcon";const Nt=()=>t(L,{name:"timer"},()=>t("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));Nt.displayName="TimerIcon";const qt=()=>t(L,{name:"word"},()=>[t("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),t("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);qt.displayName="WordIcon";const ue=()=>{const e=D();return b(()=>e.value.metaLocales)},Ft={"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}};var ac=E({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(e){const n=ue();return()=>e.author.length?t("span",{class:"page-author-info","aria-label":`${n.value.author}${e.pure?"":"🖊"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[t(Pt),t("span",e.author.map(a=>a.url?t("a",{class:"page-author-item",href:a.url,target:"_blank",rel:"noopener noreferrer"},a.name):t("span",{class:"page-author-item"},a.name))),t("span",{property:"author",content:e.author.map(a=>a.name).join(", ")})]):null}}),ic=E({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(e){const n=U(),a=B(),i=ue(),l=(s,r="")=>{r&&a.value.path!==r&&(s.preventDefault(),n.push(r))};return()=>e.category.length?t("span",{class:"page-category-info","aria-label":`${i.value.category}${e.pure?"":"🌈"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[t(Rt),e.category.map(({name:s,path:r})=>t("span",{class:["page-category-item",{[`category${mn(s,9)}`]:!e.pure,clickable:r}],role:r?"navigation":"",onClick:o=>l(o,r)},s)),t("meta",{property:"articleSection",content:e.category.map(({name:s})=>s).join(",")})]):null}}),tc=E({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(e){const n=dn(),a=ue();return()=>e.date?t("span",{class:"page-date-info","aria-label":`${a.value.date}${e.pure?"":"📅"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[t(Ot),t("span",t(vn,()=>e.localizedDate||e.date.toLocaleDateString(n.value))),t("meta",{property:"datePublished",content:e.date.toISOString()||""})]):null}}),lc=E({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(e){const n=ue();return()=>e.isOriginal?t("span",{class:"page-original-info"},n.value.origin):null}});E({name:"PageViewInfo",inheritAttrs:!1,props:{pageview:{type:[Boolean,String],default:!1},pure:Boolean},setup(e){const n=ee(),a=ue(),i=S(),l=S(0);return Ki(i,()=>{const s=i.value.textContent;s&&!isNaN(Number(s))&&(l.value=Number(s))},{childList:!0}),()=>e.pageview?t("span",{class:"page-pageview-info","aria-label":`${a.value.views}${e.pure?"":"🔢"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[t(l.value<1e3?Vt:$t),t("span",{ref:i,class:"waline-pageview-count",id:"ArtalkPV","data-path":W(e.pageview)?e.pageview:J(n.path)},"...")]):null}});var sc=E({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},pure:Boolean},setup(e){const n=ue(),a=Ee(Ft),i=b(()=>{if(!e.readingTime)return null;const{minutes:l}=e.readingTime;return l<1?{text:a.value.less1Minute,time:"PT1M"}:{text:a.value.time.replace("$time",Math.round(l).toString()),time:`PT${Math.round(l)}M`}});return()=>i.value?t("span",{class:"page-reading-time-info","aria-label":`${n.value.readingTime}${e.pure?"":"⌛"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[t(Nt),t("span",i.value.text),t("meta",{property:"timeRequired",content:i.value.time})]):null}}),rc=E({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(e){const n=U(),a=B(),i=ue(),l=(s,r="")=>{r&&a.value.path!==r&&(s.preventDefault(),n.push(r))};return()=>e.tag.length?t("span",{class:"page-tag-info","aria-label":`${i.value.tag}${e.pure?"":"🏷"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[t(zt),e.tag.map(({name:s,path:r})=>t("span",{class:["page-tag-item",{[`tag${mn(s,9)}`]:!e.pure,clickable:r}],role:r?"navigation":"",onClick:o=>l(o,r)},s)),t("meta",{property:"keywords",content:e.tag.map(({name:s})=>s).join(",")})]):null}}),oc=E({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},pure:Boolean},setup(e){const n=ue(),a=Ee(Ft),i=b(()=>{var s;return(s=e.readingTime)==null?void 0:s.words.toString()}),l=b(()=>a.value.word.replace("$word",i.value||""));return()=>i.value?t("span",{class:"page-word-info","aria-label":`${n.value.words}${e.pure?"":"🔠"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[t(qt),t("span",l.value),t("meta",{property:"wordCount",content:i.value})]):null}}),Ht=E({name:"PageInfo",components:{AuthorInfo:ac,CategoryInfo:ic,DateInfo:tc,OriginalInfo:lc,PageViewInfo:()=>null,ReadingTimeInfo:sc,TagInfo:rc,WordInfo:oc},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(e){const n=Pe();return()=>e.items?t("div",{class:"page-info"},e.items.map(a=>t(Q(`${a}Info`),{...e.info,pure:n.value}))):null}}),cc=E({name:"PrintButton",setup(){const e=te(),n=D();return()=>e.value.print===!1?null:t("button",{type:"button",class:"print-button",title:n.value.metaLocales.print,onClick:()=>{window.print()}},t(jt))}});const uc=({title:e,level:n,slug:a})=>t(q,{to:`#${a}`,class:["toc-link",`level${n}`]},()=>e),zn=(e,n)=>{const a=ee();return e.length&&n>0?t("ul",{class:"toc-list"},e.map(i=>{const l=zn(i.children,n-1);return[t("li",{class:["toc-item",{active:ea(a,`#${i.slug}`)}]},uc(i)),l?t("li",l):null]})):null};var Jt=E({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},setup(e,{slots:n}){const a=ee(),i=B(),l=ue(),s=S(),r=o=>{var c;(c=s.value)==null||c.scrollTo({top:o,behavior:"smooth"})};return V(()=>{j(()=>a.hash,o=>{if(s.value){const c=document.querySelector(`#toc a.toc-link[href$="${o}"]`);if(!c)return;const{top:u,height:d}=s.value.getBoundingClientRect(),{top:p,height:m}=c.getBoundingClientRect();p<u?r(s.value.scrollTop+p-u):p+m>u+d&&r(s.value.scrollTop+p+m-u-d)}})}),()=>{var o,c;const u=e.items.length?zn(e.items,e.headerDepth):i.value.headers?zn(i.value.headers,e.headerDepth):null;return u?t("div",{class:"toc-place-holder"},[t("aside",{id:"toc"},[(o=n.before)==null?void 0:o.call(n),t("div",{class:"toc-header"},[l.value.toc,t(cc)]),t("div",{class:"toc-wrapper",ref:s},u),(c=n.after)==null?void 0:c.call(n)])]):null}}}),oa=E({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const n=B(),a=D(),i=S(),l=({target:s})=>{const r=document.querySelector(s.hash);if(r){const o=()=>{r.removeAttribute("tabindex"),r.removeEventListener("blur",o)};r.setAttribute("tabindex","-1"),r.addEventListener("blur",o),r.focus(),window.scrollTo(0,0)}};return V(()=>{j(()=>n.value.path,()=>i.value.focus())}),()=>[t("span",{ref:i,tabindex:"-1"}),t("a",{href:`#${e.content}`,class:"skip-link sr-only",onClick:l},a.value.routeLocales.skipToContent)]}});let Cn=null,nn=null;const dc={wait:()=>Cn,pending:()=>{Cn=new Promise(e=>nn=e)},resolve:()=>{nn==null||nn(),Cn=null,nn=null}},Gt=()=>dc;var Ut=E({name:"FadeSlideY",setup(e,{slots:n}){const{resolve:a,pending:i}=Gt();return()=>t(ye,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:a,onBeforeLeave:i},()=>{var l;return(l=n.default)==null?void 0:l.call(n)})}}),vc=E({name:"FeaturePanel",props:{items:{type:Object,default:()=>[]},header:{type:String,default:""}},setup(e){return()=>t("div",{class:"feature-panel"},[e.header?t("h2",{class:"feature-header"},e.header):null,e.items.length?t("div",{class:"feature-wrapper"},e.items.map(n=>{const a=[t("h3",[t(Y,{icon:n.icon}),t("span",{innerHTML:n.title})]),t("p",{innerHTML:n.details})];return n.link?tn(n.link)?t("a",{class:"feature-item link",href:n.link,role:"navigation","aria-label":n.title,target:"_blank"},a):t(q,{class:"feature-item link",to:n.link,role:"navigation","aria-label":n.title},()=>a):t("div",{class:"feature-item"},a)})):null])}}),pc=E({name:"HeroInfo",setup(e,{slots:n}){const a=R(),i=ze(),l=b(()=>a.value.heroText===!1?!1:a.value.heroText||i.value.title||"Hello"),s=b(()=>a.value.tagline===!1?!1:a.value.tagline||i.value.description||"Welcome to your VuePress site"),r=b(()=>a.value.heroImage?J(a.value.heroImage):null),o=b(()=>a.value.heroImageDark?J(a.value.heroImageDark):null),c=b(()=>a.value.heroAlt||l.value||"hero"),u=b(()=>a.value.actions??[]);return()=>{var d,p;return t("header",{class:"hero-info-wrapper"},[((d=n.heroImage)==null?void 0:d.call(n))||t(O,{appear:!0,type:"group"},()=>[r.value?t("img",{key:"light",class:{light:o.value},src:r.value,alt:c.value}):null,o.value?t("img",{key:"dark",class:"dark",src:o.value,alt:c.value}):null]),((p=n.heroInfo)==null?void 0:p.call(n))||t("div",{class:"hero-info"},[l.value?t(O,{appear:!0,delay:.04},()=>t("h1",{id:"main-title"},l.value)):null,s.value?t(O,{appear:!0,delay:.08},()=>t("p",{class:"description"},s.value)):null,u.value.length?t(O,{appear:!0,delay:.12},()=>t("p",{class:"actions"},u.value.map(m=>t(K,{class:["action-button",m.type||"default"],config:m,noExternalLinkIcon:!0})))):null])])}}}),mc=E({name:"HopePage",setup(e,{slots:n}){const a=Pe(),i=R(),l=b(()=>{const{features:s}=i.value;return cn(s)?s.some(r=>!("items"in r))?[{items:s}]:s:[]});return()=>{var s,r,o;return t("main",{class:["home project",{pure:a.value}],id:"main-content","aria-labelledby":i.value.heroText===null?void 0:"main-title"},[(s=n.top)==null?void 0:s.call(n),t(pc),l.value.map(({header:c="",items:u},d)=>t(O,{appear:!0,delay:.16+d*.08},()=>t(vc,{header:c,items:u}))),(r=n.center)==null?void 0:r.call(n),t(O,{appear:!0,delay:.16+l.value.length*.08},()=>t(ra)),(o=n.bottom)==null?void 0:o.call(n)])}}});const bc=(e,n)=>{const a=e.replace(n,"/").split("/"),i=[];let l=Qn(n);return a.forEach((s,r)=>{r!==a.length-1?(l+=`${s}/`,i.push(l)):s!==""&&(l+=s,i.push(l))}),i};var hc=E({name:"BreadCrumb",setup(){const e=U(),n=B(),a=ie(),i=R(),l=D(),s=S([]),r=b(()=>(i.value.breadcrumb||i.value.breadcrumb!==!1&&l.value.breadcrumb!==!1)&&s.value.length>1),o=b(()=>i.value.breadcrumbIcon||i.value.breadcrumbIcon!==!1&&l.value.breadcrumbIcon!==!1),c=()=>{const u=e.getRoutes(),d=bc(n.value.path,a.value).map(p=>{const m=u.find(h=>h.path===p);if(m){const{meta:h,path:g}=Fe(e,m.path),_=h[$.shortTitle]||h[$.title];if(_)return{title:_,icon:h[$.icon],path:g}}return null}).filter(p=>p!==null);d.length>1&&(s.value=d)};return V(()=>{c(),j(()=>n.value.path,c)}),()=>t("nav",{class:["breadcrumb",{disable:!r.value}]},r.value?t("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},s.value.map((u,d)=>t("li",{class:{"is-active":s.value.length-1===d},property:"itemListElement",typeof:"ListItem"},[t(q,{to:u.path,property:"item",typeof:"WebPage"},()=>[o.value?t(Y,{icon:u.icon}):null,t("span",{property:"name"},u.title||"Unknown")]),t("meta",{property:"position",content:d+1})]))):[])}});const ei=e=>e===!1?!1:W(e)?Te(e,!0):un(e)?e:null,Nn=(e,n,a)=>{const i=e.findIndex(l=>l.link===n);if(i!==-1){const l=e[i+a];return l!=null&&l.link?l:null}for(const l of e)if(l.children){const s=Nn(l.children,n,a);if(s)return s}return null};var gc=E({name:"PageNav",setup(){const e=D(),n=R(),a=la(),i=B(),l=Ge(),s=b(()=>{const o=ei(n.value.prev);return o===!1?null:o||(e.value.prevLink===!1?null:Nn(a.value,i.value.path,-1))}),r=b(()=>{const o=ei(n.value.next);return o===!1?null:o||(e.value.nextLink===!1?null:Nn(a.value,i.value.path,1))});return H("keydown",o=>{o.altKey&&(o.key==="ArrowRight"?r.value&&(l(r.value.link),o.preventDefault()):o.key==="ArrowLeft"&&s.value&&(l(s.value.link),o.preventDefault()))}),()=>s.value||r.value?t("nav",{class:"page-nav"},[s.value?t(K,{class:"prev",config:s.value},()=>{var o,c;return[t("div",{class:"hint"},[t("span",{class:"arrow start"}),e.value.metaLocales.prev]),t("div",{class:"link"},[t(Y,{icon:(o=s.value)==null?void 0:o.icon}),(c=s.value)==null?void 0:c.text])]}):null,r.value?t(K,{class:"next",config:r.value},()=>{var o,c;return[t("div",{class:"hint"},[e.value.metaLocales.next,t("span",{class:"arrow end"})]),t("div",{class:"link"},[(o=r.value)==null?void 0:o.text,t(Y,{icon:(c=r.value)==null?void 0:c.icon})])]}):null]):null}});const fc={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},yc=({docsRepo:e,docsBranch:n,docsDir:a,filePathRelative:i,editLinkPattern:l})=>{if(!i)return null;const s=qi(e);let r;return l?r=l:s!==null&&(r=fc[s]),r?r.replace(/:repo/,Me(e)?e:`https://github.com/${e}`).replace(/:branch/,n).replace(/:path/,ui(`${Qn(a)}/${i}`)):null},kc=()=>{const e=D(),n=B(),a=R();return b(()=>{const{repo:i,docsRepo:l=i,docsBranch:s="main",docsDir:r="",editLink:o,editLinkPattern:c=""}=e.value;if(!(a.value.editLink??o??!0)||!l)return null;const u=yc({docsRepo:l,docsBranch:s,docsDir:r,editLinkPattern:c,filePathRelative:n.value.filePathRelative});return u?{text:e.value.metaLocales.editLink,link:u}:null})},Ec=()=>{const e=ze(),n=D(),a=B(),i=R();return b(()=>{var l,s;return!(i.value.lastUpdated??n.value.lastUpdated??!0)||!((l=a.value.git)!=null&&l.updatedTime)?null:new Date((s=a.value.git)==null?void 0:s.updatedTime).toLocaleString(e.value.lang)})},_c=()=>{const e=D(),n=B(),a=R();return b(()=>{var i;return a.value.contributors??e.value.contributors??!0?((i=n.value.git)==null?void 0:i.contributors)??null:null})};var wc=E({name:"PageTitle",setup(){const e=B(),n=R(),a=D(),{info:i,items:l}=Co();return()=>t("div",{class:"page-title"},[t("h1",[a.value.titleIcon===!1?null:t(Y,{icon:n.value.icon}),e.value.title]),t(Ht,{info:i.value,...l.value===null?{}:{items:l.value}}),t("hr")])}});const Wt=()=>t(L,{name:"edit"},()=>[t("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),t("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);Wt.displayName="EditIcon";var Sc=E({name:"PageMeta",setup(){const e=D(),n=kc(),a=Ec(),i=_c();return()=>{const{metaLocales:l}=e.value;return t("footer",{class:"page-meta"},[n.value?t("div",{class:"meta-item edit-link"},t(K,{class:"label",config:n.value},{before:()=>t(Wt)})):null,t("div",{class:"meta-item git-info"},[a.value?t("div",{class:"update-time"},[t("span",{class:"label"},`${l.lastUpdated}: `),t(vn,()=>t("span",{class:"info"},a.value))]):null,i.value&&i.value.length?t("div",{class:"contributors"},[t("span",{class:"label"},`${l.contributors}: `),i.value.map(({email:s,name:r},o)=>[t("span",{class:"contributor",title:`email: ${s}`},r),o!==i.value.length-1?",":""])]):null])])}}}),Ac=E({name:"NormalPage",setup(e,{slots:n}){const a=R(),i=B(),{isDarkmode:l}=We(),s=D(),r=b(()=>a.value.toc||a.value.toc!==!1&&s.value.toc!==!1);return()=>t("main",{class:"page",id:"main-content"},t(ce("LocalEncrypt")?Q("LocalEncrypt"):Li,()=>{var o,c,u,d;return[(o=n.top)==null?void 0:o.call(n),a.value.cover?t("img",{class:"page-cover",src:a.value.cover,alt:i.value.title,"no-view":""}):null,t(hc),t(wc),r.value?t(Jt,{headerDepth:a.value.headerDepth??s.value.headerDepth??2},{before:()=>{var p;return(p=n.tocBefore)==null?void 0:p.call(n)},after:()=>{var p;return(p=n.tocAfter)==null?void 0:p.call(n)}}):null,(c=n.contentBefore)==null?void 0:c.call(n),t(ra),(u=n.contentAfter)==null?void 0:u.call(n),t(Sc),t(gc),ce("CommentService")?t(Q("CommentService"),{darkmode:l.value}):null,(d=n.bottom)==null?void 0:d.call(n)]}))}}),xc=E({name:"Layout",setup(){const e=te(),n=D(),a=B(),i=R(),{isMobile:l}=Ue(),s=b(()=>{var r,o;return((r=n.value.blog)==null?void 0:r.sidebarDisplay)||((o=e.value.blog)==null?void 0:o.sidebarDisplay)||"mobile"});return()=>[t(oa),t(sa,{},{default:()=>i.value.home?t(mc):t(Ut,()=>t(Ac,{key:a.value.path})),...s.value!=="none"?{navScreenBottom:()=>t(Q("BloggerInfo"))}:{},...!l.value&&s.value==="always"?{sidebar:()=>t(Q("BloggerInfo"))}:{}})]}}),Ic=E({name:"NotFoundHint",setup(){const e=D(),n=()=>{const a=e.value.routeLocales.notFoundMsg;return a[Math.floor(Math.random()*a.length)]};return()=>t("div",{class:"not-found-hint"},[t("p",{class:"error-code"},"404"),t("h1",{class:"error-title"},e.value.routeLocales.notFoundTitle),t("p",{class:"error-hint"},n())])}}),Lc=E({name:"NotFound",setup(e,{slots:n}){const a=ie(),i=D(),{navigate:l}=Pl({to:i.value.home??a.value});return()=>[t(oa),t(sa,{noSidebar:!0},()=>{var s;return t("main",{class:"page not-found",id:"main-content"},((s=n.default)==null?void 0:s.call(n))||[t(Ic),t("div",{class:"actions"},[t("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},i.value.routeLocales.back),t("button",{type:"button",class:"action-button",onClick:()=>l()},i.value.routeLocales.home)])])})]}});const Tc={Github:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>',Gitee:'<svg xmlns="http://www.w3.org/2000/svg" class="icon gitee-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#C71D23"/><path fill="#fff" d="M772.953 454.723H480.17v.006a25.46 25.46 0 0 0-25.46 25.453l-.025 63.649a25.46 25.46 0 0 0 25.46 25.466l178.242-.007a25.46 25.46 0 0 1 25.459 25.46v12.73c0 42.18-34.198 76.378-76.378 76.378H365.583a25.46 25.46 0 0 1-25.46-25.46V416.533h-.006c0-42.18 34.192-76.378 76.378-76.378h356.388v-.013a25.46 25.46 0 0 0 25.46-25.446l.057-63.65h.013a25.46 25.46 0 0 0-25.46-25.471l-356.432.012c-105.453 0-190.946 85.493-190.946 190.946v356.433a25.46 25.46 0 0 0 25.46 25.46H626.56c94.913 0 171.852-76.94 171.852-171.852V480.182a25.46 25.46 0 0 0-25.46-25.46z"/></svg>',QQ:'<svg xmlns="http://www.w3.org/2000/svg" class="icon qq-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#5eaade"/><path fill="#fff" d="M805.25 585.542c-15-48.188-32.25-88.688-58.781-154.97 4.125-174.093-68.25-314.905-234.938-314.905-168.562 0-239.344 143.625-234.844 314.906-26.625 66.375-43.78 106.594-58.78 154.969-31.876 102.656-21.563 145.125-13.688 146.062 16.875 2.063 65.718-77.25 65.718-77.25 0 45.938 23.625 105.844 74.813 149.063-24.75 7.593-80.344 28.03-67.125 50.437 10.688 18.094 183.938 11.531 233.906 5.906 49.969 5.625 223.219 12.188 233.906-5.906 13.22-22.312-42.468-42.844-67.125-50.437 51.188-43.313 74.813-103.22 74.813-149.063 0 0 48.844 79.313 65.719 77.25 7.969-1.031 18.281-43.5-13.594-146.062z"/></svg>',Wechat:'<svg xmlns="http://www.w3.org/2000/svg" class="icon wechat-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1AC88E"/><path fill="#fff" d="M827.551 578.742a176.583 176.583 0 0 0-185.685-158.379 172.942 172.942 0 0 0-186.3 158.379 172.942 172.942 0 0 0 185.686 158.379 282.169 282.169 0 0 0 65.536-10.923l60.689 32.768-16.384-54.613a166.275 166.275 0 0 0 76.458-125.611zm-245.76-27.307a21.845 21.845 0 1 1 0-43.69 24.872 24.872 0 0 1 27.307 21.845 24.872 24.872 0 0 1-27.921 21.845h.614zm121.356 0a21.845 21.845 0 1 1 0-43.69 24.872 24.872 0 0 1 27.306 21.845 24.872 24.872 0 0 1-28.512 21.845h1.206z"/><path fill="#fff" d="M623.662 400.953h21.23A222.709 222.709 0 0 0 419.772 245.6a208.145 208.145 0 0 0-223.323 189.94 182.044 182.044 0 0 0 89.201 150.483l-22.436 67.356 78.279-39.435a389.575 389.575 0 0 0 78.279 10.923h20.616a163.226 163.226 0 0 1-6.667-46.718 182.044 182.044 0 0 1 189.94-177.197zm-121.379-60.69a27.921 27.921 0 1 1 0 55.843 31.562 31.562 0 0 1-33.36-27.921 31.562 31.562 0 0 1 34.59-27.921h-1.23zM346.34 396.107a31.562 31.562 0 0 1-33.383-27.921 31.562 31.562 0 0 1 33.383-27.921 27.921 27.921 0 1 1 0 55.842z"/></svg>'},Cc={category:{"/":{path:"/category/",map:{菜鸟日记:{path:"/category/%E8%8F%9C%E9%B8%9F%E6%97%A5%E8%AE%B0/",keys:["v-4c8df8aa","v-0eb09a8e","v-5967d75c","v-c0ea97a8","v-4b382146","v-556ca76b","v-d89fa10a","v-17c62546","v-005f5747","v-6f754481","v-582f0022","v-d9623eb8","v-95bfbf7e","v-ec77fd94","v-191a2f1e","v-3318da52","v-8035fcb0","v-71344198","v-3d497a28"]},项目专栏:{path:"/category/%E9%A1%B9%E7%9B%AE%E4%B8%93%E6%A0%8F/",keys:["v-11396e4c","v-52f4ced7","v-5425233e","v-794909fa"]},专栏记录:{path:"/category/%E4%B8%93%E6%A0%8F%E8%AE%B0%E5%BD%95/",keys:["v-bd986690"]},关于CS_GUIDER:{path:"/category/%E5%85%B3%E4%BA%8Ecs-guider/",keys:["v-64164596"]},面经:{path:"/category/%E9%9D%A2%E7%BB%8F/",keys:["v-7d08789b","v-c4736ae8","v-c806ba38","v-031ba3e8","v-2f327590"]},面试:{path:"/category/%E9%9D%A2%E8%AF%95/",keys:["v-6fc15a3d"]},PDF:{path:"/category/pdf/",keys:["v-744b3bf6"]},Redis:{path:"/category/redis/",keys:["v-8c5ee32a","v-dc384366"]},算法:{path:"/category/%E7%AE%97%E6%B3%95/",keys:["v-d86466ce","v-714f7799","v-d43273ca","v-113b160a","v-0ab8f568"]},实践练习:{path:"/category/%E5%AE%9E%E8%B7%B5%E7%BB%83%E4%B9%A0/",keys:["v-6e9c2f30","v-5575e5ed","v-6d8dfae0","v-7ae534ba"]}}}},tag:{"/":{path:"/tag/",map:{Java基础:{path:"/tag/java%E5%9F%BA%E7%A1%80/",keys:["v-95bfbf7e"]},论文:{path:"/tag/%E8%AE%BA%E6%96%87/",keys:["v-52f4ced7"]},Git:{path:"/tag/git/",keys:["v-4b382146","v-d89fa10a"]},Java集合框架:{path:"/tag/java%E9%9B%86%E5%90%88%E6%A1%86%E6%9E%B6/",keys:["v-005f5747"]},DMDatabase:{path:"/tag/dmdatabase/",keys:["v-6f754481"]},实践练习:{path:"/tag/%E5%AE%9E%E8%B7%B5%E7%BB%83%E4%B9%A0/",keys:["v-6e9c2f30","v-5575e5ed","v-6d8dfae0","v-d9623eb8","v-ec77fd94","v-7ae534ba"]},网站搭建:{path:"/tag/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA/",keys:["v-191a2f1e"]},Java笔记:{path:"/tag/java%E7%AC%94%E8%AE%B0/",keys:["v-3318da52"]},JVM:{path:"/tag/jvm/",keys:["v-c0ea97a8"]},Linux:{path:"/tag/linux/",keys:["v-0eb09a8e"]},蓝桥杯:{path:"/tag/%E8%93%9D%E6%A1%A5%E6%9D%AF/",keys:["v-8035fcb0"]},MySQL:{path:"/tag/mysql/",keys:["v-4c8df8aa","v-582f0022"]},Netty:{path:"/tag/netty/",keys:["v-556ca76b"]},JavaObject:{path:"/tag/javaobject/",keys:["v-17c62546"]},技巧:{path:"/tag/%E6%8A%80%E5%B7%A7/",keys:["v-5967d75c"]},前言:{path:"/tag/%E5%89%8D%E8%A8%80/",keys:["v-3d497a28"]},介绍:{path:"/tag/%E4%BB%8B%E7%BB%8D/",keys:["v-64164596"]},Java:{path:"/tag/java/",keys:["v-7d08789b","v-2f327590"]},"Java SE":{path:"/tag/java-se/",keys:["v-c806ba38","v-031ba3e8"]},面试:{path:"/tag/%E9%9D%A2%E8%AF%95/",keys:["v-6fc15a3d"]},简历:{path:"/tag/%E7%AE%80%E5%8E%86/",keys:["v-c4736ae8"]},PDF:{path:"/tag/pdf/",keys:["v-744b3bf6"]},Redis:{path:"/tag/redis/",keys:["v-8c5ee32a","v-dc384366"]},leetcode:{path:"/tag/leetcode/",keys:["v-d86466ce","v-714f7799","v-d43273ca","v-113b160a"]},数组双指针:{path:"/tag/%E6%95%B0%E7%BB%84%E5%8F%8C%E6%8C%87%E9%92%88/",keys:["v-714f7799","v-d43273ca"]},"Spring Boot":{path:"/tag/spring-boot/",keys:["v-11396e4c"]},项目专栏:{path:"/tag/%E9%A1%B9%E7%9B%AE%E4%B8%93%E6%A0%8F/",keys:["v-5425233e","v-794909fa"]}}}}},Dc={article:{"/":{path:"/article/",keys:["v-7d08789b","v-c4736ae8","v-c806ba38","v-031ba3e8","v-4c8df8aa","v-0eb09a8e","v-64164596","v-048e8a32","v-6e9c2f30","v-5967d75c","v-d86466ce","v-c0ea97a8","v-4b382146","v-2f327590","v-5575e5ed","v-6d8dfae0","v-11396e4c","v-556ca76b","v-d89fa10a","v-17c62546","v-005f5747","v-6f754481","v-582f0022","v-52f4ced7","v-d9623eb8","v-95bfbf7e","v-ec77fd94","v-191a2f1e","v-3318da52","v-8035fcb0","v-71344198","v-3d497a28","v-714f7799","v-d43273ca","v-113b160a","v-0ab8f568","v-7ae534ba","v-5425233e","v-794909fa","v-8c5ee32a","v-744498a7","v-744b3bf6","v-bd986690","v-6fc15a3d","v-dc384366"]}},star:{"/":{path:"/star/",keys:["v-5967d75c","v-4b382146","v-d89fa10a","v-c4736ae8","v-031ba3e8","v-6f754481","v-4c8df8aa","v-0eb09a8e"]}},timeline:{"/":{path:"/timeline/",keys:["v-64164596","v-048e8a32","v-6e9c2f30","v-5967d75c","v-d86466ce","v-c0ea97a8","v-4b382146","v-2f327590","v-5575e5ed","v-6d8dfae0","v-11396e4c","v-556ca76b","v-d89fa10a","v-7d08789b","v-c4736ae8","v-c806ba38","v-17c62546","v-031ba3e8","v-005f5747","v-6f754481","v-4c8df8aa","v-582f0022","v-52f4ced7","v-d9623eb8","v-95bfbf7e","v-ec77fd94","v-191a2f1e","v-3318da52","v-0eb09a8e","v-8035fcb0","v-71344198","v-3d497a28","v-714f7799","v-d43273ca","v-113b160a","v-0ab8f568","v-7ae534ba","v-5425233e","v-794909fa","v-8c5ee32a","v-744498a7","v-744b3bf6","v-bd986690"]}}},ni=S(Cc),Qt=(e="")=>{const n=B(),a=U(),i=ie();return b(()=>{var l;const s=e||((l=R().value.blog)==null?void 0:l.key)||"";if(!s)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};const r=a.getRoutes();if(!ni.value[s])throw new Error(`useBlogCategory: key ${s} is invalid`);const o=ni.value[s][i.value],c={path:o.path,map:{}};for(const u in o.map){const d=o.map[u];c.map[u]={path:d.path,items:[]};for(const p of d.keys){const m=r.find(({name:h})=>h===p);if(m){const h=Fe(a,m.path);c.map[u].items.push({path:h.path,info:h.meta})}}n.value.path===d.path&&(c.currentItems=c.map[u].items)}return c})},ai=S(Dc),gn=(e="")=>{const n=U(),a=ie();return b(()=>{var i;const l=e||((i=R().value.blog)==null?void 0:i.key)||"";if(!l)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!ai.value[l])throw new Error(`useBlogType: key ${e} is invalid`);const s=n.getRoutes(),r=ai.value[l][a.value],o={path:r.path,items:[]};for(const c of r.keys){const u=s.find(({name:d})=>d===c);if(u){const d=Fe(n,u.path);o.items.push({path:d.path,info:d.meta})}}return o})};const Mc="/assets/hero-197a9d2d.jpg",Kt=Symbol.for("categoryMap"),Qe=()=>{const e=F(Kt);if(!e)throw new Error("useCategoryMap() is called without provider.");return e},Bc=()=>{const e=Qt("category");he(Kt,e)},Ke=()=>{const e=te(),n=D();return b(()=>({...e.value.blog,...n.value.blog}))},Yt=Symbol.for("tagMap"),Ye=()=>{const e=F(Yt);if(!e)throw new Error("useTagMap() is called without provider.");return e},Pc=()=>{const e=Qt("tag");he(Yt,e)},Oc=e=>{const n=D();return b(()=>{const{[$.author]:a}=e.value;return a?$e(a):a===!1?[]:$e(n.value.author,!1)})},Rc=e=>{const n=Qe();return b(()=>$i(e.value[$.category]).map(a=>({name:a,path:n.value.map[a].path})))},Vc=e=>{const n=Ye();return b(()=>ji(e.value[$.tag]).map(a=>({name:a,path:n.value.map[a].path})))},$c=e=>b(()=>{const{[$.date]:n}=e.value;return Zn(n)}),jc=e=>{const n=je(e,"info"),a=Ke(),i=Oc(n),l=Rc(n),s=Vc(n),r=$c(n),o=b(()=>({author:i.value,category:l.value,date:r.value,localizedDate:n.value[$.localizedDate]||"",tag:s.value,isOriginal:n.value[$.isOriginal]||!1,readingTime:n.value[$.readingTime]||null,pageview:e.path})),c=b(()=>a.value.articleInfo);return{info:o,items:c}},Xt=Symbol(""),Xe=()=>{const e=F(Xt);if(!e)throw new Error("useArticles() is called without provider.");return e},zc=()=>{const e=gn("article");he(Xt,e)},Zt=Symbol(""),ca=()=>{const e=F(Zt);if(!e)throw new Error("useStars() is called without provider.");return e},Nc=()=>{const e=gn("star");he(Zt,e)},el=Symbol(""),ua=()=>{const e=F(el);if(!e)throw new Error("useTimelines() is called without provider.");return e},qc=()=>{const e=gn("timeline"),n=b(()=>{const a=[];return e.value.items.forEach(({info:i,path:l})=>{const s=Zn(i[$.date]),r=s==null?void 0:s.getFullYear(),o=s?s.getMonth()+1:null,c=s==null?void 0:s.getDate();r&&o&&c&&((!a[0]||a[0].year!==r)&&a.unshift({year:r,items:[]}),a[0].items.push({date:`${o}/${c}`,info:i,path:l}))}),{...e.value,config:a.reverse()}});he(el,n)},Fc=()=>{zc(),Bc(),Nc(),Pc(),qc()};var Hc=E({name:"SocialMedia",setup(){const e=Ke(),n=Pe(),a=b(()=>{const i=e.value.medias;return i?qe(i).map(([l,s])=>({name:l,icon:Tc[l],url:s})):[]});return()=>a.value.length?t("div",{class:"social-media-wrapper"},a.value.map(({name:i,icon:l,url:s})=>t("a",{class:"social-media",href:s,rel:"noopener noreferrer",target:"_blank","aria-label":i,...n.value?{}:{"data-balloon-pos":"up"},innerHTML:l}))):null}}),da=E({name:"BloggerInfo",setup(){const e=Ke(),n=ze(),a=D(),i=Xe(),l=Qe(),s=Ye(),r=ua(),o=Ge(),c=b(()=>{var m;return e.value.name||((m=$e(a.value.author)[0])==null?void 0:m.name)||n.value.title}),u=b(()=>e.value.avatar||a.value.logo),d=b(()=>a.value.blogLocales),p=b(()=>e.value.intro);return()=>t("div",{class:"blogger-info",vocab:"https://schema.org/",typeof:"Person"},[t("div",{class:"blogger",...p.value?{style:{cursor:"pointer"},"aria-label":d.value.intro,"data-balloon-pos":"down",role:"navigation",onClick:()=>o(p.value)}:{}},[u.value?t("img",{class:["blogger-avatar",{round:e.value.roundAvatar}],src:J(u.value),property:"image",alt:"Blogger Avatar"}):null,c.value?t("div",{class:"blogger-name",property:"name"},c.value):null,e.value.description?t("div",{class:"blogger-description",innerHTML:e.value.description}):null,p.value?t("meta",{property:"url",content:J(p.value)}):null]),t("div",{class:"num-wrapper"},[t(q,{to:i.value.path},()=>[t("div",{class:"num"},i.value.items.length),t("div",d.value.article)]),t(q,{to:l.value.path},()=>[t("div",{class:"num"},Z(l.value.map).length),t("div",d.value.category)]),t(q,{to:s.value.path},()=>[t("div",{class:"num"},Z(s.value.map).length),t("div",d.value.tag)]),t(q,{to:r.value.path},()=>[t("div",{class:"num"},r.value.items.length),t("div",d.value.timeline)])]),t(Hc)])}});const qn=()=>t(L,{name:"category"},()=>t("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));qn.displayName="CategoryIcon";const Fn=()=>t(L,{name:"tag"},()=>t("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));Fn.displayName="TagIcon";const va=()=>t(L,{name:"timeline"},()=>t("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));va.displayName="TimelineIcon";const nl=()=>t(L,{name:"slides"},()=>t("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));nl.displayName="SlideIcon";const al=()=>t(L,{name:"sticky"},()=>[t("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);al.displayName="StickyIcon";const rn=()=>t(L,{name:"article"},()=>t("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));rn.displayName="ArticleIcon";const il=()=>t(L,{name:"book"},()=>t("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));il.displayName="BookIcon";const tl=()=>t(L,{name:"link"},()=>t("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));tl.displayName="LinkIcon";const ll=()=>t(L,{name:"project"},()=>t("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));ll.displayName="ProjectIcon";const sl=()=>t(L,{name:"friend"},()=>t("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));sl.displayName="FriendIcon";const Hn=()=>t(L,{name:"slide-down"},()=>t("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));Hn.displayName="SlideDownIcon";const rl=()=>t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});rl.displayName="EmptyIcon";const ol=()=>t(L,{name:"lock"},()=>t("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));ol.displayName="LockIcon";var Jc=E({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},setup(e,{slots:n}){const a=je(e,"info"),{info:i,items:l}=jc(e);return()=>{var s,r,o;const{[$.title]:c,[$.type]:u,[$.isEncrypted]:d,[$.cover]:p,[$.excerpt]:m,[$.sticky]:h}=a.value,g=i.value;return t("div",{class:"article-item"},t("article",{class:"article",vocab:"https://schema.org/",typeof:"Article"},[((s=n.cover)==null?void 0:s.call(n,{cover:p}))||(p?[t("img",{class:"article-cover",src:J(p)}),t("meta",{property:"image",content:J(p)})]:[]),h?t(al):null,t(q,{to:e.path},()=>{var _;return((_=n.title)==null?void 0:_.call(n,{title:c,isEncrypted:d,type:u}))||t("header",{class:"title"},[d?t(ol):null,u===dt.slide?t(nl):null,t("span",{property:"headline"},c)])}),((r=n.excerpt)==null?void 0:r.call(n,{excerpt:m}))||(m?t("div",{class:"article-excerpt",innerHTML:m}):null),t("hr",{class:"hr"}),((o=n.info)==null?void 0:o.call(n,{info:g}))||t(Ht,{info:g,...l.value?{items:l.value}:{}})]))}}}),Gc=E({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(e,{emit:n}){let a;const i=D(),l=S(""),s=b(()=>i.value.paginationLocales),r=b(()=>Math.ceil(e.total/e.perPage)),o=b(()=>!!r.value&&r.value!==1),c=b(()=>r.value<7?!1:e.current>4),u=b(()=>r.value<7?!1:e.current<r.value-3),d=b(()=>{const{current:h}=e;let g=1,_=r.value;const f=[];r.value>=7&&(h<=4&&h<r.value-3?(g=1,_=5):h>4&&h>=r.value-3?(_=r.value,g=r.value-4):r.value>7&&(g=h-2,_=h+2));for(let w=g;w<=_;w++)f.push(w);return f}),p=h=>n("updateCurrentPage",h),m=h=>{const g=parseInt(h);g<=r.value&&g>0?p(g):a.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${s.value.errorText.replace(/\$page/g,r.value.toString())}`)};return V(()=>{a=new Is}),()=>t("div",{class:"pagination-wrapper"},o.value?t("div",{class:"pagination-list"},[t("div",{class:"page-number"},[e.current>1?t("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>p(e.current-1)},s.value.prev):null,c.value?[t("div",{role:"navigation",onClick:()=>p(1)},1),t("div",{class:"ellipsis"},"...")]:null,d.value.map(h=>t("div",{key:h,class:{active:e.current===h},role:"navigation",onClick:()=>p(h)},h)),u.value?[t("div",{class:"ellipsis"},"..."),t("div",{role:"navigation",onClick:()=>p(r.value)},r.value)]:null,e.current<r.value?t("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>p(e.current+1)},s.value.next):null]),t("div",{class:"navigate-wrapper"},[t("label",{for:"navigation-text"},`${s.value.navigate}: `),t("input",{id:"navigation-text",value:l.value,onInput:({target:h})=>{l.value=h.value},onKeydown:h=>{h.key==="Enter"&&(h.preventDefault(),m(l.value))}}),t("button",{class:"navigate",role:"navigation",title:s.value.action,onClick:()=>m(l.value)},s.value.action)])]):[])}}),pa=E({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(e){const n=ee(),a=U(),i=Ke(),l=S(1),s=b(()=>i.value.articlePerPage||10),r=b(()=>e.items.slice((l.value-1)*s.value,l.value*s.value)),o=c=>{l.value=c;const u={...n.query};u.page===c.toString()||c===1&&!u.page||(c===1?delete u.page:u.page=c.toString(),a.push({path:n.path,query:u}))};return V(()=>{const{page:c}=n.query;o(c?Number(c):1),j(l,()=>{const u=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,u)},100)})}),()=>t("div",{id:"article-list",class:"article-wrapper"},r.value.length?[...r.value.map(({info:c,path:u},d)=>t(O,{appear:!0,delay:d*.04},()=>t(Jc,{key:u,info:c,path:u}))),t(Gc,{current:l.value,perPage:s.value,total:e.items.length,onUpdateCurrentPage:o})]:t(rl))}}),ma=E({name:"CategoryList",setup(){const e=B(),n=Qe();return()=>t("ul",{class:"category-list-wrapper"},qe(n.value.map).map(([a,{path:i,items:l}])=>t("li",{class:["category",`category${mn(a,9)}`,{active:i===e.value.path}]},t(q,{to:i},()=>[a,t("span",{class:"category-num"},l.length)]))))}}),ba=E({name:"TagList",setup(){const e=R(),n=Ye(),a=i=>{var l;return i===((l=e.value.blog)==null?void 0:l.name)};return()=>t("ul",{class:"tag-list-wrapper"},qe(n.value.map).map(([i,{path:l,items:s}])=>t("li",{class:["tag",`tag${mn(i,9)}`,{active:a(i)}]},t(q,{to:l},()=>[i,t("span",{class:"tag-num"},s.length)]))))}}),Uc=E({name:"TimelineList",setup(){const e=D(),n=ua(),a=Ge(),i=b(()=>e.value.blogLocales.timeline);return()=>t("div",{class:"timeline-list-wrapper"},[t("div",{class:"timeline-list-title",onClick:()=>a(n.value.path)},[t(va),t("span",{class:"num"},n.value.items.length),i.value]),t("hr"),t("div",{class:"timeline-content"},t("ul",{class:"timeline-list"},n.value.config.map(({year:l,items:s},r)=>t(O,{appear:!0,delay:.08*(r+1)},()=>t("li",[t("h3",{class:"timeline-year"},l),t("ul",{class:"timeline-year-wrapper"},s.map(({date:o,info:c,path:u})=>t("li",{class:"timeline-item"},[t("span",{class:"timeline-date"},o),t(q,{class:"timeline-title",to:u},()=>c[$.title])])))])))))])}}),cl=E({name:"InfoList",setup(){const e=D(),n=Xe(),a=Qe(),i=b(()=>Z(a.value.map).length),l=ca(),s=Ye(),r=b(()=>Z(s.value.map).length),o=Ge(),c=S("article"),u=b(()=>e.value.blogLocales),d=[["article",rn],["category",qn],["tag",Fn],["timeline",va]];return()=>t("div",{class:"blog-info-list"},[t("div",{class:"blog-type-wrapper"},d.map(([p,m])=>t("button",{type:"button",class:"blog-type-button",onClick:()=>{c.value=p}},t("div",{class:["icon-wrapper",{active:c.value===p}],"aria-label":u.value[p],"data-balloon-pos":"up"},t(m))))),t(O,()=>c.value==="article"?t("div",{class:"sticky-article-wrapper"},[t("div",{class:"title",onClick:()=>o(n.value.path)},[t(rn),t("span",{class:"num"},n.value.items.length),u.value.article]),t("hr"),t("ul",{class:"sticky-article-list"},l.value.items.map(({info:p,path:m},h)=>t(O,{appear:!0,delay:.08*(h+1)},()=>t("li",{class:"sticky-article"},t(q,{to:m},()=>p[$.title])))))]):c.value==="category"?t("div",{class:"category-wrapper"},[i.value?t("div",{class:"title",onClick:()=>o(a.value.path)},[t(qn),t("span",{class:"num"},i.value),u.value.category]):null,t("hr"),t(O,{delay:.04},()=>t(ma))]):c.value==="tag"?t("div",{class:"tag-wrapper"},[r.value?t("div",{class:"title",onClick:()=>o(s.value.path)},[t(Fn),t("span",{class:"num"},r.value),u.value.tag]):null,t("hr"),t(O,{delay:.04},()=>t(ba))]):t(O,()=>t(Uc)))])}}),fn=E({name:"BlogWrapper",setup(e,{slots:n}){const{isMobile:a}=Ue();return()=>[t(oa),t(sa,{noSidebar:!0},{default:()=>{var i;return(i=n.default)==null?void 0:i.call(n)},navScreenBottom:()=>t(da),...a.value?{sidebar:()=>t(cl)}:{}})]}});const ul=()=>t("aside",{class:"blog-info-wrapper"},[t(O,()=>t(da)),t(O,{delay:.04},()=>t(cl))]);ul.displayName="InfoPanel";var yn=ul,Wc=E({name:"BlogPage",components:{CategoryList:ma,TagList:ba},setup(){const e=B(),n=R(),a=Qe(),i=Ye(),l=b(()=>n.value.blog||{}),s=b(()=>{const{key:o=""}=l.value;return o==="category"?"CategoryList":o==="tag"?"TagList":null}),r=b(()=>{const{name:o="",key:c=""}=l.value;return c==="category"?o?a.value.map[o].items:[]:c==="tag"?o?i.value.map[o].items:[]:[]});return()=>t(fn,()=>t("div",{class:"page blog"},t("div",{class:"blog-page-wrapper"},[t("main",{class:"blog-main",id:"main-content"},[t(O,()=>s.value?t(Q(s.value)):null),l.value.name?t(O,{appear:!0,delay:.24},()=>t(pa,{key:e.value.path,items:r.value})):null]),t(O,{delay:.16},()=>t(yn))])))}}),Qc=E({name:"BlogHero",setup(){const e=Ul(),n=R(),a=S(),i=b(()=>n.value.heroImage||null),l=b(()=>n.value.heroFullScreen||!1),s=b(()=>{const{bgImage:r}=n.value;return W(r)?J(r):r===!1?null:Mc});return()=>n.value.hero===!1?null:t("div",{ref:a,class:["blog-hero",{fullscreen:l.value,"no-bg":!s.value}]},[s.value?t("div",{class:"mask",style:[{background:`url(${s.value}) center/cover no-repeat`},n.value.bgImageStyle]}):null,t(O,{appear:!0,delay:.04},()=>i.value?t("img",{class:"hero-image",style:n.value.heroImageStyle,src:J(i.value),alt:n.value.heroAlt||"hero image"}):null),t(O,{appear:!0,delay:.08},()=>n.value.heroText===!1?null:t("h1",n.value.heroText||e.value)),t(O,{appear:!0,delay:.12},()=>n.value.tagline?t("p",{class:"description",innerHTML:n.value.tagline}):null),l.value?t("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:a.value.clientHeight,behavior:"smooth"})}},[t(Hn),t(Hn)]):null])}});const Kc=["link","article","book","project","friend"];var Yc=E({name:"ProjectPanel",components:{ArticleIcon:rn,BookIcon:il,FriendIcon:sl,LinkIcon:tl,ProjectIcon:ll},setup(){const e=R(),n=Pe(),a=Ge(),i=(l="",s="icon")=>Kc.includes(l)?t(Q(`${l}-icon`)):Me(l)?t("img",{src:l,alt:s,class:"image"}):bn(l)?t("img",{src:J(l),alt:s,class:"image"}):t(Y,{icon:l});return()=>{var l;return(l=e.value.projects)!=null&&l.length?t("div",{class:"project-panel"},e.value.projects.map(({icon:s,link:r,name:o,desc:c},u)=>t("div",{class:["project",{[`project${u%9}`]:!n.value}],onClick:()=>a(r)},[i(s,o),t("div",{class:"name"},o),t("div",{class:"desc"},c)]))):null}}}),Xc=E({name:"BlogHome",setup(){const e=Xe();return()=>t("div",{class:"page blog"},[t(Qc),t("div",{class:"blog-page-wrapper"},[t("main",{class:"blog-home",id:"main-content"},[t(O,{appear:!0,delay:.16},()=>t(Yc)),t(O,{appear:!0,delay:.24},()=>t(pa,{items:e.value.items}))]),t(O,{appear:!0,delay:.16},()=>t(yn))]),t(O,{appear:!0,delay:.28},()=>t(ra))])}}),Zc=E({name:"BlogHome",setup(){return()=>t(fn,()=>t(Xc))}}),dl=E({name:"ArticleType",setup(){const e=B(),n=ie(),a=D(),i=Xe(),l=ca(),s=b(()=>{const r=a.value.blogLocales;return[{text:r.all,path:i.value.path},{text:r.star,path:l.value.path},...[].map(({key:o,path:c})=>({text:r[o],path:c.replace(/^\//,n.value)}))]});return()=>t("ul",{class:"article-type-wrapper"},s.value.map(r=>t("li",{class:["article-type",{active:r.path===e.value.path}]},t(q,{to:r.path},()=>r.text))))}}),eu=E({name:"BlogPage",setup(){const e=gn(),n=R(),a=B(),i=Xe(),l=ca(),s=b(()=>{const{key:r="",type:o}=n.value.blog||{};return r==="star"?l.value.items:o==="type"&&r?e.value.items:i.value.items});return()=>t(fn,()=>t("div",{class:"page blog"},t("div",{class:"blog-page-wrapper"},[t("main",{class:"blog-main",id:"main-content"},[t(O,()=>t(dl)),t(O,{appear:!0,delay:.24},()=>t(pa,{key:a.value.path,items:s.value}))]),t(O,{delay:.16},()=>t(yn))])))}}),nu=E({name:"TimelineItems",setup(){const e=Ke(),n=D(),a=ua(),i=b(()=>e.value.timeline||n.value.blogLocales.timelineTitle),l=b(()=>a.value.config.map(({year:s})=>({title:s.toString(),level:2,slug:s.toString(),children:[]})));return()=>t("div",{class:"timeline-wrapper"},t("ul",{class:"timeline-content"},[t(O,()=>t("li",{class:"motto"},i.value)),t(Jt,{items:l.value}),a.value.config.map(({year:s,items:r},o)=>t(O,{appear:!0,delay:.08*(o+1),type:"group"},()=>[t("h3",{key:"title",id:s,class:"timeline-year-title"},t("span",s)),t("li",{key:"content",class:"timeline-year-list"},[t("ul",{class:"timeline-year-wrapper"},r.map(({date:c,info:u,path:d})=>t("li",{class:"timeline-item"},[t("span",{class:"timeline-date"},c),t(q,{class:"timeline-title",to:d},()=>u[$.title])])))])]))]))}}),au=E({name:"Timeline",components:{ArticleType:dl,CategoryList:ma,TagList:ba},setup(){return()=>t(fn,()=>t("div",{class:"page blog"},t("div",{class:"blog-page-wrapper"},[t("main",{class:"blog-main",id:"main-content"},[t(O,{appear:!0,delay:.24},()=>t(nu))]),t(O,{delay:.16},()=>t(yn))])))}});const xe="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),pe=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,54,55,56,57,58,59,60,61,62,63,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,-1,-1,-1,-1,-1,-1,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,-1,-1,-1,-1,-1],ii=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],ti=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],vl=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892],Jn=(e,n)=>{if(n<=0||n>e.length)throw Error(`Illegal len: ${n}`);let a,i,l=0;const s=[];for(;l<n;){if(a=255&e[l++],s.push(xe[a>>2&63]),a=(3&a)<<4,l>=n){s.push(xe[63&a]);break}if(i=255&e[l++],a|=i>>4&15,s.push(xe[63&a]),a=(15&i)<<2,l>=n){s.push(xe[63&a]);break}i=255&e[l++],a|=i>>6&3,s.push(xe[63&a]),s.push(xe[63&i])}return s.join("")},iu=typeof process<"u"&&process&&typeof process.nextTick=="function"?typeof setImmediate=="function"?setImmediate:process.nextTick:setTimeout,Ve=(e,n,a,i)=>{let l,s=e[n],r=e[n+1];return s^=a[0],l=i[s>>>24],l+=i[256|s>>16&255],l^=i[512|s>>8&255],l+=i[768|255&s],r^=l^a[1],l=i[r>>>24],l+=i[256|r>>16&255],l^=i[512|r>>8&255],l+=i[768|255&r],s^=l^a[2],l=i[s>>>24],l+=i[256|s>>16&255],l^=i[512|s>>8&255],l+=i[768|255&s],r^=l^a[3],l=i[r>>>24],l+=i[256|r>>16&255],l^=i[512|r>>8&255],l+=i[768|255&r],s^=l^a[4],l=i[s>>>24],l+=i[256|s>>16&255],l^=i[512|s>>8&255],l+=i[768|255&s],r^=l^a[5],l=i[r>>>24],l+=i[256|r>>16&255],l^=i[512|r>>8&255],l+=i[768|255&r],s^=l^a[6],l=i[s>>>24],l+=i[256|s>>16&255],l^=i[512|s>>8&255],l+=i[768|255&s],r^=l^a[7],l=i[r>>>24],l+=i[256|r>>16&255],l^=i[512|r>>8&255],l+=i[768|255&r],s^=l^a[8],l=i[s>>>24],l+=i[256|s>>16&255],l^=i[512|s>>8&255],l+=i[768|255&s],r^=l^a[9],l=i[r>>>24],l+=i[256|r>>16&255],l^=i[512|r>>8&255],l+=i[768|255&r],s^=l^a[10],l=i[s>>>24],l+=i[256|s>>16&255],l^=i[512|s>>8&255],l+=i[768|255&s],r^=l^a[11],l=i[r>>>24],l+=i[256|r>>16&255],l^=i[512|r>>8&255],l+=i[768|255&r],s^=l^a[12],l=i[s>>>24],l+=i[256|s>>16&255],l^=i[512|s>>8&255],l+=i[768|255&s],r^=l^a[13],l=i[r>>>24],l+=i[256|r>>16&255],l^=i[512|r>>8&255],l+=i[768|255&r],s^=l^a[14],l=i[s>>>24],l+=i[256|s>>16&255],l^=i[512|s>>8&255],l+=i[768|255&s],r^=l^a[15],l=i[r>>>24],l+=i[256|r>>16&255],l^=i[512|r>>8&255],l+=i[768|255&r],s^=l^a[16],e[n]=r^a[17],e[n+1]=s,e},Ie=(e,n)=>{let a=0;for(let i=0;i<4;++i)a=a<<8|255&e[n],n=(n+1)%e.length;return{key:a,offp:n}},li=(e,n,a)=>{const i=n.length,l=a.length;let s,r=0,o=[0,0];for(let c=0;c<i;c++)s=Ie(e,r),r=s.offp,n[c]=n[c]^s.key;for(let c=0;c<i;c+=2)o=Ve(o,0,n,a),n[c]=o[0],n[c+1]=o[1];for(let c=0;c<l;c+=2)o=Ve(o,0,n,a),a[c]=o[0],a[c+1]=o[1]},si=(e,n,a,i,l)=>{const s=vl.slice(),r=s.length;if(a<4||a>31){const m=new Error(`Illegal number of rounds (4-31): ${a}`);if(i===!1)return Promise.reject(m);throw m}if(n.length!==16){const m=new Error(`Illegal salt length: ${n.length} != 16`);if(i===!1)return Promise.reject(m);throw m}let o,c;a=1<<a>>>0;let u,d=0;Int32Array?(o=new Int32Array(ii),c=new Int32Array(ti)):(o=ii.slice(),c=ti.slice()),((m,h,g,_)=>{const f=g.length,w=_.length;let k,A=0,T=[0,0];for(let M=0;M<f;M++)k=Ie(h,A),A=k.offp,g[M]=g[M]^k.key;A=0;for(let M=0;M<f;M+=2)k=Ie(m,A),A=k.offp,T[0]^=k.key,k=Ie(m,A),A=k.offp,T[1]^=k.key,T=Ve(T,0,g,_),g[M]=T[0],g[M+1]=T[1];for(let M=0;M<w;M+=2)k=Ie(m,A),A=k.offp,T[0]^=k.key,k=Ie(m,A),A=k.offp,T[1]^=k.key,T=Ve(T,0,g,_),_[M]=T[0],_[M+1]=T[1]})(n,e,o,c);const p=()=>{if(l&&l(d/a),!(d<a)){for(d=0;d<64;d++)for(u=0;u<r>>1;u++)Ve(s,u<<1,o,c);const m=[];for(d=0;d<r;d++)m.push((s[d]>>24&255)>>>0),m.push((s[d]>>16&255)>>>0),m.push((s[d]>>8&255)>>>0),m.push((255&s[d])>>>0);return i===!1?Promise.resolve(m):m}{const m=Date.now();for(;d<a&&(d+=1,li(e,o,c),li(n,o,c),!(Date.now()-m>100)););}if(i===!1)return new Promise(m=>iu(()=>{p().then(m)}))};if(i===!1)return p();{let m;for(;;)if((m=p())!==void 0)return m||[]}},tu=(e=10)=>{if(typeof e!="number")throw Error("Illegal arguments: "+typeof e);e<4?e=4:e>31&&(e=31);const n=[];return n.push("$2a$"),e<10&&n.push("0"),n.push(e.toString()),n.push("$"),n.push(Jn((a=>{try{let i;return(self.crypto||self.msCrypto).getRandomValues(i=new Uint32Array(a)),Array.prototype.slice.call(i)}catch{throw Error("WebCryptoAPI is not available")}})(16),16)),n.join("")};function lu(e,n,a,i){if(typeof e!="string"||typeof n!="string"){const p=new Error("Invalid string / salt: Not a string");if(a===!1)return Promise.reject(p);throw p}let l,s;if(n.charAt(0)!=="$"||n.charAt(1)!=="2"){const p=new Error("Invalid salt version: "+n.substring(0,2));if(a===!1)return Promise.reject(p);throw p}if(n.charAt(2)==="$")l=String.fromCharCode(0),s=3;else{if(l=n.charAt(2),l!=="a"&&l!=="b"&&l!=="y"||n.charAt(3)!=="$"){const p=Error("Invalid salt revision: "+n.substring(2,4));if(a===!1)return Promise.reject(p);throw p}s=4}if(n.charAt(s+2)>"$"){const p=new Error("Missing salt rounds");if(a===!1)return Promise.reject(p);throw p}const r=10*parseInt(n.substring(s,s+1),10)+parseInt(n.substring(s+1,s+2),10),o=n.substring(s+3,s+25),c=(p=>{const m=[];let h=0;var g;return g=_=>{m.push(_)},((_,f)=>{let w,k=null;for(;(w=k!==null?k:_())!==null;)w>=55296&&w<=57343&&(k=_())!==null&&k>=56320&&k<=57343?(f(1024*(w-55296)+k-56320+65536),k=null):f(w);k!==null&&f(k)})(()=>h>=p.length?null:p.charCodeAt(h++),function(_){((f,w)=>{let k=null;for(typeof f=="number"&&(k=f,f=()=>null);k!==null||(k=f())!==null;)k<128?w(127&k):k<2048?(w(k>>6&31|192),w(63&k|128)):k<65536?(w(k>>12&15|224),w(k>>6&63|128),w(63&k|128)):(w(k>>18&7|240),w(k>>12&63|128),w(k>>6&63|128),w(63&k|128)),k=null})(_,g)}),m})(e+=l>="a"?"\0":""),u=((p,m)=>{if(m<=0)throw Error(`Illegal len: ${m}`);const h=p.length;let g,_,f,w,k,A,T=0,M=0;const C=[];for(;T<h-1&&M<m&&(A=p.charCodeAt(T++),g=A<pe.length?pe[A]:-1,A=p.charCodeAt(T++),_=A<pe.length?pe[A]:-1,g!=-1&&_!=-1)&&(k=g<<2>>>0,k|=(48&_)>>4,C.push(String.fromCharCode(k)),!(++M>=m||T>=h))&&(A=p.charCodeAt(T++),f=A<pe.length?pe[A]:-1,f!=-1)&&(k=(15&_)<<4>>>0,k|=(60&f)>>2,C.push(String.fromCharCode(k)),!(++M>=m||T>=h));)A=p.charCodeAt(T++),w=A<pe.length?pe[A]:-1,k=(3&f)<<6>>>0,k|=w,C.push(String.fromCharCode(k)),++M;return C.map(x=>x.charCodeAt(0))})(o,16),d=p=>{const m=[];return m.push("$2"),l>="a"&&m.push(l),m.push("$"),r<10&&m.push("0"),m.push(r.toString()),m.push("$"),m.push(Jn(u,u.length)),m.push(Jn(p,4*vl.length-1)),m.join("")};return a===!1?si(c,u,r,!1,i).then(p=>d(p)):d(si(c,u,r,!0,i))}const su=(e,n=10)=>{if(typeof n=="number"&&(n=tu(n)),typeof e!="string"||typeof n!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof n);return lu(e,n,!0)},Gn=(e,n)=>{if(typeof e!="string"||typeof n!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof n);return n.length===60&&su(e,n.substring(0,n.length-31))===n},pl=()=>t(L,{name:"lock"},()=>t("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));pl.displayName="LockIcon";var ml=E({name:"PasswordModal",props:{full:Boolean},emits:["verify"],setup(e,{emit:n}){const a=R(),i=D(),l=S(""),s=S(!1),r=S(!1),o=b(()=>i.value.encryptLocales);let c=null;const u=()=>{c&&clearTimeout(c),s.value=!1,n("verify",l.value,r.value),Be().then(()=>{s.value=!0,c=setTimeout(()=>{s.value=!1},1e3)})};return()=>t("div",{class:["password-layer",{expand:e.full||a.value.home}]},t("div",{class:"password-modal"},[t("div",{class:["hint",{tried:s.value}]},s.value?o.value.errorHint:t(pl,{"aria-label":o.value.iconLabel})),t("div",{class:"password"},[t("input",{type:"password",value:l.value,placeholder:o.value.placeholder,onInput:({target:d})=>{l.value=d.value},onKeydown:({key:d})=>{d==="Enter"&&u()}})]),t("div",{class:"remember-password"},[t("input",{type:"checkbox",value:r.value,onChange:()=>r.value=!r.value}),o.value.remember]),t("button",{type:"button",class:"submit",onClick:()=>u()},"OK")]))}});const bl=()=>{const e=te();return b(()=>e.value.encrypt||{})},ri="VUEPRESS_HOPE_GLOBAL_TOKEN",ru=()=>{const e=bl(),n=Je(ri,""),a=Zi(ri,""),i=b(()=>{const{global:s=!1,admin:r=[]}=e.value;return s&&r.length>0}),l=b(()=>{if(i.value){if(n.value)return e.value.admin.some(s=>Gn(n.value,s));if(a.value)return e.value.admin.some(s=>Gn(a.value,s))}return!1});return{isEncrypted:i,isDecrypted:l,validate:(s,r=!1)=>{(r?n:a).value=s}}},Dn=(e="",n)=>!!e&&Gn(e,n),oi="VUEPRESS_HOPE_PATH_TOKEN",ou=()=>{const e=B(),n=bl(),a=Je(oi,{}),i=Zi(oi,{}),l=r=>un(n.value.config)?Z(n.value.config).filter(o=>Ce(decodeURI(r),o)).sort((o,c)=>c.length-o.length):[],s=r=>{const o=l(r);if(o.length>0){const{config:c={}}=n.value;return{isEncrypted:!0,isDecrypted:o.some(u=>a.value[u]&&c[u].some(d=>Dn(a.value[u],d))||i.value[u]&&c[u].some(d=>Dn(i.value[u],d)))}}return{isDecrypted:!1,isEncrypted:!1}};return{status:b(()=>s(e.value.path)),getStatus:s,validate:(r,o=!1)=>{const{config:c={}}=n.value,u=l(e.value.path);for(const d of u)if(c[d].filter(p=>Dn(r,p))){(o?a:i).value[d]=r;break}}}};var cu=E({name:"GlobalEncrypt",setup(e,{slots:n}){const{isDecrypted:a,isEncrypted:i,validate:l}=ru(),s=S(!1);return V(()=>{s.value=!0}),()=>t(Ut,()=>{var r,o;return i.value?s.value?a.value?(r=n.default)==null?void 0:r.call(n):t(ml,{full:!0,onVerify:l}):null:(o=n.default)==null?void 0:o.call(n)})}}),uu=E({name:"LocalEncrypt",setup(e,{slots:n}){const{status:a,validate:i}=ou(),l=S(!1);return V(()=>{l.value=!0}),()=>{var s,r;const{isEncrypted:o,isDecrypted:c}=a.value;return o?l.value?c?((s=n.default)==null?void 0:s.call(n))||null:t(ml,{full:!0,onVerify:i}):null:((r=n.default)==null?void 0:r.call(n))||null}}});const du=()=>t(L,{name:"back"},()=>t("path",{d:"M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"})),vu=()=>t(L,{name:"home"},()=>t("path",{d:"M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"}));var pu=E({name:"SlidePage",setup(){const e=U(),n=S(!1),a=S(),i=()=>{n.value=!n.value},l=()=>{n.value=!1},s=()=>{l(),window.history.go(-1)},r=()=>{l(),e.push("/")};return Qs(a,l),()=>t("div",{class:"presentation"},[t(Yn),t("div",{ref:a,class:["menu",{active:n.value}]},[t("button",{type:"button",class:"menu-button",onClick:()=>i()},t("span",{class:"icon"})),t("button",{type:"button",class:"back-button",onClick:()=>s()},t(du)),t("button",{type:"button",class:"home-button",onClick:()=>r()},t(vu))])])}});const mu=X({enhance:({app:e,router:n})=>{const{scrollBehavior:a}=n.options;n.options.scrollBehavior=async(...i)=>(await Gt().wait(),a(...i)),Do(e),e.component("HopeIcon",Y),e.component("BloggerInfo",da),e.component("GlobalEncrypt",cu),e.component("LocalEncrypt",uu)},setup:()=>{Mo(),Ro(),Fc()},layouts:{Layout:xc,NotFound:Lc,BlogCategory:Wc,BlogHome:Zc,BlogType:eu,Timeline:au,Slide:pu}}),bu=e=>{const n=H("keydown",a=>{a.key==="k"&&(a.ctrlKey||a.metaKey)&&(a.preventDefault(),e(),n())})},hu=e=>e.button===1||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey,gu=()=>{const e=U();return{hitComponent:({hit:n,children:a})=>({type:"a",ref:void 0,constructor:void 0,key:void 0,props:{href:n.url,onClick:i=>{hu(i)||(i.preventDefault(),e.push(Sa(n.url,"/")))},children:a},__v:null}),navigator:{navigate:({itemUrl:n})=>{e.push(Sa(n,"/"))}},transformSearchClient:n=>{const a=at(n.search,500);return{...n,search:async(...i)=>a(...i)}}}},fu=(e=[],n)=>[`lang:${n}`,...cn(e)?e:[e]],yu=({buttonText:e="Search",buttonAriaLabel:n=e}={})=>`<button type="button" class="DocSearch DocSearch-Button" aria-label="${n}"><span class="DocSearch-Button-Container"><svg width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="DocSearch-Button-Placeholder">${e}</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key"><svg width="15" height="15" class="DocSearch-Control-Key-Icon"><path d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="square"></path></svg></kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button>`,ku=16,hl=()=>{if(document.querySelector(".DocSearch-Modal"))return;const e=new Event("keydown");e.key="k",e.metaKey=!0,window.dispatchEvent(e),setTimeout(hl,ku)},Eu=e=>{const n="algolia-preconnect";(window.requestIdleCallback||setTimeout)(()=>{if(document.head.querySelector(`#${n}`))return;const i=document.createElement("link");i.id=n,i.rel="preconnect",i.href=`https://${e}-dsn.algolia.net`,i.crossOrigin="",document.head.appendChild(i)})},_u={appId:"2YNM597FQ3",apiKey:"c57eed21810689379dcf044a75c7568b",indexName:"wlei224-gitee",locales:{"/":{placeholder:"搜索文档",translations:{button:{buttonText:"搜索文档",buttonAriaLabel:"搜索文档"},modal:{searchBox:{resetButtonTitle:"清除查询条件",resetButtonAriaLabel:"清除查询条件",cancelButtonText:"取消",cancelButtonAriaLabel:"取消"},startScreen:{recentSearchesTitle:"搜索历史",noRecentSearchesText:"没有搜索历史",saveRecentSearchButtonTitle:"保存至搜索历史",removeRecentSearchButtonTitle:"从搜索历史中移除"},errorScreen:{titleText:"无法获取结果",helpText:"你可能需要检查你的网络连接"},footer:{selectText:"选择",navigateText:"切换",closeText:"关闭",searchByText:"搜索提供者"},noResultsScreen:{noResultsText:"无法找到相关结果",suggestedQueryText:"你可以尝试查询"}}}}}};v(()=>import("./style-e9220a04.js"),[]),v(()=>import("./docsearch-1d421ddb.js"),[]);const wu=E({name:"Docsearch",props:{containerId:{type:String,required:!1,default:"docsearch-container"},options:{type:Object,required:!1,default:()=>_u}},setup(e){const n=gu(),a=dn(),i=ie(),l=S(!1),s=S(!1),r=b(()=>{var u;return{...e.options,...(u=e.options.locales)==null?void 0:u[i.value]}}),o=async()=>{var d;const{default:u}=await v(()=>import("./index-ade63bb5.js"),[]);u({...n,...r.value,container:`#${e.containerId}`,searchParameters:{...r.value.searchParameters,facetFilters:fu((d=r.value.searchParameters)==null?void 0:d.facetFilters,a.value)}}),l.value=!0},c=()=>{s.value||l.value||(s.value=!0,o(),hl(),j(i,o))};return bu(c),V(()=>Eu(r.value.appId)),()=>{var u;return[t("div",{id:e.containerId,style:{display:l.value?"block":"none"}}),l.value?null:t("div",{onClick:c,innerHTML:yu((u=r.value.translations)==null?void 0:u.button)})]}}}),Su=X({enhance({app:e}){e.component("Docsearch",wu)}}),an=[Xl,kr,xr,Lr,Dr,Or,zr,Wr,no,co,fo,xo,mu,Su],Au=[["v-35f5db9e","/blog.html",{y:"h",t:"博客",i:"home"},["/blog","/blog.md"]],["v-8daa1a0e","/",{y:"h",t:"主页",i:"home"},["/index.html","/README.md"]],["v-744498a7","/app/",{d:1681924408e3,y:"a",t:""},["/app/index.html","/app/README.md"]],["v-95bfbf7e","/cainiao/abstractandinterface.html",{d:1684054463e3,c:["菜鸟日记"],g:["Java基础"],e:`<h2> 抽象类(abstract class)和接口(interface)有什么区别？</h2>
<h3> 代码示例：</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 抽象类</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token comment">// 非抽象方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Animal is eating."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 抽象方法</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实现抽象类的子类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token comment">// 实现抽象方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Dog is barking."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 接口</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token comment">// 接口中的常量</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">double</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>

    <span class="token comment">// 抽象方法</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 抽象方法</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">getPerimeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实现接口的类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> radius<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token keyword">double</span> radius<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">=</span> radius<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 实现接口的抽象方法</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">PI</span> <span class="token operator">*</span> radius <span class="token operator">*</span> radius<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 实现接口的抽象方法</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">getPerimeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token constant">PI</span> <span class="token operator">*</span> radius<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.57,words:470},y:"a",t:"抽象类与接口",s:"抽象类与接口"},["/cainiao/abstractandinterface","/cainiao/abstractandinterface.md"]],["v-52f4ced7","/cainiao/article.html",{d:168579288e4,c:["项目专栏"],g:["论文"],e:`<h2> 题目：</h2>
<blockquote>
<p>以下是一些使用对仗的可能标题：</p>
<ol>
<li>历史文化推力，祖国完全统一不可遏止</li>
<li>利益政治加速，祖国完全统一势不可挡</li>
<li>防范应对挑战，祖国完全统一路漫漫</li>
<li>共同追求心齐，祖国完全统一在路上</li>
<li>中华复兴必经路，祖国完全统一势如破竹</li>
</ol>
<p>希望这些标题能够更加吸睛，符合您的需求。</p>
<p>以下是一些字数对仗的可能标题：</p>
<ol>
<li>历史文化，推动祖国完全统一不可遏</li>
<li>利益政治，助力祖国完全统一势如破竹</li>
<li>防范应对，挑战祖国完全统一路漫漫</li>
<li>共同追求，心齐祖国完全统一在路上</li>
<li>中华复兴，必经祖国完全统一之路</li>
</ol>
<p>希望这些标题能够满足您的要求，让文章更加精彩。</p>
</blockquote>`,r:{minutes:6.15,words:1846},y:"a",t:"为什么说祖国完全统一进程不可阻挡",s:"为什么说祖国完全统一进程不可阻挡"},["/cainiao/article","/cainiao/article.md"]],["v-4b382146","/cainiao/Bugsss.html",{d:1688484737e3,c:["菜鸟日记"],g:["Git"],e:`<h1> Bug记录</h1>
<h2> Git篇</h2>
<ol>
<li><code>git pull gitee</code>出现问题</li>
</ol>
<blockquote>
<p>You asked to pull from the remote 'gitee', but did not specify
a branch. Because this is not the default configured remote
for your current branch, you must specify a branch on the command line.</p>
</blockquote>`,r:{minutes:5.42,words:1627},y:"a",t:"我的Bugs",s:"我的Bugs"},["/cainiao/Bugsss","/cainiao/Bugsss.md"]],["v-005f5747","/cainiao/collection.html",{d:1686305424e3,c:["菜鸟日记"],g:["Java集合框架"],e:`<figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/collection-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2> 怎么理解HashMap的数据结构呢？</h2>
<figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/collection-8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,r:{minutes:3.3,words:990},y:"a",t:"Java集合框架",s:"浅析Java集合框架"},["/cainiao/collection","/cainiao/collection.md"]],["v-6f754481","/cainiao/DMDatabase.html",{d:1686147656e3,c:["菜鸟日记"],g:["DMDatabase"],o:!0,e:`<h1> 达梦数据库</h1>
<blockquote>
<p>***INTRODUCE:***达梦数据是国内领先的数据库产品开发服务商，致力于成为国际顶尖的全栈数据产品及解决方案提供商。公司拥有核心源代码的自主知识产权，并已完成数十项国家级或省部级科研开发项目与奖项。其产品在金融、能源、航空、通信、党政机关等数十个领域得到应用，2019年至2021年公司产品市占率位居中国数据库管理系统市场国内数据库厂商前列。</p>
</blockquote>
<h2> 达梦线上实验室仿真</h2>
<p>欢迎来到达梦数据库线上实验室。</p>
<p>如果您是初次接触达梦数据库，我们强烈建议您加入本次线上实验室的试玩旅程。在这里，您将置身于达梦公司自主研发的新一代大型通用关系型数据库 DM8 的仿真环境中，通过 “用户权限”，“操作数据表”，“检索数据”，“创建索引”，“事务特性” 五大板块，初步体验 DM8 的基本特性。同时我们也提供了创建物化视图、存储过程等一系列“SQL 高级特性”供高级玩家探索。</p>`,r:{minutes:6.53,words:1960},y:"a",t:"初始达梦数据库",s:"DMDatabase"},["/cainiao/DMDatabase","/cainiao/DMDatabase.md"]],["v-d9623eb8","/cainiao/DNS.html",{d:1685208353e3,c:["菜鸟日记"],g:["实践练习"],e:`<p>@<a href="%E5%A4%B4%E6%AD%8C%E5%AE%9E%E8%B7%B5%E6%95%99%E5%AD%A6%E5%B9%B3%E5%8F%B0-Linux%E7%BD%91%E7%BB%9C%E5%AE%9E%E6%88%98%EF%BC%88%E4%B8%80%EF%BC%89-DNS%E9%85%8D%E7%BD%AE%EF%BC%88Ubuntu%E7%B3%BB%E7%BB%9F%EF%BC%89">TOC</a>
见者有缘，欢迎大家访问我的博客【CS_GUIDER】：<a href="https://wlei224.gitee.io" target="_blank" rel="noopener noreferrer">https://wlei224.gitee.io</a>   或   www.csguider.icu（部署在github，可能访问慢）</p>`,r:{minutes:5,words:1500},y:"a",t:"DNS服务器配置",s:"头歌平台DNS服务器配置"},["/cainiao/DNS","/cainiao/DNS.md"]],["v-ec77fd94","/cainiao/Educoder.html",{d:1684054463e3,c:["菜鸟日记"],g:["实践练习"],e:`<h1> educoder头歌Java笔记</h1>
<h2> <em>Coding中遇到的问题合集：</em></h2>
<p>““.equals(name) 和name.equals(““) 的区别：</p>
<p>​		两个都是比较“”的地址和name的地址是否指向同一个地址，即判断name是否为“”；建议用前者，因为name可能是null，此时name.equals("")就会报错，而前者则会避免这个问题</p>
<p>避免了抛出空指针异常NullPointerException。</p>
<p>leetcode回文数：</p>
<ul>
<li>(s.charAt(i)).get(map)  &amp;&amp;  map.get(s.charAt(i))，问题同上；出现了抛出空指针异常的问题，使用前者后，测试通过。</li>
<li>遇到了char与string的类型不匹配的情况，不可强制转换，最后利用string类的replace方法替换字符串，得到了解决。</li>
</ul>`,r:{minutes:13.66,words:4099},y:"a",t:"头歌实践平台笔记",s:"头歌实践平台笔记分享"},["/cainiao/Educoder","/cainiao/Educoder.md"]],["v-d89fa10a","/cainiao/git.html",{a:"阮一峰",d:1687095932e3,c:["菜鸟日记"],g:["Git"],e:`<h1> 常用 Git 命令清单</h1>
<p>作者： <a href="http://www.ruanyifeng.com/" target="_blank" rel="noopener noreferrer">阮一峰</a></p>
<p>日期： <a href="http://www.ruanyifeng.com/blog/2015/12/" target="_blank" rel="noopener noreferrer">2015年12月 9日</a></p>
<p>我每天使用 Git ，但是很多命令记不住。</p>
<p>一般来说，日常使用只要记住下图6个命令，就可以了。但是熟练使用，恐怕要记住60～100个命令。</p>`,r:{minutes:7.21,words:2164},y:"a",t:"最常用的Git命令汇总",s:"Git常用命令"},["/cainiao/git","/cainiao/git.md"]],["v-191a2f1e","/cainiao/hellovuepress.html",{d:1684054463e3,c:["菜鸟日记"],g:["网站搭建"],e:`<h1> 通过vuepress更新个人博客</h1>
<h2> 博客搭建教程</h2>
<blockquote>
<p>本教程使用 pnpm 作为项目管理器，因为 VuePress 和 VuePress Theme Hope 都是通过 pnpm 来管理依赖的。</p>
</blockquote>
<h3> 1、安装 Pnpm</h3>
<p>在终端中输入下列命令安装 pnpm:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>corepack <span class="token builtin class-name">enable</span>
corepack prepare pnpm@latest <span class="token parameter variable">--activate</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:13.73,words:4118},y:"a",t:"vuepress-theme-hope",s:"网站搭建过程记录"},["/cainiao/hellovuepress","/cainiao/hellovuepress.md"]],["v-3318da52","/cainiao/javaessay.html",{d:1684054463e3,c:["菜鸟日记"],g:["Java笔记"],e:`<ul>
<li>
<p><em>写在前面：</em></p>
<ul>
<li>【免责声明：】本笔记来源自互联，是笔者结合自己的理解进行整理归纳发表在hexo博客只便于个人学习使用，若涉及到侵权，请联系我，谢谢！</li>
<li>个人博客地址：<a href="https://csguider.icu/" target="_blank" rel="noopener noreferrer">https://csguider.icu/</a></li>
</ul>
</li>
<li>
<p>写作背景:</p>
<ul>
<li>笔者是一名大三在校生，目前正在努力学习Java方向，笔记书写于22年暑假期间，虽然起步有点晚，但是每天都在坚持，只要努力，光一定会shine向我的。</li>
</ul>
</li>
</ul>`,r:{minutes:66.56,words:19969},y:"a",t:"Java随笔",s:"Java随笔"},["/cainiao/javaessay","/cainiao/javaessay.md"]],["v-c0ea97a8","/cainiao/JVM.html",{d:1689475324e3,c:["菜鸟日记"],g:["JVM"],e:`<h1> <code>JVM</code></h1>
<blockquote>
<p>图文详解 50 道Java虚拟机高频面试题，这次面试，一定吊打面试官，整理：csguider，戳<a href="https://mp.weixin.qq.com/s/bHhqhl8mH3OAPt3EkaVc8Q" target="_blank" rel="noopener noreferrer">转载链接</a>，作者：三分恶，戳<a href="https://mp.weixin.qq.com/s/XYsEJyIo46jXhHE1sOR_0Q" target="_blank" rel="noopener noreferrer">原文链接</a></p>
</blockquote>`,r:{minutes:1.32,words:395},y:"a",t:"一篇文章搞懂JVM",s:"深度剖析JVM"},["/cainiao/JVM","/cainiao/JVM.md"]],["v-048e8a32","/cainiao/library.html",{d:1692028221e3,e:`<h1> 云上个人书库</h1>
<h2> 项目介绍</h2>
<p>基于华为云鲲鹏ECS搭建的无广告、简洁、便捷的个人书库。</p>
<h2> 搭建方案</h2>
<figure><img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202308141150924.png" alt="搭建方案图" tabindex="0" loading="lazy"><figcaption>搭建方案图</figcaption></figure>
<p>步骤 1  长时间未操作弹性云服务器远程登录界面而登出，忘记宝塔登录的业务平面地址，可输入以下指令重新查看面板入口。</p>`,r:{minutes:.33,words:99},y:"a",t:"云上个人书库"},["/cainiao/library","/cainiao/library.md"]],["v-0eb09a8e","/cainiao/Linux.html",{d:1684054463e3,c:["菜鸟日记"],g:["Linux"],u:!0,o:!0,e:`<div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code> docker相关命令：
 	#docker pull之后，使用如下命令进行创建和启动容器，因为懒的配置，所以使用默认配置。
 		docker run -itd --name redis -p 6379:6379 redis
 	#docker ps：查看运行中的CONTAINER
 	#docker进入容器
 		docker exec -it mymongo /bin/bash
 	#这个是使容器处于docker运行便自启动
 		docker update redis --restart=always 
 	#docker重启命令
 		systemctl restart docker
 	#容器重启命令
 		docker restart redis(自己命的名字或者CONTAINER ID)
 启动     systemctl start firewalld
 关闭     systemctl stop firewalld
 查看状态  systemctl status firewalld
 查看状态  firewall-cmd --state
 开机启用  systemctl enable firewalld
 开机禁用  systemctl disable firewalld
 查看端口  firewall-cmd --zone=public --list-ports
 添加端口  firewall-cmd --add-port=443/tcp --permanent //永久添加443端口,协议为tcp 
 重新加载  firewall-cmd --reload //重新加载

 删除端口  firewall-cmd --zone=public --remove-port=80/tcp --permanent //删除tcp下的80端口

 

 参数介绍：
 firewall-cmd：是Linux提供的操作firewall的一个工具(注意没有字母“d”)；
 --permanent：表示设置为持久；
 --add-port：标识添加的端口
 --remove-port:标识删除的端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.34,words:702},y:"a",t:"Linux常用命令积累",s:"Linux常用命令"},["/cainiao/Linux","/cainiao/Linux.md"]],["v-8035fcb0","/cainiao/MyLanqiaoNote.html",{d:1684054463e3,c:["菜鸟日记"],g:["蓝桥杯"],e:`<h1> 第一章 基础数学思维与技巧</h1>
<h2> 最大公约数</h2>
<h4> 求最大公约数----欧几里得辗转相除法</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">gcd</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
   	<span class="token keyword">while</span><span class="token punctuation">(</span>b<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> temp <span class="token operator">=</span> a<span class="token operator">%</span>b<span class="token punctuation">;</span>
        a<span class="token operator">=</span>b<span class="token punctuation">;</span>
        b<span class="token operator">=</span>temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:37.27,words:11180},y:"a",t:"蓝桥杯",s:"蓝桥杯笔记"},["/cainiao/MyLanqiaoNote","/cainiao/MyLanqiaoNote.md"]],["v-4c8df8aa","/cainiao/mysql.html",{d:1686026761e3,c:["菜鸟日记"],g:["MySQL"],u:!0,o:!0,e:`<h1> MySQL 的逻辑架构图<img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202306061044225.png" alt="" loading="lazy"></h1>
<p>mysql可以分为server层和存储引擎层两部分，其中，Server层包括连接器、分析器、查询缓存、优化器、执行器；存储引擎层负责数据的存储和提取。其架构模式是插件式的，支持 InnoDB、MyISAM、Memory 等多个存储引擎。现在最常用的存储引擎是 InnoDB，它从 MySQL 5.5.5 版本开始成为了默认存储引擎。也就是说，你执行 create table 建表的时候，如果不指定引擎类型，默认使用的就是 InnoDB。不过，你也可以通过指定存储引擎的类型来选择别的引擎，比如在 create table 语句中使用 engine=memory, 来指定使用内存引擎创建表。不同存储引擎的表数据存取方式不同，支持的功能也不同，在后面的文章中，我们会讨论到引擎的选择。从图中不难看出，不同的存储引擎共用一个 Server 层，也就是从连接器到执行器的部分。你可以先对每个组件的名字有个印象，接下来我会结合开头提到的那条 SQL 语句，带你走一遍整个执行流程，依次看下每个组件的作用。</p>`,r:{minutes:4.53,words:1359},y:"a",t:"MySQL笔记",s:"MySQL冷知识"},["/cainiao/mysql","/cainiao/mysql.md"]],["v-556ca76b","/cainiao/netty.html",{d:1687164533e3,c:["菜鸟日记"],g:["Netty"],e:`<blockquote>
<p>是什么？</p>
</blockquote>
<p>Netty 是一个开源的、高性能的、异步的、事件驱动的网络应用程序框架，它基于 Java NIO（Non-blocking I/O）技术，提供了简单易用的 API，可用于开发各种网络应用程序，包括客户端和服务器端应用程序，如网络协议服务器、Web 服务、高性能代理服务器、游戏服务器等。</p>
<blockquote>
<p>优缺点？</p>
</blockquote>
<p>优点：</p>
<ol>
<li>高性能和可伸缩性：Netty 基于 Java NIO 技术，使用非阻塞 I/O 模型，具有更好的性能和可伸缩性，可以处理大量的并发连接。</li>
<li>异步和事件驱动：Netty 使用事件驱动的设计模式，通过异步的方式处理网络 I/O 事件，提高了应用程序的并发处理能力。</li>
<li>简单易用的 API：Netty 提供了简单易用、灵活可扩展的 API，使得开发网络应用程序更加容易和快速。</li>
<li>支持多种协议：Netty 支持多种主流的网络协议，如 HTTP、WebSocket、TCP、UDP、SMTP、FTP 等，且支持自定义的协议。</li>
<li>可扩展性：Netty 的设计允许用户自定义和扩展各种组件，包括编解码器、处理器、事件监听器等。</li>
</ol>`,r:{minutes:3.04,words:913},y:"a",t:"一篇文章搞懂什么是Netty",s:"浅析Netty"},["/cainiao/netty","/cainiao/netty.md"]],["v-17c62546","/cainiao/object.html",{d:16863164e5,c:["菜鸟日记"],g:["JavaObject"],e:`<h1> Object类</h1>
<ul>
<li>
<p>对象比较</p>
<p>hashCode()</p>
<p>equals(Object obj)</p>
</li>
<li>
<p>对象拷贝</p>
</li>
</ul>
<p>​		clone()</p>
<ul>
<li>对象转字符串</li>
</ul>
<p>​		toString()</p>
<ul>
<li>多线程调度</li>
</ul>
<p>​		wait()</p>
<p>​		wait(long timeout)</p>
<p>​		wait(long timeout, int nanos)</p>
<p>​		notify()</p>`,r:{minutes:.52,words:156},y:"a",t:"JavaObject",s:"浅析JavaObject"},["/cainiao/object","/cainiao/object.md"]],["v-71344198","/cainiao/",{d:1684054463e3,c:["菜鸟日记"],o:!0,e:`<h2> 修炼手册</h2>
<ul>
<li><a href="/cainiao/hellovuepress.html" target="blank">小站搭建日记</a></li>
<li><a href="/cainiao/%E4%BF%AE%E4%BB%99%E5%89%8D%E8%A8%80.html" target="blank">菜鸟打怪升级记</a></li>
<li><a href="/cainiao/article.html" target="blank">形势与政策</a></li>
<li><a href="/cainiao/javaessay.html" target="blank">Java随笔</a></li>
<li><a href="/cainiao/abstractandinterface.html" target="blank">抽象类与接口</a></li>
<li><a href="/cainiao/bugsss.html" target="blank">编程bug集合</a></li>
<li><a href="/cainiao/collection.html" target="blank">Java集合</a></li>
<li><a href="/cainiao/dmdatabase.html" target="blank">DM数据库</a></li>
<li><a href="/cainiao/dns.html" target="blank">DNS</a></li>
<li><a href="/cainiao/educoder.html" target="blank">头歌笔记</a></li>
<li><a href="/cainiao/git.html" target="blank">Git笔记</a></li>
<li><a href="/cainiao/jvm.html" target="blank">JVM</a></li>
<li><a href="/cainiao/linux.html" target="blank">Linux笔记</a></li>
<li><a href="/cainiao/mylanqiaonote.html" target="blank">蓝桥笔记</a></li>
<li><a href="/cainiao/mysql.html" target="blank">MySQL</a></li>
<li><a href="/cainiao/netty.html" target="blank">Netty</a></li>
<li><a href="/cainiao/tip.html" target="blank">编程Tips</a></li>
<li><a href="/cainiao/transtation.html" target="blank">MySQL-transcation</a></li>
</ul>`,r:{minutes:.35,words:104},y:"a",t:"菜鸟日记",i:"alias",I:0},["/cainiao/index.html","/cainiao/README.md"]],["v-5967d75c","/cainiao/tip.html",{d:1690423743e3,c:["菜鸟日记"],g:["技巧"],e:`<h1> 小技巧分享</h1>
<ul>
<li><code>IDEA</code>
<ul>
<li>tip小技巧：复制一段代码，选择包直接粘贴，会自动创建一个类！方便的很！</li>
<li><img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202308031918523.png" alt="IDEA快捷键：ctrl + alt + t" tabindex="0" loading="lazy"><figcaption>IDEA快捷键：ctrl + alt + t</figcaption></li>
</ul>
</li>
</ul>`,r:{minutes:.35,words:104},y:"a",t:"Tip常用小技巧",s:"Tip常用小技巧"},["/cainiao/tip","/cainiao/tip.md"]],["v-582f0022","/cainiao/transaction.html",{d:1685965259e3,c:["菜鸟日记"],g:["MySQL"],e:`<h2> 事务</h2>
<blockquote>
<h4> 一、什么是事务</h4>
</blockquote>
<p>1.事务定义
事务:事务是一个最小的不可在分的工作单元;通常一个事务对应一个完整的业务(例如银行账户转账业务，该业务是一个最小的T元)
一个完整的业务需要批量的DML(inset、update、 delete)语句共同联合完成
事务只和DML语句有关，或者说DML语句才有事务。这个和业务逻辑有关，业务逻辑不同，DML语句的个数不同0
2.事务是什么?
多个操作同时进行.那么同时成功，那么同时失败。这就是事务
事务有四个特性:一致性、持久性、原子性、隔离性
比如有一个订单业务
1.订单表当中添加一条记录
2.商品数量数据更新(减少)
3.当多个任务同时进行操作的时候，这些任务只能同时成功，或者同时失败.
4.事务的四大性质
1.原子性:事务是一个不可分割的工作单位，要么同时成功，要么同时失败。例:当两个人发起转账业务时，如果A转账发起，而B因为一些原因不能成功接受，事务最终将不会提交，则A和B的请求最终不会成功。
2.持久性:一旦事务提交，他对数据库的改变就是永久的。注:只要提交了事务，将会对数据库的数据进行永久性刷新。
3.隔离性:多个事务之间相互隔离的，互不干扰
4.一致性: 事务执行接收之后，数据库完整性不被破坏
注意:只有当前三条性质都满足了，才能保证事务的一致性</p>`,r:{minutes:16.04,words:4813},y:"a",t:"MySQL事务",s:"什么是事务"},["/cainiao/transaction","/cainiao/transaction.md"]],["v-3d497a28","/cainiao/%E4%BF%AE%E4%BB%99%E5%89%8D%E8%A8%80.html",{d:1684054463e3,c:["菜鸟日记"],g:["前言"],e:`<h1> 日常记录</h1>
<p>本篇是写一些自己的日常所学，充实自己，其实计划的是日更，但是有时候记录了，但是忘记发表，总而言之，个人静态博客还是没有直接发表的快，但是吧，各有各的好处。愿你我峡谷相依，不以无人而不芳！</p>
`,r:{minutes:.58,words:175},y:"a",t:"菜鸟前言",s:"菜鸟修仙第一🗡"},["/cainiao/修仙前言.html","/cainiao/%E4%BF%AE%E4%BB%99%E5%89%8D%E8%A8%80","/cainiao/修仙前言.md","/cainiao/%E4%BF%AE%E4%BB%99%E5%89%8D%E8%A8%80.md"]],["v-bd986690","/collection/",{d:1681799062e3,c:["专栏记录"],e:`<h2> 实操前须知：</h2>
<blockquote>
<p>1、准备充分：先阅读相关参考资料</p>
<p>2、付出实践：模块化学习、不断实践加强记忆</p>
<p>3、举一反三：单个模块可以熟练写出之后要举一反三、巩固学习效果</p>
<p>4、温故知新：复习笔记、时常回顾</p>
<p>3、总结反思：总结出一个问题合集，复盘用</p>
</blockquote>
<h2> 目录</h2>
<ul>
<li><a href="/collection/project/shangyitong.html" target="blank">尚医通-微服务项目</a></li>
<li><a href="/collection/project/CampousLostAndFound.html" target="blank">CampousLostAndFound-Sprig MVC项目</a></li>
<li><a href="/collection/project/SSM.html" target="blank">仿哔哩哔哩项目-Spring Boot项目</a></li>
<li><a href="/collection/project/SSM.html" target="blank">一篇文章搞懂什么是SSM</a></li>
<li><a href="/collection/project/oj.html" target="blank">在线判题系统</a></li>
<li><a href="/collection/project/api.html" target="blank">API开放平台</a></li>
</ul>`,r:{minutes:5.54,words:1662},y:"a",t:"CS之路",i:"discover",I:0},["/collection/index.html","/collection/README.md"]],["v-64164596","/intro/introduce.html",{d:1692270836e3,c:["关于CS_GUIDER"],g:["介绍"],e:`<blockquote>
<p>写在前面：</p>
<p>盖德尔本盖，是一名双非民办二本的24届应届生中的菜狗一只，目前正在找Java开发岗的实习中。喜欢记录，喜欢探索未知领域。</p>
</blockquote>
<h3> 我的博客之路</h3>
<p>20年入学时，便发表了我的第一篇博客，还是关于C语言的，还清楚的记得当时给自己定的目标：从小白到精通，然后贴了一张helloworld的运行截图，哈哈哈哈，大概helloworld就是每个程序员梦开始的地方吧！</p>
<p>19年高考失利，20年再战，最终479分只上了一所双非二本。经过了一年的复读，我想着我本应该比同寝、同班同学更自律些吧，但是结果似乎并不然。初入大学，确实是接触到了许多新鲜的事物，我也在逐渐改善自己内向的性格，同时也丧失了以前的自律。但是从大一到大三，我能明显的感觉出来，我的逻辑性思维起码相较他们，还是比较成熟的，鉴于此再加上我完美主义的性格，在这几年的大学生活中也收获到了不少。</p>`,r:{minutes:2.62,words:785},y:"a",t:"关于CS_GUIDER",s:"关于CS_GUIDER"},["/intro/introduce","/intro/introduce.md"]],["v-7d08789b","/mianshi/mianshiQA.html",{d:16869612e5,c:["面经"],g:["Java"],u:!0,e:`<blockquote>
<p>真实面试流程：</p>
</blockquote>
<ol>
<li>
<p>先自我介绍一下</p>
</li>
<li>
<p>Java都学了哪些技术栈（可能要看与简历是否一致）</p>
</li>
<li>
<p>你的第一个项目后台是用JSP写的吗？（是jsp写的前台，说错了，回答了是，但是没有过多问）</p>
</li>
<li>
<p><em>这两个项目中说一个你比较熟悉的项目</em>。（紧张，还有点卡壳，项目部分准备的不充分，大意了）</p>
</li>
<li>
<p>数据库用的MongoDB？（回答用的MongoDB和Redis以及mysql）</p>
</li>
<li>
<p>项目中用到了Redis的哪些？（用到了Redis的缓存，用于缓存一些不用频繁更新的数据，加载起来比较快）</p>
</li>
<li>
<p>哪些数据做了缓存？（省市区三级联动信息，还有医院的科室信息）然后追问：这些信息是不需要经常改动的是吧？所以你就不用考虑读写不一致的问题？</p>
</li>
<li>
<p>Redis是用的集群的还是？（随便回答了一下）</p>
</li>
<li>
<p>你这个项目还涉及支付功能了吧？你是怎么做的？（是的，支付功能调用了微信的接口，通过OAuth2机制，支付的流程等）</p>
</li>
<li>
<p>像这个项目比较难的地方有哪些？（支付模块中，多人预约下单，没有涉及到订单超卖的问题）</p>
</li>
<li>
<blockquote>
<p>注册中心用的什么？（nacos）说说你对nacos的理解？（没有答上来）</p>
<p>Nacos主要用于实现服务注册和发现、配置管理、服务路由和负载均衡、服务熔断和降级等功能，是构建微服务架构的重要组件。</p>
<p>Spring Cloud Nacos并不是一款全能的服务治理组件，但它提供了方便集成的API，可以与Spring Cloud和Nacos的其他组件集成，来实现服务熔断、降级、负载均衡等功能，常用注解有：</p>
<p>@NacosPropertySource、@NacosInjected、@NacosValue、@NacosConfigurationProperties、@EnableDiscoveryClient</p>
</blockquote>
</li>
<li>
<blockquote>
<p>rabbitMQ做了哪部分的功能？</p>
<p>实现定时向用户推送预约挂号的消息</p>
</blockquote>
</li>
<li>
<blockquote>
<p>常用的集合有哪些？</p>
<ol>
<li>List：List是一种有序的集合，允许存储重复的元素。Java中常用的List实现类有ArrayList、LinkedList和Vector。</li>
<li>Set：Set是一种不允许存储重复元素的集合。Java中常用的Set实现类有HashSet、LinkedHashSet和TreeSet。</li>
<li>Map：Map是一种键值对的映射表，每个键对应一个值。Java中常用的Map实现类有HashMap、LinkedHashMap和TreeMap。</li>
<li>Queue：Queue是一种先进先出（FIFO）的队列，通常用于实现任务调度、消息传递等功能。Java中常用的Queue实现类有LinkedList、PriorityQueue和ArrayDeque。</li>
<li>Stack：Stack是一种后进先出（LIFO）的栈，通常用于实现回溯、撤销等功能。Java中提供了Stack类作为栈的实现。</li>
<li>Vector：Vector是一种可以动态增长和缩小的数组，与ArrayList相似，但是Vector是线程安全的，因此在多线程环境下使用较为安全。</li>
<li>Hashtable：Hashtable是一种使用键值对存储数据的哈希表，与HashMap相似，但是Hashtable是线程安全的，因此在多线程环境下使用较为安全。</li>
</ol>
</blockquote>
</li>
<li>
<blockquote>
<p>什么是反射？反射的底层用了什么？</p>
<p>反射是Java语言的一种特性，允许程序在运行的时候动态的获取到类的相关信息，包括类的属性、方法和构造器等。通过反射，程序可以在运行时动态地创建对象、调用方法、访问属性，无需再编译时确定这些信息。反射使得Java程序具有更高的灵活性和可拓展性。</p>
<p>反射的底层主要用到了JVM的动态加载和动态链接机制。</p>
<p><em>在Java程序运行时，JVM会根据类的全限定名从类路径中找到对应的字节码文件，然后将其加载到内存中，并生成对应的Class对象。这个过程称为类的动态加载（Dynamic Loading）。</em></p>
<p><em>在类加载完成后，JVM会使用字节码解析器将类的字节码文件解析成JVM可以理解的数据结构，例如方法表（Method Table）、字段表（Field Table）等。然后，JVM根据这些数据结构生成对应的Class对象，该对象包含了类的所有信息，例如类的名称、父类、接口、方法、属性等。这个过程称为类的动态链接（Dynamic Linking）。</em></p>
<p>在类加载和链接过程中，JVM会将类的字节码文件解析成JVM可以理解的数据结构，并生成对应的Class对象。程序可以通过Class对象获取类的信息，并在运行时动态地操作类的信息。</p>
</blockquote>
</li>
<li>
<blockquote>
<p>SpringMVC Spring SpringBoot常用注解？@Controller 和 @RestController有什么区别？</p>
<ol>
<li>@Controller：标识该类为Spring MVC中的Controller组件，用于处理HTTP请求。</li>
<li>@RestController：是@Controller的扩展，用于表示该类中的所有方法都返回JSON或XML格式的数据，常用于实现RESTful API。</li>
<li>@RequestMapping：用于映射HTTP请求的URL路径，可以用于类级别和方法级别。</li>
<li>@RequestParam：用于获取请求参数的值，常用于GET请求。</li>
<li>@PathVariable：用于获取URL中的占位符参数值，常用于RESTful API中。</li>
<li>@Autowired：用于自动装配Spring Bean，常用于依赖注入。</li>
<li>@Component：通用的注解，用于标识Spring Bean。</li>
<li>@Service：用于标识业务逻辑层的组件。</li>
<li>@Repository：用于标识数据访问层的组件。</li>
<li>@Configuration：用于标识配置类，常用于配置Spring Bean。</li>
</ol>
<p>关于@Controller和@RestController的区别，主要在于返回值的不同。@Controller用于处理HTTP请求并返回视图，而@RestController则返回JSON或XML格式的数据，常用于实现RESTful API。在@RestController中，方法的返回值会直接作为HTTP Response的Body部分返回给客户端，而在@Controller中，方法的返回值通常是视图名称或ModelAndView对象。</p>
<p>因此，如果需要返回JSON或XML格式的数据，应该使用@RestController；如果需要返回视图，则应该使用@Controller。</p>
</blockquote>
</li>
<li>
<blockquote>
<p>MyBatis中$和#有什么区别？</p>
<p>在MyBatis中，#和$都是用于传递参数的符号，但它们的含义和使用方式有所不同。</p>
<p>#用于传递参数时，会将参数值转义并放入SQL语句中，例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT * FROM user WHERE id = #{id}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在执行SQL语句时，MyBatis会使用PreparedStatement进行参数绑定，避免SQL注入的问题。</p>
<p>$用于传递参数时，会将参数的值直接替换到SQL语句中，例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT * FROM user WHERE id = \${id}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在执行SQL语句时，MyBatis不会对参数进行转义和检查，存在SQL注入的风险。</p>
<p>因此，使用#可以提高应用程序的安全性，避免SQL注入的问题，但是需要注意的是，在拼接动态SQL语句时，$可以提高SQL语句的灵活性和可读性。如果使用$时，需要自行确保参数的安全性，避免SQL注入的风险。</p>
</blockquote>
</li>
<li>
<blockquote>
<p>SpringBoot中打的jar包和普通的包有什么区别？</p>
<p>在Spring Boot中，可以使用Maven或Gradle构建打包应用程序。针对应用程序的不同打包方式，产生的包也会有所不同，主要区别如下：</p>
<ol>
<li>
<p>普通的包：通常是将应用程序打包成WAR或JAR格式的文件，可以在运行时通过Java命令或容器进行启动，需要事先安装或配置Java运行环境。</p>
</li>
<li>
<p>Spring Boot的可执行JAR包：是一种自包含的、可以直接运行的应用程序包，包含了应用程序的全部依赖和配置信息，不需要事先安装或配置Java运行环境。通过执行该JAR包，可以直接启动应用程序。</p>
</li>
</ol>
<p>Spring Boot的可执行JAR包相对于普通的包，具有以下优点：</p>
<ol>
<li>
<p>简化部署：Spring Boot的可执行JAR包是自包含的，不需要事先安装或配置Java运行环境，使得部署变得更加简单和便捷。</p>
</li>
<li>
<p>依赖管理：Spring Boot使用Maven或Gradle进行依赖管理，可以自动管理依赖的版本和冲突，避免了版本管理的繁琐和错误。</p>
</li>
<li>
<p>配置管理：Spring Boot可以通过配置文件、注解和代码进行配置，具有更加灵活和方便的配置管理方式。</p>
</li>
<li>
<p>内嵌容器：Spring Boot可以内嵌Tomcat、Jetty或Undertow等Web容器，不需要额外安装和配置容器，使得应用程序更加轻量级和便捷。</p>
</li>
</ol>
<p>总之，Spring Boot的可执行JAR包相对于普通的包，具有更加简单、便捷、灵活和轻量级的特点，能够更好地满足现代应用程序的需求。</p>
</blockquote>
</li>
<li>
<p>技术栈都学到哪些了？（意思是我掌握的不太牢固）</p>
</li>
<li>
<blockquote>
<p>MySql做过一些优化吗？（索引优化做了哪些？怎么查看一个sql用到了索引 expalin）</p>
<p>是的，MySQL中有很多优化技巧，其中索引优化是最基本、最重要的一种优化方式。下面是一些常见的索引优化技巧：</p>
<ol>
<li>
<p>确保表中的主键和外键都被索引：主键和外键是查询中最常用的字段，如果没有索引会导致查询变慢。</p>
</li>
<li>
<p>对经常查询的列建立索引：如果某个列的查询频率较高，可以建立索引，加速查询。</p>
</li>
<li>
<p>使用复合索引：如果查询中包含多个列，可以使用复合索引，将多个列组合在一起建立索引，提高查询效率。</p>
</li>
<li>
<p>避免在索引列上使用函数或表达式：如果在索引列上使用函数或表达式，会导致索引失效，降低查询效率。</p>
</li>
<li>
<p>避免使用全表扫描：如果查询中没有使用索引，会导致全表扫描，影响查询性能。</p>
</li>
<li>
<p>使用覆盖索引查询：如果查询的列已经被索引覆盖，可以使用覆盖索引查询，避免查询表中的其他列，提高查询效率。</p>
</li>
<li>
<p>定期进行索引维护：可以定期进行索引重构、碎片整理等操作，提高索引的效率和查询性能。</p>
</li>
</ol>
<p>查看一个SQL语句是否使用了索引，可以使用EXPLAIN关键字，例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>EXPLAIN SELECT * FROM user WHERE id = 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行该SQL语句后，MySQL会返回查询计划，包括使用的索引、扫描的行数、使用的排序方式等信息。如果查询中使用了索引，那么在查询计划中会看到Using index或Using where等信息。如果查询中没有使用索引，那么在查询计划中会看到Using full scan或Using temporary等信息。</p>
</blockquote>
</li>
<li>
<p>多线程平时用过吗？（sychronized和concurrentHashMap）</p>
</li>
<li>
<blockquote>
<p>Linux常用命令？怎么查看项目的日志？</p>
<ol>
<li>
<p>ls：列出当前目录下的文件和子目录。</p>
</li>
<li>
<p>cd：改变当前工作目录。</p>
</li>
<li>
<p>mkdir：创建一个新目录。</p>
</li>
<li>
<p>rm：删除文件或目录。</p>
</li>
<li>
<p>cp：复制文件或目录。</p>
</li>
<li>
<p>mv：移动文件或目录。</p>
</li>
<li>
<p>touch：创建一个新文件或修改文件的时间戳。</p>
</li>
<li>
<p>cat：查看文件的内容。</p>
</li>
<li>
<p>grep：在文件中查找指定的字符串。</p>
</li>
<li>
<p>ps：查看当前运行的进程。</p>
</li>
<li>
<p>top：查看系统资源使用情况。</p>
</li>
<li>
<p>df：查看文件系统使用情况。</p>
</li>
<li>
<p>du：查看目录大小。</p>
</li>
<li>
<p>tar：归档和压缩文件。</p>
</li>
<li>
<p>ssh：远程登录到另一台主机。</p>
</li>
</ol>
<p>要查看部署到Linux上的项目日志，可以使用以下命令：</p>
<ol>
<li>tail：查看文件的末尾几行。</li>
</ol>
<p>例如，要查看Tomcat日志文件的最后100行，可以使用以下命令：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tail -n 100 /var/log/tomcat/catalina.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>less：查看大文件的内容。</li>
</ol>
<p>例如，要查看一个1GB的日志文件，可以使用以下命令：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>less /var/log/myapp.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在less中，可以使用Page Up、Page Down、上下方向键等进行滚动和搜索。要退出less，可以使用q键。</p>
<ol start="3">
<li>grep：在日志文件中查找指定的字符串。</li>
</ol>
<p>例如，要查找myapp日志文件中包含ERROR的行，可以使用以下命令：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep ERROR /var/log/myapp.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上是一些常用的Linux命令，可以帮助开发者快速定位和解决问题。</p>
</blockquote>
</li>
<li>
<p>期望薪资和能到岗的时间。</p>
</li>
</ol>`,r:{minutes:10.72,words:3217},y:"a",t:"面试问答",s:"Java开发岗面试问答"},["/mianshi/mianshiQA","/mianshi/mianshiQA.md"]],["v-031ba3e8","/mianshi/mindmap.html",{d:16863164e5,c:["面经"],g:["Java SE"],u:!0,e:`<iframe :src="$withBase('/markmap/siwei.html')" width="100%" height="300" frameborder="0" scrolling="yes" leftmargin="0" topmargin="0">
<h1 id="面试导图" tabindex="-1"><a class="header-anchor" href="#面试导图" aria-hidden="true">#</a> 面试导图</h1>
<h2 id="java-se" tabindex="-1"><a class="header-anchor" href="#java-se" aria-hidden="true">#</a> Java SE</h2>
<h3 id="是什么-概念" tabindex="-1"><a class="header-anchor" href="#是什么-概念" aria-hidden="true">#</a> 是什么（概念）</h3>
<ul>
<li>
<p>Java是一门面向对象的编程语言，继承了C++的幼优点，舍弃了C++的多继承与指针的难点，因此Java是一门功能强大且容易上手的编程语言。</p>
<ul>
<li>Java是一门面向对象的编程语言，不仅吸收了C++的优点，还舍弃了C++的多继承与指针的难点，因此Java具有功能强大且容易上手的编程语言。</li>
</ul>
</li>
</ul>
<h3 id="怎么样-特点" tabindex="-1"><a class="header-anchor" href="#怎么样-特点" aria-hidden="true">#</a> 怎么样（特点）</h3>
<ul>
<li>
<p>面向对象</p>
<ul>
<li>封装、继承、多态</li>
</ul>
</li>
<li>
<p>跨平台？原理</p>
<ul>
<li>Write once，run anywhere</li>
</ul>
</li>
<li>
<p>支持多线程</p>
<ul>
<li>内置多线程机制，无需调用操作系统的多线程功能进行功能设计</li>
</ul>
</li>
<li>
<p>编译与解释并存</p>
<ul>
<li>
<p>高级编程语言按照程序的执行方式分为编译形和解释形，编译型就好比把外国文献先全部翻译再阅读，解释型就好比逐行翻译有，阅读后再翻译。为什么说Java是编译与解释并存？引文Java程序需要先编译成字节码.class文件，然后平台JVM将字节码解释成平台可识别的机器码，操作系统运行。</p>
<ul>
<li>
<p>扩展：</p>
<ul>
<li>
<p>动态类型语言</p>
<ul>
<li>只有在运行期间才会检查变量的数据类型，该类语言会在变量的第一次赋值时将数据类型记录下来。代表语言：Python、Ruby、PHP、JS</li>
</ul>
</li>
<li>
<p>静态类型语言</p>
<ul>
<li>编译期间进行数据类型检查，不通过则无法运行。该类语言必须先声明数据类型，分配好内存空间。代表语言：C、C++、Java、Object-C</li>
</ul>
</li>
<li>
<p>强类型语言</p>
<ul>
<li>含义：强制数据类型定义的语言，一旦变量声明，转换数据类型需要强制转换。代表语言：Java、C#、Python、Ruby、Object-C</li>
</ul>
</li>
<li>
<p>弱类型语言</p>
<ul>
<li>含义：允许隐式类型转换，例如：int + float = float。代表语言：JS、PHP、C、C++</li>
</ul>
</li>
<li>
<p>引申：编译型语言vs解释性语言</p>
<ul>
<li>编译型语言有一个专门的编译过程，优点：运行时无需再次编译，执行效率高；缺点：依赖编译器，跨平台性差。</li>
<li>解释性语言运行前无需编译，优点：运行时逐行解释再运行，跨平台性好；缺点：执行效率低。注：语言都是解释性语言。</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>JVM、JDK、JRE的区别</p>
<ul>
<li>jdk包含jre、jre包含jvm</li>
</ul>
</li>
<li>
<p>字节码？什么好处</p>
<ul>
<li>字节码是Java程序经过编译之后产生的。class文件，可以直接被jvm识别并运行，从而能够跨平台运行</li>
</ul>
</li>
</ul>
<h3 id="基础语法" tabindex="-1"><a class="header-anchor" href="#基础语法" aria-hidden="true">#</a> 基础语法</h3>
<ul>
<li>
<p>数据类型</p>
<ul>
<li>
<p>基本数据类型</p>
<ul>
<li>
<p>整型</p>
<ul>
<li>byte、short、int、long</li>
</ul>
</li>
<li>
<p>浮点型</p>
<ul>
<li>float、double</li>
</ul>
</li>
<li>
<p>字符型</p>
<ul>
<li>char</li>
</ul>
</li>
<li>
<p>布尔型</p>
<ul>
<li>boolean</li>
</ul>
</li>
</ul>
</li>
<li>
<p>引用数据类型</p>
<ul>
<li>class</li>
<li>interface</li>
<li>数组</li>
</ul>
</li>
<li>
<p>类型转换</p>
<ul>
<li>
<p>自动转换</p>
<ul>
<li>小杯水可以倒进大杯子，大杯水倒进小杯子就可能会溢出。案例1：float num1 = 1.2，在Java中float浮点型类型变量的声明要在数字的末尾加上f或F，否则属于双精度double类型，下转上会造成精度损失，正确写法：float num1 = 1.2F。</li>
</ul>
</li>
<li>
<p>强制转换</p>
<ul>
<li>对于上述解决方案，还可以进行强制类型转换：float num = (float)1.1;  案例2：short num2 = 1； num2  = num2 + 1;此时编译器会进行报错，我们一般的解决办法是进行强转，或者：short num2 = 1;  num2 += 1,这其实其中num2 += 1，有隐含的强制类型转换。</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>自动拆箱/装箱</p>
<ul>
<li>装箱：Integer i = 10，把整型10装箱为Integer
拆箱：把i再赋值给int，int n = i；</li>
</ul>
</li>
<li>
<p>运算符与位运算</p>
<ul>
<li>
<p>&amp;</p>
<ul>
<li>
<p>逻辑与（短路与：全1为1,有0为0）</p>
<ul>
<li>算法引申：逻辑与可以用来判断奇偶数、是否为2的n次方的数，奇数的二进制末尾肯定为1，偶数的二进制末尾一定是0。例如：7(D) = 111(B), 所以7&amp;1 == 0。
结论：
public static boolean check(int m){
return (m&amp;1)==1;
}</li>
</ul>
</li>
</ul>
</li>
<li>
<p>&amp;&amp;</p>
<ul>
<li>
<p>短路与运算：跟&amp;差别很大：
a == 1 &amp;&amp; b == 2，如果a == 1不成立，那么直接短路，右边不计算，很多时候都会用到</p>
<ul>
<li>
<p>引申：| 与||</p>
<ul>
<li>逻辑或（|）和短路（||）的差别亦是如此</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>++a和a++</p>
<ul>
<li>涉及到JVM的工作原理：对于a++来说，先创建一个临时变量，然后自增加1，若进行a = i++赋值，a取到的是临时变量的值。</li>
</ul>
</li>
</ul>
</li>
<li>
<p>语句特点</p>
<ul>
<li>
<p>switch（电闸原理）作用域</p>
<ul>
<li>Java5 以前 switch(expr)中，expr 只能是 byte、short、char、int。
从 Java 5 开始，Java 中引入了枚举类型， expr 也可以是 enum 类型。
从 Java 7 开始，expr 还可以是字符串(String)，但是长整型(long)在目前所有的版本中都是不可以的。</li>
</ul>
</li>
<li>
<p>break、continue、return</p>
<ul>
<li></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h3>
<ul>
<li>
<p>面向对象与面向过程</p>
<ul>
<li>
<p>面向对象：纪传体史记</p>
<ul>
<li>典例：Java，万物皆对象，Java自带了许多封装好的方法，方便我们调用。面向对象加强了代码的重用，屏蔽差异性。</li>
</ul>
</li>
<li>
<p>面向过程：编年体左转</p>
<ul>
<li>典例：C，对于每一个功能，需要编写函数进行一步一步的实现。使用的时候再一步一步调用。</li>
</ul>
</li>
</ul>
</li>
<li>
<p>三大特性</p>
<ul>
<li>
<p>封装</p>
<ul>
<li>封装把一个对象的属性私有化，同时提供一些可以被外界访问的属性的方法。</li>
</ul>
</li>
<li>
<p>继承</p>
<ul>
<li>新的类可以继承已有的类，Class A extends Class B,A拥有B的所有属性与方法，但是无法访问私有属性</li>
</ul>
</li>
<li>
<p>多态</p>
<ul>
<li>
<p>多态的体现就在于继承与接口，可以实现同一个方法speak()被不同类型的对象调用，但是根据对象的实际类型，会产生不同的行为。</p>
<ul>
<li>class Animal{
public void speak(){
Syetem.out.println(&quot;动物叫&quot;);
}
}
class cat extends Animal{
public void speak{
Syetem.out.println(&quot;cat叫&quot;);
}
}
class dog extends Animal{
public void speak{
Syetem.out.println(&quot;dog叫&quot;);
}
}</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>重载与重写的区别</p>
<ul>
<li>都是实现多态的方式：重载也叫方法重载，是同方法名，有着不同的参数，实现了不同的行为方法的我实现，例如实现不同数据类型的运算。</li>
</ul>
</li>
<li>
<p>访问修饰符的区别</p>
<ul>
<li>访问修饰符：public、protected、private</li>
</ul>
</li>
<li>
<p>this关键字</p>
</li>
<li>
<p>抽象类和接口的区别</p>
</li>
<li>
<p>成员变量与局部变量的区别</p>
</li>
<li>
<p>静态变量与实例变量的区别</p>
</li>
<li>
<p>静态方法与实例方法的区别</p>
</li>
<li>
<p>final、finally、finalize关键字的作用</p>
</li>
<li>
<p>==和equals的区别</p>
</li>
<li>
<p>hashCode与equals</p>
</li>
<li>
<p>Java是值传递还是引用传递</p>
</li>
<li>
<p>深拷贝与浅拷贝</p>
</li>
<li>
<p>Java创建对象有几种方式</p>
</li>
</ul>
<h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h3>
<h3 id="integer" tabindex="-1"><a class="header-anchor" href="#integer" aria-hidden="true">#</a> Integer</h3>
<h3 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> Object</h3>
<h3 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h3>
<h3 id="i-o" tabindex="-1"><a class="header-anchor" href="#i-o" aria-hidden="true">#</a> I/O</h3>
<h3 id="序列化" tabindex="-1"><a class="header-anchor" href="#序列化" aria-hidden="true">#</a> 序列化</h3>
<h3 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h3>
<h3 id="注解" tabindex="-1"><a class="header-anchor" href="#注解" aria-hidden="true">#</a> 注解</h3>
<h3 id="反射" tabindex="-1"><a class="header-anchor" href="#反射" aria-hidden="true">#</a> 反射</h3>
<h3 id="jdk8新特性" tabindex="-1"><a class="header-anchor" href="#jdk8新特性" aria-hidden="true">#</a> JDK8新特性</h3>
<h3 id="lambdb表达式" tabindex="-1"><a class="header-anchor" href="#lambdb表达式" aria-hidden="true">#</a> Lambdb表达式</h3>
<h3 id="optional" tabindex="-1"><a class="header-anchor" href="#optional" aria-hidden="true">#</a> Optional</h3>
<h3 id="stream流" tabindex="-1"><a class="header-anchor" href="#stream流" aria-hidden="true">#</a> Stream流</h3>
<h2 id="java集合框架" tabindex="-1"><a class="header-anchor" href="#java集合框架" aria-hidden="true">#</a> Java集合框架</h2>
<h2 id="java并发编程" tabindex="-1"><a class="header-anchor" href="#java并发编程" aria-hidden="true">#</a> Java并发编程</h2>
<h2 id="jvm" tabindex="-1"><a class="header-anchor" href="#jvm" aria-hidden="true">#</a> JVM</h2>
<h2 id="spring" tabindex="-1"><a class="header-anchor" href="#spring" aria-hidden="true">#</a> Spring</h2>
<h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h2>
<h2 id="分布式" tabindex="-1"><a class="header-anchor" href="#分布式" aria-hidden="true">#</a> 分布式</h2>
<h2 id="rocketmq" tabindex="-1"><a class="header-anchor" href="#rocketmq" aria-hidden="true">#</a> RocketMQ</h2>
<h2 id="计算机网络" tabindex="-1"><a class="header-anchor" href="#计算机网络" aria-hidden="true">#</a> 计算机网络</h2>
<h2 id="操作系统" tabindex="-1"><a class="header-anchor" href="#操作系统" aria-hidden="true">#</a> 操作系统</h2>
<h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h2>
<h2 id="mybatis" tabindex="-1"><a class="header-anchor" href="#mybatis" aria-hidden="true">#</a> MyBatis</h2>
</iframe>`,r:{minutes:6.01,words:1804},y:"a",t:"思维导图",s:"JAVA SE思维导图"},["/mianshi/mindmap","/mianshi/mindmap.md"]],["v-c806ba38","/mianshi/myfirstoffer.html",{d:1686622933e3,c:["面经"],g:["Java SE"],u:!0,e:`<p><em>首先，该公司正在寻找Java开发的实习员工，需要具备计算机或相关专业的背景，熟悉Linux或UNIX操作平台，掌握Java语言和Spring框架其中一种，了解常用的设计模式和数据结构，具备良好的分析、解决问题的能力。基于这些要求，我会从以下几个方面对您进行模拟面试：</em></p>
<blockquote>
<p>Java语言：</p>
<ul>
<li>
<p>Java语言的主要特性，如面向对象、跨平台等；</p>
<ul>
<li>面向对象：Java是一门面向对象的编程语言，支持封装、继承和多态等特性，使程序结构更加清晰、易于维护和扩展。</li>
<li>跨平台：Java程序可以在多个平台上运行，这是由于Java虚拟机（JVM）的存在，它可以将Java程序编译为字节码，并在不同的平台上解释执行。</li>
</ul>
</li>
<li>
<p>常用的集合类，如List、Set、Map等，以及它们的特点和使用场景；</p>
<ul>
<li>List：有序集合，可以存储重复元素，常用的实现类有ArrayList和LinkedList，适用于需要按照插入顺序访问数据的场景。</li>
<li>Set：无序集合，不允许存储重复元素，常用的实现类有HashSet和TreeSet，适用于需要去重的场景。</li>
<li>Map：键值对集合，不允许重复的键，常用的实现类有HashMap和TreeMap，适用于需要根据键查找值的场景。</li>
</ul>
</li>
<li>
<p>反射机制的概念和使用方法；</p>
<ul>
<li>
<p>反射机制是指在运行时动态地获取类的信息并操作类的属性、方法、构造方法等，可以实现动态创建对象、动态调用方法等功能。</p>
</li>
<li>
<p>反射机制主要涉及到Class、Constructor、Method、Field等类，可以通过调用它们的方法来获取类的信息和操作类的属性、方法、构造方法等。</p>
</li>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>获取Person类的Class对象：
Class&lt;Person&gt; personClass = Person.class;
创建Person对象：
Person person = personClass.newInstance(); // 调用默认构造方法创建对象
或者也可以使用有参构造方法创建对象：
Constructor&lt;Person&gt; constructor = personClass.getConstructor(String.class, int.class);
Person person = constructor.newInstance("Tom", 18);
获取和修改对象的属性值：
Field nameField = personClass.getDeclaredField("name");
nameField.setAccessible(true); // 设置可访问
nameField.set(person, "Jerry"); // 修改属性值
String name = (String) nameField.get(person); // 获取属性值
调用对象的方法：
Method sayHelloMethod = personClass.getDeclaredMethod("sayHello");
sayHelloMethod.invoke(person); // 调用方法
通过反射机制，可以实现在运行时动态地操作类的属性、方法、构造方法等，具有很高的灵活性和扩展性，但同时也需要注意反射机制的使用安全问题，例如私有属性、方法的访问权限、类型转换等问题。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>多线程编程的基础知识，如线程的创建和启动、线程同步和互斥等。</p>
<ul>
<li>
<p>线程的创建和启动：可以通过继承Thread类或实现Runnable接口来创建线程，并通过调用start()方法来启动线程。</p>
</li>
<li>
<p>线程同步和互斥：可以使用synchronized关键字来实现线程同步和互斥，或者使用Lock接口和Condition接口进行更加灵活的线程同步和互斥操作。另外，也可以使用volatile关键字来保证多线程之间的可见性。</p>
</li>
<li>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> count<span class="token punctuation">;</span> <span class="token comment">// 计数器</span>
    
    <span class="token comment">// 增加计数器的值</span>
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 减少计数器的值</span>
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        count<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 获取计数器的值</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
    
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CounterThread</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Counter</span> counter<span class="token punctuation">;</span> <span class="token comment">// 计数器对象</span>
    
    <span class="token comment">// 构造方法，传入计数器对象</span>
    <span class="token keyword">public</span> <span class="token class-name">CounterThread</span><span class="token punctuation">(</span><span class="token class-name">Counter</span> counter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>counter <span class="token operator">=</span> counter<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 线程执行的方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            counter<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 增加计数器的值</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
    
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Counter</span> counter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建计数器对象</span>
        <span class="token class-name">CounterThread</span> thread1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CounterThread</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建线程1，传入计数器对象</span>
        <span class="token class-name">CounterThread</span> thread2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CounterThread</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建线程2，传入计数器对象</span>
    
        thread1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 启动线程1</span>
        thread2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 启动线程2</span>
    
        thread1<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 等待线程1执行完毕</span>
        thread2<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 等待线程2执行完毕</span>
    
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>counter<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出计数器的值</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token class-name">Counter</span>类表示一个计数器，包含了<span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>和<span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span>方法用于增加和减少计数器的值，以及<span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>方法用于获取计数器的值。在<span class="token class-name">CounterThread</span>类中，通过调用<span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>方法来增加计数器的值。在<span class="token class-name">Main</span>类中，创建了两个<span class="token class-name">CounterThread</span>线程对象，并启动它们，最后通过<span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span>方法等待它们执行完毕，并输出计数器的值。
    
在<span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>和<span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span>方法中，加上了<span class="token keyword">synchronized</span>关键字，用于保证线程同步和互斥，避免多个线程同时修改计数器的值。
    
在<span class="token class-name">Main</span>类的主方法中，首先创建了一个<span class="token class-name">Counter</span>对象，然后创建了两个<span class="token class-name">CounterThread</span>线程对象，并启动它们。使用<span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span>方法等待它们执行完毕，最后输出计数器的值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<p>Spring框架：</p>
<ul>
<li>
<p>Spring框架的核心特性，如依赖注入、控制反转等；</p>
<ul>
<li>
<p>控制反转（IoC）：将对象的创建、配置、管理等任务交给Spring容器来完成，使得应用程序更加灵活、解耦合。</p>
</li>
<li>
<p>依赖注入（DI）：通过依赖注入的方式将一个对象所依赖的其他对象注入到它自己中，使得对象之间的关系更加清晰、易于维护。</p>
</li>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*XML:
首先定义一个接口：
public interface MessageService {
    String getMessage();
}
然后定义一个实现类：
public class MessageServiceImpl implements MessageService {
    public String getMessage() {
        return "Hello, World!";
    }
}
接下来，在Spring的配置文件中配置依赖注入：
&lt;bean id="messageService" class="com.example.MessageServiceImpl"/&gt;
&lt;bean id="messagePrinter" class="com.example.MessagePrinter"&gt;
    &lt;property name="messageService" ref="messageService"/&gt;
&lt;/bean&gt;
在这个配置文件中，配置了一个id为messageService的bean，它的类型为MessageServiceImpl。然后配置了一个id为messagePrinter的bean，它的类型为MessagePrinter，其中有一个名为messageService的属性，它的值通过ref属性指向了messageService这个bean。
    
最后，定义MessagePrinter类，它通过依赖注入的方式获取MessageService对象，并输出消息：
public class MessagePrinter {
    private MessageService messageService;
    
    public void setMessageService(MessageService messageService) {
        this.messageService = messageService;
    }
    
    public void printMessage() {
        System.out.println(messageService.getMessage());
    }
}
在这个示例中，通过依赖注入的方式将MessageService对象注入到了MessagePrinter对象中，使得MessagePrinter可以调用MessageService对象的getMessage()方法来获取消息并输出。通过这种方式，对象之间的关系更加清晰、易于维护。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>注解：
首先定义一个接口：
public interface MessageService {
    String getMessage();
}
然后定义一个实现类：
@Service
public class MessageServiceImpl implements MessageService {
    @Override
    public String getMessage() {
        return "Hello, World!";
    }
}
接下来，在Spring的配置文件中配置依赖注入和控制反转：
@Configuration
@ComponentScan(basePackages = "com.example")
public class AppConfig {
}
在这个配置类中，使用@Configuration注解标记它为Spring配置类，同时使用@ComponentScan注解指定要扫描的包路径，使得Spring容器可以将被标记为@Service的类自动创建对象并管理它们的生命周期。
    
最后，定义MessagePrinter类，它通过依赖注入的方式获取MessageService对象，并输出消息：
@Component
public class MessagePrinter {
    @Autowired
    private MessageService messageService;
    
    public void printMessage() {
        System.out.println(messageService.getMessage());
    }
}
在这个示例中，使用@Component注解标记MessagePrinter类为Spring组件，同时使用@Autowired注解标记messageService属性需要进行依赖注入。当Spring容器创建MessagePrinter对象时，会自动将messageService属性注入到它中。通过这种方式，对象之间的关系更加清晰、易于维护。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>Bean的生命周期，包括Bean的实例化、属性注入、初始化和销毁等过程；</p>
<ul>
<li>
<p>Bean的实例化：Spring容器根据配置文件或注解等方式创建Bean的实例。</p>
</li>
<li>
<p>属性注入：Spring容器将Bean所依赖的其他Bean或简单类型的值注入到Bean实例中。</p>
</li>
<li>
<p>初始化：Spring容器调用Bean的初始化方法，可以通过实现InitializingBean接口或使用@PostConstruct注解来定义初始化方法。</p>
</li>
<li>
<p>销毁：Spring容器销毁Bean实例时调用Bean的销毁方法，可以通过实现DisposableBean接口或使用@PreDestroy注解来定义销毁方法。</p>
</li>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>首先定义一个类：
    
java
Copy
public class MyBean implements InitializingBean, DisposableBean {
    private String message;
    
    public void setMessage(String message) {
        this.message = message;
    }
    
    public String getMessage() {
        return message;
    }
    
    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println("MyBean initialized.");
    }
    
    @Override
    public void destroy() throws Exception {
        System.out.println("MyBean destroyed.");
    }
}
在这个类中，定义了一个message属性和Getter/Setter方法，实现了InitializingBean和DisposableBean接口中的方法。在afterPropertiesSet()方法中，输出初始化信息；在destroy()方法中，输出销毁信息。
    
接下来，在Spring的配置文件中配置Bean的生命周期：
    
xml
Copy
&lt;bean id="myBean" class="com.example.MyBean" init-method="afterPropertiesSet" destroy-method="destroy"&gt;
    &lt;property name="message" value="Hello, World!"/&gt;
&lt;/bean&gt;
在这个配置文件中，首先定义了一个id为myBean的Bean，它的类型为MyBean。然后使用property元素注入了一个名为message的属性，它的值为"Hello, World!"。同时，使用init-method属性指定了Bean初始化时要调用的方法为afterPropertiesSet()，使用destroy-method属性指定了Bean销毁时要调用的方法为destroy()。
    
最后，运行代码：
    
java
Copy
public class Main {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        MyBean myBean = context.getBean("myBean", MyBean.class);
        System.out.println(myBean.getMessage());
        ((AbstractApplicationContext) context).registerShutdownHook();
    }
}
在这个代码中，首先创建了一个Spring容器，并从容器中获取了一个id为myBean的Bean。然后输出了它的message属性的值。最后，注册了一个JVM关闭的钩子，使得Spring容器在JVM关闭时能够正确地销毁Bean。
    
在运行代码时，会输出如下信息：
    
Copy
MyBean initialized.
Hello, World!
MyBean destroyed.
在这个输出中，可以看到Bean的初始化和销毁过程都已经被正确地执行了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>下面是一个使用注解的示例代码，演示了Bean的生命周期过程：
    
首先定义一个类：
    
java
Copy
@Component
public class MyBean implements InitializingBean, DisposableBean {
    private String message;
    
    public void setMessage(String message) {
        this.message = message;
    }
    
    public String getMessage() {
        return message;
    }
    
    @PostConstruct
    public void init() {
        System.out.println("MyBean initialized.");
    }
    
    @PreDestroy
    public void destroy() {
        System.out.println("MyBean destroyed.");
    }
}
在这个类中，使用@Component注解标记了它为一个Spring组件，并实现了InitializingBean和DisposableBean接口中的方法。在init()方法上使用@PostConstruct注解，表示它是Bean初始化时要调用的方法；在destroy()方法上使用@PreDestroy注解，表示它是Bean销毁时要调用的方法。
    
接下来，在Spring的配置类中配置Bean的生命周期：
    
java
Copy
@Configuration
@ComponentScan(basePackages = "com.example")
public class AppConfig {
    @Bean(initMethod = "init", destroyMethod = "destroy")
    public MyBean myBean() {
        MyBean bean = new MyBean();
        bean.setMessage("Hello, World!");
        return bean;
    }
}
在这个配置类中，使用@Configuration注解标记它为Spring配置类，并使用@ComponentScan注解指定要扫描的包路径。然后使用@Bean注解标记了一个名为myBean的Bean，同时指定了它的初始化方法为init()，销毁方法为destroy()。在@Bean方法中创建了一个MyBean对象，并设置了它的message属性为"Hello, World!"。
    
最后，运行代码：
    
java
Copy
public class Main {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        MyBean myBean = context.getBean(MyBean.class);
        System.out.println(myBean.getMessage());
        context.close();
    }
}
在这个代码中，首先创建了一个AnnotationConfigApplicationContext，使用它加载了AppConfig配置类。然后从容器中获取了一个MyBean对象，并输出了它的message属性的值。最后，关闭了Spring容器。在容器关闭时，会自动调用MyBean的销毁方法。
    
在运行代码时，会输出如下信息：
    
Copy
MyBean initialized.
Hello, World!
MyBean destroyed.
在这个输出中，可以看到Bean的初始化和销毁过程都已经被正确地执行了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>常用的注解，如@Component、@Controller、@Service、@Repository、@Autowired等，以及它们的作用和使用场景；</p>
<ul>
<li>
<p>@Component：通用的组件注解，可以用于标识任何Spring管理的组件。</p>
</li>
<li>
<p>@Controller：用于标识控制器组件，处理Web请求。</p>
</li>
<li>
<p>@Service：用于标识服务组件，实现业务逻辑。</p>
</li>
<li>
<p>@Repository：用于标识数据访问组件，实现数据访问。</p>
</li>
<li>
<p>@Autowired：自动注入依赖，可以用于注入其他Bean实例。</p>
</li>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>XML:
首先定义一个接口：
public interface MessageService {
    String getMessage();
}
然后定义一个实现类：
public class MessageServiceImpl implements MessageService {
    public String getMessage() {
        return "Hello, World!";
    }
}
接下来，在Spring的配置文件中配置依赖注入：
&lt;bean id="messageService" class="com.example.MessageServiceImpl"/&gt;
&lt;bean id="messagePrinter" class="com.example.MessagePrinter"&gt;
    &lt;property name="messageService" ref="messageService"/&gt;
&lt;/bean&gt;
在这个配置文件中，配置了一个id为messageService的bean，它的类型为MessageServiceImpl。然后配置了一个id为messagePrinter的bean，它的类型为MessagePrinter，其中有一个名为messageService的属性，它的值通过ref属性指向了messageService这个bean。
    
最后，在MessagePrinter类中使用依赖注入的方式获取MessageService对象，并输出消息：
public class MessagePrinter {
    private MessageService messageService;
    
    public void setMessageService(MessageService messageService) {
        this.messageService = messageService;
    }
    
    public void printMessage() {
        System.out.println(messageService.getMessage());
    }
}
在这个示例中，通过依赖注入的方式将MessageService对象注入到了MessagePrinter对象中，使得MessagePrinter可以调用MessageService对象的getMessage()方法来获取消息并输出。通过这种方式，对象之间的关系更加清晰、易于维护。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>注解：
下面是一个使用注解的示例代码，演示了依赖注入的过程：
    
首先定义一个接口：
    
java
Copy
public interface MessageService {
    String getMessage();
}
然后定义一个实现类：
    
java
Copy
@Service
public class MessageServiceImpl implements MessageService {
    public String getMessage() {
        return "Hello, World!";
    }
}
在这个类中，使用@Service注解标记了它为一个Spring组件。
    
接下来，在Spring的配置类中配置依赖注入：
    
java
Copy
@Configuration
@ComponentScan(basePackages = "com.example")
public class AppConfig {
}
在这个配置类中，使用@Configuration注解标记它为Spring配置类，并使用@ComponentScan注解指定要扫描的包路径，使得Spring容器可以自动创建并管理被注解标记的组件。
    
最后，在MessagePrinter类中使用依赖注入的方式获取MessageService对象，并输出消息：
    
java
Copy
@Component
public class MessagePrinter {
    @Autowired
    private MessageService messageService;
    
    public void printMessage() {
        System.out.println(messageService.getMessage());
    }
}
在这个类中，使用@Component注解标记了它为一个Spring组件，并使用@Autowired注解标记了messageService属性需要进行依赖注入。当Spring容器创建MessagePrinter对象时，会自动将messageService属性注入到它中。通过这种方式，对象之间的关系更加清晰、易于维护。
    
最后，运行代码：
    
java
Copy
public class Main {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        MessagePrinter messagePrinter = context.getBean(MessagePrinter.class);
        messagePrinter.printMessage();
        context.close();
    }
}
在这个代码中，首先创建了一个AnnotationConfigApplicationContext，使用它加载了AppConfig配置类。然后从容器中获取了一个MessagePrinter对象，并调用了它的printMessage()方法。最后，关闭了Spring容器。
    
在运行代码时，会输出如下信息：
    
Copy
Hello, World!
在这个输出中，可以看到依赖注入的过程已经被正确地执行了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>Spring AOP的概念和使用方法，包括切面、切点、通知等。</p>
<ul>
<li>切面（Aspect）：横向抽取出多个对象的共性，形成一个切面，包含了多个通知和切点。</li>
<li>切点（Pointcut）：定义了哪些方法需要被切入，可以通过表达式方式指定切入的方法。</li>
<li>通知（Advice）：指定切入的具体逻辑，包括前置通知、后置通知、异常通知、环绕通知等。</li>
<li>切面织入（Weaving）：将切面和目标对象的方法进行合并，创建一个代理对象。</li>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>下面是一个简单的示例代码，演示了Spring AOP的使用方法：
    
首先定义一个接口：
    
java
Copy
public interface MessageService {
    String getMessage();
}
然后定义一个实现类：
    
java
Copy
@Service
public class MessageServiceImpl implements MessageService {
    public String getMessage() {
        return "Hello, World!";
    }
}
在这个类中，使用@Service注解标记了它为一个Spring组件。
    
接下来，定义一个切面：
    
java
Copy
@Aspect
@Component
public class LoggingAspect {
    @Before("execution(* com.example.MessageService.*(..))")
    public void logBefore(JoinPoint joinPoint) {
        System.out.println("Before method execution: " + joinPoint.getSignature().getName());
    }
    
    @AfterReturning(pointcut = "execution(* com.example.MessageService.*(..))", returning = "result")
    public void logAfterReturning(JoinPoint joinPoint, Object result) {
        System.out.println("After method execution: " + joinPoint.getSignature().getName() + ", result: " + result);
    }
    
    @AfterThrowing(pointcut = "execution(* com.example.MessageService.*(..))", throwing = "ex")
    public void logAfterThrowing(JoinPoint joinPoint, Throwable ex) {
        System.out.println("After method execution (exception thrown): " + joinPoint.getSignature().getName() + ", exception: " + ex.getMessage());
    }
}
在这个类中，使用@Aspect注解标记了它为一个切面。然后定义了三个通知方法，分别是前置通知、后置通知和异常通知。使用@Before注解标记了前置通知方法，使用@AfterReturning注解标记了后置通知方法，使用@AfterThrowing注解标记了异常通知方法。在这些注解的参数中，使用execution()函数定义了切入的方法，它的参数是一个切点表达式，指定了要切入的方法。
    
最后，在Main类中使用MessageService对象，并输出消息：
    
java
Copy
public class Main {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(LoggingAspect.class, MessageServiceImpl.class);
        MessageService messageService = context.getBean(MessageService.class);
        System.out.println(messageService.getMessage());
        context.close();
    }
}
在这个代码中，首先创建了一个AnnotationConfigApplicationContext，使用它加载了LoggingAspect和MessageServiceImpl两个组件。然后从容器中获取了一个MessageService对象，并调用了它的getMessage()方法。在调用过程中，切面中定义的通知方法会被自动执行。最后，关闭了Spring容器。
    
在运行代码时，会输出如下信息：
    
oxygene
Copy
Before method execution: getMessage
Hello, World!
After method execution: getMessage, result: Hello, World!
在这个输出中，可以看到切面中定义的前置通知和后置通知方法都已经被执行了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<p>数据结构和算法：</p>
<ul>
<li>
<p>常用的数据结构，如数组、链表、栈、队列、二叉树、哈希表等，以及它们的特点和使用场景；</p>
<ul>
<li>数组：一段连续的内存空间，可以存储相同类型的元素，可以通过下标直接访问元素，适用于随机访问数据的场景。</li>
<li>链表：由一系列节点组成，每个节点包含数据和指向下一个节点的指针，适用于插入、删除元素频繁的场景。</li>
<li>栈：一种后进先出（LIFO）的数据结构，适用于需要实现回溯、撤销等操作的场景。</li>
<li>队列：一种先进先出（FIFO）的数据结构，适用于需要实现排队、调度等操作的场景。</li>
<li>二叉树：一种树形数据结构，每个节点最多有两个子节点，适用于实现快速查找、排序等操作的场景。</li>
<li>哈希表：一种以键值对形式存储数据的数据结构，可以通过键快速访问对应的值，适用于需要快速查找、插入、删除数据的场景。</li>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>数组：
    
java
Copy
int[] arr = {1, 2, 3, 4, 5};
System.out.println(arr[2]); // 输出 3
链表：
    
java
Copy
class ListNode {
    int val;
    ListNode next;
    ListNode(int val) {
        this.val = val;
        this.next = null;
    }
}
    
ListNode head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
System.out.println(head.val); // 输出 1
System.out.println(head.next.val); // 输出 2
System.out.println(head.next.next.val); // 输出 3
栈：
    
java
Copy
Stack&lt;Integer&gt; stack = new Stack&lt;&gt;();
stack.push(1);
stack.push(2);
stack.push(3);
System.out.println(stack.pop()); // 输出 3
System.out.println(stack.pop()); // 输出 2
System.out.println(stack.pop()); // 输出 1
队列：
    
java
Copy
Queue&lt;Integer&gt; queue = new LinkedList&lt;&gt;();
queue.offer(1);
queue.offer(2);
queue.offer(3);
System.out.println(queue.poll()); // 输出 1
System.out.println(queue.poll()); // 输出 2
System.out.println(queue.poll()); // 输出 3
二叉树：
    
java
Copy
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
    
TreeNode root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
System.out.println(root.val); // 输出 1
System.out.println(root.left.val); // 输出 2
System.out.println(root.right.val); // 输出 3
哈希表：
    
java
Copy
Map&lt;String, Integer&gt; map = new HashMap&lt;&gt;();
map.put("apple", 1);
map.put("banana", 2);
map.put("orange", 3);
System.out.println(map.get("banana")); // 输出 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>常用的算法，如排序算法、查找算法、递归算法等，以及它们的时间复杂度和空间复杂度。</p>
<ul>
<li>排序算法：冒泡排序、选择排序、插入排序、希尔排序、归并排序、快速排序等。时间复杂度从O(n^2)到O(nlogn)不等。</li>
<li>查找算法：顺序查找、二分查找、哈希查找等。时间复杂度从O(n)到O(logn)不等。</li>
<li>递归算法：通过函数自身调用来解决问题的算法，适用于树形结构、分治等问题。时间复杂度和空间复杂度都与递归层数相关。</li>
<li>动态规划算法：通过将原问题分解为子问题来解决问题的算法，适用于具有重叠子问题和最优子结构性质的问题。时间复杂度和空间复杂度取决于子问题的个数和规模。</li>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>冒泡排序：
    
java
Copy
void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i &lt; n - 1; i++) {
        for (int j = 0; j &lt; n - i - 1; j++) {
            if (arr[j] &gt; arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
选择排序：
    
java
Copy
void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i &lt; n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j &lt; n; j++) {
            if (arr[j] &lt; arr[minIndex]) {
                minIndex = j;
            }
        }
        int temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}
插入排序：
    
java
Copy
void insertionSort(int[] arr) {
    int n = arr.length;
    for (int i = 1; i &lt; n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j &gt;= 0 &amp;&amp; arr[j] &gt; key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
递归算法：
    
java
Copy
int fibonacci(int n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
动态规划算法：
    
java
Copy
int fibonacci(int n) {
    int[] dp = new int[n + 1];
    dp[0] = 0;
    dp[1] = 1;
    for (int i = 2; i &lt;= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<p>数据库和缓存：</p>
<ul>
<li>
<p>MySQL的性能调优，包括索引优化、SQL语句的优化、参数调优等；</p>
<ul>
<li>索引优化：为经常查询的列创建索引、避免过多使用联合索引、避免使用过长的索引等。</li>
<li>SQL语句的优化：避免使用SELECT *、避免在WHERE子句中使用函数、使用EXPLAIN分析SQL语句等。</li>
<li>参数调优：调整缓冲池大小、线程池大小、连接池大小等参数，根据硬件配置和应用场景进行优化。</li>
<li>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>MySQL中常用的调优方法有很多，下面给出一些常用的调优方法及相关语句。
    
索引优化
创建索引：
CREATE INDEX idx_name ON table_name(column_name);
删除索引：
DROP INDEX idx_name ON table_name;
查看索引信息：
SHOW INDEX FROM table_name;
SQL语句优化
分析查询语句：
EXPLAIN SELECT column1, column2 FROM table_name WHERE column3 = 'value';
避免使用函数：
SELECT * FROM table_name WHERE date_column &gt;= '2022-01-01' AND date_column &lt; '2023-01-01';
参数调优
调整缓冲池大小：
SET GLOBAL innodb_buffer_pool_size = 2G;
调整线程池大小：
SET GLOBAL thread_cache_size = 64;
调整连接池大小：
SET GLOBAL max_connections = 1000;
需要注意的是，不同的MySQL版本和配置可能会有不同的调优方法和参数配置。此外，在进行调优时，需要结合实际场景和需求进行调整，并进行性能测试，找到最优的参数配置。同时也需要注意，某些调优方法可能会对系统产生较大的影响，需要谨慎处理。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>Redis的数据结构和常用命令，以及它们的使用场景；</p>
<ul>
<li>数据结构：字符串、哈希表、列表、集合、有序集合等。</li>
<li>常用命令：SET、GET、HSET、HGET、LPUSH、RPUSH、SADD、SMEMBERS、ZADD、ZRANGE等。</li>
<li>使用场景：字符串适用于存储简单的键值对、哈希表适用于存储复杂的数据结构、列表适用于实现队列、集合适用于去重、有序集合适用于排序和排行榜等场景。</li>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Redis数据结构和常用命令
    
字符串
字符串是Redis最基本的数据类型，可以存储字符串、整数或浮点数等类型的数据。
常用命令：
# 设置键值对
SET key value
# 获取指定键的值
GET key
使用场景：适用于存储简单的键值对。
    
哈希表
哈希表是Redis中的一种键值对数据结构，可以存储多个字段和对应的值。
常用命令：
# 设置哈希表中指定字段的值
HSET key field value
# 获取哈希表中指定字段的值
HGET key field
使用场景：适用于存储复杂的数据结构。
    
列表
列表是Redis的一种数据结构，可以实现队列或栈等数据结构。
常用命令：
# 将一个或多个值插入到列表头部
LPUSH key value [value ...]
# 将一个或多个值插入到列表尾部
RPUSH key value [value ...]
使用场景：适用于实现队列等数据结构。
    
集合
集合是Redis的一种无序的数据结构，可以存储多个唯一的元素。
常用命令：
# 将一个或多个元素添加到集合中
SADD key member [member ...]
# 获取集合中所有的元素
SMEMBERS key
使用场景：适用于去重等场景。
    
有序集合
有序集合是Redis的一种数据结构，可以存储多个唯一的元素，并且每个元素都有一个分数，可以根据分数进行排序。
常用命令：
# 将一个或多个元素添加到有序集合中
ZADD key score member [score member ...]
# 获取有序集合中指定排名范围内的元素
ZRANGE key start stop [WITHSCORES]
使用场景：适用于排序和排行榜等场景。
    
需要注意的是，不同的Redis版本可能会有不同的数据结构和命令，具体的使用方法和使用场景需要根据实际情况进行选择和优化。同时，在使用Redis时，需要注意数据的持久化和内存限制等问题，以确保系统的稳定性和可靠性。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>Redis的持久化和主从复制等高可用技术；</p>
<ul>
<li>持久化：Redis支持RDB和AOF两种持久化方式，可以将数据保存到磁盘上以实现数据持久化。</li>
<li>主从复制：Redis支持主从复制，可以将主服务器上的数据同步到从服务器上，提高系统的可用性和性能。</li>
<li>高可用技术：Redis Sentinel和Redis Cluster是Redis提供的两种高可用解决方案，可以实现自动故障检测、故障转移、负载均衡等功能。</li>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在 Linux 环境下，可以使用以下步骤实现 Redis 的持久化和主从复制等高可用技术：
    
1. 安装 Redis
    
可以使用包管理器（如 apt-get、yum）安装 Redis，也可以从 Redis 官网下载源码进行编译安装。
    
2. 配置 Redis
    
在 Redis 的配置文件中，需要进行以下配置：
    
2.1. 持久化配置
    
在 Redis 配置文件中，可以通过以下配置设置 RDB 持久化和 AOF 持久化：
    
\`\`\`bash
# 开启 RDB 持久化
save 900 1
save 300 10
save 60 10000
    
# 开启 AOF 持久化
appendonly yes
\`\`\`
    
上述配置表示在 900 秒内如果至少有 1 个键被修改，则自动执行 RDB 持久化；在 300 秒内如果至少有 10 个键被修改，则自动执行 RDB 持久化；在 60 秒内如果至少有 10000 个键被修改，则自动执行 RDB 持久化。
    
appendonly yes 表示开启 AOF 持久化。
    
2.2. 主从复制配置
    
在 Redis 配置文件中，可以通过以下配置设置主从复制：
    
\`\`\`bash
# 主节点配置
bind 127.0.0.1
port 6379
daemonize yes
pidfile /var/run/redis_6379.pid
logfile /var/log/redis_6379.log
dir /var/lib/redis
    
# 从节点配置
slaveof 127.0.0.1 6379
\`\`\`
    
上述配置表示将本机的 Redis 实例作为主节点，IP 地址为 127.0.0.1，端口号为 6379；将另一台机器的 Redis 实例作为从节点，IP 地址为 127.0.0.1，端口号为 6379。
    
3. 启动 Redis
    
启动 Redis 实例时，可以通过以下命令启动：
    
\`\`\`bash
redis-server /etc/redis/redis.conf
\`\`\`
    
其中 /etc/redis/redis.conf 为 Redis 的配置文件路径。
    
4. 配置 Sentinel
    
在 Redis Sentinel 的配置文件中，需要进行以下配置：
    
\`\`\`bash
sentinel monitor mymaster 127.0.0.1 6379 2
sentinel down-after-milliseconds mymaster 5000
sentinel failover-timeout mymaster 180000
sentinel parallel-syncs mymaster 1
\`\`\`
    
上述配置表示监控名为 mymaster 的主节点，IP 地址为 127.0.0.1，端口号为 6379；当主节点在 5000 毫秒内没有响应时，将被视为不可用；当主节点在 180000 毫秒内没有恢复时，将触发故障转移；故障转移时，最多有 1 个从节点参与同步数据。
    
5. 启动 Sentinel
    
启动 Sentinel 实例时，可以通过以下命令启动：
    
\`\`\`bash
redis-sentinel /etc/redis/sentinel.conf
\`\`\`
    
其中 /etc/redis/sentinel.conf 为 Redis Sentinel 的配置文件路径。
    
6. 配置 Redis Cluster
    
在 Redis Cluster 的配置文件中，需要进行以下配置：
    
\`\`\`bash
port 7000
cluster-enabled yes
cluster-config-file nodes-7000.conf
cluster-node-timeout 5000
appendonly yes
\`\`\`
    
上述配置表示开启 Redis Cluster，端口号为 7000，集群配置文件为 nodes-7000.conf，节点超时时间为 5000 毫秒，开启 AOF 持久化。
    
7. 启动 Redis Cluster
    
启动 Redis Cluster 时，需要启动多个 Redis 实例，并通过以下命令将它们组成一个集群：
    
\`\`\`bash
redis-cli --cluster create 127.0.0.1:7000 127.0.0.1:7001 127.0.0.1:7002 \\
127.0.0.1:7003 127.0.0.1:7004 127.0.0.1:7005 --cluster-replicas3
    
其中，127.0.0.1:7000~127.0.0.1:7005 为 Redis 实例的地址和端口号，--cluster-replicas 3 表示每个主节点有 3 个从节点。
    
以上是 Redis 在 Linux 环境下持久化和主从复制等高可用技术的详细解决方案。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>缓存穿透、缓存雪崩、缓存击穿等缓存常见问题的处理方法。</p>
<ul>
<li>缓存穿透：使用布隆过滤器、缓存空对象、限制请求频率等方法来避免缓存穿透。</li>
<li>缓存雪崩：设置缓存失效时间随机化、使用分布式锁等方法来避免缓存雪崩。</li>
<li>缓存击穿：使用互斥锁、永不过期等方法来避免缓存击穿。</li>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>以下是在 Java 环境下实现缓存穿透、缓存雪崩、缓存击穿等缓存常见问题的代码示例：
    
1. 缓存穿透
    
1.1. 布隆过滤器
    
\`\`\`java
public class BloomFilter {
    private BitSet bitSet;
    private int size;
    private int hashFunctions;
    
    public BloomFilter(int size, int hashFunctions) {
        this.bitSet = new BitSet(size);
        this.size = size;
        this.hashFunctions = hashFunctions;
    }
    
    public void add(String key) {
        for (int i = 0; i &lt; hashFunctions; i++) {
            int index = hash(key, i) % size;
            bitSet.set(index);
        }
    }
    
    public boolean contains(String key) {
        for (int i = 0; i &lt; hashFunctions; i++) {
            int index = hash(key, i) % size;
            if (!bitSet.get(index)) {
                return false;
            }
        }
        return true;
    }
    
    private int hash(String key, int index) {
        switch (index) {
            case 0:
                return Math.abs(key.hashCode());
            case 1:
                return Math.abs(key.hashCode() * 31);
            case 2:
                return Math.abs(key.hashCode() * 37);
            default:
                return Math.abs(key.hashCode() * 61);
        }
    }
}
\`\`\`
    
1.2. 缓存空对象
    
\`\`\`java
public class CacheService {
    private static Map&lt;String, Object&gt; cache = new HashMap&lt;&gt;();
    
    public Object get(String key) {
        Object value = cache.get(key);
        if (value == null) {
            if (!cache.containsKey(key)) {
                return null;
            }
            value = queryFromDatabase(key);
            if (value == null) {
                value = new Object(); // 空对象
            }
            cache.put(key, value);
        }
        return value;
    }
    
    private Object queryFromDatabase(String key) {
        // 查询数据库
        return null;
    }
}
\`\`\`
    
1.3. 限制请求频率
    
\`\`\`java
public class CacheService {
    private static Map&lt;String, Object&gt; cache = new HashMap&lt;&gt;();
    private static Map&lt;String, Long&gt; rateLimit = new HashMap&lt;&gt;();
    
    public Object get(String key) {
        // 判断请求频率
        long currentTime = System.currentTimeMillis();
        if (rateLimit.containsKey(key) &amp;&amp; currentTime - rateLimit.get(key) &lt; 1000) {
            throw new RuntimeException("Too many requests");
        }
        rateLimit.put(key, currentTime);
    
        Object value = cache.get(key);
        if (value == null) {
            value = queryFromDatabase(key);
            if (value == null) {
                return null;
            }
            cache.put(key, value);
        }
        return value;
    }
    
    private Object queryFromDatabase(String key) {
        // 查询数据库
        return null;
    }
}
\`\`\`
    
2. 缓存雪崩
    
2.1. 设置缓存失效时间随机化
    
\`\`\`java
public class CacheService {
    private static Map&lt;String, Object&gt; cache = new HashMap&lt;&gt;();
    private static Random random = new Random();
    
    public Object get(String key) {
        Object value = cache.get(key);
        if (value == null) {
            value = queryFromDatabase(key);
            if (value == null) {
                return null;
            }
            int expireTime = 60 + random.nextInt(60); // 缓存失效时间随机化
            cache.put(key, value, expireTime);
        }
        return value;
    }
    
    private Object queryFromDatabase(String key) {
        // 查询数据库
        return null;
    }
}
\`\`\`
    
2.2. 使用分布式锁
    
\`\`\`java
public class CacheService {
    private static Map&lt;String, Object&gt; cache = new HashMap&lt;&gt;();
    private static DistributedLock lock = new DistributedLock();
    
    public Object get(String key) {
        Object value = cache.get(key);
        if (value == null) {
            if (lock.tryLock(key)) {
                try {
                    value = queryFromDatabase(key);
                    if (value == null) {
                        return null;
                    }
                    cache.put(key, value);
                } finally {
                    lock.unlock(key);
                }
            } else {
                // 获取锁失败，等待一段时间后重试
                Thread.sleep(100);
                return get(key);
            }
        }
        return value;
    }
    
    private Object queryFromDatabase(String key) {
        // 查询数据库
        return null;
    }
}
\`\`\`
    
3. 缓存击穿
    
3.1. 互斥锁
    
\`\`\`javapublic class CacheService {
    private static Map&lt;String, Object&gt; cache = new ConcurrentHashMap&lt;&gt;();
    
    public Object get(String key) {
        Object value = cache.get(key);
        if (value == null) {
            synchronized (cache) {
                value = cache.get(key);
                if (value == null) {
                    value = queryFromDatabase(key);
                    if (value == null) {
                        return null;
                    }
                    cache.put(key, value);
                }
            }
        }
        return value;
    }
    
    private Object queryFromDatabase(String key) {
        // 查询数据库
        return null;
    }
}
\`\`\`
    
3.2. 永不过期
    
\`\`\`java
public class CacheService {
    private static Map&lt;String, Object&gt; cache = new ConcurrentHashMap&lt;&gt;();
    
    public Object get(String key) {
        Object value = cache.get(key);
        if (value == null) {
            Object lock = new Object();
            synchronized (lock) {
                value = cache.get(key);
                if (value == null) {
                    value = queryFromDatabase(key);
                    if (value == null) {
                        return null;
                    }
                    cache.put(key, value);
                    lock.wait(); // 永不过期
                }
            }
        }
        return value;
    }
    
    private Object queryFromDatabase(String key) {
        // 查询数据库
        return null;
    }
}
\`\`\`
    
以上是在 Java 环境下实现缓存穿透、缓存雪崩、缓存击穿等缓存常见问题的代码示例。需要注意的是，这些示例代码仅供参考，实际应用中还需要根据具体业务场景进行调整和优化。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<p>微服务和分布式系统：</p>
<ul>
<li>微服务架构的概念和优势，以及它与传统的单体架构的区别；
<ul>
<li>微服务架构：一种将应用程序拆分为多个小型服务的架构，每个服务都可以独立部署、扩展和更新，通过轻量级通信机制相互协作。</li>
<li>优势：灵活性高、可扩展性好、部署和更新方便、容错性强等。</li>
<li>区别：传统的单体架构是将整个应用程序作为一个单独的单元来构建和部署，微服务架构则将应用程序拆分为多个小型服务，每个服务都可以独立部署和运行。</li>
</ul>
</li>
<li>服务的注册与发现，包括Zookeeper、Consul、Eureka等常用的服务注册中心；
<ul>
<li>服务注册中心：提供服务注册、发现、负载均衡等功能，可以让服务消费者方便地发现和调用服务提供者。</li>
<li>常用服务注册中心：Zookeeper、Consul、Eureka等。</li>
<li>注册与发现流程：服务提供者将自己的服务注册到注册中心，服务消费者从注册中心获取服务提供者的地址，然后调用服务。</li>
</ul>
</li>
<li>负载均衡的概念和常用算法，如轮询、随机等；
<ul>
<li>负载均衡：将请求分配到多个服务器上，使得服务器的负载均衡，并提高系统的可用性和性能。</li>
<li>常用算法：轮询、随机、加权轮询、加权随机、最小连接数等。</li>
<li>轮询算法：按照顺序轮流将请求发送到每台服务器上。</li>
<li>随机算法：随机选择一台服务器来处理请求。</li>
<li>加权轮询和加权随机算法：根据服务器的权重分配请求。</li>
<li>最小连接数算法：将请求分配给当前连接数最少的服务器。</li>
</ul>
</li>
<li>容错处理的常用方法，如熔断、降级等。
<ul>
<li>容错处理：在分布式系统中，由于各种原因可能会导致服务不可用或响应缓慢，需要使用容错处理方法来提高系统的可用性和稳定性。</li>
<li>常用方法：熔断、降级、限流、重试等。</li>
<li>熔断：当服务调用失败率达到一定阈值时，自动熔断该服务，避免请求继续访问不可用的服务，降低系统的响应时间和错误率。</li>
<li>降级：在服务不可用或响应缓慢时，通过降级返回缓存数据、默认值等方式来保证系统的可用性。</li>
<li>限流：限制服务的请求流量，避免过多请求导致系统负载过高。</li>
<li>重试：当服务调用失败时，重复尝试调用该服务，直到调用成功或达到最大重试次数。</li>
</ul>
</li>
</ul>
</blockquote>`,r:{minutes:36.51,words:10952},y:"a",t:"面试准备",s:"JAVA SE面试题"},["/mianshi/myfirstoffer","/mianshi/myfirstoffer.md"]],["v-2f327590","/mianshi/NKLeJingLing.html",{a:"来自牛客网",d:1688381824e3,c:["面经"],g:["Java"],e:`<h1> 郑州乐精灵教育面经</h1>
<ul>
<li>一面面试官问的比较简单，全程八股，集合数据库优化啥的，比较简单。但还问了我专业课成绩，挂科选手表示很难受.</li>
<li>然后写了两道问答题，一个接口，感觉挺简单的，没想到难的在二面。二面是一个之前那个面试官加一个大佬好像是。</li>
<li>自我介绍，介绍项目
1，项目中用的netty通信原理是什么（TCP）
2，阻塞IO，非阻塞IO知道吗（不知道）
3，http访问过程（随便说了说七层模型啥的）
4，编程习惯
5，红黑树了解吗，红和黑是干嘛的（不会）
6，数据库优化了解吗
7，数据库b+树了解吗
8，分库分表了解吗
9，你说能用中间表最好不用外键，为什么（给自己挖坑了，不会）
10，redis的基本数据类型
11，redis缓存穿透，雪崩知道吗
12，mq原理啥的（只会简单的用一下）
13，你会css，怎么让一个div固定到右上角（我说float，他说不行，那就定位呗，但我忘了咋用了</li>
<li>又问点了兴趣爱好，对自己大学生活总结啥的。</li>
</ul>`,r:{minutes:1.42,words:427},y:"a",t:"面试问答",s:"牛客郑州乐精灵面经"},["/mianshi/NKLeJingLing","/mianshi/NKLeJingLing.md"]],["v-6fc15a3d","/mianshi/",{c:["面试"],g:["面试"],e:`<p>总是担心基础知识遗忘的很快，于是总结了这些面试导图，现在网站放思维导图的功能这边给在研究中。</p>
<ul>
<li>
<p><a href="/mianshi/resumeRules.html" target="blank">简历编写规范</a></p>
</li>
<li>
<p><a href="/mianshi/myfirstoffer.html" target="blank">第一次面试，竟然这样问！</a></p>
</li>
<li>
<p><a href="/mianshi/mianshiQA.html" target="blank">面试后复盘</a></p>
</li>
<li>
<p><a href="/mianshi/mindmap.html" target="blank">JAVA SE思维导图</a></p>
</li>
</ul>`,r:{minutes:.39,words:116},y:"a",t:"面试",s:"面试篇"},["/mianshi/index.html","/mianshi/README.md"]],["v-c4736ae8","/mianshi/resumeRules.html",{d:16869612e5,c:["面经"],g:["简历"],u:!0,e:`<p>写好简历就相当于扣好了衣服的第一粒扣子，尤为重要！</p>
`,r:{minutes:.36,words:108},y:"a",t:"简历编写规范",s:"简历编写规范"},["/mianshi/resumeRules","/mianshi/resumeRules.md"]],["v-744b3bf6","/pdf/",{d:1681924408e3,c:["PDF"],g:["PDF"],e:`<h1> 我收藏的PDF</h1>
<blockquote>
<p>便于存放资料，减轻网站的压力以及提高响应速度，PDF先以网盘链接形式给出！后续试着实现在线阅读。</p>
</blockquote>
`,r:{minutes:.27,words:81},y:"a",t:"PDF篇",s:"PDF收藏夹"},["/pdf/index.html","/pdf/README.md"]],["v-dc384366","/redis/",{c:["Redis"],g:["Redis"],e:`<p>欢迎来到Redis篇</p>
<ul>
<li><a href="/redis/Redis.html" target="blank">Redis基础篇+八股</a></li>
</ul>
`,r:{minutes:.08,words:25},y:"a",t:"Redis",I:0},["/redis/index.html","/redis/README.md"]],["v-8c5ee32a","/redis/Redis.html",{d:168235939e4,c:["Redis"],g:["Redis"],e:`<blockquote>
<p>如何学习Redis？以下是一些系统和高效的建议：</p>
<ol>
<li>阅读Redis官方文档：Redis官方文档是学习Redis的最佳资源之一，它提供了全面的介绍和指导，包括数据结构、命令、配置和部署等方面的内容。可以从Redis官方网站上获取最新版本的文档。</li>
<li>掌握Redis的基本数据结构：Redis支持多种数据结构，如字符串、哈希、列表、集合和有序集合等。要深入了解Redis，必须掌握这些基本数据结构，以及它们的操作和用途。</li>
<li>实践：阅读Redis文档仅仅是开始，最重要的是实践。使用Redis CLI或者客户端库来执行一些命令，创建一些数据结构，并且观察其行为。尝试使用不同的数据结构和命令，以及探索Redis的一些高级特性，如事务和Lua脚本等。</li>
<li>学习Redis的应用场景：Redis有很多应用场景，如缓存、消息队列、计数器、排行榜等等。学习这些应用场景可以帮助你更好地理解Redis的特性和优势。</li>
<li>学习Redis的高级特性：Redis还有很多高级特性，如发布订阅、Lua脚本、事务、持久化、集群等。学习这些特性可以帮助你更好地利用Redis来构建复杂的应用。</li>
<li>阅读Redis源代码：如果你想深入了解Redis的实现细节，阅读Redis的源代码是一个很好的方式。可以通过GitHub获取Redis的源代码，并尝试阅读和理解其中的实现。</li>
<li>参加Redis社区：Redis社区是一个非常活跃的社区，有很多专家和开发者会在社区中分享他们的经验和见解。参加Redis社区可以帮助你更好地了解Redis，并与其他Redis用户和开发者互动。</li>
</ol>
<p>总之，要系统和高效地学习Redis，需要全面了解Redis的基本概念和数据结构，掌握Redis的应用场景和高级特性，进行实践和尝试，并参加Redis社区。</p>
</blockquote>`,r:{minutes:19.24,words:5771},y:"a",t:"Redis学习笔记",s:"Redis基础篇+八股"},["/redis/Redis","/redis/Redis.md"]],["v-714f7799","/suanfa/001.%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C.html",{d:1683309597e3,c:["算法"],g:["leetcode","数组双指针"],e:`<blockquote>
<blockquote>
<blockquote>
<p>今天来搞一搞力扣的经典劝退题，有人相爱，有人夜里开车看海，有人<code>leetcode</code>第一题都做不出来。滴~~~今天不玩梗，玩代码！</p>
</blockquote>
</blockquote>
</blockquote>
<ul>
<li>
<p><code>leetCode：</code>001.两数之和</p>
</li>
<li>
<p><code>describution:</code></p>
</li>
</ul>
<blockquote>
<p>给定一个整数数组 <code>nums</code> 和一个整数目标值 <code>target</code>，请你在该数组中找出 <strong>和为目标值</strong> <em><code>target</code></em> 的那 <strong>两个</strong> 整数，并返回它们的数组下标。</p>
<p>你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。</p>
<p>你可以按任意顺序返回答案。</p>
<p><strong>示例 1：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [3,2,4], target = 6
输出：[1,2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [3,3], target = 6
输出：[0,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p>
<ul>
<li><code>2 &lt;= nums.length &lt;= 104</code></li>
<li><code>-109 &lt;= nums[i] &lt;= 109</code></li>
<li><code>-109 &lt;= target &lt;= 109</code></li>
<li><strong>只会存在一个有效答案</strong></li>
</ul>
</blockquote>`,r:{minutes:2.18,words:654},y:"a",t:"001-leetcode",s:"001-leetcode"},["/suanfa/001.两数之和.html","/suanfa/001.%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C","/suanfa/001.两数之和.md","/suanfa/001.%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C.md"]],["v-d43273ca","/suanfa/026.%E5%88%A0%E9%99%A4%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E9%87%8D%E5%A4%8D%E9%A1%B9.html",{d:1683309597e3,c:["算法"],g:["leetcode","数组双指针"],e:`<h1> 删除有序数组中的重复项</h1>
<ul>
<li>
<p><code>leetCode：</code>026.删除有序数组中的重复项</p>
</li>
<li>
<p><code>describution:</code></p>
<blockquote>
<p>给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。</p>
<p>由于在某些语言中不能改变数组的长度，所以必须将结果放在数组nums的第一部分。更规范地说，如果在删除重复项之后有 k 个元素，那么 nums 的前 k 个元素应该保存最终结果。
将最终结果插入 nums 的前 k 个位置后返回 k 。
不要使用额外的空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。</p>
<p>判题标准:
系统会用下面的代码来测试你的题解:
int[] nums = [...]; // 输入数组
int[] expectedNums = [...]; // 长度正确的期望答案
int k = removeDuplicates(nums); // 调用
assert k == expectedNums.length;
for (int i = 0; i &lt; k; i++) {
assert nums[i] == expectedNums[i];
}
如果所有断言都通过，那么您的题解将被 通过。</p>
<p>示例 1：
输入：nums = [1,1,2]
输出：2, nums = [1,2,_]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。</p>
<p>示例 2：
输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。</p>
<p>提示：
1 &lt;= nums.length &lt;= 3 * 104
-104 &lt;= nums[i] &lt;= 104
nums 已按 升序 排列</p>
</blockquote>
</li>
<li>
<p><code>技巧：</code>数组双指针</p>
</li>
<li>
<p><code>思路：</code>准备一胖一瘦水桶，沿着数组顺序，遍历数组中每一个元素，从索引0出发，先将索引为0的value装进小水桶。瘦水桶先出发，一次前进一步，若遇到相同的元素，则继续前进，若遇到与前一个元素不同的元素，诶，扭头告诉胖水桶把新元素装进去（小水桶负责侦察，胖水桶负责办事），就这样一直前进。思路是否清晰？</p>
</li>
<li>
<p><code>code：</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">removeDuplicates</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> fast <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>slow <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span>fast <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 判断下一个是否为新元素</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span> <span class="token operator">!=</span> nums<span class="token punctuation">[</span>slow<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token comment">// last++; 简化代码，将新元素传入last的下一个位置</span>
				nums<span class="token punctuation">[</span><span class="token operator">++</span>slow<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
            <span class="token comment">// 不是新元素，大水桶继续前行</span>
			fast<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
        <span class="token comment">// 返回如题要求的K值</span>
		<span class="token keyword">return</span> slow<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code>结束语：</code>菜狗幸福而又美好的一天结束啦！</p>
</li>
</ul>`,r:{minutes:2.44,words:732},y:"a",t:"026-leetcode",s:"026-leetcode"},["/suanfa/026.删除有序数组中的重复项.html","/suanfa/026.%E5%88%A0%E9%99%A4%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E9%87%8D%E5%A4%8D%E9%A1%B9","/suanfa/026.删除有序数组中的重复项.md","/suanfa/026.%E5%88%A0%E9%99%A4%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E9%87%8D%E5%A4%8D%E9%A1%B9.md"]],["v-113b160a","/suanfa/example.html",{d:1683309597e3,c:["算法"],g:["leetcode"],e:`<blockquote>
<p><code>题目名称</code></p>
<p>以及相关描述</p>
</blockquote>
<p><code>技巧：</code></p>
<p>​</p>
<p><code>思路：</code></p>
<p>​</p>
<p><code>code：</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.2,words:60},y:"a",t:"leetcode-26",s:"leetcode-26"},["/suanfa/example","/suanfa/example.md"]],["v-d86466ce","/suanfa/JZ06%20%E4%BB%8E%E5%B0%BE%E5%88%B0%E5%A4%B4%E6%89%93%E5%8D%B0%E9%93%BE%E8%A1%A8.html",{d:1689919926e3,c:["算法"],g:["leetcode"],e:`<blockquote>
<p><code>JZ6 从尾到头打印链表</code></p>
<p>简单 通过率：29.17% 时间限制：1秒 空间限制：64M</p>
<p>知识点<a href="https://www.nowcoder.com/exam/oj/ta?page=1&amp;tpId=13&amp;type=13?tag=580" target="_blank" rel="noopener noreferrer">链表</a></p>
<h2> 描述</h2>
<p>输入一个链表的头节点，按链表从尾到头的顺序返回每个节点的值（用数组返回）。</p>
<p>如输入{1,2,3}的链表如下图:</p>
<figure><img src="https://uploadfiles.nowcoder.com/images/20210717/557336_1626506480516/103D87B58E565E87DEFA9DD0B822C55F" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>返回一个数组为[3,2,1]</p>
<p>0 &lt;= 链表长度 &lt;= 10000</p>
<h2> 示例1</h2>
<p>输入：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{1,2,3}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回值：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[3,2,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2> 示例2</h2>
<p>输入：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{67,0,24,58}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回值：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[58,24,0,67]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>`,r:{minutes:2.48,words:745},y:"a",t:"JZ6 从尾到头打印链表",s:"牛客剑指offer 从尾到头打印链表"},["/suanfa/JZ06 从尾到头打印链表.html","/suanfa/JZ06%20%E4%BB%8E%E5%B0%BE%E5%88%B0%E5%A4%B4%E6%89%93%E5%8D%B0%E9%93%BE%E8%A1%A8","/suanfa/JZ06 从尾到头打印链表.md","/suanfa/JZ06%20%E4%BB%8E%E5%B0%BE%E5%88%B0%E5%A4%B4%E6%89%93%E5%8D%B0%E9%93%BE%E8%A1%A8.md"]],["v-0ab8f568","/suanfa/",{d:1683132898e3,c:["算法"],e:`<h1> 欢迎来到算法天堂</h1>
<blockquote>
<blockquote>
<blockquote>
<p>写在前面(欢迎来到算法天堂！)</p>
</blockquote>
</blockquote>
</blockquote>
<p>该xi的算法还是要刷的，对于我这个菜狗来说就暂定一天一题吧，刷起来！</p>
<p>今天搞懂了一件事，什么是秋招？所谓秋招就是企业直接面向迎接毕业生的一次招生机会，相对于春招来说，秋招规模更大、招聘人数最多、是应届生就业的一个重要的机会。成功拿下某公司的秋招就相当于毕业可以去公司报到干活了，至于实习期后-毕业前的这段日子，可以选择继续在公司实习卷一卷或者是回学校真真正正的体验最后的大学生活。</p>`,r:{minutes:1.03,words:310},y:"a",t:"算法日刷",i:"discover",I:0},["/suanfa/index.html","/suanfa/README.md"]],["v-6d8dfae0","/collection/project/aggregateSearch.html",{d:1688048561e3,c:["实践练习"],g:["实践练习"],e:`<h1> 聚合搜索项目</h1>
<h2> 项目介绍</h2>
<blockquote>
<p>聚合搜索就是输入一个关键字，对于用户可以使用户在同一个入口搜索到不同的内容分类，不同形式的内容，提升用户的检索效率；对于企业来说无需对每一个项目进行搜索功能的开发，当有新的内容或者新的网站，可以进行复用，提高开发效率。</p>
</blockquote>
<h2> 技术栈</h2>
<p>前端：</p>
<ul>
<li>Vue</li>
<li>Ant Design Vue</li>
<li>Lodash</li>
</ul>
<p>后端：</p>
<ul>
<li>Spring Boot</li>
<li>MySQL</li>
<li>ES</li>
<li>数据抓取</li>
<li>数据同步（Logstash、Canal）</li>
<li>Guava Retrying</li>
<li>怎么保证API的稳定性？</li>
</ul>`,r:{minutes:2.46,words:738},y:"a",t:"聚合搜索中台",s:"一个聚合搜索中台项目"},["/collection/project/aggregateSearch","/collection/project/aggregateSearch.md"]],["v-5575e5ed","/collection/project/api.html",{d:1688144106e3,c:["实践练习"],g:["实践练习"],e:`<h1> API开放平台</h1>
<blockquote>
<p>写在最前面：</p>
<p>​	学到的知识与收到的建议：</p>
<ol>
<li>把自己所有的数据库建表语句总结到一起，后续有用；</li>
<li>记录Bug文档</li>
<li>多记录一些需求的解决方案、提高自己的架构能力</li>
</ol>
</blockquote>
<h2> 项目介绍</h2>
<blockquote>
<p>前端开发的时候有有时会需要后端的接口，如果此时有一个API接口可以使用，那么就无需后端借口了</p>
</blockquote>
<p>一个提供API接口调用的平台，用户可以注册与登录，开通接口的调用权限，用户可以使用接口，每次调用会进行次数统计。管理院可以发布接口、下线接口、接入接口，以及可视化接口的调用情况。</p>`,r:{minutes:39.92,words:11977},y:"a",t:"API开放平台",s:"API开放平台"},["/collection/project/api","/collection/project/api.md"]],["v-7ae534ba","/collection/project/bilibili.html",{d:168275317e4,c:["实践练习"],g:["实践练习"],e:`<h2> 为什么选择仿哔哩哔哩呢？</h2>
<h3> 从项目角度和技术角度两个维度来看：</h3>
<blockquote>
<p>项目角度：规模大、不同种类的用户群体、高流量、个性化功能针对不同的用户；</p>
<p>技术角度：经典高并发与异步问题、视频流+弹幕定制化功能。</p>
</blockquote>
<h3> 项目大纲：（<a href="https://coding.imooc.com/class/556.html" target="_blank" rel="noopener noreferrer">课程链接</a>）</h3>
<blockquote>
<p>第一章：项目整体介绍、课程设计逻辑、学习方法</p>
<p>第二章：项目架构、环境搭建、效果展示</p>
<p>第三章：通用配置、用户相关功能</p>
<p>第四章：视频流+弹幕加载、性能优化</p>
<p>第五章：全局搜索、系统广播、数据统计、智能推荐</p>
<p>第六章：总结复盘、切面编程、自动化部署、负载均衡</p>
</blockquote>`,r:{minutes:14.88,words:4465},y:"a",t:"仿哔哩哔哩项目",s:"仿哔哩哔哩项目笔记"},["/collection/project/bilibili","/collection/project/bilibili.md"]],["v-11396e4c","/collection/project/CampousLostAndFound.html",{d:1687340314e3,c:["项目专栏"],g:["Spring Boot"],e:`<h1> 我的JSP课程设计大作业</h1>
<blockquote>
<ul>
<li></li>
</ul>
</blockquote>
<ol>
<li>
<p><strong>项目简介</strong></p>
<ul>
<li>项目名称：基于<code>SSM</code>框架设计的校园失物招领聊天交流系统</li>
</ul>
<ul>
<li>项目目的：构建一个在线失物招领的平台</li>
<li>技术栈：使用<code>SSM</code>框架，<code>jsp</code>、<code>js</code>、<code>jquery</code>、<code>ajax</code>等前端技术，采用<code>MySQL</code>数据库</li>
<li>功能模块：登陆注册验证码后台验证、发布失物、失物与用户评论回复实体相互关联、聊天室对于用户的权限管理、发送图片和表情等功能、打印后台管理信息excel表格</li>
</ul>
</li>
<li>
<p><strong>系统架构</strong></p>
<ul>
<li>前端技术：<code>jsp</code>、<code>js</code>、<code>jquery</code>、<code>ajax</code>等</li>
<li>后端：<code>SSM框架</code>、<code>websocket</code>等。</li>
<li>数据库：使用<code>MySQL</code>作为项目的数据存储。</li>
<li>其他技术：<code>前后端分页ajax</code>、<code>websocketsession</code>等。</li>
</ul>
</li>
<li>
<p><strong>功能模块介绍</strong></p>
<ul>
<li>登陆注册验证码后台验证：用户可以通过注册和登录功能进行操作，在注册和登录时需要通过验证码进行验证，保证系统安全。</li>
<li>发布失物：用户可以发布失物信息，包括失物名称、描述、图片等信息。</li>
<li>失物与用户评论回复实体相互关联：用户可以对失物信息进行评论和回复，实现了失物与用户评论回复实体相互关联。</li>
<li>聊天室对于用户的权限管理：聊天室对于用户的权限管理包括设置管理员、禁言和踢出群聊等功能，保证聊天室的秩序和安全。</li>
<li>发送图片、表情等功能：用户可以在聊天室中发送图片、表情等内容，丰富了聊天室的交互方式。</li>
<li>打印后台管理信息excel表格：管理员可以通过打印后台管理信息excel表格功能，方便地查看后台管理信息。</li>
</ul>
</li>
<li>
<p><strong>数据库设计</strong></p>
<p>项目的数据库设计，包括数据表的设计和数据表之间的关系。本项目主要包含以下数据表：</p>
<ul>
<li>用户表（user）：包含用户ID、用户名、密码、QQ号码、电子邮件地址、角色和开始时间字段。</li>
<li>留言表（thanks_letter）：包含留言ID、发布时间、留言标题、留言内容和用户ID字段。该表与用户表通过外键uid关联。</li>
<li>回复表（reply）：包含回复ID、发布时间、回复内容、评论ID、被回复用户ID和回复用户ID字段。该表与用户表和评论表通过外键关联。</li>
<li>求助信息表（help_info）：包含求助信息ID、发布时间、求助信息标题、求助信息内容和用户ID字段。该表与用户表通过外键uid关联。</li>
<li>物品表（goods）：包含物品ID、信息类型、物品标题、发布时间、物品名称、物品类型、发生地点、发生时间、图片URL、状态、用户ID和管理员ID字段。该表与用户表通过外键uid关联。</li>
<li>评论表（comment）：包含评论ID、发布时间、评论内容、物品ID和用户ID字段。该表与用户表和物品表通过外键关联。</li>
<li>领取归还表（answer_user）：包含领取归还ID、用户名、QQ号码、电子邮件地址和物品ID字段。该表与物品表通过外键goods_id关联。</li>
</ul>
</li>
<li>
<p><strong>项目演示</strong></p>
<p>运行演示。</p>
</li>
<li>
<p><strong>总结与展望</strong></p>
<p>项目总结、分析项目的优点和不足之处、提出项目的改进方向和未来发展计划。</p>
</li>
</ol>`,r:{minutes:3.15,words:946},y:"a",t:"我的在校项目作业",s:"校园失物招领系统"},["/collection/project/CampousLostAndFound","/collection/project/CampousLostAndFound.md"]],["v-6e9c2f30","/collection/project/oj.html",{d:1691930256e3,c:["实践练习"],g:["实践练习"],e:`<h1> Smart OJ</h1>
<h2> 项目介绍</h2>
<p>OJ ： Online Judge（在线判题评测系统）</p>
<p>用户可以选择题目练习，在线编写代码，测试代码，提交代码，系统会根据设置好的答案对用户提交的代码进行评测，给出评测结果！</p>
<p><strong>难点</strong>:判题系统</p>
<blockquote>
<p>OJ 系统的常用概念
ac 表示你的题目通过，结果正确
题目限制：时间限制、内存限制
题目介绍
题目输入
题目输出
题目输入用例
题目输出用例</p>
<p>普通测评：管理员设置题目的输入和输出用例，比如我输入 1，你要输出 2 才是正确的；交给判题机去执行用户的代码，给用户的代码喂输入用例，比如 1，看用户程序的执行结果是否和标准答案的输出一致。
（比对用例文件）</p>
<p>特殊测评（SPJ）：管理员设置题目的输入和输出，比如我输入 1，用户的答案只要是 &gt; 0 或 &lt; 2 都是正确的；特判程序，不是通过对比用例文件是否一致这种死板的程序来检验，而是要专门根据这道题目写一个特殊的判断程序，程序接收题目的输入（1）、标准输出用例（2）、用户的结果（1.5） ，特判程序根据这些值来比较是否正确。</p>
<p>交互测评：让用户输入一个例子，就给一个输出结果，交互比较灵活，没办法通过简单的、死板的输入输出文件来搞定</p>
<p>不能让用户随便引入包、随便遍历、暴力破解，需要使用正确的算法。 =&gt; 安全性</p>
<p>判题过程是异步的 =&gt; 异步化</p>
<p>提交之后，会生成一个提交记录，有运行的结果以及运行信息（时间限制、内存限制）</p>
</blockquote>`,r:{minutes:2,words:599},y:"a",t:"在线判题系统",s:"OJ"},["/collection/project/oj","/collection/project/oj.md"]],["v-5425233e","/collection/project/shangyitong.html",{d:168275317e4,c:["项目专栏"],g:["项目专栏"],e:`<blockquote>
<p>欢迎观看我的医院预约挂号平台项目笔记</p>
<p>axiba,图片在typora软件更新时被意外删除了！！！</p>
<figure><img src="https://cdn.jsdelivr.net/gh/wl2o2o/blogCdn/img/202306211602425.png" alt="测试一下" tabindex="0" loading="lazy"><figcaption>测试一下</figcaption></figure>
</blockquote>
<h1> 尚医通学习笔记</h1>
<p><em>前言：按照计划跟做项目，发现仍有一些令人不解的坑，为了解决问题耗费了更多的事件，通过手写和电子笔记以此列举学习成果，以便更好的复习。</em></p>`,r:{minutes:10.33,words:3099},y:"a",t:"尚医通",s:"医院预约挂号平台"},["/collection/project/shangyitong","/collection/project/shangyitong.md"]],["v-794909fa","/collection/project/SSM.html",{d:168275317e4,c:["项目专栏"],g:["项目专栏"],e:`<h1> 什么是SSM?</h1>
<p>SSM框架是Spring、Spring MVC和MyBatis框架的整合，是标准的MVC模式。它是目前主流的Java EE企业级框架，适用于搭建各种大型的企业级应用系统。SSM框架集由Spring、MyBatis两个开源框架整合而成，其中SpringMVC是Spring中的部分内容。</p>
<p>标准的SSM框架有四层，分别是DAO层（Mapper）、Service层、Controller层和View层。其中，持久层的DAO层（Mapper）主要负责与数据库进行联络的一些任务，如数据持久化等，而Service层提供业务逻辑处理的服务，Controller层负责接收请求并进行处理，View层则负责展示数据。</p>`,r:{minutes:2.57,words:771},y:"a",t:"SSM",s:"一篇文章看懂何为SSM"},["/collection/project/SSM","/collection/project/SSM.md"]],["v-3706649a","/404.html",{y:"p",t:""},["/404"]],["v-f9e30908","/intro/",{y:"p",t:"Intro"},["/intro/index.html"]],["v-c75ea624","/collection/project/",{y:"p",t:"Project"},["/collection/project/index.html"]],["v-5bc93818","/category/",{y:"p",t:"分类",I:0},["/category/index.html"]],["v-744d024e","/tag/",{y:"p",t:"标签",I:0},["/tag/index.html"]],["v-e52c881c","/article/",{y:"p",t:"文章",I:0},["/article/index.html"]],["v-154dc4c4","/star/",{y:"p",t:"收藏",I:0},["/star/index.html"]],["v-01560935","/timeline/",{y:"p",t:"时间轴",I:0},["/timeline/index.html"]],["v-9c08d936","/category/%E8%8F%9C%E9%B8%9F%E6%97%A5%E8%AE%B0/",{y:"p",t:"菜鸟日记 分类",I:0},["/category/菜鸟日记/","/category/%E8%8F%9C%E9%B8%9F%E6%97%A5%E8%AE%B0/index.html"]],["v-68cf5b32","/tag/java%E5%9F%BA%E7%A1%80/",{y:"p",t:"Java基础 标签",I:0},["/tag/java基础/","/tag/java%E5%9F%BA%E7%A1%80/index.html"]],["v-76bcc2c8","/category/%E9%A1%B9%E7%9B%AE%E4%B8%93%E6%A0%8F/",{y:"p",t:"项目专栏 分类",I:0},["/category/项目专栏/","/category/%E9%A1%B9%E7%9B%AE%E4%B8%93%E6%A0%8F/index.html"]],["v-7e2e33bc","/tag/%E8%AE%BA%E6%96%87/",{y:"p",t:"论文 标签",I:0},["/tag/论文/","/tag/%E8%AE%BA%E6%96%87/index.html"]],["v-4d3e340d","/category/%E4%B8%93%E6%A0%8F%E8%AE%B0%E5%BD%95/",{y:"p",t:"专栏记录 分类",I:0},["/category/专栏记录/","/category/%E4%B8%93%E6%A0%8F%E8%AE%B0%E5%BD%95/index.html"]],["v-b310d42a","/tag/git/",{y:"p",t:"Git 标签",I:0},["/tag/git/index.html"]],["v-cd88c8a6","/category/%E5%85%B3%E4%BA%8Ecs-guider/",{y:"p",t:"关于CS_GUIDER 分类",I:0},["/category/关于cs-guider/","/category/%E5%85%B3%E4%BA%8Ecs-guider/index.html"]],["v-ea729656","/tag/java%E9%9B%86%E5%90%88%E6%A1%86%E6%9E%B6/",{y:"p",t:"Java集合框架 标签",I:0},["/tag/java集合框架/","/tag/java%E9%9B%86%E5%90%88%E6%A1%86%E6%9E%B6/index.html"]],["v-a9f4e09e","/category/%E9%9D%A2%E7%BB%8F/",{y:"p",t:"面经 分类",I:0},["/category/面经/","/category/%E9%9D%A2%E7%BB%8F/index.html"]],["v-c7db86c6","/tag/dmdatabase/",{y:"p",t:"DMDatabase 标签",I:0},["/tag/dmdatabase/index.html"]],["v-116a43a7","/category/%E9%9D%A2%E8%AF%95/",{y:"p",t:"面试 分类",I:0},["/category/面试/","/category/%E9%9D%A2%E8%AF%95/index.html"]],["v-5cd3874e","/tag/%E5%AE%9E%E8%B7%B5%E7%BB%83%E4%B9%A0/",{y:"p",t:"实践练习 标签",I:0},["/tag/实践练习/","/tag/%E5%AE%9E%E8%B7%B5%E7%BB%83%E4%B9%A0/index.html"]],["v-65f3d995","/category/pdf/",{y:"p",t:"PDF 分类",I:0},["/category/pdf/index.html"]],["v-7b320286","/tag/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA/",{y:"p",t:"网站搭建 标签",I:0},["/tag/网站搭建/","/tag/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA/index.html"]],["v-8848dfa8","/category/redis/",{y:"p",t:"Redis 分类",I:0},["/category/redis/index.html"]],["v-2a4d47ed","/tag/java%E7%AC%94%E8%AE%B0/",{y:"p",t:"Java笔记 标签",I:0},["/tag/java笔记/","/tag/java%E7%AC%94%E8%AE%B0/index.html"]],["v-06be9332","/category/%E7%AE%97%E6%B3%95/",{y:"p",t:"算法 分类",I:0},["/category/算法/","/category/%E7%AE%97%E6%B3%95/index.html"]],["v-b30dba08","/tag/jvm/",{y:"p",t:"JVM 标签",I:0},["/tag/jvm/index.html"]],["v-cf17f078","/category/%E5%AE%9E%E8%B7%B5%E7%BB%83%E4%B9%A0/",{y:"p",t:"实践练习 分类",I:0},["/category/实践练习/","/category/%E5%AE%9E%E8%B7%B5%E7%BB%83%E4%B9%A0/index.html"]],["v-211f44ee","/tag/linux/",{y:"p",t:"Linux 标签",I:0},["/tag/linux/index.html"]],["v-a920ffc4","/tag/%E8%93%9D%E6%A1%A5%E6%9D%AF/",{y:"p",t:"蓝桥杯 标签",I:0},["/tag/蓝桥杯/","/tag/%E8%93%9D%E6%A1%A5%E6%9D%AF/index.html"]],["v-1bee38ca","/tag/mysql/",{y:"p",t:"MySQL 标签",I:0},["/tag/mysql/index.html"]],["v-1ab7314a","/tag/netty/",{y:"p",t:"Netty 标签",I:0},["/tag/netty/index.html"]],["v-0c74f160","/tag/javaobject/",{y:"p",t:"JavaObject 标签",I:0},["/tag/javaobject/index.html"]],["v-b7d62b20","/tag/%E6%8A%80%E5%B7%A7/",{y:"p",t:"技巧 标签",I:0},["/tag/技巧/","/tag/%E6%8A%80%E5%B7%A7/index.html"]],["v-1c575968","/tag/%E5%89%8D%E8%A8%80/",{y:"p",t:"前言 标签",I:0},["/tag/前言/","/tag/%E5%89%8D%E8%A8%80/index.html"]],["v-a0ba2788","/tag/%E4%BB%8B%E7%BB%8D/",{y:"p",t:"介绍 标签",I:0},["/tag/介绍/","/tag/%E4%BB%8B%E7%BB%8D/index.html"]],["v-28a1d8bf","/tag/java/",{y:"p",t:"Java 标签",I:0},["/tag/java/index.html"]],["v-6a46ce40","/tag/java-se/",{y:"p",t:"Java SE 标签",I:0},["/tag/java-se/index.html"]],["v-3b5171b1","/tag/%E9%9D%A2%E8%AF%95/",{y:"p",t:"面试 标签",I:0},["/tag/面试/","/tag/%E9%9D%A2%E8%AF%95/index.html"]],["v-d6bd47b4","/tag/%E7%AE%80%E5%8E%86/",{y:"p",t:"简历 标签",I:0},["/tag/简历/","/tag/%E7%AE%80%E5%8E%86/index.html"]],["v-b308ce6a","/tag/pdf/",{y:"p",t:"PDF 标签",I:0},["/tag/pdf/index.html"]],["v-0d1f4c3c","/tag/redis/",{y:"p",t:"Redis 标签",I:0},["/tag/redis/index.html"]],["v-46b9d66c","/tag/leetcode/",{y:"p",t:"leetcode 标签",I:0},["/tag/leetcode/index.html"]],["v-89367940","/tag/%E6%95%B0%E7%BB%84%E5%8F%8C%E6%8C%87%E9%92%88/",{y:"p",t:"数组双指针 标签",I:0},["/tag/数组双指针/","/tag/%E6%95%B0%E7%BB%84%E5%8F%8C%E6%8C%87%E9%92%88/index.html"]],["v-eba48dea","/tag/spring-boot/",{y:"p",t:"Spring Boot 标签",I:0},["/tag/spring-boot/index.html"]],["v-3b1c4252","/tag/%E9%A1%B9%E7%9B%AE%E4%B8%93%E6%A0%8F/",{y:"p",t:"项目专栏 标签",I:0},["/tag/项目专栏/","/tag/%E9%A1%B9%E7%9B%AE%E4%B8%93%E6%A0%8F/index.html"]]];var ci=E({name:"Vuepress",setup(){const e=Wl();return()=>t(e.value)}}),xu=()=>Au.reduce((e,[n,a,i,l])=>(e.push({name:n,path:a,component:ci,meta:i},...l.map(s=>({path:s,redirect:a}))),e),[{name:"404",path:"/:catchAll(.*)",component:ci}]),Iu=$l,Lu=()=>{const e=Ol({history:Iu(Qn("/")),routes:xu(),scrollBehavior:(n,a,i)=>i||(n.hash?{el:n.hash}:{top:0})});return e.beforeResolve(async(n,a)=>{var i;(n.path!==a.path||a===Rl)&&([me.value]=await Promise.all([oe.resolvePageData(n.name),(i=vi[n.name])==null?void 0:i.__asyncLoader()]))}),e},Tu=e=>{e.component("ClientOnly",vn),e.component("Content",Yn)},Cu=(e,n,a)=>{const i=S(n.currentRoute.value.path);j(()=>n.currentRoute.value.path,m=>i.value=m);const l=b(()=>oe.resolveLayouts(a)),s=b(()=>oe.resolveRouteLocale(Le.value.locales,i.value)),r=b(()=>oe.resolveSiteLocaleData(Le.value,s.value)),o=b(()=>oe.resolvePageFrontmatter(me.value)),c=b(()=>oe.resolvePageHeadTitle(me.value,r.value)),u=b(()=>oe.resolvePageHead(c.value,o.value,r.value)),d=b(()=>oe.resolvePageLang(me.value)),p=b(()=>oe.resolvePageLayout(me.value,l.value));return e.provide(Hl,l),e.provide(mi,o),e.provide(hi,c),e.provide(bi,u),e.provide(gi,d),e.provide(fi,p),e.provide(Kn,s),e.provide(ki,r),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>o.value},$head:{get:()=>u.value},$headTitle:{get:()=>c.value},$lang:{get:()=>d.value},$page:{get:()=>me.value},$routeLocale:{get:()=>s.value},$site:{get:()=>Le.value},$siteLocale:{get:()=>r.value},$withBase:{get:()=>J}}),{layouts:l,pageData:me,pageFrontmatter:o,pageHead:u,pageHeadTitle:c,pageLang:d,pageLayout:p,routeLocale:s,siteData:Le,siteLocaleData:r}},Du=()=>{const e=Gl(),n=dn(),a=S([]),i=()=>{e.value.forEach(s=>{const r=Mu(s);r&&a.value.push(r)})},l=()=>{document.documentElement.lang=n.value,a.value.forEach(s=>{s.parentNode===document.head&&document.head.removeChild(s)}),a.value.splice(0,a.value.length),e.value.forEach(s=>{const r=Bu(s);r!==null&&(document.head.appendChild(r),a.value.push(r))})};he(Ql,l),V(()=>{i(),l(),j(()=>e.value,()=>l())})},Mu=([e,n,a=""])=>{const i=Object.entries(n).map(([o,c])=>W(c)?`[${o}=${JSON.stringify(c)}]`:c===!0?`[${o}]`:"").join(""),l=`head > ${e}${i}`;return Array.from(document.querySelectorAll(l)).find(o=>o.innerText===a)||null},Bu=([e,n,a])=>{if(!W(e))return null;const i=document.createElement(e);return un(n)&&Object.entries(n).forEach(([l,s])=>{W(s)?i.setAttribute(l,s):s===!0&&i.setAttribute(l,"")}),W(a)&&i.appendChild(document.createTextNode(a)),i},Pu=Vl,Ou=async()=>{var a;const e=Pu({name:"VuepressApp",setup(){var i;Du();for(const l of an)(i=l.setup)==null||i.call(l);return()=>[t(jl),...an.flatMap(({rootComponents:l=[]})=>l.map(s=>t(s)))]}}),n=Lu();Tu(e),Cu(e,n,an);for(const i of an)await((a=i.enhance)==null?void 0:a.call(i,{app:e,router:n,siteData:Le}));return e.use(n),{app:e,router:n}};Ou().then(({app:e,router:n})=>{n.isReady().then(()=>{e.mount("#app")})});export{v as _,Ou as createVueApp};
