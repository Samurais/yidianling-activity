
import ClickDataStatistics from './clickDataStatistics';
import Util from '../../lib/util';
/****
 * 1、接待组名称：心暖事业部
 * 接待组ID：kf_10283_1530259816817
 * 2、接待组名称：好柿事业部
 *  接待组ID：kf_10283_1530260530824
 * 3、接待组名称：客服中心
 *    接待组ID：kf_10283_1530260620823
 * 4、接待组名称：课程事业部
 *   接待组ID：kf_10283_1530260638567
 * ***/

function onlineService(){
  const service_group = ['kf_10283_1530259816817', 'kf_10283_1530260530824', 'kf_10283_1530260620823', 'kf_10283_1530260638567'];

  const NTKF_PARAM = {
    siteid: "kf_10283", //siteid：企业ID，为固定值，必填
    settingid: 'kf_10283_1530260530824', //settingid：接待组ID，为固定值，必填
    uid: "", //uid：用户ID，支持字母、数字、下划线。未登录可以为空，但不能给null，uid赋予的值在显示到小能客户端上
    uname: "", //uname：用户名称，未登录可以为空，但不能给null，uname赋予的值显示到小能客户端上
    isvip: "0", //isvip：是否为vip用户，0代表非会员，1代表会员，取值显示到小能客户端上
    userlevel: "0", //userlevel：网站自定义会员级别，0-N，可根据选择判断，取值显示到小能客户端上
    //   erpparam: "erp" //erpparam：erp功能的扩展字段，可选，购买erp功能后用于erp功能集成

  }
  // let script = document.createElement('script');
  // script.setAttribute('src', '//dat.zoosnet.net/js/lsjs.aspx?siteid=DAT83236505&float=1&lng=cn');
  // script.onload = function () {
  //   console.log('XNswt is success....')
  // }
  // document.body.appendChild(script);

  // var scriptXN = document.createElement('script');
  // scriptXN.setAttribute('src', '//counter.sina.com.cn/ip/');
  // scriptXN.onload = function () {
  //   console.log('jiankong')
  // }
  // document.body.appendChild(scriptXN);

  $('.kf_xinnuan').attr({'href':'http://kht.zoosnet.net/LR/Chatpre.aspx?id=KHT34021062&lng=cn'});

  /***
   * 接待组名称：好柿事业部
   * ***/
  $('.kf_haoshi').click(function () {
    //NTKF.im_openInPageChat('kf_10283_1530260530824');
    // window.open('http://kht.zoosnet.net/LR/Chatpre.aspx?id=KHT34021062&lng=cn');
    ClickDataStatistics('1');
    // return false;
  });
  /***
   * 接待组名称：心暖事业部
   * ***/
  $('.kf_xinnuan').attr({'href':'http://dat.zoosnet.net/LR/Chatpre.aspx?id=DAT83236505'});

  $('.kf_xinnuan').click(function () {
    // window.open('http://dat.zoosnet.net/LR/Chatpre.aspx?id=DAT83236505');
    ClickDataStatistics('1');
    // return false;
  });

  $('.kf_hotline').click(function () {
    ClickDataStatistics('2');
  });

  /***
   * 接待组名称：心暖事业部
   * ***/
  $('.kf_hangzhou').attr({'href':'http://lvt.zoosnet.net/LR/Chatpre.aspx?id=LVT33597481&lng=cn'});

  $('.kf_hangzhou').click(function () {
    ClickDataStatistics('1');
  });

  let sourceType = $G.preloadedState.data.pathname.split("/")[1] || "m";

  let _jskflink = "";

  setTimeout(() => {
    _jskflink = $(".js_kf").eq(0).attr("href");
  }, 300)

  if($G.preloadedState.data.pathname === "/m/hangzhou"){

    $(".js_kf").attr({'href':'//lvt.zoosnet.net/LR/Chatpre.aspx?id=LVT33597481&lng=cn','target':'_blank'});
    $("body").on("click", ".js_kf", function(){
      $(this).attr({'href': _jskflink, 'target':'_blank'});
      ClickDataStatistics('1');
    });
    return;
  }

  if(sourceType === "m") {
    $(".js_kf").attr({'href':'//dat.zoosnet.net/LR/Chatpre.aspx?id=DAT83236505&lng=cn','target':'_blank'});
    $("body").on("click", ".js_kf", function(){
      $(this).attr({'href': _jskflink, 'target':'_blank'});
      ClickDataStatistics('1');
    });
    return;
  }

  if(sourceType === "kc") {
    $(".js_kf").attr({'href':'//lvt.zoosnet.net/LR/Chatpre.aspx?id=LVT51091364&lng=cn&oname=ydldx099','target':'_blank'});
    $("body").on("click", ".js_kf", function(){
      $(this).attr({'href': _jskflink, 'target':'_blank'});
      ClickDataStatistics('1');
    });
    return;
  }

  if(sourceType === "love") {
    $(".js_kf").attr({'href':'//kht.zoosnet.net/LR/Chatpre.aspx?id=KHT34021062','target':'_blank'});
    $("body").on("click", ".js_kf", function(){
      $(this).attr({'href': _jskflink, 'target':'_blank'});
      ClickDataStatistics('1');
    });
    $("body").on("click", ".js_kf_phone", function(){
      $(this).attr({'href':'tel:400-0992-520'});
    });
    return;
  }
};

export default onlineService;
