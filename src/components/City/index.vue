<template>
  <div class="citySelector"><div class="city_input"><input type="text" placeholder="直接输入可搜索城市"></div>
    <div class="cityBox" >
      <ul @click="showCity" class="clearfix">
        <li v-for="(item,index) in switch_list" :data-on="wordon" :data-index="index" :class="wordon==index?'on':''" :key="index">{{item}}</li>
      </ul>
      <div class="hotCity">
        <div class="hot cityTab hide"><dl><dt>&nbsp;</dt><dd><a href="#">北京市</a><a href="#">上海市</a><a href="#">广州市</a><a href="#">深圳市</a><a href="#">南京市</a><a href="#">杭州市</a><a href="#">天津市</a><a href="#">重庆市</a><a href="#">成都市</a><a href="#">青岛市</a><a href="#">苏州市</a><a href="#">无锡市</a><a href="#">常州市</a><a href="#">温州市</a><a href="#">武汉市</a><a href="#">长沙市</a><a href="#">石家庄市</a><a href="#">南昌市</a><a href="#">三亚市</a><a href="#">合肥市</a></dd></dl></div>
        <div class="AB cityTab"><dl><dt>A</dt><dd><a href="#">阿拉善盟</a><a href="#">鞍山市</a><a href="#">安庆市</a><a href="#">安阳市</a><a href="#">阿坝藏族羌族自治州</a><a href="#">安顺市</a><a href="#">阿里地区</a><a href="#">安康市</a><a href="#">阿克苏地区</a><a href="#">阿勒泰地区</a><a href="#">阿拉尔市</a></dd></dl><dl><dt>B</dt><dd><a href="#">北京市</a><a href="#">保定市</a><a href="#">包头市</a><a href="#">巴彦淖尔市</a><a href="#">本溪市</a><a href="#">白山市</a><a href="#">白城市</a><a href="#">蚌埠市</a><a href="#">亳州市</a><a href="#">滨州市</a><a href="#">北海市</a><a href="#">百色市</a><a href="#">白沙黎族自治县</a><a href="#">保亭黎族苗族自治县</a><a href="#">巴中市</a><a href="#">毕节地区</a><a href="#">保山市</a><a href="#">宝鸡市</a><a href="#">白银市</a><a href="#">博尔塔拉蒙古自治州</a><a href="#">巴音郭楞蒙古自治州</a><a href="#">北区</a></dd></dl></div>
        <div class="CD cityTab hide"><dl><dt>C</dt><dd><a href="#">重庆市</a><a href="#">成都市</a><a href="#">常州市</a><a href="#">长沙市</a><a href="#">承德市</a><a href="#">沧州市</a><a href="#">长治市</a><a href="#">赤峰市</a><a href="#">朝阳市</a><a href="#">长春市</a><a href="#">滁州市</a><a href="#">巢湖市</a><a href="#">池州市</a><a href="#">常德市</a><a href="#">郴州市</a><a href="#">潮州市</a><a href="#">崇左市</a><a href="#">澄迈县</a><a href="#">昌江黎族自治县</a><a href="#">楚雄彝族自治州</a><a href="#">昌都地区</a><a href="#">昌吉回族自治州</a></dd></dl><dl><dt>D</dt><dd><a href="#">大同市</a><a href="#">大连市</a><a href="#">丹东市</a><a href="#">大庆市</a><a href="#">大兴安岭地区</a><a href="#">东营市</a><a href="#">德州市</a><a href="#">东莞市</a><a href="#">儋州市</a><a href="#">东方市</a><a href="#">定安县</a><a href="#">德阳市</a><a href="#">达州市</a><a href="#">大理白族自治州</a><a href="#">德宏傣族景颇族自治州</a><a href="#">迪庆藏族自治州</a><a href="#">定西市</a><a href="#">东区</a><a href="#">大埔区</a><a href="#">大堂区</a></dd></dl></div>
        <div class="EFG cityTab hide"><dl><dt>E</dt><dd><a href="#">鄂尔多斯市</a><a href="#">鄂州市</a><a href="#">恩施土家族苗族自治州</a></dd></dl><dl><dt>F</dt><dd><a href="#">抚顺市</a><a href="#">阜新市</a><a href="#">阜阳市</a><a href="#">福州市</a><a href="#">抚州市</a><a href="#">佛山市</a><a href="#">防城港市</a><a href="#">风顺堂区</a></dd></dl><dl><dt>G</dt><dd><a href="#">广州市</a><a href="#">赣州市</a><a href="#">桂林市</a><a href="#">贵港市</a><a href="#">广元市</a><a href="#">广安市</a><a href="#">甘孜藏族自治州</a><a href="#">贵阳市</a><a href="#">甘南藏族自治州</a><a href="#">固原市</a><a href="#">高雄市</a><a href="#">高雄县</a><a href="#">观塘区</a></dd></dl></div>
        <div class="H cityTab hide"><dl><dt>H</dt><dd><a href="#">杭州市</a><a href="#">合肥市</a><a href="#">邯郸市</a><a href="#">衡水市</a><a href="#">呼和浩特市</a><a href="#">呼伦贝尔市</a><a href="#">葫芦岛市</a><a href="#">哈尔滨市</a><a href="#">鹤岗市</a><a href="#">黑河市</a><a href="#">淮安市</a><a href="#">湖州市</a><a href="#">淮南市</a><a href="#">淮北市</a><a href="#">黄山市</a><a href="#">菏泽市</a><a href="#">鹤壁市</a><a href="#">黄石市</a><a href="#">黄冈市</a><a href="#">衡阳市</a><a href="#">怀化市</a><a href="#">惠州市</a><a href="#">河源市</a><a href="#">贺州市</a><a href="#">河池市</a><a href="#">海口市</a><a href="#">红河哈尼族彝族自治州</a><a href="#">汉中市</a><a href="#">海东地区</a><a href="#">海北藏族自治州</a><a href="#">黄南藏族自治州</a><a href="#">海南藏族自治州</a><a href="#">果洛藏族自治州</a><a href="#">海西蒙古族藏族自治州</a><a href="#">哈密地区</a><a href="#">和田地区</a><a href="#">花莲县</a><a href="#">黄大仙区</a><a href="#">花地玛堂区</a></dd></dl></div>
        <div class="J cityTab hide"><dl><dt>J</dt><dd><a href="#">晋城市</a><a href="#">晋中市</a><a href="#">锦州市</a><a href="#">吉林市</a><a href="#">鸡西市</a><a href="#">佳木斯市</a><a href="#">嘉兴市</a><a href="#">金华市</a><a href="#">景德镇市</a><a href="#">九江市</a><a href="#">吉安市</a><a href="#">济南市</a><a href="#">济宁市</a><a href="#">焦作市</a><a href="#">济源市</a><a href="#">荆门市</a><a href="#">荆州市</a><a href="#">江门市</a><a href="#">湛江市</a><a href="#">揭阳市</a><a href="#">嘉峪关市</a><a href="#">金昌市</a><a href="#">酒泉市</a><a href="#">基隆市</a><a href="#">嘉义市</a><a href="#">嘉义县</a><a href="#">九龙城区</a><a href="#">嘉模堂区</a></dd></dl></div>
        <div class="KL cityTab hide"><dl><dt>K</dt><dd><a href="#">开封市</a><a href="#">昆明市</a><a href="#">克拉玛依市</a><a href="#">克孜勒苏柯尔克孜自治州</a><a href="#">喀什地区</a><a href="#">葵青区</a></dd></dl><dl><dt>L</dt><dd><a href="#">廊坊市</a><a href="#">临汾市</a><a href="#">吕梁市</a><a href="#">辽阳市</a><a href="#">辽源市</a><a href="#">连云港市</a><a href="#">丽水市</a><a href="#">六安市</a><a href="#">龙岩市</a><a href="#">莱芜市</a><a href="#">临沂市</a><a href="#">聊城市</a><a href="#">洛阳市</a><a href="#">漯河市</a><a href="#">娄底市</a><a href="#">柳州市</a><a href="#">来宾市</a><a href="#">临高县</a><a href="#">乐东黎族自治县</a><a href="#">陵水黎族自治县</a><a href="#">泸州市</a><a href="#">乐山市</a><a href="#">凉山彝族自治州</a><a href="#">六盘水市</a><a href="#">丽江市</a><a href="#">临沧市</a><a href="#">拉萨市</a><a href="#">林芝地区</a><a href="#">兰州市</a><a href="#">陇南市</a><a href="#">临夏回族自治州</a><a href="#">离岛区</a></dd></dl></div>
        <div class="MNP cityTab hide"><dl><dt>M</dt><dd><a href="#">牡丹江市</a><a href="#">马鞍山市</a><a href="#">茂名市</a><a href="#">梅州市</a><a href="#">绵阳市</a><a href="#">眉山市</a><a href="#">苗栗县</a></dd></dl><dl><dt>N</dt><dd><a href="#">南京市</a><a href="#">南昌市</a><a href="#">南通市</a><a href="#">宁波市</a><a href="#">南平市</a><a href="#">宁德市</a><a href="#">南阳市</a><a href="#">南宁市</a><a href="#">南沙群岛</a><a href="#">内江市</a><a href="#">南充市</a><a href="#">怒江傈僳族自治州</a><a href="#">那曲地区</a><a href="#">南投县</a><a href="#">南区</a></dd></dl><dl><dt>P</dt><dd><a href="#">盘锦市</a><a href="#">莆田市</a><a href="#">萍乡市</a><a href="#">平顶山市</a><a href="#">濮阳市</a><a href="#">攀枝花市</a><a href="#">平凉市</a><a href="#">屏东县</a><a href="#">澎湖县</a></dd></dl></div>
        <div class="QR cityTab hide"><dl><dt>Q</dt><dd><a href="#">青岛市</a><a href="#">秦皇岛市</a><a href="#">齐齐哈尔市</a><a href="#">七台河市</a><a href="#">衢州市</a><a href="#">泉州市</a><a href="#">潜江市</a><a href="#">清远市</a><a href="#">钦州市</a><a href="#">琼海市</a><a href="#">琼中黎族苗族自治县</a><a href="#">黔西南布依族苗族自治州</a><a href="#">黔东南苗族侗族自治州</a><a href="#">黔南布依族苗族自治州</a><a href="#">曲靖市</a><a href="#">庆阳市</a><a href="#">荃湾区</a></dd></dl><dl><dt>R</dt><dd><a href="#">日照市</a><a href="#">日喀则地区</a></dd></dl></div>
        <div class="S cityTab hide"><dl><dt>S</dt><dd><a href="#">上海市</a><a href="#">深圳市</a><a href="#">苏州市</a><a href="#">石家庄市</a><a href="#">三亚市</a><a href="#">朔州市</a><a href="#">沈阳市</a><a href="#">四平市</a><a href="#">松原市</a><a href="#">双鸭山市</a><a href="#">绥化市</a><a href="#">宿迁市</a><a href="#">绍兴市</a><a href="#">宿州市</a><a href="#">三明市</a><a href="#">上饶市</a><a href="#">三门峡市</a><a href="#">商丘市</a><a href="#">十堰市</a><a href="#">随州市</a><a href="#">神农架林区</a><a href="#">邵阳市</a><a href="#">韶关市</a><a href="#">汕头市</a><a href="#">汕尾市</a><a href="#">三亚市</a><a href="#">遂宁市</a><a href="#">思茅市</a><a href="#">山南地区</a><a href="#">商洛市</a><a href="#">石嘴山市</a><a href="#">石河子市</a><a href="#">深水埗区</a><a href="#">沙田区</a><a href="#">圣安多尼堂区</a><a href="#">圣方济各堂区</a></dd></dl></div>
        <div class="T cityTab hide"><dl><dt>T</dt><dd><a href="#">天津市</a><a href="#">唐山市</a><a href="#">太原市</a><a href="#">通辽市</a><a href="#">铁岭市</a><a href="#">通化市</a><a href="#">泰州市</a><a href="#">台州市</a><a href="#">铜陵市</a><a href="#">泰安市</a><a href="#">天门市</a><a href="#">屯昌县</a><a href="#">铜仁地区</a><a href="#">铜川市</a><a href="#">天水市</a><a href="#">吐鲁番地区</a><a href="#">塔城地区</a><a href="#">图木舒克市</a><a href="#">台北市</a><a href="#">台中市</a><a href="#">台南市</a><a href="#">台北县</a><a href="#">桃园县</a><a href="#">台中县</a><a href="#">台南县</a><a href="#">台东县</a><a href="#">屯门区</a></dd></dl></div>
        <div class="W cityTab hide"><dl><dt>W</dt><dd><a href="#">无锡市</a><a href="#">温州市</a><a href="#">武汉市</a><a href="#">乌海市</a><a href="#">乌兰察布市</a><a href="#">芜湖市</a><a href="#">潍坊市</a><a href="#">威海市</a><a href="#">梧州市</a><a href="#">五指山市</a><a href="#">文昌市</a><a href="#">万宁市</a><a href="#">文山壮族苗族自治州</a><a href="#">渭南市</a><a href="#">武威市</a><a href="#">吴忠市</a><a href="#">乌鲁木齐市</a><a href="#">五家渠市</a><a href="#">湾仔区</a><a href="#">望德堂区</a></dd></dl></div>
        <div class="X cityTab hide"><dl><dt>X</dt><dd><a href="#">邢台市</a><a href="#">忻州市</a><a href="#">兴安盟</a><a href="#">锡林郭勒盟</a><a href="#">徐州市</a><a href="#">宣城市</a><a href="#">厦门市</a><a href="#">新余市</a><a href="#">新乡市</a><a href="#">许昌市</a><a href="#">信阳市</a><a href="#">襄樊市</a><a href="#">孝感市</a><a href="#">咸宁市</a><a href="#">仙桃市</a><a href="#">湘潭市</a><a href="#">湘西土家族苗族自治州</a><a href="#">西沙群岛</a><a href="#">西双版纳傣族自治州</a><a href="#">西安市</a><a href="#">咸阳市</a><a href="#">西宁市</a><a href="#">新竹市</a><a href="#">新竹县</a><a href="#">西贡区</a></dd></dl></div>
        <div class="Y cityTab hide"><dl><dt>Y</dt><dd><a href="#">阳泉市</a><a href="#">运城市</a><a href="#">营口市</a><a href="#">延边朝鲜族自治州</a><a href="#">伊春市</a><a href="#">盐城市</a><a href="#">扬州市</a><a href="#">鹰潭市</a><a href="#">宜春市</a><a href="#">烟台市</a><a href="#">宜昌市</a><a href="#">岳阳市</a><a href="#">益阳市</a><a href="#">永州市</a><a href="#">阳江市</a><a href="#">云浮市</a><a href="#">玉林市</a><a href="#">宜宾市</a><a href="#">雅安市</a><a href="#">玉溪市</a><a href="#">延安市</a><a href="#">榆林市</a><a href="#">玉树藏族自治州</a><a href="#">银川市</a><a href="#">伊犁哈萨克自治州</a><a href="#">宜兰县</a><a href="#">云林县</a><a href="#">油尖旺区</a><a href="#">元朗区</a></dd></dl></div>
        <div class="Z cityTab hide"><dl><dt>Z</dt><dd><a href="#">郑州市</a><a href="#">张家口市</a><a href="#">镇江市</a><a href="#">舟山市</a><a href="#">漳州市</a><a href="#">淄博市</a><a href="#">枣庄市</a><a href="#">周口市</a><a href="#">驻马店市</a><a href="#">株洲市</a><a href="#">张家界市</a><a href="#">珠海市</a><a href="#">肇庆市</a><a href="#">中山市</a><a href="#">中沙群岛的岛礁及其海域</a><a href="#">自贡市</a><a href="#">资阳市</a><a href="#">遵义市</a><a href="#">昭通市</a><a href="#">张掖市</a><a href="#">中卫市</a><a href="#">彰化县</a><a href="#">中西区</a></dd></dl></div></div>
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
      this.wordon = e.target.dataset.index
    }
  }
}

</script>

<style scoped>
.citySelector {
    font: 18px/1.5 tahoma,arial,\5b8b\4f53;
    background: #fff;
    padding: 10px;
    margin-bottom: 50px;
    overflow: scroll;
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
}
.cityTab{
  overflow: hidden;
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
.cityBox li{
  font-size: 20px;
  padding: 5px 8px;
  box-sizing: border-box;
  height: 30px;
  float: left;
  margin: 2px;
}
.cityBox ul {
    width: 100%;
    list-style: none;
    padding: 5px;
    border-bottom: 2px solid #DDD;
    color: #00a346;
}
</style>
