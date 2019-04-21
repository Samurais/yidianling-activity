jQuery(document).ready(function() {
  $('#countdown').countDown({
  targetDate: {
  'day': 9,
  'month': 6,
  'year': 2018,
  'hour': 0,
  'min': 0,
  'sec': 0
  },
  omitWeeks: true
  });
}); 
var timmer,len;
function stepslider()
{
  len = $('.step-content .step-item').length;
  timmer = setInterval(function (){
    intervalFunc()
  }, 3000)
}
function intervalFunc(){
  var index = $('.step-content .active').index('.step-content .step-item');
  index = index < len - 1 ? index + 1 : 0;
  $('.step-content .active').removeClass('active');
  $('.step-content .step-item').eq(index).addClass('active');
  $('.step-wrapper .active').removeClass('active');
  $('.step-wrapper img').eq(index).addClass('active');
  $('.step-tip .active').removeClass('active');
  $('.step-tip .step-tip-wrapper').eq(index).addClass('active');
}
stepslider()
$('.step-content').hover(function(){
  clearInterval(timmer)
},function(){
  timmer = setInterval(function(){
    intervalFunc()
  },3000)
})
$(".step-item").hover(function(){
  clearInterval(timmer)
  var _index = $(this).index()
  $('.step-content .active').removeClass('active');
  $('.step-content .step-item').eq(_index).addClass('active');
  $('.step-wrapper .active').removeClass('active');
  $('.step-wrapper img').eq(_index).addClass('active');
  $('.step-tip .active').removeClass('active');
  $('.step-tip .step-tip-wrapper').eq(_index).addClass('active');
})
var timmer_text;
$(".course-wrapper li").hover(function(){
  var _this = this
  $(this).find(".capital").css({"display":"none"})
  timmer_text = setTimeout(function(){
    $(_this).find(".capital-sub").fadeIn()
    $(_this).find(".btn").fadeIn()
  },250)
},function(){
  var _this = this
  // $(this).find(".capital").css({"color":"#fff","margin-top":"30px"})
  clearTimeout(timmer_text)
  $(this).find(".capital").fadeIn()
  $(this).find(".capital-sub").css("display","none")
  $(this).find(".btn").css("display","none")
  // setTimeout(function(){
  //   $(_this).find(".capital").fadeIn()
  //   $(_this).find(".btn").fadeIn()
  // },300)
})
var prefix = '//static.ydlcdn.com/activity/images/social/'
$(".problems-block").hover(function(){
  var on_src = $(this).find('.unactive').attr('on-src')
  $(this).find('.unactive').attr('src', prefix + on_src + '.png')
},function(){
  var off_src = $(this).find('.unactive').attr('off-src')
  $(this).find('.unactive').attr('src', prefix + off_src + '.png')
})
$(".nav-bar li").click(function(){
  var _target = $(this).attr('data-target')
  var _prefix = '.social-worker-'
  var _top = $(_prefix+_target).offset().top
  $('html, body').animate({scrollTop:_top}, 'slow');
})
function showModal(){
  if($('.iframe-social').css('right') == '0px'){
    return
  }
  $(".iframe-social").animate({'right':'0'})
  setTimeout(function(){
    $(".iframe-close").css('display','block')
  },200)
}
var w_height = $(window).height();
var iframe_top = (w_height - 400) / 2
$(".iframe-social").css('bottom',iframe_top)
$(".iframe-close").css('top',iframe_top)
$(window).resize(function(){
  var w_height = $(window).height();
  var iframe_top = (w_height - 400) / 2
  $(".iframe-social").css('bottom',iframe_top)
  $(".iframe-close").css('top',iframe_top)
})
$(".iframe-close").click(function(){
  $(".iframe-social").animate({'right':'-500px'})
  $(this).css('display','none')
})
function showEwm(){
  $('.modal').css('display','block')
  $('.ewm-center-area').css('display','block')
}
$(".ewm-close").click(function(){
  $('.modal').css('display','none')
  $('.ewm-center-area').css('display','none')
})
$(".modal").click(function(){
  $('.modal').css('display','none')
  $('.ewm-center-area').css('display','none')
})

setTimeout(function(){
    $(".footer-guide").animate({"right":"0"},500,'swing');
},600)
$(".footer-close").click(function(){
    closeDownTip()
    clearTimeout(timmer)
})
$(".footer-thumbnail").click(function(){
    $(".footer-guide").css('display','block')
    $(".footer-thumbnail").animate({"right":"-48px"},200,'swing');
    setTimeout(function(){
        $(".footer-guide").animate({"right":"0"},500,'swing');
    },200)
})
var timmer = setTimeout(function(){
    closeDownTip()
},6600)

function closeDownTip() {
    $(".footer-guide").animate({"right":"-100%"},500,'swing');
    setTimeout(function(){
        $(".footer-guide").css('display','none')
    },550);
    setTimeout(function(){
      $(".footer-thumbnail").animate({"right":"0"},200,'swing');
    },500)
}
