
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

      window.location.href = "https://l.yidianling.com/p/q/cjjl2019";
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
      <div className="page-term-m-20190122">

        {/* 顶部图片 */}
        <div className="top">
          <img src="/src/images/term/m/20190122/top.png" />
        </div>

        {/* 表单 */}
        <div className="form">
          <ul>
            <li><input className="inp-text" onChange={this.change.bind(this)} name="redeemCode" placeholder="兑换码" /></li>
            <li><input className="inp-text" onChange={this.change.bind(this)} name="phone" placeholder="请输入手机号" /></li>
            <li>
              <input className="inp-text" onChange={this.change.bind(this)} name="code" placeholder="请输入验证码" />
              <a href="javascript:" className="code js-code">获取验证码</a>
            </li>
            <li><a href="javascript:" className="submit" onClick={this.submit.bind(this)}>立即领取</a></li>
          </ul>
        </div>

        {/* 活动规则 */}
        <div className="rule">
          <strong>活动规则</strong>
          <p>1 · 活动时间：2019.1.22至2019.2.4</p>
          <p>2 · 请输入客服发给您的兑换码，验证手机号领取春节焦虑治愈权益包</p>
          <p>3 · 领取成功后跳转至活动页面，查看相关权益</p>
          <p>4 · 权益包共包括50元壹点灵电话倾诉红包（可用于拨打一次25分钟的倾诉电话）、2套春节焦虑相关课程、4个专业心理测试。</p>
          <p>5 · 电话倾诉红包有效期至2019年12月31日</p>
          <p>6 · 同一支付账户、身份证、手机号、设备号均视为同一用户，同一活动仅限使用一次</p>
          <p>7 · 本次活动由壹点灵心理组织，如有任何疑问，请联系壹点灵心理官方客服</p>
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
