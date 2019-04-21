
const mConfig = require("m.config");
const qiniu = require("m.qiniu");

module.exports.start = function(app) {

	app.post("/api/qiniu/getUploadToken", function(req, res){

    res.json(
      Object.assign( {}, mConfig.dataJson,
        {
          "data": {
            uploadToken: qiniu.getUploadToken(),
          }
        }
      )
    );
  });

}
