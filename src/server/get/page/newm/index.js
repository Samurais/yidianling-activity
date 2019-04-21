
const routers = require("../../router");
const url = require("url");

module.exports.start = function(app) {

  app.get("/newm/*", function(req, res){
    const dataInfo = {data: ""};
    const source = "activity";
    const config = {
      // zoosnetSiteid: "KHT34021062",
      // zoosnetType: "kht",
    };
    let meta = {
      title: "壹点灵",
      keywords: "",
      description: "",
    }

    let pathname = url.parse(req.url, true).pathname;

    dataInfo.data = {
      pathname,
    }

    if(req.url.indexOf("/newm/zonghe") == 0){
      meta.title = "壹点灵-心理热线 专题";
    };

    routers.start(req, res, {dataInfo, source, meta, config});
  });
}
