<!--  -->
<template>
  <div>
    <div class="topsearch">
      <div class="img" @click="change">
        <img src="../../../assets/jianleft.png" alt="" />
      </div>

      <div class="nesear">
        <input type="search" @focus="foucu" />
        <i class="iconfont icon-sousuo"></i>
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
    foucu() {
      this.$router.push("/gosear");
    },
    change() {
      this.$router.go(-1);
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
.topsearch {
  margin-top: 0.5rem;
  width: 100%;
  height: 4.5rem;
  align-content: center;
  padding: 0.2rem 0.5rem;
  display: flex;
  border-bottom: 1px solid #f1f1f1;
  position: relative;
  z-index: 99;
  .img {
    width: 8%;
    height: 75%;
    cursor: pointer;
    img {
      width: 90%;
      margin-top: 0.2rem;
      height: 100%;
    }
  }
  .nesear {
    width: 92%;
    height: 4.5rem;
    position: relative;
    padding: 0.2rem 0.3rem;
    input {
      width: 92%;
      height: 3.6rem;
      border-radius: 1.5rem;
      border: 1px solid #ccc;
      position: relative;
      font-size: 1.6rem;
      padding-left: 1rem;
      padding-right: 4rem;
    }
    i {
      font-size: 1.7rem;
      position: absolute;
      text-align: center;
      color: black;
      top: 1rem;
      right: 4.3rem;
    }
  }
}
</style>