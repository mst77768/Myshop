<!-- 头部的切换的模板页面 -->
<template>
  <div class="indexb">
    <host :data="datslist" />
    <pinpai :pinpai="pinpai" />
    <shop :shop="shop" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import host from "./components/host";
import pinpai from "./components/pinpai";
import shop from "./components/shop";
import Axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    host,
    pinpai,
    shop,
  },
  data() {
    //这里存放数据
    return {
      pinpai: [],
      datslist: [],
      shop: [],
      cid: 858,
      bady: {},
      page: 1,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    $route() {
      this.getpinpai();
      this.getshop();
      this.page = 1;
    },
  },
  //方法集合
  methods: {
    getpinpai() {
      //获取品牌的ajax请求
      Axios.get(
        `/api/visual/visual_second_category?cat_id=${this.$route.query.key}`
      ).then((roult) => {
        this.datslist = roult.data.data.category;
        this.pinpai = roult.data.data.brand;
      });
    },
    getshop() {
      //获取商品的ajax请求
      this.cid = this.$route.query.key; //拿到传回来的key参数
      Axios.post("/api/catalog/goodslist", {
        cat_id: this.cid,
      }).then((reout) => {
        this.shop = reout.data.data;
      });
    },
    scroptop() {
      //检测滚动条的高等集合方法
      let bady = document.body;
      let flag = true;
      bady.onscroll = () => {
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        // 获取可视区的高度
        var windowHeight = bady.clientHeight;
        // 获取滚动条的总高度
        var scrollHeight = bady.scrollHeight;
        if (scrollTop + windowHeight >= scrollHeight && flag == true) {
          // 把距离顶部的距离加上可视区域的高度 等于或者大于滚动条的总高度就是到达底部
          flag = false; //加一个一把锁
          this.page++; //当达到条件就修改请求的页数
          Axios.post("/api/catalog/goodslist", {
            cat_id: this.cid,
            page: this.page,
          }).then((reout) => {
            this.shop.push.apply(this.shop, reout.data.data);
            flag = true;
          });
        }
        this.bady = bady; //把这个dom对象付给这个的变量
      };
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.cid = this.$route.query.key; //拿到传回来的key参数
    this.getpinpai(); //调用这个方法
    this.getshop(); //调用这个请求方法
    // console.log(this.$route.query.key);
    this.scroptop(); //调用这个请求方法
    document.documentElement.scrollTop = 0; //当打开页面让内容显示顶部
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    this.bady.onscroll = null;
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
</style>

