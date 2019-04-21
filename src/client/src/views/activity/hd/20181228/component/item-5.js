import React, {Component} from 'react';

class Page extends Component {

  constructor(props) {

    super(props);

    this.status = {
      "灵魂摆渡者": "status-1",
      "情感守护者": "status-2",
      "亲子守护者": "status-3",
      "社交引路人": "status-4",
      "职业领路人": "status-5",
    }
  }

  componentDidMount() {
  }

  render() {

    let status = this.props.data.honorTitle || "灵魂摆渡者";

    return (
      <div className="item item-5 box-shadow js_item_touch" data-type="5">

        <div className="ico-trophy">
          <span className="shine move-sign">
            <img data-original="/src/images/activity/hd/20181228/ico-trophy.png" src="/src/images/global/pbg.png" className="lazy" />
          </span>
        </div>

        <div className="text-box mt50">
          <p className="text-1">属于{this.props.nickname}的2018关键词</p>
        </div>

        <div className="status">
          <span className={`${this.status[status]} move-sign`}></span>
        </div>

        <img data-original="/src/images/activity/hd/20181228/item-5.png" src="/src/images/global/pbg.png" className="lazy item-ft" />
      </div>
    )
  }

}

export default Page;
