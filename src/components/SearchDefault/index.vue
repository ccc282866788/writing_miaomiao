<template>
  <div>
    <div class="nav_title">
      <h3>大家都在搜</h3>
      <div class="word_list">
        <span v-for="(item,index) in hotword" v-text="item.keyword" :key="index" @click="puton"></span>
      </div>
    </div>
    <div class="history_search">
      <h3>历史搜索</h3>
      <p v-for="(item,index) in history_search" :key="index" v-text="item" @click="puton" class="iconfont icon-lishi"></p>
      <p class="clear" v-show="history_search!=null" @click="clear_history">清除历史记录</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchDefault',
  data () {
    return {
      hotword: '',
      history_search: null
    }
  },
  methods: {
    puton (e) {
      this.$emit('to', e.target.innerText)
    },
    clear_history () {
      window.localStorage.removeItem('search_history')
      this.history_search = null
    }
  },
  created () {
    this.$axios.get('/main/hotword')
      .then((msg) => {
        if (msg.status === 200 && msg.data.code === 0) {
          this.hotword = msg.data.list
          this.hotword = this.hotword.slice(0, 6)
        }
      })
  },
  mounted () {
    this.history_search = JSON.parse(window.localStorage.getItem('search_history'))
  }
}
</script>

<style scoped>
.nav_title h3{
  padding: 9px 15px;
  color: #999;
  font-size: 15px;
  border-bottom: 1px solid #e6e6e6;
}
.word_list{
  display: flex;
  flex-wrap: wrap;
  padding: 0 3.2vw 3.2vw;
}
.word_list span{
  display: inline-block;
  font-size: 3.46667vw;
  height: 9.06667vw;
  line-height: 8.8vw;
  padding: 0 3.2vw;
  color: #505050;
  border: 1px solid #ccc;
  border-radius: 4.53333vw;
  margin-right: 2.66667vw;
  margin-top: 3.2vw;
}
.history_search{
  padding: 0 15px;
  overflow: hidden;
  white-space: nowrap;
}
.history_search h3{
  height: 12.26667vw;
  line-height: 12.26667vw;
  font-weight: 400;
  color: #999;
  font-size: 4vw;
}
.history_search p{
  color: #505050;
  font-size: 4vw;
  vertical-align: middle;
  line-height: 11.73333vw;
  border-bottom: 1px solid #ccc;
}
p.clear{
  text-align: center;
  border: none;
  color: #999;
}
</style>
