<!--  -->
<template>
  <div class="miaosha">
    <div class="top">
      <img
        src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978468241.png?imageView2/2/format/webp"
        alt=""
      />
      <p v-cloak v-if="time.h != ''">
        距结束还剩
        <span>{{ time.h }}</span>
        <b>:</b>
        <span>{{ time.m }}</span>
        <b>:</b>
        <span>{{ time.s }}</span>
      </p>
    </div>
    <div class="tab">
      <div class="tabtop">
        <ul class="nbul">
          <li
            v-for="(item, index1) in datatime"
            :key="index1"
            @click="change(index1)"
            :class="index == index1 ? 'clik' : ''"
            ref="bby"
          >
            <strong>{{ item.time }}</strong
            ><br />
            <span>{{ item.zhuang }}</span>
          </li>
        </ul>
      </div>
      <div
        class="tabmain1"
        v-for="bb in 4"
        :key="bb"
        v-show="bb - 1 == index"
        ref="tabmain"
      >
        <ul ref="nb">
          <li v-for="item1 in miaosha" :key="item1.id">
            <div class="img">
              <img :src="item1.goods_thumb" alt="" />
            </div>
            <div class="text">
              <div class="shop">
                {{ item1.goods_name }}
              </div>
              <div class="many">{{ item1.sec_price_formated }}</div>
              <em>{{ item1.market_price_formated }}</em>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="pressbg" ref="nbpress">
      <div class="press" ref="press" :style="styleobj"></div>
    </div> -->
    <div class="botm">
      <a href=""> <b>查看更多秒杀商品</b><i>></i> </a>
      <!-- <a href="">{{ barW }}</a> -->
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: ["miaosha"],
  data() {
    //这里存放数据
    return {
      screenW:
        document.documentElement.clientWidth || document.body.clientWidth,
      //2、滚动内容的宽度
      scrollContentW: "",
      //3、进度条的背景宽度
      bgBarW: "",
      //4、进度条的长度
      barW: "",
      //5、进度条的起点
      startX: 0,
      //6、进度条的终点
      endX: 0,
      //7、移动的距离
      barMoveW: 0,
      timer: "",
      index: 0,
      datatime: [
        {
          time: "16:00",
          zhuang: "抢购中",
        },
        {
          time: "24:00",
          zhuang: "即将开始",
        },
        {
          time: "8:00",
          zhuang: "即将开始",
        },
        {
          time: "10:00",
          zhuang: "即将开始",
        },
      ],
      time: {
        h: "",
        m: "",
        s: "",
      },
      moveWidth: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {
    styleobj() {
      return {
        width: `${this.barW}px`,
        left: `${this.barMoveW}px`,
      };
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    change(index) {
      this.index = index;
      this.endX = this.scrollContentW;
      this.moveWidth = 0;
      this.barMoveW = 0;
      this.startX = 0;
      this.endX = 0;
    },
    touchstartFn(e) {
      //手指触碰的事件
      this.startX = e.touches[0].pageX;
    },
    touchmoveFn(e) {
      let pax = e.touches[0].pageX;
      this.moveWidth = Number(pax) - this.startX; //这个移动的距离
      this.barMoveW = -(
        (this.bgBarW / this.scrollContentW) * this.moveWidth -
        this.endX
      ); //这里是一个比例关系
      //判断边界
      if (this.barMoveW <= 0) {
        this.barMoveW = 0;
      } else if (this.barMoveW > this.bgBarW - this.barW) {
        this.barMoveW = this.bgBarW - this.barW;
      }
    },
    touchendFn() {
      this.endX = this.barMoveW;
    },
    getbarW() {
      this.barW = (this.screenW / this.scrollContentW) * this.bgBarW;
    },
    binfn() {
      this.$el.addEventListener("touchstart", this.touchstartFn);
      this.$el.addEventListener("touchmove", this.touchmoveFn);
      this.$el.addEventListener("touchend", this.touchendFn);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    let time = 5000;
    this.timer = setInterval(() => {
      this.time.h = parseInt(time / 60 / 60);
      this.time.h = this.time.h < 10 ? "0" + this.time.h : this.time.h;
      this.time.m = parseInt((time / 60) % 60);
      this.time.m = this.time.m < 10 ? "0" + this.time.m : this.time.m;
      this.time.s = parseInt(time % 60);
      this.time.s = this.time.s < 10 ? "0" + this.time.s : this.time.s;
      time--;
      if (time <= 0) {
        clearInterval(this.timer);
      }
    }, 1000);
    //获取了ul的宽度
    // for (let i = 0; i < this.$refs.nb.length; i++) {
    //   $refs.nb[i].style.s
    // }
    // this.scrollContentW = this.$refs.nb[this.index].offsetWidth; //offsetParent：获取带有定位的最近父元素
    // this.bgBarW = this.$refs.nbpress.offsetWidth;
    // this.barW = this.$refs.press.offsetWidth;
    // this.binfn();
    // this.getbarW();
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {
    this.scrollContentW = this.$refs.nb[this.index].offsetWidth; //offsetParent：获取带有定位的最近父元素
  }, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    clearInterval(this.timer);
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped >
.miaosha {
  width: 90%;
  height: 33rem;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 1rem;
  background-color: white;
  //   background-color: red;
  .top {
    display: flex;
    height: 3rem;
    align-items: center;
    img {
      width: 10rem;
    }
    p {
      margin-left: 6rem;
      font-size: 1.2rem;
      width: 70%;
      text-align: right;
      span {
        font-size: 1.3rem;
        padding: 0.4rem 0.6rem;
        background-color: red;
        color: white;
        border-radius: 0.5rem;
        text-align: center;
      }
      b {
        font-size: 1.9rem;
        margin: 0rem 0.3rem;
        color: red;
      }
    }
  }
}
.tab {
  width: 92%;
  height: 68%;

  padding: 1rem 0rem;
  margin: 1rem auto;
  .nbul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    font-size: 1.3rem;

    li {
      padding: 1rem 1rem;
      text-align: center;
      color: #ccc;
    }
  }

  .tabmain1 {
    width: 100%;
    height: 19rem;
    overflow: scroll;
    overflow-y: hidden;
    position: relative;
    margin-top: 0.5rem;
    ul {
      // width: 250%;
      height: 19rem;
      // display: block;
      white-space: nowrap;
      overflow-y: hidden;
      padding-right: 1.5rem;
      li {
        width: 10rem;
        height: 100%;
        padding: 0;
        display: inline-block;
        // float: left;
        margin-right: 1rem;
        text-align: left;
        .img {
          width: 100%;
          height: 53%;
          position: relative;
          img {
            width: 100%;
          }
        }
        .text {
          margin-top: 1rem;
          width: 100%;
          height: 55%;
          text-align: center;
          font-size: 1.1rem;
          color: black;
          .shop {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }
          .many {
            color: red;
            font-weight: 700;
            font-size: 1.4rem;
          }
          em {
            color: #ccc;
          }
        }
      }
    }
  }
}
.botm {
  text-align: center;
  margin-top: 1rem;
  a {
    color: black !important;
    font-weight: 900 !important;
    font-size: 1.6rem;
  }
}
.clik {
  color: red !important;
  font-size: 1.5rem;
  border-bottom: 1px solid red !important;
}
.miaosha ::-webkit-scrollbar {
  display: none;
}
.pressbg {
  width: 50%;
  height: 0.8rem;
  border-radius: 5px;
  margin: 1rem auto;
  background-color: #ccc;
  position: relative;
  .press {
    position: absolute;
    left: 0;
    top: 0;
    width: 3rem;
    border-radius: 5px;
    height: 100%;
    background-color: red;
  }
}
[v-cloak] {
  display: none;
}
</style>>

