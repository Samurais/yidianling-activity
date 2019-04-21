import axios from '../axios';
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

  // 分类
  wapProductCateList(data){
    return axios.post('wap-product/cate-list', data)
    .then(res => this.intercept(res));
  },

  // 列表
	wapDoctorList(data){
    return axios.post('wap-doctor/list', data)
    .then(res => this.intercept(res));
  }
}
