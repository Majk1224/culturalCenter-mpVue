<template>
  <div class="page">
    <div class="header">
      <div class="seatStatusList">
        <div class="statusLabel mrgR60">
          <!-- <img src="./image/seat.png"/> -->
          <span>已选中</span>
        </div>
        <div class="statusLabel">
          <!-- <img src="./image/seat_disabled.png"/> -->
          <span>不可选</span>
        </div>
      </div>
    </div>

    <div class="main"></div>

    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  data() {},
  created() {
    // this.getSetting()
  },
  components: {},
  computed: {},
  methods: {
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
/* 基本布局样式 */
.seatStatusList {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1rem;
}
.seatStatusList .statusLabel img {
  width: 0.5rem;
  height: 0.4rem;
  margin-right: 0.1rem;
}
.page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: #999;
}
.header {
  height: 0.9rem;
  overflow: hidden;
  background-color: #fff;
}
.main {
  background-color: #eee;
  flex-grow: 1;
  overflow: hidden;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.2rem;
  background-color: #fff;
}
.mrgR60 {
  margin-right: 0.6rem;
}
body,
dl,
dd,
ul,
ol,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
input,
textarea,
p,
hr,
thead,
tbody,
tfoot,
th,
td {
  margin: 0;
  padding: 0;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
}
html {
  -ms-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
  font-size: 50px;
}
body {
  line-height: 1.5;
  font-size: 16px;
}
body,
button,
input,
select,
textarea {
  font-family: "helvetica neue", tahoma, "hiragino sans gb", stheiti,
    "wenquanyi micro hei", \5fae\8f6f\96c5\9ed1, \5b8b\4f53, sans-serif;
}
b,
strong {
  font-weight: bold;
}
i,
em {
  font-style: normal;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
table th,
table td {
  border: 1px solid #ddd;
  padding: 5px;
}
table th {
  font-weight: inherit;
  border-bottom-width: 2px;
  border-bottom-color: #ccc;
}
img {
  border: 0 none;
  width: auto\9;
  max-width: 100%;
  vertical-align: top;
}
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  vertical-align: baseline;
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}
button[disabled],
input[disabled] {
  cursor: default;
}
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
input[type="search"] {
  -webkit-appearance: textfield;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input {
    line-height: normal !important;
  }
}
select[size],
select[multiple],
select[size][multiple] {
  border: 1px solid #aaa;
  padding: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
video,
progress {
  display: inline-block;
}

.g-doc {
  width: 7.5rem;
  margin: 0px auto;
}
</style>