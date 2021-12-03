<template>
<form class="wrapper" @submit="submit" report-submit>
  <div class="title">填写信息</div>
  <ul>
    <li>
      <lable for>学员姓名</lable>
      <input type="text" v-model="current.name" placeholder="请输入学员姓名" focus />
    </li>
    <li>
      <lable for>手机号</lable>
      <input type="number" v-model="current.phone" placeholder="请输入手机号" maxlength="11" />
    </li>
    <li>
      <lable for>演出曲目</lable>
      <input type="number" v-model="current.song" placeholder="请输入演出曲目" />
    </li>
    <li>
      <lable for>邀请码</lable>
      <input type="text" v-model="current.InvitationCode" placeholder="请输入邀请码"/>
    </li>
  </ul>
  <button :class="btnEnable?'': 'disable'" form-type="submit">确认</button>
</form>
  <!-- <div @click="clickHandle">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover" />

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" :value="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>

    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>

    <div class="all">
        <div class="left">
        </div>
        <div class="right">
        </div>
    </div>
  </div> -->
</template>

<script>
import card from '@/components/card'
import { mapState, mapMutations, mapActions } from "vuex";
// const moment = require("moment");
export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    submit(val) {
      console.log('val: ', val);

    }
  },

  created () {
    // let app = getApp()
  },
  computed: {
    ...mapState({
      current: state => state.sign.current
    }),
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
    }
  }
}
</script>

<style scoped lang="scss">
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
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
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
