<template>
    <header id="header">
        <div class="top"></div>
        <div class="search">
            <input type="text" placeholder="看书" />
        </div>
        <ul>
            <router-link tag="li" to="/bookshelf">
                <p>书架</p>
            </router-link>
            <router-link tag="li" to="/bookstore">
                <p>书城</p>
            </router-link>
            <router-link tag="li" to="/discover">
                <p>发现</p>
            </router-link>
            <router-link tag="li" to="/mine">
                <p>我的</p>
            </router-link>
        </ul>
    </header>
</template>

<script>
export default {
    name : 'Header'
}
</script>

<style scoped>
#header{ width:100%; height:140px; background: white; border-top:2px #ebe8e3 solid; position: fixed; left: 0; top:0;}
.search{height: 50px;text-align:center;}
.top{height: 40px;}
.search input{height: 50px;width:96%;margin:auto;-webkit-appearance: none;
         -moz-appearance: none;
         appearance:none ;
         outline: 0;
         border:0px solid #fff;
         border-radius: 5px;
         box-shadow:0 0 5px 2px #0000001a;
         background: url("../../assets/search.jpg") no-repeat ;
         background-size: 40px;
         text-indent: 50px;
         font-size: 20px;
      }
      
#header ul p{ font-size: 18px; line-height: 40px;text-align: center;}
#header ul{ display: flex; text-align: center; height:50px; align-items:center;}
#header ul li{ flex:1; height:40px;}
#header ul li.active{ color: #f03d37;  font-size: 20px;}
#header ul li.router-link-active{  border-bottom: 2px solid rgba(0, 198, 255, 1);}
</style>
