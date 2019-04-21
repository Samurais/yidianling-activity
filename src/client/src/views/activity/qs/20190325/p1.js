import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import API from './api';
import { Toast, InputItem } from 'antd-mobile';
import { Modal } from 'antd-mobile';
import Rule from '../../../../component/rules';
import Wechat from '../../../../component/wechat';
import Util from '../../../../lib/util';

class Page extends Component {

  constructor(props) {
    super(props)

    this.baseUrl = "/src/images/activity/qs/20190325";

    this.list = [
      {
        "url": `${this.baseUrl}/1@2x.jpg`,
      },
      {
        "url": `${this.baseUrl}/3@2x.jpg`,
      },
      {
        "url": `${this.baseUrl}/4@2x.jpg`,
      },
      {
        "url": `${this.baseUrl}/5@2x.jpg`,
      },
      {
        "url": `${this.baseUrl}/6@2x.jpg`,
      },
      {
        "url": `${this.baseUrl}/7@2x.jpg`,
      },
    ];

    this.state={
      display_name: 'none',
      phone:""
    };

    this.formData = {
      redeemCode: "",
      phone: "",
      code: "",
    };
  }

  componentDidMount(){
    let _this = this;

    let eventId = "/qs/20190325/p1";

    let $body = $("body");

    $(".js-code").on("click", function(){

      if($(".js-code").hasClass('disabled')) return;

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

        $(".js-code").addClass("disabled");

        Util.tick(num, function(i){
          let n = num - i;

          if( n <= 0 ){
            $(".js-code").removeClass('disabled').html("获取验证码");
            return;
          }

          $(".js-code").html(`重新发送(${n}s)`);
        });
      });
    });
    $(window).scrollTop(0);

    $(function(){
      Rule.init({
        "appId": "m-activity",
        eventId,
        "eventType": "pv",
        "platform": "wap"
      });

      $("img.lazy").lazyload();

      $("img.lazy").each(function(){
        let _this = $(this);
        let img = _this.data("original");
        _this.attr("src", img);
      });
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
      meteor.track("form", {convert_id: "1628064423420939"});
      window.location.href = `https://m.yidianling.com/auth/succ/?uid=${res.data.uid}&token=${res.data.accessToken}&target=${"https://m.yidianling.com/listen/"}`;
    });
  }

  render() {
    let {display_name,phone}=this.state;

    return (
      <div className="page-activity-qs-20190225 page-qs-20190325">

        {
          this.list.map( (item, index) =>
            <div className="m-pic-box" key={index}>
              <img src="/src/images/global/pbg.png" data-original={item.url} className="lazy" />
            </div>
          )
        }

        <div className="footer">
          <span className="win_copyright"></span>
          <span className="win_company"></span> <br />
          心理咨询
          <span className="win_copycode"></span>
        </div>

        <div className="m-pic-box m-footer-fixed">
          <a href="javascript:" className="js_tt" ttid="1628064423420939" onClick={this.display_name.bind(this)}>
            <img src={`${this.baseUrl}/btn@2x.png`} />
          </a>
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
                       placeholder="请输入验证码" type="tel" onChange={this.change.bind(this)} name="code"></input>
                <div className="get-code js-code js_hmt_click" data-target="/qs/20190225_getcode">获取验证码</div>
              </div>
              <div className="send-btn2 js_hmt_click" onClick={this.submit.bind(this)} data-target="/qs/20190225_freecall">
                <img src="/src/images/qs/20190225/button2.png" className="lazy"  />
              </div>
            </div>
          </div>
        </div>

        {/* 微信分享 */}
        <Wechat {...this.props.data.wechat}/>
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
