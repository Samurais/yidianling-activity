import React, {Component} from 'react';
import Number from '../../../../../component/number';

class Page extends Component {

  constructor(props) {

    super(props);
  }

  componentDidMount() {
  }

  render() {

    let dateInfo = this.props.data;

    return (
      <div className="item item-4 box-shadow js_item_touch" data-type="4">
        <span className="t t-4"></span>

        <div className="text-content">
          <p>2018年，{this.props.nickname}督导了 <Number number={dateInfo.supervisePeopleNum.toString().split("")} /> 人</p>
          <p>发布了 <Number number={dateInfo.articleNum.toString().split("")} /> 篇文章</p>
          <p>授人以鱼，不如授人以渔</p>
        </div>

        <img data-original="/src/images/activity/hd/20181228/item-4.png" src="/src/images/global/pbg.png" className="lazy item-ft" />
      </div>
    )
  }

}

export default Page;
