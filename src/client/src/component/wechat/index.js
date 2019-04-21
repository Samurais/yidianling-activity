import React, {Component} from 'react';
import API from "./api";
import jump from "../../lib/jumpAPP";
import Util from "../../lib/util";
import config from "./config";
import Axios from '../../servers/axios';
class Wechat extends Component {

  constructor(props) {

    super(props);

    this.state = {
      appWechatShare: null,
      previewImage: null,
      author: null,
    }
  }

  componentDidMount() {

    let jumpAPP = jump.init();

    const wx = require('weixin-js-sdk');

    let _this = this;

    let isFromApp = !!Util.getQueryString("v") && Util.getQueryString("v")!=0;
    let url = config[this.props.host]+this.props.url || window.location.href.split("#")[0];
    let cover = config[this.props.host]+this.props.cover || "";
    let scope = 'snsapi_base';
    let state='';

    console.log("wechat >>>>>>>")
    console.log(this.props)
    console.log(url)

    API.getWechatConfig({
      url,
    }).then(res => {

      wx.config({
        debug: false,
        appId: res.data.wxConfig.appid,
        nonceStr: res.data.wxConfig.noncestr,
        timestamp: res.data.wxConfig.timestamp,
        signature: res.data.wxConfig.signature,
        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareQZone"]
      });

      // 判断来源是否为APP
      if(!!isFromApp) {

        let share_url = Util.changeURLArg(res.data.wxConfig.url, "v", "0");

        share_url = Util.changeURLArg(res.data.wxConfig.url, "isFromApp", "0");

        let share_info = {
              cover: cover,
              desc: this.props.desc,
              share_url: share_url,
              title: this.props.title,
            };


        let params = {share: share_info};
        setTimeout(() => {
          jumpAPP.setParams('action_share', params, 'ydl_app');

          _this.setState({
            appWechatShare: () => {
              jumpAPP.setParams('action_invite', params, 'ydl_app');
            }
          });
        }, 1500);
      }

      let shareData = {
        title: this.props.title,
        desc: this.props.desc,
        link: res.data.wxConfig.url,
        imgUrl: cover,
      }

      wx.ready(function(){
        wx.onMenuShareAppMessage({...shareData});
        wx.onMenuShareTimeline({...shareData});

        _this.setState({
          previewImage: (imgs) => {
            wx.previewImage({
              current: imgs[0],
              urls: imgs
            });
          }
        });
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
