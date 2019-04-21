import axios from '../axios';

export default {

  // 签到
	userSign(data){
    return axios.post('user/sign', data);
  },
}
