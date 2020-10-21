<!-- 首页的页面 -->
<template>
  <div class="index">
    <swiper />
    <div id="main">
      <div class="box">
        <mt-swipe :auto="0" :showIndicators="true" :continuous="false">
          <mt-swipe-item v-for="(item, index) in 3" :key="index">
            <div class="main">
              <div v-for="(item, index) in datalis" :key="index">
                <img
                  src="https://x.dscmall.cn/storage/data/gallery_album/original_img/KhlceHTjkqz49Bzijf4HWtumIuIf1E45a7l1aOAJ.gif?imageView2/2/format/webp"
                  alt=""
                /><br />{{ item }}
              </div>
            </div>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="box2">
        <div>
          <img
            src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978466633.png"
            alt=""
          />
        </div>
        <div>
          <ul :class="{ trans: flag }" ref="ulk">
            <li v-for="listb in list" :key="listb">{{ listb }}</li>
          </ul>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div class="box3">
        <img
          src="https://x.dscmall.cn/storage/data/gallery_album/original_img/CPvH5WHHbF0EoG9XjRQbbT3knMVCeEt9DlYGQhJM.png?imageView2/2/format/webp"
          alt=""
        />
      </div>
      <miaosha :miaosha="datalist" />
      <pintuan :pintuan="pintuan" />
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import swiper from "../components/swiper";
import miaosha from "../components/miaosha";
import pintuan from "../components/pintuan";
import Axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    swiper,
    miaosha,
    pintuan,
  },
  data() {
    //这里存放数据
    return {
      ppt: "",
      flag: false,
      list: ["服务店突破2000多家", "今天挣了一个亿", "每天都在进步"],
      datalis: [
        "潮流服装",
        "潮流服装",
        "潮流服装",
        "潮流服装",
        "潮流服装",
        "潮流服装",
        "潮流服装",
        "潮流服装",
        "潮流服装",
        "潮流服装",
      ],
      pintuan: [],
      datalist: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    lunbo() {
      this.$refs.ulk.style.marginTop = "-5rem";
      this.flag = !this.flag;
      var times = setTimeout(() => {
        this.list.push(this.list[0]);
        this.list.shift();
        this.$refs.ulk.style.marginTop = "0rem";
        this.flag = !this.flag;
      }, 500);
      clearTimeout(times);
    },
    pintuan1() {
      Axios.get("/api/visual/visual_team_goods").then((route) => {
        console.log(route.data.data);
        this.pintuan = route.data.data;
      });
    },
    mst() {
      Axios.get("/api/visual/visual_seckill").then((retu) => {
        console.log(retu.data.data.seckill_list);
        this.datalist = retu.data.data.seckill_list;
      });
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.ppt = setInterval(this.lunbo, 2000);
    this.pintuan1();
    this.mst();
    this.$store.dispatch("getdata");
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    clearInterval(this.ppt);
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style>
.trans {
  transition: all 0.5s;
}
</style>