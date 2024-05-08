let obj = {
    a: 1,
    b:2
}
let fun = function (x, y) {
    console.log(this);
}
fun.call(obj,1,2)