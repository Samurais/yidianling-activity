import axios from '../axios';
import nodeAxios from '../nodeAxios';

export default {

  // 签到
	userSign(data){
    return axios.post('user/sign', data);
  },

  // test
	test(data){
    return nodeAxios.post('/api/changeToBase64', data);
  },
}
