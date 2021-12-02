<template>
  <div class="citySelector">
    <div class="cityScroller">
      <div class="city_input"><input type="text" placeholder="直接输入可搜索城市"></div>
      <div class="cityBox" @click="showCity">
        <span v-for="(item,index) in switch_list" :data-on="wordon" :data-index="index" :class="wordon==index?'on':''" :key="index" v-text="item"></span>
      </div>
      <div class="hotCity" @click="dikCity">
        <div class="cityTab" :class="0==wordon?'':'hide'"><dl><dd><a>北京市</a><a>上海市</a><a>广州市</a><a>深圳市</a><a>南京市</a><a>杭州市</a><a>天津市</a><a>重庆市</a><a>成都市</a><a>青岛市</a><a>苏州市</a><a>无锡市</a><a>常州市</a><a>温州市</a><a>武汉市</a><a>长沙市</a><a>石家庄市</a><a>南昌市</a><a>三亚市</a><a>合肥市</a></dd></dl></div>
        <div class="cityTab" :class="1==wordon?'':'hide'"><dl><dt>A</dt><dd><a>阿拉善盟</a><a>鞍山市</a><a>安庆市</a><a>安阳市</a><a>阿坝藏族羌族自治州</a><a>安顺市</a><a>阿里地区</a><a>安康市</a><a>阿克苏地区</a><a>阿勒泰地区</a><a>阿拉尔市</a></dd></dl><dl><dt>B</dt><dd><a>北京市</a><a>保定市</a><a>包头市</a><a>巴彦淖尔市</a><a>本溪市</a><a>白山市</a><a>白城市</a><a>蚌埠市</a><a>亳州市</a><a>滨州市</a><a>北海市</a><a>百色市</a><a>白沙黎族自治县</a><a>保亭黎族苗族自治县</a><a>巴中市</a><a>毕节地区</a><a>保山市</a><a>宝鸡市</a><a>白银市</a><a>博尔塔拉蒙古自治州</a><a>巴音郭楞蒙古自治州</a><a>北区</a></dd></dl></div>
        <div class="cityTab" :class="2==wordon?'':'hide'"><dl><dt>C</dt><dd><a>重庆市</a><a>成都市</a><a>常州市</a><a>长沙市</a><a>承德市</a><a>沧州市</a><a>长治市</a><a>赤峰市</a><a>朝阳市</a><a>长春市</a><a>滁州市</a><a>巢湖市</a><a>池州市</a><a>常德市</a><a>郴州市</a><a>潮州市</a><a>崇左市</a><a>澄迈县</a><a>昌江黎族自治县</a><a>楚雄彝族自治州</a><a>昌都地区</a><a>昌吉回族自治州</a></dd></dl><dl><dt>D</dt><dd><a>大同市</a><a>大连市</a><a>丹东市</a><a>大庆市</a><a>大兴安岭地区</a><a>东营市</a><a>德州市</a><a>东莞市</a><a>儋州市</a><a>东方市</a><a>定安县</a><a>德阳市</a><a>达州市</a><a>大理白族自治州</a><a>德宏傣族景颇族自治州</a><a>迪庆藏族自治州</a><a>定西市</a><a>东区</a><a>大埔区</a><a>大堂区</a></dd></dl></div>
        <div class="cityTab" :class="3==wordon?'':'hide'"><dl><dt>E</dt><dd><a>鄂尔多斯市</a><a>鄂州市</a><a>恩施土家族苗族自治州</a></dd></dl><dl><dt>F</dt><dd><a>抚顺市</a><a>阜新市</a><a>阜阳市</a><a>福州市</a><a>抚州市</a><a>佛山市</a><a>防城港市</a><a>风顺堂区</a></dd></dl><dl><dt>G</dt><dd><a>广州市</a><a>赣州市</a><a>桂林市</a><a>贵港市</a><a>广元市</a><a>广安市</a><a>甘孜藏族自治州</a><a>贵阳市</a><a>甘南藏族自治州</a><a>固原市</a><a>高雄市</a><a>高雄县</a><a>观塘区</a></dd></dl></div>
        <div class="cityTab" :class="4==wordon?'':'hide'"><dl><dt>H</dt><dd><a>杭州市</a><a>合肥市</a><a>邯郸市</a><a>衡水市</a><a>呼和浩特市</a><a>呼伦贝尔市</a><a>葫芦岛市</a><a>哈尔滨市</a><a>鹤岗市</a><a>黑河市</a><a>淮安市</a><a>湖州市</a><a>淮南市</a><a>淮北市</a><a>黄山市</a><a>菏泽市</a><a>鹤壁市</a><a>黄石市</a><a>黄冈市</a><a>衡阳市</a><a>怀化市</a><a>惠州市</a><a>河源市</a><a>贺州市</a><a>河池市</a><a>海口市</a><a>红河哈尼族彝族自治州</a><a>汉中市</a><a>海东地区</a><a>海北藏族自治州</a><a>黄南藏族自治州</a><a>海南藏族自治州</a><a>果洛藏族自治州</a><a>海西蒙古族藏族自治州</a><a>哈密地区</a><a>和田地区</a><a>花莲县</a><a>黄大仙区</a><a>花地玛堂区</a></dd></dl></div>
        <div class="cityTab" :class="5==wordon?'':'hide'"><dl><dt>J</dt><dd><a>晋城市</a><a>晋中市</a><a>锦州市</a><a>吉林市</a><a>鸡西市</a><a>佳木斯市</a><a>嘉兴市</a><a>金华市</a><a>景德镇市</a><a>九江市</a><a>吉安市</a><a>济南市</a><a>济宁市</a><a>焦作市</a><a>济源市</a><a>荆门市</a><a>荆州市</a><a>江门市</a><a>湛江市</a><a>揭阳市</a><a>嘉峪关市</a><a>金昌市</a><a>酒泉市</a><a>基隆市</a><a>嘉义市</a><a>嘉义县</a><a>九龙城区</a><a>嘉模堂区</a></dd></dl></div>
        <div class="cityTab" :class="6==wordon?'':'hide'"><dl><dt>K</dt><dd><a>开封市</a><a>昆明市</a><a>克拉玛依市</a><a>克孜勒苏柯尔克孜自治州</a><a>喀什地区</a><a>葵青区</a></dd></dl><dl><dt>L</dt><dd><a>廊坊市</a><a>临汾市</a><a>吕梁市</a><a>辽阳市</a><a>辽源市</a><a>连云港市</a><a>丽水市</a><a>六安市</a><a>龙岩市</a><a>莱芜市</a><a>临沂市</a><a>聊城市</a><a>洛阳市</a><a>漯河市</a><a>娄底市</a><a>柳州市</a><a>来宾市</a><a>临高县</a><a>乐东黎族自治县</a><a>陵水黎族自治县</a><a>泸州市</a><a>乐山市</a><a>凉山彝族自治州</a><a>六盘水市</a><a>丽江市</a><a>临沧市</a><a>拉萨市</a><a>林芝地区</a><a>兰州市</a><a>陇南市</a><a>临夏回族自治州</a><a>离岛区</a></dd></dl></div>
        <div class="cityTab" :class="7==wordon?'':'hide'"><dl><dt>M</dt><dd><a>牡丹江市</a><a>马鞍山市</a><a>茂名市</a><a>梅州市</a><a>绵阳市</a><a>眉山市</a><a>苗栗县</a></dd></dl><dl><dt>N</dt><dd><a>南京市</a><a>南昌市</a><a>南通市</a><a>宁波市</a><a>南平市</a><a>宁德市</a><a>南阳市</a><a>南宁市</a><a>南沙群岛</a><a>内江市</a><a>南充市</a><a>怒江傈僳族自治州</a><a>那曲地区</a><a>南投县</a><a>南区</a></dd></dl><dl><dt>P</dt><dd><a>盘锦市</a><a>莆田市</a><a>萍乡市</a><a>平顶山市</a><a>濮阳市</a><a>攀枝花市</a><a>平凉市</a><a>屏东县</a><a>澎湖县</a></dd></dl></div>
        <div class="cityTab " :class="8==wordon?'':'hide'"><dl><dt>Q</dt><dd><a>青岛市</a><a>秦皇岛市</a><a>齐齐哈尔市</a><a>七台河市</a><a>衢州市</a><a>泉州市</a><a>潜江市</a><a>清远市</a><a>钦州市</a><a>琼海市</a><a>琼中黎族苗族自治县</a><a>黔西南布依族苗族自治州</a><a>黔东南苗族侗族自治州</a><a>黔南布依族苗族自治州</a><a>曲靖市</a><a>庆阳市</a><a>荃湾区</a></dd></dl><dl><dt>R</dt><dd><a>日照市</a><a>日喀则地区</a></dd></dl></div>
        <div class="cityTab" :class="9==wordon?'':'hide'"><dl><dt>S</dt><dd><a>上海市</a><a>深圳市</a><a>苏州市</a><a>石家庄市</a><a>三亚市</a><a>朔州市</a><a>沈阳市</a><a>四平市</a><a>松原市</a><a>双鸭山市</a><a>绥化市</a><a>宿迁市</a><a>绍兴市</a><a>宿州市</a><a>三明市</a><a>上饶市</a><a>三门峡市</a><a>商丘市</a><a>十堰市</a><a>随州市</a><a>神农架林区</a><a>邵阳市</a><a>韶关市</a><a>汕头市</a><a>汕尾市</a><a>三亚市</a><a>遂宁市</a><a>思茅市</a><a>山南地区</a><a>商洛市</a><a>石嘴山市</a><a>石河子市</a><a>深水埗区</a><a>沙田区</a><a>圣安多尼堂区</a><a>圣方济各堂区</a></dd></dl></div>
        <div class="cityTab" :class="10==wordon?'':'hide'"><dl><dt>T</dt><dd><a>天津市</a><a>唐山市</a><a>太原市</a><a>通辽市</a><a>铁岭市</a><a>通化市</a><a>泰州市</a><a>台州市</a><a>铜陵市</a><a>泰安市</a><a>天门市</a><a>屯昌县</a><a>铜仁地区</a><a>铜川市</a><a>天水市</a><a>吐鲁番地区</a><a>塔城地区</a><a>图木舒克市</a><a>台北市</a><a>台中市</a><a>台南市</a><a>台北县</a><a>桃园县</a><a>台中县</a><a>台南县</a><a>台东县</a><a>屯门区</a></dd></dl></div>
        <div class="cityTab" :class="11==wordon?'':'hide'"><dl><dt>W</dt><dd><a>无锡市</a><a>温州市</a><a>武汉市</a><a>乌海市</a><a>乌兰察布市</a><a>芜湖市</a><a>潍坊市</a><a>威海市</a><a>梧州市</a><a>五指山市</a><a>文昌市</a><a>万宁市</a><a>文山壮族苗族自治州</a><a>渭南市</a><a>武威市</a><a>吴忠市</a><a>乌鲁木齐市</a><a>五家渠市</a><a>湾仔区</a><a>望德堂区</a></dd></dl></div>
        <div class="cityTab" :class="12==wordon?'':'hide'"><dl><dt>X</dt><dd><a>邢台市</a><a>忻州市</a><a>兴安盟</a><a>锡林郭勒盟</a><a>徐州市</a><a>宣城市</a><a>厦门市</a><a>新余市</a><a>新乡市</a><a>许昌市</a><a>信阳市</a><a>襄樊市</a><a>孝感市</a><a>咸宁市</a><a>仙桃市</a><a>湘潭市</a><a>湘西土家族苗族自治州</a><a>西沙群岛</a><a>西双版纳傣族自治州</a><a>西安市</a><a>咸阳市</a><a>西宁市</a><a>新竹市</a><a>新竹县</a><a>西贡区</a></dd></dl></div>
        <div class="cityTab" :class="13==wordon?'':'hide'"><dl><dt>Y</dt><dd><a>阳泉市</a><a>运城市</a><a>营口市</a><a>延边朝鲜族自治州</a><a>伊春市</a><a>盐城市</a><a>扬州市</a><a>鹰潭市</a><a>宜春市</a><a>烟台市</a><a>宜昌市</a><a>岳阳市</a><a>益阳市</a><a>永州市</a><a>阳江市</a><a>云浮市</a><a>玉林市</a><a>宜宾市</a><a>雅安市</a><a>玉溪市</a><a>延安市</a><a>榆林市</a><a>玉树藏族自治州</a><a>银川市</a><a>伊犁哈萨克自治州</a><a>宜兰县</a><a>云林县</a><a>油尖旺区</a><a>元朗区</a></dd></dl></div>
        <div class="cityTab" :class="14==wordon?'':'hide'"><dl><dt>Z</dt><dd><a>郑州市</a><a>张家口市</a><a>镇江市</a><a>舟山市</a><a>漳州市</a><a>淄博市</a><a>枣庄市</a><a>周口市</a><a>驻马店市</a><a>株洲市</a><a>张家界市</a><a>珠海市</a><a>肇庆市</a><a>中山市</a><a>中沙群岛的岛礁及其海域</a><a>自贡市</a><a>资阳市</a><a>遵义市</a><a>昭通市</a><a>张掖市</a><a>中卫市</a><a>彰化县</a><a>中西区</a></dd></dl></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'City',
  data () {
    return {
      switch_list: ['热门城市', 'AB', 'CD', 'EFG', 'H', 'J', 'KL', 'MNP', 'QR', 'S', 'T', 'W', 'X', 'Y', 'Z'],
      wordon: 1
    }
  },
  methods: {
    showCity: function (e) {
      if (e.target.nodeName === 'SPAN') {
        this.wordon = e.target.dataset.index
      }
    },
    dikCity: function (e) {
      if (e.target.nodeName === 'A') {
        this.$store.commit('CITY_INFO', { city: e.target.innerText })
        window.localStorage.setItem('city', e.target.innerText)
        this.$router.push('movie')
      }
    }
  }
}

</script>

<style scoped>
.citySelector {
    font: 18px/1.5 tahoma,arial,\5b8b\4f53;
    background: #fff;
    height: calc(100% - 146.6px);
    padding: 10px;
    box-sizing: border-box;
}
.cityScroller{
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
}
.city_input{
  padding: 0 10px;
}
.city_input input{
  width: 100%;
  height: 30px;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 0px 6px;
  box-sizing: border-box;
}
.hotCity{
  overflow: auto;
  height: 100%;
}
.hotCity::-webkit-scrollbar{
  display: none;
}
.hide{
  display: none;
}
.on{
  border-bottom: 2px solid #00a346;
}
.cityTab dl dt {
    padding-left: 3px;
    color: #FFF;
    margin-top: 1px;
    font-family: "Lucida console","consolas","courier new";
    line-height: 25px;
    font-size: 20px;
    width: 100%;
    background-color: #888;
}
.cityTab dl dd {
    margin-left: 2px;
    width: 100%;
}
.cityTab dl dd a {
    padding-left: 5px;
    min-width: 66px;
    line-height: 25px;
    display: block;
    color: #333;
    text-decoration: none;
    background-color: floralwhite;
}

.cityBox span{
  font-size: 20px;
  line-height: 38px;
  box-sizing: border-box;
  margin: 0 10px;
  flex-shrink: 0;
}
.cityBox {
  padding: 5px;
  border-bottom: 2px solid #DDD;
  color: #00a346;
  display: flex;
  overflow: auto;
}
.cityBox::-webkit-scrollbar{
  display: none;
}
</style>
