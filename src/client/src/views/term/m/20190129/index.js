
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Toast } from 'antd-mobile';
import Util from '../../../../lib/util';
import Rule from '../../../../component/rules';
import Wechat from '../../../../component/wechat';
import API from './api';

class Page extends Component {

  constructor(props) {

    super(props);

    this.formData = {
      redeemCode: "",
      phone: "",
      code: "",
    }
  }

  // 自定义方法
  change(e){
    this.formData[e.target.name] = e.target.value;
  }

  submit(e){

    let headers = Util.getRequestData("ffrom") || {};
    let bu_ffrom_url = window.location.href;

    API.userLoginSMS({
      "channalId": "",
      "code": this.formData.code.trim(),
      "countryCode": "0086",
      "phoneNumber": this.formData.phone.trim(),
      "type": 0,
      "version": ""
    },{...headers, bu_ffrom_url,}).then(res => {

      window.location.href = `https://m.yidianling.com/auth/succ/?uid=${res.data.uid}&token=${res.data.accessToken}&target=${"https://m.yidianling.com/listen/"}`;

      // window.location.href = `https://m.yidianling.com/listen/?uid=${res.data.uid}&accessToken=${res.data.accessToken}`;
    });
  }

  componentDidMount() {

    let _this = this;
    let $jsCode = $(".js-code");

    Rule.init({
      "appId": "m-activity",
      "eventId": "/m/20190122",
      "eventType": "pv",
      "platform": "wap"
    });

    $(function(){

      $("img.lazy").lazyload();

    });

    $jsCode.bind("click", function(){
      if($jsCode.hasClass('disabled')) return;

      let phone = _this.formData.phone.trim();

      const reg = /^((1[0-9][0-9])|(14[5,7])|(17[0,3,6,7,8])|(19[7]))\d{8}$/;

      if(phone == "") {
        Toast.fail("请输入手机号码", 2);
        return;
      }

      if(!reg.test(phone)) {
        Toast.fail("请输入正确的手机号码", 2);
        return;
      }

      API.userSendLoginSMS({
        phone,
      }).then(res => {
        let num = 60;

        $jsCode.addClass("disabled");

        Util.tick(num, function(i){
          let n = num - i;

          if( n <= 0 ){
            $jsCode.removeClass('disabled').html("获取验证码");
            return;
          }

          $jsCode.html(`重新发送(${n}s)`);
        });
      });
    });
  }

  render() {

    return (
      <div className="page-term-m-20190129">

        {/* 顶部图片 */}
        <div className="top">
          <img src="/src/images/term/m/20190129/top.png" />
        </div>

        {/* 表单 */}
        <div className="form">
          <ul>
            <li>
              <div className="form-item">
                <input className="inp-text" onChange={this.change.bind(this)} name="phone" placeholder="请输入手机号" />
              </div>
            </li>

            <li>
              <div className="form-item">
                <input className="inp-text" onChange={this.change.bind(this)} name="code" placeholder="请输入验证码" />
                <a href="javascript:" className="code js-code">获取验证码</a>
              </div>
            </li>
            <li><a href="javascript:" className="submit" onClick={this.submit.bind(this)}>立即领取</a></li>
          </ul>
        </div>

        {/* 活动规则 */}
        <div className="rule">
          <strong>活动规则</strong>
          <p>1 · 领取成功后将跳转至倾诉页面，选择聆听者即可 倾诉</p>
          <p>2 · 电话倾诉红包有效期至2019年12月31日</p>
          <p>3 · 同一手机号、设备号、身份证号均视为同一用 户，同一活动仅限使用一次</p>
          <p>4 · 本次活动由壹点灵心理组织，如有任何疑问，请 联系壹点灵心理官方客服</p>
        </div>

        {/* copyright */}
        <div className="copyright">
          © 2018杭州袋虎信息技术有限公司<br />
          浙ICP备18004841号-2
        </div>

        <Wechat {...this.props.data.wechat} />
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

export default Page;
