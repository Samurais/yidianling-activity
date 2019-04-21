
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Toast } from 'antd-mobile';
import Rule from '../../../../component/rules';
import Wechat from '../../../../component/wechat';
import Util from '../../../../lib/util';
import qiniu from '../../../../lib/qiniu';
import Api from './api';

// 第一页
import Step1 from './step/step-1';

class Page extends Component {

  constructor(props) {

    super(props);

    this.state = {

    }
  }

  componentDidMount() {

    let _this = this;

    $(function(){

      Rule.init({
        "appId": "m-activity",
        "eventId": "/hd/20190131",
        "eventType": "pv",
        "platform": "wap"
      });

      $(".js_html2img").on("click", function(){

        Util.html2img($(".clone-page-sss"), function(img) {

          let base64data = img.src;

          base64data = base64data.replace(/^.*?base64,/, '');

          Api.getUploadToken().then((res) => {
            let token = res.data.uploadToken;

            qiniu.uploadImg({
              token,
              url: "https://up.qbox.me/putb64/-1",
              base64data,

            }, function(data){

              //let imgUrl = `https://imgqiniu.yidianling.com/${data.key}?imageslim`;

              // $("#aaa").html(`<img src="${imgUrl}" />`);

              // _this.refs.wechat.state.previewImage([`${imgUrl}`]);

            });
          });
        });
      });

    });
  }

  render() {

    return (
      <div className="page-hd-20190131">

        {/* 加载页 */}
        <Step1 />

        <Wechat {...this.props.data.wechat} ref="wechat" />
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
