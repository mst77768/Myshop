<!--  -->
<template>
  <div class="swiper">
    <mt-swipe :auto="4000" @change="handleChange">
      <mt-swipe-item
        ><img
          src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978394783.jpg"
          alt=""
          srcset=""
      /></mt-swipe-item>
      <mt-swipe-item
        ><img
          src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978396430.jpg"
          alt=""
          srcset=""
      /></mt-swipe-item>
      <mt-swipe-item
        ><img
          src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978395241.jpg"
          alt=""
          srcset=""
      /></mt-swipe-item>
      <mt-swipe-item
        ><img
          src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978395260.jpg"
          alt=""
          srcset=""
      /></mt-swipe-item>
      <mt-swipe-item
        ><img
          src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978397105.jpg"
          alt=""
          srcset=""
      /></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import bus from "@/bus/bus.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleChange(index) {
      // console.log(index);
      // this.$store.commit("setindex", index);
      // console.log(this.$store.state.lunindex);
      bus.$emit("swipe", index);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" >
.swiper {
  width: 94%;
  height: 12.2rem;
  border-radius: 30px;
  clear: both;
  margin: 10px auto;
  margin-top: -3rem;
  position: relative;
  z-index: 333;

  img {
    width: 100%;
    height: 100%;
  }
}

.mint-swipe-items-wrap {
  border-radius: 10px;
  width: 100%;
  height: 12.2rem;
}

.swiper-pagination .mint-swipe-indicators {
  left: 13%;
  .mint-swipe-indicator {
    opacity: 1;
  }
}
</style>