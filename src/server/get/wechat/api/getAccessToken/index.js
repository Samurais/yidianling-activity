const crypto = require('crypto');
const servers = require('../../servers');
const redis = require("m.redis");
const defDataJson = require('m.config').dataJson;
const wechatInfo = require("m.config").wechat;

module.exports.start = function(app) {
  //redis.hdel("node_wechat", "accessToken");
  // redis.hmset("node_wechat", {
  //   "accessToken": {
  //     "time": new Date().getTime(),
  //     "token": "data.access_token",
  //     "expires": 7200*1000,
  //   },
  // });
  app.post("/wechat.getAccessToken", async function(req, res){

    console.log("来到 getAccessToken请求数据>>>>>>>>>>")

    // 从redis获取accessToken
    let redisData = await redis.hmget("node_wechat", "accessToken");
    let dataJson = Object.assign({}, defDataJson);

    // 获取当前服务器时间
    let nowTime = new Date().getTime();

    // 判断access_token是否过期，如果过期，那么重新获取
    if(!!!redisData || !!redisData && nowTime - redisData.time >= redisData.expires) {

      console.log("access_token微信请求>>>>>");

      servers.get("https://api.weixin.qq.com/cgi-bin/token")({
        "grant_type": "client_credential",
        "appid": wechatInfo.appId,
        "secret": wechatInfo.secret,
      }).then(data => {

        log.warn(`从微信端获取到access_token：${data}`);

        // 微信返回的数据是字符串,需要转义
        data = JSON.parse(data);

        // 判断是否有错
        if(!!data.errmsg) {
          dataJson.code = "-3";
          dataJson.msg = data.errmsg;
          res.json(dataJson);
          return;
        }

        // 此时间需当前更新，因为得写入redis服务器报错，为下次做比对参考
        nowTime = new Date().getTime();

        // 更新微信服务器返回的access_token,并设置过期时间
        redis.hmset("node_wechat", {
          "accessToken": {
            "time": nowTime,
            "token": data.access_token,
            "expires": data.expires_in * 1000,
          },
        });

        dataJson.data = data.access_token;
        res.json(dataJson);
        return;

      }).catch(err => {
        dataJson.code = "-2";
        dataJson.msg = err;
        res.json(dataJson);
        return;
      });

    } else
    // 否则直接发送之前保存的access_token
    {
      dataJson.data = redisData.token;
      console.log("access_token直接返回>>>>>");
      res.json(dataJson);
      return;
    }
  });
}
