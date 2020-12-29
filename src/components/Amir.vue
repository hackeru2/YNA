<template>
<el-main>
  <div>123132amir
    <p>info : {{info}}</p>
    <el-button @click="increment">increment</el-button>
    <el-alert>{{$store.state.count}}</el-alert>
 <el-row>
  <el-col :span="8" v-for="(o, index) in info" :key="index" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="o.image" class="image">
      <div style="padding: 14px;">
        <span>{{o.title}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ o.created_at }}</time>
          <el-button type="text" class="button">{{o.desc}}</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
  

  </div>

</el-main>


</template>

<script>
import axios from '../../axios-instance'
export default {
    data(){return{      currentDate: new Date()}},
computed: {info() {return this.$store.state.products }},
    methods: {
  increment() {
    this.$store.commit('increment')
    console.log(this.$store.state.count)
  }
},
  mounted () {
       
    // axios
    //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   .then(response => (this.info = response))
  }
}
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>