const crypto = require('crypto');

module.exports.start = function(app) {
  // 微信接入
  app.get("/wechat.insert", function(req, res){

    let signature = req.query.signature;
    let timestamp = req.query.timestamp;
    let nonce = req.query.nonce;
    let echostr = req.query.echostr;

    let str = ["activityyidianlingcom", timestamp, nonce].sort().join("");
    let code = crypto.createHash("sha1").update(str,'utf-8').digest("hex");

    if(code === signature) {
      res.send(echostr);
    } else {
      res.json({
        msg: "参数比对错误，接入失败!"
      });
    }
  });
}


