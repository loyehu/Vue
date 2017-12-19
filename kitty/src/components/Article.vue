<template>
    <div>
        this is article
    </div>
</template>
<script>
    export default{
        name: 'article',
        created(){
            console.log(this.$route.params)
            // console.log(this)
        }
    }
</script>
<style>
    div{
        color: plum;
        font-size: 30px;
    }
</style>
