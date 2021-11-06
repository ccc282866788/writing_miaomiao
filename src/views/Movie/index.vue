<template>
  <div id="movie">
    <Header></Header>
    <div class="content">
      <div class="movie_menu">
        <router-link to="/movie/city" tag='div' class="cityname">
          <span>北京</span><i class="iconfont icon-tabxiala"></i>
        </router-link>
        <div class="movie_switch">
          <router-link to="/movie/nowplaying" tag="div" class="switch_item">正在上映</router-link>
          <router-link to="/movie/comingsoon" tag="div" class="switch_item">即将上映</router-link>
        </div>
        <router-link to="/movie/search" tag="div" class="search">
          <i class="iconfont icon-search"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Tabbar from '@/components/Tabbav'

export default {
  name: 'Movie',
  components: {
    Header,
    Tabbar
  }
}
</script>

<style scoped>
  #movie{
    display: flex;
    flex-direction: column;
  }
  .content{
    flex: 1;
  }
  .content .movie_menu{
    height: 45px;
    width: 100%;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-aroun;
    font-size: 15px;
  }
  .cityname{
    height: 45px;
    line-height: 45px;
    margin-left: 20px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .movie_switch{
    display: flex;
    height: 45px;
    flex: 1;
    justify-content: center;
  }
  .movie_switch .switch_item{
    height: 45px;
    line-height: 45px;
    padding: 0 10px;
    margin: 0 15px;
    box-sizing: border-box;

    text-align: center;
    color: #666;
    font-weight: 700;
    overflow: hidden;
  }
  .search{
    height: 45px;
    line-height: 45px;
    color: #e54847;
    margin-right: 20px;
    box-sizing: border-box;
  }
  div.router-link-active{
    border-bottom: 2px solid #e54847;
    color: #e54847 !important;
}
</style>
