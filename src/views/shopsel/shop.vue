<!--  -->
<template>
  <div class="shopsome">
    <div class="gotop">
      <div class="hui" onclick="window.history.back(-1);">
        <i class="iconfont icon-jiantou3"></i>
      </div>
      <div class="shou">
        <input type="search" placeholder="搜索商品" @focus="foucu" />
        <i class="iconfont icon-sousuo1"></i>
      </div>
      <div class="text" @click="tab">
        <span class="iconfont icon-leimupinleifenleileibie"> </span>
      </div>
    </div>
    <div class="top">
      <ul @click="bbll">
        <li :class="{ color: flag }" @click="zhognhe">
          综合<i class="iconfont icon-zhankai"></i>
        </li>
        <li @click="time">新品</li>
        <li @click="xiaoliang">销量</li>
        <li @click="jiage">价格<i class="iconfont icon-zhankai"></i></li>
        <li><i class="iconfont icon-shaixuan"></i> 筛选</li>
      </ul>
    </div>
    <shop :datalist="datalist" style="margin-top=0rem" v-if="nbclass" />
    <shoptab :app="datalist" v-else />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import shop from "./shopb";
import Axios from "axios";
import shoptab from "./shoptab";
import shop from "./shopb.vue";
import { Toast } from "mint-ui";
import { Indicator } from "mint-ui";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    shoptab,
    shop,
  },
  data() {
    //这里存放数据
    return {
      datalist: [],
      oldlist: [],
      flag: true,
      nbclass: true,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    bbll() {
      this.flag = false;
    },
    foucu() {
      this.$router.push("/gosear");
    },
    time() {
      //通过实际排序
      this.datalist.sort((a, b) => {
        return b.add_time - a.add_time;
      });
    },
    zhognhe() {
      //原来的综合排序
      this.datalist = this.oldlist.concat();
    },
    xiaoliang() {
      this.datalist.sort((a, b) => {
        return b.sales_volume - a.sales_volume;
      });
    },
    jiage() {
      this.datalist.sort((a, b) => {
        return a.cost_price - b.cost_price;
      });
    },
    tab() {
      console.log(111111111111111);
      this.nbclass = !this.nbclass;
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    Indicator.open({
      text: "加载中...",
      spinnerType: "fading-circle",
    });
    console.log(this.$route.query.id == undefined);
    if (this.$route.query.id == undefined) {
      Axios.post("/api/catalog/goodslist", {
        keywords: this.$route.query.key,
        size: 20,
      }).then((reout) => {
        console.log(reout.data);
        Indicator.close();
        this.datalist = reout.data.data;
        this.oldlist = this.datalist.concat();
        if (reout.data.data.length == 0) {
          Indicator.close();
          Toast("抱歉！未查询到一条数据！");
        }
      });
    } else {
      Axios.post("/api/catalog/goodslist", {
        cat_id: this.$route.query.id,
      }).then((reout) => {
        console.log(reout.data);
        Indicator.close();
        this.datalist = reout.data.data;
        this.oldlist = this.datalist.concat();
      });
    }
    console.log(this.$route.query.key);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    Indicator.close();
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.shopsome {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
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
        font-size: 2.2rem;
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
        font-size: 2rem;
      }
    }
  }
  .top {
    width: 100%;
    height: 4rem;
    background-color: white;
    margin-bottom: -1.2rem;
    ul {
      display: flex;
      height: 100%;
      justify-content: space-around;
      align-content: center;
      li {
        height: 100%;
        line-height: 4rem;
        font-size: 1.3rem;

        i {
          font-size: 1.4rem;
        }
      }
      :hover {
        color: red;
      }
    }
  }
}
.color {
  color: red;
}
</style>