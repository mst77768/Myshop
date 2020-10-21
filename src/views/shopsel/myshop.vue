<!--  -->
<template>
  <div class="mevue">
    <div class="load" v-if="flag">
      <img src="../../assets/timg.gif" alt="" />
    </div>
    <div class="topnb" :class="{ abc: !classflag }">
      <i
        class="iconfont icon-jiantou3"
        :class="{ ib: !classflag }"
        @click="goback"
      ></i>
      <div v-if="!classflag">
        <span :class="{ spannb: tabflag }" @click="tab">商品</span>
        <span @click="tab">详情</span>
        <span @click="tab">评论</span>
      </div>

      <i
        class="iconfont icon-1"
        :class="{ ib: !classflag }"
        @click="gohome"
      ></i>
    </div>
    <div class="swiper1">
      <mt-swipe :auto="4000" @change="handleChange">
        <mt-swipe-item v-for="imgs in datalist.gallery_list" :key="imgs.img_id"
          ><img :src="imgs.img_url" alt="" srcset=""
        /></mt-swipe-item>
      </mt-swipe>
    </div>
    <div id="shopbox">
      <div class="shoptext">
        <p>
          ￥<span>{{ Number(datalist.shop_price) }}</span
          >.00 &nbsp;<del>￥{{ Number(datalist.marketPrice) }}.00</del>
        </p>
        <div class="plus">
          <span
            ><img src="../../assets/vip.png" alt="" /> 高级VIP享超值优惠价￥{{
              datalist.membership_card_discount_price
            }}</span
          >
          <button>立即开通 ></button>
        </div>
        <div class="shopname">
          <span v-if="true">自营</span>
          {{ datalist.goods_name }}
        </div>
        <div class="shome">
          <span>累计销量{{ datalist.sales_volume }}</span>
          <span>库存{{ datalist.goods_number }}</span>
        </div>

        <div class="goumai">
          <div class="mai1">
            <ul>
              <li>
                <i class="iconfont icon-dkw_xiaoxi"></i>
                <div>客服</div>
              </li>
              <li>
                <i class="iconfont icon-shoucang1"></i>
                <div>收藏</div>
              </li>
              <li @click="gocard">
                <i class="iconfont icon-gouwuche1 nbbb"
                  ><span>{{ getnum }}</span>
                </i>
                <div>购物车</div>
              </li>
            </ul>
          </div>
          <div class="mai2">
            <button class="btn1" @click="shopcar(datalist)">加入购物车</button>
            <button class="btn2">立即购买</button>
          </div>
        </div>
      </div>
      <div class="fuwu">
        <div class="jifen"><span>赠送积分:</span> 77积分</div>
        <div class="fuwu">
          <span>服务:</span>正品保证七天无理由退换 闪速配送
        </div>
      </div>
      <div class="fuwu">
        <div class="jifen">
          <span>赠送积分:</span> 上海市 上海市 黄浦区
          <i class="iconfont icon-jiantou2"></i>
        </div>
        <div class="fuwu">
          <span>服务:</span>正品保证七天无理由退换 闪速配送
        </div>
      </div>
      <div class="number">
        <span>已选:</span>1个 <i class="iconfont icon-jiantou2"></i>
      </div>
      <div class="fuwu">
        <div class="jifen"><span>门店自提</span></div>
        <div class="fuwu">
          <span>网友评论圈</span
          ><i class="iconfont icon-kefu1" style="margin-right: 2.2rem"></i>
        </div>
      </div>
      <div id="jiesao" v-html="datalist.goods_desc"></div>
      <h2>——猜你喜欢——</h2>
      <div class="like">
        <div
          v-for="like in datalike"
          :key="like.goods_id"
          class="mokuai"
          @click="goshop1(like.goods_id)"
        >
          <div class="imgbox">
            <!-- <img :src="like.goods_img" alt="" /> -->
            <img v-lazy="like.goods_thumb" />
          </div>
          <div class="textbox">
            <h2>{{ like.goods_name }}</h2>
            <h3>
              ￥<span>{{ Number(like.shop_price) }}</span
              >.00
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios";
import ajax from "@/api/ajax.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      datalist: [],
      kid: "",
      flag: true,
      bady: "",
      classflag: true,
      tabflag: true,
      datalike: [],
      page: 1,
      nbflag: true,
    };
  },
  //监听属性 类似于data概念
  computed: {
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
  watch: {
    $route(to) {
      this.flag = true;
      this.datalist = [];
      this.getdata(to.query.id);
      document.documentElement.scrollTop = 0;
    },
  },
  //方法集合
  methods: {
    shopcar(data) {
      console.log(data);
      let obj = {
        goodname: data.goods_name,
        goodimg: data.goods_img,
        goods_id: data.goods_id,
        number: 1,
        many: data.cost_price,
        flag: true,
      };
      let flag = this.$store.state.shopcar.find((item) => {
        if (item.goods_id == data.goods_id) {
          item.number++;
          localStorage.setItem(
            "shopcar",
            JSON.stringify(this.$store.state.shopcar)
          );
        }
        return item.goods_id == obj.goods_id;
      });
      if (!flag) {
        this.$store.commit("addshopcar", obj);
      }
    },
    goshop1(id) {
      console.log(1111111111);
      let str = `/myshop?id=${id}`;
      this.$router.push(str);
    },
    tab() {
      this.tabflag = false;
    },
    handleChange(index) {
      console.log(index);
    },
    goback() {
      this.$router.go(-1);
    },
    gohome() {
      this.$router.push("/home/index");
      sessionStorage.setItem("a", 0);
    },
    getdata(id) {
      //获取图片的请求
      Axios.post("/api/goods/show", {
        goods_id: id,
      }).then((route) => {
        this.flag = false;
        this.datalist = route.data.data;
      });
    },
    scroptop() {
      //检测滚动条的高等集合方法
      let bady = document.body;

      // 获取滚动条的总高度

      bady.onscroll = () => {
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        var scrollHeight = bady.scrollHeight;
        var windowHeight = bady.clientHeight;
        console.log(windowHeight + "屏幕高度");
        console.log(scrollHeight + "滚动条的高度");
        if (scrollTop >= 5) {
          this.classflag = false;
          this.tabflag = true;
          //   document.documentElement.scrollTop = 300;
          console.log(scrollTop);
          // 获取可视区的高度

          if (scrollTop + windowHeight >= scrollHeight && this.nbflag == true) {
            console.log("到了l");
            this.nbflag = false;
            this.page++;
            this.getlike();
          }
        } else {
          this.classflag = true;
        }
        this.bady = bady;
      };
    },
    async getlike() {
      let data = await ajax(
        "/api/goods/goodsguess",
        {
          page: this.page,
        },
        "post"
      );
      this.datalike.push.apply(this.datalike, data.data);
      this.nbflag = true;
    },
    gocard() {
      this.$router.push("/cart");
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getdata(this.$route.query.id);
    this.scroptop();
    document.documentElement.scrollTop = 0;
    this.getlike();
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    this.bady.onscroll = null; //清除事件
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.mevue {
  width: 100%;
  height: auto;
  background-color: white;
  padding-top: 0;
  overflow: hidden;
  .load {
    position: absolute;
    z-index: 888;
    top: 30%;
    left: 30%;
    width: 15rem;
    height: 10rem;

    img {
      width: 100%;
    }
  }
  .abc {
    position: fixed !important;
    top: 0rem;
    left: 0;
    height: 4rem;
    background-color: white;
    border-bottom: 1px solid #ccc;
    .ib {
      color: #777;
      background-color: white;
    }
  }
  .topnb {
    width: 94%;
    position: relative;
    z-index: 999;
    height: 4rem;
    z-index: 999;
    display: flex;
    margin: 0px auto;
    justify-content: space-between;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    transition: all 0.4s;
    align-items: center;
    transition: all 0.5s;
    i {
      padding: 0.5rem;
      text-align: center;
      border-radius: 50%;
      //   line-height: 1rem;
      background-color: rgba(1, 1, 2, 0.4);
      transition: all 0.4s;
      font-size: 1.6rem;
      color: white;
    }
    span {
      font-size: 1.5rem;
      padding: 0 1.2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #ccc;
      margin: 1.5rem;
      &:hover {
        color: red;
        border-bottom: 1px solid red;
      }
    }
    .spannb {
      color: red;
      border-bottom: 1px solid red;
    }
  }
  .swiper1 {
    margin-top: -3.2rem;
    width: 100%;
    height: 37.5rem;
    border-radius: 0px 0px !important;
    img {
      width: 100%;
      height: 37.5rem;
    }
  }
  .shoptext {
    width: 95%;
    height: auto;
    margin: 1rem auto;
    padding: 0 1rem;
    background-color: white;
    p {
      font-size: 1.4rem;
      color: red;
      font-weight: 700;
      span {
        font-size: 2.2rem;
        font-weight: 800;
      }
      del {
        font-size: 1.2rem;
        color: #999999;
        font-weight: 600;
      }
    }
    .plus {
      width: 98%;
      margin-top: 1rem;
      height: 4rem;
      background-color: #f7f8fc;
      text-align: center;
      line-height: 4rem;
      padding: 0px 0.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      span {
        font-size: 1.4rem;
        img {
          width: 2rem;
          vertical-align: text-bottom;
        }
      }
      button {
        width: 7rem;
        height: 2.4rem;
        border-radius: 1.2rem;
        font-size: 1.2rem;
        background-color: black;
        color: #e3c49e;
        padding-left: 0.4rem;
        padding-right: 0.1rem;
      }
    }
    .shopname {
      font-size: 1.6rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      span {
        font-size: 1rem;
        padding: 0.1rem 0.8rem;
        border-radius: 1rem;
        background-color: #e3c49e;
        color: white;
      }
    }

    .shome {
      display: flex;
      margin-top: 1.5rem;
      width: 90%;
      span {
        width: 50%;
        font-size: 1.6rem;
        color: #777;
      }
    }

    .goumai {
      display: flex;
      position: fixed;
      bottom: 0rem;
      left: 0;
      width: 100%;
      height: 5rem;
      border-top: 1px solid #ccc;
      background-color: white;
      z-index: 123;
      div {
        width: 50%;
      }
      .mai1 {
        ul {
          display: flex;
          justify-content: space-around;
          height: 100%;
          align-content: center;
          padding-top: 0.8rem;

          li {
            height: 100%;
            text-align: center;
            &:hover {
              color: red;
            }
            i {
              font-size: 2rem;
            }
            span {
              position: absolute;
              transition: all 0.5s;
              animation: play 1 linear;
              right: -1.5rem;
            }
            @keyframes play {
              0% {
                top: 1rem;
                opacity: 0;
              }
              50% {
                top: -2rem;
                opacity: 1;
              }
              100% {
                top: -2rem;
                opacity: 0;
              }
            }

            div {
              width: 100%;
              font-size: 1.2rem;
            }
          }
        }
      }
      .mai2 {
        display: flex;
        button {
          height: 5rem;
          flex: 1;
        }
        .btn1 {
          background-color: red;
          color: white;
        }
        .btn2 {
          background-color: #ff976a;
          color: white;
        }
      }
    }
  }
}
#shopbox {
  width: 100%;
  height: auto;
  padding-bottom: 5.5rem;
  background-color: #f4f4f4;
}
#jiesao /deep/ img {
  display: block;
  max-width: 100%;
}
h2 {
  text-align: center;
  color: #777;
  font-weight: 600;
  background-color: white;
  padding-bottom: 1rem;
  margin-bottom: 0;
}
.like {
  width: 95%;
  height: auto;
  margin: 0rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .mokuai {
    width: 48%;
    height: 27.1rem;
    margin-top: 1rem;
    background-color: white;
    border-radius: 0.5rem;
    .imgbox {
      width: 100%;
      height: 17.8rem;
      img {
        width: 100%;
      }
    }
    .textbox {
      width: 95%;
      margin: 0 auto;
      h2 {
        font-size: 1.6rem;
        height: 3.3rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        color: black;
      }
      h3 {
        font-size: 1.2rem;
        margin-top: 1.2rem;
        text-align: center;
        color: red;
        span {
          font-size: 1.8rem;
        }
      }
    }
  }
}

.number {
  width: 95%;
  height: 4rem;
  background-color: white;
  margin-top: 1rem;

  line-height: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  font-size: 1.4rem;
  span {
    font-size: 1.5rem;
    color: #777;
  }
  i {
    position: absolute;
    right: 1.4rem;
  }
}
.fuwu {
  width: 100%;
  height: 9rem;
  background-color: white;
  margin-top: 1rem;
  margin-bottom: 1rem;
  div {
    font-size: 1.4rem;
    height: 4rem;
    margin-left: 1.2rem;
    margin-right: 1.2rem;
    display: flex;
    align-items: center;
    color: black;
    position: relative;

    i {
      position: absolute;
      right: 0;
      height: 100%;
      width: 2rem;
      text-align: center;
      line-height: 4rem;
      color: #777;
    }
    span {
      font-size: 1.5rem;
      color: #777;
    }
  }
  .jifen {
    border-bottom: 1px solid #f3f3f3;
  }
}
.nbbb {
  position: relative;
  span {
    position: absolute;
    top: -1rem;
    right: -0.4rem;
    font-size: 1.2rem;
    padding: 0.1rem 0.3rem;
    background-color: red;
    color: white;
    border-radius: 50%;
  }
  .text {
    position: absolute;
    right: 3rem;
    z-index: 999;
    width: 0.5rem;
    height: 0.5rem;
  }
}
</style>