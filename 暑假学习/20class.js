// 构造
class Phone {
    //构造方法 名字不能修改
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    //方法必须使用该语法，不能使用 ES5 的对象完整形式
    call() {
        console.log("我可以打电话!");
    }
}
let onePlus = new Phone("1+",1999);
console.log(onePlus);