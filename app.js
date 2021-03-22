// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  navigate_map(){
    wx.navigateTo({
      url: '/pages/map/map',
    })
  },
  navigate_task(){
    wx.navigateTo({
      url: '/pages/task/task',
    })
  },
  navigate_home(){
    wx.navigateTo({
      url: '/pages/home/home',
    })
  },
  globalData: {
    userInfo: null
  }
})
