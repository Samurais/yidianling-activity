import axios from '../axios';
import { Toast } from 'antd-mobile';

export default {

  intercept(res) {
    if(res.code == 0){
      return Promise.resolve(res);

    } else if (res.code === 1) {

    } else {
      Toast.fail(res.msg);
      return Promise.reject();
    }
  },

  // 登录云信
  loginYX_info(data = {}){
    return axios.get('wap-user/yx-info', {params:data})
      .then(res => this.intercept(res))
  }
}
