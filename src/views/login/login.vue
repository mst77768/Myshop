<!--  -->
<template>
  <div class="login">
    <div class="img" @click="change">
      <img src="../../assets/jianleft.png" alt="" />
    </div>
    <div class="boxb">
      <div class="text1">
        <h1>用户登录</h1>
      </div>
      <form>
        <i class="iconfont icon-wode"></i>
        <input
          type="text"
          placeholder="请输入你的用户名/手机号"
          v-model="name"
        />
      </form>
      <form class="bbq">
        <i class="iconfont icon-mima"></i>
        <input
          :type="tab"
          placeholder="请输入你的登录密码"
          v-model="password"
        />
        <!-- <i class="iconfont icon-wode"></i> -->
      </form>
      <form class="验证">
        <i class="iconfont icon-wode"></i>
        <input type="text" placeholder="请输入验证码" />
        <img
          ref="nb"
          @click="bbu"
          src="http://192.168.0.108:9531/api/v1/users/captcha"
          alt=""
        />
      </form>
      <div class="mima">
        <a href="">新用户注册</a>
        <a href="">忘记密码？</a>
      </div>
      <div class="btn" v-on:click.prevent="denglukk">
        <button>登录</button>
      </div>
      <div class="textp">
        <a href="javascript:;">
          <p @click="yanzheng">
            短信验证登录<i class="iconfont icon-jiantou1"></i>
          </p>
        </a>
      </div>
      <div class="QQ">
        <div class="textqq">使用已下登录方式</div>
        <div class="imgbox">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ2OEEwMENGRDBGNDExRTg5RDIxOTVEQURFOUVFRUJBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ2OEEwMEQwRDBGNDExRTg5RDIxOTVEQURFOUVFRUJBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDY4QTAwQ0REMEY0MTFFODlEMjE5NURBREU5RUVFQkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDY4QTAwQ0VEMEY0MTFFODlEMjE5NURBREU5RUVFQkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5K+wklAAALpElEQVR42uxdCWwU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"
            alt=""
          />
        </div>
        <div style="width=80%" v-if="!flag" id="bbt">
          <vueAppVerify @completed="completed" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios";
import { Toast } from "mint-ui";
import vueAppVerify from "vue-app-verify";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    vueAppVerify,
  },
  data() {
    //这里存放数据
    return {
      name: "",
      password: "",
      tab: "password",
      flag: true,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    yanzheng() {
      this.flag = !this.flag;
    },
    completed(data) {
      console.log(data);
    },
    bbu() {
      this.$refs.nb.src =
        "http://192.168.0.108:9531/api/v1/users/captcha?k=" +
        new Date().getTime();
    },
    change() {
      this.$router.push("/home");
    },
    denglukk() {
      console.log(this.name);
      console.log(this.password);
      if (this.name == "") {
        Toast("用户名不能为空！");
        return;
      } else if (this.password == "") {
        Toast("密码不能为空！");
        return;
      }
      Axios.post("http://192.168.0.158:3000/deng", {
        uname: this.name.trim(),
        pass: this.password.trim(),
      }).then((rout) => {
        console.log(rout.data);
        if (rout.data.msg == "恭喜你登录成功！") {
          if (!sessionStorage.getItem("token")) {
            sessionStorage.setItem("token", rout.data.token);
            this.$store.state.route = rout.data.token;
            this.$router.replace("/mine");
          }
          //   Toast(rout.data.msg);
          //   let str = rout.data.msg.toString();
          //   Toast(str);
        } else {
          let str = rout.data.msg.toString();
          Toast(str);
        }
      });
    },
  },
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
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  right: 0;
  .img {
    width: 5rem;
    height: 5rem;
    margin: 2rem 1.5rem;
    img {
      width: 50%;
      height: 60%;
    }
  }
}
.boxb {
  margin-left: 1rem;
  width: 100%;
  margin-right: 2rem;
  .text1 {
    margin-bottom: 4rem;
    h1 {
      font-size: 3rem;
      font-weight: 500;
      color: #333333;
    }
  }
  form {
    width: 95%;
    height: 3rem;
    margin-top: 2rem;
    display: flex;
    padding-bottom: 0.6rem;
    border-bottom: 1px solid #ccc;
    input {
      width: 90%;
      height: 3rem;
      font-size: 1.6rem;
      color: #888888;
      padding-left: 0.6rem;
    }
    img {
      width: 25%;
      height: 100%;
      //   background-color: black;
    }
    i {
      height: 3rem;
      line-height: 2.5rem;
      font-size: 2rem;
      text-align: center;
      margin-right: 0.6rem;
    }
  }
}
.bbq {
  display: flex;
  justify-content: space-between;
  input {
    padding-left: 0.6rem;
  }
}
.mima {
  margin-top: 1rem;
  display: flex;
  margin-right: 2rem;
  justify-content: space-between;
  a {
    color: #4b89de;
    font-size: 1.6rem;
  }
}
.btn {
  display: flex;
  margin-right: 2rem;
  align-items: center;
  margin-top: 3rem;
  button {
    background-color: red;
    height: 4.5rem;
    flex: 1;
    border-radius: 0.5rem;
    color: white;
    font-size: 1.6rem;
  }
}
.textp {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  p {
    text-align: center;
    color: red;
    font-size: 1.6rem;
    i {
      font-size: 1.6rem;
    }
  }
}
.QQ {
  margin-top: 10rem;
  text-align: center;
  .textqq {
    font-size: 1.6rem;
    color: #888888;
    margin-bottom: 2rem;
  }
  .imgbox {
    img {
      width: 5rem;
    }
  }
}
#bbt {
  width: 95%;
  margin-left: 0.5rem;
}
</style>