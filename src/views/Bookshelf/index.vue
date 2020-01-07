<template>
  <div id="app">
      <Header />
        <div class="bookshelf">
          <img :src="downimage" class="img" v-show="downIcon" v-on:click="BookshelfShowOrHide()">
          <img :src="upimage" class="img" v-show="!downIcon" v-on:click="BookshelfShowOrHide()">
          <p>{{bookshelfNane}}</p>
        <div v-show="downIcon">aaa</div>
        </div>
  </div>
</template>
<script>

import Header from '@/components/Header';
import downimage from '@/assets/down.png';
import upimage from '@/assets/up.png';
import axios from 'axios'; 



export default {
    name : 'Bookshelf',
    data(){
        return {
      //引用图片
      downimage : downimage,
      upimage : upimage,
      downIcon: true,
      bookshelfNane:"书架二",
      msg : [],
       }
  
   },
    components : {
      Header
    },
    methods: {
      BookshelfShowOrHide: function(params) {
        this.downIcon = !this.downIcon;
        if(!this.downIcon){
      axios.get('/api/api/getbook').then((res)=>{
            msg = res;
            console(msg);
        });


                }
        }
      }
    }


</script>

<style scoped>
.bookshelf {height: 100%;margin-top: 142px;background-color: #FFFFFF;}
.img {float: right;width: 20px;margin-right: 20px;margin-top: 10px}
.bookshelf p{margin-left: 10px;font-size: 18px;height: 40px;line-height: 40px;}
</style>