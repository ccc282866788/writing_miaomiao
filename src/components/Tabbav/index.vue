<template>
  <div id="foot">
    <footer class="footer">
      <ul>
        <router-link tag='li' to="/movie">
          <i class="iconfont icon-dianying"></i>
          <p>电影</p>
        </router-link>
        <router-link tag='li' to="/cinema">
          <i class="iconfont icon-yingyuan"></i>
          <p>影院</p>
        </router-link>
        <router-link tag='li' to="/mine">
          <i class="iconfont icon-wode"></i>
          <p>我的</p>
        </router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'foot'
}
</script>

<style scoped>
  #foot{ width:100%; height: 50px; flex-shrink: 0;}
  .footer{ width:100%; border-top:2px #ebe8e3 solid; background: white; position: fixed; left: 0; bottom:0;z-index: 999;}
  .footer ul{ display: flex; text-align: center; height:48px; align-items:center;}
  .footer ul li{flex: 1;height: 40px;}
  .footer ul li.active{ color: #f03d37;}
  .footer ul li.router-link-active{ color: #f03d37;}
  .footer ul i{ font-size: 20px;}
  .footer ul p{ font-size: 12px; line-height: 18px;}
</style>
