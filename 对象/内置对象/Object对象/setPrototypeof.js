// Object.setPrototypeof 设置原型对象
const school = {
    name: '尚硅谷'
}
const cities = {
    xiaoqu: ['北京', '上海', '深圳']
}

// 给school设置原型为cities
Object.setPrototypeOf(school, cities)
console.log(Object.getPrototypeOf(school));
console.log(school);