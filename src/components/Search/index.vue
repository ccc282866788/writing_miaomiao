<template>
  <div id='search'>
    <div class="search_input">
        <div class="search_input_wrapper">
          <i class="iconfont icon-sousuo"></i>
          <input type="search" v-model="keyword" @keypress="search_submit" @input="search_default" :placeholder="hotword" ref='input'>
        </div><span @click="cancel">取消</span>
    </div>
    <router-view @to='putOn'></router-view>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      keyword: '',
      hotword: ''
    }
  },
  methods: {
    cancel () {
      this.$router.push({ name: 'nowplay' })
    },
    search_submit (e) {
      if (e.keyCode === 13) {
        if (this.keyword === '') {
          this.keyword = this.hotword
        }
        this.$router.replace({ path: '/movie/search/type', query: { keyword: encodeURI(this.keyword) } })
        if (window.localStorage.getItem('search_history') === null) {
          window.localStorage.setItem('search_history', JSON.stringify(new Array(this.keyword)))
        } else {
          const t = JSON.parse(window.localStorage.getItem('search_history'))
          const tt = t.indexOf(this.keyword)
          if (tt === -1) {
            t.unshift(this.keyword)
          } else {
            t.splice(tt, 1)
            t.unshift(this.keyword)
          }
          window.localStorage.setItem('search_history', JSON.stringify(t))
        }
      }
    },
    search_default () {
      this.$router.replace({ path: '/movie/search/default' })
    },
    putOn (msg) {
      this.keyword = msg
      this.$refs.input.focus()
    }
  },
  created () {
    this.$axios.get('/x/web-interface/search/default')
      .then((msg) => {
        if (msg.status === 200 && msg.data.code === 0) {
          this.hotword = msg.data.data.show_name
        }
      })
  }
}
</script>
<style scoped>
  #search{
    flex: 1;
  }
  .search_input{
    padding: 8px 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-items: flex-start;
    align-items: center;
    }
  .search_input_wrapper{
    padding: 0 10px;
    border: 1px solid #e6e6e6;
    border-radius: 16px;
    background-color: #fff;
    flex: 1;
    max-width: 660px;
    }
  .search_input_wrapper input{
    border: none;
    width: calc(100% - 30px);
    height: 32px;
    font-size: 14px;
    color: #333;
    padding: 3px 0;
    padding-left: 10px;
    outline: none;
    margin-left: 5px;
    margin-right: 10px;
  }
  .search_input span{
    color: #555;
    margin: 0 10px;
    font-size: 15px;
  }
</style>
