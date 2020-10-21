<!-- 热卖的模板页面 -->
<template>
  <div class="host">
    <ul>
      <li v-for="app in data" :key="app.cat_id" @click="goshop(app.cat_id)">
        <a href="#">
          <img :src="app.touch_icon" alt="" />
          <br />
          <span>{{ app.cat_name }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: ["data"],
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
    goshop(id) {
      let str = `/shoplist?id=${id}`;
      this.$router.push(str); //跳到商品页面
      this.$store.state.flag = false;
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
.host {
  width: 90%;
  height: auto;
  margin: 0px auto;
  border-radius: 10px;
  background-color: white;

  ul {
    display: flex;
    align-items: center;
    // justify-content: center;
    flex-wrap: wrap;

    li {
      width: 20%;
      height: 8rem;
      text-align: center;
      margin-top: 1rem;
      img {
        width: 6rem;
      }
      span {
        font-size: 1.2rem;
      }
      a {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

