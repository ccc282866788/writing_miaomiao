<template>
  <div class="cinema_list">
    <!-- <Loading v-if="isLoading"/> -->
    <ul>
      <li v-for="(item,index) in cinemaList" :key="index">
        <a href="">
          <div>
            <span v-text="item.ciname"></span>
            <span class="q">
              <span v-text="item.price" class="price"></span> 元起
            </span>
          </div>
          <div class="address">
            <span v-text="item.addr"></span>
            <span v-text="item.distance"></span>
          </div>
          <div class="card">
            <div v-for="(num,key) in item.tag" :key="key" :class=" key | classCard ">
              <div v-if="num==1">{{ key | formatCard }}</div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Cinemalist',
  data () {
    return {
      cinemaList: [
        {
          ciname: '北联中体国际影城',
          price: '23',
          addr: '甘井子区柳韵苑1-13号3层',
          distance: '449.5km',
          tag: {
            endorse: 1,
            allowRefund: 1,
            sell: 1,
            snack: 1
          }
        },
        {
          ciname: '北联中体国际影城',
          price: '23',
          addr: '甘井子区柳韵苑1-13号3层',
          distance: '449.5km',
          tag: {
            endorse: 1,
            allowRefund: 1,
            sell: 1,
            snack: 1
          }
        },
        {
          ciname: '北联中体国际影城',
          price: '23',
          addr: '甘井子区柳韵苑1-13号3层',
          distance: '449.5km',
          tag: {
            endorse: 1,
            allowRefund: 1,
            sell: 1,
            snack: 1
          }
        },
        {
          ciname: '北联中体国际影城',
          price: '23',
          addr: '甘井子区柳韵苑1-13号3层',
          distance: '449.5km',
          tag: {
            endorse: 1,
            allowRefund: 1,
            sell: 1,
            snack: 1
          }
        },
        {
          ciname: '北联中体国际影城',
          price: '23',
          addr: '甘井子区柳韵苑1-13号3层',
          distance: '449.5km',
          tag: {
            endorse: 1,
            allowRefund: 1,
            sell: 1,
            snack: 1
          }
        }
      ]
      // isLoading: true
    }
  },
  filters: {
    formatCard (m) {
      var card = [
        { key: 'endorse', value: '退' },
        { key: 'allowRefund', value: '改签' },
        { key: 'sell', value: '折扣卡' },
        { key: 'snack', value: '小吃' }
      ]
      for (var i = 0; i < card.length; i++) {
        if (card[i].key === m) {
          return card[i].value
        }
      }
      return ''
    },
    classCard (m) {
      var card = [
        { key: 'allowRefund', value: 'bl' },
        { key: 'endorse', value: 'bl' },
        { key: 'sell', value: 'or' },
        { key: 'snack', value: 'or' }
      ]
      for (var i = 0; i < card.length; i++) {
        if (card[i].key === m) {
          return card[i].value
        }
      }
      return ''
    }
  }
}
</script>

<style scoped>
  .cinema_list ul{ padding:20px;}
  .cinema_list li{
    border-bottom:1px solid #e6e6e6;
    margin-bottom: 20px;}
  .cinema_list div{ margin-bottom: 10px;}
  .cinema_list .q{ font-size: 11px; color:#f03d37;}
  .cinema_list .price{ font-size: 18px;}
  .cinema_list .address{ font-size: 13px; color:#666;}
  .cinema_list .address span:nth-of-type(2){ float:right; }
  .cinema_list .card{ display: flex;}
  .card>div{
    padding: 0 3px;
    height: 15px;
    line-height: 15px;
    border-radius: 2px;
    color: #f90;
    border: 1px solid #f90;
    font-size: 13px;
     margin-right: 5px;}
</style>
