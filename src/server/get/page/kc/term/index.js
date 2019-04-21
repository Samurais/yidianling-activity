
const url = require("url");
const mConfig = require("m.config");

module.exports.start = function(req, res) {
  let dataInfo = {data: ""};
  let source = "term";

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
  if(pathname == "/kc/m/20181220"){
    meta.title = "恋爱婚姻培训课程 - 情感课程圣诞大促销 - 壹点灵";
    meta.keywords = "情爱教程，恋爱心理，婚姻心理课程";
    meta.description = "圣诞节想和ta亲密升级？想让你们的爱情加速升温？壹点灵为您准备超多情爱心理课程，1元秒杀，低至2折！让爱情冒泡，让婚姻美满，壹点灵情感婚姻课程大放价，还不快来抢购！";
    dataInfo.data.wechat.title = "你这一辈子要用到的恋爱套路都在这里了";
    dataInfo.data.wechat.cover = "/src/images/term/kc/m/20181220/share.jpg";
    dataInfo.data.wechat.desc = "你的圣诞袜准备好了吗？";
  };

  if(pathname == "/kc/20190130"){
    meta.title = "爆款情感亲子情绪心理学课程-新用户首单0元购-壹点灵";
    meta.keywords = "心理学课程，0元购";
    meta.description = "新用户福利大派送！精品心理学课程首单0元购！涵盖情感婚恋、亲子教育、情绪压力等主流心理学类别，学心理课程，就来壹点灵！";
    dataInfo.data.wechat.title = "总有一个领域，你比别人更专业";
    dataInfo.data.wechat.desc = "学习让自己随性生活，学习谈一场稳定的爱恋，学习培养一位懂事的孩子，都是一种技能";

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
      "zoosnet": {
        // "url": "//lvt.zoosnet.net/JS/LsJS.aspx?siteid=LVT51091364&float=1&lng=cn",
        "url": null
      },
    }
  };

  return {
    dataInfo,
    source,
    meta,
    config,
  }
}
