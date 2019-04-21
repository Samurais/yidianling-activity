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

    this.img = require('../../../../images/zhuzhan/1.png');

    this.data = [
      {
        "name":"服务客户200万+","url":require('../../../../images/zhuzhan/info_icon01.png')
      },
      {
        "name":"解决困扰150万+","url":require('../../../../images/zhuzhan/info_icon02.png')
      },
      {
        "name":"心理专家8000+","url":require('../../../../images/zhuzhan/info_icon03.png')
      }
      ]
    this.list = [
      {
        "name":"情感婚姻","title":"出轨，失恋,信任危机等","url":"https://static.ydlcdn.com/activity/images/update171212/icon_1-1.png"
      },
      {
        "name":"情绪压力","title":"焦虑，抑郁，强迫等","url":"https://static.ydlcdn.com/activity/images/update171212/icon_1-2.png"
      },
      {
        "name":"孩子心理","title":"厌学，自闭，多动，网瘾等","url":"https://static.ydlcdn.com/activity/images/update171212/icon_2-1.png"
      }
      ,
      {
        "name":"职场人际","title":"工作压力，同事关系，职业发展等","url":"https://static.ydlcdn.com/activity/images/update171212/icon_2-2.png"
      }
      ,
      {
        "name":"个人成长","title":"个人提升，情绪调节， 内向，孤僻等","url":"https://static.ydlcdn.com/activity/images/update171212/icon_3-1.png"
      }
      ,
      {
        "name":"两性心理","title":"揭秘男女思维大不同","url":"https://static.ydlcdn.com/activity/images/update171212/flag_icon3-2.png"
      }
    ];
    this.lists = [
      {
        "name":"史占彪","title1":"中国科学研究院教授、心理研究所主任","title2":"中国心理卫生协会副秘书长","title3":"国际EAP协会中国分会秘书长","url":"https://img.ydlcdn.com/file/2015/09/196fa0c9b120b8f2.jpg!s200x200"
      },
      {
        "name":"丁建略","title1":"吉林大学心理学系副教授、硕士生导师","title2":"中国人民大学心理学博士","title3":"中国公共文化研究与促进会（澳门）创会会长","url":"https://img.ydlcdn.com/file/2016/12/19/b9lhcrooqm32emw3.jpg!s200x200"
      },
      {
        "name":"赵颖","title1":"约克大学 Ph. D. -心理学 博士","title2":"国家二级心理咨询师","title3":"美国 A.C.H.E 临床催眠治疗师","url":"https://img.ydlcdn.com/file/2016/09/vay7h7hx3lzwf6u7.jpg!s200x200"
      }
    ];
    this.iamges = [
      {
       "url":"https://static.ydlcdn.com/activity/images/update171212/machine01.png"
      },
      {
       "url":"https://static.ydlcdn.com/activity/images/update171212/machine02.png"
      },
      {
       "url":"https://static.ydlcdn.com/activity/images/update171212/machine03.png"
      },{
        "url":"https://static.ydlcdn.com/activity/images/update171212/machine04.png"
      }
    ];
    this.pingjia = [
      {
        "name":"B**","date":"2018-09-21","text":"“非常好的咨询师，看待问题非常的敏锐，及时能发现问题的关键所在，我的问题也迎刃而解。一次非常惊喜的体验，非常感谢！\n" +
        ""
      },
      {
        "name":"海**","date":"2018-09-15","text":"“以诚待人，以情感人，很好的咨询师！”\n" +
        " "

      },
      {
        "name":"小**","date":"2018-09-10","text": "“李伊白老师，教会为人处事的态度，方法，受益匪浅！”\n" +
        " "
      },
      {
        "name":"阿**","date":"2018-09-07","text": "“很有效，也很耐心帮我增长智慧”\n" +
        "            "
      },
      {
        "name":"阳**","date":"2018-09-01","text": "“感谢蓝奥老师一直陪伴我成长！在老师的帮助下，我看清了自己内心世界真正的需求。以后当我对身边人有抱怨情绪时，我就应该提醒自己要向内要求自己。我爱我的家人，我想我会因为爱为他们付出更多，即便有情绪来临，我已经学会和情绪交朋友了！老师的指教，我记心中了。感谢老师”\n" +
        ""
      }
    ];
  }
  componentWillUnmount() {

  }

  componentDidMount(){



    $(function(){
        Rule.init();
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
  submit(e){


  }

  render() {
    return (
      <div >
        <div className="zhuzhan">
            <div className="zhuzhan_header">
              <img  className="zhuzhan_img1" src='https://static.ydlcdn.com/activity/images/activity002/logo1.png' alt=""/>
              <a href="tel:400-114-1010" className="zhuzhan_header_a kf_hotline">
                <img className="zhuzhan_img2" src="https://static.ydlcdn.com/activity/images/activity002/tel2.png"  alt=""/>
                400-114-1010
              </a>
            </div>
          <div className="zhuzhan_banner">
            <a className="kf_xinnuan" >
              <img  className="zhuzhan_banner-1 kf_xinnuan" src="https://static.ydlcdn.com/activity/images/update171212/banner0206.png" alt=""/>
            </a>
          </div>
          <div className="zhuzhan_list">
            {
              this.data.map((item, index)=> {
                for(let i in item){
                  return (
                      <div className="list left" key={index}>
                        <img src={item.url} alt=""/>
                         <p>{item.name}</p>
                      </div>
                  )
                }
              })
            }
          </div>
          <div className="zhuzhan_items">
              <h2>我们擅长处理这些问题</h2>
              <p>解决心理烦恼 找回快乐</p>
            {
              this.list.map((item, index)=> {
                for(let i in item){
                  return (
                    <div className="items_tag" key={index}>
                      <a  className="items_tag_a kf_xinnuan">
                        <img src={item.url} alt=""/>
                        <p className="tag_p_big">{item.name}</p>
                        <p className="tag_p">{item.title}</p>
                      </a>
                    </div>
                  )
                }
              })
            }

          </div>
          <div className="zhuzhan_lunbo">
              <h2>中科院教授领衔</h2>
              <p>顶尖专家团队定制解决方案 </p>
            <div className="lunbo_bg">

                  <div className="poster swiper-container" id="poster">

                     <ul className="swiper-wrapper">
                          {
                            this.lists.map((item, index)=> {
                              for(let i in item){
                                return (
                          <li className="swiper-slide" key={index}>
                              <img src={item.url} alt=""/>
                              <h3>{item.name}</h3>
                              <div className="tag"></div>
                              <p>{item.title1}</p>
                              <p>{item.title2}</p>
                              <p className="last_p">{item.title3}</p>
                          </li>

                                )
                              }
                            })
                          }
                  </ul>
                   <div className="swiper-pagination"></div>
               </div>
            </div>
            <a href="https://dat.zoosnet.net/lr/chatpre.aspx?id=dat83236505&lng=cn&r=&rf1=&rf2=&p=http%3A//localhost%3A63342/yidianlinglist/yidianlinghtmlsite/m.shanghai.yidianling.com/baidu/baidu_new.html%3F_ijt%3Dv8rpb2scvvdg1dlgeprmv0bks7&cid=247800f891f74638868f21f235db4fb5&sid=247800f891f74638868f21f235db4fb5" className="lunbo_a">更多心理专家</a>
          </div>
          <div className="about_sb">
              <h2>我们设施专业齐全</h2>
              <a className= "kf_xinnuan">关于壹点灵 &nbsp; &nbsp; &nbsp;<img src="https://static.ydlcdn.com/activity/images/activity002/outlink.png" alt=""/></a>
              <div className="lunbo_sb">
                <div className="poster swiper-container" id="poster">

                  <ul className="swiper-wrapper">
                    {
                      this.iamges.map((item, index)=> {
                        for(let i in item){
                          return (
                            <li className="swiper-slide" key={index}>
                              <img src={item.url} alt=""/>
                            </li>
                          )
                        }
                      })
                    }
                  </ul>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
          </div>
          <div className="zhuzhan_bg_img">
              <h2>合作权威的心理机构</h2>
              <p>创新模式推动心理健康行业发展</p>
              <div className="iamge_1">
                <img src="https://static.ydlcdn.com/activity/images/activity002/partner001.png" alt=""/>
                <img src="https://static.ydlcdn.com/activity/images/activity002/partner002.png" alt=""/>
              </div>
          </div>
          <div className="bg-img">
              <h2>近100家媒体争相报道</h2>
              <p>创新模式推动心理健康行业发展</p>
            <div className="iamge_1">
              <img src="https://static.ydlcdn.com/activity/images/update171212/media.png" alt=""/>
            </div>
          </div>
          <div className="fother_pj">
              <h1>用户评价</h1>
            {
              this.pingjia.map((item, index)=> {
                for(let i in item){
                  return (
                    <div className="list" key={index}>
                      <span>{item.name}</span><span>{item.date}</span>
                      <p>{item.text}</p>
                    </div>
                  )
                }
              })
            }
            <a className="morme_a" href="https://dat.zoosnet.net/lr/chatpre.aspx?id=dat83236505&lng=cn&r=&rf1=&rf2=&p=http%3A//localhost%3A63342/yidianlinglist/yidianlinghtmlsite/m.shanghai.yidianling.com/baidu/baidu_new.html%3F_ijt%3Dv8rpb2scvvdg1dlgeprmv0bks7&cid=247800f891f74638868f21f235db4fb5&sid=247800f891f74638868f21f235db4fb5">更多评价</a>
            <h2>简单 3 步完成咨询</h2>
            <div className="three">
              <img src={this.img} alt=""/>
            </div>
            <div className="last_font">
                <p className="last_p">咨询无效100%退款</p>
              <p>咨询无效只收取成本费 百分百退款</p>
            </div>
          </div>
          <div className="float_bottom">
            <a href="tel:400-114-1010" className="left_button"><img src="https://static.ydlcdn.com/activity/images/activity002/tel.png" alt=""/>电话咨询</a>
            <a className="right_button kf_xinnuan"><img
              src="https://static.ydlcdn.com/activity/images/activity002/dialog1.png" alt=""/>在线分析</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo;
