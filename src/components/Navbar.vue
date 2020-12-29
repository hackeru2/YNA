<template>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  text-color="#fff"
  active-text-color="#fff">
  <el-menu-item index="1" style="font-size:40px;border-bottom:0;font-weight:900">ShoppingList</el-menu-item>
  <!-- background-color="#545c64" -->
  <!-- <el-submenu index="2">
    <template slot="title">Workspace</template>
    <el-menu-item index="2-1">item one</el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
    <el-menu-item index="2-3">item three</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">item four</template>
      <el-menu-item index="2-4-1">item one</el-menu-item>
      <el-menu-item index="2-4-2">item two</el-menu-item>
      <el-menu-item index="2-4-3">item three</el-menu-item>
    </el-submenu>
  </el-submenu> -->
  <!-- <el-menu-item index="3" disabled>Info</el-menu-item>
  <el-menu-item index="4"> <router-link to="amir" >Orders</router-link> </el-menu-item>
    <el-menu-item index="5" style="float:right">
        <a href="https://www.ele.me" target="_blank"> 
    <el-badge :value="100" :max="10" class="item">
    <el-button type="text" ><i class="el-icon-shopping-cart-full font-size-30
"></i>
</el-button>
    </el-badge>
</a></el-menu-item> -->
</el-menu>
 
</template>
    

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
.font-size-30 {
    font-size: 30px
}
thead {
    display: none;
}
</style>