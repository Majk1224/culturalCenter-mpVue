<template>
  <div class="page">
    <movable-area scale-area class="scale-box">
      <movable-view
        class="zuowei-bo"
        direction="horizontal"
        :scale="scaleFlag"
        scale-max="2"
        scale-min="1"
        :scale-value="scaleValue"
        bindscale="scaleEvent"
        bindchange="move"
        out-of-bounds
        animation
        friction="1"
      >
        <div class="left">left</div>
        <div class="center">center</div>
        <div class="right">right</div>
      </movable-view>
    </movable-area>
  </div>
</template>

<script>
import "./demo.scss";
export default {
  data() {
    return {
      leftX: 35,
      selectList: [],
      scaleValue: 1,
      chooseFlag: false,
      price: null,
      totalPrice: null,
      total: [],
      scaleFlag: true,
      flag: false,
      scaleArr: [],
      height: 0,
      greenPrice: [
        [
          { num: 29 },
          { num: 27 },
          { num: 25 },
          { num: 23 },
          { num: 21 },
          { num: 19 },
          { num: 17 },
          { num: 15 },
          { num: 13 },
          { num: 11 },
          { num: 9 },
          { num: 7 },
          { num: 5 },
          { num: 3 },
          { num: 1 },
          { num: 2 },
          { num: 4 },
          { num: 6 },
          { num: 8 },
          { num: 10 },
          { num: 12 },
          { num: 14 },
          { num: 16 },
          { num: 18 },
          { num: 20 },
          { num: 22 },
          { num: 24 },
          { num: 26 },
          { num: 28 },
        ],
        [
          { num: 29 },
          { num: 27 },
          { num: 25 },
          { num: 23 },
          { num: 21 },
          { num: 19 },
          { num: 17 },
          { num: 15 },
          { num: 13 },
          { num: 11 },
          { num: 9 },
          { num: 7 },
          { num: 5 },
          { num: 3 },
          { num: 1 },
          { num: 2 },
          { num: 4 },
          { num: 6 },
          { num: 8 },
          { num: 10 },
          { num: 12 },
          { num: 14 },
          { num: 16 },
          { num: 18 },
          { num: 20 },
          { num: 22 },
          { num: 24 },
          { num: 26 },
          { num: 28 },
        ],
        [
          { num: 25 },
          { num: 23 },
          { num: 21 },
          { num: 19 },
          { num: 17 },
          { num: 15 },
          { num: 13 },
          { num: 11 },
          { num: 9 },
          { num: 7 },
          { num: 5 },
          { num: 3 },
          { num: 1 },
          { num: 2 },
          { num: 4 },
          { num: 6 },
          { num: 8 },
          { num: 10 },
          { num: 12 },
          { num: 14 },
          { num: 16 },
          { num: 18 },
          { num: 20 },
          { num: 22 },
          { num: 24 },
        ],
        [
          { num: 25 },
          { num: 23 },
          { num: 21 },
          { num: 19 },
          { num: 17 },
          { num: 15 },
          { num: 13 },
          { num: 11 },
          { num: 9 },
          { num: 7 },
          { num: 5 },
          { num: 3 },
          { num: 1 },
          { num: 2 },
          { num: 4 },
          { num: 6 },
          { num: 8 },
          { num: 10 },
          { num: 12 },
          { num: 14 },
          { num: 16 },
          { num: 18 },
          { num: 20 },
          { num: 22 },
          { num: 24 },
          { num: 26 },
        ],
        [
          { num: 25 },
          { num: 23 },
          { num: 21 },
          { num: 19 },
          { num: 17 },
          { num: 15 },
          { num: 13 },
          { num: 11 },
          { num: 9 },
          { num: 7 },
          { num: 5 },
          { num: 3 },
          { num: 1 },
          { num: 2 },
          { num: 4 },
          { num: 6 },
          { num: 8 },
          { num: 10 },
          { num: 12 },
          { num: 14 },
          { num: 16 },
          { num: 18 },
          { num: 20 },
          { num: 22 },
          { num: 24 },
          { num: 26 },
        ],
        [
          { num: 25 },
          { num: 23 },
          { num: 21 },
          { num: 19 },
          { num: 17 },
          { num: 15 },
          { num: 13 },
          { num: 11 },
          { num: 9 },
          { num: 7 },
          { num: 5 },
          { num: 3 },
          { num: 1 },
          { num: 2 },
          { num: 4 },
          { num: 6 },
          { num: 8 },
          { num: 10 },
          { num: 12 },
          { num: 14 },
          { num: 16 },
          { num: 18 },
          { num: 20 },
          { num: 22 },
          { num: 24 },
          { num: 26 },
        ],
        [
          { num: 27 },
          { num: 25 },
          { num: 23 },
          { num: 21 },
          { num: 19 },
          { num: 17 },
          { num: 15 },
          { num: 13 },
          { num: 11 },
          { num: 9 },
          { num: 7 },
          { num: 5 },
          { num: 3 },
          { num: 1 },
          { num: 2 },
          { num: 4 },
          { num: 6 },
          { num: 8 },
          { num: 10 },
          { num: 12 },
          { num: 14 },
          { num: 16 },
          { num: 18 },
          { num: 20 },
          { num: 22 },
          { num: 24 },
          { num: 26 },
          { num: 28 },
        ],
        [
          { num: 17 },
          { num: 15 },
          { num: 13 },
          { num: 11 },
          { num: 9 },
          { num: 7 },
          { num: 5 },
          { num: 3 },
          { num: 1 },
          { num: 2 },
          { num: 4 },
          { num: 6 },
          { num: 8 },
          { num: 10 },
          { num: 12 },
          { num: 14 },
          { num: 16 },
          { num: 18 },
        ],
      ],
      idx: null,
    };
  },
  created() {
    // this.getSetting()
  },
  components: {},
  computed: {},
  methods: {
    onLoad() {
      let total = this.total;
      this.greenPrice.forEach((items, index) => {
        items.forEach((item, i) => {
          item.chooseFlag = false;
          total.push(item);
          for (var i = 0; i < total.length; i++) {
            item.id = i;
          }
        });
      });
      console.log(this.greenPrice);
      this.getHeigth();
    },
    tap(e) {
      console.log(e);
      let row = e.currentTarget.dataset.row; //行索引
      let x = e.currentTarget.dataset.row + 1; //行
      let col = e.currentTarget.dataset.col; //列索引
      let y = this.greenPrice[row][col].num;
      // this.setData({
      //   greenPrice: this.data.greenPrice,
      // });
      let selectList = this.selectList;
      if (selectList.length >= 3 && !this.greenPrice[row][col].chooseFlag) {
        wx.showModal({
          title: "提示",
          content: "你只能选购3张剧票！",
          showCancel: false,
        });
        return;
      }
      this.greenPrice[row][col].chooseFlag =
        !this.greenPrice[row][col].chooseFlag;
      console.log(x + "排", y + "座");
      let seat = {
        x: x,
        y: y,
        id: this.greenPrice[row][col].id,
        price: Number(e.currentTarget.dataset.price),
      };

      if (this.greenPrice[row][col].chooseFlag) {
        selectList.push(seat);
      } else {
        for (const key in selectList) {
          if (selectList[key].id == this.greenPrice[row][col].id) {
            selectList.splice(key, 1); // 删除未选中的
          }
        }
      }

      console.log(selectList, 55);
      let totalPrice = 0;
      selectList.forEach((item, index) => {
        totalPrice += item.price;
      });
      this.selectList = selectList;
      this.totalPrice = totalPrice;
      this.scaleValue = 2;
      this.flag = true;
    },
    getHeigth() {
      let that = this;
      var query = wx.createSelectorQuery();
      query.select(".zuowei-box").boundingClientRect();
      query.exec(function (res) {
        let height = res[0].height;
        that.setData({
          height: height,
        });
      });
    },
    delete(e) {
      console.log(e.currentTarget.dataset.index);
      let index = e.currentTarget.dataset.index;
      let selectList = this.selectList;
      let greenPrice = this.greenPrice;
      let id = selectList[index].id;
      console.log(id, 6);
      selectList.splice(index, 1);
      this.greenPrice.forEach((items, i) => {
        items.forEach((item, j) => {
          if (item.id == id) {
            item.chooseFlag = false;
          }
        });
      });
      let totalPrice = 0;
      selectList.forEach((item, index) => {
        totalPrice += item.price;
      });
      this.totalPrice = totalPrice;
      this.selectList = selectList;
      this.greenPrice = greenPrice;
    },
    scaleEvent(e) {
      console.log(e);
      let scaleNum = e.detail.scale;
      //console.log(scaleNum)
      if (scaleNum == 1) {
        this.flag = false;
      }
      if (scaleNum == 2) {
        this.flag = true;
      }
    },
    move(e) {
      console.log(e.detail.x);
      let x = e.detail.x;
      let leftX = this.leftX;
      this.leftX = 75;
    },
    toOrder() {
      console.log(1);
      // wx.navigateTo({
      //   url: "../yuyueOrder/index",
      // });
    },
    getSetting() {
      // 查看是否授权
      wx.getSetting({
        success(res) {
          if (res.authSetting["scope.userLocation"]) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            //  console.log("用户信息",this.userInfos)
            //wx.getUserInfo();//获取用户信息 调用前需要 用户授权
          } else {
            //调用授权接口
            wx.authorize({
              scope: "scope.userLocation",
              success: () => {
                // console.log("授权接口",this.userInfos)
                // console.log("获取用户信息2",this.userInfos)
              },
              fail: (res) => {
                wx.showModal({
                  title: "亲爱的用户", //提示的标题,
                  content: "同意我们的授权，让我们为你提供更加优质的服务", //提示的内容,
                  showCancel: false, //是否显示取消按钮,
                  confirmText: "去设置", //确定按钮的文字，默认为取消，最多 4 个字符,
                  confirmColor: "#3CC51F", //确定按钮的文字颜色
                  success: (res) => {
                    wx.openSetting({
                      success(res) {
                        console.log("设置之后", res);
                        res.authSetting = {
                          "scope.userInfo": true,
                          "scope.userLocation": true,
                        };
                      },
                    });
                  },
                });
              },
            });
          }
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.topbar {
  width: 750rpx;
  height: 517rpx;
}

.topbar image {
  width: 100%;
  height: 100%;
}

.stage {
  color: #000;
  font-size: 30rpx;
  padding: 25rpx;
}

.stage-title {
  height: 80rpx;
  text-align: center;
  font-size: 30rpx;
  line-height: 80rpx;
  background-color: #dcdcdc;
  border-radius: 0 0 20rpx 20rpx;
  width: 750rpx;
}

.stage image {
  width: 30rpx;
  height: 32rpx;
  margin-right: 10rpx;
}

.address {
  border-top: 1rpx solid #ccc;
}

.time {
  justify-content: space-between;
}

.time .yuyue {
  color: #474747;
  font-size: 24rpx;
  padding: 8rpx 20rpx;
  border: 1rpx solid #666;
  border-radius: 20rpx;
  margin-bottom: 10rpx;
}

.stage > view {
  display: flex;
  height: 60rpx;
  align-items: center;
  color: #666;
}

.scale-box {
}

movable-area {
  width: auto;
  height: 350rpx;
  background-color: transparent;
}

movable-view {
  width: 750rpx;
  position: static;
  height: 350rpx;
  background-color: transparent;
}

.row {
  position: absolute;
  left: 35rpx;
  top: 248rpx;
  z-index: 9;
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10rpx;
  font-size: 23rpx;
  width: 32rpx;
  padding: 10rpx 0;
}

.row text {
  width: 32rpx;
  height: 18rpx;
  text-align: center;
  line-height: 18rpx;
  padding: 7rpx 0;
}

.scaleRow {
  top: 80rpx;
}

.scaleRow text {
  height: 45rpx;
  line-height: 45rpx;
}

.zuowei-bo {
  display: flex;
  margin-top: 180rpx;
  padding: 0 20rpx 0 30rpx;
}

.item {
  position: relative;
  width: 22rpx;
  height: 18rpx;
  padding: 7rpx 1rpx;
}

.item image {
  position: absolute;
  left: 0;
  top: 0;
  width: 22rpx;
  height: 18rpx;
}

.zuowei-box {
  display: flex;
  flex-direction: column;
}

.zuowei-box .zuowei {
  display: flex;
  justify-content: center;
}

.bg {
  background-color: transparent;
  border-color: transparent;
}

.center {
}

.zuowei-p {
  position: relative;
  background-color: #f0f0f0;
  padding-bottom: 30rpx;
}

.seat-state {
  display: flex;
  font-size: 32rpx;
  justify-content: center;
  align-items: center;
  margin-top: 10rpx;
}

.seat-state image {
  width: 36rpx;
  height: 30rpx;
  margin-right: 8rpx;
}

.seat-state > view {
  margin: 0 20rpx;
}

.bottom-count {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30rpx;
  height: 115rpx;
  color: #8b8b8b;
  font-size: 34rpx;
  border-top: 1rpx solid #999;
}

.text-r {
  width: 320rpx;
  height: 85rpx;
  line-height: 85rpx;
  text-align: center;
  border-radius: 10rpx;
  background-color: #fed699;
  color: #fff;
}

.text-s {
  background-color: #fe9900;
}

.select {
  padding: 20rpx;
}

.select-seat {
  display: flex;
  width: 160rpx;
  height: 60rpx;
  font-size: 26rpx;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  border: 1rpx solid #666;
  border-radius: 10rpx;
  padding: 0 10rpx;
  box-sizing: border-box;
  margin: 20rpx 5rpx 0;
}

.close {
  position: relative;
  width: 28rpx;
  height: 28rpx;
}

.close image {
  position: absolute;
  width: 100%;
  height: 100%;
}

.price-box {
  display: flex;
  flex-direction: column;
}

.select-box {
  display: flex;
}
</style>