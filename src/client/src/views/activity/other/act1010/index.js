import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import API from '../../servers2/biaodan';
import { Toast, Modal } from 'antd-mobile';

import Swiper from 'swiper/dist/js/swiper.js';

class Page extends Component {

  constructor(props) {

    super(props);

    this.state = {
      modal: false
    }
    this.introList = [
      {
        "ico": "i-1",
        "title": "更权威",
        "content": "全国顶尖心理咨询平台，权威大咖督导",
      },
      {
        "ico": "i-2",
        "title": "更专业",
        "content": "9000+专业咨询师，100%职业资格认证",
      },
      {
        "ico": "i-3",
        "title": "更真实",
        "content": "超过100万的注册用户，你值得信赖的选择",
      },
      {
        "ico": "i-4",
        "title": "更安全",
        "content": "隐私有保障，服务不满意核实后随时退款",
      }
    ];

  }

  // 获取introl列表
  getIntroHTML(item, index) {
    return (
      <dl key={index}>
        <dt className={item.ico}></dt>
        <dd>
          <strong>{item.title}</strong>
          <p>{item.content}</p>
        </dd>
      </dl>
    )
  }

  componentDidMount(){

    $(function(){

    });
  }

  render() {
    return (
      <div>
        <div className="page-activity-act1010">

          {/* 新头部 */}
          <div className="header">

            <dl className="toptext">
              <dt></dt>
              <dd>在美国，有大约二分之一的人接受过心理服务，普通得就像治疗感冒一样。而在中国，有心理服务需求的人并不比美国少，却只有极少的一部分人真正的接受过心理服务。今天，壹点灵携世界精神卫生日，让天下人更快乐！</dd>
            </dl>

            {/* 心理评测 */}
            <section>
              <div className="banner t-1"></div>

              <ul className="list2">
                <li>
                  <dl>
                    <dt className="p-1"></dt>
                    <dd>
                      <p>
                        “心灵” 健康体检
                        <small>#心理状态测试#</small>
                      </p>
                      <div><a href="https://m.yidianling.com/ceshi/start/2?cps_channel_p=B.1.1.18092502.18092502" target="_blank" className="btn small">去测试</a></div>
                    </dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt className="p-2"></dt>
                    <dd>
                      <p>
                        测测你内心多抑郁
                        <small>#抑郁症测试#</small>
                      </p>
                      <div><a href="https://m.yidianling.com/ceshi/start/738?cps_channel_p=B.1.1.18092502.18092502" target="_blank" className="btn small">去测试</a></div>
                    </dd>
                  </dl>
                </li>
              </ul>

              <div className="more"><a href="https://m.ydl.com/ceshi/special-list?id=11&cps_channel_p=B.1.1.18092502.18092502" target="_blank">查看更多评测</a> <i></i></div>
            </section>

            {/* 倾述热线 */}
            <section>
              <div className="banner t-2"></div>

              <ul className="list1">
                <li>
                  <dl>
                    <dt className="p-3"></dt>
                    <dd>
                      <strong>李艳</strong>
                      <p>负面情绪像黑暗无法驱赶，那只能带光进来！</p>
                      <div><a href="https://m.yidianling.com/listen/" target="_blank" className="btn small">立即倾诉</a></div>
                    </dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt className="p-4"></dt>
                    <dd>
                      <strong>高占民</strong>
                      <p>在生命经历苦痛时期，我愿用心陪您走出来。</p>
                      <div><a href="https://m.yidianling.com/listen/" target="_blank" className="btn small">立即倾诉</a></div>
                    </dd>
                  </dl>
                </li>
              </ul>

              <div className="more"><a href="https://m.yidianling.com/listen/" target="_blank">查看更多聆听者</a> <i></i></div>
            </section>

            {/* 心理咨询 */}
            <section>
              <div className="banner t-3"></div>

              <ul className="list1">
                <li>
                  <dl>
                    <dt className="p-5"></dt>
                    <dd>
                      <strong>黄晶</strong>
                      <p>专职婚恋心理咨询师15年心理学硕士，法学硕士</p>
                      <div><a href="https://m.yidianling.com/experts/2956" target="_blank" className="btn small">立即咨询</a></div>
                    </dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt className="p-6"></dt>
                    <dd>
                      <strong>蓝奥</strong>
                      <p>中国心理咨询师与催眠师联合会理事</p>
                      <div><a href="https://m.yidianling.com/experts/1886" target="_blank" className="btn small">立即咨询</a></div>
                    </dd>
                  </dl>
                </li>
              </ul>

              <div className="more"><a href="https://m.yidianling.com/experts/category/" target="_blank">查看更多专家</a> <i></i></div>
            </section>

            {/* 心理课程 */}
            <section>
              <div className="banner t-4"></div>

              <ul className="list2">
                <li>
                  <dl>
                    <dt className="p-7"></dt>
                    <dd>
                      <p className="textleft">中科院+壹点灵 心理咨询双证班</p>
                      <div><a href="https://m.ydl.com/activity/course-july?from=groupmessage&isappinstalled=0" target="_blank" className="btn small">去听课</a></div>
                    </dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt className="p-8"></dt>
                    <dd>
                      <p className="textleft">警惕毁灭学生生涯的三种情绪</p>
                      <div><a href="https://m.yidianling.com/course/645" target="_blank" className="btn small">去听课</a></div>
                    </dd>
                  </dl>
                </li>
              </ul>

              <div className="more"><a href="https://static.ydlcdn.com/v4/kc/wap/index.html?id=10&from=groupmessage&isappinstalled=0" target="_blank">查看更多课程</a> <i></i></div>
            </section>

            {/* 心事问答 */}
            <section>
              <div className="banner t-5"></div>

              <ul className="list3">
                <a href="https://m.yidianling.com/ask/286043" target="_blank">
                  <li>
                    <dl>
                      <dt><em>问：</em>好难受，已经持续很长一段时间了</dt>
                      <dd>
                        <p>亲爱的，看到你描述的这样，能感受到你现在非常的痛苦，也很想走出这种状态，但又很无力…</p>
                        <div>
                          <span className="sp1"><i className="face-1"></i> 姜英</span>
                          <span className="sp2">09月18日</span>
                        </div>
                      </dd>
                    </dl>
                  </li>
                </a>

                <a href="https://m.yidianling.com/ask/284646" target="_blank">
                  <li>
                    <dl>
                      <dt><em>问：</em>感到焦虑怎么办？</dt>
                      <dd>
                        <p>很能理解你这样的焦虑情绪，你和爷爷奶奶的感情很深，有些责任是你父母需要承担的，如果…</p>
                        <div>
                          <span className="sp1"><i className="face-2"></i> 钱晓莱</span>
                          <span className="sp2">09月25日</span>
                        </div>
                      </dd>
                    </dl>
                  </li>
                </a>
              </ul>

              <div className="more"><a href="https://m.yidianling.com/ask/" target="_blank">查看更多问答</a> <i></i></div>
            </section>

            {/* 心理杂志 */}
            <section>
              <div className="banner t-6"></div>

              <ul className="list4">
                <a href="https://m.yidianling.com/jingyan/7564" target="_blank">
                  <li className="line">
                    <dl>
                      <dd>
                        <p>想为孩子打造最好的家庭环境，这三张表格就够了</p>
                        <div>浏览 2047 · 赞 336</div>
                      </dd>
                      <dt className="p-9"></dt>
                    </dl>
                  </li>
                </a>

                <a href="https://m.yidianling.com/jingyan/5806" target="_blank">
                  <li>
                    <dl>
                      <dd>
                        <p>一张图片引发家庭关系的思考！</p>
                        <div>浏览 3035 · 赞 1112</div>
                      </dd>
                      <dt className="p-10"></dt>
                    </dl>
                  </li>
                </a>
              </ul>

              <div className="more"><a href="https://m.yidianling.com/jingyan?tag=483" target="_blank">查看更多文章</a> <i></i></div>
            </section>

          </div>

          {/* 介绍 */}
          <div className="intro">
            <h3>为什么选择壹点灵</h3>

            <div className="banner"></div>

            <div className="list">
              {this.introList.map((item, index) => (
                this.getIntroHTML(item, index)
              ))}
            </div>

            {/* 按钮 */}
            <div className="control"><a href="https://m.yidianling.com/experts/search?cat=23" target="_blank" className="btn big">预约咨询</a></div>
          </div>

          {/* 关于我们 */}
          <div className="aboutus">
            <h3>壹点灵心理服务中心</h3>
            <div className="banner"></div>

            <ul>
              <li>
                <h5>杭州地址：</h5>
                <p>杭州市滨江区聚光中心C2座402室</p>
              </li>
            </ul>

            <div className="control mtbg"><a href="https://m.yidianling.com/about/" target="_blank" className="btn big">点击了解</a></div>
          </div>

          {/* 底部 */}
          <div className="footer"><a href="tel:400-114-1010" className="btn1 kf_hotline">电话咨询</a><a href="javascript:" target="_blank" className="btn2 kf_xinnuan">在线咨询</a>
          </div>
        </div>

      </div>
    )
  }
}

export default Page;
