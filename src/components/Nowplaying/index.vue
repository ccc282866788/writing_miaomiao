<template>
  <div id='nowplaying'>
    <div class='nowplay' ref="Scroll">
      <Loading v-if="loading"></Loading>
      <ul v-else>
        <li v-for="(item,name) in view_item" :key=name class="video_item">
          <div class="pic_show">
            <div class="pic_img">
              <a :href="item.short_link">
                <img :src="item.pic">
                <p class="iconfont icon-bofang">&nbsp;{{item.duration|time}}</p>
              </a>
            </div>
            <div class="info_list">
              <span v-text="item.stat.view" class="iconfont icon-bofang"></span>
              <span v-text="item.stat.reply" class="iconfont icon-pinglun"></span>
              <span v-text="item.stat.favorite" class="iconfont icon-xiai"></span>
            </div>
            <div class="info_tt" v-text="item.title">
            </div>
          </div>
        </li>
        <div class="bottom" v-show="loading_show">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import BScroll from 'better-scroll'
export default {
  name: 'nowplaying',
  components: {
    Loading
  },
  data () {
    return {
      view_item: {},
      loading: true,
      id: 1,
      loading_show: false,
      pulldated: false
    }
  },
  mounted () {
    this.$axios.get('/x/web-interface/dynamic/region?rid=211&ps=20&pn=' + this.id)
      .then(
        msg => {
          if (msg.status === 200) {
            this.loading = false
            const list = msg.data.data.archives
            for (const i in list) {
              if (!Object.prototype.hasOwnProperty.call(this.view_item, 'aid' + list[i].aid)) {
                this.view_item['aid' + list[i].aid] = list[i]
              }
            }
            this.id += 1
          } else {
            console('请求出错:', msg.code)
          }
        }
      )
      .catch(() => { })
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.Scroll, {
          click: true,
          scrollY: true,
          probeType: 1
        })
      } else {
        this.scroll.refresh()
      }
      this.scroll.on('touchEnd', (pos) => {
        if (this.scroll.maxScrollY > pos.y + 20) {
          this.loading_show = true
          if (!this.finishLoad) {
            this.finishLoad = true
            this.$axios.get('/x/web-interface/dynamic/region?rid=211&ps=20&pn=' + this.id)
              .then(
                msg => {
                  if (msg.status === 200) {
                    const list = msg.data.data.archives
                    for (const i in list) {
                      if (!Object.prototype.hasOwnProperty.call(this.view_item, 'aid' + list[i].aid)) {
                        this.view_item['aid' + list[i].aid] = list[i]
                      }
                    }
                    this.loading_show = false
                  } else {
                    console('请求出错:', msg.code)
                  }
                }
              )
            this.$nextTick(() => {
              this.id += 1
              this.finishLoad = false
            })
          }
        }
      })
    })
  },
  updated: function () {
    this.scroll.refresh()
  },
  filters: {
    time (key) {
      return String(parseInt(key / 60) + ':' + parseInt(key % 60))
    }
  }
}
</script>

<style scoped>
  #nowplaying{
    flex: 1;
    overflow: hidden;
  }
  .nowplay{
    height: 100%;
    overflow: hidden;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: #eff3f4;
    position: relative;
  }
  .video_item{
    width: 180px;
    padding: 5px;
    margin: 3px;
    box-sizing: border-box;
    border-radius: 3px;
    background-color: #fdfffe;
    box-shadow: 0px 2px#888;
  }
  .pic_img{
  position: relative;
  }
  .pic_img img{
    width: 170px;
    height: 107px;
  }
  .pic_img p{
    position: absolute;
    bottom: 0px;
    z-index: 4;
    padding: 2px 4px;
    color: white;
    font-size: 10px;
    font-weight: bolder;
  }
  div.info_list{
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 12px !important;
    background-color:#eff3f4;
  }
  .info_list span{
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .info_tt{
    line-height: 20px;
    max-height: 40px;
    text-overflow: ellipsis;
    font-size: 14px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .bottom{
    width: 100%;
    height: 20px;
    text-align: center;
    position: absolute;
    bottom: -20px;
  }
  .bottom div{
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 6px;
    background-color: #fff;
    border: 1px solid #888;
    margin: 6px;
  }
  .bottom div:nth-of-type(1){
    animation: slide 1s linear 100ms infinite;
  }
  .bottom div:nth-of-type(2){
    animation: slide 1s linear 400ms infinite;
  }
  .bottom div:nth-of-type(3){
    animation: slide 1s linear 700ms infinite;
  }
  @keyframes slide{
    from{
      transform: scale(1,1);
    }
    50%{
      transform: scale(1.2,1.2);
    }
    100%{
      transform: scale(1,1);
      }
  }
</style>
