// pages/volu/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    PageCur:'home',
    lat:"",
    long:"",
    myloc:[]
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.getSetting({
        success(res){
          console.log(res.authSetting)
        },
        fail(res){
          console.log("fail")
          console.log(res.errMsg)
        }
      })
      var that=this
      wx.getLocation({
        success:function(res){
          console.log(res)

          var loc=[
        {
          icon:"/icon/arrow.jpeg",
          id:0,
          latitude:res.latitude,
          longitude:res.longitude
        }
      ]
          that.setData(
            {
              lat:res.latitude,
              long:res.longitude,
              myloc:loc
            }
          )
        }
      })



      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})