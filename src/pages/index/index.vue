<template>
  <form class="wrapper" @submit="submit">
    <mp-navbar :tabs="tabs" :activeIndex='tabsChecked' @tabClick="tabClick">
     {{  tabs[tabsChecked] }}
    </mp-navbar>
    <!-- <div class="weui-tab">
      <div class="weui-navbar">
        <block v-for="(item, index) in tabs" :key="index">
          <div
            :id="index"
            :class="{ 'weui-bar__item_on': activeIndex == index }"
            class="weui-navbar__item"
            @click="tabClick"
          >
            <div class="weui-navbar__title">{{ item }}</div>
          </div>
        </block>
        <div class="weui-navbar__slider" :class="navbarSliderClass"></div>
      </div>
      <div class="weui-tab__panel">
        <div class="weui-tab__content" :hidden="activeIndex != 0"></div>
        <div class="weui-tab__content" :hidden="activeIndex != 1">
          选项二的内容
        </div>
      </div>
    </div> -->
    <ul>
      <li name="name">
        <lable for>学员姓名</lable>
        <input
          name="name"
          type="text"
          v-model="current.name"
          placeholder="请输入学员姓名"
          focus
        />
      </li>
      <li>
        <lable for>手机号</lable>
        <input
          type="number"
          v-model="current.phone"
          placeholder="请输入手机号"
          maxlength="11"
          name="phone"
        />
      </li>
      <li>
        <lable for>演出曲目</lable>
        <input
          type="number"
          v-model="songText"
          placeholder="请输入演出曲目"
          disabled="true"
          @click="showMulLinkageTwoPicker"
        />
        <mp-picker
          name="song"
          v-model="current.song"
          ref="mpPicker"
          @onConfirm="onConfirm"
          @onCancel="onCancel"
          :pickerValueDefault="pickerValueDefault"
          :pickerValueArray="pickerValueArray"
        ></mp-picker>
      </li>
      <!-- <li>
      <lable for>邀请码</lable>
      <input type="text" v-model="current.InvitationCode" placeholder="请输入邀请码"/>
    </li> -->
    </ul>

    <button :class="btnEnable ? '' : 'disable'" form-type="submit">确认</button>
    <!-- <div class="swiper">
      <swiper
        class="swiper-container"
        indicator-dots="true"
        autoplay="true"
        interval="3000"
        circular="true"
        duration="500"
      >
        <block v-for="(item, index) in banner" :key="index">
          <swiper-item class="swiper-item">
            <image class="slide-image" 	show-menu-by-longpress :src="item.imgUrl" mode="aspectFit"/>
          </swiper-item>
        </block>
      </swiper>
    </div> -->
    <!-- <mp-navbar :tabs="['一', '二']" activeIndex=0>
      的大幅度的
    </mp-navbar> -->

    <!-- <mpButton type="default" size="large" btnClass="mb15">默认按钮</mpButton> -->
  </form>
</template>

<script>
import card from "@/components/card";
import { mapState, mapMutations, mapActions } from "vuex";
// const moment = require("moment");
import mpButton from "mpvue-weui/src/button";
import mpPicker from "mpvue-weui/src/picker";
import mpNavbar from "mpvue-weui/src/navbar";
export default {
  data() {
    return {
      tabs: ["购票", "查询票"],
      tabsChecked: 0,
      activeIndex: 0,
      fontSize: 30,
      banner: [
        { imgUrl: "/static/images/yinyuejie.JPG" },
        { imgUrl: "/static/images/yinyuejie.JPG" },
      ],
      songList: [
        {
          key: 1,
          value: "这条街最亮的仔",
        },
        {
          key: 2,
          value: "白龙马",
        },
        {
          key: 3,
          value: "没去成学校",
        },
        {
          key: 4,
          value: "misery business",
        },
        {
          key: 5,
          value: "that is gonna hurt",
        },
        {
          key: 6,
          value: "宝贝宝贝",
        },
        {
          key: 7,
          value: "bar bar bar",
        },
        {
          key: 8,
          value: "It's my life",
        },
        {
          key: 9,
          value: "TIK TOK",
        },
        {
          key: 10,
          value: "大风吹",
        },
        {
          key: 11,
          value: "handclap",
        },
        {
          key: 12,
          value: "toxic",
        },
        {
          key: 13,
          value: "uptown funk",
        },
        {
          key: 14,
          value: "Come as you are",
        },
        {
          key: 15,
          value: "胜利",
        },
        {
          key: 16,
          value: "Whataya want from me",
        },
        {
          key: 17,
          value: "棉花眼睛",
        },
        {
          key: 18,
          value: "听我说谢谢你",
        },
        {
          key: 19,
          value: "红歌串烧",
        },
        {
          key: 100,
          value: "观众区",
        },
      ],
      motto: "Hello miniprograme",
      userInfo: {
        nickName: "mpvue",
        avatarUrl: "http://mpvue.com/assets/logo.png",
      },
      pickerValueArray: [],
      pickerValueDefault: [],
    };
  },

  components: {
    card,
    mpButton,
    mpPicker,
    mpNavbar,
  },

  methods: {
    goAdd() {
      wx.navigateTo({ url: "/pages/ChooseASeat/main" });
    },
    showMulLinkageTwoPicker() {
      this.$refs.mpPicker.show();
    },
    onConfirm(e) {
      this.current.song = e.value[0];
    },
    onCancel(e) {
      console.log(e);
    },
    bindViewTap() {
      const url = "../logs/main";
      if (mpvuePlatform === "wx") {
        mpvue.switchTab({ url });
      } else {
        mpvue.navigateTo({ url });
      }
    },
    clickHandle(ev) {
      console.log("clickHandle:", ev);
      // throw {message: 'custom test'}
    },
    submit(e) {
      // this.goAdd();
      console.log("val: ", e.detail, this.current);
    },
    tabClick(e) {
      console.log(e);
      this.tabsChecked = e;
      // this.activeIndex = e.currentTarget.id;
    },
  },

  created() {
    // let app = getApp()
    // console.log("current---", this.current);
    this.pickerValueArray = this.songList.map((item) => ({
      value: item.key,
      label: item.value,
    }));
  },
  computed: {
    ...mapState({
      current: (state) => state.sign.current,
    }),
    songText() {
      const songChange = this.pickerValueArray.find(
        (item) => item.value === this.current.song
      ) || { label: "" };
      return songChange.label;
    },
    btnEnable() {
      // 判断公司名称是否为空
      if (!this.current.name) {
        return false;
      }
      // 判断手机号是否符合规范
      if (
        !/^1(3|4|5|7|8)\d{9}$/.test(this.current.phone) ||
        !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.current.phone)
      ) {
        return false;
      }
      // 判断公司地址
      if (!this.current.song) {
        return false;
      }
      return true;
    },
    navbarSliderClass() {
      if (this.activeIndex == 0) {
        return "weui-navbar__slider_0";
      }
      if (this.activeIndex == 1) {
        return "weui-navbar__slider_1";
      }
      if (this.activeIndex == 2) {
        return "weui-navbar__slider_2";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.weui-tab__content {
  padding-top: 60px;
  text-align: center;
}
.weui-navbar__slider_0 {
  left: 29rpx;
  transform: translateX(0);
}
.weui-navbar__slider_1 {
  left: 29rpx;
  transform: translateX(250rpx);
}
.weui-navbar__slider_2 {
  left: 29rpx;
  transform: translateX(500rpx);
}
.swiper {
  width: 100%;
  height: 500rpx;
  // margin-top: 80rpx;
  // 继承，完整写法：swiper-container
  &-container {
    width: 100%;
    height: 100%;

    .swiper-item {
      width: 100%;
      height: 100%;

      .slide-image {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
    }
  }
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all {
  width: 7.5rem;
  height: 1rem;
  background-color: blue;
}
.all:after {
  display: block;
  content: "";
  clear: both;
}
.left {
  float: left;
  width: 3rem;
  height: 1rem;
  background-color: red;
}

.right {
  float: left;
  width: 4.5rem;
  height: 1rem;
  background-color: green;
}
.wrapper {
  width: 100%;
  height: 100%;

  .title {
    font-size: 34rpx;
    padding: 15rpx 0 15rpx 30rpx;
    background: #f6f6f6;
  }
  ul {
    border-top: 1rpx solid #eee;
    border-bottom: 1rpx solid #eee;
    background: #fff;
  }
  li {
    width: 720rpx;
    height: 88rpx;
    margin-left: 30rpx;
    border-bottom: 1rpx solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    lable {
      color: #666;
      width: 170rpx;
      font-size: 30rpx;
    }
    input,
    picker {
      flex: 1;
      font-size: 30rpx;
      // background: #eee;
      color: #333;
      height: 88rpx;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding-right: 30rpx;
      box-sizing: border-box;
    }
    .date {
      width: 100%;
      line-height: 88rpx;
    }
  }
  li:last-child {
    border: none;
  }
  .tip {
    margin-right: 30rpx;
  }
  textarea {
    font-size: 30rpx;
    // background: #eee;
    color: #333;
    width: 690rpx;
    height: 200rpx;
    margin: 30rpx;
    box-sizing: border-box;
    padding: 10rpx;
    border: 1rpx solid #c0c0c0;
    border-radius: 5rpx;
  }
  button {
    margin-top: 50rpx;
    color: #fff;
    background: #197dbf;
  }
  button.disable {
    background: #999;
  }
}
</style>
