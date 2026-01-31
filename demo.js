// 基础JavaScript演示程序
console.log("欢迎来到JavaScript演示!");

// 定义一个简单的函数
function greet(name) {
    return `你好, ${name}! 欢迎学习JavaScript!`;
}

// 创建一个对象
const person = {
    name: "张三",
    age: 25,
    city: "北京",
    
    // 对象方法
    introduce: function() {
        return `我是${this.name}, ${this.age}岁, 来自${this.city}.`;
    }
};

// 使用函数和对象
console.log(greet("开发者"));
console.log(person.introduce());

// 数组操作示例
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log("原数组:", numbers);
console.log("翻倍后:", doubledNumbers);

// 异步操作示例
setTimeout(() => {
    console.log("这是一个异步操作的结果!");
}, 1000);

// 导出模块 (如果在Node.js环境中)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { greet, person };
}