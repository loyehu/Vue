


### nodeJS 在window 下面设置环境变量



#### cmd 中输入命令
set NODE_ENV=production

app.js
    console.log(process.env.NODE_ENV)

#### bash shell linux shell 命令行输入
// 在命令行里面可以通过这个语法来设置环境变量
// export NODE_ENV = dev
console.log(process.env.NODE_ENV);
