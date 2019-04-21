
const routers = require("./router");
const url = require("url");
const mysql = require("m.mysql");
const async = require("m.async");
const dubbo = require("m.dubbo");

module.exports.start = function(app){

  // 引入mysql数据库
  mysql.init();

  // 引入并行请求
  async.init();

  // 接入dubbo
  dubbo.init();

  app.get("/t/*", async function(req, res){

    // 来源
    log.debug(`URL： ${req.url} ~~~~~~~ 来源： ${req.headers['user-agent']}`);

    let dataInfo = {
      data: {},
      wechat: {},
      meta: {},
      config: {},
      source: "t",
    };

    routers.start(req, res, dataInfo);
  });

}
