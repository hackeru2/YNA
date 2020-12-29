<template>
  <div id="app">
    <navbar class="grad"/>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <el-main>
        <el-row :gutter="20">
            <el-col :md ="{span :12}"   :sm ="{span :24}">
  <el-card  >
              <div slot="header" class="clearfix grad">
    <h3 style="color:white;text-align:left">Add your Items Here</h3>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button> -->
  </div>
        <ShoppingList/>
        </el-card>
            </el-col>
            <el-col :md ="{span :12}"   :sm ="{span :24}">
         <EditItem v-if="$store.state.editRow.name" />

            </el-col>
        </el-row>
      
    </el-main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import ShoppingList from './components/ShoppingList'
import EditItem from './components/EditItem'

import axios from '../axios-instance'
export default {
  components: { Navbar , ShoppingList , EditItem},
  name: 'App',
    mounted () {
       axios
       .get('http://localhost/yna/public/api/products')
       .then(({data}) => this.$store.commit('setProducts', data) )

    // axios
    //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   .then(response => (this.info = response))
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
li.el-menu-item {
    background: none !important;
}
.el-card__header {
    
}
ul.el-menu-demo  , .el-card__header
 {
     padding: 15px !important;
  background-image: linear-gradient(rgba(0,229,145,1),  rgba(47,239,188,1)) !important;
}
</style>
