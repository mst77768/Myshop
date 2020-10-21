<!-- 品牌显示的组件 -->
<template>
  <div class="pinpai">
    <p>品牌精选</p>
    <ul>
      <li v-for="ky1 in pinpai" :key="ky1.brand_id">
        <img :src="ky1.brand_logo" alt="" />
        <span>{{ ky1.brand_name }}</span>
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
  props: ["pinpai"],
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
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
.pinpai {
  width: 90%;
  margin: 1rem auto;
  padding: 1rem;
  padding-top: 2rem;
  background-color: white;
  border-radius: 1rem;
  p {
    text-align: left;
    font-size: 1.6rem;
    padding-left: 1rem;
    margin-bottom: 2rem;
  }
  ul {
    width: 100%;

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    li {
      width: 25%;
      height: 7.1rem;
      img {
        width: 100%;
        height: 4rem;
      }
    }
  }
}
</style>