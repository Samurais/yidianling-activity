import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rule from '../../../../component/rules';
import Wechat from '../../../../component/wechat';
import Newbottom from './component/Newbottom';
import Native from '../../../../component/native';
import {Modal} from "antd-mobile";

class Demo extends Component {

  constructor(props) {
    super(props)
    this.pagePicList1 = [
      {
        "name":"/src/images/activity/love/wanhui/20190130/1.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190130/2.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190130/3.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190130/4.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190130/5.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190130/6.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190130/7.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190130/8.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190130/9.png"
      }
    ]
    this.state={
      ceshi_bg:"/src/images/activity/love/wanhui/20190130/10.png",
      result:"/src/images/activity/love/wanhui/20190130/12.png",
      ceshiList:this.ceshiList,
      active:1,
    }
    this.defImg = "/src/images/global/lazy.png";
    this.target = "/love/m/20190130";
  }
  componentWillUnmount() {

  }

  componentDidMount(){
    let _this = this;
    let eventId = "/love/wanhui/m/20190130";

    Rule.init({
      "appId": "m-activity",
      "eventId": "/love/wanhui/m/20190130",
      "eventType": "pv",
      "platform": "wap"
    });

    // 判断是否点击过客服，如果没有，那么
    if (!localStorage.getItem(eventId)) {
      setTimeout(()=>{
        _this.showModal("modal");
      },15000);
    }
    $(function(){
      $("img.lazy").lazyload();

      setTimeout(()=>{
        $("img.lazy").each(function(){
          let _this = $(this);
          let img = _this.data("original");
          _this.attr("src", img);
        });

      },300);
      // 隐藏客服
      setTimeout(()=>{
        $("#LRdiv0,#LRdiv1,#LRdiv2,#LRdiv3").attr("style","visibility:hidden;");
        setTimeout(()=>{
          $("#LRdiv0,#LRdiv1,#LRdiv2,#LRdiv3").attr("style","display:none;");
        },300)
      })
    });

  }
  changeActive(num,e){
    e.stopPropagation();
    let {active}=this.state;
    if(num>0){
      active++;
    }else{
      if(active==1)return false;
      active--;
    }
    this.setState({active});
  }
  getHtml(item,index){
    let element;
    element = item.id? 
      <a className="js_kf" key={index} href="javascript:" data-target={index == 0 ? "/love/m/20190130_ask1":"/love/m/20190130_ask2"}>
        <div className="container">
          <img className="item lazy" data-original={item.name} src={this.defImg} key={index}/>
        </div>
      </a>
    :
      <div className="container" key={index}>
        <img className="item lazy" data-original={item.name} src={this.defImg} key={index}/>
      </div>
    ;
    return element;
  }
  getCeshiBox(){
    let {ceshi_bg,result,active}=this.state;
    let element =
      <div className="ceshi-box">
        <img className="ceshi-bg" src={ceshi_bg}/>
        {active<8?
        this.getCeshiList()
        :
        <a className="js_kf" href="javascript:"data-target="/love/m/20190130_ceshijump">
          <img className="ceshi-bg" src={result}/>
        </a>}
      </div>
    return element;
  }
  getCeshiList(){
    let element;
    let {active}=this.state;
    element =active == 7? 
    <div className="ceshi-item">
      <img className="item-7" src={`/src/images/activity/love/wanhui/20190130/11-${active}.png`} />
      <div className="next5 js_hmt_click" onClick={(e)=>this.changeActive(1,e)} data-target="/love/m/20190130_ceshi"></div>
    </div>
    :
    <div className="ceshi-item">
      <img src={`/src/images/activity/love/wanhui/20190130/11-${active}.png`}/>
      <div className="last js_hmt_click" onClick={(e)=>this.changeActive(0,e)} data-target="/love/m/20190130_ceshi"></div>
      <div className="next1 js_hmt_click" onClick={(e)=>this.changeActive(1,e)} data-target="/love/m/20190130_ceshi"></div>
      <div className="next2 js_hmt_click" onClick={(e)=>this.changeActive(1,e)} data-target="/love/m/20190130_ceshi"></div>
      <div className="next3 js_hmt_click" onClick={(e)=>this.changeActive(1,e)} data-target="/love/m/20190130_ceshi"></div>
      {active != 3 ? <div className="next4 js_hmt_click" onClick={(e)=>this.changeActive(1,e)} data-target="/love/m/20190130_ceshi"></div>:""}
    </div>
    return element;
  }
  showModal(key) {
    this.setState({
      [key]: true,
    });
  }

  onClose(key){
    return () => {
      this.setState({
        [key]: false,
      });
    }
  }
  render() {
    return (
    <div>
        {/* 微信分享 */}
        <Wechat {...this.props.data.wechat}/>
        {/* 跳转 */}
        <Native />
        <div className="page-love-wanhui-20190130">
          {this.pagePicList1.map((item,index)=>
            this.getHtml(item,index)
          )}
          {/* 测试 */}
          {this.getCeshiBox()}
          <div className="in-bottom"></div>
          {/* 底部 */}
          <Newbottom target={this.target}/>
          {/* 隐藏的图片 */}
          <img className="hide-img" src={`/src/images/activity/love/wanhui/20190130/12.png`}/>
        </div>
      <Modal
        visible={this.state.modal}
        transparent
        maskClosable={true}
        className="modal-wanhui20181130"
      >
        <div className="modal-content">
          <div className="pic">
            <a href="javascript:" data-target="/love/wanhui/m/20181130-A3_modal" className="js_kf">
              <img src="/src/images/activity/love/wanhui/20181130-A3/modal.png" />
            </a>
          </div>
          <a href="javascript:" className="js_close" data-target="/love/wanhui/m/20181130-A3_close_modal" onClick={this.onClose('modal')}></a>
        </div>
      </Modal>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
	return {
		data: state.data,
	}
}

Demo = connect(mapStateToProps)(Demo);
export default Demo;
