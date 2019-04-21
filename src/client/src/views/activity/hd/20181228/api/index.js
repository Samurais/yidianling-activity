import axios from '../../../servers/dataAxios';
import nodeAxios from '../../../servers/nodeAxios';
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

  // 获取专家年度信息
	ziyingDoctorWholeYearPerformance(data){
    return axios.post('ziying/doctor/wholeYearPerformance', data)
    .then(res => this.intercept(res));
  },

  // 获取专家年度信息
  getExpertCount(data){
    return nodeAxios.post('/api/getExpertCount', data)
    .then(res => this.intercept(res));
  },

  // 设置专家年度信息
  setExpertCount(data){
    return nodeAxios.post('/api/setExpertCount', data)
    .then(res => this.intercept(res));
  },

  // 获取数据
  getExpertTotalCount(data){
    return nodeAxios.post('/api/getExpertTotalCount', data)
    .then(res => this.intercept(res));
  },
}
