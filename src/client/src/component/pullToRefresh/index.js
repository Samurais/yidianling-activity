import React, {Component} from 'react';
import { ListView } from 'antd-mobile';

class pullToRefresh extends Component {

  constructor(props) {

    super(props)

    // 判断数据是否改变，获取到改变的数据，这里是指添加的数据
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })

    this.state = {
      dataSource,
    }

    this.pageIndex = 0;
    this.len = 0;
    this.listData = [];
    this.hasMore = true;
    this.lenTotal = 0;
    this.isLoading = true;
    this.cur = false;
  }

  /**
   *
   * @param {Number} pIndex
   * 获取到行数据对象 {0: "row - 0"， 1: "row - 1"}
   */
  genData(pIndex = 0) {

    const dataBlob = {};
    const COUNT = this.len;

    for (let i = 0; i < COUNT; i++) {
      //const ii = (pIndex * COUNT) + i;
      const ii = this.lenTotal++;

      dataBlob[`${ii}`] = `row - ${ii}`;
    }

    return dataBlob;
  }

  // 得到当前行
  getRow(data, index = 0) {

    return (rowData, sectionID, rowID) => {

      const obj = data[index];
      index++;

      return this.props.getRowHTML(obj, index, rowID);
    }
  }

  // 加载
  refreshInit() {

    this.props.ck(() => {

      this.rData = { ...this.rData, ...this.genData(this.pageIndex++) };

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
      });
    }, this.props.self, this);
  }

  // 此方法为父组建调用
  refreshData(data, ck){

    if(data.type == "cut") {
      this.cur = data.cur;
      return;
    }

    this.hasMore = data.hasMore;
    this.listData = data.list;
    this.cur = data.cur;
    this.len = this.listData.length;

    typeof ck === "function" && ck();
  }

  onEndReached(event) {

    console.log("onEndReached >>>>>>>>>>>>>")
    console.log(this.hasMore)

    if(!this.hasMore || !this.cur) return false;

    this.refreshInit();
  }

  renderFooterFn() {

    return (<div style={{ padding: 0, textAlign: 'center' }}>
      {this.hasMore ? '正在加载中...' : '没有更多了'}
    </div>)
  }

  render() {
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}

        renderFooter={this.renderFooterFn.bind(this)}
        renderRow={this.getRow(this.listData)}
        pageSize={+this.props.limit}
        useBodyScroll
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached.bind(this)}
        onEndReachedThreshold={50}
        scrollEventThrottle={25}
      />
    )
  }
}

export default pullToRefresh;
