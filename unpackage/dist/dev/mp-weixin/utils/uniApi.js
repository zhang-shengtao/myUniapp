"use strict";const e=require("../common/vendor.js"),t=require("../pinia/user.js"),n={getNetworkType(n={}){e.index.getNetworkType({success:e=>{t.user_pinia().isConnected="none"!==e.networkType}})},networkStatusChange(){e.index.onNetworkStatusChange(this.getNetworkType),this.getNetworkType()}};exports.uniApi=n;
