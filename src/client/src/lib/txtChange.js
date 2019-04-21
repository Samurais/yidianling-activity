/***
 * 文字轮播
 * @function txtChange
 * @param slide 轮播元素
 * @param slideGroup 轮播框对象
 * ***/
function txtChange(slide,slideGroup) {
    var $slide = $(slide),
      $slideGroup = $(slideGroup),
      $bullet = $('.bullet');
      console.log('txtChange',$slide,$slideGroup)
    var slidesTotal = ($slide.length - 1),
      current = 0,
      isAutoSliding = true;
    $bullet.first().addClass('current');
    var clickSlide = function () {
      //stop auto sliding
      window.clearInterval(autoSlide);
      isAutoSliding = false;
      var slideIndex = $bullet.index($(this));
      updateIndex(slideIndex);
    };
  
    var updateIndex = function (currentSlide) {
      if (isAutoSliding) {
        if (current === slidesTotal) {
          current = 0;
        } else {
          current++;
        }
      } else {
        current = currentSlide;
      }
      $bullet.removeClass('current');
      $bullet.eq(current).addClass('current');
      transition(current);
    };
  
    var transition = function (slidePosition) {
      $slideGroup.animate({
        'top': '-' + slidePosition + '00%'
      });
    };
  
    $bullet.on('click', clickSlide);
  
    var autoSlide = window.setInterval(updateIndex, 2000);
  }

export default txtChange;