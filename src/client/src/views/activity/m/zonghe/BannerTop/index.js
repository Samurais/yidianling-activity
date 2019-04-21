
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Page extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    $('.hb-wrap').click(function () {
        let resource = window.location.href;
        window.location.href = 'ydl-user://confide/home';
        if (resource.indexOf("yidianling") !== -1) {
          setTimeout(function() {
          window.location.href = 'https://m.yidianling.com/app';
        }, 3000);
        } else {
          setTimeout(function() {
          window.location.href = 'https://m.ydl.com/app';
        }, 3000);
      }
    });

    $('.close-wrap').click(function(){
      $('.m-jump-banner').hide();
    });
  }

  render() {
    return (
      <div className="m-jump-banner">
        <div className="banner-logo fl">
          <img src="//static.ydlcdn.com/v4/link/img/logo.png" alt="" />
        </div>

        <div className="text fl">
          <span className="top-span">下载壹点灵APP</span>
          <p className="b-p">即享<span>78元大礼包</span></p>
        </div>

        <div className="close-wrap fr">
          <img src="//static.ydlcdn.com/v4/link/img/close.png" alt="" />
        </div>

        <div className="hb-wrap fr">
          <img src="//static.ydlcdn.com/v4/link/img/open.png" alt="" />
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
