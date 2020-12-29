<template>
<div>
      <el-table @row-click="onRowClick"
    ref="multipleTable"
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    
    <el-table-column
      property="name"
      label="Name"
      width="120">
    </el-table-column>
    
  </el-table>
  <div style="margin-top: 20px">
    <!-- <el-button @click="toggleSelection([tableData[1], tableData[2]])">Toggle selection status of second and third rows</el-button> -->
    <el-button type="info" @click="addNew">+ Add New</el-button>
    <el-button @click="toggleSelection()">Clear selection</el-button>
    <el-popconfirm
    :disabled="!multipleSelection.length"
    @confirm="deleteSelected"
     confirm-button-text='OK'
  cancel-button-text='No, Thanks'
  icon="el-icon-info"
  icon-color="red"
  title="Are you sure to delete this?"
>
  <el-button slot="reference">Delete</el-button>
</el-popconfirm>
    <!-- <el-button @click="deleteSelected">Delete Selected</el-button> -->
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id:Math.random()  ,
          price: 444,
          name: 'clean',
          quantity: 'No. 189, Grove St, Los Angeles',
          description : "11111something123"
        }, {
            id:Math.random()  ,
          price: 234,
          name: 'go',
          quantity: 'No. 189, Grove St, Los Angeles',
          description : "som354ething"
        }, {
            id:Math.random()  ,
          price: 666,
          name: 'to the mall',
          quantity: 'No. 189, Grove St, Los Angeles',
          description : "someth6666ing"
        }, {
            id:Math.random()  ,
          price: 999,
          name: 'clean',
          quantity:11,
          description : "description"
        }, {
            id:Math.random()  ,
          price: 1123,
          name: 'Tom',
          quantity:66,
          description : "lorem ipsum"
        }, {
            id:Math.random()  ,
          price: 88,
          name: 'work',
          quantity:44,
          description : "something"
        }, {
            id:Math.random()  ,
          price: 998,
          name: 'sleep',
          quantity: 534,
          description : "444"
        }],
        multipleSelection: []
      }
    },
    computed:{
        multipleSelectionIDs() {
        try {
            return this.multipleSelection.map(ms => ms.id)
        } catch (error) {
            return []
        }
        }
    },
    methods: {
        addNew(){
            this.tableData.push({name:"new Item" , 
            price:"",
            id:Math.random(),
            quantity:"",
            description:"",
            })
        },
        deleteSelected() {
            if (!this.multipleSelectionIDs.length) return console.log("nothing to delete")
             this.tableData = this.tableData.filter( row => !this.multipleSelectionIDs.includes(row.id) )
               this.$store.commit("setEditRow" , {})
        },
        onRowClick(ev){
        this.$store.commit("setEditRow" , ev)
        },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>