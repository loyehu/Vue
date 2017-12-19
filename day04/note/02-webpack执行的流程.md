## 分为开发和生产
### 开发模式下发生的事情
### 当我们执行 npm run dev 发生的事情
#### npm run dev
> 在 package.js 里面的scripts 规定的内容我们可以使用 npm run '属性名字' 来执行
> 注意：执行 npm start 不需要加run， 其他的命令都必须加run

按照下面的文件 执行 npm start 相当于执行 npm run dev
```
"scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "unit": "jest --config test/unit/jest.conf.js --coverage",
    "e2e": "node test/e2e/runner.js",
    "test": "npm run unit && npm run e2e",
    "lint": "eslint --ext .js,.vue src test/unit/specs test/e2e/specs",
    "build": "node build/build.js"
  },
```
#### 执行 npm run dev 根据 scripts 里面的内容得知最后执行 build/webpack.dev.conf.js
```
"dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js"
```

inject: true  注入 

alias 别名

### 在webpack 中可以使用 一下插件设置默认的env
```
new webpack.DefinePlugin({
  'process.env.NODE': JSON.stringify('production')
})
```


### 在vue中，我们在组件里面写style 最后在加载的时候为什么事单独的css文件？
使用 extract-text-webpack-plugin 插件，将样式文件单独打包，打包输出的文件由配置文件中的output属性指定。然后我们在入口HTML页面写个link标签引入这个打包后的样式文件。
#### 文档：https://www.npmjs.com/package/extract-text-webpack-plugin

### style-loader 自动将css代码放到生成的style标签中插入到head标签里面。

### 代理
https://github.com/chimurai/http-proxy-middleware

```
var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/api', proxy({target: 'http://www.example.org', changeOrigin: true}));
app.listen(3000);

// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar
```