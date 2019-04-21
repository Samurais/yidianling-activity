
import API from '@/servers/xxl/bdxxlldy';
import util from '@/lib/util.js';
import Native,{webviewSystem} from '@/lib/native';

$(function(){
  let bw = webviewSystem();



  var dataList = [
    {
      "name":"何婷","gender":2,"Listen":2797,"Praise":"99.90%","url":"https://img.ydlcdn.com/file/2018/08/08/cf514cbf5fc3f7f1a4d990922e4a68a9..jpg!s200x200"
    },
    {
      "name":"卜彬","gender":1,"Listen":3100,"Praise":"99.78%","url":"https://img.ydlcdn.com/file/2016/11/21/7eix38w33a5cww83.jpg!s200x200"
    },
    {
      "name":"吕巧玉","gender":2,"Listen":2144,"Praise":"99.98%","url":"https://img.ydlcdn.com/file/2018/08/17/01521bbcf097c7c78e7f222fe344d317..jpg!s200x200"
    },
    {
      "name":"董永波","gender":1,"Listen":3011,"Praise":"99.98%","url":"https://img.ydlcdn.com/file/2017/03/30/w864sqf5vot0ntrf.jpg!s200x200"
    },
    {
      "name":"李艳","gender":2,"Listen":1024,"Praise":"99.92%","url":"https://img.ydlcdn.com/file/2017/02/22/5799q3ctnrm7hhi9.jpg!s200x200"
    },
    {
      "name":"辛红芳","gender":2,"Listen":1198,"Praise":"99.94%","url":"https://img.ydlcdn.com/file/2017/05/27/sw90wszvqo4ok5a7.jpg!s200x200"
    },
    {
      "name":"郭宇娟","gender":2,"Listen":1009,"Praise":"99.74%","url":"https://img.ydlcdn.com/file/2017/07/21/fvmzo1x804n7txv7.jpg!s200x200"
    },
    {
      "name":"姚辉","gender":2,"Listen":2078,"Praise":"99.56%","url":"https://img.ydlcdn.com/file/2017/10/21/nv7halwyuekrb8gb.png!s200x200"
    }
  ];
//红包条状
console.log(typeof bwNative == "undefined")

  $(".bdxxlldy_hongbao").bind("click", function(){


    if(typeof bwNative != "undefined") {
      if(!!util.getRequestData("accessToken")) {
        $(".topRemind").slideDown(400, function(){
          $(".topRemind").delay(2000).slideUp();
        });
      } else {
        Native.userLogin();
      }
    } else {
      $(".topRemind2").slideDown(400, function(){
        $(".topRemind2").delay(2000).slideUp();
      });
      location.href = "https://m.yidianling.com/reg";
    }

  });

  let createCutHTML = (data, html = "") => {

    data.forEach((item, index) => {
      html += `<li class="${index == 0 ? 'cur' : ''}">${item.title}</li>`;
    });

    $(".qgzj_list").html(html);
  }

  // 获取菜单列表详情
  let getQFZJHTML = (data, html = "") => {

    html = `<li><a href="https://m.yidianling.com/listen" target="_blank">
            <dl>
              <dt><img src="${data.url}" />></dt>
              <dd>
                <div class="info">
                  <span class="name">${data.name} <i class="${data.gender == 1 ? 'ico-nan' : 'ico-nv'}"></i></span>

                </div>

                <div class="count">
                  聆听<span>${data.Listen}</span>· 好评率 ${data.Praise}
                </div>
              </dd>
            </dl></a>
          </li>`

    return html;
  }

  //获取情感专家列表
  let createQFZJHTML = (data, html = "") => {

    data.forEach((items, index) => {
      html += getQFZJHTML(items);
    });

    $(".qgzj_content").find("ul").html(html);
  }


  createQFZJHTML(dataList);


  // 加载页面时获取初始信息
  API.dataSupportDataList({}).then( res => {
    createCutHTML(res.data.listens);

    // 绑定情感专家切换事件
    $(".qgzj_list li").bind("click", function(){

      let index = $(".qgzj_list li").index(this);

      $(this).addClass("cur").siblings().removeClass("cur");

      $(".qgzj_content .item").eq(index).show().siblings().hide();
    });

    // // 获取初始弹幕消息
    // danmuss = getDefDanmu(res.data.contList);
    //
    // // 初始化弹幕
    // danmussInit(danmuss);
  });
});
