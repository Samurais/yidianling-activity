
const url = require("url");
const mConfig = require("m.config");

module.exports.start = function(req, res) {
  let dataInfo = {data: ""};
  let source = "longterm";

  let config = {};

  config.jslist = {
    "zoosnet": null
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
      "cover": "/src/images/activity/m/biaodan/dialog.jpg",
    }
  }

  if(pathname == "/m/appdownload"){

    meta.title = "壹点灵心理APP官方下载，心理咨询APP免费下载";
    meta.keywords = "壹点灵，壹点灵心理，壹点灵APP，心理咨询";
    meta.description = "壹点灵心理APP，官方认证下载，现在注册即送30元红包。资深心理咨询师，首单倾诉免费，解决您的各类烦恼。";

    dataInfo.data.wechat = {
      "title": "壹点灵心理APP",
      "desc": "壹点灵心理APP官方免费下载，现在下载注册就送30元红包哦！",
      "host": req.headers.host,
      "url": req.url,
      "cover": "/src/images/longterm/wechat.png",
    }

    dataInfo.data.jump = mConfig.jump[Config.env];
  };

  return {
    dataInfo,
    source,
    meta,
    config,
  }
}
