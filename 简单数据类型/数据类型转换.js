//转换为字符串
// 1. 把数字型转换为字符串型 变量.toString()
var num = 10;
var str = num.toString();
console.log(str);
console.log(typeof str);
// 2. 我们利用 String(变量)
console.log(String(num));
// 3. 利用 + 拼接字符串的方法实现转换效果 隐式转换
console.log(num + '');

//转换为数字型
// var age = prompt('请输入您的年龄');
// 1. parseInt(变量)  可以把 字符型的转换为数字型 得到是整数
// console.log(parseInt(age));
console.log(parseInt('3.14')); // 3 取整
console.log(parseInt('3.94')); // 3 取整
console.log(parseInt('120px')); // 120 会去掉这个px单位
console.log(parseInt('rem120px')); // NaN
// 2. parseFloat(变量) 可以把 字符型的转换为数字型 得到是小数 浮点数
console.log(parseFloat('3.14')); // 3.14
console.log(parseFloat('3')); // 3
console.log(parseFloat('120px')); // 120 会去掉这个px单位
console.log(parseFloat('rem120px')); // NaN
// 3. 利用 Number(变量) 
var str = '123';
console.log(Number(str));
console.log(Number('12'));
// 4. 利用了算数运算 -  *  /  隐式转换
console.log('ha');
console.log('12' - 0); // 12
console.log('123' - '120');
console.log('123' * 1);
console.log('123' / 1);
console.log(+'132');

//转换为布尔型
console.log(Boolean('')); // false
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log('------------------------------');
console.log(Boolean('123'));
console.log(Boolean('你好吗'));
console.log(Boolean('我很好'));