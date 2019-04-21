import React, {Component} from 'react';
import Pulltorefresh from '../../../../../component/pullToRefresh';
import base from "./base";
import API from '../../../servers2/zonghe';


import { Toast } from 'antd-mobile';

class ComponentModal extends Component {

  constructor(props) {

    super(props)

    this.hasMore = true;
    this.first = true;
    this.page = 1;
    this.limit = this.props.limit;
    this.cur = this.props.cur;
    this.cate = this.props.cate;
  }

  componentWillMount() {

  }
  componentDidMount() {

  }

  change(data) {

    this.cur = data.cur;

    this.props.setChange({
      refs: this,
      name: data.name,
    });

    this.refs[this.props.name].refreshData({
      type: "cut",
      cur: data.cur,
    });
  }

  // 子组建来调用
  ckPTR(ck, _this, _thisP) {

    API.wapDoctorList({
      category: _this.cate,
      limit: _this.limit,
      page: _this.page

    }).then((res) => {

      _this.first = false;

      _thisP.refreshData({
        type: "refresh",
        list: res.data,
        hasMore: _this.hasMore,
        cur: _this.cur,
      }, ck);

      ++_this.page;

      if(_this.page >= res.total_page) {
        _this.hasMore = false;
      }
    }).catch(v => {

      Toast.fail("服务器似乎开了小差，请切换下试试！");
    });
  }

  render() {
    return (
      <Pulltorefresh
        key={this.props.name}
        ref={this.props.name}
        limit={this.props.limit}
        getRowHTML={this.props.getRowHTML}
        ck={this.ckPTR}
        self={this}
      />
    );
  }
}

ComponentModal = base(ComponentModal);

export default ComponentModal;
