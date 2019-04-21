import axios from './axios';
import { Toast } from 'antd-mobile';

export default {

  intercept(res) {
    if(res.code == 0 || res.code == 200){
      return Promise.resolve(res);

    } else if (res.code == 1) {

    } else {
      Toast.fail(res.msg);
      return Promise.reject();
    }
  },

  // 进入记录
  getPvUvStats(data = {}){

    return axios.post('/PvUvStats/getPvUvStats', data)
      .then(res => this.intercept(res))
  },

  // 点击记录
  getClickNum(data = {}){

    return axios.post('/PvUvStats/getClickNum', data)
      .then(res => this.intercept(res))
  },

  // 统一埋点
  getMaidianData(data = {}){

    return axios.post('/PvUvStats/getMaidianData', data)
      .then(res => this.intercept(res))
  },
}
