import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rule from '../../../../component/rules';
import Wechat from '../../../../component/wechat';

class Page extends Component {

  constructor(props) {

    super(props);

    this.wechatData = this.props.data.wechat;
  }

  componentDidMount(){
    $(function(){
      Rule.init();
      $("img.lazy").lazyload();
    });
  }

  render() {
    return (
      <div>

        <Wechat {...this.wechatData} />

        <div className="page-love-feed-20181130">
          <img data-original="/src/images/activity/love/feed/bg1.jpg" src="/src/images/lazy-1.png" className="lazy bg" />
          <img data-original="/src/images/activity/love/feed/bg2.jpg" src="/src/images/lazy-1.png" className="lazy bg" />
          <img data-original="/src/images/activity/love/feed/bg3.jpg" src="/src/images/lazy-1.png" className="lazy bg" />
          <img data-original="/src/images/activity/love/feed/bg4.jpg" src="/src/images/lazy-1.png" className="lazy bg" />
          <img data-original="/src/images/activity/love/feed/bg5.jpg" src="/src/images/lazy-1.png" className="lazy bg" />
          <img data-original="/src/images/activity/love/feed/bg6.jpg" src="/src/images/lazy-1.png" className="lazy bg" />
          <img data-original="/src/images/activity/love/feed/bg7.jpg" src="/src/images/lazy-1.png" className="lazy bg" />
          <img data-original="/src/images/activity/love/feed/bg8.jpg" src="/src/images/lazy-1.png" className="lazy bg" />
          <img data-original="/src/images/activity/love/feed/bg9.jpg" src="/src/images/lazy-1.png" className="lazy bg" />
          <img data-original="/src/images/activity/love/feed/bg10.jpg" src="/src/images/lazy-1.png" className="lazy bg" />

          <div className="control">
            <a href="javascript:" className="js_kf"><img src="/src/images/activity/love/feed/button.png" /></a>
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

