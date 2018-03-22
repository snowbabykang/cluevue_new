<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#skin-select  .el-icon-arrow-down{
    position: absolute;
    left: auto;
    top: 50%;
}
ul.topnav ul{
    display: block;
    background-color: transparent
}
ul.topnav ul .is-active , .el-menu-item .is-active, .el-menu-item:focus, .el-menu-item:hover{
  background-color: rgba(255, 255, 255, .6) !important
}
</style>
