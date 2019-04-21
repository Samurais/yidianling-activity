import deploy from 'conf/config/config.js';

const ajax = (url) => (data) => {

  const defer = $.Deferred();

  $.ajax({
    url:deploy.qixiServer+url,
    type:'post',
    dataType : "json",
    data:data,

  }).done(function(res) {
    defer.resolve(res);

  }).fail(function(e) {
		defer.reject(e);
  });

  return defer.promise();
}

export default ajax;
