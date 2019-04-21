
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rule from '../../../../component/rules';

import Wechat from '../../../../component/wechat';

import Util from '../../../../lib/util';

import {Item1,Item2,Item3,Item4,Item5,Item6,Item7} from './component/item';

import Number from '../../../../component/number';

import jump from "../../../../lib/jumpAPP";

import API from './api';

import { Toast } from 'antd-mobile';

class Page extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isNext:true,
      isFromApp: false,
      nickname: "",
      zanCount: 0,
      doctorInfo: {
        times: 0, // 年月日
        enterTime: 0, // 入驻时间
        helpPeopleNum: 0, // 服务人数
        affectPeopleNum: 0, // 影响人数
        totalServiceHours: 0, // 累计咨询时数
        praiseNum: 0, // 好评数
        articleNum: 0, // 发表文章数
        supervisePeopleNum: 0, // 督导人数
        serviceHoursRank: 0, // 服务时间超越平台咨询师百分比
      }
    }
  }

  componentDidMount() {
    let _this = this;
    Rule.init({
      "appId": "m-activity",
      "eventId": "/hd/m/20181228",
      "eventType": "pv",
      "platform": "wap"
    });

    let browser = jump.init().browser;

    let uid = Util.getQueryString("uid") || "1";
    let isFromApp = !!Util.getQueryString("v") && Util.getQueryString("v")!=0;

    _this.setState({
      isFromApp,
    });

    API.ziyingDoctorWholeYearPerformance({
      "number": uid,
    }).then(res => {

      if(res.data == null) {
        _this.setState({
          isNext: false,
        });
        $(".point").hide();
        $(".warning").show();
      } else {
        _this.setState({
          doctorInfo: res.data,
          nickname: res.data.doctorName,
        });
      }

    });

    // 获取专家点赞数量
    API.getExpertCount({uid: uid}).then(res => {
      _this.setState({
        zanCount: res.data.count || 0
      });
    });

    let $box = $(".page-term-hd-20181228");

    $(function(){

      let animationEnd = (function(el) {
        let animations = {
          animation: 'animationend',
          OAnimation: 'oAnimationEnd',
          MozAnimation: 'mozAnimationEnd',
          WebkitAnimation: 'webkitAnimationEnd',
        };

        for (let t in animations) {
          if (el.style[t] !== undefined) {
            return animations[t];
          }
        }
      })(document.createElement('div'));

      $.fn.extend({
        animateCss: function(animationName, callback) {

          this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);

            if (typeof callback === 'function') callback($(this));
          });

          return this;
        },
      });

      $(".step-1 .logo").animateCss("pulse");

      $(".gold").addClass("move");

      $("img.lazy").each(function(){
        let _self = $(this);
        let img = _self.data("original");

        _self.attr("src", img);
      });

      // 设置屏幕高度
      let WH = $(window).height();
      let WW = $(window).width();
      let H = Math.max(WH, WW);
      $box.height(H);

      // 设置内容高度
      let $list = $(".list");
      $list.height(H-80);

      // 设置 item-7头部高度
      let $itemTop = $(".item .item-top");
      let itemBtmH = $(".item .item-bottom").height();
      $itemTop.height(H-itemBtmH-10-80);

      // 设置心跳位置
      setTimeout(() => {
        let $line = $(".item-7 .line");
        let lineTop = $(".item-top dl").innerHeight() + $line.innerHeight();

        $(".heartbon_box").height($itemTop.height() - lineTop - 45);
      }, 1000);

      $.fn.extend({
        touchBind: function(callback){

          let startX = 0;
          let startY = 0;
          let endX = 0;
          let endY = 0;
          let timer = 0;

          let tStart = "";
          let tEnd = "";

          if(browser == "web") {
            tStart = "mousedown";
            tEnd = "mouseup";

          } else {
            tStart = "touchstart";
            tEnd = "touchend";
          }

          this.on(tStart, function(e){

            if (e.cancelable) {
              if (!e.defaultPrevented) {
                e.preventDefault();
              }
            }
            timer = new Date().getTime();

            if(browser == "web") {
              startX = e.pageX,
              startY = e.pageY;

            } else {
              startX = e.originalEvent.changedTouches[0].pageX;
              startY = e.originalEvent.changedTouches[0].pageY;
            }

            return false;

          }).on(tEnd, function(e){
            if (e.cancelable) {
              if (!e.defaultPrevented) {
                e.preventDefault();
              }
            }

            let t = new Date().getTime();

            if(t - timer > 500) {
              callback(this, 0);

            } else {

              if(browser == "web") {
                endX = e.pageX,
                endY = e.pageY;

              } else {
                endX = e.originalEvent.changedTouches[0].pageX,
                endY = e.originalEvent.changedTouches[0].pageY;
              }

              let direction = Util.getSlideDirection(startX, startY, endX, endY);

              callback(this, direction, e);
            }

            return false;

          });

          return this;
        }
      });

      let stepFlag = true;

      let hideStep1 = () => {
        let self = $(".step-1");

        self.addClass("moveOut").one(animationEnd, function() {
          setTimeout(() => {
            self.hide().removeClass("moveOut");
            stepFlag = true;
            setItemAnimate();
          }, 300);
        });
      }

      let showStep1 = () => {
        let self = $(".step-1");

        self.show().addClass("moveIn").one(animationEnd, function() {
          setTimeout(() => {
            self.removeClass("moveIn");
            $(".step-1 .logo").animateCss("pulse");
            stepFlag = true;
            setItemAnimate(true);
          }, 200);
        });
      }

      $(".step").touchBind(function(self, index) {

        if(!_this.state.isNext) {
          Toast.fail("本数据只统计2018年12月26日之前注册的老师数据", 10);
          return false;
        }

        if(index == 1 && stepFlag && !$(".step-1").is(":hidden")) {
          stepFlag = false;
          hideStep1();
        }

        if(index == 4 && stepFlag && $(".step-1").is(":hidden")){
          stepFlag = false;
          showStep1();
        }
      });

      $(".js_remove_step1").touchBind(function(self, index){
        if(!_this.state.isNext) {
          Toast.fail("本数据只统计2018年12月26日之前注册的老师数据", 10);
          return false;
        }
        if(index == 0) {
          hideStep1();
        }
      });

      // 配置内页动画
      let setStep2ItemSize = () => {
        let $list = $(".js_item_touch").not(".moved");
        let len = $list.length;

        $(".js_item_touch").hide().removeClass("cur moveRank1 moveRank2");

        $list.each(function(){
          let index = $list.index(this)+1;

          if(index == 1) {
            $(this).show().addClass("cur");
          }

          if(index == 2) {
            $(this).show().addClass("moveRank1");
          }

          if(index == 3) {
            $(this).show().addClass("moveRank2");
          }
        });
      }

      setStep2ItemSize();

      function setItemAnimate(flag = false) {
        let $cur = $(".step-2").find(".cur");
        let type = $cur.data("type");
        let ii = $(".js_item_touch").index($cur);
        $(".point").show();
        $(".warning").hide();

        if(ii == 5){ $(".point").hide(); $(".warning").show();}

        if(flag) {
          $(".move-sign").removeClass("move");
          return;
        }

        // 移除所有动画效果
        $(".js_item_touch").find(".move-sign").removeClass("move");

        // 添加动画效果
        $cur.find(".move-sign").addClass("move");
      }

      $(".js_item_touch").touchBind(function(self, index){

        let type = +$(self).data("type");

        // 此处加上翻页动画
        setTimeout(() => {
          setItemAnimate();
        }, 500);

        if(index == 4) {
          if(type == 1) {
            showStep1();
            return;
          };

          let $selfBefore = $(".js_item_touch").eq(type-2);

          if(type == 7 && !_this.state.isFromApp) {
            $selfBefore = $(".js_item_touch").eq(type-3);
          }

          $selfBefore.removeClass("moved").addClass("moveShowTop");
          setTimeout(() => {
            $selfBefore.removeClass("moveShowTop");
          }, 400);

          setStep2ItemSize();
        }

        if(!_this.state.isFromApp && type == 7) {
          return;
        }

        if(_this.state.isFromApp && type == 6) {
          return;
        }

        if(index == 0 || index == 1) {
          $(self).addClass("moveRemoveTop moved");
          setTimeout(() => {
            $(self).hide();
            $(".js_item_touch").removeClass("moveRemoveRight moveRemoveLeft moveRemoveTop moveShowTop");
            setStep2ItemSize();
          }, 300);
        }

        if(index == 2 || index == 3) {
          $(self).addClass("moveRemoveRight moved");
          setTimeout(() => {
            $(self).hide();
            $(".js_item_touch").removeClass("moveRemoveRight moveRemoveLeft moveRemoveTop moveShowTop");
            setStep2ItemSize();
          }, 300);
        }

        if(index == 5 || index == 6) {
          $(self).addClass("moveRemoveLeft moved");
          setTimeout(() => {
            $(self).hide();
            $(".js_item_touch").removeClass("moveRemoveRight moveRemoveLeft moveRemoveTop moveShowTop");
            setStep2ItemSize();
          }, 300);
        }
      });

      $(".js_type6_btn").touchBind(function(self, index){
        let appWechatShare = _this.refs.wechat.state.appWechatShare || function(){};
        !!appWechatShare && appWechatShare();
        return false;
      });

      $(".js_doctor_detail").touchBind(function(self, index){
        window.location.href = $(self).attr('href');
        return false;
      });

      $(".js_appdownload").touchBind(function(self, index){

        window.location.href = $(self).attr('href');

        // if(browser == "wx") {
        //   let imgs = ["https://activity.yidianling.com/src/images/activity/hd/20181228/download.png"];
        //   _this.refs.wechat.state.previewImage(imgs);

        // } else {
        //   window.location.href = $(self).attr('href');
        // }

        return false;
      });

      $(".js_zanCount").touchBind(function(self, index){

        let lsg = window.localStorage;

        let zanArr = lsg.getItem("zanArr");

        if(!!!zanArr) {
          lsg.setItem("zanArr", "{}");
          zanArr = lsg.getItem("zanArr");
        }

        try{
          zanArr = JSON.parse(zanArr);
        } catch (e) {
          console.log(e);
          zanArr = {};
        }

        let endCountTime = new Date("2019/01/07 18:00:00").getTime();
        let nowTime = new Date().getTime();

        if(+nowTime - +endCountTime >= 0) {
          Toast.fail("统计已经结束", 1);
          return;
        }

        Toast.fail("统计已经结束咯", 1);

        // if(!!zanArr[uid]) {
        //   Toast.fail("您已点过赞咯", 1);
        // } else {
        //   zanArr[uid] = 1;
        //   lsg.setItem("zanArr", JSON.stringify({...zanArr}));

        //   API.setExpertCount({uid: uid, name: _this.state.doctorInfo.doctorName}).then(res => {

        //     _this.setState({
        //       zanCount: res.data.count || 0
        //     });
        //   });

        // }


      });
    });
  }

  render() {

    return (
      <div>
        <Wechat {...this.props.data.wechat} ref="wechat" />

        <div className="page-term-hd-20181228">

          <section className="bg-1 mod-1 step step-1">
            <span className="logo"></span>
            <div className="gold-wrap">
              <div className="gold"></div>
            </div>

            <div className="control"><a href="javascript:" className="js_remove_step1"></a></div>

          </section>

          <section className="bg-2 mod-2 step step-2">
            <span className="top-text"></span>

            <div className="list">
              <Item1 nickname={this.state.nickname} data={this.state.doctorInfo} />
              <Item2 nickname={this.state.nickname} data={this.state.doctorInfo} />
              <Item3 nickname={this.state.nickname} data={this.state.doctorInfo} />
              <Item4 nickname={this.state.nickname} data={this.state.doctorInfo} />
              <Item5 nickname={this.state.nickname} data={this.state.doctorInfo} />
              {this.state.isFromApp ? <Item6 nickname={this.state.nickname} data={this.state.doctorInfo} /> : <Item7 nickname={this.state.nickname} data={this.state.doctorInfo} zanCount={this.state.zanCount} />}
            </div>

          </section>

          <div className="warning m6">数据截止至12月25日</div>
          <div className="point"><span className="move" /></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		data: state.data,
	}
}

Page = connect(mapStateToProps)(Page);

Page.propTypes = {
  data: PropTypes.string
}

export default Page;
