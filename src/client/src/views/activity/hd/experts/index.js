import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rule from '../../../../component/rules';
import API from '../../servers/test';
import { Toast, InputItem } from 'antd-mobile';

import {storage} from '../../../../lib/compatible';
import Swiper from 'swiper/dist/js/swiper.js';
// import Native,{webviewSystem} from '../../../lib/native';


class Demo extends Component {

  constructor(props) {

    super(props)

  }
  componentWillUnmount() {

  }

  componentDidMount(){



    $(function(){
      Rule.init();

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
      })
    });

  }
  componentDidUpdate(){

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

  }
  submit(e){}

  render() {
    return (
      <div >
        <div className="page-hd-zj">
          <div className="zj_header">
            <img src="//static1.ydlcdn.com/mobile/images/area/logo.png" alt="" className="zj_1"/>
          </div>
          <div className="zj_item">
            <h3 className="zj_title">专家资料修改标准</h3>
            <div className="zj_text">
              <p className="p_ge">各位尊敬的老师：</p>
              <span> <span className="p_ge"></span> 您好！为提高平台咨询师首页展示整体完整度，提升咨询师整体展示专业度，特此对于专家信息填写进行以下规范修改，主要内容以：擅长领域、执业背景、受训背景等首页展示版块进行相应规范，望各位老师参考示例，对于个人资料进行修改。</span>

              <p> <span className="p_ge"></span>专家资料修改请登录壹点灵专家版APP，进入首页点击“我的”-顶部头像右侧箭头-点击相应资料名称，进行修改。（以下有相应示例）</p>
            </div>
            <div className="zj_gf">
              <p className="p_title">擅长领域填写范例 </p>
              <img src="http://static.ydlcdn.com/v4/kc/wap/img/a1.png" alt=""/>
              <img src="http://pic32.photophoto.cn/20140714/0022005508218726_b.jpg" alt="" className="jiantou"/>
              <div className="zj_alert">
                 <p>250字的自我介绍</p>
                <p>心理咨询擅长领域介绍，建议以3*3的形式展示。（禁止填写易经，星座，占卜，塔罗牌等学科）</p>
              </div>
              <img src="http://pic32.photophoto.cn/20140714/0022005508218726_b.jpg" alt="" className="jiantou"/>
              <img className="zj_a2" src="http://static.ydlcdn.com/v4/kc/wap/img/a2.png" alt=""/>
              <p className="p_title">职业背景填写规范</p>
              <img src="http://static.ydlcdn.com/v4/kc/wap/img/a3.png" alt=""/>
              <img src="http://pic32.photophoto.cn/20140714/0022005508218726_b.jpg" alt="" className="jiantou"/>
              <div className="zj_alert">
                <p>个人座右铭</p>
                <p>国家类心理咨询资质（需提供证明）</p>
                <p>社会头衔，最多填写3项（需提供证明）</p>
                <p>所获得荣誉称号或获奖记录（需提供证明）</p>
              </div>
              <img src="http://pic32.photophoto.cn/20140714/0022005508218726_b.jpg" alt="" className="jiantou"/>
              <img className="zj_a2" src="http://static.ydlcdn.com/v4/kc/wap/img/a55.png" alt=""/>
              <p >受训背景填写规范</p>
              <img src="http://static.ydlcdn.com/v4/kc/wap/img/a3.png" alt=""/>
              <img src="http://pic32.photophoto.cn/20140714/0022005508218726_b.jpg" alt="" className="jiantou"/>
              <div className="zj_alert">
                <p>壹点灵已认证受训记录（需提供证明）</p>
                <p>壹点灵未认证受训记录（需提供证明）</p>
              </div>
              <img src="http://pic32.photophoto.cn/20140714/0022005508218726_b.jpg" alt="" className="jiantou"/>
              <img className="zj_a2" src="http://static.ydlcdn.com/v4/kc/wap/img/a6.png" alt=""/>
            </div>
          </div>
          <div className="zj_bj">
            <h3 className="zj_title">受训背景</h3>
            <div className="zj_text">
              <p>填写要求：</p><br/>
              <p>为规范咨询师相关受训资料，保证信息正确性，将对咨询师所上传受训背景进行认证评判，具体评判根据如下：</p><br/>
              <p className="big_a">壹点灵【已认证】培训：</p><br/>
              <p>咨询师填写一下培训内容，审核通过后，视为已认证。  </p><br/>
              <p>1、协会类认证：</p>
               <p> 中国心理卫生协会，中国心理卫生协会专委会、分会 ，各省心理卫生协会专委会、分会，中国心理学会，中国心理卫生协会专委会、分会，各省心理学会，中国社会心理学会
                中国社会心理学会专委会、分会</p><br/>

              <p>2、高校类：
                国家985、211高校及下属二级学院
              </p><br/>
              <p>3、中国科学院心理研究所及下属继续教育学院</p><br/>
              <p>4、壹点灵大学培训：需提供壹点灵大学培训证明</p><br/>
              <p className="big_p">壹点灵【未认证】培训</p><br/>
              <p>未认证培训内容最多可填写5个</p><br/>
              <p>1、个人培训：例如***等老师的培训内容</p>
              <br/>
              <p>2、督导培训记录：需提供相应督导证明</p><br/>
              <p className="big_c">填写方式为：受训时间，授课单位+授课老师+课程名称</p>
            </div>
          </div>
          <div className="zj_toux">
            <h3 className="zj_title">头像照片</h3>
            <p>照片建议使用形象职业照，禁止使用一寸照、自拍照、旅游照、生活照等照片；照片清晰，文件小于5M；底色要建议色调温暖明亮，使用白，灰，银灰底色且不能有人物阴影，禁止使用黑底、蓝底、红底等其他色彩底色；需着正装职业照，禁止休闲运动装，人像居中且至少露出肩部，顶部及两侧须有留白，表情要求微笑，暖意，亲切的表情，建议露出牙齿，禁止遮挡五官；视角要求侧身不超过45°，建议正脸展示。
              示例：
            </p>
            <img src="http://static.ydlcdn.com/v4/kc/wap/img/a9.png" alt=""/>
          </div>
          <div className="zj_zy">
            <h3 className="zj_title">专家主页展示</h3>
            <img src="http://static.ydlcdn.com/v4/kc/wap/img/a7.png" alt=""/>
            <img src="http://static.ydlcdn.com/v4/kc/wap/img/c1.png" alt=""/>
            <img src="http://static.ydlcdn.com/v4/kc/wap/img/c2.png" alt=""/>
            <img src="http://static.ydlcdn.com/v4/kc/wap/img/a8.png" alt=""/>
            <img src="http://static.ydlcdn.com/v4/kc/wap/img/c3.png" alt=""/>
            <img src="http://static.ydlcdn.com/v4/kc/wap/img/c4.png" alt=""/>
          </div>
          <div className="zj_foother">
           <p>建议各位老师对照规则进行修改，如对于规则有任何疑问，可添加客服小壹微信进行咨询，微信号：yidianling111</p>
            <img src="http://static.ydlcdn.com/v4/kc/wap/img/a11.png" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo;
