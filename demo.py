#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
基础Python演示程序
"""

def greet(name):
    """返回问候语"""
    return f"你好, {name}! 欢迎学习Python!"


class Person:
    """人物类"""
    def __init__(self, name="张三", age=25, city="北京"):
        self.name = name
        self.age = age
        self.city = city
    
    def introduce(self):
        """自我介绍"""
        return f"我是{self.name}, {self.age}岁, 来自{self.city}."


def main():
    """主函数"""
    print("欢迎来到Python演示!")
    
    # 使用函数
    print(greet("开发者"))
    
    # 使用类
    person = Person()
    print(person.introduce())
    
    # 列表操作示例
    numbers = [1, 2, 3, 4, 5]
    squared_numbers = [num ** 2 for num in numbers]
    print(f"原列表: {numbers}")
    print(f"平方后: {squared_numbers}")
    
    # 字典操作示例
    student_scores = {
        "小明": 85,
        "小红": 92,
        "小刚": 78
    }
    
    print("\n学生成绩:")
    for name, score in student_scores.items():
        print(f"{name}: {score}分")
    
    # 异步操作示例 (使用asyncio)
    import asyncio
    
    async def async_operation():
        await asyncio.sleep(1)
        print("\n这是一个异步操作的结果!")
    
    # 运行异步操作
    asyncio.run(async_operation())


if __name__ == "__main__":
    main()