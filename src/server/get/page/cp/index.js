
const routers = require("../../router");
const url = require("url");

module.exports.start = function(app) {

  app.get("/cp/*", function(req, res){
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
      wechat: {
        "title": "壹点灵",
        "desc": "壹点灵",
        "host": req.headers.host,
        "url": req.url,
        "cover": "/src/images/activity/m/biaodan/dialog.jpg",
      }
    }

    if(pathname == "/cp/m/20181115"){
      meta.title = "职场压力";
      meta.keywords = "压力心理咨询，情绪压力咨询，工作压力咨询";
      meta.description = "工作压力让你不堪重负、敏感易怒、效率低下？生活压力让你情绪低落、抑郁悲观、兴趣减退？如果你就是这样的“高压”一族，壹点灵心理服务平台来帮您。立刻检测压力值，中科院认证专家帮您释放压力，卸下包袱。壹点灵，开心一点，烦恼不见。";

      config.jslist = {
        "zoosnet": null
      }
    };
    if(pathname == "/cp/m/20190104"){
      meta.title = "心理测试大全-心理健康测评-心理学测试题";
      meta.keywords = "心理测试，性格测试，人格测试";
      meta.description = "我的性格适合什么工作？我的爱情观是怎样的？怎样知道自己心理压力水平？来专业心理测试大全，帮你探寻内心深处最真实的自己。";
      dataInfo.data.wechat.title = "专业心理测评";
      dataInfo.data.wechat.cover = "/src/images/global/wechat-share.png";
      dataInfo.data.wechat.desc = "这里有最专业、最有趣的心理测评，帮你全方位、深层次的了解自己";
      config.jslist = {
        "zoosnet": null
      }
    };
    if(pathname == "/cp/m/20190228"){
      meta.title = "心理测试大全-心理健康测评-心理学测试题";
      meta.keywords = "心理测试，性格测试，人格测试";
      meta.description = "我的性格适合什么工作？我的爱情观是怎样的？怎样知道自己心理压力水平？来专业心理测试大全，帮你探寻内心深处最真实的自己。";
      dataInfo.data.wechat.title = "专业心理测评";
      dataInfo.data.wechat.cover = "/src/images/global/wechat-share.png";
      dataInfo.data.wechat.desc = "这里有最专业、最有趣的心理测评，帮你全方位、深层次的了解自己";
      config.jslist = {
        "zoosnet": null
      }
    };

    if(pathname == "/cp/m/20190328"){
      meta.title = "专业心理测评";
      meta.keywords = "心理测试，性格测试，人格测试";
      meta.description = "我的性格适合什么工作？我的爱情观是怎样的？怎样知道自己心理压力水平？来专业心理测试大全，帮你探寻内心深处最真实的自己。";
      dataInfo.data.wechat.title = "专业心理测评";
      dataInfo.data.wechat.cover = "/src/images/global/wechat-share.png";
      dataInfo.data.wechat.desc = "这里有最专业、最有趣的心理测评，帮你全方位、深层次的了解自己";
      config.jslist = {
        "zoosnet": null
      }
    };

    routers.start(req, res, {dataInfo, source, meta, config});
  });
}
