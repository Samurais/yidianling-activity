//import ajax from './ajax';
import axios from './axios';

export default {

  // 获取列表
	dataSupportDataList(data){
    //return return ajax('/data-support/data-push')(data);
    return axios.post('/data-support/data-list', data);
  },

  // 发送弹幕
  dataSupportDataPush(data){
    // return ajax('/data-support/data-push')(data);
    return axios.post('/data-support/data-push', data);
  }
}
