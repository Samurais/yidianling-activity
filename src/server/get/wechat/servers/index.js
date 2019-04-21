const request = require('request');
const defRequestHeader = require('m.config').requestHeader;

const get = (url) => (data = {}) => {

  let params = Object.keys(data).map(function (key) {
    return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
  }).join("&");

  return new Promise((resolve, reject) => {
    request(url+"?"+params, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        resolve(body);
      } else {
        reject(error);
      }
    });
  });
}

const post = (url) => (data = {}) => {

  let requestHeader = Object.assign({}, defRequestHeader);
      requestHeader.url = url;

  return new Promise((resolve, reject) => {

    request.post(requestHeader, function(error, response, body){
      if(!error) {
        resolve(body);
      } else {
        reject(error);
      }
    }).json(data);
  });
}

module.exports = {
  get,
  post,
};
