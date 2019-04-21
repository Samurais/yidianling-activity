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

  // 专家年终活动落地页：分页获取专家列表
  activity(data){
    return axios.post('product/activity', data)
    .then(res => this.intercept(res));
  },
}
