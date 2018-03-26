<template>
<div class="heimodel">
  <el-table
    :data="tableData"
    height="560"
    border
    style="width: 100%">
    <el-table-column v-for="(item, key) in tabtitle" :key="key"
      v-bind:prop="item.en"
      v-bind:label="item.name">
      {{item.name}}
    </el-table-column>
    <el-table-column v-if="this.otherconfig=='ts_ackmodel'"
      prop="tag"
      label="标签"
      width="100"
      :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag === '家' ? 'primary' : 'success'"
          close-transition>{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>
  </el-table>
   <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
</div>
</template>

<script>
  export default {
    data() {
      return { 
        currentPage4: 4,
        tableData: [{},{}]
      }
    },
    props:['tabtitle',"posturl","otherconfig"],
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    
    created(){
        console.log(this.otherconfig)
    },
    mounted(){
      var data = {keyword:"zhangsan"}
      console.log(this.posturl)
      this.$ajax.post(this.posturl,data).then((res)=>{
        console.log(res)
      })
    }
  }
</script>