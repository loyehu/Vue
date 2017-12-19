<template>
  <div>
      <div v-for="item in movie">
          {{item.title}}
          图片: <img :src="item.images.medium">
      </div>
  </div>
</template>
<script>
    import axios from 'axios';
    export default{
        data(){
            return {
                DailList: '',
                movie: ''
            }
        },
        created(){
            this.getDailist();
            this.getDailMOve();
        },
        methods: {
            getDailMove(){
                // axios.get('http://news-at.zhihu.com/api/4/news/latest')  // 跨域
                axios.get('https://easy-mock.com/mock/59664d4d58618039284c7710/example/goods/list')
                .then(res=>{
                    this.movie = res.data.subjects;
                    console.log(this.movie);
                })
            },
            getDailList(){
                axios.get('http://news-at.zhihu.com/api/4/news/latest')  // 跨域
                .then(res=>{
                    console.log(this.res);
                })
            }
        }
    }
</script>
