//阻止横屏
//window.addEventListener("orientationchange", function() {
//	//	alert(window.orientation);
//	return false;
//}, false);
$(function() {
	$("#LRdiv0").click(function() { //隐藏气泡，30分钟以后再出现
		$("footer").removeClass('bubble');
		setTimeout(function() {
			$("footer").addClass('bubble');
		}, 1800000);
	})
	$("img.lazy").lazyload({
    threshold : 200
  }); //懒加载class="lazy" data-original


// 底部信息配置
var win_company, win_copyright, win_copycode;
// 杭州袋虎信息技术有限公司
if(window.location.href.split("?")[0].indexOf("ydl.com") >= 0){
  win_company = "杭州袋虎信息技术有限公司";
  win_copyright = "Copyright © 2015 - 2019";
  win_copycode = "浙ICP备18004841号-2";
}

// 上海袋虎信息技术有限公司
if(window.location.href.split("?")[0].indexOf("yidianling.com") >= 0){
  win_company = "上海袋虎信息技术有限公司";
  win_copyright = "Copyright © 2015 - 2019";
  win_copycode = "沪ICP备15037258号";
}

$(".win_company").html(win_company);
$(".win_copyright").html(win_copyright);
$(".win_copycode").html(win_copycode);
})
//判断滚动，顶部浮动添加白色背景
$(window).scroll(function() {
	if($(window).scrollTop() == 0) {
		$('.logo').removeAttr('style')
	} else {
		$('.logo').attr('style', 'background-color: white;border-bottom: solid 1px #F0F0F0;')
	}
});
//判断滚动，顶部浮动添加白色背景(改版为天猫背书图标)
$(window).scroll(function() {
	if($(window).scrollTop() == 0) {
		$('.new-logo').removeAttr('style')
	} else {
		$('.new-logo').attr('style', 'background-color: white;border-bottom: solid 1px #F0F0F0;')
	}
});
//判断滚动，顶部浮动添加白色背景(改版为天猫背书图标)
$(window).scroll(function() {
	if($(window).scrollTop() == 0) {
		// $('.new-logo').removeAttr('style')
		$('.new-top-2').show();
		$('.new-top-1').hide();
	} else {
		$('.new-top-2').hide();
		$('.new-top-1').show();
		// $('.new-logo').attr('style', 'background-color: white;border-bottom: solid 1px #F0F0F0;')
	}
});
//阻止ios10以上双击放大
window.onload = function() {
	document.addEventListener('touchstart', function(event) {
		if(event.touches.length > 1) {
			event.preventDefault();
		}
	})
	var lastTouchEnd = 0;
	document.addEventListener('touchend', function(event) {
		var now = (new Date()).getTime();
		if(now - lastTouchEnd <= 300) {
			event.preventDefault();
		}
		lastTouchEnd = now;
	}, false)
}
//客户留言，轮播
var speech_swiper = new Swiper('.speech_swiper .swiper-container', {
	autoplay: 5000,
	pagination: '.speech_swiper .swiper-pagination',
	paginationType: 'bullets',
	slidesPerView: 'auto',
	autoplayDisableOnInteraction: false,
	lazyLoading: true,
	centeredSlides: true,
})
//专家列表，轮播
var experts_swiper = new Swiper('.experts_swiper .swiper-container', {
	autoplay: 5000,
	loop: true,
	pagination: '.experts_swiper .swiper-pagination',
	paginationType: 'bullets',
	slidesPerView: 'auto',
	autoplayDisableOnInteraction: false,
	lazyLoading: true,
	centeredSlides: true,
})
//关于我们，轮播
var about_swiper = new Swiper('.about_swiper .swiper-container', {
	autoplay: 5000,
	spaceBetween: 20,
	pagination: '.about_swiper .swiper-pagination',
	paginationType: 'bullets',
	slidesPerView: 'auto',
	autoplayDisableOnInteraction: false,
	lazyLoading: true,
	centeredSlides: true,
	initialSlide: 3,
})
//邀请弹窗
var timer = setTimeout(function() {
	$('#dialog').css('display', 'block');
	clearTimeout(timer);
}, 60000);

setTimeout(function() {
	$('#dialog').css('display', 'none');
}, 65000)
$("#dialog .cancel-icon").click(function() {
	$("#dialog").hide();
})
/******************2017-12-15关于我们*****************/
$('.tabs>a').bind('click', function() {
	$(this).addClass('on').siblings('a').removeClass();
})
//领导关怀，轮播
var care_swiper = new Swiper('.care_swiper .swiper-container', {
	autoplay: 5000,
	spaceBetween: 20,
	pagination: '.care_swiper .swiper-pagination',
	paginationType: 'bullets',
	slidesPerView: 'auto',
	autoplayDisableOnInteraction: false,
	lazyLoading: true,
	centeredSlides: true,
})
//企业荣誉，轮播
var honor_swiper = new Swiper('.honor_swiper .swiper-container', {
	autoplay: 5000,
	pagination: '.honor_swiper .swiper-pagination',
	paginationType: 'bullets',
	slidesPerView: 'auto',
	autoplayDisableOnInteraction: false,
	lazyLoading: true,
	centeredSlides: true,
})
/***************2018-01-29挽回爱情改版***************/
var case_swiper = new Swiper('.case-swiper .swiper-container', {
	autoplay: 5000,
	autoplayDisableOnInteraction: false,
	loop: true,
	pagination: '.case-swiper .swiper-pagination',
	paginationClickable: true,
	paginationType: 'bullets',
	centeredSlides: true,
	slidesPerView: 'auto',
	//	spaceBetween : 20,
	initialSlide: 1,
	slideToClickedSlide: true,
})
$('.case-swiper .swiper-slide').click(function() {
	$('.case-mask').addClass('case-mask-wrapper');
	$('html,body').attr('style', 'height: 100%;overflow: hidden;');
	case_swiper.onResize();
	case_swiper.lockSwipes();
	//点击空白的地方消失
	$('.case-mask-wrapper').bind("click", function(e) {
		var target = $(e.target);
		if(target.closest($('.case-swiper .swiper-slide')).length == 0) {
			$('html,body').removeAttr('style');
			$('.case-mask').removeClass('case-mask-wrapper');
			case_swiper.unlockSwipes();
			case_swiper.onResize();
		}
	});
})
//$('.case-mask-close').click(function(){
//	$('.case-mask').removeClass('case-mask-wrapper');
//	case_swiper.unlockSwipes();
//	case_swiper.onResize();
//})

//
var question_swiper = new Swiper('.question .swiper-container', {
	autoplay: 5000,
	autoplayDisableOnInteraction: false,
	loop: true,
	pagination: '.question .swiper-pagination',
	paginationClickable: true,
	paginationType: 'bullets',
	centeredSlides: true,
	slidesPerView: 'auto',
	//	spaceBetween : 20,
	initialSlide: 1,
	slideToClickedSlide: true,
})

var resolve_swiper = new Swiper('.resolve .swiper-container', {
	autoplay: 5000,
	autoplayDisableOnInteraction: false,
	loop: true,
	pagination: '.resolve .swiper-pagination',
	paginationClickable: true,
	paginationType: 'bullets',
	centeredSlides: true,
	slidesPerView: 'auto',
	//	spaceBetween : 20,
	initialSlide: 1,
	slideToClickedSlide: true,
})

