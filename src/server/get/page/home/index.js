
const routers = require("../../router");
const url = require("url");

module.exports.start = function(app) {

  app.get("/", function(req, res){

    const dataInfo = {data: ""};
    const source = "activity";
    const config = {};
    let meta = {
      title: "壹点灵",
      keywords: "",
      description: "",
    }

    let pathname = url.parse(req.url, true).pathname;

    dataInfo.data = {
      pathname,
    }

    meta.title = "壹点灵-心理热线 专题";

    routers.start(req, res, {dataInfo, source, meta, config});

  });

  // activity主站
  app.get(/^\/home\/?$|^\/home\/+/, function(req, res){

    let dataInfo = {data: ""};
    let source = "activity";
    let config = {};

    let meta = {
      title: "在线心理医生，心理咨询一对一，心理咨询在线聊天-壹点灵",
      keywords: "心理咨询，心理咨询价格表，心理咨询收费标准",
      description: "职场心理受挫？情感纠葛迷茫？亲子教育困难？如果您正遭遇这些困惑，不妨从心理学角度来寻求解决。壹点灵超万名认证心理专家，顶尖权威团队，一对一服务，拯救您迷茫的心灵。",
    }
    let pathname = url.parse(req.url, true).pathname;

    dataInfo.data = {
      pathname,
      wechat: {
        "title": "壹点灵-您身边的心理专家",
        "desc": "权威认证心理专家，专业一对一隐私服务，为您的心灵排忧解难。",
        "host": req.headers.host,
        "url": req.url,
        "cover": "/src/images/global/wechat-share.png",
      }
    }

    routers.start(req, res, {dataInfo, source, meta, config});
  });
}
