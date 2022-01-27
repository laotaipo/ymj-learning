// class Person {
//     private name: string
//     protected age: number
//     static see = 11
//     constructor (name: string, age:  number) {
//         this.name =  name
//         this.age  = age
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//         console.log(this.name)
//     }
//     eat () {
//         console.log(`${this.name}eat  something`)
//     }
//     static sss () {
//         console.log(this, this.see, '类里面的静态方法')
//     }
// }
// class Student extends Person {
//     grade: number
//     constructor (name: string, age: number, grade:  number) {
//         super(name, age)
//         this.grade = grade
//     }
//     eat () {
//         console.log('Student类的eat', Student.see)
//     }
// }
// const s1 = new Student('hh', 12, 3)
// s1.eat()
// Student.sss()
// console.log(typeof Student.sss, typeof Student.see)
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log(this.name, "eat something");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.speak = function () {
        console.log("喵喵喵");
    };
    return Cat;
}(Animal));
// let animal = new Animal(); //直接报错 无法创建抽象类的实例
var cat = new Cat('jjj');
cat.speak();
cat.eat();
