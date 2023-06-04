"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      user_list: [
        {
          user_icon: "../../static/test.png",
          user_name: "用户的备注名字",
          message: "这是最后一条消息息这是最这是最后一条消息息这是最",
          num: "3",
          time: "17:00",
          is_disturb: true,
          is_group: true
        },
        {
          user_icon: "../../static/test.png",
          user_name: "用户的备注名字",
          message: "这是最后一条消",
          num: "1",
          time: "17:00",
          is_disturb: false,
          is_group: true
        },
        {
          user_icon: "../../static/test.png",
          user_name: "用户的备注名字",
          message: "这是最后一条消息",
          num: "2",
          time: "17:00",
          is_disturb: true,
          is_group: true
        },
        {
          user_icon: "../../static/test.png",
          user_name: "用户的备注名字",
          message: "这是最后一条消息息这是最这是最后一条消息息这是最",
          num: "2",
          time: "17:00",
          is_disturb: false,
          is_group: false
        },
        {
          user_icon: "../../static/test.png",
          user_name: "用户的备注名字",
          message: "这是最后一条消息",
          num: "2",
          time: "17:00",
          is_disturb: false,
          is_group: false
        },
        {
          user_icon: "../../static/test.png",
          user_name: "用户的备注名字",
          message: "这是最后一条消息",
          num: "2",
          time: "17:00",
          is_disturb: false,
          is_group: true
        },
        {
          user_icon: "../../static/test.png",
          user_name: "用户的备注名字",
          message: "这是最后一条消息",
          num: "2",
          time: "17:00",
          is_disturb: false,
          is_group: false
        },
        {
          user_icon: "../../static/test.png",
          user_name: "用户的备注名字",
          message: "这是最后一条消息",
          num: "2",
          time: "17:00",
          is_disturb: false,
          is_group: true
        },
        {
          user_icon: "../../static/test.png",
          user_name: "用户的备注名字",
          message: "这是最后一条消息",
          num: "2",
          time: "17:00",
          is_disturb: false,
          is_group: false
        },
        {
          user_icon: "../../static/test.png",
          user_name: "用户的备注名字",
          message: "这是最后一条消息",
          num: "2",
          time: "17:00",
          is_disturb: false,
          is_group: false
        },
        {
          user_icon: "../../static/test.png",
          user_name: "用户的备注名字",
          message: "这是最后一条消息",
          num: "2",
          time: "17:00",
          is_disturb: false,
          is_group: false
        },
        {
          user_icon: "../../static/test.png",
          user_name: "用户的备注名字",
          message: "这是最后一条消息",
          num: "2",
          time: "17:00",
          is_disturb: false,
          is_group: false
        }
      ]
    };
  },
  computed: {
    total() {
      return this.user_list.reduce((a, b) => {
        return a + b.num * 1;
      }, 0);
    }
  },
  watch: {
    total: {
      handler(val) {
        common_vendor.index.setNavigationBarTitle({
          title: `消息(${val})`
        });
        common_vendor.index.setTabBarBadge({
          index: 0,
          text: `${this.total}`
        });
      },
      immediate: true
    }
  },
  onPullDownRefresh() {
    common_vendor.index.showToast({
      title: "刷新了",
      success() {
        setTimeout(common_vendor.index.stopPullDownRefresh, 1500);
      }
    });
  },
  onLoad() {
  },
  onReady() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.user_list, (item, i, i0) => {
      return common_vendor.e({
        a: item.user_icon,
        b: common_vendor.t(!item.is_group ? item.num : ""),
        c: !item.is_group && "4rpx",
        d: common_vendor.t(item.user_name),
        e: item.is_group
      }, item.is_group ? {
        f: common_vendor.t(item.num)
      } : {}, {
        g: common_vendor.t(item.message),
        h: common_vendor.t(item.time),
        i: !item.is_disturb
      }, !item.is_disturb ? {} : {}, {
        j: i
      });
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/张永彩/Desktop/myuniapp/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
