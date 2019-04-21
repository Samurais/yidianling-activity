$(function () {

  var countdown = 60;
  var appointmentHtml = '<h3>立即预约专家咨询</h3>\n' +
      '\t\t\t\t\t<ul>\n' +
      //'\t\t\t\t\t\t<li><label class="appointment_specialist_title form_name" title="姓名" for="name"></label>\n' +
      //'\t\t\t\t\t\t\t<input id="name" class="appointment_specialist_input" placeholder="输入姓名" />\n' +
      '\t\t\t\t\t\t</li>\n' +
      '\t\t\t\t\t\t<li><label class="appointment_specialist_title form_tel" title="手机号码" for="tel"></label>\n' +
      '\t\t\t\t\t\t\t<input type="tel" id="tel" class="appointment_specialist_input" placeholder="输入手机号码" maxlength="11" />\n' +
      '\t\t\t\t\t\t\t<button class="send_code">发送验证码</button>\n' +
      '\t\t\t\t\t\t</li>\n' +
      '\t\t\t\t\t\t<li><label class="appointment_specialist_title form_code" title="验证码" for="verificationCode"></label>\n' +
      '\t\t\t\t\t\t\t<input type="text" id="verificationCode" class="appointment_specialist_input" placeholder="输入4位短信验证码" maxlength="4" max="9999" min="1000" />\n' +
      '\t\t\t\t\t\t</li>\n' +
      '\t\t\t\t\t</ul>\n' +
      '\t\t\t\t\t<input type="submit" id="submitBtn" class="appointment_submit" value="立即预约">';
  $('#appointmentSpecialist').html(appointmentHtml);
  /***
   * 倒计时
   * @function setTime
   * ***/
  function setTime(val) {
    if (countdown == 0) {
      val.attr("disabled", false);
      val.html("发送验证码");
      val.removeClass('send_code_disabled');
      countdown = 60;
    } else {
      val.attr("disabled", true);
      val.html('(' + countdown + '）秒后重发');
      val.addClass('send_code_disabled');
      countdown--;
      setTimeout(function () {
        setTime(val)
      }, 1000)
    }
  }

  $('.appointment_specialist_input').focus(function () {
    var $t = $(this);
    $t.closest('li').addClass('focus');
  }).blur(function () {
    var $t = $(this);
    $t.closest('li').removeClass('focus');
  });
  $(".send_code").click(function () {
    var $t = $(this);
    var phone = $('#tel').val();
    if( phone ){
      setTime($t);
    }

    $.ajax({
      type : "get",
      async:false,
      url : "https://m.yidianling.com/user/send-auth-code",
      data: {phone:phone},
      dataType : "jsonp",
      jsonp: "callback",
      success : function(data){
        $.toast(data.msg, "text");
      }
    });
  })


  ///***
  // * 检验姓名
  // * @function checkUserName
  // * ***/
  //function checkUserName() {
  //  var name = $("#name").val();
  //  if (name.length) {
  //    return true;
  //  } else {
  //    $.toast("姓名不能为空", "text");
  //    return false;
  //  }
  //}

  /***
   * 检验手机号
   * @function checkTel
   * ***/
  function checkTel() {
    var tel = $("#tel").val();
    var pattern = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
    if (pattern.test(tel)) {
      return true;
    } else {
      $.toast("请填写正确的手机号码", "text");
      return false;
    }
  }


  /***
   * 检验验证码
   * @function checkCode
   * ***/
  function checkCode() {
    var verificationCode = $("#verificationCode").val();
    if (verificationCode.length===4) {
      return true;
    } else {
      $.toast("验证码为4位数字", "text");
      return false;
    }
  }

  //$("#name").blur(function () {
  //  checkUserName()
  //})
  $("#tel").blur(function () {
    checkTel()
  })
  $("#verificationCode").blur(function () {
    checkCode()
  })
  $("#submitBtn").click(function () {
    if (checkTel()&&checkCode()) {
      var nickname = $('#name').val();
      var phone = $('#tel').val();
      var vcode = $('#verificationCode').val();

      $.ajax({
        type : "get",
        async:false,
        url : "https://m.yidianling.com/user/reg-phone",
        data: {nickname:nickname, phone:phone, vcode:vcode, ffrom:'baidu-xxlgd-a'},
        dataType : "jsonp",
        jsonp: "callback",
        success : function(data){
          $.toast(data.msg, "text");
        }
      });
    }
  })

})
