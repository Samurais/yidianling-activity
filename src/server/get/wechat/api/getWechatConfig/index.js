const crypto = require('crypto');
const servers = require('../../servers');
const nodeServer = require("m.config").G.nodeServer().portal;
const defDataJson = require('m.config').dataJson;
const util = require("m.util");
const wechatInfo = require("m.config").wechat;


module.exports.start = function(app) {

  app.post("/wechat.getWechatConfig", function(req, res){

    let dataJson = Object.assign({}, defDataJson);

    console.log("获取客户端传递的url>>>>>")
    console.log(req.body.shareUrl)

    let sendData = {
      noncestr: util.randomString(),
      timestamp: parseInt(new Date().getTime()/1000, 10),
      url: decodeURIComponent(req.body.shareUrl),
      appId: wechatInfo.appId
    }

    // 首先先获取ticket
    servers.post(nodeServer+"/wechat.getTicket")({}).then(data => {

      console.log("ticket>>>>>")
      console.log(data.data)

      // 字典排序
      let str = `jsapi_ticket=${data.data}&noncestr=${sendData.noncestr}&timestamp=${sendData.timestamp}&url=${sendData.url}`;

      console.log(str)
      // 得到签名
      sendData.signature = crypto.createHash("sha1").update(str,'utf-8').digest("hex");
      dataJson.data = {
        ...sendData,
      }

      res.json(dataJson);

    }).catch(error => {
      dataJson.code = "-2";
      dataJson.msg = err;
      res.json(dataJson);
      return;
    });
  });
}
