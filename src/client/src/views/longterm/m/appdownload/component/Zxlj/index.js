import React, {Component} from 'react';
import { Tabs } from 'antd-mobile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Title from '../Title';
import API from '../../../../servers/m/appdownload';

class Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: {
        "tabs1": [],
        "tabs2": [],
        "tabs3": [],
        "tabs4": [],
        "tabs5": [],
        "tabs6": [],
        "tabs7": [],
        "tabs8": [],
      },
      tabs: [
        {"title": "恋爱婚姻", "id": "tabs1", "categorys": "1"},
        {"title": "情绪压力", "id": "tabs2", "categorys": "27"},
        {"title": "个人成长", "id": "tabs3", "categorys": "26"},
        {"title": "家庭关系", "id": "tabs4", "categorys": "21"},
        {"title": "人际关系", "id": "tabs5", "categorys": "25"},
        {"title": "孩子教育", "id": "tabs6", "categorys": "23"},
        {"title": "职业发展", "id": "tabs7", "categorys": "22"},
        {"title": "法律咨询", "id": "tabs8", "categorys": "229"},
      ],
    }

    this.tabs = {}

    this.defImg = "/src/images/global/lazy.png";
  }

  componentDidMount() {
    this.getTabCut(this.state.tabs[0]);
    this.moreLink(this.state.tabs[0].categorys);
  }

  moreLink(type){
    $(".mod-zxlj .js_more").attr("href", `${this.props.jump}/experts/search?cat=${type}`);
  }

  async getTabCut(tab) {

    let data = await API.doctorSearch({
      categorys: tab.categorys,
      page:1,
    });

    if(!!!data.data) return;

    let list = data.data.list;

    let dataList = [];

    if(!!list) {
      for(let i=0, l=list.length; i<=l; i++) {
        if(i > 2) break;
        if(!!list[i]) dataList.push(list[i]);
      }
    }

    this.tabs[tab.categorys] = true;

    this.state.list[tab.id] = !!dataList.length ? dataList : null;
    //this.state.list[tab.id] = dataList;

    let stateDataList = Object.assign({}, this.state.list);

    this.setState({
      list: stateDataList
    }, function(){
      $(".mod-zxlj .lazyinfo").each(function(){
        $(this).attr("src", $(this).data("original"));
      });
    });
  }

  getTabsList(item, index) {

    return (
      <div className="tabs-list" key={index}>
        {
          !!this.state.list[item.id]
          ?
          !!this.state.list[item.id].length
          ?
          this.getList(this.state.list[item.id], 'list'+index)
          :
          <div className="loading"></div>
          :
          <div className="ignore">暂无数据</div>
        }
      </div>
    )
  }

  getList(item, index) {

    return (
      <div className="list" key={index}>
        <ul>
          {item.map((item, index) => (
            this.getListInfo(item, 'item'+index)
          ))}
        </ul>
      </div>
    )
  }

  getListInfo(item, index) {

    return (
      <li key={index} className="item">
        <a href={this.props.jump} data-target={`zxlj-${index}`}>
          <dl>
            <dt>
              <img data-original={item.doctorHead} src={this.defImg} className="lazyinfo" />
            </dt>

            <dd>
              <strong>
                {item.doctorName}
                {true ? <i></i> : ""}
              </strong>
              <div className="sign">
                {item.tags.map((item2, index) => (
                  this.getListSign(item2, "sign"+index)
                ))}
              </div>
              <div className="info">
                <span><em>{item.zixunOrderNum}</em>咨询次数</span>
                <span><em>{item.feedbackRate}%</em>好评率</span>
              </div>
              <div className="price"><em><sup>¥</sup>{item.serviceFee || 0}</em>起</div>
              <span className="link">私聊</span>
            </dd>
          </dl>
        </a>
      </li>
    )
  }

  getListSign(item, index){
    return (
      <span key={index}>{item}</span>
    )
  }

  render() {

    return (
      <div>
        <div className="mod-zxlj">
          <Title title="/src/images/longterm/appdownload/title-zxlj.png" link={this.props.jump} />

          <div className="content">
            <Tabs
              tabs={this.state.tabs}
              initialPage={0}
              swipeable={false}
              animated={true}
              useOnPan={false}
              prerenderingSiblingsNumber={this.state.tabs.length}
              onChange={(tab, index) => {
                if(!!!this.tabs[tab.categorys]) {
                  this.getTabCut(tab);
                }
                this.moreLink(tab.categorys);
              }}
            >
              {this.state.tabs.map((item, index) => (
                this.getTabsList(item, index)
              ))}
            </Tabs>
          </div>
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
