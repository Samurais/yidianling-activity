import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import API from '../../servers/test';
import { Toast, InputItem } from 'antd-mobile';
import Rule from '../../../../component/rules';
import Wechat from '../../../../component/wechat';
import {storage} from '../../../../lib/compatible';
import Swiper from 'swiper/dist/js/swiper.js';
import Newbottom from './component/Newbottom';
import Native from '../../../../component/native';

class Demo extends Component {

  constructor(props) {
    super(props)

    this.state={
      more:{
        text:"更多团购",
        icon:"/src/images/activity/m/hangzhou/arrow_down.png"
      },
      moreHonor:{
        text:"更多荣誉",
        icon:"/src/images/activity/m/hangzhou/arrow_down.png"
      },
      show_window:2,
      show_big:2,
      imgsrc:"/src/images/activity/m/hangzhou/pl3.png",
      lookPicture:""
    };
    this.bannerList = [
      {
        "name":"/src/images/activity/kc/index/banner1.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/kc/index/banner2.png",
        "id":"1"
      },
    ];
    this.pagePicList1 = [
      {
        "name":"/src/images/activity/kc/index/1.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/kc/index/2.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/kc/index/3.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/kc/index/4.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/kc/index/5.png"
      },
    ];
    this.taList = [
      {
        "name":"/src/images/activity/kc/index/pinjia1.png"
      },
      {
        "name":"/src/images/activity/kc/index/pinjia2.png"
      },
      {
        "name":"/src/images/activity/kc/index/pinjia3.png"
      }
    ];
    this.pagePicList2 = [
      {
        "name":"/src/images/activity/kc/index/6.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/kc/index/7.png"
      },
    ];
  }
  componentWillUnmount() {

  }

  componentDidMount(){
    let _this = this;

    Rule.init({
      "appId": "m-activity",
      "eventId": "/m/shanghai",
      "eventType": "pv",
      "platform": "wap"
    });
    $(function(){
      $("img.lazy").lazyload();

      setTimeout(()=>{
        $("img.lazy").each(function(){
          let _this = $(this);
          let img = _this.data("original");
          _this.attr("src", img);
        });

      },300);
      // 隐藏客服
      setTimeout(()=>{
        $("#LRdiv0,#LRdiv1,#LRdiv2,#LRdiv3").attr("style","visibility:hidden;");
        setTimeout(()=>{
          $("#LRdiv0,#LRdiv1,#LRdiv2,#LRdiv3").attr("style","display:none;");
        },300)
      })
    });
    new Swiper('.top-banner', {
      loop: true,
      centeredSlides : true,
      autoplay: true,
      slidesPerView: 'auto',
    });
    new Swiper('.ta-list', {
      loop: true,
      centeredSlides : true,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination-3',
      },
    });
  }
  componentDidUpdate(){

  }
  getHtml(item,index){
    let element;
    element = item.id? (
      <a className="js_kf" key={index} href="javascript:" data-target={item.id == 1 ? "/m/shanghai_banner":"/m/shanghai_underbanner"}>
        <div className="container">
          <img className="item lazy" data-original={item.name} src={this.defImg} key={index}/>
        </div>
      </a>
    ) :item.position ? (
      <a className="" key={index} href={this.position} data-target="/m/shanghai_map">
        <div className="container">
          <img className="item lazy" data-original={item.name} src={this.defImg} key={index}/>
        </div>
      </a>
    ):(
      <div className="container" key={index}>
        <img className="item lazy" data-original={item.name} src={this.defImg} key={index}/>
      </div>
    );
    return element;
  }

  getTopHTML(item, index){
    return (
      <li key={index} className="swiper-slide one-top">
        <img className="lazy" data-original={item.name} src={this.defImg}/>
      </li>
    );
  }
  getTaHTML(item, index){
    return (
      <li key={index} className="swiper-slide one-ta">
        <img className="lazy" data-original={item.name} src={this.defImg}/>
      </li>
    );
  }
  render() {
    return (
    <div>
        {/* 微信分享 */}
        <Wechat {...this.props.data.wechat}/>
        {/* 跳转 */}
        <Native />
        <div className="page-index-m">
          <div className="top-banner swiper-container">
            <ul className="swiper-wrapper">
              {this.bannerList.map((item, index) => (
                this.getTopHTML(item, index)
              ))}
            </ul>
          </div>
          <ul className="List1-box">
            {this.pagePicList1.map((item,index)=>
              this.getHtml(item,index)
            )}
          </ul>
          {/* 他说 */}
          <div className="ta-box">
            <div className="pj-title">学员评价</div>
            <div className="position-box">
              <div className="ta-list swiper-container">
                <ul className="swiper-wrapper">
                  {this.taList.map((item, index) => (
                    this.getTaHTML(item, index)
                  ))}
                </ul>
              </div>
              <div className="swiper-pagination-3"></div>
            </div>
          </div>
          <ul className="List2-box">
            {this.pagePicList2.map((item,index)=>
              this.getHtml(item,index)
            )}
          </ul>
          <div className="in-bottom"></div>

          <Newbottom />
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

Demo = connect(mapStateToProps)(Demo);
export default Demo;
