<template>
  <div>
    <!-- 轮播图 哪里需要哪里引入即可-->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in list" :key="item.ur">
        1
        <img :src="item.img" alt />
      </mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <!-- 改造9后 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newsList">
          <img src="../../assets/img/menu1.png" alt />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/img/menu2.png" alt />
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/img/menu3.png" alt />
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/img/menu4.png" alt />
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/img/menu5.png" alt />
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/img/menu6.png" alt />
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    //获取轮播图的数据
    getLunbotu() {
      this.$http.get("api/getlunbo").then(e => {
        console.log(e.body);
        if (e.body.status === 0) {
          this.list = e.body.messag;
        } else {
          Toast("数据获取失败");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    background: pink;
    // &:nth-child(1) {
    //   background: red;
    // }
    // &:nth-child(2) {
    //   background: pink;
    // }
    // &:nth-child(3) {
    //   background: yellow;
    // }
  }
}
.mui-grid-view.mui-grid-9 {
  background: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }
}
.mui-media-body {
  font-size: 13px;
}
.mui-table-view.mui-grid-view .mui-table-view-cell {
  border: 0;
}
</style>