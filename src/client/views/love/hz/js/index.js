$(function () {
  //客户留言，轮播
  var serice_center_swiper = new Swiper('.serice_center_swiper .swiper-container', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      waitForTransition: false,
    },
    speed:2500,
    loop:true,
    slidesPerView: 'auto',
    autoplayDisableOnInteraction: false,
    waitForTransition: false,
    lazyLoading: true,
    centeredSlides: true,
  })



 
  var top_servers_swiper = new Swiper('.top_servers_swiper .swiper-container', {
    autoplay: 5000,
    loop:true,
    pagination: '.top_servers_swiper .swiper-pagination',
    paginationType: 'bullets',
    slidesPerView: 'auto',
    autoplayDisableOnInteraction: false,
    lazyLoading: true,
    centeredSlides: true,
  })
})
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