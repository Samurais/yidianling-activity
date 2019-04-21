import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Swiper from 'swiper/dist/js/swiper.js';
import { Modal } from 'antd-mobile';
import Wechat from '../../../../component/wechat';
import Rule from '../../../../component/rules';
import Native from '../../../../component/native';
import Util from '../../../../lib/util';
import Axios from '../../../../servers/axios';
class Page extends Component{
  constructor(props){

    super(props);
    this.state ={
      headimgurl:null,
      nickname:null
    }
    this.bannerimg = "/src/images/activity/cp/banner.png";
    this.hotlist = [
      {
        "ico":"https://img.ydlcdn.com/file/2018/10/12/vzfy4x4ar1t3rc3e.PNG",
        "title":"心理健康测评（专业版）",
        "subtitle":"为“心”做一次全面体检",
        "count":"806.7",
        "price":"9.9",
        "id":"738"
      },
      {
        "ico":"https://img.ydlcdn.com/file/2018/09/04/tl5pqy7zdad3gpiz.jpg",
        "title":"国际标准智商(IQ)测试",
        "subtitle":"8维度评测 智能倾向 职业选择",
        "count":"600.9",
        "price":"9.9",
        "id":"1004"
      },
      {
        "ico":"https://img.ydlcdn.com/file/2018/12/07/dme1uxzslqkgpf4q.PNG",
        "title":"吸引力综合评估",
        "subtitle":"你对谁最有吸引力？",
        "count":"315.5",
        "price":"9.9",
        "id":"1014"
      }
    ];
    this.newlist = [
      {
        "ico":"https://img.ydlcdn.com/file/2018/11/27/pnrdr2yxyymvivmj.jpg",
        "title":"国际标准抑郁症测试题",
        "subtitle":"你的思维方式多容易让你陷入抑郁的深渊？",
        "count":"889.3",
        "price":"9.9",
        "id":"1126"
      },
      {
        "ico":"https://img.ydlcdn.com/file/2018/11/27/1jg999duumesye7o.PNG",
        "title":"标准焦虑症程度自测",
        "subtitle":"3分钟快速筛查焦虑水平",
        "count":"805.3",
        "price":"9.9",
        "id":"745"
      },
      {
        "ico":"https://img.ydlcdn.com/file/2018/09/04/6lye2j2olzlaavkd.jpg",
        "title":"幼儿发展水平评估",
        "subtitle":"你家宝宝正在茁壮成长吗？",
        "count":"332.1",
        "price":"19.9",
        "id":"1005"
      }
    ];
    this.nicelist = [
      {
        "ico":"https://img.ydlcdn.com/file/2019/01/28/t6cxfqqn684ly92n.jpeg",
        "title":"国际标准情商(EQ)测试",
        "desc":"5分钟，测你的情商是否在线？",
        "count":"816.2",
        "price":"9.9",
        "type":"情感",
        "id":"739"
      },
      {
        "ico":"https://img.ydlcdn.com/file/2018/10/25/g4pfpw8fczuradd7.jpg",
        "title":"出轨倾向评估",
        "desc":"你出轨的几率有多大？",
        "count":"445.9",
        "price":"9.9",
        "type":"情感",
        "id":"1008"
      },
      {
        "ico":"https://img.ydlcdn.com/file/2018/12/07/2g4vkupjxk6e4gxr.PNG",
        "title":"测你对孩子性格潜在的影响",
        "desc":"你和爱人对于孩子教养方式的差异",
        "count":"385.1",
        "price":"12",
        "type":"教育",
        "id":"1017"
      },
      {
        "ico":"https://img.ydlcdn.com/file/2018/08/28/zav5ajllazj4c4xz.PNG",
        "title":"MBTI职业性格测评",
        "desc":"你的性格适合什么样的工作？",
        "count":"107.8",
        "price":"9.9",
        "type":"职场",
        "id":"744"
      },
      {
        "ico":"https://img.ydlcdn.com/file/2018/11/27/zkizyd6jbbi28794.PNG",
        "title":"测测你婚姻存在怎样的风险",
        "desc":"婚姻质量综合评估",
        "count":"616.4",
        "price":"19.9",
        "type":"情感",
        "id":"1011"
      },
      {
        "ico":"https://img.ydlcdn.com/file/2019/02/12/20tcaqnvu5ql5226.jpeg",
        "title":"父母胜任力评估（幼儿园版）",
        "desc":"测测你是否具备胜任父母的能力？",
        "count":"5.7",
        "price":"18",
        "type":"教育",
        "id":"1548"
      },
      {
        "ico":"https://img.ydlcdn.com/file/2018/10/12/ir70vfwt4k38atec.jpg",
        "title":"性开放度测评",
        "desc":"在这种事情上太保守不太好哦",
        "count":"103",
        "price":"19",
        "type":"情感",
        "id":"731"
      },
      {
        "ico":"https://img.ydlcdn.com/file/2018/11/29/t1p9dcqwatqqh9cz.PNG",
        "title":"产后抑郁症状风险评估",
        "desc":"高灵敏度和特异度筛查产后抑郁",
        "count":"583.3",
        "price":"17.94",
        "type":"健康",
        "id":"1119"
      }
    ];
    // this.defimg = "/src/images/global/lazy.png";
    //跳转的url
    this.url = "https://m.ydl.com/ceshi/start";
    //底部跳转测评列表
    this.bottomUrl = "https://m.ydl.com/ceshi";
    //埋点的target信息
    this.target = "/cp/m/20190228";
    console.log(props)
  }

  componentDidMount() {
    Rule.init({
      "appId": "m-activity",
      "eventId": "/cp/m/20190228",
      "eventType": "pv",
      "platform": "wap"
    });

    $(function(){
      $("img.lazy").lazyload();

      setTimeout(()=>{
        $("img.lazy").each(function(){
          let _this = $(this);
          let img = _this.data("original");

          _this.attr("src", img);
        });
      },300)
    });
    console.log("location",location);
    this.setState({
      search:location.search
    })
  }
  setTopBox(){
    // let url=`https://m.ydl.com/ceshi/my-test${location.search}`;
    let {search} =this.state;
    let url =!!search ? `https://m.ydl.com/ceshi/my-test${search}`:`https://m.ydl.com/ceshi/my-test`;
    return(
      <a href={url}>
        <div className="top-fixed-box">
          <img className="note" src="/src/images/activity/cp/20190104/top_icon.png"/>
          <span className="title">测试记录</span>
        </div>
      </a>
    )
  }
  getHotHtml(item,index){
    return(
      <a href="javascript:" className="js_app_test_item" data-ffrom="cps_yrww" data-target={`${this.target}_hot`} data-id={item.id} data-url={this.url} key={index}>
        <div className="hot-pro-item">
          <div className="cover-box">
            <img  className="cover lazy" data-original={item.ico}></img>
            <p className="count">{item.count}W人已测</p>
          </div>
          <div className="title">
            {Util.moreString(item.title, 14)}
          </div>
          <div className="number-box">
            <span className="yuan">￥</span>
            <span className="number">{item.price}</span>
          </div>
        </div>
      </a>
    )
  }
  getNewHtml(item,index){
    return(
      <a href="javascript:" className="js_app_test_item" data-ffrom="cps_yrww" data-target={`${this.target}_new`} data-id={item.id} data-url={this.url} key={index}>
        <div className="hot-pro-item new-hot-pro-item">
          <div className="cover-box">
            <img  className="cover lazy" data-original={item.ico}></img>
            <p className="count">{item.count}W人已测</p>
          </div>
          <div className="title new-title">
            {Util.moreString(item.title, 14)}
          </div>
          <div className="number-box">
            <span className="yuan">￥</span>
            <span className="number">{item.price}</span>
          </div>
        </div>
      </a>
    )
  }
  getNiceHtml(item,index){
    return(
      <a href="javascript:" className="js_app_test_item" data-ffrom="cps_yrww" data-target={`${this.target}_nice`} data-id={item.id} data-url={this.url} key={index}>
        <div className="exam-box">
          <div className="exam-left">
            <div className="title">{item.title}</div>
            <div className="desc">
              {Util.moreString(item.desc, 26)}
            </div>
            <div className="exam-bottom">
              <div className="number-box">
                <span className="yuan">￥</span>
                <span className="number">{item.price}</span>
              </div>
              <div className="exam-middle">{item.count}W人已测</div>
            </div>
          </div>
          <div className="exam-right">
            <img className="cover lazy" data-original={item.ico}></img>
            <div className="type">{item.type}</div>
          </div>
        </div>
      </a>
    )
  }

  wechatRefresh(self){
    !!self.refs.wechat.state.author && self.refs.wechat.state.author();
  }

  render(){
    return(
      <div>
        {/* 微信分享和授权 */}
        <Wechat {...this.props.data.wechat}/>
        {/* 跳转 */}
        <Native />
        <div className="page-cp-20190228">
          <div className="white-box white-box-1">
            {this.setTopBox()}
            {/* <div className="top-fixed-box">
                            <img className="logo lazy" data-original="/src/images/activity/cp/20190104/logo.png" src={this.defimg}></img>
                            <span className="title">专业心理测评</span>
                        </div> */}
            <div className="banner-box">
              <img className="banner lazy" data-original={this.bannerimg}></img>
            </div>
            <div className="big-title hot-title">
              <div className="title-left">
                <div className="red-line"></div>
                <div className="title">
                  <span className="title-text">热卖爆款</span>
                  <span className="hot-charactor">HOT</span>
                </div>
              </div>
            </div>
            <div className="descript">
              不容错过的精彩测评
            </div>
            <div className="hot-pro-scroll">
              <div className="hot-pro-box">
                {this.hotlist.map((item,index)=>
                  this.getHotHtml(item,index)
                )}
              </div>
            </div>
          </div>
          <div className="white-box white-box-2">
            <div className="big-title new-title">
              <div className="title-left">
                <div className="red-line"></div>
                <div className="title">
                  <span className="title-text">首发新品</span>
                </div>
              </div>
            </div>
            <div className="descript">
              用新的视角遇见更好的自己
            </div>
            <div className="hot-pro-scroll scroll-2">
              <div className="hot-pro-box">
                {this.newlist.map((item,index)=>
                  this.getNewHtml(item,index)
                )}
              </div>
            </div>
          </div>
          <div className="white-box white-box-3">
            <div className="big-title nice-title">
              <div className="title-left">
                <div className="red-line"></div>
                <div className="title">
                  <span className="title-text">精彩测评</span>
                </div>
              </div>
              {/* <a href="javascript:" className="js_app_test_list" data-target={`${this.target}_more`} data-url={this.bottomUrl}>
                                <div className="title-right">
                                    <span className="more-text">更多</span>
                                    <img className="arrow lazy" data-original="/src/images/activity/cp/20190104/arrow_right.png" src={this.defimg}></img>
                                </div>
                            </a> */}
            </div>
            <div className="exam-list-box">
              {this.nicelist.map((item,index)=>
                this.getNiceHtml(item,index)
              )}
            </div>
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
