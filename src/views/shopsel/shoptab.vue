<!--  -->
<template>
  <div class="shoptab">
    <div
      class="tabitem"
      v-for="kby in app"
      :key="kby.goods_id"
      @click="goshop1(kby.goods_id)"
    >
      <div class="imgbox">
        <img :src="kby.goods_img" alt="" srcset="" />
      </div>
      <div class="shoptext">
        <h4>
          {{ kby.goods_name }}
        </h4>
        <p>
          ￥<span>{{ kby.shop_price }}</span>
        </p>
        <div class="botms">
          <div>
            <span>进店</span>
            <b>{{ kby.sale }}人已买</b>
          </div>
          <i class="iconfont icon-gouwuche"></i>
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
  props: ["app"],
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
    goshop1(id) {
      console.log(1111111111);
      let str = `/myshop?id=${id}`;
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
.shoptab {
  width: 100%;
  height: auto;
  .tabitem {
    width: 95%;
    height: 9rem;
    margin: 0.8rem auto;
    padding: 0.5rem;
    background-color: white;
    .imgbox {
      width: 9rem;
      height: 9rem;
      margin-right: 1rem;
      float: left;
      img {
        width: 100%;
      }
    }
    .shoptext {
      height: 9rem;

      h4 {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        color: #333333;
        font-size: 1.4rem;
        font-weight: 400;
        margin-bottom: 0.5rem;
      }
      p {
        color: red;
        margin-bottom: 0.2rem;
        span {
          font-size: 18px;
          font-weight: 800;
        }
      }
      .botms {
        display: flex;
        height: 3rem;
        justify-content: space-between;
        span {
          padding: 0.2rem 0.5rem;
          background-color: #fef0f0;
          color: red;
          margin-right: 0.5rem;
        }
        b {
          color: #9999;
          font-weight: 500;
        }
        i {
          color: red;
        }
      }
    }
  }
}
</style>