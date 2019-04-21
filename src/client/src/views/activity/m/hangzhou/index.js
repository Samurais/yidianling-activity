import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import API from '../../servers/test';
import { Toast, InputItem } from 'antd-mobile';
import Rule from '../../../../component/rules';
import {storage} from '../../../../lib/compatible';
import Swiper from 'swiper/dist/js/swiper.js';
import Newbottom from './component/Newbottom';
// import Native,{webviewSystem} from '../../../lib/native';

class Demo extends Component {

  constructor(props) {
    super(props)
    this.arrowTop="/src/images/activity/m/hangzhou/arrow_top.png"
    this.arrowDown="/src/images/activity/m/hangzhou/arrow_down.png"
    this.hide="/src/images/activity/m/hangzhou/hide.png"
    this.main="/src/images/activity/m/hangzhou/main.png"
    this.teamImg1="/src/images/activity/m/hangzhou/team1.png"
    this.teamImg2="/src/images/activity/m/hangzhou/team2.png"
    this.fangshuren="/src/images/activity/m/hangzhou/3.png"
    this.zhuanjia_title="/src/images/activity/m/hangzhou/4.png"
    this.tianmao="/src/images/activity/m/hangzhou/5.png"
    this.honor_title="/src/images/activity/m/hangzhou/7.png"
    this.window_img="/src/images/activity/m/hangzhou/window.png"
    this.state={
      more:{
        text:"更多团购",
        icon:"/src/images/activity/m/hangzhou/arrow_down.png"
      },
      moreHonor:{
        text:"更多荣誉",
        icon:"/src/images/activity/m/hangzhou/arrow_down.png"
      },
      honorList:[
        {
          "name":"浙江省公安厅干警心理关爱共建单位",
          "img":"/src/images/activity/m/hangzhou/img1.jpg"
        },
        {
          "name":"中国心理卫生协会委员单位",
          "img":"/src/images/activity/m/hangzhou/img2.jpg"
        }
      ],
      show_window:2,
      show_big:2,
      imgsrc:"/src/images/activity/m/hangzhou/pl3.png",
      lookPicture:""
    }
    this.downLoad = this.downLoad.bind(this);
    this.downLoadHonor = this.downLoadHonor.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
    this.closeBig = this.closeBig.bind(this);
    this.showBig = this.showBig.bind(this);
    this.baiduMap = "https://map.baidu.com/mobile/webapp/search/search/qt=s&wd=%E5%A3%B9%E7%82%B9%E7%81%B5%E5%BF%83%E7%90%86%E5%92%A8%E8%AF%A2&c=179&searchFlag=bigBox&version=5&exptype=dep&src_from=webapp_all_bigbox&wd2=%E6%9D%AD%E5%B7%9E%E5%B8%82%E6%BB%A8%E6%B1%9F%E5%8C%BA&sug_forward=19045995dde95dc7fbdc85ad&src=1&nb_x=13385468.92&nb_y=3507934.4&center_rank=1/vt=map"
    // this.setWindow = this.setWindow.bind(this);
    this.topList = [
      {
        "name":"/src/images/activity/m/hangzhou/top1.png"
      },
      {
        "name":"/src/images/activity/m/hangzhou/top2.png"
      },
      {
        "name":"/src/images/activity/m/hangzhou/top3.png"
      },
      {
        "name":"/src/images/activity/m/hangzhou/top4.png"
      },
      {
        "name":"/src/images/activity/m/hangzhou/top5.png"
      }
    ]
    this.teachersList = [
      {
        "name":"/src/images/activity/m/hangzhou/teacher1.png"
      },
      {
        "name":"/src/images/activity/m/hangzhou/teacher2.png"
      },
      {
        "name":"/src/images/activity/m/hangzhou/teacher3.png"
      },
      {
        "name":"/src/images/activity/m/hangzhou/teacher4.png"
      },
      {
        "name":"/src/images/activity/m/hangzhou/teacher5.png"
      }
    ]
    this.commendList = [
      {
        "name":"/src/images/activity/m/hangzhou/tj1.png"
      },
      {
        "name":"/src/images/activity/m/hangzhou/tj2.png"
      },
      {
        "name":"/src/images/activity/m/hangzhou/tj3.png"
      },
      {
        "name":"/src/images/activity/m/hangzhou/tj4.png"
      },
      {
        "name":"/src/images/activity/m/hangzhou/tj5.png"
      },
      {
        "name":"/src/images/activity/m/hangzhou/tj6.png"
      }
    ]
    this.aboutList = [
      {
        "name":"/src/images/activity/m/hangzhou/a1.png"
      },
      {
        "name":"/src/images/activity/m/hangzhou/a2.png"
      },
      {
        "name":"/src/images/activity/m/hangzhou/a3.png"
      },
      {
        "name":"/src/images/activity/m/hangzhou/a4.png"
      },
      {
        "name":"/src/images/activity/m/hangzhou/a5.png"
      },
      {
        "name":"/src/images/activity/m/hangzhou/a6.png"
      },
      {
        "name":"/src/images/activity/m/hangzhou/a7.png"
      }
    ]
    this.img = require('../../../../images/zhuzhan/1.png');
    this.topImg = {
      "name":"/src/images/activity/m/hangzhou/1.jpeg"
    };
    this.starsList = [
      {
        "name":"/src/images/activity/m/hangzhou/star.png"
      },
      {
        "name":"/src/images/activity/m/hangzhou/star.png"
      },
      {
        "name":"/src/images/activity/m/hangzhou/star.png"
      },
      {
        "name":"/src/images/activity/m/hangzhou/star.png"
      },
      {
        "name":"/src/images/activity/m/hangzhou/star.png"
      }
    ]
    this.honorList1 = [
      {
        "name":"浙江省公安厅干警心理关爱共建单位",
        "img":"/src/images/activity/m/hangzhou/img1.jpg"
      },
      {
        "name":"中国心理卫生协会委员单位",
        "img":"/src/images/activity/m/hangzhou/img2.jpg"
      }
    ]
    this.honorList2 = [
      {
        "name":"浙江省公安厅干警心理关爱共建单位",
        "img":"/src/images/activity/m/hangzhou/img1.jpg"
      },
      {
        "name":"中国心理卫生协会委员单位",
        "img":"/src/images/activity/m/hangzhou/img2.jpg"
      },
      {
        "name":"中国心理学会EAP委员会单位",
        "img":"/src/images/activity/m/hangzhou/img3.jpg"
      },
      {
        "name":"国际EAP协会中国分会副主席单位",
        "img":"/src/images/activity/m/hangzhou/img4.jpg"
      },
      {
        "name":"中国互联网优秀企业",
        "img":"/src/images/activity/m/hangzhou/img5.jpg"
      },
      {
        "name":"中央财经大学应用心理学硕士实践基地",
        "img":"/src/images/activity/m/hangzhou/img6.jpg"
      },
      {
        "name":"吉林大学心理学硕士实践基地",
        "img":"/src/images/activity/m/hangzhou/img7.jpg"
      },
      {
        "name":"温州大学心理咨询师培训基地",
        "img":"/src/images/activity/m/hangzhou/img8.jpg"
      }
    ]
    this.defImg = "/src/images/global/lazy.png";

    // this.data = [
    //   {
    //     "name":"服务客户200万+","url":require('../../../../images/zhuzhan/info_icon01.png')
    //   },
    //   {
    //     "name":"解决困扰150万+","url":require('../../../../images/zhuzhan/info_icon02.png')
    //   },
    //   {
    //     "name":"心理专家8000+","url":require('../../../../images/zhuzhan/info_icon03.png')
    //   }
    // ]
    // this.list = [
    //   {
    //     "name":"情感婚姻","title":"出轨，失恋,信任危机等","url":"https://static.ydlcdn.com/activity/images/update171212/icon_1-1.png"
    //   },
    //   {
    //     "name":"情绪压力","title":"焦虑，抑郁，强迫等","url":"https://static.ydlcdn.com/activity/images/update171212/icon_1-2.png"
    //   },
    //   {
    //     "name":"孩子心理","title":"厌学，自闭，多动，网瘾等","url":"https://static.ydlcdn.com/activity/images/update171212/icon_2-1.png"
    //   }
    //   ,
    //   {
    //     "name":"职场人际","title":"工作压力，同事关系，职业发展等","url":"https://static.ydlcdn.com/activity/images/update171212/icon_2-2.png"
    //   }
    //   ,
    //   {
    //     "name":"个人成长","title":"个人提升，情绪调节， 内向，孤僻等","url":"https://static.ydlcdn.com/activity/images/update171212/icon_3-1.png"
    //   }
    //   ,
    //   {
    //     "name":"两性心理","title":"揭秘男女思维大不同","url":"https://static.ydlcdn.com/activity/images/update171212/flag_icon3-2.png"
    //   }
    // ];
    // this.lists = [
    //   {
    //     "name":"史占彪","title1":"中国科学研究院教授、心理研究所主任","title2":"中国心理卫生协会副秘书长","title3":"国际EAP协会中国分会秘书长","url":"https://img.ydlcdn.com/file/2015/09/196fa0c9b120b8f2.jpg!s200x200"
    //   },
    //   {
    //     "name":"丁建略","title1":"吉林大学心理学系副教授、硕士生导师","title2":"中国人民大学心理学博士","title3":"中国公共文化研究与促进会（澳门）创会会长","url":"https://img.ydlcdn.com/file/2016/12/19/b9lhcrooqm32emw3.jpg!s200x200"
    //   },
    //   {
    //     "name":"赵颖","title1":"约克大学 Ph. D. -心理学 博士","title2":"国家二级心理咨询师","title3":"美国 A.C.H.E 临床催眠治疗师","url":"https://img.ydlcdn.com/file/2016/09/vay7h7hx3lzwf6u7.jpg!s200x200"
    //   }
    // ];
    // this.iamges = [
    //   {
    //     "url":"https://static.ydlcdn.com/activity/images/update171212/machine01.png"
    //   },
    //   {
    //     "url":"https://static.ydlcdn.com/activity/images/update171212/machine02.png"
    //   },
    //   {
    //     "url":"https://static.ydlcdn.com/activity/images/update171212/machine03.png"
    //   },{
    //     "url":"https://static.ydlcdn.com/activity/images/update171212/machine04.png"
    //   }
    // ];
    // this.pingjia = [
    //   {
    //     "name":"B**","date":"2018-09-21","text":"“非常好的咨询师，看待问题非常的敏锐，及时能发现问题的关键所在，我的问题也迎刃而解。一次非常惊喜的体验，非常感谢！\n" +
    //     ""
    //   },
    //   {
    //     "name":"海**","date":"2018-09-15","text":"“以诚待人，以情感人，很好的咨询师！”\n" +
    //     " "

    //   },
    //   {
    //     "name":"小**","date":"2018-09-10","text": "“李伊白老师，教会为人处事的态度，方法，受益匪浅！”\n" +
    //     " "
    //   },
    //   {
    //     "name":"阿**","date":"2018-09-07","text": "“很有效，也很耐心帮我增长智慧”\n" +
    //     "            "
    //   },
    //   {
    //     "name":"阳**","date":"2018-09-01","text": "“感谢蓝奥老师一直陪伴我成长！在老师的帮助下，我看清了自己内心世界真正的需求。以后当我对身边人有抱怨情绪时，我就应该提醒自己要向内要求自己。我爱我的家人，我想我会因为爱为他们付出更多，即便有情绪来临，我已经学会和情绪交朋友了！老师的指教，我记心中了。感谢老师”\n" +
    //     ""
    //   }
    // ];

  }
  componentWillUnmount() {

  }

  componentDidMount(){
    let _this = this;

    Rule.init({
      "appId": "m-activity",
      "eventId": "/m/hangzhou",
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

      $(".js_popup_showwin").on("click", function(){
        _this.setState({
          show_window:1
        })
      });
    });
    new Swiper('#topList', {
      autoplay: true,
      loop: true,
      centeredSlides : true,
      slidesPerView: 'auto',
    });
    new Swiper('#teachersList', {
      autoplay: true,
      loop: true,
      centeredSlides : true,
      slidesPerView: 'auto',
      spaceBetween:12,
      slideActiveClass : 'teachers-active',
      pagination: {
        el: '.swiper-pagination-1',
      },
    });
    new Swiper('#aboutList', {
      autoplay: true,
      loop: true,
      centeredSlides : true,
      slidesPerView: 'auto',
      slideActiveClass : 'teachers-active',
      pagination: {
        el: '.swiper-pagination-2',
      },
    });

    // $(function(){

    //   var top_servers_swiper = new Swiper('.swiper-container', {
    //     autoplay:{  delay: 5000,
    //       disableOnInteraction: false,},
    //     loop:true,
    //     pagination:{el:'.swiper-pagination'} ,
    //     paginationType: 'bullets',
    //     slidesPerView: 'auto',
    //     autoplayDisableOnInteraction: false,
    //     lazyLoading: true,
    //     centeredSlides: true,
    //   })
    // });

    // $(".page-m-hz").on('mousemove', function(e) {
    //   console.log(5555);
    //   // e.preventDefault();
    // }, false);

  }
  componentDidUpdate(){

    // setTimeout(() => {
    //   new Swiper('#poster', {
    //     loop: true,
    //     autoplay: true,
    //     parallax:true,
    //     pagination: {
    //       el: '.swiper-pagination',
    //     },
    //   });
    // }, 150);


  }
  getStarsList(item,index){
    return(
      <img className="item lazy" data-original={item.name} src={this.defImg} key={index}/>
    )
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
    return(
        element
    )
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
  downLoadHonor(){
    const that = this;
    if(this.state.moreHonor.text == "更多荣誉") {
      this.setState({
        moreHonor:{
          text:"收起",
          icon:that.arrowTop
        },
        honorList:that.honorList2
      })
    }else{
      this.setState({
        moreHonor:{
          text:"更多荣誉",
          icon:that.arrowDown
        },
        honorList:that.honorList1
      })
    }

  }
  // setWindow(){
  //   this.setState({
  //     show_window:1
  //   })
  // }
  closeWindow(){
    this.setState({
      show_window:2
    })
    $(".page-m-hz").unbind('touchmove');
  }
  closeBig(){
    this.setState({
      show_big:2
    })
    $(".page-m-hz").unbind('touchmove');
  }
  showBig(e){
    this.setState({
      show_big:1,
      lookPicture:e.currentTarget.getAttribute('data-src')
    })
  }
  //显示弹窗
  showWindow(){
    let element;
    if(this.state.show_window == 1){
      element = (
        <div className="big-box">
          <div className="modal" onClick={this.closeWindow}></div>

          <div className="img-box">
            <img className="close-img" src="/src/images/activity/m/hangzhou/close_icon.png" onClick={this.closeWindow}/>
            <img  className="img1 lazy" data-original={this.window_img} src={this.defImg}/>
            <div className="bottom-buttons">
              <a href="javascript:" className="js_kf_phone" data-target="/m/hangzhou_modal_phone">
                <div className="button">

                </div>
              </a>
              <a href="javascript:;" className="js_kf" data-target="/m/hangzhou_modal_chat">
                <div className="button">

                </div>
              </a>
            </div>
          </div>
        </div>

      )
      $(".page-m-hz").bind('touchmove', function(e) {
        e.preventDefault();
      });
      setTimeout(()=>{
        $("img.lazy").each(function(){
          let _this = $(this);
          let img = _this.data("original");
          _this.attr("src", img);
        });
      });
    }else{
      element = ('');
    }


    return element;

  }
  // 显示大图
  showBigPicture(){

    let element;
    if(this.state.show_big == 1){
      element = (
        <div className="big-box">
          <div className="modal" onClick={this.closeBig}></div>
          <div className="img-box-2">
            <img  className="look-img lazy" data-original={this.state.lookPicture} src={this.defImg}/>
          </div>
        </div>

      )
      $(".page-m-hz").bind('touchmove', function(e) {
        e.preventDefault();
      });
      setTimeout(()=>{
        $("img.lazy").each(function(){
          let _this = $(this);
          let img = _this.data("original");
          _this.attr("src", img);
        });
      });
    }else{
      element=('')
    }

    return element;
  }
  getTeachersHTML(item, index){
    return (
      <li key={index} className="swiper-slide one-teacher">
        <img src={item.name}/>
      </li>
    );
  }
  getTopHTML(item, index){
    return (
      <li key={index} className="swiper-slide one-top">
        <img src={item.name}/>
      </li>
    );
  }
  getAboutHTML(item, index){
    return (
      <li key={index} className="swiper-slide one-about">
        <img src={item.name}/>
      </li>
    );
  }
  getHonorHTML(item, index){
    return (
      <div className="one-honor" key={index} data-src={this.state.honorList[index].img} onClick={this.showBig}>
        <div className="honor-left">
          <img src="/src/images/activity/m/hangzhou/honor_icon.png"/>
          <span>{item.name}</span>
        </div>
        <div className="honor-right">
          <span>证书</span>
          <img src="/src/images/activity/m/hangzhou/active_arrow.png"/>
        </div>
      </div>
    );
  }
  getCommendHTML(item, index){
    return (
      <div className="commend-box" key={index}>
        <img className="commend-img lazy" src={this.defImg} data-original={item.name}/>
      </div>
    );
  }
  render() {
    return (
    <div>
        <div className="page-m-hz">
          {/* <div className="hz_top">
            <img src="https://static.ydlcdn.com/activity/images/activity002/logo1.png" alt=""className="hz_img1"/>
            <a href="tel:400-883-3778" className="hz_a kf_hotline">
              <img  src="https://static.ydlcdn.com/activity/images/activity002/tel2.png"  alt=""/>
              &nbsp;400-883-3778
            </a>
          </div> */}
          <div className="top-container">
            <a className="js_kf_phone" href="javascript:" data-target="/m/hangzhou_phone">
              <img className="item lazy" data-original={this.topImg.name} src={this.defImg}/>
            </a>
          </div>
          <div className="in-top"></div>
          <div className="top-banner">
            <div className="top-list swiper-container" id="topList">
              <ul className="swiper-wrapper">
                {this.topList.map((item, index) => (
                  this.getTopHTML(item, index)
                ))}
              </ul>
            </div>
            <img className="lazy hide" src={this.defImg} data-original={this.hide}/>
          </div>
          {/*<div className="hz-header">*/}
            {/*<a className="js_kf" href="javascript:;" data-target="/m/hangzhou_banner">*/}
              {/*<img className="lazy" data-original="/src/images/activity/m/hangzhou/banner.jpg?2"  src={this.defImg}/>*/}
            {/*</a>*/}
          {/*</div>*/}
          {/*<div className="main-box">*/}
            {/*<h3 className="title">壹点灵心理咨询中心(杭州店)</h3>*/}
            {/*<div className="first-line">*/}
              {/*<div className="stars-box">*/}
                {/*{this.starsList.map((item,index)=>(*/}
                  {/*this.getStarsList(item,index)*/}
                {/*))}*/}
              {/*</div>*/}
              {/*<div className="some-message">*/}
                {/*<span>11939条</span>*/}
              {/*</div>*/}
            {/*</div>*/}
            {/*<div className="second-line">*/}
                {/*<div className="left-box">*/}
                  {/*<span>中科院心理专家领衔</span>*/}
                  {/*<i className="vertical-line"></i>*/}
                  {/*<span>知名咨询师驻场</span>*/}
                {/*</div>*/}
                {/*<div className="right-box">*/}
                  {/*已有*/}
                  {/*<span>21W+</span>*/}
                  {/*人预约*/}
                {/*</div>*/}
            {/*</div>*/}
            {/*<div className="third-line">*/}
              {/*<div className="fw">服务</div>*/}
              {/*<span className="text-font">隐私保障</span>*/}
              {/*<span className="text-font">不满意退款</span>*/}
              {/*<span className="text-font">一对一服务</span>*/}
              {/*<span className="text-font">全年服务</span>*/}
            {/*</div>*/}
          {/*</div>*/}
          {/*<div className="separate-line"></div>*/}
          {/*<div className="three-jump">*/}
              {/*<div className="top">*/}
                  {/*<div className="top-left">*/}
                    {/*<img className="icon" src="/src/images/activity/m/hangzhou/time_icon.png"/>*/}
                    {/*<span className="first-span">营业中</span>*/}
                    {/*<span>早上08:00到凌晨01:00</span>*/}
                  {/*</div>*/}
                  {/*<div className="top-right">*/}
                    {/*<img className="icon first_icon" src="/src/images/activity/m/hangzhou/icon-1-4.png"/>*/}
                    {/*<img className="icon second_icon" src="/src/images/activity/m/hangzhou/icon-1-5.png"/>*/}
                  {/*</div>*/}
              {/*</div>*/}
              {/*<a className="" href={this.baiduMap} data-target="/m/hangzhou_map">*/}
                {/*<div className="top">*/}
                    {/*<div className="top-left">*/}
                      {/*<img className="icon" src="/src/images/activity/m/hangzhou/position_icon.png"/>*/}
                      {/*<span>滨江区阡陌路459号聚光中心C2-3楼</span>*/}
                    {/*</div>*/}
                    {/*<div className="top-right">*/}
                      {/*<img className="icon right_icon" src="/src/images/activity/m/hangzhou/right_icon.png"/>*/}
                    {/*</div>*/}
                {/*</div>*/}
              {/*</a>*/}
              {/*<a href="javascript:" data-target="/m/hangzhou_phone" className="js_kf_phone">*/}
                {/*<div className="top">*/}
                    {/*<div className="top-left">*/}
                      {/*<img className="icon" src="/src/images/activity/m/hangzhou/tel_icon.png"/>*/}
                      {/*<span>178-2697-8275‬</span>*/}
                    {/*</div>*/}
                    {/*<div className="top-right">*/}
                      {/*<img className="icon right_icon" src="/src/images/activity/m/hangzhou/right_icon.png"/>*/}
                    {/*</div>*/}
                {/*</div>*/}
              {/*</a>*/}
          {/*</div>*/}
          <a className="" href={this.baiduMap} data-target="/m/hangzhou_map">
            <div className="main">
              <img className="lazy" src={this.defImg} data-original={this.main}/>
            </div>
          </a>
          <div className="separate-line-2"></div>
          {/* <div className="productions"> */}
            <a className="js_kf" href="javascript:;" data-target="/m/hangzhou_commend">
              {/* {this.getTeamList()} */}
              <div className="commend-scroll">
                  {this.commendList.map((item,index)=>
                    this.getCommendHTML(item,index)
                  )}
              </div>
              <div className="font0">
                <img className="lazy" src={this.defImg} data-original={this.fangshuren}/>
              </div>
            </a>
              {/* <div className="more" onClick={this.downLoad}>
                {this.state.more.text}
                <img className="icon" src={this.state.more.icon}/>
              </div> */}
          {/* </div> */}
          <div className="teachers">
              {/*<div className="title-1">*/}
                {/*<div className="title-left expert-title">*/}
                    {/*<i className="vertival-line"></i>专家咨询师*/}
                {/*</div>*/}
                {/*<div className="title-right">*/}
                    {/*强大贴心的咨询团队*/}
                {/*</div>*/}
              {/*</div>*/}
            <div className="zhuanjia_title">
              <img className="lazy" src={this.defImg} data-original={this.zhuanjia_title}/>
            </div>
              <div className="teachers-list">
                {this.teachersList.map((item, index) => (
                  this.getTeachersHTML(item, index)
                ))}
              </div>
              <a className="js_kf" href="javascript:;" data-target="/m/hangzhou_knowmore">
                <div className="know-more">
                    <span>了解更多</span>
                    <img src="/src/images/activity/m/hangzhou/icon0.png"/>
                </div>
                {/* <div className="swiper-pagination-1"></div> */}
              </a>
          </div>
          <a className="js_kf" href="javascript:;" data-target="/m/hangzhou_tianmao">
            <div className="font0">
              <img className="lazy" src={this.defImg} data-original={this.tianmao}/>
            </div>
          </a>
          <div className="about-us">
            {/*<div className="title-1">*/}
              {/*<div className="title-left">*/}
                  {/*<i className="vertival-line"></i>关于我们*/}
              {/*</div>*/}
              {/*<div className="title-right">*/}
                {/*专业放心的心理服务平台*/}
              {/*</div>*/}
            {/*</div>*/}

            <div className="about-list swiper-container" id="aboutList">
              <ul className="swiper-wrapper">
                {this.aboutList.map((item, index) => (
                  this.getAboutHTML(item, index)
                ))}
              </ul>
            </div>
            <div className="swiper-pagination-2"></div>

            <div className="text-box">
              <img src="/src/images/activity/m/hangzhou/about_us.jpg"/>
            </div>
          </div>
          <div className="honor">
              {/*<div className="title-1">*/}
                {/*<div className="title-left">*/}
                    {/*<i className="vertival-line"></i>八大荣誉*/}
                {/*</div>*/}
                {/*<div className="title-right">*/}
                  {/*客户信任是我们最大的光荣*/}
                {/*</div>*/}
              {/*</div>*/}
            <div className="honor_title">
              <img className="lazy" src={this.defImg} data-original={this.honor_title}/>
            </div>
              <div className="honor-box">
                  {this.state.honorList.map((item, index) => (
                    this.getHonorHTML(item, index)
                  ))}
                  <div className="more" onClick={this.downLoadHonor}>
                    {this.state.moreHonor.text}
                    <img className="icon" src={this.state.moreHonor.icon}/>
                  </div>
              </div>

          </div>

          {/* 评论 */}
          <img className="pl lazy"  data-original="/src/images/activity/m/hangzhou/pl1.png" src={this.defImg}/>
          <div className="imgs-box-1">
              <img className="one-img lazy" data-src="/src/images/activity/m/hangzhou/pic1_big.png" data-original="/src/images/activity/m/hangzhou/pic1.png" src={this.defImg} onClick={this.showBig}/>
          </div>
          <img className="pl lazy" data-original="/src/images/activity/m/hangzhou/pl2.png" src={this.defImg}/>
          <div className="imgs-box-2">
              <img className="one-img lazy" data-src="/src/images/activity/m/hangzhou/pic2_big.png" data-original="/src/images/activity/m/hangzhou/pic2.png" src={this.defImg} onClick={this.showBig}/>
              <img className="one-img lazy" data-src="/src/images/activity/m/hangzhou/pic3_big.png" data-original="/src/images/activity/m/hangzhou/pic3.png" src={this.defImg}  onClick={this.showBig}/>
              <img className="one-img lazy" data-src="/src/images/activity/m/hangzhou/pic4_big.png" data-original="/src/images/activity/m/hangzhou/pic4.png" src={this.defImg}  onClick={this.showBig}/>
              <img className="one-img lazy" data-src="/src/images/activity/m/hangzhou/pic5_big.png" data-original="/src/images/activity/m/hangzhou/pic5.png" src={this.defImg}  onClick={this.showBig}/>
              <img className="one-img lazy" data-src="/src/images/activity/m/hangzhou/pic6_big.png" data-original="/src/images/activity/m/hangzhou/pic6.png" src={this.defImg}  onClick={this.showBig}/>
              <img className="one-img lazy" data-src="/src/images/activity/m/hangzhou/pic7_big.png" data-original="/src/images/activity/m/hangzhou/pic7.png" src={this.defImg}  onClick={this.showBig}/>
          </div>
          <img className="pl lazy" data-original="/src/images/activity/m/hangzhou/pl3.png" src={this.defImg}/>
          <div className="imgs-box-3">
              <img className="one-img lazy" data-src="/src/images/activity/m/hangzhou/pic8_big.png" data-original="/src/images/activity/m/hangzhou/pic8.png" src={this.defImg} onClick={this.showBig} />
              <img className="one-img lazy" data-src="/src/images/activity/m/hangzhou/pic9_big.png" data-original="/src/images/activity/m/hangzhou/pic9.png" src={this.defImg} onClick={this.showBig}/>
              <img className="one-img lazy" data-src="/src/images/activity/m/hangzhou/pic10_big.png" data-original="/src/images/activity/m/hangzhou/pic10.png" src={this.defImg} onClick={this.showBig}/>
          </div>
          <div className="in-bottom"></div>
          {/* 弹窗 */}
          {this.showWindow()}
          {/* 浮窗 */}
          {/* <a href="javascript:;"  className="js_popup_showwin" >
            <img data-original="/src/images/activity/m/hangzhou/fc.png"  src={this.defImg} className="fc lazy" data-target="/m/hangzhou_fuchuang"/>
          </a> */}
          {/* 大图 */}
          {this.showBigPicture()}
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
