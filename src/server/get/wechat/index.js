
const insertAPI = require("./api/insert");
const getAccessTokenAPI = require("./api/getAccessToken");
const getTicket = require("./api/getTicket");
const getWechatConfig = require("./api/getWechatConfig");

module.exports.start = function(app) {

  // 微信接入
  insertAPI.start(app);

  // 获取access_token
  getAccessTokenAPI.start(app);

  // 获取getTicket
  getTicket.start(app);

  // 获取微信配置信息
  getWechatConfig.start(app);
}
