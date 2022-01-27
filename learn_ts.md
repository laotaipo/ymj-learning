ts比较全面的文章
https://juejin.cn/post/7031787942691471396?utm_source=gold_browser_extension

类型
unknown  若一个变量为unknown类型，则可以用任何数据给其赋值。而unknown类型的数据只能赋值给unknown类型的变量
never 一般用于一个会抛错的函数的返回值
BigInt大数类型
object, Object 和 {}
    object类型的变量可以用 [] {} functio赋值
    Object类型或{}类型的变量可以用 除undefined 和 null之外的值去赋值
联合类型  未赋值时只能调用两个类型共有的方法
类型断言 <> 或者 as
非空断言
字面量类型
类型别名 type flag = string | number;
交叉类型 &

函数
函数重载 没用过 TODO：了解下具体用途

类
存取器：set get 原理是Object.defineProperty
readonly：readonly修饰的变量只能在构造函数中初始化
修饰符
    public 类 子类 实例都可访问
    protected 类 子类可访问 实例不可访问
    private 只有本类可以访问
静态方法和静态属性：static关键字修饰的 静态方法里的this指向方法 只能通过类名.**调用
抽象类和抽象方法：abstract关键字修饰的 与接口的区别是 抽象类里中可以有抽象方法也可以有普通方法 子类必须实现父类的抽象方法 一个类可以实现多个接口 只能继承自一个父类
接口：一个类可以实现多个接口，如果这些接口中有同名的方法 但是参数啥的不一样 会有奇怪的报错