/**
 * Created by admin on 2016/10/24.
 */
;(function(window,jquery){

  jQuery.extend( jQuery.easing,
    {
      easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
      }
    });

  var $n=0;
  var $carouselItems=$('.carousel').children('.carouselItem'),
    $lis=$('.bannerPags').children('li');
  $carouselItems.eq(0).addClass('active');

  $lis.on('click',function(){
    if(!$(this).hasClass('cur')){
      var $index=$(this).index();
      $(this).addClass('cur').siblings().removeClass('cur');
      $carouselItems.css('display','none').eq($index).fadeIn();
    }
  });

//  轮播
  setInterval(function(){
    $n=$n>2?0:$n+1;
    $lis.eq($n).trigger('click');
  },6000);





  //team start

  var $itemBox=$('.itemBox'),onScrolling=false,n= 0,m=0;
  var $itemLen=$itemBox.children('.item').length;
  $itemBox.css('width',($itemLen*840)+'px');

  function modifyPage(n){
    n=n<0?(-n):n;
    $('.imageBox').children('img').removeClass('active').eq(n).addClass('active');
    $('.teamPages').children('ul').children('li').removeClass('active').eq(n).addClass('active');
  }

  $('.imageBox img,.teamPages ul li').on('click',function(){
    var $nn=$(this).index();
    modifyPage($nn);
    $itemBox.animate({
      marginLeft: (-840*$nn)+'px'
    },600,'easeOutCirc',function(){
      n=$nn;
      onScrolling=false;
    });
  });

  $('.goLeft').on('click',function(){
    if(!onScrolling&&n<$itemLen){
      onScrolling=true;
      if(n==0){
        n=1-$itemLen;
      }else if(n>0) {
        n=1-n;
      }else {
        n=1+n
      }
      console.log(n);
      $itemBox.animate({
        marginLeft: (840*n)+'px'
      },600,'easeOutCirc',function(){
        onScrolling=false;
      });

      modifyPage(n);

    }else {
      console.log('正在滚动或者单向滚动结束了');
    }

  });

  $('.goRight').on('click',function(){
    if(!onScrolling&&n>=1-$itemLen){
      onScrolling=true;

      if(n==$itemLen-1||n==1-$itemLen){
        n=0;
      }else if(n>=0){
        n=n+1;
      }else {
        n=1-n;
      }
      $itemBox.animate({
        marginLeft: (-840*n)+'px'
      },600,'easeOutCirc',function(){
        onScrolling=false;
      });
      //console.log(n);
      modifyPage(n);
    }else {
      console.log('点击不能太快');
    }

  });

  //team end



//  caseNavs

  $('.caseNavs').children('li').on('click',function(){
    if(!$(this).hasClass('cur')){
      var $nli=$(this).index();
      $(this).addClass('cur').siblings().removeClass('cur');
      $('.caseItems').children('.oneItem').css('display','none').eq($nli).fadeIn();
    }
  });

//  评价

  $.slider2({
    scrollContainer: '.swiperContainer',
    scrollWraper: '.swiper-wraper',
    pre: '.sp_l',
    next: '.sp_r',
    scrollItem: '.swiper-wraper li',
    speed: 600,
    animateStyle: 'easeOutCirc',
    loop: true,
    loopDuration: 6000,
    resetpagination: true,
    scrollPagination: '.pages01',
    currentPagination: 'cur',
    paginations: '.pages01 li'
  });


//  media
  $('.smallBox').children('img').on('mouseenter',function(){
    if(!$(this).hasClass('active')){
      var $imgn=$(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      $('.bigBox').children('img').css('display','none').eq($imgn).fadeIn();
    }
  });




//  咨询室
  var $n2= 0,$span2=$('.zixunshiNav').children('span');
  $span2.on('click',function(){
    if(!$(this).hasClass('active')){
      var $spanIndex=$(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      $('.cont02Inner').children('.computerIcon').css('display','none').eq($spanIndex).fadeIn();
    }
  });

  setInterval(function(){
    $n2=$n2>=5?0:$n2+1;
    $span2.eq($n2).trigger('click');
  },5000);



//  锦旗
  var $n1= 0,$span1=$('.videoNavs').children('span');
  $span1.on('click',function(){
    if(!$(this).hasClass('active')){
      var $spanIndex1=$(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      $('.video').children('.imgItem').css('display','none').eq($spanIndex1).fadeIn();
    }
  });

  setInterval(function(){
    $n1=$n1>=5?0:$n2+1;
    $span1.eq($n1).trigger('click');
  },5000);



  $('#scxf').on('click',function(e){
    e.preventDefault();
    alert('您的电脑不支持自动加入收藏夹，请Ctrl+D 手动加入');
  });



  function oneStep(){
    $('.purchaseRecord').animate({
      marginTop: '-36px'
    },600,function(){
      $(this).children('li').eq(0).remove().appendTo($(this));
      $(this).css('marginTop','0');
    });
  }


  setInterval(function(){
    oneStep();
  },4000);



//$(window).on('scroll',function(){
//  if($(this).scrollTop()>100){
//    $('#topHead').addClass('topFix');
//    $('body').css('paddingTop','180px');
//  }
//
//
//  if($(this).scrollTop()<100){
//    $('#topHead').removeClass('topFix');
//    $('body').css('paddingTop','0');
//  }
//
//});



  $('.show-allInfo').click(function(e){
    e.preventDefault();
    $info=$(this).parent().find('.info-hide');
    if($info.css('display')=='none'){
      $info.slideDown();
      $(this).text('收起');
    }else {
      $info.slideUp();
      $(this).text('展开全部');
    }
  });


  function oneStep02(){
    $('.rightCont2Items').animate({
      marginTop: '-120px'
    },600,function(){
      $(this).children('li').eq(0).remove().appendTo($(this));
      $(this).css('marginTop','0');
    });
  }

  setInterval(function(){
    oneStep02();
  },4000);



//  证书大图
  $('.bzInner03').find('img').on('click',function(){
    $('.bazs').attr('src',$(this).attr('src'));
    $('.bzContent,.bzMask').css('display','block');
  });
  $('.bzCont02Little').find('img').on('click',function(){
    $('.bazs').attr('src',$(this).attr('src'));
    $('.bzContent,.bzMask').css('display','block');
  });
  $('.closeZs,.bzMask').on('click',function(){
    $('.bzContent,.bzMask').css('display','none');
  });


  $('.commentNavs').children('li').on('click',function(){
    if(!$(this).hasClass('current')){
      var $n=$(this).index();
      $(this).addClass('current').siblings().removeClass('current');
      $('.comments').children('.item').css('display','none').eq($n).fadeIn();
    }
  })


})(window);