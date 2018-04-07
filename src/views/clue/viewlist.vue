<template>
<div>
    <el-tabs name="viewlist_" v-model="activeName2" type="card">
        <el-tab-pane label="线索管理" name="first">
            <el-table :data="data.clue.data" height="350">
                <el-table-column property="source" label="线索来源"></el-table-column>
                <el-table-column property="number" label="编号"></el-table-column>
                <el-table-column property="reflected_name" label="被反映人"></el-table-column>
                <el-table-column property="company" label="单位"></el-table-column>
                <el-table-column property="post" label="职位"></el-table-column>
                <el-table-column property="level" label="级别"></el-table-column>
                <el-table-column property="clue_state" label="状态"></el-table-column>
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="文书管理" name="second">
            <el-table :data="data.document.data" height="350">
                <el-table-column property="document_date" label="发文日期"></el-table-column>
                <el-table-column property="document_code" label="发文字号"></el-table-column>
                <el-table-column property="document_title" label="文件标题"></el-table-column>
                <el-table-column property="document_user" label="发文人"></el-table-column>
                <el-table-column property="document_unit" label="发文单位"></el-table-column>
                <el-table-column property="memo" label="备注"></el-table-column>
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="问题线索处理登记" name="third">
            <el-table :data="data.case.case_clue.data" height="350">
                <el-table-column property="number" label="编号"></el-table-column>
                <el-table-column property="reflected_name" label="被反映人"></el-table-column>
                <el-table-column property="company" label="工作单位"></el-table-column>
                <el-table-column property="post" label="职位"></el-table-column>
                <el-table-column property="level" label="级别"></el-table-column>
                <el-table-column property="disposal_type" label="处置方式"></el-table-column>
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="立案案件登记表" name="fourth">
            <el-table :data="data.case.case_filing.data" height="350">
                <el-table-column property="number" label="编号"></el-table-column>
                <el-table-column property="reflected_name" label="被反映人"></el-table-column>
                <el-table-column property="company" label="工作单位"></el-table-column>
                <el-table-column property="post" label="职位"></el-table-column>
                <el-table-column property="level" label="级别"></el-table-column>
                <el-table-column property="disposal_type" label="处置方式"></el-table-column>
            </el-table>
        </el-tab-pane>
    </el-tabs>
</div>
</template>

<script>
export default {
    name: 'viewlist_',
    props: ['data'],
    created() {
        console.log(this.data, 3123123)
    },
    data() {
        return {
            activeName2: 'first'
        }
    }
}
</script>

<style scoped>

</style>