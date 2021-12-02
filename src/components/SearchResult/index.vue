<template>
  <div class="search_result">
    <a :href="item.arcurl" v-for="item in results" :key="item.aid">
      <div class="card">
        <div class="view_img">
          <img :src="item.pic" alt="">
        </div>
        <div class="view_info">
          <p class="view_title" v-html="item.title"></p>
          <div class="view_ms">
            <p><span v-text="item.author" class="iconfont icon-UPzhu"></span></p>
            <p class="p2"><span v-text="item.play" class="iconfont icon-bofang1"></span><span v-text="item.video_review" class="iconfont icon-danmushu"></span></p>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  data () {
    return {
      id: 1,
      results: []
    }
  },
  created () {
    this.$axios.get('/x/web-interface/search/type?search_type=video&keyword=' + this.$route.query.keyword + '&order=totalrank&duration=0&tids=0&page=' + this.id)
      .then((msg) => {
        if (msg.status === 200 && msg.data.code === 0) {
          this.results.push(...msg.data.data.result)
        }
      })
      .catch((msg) => { console.log(msg.status) })
  }
}
</script>

<style scoped>
  .card{
    width: 100%;
    box-sizing: border-box;
    padding: 1.6%;
    display: flex;
  }
  .view_img{
    width: 37.4%;
    flex-shrink: 0;
  }
  .view_img img{
    width: 100%;
    border-radius: 1.0667vw;
  }
  .view_info{
    flex: 1;
    font-size: 3.2vw;
    color: #999;
    margin-left: 2.66667vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .view_title{
    color:#222;
    text-overflow: ellipsis;
    font-size: 3.733vw;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin-bottom: 2.13333vw;
  }
  .view_ms p{
    margin-bottom: 1.06667vw;
  }
  .p2 span:first-child{
    margin-right: 2.66667vw;
  }
</style>
