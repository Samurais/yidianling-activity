import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import API from '../../servers2/biaodan';
import Rule from '../../../../component/rules';
import { Toast, Modal } from 'antd-mobile';

import {storage} from '../../../../lib/compatible';

import Wechat from '../../../../component/wechat';
import LayoutTopBanner from '../../../../component/layout/topBanner';
import LayoutSwiper from '../../../../component/layout/swiper';

import {FooterOnline} from '../../../../component/layout';

class Page extends Component {

  constructor(props) {

    super(props);

    this.wechatData = this.props.data.wechat;

    this.datasurvey = [
      {
        "ico": "/src/images/activity/kc/qinzi/d-1.png",
        "t1": "8个月",
        "t2": "系统培训",
      },
      {
        "ico": "/src/images/activity/kc/qinzi/d-2.png",
        "t1": "面对面",
        "t2": "专业培训",
      },
      {
        "ico": "/src/images/activity/kc/qinzi/d-3.png",
        "t1": "终身制",
        "t2": "沙龙会员",
      },
    ];

    // 授课大咖云集
    this.skdkyj = [
      {
        "face": "/src/images/activity/kc/qinzi/f-1.png",
        "name": "郑日昌",
        "des": "北京师范大学教授、博导、壹点灵顾问督导、卫生部心理治疗师考试委员会委员、教育部考试中心研究员",
      },
      {
        "face": "/src/images/activity/kc/qinzi/f-2.png",
        "name": "史占彪",
        "des": "中科院心理所博士、教授、壹点灵首席专家顾问、壹点灵顾问督导、中科院心理所心理健康促进中心主任",
      },
      {
        "face": "/src/images/activity/kc/qinzi/f-3.png",
        "name": "朱浩亮",
        "des": "中国科学院心理研究所硕士；中央财经大学应用心理学硕士生导师；温州大学教授、硕士生导师",
      },
      {
        "face": "/src/images/activity/kc/qinzi/f-4.png",
        "name": "祝卓宏",
        "des": "中科院心理研究所博士、教授、博士后导师、壹点灵顾问督导、中国心理卫生协会心理师专委员会副主任委员",
      },
    ];

    // 为什么选择壹点灵
    this.wsmxzydl = [
      {
        "title": "更权威",
        "des": "全国顶尖心理咨询平台，权威大咖督导",
      },
      {
        "title": "更专业",
        "des": "亲子教育18年心理学导师亲自授课",
      },
      {
        "title": "更真实",
        "des": "直播互动，面对面教学更有效",
      },
      {
        "title": "更有效",
        "des": "终身制沙龙会员，随时帮助学习成长",
      },
      {
        "title": "更高额",
        "des": "海量亲子案例，平均客单10000+",
      },
    ];

    this.gdmtzxbd = [
      {
        "ico": "/src/images/activity/kc/qinzi/l-1.png",
        "des": "心理健康助力全面小康。",
      },
      {
        "ico": "/src/images/activity/kc/qinzi/l-2.png",
        "des": "天灾无情人有情，壹点灵 赴台风灾区紧急心理...",
      },
      {
        "ico": "/src/images/activity/kc/qinzi/l-3.png",
        "des": "壹点灵:互联网+公益心理 咨询=无限可能...",
      },
      {
        "ico": "/src/images/activity/kc/qinzi/l-4.png",
        "des": "心灵花园公益敲门行动在 继续关注弱势青少年...",
      },
    ];

    this.aboutusPosterList = [
      { "cover": "/src/images/activity/kc/qinzi/f-4.jpeg"},
      { "cover": "/src/images/activity/kc/qinzi/f-1.jpeg"},
      { "cover": "/src/images/activity/kc/qinzi/f-2.jpeg"},
      { "cover": "/src/images/activity/kc/qinzi/f-3.jpeg"},
    ];

    this.msjxPosterList = [
      { "cover": "/src/images/activity/kc/qinzi/p-4.jpeg"},
      { "cover": "/src/images/activity/kc/qinzi/p-1.jpeg"},
      { "cover": "/src/images/activity/kc/qinzi/p-2.jpeg"},
      { "cover": "/src/images/activity/kc/qinzi/p-3.jpeg"},
    ]
  }

  componentDidMount(){
    $(function(){
      Rule.init();
      $("img.lazy").attr("src", "/src/images/lazy-1.png").lazyload();
    });
  }

  getDatasurvey(item, index){
    return (
      <li className="item" key={index}>
        <img data-original={item.ico} className="lazy" />
        <strong>{item.t1}</strong>
        <span>{item.t2}</span>
      </li>
    )
  }

  // 授课大咖云集
  getSkdkyj(item, index){
    return (
      <li className="item" key={index}>
        <i className="line"></i>
        <dl>
          <dt className="face"><img src={item.face} /></dt>
          <dd>
            <span>{item.name}</span>
            <p>{item.des}</p>
          </dd>
        </dl>
      </li>
    )
  }

  // 为什么选择壹点灵
  getWsmxzydl(item, index){
    return (
      <li className="item" key={index}>
        <strong>{item.title}</strong>
        <h3>{item.des}</h3>
      </li>
    )
  }

  // 各大媒体争相报道
  getGdmtzxbd(item, index){
    return (
      <li className="item" key={index}>
        <p>{item.des}</p>
        <img data-original={item.ico} className="lazy" />
      </li>
    )
  }

  render() {
    return (
      <div>
        <Wechat {...this.wechatData} />

        <div className="page-kc-qinzi">

          {/* 头部 */}
          <div className="header">
            {/* banner */}
            <LayoutTopBanner
              src="/src/images/activity/kc/qinzi/top-bg.png"
            />

            {/* 统计 */}
            <div className="datasurvey">
              <ul>
                {this.datasurvey.map((item, index) => (
                  this.getDatasurvey(item, index)
                ))}
              </ul>
            </div>
          </div>

          {/* 四大学习阶段 */}
          <section>
            <div className="title t-1"></div>

            <div className="sdxxjd">
              <img data-original="/src/images/activity/kc/qinzi/sdxxjd.png" className="lazy" />
              <div className="control"><a href="javascript:" className="btn js_kf">立即咨询</a></div>
            </div>
          </section>

          {/* 面授教学 */}
          <section>
            <div className="title t-2"></div>

            <div className="msjx">
              <div className="msjxPoster">
                <LayoutSwiper list={this.msjxPosterList} name="msjxPosterSwiper" type="1" />
              </div>

              <div className="content">面对面现场教学</div>
            </div>
          </section>

          {/* 授课大咖云集 */}
          <section>
            <div className="title t-3"></div>

            <div className="skdkyj">
              <ul>
                {this.skdkyj.map((item, index) => (
                  this.getSkdkyj(item, index)
                ))}
              </ul>
            </div>
          </section>

          {/* 我们正在寻找这样的你 */}
          <section>
            <div className="title t-4"></div>

            <div className="wmzzxzzydy">
              <img data-original="/src/images/activity/kc/qinzi/wmzzxzzydy.png" className="lazy" />
            </div>

            <div className="control mt20">
              <a href="javascript:" className="btn js_kf">立即咨询</a>
            </div>
          </section>

          {/* 为什么选择壹点灵 */}
          <section>
            <div className="title t-5"></div>

            <div className="wsmxzydl">
              <ul>
                {this.wsmxzydl.map((item, index) => (
                  this.getWsmxzydl(item, index)
                ))}
              </ul>
            </div>

            <div className="control mt80">
              <a href="javascript:" className="btn js_kf">立即咨询</a>
            </div>
          </section>

          {/* 各大媒体争相报道 */}
          <section>
            <div className="title t-6"></div>

            <div className="gdmtzxbd">
              <ul>
                {this.gdmtzxbd.map((item, index) => (
                  this.getGdmtzxbd(item, index)
                ))}
              </ul>
            </div>
          </section>

          {/* 关于我们 */}
          <section>
            <div className="title t-7"></div>

            <div className="aboutus">
              <div className="aboutusPoster">
                <LayoutSwiper list={this.aboutusPosterList} name="aboutusPosterSwiper" type="1" />
              </div>

              <div className="des">
                <p>
                  壹点灵秉承“知心专业，贴心关怀，诚心服务”的理念，力图打造中国最有价值的综合性婚恋服务平台。现有员工300多人，拥有博士、硕士研究生学历者占到10%以上。
                </p>
                <p>
                  研发运营团队多来自阿里巴巴、百度、携程、5173等知名互联网公司。汇集了国内外4000多位专家，通过各类成熟的实战经验技巧帮助用户挽救婚姻、劝退第三者、挽回爱情、情感疏导。已经成功挽救了5万多个家庭。
                </p>
              </div>
            </div>
          </section>

          {/* 底部 */}
          <div className="footer">
            <img data-original="/src/images/activity/kc/qinzi/footer.png" className="lazy" />
          </div>

          {/* 底部悬浮 */}
          <FooterOnline
            data={
              [
                {
                  "type": 'online',
                  'fill': true,
                  'color': 'orange',
                  'text': '点击咨询所有问题',
                  'tag': false
                },
              ]
            }
            bg="none"
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
