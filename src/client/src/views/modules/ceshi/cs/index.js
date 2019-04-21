
import API from '@/servers/xxl/bdxxlldy';
import util from '@/lib/util.js';
import Native,{webviewSystem} from '@/lib/native';
$(function() {
  let bw = webviewSystem();


    // 绑定情感专家切换事件
    $(".qgzj_list li").bind("click", function(){

      let index = $(".qgzj_list li").index(this);

      $(this).addClass("cur").siblings().removeClass("cur");

      $(".qgzj_content .item").eq(index).show().siblings().hide();
    });

});
