import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import API from '../servers/MidAutumn';
import { Toast, Modal } from 'antd-mobile';

import {storage} from '../../../lib/compatible';
import util from '../../../lib/util';

import Wechat from './wechat';

import getGlobal from 'system.global';
// window用global替代
const global = getGlobal();

const $G = global.$G || {};

class Demo extends Component {

  constructor(props) {

    super(props);

    this.formData = {
      phone: "",
      vcode: "",
    }

    this.count = 60;
    this.flag = true;
    this.codeName = "获取验证码";

    this.state = {
      modal: false
    }

    this.couponCodeNo = $G.env != "9" ? "32180917001077" : "32180917760171";
  }

  componentDidMount(){

  }

  tick(e){
    let ele = e.target,
        _this = this;

    if(this.flag) {
      this.flag = false;
      util.tick(_this.count, function(index){

        let i = _this.count - index;
        _this.codeName = i+"s";
        ele.innerHTML = _this.codeName;

        if( i <= 0 ) {
          ele.innerHTML = "重新获取";
          _this.flag = true;
        }
      });

      API.sendChkCode({
        userName: this.formData.phone
      }).then(res => {
      });
    }
  }

  change(e){
    this.formData[e.target.name] = e.target.value;
  }

  showModal(key) {
    this.setState({
      [key]: true,
    });
  }

  onClose(key){
    return () => {
      this.setState({
        [key]: false,
      });
    }
  }

  // 自定义方法
  submit(e){

    let phone = this.formData.phone.trim();
    let vcode = this.formData.vcode.trim();

    const reg = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;

    if(phone == "") {
      Toast.fail("别着急，请先输入手机号", 2);
      return;
    }

    if(!reg.test(phone)) {
      Toast.fail("手机号错误，请重新输入", 2);
      return;
    }

    if(vcode == "") {
      Toast.fail("别着急，请先输入短信验证码", 2);
      return;
    }

    API.phoneRegOrLogin({
      userName: this.formData.phone,
      vcode: this.formData.vcode,
      couponCodeNo: this.couponCodeNo,
    }).then(res => {

      if(res.code == 0)
      this.showModal("modal");

      if(res.code == 2) {
        if($G.browser == "iOS" || $G.browser == "Android") {
          $G.native.userTolistenlistlink();
        } else {
          window.location.href="https://m.yidianling.com/listen";
        }
      }
    });
  }

	render() {
		return (
			<div>
        <Wechat></Wechat>
        <div className="page-festival-MidAutumn-login">
          <div className="title"></div>

          <ul className="login">
            <li>
              <i className="ico-tel"></i>
              <input type="text" name="phone" onChange={this.change.bind(this)} placeholder="请输入手机号码" />
            </li>

            <li>
              <i className="ico-pwd"></i>
              <input type="text" name="vcode" onChange={this.change.bind(this)} placeholder="请输入验证码" />
              <span onClick={this.tick.bind(this)}>{this.codeName}</span>
            </li>
          </ul>

          <div className="control"><a href="javascript:" onClick={this.submit.bind(this)}>确认登录</a></div>
        </div>

        <Modal
          visible={this.state.modal}
          transparent
          maskClosable={true}
          onClose={this.onClose('modal')}
          title="恭喜您，已成功领取优惠资格，立即倾诉吧。"
          footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal')(); } }]}
          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        >
        <div className="modal-festival-midautumn">
          <h1>恭喜您，已成功领取优惠资格，立即倾诉吧。</h1>
          <a href="https://m.yidianling.com/listen">立即倾诉</a>
        </div>
        </Modal>
      </div>
		)
  }
}

export default Demo;
