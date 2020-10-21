<!--  -->
<template>
  <div class="mbleft">
    <div class="left">
      <ul ref="box">
        <li
          v-for="(nbda, anb) in datalist"
          :key="nbda.cat_id"
          @click="change(anb, nbda.cat_id)"
          :class="index == anb ? 'nbbb' : ''"
        >
          <!-- <router-link :to="'/category?key=' + nbda.cat_id"> -->
          {{ nbda.cat_name }}
          <!-- </router-link> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import Axios from "axios";
import { fenlei } from "@/api/fenlei_api.js";
import bus from "@/bus/bus.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      index: 0,
      datalist: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    change(index, id) {
      this.index = index;
      bus.$emit("index", index);
      localStorage.setItem("img", this.datalist[index].touch_catads);
      console.log(this.datalist[index].touch_catads);
      this.$router.replace({
        //替换路由
        path: "/category",
        query: { key: id },
      });
      console.log(bus);
    },
    async getdata() {
      // this.$store.dispatch("getdata");
      if (this.$store.state.datalist.length == 0) {
        let data = await fenlei();
        this.datalist = data.data;
      } else {
        this.datalist = this.$store.state.datalist;
      }
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {
    bus.$on("xiu", (data) => {
      this.index = data;
      this.change(data, this.datalist[data].cat_id);
    });
  }, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）

  mounted() {
    // bus.$emit("index", 0);
    this.getdata();
    // bus.$on("xiu", (data) => {
    //   // console.log(data);
    //   this.index = data;
    //   // this.$refs.box.children[data].click();
    //   // this.change(data, this.datalist[data].cat_id);
    // });
  },
  beforeUpdate() {
    this.getdata();
  }, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.mbleft {
  width: 25%;
  height: 100%;
  border-right: 1px solid #f1f1f1;
  float: left;
  .left {
    width: 100%;
    height: 100%;
    ul {
      li {
        height: 2rem;
        margin-top: 1rem;
        text-align: center;
        line-height: 2rem;
        border-left: 3px solid white;
        color: #999;
        font-size: 1.4rem;
        margin-bottom: 2.1rem;
      }
      .nbbb {
        color: red;
        border-left: 3px solid red;
      }
    }
  }
}
</style>