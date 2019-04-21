import React, {Component} from 'react';
import Number from '../../../../../component/number';
import Util from '../../../../../lib/util';

class Page extends Component {

  constructor(props) {

    super(props);

    this.state = {
      y: [],
      m: [],
      d: [],
    }
  }

  componentDidMount() {}

  getDateInfo(){
    let data = this.props.data;

    let timestamp = new Date().getTime(2018-12-26);
    let times = data.enterTime * 24 * 60 * 60 * 1000;
    let t = 0;

    if(times == 0) {
      t = Util.format(timestamp, "yyyy-MM-dd").split("-");
    } else {
      t = Util.format(timestamp - times, "yyyy-MM-dd").split("-");
    }

    return {
      y: t[0].split(""),
      m: t[1].split(""),
      d: t[2].split(""),
      t: data.enterTime.toString().split(""),
    }
  }

  render() {

    let dateInfo = this.getDateInfo();

    return (
      <div className="item item-1 box-shadow js_item_touch" data-type="1">
        <span className="t t-1"></span>

        <div className="text-content">

          <p>
            <span className="time">
              <Number number={dateInfo.y} />.<Number number={dateInfo.m} />.<Number number={dateInfo.d} />
            </span>
          </p>

          <p>是{this.props.nickname}与壹点灵的初次邂逅</p>

          <p>一路走来</p>

          <p>{this.props.nickname == "您" ? "我们" : ""}已相伴 <Number number={dateInfo.t} /> 天</p>

          <p>缘份，让我们相遇</p>
        </div>

        <img data-original="/src/images/activity/hd/20181228/item-1.png" src="/src/images/global/pbg.png" className="lazy item-ft" />
      </div>
    )
  }

}

export default Page;
