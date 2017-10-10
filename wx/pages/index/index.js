//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    // icon 无icon时值为空，用于判断是否显示media-item
    // title
    // after
    // aftertype
    // url
    ListLayout: {
      items: [
        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'Flex',
          'url': '/pages/layout/flex/flex',
        },
        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'Grid',
          'url': '/pages/layout/grid/grid',
        },
      ]
    },
    ListContent: {
      items: [

        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'Typography',
          'url': '/pages/content/typography/typography',
        },
        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'Thumb',
          'url': '/pages/content/thumb/thumb',
        },
        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'Images',
          'url': '/pages/content/images/images',
        },
        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'Article',
          'url': '/pages/content/article/article',
        }
      ]
    },
    ListComponents: {
      items: [

        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'Swiper',
          'url': '/pages/component/swiper/swiper',
        },
        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'Tabs',
          'url': '/pages/component/tabs/tabs',
        },
        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'List Block',
          'url': '/pages/component/list-block/list-block',

        },
        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'Cards',
          'url': '/pages/component/cards/cards',
        },
        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'Media',
          'url': '/pages/component/media/media',
        },
        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'Forms',
          'url': '/pages/component/forms/forms',
        },
        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'Buttons',
          'url': '/pages/component/buttons/buttons',
        },
        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'Floating button',
          'url': '/pages/component/floating-button/floating-button',
        },
        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'Progress',
          'url': '/pages/component/progress/progress',
        },
        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'Icons',
          'url': '/pages/component/icons/icons',
        },
        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'Badge',
          'url': '/pages/component/badge/badge',
        },
        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'Tags',
          'url': '/pages/component/tags/tags',
        },
        {
          'icon': '',
          'title': 'Collapse',
          'url': '/pages/component/collapse/collapse',
        },
        {
          'icon': '',
          'title': 'Dropdowns',
          'url': '/pages/component/dropdowns/dropdowns',
        },
        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'Picker-view',
          'url': '/pages/component/picker-view/picker-view',
        },
        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'Timeline',
          'url': '/pages/component/timeline/timeline',
        }
      ]
    },

    ListUtilities: {
      items: [

        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'Borders',
          'url': '/pages/utilities/borders/borders',

        },
        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'Clearfix',
          'url': '/pages/utilities/clearfix/clearfix',
        },
        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'Spacing',
          'url': '/pages/utilities/spacing/spacing',
        },
        {
          'icon': 'http://material.framework7.cn/dist/img/i-f7-material.png',
          'title': 'Colors',
          'url': '/pages/utilities/colors/colors',
        }
      ]
    }

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
