
const routers = require("../../router");
const url = require("url");

module.exports.start = function(app) {

  app.get("/love/*", function(req, res){
    const dataInfo = {data: ""};
    const source = "activity";
    let meta = {
      title: "壹点灵",
      keywords: "",
      description: "",
    }

    let config = {};

    config.jslist = {
      "zoosnet": {
        "url": "https://kht.zoosnet.net/JS/LsJS.aspx?siteid=KHT34021062&amp;float=1&amp;lng=cn",
      }
    }

    let pathname = url.parse(req.url, true).pathname;

    dataInfo.data = {
      pathname,
    }

    if(pathname == "/love/feed/m/20181130"){
      meta.title = "怎样挽回婚姻-挽回婚姻的方法-壹点灵情感挽回";
      meta.keywords = "挽回婚姻，情感挽回，挽回老公，挽回老婆";
      meta.description = "婚姻即将破碎，爱情黯淡无光，如何正确挽回一段感情，壹点灵心理情感挽回团队，为您提供专业心理咨询师一对一服务，全程隐私保护，让幸福重新降临。";

      dataInfo.data.wechat = {
        "title": "怎样挽回婚姻-挽回婚姻的方法-壹点灵情感挽回",
        "desc": "婚姻即将破碎，爱情黯淡无光，如何正确挽回一段感情，壹点灵心理情感挽回团队，为您提供专业心理咨询师一对一服务，全程隐私保护，让幸福重新降临。",
        "host": req.headers.host,
        "url": req.url,
        "cover": "/src/images/activity/love/feed/share.jpg",
      }
    };

    if(pathname == "/love/wanhui/m/20181130"){
      meta.title = "婚姻心理咨询服务-情感挽回-夫妻家庭心理咨询";
      meta.keywords = "婚姻心理咨询，情感挽回，家庭心理咨询";
      meta.description = "壹点灵婚姻心理服务，天猫行业销量遥遥领先，认证专家全程一对一服务。挽回爱人，保卫婚姻，壹点灵为您的爱情保驾护航。";

      dataInfo.data.wechat = {
        "title": "婚姻心理咨询服务-情感挽回-夫妻家庭心理咨询",
        "desc": "壹点灵婚姻心理服务，天猫行业销量遥遥领先，认证专家全程一对一服务。挽回爱人，保卫婚姻，壹点灵为您的爱情保驾护航。",
        "host": req.headers.host,
        "url": req.url,
        "cover": "/src/images/activity/love/feed/share.jpg",
      }
    };

    if(pathname == "/love/wanhui/m/20181130-1"){
      meta.title = "挽救爱情-修复婚姻-壹点灵专业家庭感情婚姻挽回服务";
      meta.keywords = "婚姻挽救，分离第三者，挽回婚姻";
      meta.description = "婚姻挽回认准行业壹点灵，天猫心理咨询类目销量第一，服务满意客户21万，用事实说话。一对一隐私服务，7天无理由退款，让爱重见阳光。";

      dataInfo.data.wechat = {
        "title": "婚姻心理咨询服务-情感挽回-夫妻家庭心理咨询",
        "desc": "壹点灵婚姻心理服务，天猫行业销量遥遥领先，认证专家全程一对一服务。挽回爱人，保卫婚姻，壹点灵为您的爱情保驾护航。",
        "host": req.headers.host,
        "url": req.url,
        "cover": "/src/images/activity/love/feed/share.jpg",
      }
    };
    if(pathname == "/love/wanhui/m/20181130-A3"){
      meta.title = "婚姻心理咨询服务-情感挽回-夫妻家庭心理咨询";
      meta.keywords = "婚姻心理咨询，情感挽回，家庭心理咨询";
      meta.description = "壹点灵婚姻心理服务，天猫行业销量遥遥领先，认证专家全程一对一服务。挽回爱人，保卫婚姻，壹点灵为您的爱情保驾护航。";

      dataInfo.data.wechat = {
        "title": "婚姻心理咨询服务-情感挽回-夫妻家庭心理咨询",
        "desc": "壹点灵婚姻心理服务，天猫行业销量遥遥领先，认证专家全程一对一服务。挽回爱人，保卫婚姻，壹点灵为您的爱情保驾护航。",
        "host": req.headers.host,
        "url": req.url,
        "cover": "/src/images/activity/love/feed/share.jpg",
      }
    };
    if(pathname == "/love/wanhui/m/20181130-A4"){
      meta.title = "婚姻心理咨询服务-情感挽回-夫妻家庭心理咨询";
      meta.keywords = "婚姻心理咨询，情感挽回，家庭心理咨询";
      meta.description = "壹点灵婚姻心理服务，天猫行业销量遥遥领先，认证专家全程一对一服务。挽回爱人，保卫婚姻，壹点灵为您的爱情保驾护航。";

      dataInfo.data.wechat = {
        "title": "婚姻心理咨询服务-情感挽回-夫妻家庭心理咨询",
        "desc": "壹点灵婚姻心理服务，天猫行业销量遥遥领先，认证专家全程一对一服务。挽回爱人，保卫婚姻，壹点灵为您的爱情保驾护航。",
        "host": req.headers.host,
        "url": req.url,
        "cover": "/src/images/activity/love/feed/share.jpg",
      }
    };
    if(pathname == "/love/wanhui/m/20190129"){
      meta.title = "老婆提离婚怎么办-怎样挽回婚姻-壹点灵";
      meta.keywords = "爱情挽回，婚姻挽回，离婚挽回";
      meta.description = "老婆提离婚怎么办？怎样挽回老婆的心和婚姻？壹点灵专业情感心理咨询，帮您解决婚姻危机，用心理学解决婚姻和感情问题。";

      dataInfo.data.wechat = {
        "title": "老婆提离婚怎么办-怎样挽回婚姻-壹点灵",
        "desc": "老婆提离婚怎么办？怎样挽回老婆的心和婚姻？壹点灵专业情感心理咨询，帮您解决婚姻危机，用心理学解决婚姻和感情问题。",
        "host": req.headers.host,
        "url": req.url,
        "cover": "/src/images/activity/love/feed/share.jpg",
      }
    };
    if(pathname == "/love/wanhui/m/20190130"){
      meta.title = "如何挽回提离婚的老婆-婚姻危机处理-壹点灵";
      meta.keywords = "老婆要离婚，婚姻挽回，离婚怎么办";
      meta.description = "当婚姻出现了危机，最爱的老婆提出了离婚时，应该怎么办？我该如何挽回爱情？壹点灵专业情感心理咨询，用心理学为您呵护爱情，守卫婚姻。";

      dataInfo.data.wechat = {
        "title": "如何挽回提离婚的老婆-婚姻危机处理-壹点灵",
        "desc": "当婚姻出现了危机，最爱的老婆提出了离婚时，应该怎么办？我该如何挽回爱情？壹点灵专业情感心理咨询，用心理学为您呵护爱情，守卫婚姻。",
        "host": req.headers.host,
        "url": req.url,
        "cover": "/src/images/activity/love/feed/share.jpg",
      }
    };
    if(pathname == "/love/wanhui/m/20190218"){
      meta.title = "如何挽回提离婚的老婆-婚姻危机处理-壹点灵";
      meta.keywords = "老婆要离婚，婚姻挽回，离婚怎么办";
      meta.description = "当婚姻出现了危机，最爱的老婆提出了离婚时，应该怎么办？我该如何挽回爱情？壹点灵专业情感心理咨询，用心理学为您呵护爱情，守卫婚姻。";

      dataInfo.data.wechat = {
        "title": "如何挽回提离婚的老婆-婚姻危机处理-壹点灵",
        "desc": "当婚姻出现了危机，最爱的老婆提出了离婚时，应该怎么办？我该如何挽回爱情？壹点灵专业情感心理咨询，用心理学为您呵护爱情，守卫婚姻。",
        "host": req.headers.host,
        "url": req.url,
        "cover": "/src/images/global/wechat-share.png",
      }
    };
    if(pathname == "/love/wanhui/m/20190304"){
      meta.title = "如何挽回提离婚的老婆-婚姻危机处理-壹点灵";
      meta.keywords = "老婆要离婚，婚姻挽回，离婚怎么办";
      meta.description = "当婚姻出现了危机，最爱的老婆提出了离婚时，应该怎么办？我该如何挽回爱情？壹点灵专业情感心理咨询，用心理学为您呵护爱情，守卫婚姻。";

      dataInfo.data.wechat = {
        "title": "如何挽回提离婚的老婆-婚姻危机处理-壹点灵",
        "desc": "当婚姻出现了危机，最爱的老婆提出了离婚时，应该怎么办？我该如何挽回爱情？壹点灵专业情感心理咨询，用心理学为您呵护爱情，守卫婚姻。",
        "host": req.headers.host,
        "url": req.url,
        "cover": "/src/images/global/wechat-share.png",
      }
    };
    if(pathname == "/love/wanhui/m/20190311"){
      meta.title = "老公出轨我该怎么挽回他-婚姻危机处理-壹点灵";
      meta.keywords = "老公要离婚，婚姻挽回，离婚怎么办";
      meta.description = "当婚姻出现了危机，最爱的老公提出了离婚时，应该怎么办？我该如何挽回爱情？壹点灵专业情感心理咨询，用心理学为您呵护爱情，守卫婚姻。";

      dataInfo.data.wechat = {
        "title": "老公出轨我该怎么挽回他-婚姻危机处理-壹点灵",
        "desc": "当婚姻出现了危机，最爱的老公提出了离婚时，应该怎么办？我该如何挽回爱情？壹点灵专业情感心理咨询，用心理学为您呵护爱情，守卫婚姻。",
        "host": req.headers.host,
        "url": req.url,
        "cover": "/src/images/global/wechat-share.png",
      }
    };
    if(pathname == "/love/wanhui/m/20190315"){
      meta.title = "离婚后怎么挽回ta - 婚姻危机处理 - 壹点灵";
      meta.keywords = "离婚挽回，复婚挽回。";
      meta.description = "离婚后怎么挽回他？破镜重圆，离婚复合应该怎么做？壹点灵专业情感心理咨询，用心理学为您呵护爱情，守卫婚姻。";

      dataInfo.data.wechat = {
        "title": "如何挽回提离婚的老婆-婚姻危机处理-壹点灵",
        "desc": "离婚后怎么挽回他？破镜重圆，离婚复合应该怎么做？壹点灵专业情感心理咨询，用心理学为您呵护爱情，守卫婚姻。",
        "host": req.headers.host,
        "url": req.url,
        "cover": "/src/images/global/wechat-share.png",
      }
    };
    if(pathname == "/love/wanhui/m/20190327"){
      meta.title = "老公怎样挽回 - 婚姻危机处理 - 壹点灵";
      meta.keywords = "挽回老公，婚姻挽回，爱情挽回";
      meta.description = "背叛了老公如何挽回他？挽回老公最有效的话是什么？挽回老公小妙招。壹点灵专业情感心理咨询，用心理学为您呵护爱情，守卫婚姻。";

      dataInfo.data.wechat = {
        "title": "老公怎样挽回 - 婚姻危机处理 - 壹点灵",
        "desc": "背叛了老公如何挽回他？挽回老公最有效的话是什么？挽回老公小妙招。壹点灵专业情感心理咨询，用心理学为您呵护爱情，守卫婚姻。",
        "host": req.headers.host,
        "url": req.url,
        "cover": "/src/images/global/wechat-share.png",
      }
    };
    if(pathname == "/love/wanhui/m/20190318"){
      meta.title = "分居后怎样挽回婚姻 - 婚姻危机处理 - 壹点灵";
      meta.keywords = "分居挽回，婚姻挽回，情感挽回";
      meta.description = "分居后应该怎样挽回婚姻？分居怎么处理才能避免离婚？壹点灵情感咨询师为您呵护爱情，守卫婚姻。";

      dataInfo.data.wechat = {
        "title": "分居后怎样挽回婚姻 - 婚姻危机处理 - 壹点灵",
        "desc": "分居后应该怎样挽回婚姻？分居怎么处理才能避免离婚？壹点灵情感咨询师为您呵护爱情，守卫婚姻。",
        "host": req.headers.host,
        "url": req.url,
        "cover": "/src/images/global/wechat-share.png",
      }
    };
    if(pathname == "/love/wanhui/m/20190329"){
      meta.title = "分居后怎样挽回婚姻 - 婚姻危机处理 - 壹点灵";
      meta.keywords = "分居挽回，婚姻挽回，情感挽回";
      meta.description = "分居后应该怎样挽回婚姻？分居怎么处理才能避免离婚？壹点灵情感咨询师为您呵护爱情，守卫婚姻。";

      dataInfo.data.wechat = {
        "title": "分居后怎样挽回婚姻 - 婚姻危机处理 - 壹点灵",
        "desc": "分居后应该怎样挽回婚姻？分居怎么处理才能避免离婚？壹点灵情感咨询师为您呵护爱情，守卫婚姻。",
        "host": req.headers.host,
        "url": req.url,
        "cover": "/src/images/global/wechat-share.png",
      }
    };

    routers.start(req, res, {dataInfo, source, meta, config});
  });




}
