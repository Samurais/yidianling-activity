import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import API from '../../servers/test';
import { Toast, InputItem } from 'antd-mobile';
import Rule from '../../../../component/rules';
import Wechat from '../../../../component/wechat';
import {storage} from '../../../../lib/compatible';
import { Modal } from 'antd-mobile';
import Swiper from 'swiper/dist/js/swiper.js';
import Newbottom from './component/Newbottom';
import Native from '../../../../component/native';

class Demo extends Component {

  constructor(props) {
    super(props)
    this.arrowTop="/src/images/activity/m/hangzhou/arrow_top.png"
    this.arrowDown="/src/images/activity/m/hangzhou/arrow_down.png"
    this.teamImg1="/src/images/activity/m/hangzhou/team1.png"
    this.teamImg2="/src/images/activity/m/hangzhou/team2.png"
    this.window_img="/src/images/activity/m/hangzhou/window.png"
    //上海袋虎-百度地图网址
    this.position="https://map.baidu.com/mobile/webapp/search/search/qt=s&wd=%E5%A3%B9%E7%82%B9%E7%81%B5%E5%BF%83%E7%90%86%E5%92%A8%E8%AF%A2%E4%B8%AD%E5%BF%83&c=179&searchFlag=bigBox&version=5&exptype=dep&src_from=webapp_all_bigbox&wd2=%E4%B8%8A%E6%B5%B7%E5%B8%82%E9%97%B5%E8%A1%8C%E5%8C%BA&sug_forward=61622014301b9dd18505bfbc&src=1/vt=&vt=map"
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
    }
    this.pagePicList1 = [
      {
        "name":"/src/images/activity/love/wanhui/20190129/1.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/2.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/3.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/4.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/5.png",
      }
    ]
    this.pagePicList2 = [
      {
        "name":"/src/images/activity/love/wanhui/20190129/6.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/7.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/8.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/9.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/10.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/11.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/12.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/13.png"
      }
    ]
    this.pagePicList3 = [
      {
        "name":"/src/images/activity/love/wanhui/20190129/19.png"
      },
      // {
      //   "name":"/src/images/activity/love/wanhui/20190129/20.png"
      // }
    ]
    this.honor_bg = {
      "name":"/src/images/activity/love/wanhui/20190129/honor_bg.png"
    }
    this.middleImg = {
      "name":"/src/images/activity/love/wanhui/20190129/middle.png"
    }
    this.expertsList = [
      {
        "name":"/src/images/activity/m/shanghai/9.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/m/shanghai/10.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/m/shanghai/11.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/m/shanghai/12.png",
        "id":"1"
      }
    ]
    this.honorSwiperList = [
      {
        "img":"/src/images/activity/love/wanhui/20190129/honor1.png"
      },
      {
        "img":"/src/images/activity/love/wanhui/20190129/honor2.png"
      },
      {
        "img":"/src/images/activity/love/wanhui/20190129/honor3.png"
      },
      {
        "img":"/src/images/activity/love/wanhui/20190129/honor4.png"
      },
      {
        "img":"/src/images/activity/love/wanhui/20190129/honor5.png"
      },
      {
        "img":"/src/images/activity/love/wanhui/20190129/honor6.png"
      },
      {
        "img":"/src/images/activity/love/wanhui/20190129/honor7.png"
      },
      {
        "img":"/src/images/activity/love/wanhui/20190129/honor8.png"
      }
    ]
    this.caseList = [
      {
        "name":"/src/images/activity/love/wanhui/20190129/case1.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/case2.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/case3.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/case4.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/case5.png"
      }
    ]
    this.plList = [
      {
        "name":"/src/images/activity/love/wanhui/20190129/pl1.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/pl2.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/pl3.png"
      }
    ]
    this.aboutList = [
      {
        "name":"/src/images/activity/love/wanhui/20190129/about1.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/about2.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/about3.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/about4.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/about5.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/about6.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/about7.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/about8.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/about9.png"
      }
    ]
    this.defImg = "/src/images/global/lazy.png";
    this.honorText="/src/images/activity/love/wanhui/20190129/honor_text.png"
    this.userSay="/src/images/activity/love/wanhui/20190129/16.png"
    this.video = "/src/videos/activity/love/wanhui/20190129/teacher_d.mp4";
    this.videoimg = "/src/images/activity/love/wanhui/20190129/videoimg.png";
    this.about_title= "/src/images/activity/love/wanhui/20190129/about_title.png";
    this.target = "/love/m/20190129";
  }
  componentWillUnmount() {

  }

  componentDidMount(){
    let _this = this;
    let eventId = "/love/wanhui/m/20190129";

    Rule.init({
      "appId": "m-activity",
      eventId,
      "eventType": "pv",
      "platform": "wap"
    });

    // 判断是否点击过客服，如果没有，那么
    if (!localStorage.getItem(eventId)) {
      setTimeout(()=>{
        _this.showModal("modal");
      },15000);
    }
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
    new Swiper('.caselist', {
      loop: true,
      centeredSlides : true,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination-3',
      },
    });
    new Swiper('#aboutList', {
      autoplay: true,
      loop: true,
      centeredSlides : true,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination-2',
      },
    });
    new Swiper('#userList', {
      loop: true,
      centeredSlides : true,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination-4',
      },
    });
    new Swiper('#honor-swiper', {
      autoplay: true,
      // loop: true,
      // centeredSlides : true,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slideActiveClass : 'honor-active',
      pagination: {
        el: '.swiper-pagination-honor',
      },
    });

  }
  componentDidUpdate(){

  }
  getHtml(item,index){
    let element;
    element = item.id? (
      <a className="js_kf" key={index} href="javascript:" data-target={index == 0 ? "/love/m/20190129_banner":"/love/m/20190129_underbanner"}>
        <div className="container">
          <img className="item lazy" data-original={item.name} src={this.defImg} key={index}/>
        </div>
      </a>
    ) :item.position ? (
      <a className="" key={index} href={this.position} data-target="/love/m/20190129_map">
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
  //八大荣誉轮播
  getHonorSwiperHTML(item, index){
    return (
      <div className="item-box swiper-slide" key={index}>
        <img className="item-img lazy" data-original={item.img} src={this.defImg} key={index}/>
      </div>
    );
  }
  getCaseHTML(item, index){
    return (
      <li key={index} className="swiper-slide one-case">
        <img className="lazy" data-original={item.name} src={this.defImg}/>
      </li>
    );
  }
  getUserHTML(item, index){
    return (
      <li key={index} className="swiper-slide one-user">
        <img className="lazy" data-original={item.name} src={this.defImg}/>
      </li>
    );
  }
  getAboutHTML(item, index){
    return (
      <li key={index} className="swiper-slide one-about">
        <div className="imgr"><img src={item.name}/></div>
      </li>
    );
  }
  getVideo(){
    let element =
    <video className="video" id="video" width="100%" controls poster={this.videoimg}
     preload="auto"
    //  x-webkit-airplay="allow"
    //  x5-video-player-type="h5"　//启用H5播放器,是wechat安卓版特性
    //  x5-video-player-fullscreen="true"　//全屏设置，设置为 true 是防止横屏
    //  x5-video-orientation="portraint"　//播放器支付的方向，landscape横屏，portraint竖屏，默认值为竖屏
    //  webkit-playsinline="true"　//</div>这个属性是ios 10中设置可以让视频在小窗内播放，也就是不是全屏播放
    //  playsInline={true}　//IOS微信浏览器支持小窗内播放
    style={{objectFit: "fill"}}>
      <source src={this.video} type="video/mp4" />
    </video>
    return element;
  }
  render() {
    return (
    <div>
        {/* 微信分享 */}
        <Wechat {...this.props.data.wechat}/>
        {/* 跳转 */}
        <Native />
        <div className="page-love-wanhui-20190315 page-love-wanhui-20190129">
          {this.pagePicList1.map((item,index)=>
            this.getHtml(item,index)
          )}
          {/* 视频 */}
          <div className="video-box">
            {this.getVideo()}
          </div>
          {this.pagePicList2.map((item,index)=>
            this.getHtml(item,index)
          )}
          {/* 成功案例 */}
          <div className="case-box">
            <p className="case-title">成功案例</p>
            <p className="case-desc">以下内容展示已获得客户同意</p>
            <div className="case-inner-box">
              <div className="swiper-pagination-3"></div>
              <div className="caselist swiper-container">
                <ul className="swiper-wrapper">
                  {this.caseList.map((item, index) => (
                    this.getCaseHTML(item, index)
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <img className="item lazy" data-original={this.userSay} src={this.defImg}/>
          </div>
          {/* 用户评论 */}
          <div className="user-say">
            <div className="user-list swiper-container" id="userList">
              <ul className="swiper-wrapper">
                {this.plList.map((item, index) => (
                  this.getUserHTML(item, index)
                ))}
              </ul>
            </div>
            <div className="swiper-pagination-4"></div>
          </div>
          <div className="container">
            <img className="item lazy" data-original={this.about_title} src={this.defImg}/>
          </div>
          {/* 关于我们 */}
          <div className="about-us">
            <div className="about-list swiper-container" id="aboutList">
              <ul className="swiper-wrapper">
                {this.aboutList.map((item, index) => (
                  this.getAboutHTML(item, index)
                ))}
              </ul>
            </div>
            <div className="swiper-pagination-2"></div>
          </div>
          <div className="container">
            <img className="html-img lazy" data-original={this.middleImg.name} src={this.defImg}/>
          </div>
          {/* 八大荣誉 */}
          <div className="honor-container">
            <img className="honor-bg lazy" src={this.defImg} data-original={this.honor_bg.name}/>
            <img className="honor-title lazy" data-original={this.honorText} src={this.defImg}></img>
            <div className="honor-big-box">
              <div className="honor-swiper swiper-container" id="honor-swiper">
                <div  className="swiper-wrapper">
                  {this.honorSwiperList.map((item,index)=>
                    this.getHonorSwiperHTML(item,index)
                  )}
                </div>
              </div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
            <a className="js_kf" data-target="" href="javascript:"  data-target="/love/m/20190129_chat">
              <div className="btn">
                  了解更多
              </div>
            </a>
          </div>
          {/* ... */}
          {this.pagePicList3.map((item,index)=>
            this.getHtml(item,index)
          )}
          {/*底部*/}
          <div className="bottom">
            <div className="bo1">
              <span className="span1 span-l">
                <img className="b-1" src="/src/images/activity/love/wanhui/20190311/b-1.png"/>
              </span>
              <span className="span1 span-m">
                <img className="b-2" src="/src/images/activity/love/wanhui/20190311/b-2.png"/>
              </span>
              <span className="span1 span-r">
                <img className="b-3" src="/src/images/activity/love/wanhui/20190311/b-3.png"/>
              </span>
            </div>
            <div className="bo2">
              <span className="win_company"></span>
              <span className="win_copyright"></span>
              <span className="win_copycode"></span>
            </div>
          </div>
          <div className="in-bottom"></div>

          {/* 底部 */}
          <Newbottom target={this.target}/>
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
