<!--  -->
<template>
  <div class="right" ref="box">
    <div class="bbl">
      <div class="bbln">
        <div class="imgbox">
          <img :src="img" alt="" srcset="" v-if="img != ''" />
        </div>
        <div class="itembox" v-for="bbq in datalist" :key="bbq.cat_id">
          <h2>{{ bbq.cat_name }}</h2>
          <div class="flexbox">
            <ul>
              <li
                v-for="bbyd in bbq.child"
                :key="bbyd.cat_id"
                @click="goshop(bbq.cat_id)"
              >
                <a href="javascript:;">
                  <img :src="bbyd.touch_icon" alt="" />
                  {{ bbyd.cat_name }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <img src="../../../../assets/timg.gif" alt="" id="img" v-if="flag" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios";
import bus from "@/bus/bus.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      datalist: [],
      img: "https://x.dscmall.cn/storage/data/touch_catads/15630384831872.jpg",
      flag: true,
      index: 0,
      nbflag: true,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    $route(to) {
      this.img = "";
      this.flag = true;
      this.datalist = [];
      this.getdata(to.query.key);
    },
  },
  //方法集合
  methods: {
    getdata(id) {
      Axios.get(`/api/catalog/list/${id}`).then((roust) => {
        this.flag = false;
        this.datalist = roust.data.data;
        this.nbflag = true;
        if (id != 858) {
          this.img = localStorage.getItem("img");
        } else {
          this.img =
            "https://x.dscmall.cn/storage/data/touch_catads/15630384831872.jpg";
        }
      });
    },
    goshop(id) {
      let str = `/shoplist?id=${id}`;
      this.$router.push(str);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getdata(858);

    this.$refs.box.scrollTop = 1;
    let that = this;
    bus.$on("index", (data) => {
      this.index = data;
    });
    this.$refs.box.onscroll = function () {
      console.log(this.scrollTop);
      //  var scrollHeight = bady.scrollHeight;
      // var windowHeight = bady.clientHeight;
      console.log("滚动条的高度" + this.scrollHeight);
      console.log("内容区的高度" + this.clientHeight);
      if (
        this.clientHeight + this.scrollTop >= this.scrollHeight &&
        that.nbflag == true
      ) {
        console.log("到底了");
        // let data = this.index;
        // console.log(that.index);
        if (that.index <= 5) {
          bus.$emit("xiu", ++that.index);
          that.nbflag = false;
        }
      } else if (this.scrollTop == 0 && that.nbflag == true) {
        if (that.index >= 1) {
          bus.$emit("xiu", --that.index);
          that.nbflag = false;
        }
      }
    };
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.right {
  width: 74%;
  height: 100%;
  overflow: scroll;
  float: left;
  .bbl {
    width: 100%;
    height: auto;
    .bbln {
      width: 92%;
      margin: 1rem auto;
      height: auto;
      .imgbox {
        width: 100%;
        height: 9.6rem;
        margin-bottom: 1.5rem;
        img {
          width: 100%;
          height: 9.6rem;
        }
      }
      .itembox {
        width: 100%;
        height: auto;
        margin-bottom: 1rem;
        h2 {
          text-align: center;
          font-size: 1.3rem;
          font-weight: 400;
          margin-bottom: 1rem;
        }
        .flexbox {
          width: 100%;
          margin-left: 0.5rem;
          height: auto;
          ul {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            li {
              width: 33.3333%;
              height: 8.2rem;
              text-align: center;
              margin-bottom: 3rem;
              a {
                width: 70%;
                display: block;
                height: 8.2rem;
                img {
                  width: 100%;
                  margin-bottom: 1rem;
                }
              }
            }
          }
        }
      }
    }
  }
}
#img {
  width: 15rem;
  position: absolute;
  top: 30rem;
  right: 8rem;
}
.right::-webkit-scrollbar {
  display: none;
}
</style>