
import '@/lib/plugin/danmu/jquery.danmu';
import API from '@/servers/qixi';
import xq from './constant.js';
import util from '@/lib/util.js';
import Native,{webviewSystem} from '@/lib/native';

$(function(){
    // 获取设备类型
    let bw = webviewSystem();
    // 当前发送的心情，默认是null
    let xinqin = null;
    // 默认出现的弹幕
    let danmuss={};
    // 弹幕窗口的宽高
    let danmuWidth = $(".danmu_content").width();
    let danmuHeight = $(".danmu_content").height();
    // 提交弹幕的错误提醒
    let $remind = $(".remind");
    // 得到随机数
    let randomNum = (m,n) => {
        return Math.floor(Math.random()*(m - n) + n);
    }
console.log('bw',bw)
if(bw === "iOS" || bw === "isAndroid") {
  console.log('是ios或者安卓')
    Native.userActionShare(
        'https://activity.yidianling.com/views/qixi/',
        '七夕寄语',
        'https://activity.yidianling.com/src/images/qixi/share-im.jpg',
        '七夕寄语，倾诉你的心事'
    );
}

// 点击红包跳转
$(".goHongbao").bind("click", function(){
  if(bw == "web" || bw == "wx") {
     location.href = "https://m.ydl.com/reg";
  } else {
    // 如果登录的情况下
    if(!!util.getRequestData("accessToken")) {
      $(".topRemind").slideDown(400, function(){
        $(".topRemind").delay(2000).slideUp();
      });
    } else {
      Native.userLogin();
    }
  }
});

  // 判断是否为APP
  if(bw != "web" && bw != "wx") {
    $(".download").hide();

  }
    $(".more").on("click",function(){
        if(bw != "web" && bw != "wx") {
            $(".download").hide();
            Native.userToListenList();
        } else{
            // $(".more").attr("href", "https://m.ydl.com/listen");
            window.location.href = "https://m.ydl.com/listen";
            // console.log($(".more").attr("href"))
        }
    })

  // 当选择心情的时候
  $(".select select").bind("change", function(){
    let _this = $(this).find("option:selected");

    $(".select .selected span").text(_this.text());

    xinqin = _this.val();
  });

  // 弹幕初始化
  let danmussInit = (danmuss) => {
    $("#danmu").danmu({

      left: 0, //区域的左边边界位置，相对于父div

      top: 0 , //区域的上边边界位置，相对于父div

      zindex :100, //div的css样式zindex

      width: danmuWidth,

      height: danmuHeight,

      sumtime:900 , //弹幕运行总时间

      danmuss:danmuss, //danmuss对象，运行时的弹幕内容

      default_font_color:"#FFFFFF", //弹幕默认字体颜色

      font_size_small:14, //小号弹幕的字体大小,注意此属性值只能是整数

      font_size_big:28, //大号弹幕的字体大小

      opacity:"0.7", //弹幕默认透明度

      top_botton_danmu_time:4000
    });

    $('#danmu').danmu('danmu_start');
  }

  // 过滤出默认弹幕，data是请求服务端返回的json数据
  // 最后生成为  data.sign = [{},{}] 格式
  let getDefDanmu = (data, R={}) => {

    data.forEach(item => {
      item.xinqin = xq[item.xinqin];
      let r = R[item.sign];
      if(!!r) {
        R[item.sign].push(item);
      } else {
        R[item.sign] = new Array();
        R[item.sign].push(item)
      }
    });

    return R;
  }

  // input focus后， 清除报错信息
  $(".enter input").focus(function(){
    $remind.hide().text("");
  });

  // 点击发送弹幕
  $(".addDanmu").bind("click", function(){

    let r = {};
    let val = $(this).closest(".enter").find("input").val();

    if($.trim(val) == "") {
      $remind.show().text("心情不能为空");
      return;
    }

    if($.trim(val).length > 20) {
      $remind.show().text("最多输入不大于20个字");
      return;
    }

    // 设置随机值并且配置发送给服务端的数据
    let rn = randomNum(1,300);
    r.text = val;
    r.xinqin = xinqin ? xq[xinqin] : null;
    r.sign = rn;

    // 当前input信息制空
    $(".enter input").val("");

    // 向服务端发送弹幕信息
    API.dataSupportDataPush({
      text: val,
      data_style: xinqin || "0",
      sign: rn,
      uid:0,
    }).then(res => {

      if(res.code != 0) {
        $remind.show().text(res.msg);
        return;
      }

      $('#danmu').danmu("add_danmu",r);
    });
  });

  // 一个计时器， 每3秒执行一次，获取服务端返回的默认弹幕数据
  let ticks = (callback) => {

    let timer;

    function run(){
      timer = setTimeout(function(){
        callback();
        run();
      }, 3000);
    }
    run();
  }
  // 执行
  ticks(function(){
    API.dataSupportDataList({}).then( res => {
      let danmussData = getDefDanmu(res.data.contList);

      $('#danmu').danmu("refresh_danmu", danmussData);
    });
  });

  // 创建心理专家切换菜单
  let createCutHTML = (data, html = "") => {


    data.forEach((item, index) => {
      html += `<li class="${index == 0 ? 'cur' : ''}">${item.title}</li>`;

    });

    $(".qgzj_list").html(html);
  }

  // 获取菜单列表详情
  let getQFZJHTML = (data, html = "") => {

    html = `<li><a href="${bw == "web" || bw == "wx" ? data.mLinkUrl : data.appLinkUrl}" target="_blank">
            <dl>
              <dt><img src="${data.confidedIcon}" />></dt>
              <dd>
                <div class="info">
                  <span class="name">${data.confidedName} <i class="${data.confideSex == 1 ? 'ico-nan' : 'ico-nv'}"></i></span>
                  <span class="online ${data.confideLine == '2' ? 'out' : ''}">${data.confideLine == '2' ? '离线' : '在线'}</span>
                </div>

                <div class="count">
                  聆听<span>${data.confideHearNum}</span> · 好评率${data.confidePraise}
                </div>
              </dd>
            </dl></a>
          </li>`

    return html;
  }

  //获取情感专家列表
  let createQFZJHTML = (data) => {

  data.forEach((items, index) => {

    let html = "";

    items.list.forEach(item => {
      html += getQFZJHTML(item);
    });

    $(".qgzj_content .item").eq(index).find("ul").html(html);
  });
  }

  // 加载页面时获取初始信息
  API.dataSupportDataList({}).then( res => {
    createCutHTML(res.data.listens);
    createQFZJHTML(res.data.listens);

    // 绑定情感专家切换事件
    $(".qgzj_list li").bind("click", function(){

      let index = $(".qgzj_list li").index(this);

      $(this).addClass("cur").siblings().removeClass("cur");

      $(".qgzj_content .item").eq(index).show().siblings().hide();
    });

    // 获取初始弹幕消息
    danmuss = getDefDanmu(res.data.contList);

    // 初始化弹幕
    danmussInit(danmuss);
  });
});
