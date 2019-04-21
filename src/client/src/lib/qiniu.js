
import axios from 'axios';

export default {

  uploadImg(data, callback){

    const xhr = axios.create({
      baseURL: "",
      timeout: 30000,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/octet-stream',
        'Authorization': 'UpToken ' + data.token,
      },
      validateStatus: status => status === 200,
    });

    xhr.post(data.url, data.base64data).then((res) => {
      typeof callback === "function" && callback(res.data);
    });
  }
}
