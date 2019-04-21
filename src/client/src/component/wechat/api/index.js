import axios from '../../../servers/axios';
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

  // 获取配置信息
	getWechatConfig(data){
    return axios.post('course-api/wx-share', data)
    .then(res => this.intercept(res));
  },
}
