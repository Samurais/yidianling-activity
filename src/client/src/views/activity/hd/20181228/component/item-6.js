import React, {Component} from 'react';

class Page extends Component {

  constructor(props) {

    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="item item-6 box-shadow js_item_touch" data-type="6">

        <div className="text-box mt120">
          <p className="text-1">2019年，和壹点灵一起</p>
        </div>

        <div className="ico-banner mt80">
          <span className="move-sign"></span>
        </div>

        <div className="control mt70">
          <a href="javascript:" className="btn move-sign js_type6_btn">传递我的影响力</a>
        </div>
        <img data-original="/src/images/activity/hd/20181228/item-6.png" src="/src/images/global/pbg.png" className="lazy item-ft" />
      </div>
    )
  }

}

export default Page;
