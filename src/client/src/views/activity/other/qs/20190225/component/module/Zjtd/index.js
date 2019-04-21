import React, {Component} from 'react';
import Swiper from 'swiper/dist/js/swiper.js';

class Mod extends Component {

  constructor(props) {
    super(props);

    this.expertsSwiperList = [
      {
        "img":"/src/images/qs/20190225/10-1.png"
      },
      {
        "img":"/src/images/qs/20190225/10-2.png"
      },
      {
        "img":"/src/images/qs/20190225/10-3.png"
      },
      {
        "img":"/src/images/qs/20190225/10-4.png",
        "id":"1"
      }
    ];
  }

  componentDidMount() {
    // experts轮播
    new Swiper('#experts-swiper', {
      autoplay: false,
      loop: false,
      centeredSlides: false,
      slidesPerView: 'auto',
      freeMode: true,
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
        <div className="experts-container">
          <div>
            <div className="experts-swiper swiper-container" id="experts-swiper">
              <div  className="swiper-wrapper">
                {this.expertsSwiperList.map((item,index)=>
                  this.getSwiperHTML(item,index)
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Mod;
