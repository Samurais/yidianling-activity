const routers = require("../../router");

const old = require("./old");
const longterm = require("./longterm");
const term = require("./term");

module.exports.start = function(app) {

  app.get(/^\/m\/?$|^\/m\/+/, function(req, res){
    let oldData = old.start(req, res);
    let longtermData = longterm.start(req, res);
    let termData = term.start(req, res);

    if(longtermData.meta.title != "") {
      routers.start(req, res, longtermData);
    }

    if(oldData.meta.title != "") {
      routers.start(req, res, oldData);
    }

    if(termData.meta.title != "") {
      routers.start(req, res, termData);
    }

    //routers.start(req, res, dataInfo, source, meta, config);
  });
}
