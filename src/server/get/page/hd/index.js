
const routers = require("../../router");
const url = require("url");
const mConfig = require("m.config");
const qiniu = require("m.qiniu");

module.exports.start = function(app) {

  app.get("/hd/*", function(req, res){
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
        "title": "壹点灵",
        "desc": "壹点灵",
        "host": req.headers.host,
        "url": req.url,
        "cover": "/src/images/global/wechat-share.png",
      }
    }

    // if(pathname == "/hd/m/20181111"){
    //   meta.title = "壹点灵·双11解忧杂货店";
    // };

    if(pathname == "/hd/m/20181228"){
      meta.title = "心理咨询师年终总结-2018心理咨询服务回顾-壹点灵";
      meta.keywords = "心理咨询年终总结，咨询师总结";
      meta.description = "2018年，作为咨询师的你在壹点灵为心理健康事业付出了什么，又收获了什么？抚慰心灵，疗愈创伤，健康中国的梦想才得以实现。壹点灵2018年心理咨询师年终总结，因你而精彩！";

      dataInfo.data.wechat.title = "这是我在壹点灵心理咨询2018年的年终总结，快来围观吧";
      dataInfo.data.wechat.desc = "想知道18年我擅长哪些咨询？想知道我为健康中国做了哪些贡献？快点开看看吧";
      dataInfo.data.wechat.cover = "/src/images/activity/hd/20181228/minhui-wechat-share.png";

      dataInfo.data.jump = mConfig.jump[Config.env];

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

    if(pathname == "/hd/m/20190123"){
      meta.title = "5分钟，1张画，读懂你不为人知的内心世界";
      meta.keywords = "5分钟，1张画，读懂你不为人知的内心世界";
      meta.description = "比星座、血型准太多的“房树人”绘画测试，专业心理咨询师解读，发现真实的自己。";

      dataInfo.data.wechat.title = "5分钟，1张画，读懂你不为人知的内心世界";
      dataInfo.data.wechat.desc = "比星座、血型准太多的“房树人”绘画测试，专业心理咨询师解读，发现真实的自己。";
      dataInfo.data.wechat.cover = "/src/images/activity/hd/20190123/share200x200.png";

      dataInfo.data.jump = mConfig.jump[Config.env];

      config.jslist = {
        "iscroll": {
          "url": "/lib/iscroll.js",
        },
        "zoosnet": null
      }
    };

    routers.start(req, res, {dataInfo, source, meta, config});
  });
}
