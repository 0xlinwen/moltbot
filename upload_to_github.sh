#!/bin/bash

# 上传到GitHub仓库的脚本
# 从配置文件中读取GitHub Personal Access Token

echo "准备上传到GitHub仓库..."

# 从配置文件读取token
CONFIG_FILE="../github_config.json"
if [ -f "$CONFIG_FILE" ]; then
    TOKEN=$(grep -o '"github_token":[[:space:]]*"[^"]*' $CONFIG_FILE | cut -d'"' -f4)
    USERNAME=$(grep -o '"username":[[:space:]]*"[^"]*' $CONFIG_FILE | cut -d'"' -f4)
    REPO=$(grep -o '"repository":[[:space:]]*"[^"]*' $CONFIG_FILE | cut -d'"' -f4)
else
    echo "错误: 找不到配置文件 $CONFIG_FILE"
    exit 1
fi

# 设置远程仓库
git remote set-url origin https://${USERNAME}:${TOKEN}@github.com/${USERNAME}/${REPO}.git

# 将分支重命名为main（推荐）
git branch -M main

# 推送到GitHub
git push -u origin main

echo "上传完成！"