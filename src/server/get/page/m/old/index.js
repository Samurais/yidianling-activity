
const url = require("url");

module.exports.start = function(req, res) {
  let dataInfo = {data: ""};
  let source = "activity";
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

  if(pathname == "/m/qinzi"){
    meta.title = "壹点灵-您身边的亲子心理教育专家";
  };

  if(pathname == "/m/zhuzhan"){
    meta.title = "壹点灵-心理热线 在线咨询";
  };
  if(pathname == "/m/qinggan"){
    meta.title = "壹点灵-心理热线 在线咨询";
  };
  if(pathname == "/m/biaodan"){
    meta.title = "壹点灵-心理热线 预约";

    dataInfo.data.wechat = {
      "title": "壹点灵-心理热线 预约",
      "desc": "壹点灵-心理热线 预约",
      "host": req.headers.host,
      "url": req.url,
      "cover": "/src/images/activity/m/biaodan/dialog.jpg",
    }
  };

  if(pathname == "/m/zonghe"){
    meta.title = "壹点灵-心理热线 专题";
  };

  if(pathname == "/m/zhichang"){
    meta.title = "壹点灵-心理热线 职场";
  };

  if(pathname == "/m/hangzhou"){
    meta.title = "杭州心理咨询机构-壹点灵心理咨询中心";
    meta.keywords = "杭州心理咨询中心，杭州心理咨询机构";
    meta.description = "杭州心理咨询哪里好？首选壹点灵杭州心理咨询中心，中科院领衔专家咨询师，天猫线上服务客户超21万。贴心隐私心理服务，一点阳光，温暖心灵。";

    config.jslist = {
      "zoosnet": {
        "url": "//lvt.zoosnet.net/JS/LsJS.aspx?siteid=LVT33597481&float=1&lng=cn",
      }
    }
  };

  if(pathname == "/m/shanghai"){
    meta.title = "上海心理咨询机构-上海在线心理咨询-壹点灵";
    meta.keywords = "上海心理咨询，上海心理咨询机构，上海在线心理咨询";
    meta.description = "上海壹点灵心理咨询，汇聚众多上海认证心理咨询师，专业的心理服务，放心的隐私保障，为您解决私人心理难题。找上海心理咨询师，就上壹点灵。";
    dataInfo.data.wechat = {
      "title": "壹点灵",
      "desc": "壹点灵",
      "host": req.headers.host,
      "url": req.url,
      "cover": "/src/images/global/wechat-share.png",
    }
    config.jslist = {
      "zoosnet": {
        "url": "//kht.zoosnet.net/JS/LsJS.aspx?siteid=KHT77661836&float=1&lng=cn",
      }
    }
  };

  if(pathname == "/m/beijing"){
    meta.title = "北京心理咨询机构-北京在线心理咨询-壹点灵";
    meta.keywords = "北京心理咨询，北京心理咨询机构，北京在线心理咨询";
    meta.description = "北京壹点灵心理咨询，汇聚众多北京认证心理咨询师，专业的心理服务，放心的隐私保障，为您解决私人心理难题。找北京心理咨询师，就上壹点灵。";
    dataInfo.data.wechat = {
      "title": "壹点灵",
      "desc": "壹点灵",
      "host": req.headers.host,
      "url": req.url,
      "cover": "/src/images/global/wechat-share.png",
    }
    config.jslist = {
      "zoosnet": {
        "url": "//kht.zoosnet.net/JS/LsJS.aspx?siteid=KHT77661836&float=1&lng=cn",
      }
    }
  };

  if(pathname == "/m/home"){
    meta.title = "在线心理医生，心理咨询一对一，心理咨询在线聊天-壹点灵";
    meta.keywords = "心理咨询，心理咨询价格表，心理咨询收费标准";
    meta.description = "职场心理受挫？情感纠葛迷茫？亲子教育困难？如果您正遭遇这些困惑，不妨从心理学角度来寻求解决。壹点灵超万名认证心理专家，顶尖权威团队，一对一服务，拯救您迷茫的心灵。";
    dataInfo.data.wechat = {
      "title": "壹点灵",
      "desc": "壹点灵",
      "host": req.headers.host,
      "url": req.url,
      "cover": "/src/images/global/wechat-share.png",
    }
  };

  if(pathname == "/m/homeA"){
    meta.title = "在线心理医生，心理咨询一对一，心理咨询在线聊天-壹点灵";
    meta.keywords = "心理咨询，心理咨询价格表，心理咨询收费标准";
    meta.description = "职场心理受挫？情感纠葛迷茫？亲子教育困难？如果您正遭遇这些困惑，不妨从心理学角度来寻求解决。壹点灵超万名认证心理专家，顶尖权威团队，一对一服务，拯救您迷茫的心灵。";
    dataInfo.data.wechat = {
      "title": "壹点灵",
      "desc": "壹点灵",
      "host": req.headers.host,
      "url": req.url,
      "cover": "/src/images/global/wechat-share.png",
    }
  };

  if(pathname == "/m/homeB"){
    meta.title = "在线心理医生，心理咨询一对一，心理咨询在线聊天-壹点灵";
    meta.keywords = "心理咨询，心理咨询价格表，心理咨询收费标准";
    meta.description = "职场心理受挫？情感纠葛迷茫？亲子教育困难？如果您正遭遇这些困惑，不妨从心理学角度来寻求解决。壹点灵超万名认证心理专家，顶尖权威团队，一对一服务，拯救您迷茫的心灵。";
    dataInfo.data.wechat = {
      "title": "壹点灵",
      "desc": "壹点灵",
      "host": req.headers.host,
      "url": req.url,
      "cover": "/src/images/global/wechat-share.png",
    }
  };
  // if(pathname == "/m" || pathname == "/m/"){
  //   meta.title = "上海心理咨询机构-上海在线心理咨询-壹点灵";
  //   meta.keywords = "上海心理咨询，上海心理咨询机构，上海在线心理咨询";
  //   meta.description = "上海壹点灵心理咨询，汇聚众多上海认证心理咨询师，专业的心理服务，放心的隐私保障，为您解决私人心理难题。找上海心理咨询师，就上壹点灵。";
  // };

  if(pathname == "/m/kc1"){
    meta.title = "壹点灵-心理咨询师考试报名";
  };

  if(pathname == "/m/rexian"){
    meta.title = "壹点灵-心理热线 在线咨询";

    dataInfo.data.wechat = {
      "title": "壹点灵-心理热线 在线咨询",
      "desc": "壹点灵-心理热线 在线咨询",
      "host": req.headers.host,
      "url": req.url,
      "cover": "/src/images/activity/m/biaodan/top-logo.png",
    }
  };

  if(pathname == "/m/xingxinli"){
    meta.title = "壹点灵-您身边的性心理专家";

    dataInfo.data.wechat = {
      "title": "壹点灵-您身边的性心理专家",
      "desc": "壹点灵-您身边的性心理专家",
      "host": req.headers.host,
      "url": req.url,
      "cover": "/src/images/activity/m/biaodan/top-logo.png",
    }
  };

  if(pathname == "/m/qingxu"){
    meta.title = "壹点灵-您身边的心理健康专家";

    dataInfo.data.wechat = {
      "title": "壹点灵-您身边的心理健康专家",
      "desc": "壹点灵-您身边的心理健康专家",
      "host": req.headers.host,
      "url": req.url,
      "cover": "/src/images/activity/m/biaodan/top-logo.png",
    }
  };

  return {
    dataInfo,
    source,
    meta,
    config,
  }
}
