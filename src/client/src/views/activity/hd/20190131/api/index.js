
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

  // 获取七牛上传凭证
  getUploadToken(data){
    return nodeAxios.post('/api/qiniu/getUploadToken', data)
    .then(res => this.intercept(res));
  },
}
