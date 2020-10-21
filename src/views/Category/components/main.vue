<!--  -->
<template>
  <div class="mainbb">
    <Top />
    <Left />
    <Right />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Top from "./top";
import Left from "../components/children/left";
import Right from "../components/children/right1";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Top,
    Left,
    Right,
  },
  data() {
    //这里存放数据
    return {
      index: 0,
      selectedId: 0,
      items: [
        {
          label: "首页",
        },
        {
          label: "家用电器",
        },
        {
          label: "男装女装",
        },
        {
          label: "鞋靴箱包",
        },
        {
          label: "手机数码",
        },
        {
          label: "电脑办公",
        },
        {
          label: "家具家访",
        },
        {
          label: "个人化妆",
        },
      ],
      options: {
        activeColor: "#fff", //设置选中的颜色
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    changeFn() {
      console.log(1);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.$store.dispatch("getdata");
  },
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
.mainbb {
  width: 100%;
  // height: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 4.4rem;
  padding-bottom: 6rem;
  overflow: hidden;
}
</style>