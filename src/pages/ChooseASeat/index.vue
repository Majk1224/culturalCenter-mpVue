<template>
  <div>
    121212
  </div>
</template>

<script>
export default {
  data () {

  },
  created() {
    // this.getSetting()
  },
  components:{},
  computed:{},
  methods:{
    getSetting(){
        // 查看是否授权
      wx.getSetting({
        success (res){
          if (res.authSetting['scope.userLocation']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            //  console.log("用户信息",this.userInfos)
          //wx.getUserInfo();//获取用户信息 调用前需要 用户授权
            
          }else{
            //调用授权接口
            wx.authorize({
              scope: 'scope.userLocation',
              success:()=>{
                // console.log("授权接口",this.userInfos)
                // console.log("获取用户信息2",this.userInfos)
              },
              fail:(res)=>{
                  wx.showModal({
                    title: '亲爱的用户', //提示的标题,
                    content: '同意我们的授权，让我们为你提供更加优质的服务', //提示的内容,
                    showCancel: false, //是否显示取消按钮,
                    confirmText: '去设置', //确定按钮的文字，默认为取消，最多 4 个字符,
                    confirmColor: '#3CC51F',   //确定按钮的文字颜色
                    success: res => {
                      wx.openSetting({
                        success(res){
                          console.log("设置之后",res)
                          res.authSetting = {
                            "scope.userInfo": true,
                            "scope.userLocation": true
                          }
                        }
                      })
                    }
                })

              }
            })
          }
        }
      })
    },
  }
}
</script>

<style>

</style>