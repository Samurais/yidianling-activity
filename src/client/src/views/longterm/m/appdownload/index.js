
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import API from '../../servers/m/appdownload';
import Swiper from 'swiper/dist/js/swiper.js';
import Rule from '../../../../component/rules';

import Wechat from '../../../../component/wechat';

import Sign from './component/Sign';
import Column from './component/Column';
import Zmd from './component/Zmd';
import Zxlj from './component/Zxlj';
import Aboutus from './component/Aboutus';
import Fuwu from './component/Fuwu';

class Page extends Component {

  constructor(props) {

    super(props);

    this.defImg = "/src/images/global/lazy.png";

    this.downloadUrl = "https://a.app.qq.com/o/simple.jsp?pkgname=com.cxzapp.yidianling&channel=0002160650432d595942&fromcase=60001";

    this.jump = this.props.data.jump;
  }

  componentDidMount() {
    Rule.init();

    $(function(){
      $("img.lazy").lazyload();

      let $top = $(".fixed");
      let btnHeight = $top.height();
      let onTop = $top.offset().top + btnHeight;
      let $win = $(window);
      let top = 0;

      $win.scroll(function(){

        top = $win.scrollTop();

        if(top >= onTop) {
          $top.addClass("move");
        } else {
          $top.removeClass("move");
        }
      });
    });
  }

  render() {

    return (
      <div>
        <Wechat {...this.props.data.wechat} />
        <div className="page-longterm-m-appdownload">
          <div className="header">
            <div className="top">
              <div className="top-bg">
                <img src={this.defImg} data-original="/src/images/longterm/appdownload/top-bg.png" className="lazy" />
              </div>
            </div>

            <div className="info">
              <div className="pic">
                <img data-original="/src/images/longterm/appdownload/top-info.png" className="lazy" />
              </div>

              <div className="top-control">
                <div className="fixed">
                  <a href={this.downloadUrl} className="btn-fixed">找咨询师帮我·下载APP<i></i></a>
                </div>
              </div>
              <i className="ico-1"></i>
            </div>
          </div>

          {/* 标签 */}
          <div className="sign"><Sign jump={this.downloadUrl} /></div>

          {/* 栏目 */}
          <div className="column"><Column jump={this.downloadUrl} /></div>

          {/* 走马灯 */}
          <div className="zmd"><Zmd jump={this.downloadUrl} /></div>

          <div className="main">
            {/* 咨询理解 */}
            <section className="zxlj"><Zxlj jump={this.downloadUrl} /></section>

            {/* 关于我们 */}
            <div className="aboutus"><Aboutus jump={this.downloadUrl} /></div>

            {/* 服务优势 */}
            <div className="fuwu"><Fuwu jump={this.downloadUrl} /></div>

            {/* 值班时间 */}
            <div className="zbtime">
              <img src={this.defImg} data-original="/src/images/longterm/appdownload/fuwu-time.png" className="lazy" />
            </div>
          </div>

          <div className="footer">
            <p><span className="win_company"></span></p>
            <p><span className="win_copyright"></span>

                <span className="win_copycode"></span></p>
          </div>
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
