<template>
    <ul id="breadcrumb" >
        <!-- <el-breadcrumb class="linkWay" >
            <el-breadcrumb-item v-for="item in breadList" :key="item.id"  separator="/" :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb> -->
        <li><router-link to="/" class="entypo-home"></router-link></li>
        <template v-for="item in breadList">
            <li :key="item.id"><i class="fa fa-lg fa-angle-right"></i></li>
            <li :key="item.id"><router-link :to="{path:item.path }">{{item.name}}</router-link></li>
        </template >
    </ul>
</template>


<script>
export default{
        created() {
            this.getBreadcrumb();
        },
        data() {
            return {
                breadList: []
            }
        },
        methods: {
            getBreadcrumb() {
                var breadNumber= typeof(this.$route.query.breadNum)!="undefined"?this.$route.query.breadNum:1;
                
                var newBread={name:this.$route.name,path:this.$route.fullPath};
                
                var breadList=this.$store.getters.breadListState;
                
                breadList.splice(breadNumber-1,breadList.length,newBread);
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