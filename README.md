# 仿网易云音乐网站
![输入图片说明](public/image.png)
## 项目启动
```
yarn install 
yarn start
```
## 技术栈
### 前端
React：用于构建用户界面的 MVVM 框架
styled-components：解决组件内容编写样式会影响全局样式导致冲突
axios: 发送网络请求，请求拦截和响应拦截
react-router：为单页面应用提供的路由系统
react-router-config：集中式路径映射表管理
redux：React 集中状态管理，在多个组件共享某些状态时非常方便
react-redux：帮助我们链及redux、react的辅助工具
immutable：对reudx中保存的state使用immutable进行管理
redux-immutable: 对根目录的reducer中state进行管理
redux-thunk: 在redux中进行异步请求
propType: 校验props类型及默认值
react-transition-group: 添加过渡动画效果
### 后端
https://binaryify.github.io/NeteaseCloudMusicApi