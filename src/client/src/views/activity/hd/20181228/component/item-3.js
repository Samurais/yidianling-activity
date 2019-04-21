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
      <div className="item item-3 box-shadow js_item_touch"  data-type="3">
        <span className="t t-3"></span>

        <div className="text-content">
          <p>累计咨询时数 <Number number={dateInfo.totalServiceHours.toString().split("")} /> 小时</p>
          <p>超越了 <Number number={Math.floor(dateInfo.serviceHoursRank*100).toString().split("")} unit="%" /> 平台的咨询师</p>
          <p>勤奋的{this.props.nickname}</p>
          <p>抚慰了 <Number number={dateInfo.affectPeopleNum.toString().split("")} /> 颗受伤的心</p>
        </div>

        <img data-original="/src/images/activity/hd/20181228/item-3.png" src="/src/images/global/pbg.png" className="lazy item-ft" />
      </div>
    )
  }

}

export default Page;
