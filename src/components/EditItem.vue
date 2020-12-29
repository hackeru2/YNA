<template>
      <el-card  style="max-width:800px">
              <div slot="header" class="clearfix grad">
    <h3 style="color:white;text-align:left"><span v-if="!newItem">Edit Item</span> {{formLabelAlign.name}}</h3>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button> -->
  </div>
    <el-form   :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
   <el-form-item v-if="newItem" label="Name">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="Quantity">
    <el-input v-model="formLabelAlign.price"></el-input>
  </el-form-item>
  <el-form-item label="price">
    <el-input v-model="formLabelAlign.quantity" min="0"></el-input>
  </el-form-item>
  <el-form-item label="Description">
    <el-input v-model="formLabelAlign.description"></el-input>
  </el-form-item>
</el-form>
 
<el-button type="primary" @click="saveRow">Save Row</el-button>
<el-button   @click="cancelRow">Cancel</el-button>
</el-card>
</template>

<script>
  export default {
      watch: { rowToEdit ( val ) { this.formLabelAlign = val}},
      mounted() {
            this.formLabelAlign = this.rowToEdit
      }, 
      
      computed :{
          newItem(){
              return this.formLabelAlign.name =='new Item'
          },
          rowToEdit(){
              return this.$store.state.editRow
          }
      },
      methods: {
          saveRow(){
              this.$store.commit('setEditRow' , this.formLabelAlign)
              this.$message("Row Saved!")
          },
          cancelRow(){
              this.$store.commit('setEditRow' , {})
          },
      },
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          id: 0,
          quantity: '',
          price: ''
          ,description: ''
        }
      };
    }
  }
</script>