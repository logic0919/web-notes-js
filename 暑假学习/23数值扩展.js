// 1.Number.EPSILON
// Number.EPSILON 是 JavaScript 表示的最小精度
console.log(0.1 + 0.2 == 0.3);//false
// 可以通过判断0.3和0.1 + 0.2的差值是否小于Number.EPSILON来判断0.1 + 0.2 == 0.3是否成立
// 这样判断下来的结果是0.1 + 0.2 = 0.3


// 2.进制
let a=0b110//2进制
let b=0o110//8
let c = 0x227//16
console.log(c);//551