import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rule from '../../../../component/rules';
import { Toast, Modal } from 'antd-mobile';

import {storage} from '../../../../lib/compatible';
import Swiper from 'swiper/dist/js/swiper.js';

import Wechat from '../../../../component/wechat';

import LayoutTopLogo from '../../../../component/layout/topLogo';
import LayoutTopBanner from '../../../../component/layout/topBanner';
import LayoutFooterOnline from '../../../../component/layout/footerOnline';

import LayoutSwiper from '../../../../component/layout/swiper';

class Page extends Component {

  constructor(props) {

    super(props);

    this.wechatData = this.props.data.wechat;

    this.datasurvey = [
      {
        "ico": "i-1",
        "title": "服务客户100万+",
      },
      {
        "ico": "i-2",
        "title": "解决困扰150万+",
      },
      {
        "ico": "i-3",
        "title": "心理专家6000+",
      },
    ];

    this.sign = [
      {
        "ico": "//static.ydlcdn.com/activity/images/update171212/icon_1-1.png",
        "title": "情感婚姻",
        "des": "出轨，失恋<br />信任危机等",
      },
      {
        "ico": "//static.ydlcdn.com/activity/images/update171212/icon_1-2.png",
        "title": "情绪压力",
        "des": "焦虑，抑郁<br />强迫等",
      },
      {
        "ico": "//static.ydlcdn.com/activity/images/update171212/icon_2-1.png",
        "title": "孩子心理",
        "des": "厌学，自闭<br />多动，网瘾等",
      },
      {
        "ico": "//static.ydlcdn.com/activity/images/update171212/icon_2-2.png",
        "title": "职场人际",
        "des": "工作压力，同事关系，职业发展等",
      },
      {
        "ico": "//static.ydlcdn.com/activity/images/update171212/icon_3-1.png",
        "title": "个人成长",
        "des": "个人提升，情绪调节<br />内向，孤僻等",
      },
      {
        "ico": "//static.ydlcdn.com/activity/images/update171212/flag_icon3-2.png",
        "title": "两性心理",
        "des": "揭秘男女<br />思维大不同",
      },
    ];

    this.professorPosterList = [
      {
        "face": "https://img.ydlcdn.com/file/2015/09/196fa0c9b120b8f2.jpg!s200x200",
        "name": "史占彪",
        "des": "中国科学研究院教授、心理研究所主任<br>中国心理卫生协会副秘书长<br>国际EAP协会中国分会秘书长",
      },
      {
        "face": "https://img.ydlcdn.com/file/2016/09/vay7h7hx3lzwf6u7.jpg!s200x200",
        "name": "赵颖",
        "des": "约克大学 Ph. D. -心理学 博士<br>国家二级心理咨询师<br>美国 A.C.H.E 临床催眠治疗师",
      },
      {
        "face": "https://img.ydlcdn.com/file/2016/12/19/b9lhcrooqm32emw3.jpg!s200x200",
        "name": "丁建略",
        "des": "吉林大学心理学系副教授、硕士生导师<br>中国人民大学心理学博士<br>中国公共文化研究与促进会（澳门）创会会长",
      },
    ];

    this.wmsszyqqPosterList = [
      {"cover": "https://static.ydlcdn.com/activity/images/update171212/machine01.png"},
      {"cover": "https://static.ydlcdn.com/activity/images/update171212/machine02.png"},
      {"cover": "https://static.ydlcdn.com/activity/images/update171212/machine03.png"},
      {"cover": "https://static.ydlcdn.com/activity/images/update171212/machine04.png"},
    ];

    this.evaluate = [
      {
        "name": "B**",
        "time": "2017-11-20",
        "say": "非常好的咨询师，看待问题非常的敏锐，及时能发现问题的关键所在，我的问题也迎刃而解。一次非常惊喜的体验，非常感谢！",
      },
      {
        "name": "海**",
        "time": "2017-11-20",
        "say": "以诚待人，以情感人，很好的咨询师！",
      },
      {
        "name": "小**",
        "time": "2017-11-20",
        "say": "老师，教会为人处事的态度，方法，受益匪浅！",
      },
      {
        "name": "阿**",
        "time": "2017-11-20",
        "say": "“很有效，也很耐心帮我增长智慧”",
      },
      {
        "name": "阳**",
        "time": "2017-11-20",
        "say": "感谢老师一直陪伴我成长！在老师的帮助下，我看清了自己内心世界真正的需求。以后当我对身边人有抱怨情绪时，我就应该提醒自己要向内要求自己。我爱我的家人，我想我会因为爱为他们付出更多，即便有情绪来临，我已经学会和情绪交朋友了！老师的指教，我记心中了。感谢老师",
      },
    ];
  }

  componentDidMount(){
    $(function(){
      Rule.init();
      $("img.lazy").attr("src", "/src/images/lazy-1.png").lazyload();
    });
  }

  getDatasurvey(item, index){
    return (
      <div className="item" key={index}>
        <i className={item.ico}></i>
        <strong>{item.title}</strong>
      </div>
    )
  }

  getSign(item, index){
    return (
      <li className="item" key={index}>
        <img data-original={item.ico} className="lazy" />
        <strong dangerouslySetInnerHTML={{ __html: item.title }}></strong>
        <h3 dangerouslySetInnerHTML={{ __html: item.des }}></h3>
      </li>
    )
  }

  getEvaluate(item, index){
    return (
      <li className="item" key={index}>
        <strong>{item.name} {item.time}</strong>
        <p>{item.say}</p>
      </li>
    )
  }

  render() {
    return (
      <div>

        <Wechat {...this.wechatData} />

        <div className="page-m-rexian">

          <div className="header">

            {/* 顶部 */}
            <LayoutTopLogo />

            {/* banner */}
            <a href="javascript:" className="js_kf" target="_blank">
              <LayoutTopBanner
                src="//static.ydlcdn.com/activity/images/update171212/banner0206.png"
              />
            </a>

            {/* 统计 */}
            <div className="datasurvey">
              {this.datasurvey.map((item, index) => (
                this.getDatasurvey(item, index)
              ))}
            </div>
          </div>

          {/* 标签 */}
          <div className="sign">
            <div className="title">
              <strong>我们擅长处理这些问题</strong>
              <span>解决心理烦恼 找回快乐</span>
            </div>

            <ul>
              {this.sign.map((item, index) => (
                this.getSign(item, index)
              ))}
            </ul>
          </div>

          {/* 教授 */}
          <div className="professor">
            <div className="title">
              <strong>中科院教授领衔</strong>
              <span>顶尖专家团队定制解决方案</span>
            </div>

            <div className="professorPoster">
              <LayoutSwiper list={this.professorPosterList} name="professorPosterSwiper" type="2" />
            </div>

            <div className="control"><a href="javascript:" className="g-btn m blue js_kf">更多心理专家</a></div>
          </div>

          {/* 我们设施专业齐全 */}
          <div className="wmsszyqq">
            <div className="title">
              <strong>我们设施专业齐全</strong>
              <span><a href="javascript:" className="js_kf">关于壹点灵</a></span>
            </div>

            <div className="wmsszyqqPoster">
              <LayoutSwiper list={this.wmsszyqqPosterList} name="wmsszyqqPosterSwiper" type="1" />
            </div>
          </div>

          {/* 合作权威的心理机构 */}
          <div className="hzqwdxljg">
            <div className="title">
              <strong>合作权威的心理机构</strong>
              <span>创新模式推动心理健康行业发展</span>
            </div>

            <div className="pic">
              <img data-original="https://static.ydlcdn.com/activity/images/activity002/partner001.png" className="lazy" />
              <img data-original="https://static.ydlcdn.com/activity/images/activity002/partner002.png" className="lazy" />
            </div>
          </div>

          {/* 媒体争相报道 */}
          <div className="mtzxbd">
            <div className="title">
              <strong>近100家媒体争相报道</strong>
              <span>创新模式推动心理健康行业发展</span>
            </div>

            <div className="pic">
              <img data-original="https://static.ydlcdn.com/activity/images/update171212/media.png" className="lazy" />
            </div>
          </div>

          {/* 用户评价 */}
          <div className="evaluate">
            <div className="title2">用户评价</div>

            <ul>
              {this.evaluate.map((item, index) => (
                this.getEvaluate(item, index)
              ))}
            </ul>

            <div className="control"><a href="javascript:" className="g-btn m blue js_kf">更多评价</a></div>
          </div>

          {/* 简单3步完成咨询 */}
          <div className="jdwczx">
            <div className="title3">简单 3 步完成咨询</div>

            <div className="step">
              <ul>
                <li>
                  <i></i>
                  <span className="num">01</span>
                  <span className="text">联系客服</span>
                  <small>Contact Service</small>
                </li>
                <li>
                  <i></i>
                  <span className="num">02</span>
                  <span className="text">预约专家</span>
                  <small>Booking Expert</small>
                </li>
                <li>
                  <i></i>
                  <span className="num">03</span>
                  <span className="text">完成咨询</span>
                  <small>Complete Advice</small>
                </li>
              </ul>
            </div>

            <div className="des">
              <strong>咨询无效100%退款</strong>
              <span>咨询无效只收取成本费 百分百退款</span>
            </div>
          </div>

          {/* 底部 */}
          <LayoutFooterOnline
            data={
              [
                {"type": 'phone'},
                {"type": 'online', 'fill': true},
              ]
            }
          />
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

Page = connect(mapStateToProps)(Page);

Page.propTypes = {
  data: PropTypes.string
}

export default Page;

