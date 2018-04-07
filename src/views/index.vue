<template>
  <div id="sb-site" class="pace-done">
   <public-nav></public-nav>
   <menuslider></menuslider>
   <div class="wrap-fluid">
        <div class="container-fluid paper-wrap bevel tlbr">
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    var getdata =()=>{
       this.$ajax.post("/api/dic/getdic",{})
       .then((res)=>{
          this.$store.commit("setdic",res.data)
      }).catch((error)=>{
          console.log(error)
          this.$message({
          showClose: true,
          message: "错误",
          type: 'error'
      });
    })
    }
    getdata()
  }
}
</script>

<style scoped>
.wrap-fluid{
  margin-left:250px
}
.paper-wrap {
  min-height:100%
}
</style>
