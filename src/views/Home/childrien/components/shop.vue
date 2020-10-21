<!-- 商品的显示组件 -->
<template>
  <div class="shomeshop1">
    <div
      class="shopitem"
      v-for="(kby, index) in shop"
      :key="index"
      @click="goshop(kby.goods_id)"
    >
      <div class="imgbox">
        <img v-lazy="kby.goods_img" alt="" />
      </div>
      <div class="text">
        <h4>{{ kby.goods_name }}</h4>
        <em style="font-size: 11.2px">¥</em
        ><span>{{ Number(kby.shop_price) }}</span>
        <em style="font-size: 11.2px" class="em">.00</em>
        <div class="botm">
          <em>自营</em>
          <span>{{ kby.sales_volume }}人已购买</span>
          <img src="../../../../assets/car.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: ["shop"],
  data() {
    //这里存放数据
    return {
      img:
        "https://x.dscmall.cn/storage/images/201809/goods_img/_P_1536532330389.jpg",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goshop(id) {
      let str = `/myshop?id=${id}`;
      console.log("编号" + id);
      this.$store.state.flag = false;
      this.$router.push(str);
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
<style lang="less" scoped>
.shomeshop1 {
  width: 95%;
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .shopitem {
    width: 49%;
    height: 28rem;
    border-radius: 10px;
    margin-top: 1rem;
    .imgbox {
      width: 100%;
      height: 17.5rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      width: 100%;
      height: 11rem;
      background-color: white;
      text-align: left;
      h4 {
        padding: 0px 0.8rem;
        text-align: left;
        font-size: 1.4rem;
        height: 3.8rem;
        line-height: 1.9rem;
        overflow: hidden;
        font-weight: 400;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        margin-bottom: 0.8rem;
      }
      em {
        margin-left: 0.8rem;
        color: red;
        font-style: normal;
        font-weight: 800;
      }
      span {
        font-size: 1.5rem;
        font-weight: 800;
        color: red;
      }
      .em {
        margin-left: 0rem;
      }
      .botm {
        width: 96%;
        height: 2rem;
        margin-top: 0.8rem;
        padding: 0 0.2rem;
        em {
          padding: 0.2rem 0.2rem;
          background-color: pink;
          font-weight: 300;
          margin-right: 0.5rem;
        }
        span {
          font-size: 1rem;
          font-weight: 400;
          color: #999999;
        }
        img {
          width: 1.5rem;
          float: right;
          margin-right: 0.4rem;
        }
      }
    }
  }
}
image[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>