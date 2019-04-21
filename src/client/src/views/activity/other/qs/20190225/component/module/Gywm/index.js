import React, {Component} from 'react';
import Swiper from 'swiper/dist/js/swiper.js';


class Mod extends Component {

  constructor(props) {
    super(props);

    this.aboutList = [
      {
        "name":"/src/images/qs/20190225/7-1.png"
      },
      {
        "name":"/src/images/qs/20190225/7-2.png"
      },
      {
        "name":"/src/images/qs/20190225/7-3.png"
      },
      {
        "name":"/src/images/qs/20190225/7-4.png"
      },
      {
        "name":"/src/images/qs/20190225/7-5.png"
      },
      {
        "name":"/src/images/qs/20190225/7-6.png"
      },
      {
        "name":"/src/images/qs/20190225/7-7.png"
      },
      {
        "name":"/src/images/qs/20190225/7-8.png"
      },
      {
        "name":"/src/images/qs/20190225/7-9.png"
      }
    ];
    this.middleImg = {
      "name":"/src/images/qs/20190225/middle.jpg"
    };
  }

  componentDidMount() {
    // about轮播
    new Swiper('#aboutList', {
      autoplay: true,
      loop: true,
      centeredSlides : true,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

  getAboutHTML(item, index){
    return (
      <li key={index} className="swiper-slide one-about">
        <div className="imgr"><img src={item.name}/></div>
      </li>
    );
  }

  render() {
    return (
      <div>
        <div className="about-us">
          <div className="about-list swiper-container" id="aboutList">
            <ul className="swiper-wrapper">
              {this.aboutList.map((item, index) => (
                this.getAboutHTML(item, index)
              ))}
            </ul>
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <div className="container">
          <img className="html-img lazy about-words" data-original={this.middleImg.name} src={this.defImg}/>
        </div>
      </div>
    )
  }

}

export default Mod;
