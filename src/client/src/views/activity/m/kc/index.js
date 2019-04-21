import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rule from '../../../../component/rules';
import API from '../../servers/test';
import { Toast, InputItem } from 'antd-mobile';

import {storage} from '../../../../lib/compatible';
import Swiper from 'swiper/dist/js/swiper.js';
import Util from '../../../../lib/util';

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

      $("img.lazy").lazyload();

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
    });
    // $(function(){
    //   DataStatistics();
    //   onlineService();
    //   var mySwiper = new Swiper('.swiper-container', {
    //     autoplay:{
    //       delay: 5000,
    //       disableOnInteraction: false,
    //     },
    //     loop: true,
    //     pagination: {
    //       el:'.swiper-paginationa'
    //     },
    //     paginationType: 'bullets',
    //     slidesPerView: '1',
    //     autoplayDisableOnInteraction: false,
    //     lazyLoading: true,
    //     centeredSlides: true,
    //   });
    //
    //
    // });


  }
  componentDidUpdate(){

    setTimeout(() => {
      new Swiper('#poster', {
        loop: true,
        autoplay: true,
        parallax:true,
        noSwiping : true,
        pagination: {
          el: '.swiper-pagination',
        },
      });

      new Swiper('#footerPoster', {
        loop: true,
        autoplay: true,
        parallax:true,
        noSwiping : true,
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
        <div className="page-m-kc">
          <div className="kc_logo">
            <a href="">
              <img className="lazy" src="http://kc.haoshi99.com/images/180413kz_m/logo_ico.png" alt=""/>
            </a>
          </div>
          <div className="kc_bg">
            <img className="lazy" data-original="http://kc.haoshi99.com/images/180413kz_m/banner0710.jpg" alt=""/>
          </div>

          <div className="kc-adv clearfix">
            <div className="kc-adv-item">
              <i className="adv-ico ico1"></i>
              <span className="adv-info"><b>四个月</b><br/>系统培训</span>
            </div>
            <div className="kc-adv-item">
              <i className="adv-ico ico2"></i>
              <span className="adv-info"><b>中科院</b><br/>名师指导</span>
            </div>
            <div className="kc-adv-item">
              <i className="adv-ico ico3"></i>
              <span className="adv-info"><b>理论实践</b><br/>相结合</span>
            </div>
          </div>

          <div className="kc_items">
            <h3 className="kc_title">四大学习阶段</h3>
            <img data-original="http://kc.haoshi99.com/images/180413kz_m/learn_state.png" className="lazy" alt=""/>
            <span className="span_frist">初阶</span>
            <span>中阶</span>
            <span>高阶</span>
            <span>实习平台</span>
            <div className="kc_button">
              <a href="" className="button_a js_kf">
                立即咨询
              </a>
            </div>
          </div>
          <div className="kc_group">
            <h3 className="kc_title">线上听课+线下小组</h3>
            <p className="kc_label">高效便捷学习，同学圈子支持</p>
            <div className="kc_iamges">
              <img data-original="http://kc.haoshi99.com/images/180413kz_m/pic1.jpg" className="lazy" alt=""/>
              <p>视频听讲</p>
              <p className="kc_p">随时听课多人互动</p>
            </div>
            <div className="kc_iamges">
              <img data-original="http://kc.haoshi99.com/images/180413kz_m/pic2.jpg" className="lazy" alt=""/>
              <p>学习小组</p>
              <p className="kc_p">充分讨论和练习</p>
            </div>
          </div>

          <div className="kc_shot">
            <h3 className="kc_title">授课大咖云集</h3>
            <div className="poster swiper-container" id="poster">
              <div className="swiper-wrapper">

                <div className="swiper-slide" id="swipera" >
                  <div className="slide_li" id="slide">
                    <img src="http://ts.yidianling.com/kaozheng/images/180226kz/experts_pic01.png" alt=""/>
                    <h3 className="kc_names">杨发辉</h3>
                    <p>北京师范大学副教授、壹点灵顾问督导、ACT认知行为心理治疗师、认证督导师、22部委文件起草人之一</p>
                  </div>
                </div>

                <div className="swiper-slide" id="swipera" >
                  <div className="slide_li" id="slide">
                    <img src="http://ts.yidianling.com/kaozheng/images/180226kz/experts_pic02.png" alt=""/>
                    <h3 className="kc_names">朱浩亮</h3>
                    <p>中国科学院心理研究所硕士；中央财经大学应用心理学硕士生导师；温州大学教授、硕士生导师</p>
                  </div>
                </div>
                <div className="swiper-slide" id="swipera" >
                  <div className="slide_li" id="slide">
                    <img className="lazy" src="http://ts.yidianling.com/kaozheng/images/180226kz/experts_pic03.png" alt=""/>
                    <h3 className="kc_names">祝卓宏</h3>
                    <p>中科院心理研究所博士、教授、博士后导师、壹点灵顾问督导、中国心理卫生协会心理师专委会副主任委员</p>
                  </div>
                </div>

                <div className="swiper-slide" id="swipera" >
                  <div className="slide_li" id="slide">
                    <img src="http://ts.yidianling.com/kaozheng/images/180226kz/experts_pic04.png" alt=""/>
                    <h3 className="kc_names">姜长青</h3>
                    <p>北京安定医院主任医师、心理科主任、壹点灵顾问督导、中国心理卫生协会心理咨询师专业委员会主任</p>
                  </div>
                </div>
                <div className="swiper-slide" id="swipera" >
                  <div className="slide_li" id="slide">
                    <img src="http://ts.yidianling.com/kaozheng/images/180226kz/experts_pic05.png" alt=""/>
                    <h3 className="kc_names">郑日昌</h3>
                    <p>北京师范大学教授、博导、壹点灵顾问督导、卫生部心理治疗师考试专委会委员、教育部考试中心研究员</p>
                  </div>
                </div>
                <div className="swiper-slide" id="swipera" >
                  <div className="slide_li" id="slide">
                    <img src="http://ts.yidianling.com/kaozheng/images/180226kz/experts_pic06.png" alt=""/>
                    <h3 className="kc_names">马建青</h3>
                    <p>浙江大学博士、教授、博士生导师、壹点灵顾问督导、求是特聘学者、心理卫生协会心理师专委会副主任委员</p>
                  </div>
                </div>

                <div className="swiper-slide" id="swipera" >
                  <div className="slide_li" id="slide">
                    <img src="http://ts.yidianling.com/kaozheng/images/180226kz/experts_pic07.png" alt=""/>
                    <h3 className="kc_names">史占彪</h3>
                    <p>中科院心理所博士、教授、壹点灵首席专家顾问、壹点灵顾问督导、中科院心理所心理健康促进中心主任</p>
                  </div>
                </div>
                <div className="swiper-slide" id="swipera" >
                  <div className="slide_li" id="slide">
                    <img src="http://ts.yidianling.com/kaozheng/images/180226kz/experts_pic08.png" alt=""/>
                    <h3 className="kc_names">丁建略</h3>
                    <p>吉林大学副教授、硕士生导师、中国人民大学博士、壹点灵顾问督导、国家心理咨询师高级考评员</p>
                  </div>
                </div>
                <div className="swiper-slide" id="swipera" >
                  <div className="slide_li" id="slide">
                    <img src="http://ts.yidianling.com/kaozheng/images/180226kz/experts_pic09.png" alt=""/>
                    <h3 className="kc_names">沈健</h3>
                    <p>北华大学教授，硕士生导师，壹点灵顾问督导、中国催眠师大会组委会主席、吉林省心理咨询师协会副会长</p>
                  </div>
                </div>
                <div className="swiper-slide" id="swipera" >
                  <div className="slide_li" id="slide">
                    <img src="http://ts.yidianling.com/kaozheng/images/180226kz/experts_pic010.png" alt=""/>
                    <h3 className="kc_names">马孟俊</h3>
                    <p>台湾清华大学、宜兰大学讲师、壹点灵顾问督导、美国新泽西州立大学硕士、华南师范大学心理学博士</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <div className="kc_seek">
            <h3 className="kc_title">我们正在寻找这样的你</h3>
            <img src="http://kc.haoshi99.com/images/180413kz_m/num_ver.png" alt=""/>
            <div className="kc_text">
              <p>专科以上学历</p>
              <p>热爱心理咨询，立志成为专业心理咨询师</p>
              <p>已获得国家心理咨询师证书，实践操作经验缺乏者</p>
              <p>愿意付出实践和经历，实践成长</p>
              <p>开放的心态和足够的耐心</p>
            </div>
            <div className="kc_button">
              <a href="" className="button_a js_kf">
                立即咨询
              </a>
            </div>
          </div>
          <div className="kc_Student">
            <h3 className="kc_title">学员们这样说</h3>
              <div className="kc_alert">
                <div className="kc_boeder">
                <div className="poster swiper-container" id="poster">
                  <div className="swiper-wrapper">


                    <div className="swiper-slide" id="swipera" >
                      <div className="slide_li" id="slide">
                        <h3>31岁，应用心理学硕士</h3>
                        <span className="user-head"></span>
                       <p>我也考过三级心理咨询师、读过应用心理学硕士，但这次课程的实习让我有机会真正走近有心理帮助需求的人。目前的学习和实习下来，让我真正接触到心理咨询的实践，对接下来的学习也有了更大的期待。</p>
                      </div>
                    </div>

                    <div className="swiper-slide" id="swipera" >
                      <div className="slide_li" id="slide">
                        <h3>34岁，心理学专业爱好者</h3>
                        <span className="user-head head2"></span>
                        <p>以前看过一些这方面的书，对心理学的基础理论了解一部分，但是真的报考以后才发现实践和理论完全是不一样的，有一种理论得到验证的感觉。希望通过后期的学习让我成为一个真正的咨询师。</p>
                      </div>
                    </div>
                    <div className="swiper-slide" id="swipera" >
                      <div className="slide_li" id="slide">
                        <h3>28岁，大专生</h3>
                        <span className="user-head head3"></span>
                        <p>因为自身的一些人际关系一直处理不好，所以抱着尝试的心态学习一下这个课程，但是后来发现真的改变了很多，原来人际中有那么多应该要注意的和应该怎么样处理的诀窍，让我的人际关系得到了很大的改善，也让我的生活得到了很大的帮助。</p>
                      </div>
                    </div>
                    <div className="swiper-slide" id="swipera" >
                      <div className="slide_li" id="slide">
                        <h3>25岁，研究生在读</h3>
                        <span className="user-head head4"></span>
                        <p>错过了国家的心理学考试，但是很幸运的没有错过壹点灵的中级心理咨询师考试，让我真正学会了心理咨询应该怎么做，也让我在学习之余多了一份收入，让我的学习生涯得到了充分的保障。</p>
                      </div>
                    </div>
                    </div>
                  </div>

                </div>
              </div>
            <div className="swiper-pagination"></div>
          </div>
          <div className="kc_Choice">
            <div className="kc_title">为什么选择壹点灵</div>
            <div className="kc_list">
              <div className="choice_img">
                <img className="lazy" data-original="http://kc.haoshi99.com/images/180413kz_m/ico_green.png" alt=""/>
              </div>
              <div className="kc_test">
                <p>更权威</p>
                <span>全国顶尖心理咨询平台，权威大咖督导</span>
              </div>
            </div>

            <div className="kc_list">
              <div className="choice_img">
                <img className="img1 lazy" data-original="http://kc.haoshi99.com/images/180413kz_m/ico_green.png" alt=""/>
              </div>
              <div className="kc_test">
                <p>更专业</p>
                <span>6000+专业咨询师，100%职业资格认证</span>
              </div>
            </div>

            <div className="kc_list">
              <div className="choice_img">
                <img className="img2 lazy" data-original="http://kc.haoshi99.com/images/180413kz_m/ico_green.png" alt=""/>
              </div>
              <div className="kc_test">
                <p>更真实</p>
                <span>海量真实咨询案例，平台用户200万</span>
              </div>
            </div>
            <div className="kc_list">
              <div className="choice_img">
                <img className="img3 lazy" data-original="http://kc.haoshi99.com/images/180413kz_m/ico_green.png" alt=""/>
              </div>
              <div className="kc_test">
                <p>更有效</p>
                <span>付费资讯时长2亿分钟，全面解决心理问题</span>
              </div>
            </div>

            <div className="kc_list">
              <div className="choice_img">
                <img className="img4 lazy" data-original="http://kc.haoshi99.com/images/180413kz_m/ico_green.png" alt=""/>
              </div>
              <div className="kc_test">
                <p>更高额</p>
                <span>已累计完成上亿咨询收益，平均客单价400+</span>
              </div>
            </div>
            <div className="kc_button">
              <a href="javascript:" className="button_a js_kf">
                立即咨询
              </a>
            </div>
          </div>

          <div className="kz_media">
            <h3 className="kz_title">各大媒体争相报道</h3>

            <ul>
              <li className="i-1">心理健康助力全面小康。</li>
              <li className="i-2">天灾无情人有情，壹点灵赴台风灾区紧急心理...</li>
              <li className="i-3">壹点灵：互联网+公益心理咨询=无限可能...</li>
              <li className="i-4">心灵花园公益敲门行动在继续 关注弱势青少...</li>
            </ul>
          </div>

          {/* 关于我们 */}
          <div className="kz_about">
            <h3 className="kz_title">关于我们</h3>

            <div className="footer_poster swiper-container" id="footerPoster">
              <div className="swiper-wrapper">
                <div class="swiper-slide swiper-no-swiping js_touch"><img src="http://m.hangzhou.yidianling.com/images/index/about03.png" className="" /></div>
                <div class="swiper-slide swiper-no-swiping js_touch"><img src="http://m.hangzhou.yidianling.com/images/index/about01.png" className="" /></div>
                <div class="swiper-slide swiper-no-swiping js_touch"><img src="http://m.hangzhou.yidianling.com/images/index/about02.png" className="" /></div>
                <div class="swiper-slide swiper-no-swiping js_touch"><img src="http://m.love.yidianling.com/images/520/about/4.jpg" className="" /></div>
                <div class="swiper-slide swiper-no-swiping js_touch"><img src="http://m.love.yidianling.com/images/520/about/5.jpg" className="" /></div>
              </div>

              <div className="swiper-pagination"></div>
            </div>

            <p>
              壹点灵秉承"知心专业，贴心关怀，诚心服务"的理念，力图打造中国最有价值的综合性婚恋服务平台。
              现有员工300多人，拥有博士、硕士研究生学历者占到10%以上。<br />
              研发运营团队多来自阿里巴巴、百度、携程、5173等知名互联网公司。
              汇集了国内外4000多位专家，通过各类成熟的实战经验技巧帮助用户挽救婚姻、劝退第三者、挽回爱情、情感疏导。已经成功挽救了5万多个家庭。
            </p>

            <div className="control"><a href="javascript:" className="btn js_kf">查看详情</a></div>
          </div>

          <footer class="kz_footer">
            <a href="javascript:" className="js_kf">在线咨询</a>
          </footer>
        </div>
      </div>
    )
  }
}

export default Demo;
