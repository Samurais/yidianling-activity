
const url = require("url");

module.exports.start = function(app) {
  app.get("/lovem/*", function(req, res){

    let pathname = url.parse(req.url, true).pathname;

    if(pathname == "/lovem/wanjiuhunyin.html"){
      res.render('views/other/m.love.yidianling.com/wanjiuhunyin.html', {}, function(err, html) {
        res.send(html);
      });
    }


  });
};
