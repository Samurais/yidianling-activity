
/**
 * type
 * 1:  {
 *      "cover": Images
 *     }
 * 2:  {
 *      "face": Images,
 *      "name": String,
 *      "des": HTML || String
 *     }
 */

import React, {Component} from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import Util from '../../../lib/util.js';

class Page extends Component {

  constructor(props) {

    super(props);

    this.swiperList = this.props.list;

    this.id = this.props.name;

    this.type = this.props.type;

    this.status = this.props.status || "1";

    this.className = {
      "1": "g-swiper-1",
      "2": "g-swiper-2",
      "3": "g-swiper-3",
    }[this.type];
  }

  componentDidMount() {

    let id = "#"+this.id;
    let status = this.status;
    $(function(){

      if(status == "1") {
        new Swiper(id, {
          loop: true,
          autoplay: true,
          parallax:true,
          pagination: {
            el: '.swiper-pagination',
          },
          on: {
            init: function(){
              $(".swiper-lazy").each(function(){
                let _this = $(this);
                _this.attr("src", _this.data("src"));
              });
            },
          },
        });
      }
      if(status == "2") {
        new Swiper(id, {
          slidesPerView: 2,
          freeMode: true,
          on: {
            init: function(){
              $(".swiper-lazy").each(function(){
                let _this = $(this);
                _this.attr("src", _this.data("src"));
              });
            },
          },
        });
      }
    });
  }

  get1HTML(item, index) {
    return (
      <li className="swiper-slide" key={index}>
        <img data-src={item.cover} className="swiper-lazy" />
      </li>
    )
  }

  get2HTML(item, index) {
    return (
      <li className="swiper-slide" key={index}>
        <dl>
          <dt><img data-src={item.face} className="swiper-lazy" /></dt>
          <dd>
            <strong className="name">{item.name}</strong>
            <p className="des" dangerouslySetInnerHTML = {{ __html:item.des }}></p>
          </dd>
        </dl>
      </li>
    )
  }

  get3HTML(item, index) {
    return (
      <li className="swiper-slide" key={index}>
        <dl>
          <dt><img data-src={item.face} className="swiper-lazy" /></dt>
          <dd>
            <strong className="name">{item.name}</strong>
            <p className="des" dangerouslySetInnerHTML = {{ __html:item.des }}></p>
            <a href="javascript:" className="g-mt10 g-btn s green fill js_kf">马上咨询</a>
          </dd>
        </dl>
      </li>
    )
  }

  getSwiperList(item, index){

    if(this.type == "1") {
      return this.get1HTML(item, index);
    }

    if(this.type == "2") {
      return this.get2HTML(item, index);
    }

    if(this.type == "3") {
      return this.get3HTML(item, index);
    }
  }

  getHTML(){
    return this.swiperList.map((item, index) => (
      this.getSwiperList(item, index)
    ));
  }

  render() {
    return (
      <div>
        <div className={this.className}>
          <div className="swiper-container" id={this.id}>
            <ul className="swiper-wrapper">
              {this.getHTML()}
            </ul>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    )
  }

}

export default Page;
