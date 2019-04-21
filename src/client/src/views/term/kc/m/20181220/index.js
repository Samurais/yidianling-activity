
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rule from '../../../../../component/rules';

import Wechat from '../../../../../component/wechat';
import Native from '../../../../../component/native';
import Img from './component/Img';
class Page extends Component {

  constructor(props) {

    super(props);

  }

  componentDidMount() {
    Rule.init({
      "appId": "m-activity",
      "eventId": "/kc/m/20181220",
      "eventType": "pv",
      "platform": "wap"
    });

    //console.log(this.props)

    $(function(){
      $("img.lazy").lazyload();

      setTimeout(()=>{
        $("img.lazy").each(function(){
          let _this = $(this);
          let img = _this.data("original");

          _this.attr("src", img);
        });
      },300)
    });
  }

  render() {

    return (
      <div>
        <Wechat {...this.props.data.wechat} />
        <Native />
        <div className="page-term-kc-m-20181220">
          {/* 标签 */}
          <Img />
          {/* 色块*/}
          <div className="bottom-color"></div>
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
