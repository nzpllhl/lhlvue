<template>
  <div class="newlistinfo">
    <!-- <h3>新闻详情页{{id}}</h3> -->
    <h3 class="title">新闻详情页</h3>
    <p class="subtitle">
      <span>发表时间：</span>
      <span>点击次数：0次</span>
    </p>
    <hr />
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$router.params.id,
      arr: []
    };
  },
  created() {
    this.gitListInfo();
  },
  methods: {
    gitListInfo() {
      // this.$http.get("").then(e => {});
    }
  }
};
</script>

<style lang="less" scoped>
.newlistinfo {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    color: red;
    margin: 15px 0;
  }
  .subtitle {
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    color: dodgerblue;
  }
  .content {
  }
}
</style>