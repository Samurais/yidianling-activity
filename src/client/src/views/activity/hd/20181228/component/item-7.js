import React, {Component} from 'react';
import API from '../api';

class Page extends Component {

  constructor(props) {

    super(props);
  }

  componentDidMount() {
  }

  render() {

    let dataInfo = this.props.data;

    return (
      <div className="item item-7 js_item_touch" data-type="7">

        <div className="item-top box-shadow js_auto_item">
          <div className="item-top-top">
            <div className="person">
              <dl>
                <dt><img src={dataInfo.head} /></dt>
                <dd>
                  <strong>{dataInfo.doctorName}</strong>
                  <p>{dataInfo.title}</p>
                  <a href={`https://m.ydl.com/experts/${dataInfo.doctorId}`} className="js_doctor_detail">了解更多</a>
                </dd>
              </dl>
            </div>

            <div className="line"></div>
          </div>

          <div className="heartbon_box">
            <div className="heartbon">
              <div className="js_zanCount">
                <span className="heart move-sign"></span>
                <span className="text">{this.props.zanCount}</span>
              </div>
            </div>

            <div className="zan">为{dataInfo.doctorName}点赞</div>
          </div>

        </div>

        <div className="item-bottom box-shadow">
          <a href="https://m.ydl.com/app" className="js_appdownload"></a>
        </div>
      </div>
    )
  }

}

export default Page;
