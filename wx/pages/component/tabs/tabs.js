// pages/component/tabs/tabs.js
Page({
  data: {

    // tab切换
    currentTab: 0,
  },

  changeTab: function (e) {
    this.setData({ currentTab: e.detail.current });
  },

  swichTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})