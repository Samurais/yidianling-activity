$(function() {
	$("#LRdiv0").click(function() {
		$("footer").removeClass('bubble');
		setTimeout(function() {
			$("footer").addClass('bubble');
		}, 1800000);
	})
	$("img.lazy").lazyload(); //懒加载		
})
var timer = setTimeout(function() {
	$('#dialog').css('display', 'block');
	clearTimeout(timer);
}, 30000);

setTimeout(function() {
	$('#dialog').css('display', 'none');
}, 35000)
$("#dialog .cancel-icon").click(function() {
	$("#dialog ").hide();
})
//			var a = true;
// 弹窗关闭后间隔1分钟再弹出，第二次关闭后不再弹出
//			$('.cancel-icon').click(function(e) {
//				e.preventDefault();
//				if(a){
//					$(this).parent().parent().hide();
//					a = false;
//					var me = this;
//					setTimeout(function() {
//						$(me).parent().parent().show();
//					}, 60000);
//				}else{
//					$(this).parent().parent().hide();
//				}
//			})
$(function() {
	//TODO 选项卡切换
	$('.tab-choose .tabbar-ul').on('click', '.tabbar-li', function() {
		if(!$(this).hasClass('current')) {
			$(this).parent().find('.current').removeClass('current');
			$(this).addClass('current');
			var work = $(this).attr('data-class');
			$(this).parent().parent().find('.show').removeClass('show');
			$(this).parent().parent().find('.' + work).addClass('show');
		}
	})
	//TODO 底部图片切换
	$('.bottom-tel-link').click(function() {
		$(this).find('img').attr('src', $(this).find('img').attr('data-src'));
	})
	//TODO 自增
	var date = (new Date()).getTime();
	var date1 = 1489334400000;
	var time = (date - date1) / 86400000;
	var textAll = $(".save-num .save-text .num-text");
	for(var i = 0; i < textAll.length; i++) {
		var num = textAll.eq(i).text();
		textAll.eq(i).text(Number(num) + 5 * Math.round(time));
	}
	//TODO 轮播
	new Swiper('.example-box .swiper-container', {
		slidesPerView: 1.5,
		spaceBetween: 20,
		autoplay: 5000,
		autoplayDisableOnInteraction: false,
		pagination: '.swiper-pagination',
		paginationType: 'fraction',
		lazyLoading: true
	})
})
//	 TODO 关于我们部分的轮播
$(function() {
	//多个swiper一个页面
	$.extend({
		"swiperOption": function(f1, f2) {
			new Swiper(f1, {
				pagination: f2,
				slidesPerView: 1,
				spaceBetween: 20,
				autoplay: 5000,
				autoplayDisableOnInteraction: false,
				lazyLoading: true
			});
		},
	});
	$(".our-box .swiper-container").each(function(index) {
		$.swiperOption($(this), $(this).find(".swiper-pagination"));
	});
})
var slideTimer = setTimeout(function() {
	$('.qualification-certificate').removeClass('show');
	$('.news-trend').removeClass('show');
	clearTimeout(slideTimer);
}, 0);
//评价轮播
new Swiper('.swiper-container.appreciate-swiper', {
	autoplay: 2500,
	onlyExternal: true,
	loop: true,
	slidesPerView: 1,
	lazyLoading: true
});
//	获取当前时间
var mydate = new Date();
var str1 = "" + mydate.getFullYear() + "-";
str1 += (mydate.getMonth() + 1) + "-";
str1 += mydate.getDate();
$(".time").text(str1);

//新闻图片切换
$('.media-support>ul>li').click(function() {
	//				console.log($(this).index());
	$(this).attr('class', 'active').siblings().removeAttr('class');
	$('.news_tab_contents>img').eq($(this).index()).attr('class', 'active').siblings().removeAttr('class');
})