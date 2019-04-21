const crypto = require('crypto');
const servers = require('../../servers');
const redis = require("m.redis");
const nodeServer = require("m.config").G.nodeServer().portal;
const defDataJson = require('m.config').dataJson;

module.exports.start = function(app) {

  app.post("/wechat.getTicket", async function(req, res){

    // 从redis获取ticket
    let redisData = await redis.hmget("node_wechat", "ticket");
    let dataJson = Object.assign({}, defDataJson);

    // 获取当前服务器时间
    let nowTime = new Date().getTime();

    // 判断ticket是否过期，如果过期，那么重新获取
    if(!!!redisData || !!redisData && nowTime - redisData.time >= redisData.expires) {

      // 首先获取access_token
      servers.post(nodeServer+"/wechat.getAccessToken")({}).then(data => {

        // 根据获取到的token来请求ticket
        servers.get("https://api.weixin.qq.com/cgi-bin/ticket/getticket")({
          "access_token": data.data,
          "type": "jsapi",
        }).then(data2 => {

          log.warn(`从微信端获取到ticket：${data2}`);

          // 微信返回的数据是字符串,需要转义
          data2 = JSON.parse(data2);

          // 判断是否有错
          if(data2.errcode != 0) {
            dataJson.code = "-3";
            dataJson.msg = data2.errmsg;
            res.json(dataJson);
            return;
          }

          // 此时间需当前更新，因为得写入redis服务器保存，为下次做比对参考
          nowTime = new Date().getTime();

          // 更新微信服务器返回的access_token,并设置过期时间
          redis.hmset("node_wechat", {
            "ticket": {
              "time": nowTime,
              "ticket": data2.ticket,
              "expires": +data2.expires_in * 1000,
            },
          });

          dataJson.data = data2.ticket;
          res.json(dataJson);
          return;
        });

      });

    } else {

      dataJson.data = redisData.ticket;
      console.log("ticket直接返回>>>>>");
      res.json(dataJson);
    }
  });
}
