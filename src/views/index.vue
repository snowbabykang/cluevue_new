<template>
  <div id="sb-site" class="pace-done">
   <public-nav></public-nav>
   <menuslider></menuslider>
   <div class="wrap-fluid">
        <div class="container-fluid paper-wrap bevel tlbr">
          <router-view/>
         
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: '首页',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
