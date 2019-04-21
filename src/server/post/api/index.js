
const changeToBase64 = require("./changeToBase64");

// 统计专家年年终总结 点赞计数
const expertZanCount = require("./expertZanCount");

// 七牛接口
const qiniu = require("./qiniu");

module.exports.start = function(app, redis) {

  changeToBase64.start(app);
  expertZanCount.start(app, redis);
  qiniu.start(app);
}
