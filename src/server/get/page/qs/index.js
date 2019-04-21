
const routers = require("../../router");
const url = require("url");
const mConfig = require("m.config");
const qiniu = require("m.qiniu");

module.exports.start = function(app) {

  app.get("/qs/*", function(req, res){
    const dataInfo = {data: ""};
    const source = "activity";
    let config = {};
    let meta = {
      title: "壹点灵",
      keywords: "",
      description: "",
    }

    let pathname = url.parse(req.url, true).pathname;

    dataInfo.data = {
      pathname,
      wechat: {
        "title": "情感倾诉热线-倾诉烦恼-壹点灵",
        "desc": "你是否心中烦闷焦虑却无人诉说？是否面临纠结无助却没人能懂？心有千千结，来找壹点灵就对了。为您甄选专业心理咨询师，随时随地排忧解难。",
        "host": req.headers.host,
        "url": req.url,
        "cover": "/src/images/global/wechat-share.png",
      }
    }

    // if(pathname == "/hd/m/20181111"){
    //   meta.title = "壹点灵·双11解忧杂货店";
    // };
    if(pathname == "/qs/20190130"){
      meta.title = "情感倾诉热线-倾诉烦恼-壹点灵";
      meta.keywords = "情感倾诉，倾诉烦恼，心情倾诉";
      meta.description = "你是否心中烦闷焦虑却无人诉说？是否面临纠结无助却没人能懂？心有千千结，来找壹点灵就对了。为您甄选专业心理咨询师，随时随地排忧解难。";

      dataInfo.data.wechat.title = "聆听心声，带走烦恼";
      dataInfo.data.wechat.desc = "烦恼无处诉说？心事没人能懂？壹点倾诉，专业心理咨询师，用心聆听，为您解忧。";

      config.jslist = {
        "zoosnet": null
      }

    };

    if(pathname == "/qs/20190225"){
      meta.title = "情感倾诉热线-倾诉烦恼-壹点灵";
      meta.keywords = "情感倾诉，倾诉烦恼，心情倾诉";
      meta.description = "你是否心中烦闷焦虑却无人诉说？是否面临纠结无助却没人能懂？心有千千结，来找壹点灵就对了。为您甄选专业心理咨询师，随时随地排忧解难。";

      dataInfo.data.wechat.title = "聆听心声，带走烦恼";
      dataInfo.data.wechat.desc = "烦恼无处诉说？心事没人能懂？壹点倾诉，专业心理咨询师，用心聆听，为您解忧。";

      config.jslist = {
        "zoosnet": null
      }

    };

    if(pathname == "/qs/tangka20190218"){
      meta.title = "情感倾诉热线-倾诉烦恼-壹点灵";
      meta.keywords = "情感倾诉，倾诉烦恼，心情倾诉";
      meta.description = "你是否心中烦闷焦虑却无人诉说？是否面临纠结无助却没人能懂？心有千千结，来找壹点灵就对了。为您甄选专业心理咨询师，随时随地排忧解难。";

      dataInfo.data.wechat.title = "聆听心声，带走烦恼";
      dataInfo.data.wechat.desc = "烦恼无处诉说？心事没人能懂？壹点倾诉，专业心理咨询师，用心聆听，为您解忧。";

      config.jslist = {
        "zoosnet": null
      }

    };

    if(pathname == "/hd/20190131"){
      meta.title = "中华儿慈基金会公益活动";
      meta.keywords = "中华儿慈基金会公益活动";
      meta.description = "中华儿慈基金会公益活动";

      dataInfo.data.wechat.title = "中华儿慈基金会公益活动";
      dataInfo.data.wechat.desc = "中华儿慈基金会公益活动";

      config.jslist = {
        "html2canvas": {
          "url": "/lib/html2canvas.min.js",
        },
        "canvas2image": {
          "url": "/lib/canvas2image.js",
        },
        "preloadjs": {
          "url": "/lib/createjs/preloadjs.min.js",
        },
        "zoosnet": null
      }
    };

    if(pathname == "/qs/20190325/p1" || pathname == "/qs/20190325/p2"){
      meta.title = "情感倾诉热线-倾诉烦恼-壹点灵";
      meta.keywords = "情感倾诉，倾诉烦恼，心情倾诉";
      meta.description = "你是否心中烦闷焦虑却无人诉说？是否面临纠结无助却没人能懂？心有千千结，来找壹点灵就对了。为您甄选专业心理咨询师，随时随地排忧解难。";

      dataInfo.data.wechat.title = "聆听心声，带走烦恼";
      dataInfo.data.wechat.desc = "烦恼无处诉说？心事没人能懂？壹点倾诉，专业心理咨询师，用心聆听，为您解忧。";

      // config.jslist = {
      //   "zoosnet": null
      // }

    };

    routers.start(req, res, {dataInfo, source, meta, config});
  });
}
