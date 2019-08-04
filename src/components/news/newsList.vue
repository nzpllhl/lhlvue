<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsListInfo">
          <img
            class="mui-media-object mui-pull-left"
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564861525636&di=8b386191424909eccb4abf8e977b2cd1&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181109%2F65bac2735f624cff9d327c1dcc5f7a1b.jpeg"
          />
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2019-8-4</span>
              <span>点击：0次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <!-- 要传ID 通过v-bind to:"/home.newsListIfo/+ item.id " -->
        <router-link to="/home/newsListInfo">
          <img
            class="mui-media-object mui-pull-left"
            src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1564851334&di=1de9bb4c744a9c563c735ccbf0ad3c4d&src=http://img1.ph.126.net/lKBf5mux51iWw9I32-P7JA==/6597517267888602041.jpg"
          />
          <div class="mui-media-body">
            <h1>木屋</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2019-8-4</span>
              <span>点击：0次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsListInfo">
          <img
            class="mui-media-object mui-pull-left"
            src="https://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/f636afc379310a55d0446749bc4543a98226102e.jpg"
          />
          <div class="mui-media-body">
            <h1>CBD</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2019-8-4</span>
              <span>点击：0次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get("api/getNewsList").then(result => {
        if (result.body.status === 0) {
          this.newsList = result.body.message;
        } else {
          Toast("获取新闻列表失败");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #266aff;
      // felx布局直接在需要的元素身上加
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>