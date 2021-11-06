<template>
  <div class="search_body">
    <div class="search_input">
      <div class="search_input_wrapper">
        <a class="search_submit">
          <i class="iconfont icon-sousuo"></i>
        </a>
        <input type="text">
        </div>
    </div>
    <div class="nav_title">
      <h3>电影/电视剧/综艺</h3>
    </div>
    <div class="film_list">
      <ul>
        <li v-for="(item,index) in movie_list" :key=index>
          <a :href="item.movic_src">
            <img :src="item.img" alt="" width="200px" height="200px">
          </a>
          <div class="movie_meta">
            <h3>无名之辈</h3>
            <p>A cool fish</p>
            <p v-text="item.meta"></p>
            <p>2021.11.02</p>
          </div>
          <div class="movie_store">8.1</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      movie_list: [
        {
          img: 'http://i1.hdslb.com/bfs/archive/964a6b1fb51dbd78ca6a67ab56fe76897291fe60.jpg',
          movic_src: 'http://i0.hdslb.com/bfs/face/c8cdd176b57f2d0348391ef0ae65cb1ac92b35f1.jpg',
          meta: '[冯小厨]在婆家的第9次生日宴，老公下厨做11道硬菜，平平淡淡才是真！'
        }, {
          img: 'http://i0.hdslb.com/bfs/archive/0b8fda7a0715e30223b52e65ce94bd6e57231d27.jpg',
          movic_src: 'http://i2.hdslb.com/bfs/face/acafe3e024816f8970ce15acb1f235fc52bac14b.jpg',
          meta: '终于等到你，颤悠的红烧肉！国宴大厨揭秘家常版做法~'
        }, {
          img: 'http://i1.hdslb.com/bfs/archive/d412ffb1dacbba42715d110cab5129a2a0edc43f.jpg',
          movic_src: 'http://i0.hdslb.com/bfs/face/7a8d14249171e09448f4ddba1e0129584257825f.jpg',
          meta: '自制锅巴鸡皮大鸡脚，生菜包饭云贵烧烤 | 宅家美味分享'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .search_body .search_input{
    padding: 8px 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
    }
.search_body .search_input_wrapper{
  padding: 0 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  line-height: 20px;
  }
.search_body .search_input_wrapper a{
  padding: 4px 0;
  }
.search_body .search_input_wrapper input{
  border: none;
  font-size: 13px;
  color: #333;
  padding: 4px 0;
  outline: none;
  margin-left: 5px;
  width:100%;
  }
.nav_title h3{
  padding: 9px 15px;
  color: #999;
  font-size: 15px;
  border-bottom: 1px solid #e6e6e6;
}
.film_list li{
  border-bottom:1px #c9c9c9 dashed;
  padding: 10px 15px;
  box-sizing:border-box;
  display: flex;
  height: 110px;
  width: 100%;
  }
.film_list .movie_meta{
  flex: 4;
  margin-left: 15px;
}
.film_list img{
  width: 85px;
  height: 100%;
}

.movie_meta h3{
  font-size: 18px;
}
.movie_meta p{
  height: 22px;
  line-height: 22px;
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.film_list .movie_store{
  color: #fc7103;
}

</style>
