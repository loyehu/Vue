<template>
    <div>
        <!-- to 前面有冒号，表示可以写变量 -->
        <router-link :to="'/user/' + item.id" :key="index" v-for="(item,index) in userList">{{item.username}}</router-link>
        <div v-if="userInfo">
            姓名：{{userInfo.username}}<br/>
            性别：{{userInfo.sex}}<br/>
            title：{{userInfo.title}}<br/>
            爱好：{{userInfo.hobby}}<br/>
        </div>
    </div>
</template>
<script>
    let data = [
        {
            id: 1,
            title: 'vip',
            username: '王童',
            sex: '女',
            hobby: '睡觉',
        },
        {
            id: '2',
            title: 'vip',
            username: '李斌',
            sex: '女',
            hobby: '男'
        },
        {
            id: '3',
            title: 'svip',
            username: '边江伟',
            sex: '女',
            hobby: '男'
        }
    ]
    export default{
        data(){
            return {
                userList: data,
                userInfo: ''
            }
        },
        watch: {
            // 监听路由
            $route(){
                this.getData();
            }
        },
        created(){
            // let id = this.$route.params.id;
            // console.log(this.userList);
            // if(id){
            //     this.userInfo = this.userList.filter((item) =>{
            //         return item.id == id;
            //     })[0]
            // }
            // console.log(this.userInfo);
            
            this.getData();     // 初始化调用一次
        },
        methods: {
            getData(){
                let id = this.$route.params.id;
                // console.log(this.userList);
                if(id){
                    // 循环过滤，返回满足（item.id == id）条件的内容
                    this.userInfo = this.userList.filter((item) =>{
                        return item.id == id;
                    })[0]
                }
                console.log(this.userInfo);
            }
        }
    }
</script>
<style>

</style>
