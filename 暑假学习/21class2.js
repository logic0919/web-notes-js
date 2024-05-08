// 关于静态成员和静态方法


// 对于构造方法
function Phone(price) {
    this.price=price
}
// 以下这两行不能被实例对象调用，因为以下只是函数对象的属性和方法，跟实例对象的不相通
// 以下只是静态成员和静态方法
Phone.name = 'a'
Phone.age = 18
Phone.fun = () => {
    console.log('这是构造函数的属性');
}
// 以下这一行可以被实例对象调用
Phone.prototype.size=165

let p1 = new Phone(11)
console.log(p1.name);//undefined
// p1.fun()//错误
console.log(p1.size);//165




// 对于class
class Phone1{
    constructor(price) {
        this.price=price
    }
    static name = 'b'
    static fun() {
        console.log('静态方法');
    }
    call() {
        console.log('打电话');
    }
}
let p2 = new Phone()
console.log(p2.name);//undefined
console.log(Phone1.name);//b




// 构造函数继承
function SmartPhone(price,color){
    Phone.call(this, price)
    this.color=color
}
//设置子级构造函数的原型
SmartPhone.prototype = new Phone;
SmartPhone.prototype.constructor = SmartPhone;
//声明子类的方法
SmartPhone.prototype.photo = function () {
    console.log("我可以拍照")
}
let sm1 = new SmartPhone(22, 'red')
console.log(sm1);



// class类继承
class SmartPhone1 extends Phone1{
    constructor(price, color) {
        super(price)
        this.color=color
    }
    photo() {
        console.log('拍照');
    }
    
    // 子类对父类方法的重写
    call() {
        console.log('视频通话');
        return 111
    }
}

let sm2 = new SmartPhone1(33, 'pink')
console.log(sm2);
console.log(sm2.call()); 