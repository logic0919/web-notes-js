// 集合实现了 iterator 接口，所以可以使用[扩展运算符]和[for...of...]进行遍历
// 其成员的值是唯一的，所以可以用于数组去重

// 集合的属性和方法：
// size:集合中元素个数
// add:增加一个元素，返回当前集合
// delete:删除元素，返回Boolean值
// has:检查集合中是否包含某个元素，返回Boolean值

let arr1 = [3, 2, 2, 1, 1, 6, 4, 5]

// 数组去重
let arr2 = [...new Set(arr1)]
console.log(arr2);

// 求arr1和arr3的交集
let arr3 = [1, 2, 3,8]
let result = [...new Set(arr1)].filter(item => new Set(arr3).has(item))
console.log(result);

// 求arr1和arr3的并集
let result1 = [...new Set([...arr1,...arr3])]
console.log(result1);