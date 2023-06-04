"use strict";
const common_vendor = require("../common/vendor.js");
const user_pinia = common_vendor.defineStore("user", {
  state: () => ({
    isConnected: true
  }),
  actions: {}
});
exports.user_pinia = user_pinia;
