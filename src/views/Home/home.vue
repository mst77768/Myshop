<!--  -->
<template>
  <div class="home">
    <header1 />

    <router-view />
    <!-- 占位符 -->
    <botm />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import botm from "../../components/footer";

import header1 from "./components/homeheader";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    botm,
    header1,
  },
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
<style lang="less" >
.home {
  background-color: #f4f4f4;

  .indexb {
    position: relative;
    margin-top: -3rem;
    background-color: #f4f4f4;
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 5rem;
    z-index:33;
    // padding-bottom: 1rem;
    .host {
      border-radius: 10px;
      padding: 1rem;
      // background-color: red;
    }
  }
}
#hh {
  width: 100%;
  height: auto;
  margin-bottom: 5rem;
}
.claer {
  clear: both;
}
.nb {
  width: 50%;
  float: left;
  height: 5rem;
  background-color: red;
  margin-bottom: 1rem;
}
.main {
  width: 95%;
  margin: 10px auto;
  padding-bottom: 1rem;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: 0.5rem;
  margin-left: 0;

  div {
    width: 20%;
    height: 9rem;
    text-align: center;
    margin-bottom: 1rem;
    img {
      width: 6.8rem;
    }
  }
}
.box {
  width: 95%;
  height: 25rem;
  background-color: white;
  border-radius: 10px;
  border-bottom: 1px solid #ccc;
  margin: 10px auto;
  .mint-swipe-indicator {
    width: 2rem;
    height: 0.5rem;
    border-radius: 10px;
    background-color: pink;
  }
}
.box .mint-swipe-indicator.is-active {
  background: red;
}
.box2 {
  width: 95%;
  height: 5rem;
  margin: -1rem auto;
  background-color: white;
  margin-top: -1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  img {
    width: 8.5rem;
    margin-left: 1rem;
    margin-top: 0.5rem;
  }

  div {
    height: 5rem;
    overflow: hidden;
    ul {
      font-size: 1.6rem;
      margin-left: 2rem;
      font-weight: 800;
      margin-top: 0rem;
      color: #5e5e5e;
      li {
        height: 100%;
        line-height: 5rem;
      }
    }
  }
}
.box3 {
  width: 95%;
  height: 17.4rem;
  margin: 1rem auto;
  img {
    width: 100%;
    height: 17.4rem;
    margin-bottom: 1rem;
  }
}
#main {
  width: 100%;
  padding-bottom: 5rem;
}
</style>