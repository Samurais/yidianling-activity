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
    super(props);
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
      lookPicture:"",
      modal: false
    };
    this.pagePicList1 = [
      {
        "name":"/src/images/activity/love/wanhui/20190329/1.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190329/2.png",
      },
      {
        "name":"/src/images/activity/love/wanhui/20190329/3.png",

      },
      {
        "name":"/src/images/activity/love/wanhui/20190329/4.png",
      },
      {
        "name":"/src/images/activity/love/wanhui/20190329/5.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190329/6.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190329/7.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190329/8.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190329/9.png",
      },
    ];
    this.pagePicList3 = [
      {
        "name":"/src/images/activity/love/wanhui/20190129/19.png"
      }
    ];
    this.pagePicList4 = [
      {
        "name":"/src/images/activity/love/wanhui/20190315/why.png",
        "id":"1"
      }
    ];
    this.middleImg = {
      "name":"/src/images/activity/love/wanhui/20190129/middle.png"
    };
    this.caseList = [
      {
        "name":"/src/images/activity/love/wanhui/20190315/case2.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190315/case1.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190315/case3.png"
      }
    ];
    this.aboutList = [
      {
        "name":"/src/images/activity/love/wanhui/20190304/about1.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/about2.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/about3.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/about4.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/about5.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/about6.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/about7.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/about8.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/about9.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/about10.png"
      }
    ];
    this.plList = [
      {
        "name":"/src/images/activity/love/wanhui/20190315/pl1.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190315/pl2.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190315/pl3.png"
      }
    ];
    this.defImg = "/src/images/global/lazy.png";
    this.case_title= "/src/images/activity/love/wanhui/20190315/case_title.png";
    this.about_title= "/src/images/activity/love/wanhui/20190315/about_title.png";
    this.userSay="/src/images/activity/love/wanhui/20190129/16.png";
    this.target = "/love/m/20190315";
  }
  componentWillUnmount() {

  }

  componentDidMount(){
    let _this = this;
    let eventId = "/love/wanhui/m/20190327";

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
    new Swiper('#userList', {
      loop: true,
      centeredSlides: true,
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
  }
  componentDidUpdate(){

  }
  getHtml(item,index){
    let element;
    element = item.id ? (
      item.id == "2"
      ?
        <div className="container" key={index}>
          <a className="js_kf link1" href="javascript:" data-target={"/love/wanhui/m/20190327"}>
          </a>
          <img className="item lazy" data-original={item.name} src={this.defImg} />
        </div>
      :
      <a className="js_kf" key={index} href="javascript:" data-target={index == 0 ? "/love/m/20190304_banner":"/love/m/20190304_underbanner"}>
        <div className="container">
          <img className="item lazy" data-original={item.name} src={this.defImg} />
        </div>
      </a>
    ) : item.position ? (
      <a className="" key={index} href={this.position} data-target="/love/m/20190304_map">
        <div className="container">
          <img className="item lazy" data-original={item.name} src={this.defImg} />
        </div>
      </a>
    ):(
      <div className="container" key={index}>
        <img className="item lazy" data-original={item.name} src={this.defImg} key={index}/>
      </div>
    );
    return element;
  }

  getUserHTML(item, index){
    return (
      <li key={index} className="swiper-slide one-user">
        <img className="lazy" data-original={item.name} src={this.defImg}/>
      </li>
    );
  }
  getCaseHTML(item, index){
    return (
      <li key={index} className="swiper-slide one-case">
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

  showModal(key) {
    this.setState({
      [key]: true,
    });
  }
  onClose(key){
    return () => {
      this.setState({
        [key]: false,
      });
    }
  }
  render() {
    return (
      <div className="page-love-wanhui-20190315">
        {/*banner头部及专家列表*/}
        {this.pagePicList1.map((item,index)=>
          this.getHtml(item,index)
        )}
        {/* 成功案例 */}
        <div className="case-box" style={{"backgroundColor": "#FE999A"}}>
          <div className="container">
            <img className="item lazy" data-original={this.case_title} src={this.defImg}/>
          </div>
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
        {this.pagePicList4.map((item,index)=>
          this.getHtml(item,index)
        )}
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
        {/*媒体报道*/}
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

        {/* 微信分享 */}
        <Wechat {...this.props.data.wechat}/>
        {/* 跳转 */}
        <Native />

        <Modal
          visible={this.state.modal}
          transparent
          maskClosable={true}
          className="modal-wanhui20181130"
        >
          <div className="modal-content">
            <div className="pic">
              <a href="javascript:" data-target="/love/wanhui/m/20180304_modal" className="js_kf">
                <img src="/src/images/activity/love/wanhui/20181130-A3/modal.png" />
              </a>
            </div>
            <a href="javascript:" className="js_close" data-target="/love/wanhui/m/2010304_close_modal" onClick={this.onClose('modal')}></a>
          </div>
        </Modal>
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
