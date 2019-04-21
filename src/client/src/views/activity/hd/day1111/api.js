import axios from '../../../../servers/axios';
import { Toast } from 'antd-mobile';

export default {

  intercept(res) {
    if(res.code == 0){
      return Promise.resolve(res);
    } else {
      Toast.fail(res.msg);
      return Promise.reject();
    }
  },

  // 电话号码验证
	courseApiDoubleEleven(data){
    return axios.post('course-api/double-eleven', data)
    .then(res => this.intercept(res));
  },
}
