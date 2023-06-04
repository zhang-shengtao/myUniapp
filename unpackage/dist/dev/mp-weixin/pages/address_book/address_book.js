"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    function filter(item) {
      if (item == "al")
        item = "⬆";
      if (item == "in")
        item = "#";
      return item;
    }
    return {
      filter
    };
  },
  data() {
    return {
      scroll_id: "",
      fixed_right: {
        winOffsetY: 0,
        winHeight: 0,
        itemHeight: 0
      },
      user_list: {
        "al": [
          {
            user_icon: "../../static/test.png",
            user_name: "新的朋友",
            url: ""
          },
          {
            user_icon: "../../static/test.png",
            user_name: "群聊",
            url: ""
          }
        ],
        A: [
          {
            user_icon: "../../static/test.png",
            user_name: "A备注的名字"
          },
          {
            user_icon: "../../static/test.png",
            user_name: "A备注的名字2"
          },
          {
            user_icon: "../../static/test.png",
            user_name: "A备注的名字3"
          }
        ],
        B: [
          {
            user_icon: "../../static/test.png",
            user_name: "B备注的名字"
          },
          {
            user_icon: "../../static/test.png",
            user_name: "b备注的名字2"
          },
          {
            user_icon: "../../static/test.png",
            user_name: "b备注的名字3"
          },
          {
            user_icon: "../../static/test.png",
            user_name: "b备注的名字4"
          },
          {
            user_icon: "../../static/test.png",
            user_name: "b备注的名字5"
          }
        ],
        C: [
          {
            user_icon: "../../static/test.png",
            user_name: "C备注的名字"
          },
          {
            user_icon: "../../static/test.png",
            user_name: "c备注的名字2"
          },
          {
            user_icon: "../../static/test.png",
            user_name: "c备注的名字3"
          }
        ],
        "in": [
          {
            user_icon: "../../static/test.png",
            user_name: "#备注的名字2"
          },
          {
            user_icon: "../../static/test.png",
            user_name: "#备注的名字3"
          }
        ]
      }
    };
  },
  computed: {
    tagTotal() {
      let arr = Object.keys(this.user_list);
      return arr;
    },
    userTotal() {
      let arr = [...this.tagTotal];
      arr.shift();
      let total = 0;
      arr.forEach((item) => {
        total += this.user_list[item].length;
      });
      return total;
    }
  },
  onLoad() {
  },
  onReady() {
    common_vendor.index.createSelectorQuery().in(this).select(".fixed_right").boundingClientRect().exec((ret) => {
      this.fixed_right.winOffsetY = ret[0].top;
      this.fixed_right.winHeight = ret[0].height;
      this.fixed_right.itemHeight = this.fixed_right.winHeight / this.tagTotal.length;
    });
  },
  methods: {
    touchStart(e) {
      this.scroll_id = e.target.id;
    },
    touchEnd() {
      this.scroll_id = "";
    },
    touchMove(e) {
      let pageY = e.touches[0].pageY;
      let index = Math.floor((pageY - this.fixed_right.winOffsetY) / this.fixed_right.itemHeight);
      if (index > this.tagTotal.length)
        return;
      let scroll_id = this.tagTotal[index];
      this.scroll_id = scroll_id;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.user_list, (item, index, i0) => {
      return common_vendor.e({
        a: index != "al"
      }, index != "al" ? {
        b: common_vendor.t($setup.filter(index))
      } : {}, {
        c: common_vendor.f(item, (items, index2, i1) => {
          return {
            a: items.user_icon,
            b: common_vendor.t(items.user_name)
          };
        }),
        d: item.name,
        e: index,
        f: item.name + index
      });
    }),
    b: common_vendor.t($options.userTotal),
    c: $data.scroll_id,
    d: common_vendor.f($options.tagTotal, (item, k0, i0) => {
      return common_vendor.e({
        a: common_vendor.t($setup.filter(item)),
        b: $data.scroll_id == item
      }, $data.scroll_id == item ? {
        c: common_vendor.t($setup.filter($data.scroll_id))
      } : {}, {
        d: common_vendor.n($data.scroll_id == item ? "back" : ""),
        e: item,
        f: item
      });
    }),
    e: common_vendor.o((...args) => $options.touchStart && $options.touchStart(...args)),
    f: common_vendor.o((...args) => $options.touchEnd && $options.touchEnd(...args)),
    g: common_vendor.o((...args) => $options.touchMove && $options.touchMove(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/张永彩/Desktop/myuniapp/pages/address_book/address_book.vue"]]);
wx.createPage(MiniProgramPage);
