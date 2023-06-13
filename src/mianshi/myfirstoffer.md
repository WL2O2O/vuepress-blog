---
title: 面试准备
shortTitle: JAVA SE面试题
sticky: true
category:
  - 面经
tag:
  - Java SE
description: Java SE八股文
head:
  - - meta
    - name: keywords
      content: Java,Java SE,Java基础,Java教程,Java程序员进阶之路,Java入门,教程,复盘Java基础知识,Java随笔,复盘Java基础知识, 一份详细的Java面试基础知识, 一篇文章搞懂Java SE
---
*首先，该公司正在寻找Java开发的实习员工，需要具备计算机或相关专业的背景，熟悉Linux或UNIX操作平台，掌握Java语言和Spring框架其中一种，了解常用的设计模式和数据结构，具备良好的分析、解决问题的能力。基于这些要求，我会从以下几个方面对您进行模拟面试：*

> Java语言：
>
> - Java语言的主要特性，如面向对象、跨平台等；
>
>   - 面向对象：Java是一门面向对象的编程语言，支持封装、继承和多态等特性，使程序结构更加清晰、易于维护和扩展。
>   - 跨平台：Java程序可以在多个平台上运行，这是由于Java虚拟机（JVM）的存在，它可以将Java程序编译为字节码，并在不同的平台上解释执行。
>
> - 常用的集合类，如List、Set、Map等，以及它们的特点和使用场景；
>
>   - List：有序集合，可以存储重复元素，常用的实现类有ArrayList和LinkedList，适用于需要按照插入顺序访问数据的场景。
>   - Set：无序集合，不允许存储重复元素，常用的实现类有HashSet和TreeSet，适用于需要去重的场景。
>   - Map：键值对集合，不允许重复的键，常用的实现类有HashMap和TreeMap，适用于需要根据键查找值的场景。
>
> - 反射机制的概念和使用方法；
>
>   - 反射机制是指在运行时动态地获取类的信息并操作类的属性、方法、构造方法等，可以实现动态创建对象、动态调用方法等功能。
>
>   - 反射机制主要涉及到Class、Constructor、Method、Field等类，可以通过调用它们的方法来获取类的信息和操作类的属性、方法、构造方法等。
>
>   - ```
>     获取Person类的Class对象：
>     Class<Person> personClass = Person.class;
>     创建Person对象：
>     Person person = personClass.newInstance(); // 调用默认构造方法创建对象
>     或者也可以使用有参构造方法创建对象：
>     Constructor<Person> constructor = personClass.getConstructor(String.class, int.class);
>     Person person = constructor.newInstance("Tom", 18);
>     获取和修改对象的属性值：
>     Field nameField = personClass.getDeclaredField("name");
>     nameField.setAccessible(true); // 设置可访问
>     nameField.set(person, "Jerry"); // 修改属性值
>     String name = (String) nameField.get(person); // 获取属性值
>     调用对象的方法：
>     Method sayHelloMethod = personClass.getDeclaredMethod("sayHello");
>     sayHelloMethod.invoke(person); // 调用方法
>     通过反射机制，可以实现在运行时动态地操作类的属性、方法、构造方法等，具有很高的灵活性和扩展性，但同时也需要注意反射机制的使用安全问题，例如私有属性、方法的访问权限、类型转换等问题。
>     ```
>
>     
>
> - 多线程编程的基础知识，如线程的创建和启动、线程同步和互斥等。
>
>   - 线程的创建和启动：可以通过继承Thread类或实现Runnable接口来创建线程，并通过调用start()方法来启动线程。
>
>   - 线程同步和互斥：可以使用synchronized关键字来实现线程同步和互斥，或者使用Lock接口和Condition接口进行更加灵活的线程同步和互斥操作。另外，也可以使用volatile关键字来保证多线程之间的可见性。
>
>   - ```java
>     public class Counter {
>         private int count; // 计数器
>     
>         // 增加计数器的值
>         public synchronized void increment() {
>             count++;
>         }
>     
>         // 减少计数器的值
>         public synchronized void decrement() {
>             count--;
>         }
>     
>         // 获取计数器的值
>         public int getCount() {
>             return count;
>         }
>     }
>     
>     public class CounterThread extends Thread {
>         private Counter counter; // 计数器对象
>     
>         // 构造方法，传入计数器对象
>         public CounterThread(Counter counter) {
>             this.counter = counter;
>         }
>     
>         // 线程执行的方法
>         public void run() {
>             for (int i = 0; i < 10000; i++) {
>                 counter.increment(); // 增加计数器的值
>             }
>         }
>     }
>     
>     public class Main {
>         public static void main(String[] args) throws InterruptedException {
>             Counter counter = new Counter(); // 创建计数器对象
>             CounterThread thread1 = new CounterThread(counter); // 创建线程1，传入计数器对象
>             CounterThread thread2 = new CounterThread(counter); // 创建线程2，传入计数器对象
>     
>             thread1.start(); // 启动线程1
>             thread2.start(); // 启动线程2
>     
>             thread1.join(); // 等待线程1执行完毕
>             thread2.join(); // 等待线程2执行完毕
>     
>             System.out.println(counter.getCount()); // 输出计数器的值
>         }
>     }
>     Counter类表示一个计数器，包含了increment()和decrement()方法用于增加和减少计数器的值，以及getCount()方法用于获取计数器的值。在CounterThread类中，通过调用increment()方法来增加计数器的值。在Main类中，创建了两个CounterThread线程对象，并启动它们，最后通过join()方法等待它们执行完毕，并输出计数器的值。
>     
>     在increment()和decrement()方法中，加上了synchronized关键字，用于保证线程同步和互斥，避免多个线程同时修改计数器的值。
>     
>     在Main类的主方法中，首先创建了一个Counter对象，然后创建了两个CounterThread线程对象，并启动它们。使用join()方法等待它们执行完毕，最后输出计数器的值。
>     ```
>
>     
>
> Spring框架：
>
> - Spring框架的核心特性，如依赖注入、控制反转等；
>
>   - 控制反转（IoC）：将对象的创建、配置、管理等任务交给Spring容器来完成，使得应用程序更加灵活、解耦合。
>
>   - 依赖注入（DI）：通过依赖注入的方式将一个对象所依赖的其他对象注入到它自己中，使得对象之间的关系更加清晰、易于维护。
>
>   - ```
>     *XML:
>     首先定义一个接口：
>     public interface MessageService {
>         String getMessage();
>     }
>     然后定义一个实现类：
>     public class MessageServiceImpl implements MessageService {
>         public String getMessage() {
>             return "Hello, World!";
>         }
>     }
>     接下来，在Spring的配置文件中配置依赖注入：
>     <bean id="messageService" class="com.example.MessageServiceImpl"/>
>     <bean id="messagePrinter" class="com.example.MessagePrinter">
>         <property name="messageService" ref="messageService"/>
>     </bean>
>     在这个配置文件中，配置了一个id为messageService的bean，它的类型为MessageServiceImpl。然后配置了一个id为messagePrinter的bean，它的类型为MessagePrinter，其中有一个名为messageService的属性，它的值通过ref属性指向了messageService这个bean。
>     
>     最后，定义MessagePrinter类，它通过依赖注入的方式获取MessageService对象，并输出消息：
>     public class MessagePrinter {
>         private MessageService messageService;
>     
>         public void setMessageService(MessageService messageService) {
>             this.messageService = messageService;
>         }
>     
>         public void printMessage() {
>             System.out.println(messageService.getMessage());
>         }
>     }
>     在这个示例中，通过依赖注入的方式将MessageService对象注入到了MessagePrinter对象中，使得MessagePrinter可以调用MessageService对象的getMessage()方法来获取消息并输出。通过这种方式，对象之间的关系更加清晰、易于维护。
>     ```
>
>   - ```
>     首先定义一个接口：
>     
>     java
>     Copy
>     public interface MessageService {
>         String getMessage();
>     }
>     然后定义一个实现类：
>     
>     java
>     Copy
>     @Service
>     public class MessageServiceImpl implements MessageService {
>         @Override
>         public String getMessage() {
>             return "Hello, World!";
>         }
>     }
>     接下来，在Spring的配置文件中配置依赖注入和控制反转：
>     
>     java
>     Copy
>     @Configuration
>     @ComponentScan(basePackages = "com.example")
>     public class AppConfig {
>     }
>     在这个配置类中，使用@Configuration注解标记它为Spring配置类，同时使用@ComponentScan注解指定要扫描的包路径，使得Spring容器可以将被标记为@Service的类自动创建对象并管理它们的生命周期。
>     
>     最后，定义MessagePrinter类，它通过依赖注入的方式获取MessageService对象，并输出消息：
>     
>     java
>     Copy
>     @Component
>     public class MessagePrinter {
>         @Autowired
>         private MessageService messageService;
>     
>         public void printMessage() {
>             System.out.println(messageService.getMessage());
>         }
>     }
>     在这个示例中，使用@Component注解标记MessagePrinter类为Spring组件，同时使用@Autowired注解标记messageService属性需要进行依赖注入。当Spring容器创建MessagePrinter对象时，会自动将messageService属性注入到它中。通过这种方式，对象之间的关系更加清晰、易于维护。
>     ```
>
>     
>
> - Bean的生命周期，包括Bean的实例化、属性注入、初始化和销毁等过程；
>
>   - Bean的实例化：Spring容器根据配置文件或注解等方式创建Bean的实例。
>   - 属性注入：Spring容器将Bean所依赖的其他Bean或简单类型的值注入到Bean实例中。
>   - 初始化：Spring容器调用Bean的初始化方法，可以通过实现InitializingBean接口或使用@PostConstruct注解来定义初始化方法。
>   - 销毁：Spring容器销毁Bean实例时调用Bean的销毁方法，可以通过实现DisposableBean接口或使用@PreDestroy注解来定义销毁方法。
>
> - 常用的注解，如@Component、@Controller、@Service、@Repository、@Autowired等，以及它们的作用和使用场景；
>
>   - @Component：通用的组件注解，可以用于标识任何Spring管理的组件。
>
>   - @Controller：用于标识控制器组件，处理Web请求。
>
>   - @Service：用于标识服务组件，实现业务逻辑。
>
>   - @Repository：用于标识数据访问组件，实现数据访问。
>
>   - @Autowired：自动注入依赖，可以用于注入其他Bean实例。
>
>   - ```
>     首先定义一个接口：
>     public interface MessageService {
>         String getMessage();
>     }
>     然后定义一个实现类：
>     public class MessageServiceImpl implements MessageService {
>         public String getMessage() {
>             return "Hello, World!";
>         }
>     }
>     接下来，在Spring的配置文件中配置依赖注入：
>     <bean id="messageService" class="com.example.MessageServiceImpl"/>
>     <bean id="messagePrinter" class="com.example.MessagePrinter">
>         <property name="messageService" ref="messageService"/>
>     </bean>
>     在这个配置文件中，配置了一个id为messageService的bean，它的类型为MessageServiceImpl。然后配置了一个id为messagePrinter的bean，它的类型为MessagePrinter，其中有一个名为messageService的属性，它的值通过ref属性指向了messageService这个bean。
>     
>     最后，在MessagePrinter类中使用依赖注入的方式获取MessageService对象，并输出消息：
>     public class MessagePrinter {
>         private MessageService messageService;
>     
>         public void setMessageService(MessageService messageService) {
>             this.messageService = messageService;
>         }
>     
>         public void printMessage() {
>             System.out.println(messageService.getMessage());
>         }
>     }
>     在这个示例中，通过依赖注入的方式将MessageService对象注入到了MessagePrinter对象中，使得MessagePrinter可以调用MessageService对象的getMessage()方法来获取消息并输出。通过这种方式，对象之间的关系更加清晰、易于维护。
>     ```
>
> - Spring AOP的概念和使用方法，包括切面、切点、通知等。
>
>   - 切面（Aspect）：横向抽取出多个对象的共性，形成一个切面，包含了多个通知和切点。
>   - 切点（Pointcut）：定义了哪些方法需要被切入，可以通过表达式方式指定切入的方法。
>   - 通知（Advice）：指定切入的具体逻辑，包括前置通知、后置通知、异常通知、环绕通知等。
>   - 切面织入（Weaving）：将切面和目标对象的方法进行合并，创建一个代理对象。
>
> 数据结构和算法：
>
> - 常用的数据结构，如数组、链表、栈、队列、二叉树、哈希表等，以及它们的特点和使用场景；
>   - 数组：一段连续的内存空间，可以存储相同类型的元素，可以通过下标直接访问元素，适用于随机访问数据的场景。
>   - 链表：由一系列节点组成，每个节点包含数据和指向下一个节点的指针，适用于插入、删除元素频繁的场景。
>   - 栈：一种后进先出（LIFO）的数据结构，适用于需要实现回溯、撤销等操作的场景。
>   - 队列：一种先进先出（FIFO）的数据结构，适用于需要实现排队、调度等操作的场景。
>   - 二叉树：一种树形数据结构，每个节点最多有两个子节点，适用于实现快速查找、排序等操作的场景。
>   - 哈希表：一种以键值对形式存储数据的数据结构，可以通过键快速访问对应的值，适用于需要快速查找、插入、删除数据的场景。
> - 常用的算法，如排序算法、查找算法、递归算法等，以及它们的时间复杂度和空间复杂度。
>   - 排序算法：冒泡排序、选择排序、插入排序、希尔排序、归并排序、快速排序等。时间复杂度从O(n^2)到O(nlogn)不等。
>   - 查找算法：顺序查找、二分查找、哈希查找等。时间复杂度从O(n)到O(logn)不等。
>   - 递归算法：通过函数自身调用来解决问题的算法，适用于树形结构、分治等问题。时间复杂度和空间复杂度都与递归层数相关。
>   - 动态规划算法：通过将原问题分解为子问题来解决问题的算法，适用于具有重叠子问题和最优子结构性质的问题。时间复杂度和空间复杂度取决于子问题的个数和规模。
>
> 数据库和缓存：
>
> - MySQL的性能调优，包括索引优化、SQL语句的优化、参数调优等；
>   - 索引优化：为经常查询的列创建索引、避免过多使用联合索引、避免使用过长的索引等。
>   - SQL语句的优化：避免使用SELECT *、避免在WHERE子句中使用函数、使用EXPLAIN分析SQL语句等。
>   - 参数调优：调整缓冲池大小、线程池大小、连接池大小等参数，根据硬件配置和应用场景进行优化。
> - Redis的数据结构和常用命令，以及它们的使用场景；
>   - 数据结构：字符串、哈希表、列表、集合、有序集合等。
>   - 常用命令：SET、GET、HSET、HGET、LPUSH、RPUSH、SADD、SMEMBERS、ZADD、ZRANGE等。
>   - 使用场景：字符串适用于存储简单的键值对、哈希表适用于存储复杂的数据结构、列表适用于实现队列、集合适用于去重、有序集合适用于排序和排行榜等场景。
> - Redis的持久化和主从复制等高可用技术；
>   - 持久化：Redis支持RDB和AOF两种持久化方式，可以将数据保存到磁盘上以实现数据持久化。
>   - 主从复制：Redis支持主从复制，可以将主服务器上的数据同步到从服务器上，提高系统的可用性和性能。
>   - 高可用技术：Redis Sentinel和Redis Cluster是Redis提供的两种高可用解决方案，可以实现自动故障检测、故障转移、负载均衡等功能。
> - 缓存穿透、缓存雪崩、缓存击穿等缓存常见问题的处理方法。
>   - 缓存穿透：使用布隆过滤器、缓存空对象、限制请求频率等方法来避免缓存穿透。
>   - 缓存雪崩：设置缓存失效时间随机化、使用分布式锁等方法来避免缓存雪崩。
>   - 缓存击穿：使用互斥锁、永不过期等方法来避免缓存击穿。
>
> 微服务和分布式系统：
>
> - 微服务架构的概念和优势，以及它与传统的单体架构的区别；
>   - 微服务架构：一种将应用程序拆分为多个小型服务的架构，每个服务都可以独立部署、扩展和更新，通过轻量级通信机制相互协作。
>   - 优势：灵活性高、可扩展性好、部署和更新方便、容错性强等。
>   - 区别：传统的单体架构是将整个应用程序作为一个单独的单元来构建和部署，微服务架构则将应用程序拆分为多个小型服务，每个服务都可以独立部署和运行。
> - 服务的注册与发现，包括Zookeeper、Consul、Eureka等常用的服务注册中心；
>   - 服务注册中心：提供服务注册、发现、负载均衡等功能，可以让服务消费者方便地发现和调用服务提供者。
>   - 常用服务注册中心：Zookeeper、Consul、Eureka等。
>   - 注册与发现流程：服务提供者将自己的服务注册到注册中心，服务消费者从注册中心获取服务提供者的地址，然后调用服务。
> - 负载均衡的概念和常用算法，如轮询、随机等；
>   - 负载均衡：将请求分配到多个服务器上，使得服务器的负载均衡，并提高系统的可用性和性能。
>   - 常用算法：轮询、随机、加权轮询、加权随机、最小连接数等。
>   - 轮询算法：按照顺序轮流将请求发送到每台服务器上。
>   - 随机算法：随机选择一台服务器来处理请求。
>   - 加权轮询和加权随机算法：根据服务器的权重分配请求。
>   - 最小连接数算法：将请求分配给当前连接数最少的服务器。
> - 容错处理的常用方法，如熔断、降级等。
>   - 容错处理：在分布式系统中，由于各种原因可能会导致服务不可用或响应缓慢，需要使用容错处理方法来提高系统的可用性和稳定性。
>   - 常用方法：熔断、降级、限流、重试等。
>   - 熔断：当服务调用失败率达到一定阈值时，自动熔断该服务，避免请求继续访问不可用的服务，降低系统的响应时间和错误率。
>   - 降级：在服务不可用或响应缓慢时，通过降级返回缓存数据、默认值等方式来保证系统的可用性。
>   - 限流：限制服务的请求流量，避免过多请求导致系统负载过高。
>   - 重试：当服务调用失败时，重复尝试调用该服务，直到调用成功或达到最大重试次数。

面试官：你好，请先自我介绍一下。

应聘者：您好，我叫XXX，是一名计算机科学与技术专业的本科生。我熟练掌握Java编程语言和Spring框架，熟悉MySQL和Redis等数据库和缓存中间件的使用和优化，了解多线程编程和分布式系统的开发。我曾经参与开发过校园失物招领系统和预约挂号系统，熟练掌握SSM和Spring Cloud等技术框架。我具备良好的自学能力和团队协作能力，喜欢学习新技术和记录总结，希望能够加入贵司，提升自己的技术水平。

面试官：非常棒的自我介绍。请问你对Java语言的了解和掌握程度如何？

应聘者：我熟练掌握Java编程语言，包括常用的语法特性、面向对象编程、异常处理、IO流处理等方面。我熟悉常用的集合类和反射机制，能够熟练地使用它们进行开发。此外，我也了解Java 8中引入的Lambda表达式和Stream API等新特性，并在开发中尝试过使用它们。

面试官：那你能否简单介绍一下Spring框架的原理和常用注解？

应聘者：Spring框架是一个轻量级的JavaEE应用框架，它提供了依赖注入和控制反转等核心特性，简化了应用程序的开发。它的核心容器是BeanFactory和ApplicationContext，能够管理应用程序中的对象。常用注解有@Component、@Controller、@Service、@Repository等，它们分别用于标注Bean、控制器、服务和数据访问层。另外，还有@Autowired、@Qualifier和@Value等注解，分别用于自动装配、指定Bean名称和注入配置文件中的属性值。

面试官：很好。你提到了熟悉MySQL和Redis等数据库和缓存中间件的使用和优化，你能否具体介绍一下你在这方面的经验？

应聘者：在MySQL方面，我熟悉常用的SQL语句和索引优化等技术，能够根据业务场景进行优化。我也了解MySQL的参数调优和主从复制等高可用技术，能够根据实际情况进行配置和部署。在Redis方面，我熟悉Redis的数据结构和常用命令，能够根据业务场景进行选择和优化。我也了解Redis的持久化和主从复制等高可用技术，能够根据实际情况进行配置和部署。

面试官：非常好。你在项目中使用过哪些设计模式和数据结构？

应聘者：在项目中，我使用过单例模式、工厂模式和观察者模式等设计模式。我也使用过常用的数据结构，如数组、链表、栈、队列、哈希表和二叉树等，能够根据实际场景进行选择和优化。

面试官：你在校园失物招领系统和预约挂号系统中承担了什么角色？

应聘者：在校园失物招领系统中，我担任了开发组长的角色，负责制定开发计划、分配任务和协调团队成员之间的工作进度。在开发过程中，我主要负责后端的开发工作，使用SSM框架开发了失物招领信息的发布、查询和管理等功能。在预约挂号系统中，我负责了医生和患者模块的开发工作，使用Spring Cloud框架开发了医生和患者的信息管理、排班管理和预约挂号等功能。

面试官：你提到了熟悉分布式系统的开发，你能否谈一下你对微服务架构的理解？

应聘者：微服务架构是一种将应用程序拆分为小型、独立的服务组件，并通过轻量级通信机制进行协作的架构模式。每个服务组件都是独立部署、独立运行和独立维护的，它们之间通过RESTful API或消息队列等方式进行通信。微服务架构具有高度的可伸缩性、灵活性和容错性，能够满足不同规模和复杂度的应用需求。

面试官：很好。你还有什么问题要问我吗？

应聘者：是的，我想了解一下贵司的企业文化和团队氛围，以及实习生的工作内容和培训计划等方面的信息。

面试官：非常好的问题。我们公司注重技术创新和团队合作，鼓励员工自主学习和探索新技术。实习生将会参与公司的实际项目开发和维护工作，同时也会有相关培训和指导，帮助你更好地适应工作。我们也会定期组织技术分享和团队建设活动，加强团队之间的沟通和合作。

应聘者：非常感谢您的回答。

面试官：谢谢你的面试，我们会尽快安排面试结果的反馈。



> 项目部分
>
> 1. 你在校园失物招领系统中使用了哪些技术框架和技术？你认为这些技术有什么优势和劣势？
> 2. 你在校园失物招领系统中使用了并发控制技术，请介绍你的实现方式，并说明其作用和优点。
> 3. 你在校园失物招领系统中使用了WebSocket实现了实时聊天功能，请介绍你的实现方式和实现效果，并说明其优点。
> 4. 你在校园失物招领系统中使用了分布式锁等技术实现了聊天室权限管理等功能，请介绍你的实现方式和实现效果，并说明其优点。
> 5. 你在医院诊预约系统中使用了哪些技术框架和技术？你认为这些技术有什么优势和劣势？
> 6. 你在医院诊预约系统中使用了Spring Cloud微服务框架，请介绍你的实现方式和实现效果，并说明其优点。
> 7. 你在医院诊预约系统中使用了MongoDB作为数据存储，请介绍你的实现方式和实现效果，并说明其优点。
> 8. 你在医院诊预约系统中使用了Redis和RabbitMQ作为中间件，请介绍你的实现方式和实现效果，并说明其优点。

1. 在校园失物招领系统中，我使用了JSP、jQuery、Ajax等前端技术，后端使用了SSM框架和WebSocket实现实时聊天功能。这些技术的优势在于能够提高系统性能和并发处理能力，同时也能够提高用户体验和交互性。劣势可能在于学习成本和开发难度较高。
2. 在校园失物招领系统中，我使用了synchronized和ConcurrentHashMap进行并发控制，确保高并发访问下的数据安全和一致性。这种方式可以避免多线程访问数据时的冲突问题，提高系统的并发处理能力和稳定性。
3. 在校园失物招领系统中，我使用了WebSocket实现了实时聊天功能，避免了频繁HTTP请求对服务器的压力，优化了系统的并发处理能力。这种方式可以提高系统的实时性和用户体验，同时也可以减轻服务器的负担。
4. 在校园失物招领系统中，我使用了分布式锁等技术实现了聊天室权限管理等功能。分布式锁可以避免多个线程同时对共享资源进行访问，确保资源的正确性和一致性，提高系统的稳定性和可扩展性。
5. 在医院诊预约系统中，我使用了Spring Cloud微服务框架、MongoDB和MySQL等技术。这些技术的优势在于能够提高系统的可扩展性和稳定性，同时也能够提高系统的性能和可维护性。劣势可能在于学习成本和开发难度较高。
6. 在医院诊预约系统中，我使用了Spring Cloud微服务框架，通过微服务架构将系统拆分为多个小型服务，实现了服务的解耦和独立部署，提高了系统的可扩展性和灵活性。
7. 在医院诊预约系统中，我使用了MongoDB作为数据存储，通过文档数据库的特点实现了高性能、高可扩展性和高可用性。同时，MongoDB也支持复杂查询和索引，能够提高系统的查询效率和灵活性。
8. 在医院诊预约系统中，我使用了Redis和RabbitMQ作为中间件，Redis作为缓存提高了系统的性能，RabbitMQ作为消息中间件实现了服务之间的异步通信，提高了系统的可靠性和可扩展性。同时，Redis和RabbitMQ也具有高可用性和可扩展性。