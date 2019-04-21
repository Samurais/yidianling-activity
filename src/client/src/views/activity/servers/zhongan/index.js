import {Toast} from 'antd-mobile';
import axios from '../axios';

export default {
  convert(data) {
    let dataNew = {};
    if (data.code === '200') {
      dataNew = Object.assign([], data.data);
      return dataNew;
    }
    Toast.fail(data.msg, 5);
    history.go(-1);
    return false;
  },
  // 登陆众安
  loginZhongan(data) {
    return axios.post('user/login_zhongan', data)
      .then(data => this.convert(data));
  }


}
