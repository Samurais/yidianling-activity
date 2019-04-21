import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import API from '../../servers/test';
import { Toast, InputItem } from 'antd-mobile';

import {storage} from '../../../../lib/compatible';
import Swiper from 'swiper/dist/js/swiper.js';
import Rule from '../../../../component/rules';

class Demo extends Component {

  constructor(props) {

    super(props)

  }

  componentDidMount(){

    $(function () {
      Rule.init();

      $("img.lazy").lazyload();

      new Swiper('.teacher-swiper', {
        initialSlide :0,
        speed: 600,
        slidesPerView : 1.344,
        spaceBetween : 15,
        centeredSlides : true,
        lazyLoading: true,
      });
      new Swiper('.daoshi-swiper', {
        initialSlide :0,
        speed: 600,
        slidesPerView : 1.344,
        spaceBetween : 15,
        centeredSlides : true,
        lazyLoading: true,
      });
      new Swiper('.about-swiper', {
        initialSlide :0,
        speed: 600,
        slidesPerView : 1.344,
        spaceBetween : 15,
        centeredSlides : true,
        lazyLoading: true,
      });

      new Swiper('.change-swiper, .kz-about-swiper', {
        autoplay: 5000,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
        },
        paginationType: 'bullets',
        paginationClickable: true,
        slidesPerView: 'auto',
        loop: true,
        autoplayDisableOnInteraction: false,
        lazyLoading : true,
        centeredSlides: true,
      });

    });
  }
  componentDidUpdate(){
  }

  render() {
    return (
      <div>
          <div className="kc-page-marriage">
            <div className="title">
              <div className="kc_logo">
                <a href="http://m.yidianling.com">
                  <img className="lazy" data-original="/src/images/activity/kc/marriage/logo_ico.png" />
                </a>
            </div>
            <p>婚姻家庭咨询师培训专业大平台</p>
            </div>
            <div className="banner">
              <img className="lazy" data-original="/src/images/activity/kc/marriage/2@2x.jpg" />
            </div>
            <div className="hanjin">
              <img className="lazy" data-original="/src/images/activity/kc/marriage/3@2x.jpg" />
              <a href="#" className="btn1 js_kf">
                <img src="/src/images/activity/kc/marriage/btn1@2x.png" />
              </a>
            </div>
            <div className="gonglue">
              <img className="lazy" data-original="/src/images/activity/kc/marriage/4@2x.jpg" />
              <a href="#" className="btn1 js_kf">
                <img src="/src/images/activity/kc/marriage/btn1@2x.png" />
              </a>
            </div>
            <div className="jieduan">
              <img className="lazy" data-original="/src/images/activity/kc/marriage/5@2x.jpg" />
              <a href="#" className="btn1 js_kf">
                <img src="/src/images/activity/kc/marriage/btn1@2x.png" />
              </a>
            </div>
            <div className="kc-list">
              <img className="lazy" data-original="/src/images/activity/kc/marriage/6@2x.jpg" />
              <a href="#" className="btn1 js_kf">
                <img src="/src/images/activity/kc/marriage/btn1@2x.png" />
              </a>
            </div>
            <div className="pingjia">
              <div className="common-wrapper bg-student">
              <h3 className="capital c-fff">学员评价</h3>
              <span className="line bg-ff"></span>
              <div className="student-wrapper" >
                <div className="swiper-container student-swiper change-swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="one">
                        <div className="two">
                          <img src="/src/images/activity/m/kc_love/luobo.png" className="one-img" />
                        </div>
                        <p className="two-font">罗萝</p>
                      </div>
                        <p className="des">找到壹点灵学习心理学，本来是要圆一个当年的梦，实现自我成长的。后来，参加了心理咨询师专业委员会的大会，看到了那么多心理咨询师在壹点灵开心快乐的工作，让我产生了想加入他们的念头。感谢壹点灵，为我打开了另一扇门。</p>
                      </div>
                    <div className="swiper-slide">
                      <div className="one">
                        <div className="two">
                          <img src="/src/images/activity/m/kc_love/yajing.png" className="one-img" />
                        </div>
                        <p className="two-font">雅静</p>
                      </div>
                      <p className="des">当初选择壹点灵平台，希望能够系统、全面地学习心理学专业知识；能够从心理学角度，更深刻了解自我，理解他人，洞察人性。在获得个人成长的同时，希望能帮助到有需要的人。
                        学习课程以后，从心理学爱好者成为一名专业的心理咨询师…</p>
                    </div>
                      <div className="swiper-slide">
                        <div className="one">
                          <div className="two">
                            <img src="/src/images/activity/m/kc_love/xiefangcheng.png" className="one-img" />
                          </div>
                          <p className="two-font">解方程</p>
                        </div>
                          <p className="des">之前教师的行业让我对心理学一直心存好奇，在遭遇生活的创伤寻求心灵抚慰的时候，偶遇壹点灵并对她情有独钟。壹点灵大学各位老师的课程，给了我无限能量，让我看到生活的无数种可能，对未来充满无限憧憬…</p>
                        </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
            </div>
              {/* 行业乱象 */}
            <div className="hangye">
              <img className="lazy" data-original="/src/images/activity/kc/marriage/8@2x.jpg" />
            </div>
              {/* 选择我们 */}
            <div className="choose-us">
              <img className="lazy" data-original="/src/images/activity/kc/marriage/9@2x.jpg" />
            </div>
              {/* 专家导师团队 */}
            <div className="expert-team">
              <img className="lazy" data-original="/src/images/activity/kc/marriage/10@2x.jpg" />
              <div className="swiper-container teacher-swiper actual-teacher">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-active">
                  <img  src="/src/images/activity/kc/marriage/zhengrichang@2x.jpg" className="swiper-lazy" />
                </div>

                <div className="swiper-slide">
                  <img  src="/src/images/activity/kc/marriage/dingjianlue@2x.jpg" className="swiper-lazy" />
                </div>

                <div className="swiper-slide">
                  <img src="/src/images/activity/kc/marriage/zhuhaoliang@2x.jpg" className="swiper-lazy" />
                </div>

                <div className="swiper-slide">
                  <img  src="/src/images/activity/kc/marriage/shizhanbiao@2x.jpg" className="swiper-lazy" />
                </div>
                <div className="swiper-slide">
                  <img  src="/src/images/activity/kc/marriage/majianqing@2x.jpg" className="swiper-lazy" />
                </div>
                <div className="swiper-slide">
                  <img  src="/src/images/activity/kc/marriage/yuanlina@2x.jpg" className="swiper-lazy" />
                </div>
                <div className="swiper-slide">
                  <img  src="/src/images/activity/kc/marriage/lanao@2x.jpg" className="swiper-lazy" />
                </div>
              </div>
              {/* <div className="swiper-pagination"></div> */}
            </div>
          </div>
          {/* 导师与学员 */}
          <div className="daoshi">
            <img data-original="/src/images/activity/kc/marriage/12@2x.jpg" className="swiper-lazy lazy" />
            <div className="swiper-container daoshi-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-active">
                  <img  src="/src/images/activity/kc/marriage/picture1@2x.jpg" className="swiper-lazy" />
                </div>

                <div className="swiper-slide">
                  <img  src="/src/images/activity/kc/marriage/picture2@2x.jpg" className="swiper-lazy" />
                </div>

                <div className="swiper-slide">
                  <img src="/src/images/activity/kc/marriage/picture3@2x.jpg" className="swiper-lazy" />
                </div>

                <div className="swiper-slide">
                  <img  src="/src/images/activity/kc/marriage/picture4@2x.jpg" className="swiper-lazy" />
                </div>
                <div className="swiper-slide">
                  <img  src="/src/images/activity/kc/marriage/picture5@2x.jpg" className="swiper-lazy" />
                </div>
              </div>
              {/* <div className="swiper-pagination"></div> */}
            </div>
          </div>
          {/* 关于我们 */}
          <div className="about-us">
            <img data-original="/src/images/activity/kc/marriage/14@2x.jpg" className="lazy" />
            <div className="swiper-container about-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-active">
                  <img  src="/src/images/activity/kc/marriage/picture6@2x.jpg" className="swiper-lazy" />
                </div>

                {/* <div className="swiper-slide">
                  <img  src="/src/images/activity/kc/marriage/picture7@2x.jpg" className="swiper-lazy" />
                </div> */}

                <div className="swiper-slide">
                  <img src="/src/images/activity/kc/marriage/picture8@2x.jpg" className="swiper-lazy" />
                </div>

                <div className="swiper-slide">
                  <img  src="/src/images/activity/kc/marriage/picture9@2x.jpg" className="swiper-lazy" />
                </div>
                <div className="swiper-slide">
                  <img  src="/src/images/activity/kc/marriage/picture10@2x.jpg" className="swiper-lazy" />
                </div>
              </div>
              {/* <div className="swiper-pagination"></div> */}
            </div>
          </div>
          {/* 合作伙伴 */}
          <div className="cooprate-p">
            <img data-original="/src/images/activity/kc/marriage/16@2x.jpg" className="lazy" />
            <div className="cooprate-in">
                <img data-original="/src/images/activity/kc/marriage/picture13@2x.jpg" className="lazy" />
            </div>
          </div>
          {/* fixed按钮 */}
          <a href="#" className="btn2 js_kf">
            <img src="/src/images/activity/kc/marriage/btn2@2x.png" />
          </a>
          </div>
      </div>
    )
  }
}

export default Demo;
