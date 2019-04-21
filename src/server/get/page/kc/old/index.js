
const url = require("url");

module.exports.start = function(req, res) {
  let dataInfo = {data: ""};
  let source = "activity";
  let config = {};

  config.jslist = {
    "zoosnet": {
      "url": "//lvt.zoosnet.net/JS/LsJS.aspx?siteid=LVT51091364&float=1&lng=cn",
    }
  }

  let meta = {
    title: "",
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

  if(pathname == "/kc/m"){
    meta.title = "壹点灵-心理咨询师考试报名";
  };
  if(pathname == "/kc/m/love"){
    meta.title = "壹点灵-心理咨询师考试报名";
  };
  if(pathname == "/kc/m/20181116"){
    meta.title = "心理咨询师怎么报考，报考条件/收费标准如何，中科院认证培训机构报名入口 - 壹点灵";
    meta.keywords = "心理咨询师报名入口，报名官网，报名条件，报考流程，报考机构";
    meta.description = "2019年心理咨询师应该怎么报考？有哪些新政策和注意事项？哪里有权威培训机构？壹点灵为您指引最新心理咨询师报考信息，中科院/北师大专家团队，培训实践科学结合，心理咨询师考证认证壹点灵！";
  };

  if(pathname == "/kc/m/kc/qinzi"){
    meta.title = "家庭教育指导师培训 - 2019家庭教育师报考指导 - 家庭教育培训机构 - 壹点灵";
    meta.keywords = "家庭教育师，家庭教育培训，家庭教育师考证";
    meta.description = "壹点灵为您提供家庭教育指导师报名及考试信息，专业培训机构，家庭教育理论课程与实践案例结合，是您报考家庭教育指导师证的首选平台。";
    dataInfo.data.wechat.title = "家庭教育指导师";
    dataInfo.data.wechat.cover = "/src/images/activity/kc/qinzi/wechat.jpg";
    dataInfo.data.wechat.desc = "让每个孩子健康快乐成长，让每个家庭沐浴在爱的阳光下";
  };
  if(pathname == "/kc/m/marriage/20181206"){
    meta.title = "婚姻家庭咨询师报考-2019家庭婚姻咨询师报名考试时间-培训机构-壹点灵";
    meta.keywords = "婚姻家庭咨询师报名，婚姻家庭咨询师考证";
    meta.description = "2019年婚姻家庭咨询师什么时候报名？报考流程及考试流程如何？壹点灵婚姻家庭咨询师培训大平台，为您提供2019家庭婚姻咨询师报考指南，中科院专业导师团队，从入门学习到咨询实践一步到位。";
  };

  if(pathname == "/views/kc/index_m_1.html"){
    meta.title = "心理咨询师怎么报考，报考条件/收费标准如何，中科院认证培训机构报名入口 - 壹点灵";
    meta.keywords = "心理咨询师报名入口，报名官网，报名条件，报考流程，报考机构";
    meta.description = "2019年心理咨询师应该怎么报考？有哪些新政策和注意事项？哪里有权威培训机构？壹点灵为您指引最新心理咨询师报考信息，中科院/北师大专家团队，培训实践科学结合，心理咨询师考证认证壹点灵！";
  };

  return {
    dataInfo,
    source,
    meta,
    config,
  }
}
