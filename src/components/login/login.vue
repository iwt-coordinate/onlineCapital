<template>
  <div>
      <p>这是login页</p>
      <el-button @click="form()">点击跳转home页</el-button>
  </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        methods :{
            form(){
                this.$router.push("/home")
            }
        }
    }
</script>
