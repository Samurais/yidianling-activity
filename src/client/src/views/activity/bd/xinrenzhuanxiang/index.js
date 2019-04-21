import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Toast } from 'antd-mobile';
import Util from '../../../../lib/util';
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

    API.userLoginSMS({
      "channalId": "",
      "code": this.formData.code.trim(),
      "countryCode": "0086",
      "phoneNumber": this.formData.phone.trim(),
      "type": 0,
      "version": ""
    }).then(res => {


    });
  }

  componentDidMount() {
    let _this = this;
    let $jsCode = $(".js-code");

    $jsCode.bind("click", function(){
      if($jsCode.hasClass('disabled')) return;

      let phone = _this.formData.phone.trim();

      const reg = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;

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
      <div>
        <div className="page-bd-xinrenzhuanxiang">

          {/* 顶部图片 */}
          <div className="top">
            <img src="/src/images/activity/bd/xinrenzhuanxiang/top.jpeg" />
          </div>

          {/* 表单 */}
          <div className="form">
            <ul>
              <li><input className="inp-text" onChange={this.change.bind(this)} name="phone" placeholder="请输入手机号" /></li>
              <li><input className="inp-text" onChange={this.change.bind(this)} name="redeemCode" placeholder="兑换码" /></li>
              <li>
                <input className="inp-text" onChange={this.change.bind(this)} name="code" placeholder="请输入验证码" />
                <a href="javascript:" className="code js-code">获取验证码</a>
              </li>
              <li><a href="javascript:" className="submit" onClick={this.submit.bind(this)}>立即领取</a></li>
            </ul>
          </div>

          {/* 活动规则 */}
          <div className="rule">
            <strong>活动规则：</strong>
            <p>1. 每个人可领取两个红包，总价值100元</p>
            <p>2. 本红包仅限于壹点灵电话倾述业务使用</p>
            <p>3. 一个账号最多只能领取一次</p>
            <p>4. 红包有效期至2019.10.18</p>
            <p>5. 领取成功后可至页面顶部会员中心-红包里查询红包相关信息</p>
          </div>

          {/* copyright */}
          <div className="copyright">
            © 2018杭州袋虎信息技术有限公司<br />
            浙ICP备18004841号-2
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

export default Page;
