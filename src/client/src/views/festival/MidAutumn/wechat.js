import React, { Component } from 'react';
import API from '../servers/MidAutumn';

class Wechat extends Component {

  constructor(props) {

    super(props)
  }

  componentDidMount(){

    if(typeof sendDataToOC === "function"){
      const params = {};
      params.cmd = {};
      params.cmd.params = {
        down_refresh: false
      };

      sendDataToOC(params);
    }

    var _hmt = _hmt || [];

    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://hm.baidu.com/hm.js?cf8486263e7c6a0be8615724fe425654';
    head.appendChild(script);

    const shareUrl = window.location.href;

    API.wechatConfig({
      shareUrl: shareUrl
    }).then( res => {

      $G.wx.config({
        debug: false,
        appId: res.data.appid,
        timestamp: res.data.timestamp,
        nonceStr: res.data.noncestr,
        signature: res.data.signature,
        jsApiList: [
          'getLocation',
          'onMenuShareTimeline',
          'onMenuShareAppMessage'
        ]
      });

      $G.wx.ready(function(){
        let shareconfig = { //分享到朋友圈
          title: "月满中秋，壹点倾诉感恩有“礼”", // 分享标题
          desc: "有这种福利怎么会忘了你，30元红包请查收！",
          link: shareUrl, // 分享链接
          imgUrl: "https://img.ydlcdn.com/file/2018/09/17/i2pur99hg9gk90v8.jpg", // 分享图标
          success: function (res) {

          },
          cancel: function () {

          }
        }

        $G.wx.onMenuShareTimeline(shareconfig);  //朋友圈
        $G.wx.onMenuShareAppMessage(shareconfig); //分享给朋友
      });
    });
  }

	render() {
		return (
			<div></div>
		)
  }
}

export default Wechat;
