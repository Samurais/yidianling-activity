var options = {
  useEasing : true, 
  useGrouping : true, 
  separator : ',', 
  decimal : '.', 
  prefix : '', 
  suffix : '' 
};
//var demo0 = new CountUp("myTargetElement0", 0, 5, 0, 2.5, options);
//var demo1 = new CountUp("myTargetElement1", 0, 5, 0, 2.5, options);
//var demo2 = new CountUp("myTargetElement2", 0, 5, 0, 2.5, options);
//var demo3 = new CountUp("myTargetElement3", 0, 5, 0, 2.5, options);
//var demo4 = new CountUp("myTargetElement4", 0, 5, 0, 2.5, options);

var numArray = [5,7,3,9,2];
var banner_swiper = new Swiper('.banner-swiper.swiper-container', {
//	simulateTouch: false,
	loop: true,
	autoplay: 3000,
	autoplayDisableOnInteraction: false,
	pagination: '.banner-swiper .swiper-pagination',
	paginationClickable: true,
	onSlideChangeStart: function(swiper){
      	// console.log(swiper.activeIndex);
      	for(i in numArray){
			ids = "myTargetElement"+parseInt(i);;
			demo = new CountUp(ids, 0, numArray[i], 0, 2.5, options);
			demo.start();
		}
	},
	onSlideChangeEnd: function(swiper){
    	// console.log(swiper.activeIndex);
	}
});
function playMovie(obj){//视频播放
	$('.topHead-movie-wrapper').show();
	$('.topHead-movie').attr('src','images/newHeader/'+ obj +'.mp4');
	setTimeout(function(){
		$(".topHead-movie").trigger("play");
	},500);
	$('html,body').attr('style','height: 100%;overflow: hidden;');
	$('.topHead-movie-wrapper').bind("click", function(e) {
		var target = $(e.target);
		if(target.closest($('.topHead-movie')).length == 0) {
			$('html,body').removeAttr('style');
			$('.topHead-movie-wrapper').hide();
			$('.topHead-movie').trigger("pause");
		}
	});
}

var guarantee_swiper = new Swiper('.guarantee-swiper.swiper-container', {
	loop: true,
	autoplay: 3000,
	autoplayDisableOnInteraction: false,
	slideToClickedSlide: true,
	slidesPerView: 3,
	centeredSlides: true
})
//窗口小于1920,保持居中
if($(window).width()!=1920){
	var val = -(1920-$(window).width()) / 2;
	$(".guarantee-swiper").offset({
		"left": val,
	});
}

//监听窗口变小时，guarantee_swiper向左移动，修改left
window.onresize=function(){  
	// console.log($(window).width(), 1920-$(window).width());
	var val = -(1920-$(window).width()) / 2;
	$(".guarantee-swiper").offset({
		"left": val,
	});
}
$('.footer-link>li').hover(function(){
	$(this).addClass('active').siblings().removeClass('active');
})

/*** 
 * toolbar工具条
 * @function toolbarTelShow
 * ***/
toolbarTelShow();
function toolbarTelShow(){
	$("#toolbar .tel").bind("mouseover",function(){
		$(".tel_float").show();
	}).bind("mouseout",function(){
		$(".tel_float").hide();

	})
}