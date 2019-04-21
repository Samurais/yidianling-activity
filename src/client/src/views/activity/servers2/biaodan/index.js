import axios from '../axios';
import { Toast } from 'antd-mobile';

export default {

  intercept(res) {
    console.log(res)
    if(res.code == 0){
      console.log(res)
      return Promise.resolve(res);
    } else {
      Toast.fail(res.msg);
      return Promise.reject();
    }
  },

  // 电话号码验证
	webUserFloorPage(data){
    return axios.post('web-user/floor-page', data)
    .then(res => this.intercept(res));
  },
}
