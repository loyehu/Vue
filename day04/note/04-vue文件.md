##  以 .vue 结尾的文件
* 分为三大块
    模块化
        template
        script
        style

最终使用webpack的load把里面的内容提取，变异成浏览器可以识别的文件。
这样做非常方便开发，可读
模块化，一个vue文件就代表一个模块

### template 
<template>
    // 必须有成对的跟标签开始
    <div>
        <p></p>
    </div>
</template>

### script
必须导出
export default{
    name: 'lala'
}

### style
<style leng="scss">
    // leng 用来声明语言，比如：scss less stylus
</style>