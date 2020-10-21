<!--  -->
<template>
  <div class="pintuan">
    <div class="top">
      <h1>拼团专区</h1>
      <span>拼着买更实惠</span>
      <i class="iconfont icon-jiantou2"></i>
    </div>
    <div class="items">
      <ul>
        <li v-for="ko in pintuan" :key="ko.id">
          <div class="imgbox">
            <img :src="ko.goods_thumb" alt="" />
          </div>
          <div class="text">
            <p class="nbb">
              {{ ko.goods_name }}
            </p>
            <p class="ppb">
              <i>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4OTA3NTc5Ni0wZTQwLTRkMWUtYWI0Zi0wZTI0ZWYzMmU5Y2IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODg3Q0Y0NTBFMjA4MTFFQUFDMERBQzY1NjBBRTk1QTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODg3Q0Y0NEZFMjA4MTFFQUFDMERBQzY1NjBBRTk1QTkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDYxMjI3YWEtNjA5Zi00ZDA0LWFiOGQtYWJhZjZjZWYwZWI2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg5MDc1Nzk2LTBlNDAtNGQxZS1hYjRmLTBlMjRlZjMyZTljYiIvPiA8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"
                  alt="" /></i
              >￥<b>{{ Number(ko.team_price) }}</b
              >.00
            </p>
            <p>
              <del>￥{{ Number(ko.shop_price) }}</del>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: ["pintuan"],
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
<style lang="less" scoped>
.pintuan {
  width: 95%;
  height: 25rem;
  background-color: white;
  margin: 1rem auto;
  border-radius: 1rem;
  overflow: hidden;
  .top {
    display: flex;
    align-items: center;
    padding: 1rem;
    padding-left: 0rem;
    margin-left: 1rem;
    margin-right: 1rem;
    border-bottom: 1px solid #f2f2f2;
    h1 {
      margin-right: 1rem;
      vertical-align: bottom;
    }
    span {
      font-size: 1.4rem;
      color: #888888;
      margin-right: 1rem;
    }
    i {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      border: 1px solid red;
      text-align: center;
      line-height: 1.4rem;
      color: red;
      font-size: 0.5rem;
    }
  }
  .items {
    width: 100%;
    height: 20rem;
    padding-left: 1rem;
    overflow: scroll;
    margin-top: 1.5rem;
    ::-webkit-scrollbar {
      display: none;
    }
    ul {
      height: 100%;
      white-space: nowrap;
      overflow-y: hidden;
      li {
        display: inline-block;
        width: 11.5rem;
        height: 100%;
        text-align: center;
        margin-right: 0.5rem;
        .imgbox {
          width: 100%;
          height: 11rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .text {
          .nbb {
            padding: 0px 3rem;

            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            font-size: 1.5rem;
          }
          p {
            margin-top: 0.4rem;
            i {
              width: 1.8rem;
              height: 1.8rem;
              border-radius: 50%;
              color: white;
              img {
                width: 1.8rem;
                height: 1.8rem;
                vertical-align: middle;
                margin-top: -0.2rem;
              }
            }
            del {
              color: #666;
            }
          }
          .ppb {
            color: red;
            b {
              font-size: 1.6rem;
            }
          }
        }
      }
    }
  }
}
</style>
