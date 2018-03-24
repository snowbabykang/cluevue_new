<template>
    <div class="m-artHeader" id="breadcrumb" >
        <el-breadcrumb class="linkWay" >
            <el-breadcrumb-item v-for="item in breadList" :key="item.id"  separator="/" :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
export default{
        created() {
            this.getBreadcrumb();
            console.log(this.breadList)
        },
        data() {
            return {
                breadList: []
            }
        },
        methods: {
            getBreadcrumb() {
                var breadNumber= typeof(this.$route.meta.breadNumber)!="undefined"?this.$route.meta.breadNumber:1;
                var newBread={name:this.$route.name,path:this.$route.fullPath};
                var breadList=this.$store.getters.breadListState;
                breadList.splice(breadNumber,breadList.length-breadNumber,newBread);
                var breadList=JSON.stringify(breadList);
                this.$store.commit('breadListMutations',breadList);
                this.breadList=this.$store.getters.breadListState;
            }
        },
        watch: {
            $route () {
                this.getBreadcrumb();
            }
        }
 }
</script>