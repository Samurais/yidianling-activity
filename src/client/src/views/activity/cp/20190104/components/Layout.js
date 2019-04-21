import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Wechat from '../../../../../component/wechat';
import Rule from '../../../../../component/rules';
import Native from '../../../../../component/native';

class Page extends Component{
    constructor(props){

        super(props);
        this.state ={
            headimgurl:null,
            nickname: null,
            url: ""
        }
        this.url = "https://m.ydl.com/ceshi/my-test"
    }

    componentDidMount() {

        // console.log(this.props.from)

        let url = window.location.pathname;
        this.setState({
            url,
            from: this.props.ffrom
        })
        Rule.init({
            "appId": "m-activity",
            "eventId": "/cp/m/20190104",
            "eventType": "pv",
            "platform": "wap"
        });
    }
    setTopBox(){
        return(
            <div className="top-fixed-box">
                <span className="title" style={{paddingLeft: "20px"}}>心理测试</span>
                <div className="top-search js_app_test_item" data-url={`/cp/m/20190104/search`} data-ffrom={`${this.state.from}`}>
                    <input type="text" placeholder="搜索"/>
                    <img src="/src/images/activity/cp/20190104/search.png" alt="" />
                </div>
            </div>
        )
    }
    render() {
        // console.log(this.props,"props") 
        return (
        <div style={{backgroundColor: "#fff"}}>
        {/* 微信分享和授权 */}
        <Wechat {...this.props.data.wechat}/>
        {/* 跳转 */}
        <Native />
        <div className="page-cp-20190104">
            {this.setTopBox()}
            <div className="fix-bottom">
                <a data-url={"/cp/m/20190104"} className={this.state.url == "/cp/m/20190104" ? "bottom bottom-home activity js_app_test_item": "bottom bottom-home js_app_test_item"}>
                <div className="tab-img"></div>
                <span>首页</span>
                </a>
                <a data-url={"/cp/m/20190104/cate"} className={this.state.url == "/cp/m/20190104/cate" ? "bottom bottom-cate activity js_app_test_item": "bottom bottom-cate js_app_test_item"}>
                    <div className="tab-img"></div>
                    <span>分类</span>
                </a>
                <a data-url={this.url} className="bottom bottom-mine js_app_test_item">
                    <div className="tab-img"></div>
                    <span>我的</span>
                </a>
            </div>
             <div className="tab-wrap">
                {this.props.children}       
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
