import axios from '../../axios';
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

  // 获取消息数
  userUnReadMessages(data = {}){

    return axios.get('/user/unReadMessages', {params:data})
      .then(res => this.intercept(res))
  },

  // 走马灯
  userRecentEvent(data = {}){

    return axios.get('/user/recentEvent', {params:data})
      .then(res => this.intercept(res))
  },

  // 获取咨询理解
  doctorSearch(data = {}){

    return axios.get('/doctor/search', {params:data})
      .then(res => this.intercept(res))
  },
}
