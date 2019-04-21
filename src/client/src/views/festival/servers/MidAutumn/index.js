import axios from '../axios';
import { Toast } from 'antd-mobile';

export default {

  intercept(data) {

    if(data.code != 0) {
      Toast.fail(data.msg);
    }

    return data;
  },

  // 获取验证码
	sendChkCode(data){
    return axios.post('/web-user/send-chk-code', data)
    .then(data => this.intercept(data));
  },

  // 登录
	phoneRegOrLogin(data){
    return axios.post('web-user/phone-reg-or-login', data)
    .then(data => this.intercept(data));
  },

  // 微信
	wechatConfig(data){
    return axios.post('web-config/wx', data)
    .then(data => this.intercept(data));
  },
}
