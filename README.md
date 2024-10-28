# Charlie-EC

Charlie-EC为个人电商项目，包含PC管理端，PC用户端，接口服务端，移动端（H5,微信小程序），整个项目使用Monorepo单仓多包的管理方式，通过Workspace协议实现子包间的资源复用，提升开发效率

## 项目结构

- base：公共组件
  - base：在element-ui或andt-d基础上进行二次封装的基础组件
  - busi：针对项目本身可复用的业务组件
- utils：公共函数
  - request：axios基础上二次封装的请求函数
  - validate：正则校验函数
  - fileUploader：大文件上传
  - util：常用工具函数
- admin：后台管理端
  - vue3
  - vue-router
  - pinia
  - element-plus
- customer：客户PC端
  - react
  - react-router
  - mobx
  - antd
- mobile:客户移动端(h5,小程序)
  - uniapp
  - vue3
- service：服务端
  - nest.js
  - mysql
  - typeorm
- source：部分第三方组件库源码，用于学习和debugger

## 项目规范

- 代码格式化规范：
  - 语法：eslint
  - 格式：prettier
- 代码提交规范：
  - husky
  - lint-staged
  - commit-lint
  - commitizen
