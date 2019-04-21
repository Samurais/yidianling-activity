//点击显示导航栏
$('.header-menu').click(function(){
	$('.menu-wrap').slideToggle();
	$('.header').toggleClass('pFixed');
	$('html,body').attr('style','height: 100%;overflow: hidden;');
	//点击空白的地方消失
	$('.menu-wrap').bind("click", function(e) {
		var target = $(e.target);
		if(target.closest($('.menu')).length == 0) {
			$('html,body').removeAttr('style');
			$('.menu-wrap').hide();
			$('.header').removeClass('pFixed');//头部移除pFixed样式
		}
	});
})
//banner随机数
var options = {
  useEasing : true, 
  useGrouping : true, 
  separator : ',', 
  decimal : '.', 
  prefix : '', 
  suffix : '' 
};
var numArray = [5,7,3,9,2];
var ids,demo;
$(function(){
	for(i in numArray){
		ids = "myTargetElement"+parseInt(i);console.log(ids);
		demo = new CountUp(ids, 0, numArray[i], 0, 2.5, options);
		demo.start();
	}
})
//$(window).scroll(function(){
//	
//})

var save_num = new Swiper('.save-num .swiper-container', {
	loop: true,
	autoplay: 2000,
	slidesPerView: 'auto',
	noSwiping : true,
	noSwipingClass : 'swiper-slide',
})

var media_swiper = new Swiper('.media .swiper-container',{
	loop: true,
//	loopAdditionalSlides : 1,
	autoplay: 3000,
	autoplayDisableOnInteraction: false,
	slidesPerView : 2,
	slidesPerColumn : 2,
	slidesPerColumnFill : 'row',
	spaceBetween : 10,
	pagination: '.media .swiper-pagination',
	paginationClickable :true,
	slidesPerGroup : 4,
})

var guarantee_swiper = new Swiper('.guarantee-swiper.swiper-container', {
	loop: true,
	autoplay: 3000,
	autoplayDisableOnInteraction: false,
	slidesPerView: 'auto',
	pagination: '.guarantee .swiper-pagination',
	paginationClickable :true,
	lazyLoading: true
})