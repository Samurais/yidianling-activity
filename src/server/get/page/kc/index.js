
const routers = require("../../router");

const old = require("./old");
const longterm = require("./longterm");
const term = require("./term");

module.exports.start = function(app) {

  app.get("/kc/*", function(req, res){

    let oldData = old.start(req, res);
    let longtermData = longterm.start(req, res);
    let termData = term.start(req, res);

    if(longtermData.meta.title != "") {
      routers.start(req, res, longtermData);
      return;
    }

    if(oldData.meta.title != "") {
      routers.start(req, res, oldData);
      return;
    }

    if(termData.meta.title != "") {
      routers.start(req, res, termData);
      return;
    }

    routers.start(req, res, oldData);
  });
}
