<!--  -->
<template>
  <div class="footer">
    <ul>
      <router-link to="/home" tag="li">
        <div class="nav-img">
          <i
            class="iconfont icon-shouyex"
            v-if="this.$route.fullPath.includes('/home')"
            @click="change"
          ></i>
          <i class="iconfont icon-1" v-else></i>
        </div>
        首页</router-link
      >
      <router-link to="/category" tag="li">
        <div class="nav-img">
          <i
            class="iconfont icon-leimupinleifenleileibie2"
            v-if="dataA == 'Category'"
          ></i>
          <i class="iconfont icon-leimupinleifenleileibie" v-else></i>
        </div>
        分类</router-link
      >
      <router-link to="/search" tag="li">
        <div class="nav-img">
          <i class="iconfont icon-sousuo2" v-if="dataA == 'Home'"></i>
          <i class="iconfont icon-sousuo2" v-else></i>
        </div>
        发现</router-link
      >
      <router-link to="/cart" tag="li">
        <div class="nav-img">
          <i class="iconfont icon-gouwuche1" v-if="dataA == 'Cart'"></i>
          <i class="iconfont icon-gouwuche" v-else></i>
        </div>
        购物车</router-link
      >
      <router-link to="/mine" tag="li">
        <div class="nav-img">
          <i class="iconfont icon-wodedangxuan" v-if="dataA == 'Mine'"></i>
          <i class="iconfont icon-profile" v-else></i>
        </div>
        我的</router-link
      >
    </ul>
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
    return {
      dataA: "Home",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    change() {
      localStorage.setItem("a", 0);
      this.$router.push("/home");
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.dataA = this.$route.name; //拿到路由的名字
    // console.log(this.$route.fullPath.includes("/home"));
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.footer {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  right: 0;
  border-top: 1px solid #ccc;
  background-color: #ffffff;
  z-index: 999;
  ul {
    display: flex;
    height: 4.9rem;
    justify-content: center;
    align-items: center;
    li {
      width: 20%;
      text-align: center;
      i {
        font-size: 2.2rem;
      }
    }
  }
}
.router-link-active {
  color: #f20e28;
}
</style>