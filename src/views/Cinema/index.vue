<template>
  <div>
    <Header title="喵喵影院"></Header>
    <div class="cinema_menu">
      <div class="city_switch">
        全城<i class="iconfont icon-tabxiala"></i>
      </div>
      <div class="brand_switch">
        品牌<i class="iconfont icon-tabxiala"></i>
      </div>
      <div class="feature_switch">
        特色<i class="iconfont icon-tabxiala"></i>
      </div>
    </div>
    <CinemaList></CinemaList>
    <Tabbav></Tabbav>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Tabbav from '@/components/Tabbav'
import CinemaList from '@/components/Cinemalist'
export default {
  name: 'Cinema',
  components: {
    Header,
    Tabbav,
    CinemaList
  }
}
</script>

<style scoped>
  .cinema_menu{
    width: 100%;
    height: 45px;
    border-bottom:1px solid #e6e6e6;
    display: flex;
    justify-content:space-around;
    align-items:center;
    background:white;}
</style>
