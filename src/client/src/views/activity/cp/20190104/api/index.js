
import axios from '../../../servers/axios';
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

  // banner
  getCpsBanner(data = {}){

    return axios.get('/test-item/cps/banner', {params:data})
      .then(res => this.intercept(res))
  },
  // 分类
  getCpscategory(data = {}){

    return axios.get('/test-tag/all', {params:data})
      .then(res => this.intercept(res))
  },
  // 列表
  getCpsList(data = {}){

    return axios.get('/test-item/list-by-tag', {params:data})
      .then(res => this.intercept(res))
  },
  // 关键字搜索
  getCpsSearch(data = {}){

    return axios.get('/test-item/search', {params:data})
      .then(res => this.intercept(res))
  },

  // // 获取七牛上传凭证
  // getUploadToken(data){
  //   return axios.post('/api/qiniu/getUploadToken', data)
  //   .then(res => this.intercept(res));
  // },
}
