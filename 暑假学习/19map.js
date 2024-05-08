// ES6 提供了 Map 数据结构。
// 它类似于对象，也是键值对的集合。但是键的范围不限于字符串，各种类型的值(包括对象) 都可以当作键。
// Map 也实现了 iterator 接口，所以可以使用[扩展运算符]和[for...of...]进行遍历。
// Map的属性和方法:
// 1) size：返回Map的元素个数
// 2) set：增加一个新元素，返回当前 Map
// 3) get：返回键名对象的键值
// 4) has：检测 Map 中是否包含某个元素，返回 boolean 值
// 5) clear：清空集合，返回undefined

let m = new Map()
let obj = {
    a: 1,
    b:2
}
m.set('name', 1)
m.set(obj, [1, 2, 3, 4])
console.log(m.size);
console.log(m.get(obj));
console.log(m.has('name'));
for (let i of m) {
    console.log(i);
}
m.delete('name')
m.clear()