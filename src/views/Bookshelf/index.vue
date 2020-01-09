<template>
  <div id="app">
    <Header />
    <div class="bookshelf">
      <div v-for="(item,i) in msg" :key="item.id" class="bookshelflist">
        <img
          :src="downimage"
          class="img"
          ref="down"
          style="display:block"
          v-on:click="BookshelfShowOrHide('down',i)"
        />
        <img
          :src="upimage"
          class="img"
          ref="up"
          style="display:none"
          v-on:click="BookshelfShowOrHide('up',i)"
        />
        <p>{{item.bookShelfName}}</p>
        <div style="display:none;" ref="booklist" class="booklist">
          <div v-for="arr in item.bookShelfsList" :key="arr.bookName" class="book">
                   <img :src="arr.bookImageUrl" class="bookimage" />  
                   <p>{{arr.bookName}}</p>
          </div>
          
      <div style=" clear:both; "></div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import downimage from "@/assets/down.png";
import upimage from "@/assets/up.png";

export default {
  name: "Bookshelf",
  data() {
    return {
      //引用图片
      downimage: downimage,
      upimage: upimage,
      downIcon: true,
      msg: []
    };
  },
  components: {
    Header
  },
  mounted() {
    this.axios.get("/api/getbook").then(res => {
      this.msg = res.data;
    });
  },
  methods: {
    BookshelfShowOrHide: function(parm, num) {
      if ("down" === parm) {
        this.$refs.down[num].style.display = "none";
        this.$refs.up[num].style.display = "block";
        this.$refs.booklist[num].style.display = "block";
      } else if ("up" === parm) {
        this.$refs.down[num].style.display = "block";
        this.$refs.up[num].style.display = "none";
        this.$refs.booklist[num].style.display = "none";
      }
    }
  }
};
</script>

<style scoped>
.bookshelf {
  height: auto;
  margin-top: 142px;
  background-color: #ffffff;
}
 .bookshelflist{height: auto;} 
.img {
  float: right;
  width: 20px;
  margin-right: 20px;
  margin-top: 10px;
}

.bookshelf p {
  margin-left: 10px;
  font-size: 18px;
  height: 40px;
  line-height: 40px;
}

.bookshelf .booklist {
  margin-left: 10px;
}

.bookshelf .movieimg {
  width: 100px;
}
.book {float:left;width:120px;padding:6px;list-style:none;}
.book .bookimage{display:block;width:100px;margin:0 auto;border:1px solid #cccccc;padding:2px;}
.book p {
  margin:10px 6px;
  font-size: 15px;
  height: 40px;
  line-height: 20px;
  text-align: center;
  text-overflow:ellipsis;
  overflow:hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
</style>