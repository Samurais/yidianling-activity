import React, {Component} from 'react';
import Title from '../Title';
import {Swiper} from '../../../../../../component/layout';

class Mod extends Component {

  constructor(props) {
    super(props);

    this.defImg = "/src/images/global/lazy.png";

    this.aboutusList = [
      { "cover": "/src/images/global/aboutus/p-1.png", },
      { "cover": "/src/images/global/aboutus/p-2.png", },
      { "cover": "/src/images/global/aboutus/p-3.png", },
    ]
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="mod-aboutus">
          <Title title="/src/images/longterm/appdownload/title-aboutus.png" link={this.props.jump} />

          <div className="content">
            <div className="list">
              <Swiper list={this.aboutusList} name="aboutusSwiper" type="1" />
            </div>

            <div className="text">
              <p>壹点灵-心理咨询平台是由中科院心理专家牵头，汇集资深情感专家、心理专家、亲子教育专家提供在线心理服务平台，帮您解决各类烦恼。</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Mod;
