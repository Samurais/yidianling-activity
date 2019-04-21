import React, {Component} from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import API from '../../../../servers/m/appdownload';
import Util from '../../../../../../lib/util';

class Mod extends Component {

  constructor(props) {
    super(props);

    this.state = {
      zmdList: [
        {
          "type": "16",
          "nickName": "小黄",
        },
      ]
    };

    this.status = {
      "2": "预约了专家咨询",
      "7": "使用了电话倾述",
      "16": "购买了电话倾述",
    }
  }

  componentDidMount() {

    API.userRecentEvent().then(res => {
      this.setState({
        zmdList: res.data
      }, () => {
        new Swiper('#zmdList', {
          autoplay: true,
          loop: true,
          spaceBetween: 0,
          noSwiping : true,
          noSwipingClass : 'stop-swiping',
          direction: 'vertical',
        });
      });
    });
  }

  getZmdlList(item, index){
    let times = "刚刚";
    if(item.nickName == "") return ("");

    return (
      <li key={index} className="swiper-slide stop-swiping">{times} {Util.hiddenString(item.nickName, 1, 0)} <em>{this.status[item.type]}</em></li>
    )
  }

  render() {
    return (
      <div>
        <div className="mod-zmd">
          <div className="zmd-list swiper-container" id="zmdList">
            <ul className="swiper-wrapper">
              {this.state.zmdList.map((item, index) => (
                this.getZmdlList(item, index)
              ))}
            </ul>
          </div>
          <i className="ico"></i>
          <a href={this.props.jump} data-target={`zmd`}><i className="symbol">></i></a>
        </div>
      </div>
    )
  }

}

export default Mod;
