//20180118-banner-swiper
var banner = new Swiper('.banner-swiper.swiper-container', {
	simulateTouch: false,
	loop: true,
	autoplay: 3000,
	autoplayDisableOnInteraction: false,
	pagination: '.banner-swiper .swiper-pagination',
	paginationClickable: true,
});
function playMovie(){//视频播放
	$('.topHead-movie-wrapper').show();
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

//最新评价-animate
function AutoScroll(obj) {
	$(obj).find("ul:first").animate({
		marginTop: "-132px"
	}, 500, function() {
		$(this).css({
			marginTop: "0px"
		}).find("li:first").fadeIn().appendTo(this);
	}).find('li:first').fadeOut(500);
}
$(document).ready(function() {
	//页面收藏功能
	$(".collectLove").click(function() {
			var ctrl = (navigator.userAgent.toLowerCase()).indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL';
			if(document.all) {
				window.external.addFavorite('//blog.csdn.net/yilanyoumeng3', '前端秋秋');
			} else if(window.sidebar) {
				window.sidebar.addPanel('前端秋秋', '//blog.csdn.net/yilanyoumeng3', "");
			} else {
				alert('您可以通过快捷键' + ctrl + ' + D 加入到收藏夹');
			}
		})
		//头部固定
//	$(window).on('scroll', function() {
//		if($(this).scrollTop() > 100) {
//			$('#topHead').addClass('topFix');
//			$('body').css('paddingTop', '180px');
//		}
//		if($(this).scrollTop() < 100) {
//			$('#topHead').removeClass('topFix');
//			$('body').css('paddingTop', '0');
//		}
//	});
	//业务类型-图标
	$(".serviceType .typeImg img").mouseover(function() {
		var img_1 = $(this).attr("src").slice(0, -5);
		$(this).attr("src", img_1 + "2.png");
	});
	$(".serviceType .typeImg img").mouseout(function() {
		var img_2 = $(this).attr("src").slice(0, -5);
		$(this).attr("src", img_2 + "1.png");
	});
	//专家团队轮播
	var expert = new Swiper('.swiper-container.expert-list-swiper', {
		pagination: 'null',
		paginationClickable: false,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		autoplay: 5000,
		effect: 'slide',
		spaceBetween: 156,
		loop: true
	});
	//分页-评价
	var evaluate = new Swiper('.swiper-container.evaluate-swiper', {
		slidesPerView: 3,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		simulateTouch: false,
		loop: true,
		autoplay: 5000,
	});
	//服务流程
	$(".bz_serviceFlow a").mouseover(function() {
		$(this).find("img").addClass("active");
	});
	$(".bz_serviceFlow a").mouseout(function() {
		$(this).find("img").removeClass("active");
	});
	//专家资质-按钮
	$(".poster-btn").mouseover(function() {
		var posterImg = $(this).css("background-image").slice(0, -6);
		$(this).css("background-image", posterImg + "1.png");
	});
	$(".poster-btn").mouseout(function() {
			var posterImg1 = $(this).css("background-image").slice(0, -7);
			$(this).css("background-image", posterImg1 + ".png");
		})
		//最新评价
	var allComments = [{
		dataId: 2,
		expert: '朱静',
		name: '**bbl',
		time: '2016/07/26',
		comment: '能遇到这样这样的老师，也是很美丽的一件事儿。'
	}, {
		dataId: 0,
		expert: '南茜',
		name: '**青鸟',
		time: '2016/04/16',
		comment: '碰到南茜老师，我知道我可以开心起来了，谢谢您南茜老师。'
	}, {
		dataId: 4,
		expert: '刘毅',
		name: '**京',
		time: '2016/05/12',
		comment: '老師的咨詢對我很有幫助 謝謝。'
	}, {
		dataId: 0,
		expert: '于海燕',
		name: '**会呼吸',
		time: '2016/06/17',
		comment: '对我很有帮助！'
	}, {
		dataId: 1,
		expert: '夏一梦',
		name: '**jo',
		time: '2016/03/17',
		comment: '老师很专业，对我的问题分析很透彻，让迷茫的我瞬间找到自己问题的根源，对我帮助很大，会一直跟着老师学习'
	}, {
		dataId: 3,
		expert: '闵贵征',
		name: '**jia',
		time: '2016/08/03',
		comment: '刚才交谈后，发了一条信息给他，告诉他，记得每天要好好吃饭，他回复我了，说你也是，但愿每天都有新的变化'
	}, {
		dataId: 7,
		expert: '王舟所',
		name: '**之阳',
		time: '2016/04/03',
		comment: '很好的老师，我会按照教的方法去做的'
	}, {
		dataId: 1,
		expert: '王锦媛',
		name: '**んuāпg',
		time: '2016/02/25',
		comment: '经过两次的辅导，效果很好，特别感谢老师的专业指导。'
	}, {
		dataId: 4,
		expert: '王丽华',
		name: '**归根',
		time: '2016/05/03',
		comment: '谢谢你们'
	}, {
		dataId: 3,
		expert: '马昭然',
		name: '**棉婲糖',
		time: '2016/03/17',
		comment: '老公开始重新接受我了，谢谢'
	}, {
		dataId: 5,
		expert: '夏一梦',
		name: '**误会',
		time: '2016/06/03',
		comment: '之前的那个老师感觉一般，不过重新选了夏老师以后让我感觉又有了希望，希望做完这个套餐以后可以马上挽回成功。'
	}, {
		dataId: 2,
		expert: '于海燕',
		name: '**巨蟹',
		time: '2016/05/02',
		comment: '满分满分 ，真的非常用心非常贴心。'
	}, {
		dataId: 6,
		expert: '许涛',
		name: '**花园',
		time: '2016/02/25',
		comment: '许老师像朋友一样，像春风一样，吹开了我迷茫的视线，让我明白在哪儿应该坚持努力不懈，在哪儿应该听从心的导引！'
	}, {
		dataId: 4,
		expert: '朱静',
		name: '**心',
		time: '2016/03/16',
		comment: '还不错，还有几次咨询，希望可以快点有效果'
	}, {
		dataId: 1,
		expert: '夏一梦',
		name: '**困惑',
		time: '2016/02/20',
		comment: '很专业，第一次不信任，预约时间太短，经过交流，权威。'
	}, {
		dataId: 3,
		expert: '王舟所',
		name: '**阳光',
		time: '2016/03/25',
		comment: '又一次得到老师的指点悟出了更高的境界，相信以后我和老公的生活会很快和谐起来，衷心感谢！'
	}, {
		dataId: 6,
		expert: '王丽华',
		name: '**冰淇淋',
		time: '2016/05/11',
		comment: '王老师每次都认真倾听，非常感谢，我会试着按照您的建议去做.'
	}, {
		dataId: 2,
		expert: '王锦媛',
		name: '**如歌',
		time: '2016/05/28',
		comment: '王老师很专业，认真负责，效果好，声音也蛮好听的，谢谢老师的帮助！'
	}, {
		dataId: 7,
		expert: '朱静',
		name: ' **路',
		time: '2016/03/26',
		comment: '很专业的老师，很棒。'
	}, {
		dataId: 4,
		expert: '南茜',
		name: '**痛失',
		time: '2016/04/03',
		comment: '谢谢老师耐心解答！对我很有启发！'
	}, {
		dataId: 3,
		expert: '马昭然',
		name: '**小民',
		time: '2016/06/08',
		comment: '这么快两个月过去了，终于找回了我自己的幸福，真的太感谢马老师了，我会更加享受这来之不易的幸福。'
	}, {
		dataId: 6,
		expert: '闵贵征',
		name: '**来',
		time: '2016/02/25',
		comment: '我相信我能成功的！'
	}, {
		dataId: 0,
		expert: '南茜',
		name: '**ice',
		time: '2016/04/23',
		comment: '感谢南茜老师帮助我。'
	}, {
		dataId: 4,
		expert: '夏一梦',
		name: '**野菊',
		time: '2016/06/13',
		comment: '特别好的姐姐。安慰我特别多。在自己最纠结的时候，有一位专业人士去帮我解答，我真的感到很庆幸。夏老师很负责，也很快的找到了我的问题点。非常感谢。。'
	}, {
		dataId: 6,
		expert: '于海燕',
		name: '**真',
		time: '2016/05/03',
		comment: '很不错的网站，希望能很快有结果。'
	}, {
		dataId: 3,
		expert: '王新爱',
		name: '**青青&草',
		time: '2016/02/23',
		comment: '时间过得真快，转眼间2个月了，现在老公对我好多了，我有信心像以前一样。'
	}, {
		dataId: 7,
		expert: '余汉华',
		name: '**666',
		time: '2016/03/22',
		comment: '老师很热心，说的话对我很有用'
	}, {
		dataId: 5,
		expert: '朱静',
		name: '**weeopo',
		time: '2016/04/16',
		comment: '3个月了，终于挽回了他，幸福来得这么突然我都适应不了了，哈哈'
	}, {
		dataId: 4,
		expert: '于海燕',
		name: '**1733',
		time: '2016/04/11',
		comment: '遇到你们真是太幸运，有机会要再去感谢下'
	}, {
		dataId: 1,
		expert: '夏一梦',
		name: '**虎',
		time: '2016/05/16',
		comment: '很热心的专家，很有帮助'
	}, {
		dataId: 2,
		expert: '牛雪雁',
		name: '**飞翔',
		time: '2016/08/11',
		comment: '很好的老师，希望多咨询几次'
	}, {
		dataId: 1,
		expert: '于海燕',
		name: '**心语',
		time: '2016/04/15',
		comment: '很不错的网站，希望能很快有结果'
	}, {
		dataId: 6,
		expert: '王丽华',
		name: '**的后裔',
		time: '2016/05/22',
		comment: '我又重新迈出了一大步，我会加油的'
	}, {
		dataId: 2,
		expert: '夏一梦',
		name: '**李子',
		time: '2016/06/14',
		comment: '不错的一天，我更有信心了'
	}, {
		dataId: 1,
		expert: '闵贵征',
		name: '**520',
		time: '2016/07/07',
		comment: '也在其他一些网站上尝试过，不过都没效果，这里还是不错的'
	}, {
		dataId: 4,
		expert: '刘毅',
		name: '**21206',
		time: '2016/02/21',
		comment: '感谢与您的相遇，从而我和男友的关系也越来越好了'
	}];
	setInterval('AutoScroll("#scroll-box")', 5000)
	var $src1 = '';
	var length1 = allComments.length;
	for(var j = 0; j < length1; j++) {
		$src1 += '<li class="item" style="display: list-item;"> <div class="info"> <h3> <span class="name">' + allComments[j].name + '评价</span>&nbsp; <a class="author" href="javascript:;" target="_blank">心理专家<span>' + allComments[j].expert + '</span></a> </h3> <p class="txt">' + allComments[j].comment + '</p> </div> </li>'
	}
	$('#scroll-box').children('ul').html($src1);
});

//聊天弹出框延后1s加载
$(function() {
	setTimeout(function() {
		$("#contact").show();
	}, 1000);
	
	//分页
	var total, totalPage, currentPage, maxIndex, minIndex;
	function paging(obj,index) {	
		if(obj){
			total = obj.length; //条数			
			totalPage = Math.ceil(total / 5); //页面总数
			console.log('total=' + total, 'totalPage=' + totalPage); //9
			$('.total').text('共' + totalPage + '页');
			if($('li.page').length<1){console.log($('li.page').length);
				for(var i = 1; i <= totalPage; i++) { //动态页码		        	
					$('.page-tab-tog>li.next').before('<li class="page"><a href="javascript:;">' + i + '</a></li>');
				}
			}
			maxIndex = index * 5;
			minIndex = (index - 1) * 5;
			console.log('maxIndex=' + maxIndex, 'minIndex=' + minIndex);
			currentPage = index;
			if(maxIndex > total) maxIndex = total; //判断总数和要显示的最大index
			console.log('maxIndex=' + maxIndex, 'minIndex=' + minIndex);
			$('.page').eq(index).addClass('selected').siblings().removeClass('selected');
			//动态显示列表index=1,1-5,index=2,6-10
			obj.hide();
			for(var i = minIndex; i < maxIndex; i++) {
				obj.eq(i).show();
			}
			//判断是否显示首页，上一页，下一页，尾页
			//if(totalPage=='1')$('.first,.previous,.next,.last').attr('class','hidden');
			if(index == '1') {
				$('.first,.previous').addClass('hidden');
				$('.next,.last').removeClass('hidden');
			}
			if(index == totalPage) {
				$('.next,.last').addClass('hidden');
				$('.first,.previous').removeClass('hidden');
			}
		}
	}
	var obj;
	var filenames = parseURL(window.location.href).file.split('.')[0];console.log(filenames);
	if(filenames==='experts')obj=$('.expertItems');
	if(filenames==='about_media'||filenames=='about_news')obj=$('.item');
	paging(obj,1);
	$('li.page').click(function() { //分页切换
		console.log($(this).text());
		paging(obj,$(this).text());
	})	
	//开启 下一页，尾页
	$('.last').click(function() { //尾页
		paging(obj,totalPage);
	})
	$('.next').click(function() { //下一页
		paging(obj,parseInt(currentPage) + 1);
		console.log(currentPage)
	})
	//开启 首页，上一页
	$('.first').click(function() { //首页
		paging(obj,1);
	})
	$('.previous').click(function() { //上一页
		paging(obj,parseInt(currentPage) - 1);
		console.log(currentPage)
	})
})

function parseURL(url) {//解析url
	var a = document.createElement('a');
	a.href = url;
	return {
		source: url,
		protocol: a.protocol.replace(':', ''),
		host: a.hostname,
		port: a.port,
		query: a.search,
		params: (function() {
			var ret = {},
				seg = a.search.replace(/^\?/, '').split('&'),
				len = seg.length,
				i = 0,
				s;
			for(; i < len; i++) {
				if(!seg[i]) {
					continue;
				}
				s = seg[i].split('=');
				ret[s[0]] = s[1];
			}
			return ret;
		})(),
		file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
		hash: a.hash.replace('#', ''),
		path: a.pathname.replace(/^([^\/])/, '/$1'),
		relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
		segments: a.pathname.replace(/^\//, '').split('/')
	};
}
