
module.exports.start = function(app) {

  app.post("/api/qs", function(req, res){
    res.json({
      data: "这里是服务端返回的数据"
    });
  });
}
