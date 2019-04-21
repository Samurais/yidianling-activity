
const url = require("url");
const mConfig = require("m.config");

module.exports.start = function(req, res) {
  let dataInfo = {data: ""};
  let source = "term";
  let config = {};

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

  if(pathname == "/m/20190122"){
    meta.title = "春节焦虑有哪些症状，怎么办-春节焦虑症候群倾诉-壹点灵";
    meta.keywords = "春节焦虑症，春节焦虑症候群，焦虑倾诉";
    meta.description = "临近春节，焦虑感越来越严重怎么办？焦虑不可怕，壹点灵心理倾诉来帮您！专业心理咨询师，带你走出春节焦虑症。现在加入立领百元红包，先到先得！";

    dataInfo.data.wechat = {
      "title": "春节焦虑治愈所-壹点灵心理",
      "desc": "走出春节焦虑，方法全在这里",
      "host": req.headers.host,
      "url": req.url,
      "cover": "/src/images/global/wechat-share.png",
    }

    config.jslist = {
      "zoosnet": null
    }
  };

  if(pathname == "/m/20190129"){
    meta.title = "壹点倾诉--联合黑卡权益领取";
    meta.keywords = "壹点倾诉--联合黑卡权益领取";
    meta.description = "壹点倾诉--联合黑卡权益领取";

    dataInfo.data.wechat = {
      "title": "壹点倾诉--聆听心声，带走烦恼",
      "desc": "烦恼无处诉说？心事没人能懂？壹点倾诉，专业心理咨询师，用心聆听，为您解忧。",
      "host": req.headers.host,
      "url": req.url,
      "cover": "/src/images/global/wechat-share.png",
    }

    config.jslist = {
      "zoosnet": null
    }
  };

  return {
    dataInfo,
    source,
    meta,
    config,
  }
}
