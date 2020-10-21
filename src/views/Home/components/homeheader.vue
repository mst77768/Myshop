<!--  -->
<template>
  <div class="header" :style="{ background: color[index] }">
    <div class="topbb" :style="{ background: color[index] }">
      <header>
        <form>
          <input
            type="search"
            placeholder="搜索商品名称"
            class="text"
            @focus="foucu"
          /><i class="iconfont icon-sousuo"></i>
          <i class="iconfont icon-home-xiaoxi"></i>
          <div>
            <img src="../../../assets/xiaoxi.png" alt="" />
          </div>
          <div class="box1"></div>
        </form>
        <div class="swiper-div">
          <ly-tab
            v-model="selectedId"
            :items="items"
            :options="options"
            @change="changeFn"
          ></ly-tab>
        </div>
        <div class="right">
          <img src="../../../assets/fenlei.png" alt="" />分类
        </div>
      </header>
    </div>
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
    return {
      color: ["#E43124", "#E43124", "#3C81FF", "#028379", "#4091FF"],
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
      cid: [0, 858, 6, 8, 3, 4, 5, 860],
      timer: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    $route(to) {
      console.log(to);
      if (to.path == "/home/index") {
        this.selectedId = 0;
      }
    },
    // index() {
    //   this.index = this.$store.state.lunindex;
    // },
  },
  //方法集合
  methods: {
    changeFn(item, index) {
      console.log(this);
      console.log(index);
      // this.selectedId = index;
      sessionStorage.setItem("a", index);
      this.$store.state.flag = true;
      if (index == 0) {
        sessionStorage.setItem("a", 0);
        this.$router.push({
          //替换路由
          path: "/home/index",
        });
      } else {
        this.$router.push({
          //替换路由
          path: "/home/ele",
          query: { key: this.cid[index] },
        });
      }
    },
    foucu() {
      this.$router.push("/gosear");
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.selectedId = Number(sessionStorage.getItem("a"));
    // this.index = this.$store.state.lunindex;
    // console.log(this.index);
    // this.timer = setInterval(() => {
    //   //开启一个定时器
    //   this.index = this.$store.state.lunindex;
    // }, 100);
    bus.$on("swipe", (data) => {
      this.index = data;
      // console.log(this.index);
    });
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    if (this.$store.state.flag) {
      sessionStorage.setItem("a", 0);
    }
    clearInterval(this.timer); //清除定时器
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" >
.box1 {
  clear: both;
}
.topbb {
  padding: 1.1rem;
  width: 95%;
  height: 9rem;
  background-color: red;
  margin: 0 auto;
  position: fixed;
  z-index: 999;
}
.header {
  height: 11rem;
  background-color: red;
  width: 100%;
  padding-bottom: 3rem;
  border-radius: 0px 0px 3rem 3rem;
  transition: all 0.5s;
  top: 0;
  left: 0;
  z-index: 2;
  form {
    width: 100%;
    height: 5rem;
    position: relative;
    line-height: 3.6rem;
    .text {
      width: 90%;
      height: 3rem;
      border-radius: 1.1rem;
      border: 1px solid #ccc;
      padding-left: 1rem;
      padding-right: 3rem;
      background-color: white;
      font-size: 1.2rem;
      float: left;
    }
    .div {
      float: right;
      height: 4.5rem;
    }
    img {
      width: 2.4rem;
      margin-left: 0.4rem;
    }

    i {
      position: absolute;
      right: 4.6rem;
      width: 2.4rem;
      height: 3rem;
      text-align: center;
      line-height: 3rem;
      top: 0;
      color: #999;
      font-size: 1.5rem;
    }
  }
  .swiper-div {
    width: 80%;
    height: 4rem;
    float: left;

    .ly-tab {
      .ly-tabbar {
        background-color: rgba(255, 255, 255, 0);
        border: 0;
        box-shadow: 0 0px 0px 0px #eee;
        .ly-tab-list {
          padding: 0;
          height: 4.4rem;
        }
        a {
          color: #fff;
          font-size: 1.4rem;
        }
      }
    }
  }
  .right {
    width: 16%;
    height: 3rem;
    float: right;
    margin-top: -0.6rem;
    color: white;
    font-size: 1.5rem;
    line-height: 5.2rem;
    img {
      width: 30%;
      margin-right: 0.2rem;
      vertical-align: middle;
    }
  }
}
</style>
