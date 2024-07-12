# 项目简介

Charlie个人电商项目，准备个人商用，整个项目使用Monorepo架构，包含管理端，客户端（PC/移动），服务端代码

# 项目结构

base：公共组件
utils：公共方法
admin：后台管理端 技术选型：vue3 vue-router pinia element-plus
customer：客户PC端 技术选型：react react-router mobx antd
mobile:客户移动端(h5,小程序) 技术选型：uniapp + vue3
service：服务端 技术选型：nest.js mysql typeorm
source：部分第三方组件库源码，用于学习和debugger

# 规范

eslint + prettier做代码格式规范
husky + lint-staged + commit-lint + cz 做提交规范
