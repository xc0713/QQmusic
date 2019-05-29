// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0,
    flag:false,
    sliderList: [],
    radioList: [],
    topList:[],
    hot:[]
  },
  changeNav(e){
    this.setData({
      current:e.currentTarget.dataset.ind
    });
  },
  changenav(e) {
    console.log(e)
    this.setData({
      current: e.detail.current
    })
  },
  tolist(e){
    wx.navigateTo({
      url: "/pages/songs/index?img=" + e.currentTarget.dataset.img + '&tit=' + e.currentTarget.dataset.tit,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  todetails(e){
    wx.navigateTo({
      url: "/pages/sdetail/sdetail?ind=" + e.currentTarget.dataset.url,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.request({
      url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1559028324789&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1',
      success: (res) => {
        this.setData({
          sliderList: res.data.data.slider,
          radioList: res.data.data.radioList
        })
      }
      
    })

    wx.request({
      url: 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?_=1559031896878&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1',
      success:(res)=>{
        this.setData({
          topList: res.data.data.topList
        })
      }
    })

    wx.request({
      url: 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?_=1559036229199&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1',
      success:(res)=>{
        this.setData({
          hot: res.data.data.hotkey.slice(0, 8) 
        })
      }
    })
    // wx.request({
    //   url: 'https://u.y.qq.com/cgi-bin/musicu.fcg?_=1559038516482',
    //   success:(res)=>{
    //     console.log(res)
    //   }
    // })
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