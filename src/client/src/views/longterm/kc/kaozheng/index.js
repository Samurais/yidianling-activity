
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Swiper from 'swiper/dist/js/swiper.js';
import Rule from '../../../../component/rules';
import Wechat from '../../../../component/wechat';
import Native from '../../../../component/native';
import Util from '../../../../lib/util';

class Page extends Component {

  constructor(props) {

    super(props);

    this.imgpath = "/src/images/longterm/kaozheng/";

    this.swiperList = [
      {
        "cover": `${this.imgpath}e-1.png`,
      },
      {
        "cover": `${this.imgpath}e-2.png`,
      },
      {
        "cover": `${this.imgpath}e-3.png`,
      },
      {
        "cover": `${this.imgpath}e-4.png`,
      },
      {
        "cover": `${this.imgpath}e-5.png`,
      },
      {
        "cover": `${this.imgpath}e-6.png`,
      },
      {
        "cover": `${this.imgpath}e-7.png`,
      },
    ];
  }

  componentDidMount() {

    let _this = this;

    $(function(){
      Rule.init({
        "appId": "m-activity",
        "eventId": "/kc/kaozheng",
        "eventType": "pv",
        "platform": "wap"
      });

      // 倒入图片
      $(".lazy").each(function(i){
        $(this).attr("src", `${_this.imgpath}pic-${i+1}.png`);
      });

      new Swiper("#p-poster", {
        // slidesPerView: 2,
        freeMode: true,
        on: {
          init: function(){
            $(".swiper-lazy").each(function(){
              let _this = $(this);
              _this.attr("src", _this.data("src"));
            });
          },
        },
      });

    });
  }

  getHTML(item, index){
    return (
      <li className="swiper-slide" key={index}>
        <div className="item-pic">
          <a href="javascript:" className="js_kf"><img data-src={item.cover} className="swiper-lazy" /></a>
        </div>
      </li>
    )
  }

  render() {

    return (
      <div className="page-longterm-kc-kaozheng">

        <div className="p-content">
          <div className="item"><img src="" data-name="pic-1" className="lazy" /></div>

          <div className="item">
            <a href="javascript:" className="js_kf"><img src="" data-name="pic-2" className="lazy" /></a>
          </div>

          <div className="item"><img src="" data-name="pic-3" className="lazy" /></div>

          <div className="item">
            <a href="javascript:" className="js_kf"><img src="" data-name="pic-4" className="lazy" /></a>
          </div>

          <div className="item"><img src="" data-name="pic-5" className="lazy" /></div>

          <div className="item">
            <a href="javascript:" className="js_kf"><img src="" data-name="pic-6" className="lazy" /></a>
          </div>

          <div className="item"><img src="" data-name="pic-7" className="lazy" /></div>

          <div className="item">
            <a href="javascript:" className="js_kf"><img src="" data-name="pic-8" className="lazy" /></a>
          </div>

          <div className="item"><img src="" data-name="pic-9" className="lazy" /></div>

          {/* 轮播 */}
          <div className="poster">
            <div className="p-swiper">
              <div className="swiper-container" id="p-poster">
                <ul className="swiper-wrapper">
                  {this.swiperList.map((item, index) => (
                    this.getHTML(item, index)
                  ))}
                </ul>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>

          <div className="item"><img src="" data-name="pic-10" className="lazy" /></div>

          <div className="item">
            <a href="javascript:" className="js_kf"><img src="" data-name="pic-11" className="lazy" /></a>
          </div>

          <div className="item"><img src="" data-name="pic-12" className="lazy" /></div>
        </div>

        <div className="p-footer">
          <a href="javascript:" className="js_kf"><img src="" data-name="pic-13" className="lazy" /></a>
        </div>

        <Wechat {...this.props.data.wechat} />
        <Native />
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
