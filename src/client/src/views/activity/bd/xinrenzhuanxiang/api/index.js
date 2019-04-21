import axios from '../../../servers/axios';
import { Toast } from 'antd-mobile';

export default {

  intercept(res) {
    if(res.code == 0 || res.code == 200){
      return Promise.resolve(res);
    } else {
      Toast.fail(res.msg);
      return Promise.reject();
    }
  },

  getParams(data){
    return Object.keys(data).map(function (key) {
      return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
    }).join("&");
  },

  // 领取
	userLoginSMS(data){
    return axios.post('user/login_sms', data)
    .then(res => this.intercept(res));
  },

  // 获取短信验证码
	userSendLoginSMS(data){

    let params = this.getParams(data);

    return axios.get('user/send_login_sms?'+params)
    .then(res => this.intercept(res));
  },
}
