import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rule from '../../../../component/rules';
import { Toast, Modal } from 'antd-mobile';

import {storage} from '../../../../lib/compatible';

import Wechat from '../../../../component/wechat';

import {FooterOnline, TopBanner, Comment, Sign, Swiper} from '../../../../component/layout';

class Page extends Component {

  constructor(props) {

    super(props);

    this.wechatData = this.props.data.wechat;

    this.commentList = [
      {
        "face": "https://img.ydlcdn.com/file/2018/03/21/e318f0d28c487d3d31717343aeb65828..jpg!s120x120",
        "name": "w** 评价心理专家黄益寒",
        "time": "2018-03-24",
        "say": "很专业，分析得很好，有些是自己都没想到过或是不以为然的事情原来也是有因果关系的，心情豁然开朗。",
      },
      {
        "face": "https://img.ydlcdn.com/file/2018/03/20/12ffffd44c0135d744b10d297b005dc1..jpg!s120x120",
        "name": "刘** 评价心理专家邢宇星",
        "time": "2018-03-24",
        "say": "喜欢老师的直接，在学习的过程中老师很有耐心！",
      },
      {
        "face": "https://img.ydlcdn.com/file/2018/03/19/96102f311506c6d3ac410bd7f7c92b3b..jpg!s120x120",
        "name": "秋** 评价心理专家于新萍",
        "time": "2018-03-24",
        "say": "感恩老师，这是第二次跟老师咨询了，谢谢老师给我的认可，给我力量",
      },
      {
        "face": "https://img.ydlcdn.com/v2/images/avatar_default.png!s120x120",
        "name": "邱** 评价心理专家徐黄英",
        "time": "2018-03-23",
        "say": "我现在状态慢慢变好，尽管有时候还是会刹那间陷入一些情绪中，但是我能很快觉察到自己的情绪。感恩老师的疏导帮助，谢谢您。",
      },
      {
        "face": "https://img.ydlcdn.com/file/2015/12/wi62ikf7pgbo3jwz.png!s120x120",
        "name": "Z** 评价心理专家廖丽萍",
        "time": "2018-02-24",
        "say": "无法用言语去表达老师的好 真的是义无反顾的帮助 何时何地 只要需要 老师就出现 得到了极大的安慰和亲切感 也对我的事情出谋划策分析到位效果明显 谢谢老师",
      },
      {
        "face": "https://img.ydlcdn.com/file/2018/01/07/1d5d70faa653f2a6f6fe4c9c52c1fa5b..jpg!s120x120",
        "name": "雨** 评价心理专家单红妍",
        "time": "2018-02-24",
        "say": "单老师，在你这里，我哭过，也笑过，思考过，也成长了，希望在以后的生活中，你还是我内心的明灯",
      },
    ];

    this.sign = [
      {
        "ico": "https://static.ydlcdn.com/activity/images/activity002/ico_kid_rebellion.png",
        "title": "焦虑抑郁",
        "des": "焦虑症、抑郁症<br/>忧郁症、产后抑郁",
        "num": "212839",
      },
      {
        "ico": "https://static.ydlcdn.com/activity/images/activity002/ico_pressure_insomnia.png",
        "title": "强迫症",
        "des": "行为强迫(反复关门<br />窗)、意向强迫、",
        "num": "259512",
      },
      {
        "ico": "https://static.ydlcdn.com/activity/images/activity002/ico_pressure_neurasthenia.png",
        "title": "神经症",
        "des": "神经衰弱、疑病性神经症、癔病",
        "num": "80916",
      },
      {
        "ico": "https://static.ydlcdn.com/activity/images/activity002/ico_pressure_pressure.png",
        "title": "情绪压力",
        "des": "情绪波动、烦躁、焦急、压力大",
        "num": "2394392",
      },
    ];

    this.expertPosterList = [
      {
        "face": "https://img.ydlcdn.com/file/2015/09/43a596a8a5cf12df.jpg!s200x200",
        "name": "朱浩亮",
        "des": "中科院心理研究所硕士",
        "contact": true,
      },
      {
        "face": "https://img.ydlcdn.com/file/2016/09/p2qc5uxvnnftb9xz.png!s200x200",
        "name": "袁红红",
        "des": "心理健康专家",
        "contact": true,
      },
      {
        "face": "https://img.ydlcdn.com/file/2016/10/31/bpccp9u2d73lh6sv.jpg!s200x200",
        "name": "袁丽娜",
        "des": "心理健康专家",
        "contact": true,
      },
      {
        "face": "https://img.ydlcdn.com/file/2016/09/vay7h7hx3lzwf6u7.jpg!s200x200",
        "name": "赵颖",
        "des": "心理健康专家",
        "contact": true,
      },
      {
        "face": "https://img.ydlcdn.com/file/2015/11/hk0kibxj4uycizdb.jpg!s200x200",
        "name": "许涛",
        "des": "临床心理科主任",
        "contact": true,
      },
    ];
  }

  componentDidMount(){
    $(function(){
      Rule.init();

      $("img.lazy").attr("src", "/src/images/lazy-1.png").lazyload();
    });
  }

  render() {
    return (
      <div>
        <Wechat {...this.wechatData} />

        <div className="page-m-qingxu">
          <div className="header">
            {/* banner */}
            <a href="javascript:" className="js_kf">
              <TopBanner
                src="https://static.ydlcdn.com/activity/images/activity002/qxyl_banner.jpg"
              />
            </a>

            <div className="datasurvey">
              <img src="https://static.ydlcdn.com/activity/images/activity002/hyzx_banner2.png" />
            </div>
          </div>

          <section>
            <div className="title">我们帮您解决这些问题</div>

            <Sign list={this.sign} type="1" />

            <div className="g-text-center g-mt40">
              <a href="javascript:" className="g-btn m green">更多话题 马上咨询</a>
            </div>
          </section>

          <section>
            <div className="g-text-center g-mt40 pic-control nomlr step">
              <img src="https://static.ydlcdn.com/activity/images/activity002/workflow_hyzx.png" />
            </div>
          </section>

          <section>
            <div className="expert">
              <div className="title">
                平均从业8年的心理健康专家<br/>
                均具备国家颁发的咨询师资质 真实可查询
              </div>

              <div className="expertPoster">
                <Swiper list={this.expertPosterList} name="expertPosterSwiper" type="3" status="2" />
              </div>

              <div className="g-text-center g-mt40">
                <a href="javascript:" className="g-btn m green js_kf" target="_blank">帮我推荐专家</a>
              </div>
            </div>
          </section>

          <section>
            <div className="title">受到用户一致好评</div>

            <Comment list={this.commentList} type="2" />
          </section>

          <section className="bgf5f5f5 pm40">
            <div className="title">
              各大媒体争相报道<br />
              创新模式推动心理健康行业发展
            </div>

            <div className="pic-control g-mt40">
              <img src="https://static.ydlcdn.com/activity/images/activity002/media.jpg" />
            </div>
          </section>

          <section className="pm40">
            <div className="title">
              权威机构合作背景<br />
              与地方妇联，高校，咨询结构深入合作
            </div>

            <div className="pic-control g-mt40">
              <img src="https://static.ydlcdn.com/activity/images/activity002/organization.jpg" />
            </div>
          </section>

          <section className="bgf5f5f5 pm40">
            <div className="title">关于我们</div>

            <div className="pic-control g-mt40">
              <img src="https://static.ydlcdn.com/activity/images/activity002/about_us.jpg" />
            </div>

            <div className="text">
              <p>壹点灵，一点阳光，温暖心灵，携手壹点灵，每天都有好心情。</p>
              <p>壹点灵隶属于上海袋虎网络信息技术有限公司，秉承“知心专业，贴心关怀，诚心服务” 理念，打造中国最有价值的心理健康服务与心理健康服务互联网平台。</p>
            </div>

            <div className="g-mt20 g-text-center">
              <a href="javascript:" className="g-btn m green">了解更多</a>
            </div>
          </section>

          <section>
            <div className="onlineTime g-mt40">
              客服 <a href="tel:400-114-1010">400-114-1010</a><br />
              （工作时间：早08:00-次日凌晨01:00）
            </div>
            <div className="copyright g-mt20">
            <span className="win_copyright"></span>
            <span className="win_company"></span><br />
            <span className="win_copycode"></span>
            </div>
          </section>

          {/* 底部 */}
          <FooterOnline
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

