---
title: 思维导图
shortTitle: JAVA SE思维导图
sticky: true
star: true
category:
  - 面经
tag:
  - Java SE
description: 自己总结的Java SE面试导图
head:
  - - meta
    - name: keywords
      content: Java,Java SE,Java基础,Java教程,Java程序员进阶之路,Java入门,教程,复盘Java基础知识,Java随笔,复盘Java基础知识, 一份详细的Java面试基础知识, 一篇文章搞懂Java SE
---

<iframe
  :src="$withBase('/markmap/siwei.html')"
  width="100%"
  height="300"
  frameborder="0"
  scrolling="yes"
  leftmargin="0"
  topmargin="0"
/>

# 面试导图

## Java SE

### 是什么（概念）

- Java是一门面向对象的编程语言，继承了C++的幼优点，舍弃了C++的多继承与指针的难点，因此Java是一门功能强大且容易上手的编程语言。

  - Java是一门面向对象的编程语言，不仅吸收了C++的优点，还舍弃了C++的多继承与指针的难点，因此Java具有功能强大且容易上手的编程语言。

### 怎么样（特点）

- 面向对象

  - 封装、继承、多态

- 跨平台？原理

  - Write once，run anywhere

- 支持多线程

  - 内置多线程机制，无需调用操作系统的多线程功能进行功能设计

- 编译与解释并存

  - 高级编程语言按照程序的执行方式分为编译形和解释形，编译型就好比把外国文献先全部翻译再阅读，解释型就好比逐行翻译有，阅读后再翻译。为什么说Java是编译与解释并存？引文Java程序需要先编译成字节码.class文件，然后平台JVM将字节码解释成平台可识别的机器码，操作系统运行。

    - 扩展：

      - 动态类型语言

        - 只有在运行期间才会检查变量的数据类型，该类语言会在变量的第一次赋值时将数据类型记录下来。代表语言：Python、Ruby、PHP、JS

      - 静态类型语言

        - 编译期间进行数据类型检查，不通过则无法运行。该类语言必须先声明数据类型，分配好内存空间。代表语言：C、C++、Java、Object-C 

      - 强类型语言

        - 含义：强制数据类型定义的语言，一旦变量声明，转换数据类型需要强制转换。代表语言：Java、C#、Python、Ruby、Object-C

      - 弱类型语言

        - 含义：允许隐式类型转换，例如：int + float = float。代表语言：JS、PHP、C、C++

      - 引申：编译型语言vs解释性语言

        - 编译型语言有一个专门的编译过程，优点：运行时无需再次编译，执行效率高；缺点：依赖编译器，跨平台性差。
        - 解释性语言运行前无需编译，优点：运行时逐行解释再运行，跨平台性好；缺点：执行效率低。注：语言都是解释性语言。

- JVM、JDK、JRE的区别

  - jdk包含jre、jre包含jvm

- 字节码？什么好处

  - 字节码是Java程序经过编译之后产生的。class文件，可以直接被jvm识别并运行，从而能够跨平台运行

### 基础语法

- 数据类型

  - 基本数据类型

    - 整型

      - byte、short、int、long

    - 浮点型

      - float、double

    - 字符型

      - char

    - 布尔型

      - boolean

  - 引用数据类型

    - class
    - interface
    - 数组

  - 类型转换

    - 自动转换

      - 小杯水可以倒进大杯子，大杯水倒进小杯子就可能会溢出。案例1：float num1 = 1.2，在Java中float浮点型类型变量的声明要在数字的末尾加上f或F，否则属于双精度double类型，下转上会造成精度损失，正确写法：float num1 = 1.2F。

    - 强制转换

      - 对于上述解决方案，还可以进行强制类型转换：float num = (float)1.1;  案例2：short num2 = 1； num2  = num2 + 1;此时编译器会进行报错，我们一般的解决办法是进行强转，或者：short num2 = 1;  num2 += 1,这其实其中num2 += 1，有隐含的强制类型转换。

- 自动拆箱/装箱

  - 装箱：Integer i = 10，把整型10装箱为Integer
    拆箱：把i再赋值给int，int n = i；

- 运算符与位运算

  - &

    - 逻辑与（短路与：全1为1,有0为0）

      - 算法引申：逻辑与可以用来判断奇偶数、是否为2的n次方的数，奇数的二进制末尾肯定为1，偶数的二进制末尾一定是0。例如：7(D) = 111(B), 所以7&1 == 0。
        结论：
        public static boolean check(int m){
        return (m&1)==1;
        }

  - &&

    - 短路与运算：跟&差别很大：
      a == 1 && b == 2，如果a == 1不成立，那么直接短路，右边不计算，很多时候都会用到

      - 引申：| 与||

        - 逻辑或（|）和短路（||）的差别亦是如此

  - ++a和a++

    - 涉及到JVM的工作原理：对于a++来说，先创建一个临时变量，然后自增加1，若进行a = i++赋值，a取到的是临时变量的值。

- 语句特点

  - switch（电闸原理）作用域

    - Java5 以前 switch(expr)中，expr 只能是 byte、short、char、int。
      从 Java 5 开始，Java 中引入了枚举类型， expr 也可以是 enum 类型。
      从 Java 7 开始，expr 还可以是字符串(String)，但是长整型(long)在目前所有的版本中都是不可以的。

  - break、continue、return

    - 

### 面向对象

- 面向对象与面向过程

  - 面向对象：纪传体史记

    - 典例：Java，万物皆对象，Java自带了许多封装好的方法，方便我们调用。面向对象加强了代码的重用，屏蔽差异性。 

  - 面向过程：编年体左转

    - 典例：C，对于每一个功能，需要编写函数进行一步一步的实现。使用的时候再一步一步调用。

- 三大特性

  - 封装

    - 封装把一个对象的属性私有化，同时提供一些可以被外界访问的属性的方法。

  - 继承

    - 新的类可以继承已有的类，Class A extends Class B,A拥有B的所有属性与方法，但是无法访问私有属性

  - 多态

    - 多态的体现就在于继承与接口，可以实现同一个方法speak()被不同类型的对象调用，但是根据对象的实际类型，会产生不同的行为。

      - class Animal{
        public void speak(){
                Syetem.out.println("动物叫");
        }
        }
        class cat extends Animal{
        public void speak{
                Syetem.out.println("cat叫");
        }
        }
        class dog extends Animal{
        public void speak{
                Syetem.out.println("dog叫");
        }
        }

- 重载与重写的区别

  - 都是实现多态的方式：重载也叫方法重载，是同方法名，有着不同的参数，实现了不同的行为方法的我实现，例如实现不同数据类型的运算。

- 访问修饰符的区别

  - 访问修饰符：public、protected、private

- this关键字
- 抽象类和接口的区别
- 成员变量与局部变量的区别
- 静态变量与实例变量的区别
- 静态方法与实例方法的区别
- final、finally、finalize关键字的作用
- ==和equals的区别
- hashCode与equals
- Java是值传递还是引用传递
- 深拷贝与浅拷贝
- Java创建对象有几种方式

### String

### Integer

### Object

### 异常处理

### I/O

### 序列化

### 泛型

### 注解

### 反射

### JDK8新特性

### Lambdb表达式

### Optional

### Stream流

## Java集合框架

## Java并发编程

## JVM

## Spring

## Redis

## 分布式

## RocketMQ

## 计算机网络

## 操作系统

## MySQL

## MyBatis

