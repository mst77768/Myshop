<!--  -->
<template>
  <div class="guowuche">
    <div class="main">
      <div class="top">
        <div class="left">
          <i class="iconfont icon-dingwei"></i>
          <span>上海市&nbsp;上海市&nbsp;黄埔区</span>
        </div>
        <div class="right">编辑商品</div>
      </div>
      <section v-for="(item, key) in datalist" :key="key">
        <!-- <div class="shoptop">
          <input
            type="checkbox"
            name=""
            v-model="flag"
            v-if="!flag"
            class="chek"
          />
          <img src="../../assets/多选框.png" alt="" v-else @click="change()" />
          <div>
            普陀区 - 万卓有限公司 <i class="iconfont icon-jiantou2"></i>
          </div>
        </div> -->
        <div class="shopbody">
          <div class="left" @click="klot(key)">
            <img src="../../assets/多选框.png" alt="" v-if="item.flag" />
            <input type="checkbox" v-else />
          </div>

          <div class="shopitem">
            <div class="shop">
              <div class="imgbox">
                <img :src="item.goodimg" alt="" />
              </div>
              <div class="shoptext">
                <a href="">
                  {{ item.goodname }}
                </a>
                <div class="fonts">
                  ￥<span>{{ item.many }}</span>
                </div>
                <div class="right">
                  <div class="bol" @click="jian(key)">-</div>
                  <input
                    type="number"
                    ref="val"
                    :value="item.number"
                    @input="changenum(key)"
                  />
                  <div class="bot" @click="jia(key)">+</div>
                  <i class="iconfont icon-shoucang1"></i>
                  <i class="iconfont icon-shanchu" @click="del(key)"></i>
                </div>
              </div>
            </div>
            <div class="botm">
              <span>支持<a href="">门店自提</a>服务</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="cartFooter">
      <div class="checkAll">
        <i class="iconfont icon-danxuankuang" v-if="!slecetall"></i>
        <i
          class="iconfont icon-danxuankuangxuanzhong"
          v-else
          style="color: red"
        ></i>
        <span @click="all">全选</span>
      </div>
      <div class="priceAll">
        合计:
        <span style="color: red; font-size: 1.6rem">{{ getmany }}.00</span>
      </div>
      <div class="gobuy">去结算({{ getnum }})</div>
    </div>
    <botm />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import botm from "../../components/footer";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    botm,
  },
  data() {
    //这里存放数据
    return {
      flag: false,
      datalist: [],
      selectall: true,
    };
  },
  //监听属性 类似于data概念
  computed: {
    slecetall() {
      return this.$store.state.selectall;
    },
    getmany() {
      //获取总价
      let many = 0;
      this.$store.state.shopcar.forEach((element) => {
        if (element.flag == true) {
          many += parseFloat(element.many);
        }
      });
      return many;
    },
    getnum() {
      let cout = 0;
      this.$store.state.shopcar.forEach((element) => {
        if (element.flag == true) {
          cout += element.number;
        }
      });
      return cout;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    change() {
      this.flag = !this.flag;
    },
    jia(index) {
      this.$store.commit("jia", index);
    },
    jian(index) {
      this.$store.commit("jian", index);
    },
    changenum(index) {
      console.log(this.$refs.val[index].value);
      let obj = {
        index: index,
        num: this.$refs.val[index].value,
      };
      this.$store.commit("change", obj);
    },
    klot(index) {
      //改变是否选中的
      this.$store.commit("klot", index);
    },
    all() {
      this.$store.commit("all");
    },
    del(index) {
      this.$store.commit("del", index);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.datalist = this.$store.state.shopcar;

    console.log(this.datalist);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.guowuche {
  width: 100%;
  padding-bottom: 4.4rem;
  background-color: #f4f4f4;
  height: auto;
  .main {
    width: 95%;
    margin: 0rem auto;
    padding-top: 1rem;
    height: auto;
    background-color: #f4f4f4;
    .top {
      width: 100%;
      height: 3rem;
      display: flex;
      justify-content: space-between;
      font-size: 1.4rem;
      margin-bottom: 2rem;
      .left {
        white-space: nowrap;
        color: #777777;
      }
      .right {
        color: red;
      }
    }
    section {
      width: 100%;
      height: auto;
      margin-bottom: 1rem;
      .shoptop {
        width: 100%;
        text-align: left;
        display: flex;
        height: 2.5rem;
        img {
          width: 2rem;
        }
        .chek {
          width: 1.6rem;
          height: 1.6rem;
        }
        div {
          width: 80%;
          margin-top: -0.2rem;
          margin-left: 1.5rem;
          font-size: 1.5rem;
          height: 2.5rem;
          font-weight: 800;
          text-align: left;
          color: black;
          i {
            font-size: 1.4rem;
            font-weight: 500;
          }
        }
      }
      .shopbody {
        width: 100%;
        height: auto;
        display: flex;
        // align-content: center;
        .left {
          width: 3.5rem;
          height: 100%;
          line-height: 4rem;
        }
        img {
          width: 2rem;
        }
        align-items: center;
        .shopitem {
          width: 90%;
          height: auto;
          margin-left: 2rem;
          background-color: #ffffff;
          .shop {
            width: 90%;
            padding: 1rem;
            height: 7.5rem;
            margin-bottom: 0;
            display: flex;
            .imgbox {
              width: 7rem;
              height: 7rem;
              img {
                width: 100%;
              }
            }
            .shoptext {
              width: 77%;
              height: 40%;
              margin-left: 1rem;
              a {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                line-height: 1.8rem;
              }
              .fonts {
                width: 40%;
                height: 3rem;
                margin-top: 0.5rem;
                font-size: 1rem;
                color: red;
                font-weight: 800;
                text-align: left;
                float: left;
                span {
                  font-size: 1.4rem;
                }
              }
              .right {
                float: right;
                width: 50%;
                line-height: 2.5rem;
                height: 100%;
                display: flex;
                margin-top: 0.5rem;
                div {
                  width: 2rem;
                  height: 2rem;
                  font-size: 1.4rem;
                  border: 1px solid#eee;
                  border-radius: 0.5rem 0 0 0.5rem;
                  line-height: 2rem;
                }
                .bot {
                  border-radius: 0 0.5rem 0.5rem 0;
                }

                input {
                  width: 2.5rem;
                  height: 2rem;
                  border: 1px solid#eee;
                  font-size: 1.4rem;
                  text-align: center;
                }
                i {
                  margin-left: 0.5rem;
                }
              }
            }
          }
          .botm {
            width: 100%;
            height: 3.6rem;
            margin-bottom: 0;
            border-top: 1px solid #f1f1f1;
            line-height: 3.6rem;
            text-align: left;
            span {
              margin-left: 1rem;
              a {
                color: red;
              }
            }
          }
        }
      }
    }
  }
}
.cartFooter {
  position: fixed;
  height: 4.4rem;
  bottom: 4.9rem;
  width: 100%;
  background-color: white;
  border-right: 10px solid #fff;
  border-left: 10px solid #fff;
  box-sizing: border-box;
  border-top: 1px solid #efefef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  .gobuy {
    width: 30%;
    text-align: center;
    color: #fff;
    background-color: #f55;
    height: 4.4rem;
    line-height: 4.4rem;
    font-size: 1.4rem;
  }
}
</style>