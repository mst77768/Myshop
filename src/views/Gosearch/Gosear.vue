<!--  -->
<template>
  <div class="gosear" @keyup.13="goshop">
    <div class="gotop">
      <div class="hui" onclick="window.history.back(-1);">
        <i class="iconfont icon-jiantou3"></i>
      </div>
      <div class="shou">
        <input
          type="search"
          autofocus="autofocus"
          placeholder="搜索商品"
          v-model="shop"
        />
        <i class="iconfont icon-sousuo1"></i>
      </div>
      <div class="text" @click="goshop">
        <span> 搜索 </span>
      </div>
    </div>
    <div class="searitem">
      <div class="itemtop">
        <p>最近搜索</p>
        <div>
          <i class="iconfont icon-shanchu"></i>
        </div>
      </div>
      <ul>
        <li v-for="(key, index) in shopkey" :key="index" @click="goshop1(key)">
          <a href="javascript:;"> {{ key }}</a>
        </li>
      </ul>
      <div class="but"></div>
      <div class="itemtop">
        <p>热搜</p>
      </div>
      <ul>
        <li v-for="sear in datalis" :key="sear" @click="goshop1(sear)">
          <a href="javascript:;">{{ sear }}</a>
        </li>
      </ul>
    </div>
    <botm />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》
import botm from "../../components/footer";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    botm,
  },
  data() {
    //这里存放数据
    return {
      datalis: ["电视机", "内衣", "手机", "平板电脑"],
      shop: "",
      shopkey: ["暂无"],
      flag: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goshop() {
      let str = `/shoplist?key=${this.shop}`;
      this.$router.replace(str);
      this.$store.commit("setlike", this.shop);
    },
    goshop1(sear) {
      let str = `/shoplist?key=${sear}`;
      this.$router.replace(str);
      this.$store.commit("setlike", sear);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.shopkey = this.$store.state.like;
    if (this.shopkey.length == 0) {
      this.shopkey = ["暂无"];
    }
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.gosear {
  width: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 4.2rem;
  background-color: #f4f4f4;
  .gotop {
    width: 100%;
    height: 4.8rem;
    background-color: white;
    display: flex;
    padding: 0.2rem;
    border-bottom: 1px solid #f1f1f1;
    .hui {
      width: 10%;
      height: 100%;
      text-align: center;
      line-height: 4.8rem;
      i {
        font-size: 1.8rem;
      }
    }
    .shou {
      width: 77%;
      height: 100%;
      text-align: center;
      line-height: 4.8rem;
      position: relative;
      input {
        width: 98%;
        height: 3.3rem;
        padding-right: 3.2rem;
        border-radius: 1.5rem;
        border: 1px solid #ddd;
        text-indent: 1em;
      }
      i {
        position: absolute;
        right: 2rem;
        height: 4.8rem;
        width: 1rem;
      }
    }
    .text {
      width: 13%;
      height: 100%;
      line-height: 4.8rem;
      text-align: center;
      span {
        font-size: 1.5rem;
      }
    }
  }
  .searitem {
    width: 100%;
    height: auto;
    background-color: white;
    padding-top: 2rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    .itemtop {
      display: flex;
      margin-bottom: 1rem;
      p {
        width: 88%;
        font-size: 1.5rem;
      }
      div {
        width: 10%;
        height: 2rem;
        text-align: center;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        // width: 5.6rem;
        // height: 3rem;
        margin-right: 1rem;
        margin-bottom: 0.4rem;
        a {
          font-size: 1.3rem;
          background-color: #f0f2f5;
          padding: 0.2rem 0.8rem;
          border-radius: 0.4rem;
          color: #686868;
          display: block;
        }
      }
    }
  }
}
i :hover {
  color: red;
}
.but {
  height: 2rem;
}
</style>