//edit by pengfuxiao
//2016/4/14
//轮播图无缝切换

$.extend($, {
  slider2: function(options){
    var defaults={
      scrollContainer: '.scrollContainer',
      scrollWraper: '.scrollWraper',
      pre: '.btn-pre',
      next: '.btn-next',
      scrollItem: '.scrollItem',
      speed: 600,
      animateStyle: 'linear',
      scrollPagination: '.scrollPagination',
      currentPagination: 'current',
      loop: false,
      loopDuration: 5000,
      resetpagination: true,
      paginations: '.scrollPagination li'
    };
    var opts=$.extend(defaults,options);
    var $itemLength=$(opts.scrollItem).length;
    var t;

    // copy for infinite
    $(opts.scrollWraper).append($(opts.scrollItem).eq(0).clone(true));
    $(opts.scrollWraper).prepend($(opts.scrollItem).eq($itemLength-1).clone(true));
    // reset scrollWraper width
    var itemWidth= parseInt($(opts.scrollContainer).css('width'));
    $(opts.scrollWraper).css('width',($itemLength+2)*itemWidth+'px');
    $(opts.scrollWraper).css('left',(-itemWidth)+'px');
    // init pagination
    if(opts.resetpagination){
      var str='<li class='+opts.currentPagination+'></li>';
      for(var i=0;i<$itemLength-1;i++){
        str+="<li></li>"
      }
      $(opts.scrollPagination).append(str);
      // reset pagination position
      var paginationWidth=parseInt($(opts.scrollPagination).css('width'));
      $(opts.scrollPagination).css('margin-left',-(paginationWidth/2)+'px');
    }

    // toggle width pagination
    $(opts.paginations).on('click',function(){
      var $lin=$(this).index()+1;
      if(currentId!=$lin){
        currentId=$lin;
        modifyCurrentPagination();
        $(opts.scrollWraper).animate({'left':-($lin*itemWidth)+'px'}, opts.speed,function(){

        })
      }
    })
    // control data
    var currentId=1,notScrolling=true;
    $(opts.pre).on('click',function(e){
      if(e){e.preventDefault();}
      if(currentId<($itemLength+2)&&notScrolling){
        if(currentId==$itemLength){
          $(opts.scrollWraper).css('left',0);
          currentId=0;
          currentId++;
          notScrolling=false;
          $(opts.scrollWraper).animate({'left': -(currentId*itemWidth)}, opts.speed, opts.animateStyle, function(){
            notScrolling=true;
            if(currentId==$itemLength){
              $(opts.scrollWraper).css('left',0);
              currentId=0;
            }
          });
        }else {
          currentId++;
          notScrolling=false;
          $(opts.scrollWraper).animate({'left': -(currentId*itemWidth)}, opts.speed, opts.animateStyle, function(){
            notScrolling=true;
            if(currentId==$itemLength){
              $(opts.scrollWraper).css('left',0);
              currentId=0;
            }
          });
        }
      }
      modifyCurrentPagination();
    })
    $(opts.next).on('click',function(e){
      if(e){e.preventDefault();}
      if(notScrolling){
        if(currentId==0){
          $(opts.scrollWraper).css('left',-($itemLength*itemWidth)+'px');
          currentId=$itemLength;
        }
        currentId--;
        notScrolling=false;
        $(opts.scrollWraper).animate(
          {'left': -(currentId*itemWidth)},opts.speed,opts.animateStyle,function(){
            notScrolling=true;
          })
      }
      modifyCurrentPagination();
    })

    if(opts.loop){
      autoSlider();
      $(opts.scrollContainer).on('mouseenter',function(){
        clearTimeout(t);
      }).on('mouseleave',function(){
        clearTimeout(t);
        autoSlider();
      });
    }


    function modifyCurrentPagination(){
      var	$paglis=$(opts.paginations);
      $paglis.removeClass(opts.currentPagination);
      $paglis.eq(currentId-1).addClass(opts.currentPagination);
    }

    function autoSlider(){
      t=setInterval(function(){
        $(opts.pre).trigger('click');
      },opts.loopDuration);
    }

  }
});

jQuery.extend( jQuery.easing,
  {
    easeOutCirc: function (x, t, b, c, d) {
      return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    }
  });