// pages/songs/index.js
import {data} from '../../mock/mock.js';
import {hotlist} from '../../mock/hot.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    populr:[],
    hotlist:[],
    img:'http://y.gtimg.cn/music/photo_new/T003R300x300M000001pFepI254kFx.jpg',
    tit:'巅峰榜·流行指数'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      populr: data.toplistData.song,
      img:options.img,
      tit:options.tit
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