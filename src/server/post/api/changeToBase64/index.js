let http = require('http');

module.exports.start = function(app) {

	app.post("/api/changeToBase64", function(req, res){

    try {
      http.get(req.body.url,function(ress){
        let chunks = []; //用于保存网络请求不断加载传输的缓冲数据
        let size = 0;　　 //保存缓冲数据的总长度

      　　ress.on('data',function(chunk){
      　　　　chunks.push(chunk);
      　　　　　　　　　
      　　　　size += chunk.length;
      　　});

        ress.on('error',function(err){
          　　　　res.json({
                  data: err
                });
        　　});

      　　ress.on('end',function(err){
          let data = Buffer.concat(chunks, size);
          let base64Img = data.toString('base64');
    　　　　res.json({
            data: base64Img
          });　
      　　});

        });
    } catch (err) {
      res.json({
        data: "请求异常",
        msg: new Exception(e)
      });　
       throw new Exception(e);
    }



	});
}
