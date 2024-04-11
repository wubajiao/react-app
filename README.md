<!--
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2022-05-09 15:12:33
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-04-11 15:52:45
-->

create by create-react-app
create app with React、TypeScript、Less、webpack、Eslint

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run start
```

### 打包

```bash
npm run build
```

### 包大小分析

```bash
npm run analyze
```

### 目录结构说明

```bash
react-app
 -scripts                --webpack相关配置文件
 -src                    --项目文件
   -assets               --项目资源文件，包括图片、字体、图标等
   -compoments           --组件
   -Layout               --页面布局文件
   -mock                 --模拟接口
   -routes               --页面路由
   -app.less             --入口less文件
   -App.tsx              --项目路由入口页面
   -custom.d.ts          --ts引入提示忽略文件
   -index.tsx            --项目入口文件
   -setProxy             --本地代理配置
 -.commitlintrc.js       --git提交检验配置
 -.eslintignore          --eslint校验忽略文件
 -.eslintignore          --eslint校验规则配置
 -.gitignore             --git忽略文件
 -.npmrc                 --npm配置文件
 -.prettierignore        --prettier格式化忽略文件
 -.prettierrc            --prettier格式化配置
 -.stylelintrc.js        --css校验配置
 -package.json           --node包配置
 -README.md              --说明文件
 -tsconfig.json          --ts配置
```
