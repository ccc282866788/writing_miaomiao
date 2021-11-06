<template>
  <div id=movie>
    <ul>
      <li v-for="(item,index) in view_item" :key=index>
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'nowplaying',
  data () {
    return {
      view_item: ''
    }
  },
  created () {
    this.$axios.get('api.bilibili.com/x/web-interface/dynamic/region?rid=211&pn=1&ps=10')
      .then(
        msg => { this.view_item = msg }
      )
  }
}
</script>

<style>

</style>
