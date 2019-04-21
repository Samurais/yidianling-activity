import React, {Component} from 'react';
import Swiper from 'swiper/dist/js/swiper.js';

class Mod extends Component {

  constructor(props) {
    super(props);

    this.honorSwiperList = [
      {
        "img":"/src/images/qs/20190225/honor1.png"
      },
      {
        "img":"/src/images/qs/20190225/honor2.png"
      },
      {
        "img":"/src/images/qs/20190225/honor3.png"
      },
      {
        "img":"/src/images/qs/20190225/honor4.png"
      },
      {
        "img":"/src/images/qs/20190225/honor5.png"
      },
      {
        "img":"/src/images/qs/20190225/honor6.png"
      },
      {
        "img":"/src/images/qs/20190225/honor7.png"
      },
      {
        "img":"/src/images/qs/20190225/honor8.png"
      }
    ];
    this.honorText="/src/images/qs/20190225/honor_text.jpg";
  }

  componentDidMount() {
    //honor轮播
    new Swiper('#honor-swiper', {
      autoplay: true,
      loop: true,
      // centeredSlides : true,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slideActiveClass : 'honor-active',
    });
  }

  getSwiperHTML(item, index){
    let element;
    element = item.id == "1"?(
      <div className="item-box-last swiper-slide" key={index}>
        <img className="item-img lazy" data-original={item.img} src={this.defImg} key={index}/>
      </div>
    ) :(
      <div className="item-box swiper-slide" key={index}>
        <img className="item-img lazy" data-original={item.img} src={this.defImg} key={index}/>
      </div>
    );
    return element;
  }

  render() {
    return (
      <div>
        <div className="honor-container">
          <img className="honor-title lazy" data-original={this.honorText} src={this.defImg}></img>
          <div className="honor-big-box">
            <div className="honor-swiper swiper-container" id="honor-swiper">
              <div  className="swiper-wrapper">
                {this.honorSwiperList.map((item,index)=>
                  this.getSwiperHTML(item,index)
                )}
              </div>
            </div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </div>
    )
  }

}

export default Mod;
