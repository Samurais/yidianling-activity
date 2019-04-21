const path   = require("path");
const url   = require("url");
const routers = require("../../router");

module.exports.start = function(app) {

  app.get("/activity/*", function(req, res){

    const dataInfo = {data: ""};
    const source = "activity";
    let meta = {
      title: "壹点灵",
      keywords: "",
      description: "",
    }

    let pathname = url.parse(req.url, true).pathname;

    dataInfo.data = {
      pathname,
    }

    if(req.url.indexOf("/activity/qs") == 0){
      meta.title = "倾诉指南";
    };
    
    // if(req.url.indexOf("/activity/act1010") == 0){
    //   meta.title = "壹点灵·世界精神卫生日";
    // };

    routers.start(req, res, {dataInfo, source, meta});
  });

  app.get("/ceshi/*", function(req, res){

    const dataInfo = {data: ""};
    const source = "activity";
    let meta = {
      title: "",
      keywords: "",
      description: "",
    }

    if(req.url.indexOf("/ceshi/cs") == 0){
      meta.title = "测评落地页";
    };

    routers.start(req, res, {dataInfo, source, meta});
  });

  // 壹点灵大学 - 签到
  app.get("/daxue/signup", function(req, res){

    const dataInfo = {data: ""};
    const source = "daxue/signup";
    const meta = {
      title: "壹点灵大学 - 签到",
      keywords: "",
      description: "",
    }

    routers.start(req, res, {dataInfo, source, meta});
  });

  // canvas
  app.get("/other/*", function(req, res){

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
    }

    if(pathname == "/other/layout"){
      meta.title = "壹点灵 布局";
      config.jslist = {
        "zoosnet": null
      }
    };

    routers.start(req, res, {dataInfo, source, meta});
  });

  // 中秋节
  // app.get("/festival/*", function(req, res){

  //   const dataInfo = {data: ""};
  //   const source = "festival/MidAutumn";
  //   const meta = {
  //     title: "中秋",
  //     keywords: "",
  //     description: "",
  //   }

  //   routers.start(req, res, dataInfo, source, meta);
  // });

  const config = require("m.config").G;

  // 早前活动
  app.get("/service_rules", function(req, res){
    res.render('views/other/service_rules/index', {}, function(err, html) {
      res.send(html);
    });
  });

  // 早前活动
  app.get("/service_rules_before_save", function(req, res){
    res.render('views/other/service_rules_before_save/index', {}, function(err, html) {
      res.send(html);
    });
  });

  // 早前活动
  app.get("/service_rules_saved", function(req, res){
    res.render('views/other/service_rules_saved/index', {}, function(err, html) {
      res.send(html);
    });
  });

  // 七夕活动
  // app.get("/views/qixi", function(req, res){
  //   res.render('views/other/qixi', {"G": config}, function(err, html) {
  //     res.send(html);
  //   });
  // });

  // 隐私
  app.get("/html/privacy", function(req, res){
    res.render('views/other/privacy', {"G": config}, function(err, html) {
      res.send(html);
    });
  });

  // 心暖 - love - pc
  app.get("/pc/qinggan", function(req, res){
    res.render('views/other/qinggan/index', {}, function(err, html) {
      res.send(html);
    });
  });

  // 早前活动
  app.get("/20181119", function(req, res){

    res.render('views/other/page20181119/index', {}, function(err, html) {
      res.send(html);
    });
  });

}
