import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Modal} from 'antd-mobile';
import {getRequestData} from '../../../../component/semComponent/util';
import API from '../../servers/zhongan';
const Alert = Modal.alert;

class Page extends Component {

  constructor(props) {

    super(props);

    this.formData = {
      redeemCode: "",
      phone: "",
      code: "",
    }
  }


  componentWillMount() {

  }

  // 自定义方法
  change(e) {
    this.formData[e.target.name] = e.target.value;
  }


  componentDidMount() {
    const urlData = getRequestData(window.location.href);
    if (urlData.phone && urlData.sign) {
      const postData = {};
      postData.phone = urlData.phone;
      postData.sign = urlData.sign;

      API.loginZhongan(postData).then(res => {
        this.setCookie('uid', res.uid)
        this.setCookie('accessToken', res.accessToken)

        window.location.href = `https://m.ydl.com/listen?uid=${res.uid}&accessToken=${res.accessToken}`
      })
    }
    else{
      // alert(1)
      Alert('缺少参数?', [
        { text: 'Ok', onPress: () => console.log('ok') }
      ])
    }
  }

  setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
  }

  render() {

    return (
      <div>11

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
