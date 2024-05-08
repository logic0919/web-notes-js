let obj = {
    a: 1,
    b:2
}
let fun = function (x, y) {
    console.log(this);//{ a: 1, b: 2 }
}
fun.apply(obj, [1, 2])

// 使用场景
const arr = [1, 2, 3, 4, 5]
console.log(Math.max(...arr));
console.log(Math.max.apply(Math,arr));