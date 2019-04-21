import React, {Component} from 'react';
import { Modal,Toast } from 'antd-mobile';
import Util from '../../../../../../../../lib/util';
import API from "../../../../20190130/api";

class Mod extends Component {

  constructor(props) {
    super(props);

    this.state={
      display_name: 'none',
      phone:""
    };
    this.formData = {
      redeemCode: "",
      phone: "",
      code: "",
    };

    this.button="/src/images/qs/20190225/button.png";
  }

  componentDidMount() {
    let _this = this;
    let $body = $("body");
    // $body .on("click",".js-code", function(){
      $(".js-code").on("click", function(){
      console.log(11);
      if ($(".js-code").hasClass('disabled')) return;

      let phone = _this.formData.phone.trim();

      const reg = /^((1[0-9][0-9])|(14[5,7])|(17[0,3,6,7,8])|(19[7]))\d{8}$/;

      if (phone == "") {
        Toast.fail("请输入手机号码", 2);
        return;
      }

      if (!reg.test(phone)) {
        Toast.fail("请输入正确的手机号码", 2);
        return;
      }

      API.userSendLoginSMS({
        phone,
      }).then(res => {
        let num = 60;

        $(".js-code").addClass("disabled");

        Util.tick(num, function (i) {
          let n = num - i;

          if (n <= 0) {
            $(".js-code").removeClass('disabled').html("获取验证码");
            return;
          }

          $(".js-code").html(`重新发送(${n}s)`);
        });
      });
    });

    $("form-box").click(function(event) {
      event.stopPropagation();
    });
  }
  change(e){
    this.formData[e.target.name] = e.target.value;
  }

  submit(e){
    let phone = this.formData.phone.trim();
    let code = this.formData.code.trim();
    const reg = /^((1[0-9][0-9])|(14[5,7])|(17[0,3,6,7,8])|(19[7]))\d{8}$/;
    let headers = Util.getRequestData("ffrom") || {};
    if(phone == "") {
      Toast.fail("请输入手机号码", 2);
      return;
    }
    if(!reg.test(phone)) {
      Toast.fail("请输入正确的手机号码", 2);
      return;
    }
    if(code == ""){
      Toast.fail("请输入验证码", 2);
      return;
    }
    let bu_ffrom_url = window.location.href;
    API.userLoginSMS({
      "channalId": "",
      "code": this.formData.code.trim(),
      "countryCode": "0086",
      "phoneNumber": this.formData.phone.trim(),
      "type": 0,
      "version": ""
    },{...headers, bu_ffrom_url,}).then(res => {

      let url = Util.getDomain();

      window.location.href = `${url}/auth/succ/?uid=${res.data.uid}&token=${res.data.accessToken}&target=${url}/listen/`;
    });
  }

  display_name() { //编辑按钮的单击事件，修改状态机display_name的取值
    if (this.state.display_name == 'none') {
      this.setState({
        display_name: 'block',
      })
    }
    else if (this.state.display_name == 'block') {
      this.setState({
        display_name: 'none',
      })
    }
  }

  render() {
    let {display_name,phone}=this.state;
    return (
      <div>
      <div className='bottom-none'></div>
      <div className='bottom' onClick={this.display_name.bind(this)}>
      <img data-original={this.button} src={this.defImg} className="lazy"/>
      </div>
      <div className="tanchuang" style={{display: this.state.display_name }}>
        <div className="mask" onClick={this.display_name.bind(this)}></div>
        <div className="form-box">
          <div className='wrap'>
            <div className="input-box">
              <input className="input1"
                     placeholder="请输入手机号" type="tel" onChange={this.change.bind(this)} defaultValue={phone} name="phone" autoFocus></input>
            </div>
            <div className="input-box">
              <input className="input2"
                     placeholder="请输入验证码" type="text" onChange={this.change.bind(this)} name="code"></input>
              <div className="get-code js-code js_hmt_click" data-target="/qs/20190225_getcode">获取验证码</div>
            </div>
            <div className="send-btn js_hmt_click" onClick={this.submit.bind(this)} data-target="/qs/20190225_freecall">免费拨打解忧电话</div>
          </div>
        </div>
      </div>
      </div>


    )
  }

}

export default Mod;
