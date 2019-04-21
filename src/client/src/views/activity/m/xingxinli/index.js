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

    this.piclist = [
      {
        "cover": "https://static.ydlcdn.com/activity/images/activity002/experts01.png"
      },
      {
        "cover": "https://static.ydlcdn.com/activity/images/activity002/experts02.png"
      },
      {
        "cover": "https://static.ydlcdn.com/activity/images/activity002/experts03.png"
      },
      {
        "cover": "https://static.ydlcdn.com/activity/images/activity002/experts04.png"
      },
    ];
  }

  componentDidMount(){
    $(function(){
      Rule.init();
      $("img.lazy").attr("src", "/src/images/lazy-1.png").lazyload();
    });
  }

  getPiclist(item, index){
    return (
      <li key={index}>
        <a href="javascript:" className="js_kf">
          <img src={item.cover} />
        </a>
      </li>
    )
  }

  render() {
    return (
      <div>

        <Wechat {...this.wechatData} />

        <div className="page-m-xingxinli">
          <div className="header">
            {/* banner */}
            <LayoutTopBanner
              src="https://static.ydlcdn.com/activity/images/activity002/banner.png"
            />

            {/* 统计 */}
            <div className="datasurvey">
              <img data-original="https://static.ydlcdn.com/activity/images/activity002/service.png" className="lazy" />
            </div>
          </div>

          <section>
            <div className="title t1">
              <img data-original="https://static.ydlcdn.com/activity/images/activity002/text01.png" className="lazy" />
            </div>

            <div className="qqjjndnyzy">
              <ul>
                <li><img data-original="https://static.ydlcdn.com/activity/images/activity002/damage01.png" className="lazy" /></li>
                <li><img data-original="https://static.ydlcdn.com/activity/images/activity002/damage02.png" className="lazy" /></li>
                <li><img data-original="https://static.ydlcdn.com/activity/images/activity002/damage03.png" className="lazy" /></li>
              </ul>
            </div>
          </section>

          <section>
            <div className="title t2">
              <img data-original="https://static.ydlcdn.com/activity/images/activity002/title01.png" className="lazy" />
            </div>

            <div className="zszxstj">
              <div className="picbig">
                <a href="javascript:" className="js_kf">
                  <img data-original="https://static.ydlcdn.com/activity/images/activity002/experts_card.png" className="lazy" />
                </a>
              </div>

              <ul className="piclist">
                {this.piclist.map((item, index) => (
                  this.getPiclist(item, index)
                ))}
              </ul>

              <div className="promise">
                <img data-original="https://static.ydlcdn.com/activity/images/activity002/promise.png" className="lazy" />
              </div>
            </div>
          </section>

          <section>
            <div className="title t2">
              <img data-original="https://static.ydlcdn.com/activity/images/activity002/title02.png" className="lazy" />
            </div>

            <div className="pic-control mt20">
              <a href="javascript:" className="js_kf">
                <img data-original="https://static.ydlcdn.com/activity/images/activity002/swiper01.png" className="lazy" />
              </a>
            </div>
          </section>

          <section>
            <div className="title t2">
              <img data-original="https://static.ydlcdn.com/activity/images/activity002/title03.png" className="lazy" />
            </div>

            <div className="pic-control mt20">
              <a href="javascript:" className="js_kf">
                <img data-original="https://static.ydlcdn.com/activity/images/activity002/produce.png" className="lazy" />
              </a>
            </div>
          </section>

          <div className="center mt20">
            <a href="javascript:" className="g-btn m white">了解更多</a>
          </div>

          <div className="btn-control pic-control mt40">
            <img data-original="https://static.ydlcdn.com/activity/images/activity002/phone01.png" className="lazy" />
          </div>

          <div className="btn-control pic-control mt40">
            <a href="javascript:" className="js_kf">
              <img data-original="https://static.ydlcdn.com/activity/images/activity002/zixun01.png" className="lazy" />
            </a>
          </div>

          {/* 底部 */}
          <LayoutFooterOnline
            data={
              [
                {"type": 'phone'},
                {"type": 'online', 'fill': true},
                {"type": 'download'},
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

