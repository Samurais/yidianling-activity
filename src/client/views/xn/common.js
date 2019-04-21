
$(function(){
  // 底部信息配置
  var win_company, win_copyright, win_copycode;
  // 杭州袋虎信息技术有限公司
  if(window.location.href.split("?")[0].indexOf("ydl.com") >= 0){
    win_company = "杭州袋虎信息技术有限公司";
    win_copyright = "Copyright © 2015 - 2019";
    win_copycode = "浙ICP备18004841号-2";
  }

  // 上海袋虎信息技术有限公司
  if(window.location.href.split("?")[0].indexOf("yidianling.com") >= 0){
    win_company = "上海袋虎信息技术有限公司";
    win_copyright = "Copyright © 2015 - 2019";
    win_copycode = "沪ICP备15037258号";
  }

  $(".win_company").html(win_company);
  $(".win_copyright").html(win_copyright);
  $(".win_copycode").html(win_copycode);
});
