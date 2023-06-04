"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const pinia_user = require("./pinia/user.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/my/my.js";
  "./pages/address_book/address_book.js";
}
const _sfc_main = {
  onLaunch: function(options) {
    common_vendor.index.onNetworkStatusChange(function(res) {
      console.log(res);
      pinia_user.user_pinia().$patch({
        isConnected: res.isConnected
      });
    });
  },
  onShow: function(options) {
  },
  onHide: function(options) {
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/张永彩/Desktop/myuniapp/App.vue"]]);
require("./vue-devtools/hook.js");
require("./vue-devtools/backend.js");
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(common_vendor.createPinia());
  return {
    app,
    Pinia: common_vendor.Pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
