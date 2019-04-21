
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import API from './api';

class Page extends Component {

  constructor(props) {

    super(props);

    this.state = {
      data: [],
      laoshiCount: 0,
      zanCount: 0,
      maxCount: 0,
    }

  }

  componentDidMount() {
    API.getExpertTotalCount({mid: "ydlluckyml"}).then(res => {
      let r = [];
      let i = 0;
      let laoshiCount = 0;
      let maxCount = 0;
      let zanCount = 0;

      for(let a in res.data){
        r[a] = JSON.parse(res.data[a]);
        laoshiCount++;
        maxCount = Math.max(maxCount, +r[a].count);
        zanCount+= +r[a].count;
      }

      this.setState({
        data: r,
        laoshiCount,
        maxCount,
        zanCount,
      })
    });
  }

  getData(item, index){

    return (
      <div className="zanCountItem" key={index}>
        <span>姓名: {item.name}</span>
        <span>点赞: {item.count}</span>
        <span>uid: {item.uid}</span>
      </div>
    )
  }

  render() {

    return (
      <div>
        <div className="page-term-hd-20181228">
          <div className="zanCountItem">
            <span>老师数： {this.state.laoshiCount}</span>
            <span>点赞数： {this.state.zanCount}</span>
            <span>最大数： {this.state.maxCount}</span>
          </div>

          {this.state.data.map((item, index) => (
            this.getData(item, index)
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		data: state.data,
	}
}

Page = connect(mapStateToProps)(Page);

Page.propTypes = {
  data: PropTypes.string
}

export default Page;
