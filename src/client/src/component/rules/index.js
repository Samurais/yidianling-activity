
import Util from './lib/util';
import API from './servers';

export default {

  getData(indexId = 1){

    let data = {};
    let urlparams =  Util.getRequestData(window.location.href);

    if (!localStorage.getItem('YDLGuid')) {
      localStorage.setItem('YDLGuid', Util.guid());
    }

    data.unitId = urlparams.unit_id;
    data.guid = localStorage.getItem('YDLGuid');
    data.indexId = indexId;
    data.url = global.location.href;

    return data;
  },

  // 百度埋点
  hmbaidu(data = {}){
    data = Object.assign({
      "category": "default",
      "action": "click",
      "opt_label": "defaultLabel",
      "opt_value": "defaultValue",
    }, data);
    _hmt.push(['_trackEvent', data.category, data.action, data.opt_label, data.opt_value]);
  },
  // 商务通对象
  zoosnet: {
    "/m/hangzhou": {
      "url": "//lvt.zoosnet.net/LR/Chatpre.aspx?id=LVT33597481&lng=cn",
      "id": "1",
      "tel": "17826978275",
    },
    "/m/shanghai": {
      "url": "//kht.zoosnet.net/LR/Chatpre.aspx?id=KHT77661836&float=1&lng=cn",
      "id": "1",
      "tel": "17815588360",
    },
    "/m/beijing": {
      "url": "//kht.zoosnet.net/LR/Chatpre.aspx?id=KHT77661836&float=1&lng=cn",
      "id": "1",
      "tel": "178-2697-8021",
    },
    "/m/home": {
      "url": "//dat.zoosnet.net/LR/Chatpre.aspx?id=DAT83236505&lng=cn",
      "id": "1",
      "tel": "400-765-1010",
    },
    "m": {
      "url": "//dat.zoosnet.net/LR/Chatpre.aspx?id=DAT83236505&lng=cn",
      "id": "1",
      "tel": "400-0992-520",
    },
    "kc": {
      "url": "//lvt.zoosnet.net/LR/Chatpre.aspx?id=LVT51091364&lng=cn&oname=ydldx099",
      "id": "1",
      "tel": "400-0992-520",
    },
    "qs":{
      "url": "//dat.zoosnet.net/LR/Chatpre.aspx?id=DAT83236505&lng=cn",
      "id": "1",
      "tel": "400-0992-520",
    },
    "hd": {
      "url": "//dat.zoosnet.net/LR/Chatpre.aspx?id=DAT83236505&lng=cn",
      "id": "1",
      "tel": "400-0992-520",
    },
    "cp": {
      "url": "//dat.zoosnet.net/LR/Chatpre.aspx?id=DAT83236505&lng=cn",
      "id": "1",
      "tel": "400-0992-520",
    },
    "love": {
      "url": "//kht.zoosnet.net/LR/Chatpre.aspx?id=KHT34021062",
      "id": "1",
      "tel": "400-0992-520",
    },
  },

  init(maidianData = null){

    let _this = this;

    let sourceType = $G.preloadedState.data.pathname.split("/")[1] || "m";
    if($G.preloadedState.data.pathname == "/m/hangzhou") {
      sourceType = "/m/hangzhou";
    }
    if($G.preloadedState.data.pathname == "/m/shanghai"){
      sourceType = "/m/shanghai";
    }
    if($G.preloadedState.data.pathname == "/m/beijing"){
      sourceType = "/m/beijing";
    }
    if($G.preloadedState.data.pathname == "/home" || $G.preloadedState.data.pathname == "/home/" || $G.preloadedState.data.pathname == "/m/home" || $G.preloadedState.data.pathname == "m/home/"){
      sourceType = "/m/home";
    }
    if($G.preloadedState.data.pathname == "/m/homeA"){
      sourceType = "/m/home";
    }
    if($G.preloadedState.data.pathname == "/m/homeB"){
      sourceType = "/m/home";
    }

    let _jskflink = "";

    // 判断商务通还是400， 默认商务通，目前还没400选项， 1 = 商务通， 2 = 400
    let id = this.zoosnet[sourceType].id;

    // 页面加载后记录 pv uv
    API.getPvUvStats({ ...this.getData(id) });

    $(".js_kf").attr({'href':_this.zoosnet[sourceType].url,'target':'_blank'});


    setTimeout(() => {
      _jskflink = $(".js_kf").eq(0).attr("href");
    }, 300);

    // 百度埋点
    $("body").on("click", ".js_hmt_click, a, .js_kf", function(){
      let targetLabel = $(this).data("target") || $(this).text();

      _this.hmbaidu({
        "opt_label": targetLabel,
      });
    });

    $("body").on("click", ".js_kf", function(){
      $(this).attr({'href': _jskflink, 'target':'_blank'});
      API.getClickNum({ ..._this.getData(id) });

      // 判断是否有点击过客服，如果有，则配置is_new_user = 1;
      if (maidianData != null && !localStorage.getItem(maidianData.eventId)) {
        localStorage.setItem(maidianData.eventId, 1);
      };
    });

    // 今日头条
    $("body").on("click", ".js_tt", function(){

      let id = $(this).attr("data-ttid");
      // meteor.track("form", {convert_id: id});

    });

    $("body").on("click", ".js_kf_phone", function(){
      $(this).attr({'href':`tel:${_this.zoosnet[sourceType].tel}`});
    });

    // 统一埋点
    if(maidianData != null) {
      API.getMaidianData({ ...maidianData, "guid":_this.getData(id).guid });
    }

    // 底部信息配置
    let win_company, win_copyright, win_copycode;
    // 杭州袋虎信息技术有限公司
    if(window.location.href.split("?")[0].indexOf("activity.ydl.com") >= 0){
      win_company = "杭州袋虎信息技术有限公司";
      win_copyright = "Copyright © 2015 - 2019";
      win_copycode = "浙ICP备18004841号-2";
    }

    // 上海袋虎信息技术有限公司
    if(window.location.href.split("?")[0].indexOf("activity.yidianling.com") >= 0){
      win_company = "上海袋虎信息技术有限公司";
      win_copyright = "Copyright © 2015 - 2019";
      win_copycode = "沪ICP备15037258号";
    }

    $(".win_company").html(win_company);
    $(".win_copyright").html(win_copyright);
    $(".win_copycode").html(win_copycode);
   }
}
