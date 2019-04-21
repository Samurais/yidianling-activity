import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import API from '../../../servers/test';
import { Toast, InputItem } from 'antd-mobile';
import Rule from '../../../../../component/rules';
import Wechat from '../../../../../component/wechat';
import {storage} from '../../../../../lib/compatible';
import Swiper from 'swiper/dist/js/swiper.js';
import Newbottom from './component/Newbottom';
import Native from '../../../../../component/native';

class Demo extends Component {

  constructor(props) {
    super(props)
    this.arrowTop="/src/images/activity/m/hangzhou/arrow_top.png"
    this.arrowDown="/src/images/activity/m/hangzhou/arrow_down.png"
    this.teamImg1="/src/images/activity/m/hangzhou/team1.png"
    this.teamImg2="/src/images/activity/m/hangzhou/team2.png"
    this.window_img="/src/images/activity/m/hangzhou/window.png"
    //上海袋虎-高德地图网址
    this.position1="https://m.amap.com/search/mapview/poiid=B0FFJHSJLZ&keywords=%E5%A3%B9%E7%82%B9%E7%81%B5%E5%BF%83%E7%90%86%E6%9C%8D%E5%8A%A1%E4%B8%AD%E5%BF%83"
    //杭州袋虎-高德地图网址
    this.position2="https://www.amap.com/place/B0FFHNT6QF"
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
        "name":"/src/images/activity/m/home/2.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/m/home/3.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/m/home/e1.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/m/home/e2.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/m/home/e3.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/m/home/e5.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/m/home/ni.png"
      },
    ]
    this.pagePicList2 = [
      {
        "name":"/src/images/activity/m/home/15.png"
      },
      {
        "name":"/src/images/activity/m/home/16.png"
      }
    ]
    this.pagePicList3 = [
      {
        "name":"/src/images/activity/m/home/mt.png"
      },
      {
        "name":"/src/images/activity/m/home/pic8.png"
      },
    ]
    this.topImg = {
      "name":"/src/images/activity/m/home/1.png"
    }
    this.honor_bg = {
      "name":"/src/images/activity/m/home/honor_bg.png"
    }
    this.middleImg = {
      "name":"/src/images/activity/m/home/middle.png"
    }
    this.honorSwiperList = [
      {
        "img":"/src/images/activity/m/home/honor1.png"
      },
      {
        "img":"/src/images/activity/m/home/honor2.png"
      },
      {
        "img":"/src/images/activity/m/home/honor3.png"
      },
      {
        "img":"/src/images/activity/m/home/honor4.png"
      },
      {
        "img":"/src/images/activity/m/home/honor5.png"
      },
      {
        "img":"/src/images/activity/m/home/honor6.png"
      },
      {
        "img":"/src/images/activity/m/home/honor7.png"
      },
      {
        "img":"/src/images/activity/m/home/honor8.png"
      }
    ]
    this.shebeiList = [
      {
        "name":"/src/images/activity/m/home/shebei1.png"
      },
      {
        "name":"/src/images/activity/m/home/shebei2.png"
      },
      {
        "name":"/src/images/activity/m/home/shebei3.png"
      },
      {
        "name":"/src/images/activity/m/home/shebei4.png"
      }
    ]
    this.taList = [
      {
        "name":"/src/images/activity/m/home/ta1.png"
      },
      {
        "name":"/src/images/activity/m/home/ta2.png"
      },
      {
        "name":"/src/images/activity/m/home/ta3.png"
      }
    ]
    this.aboutList = [
      {
        "name":"/src/images/activity/m/home/about1.png"
      },
      {
        "name":"/src/images/activity/m/home/about2.png"
      },
      {
        "name":"/src/images/activity/m/home/about3.png"
      },
      {
        "name":"/src/images/activity/m/home/about4.png"
      },
      {
        "name":"/src/images/activity/m/home/about5.png"
      },
      {
        "name":"/src/images/activity/m/home/about6.png"
      },
      {
        "name":"/src/images/activity/m/home/about7.png"
      },
      {
        "name":"/src/images/activity/m/home/about8.png"
      },
      {
        "name":"/src/images/activity/m/home/about9.png"
      },
      {
        "name":"/src/images/activity/m/home/about10.png"
      }
    ]
    this.ta_title="/src/images/activity/m/home/13.png"
    this.defImg = "/src/images/global/lazy.png";
    this.honorText="/src/images/activity/m/home/honor_text.png"

  }
  componentWillUnmount() {

  }

  componentDidMount(){
    let _this = this;

    Rule.init({
      "appId": "m-activity",
      "eventId": "/m/home",
      "eventType": "pv",
      "platform": "wap"
    });
    $(window).scrollTop(0);
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
    new Swiper('.ni-swiper', {
      slidesPerView: 'auto',
      // centeredSlides: true,
      paginationClickable: true,
      // spaceBetween: n(16)
      freeMode: true,
      on: {
        init: function(){
          $(".swiper-lazy").each(function(){
            let _this = $(this);
            _this.attr("src", _this.data("src"));
          });
        },
      },
    });
    new Swiper('.ta-list', {
      loop: true,
      centeredSlides : true,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination-3',
      },
    });
    new Swiper('#shebeiList', {
      autoplay: true,
      loop: true,
      centeredSlides : true,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination-4',
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
      <a className="js_kf" key={index} href="javascript:" data-target={item.id == 1 ? "/m/shanghai_banner":"/m/shanghai_underbanner"}>
        <div className="container">
          <img className="item lazy" data-original={item.name} src={this.defImg} key={index}/>
        </div>
      </a>
     ) :item.position1 ? (
      <a className="shanghailink" key={index} href={this.position1} data-target="/m/shanghai_map">
        <div className="container">
          <img className="item lazy" data-original={item.name} src={this.defImg} key={index}/>
        </div>
      </a>
    ) :item.position2 ? (
      <a className="hangzhoulink" key={index} href={this.position2} data-target="/m/hangzhou_map">
        <div className="container">
          <img className="item lazy" data-original={item.name} src={this.defImg} key={index}/>
        </div>
      </a>
    ) :(
      <div className="container" key={index}>
        <img className="item lazy" data-original={item.name} src={this.defImg} key={index}/>
      </div>
    );
    return element;
  }
  getTeamList(){
    let element = this.state.more.text == "更多团购" ?
    (
    <div className="team-box" key="1">
      <img className="teambuy-img" src={this.teamImg1}/>
    </div>
    )
    :
    (
      <div className="team-box" key="2">
        <img className="teambuy-img" src={this.teamImg1}/>
        <img className="teambuy-img" src={this.teamImg2}/>
      </div>
    )
    return element;
  }
  downLoad(){
    const that = this;
    if(this.state.more.text == "更多团购") {
      this.setState({
        more:{
          text:"收起",
          icon:that.arrowTop
        }
      })
    }else{
      this.setState({
        more:{
          text:"更多团购",
          icon:that.arrowDown
        }
      })
    }

  }

  getExpertsHTML(item, index){
    return (
      <a href="javascript:" data-id={item.id} key={index} className="js_kf" data-target="/m/shanghai_expert">
        <li key={index} className="expert-item">
          <img src={item.name}/>
        </li>
      </a>
    );
  }
  //八大荣誉轮播
  getHonorSwiperHTML(item, index){
    return (
      <div className="item-box swiper-slide" key={index}>
        <img className="item-img lazy" data-original={item.img} src={this.defImg} key={index}/>
      </div>
    );
  }
  getTaHTML(item, index){
    return (
      <li key={index} className="swiper-slide one-ta">
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
  render() {
    return (
    <div>
        {/* 微信分享 */}
        <Wechat {...this.props.data.wechat}/>
        {/* 跳转 */}
        <Native />
        <div className="page-m-shanghai2">
          <div className="top-container">
            <a className="js_kf_phone" href="javascript:" data-target="/m/shanghai_phone">
              <img className="item lazy" data-original={this.topImg.name} src={this.defImg}/>
            </a>
          </div>
          {/* banner及专家团队 */}
          <ul className="List1-box">
            {this.pagePicList1.map((item,index)=>
              this.getHtml(item,index)
            )}
          </ul>
          <div className="ni-box">
            <div className="swiper-container ni-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide1">
                  <a className="js_kf" data-target="" href="javascript:"  data-target="/m/shanghai_chat">
                    <div className="in-box">
                      <img src={this.defImg} data-src="/src/images/activity/m/shanghai/ni1.png" className="js_kf swiper-lazy"/>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a className="js_kf" data-target="" href="javascript:"  data-target="/m/shanghai_chat">
                    <div className="in-box">
                      <img src={this.defImg} data-src="/src/images/activity/m/shanghai/ni2.png" className="js_kf swiper-lazy"/>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a className="js_kf" data-target="" href="javascript:"  data-target="/m/shanghai_chat">
                    <div className="in-box">
                      <img src={this.defImg} data-src="/src/images/activity/m/shanghai/ni3.png" className="js_kf swiper-lazy"/>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a className="js_kf" data-target="" href="javascript:"  data-target="/m/shanghai_chat">
                    <div className="in-box">
                      <img src={this.defImg} data-src="/src/images/activity/m/shanghai/ni4.png" className="js_kf swiper-lazy"/>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide swiper-slide5">
                  <a className="js_kf" data-target="" href="javascript:"  data-target="/m/shanghai_chat">
                    <div className="in-box">
                      <img src={this.defImg} data-src="/src/images/activity/m/shanghai/ni5.png" className="js_kf swiper-lazy"/>
                    </div>
                  </a>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>

          </div>
          <img className="why-bg lazy" src="/src/images/activity/m/home/4.png" />
          <img className="why-bg lazy" src="/src/images/activity/m/home/5.png" />
          {/*我们设备齐全*/}
          <div className="shebei">
            <img className="shebei-title lazy" src="/src/images/activity/m/home/shebei.png" />
            <div className="shebei-list swiper-container" id="shebeiList">
              <ul className="swiper-wrapper">
                {this.shebeiList.map((item, index) => (
                  this.getAboutHTML(item, index)
                ))}
              </ul>
            </div>
            <div className="swiper-pagination-4"></div>
          </div>
          {/* 他说 */}
          <div className="ta-box">
            <img className="ta-title lazy" data-original={this.ta_title} src={this.defImg}/>
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
          {this.pagePicList2.map((item,index)=>
            this.getHtml(item,index)
          )}
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
            <a className="js_kf" data-target="" href="javascript:"  data-target="/m/shanghai_chat">
              <div className="btn">
                  了解更多
              </div>
            </a>
          </div>
          {/* ... */}
          {this.pagePicList3.map((item,index)=>
            this.getHtml(item,index)
          )}

          <div className="bottom">
            <div className="bo1">
              <span className="span1 span-l">
                <img className="b-1" src="/src/images/activity/m/home/b-1.png"/>
              </span>
              <span className="span1 span-m">
                <img className="b-2" src="/src/images/activity/m/home/b-2.png"/>
              </span>
              <span className="span1 span-r">
                <img className="b-3" src="/src/images/activity/m/home/b-3.png"/>
              </span>
            </div>
            <div className="bo2">
              <span className="s1">联系我们</span>
              {/* <a className="" href={this.position1} data-target="/m/shanghai_map">
                <span className="s2">上海：上海市申长路1398弄1-4号阿里中心T1-305<img src="/src/images/activity/m/home/position-icon.png"/></span>
              </a> */}
              <a className="" href={this.position2} data-target="/m/hangzhou_map">
                <span className="s3">杭州：杭州市滨江区阡陌路459号聚光中心C2-302<img src="/src/images/activity/m/home/position-icon.png"/></span>
              </a>
            </div>
            <div className="bo3">
              <span className="win_copyright"></span>
              <span className="win_company"></span>
              <span className="win_copycode"></span>
            </div>
          </div>
          <div className="in-bottom"></div>
          {/* 弹窗 */}
          {/* {this.showWindow()} */}
          {/* 大图 */}
          {/* {this.showBigPicture()} */}
          {/* 底部 */}
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
