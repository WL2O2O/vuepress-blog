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