//get和set
class Phone {
    get price() {
        console.log('价格属性被读取了')
        return 'iloveyou'
    }
    set price(newVal) {
        console.log('价格属性被修改了')
    }
}
    //实例化对象
let s = new Phone();
    console.log(s.price);
    s.price = 'free'
