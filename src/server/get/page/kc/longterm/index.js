
const url = require("url");
const mConfig = require("m.config");

module.exports.start = function(req, res) {
  let dataInfo = {data: ""};
  let source = "longterm";
  let config = {};

  config.jslist = {
    "zoosnet": {
      "url": "//lvt.zoosnet.net/JS/LsJS.aspx?siteid=LVT51091364&float=1&lng=cn",
    }
  }

  let meta = {
    title: "",
    keywords: "",
    description: "",
  }
  let pathname = url.parse(req.url, true).pathname;

  dataInfo.data = {
    pathname,
    wechat: {
      "title": "壹点灵",
      "desc": "壹点灵",
      "host": req.headers.host,
      "url": req.url,
      "cover": "/src/images/global/wechat-share.png",
    }
  }

  if(pathname == "/kc/kaozheng"){

    meta.title = "2019婚姻家庭咨询考证必看-报考条件流程考点证书-壹点灵";
    meta.keywords = "婚姻家庭咨询";
    meta.description = "2019婚姻家庭咨询取消了吗？怎么考？报考条件是什么？壹点灵为您提供系统课程培训、北师大名师主讲，成就婚姻家庭咨询崭新人生。";

    dataInfo.data.wechat = {
      "title": "婚姻家庭咨询报名",
      "desc": "2019年人社部婚姻家庭咨询证书报名",
      "host": req.headers.host,
      "url": req.url,
      "cover": "/src/images/global/wechat-share.png",
    }
  };

  return {
    dataInfo,
    source,
    meta,
    config,
  }
}
