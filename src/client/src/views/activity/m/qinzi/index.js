import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import API from '../../servers/test';
import { Toast, InputItem } from 'antd-mobile';

import {storage} from '../../../../lib/compatible';
import Swiper from 'swiper/dist/js/swiper.js';
// import 'swiper/dist/css/swiper.min.css';
// import Native,{webviewSystem} from '../../../lib/native';


class Demo extends Component {

  constructor(props) {

    super(props)

    // this.img = require('https://static.ydlcdn.com/activity/images/activity002/logo1.png');

  }
  componentWillUnmount() {

  }

  componentDidMount(){

    $(function(){
      $('.kf_xinnuan').click(function () {
        window.open('http://dat.zoosnet.net/LR/Chatpre.aspx?id=DAT83236505');
        return false;
      });

      // $("img.lazy").lazyload();

      var mySwiper = new Swiper('.swiper-container', {
        autoplay:{
          delay: 5000,
          disableOnInteraction: false,
        },
        loop: true,
        pagination: {
          el:'.swiper-pagination'
        },
        paginationType: 'bullets',
        slidesPerView: '1',
        autoplayDisableOnInteraction: false,
        lazyLoading: true,
        centeredSlides: true,
      });

      // FastClick.attach(document.body);
    });
    $(function(){
      $(".tab_menu a").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var index=$(this).index();
        $(".tab_box > div").eq(index).show().siblings().hide();
      });
    });

  }
  componentDidUpdate(){
    // if(this.swiper){
    //   this.swiper.slideTo(0, 0);
    //   this.swiper.destroy();
    //   this.swiper = null;
    // }
    //
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
  submit(e){


  }

  render() {
    return (
      <div >
          <div className="activity_baidu_qingzi">
            <div className="baidu_qingzi_header">
              <img  className="baidu_qinzi_img1" src='https://static.ydlcdn.com/activity/images/activity002/logo1.png' alt=""/>
              <a href="tel:400-114-1010" className="baidu_qingzi_header_a">
                <img className="baidu_qinzi_img2" src="https://static.ydlcdn.com/activity/images/activity002/tel2.png"  alt=""/>
                400-114-1010
              </a>
            </div>
            <div className="baidu_qingzi_banner">
              <a className="kf_xinnuan" >
                <img  className="baidu_qingzi_banner-1" src="https://static.ydlcdn.com/activity/images/activity002/qinzi-banner.png" alt=""/>
                <img  className="baidu_qingzi_banner-2" src="https://static.ydlcdn.com/activity/images/activity002/qinzi-order.png" alt=""/>
                <p>未成年人请在家长陪同下接受服务</p>
              </a>
            </div>
            <div className="baidu_qingzi_ba">
              <img src="https://static.ydlcdn.com/activity/images/activity002/qinzi-statistics.png" alt=""/>
            </div>
            <div className="baidu_qingzi_item">

                <div className="baidu_qingzi_item_list">
                  <a className="kf_xinnuan">
                  <img src="https://static.ydlcdn.com/activity/images/activity002/qinzi-yx.png" alt=""/>
                  <h3>厌 学</h3>
                  <p>不专心听讲，学习压力大,做事/做作业粗心大意</p>
                  </a>
                </div>
              <div className="baidu_qingzi_item_list">
                <a className="kf_xinnuan">
                <img src="https://static.ydlcdn.com/activity/images/activity002/qinzi-wy.png" alt=""/>
                <h3>注意力不集中</h3>
                <p>上课走神、作业拖拉，严重影响孩子的学习成绩</p>
                </a>
              </div>
              <div className="baidu_qingzi_item_list">
                <a className="kf_xinnuan">
                <img src="https://static.ydlcdn.com/activity/images/activity002/qinzi-zb.png" alt=""/>
                <h3>叛 逆</h3>
                <p>脾气暴躁，跟父母吵架顶嘴，性格冲动</p>
                </a>
              </div>
              <div className="baidu_qingzi_item_list">
                <a className="kf_xinnuan">
                <img src="https://static.ydlcdn.com/activity/images/activity002/qinzi-yx.png" alt=""/>
                <h3>自 闭</h3>
                <p>不愿意沟通，不自信，人际关系差</p>
                </a>
              </div>

            </div>

          </div>


        <div className="abc">
          <h2>孩子的问题应该怎么办</h2>
          <p>我们的亲子专家</p>

          <div className="poster swiper-container" id="poster">

            <ul className="swiper-wrapper">
              <li className="swiper-slide">
                <img id="lazy"
                     src="https://static.ydlcdn.com/activity/images/activity002/experts_zhl.png"/>
                <h3>朱浩亮</h3>
                <div className="tag"></div>
                <p>
                  中国科学院心理研究所硕士<br/>
                  中央财经大学应用心理学硕士生导师<br/>
                  温州大学教授，硕士生导师
                </p></li>
              <li className="swiper-slide"><img id="lazy"
                                                src="https://static.ydlcdn.com/activity/images/activity002/experts_mm.png"/>
                <h3>梅敏</h3>
                <div className="tag"></div>
                <p >
                  中科院咨询心理学博士<br/>
                  中科院儿童发展与教育心理学研究生<br/>
                  儿童早期教育指导师
                </p></li>
              <li className="swiper-slide"><img id="lazy"
                                                           src="https://static.ydlcdn.com/activity/images/activity002/experts_lzz.png"/>
              <h3>刘桢桢</h3>
              <div className="tag"></div>
              <p>
                NGH国际催眠师<br/>
                精神分析治疗师<br/>
                CBT认知行为治疗师
              </p></li>
              <li className="swiper-slide"><img id="lazy"
                                                src="https://static.ydlcdn.com/activity/images/activity002/experts_zy.png"/>
                <h3>赵颖</h3>
                <div className="tag"></div>
                <p>
                  约克大学 Ph.D.-心理学博士<br/>
                  英国 A.P.H.P 执业心理治疗师<br/>
                  美国 A.C.H.E 临床催眠治疗师
                </p></li>
              <li className="swiper-slide"><img id="lazy"
                                                src="https://static.ydlcdn.com/activity/images/activity002/experts_mmj.png"/>
                <h3>马孟俊</h3>
                <div className="tag"></div>
                <p>
                  美国新泽西州立Rutgers大学教育心理学硕士<br/>
                  华南师范大学心理学博士班进修
                </p></li>
            </ul>

            <div className="swiper-pagination"></div>
          </div>
          <a  className="baidu_qingzi_a3 kf_xinnuan">更多咨询师</a>
        </div>
        {/*<div id="PgFather">*/}

        {/*</div>*/}
        <div className="baidu_qingzi_case">
          <h2>成功的案例展示</h2>
          <div className="tab_menu1"></div>
          <div className="tab_menu">
            <a href="javascript:;" className="on">案例一</a>
            <a href="javascript:;">案例二</a>
            <a href="javascript:;">案例三</a>
            <a href="javascript:;">案例四</a>
          </div>
          <div className="tab_box">
            <div className="box_content">
              <p>
                <span>案例陈述：</span><br/>
                年龄：16 &nbsp;&nbsp;性别：男<br/>
                症状：注意力不集中、手机瘾、成绩下滑厉害、内向不爱说话、情绪易激动，有离家出走和偷拿家里的钱去网吧上网的行为。<br/>
                咨询结果:孩子现在开始情绪逐渐平复，和家长，同学沟通增加。网瘾逐渐戒除，学习成绩明显提升。<br/>
                <span>家长反馈：</span><br/>
                家长说看到了希望，感觉非常好专业的人士做专业的事情。
              </p>
            </div>
            <div className="box_content1">
              <p>
                <span>案例陈述：</span><br/>
                年龄：22岁 &nbsp;&nbsp;性别：女<br/>
                症状：旷课旷考退学休学，把自己关房间里，不洗漱，不出门，不见人。浑身恶臭，有自杀倾向，觉得人生没有希望，前来咨询反馈。<br/>
                咨询结果：现在孩子已经勇敢的走出家门，在老师的鼓励和安排下报考了管理专业、报考了驾照。相信孩子会越来越好的。<br/>
                <span>家长反馈：</span><br/>
                这个过程，我和老师全程参与。我明白每次孩子的突破都有多么的不容易，也明白老师在这个过程中付出了多少。还有我们可爱的家长，你们的眼泪和你们的笑容，我都历历在目~
              </p>
            </div>
            <div className="box_content1">
              <p>
                <span>案例陈述：</span><br/>
                年龄：17 &nbsp;&nbsp;性别：男<br/>
                症状：高三，厌学，学习注意力不集中，成绩急剧下降。人缘好，但是没有真正的朋友，感到孤独。觉得活着没意思，有自杀的倾向。学习没有动力，觉得学习也没什么意思。<br/>
                咨询结果：第一阶段：情绪稳定，主动结交喜欢的同学，不再有自杀的倾向。让其对生活重燃信心和希望；<br/>
                第二阶段：提高学习的动力，主动学习，提升学习积极性。做好高考之后的规划，顺利适应大学生活。<br/>
                <span>家长反馈：</span><br/>
                谢谢徐老师，和蔼可亲，耐心，认真负责。
              </p>
            </div>
            <div className="box_content1">
              <p>
                <span>案例陈述：</span><br/>
                年龄：13 &nbsp;&nbsp;性别：男<br/>
                症状：7年级学生，上课注意力不集中，学习下降。和同学相处不和谐，和长辈相处不和谐出现多次打人现象，父母离异。性格孤僻。<br/>
                咨询结果：孩子现在已经和家人和谐相处，开始接受周围同学和老师的互动，改善孤僻性格。<br/>
                <span>家长反馈：</span><br/>
                感谢老师耐心的陪伴，老师的耐心帮助。让我们家人看到了希望，让我们看到了孩子的笑容，让这个家有了温暖的感觉。也非常感谢老师帮助我，让我学会了应该怎么样和我儿子相处，让我们这个破碎的家庭有了家的感觉。
              </p>
            </div>
          </div>

        </div>
        <div>
          <div className="commona">
            <h2>公司实力展示</h2>
            <div className="tab_menu1"></div>
            <div className="commona_img1">
            <img className="lazya"
                 src="https://static.ydlcdn.com/activity/images/activity002/qinzi-association.png"/>
            </div>
          </div>

          <div className="commona">
            <h2>咨询流程</h2>
            <div className="tab_menu1"> </div>
            <div className="commona_img2">
            <img className="lazya" src="https://static.ydlcdn.com/activity/images/activity002/step.png"/>
            </div>
          </div>
            <div className="float_bottom_a"> </div>
          <div className="float_bottom">
            <a href="tel:400-114-1010" className="left_button"><img src="https://static.ydlcdn.com/activity/images/activity002/tel.png" alt=""/>电话咨询</a>
            <a  className="right_button kf_xinnuan"><img
              src="https://static.ydlcdn.com/activity/images/activity002/_20180913152923.png" alt=""/>在线咨询</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo;
