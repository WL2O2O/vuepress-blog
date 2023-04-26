---
title: 蓝桥杯
shortTitle: 蓝桥杯笔记
category:
  - 项目专栏
tag:
  - 蓝桥杯
description: 记录一下我的蓝桥杯笔记
head:
  - - meta
    - name: keywords
      content: 蓝桥,蓝桥杯,第十四届蓝桥杯Java B组,蓝桥笔记,蓝桥杯夺奖班
--- 
# 蓝桥杯学习笔记

## 数位字符反转

> 521->125
>
> hello world->dlrow olleh

* demo

  * ```java
    //普通方法
    //数位反转numReverse
    	public static void numReverse(int n) {
    		int sum = 0;
    		while(n>0) {
    			System.out.print(n%10);
    			sum = sum*10 + n%10;
    			n /= 10;
    		}
    		System.out.println();
    	}
    ```