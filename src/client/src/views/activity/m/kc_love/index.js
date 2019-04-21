import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rule from '../../../../component/rules';
import { Toast } from 'antd-mobile';

import Swiper from 'swiper/dist/js/swiper.js';

class Page extends Component {

  constructor(props) {

    super(props)


  }
  componentWillUnmount() {

  }

  componentDidMount(){

    $(function(){
      Rule.init();

      $("img.lazy").lazyload();

      new Swiper('.teacher-swiper', {
        initialSlide :0,
        speed: 600,
        slidesPerView : 1.344,
        spaceBetween : 15,
        centeredSlides : true,
        lazyLoading: true,
        pagination: {
          el: '.swiper-pagination',
        },
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


  render() {
    return (
      <div >
        <div className="page-m-kclove">
          {/* 头部 */}
          <header className="header">
            <span className="logo"></span>
            <a className="tel" href="tel:400-114-1010">400-114-1010</a>
          </header>

          {/* banner */}
          <a href="javascript:" target="_blank" className="banner js_kf">
            <img data-original="/src/images/activity/m/kc_love/Banner1.png" className="lazy" />
          </a>

          <div className="kc-adv">
            <div className="kc-adv-item">
              <img className="kc-img" src="/src/images/activity/m/kc_love/icon1.png" alt="" />
              <span className="adv-info">理论基础精讲</span>
            </div>
            <div className="kc-adv-item">
              <img className="kc-img" src="/src/images/activity/m/kc_love/icon3.png" alt="" />
              <span className="adv-info">真实案例解析</span>
            </div>
            <div className="kc-adv-item">
              <img className="kc-img" src="/src/images/activity/m/kc_love/icon2.png" alt="" />
              <span className="adv-info">实战讲师督导</span>
            </div>
          </div>

          {/* 抓住机遇 */}
          <div className="common-wrapper paddT-diff chance bgfff">
            <h3 className="capital">婚姻家庭咨询行业强势崛起 </h3>
            <p className="chance-p">你抓住机遇了吗？</p>
            <span className="line"></span>
            <div className="profession-wrapper clearfix">
              <div className="pro-list"><img className="pro-list-img" src="/src/images/activity/m/kc_love/iconchance-1.png" alt="" /><h2>市场前景好</h2><p>每天有近5千个家庭解体，情感咨询师的职业缺口在100万以上。</p></div>
              <div className="pro-list"><img className="pro-list-img" src="/src/images/activity/m/kc_love/iconchance-2.png" alt="" /><h2>薪资普遍高</h2><p>月收入高达10k—30k，薪酬普遍高于其他行业。</p></div>
              <div className="pro-list"><img className="pro-list-img" src="/src/images/activity/m/kc_love/iconchance-3.png" alt="" /><h2>晋升空间大</h2><p>零基础—初级咨询师—中级咨询师—高级咨询师的明朗晋升通道，才能不再被埋没。</p></div>
              <div className="pro-list"><img className="pro-list-img" src="/src/images/activity/m/kc_love/iconchance-4.png" alt="" /><h2>发展方向广</h2><p>既可以入职情感咨询的机构，也可以成为圈粉无数的情感博主。</p></div>
            </div>
          </div>

          {/* 严谨的学习体系 */}
          <div className="common-wrapper bg-gray paddB-14">
            <h3 className="capital">严谨的学习体系 </h3>
            <p className="chance-p">让你快速成长</p>
            <span className="line"></span>
            <div className="swiper-container teacher-swiper marriage-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-active">
                  <div className="marriage-class"><i>42</i><span>课时</span></div>
                  <h2>零基础入门课程</h2>
                  <ul className="marriage-swiper-ul">
                    <li><i className="circle"></i>探索婚恋背后的秘密</li>
                    <li><i className="circle"></i>如何重建和维护亲密关系</li>
                    <li><i className="circle"></i>心理学入门理论知识</li>
                    <li><i className="circle"></i>心理测量</li>
                    <li><i className="circle"></i>心理咨询理论流派</li>
                    <li><i className="circle"></i>心理咨询技能</li>
                  </ul>
                </div>
                <div className="swiper-slide">
                    <div className="marriage-class"><i>54</i><span>课时</span></div>
                    <h2>初级课程</h2>
                  <ul className="marriage-swiper-ul">
                    <li><i className="circle"></i>婚姻家庭咨询基础常识</li>
                    <li><i className="circle"></i>恋爱、婚姻家庭、离异、</li>
                    <li className="nocircle"><i className="circle"></i>隔代教育咨询</li>
                    <li><i className="circle"></i>职业道德、咨询礼仪</li>
                    <li><i className="circle"></i>常用婚恋咨询技巧</li>
                    <li><i className="circle"></i>个案观摩</li>
                  </ul>
                </div>
                <div className="swiper-slide">
                  <div className="marriage-class"><i>128</i><span>课时</span></div>
                  <h2>中级课程</h2>
                  <ul className="marriage-swiper-ul">
                    <li><i className="circle"></i>婚姻家庭咨询技术疗法</li>
                    <li><i className="circle"></i>婚姻情感、亲子关系、</li>
                    <li className="nocircle"><i className="circle"></i> 两性咨询、家庭冲突咨询</li>
                    <li><i className="circle"></i>常用婚恋咨询技巧精讲</li>
                    <li><i className="circle"></i>个案观摩</li>
                    <li><i className="circle"></i>在线案例督导</li>
                  </ul>
                </div>
              </div>

              <div className="swiper-pagination"></div>
            </div>
          </div>

          {/* 四大核心优势，实战派讲师护航 */}
          <div className="common-wrapper actual-teacher-wrapper bg-gray paddB-14 bgfff">
            <img className="core-advantages-img" src="/src/images/activity/m/kc_love/_20180720155111.png" alt="" />
            <h3 className="capital"><i className="number">1</i>实战派讲师护航</h3>
            <span className="line"></span>

            <div className="swiper-container teacher-swiper actual-teacher">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-active">
                  <img  src="/src/images/activity/m/kc_love/zhenrichang.png" className="swiper-lazy" />
                  <p className="underline name">郑日昌</p>
                  <p className="desp">北京师范大学教授、博士生导师 <br/>中国心理卫生协会常务理事<br/> 全国大学生心理咨询委员会副主任 </p>
                </div>

                <div className="swiper-slide">
                  <img  src="/src/images/activity/m/kc_love/dingjianlue.png" className="swiper-lazy" />
                  <p className="underline name">丁建略</p>
                  <p className="desp">中国人民大学心理学博士<br/>中国第一个爱情心理学硕士论文作者<br/>吉林大学社会心理学系副教授</p>
                </div>

                <div className="swiper-slide">
                  <img src="/src/images/activity/m/kc_love/shizhanbiao.png" className="swiper-lazy" />
                  <p className="underline name">史占彪</p>
                  <p className="desp">中国科学院心理研究所教授、博士 <br/>后现代心理教练首倡者<br/> 中国注册心理教练首席科学家   </p>
                </div>

                <div className="swiper-slide">
                  <img  src="/src/images/activity/m/kc_love/zhuhaoliang.png" className="swiper-lazy" />
                  <p className="underline name">朱浩亮</p>
                  <p className="desp">中央财经大学应用心理学硕士生导师 <br/>温州大学心理学副教授、硕士生导师<br/> 国家心理咨询师高级考评员 </p>
                </div>

                <div className="swiper-slide">
                  <img src="/src/images/activity/m/kc_love/liuzhenzhen.png" className="swiper-lazy" />
                  <p className="underline name">刘桢桢</p>
                  <p className="desp">国家二级心理咨询师 <br/>NGH国际催眠师<br/> 精神分析治疗师  </p>
                </div>

                <div className="swiper-slide">
                  <img src="/src/images/activity/m/kc_love/yuanlina.png" className="swiper-lazy" />
                  <p className="underline name">袁丽娜</p>
                  <p className="desp">国家二级心理咨询师 <br/>国家二级婚姻家庭咨询师<br/> 咨询心理学硕士  </p>
                </div>
              </div>

              <div className="swiper-pagination"></div>
            </div>
          </div>

          {/* 实战与理论结合 */}
          <div className="common-wrapper b">
            <div className="kz-inner">
              <h3 className="capital"><i className="number">2</i>实战与理论结合</h3>
              <span className="line"></span>
              <div className="practical-list clearfix">
                <p>婚姻家庭咨询师课程中包含大量实战咨询技巧讲解及个案观摩，掌握理论的基础之上，学习个案咨询，并接受导师专业的督导，快速提升能力。</p>
                <div className="practical-img-box">
                  <img className="practical-img1" src="/src/images/activity/m/kc_love/practical1.png" alt="" />
                  <div className="middle-imgs">
                    <img className="practical-img2" src="/src/images/activity/m/kc_love/practical2.png" alt="" />
                    <img className="practical-img3" src="/src/images/activity/m/kc_love/practical3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 学习与就业挂钩 */}
          <div className="common-wrapper learning-wrapper bgfff">
            <div className="kz-inner">
              <h3 className="capital"><i className="number">3</i>学习与就业挂钩</h3>
              <span className="line"></span>
              <div className="practical-list clearfix">
                <p>国内情感市场巨大，壹点灵作为心理服务平台行业的标杆品牌，需要大量优秀的咨询师加入。完成婚姻家庭咨询师课程学习，并通过考核获得结业证书，即可入驻壹点灵平台，开始从事心理咨询工作。</p>
                <div className="practical-img-box">
                  <img className="practical-img1" src="/src/images/activity/m/kc_love/jiuye.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* 壹点灵品牌保障 */}
          <div className="common-wrapper kz-about">
            <div className="kz-inner">
              <h3 className="capital"><i className="number">4</i>壹点灵品牌保障</h3>

              <span className="line"></span>

              <div className="swiper-container kz-about-swiper">
                <div className="swiper-wrapper kz-about-wrapper">
                  <div className="swiper-slide" ><img src="/src/images/activity/m/kc_love/pinpai1.png" /></div>
                  <div className="swiper-slide"><img src="/src/images/activity/m/kc_love/pinpai2.png" /></div>
                  <div className="swiper-slide"><img src="/src/images/activity/m/kc_love/pinpai3.png" /></div>
                </div>
                <div className="swiper-pagination"></div>
              </div>

              <p id="kz-inner-p">情感壹点灵秉承"知心专业，贴心关怀，诚心服务"的理念，力图打造中国最有价值的综合性婚恋服务平台。现有员工300多人，拥有博士、硕士研究生学历者占到10%以上。<br /><br/>情感壹点灵秉承"知心专业，贴心关怀，诚心服务"的理念，力图打造中国最有价值的综合性婚恋服务平台。现有员工300多人，拥有博士、硕士研究生学历者占到10%以上。
                研发运营团队多来自阿里巴巴、百度、携程、5173等知名互联网公司。汇集了国内外7000多位专家，通过各类成熟的实战经验技巧帮助用户挽救婚姻、劝退第三者、挽回爱情、情感疏导。已经成功挽救了15万多个家庭。</p>
            </div>
          </div>

          {/* 清晰的成长路径 */}
          <div class="common-wrapper bgfff">
            <h3 class="capital">清晰的成长路径</h3>
            <p class="chance-p">加速提高自己</p>
            <span class="line"></span>
            <div class="clear-wrapper clearfix">
              <img src="/src/images/activity/m/kc_love/list.png" class="list-img" />
            </div>
            <div className="control">
            <a class="kz-about-btn clear-btn btn js_kf" href="javascript:" target="_self">立即报名</a>

            </div>
          </div>

          {/* 他们已经在蜕变 */}
          <div class="common-wrapper bg-student">
            <h3 class="capital c-fff">TA们已经在蜕变</h3>
            <p class="chance-p chance-p-fff">你还在犹豫什么</p>
            <span class="line bg-ff"></span>
            <div class="student-wrapper" >
              <div class="swiper-container student-swiper change-swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="one">
                      <div class="two">
                        <img src="/src/images/activity/m/kc_love/luobo.png" class="one-img" />
                      </div>
                      <p class="two-font">罗萝</p>
                    </div>
                      <p class="des">找到壹点灵学习心理学，本来是要圆一个当年的梦，实现自我成长的。后来，参加了心理咨询师专业委员会的大会，看到了那么多心理咨询师在壹点灵开心快乐的工作，让我产生了想加入他们的念头。感谢壹点灵，为我打开了另一扇门。</p>
                    </div>
                  <div class="swiper-slide">
                    <div class="one">
                      <div class="two">
                        <img src="/src/images/activity/m/kc_love/yajing.png" class="one-img" />
                      </div>
                      <p class="two-font">雅静</p>
                    </div>
                    <p class="des">当初选择壹点灵平台，希望能够系统、全面地学习心理学专业知识；能够从心理学角度，更深刻了解自我，理解他人，洞察人性。在获得个人成长的同时，希望能帮助到有需要的人。
                      学习课程以后，从心理学爱好者成为一名专业的心理咨询师…</p>
                  </div>
                    <div class="swiper-slide">
                      <div class="one">
                        <div class="two">
                          <img src="/src/images/activity/m/kc_love/xiefangcheng.png" class="one-img" />
                        </div>
                        <p class="two-font">解方程</p>
                      </div>
                        <p class="des">之前教师的行业让我对心理学一直心存好奇，在遭遇生活的创伤寻求心灵抚慰的时候，偶遇壹点灵并对她情有独钟。壹点灵大学各位老师的课程，给了我无限能量，让我看到生活的无数种可能，对未来充满无限憧憬…</p>
                      </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>


          {/* 深度合作单位 */}
          <div class="common-wrapper bgfff">
            <h3 class="capital">深度合作机构</h3>
            <span class="line"></span>
            <div class="cooperate-item clearfix">
              <img src="/src/images/activity/m/kc_love/shengduhezuo1.png" alt="" />
            </div>
          </div>

          {/* wrapper */}
          <footer class="kz-footer">
            <a href="//cn.mikecrm.com/ue2dxOj" class="kz-footer-tel fl"><i class="kz-footer-yuyue-icon"></i>预约试听</a>
            <a href="javascript:" class="kz-footer-online fl js_kf"><i class="kz-footer-online-icon"></i>立即报名</a>
          </footer>

        </div>
      </div>
    )
  }
}

export default Page;
