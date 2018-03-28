
<template>
<div class="heimodel">
   <table class="table-striped footable-res footable metro-blue" style="width:100%">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th data-hide="phone,tablet">Job Title</th>
          <th data-hide="phone,tablet">DOB</th>
          <th data-hide="phone">Status</th>
        </tr>
        </thead>
            <tbody>
              <tr>
                  <td>Lauri</td>
                  <td>Hyland</td>
                  <td>Blackjack Supervisor</td>
                  <td data-value="500874333932">15 Nov 1985</td>
                  <td data-value="3">
                  <span class="status-metro status-suspended" title="Suspended">Suspended</span>
                  </td>
              </tr>
            </tbody>
        </table>
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
<style scoped>

</style>
<script>
export default {
  data() {
    return {
      filterTag: "",
      currentPage4: 4,
      tableData: [{}, {}]
    };
  },
  props: ["tabtitle", "posturl", "otherconfig"],
  computed: {
    hascon: function() {
      return this.otherconfig;
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    formatter(row, column) {
      return row.address;
    },
    filtertag(value, row) {
      return row.tag === value;
    },
    filterhandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    filtertagpub(value, row, column) {
      console.log(value, row, column);
    }
  },

  created() {
    // console.log(this.otherconfig)
  },
  mounted() {
    var data = { keyword: "zhangsan" };
    //console.log(this.posturl)
    this.$ajax.post(this.posturl, data).then(res => {
      this.tableData = res.data.data;
    });
  }
};
</script>