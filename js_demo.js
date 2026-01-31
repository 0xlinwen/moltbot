/**
 * JavaScript功能演示文件
 * 展示各种JavaScript核心概念
 */

// 1. 基本变量声明
const appName = "JS Demo";
let counter = 0;

// 2. 函数定义
function greet(name) {
    return `Hello, ${name}! Welcome to ${appName}.`;
}

// 3. 类定义
class Calculator {
    constructor() {
        this.history = [];
    }

    add(a, b) {
        const result = a + b;
        this.history.push(`${a} + ${b} = ${result}`);
        return result;
    }

    subtract(a, b) {
        const result = a - b;
        this.history.push(`${a} - ${b} = ${result}`);
        return result;
    }

    multiply(a, b) {
        const result = a * b;
        this.history.push(`${a} * ${b} = ${result}`);
        return result;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        const result = a / b;
        this.history.push(`${a} / ${b} = ${result}`);
        return result;
    }

    getHistory() {
        return this.history;
    }

    clearHistory() {
        this.history = [];
    }
}

// 4. 异步函数示例
async function fetchData(url) {
    try {
        // 模拟API请求
        console.log(`Fetching data from: ${url}`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return { success: true, data: "Sample data", timestamp: new Date().toISOString() };
    } catch (error) {
        console.error("Error fetching data:", error);
        return { success: false, error: error.message };
    }
}

// 5. 数组和对象操作
function processData(dataArray) {
    // 使用map, filter, reduce
    const doubled = dataArray.map(x => x * 2);
    const evens = dataArray.filter(x => x % 2 === 0);
    const sum = dataArray.reduce((acc, curr) => acc + curr, 0);

    return {
        original: dataArray,
        doubled: doubled,
        evens: evens,
        sum: sum
    };
}

// 6. 模块导出（适用于Node.js环境）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        greet,
        Calculator,
        fetchData,
        processData
    };
}

// 7. 主程序执行
function main() {
    console.log("=== JavaScript Demo Starting ===");
    
    // 使用函数
    console.log(greet("Developer"));
    
    // 使用计算器类
    const calc = new Calculator();
    console.log("Addition:", calc.add(10, 5));
    console.log("Subtraction:", calc.subtract(10, 5));
    console.log("Multiplication:", calc.multiply(10, 5));
    console.log("Division:", calc.divide(10, 5));
    
    // 显示计算历史
    console.log("Calculation History:", calc.getHistory());
    
    // 处理数组数据
    const sampleData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const processed = processData(sampleData);
    console.log("Processed Data:", processed);
    
    // 异步操作演示
    fetchData("https://api.example.com/data")
        .then(result => console.log("Async Result:", result))
        .catch(error => console.error("Async Error:", error));
    
    console.log("=== JavaScript Demo Complete ===");
}

// 如果在浏览器环境中运行
if (typeof window !== 'undefined') {
    window.jsDemo = { greet, Calculator, fetchData, processData, main };
}

// 如果直接运行此文件，则执行主程序
if (typeof require !== 'undefined' && require.main === module) {
    main();
}