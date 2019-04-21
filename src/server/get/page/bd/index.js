
const routers = require("../../router");
const url = require("url");

module.exports.start = function(app) {

  app.get("/bd/*", function(req, res){
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

    if(pathname == "/bd/m/sw-xinrenzhuanxiang/20181106"){
      meta.title = "新人大礼等您拿";
    };

    routers.start(req, res, {dataInfo, source, meta});
  });
}
