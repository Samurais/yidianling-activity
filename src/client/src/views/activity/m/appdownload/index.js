import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import API from '../../servers/test';
import { Toast, InputItem } from 'antd-mobile';

import {storage} from '../../../../lib/compatible';
import Swiper from 'swiper/dist/js/swiper.js';
// import Native,{webviewSystem} from '../../../lib/native';

import Rules from '../../../../component/rules';


class Demo extends Component {

  constructor(props) {

    super(props)

  }
  componentWillUnmount() {

  }

  componentDidMount(){



    $(function(){


      Rules.init({
        "appId": "m-activity",
        eventId: "/m/appdownload",
        "eventType": "pv",
        "platform": "wap"
      });

      var top_servers_swiper = new Swiper('.swiper-container', {
        autoplay:{  delay: 5000,
          disableOnInteraction: false,},
        loop:true,
        pagination:{el:'.swiper-pagination'} ,
        paginationType: 'bullets',
        slidesPerView: 'auto',
        autoplayDisableOnInteraction: false,
        lazyLoading: true,
        centeredSlides: true,
      });

      setTimeout(() => {
        new Swiper('#poster', {
          loop: true,
          autoplay: true,
          parallax:true,
          pagination: {
            el: '.swiper-pagination',
          },
        });
      }, 150);
    });
    $('.app_service').click(function(){
      $('.app_alert').css('display','block');

    })
    $('.close').click(function(){
      $('.app_alert').css('display','none');
    })

  }

  render() {
    return (
      <div >
        <div className="page-m-app">
          <div className="app_header">
            <img src="//static.ydlcdn.com/activity/images/baidu_app/cont3.png" alt=""/>
            <a href="https://android.myapp.com/myapp/detail.htm?apkName=com.cxzapp.yidianling&ADTAG=mobile" className="app_a js_hmt_click">
              免费咨询
              还送30元
              <span>(下载app)</span>
            </a>
          </div>
          <div className="app_service">
            <div className="app_filst">
              <p>我们的服务</p>
            </div>
            <div className="app_items">
              <div className="app_list js_hmt_click">
                <img src="//static.ydlcdn.com/mobile/images/app/icon_category_lahy@3x.png" alt=""/>
                <p>恋爱婚姻咨询</p>
              </div>
              <div className="app_list js_hmt_click">
                <img src="//static.ydlcdn.com/mobile/images/app/icon_category_qxyl@3x.png" alt=""/>
                <p>情绪压力咨询</p>
              </div>
              <div className="app_list js_hmt_click">
                <img src="//static.ydlcdn.com/mobile/images/app/icon_category_grcz@3x.png" alt=""/>
                <p>孩子教育咨询</p>
              </div>
              <div className="app_list js_hmt_click">
                <img src="//static.ydlcdn.com/mobile/images/app/icon_category_xxl@3x.png" alt=""/>
                <p>性心理咨询</p>
              </div>
              <div className="app_list js_hmt_click">
                <img src="//static.ydlcdn.com/mobile/images/app/icon_category_jtgx@3x.png" alt=""/>
                <p>家庭关系咨询</p>
              </div>
              <div className="app_list js_hmt_click">
                <img src="//static.ydlcdn.com/mobile/images/app/icon_category_qblb@3x.png" alt=""/>
                <p>查看更多</p>
              </div>
            </div>
          </div>
          <div className="app_expert">
            <div className="app_filst">
              <p>在线专家</p>
            </div>
            <div className="app_term">
              <div className="app_termLeft">
                <img src="//img.ydlcdn.com/file/2016/04/k2rbzbg3ujzbtb8z.jpg!s120x120" alt="" className="portrait"/>
              </div>
              <div className="app_termRight">
                <h3>刘毅</h3>
                <p>来自 浙江-杭州</p>
                <span className="box_span">二级心理咨询师</span>
                <span className="box_span">中国心理学会成员</span>
                <p className="p_text">擅长：婚恋情感：婚恋挽回、情侣/夫妻不和、亲密关系探索、相处/沟通模式探索、走出分手阴影；</p>
                <span className="p_text2">9599</span>
                <span className="text_s">人已咨询</span>&nbsp;&nbsp;&nbsp;
                <span className="text_s">好评率 100%</span>
                <a href="javascript:" className="Consultation js_hmt_click">咨询</a>
              </div>
            </div>

            <div className="app_term">
              <div className="app_termLeft">
                <img src="//img.ydlcdn.com/file/2016/09/ddy4yvybhk1qgk53.png!s120x120" alt="" className="portrait"/>
              </div>
              <div className="app_termRight">
                <h3>何婷</h3>
                <p>来自 湖北-武汉</p>
                <span className="box_span">武汉大学心理学硕士</span>
                <p className="p_text">擅长：情感、情绪、青少年心理、职场心理</p>
                <span className="p_text2">2336</span>
                <span className="text_s">人已咨询</span>&nbsp;&nbsp;&nbsp;
                <span className="text_s">好评率 100%</span>
                <a href="javascript:" className="Consultation js_hmt_click">咨询</a>
              </div>
            </div>

            <div className="app_term">
              <div className="app_termLeft">
                <img src="//img.ydlcdn.com/file/2017/01/04/f7whby371xed1sw9.jpg!s120x120" alt="" className="portrait"/>
              </div>
              <div className="app_termRight">
                <h3>肖珍艳</h3>
                <p>来自 广东-深圳</p>
                <span className="box_span">二级心理咨询师</span>
                <span className="box_span">国际催眠师</span>
                <p className="p_text">擅长：孩子教育、情绪压力、人际关系</p>
                <span className="p_text2">1103</span>
                <span className="text_s">人已咨询</span>&nbsp;&nbsp;&nbsp;
                <span className="text_s">好评率 100%</span>
                <a href="javascript:" className="Consultation js_hmt_click">咨询</a>
              </div>
            </div>
            <div className="app_term">
              <div className="app_termLeft">
                <img src="//img.ydlcdn.com/file/2017/02/22/5799q3ctnrm7hhi9.jpg!s120x120" alt="" className="portrait"/>
              </div>
              <div className="app_termRight">
                <h3>李艳</h3>
                <p>来自 北京</p>
                <span className="box_span">人民大学管理学硕士</span>

                <p className="p_text">擅长：情绪压力、个人成长、婚姻情感:婚姻危机</p>
                <span className="p_text2">3945</span>
                <span className="text_s">人已咨询</span>&nbsp;&nbsp;&nbsp;
                <span className="text_s">好评率 100%</span>
                <a href="javascript:" className="Consultation js_hmt_click">咨询</a>
              </div>
            </div>
            <div className="app_term">
              <div className="app_termLeft">
                <img src="//img.ydlcdn.com/file/2016/10/31/bpccp9u2d73lh6sv.jpg!s120x120" alt="" className="portrait"/>
              </div>
              <div className="app_termRight">
                <h3>袁丽娜</h3>
                <p>来自 浙江-杭州</p>
                <span className="box_span">咨询心理学硕士</span>

                <p className="p_text">擅长：恋爱关系、婚姻家庭、女性成长</p>
                <span className="p_text2">1150</span>
                <span className="text_s">人已咨询</span>&nbsp;&nbsp;&nbsp;
                <span className="text_s">好评率 100%</span>
                <a href="javascript:" className="Consultation js_hmt_click">咨询</a>
              </div>
            </div>
          </div>
          <div className="app_dp">
            <a href="javascript:" className="app_whole js_hmt_click" >
              查看全部专家
            </a>
            <p className="p_introduce">
              壹点灵-心理咨询平台是由中科院心理专家牵头，汇集资深情感专家、心理专家、亲子教育专家提供在线心理服务平台，帮您解决各类烦恼。
              <br/>
              <br/>
              我们提供的服务：
              <br/>
              <br/>
              [电话倾诉] 随时连接，无需预约，情感、情绪、职业、人际关系等问题，一个电话就能搞定。【新手注册还送30元红包哦】
              <br/>
              <br/>

              [专家私聊] 在线与专家语音文字沟通，快速问诊
              <br/>
              <br/>

              [预约咨询] 预约专家电话、当面或在线咨询，及时解决问题
            </p>
            <a href="javascript:" className="app_envelopes js_hmt_click">
              立即下载 领取<b>30</b>元红包
              <span>（仅22M）</span>
            </a>
            <a href="javascript:" className="app_envelopes Customer_service js_hmt_click">
              客服热线 400-114-1010
            </a>
            <div className="footer">
              <p className="txt02">（客服值班时间：早08:30-次日凌晨2:00）</p>
              <p className="txt03">
                <span className="win_copyright"></span> <br/>
                <span className="win_company"></span> <br/>
                <span className="win_copycode"></span>
              </p>
            </div>
          </div>
          <div className="app_alert">
            <div className="alert_body">
              <p>使用App马上在线咨询专家，文字语音提问全免费！</p>
              <div className="button_left close">忍痛放弃</div>
              <div className="button_left right">立即下载</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo;
