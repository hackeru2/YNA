<template>
  <el-table
    :data="info"
    style="width: 100%">
    <el-table-column
      fixed
      prop="created_at"
      label="created_at"
      width="150">
    </el-table-column>
    <el-table-column
      prop="title"
      label="title"
      width="120">
    </el-table-column>
    <el-table-column
      prop="state"
      label="State"
      width="120">
    </el-table-column>
    <el-table-column
      prop="image"
      label="image"
      width="120">
    </el-table-column>
    <el-table-column
      prop="desc"
      label="desc"
      width="300">
    </el-table-column>
    
    <el-table-column
      fixed="right"
      label="Operations"
      width="120">
      <template slot-scope="scope">
        <el-button @click="handleClick" type="text" size="small">Detail</el-button>
        <el-button @click="handleEdit(scope.row)"  type="text" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    methods: {
        handleEdit(e){
            console.log(e)
        },
      handleClick() {
        console.log('click');
      }
    },
    computed: {info() {return this.$store.state.products }},
    // data() {
    //   return {
    //     tableData: [{
    //       created_at: '2016-05-03',
    //       title: 'Tom',
    //       state: 'California',
    //       image: 'Los Angeles',
    //       desc: 'No. 189, Grove St, Los Angeles',
           
    //       id: 'Home'
    //     }, {
    //       created_at: '2016-05-02',
    //       title: 'Tom',
    //       state: 'California',
    //       image: 'Los Angeles',
    //       desc: 'No. 189, Grove St, Los Angeles',
           
    //       id: 'Office'
    //     }, {
    //       created_at: '2016-05-04',
    //       title: 'Tom',
    //       state: 'California',
    //       image: 'Los Angeles',
    //       desc: 'No. 189, Grove St, Los Angeles',
           
    //       id: 'Home'
    //     }, {
    //       created_at: '2016-05-01',
    //       title: 'Tom',
    //       state: 'California',
    //       image: 'Los Angeles',
    //       desc: 'No. 189, Grove St, Los Angeles',
           
    //       id: 'Office'
    //     }]
    //   }
    // }
  }
</script>