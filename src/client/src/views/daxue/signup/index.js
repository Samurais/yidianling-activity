import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import API from '../servers/signup';
import { Toast, InputItem } from 'antd-mobile';

import {storage} from '../../../lib/compatible';

String.prototype.trim=function(){
  return this.replace(/(^\s*)|(\s*$)/g, "");
}

class Demo extends Component {

  constructor(props) {

    super(props)

    this.formData = {
      userName: storage.getItem("daxueSignup_name") || "",
      phone: storage.getItem("daxueSignup_phone") || "",
      bizType: 1,
      identity: 2
    }

    this.value = "";
  }

  // 页面渲染完毕后执行，可以操作DOM
  componentDidMount(){}

  // 自定义方法
  change(e){
    this.formData[e.target.name] = e.target.value;
  }

  // 自定义方法
  submit(e){

    let name = this.formData.userName.trim();
    let phone = this.formData.phone.trim();

    if(name == "") {
      Toast.fail("请输入姓名", 2);
      return;
    }

    const reg = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;

    if(phone == "") {
      Toast.fail("请输入手机号码", 2);
      return;
    }

    if(!reg.test(phone)) {
      Toast.fail("请输入正确的手机号码", 2);
      return;
    }

    storage.setItem("daxueSignup_name", name);
    storage.setItem("daxueSignup_phone", phone);

    API.userSign({
      ...this.formData
    }).then(res => {
      Toast.success(res.msg, 2);
    });
  }

  // 执行渲染
	render() {
		return (
			<div>
        <div className="page-daxue-signup">

          <div className="title"><span>1</span></div>

          <div className="form">
            <ul>
              <li className="name">
                <i></i>
                <input type="text" defaultValue={this.formData.userName} onChange={this.change.bind(this)} name="userName" placeholder="请输入您的姓名" />
              </li>

              <li className="phone">
                <i></i>
                <input type="tel" defaultValue={this.formData.phone} onChange={this.change.bind(this)} name="phone" placeholder="请输入您的手机号" />
              </li>
            </ul>
            <div className="control"><a href="javascript:" className="submit" onClick={this.submit.bind(this)}>立即签到</a></div>
          </div>

          <div className="footer">
            <p>时间：2018年9月7日-9月9日</p>
            <p>地点：杭州滨江区阡陌路482号智慧e谷</p>
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
};

Demo = connect(mapStateToProps)(Demo);

export default Demo;

Demo.propTypes = {
  data: PropTypes.string
};
