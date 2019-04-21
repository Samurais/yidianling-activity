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
      <div className="item item-2 box-shadow js_item_touch" data-type="2">
        <span className="t t-2"></span>

        <div className="text-content">
          <p><Number number={dateInfo.helpPeopleNum.toString().split("")} /> 人受到了{this.props.nickname}的帮助</p>
          <p>收获了 <Number number={dateInfo.praiseNum.toString().split("")} /> 个好评</p>
          <p>影响了 <Number number={dateInfo.affectPeopleNum.toString().split("")} /> 人</p>
          <p>
            {
              Math.floor(dateInfo.serviceHoursRank*100) >= 20
              ?
              '建设健康中国，因为付出所以伟大'
              :
              '加油，为健康中国建设，增砖添瓦'
            }
          </p>
        </div>

        <img data-original="/src/images/activity/hd/20181228/item-2.png" src="/src/images/global/pbg.png" className="lazy item-ft" />
      </div>
    )
  }

}

export default Page;
