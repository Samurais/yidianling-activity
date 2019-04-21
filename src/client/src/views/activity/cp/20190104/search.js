import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Wechat from '../../../../component/wechat';
import Rule from '../../../../component/rules';
import Native from '../../../../component/native';
import Util from '../../../../lib/util';
import API from './api';
import { Toast } from 'antd-mobile';
import $ from 'jquery'
const nicelist = [
    {
        "shareImage":"https://img.ydlcdn.com/file/2018/10/12/vzfy4x4ar1t3rc3e.PNG",
        "name":"心理健康测评",
        "desc":"为“心”做一次全面体检",
        "visitNum":"5.2",
        "price":"9.90",
        "type":"性格",
        "id":"738"
    },
    {
        "shareImage":"https://img.ydlcdn.com/file/2018/11/27/pnrdr2yxyymvivmj.jpg",
        "name":"国际标准抑郁症测试题",
        "desc":"你的思维方式多容易让你陷入抑郁的深渊？",
        "visitNum":"4.5",
        "price":"9.90",
        "type":"健康",
        "id":"1126"
    },
    {
        "shareImage":"https://img.ydlcdn.com/file/2019/01/28/t6cxfqqn684ly92n.jpeg",
        "name":"国际标准情商测试(EQ)",
        "desc":"5分钟，测你的情商是否在线？",
        "visitNum":"9.2",
        "price":"9.90",
        "type":"能力",
        "id":"739"
    },
    {
        "shareImage":"https://img.ydlcdn.com/file/2019/01/11/aumcdtc2aadqc4pc.jpg",
        "name":"爱情听诊器",
        "desc":"距离完美爱情，你们还差些什么呢？",
        "visitNum":"6.8",
        "price":"12.90",
        "type":"爱情",
        "id":"1007"
    },
    {
        "shareImage":"https://img.ydlcdn.com/file/2018/11/27/1jg999duumesye7o.PNG",
        "name":"标准焦虑症程度自测表",
        "desc":"3分钟快速筛查焦虑水平",
        "visitNum":"8",
        "price":"9.90",
        "type":"健康",
        "id":"745"
    },
    {
        "shareImage":"https://img.ydlcdn.com/file/2018/11/12/t9rgfik6qyedepvn.png",
        "name":"原生家庭模式评估",
        "desc":"你真的从你的家庭中独立出来了吗？",
        "visitNum":"6.4",
        "price":"17.40",
        "type":"人际",
        "id":"1012"
    }
];
const tags = [{name: "心理健康"},{name: "抑郁"},{name: "情商"},{name: "爱情"},{name: "焦虑"},{name: "原生家庭"}]
class Page extends Component{
    constructor(props){

        super(props);
        this.state ={
            headimgurl:null,
            nickname: null,
            searchList: nicelist,
            val: ""
        }
        this.defimg = "/src/images/global/lazy.png";
        //跳转的url
        this.url = "https://m.ydl.com/ceshi/start";
        //底部跳转测评列表
        this.bottomUrl = "https://m.ydl.com/ceshi";
        //埋点的target信息
        this.target = "/cp/m/20190104";
        // console.log(props)
    }

    componentDidMount() {
        Rule.init({
          "appId": "m-activity",
          "eventId": "/cp/m/20190104",
          "eventType": "pv",
          "platform": "wap"
        });

        $(function(){
            setTimeout(()=>{
                $("img.lazy").each(function(){
                let _this = $(this);
                let img = _this.data("original");

                _this.attr("src", img);
                });
            }, 300)
            
        });
        this.setState({
            search:location.search
        })
    }
    tabChange (param) {
        console.log(param);
    }
    submitSearch() {
        let content = $('.input-box input').val();
        console.log(content)
        if (!content) {
            Toast.fail("请输入关键字！");
            return false;
        }
        this.getList(content);
    }
    tagClick(name) {
        this.getList(name);
    }
    getList(val) {
        let params = {
            keyword: val,
            onlyFee: 1,
            page: 1,
            perPageRows: 100
        }
        API.getCpsSearch(params).then(res => {
            // console.log(res, "res")
            if (res && res.code == 200) {
                // 隐藏tag
                $('.search-hide').hide();
                $('.tips').show();
                this.setState({
                    searchList: res.data.list,
                    val
                })
            }
        })
    }
    inputKeyUp(e) {
        let content = $('.input-box input').val();
        if (content && content.trim()) {
            $('.close').show();
        } else {
            $('.close').hide();
        }
        if (e.keyCode === 13) {
            this.submitSearch();
        }
    }
    close() {
        $('.input-box input').val("");
    }
    goback() {
        let urlParams = Util.getRequestData();
        let paramsData = Util.jsonToParams(urlParams);
        if (Util.getQueryString("from") == "fenlei") {
            window.location.href = `/cp/m/20190104/cate?${paramsData}`
        } else {
            window.location.href = `/cp/m/20190104?${paramsData}`
        }
    }
    wechatRefresh(self){
        !!self.refs.wechat.state.author && self.refs.wechat.state.author();
    }
    render(){
        return(
            <div className="page-cp-20190104">
                {/* 微信分享和授权 */}
                <Wechat {...this.props.data.wechat}/>
                {/* 跳转 */}
                <Native />
                <div className="page-cp-20190104-search">
                    <div className="search-box">
                        <div className="input-box">
                            <input type="text" placeholder="输入标题与内容" onKeyUp={(event)=>{this.inputKeyUp(event)}}/>
                            <img src="/src/images/activity/cp/20190104/search.png" alt="" onClick={() => {this.submitSearch() }}/>
                            <img className="close hide" src="/src/images/activity/cp/20190104/close.png" alt="" onClick={() => {this.close() }}/>
                        </div>
                        <a href="#" onClick={() => this.goback()}>取消</a>
                    </div>
                    <div className="search-hide">
                        {/* 推荐搜索 */}
                        <div className="search-recommend">
                            <div className="title c9">推荐搜索</div>
                            <div className="tags c3 flex">
                                {tags.map((item, index) => 
                                    <div key={index} className="tag" onClick={()=>{this.tagClick(item.name)}}>{item.name}</div>
                                )}
                            </div>
                        </div>
                        {/* 热门推荐 */}
                        <div className="search-recommend">
                            <div className="title c9" style={{marginBottom: 0}}>热门推荐</div>               
                        </div>
                    </div>
                    {/* 搜索列表 */}
                    <div className="exam-list-box">
                        <div className="tips hide">
                            {this.state.searchList.length > 0 ?
                                <div className="title c9 fz">为您找到以下跟“{this.state.val}”有关的内容</div>
                                :
                                <div className="title c9 fz">未搜索到“{this.state.val}”有关的内容</div>
                            }
                        </div>
                        {
                            this.state.searchList.length > 0 && this.state.searchList.map((item, index) => {
                                return (
                                    <a key={index} href="javascript:" className="js_app_test_item" data-ffrom="0" data-target={`${this.target}_nice`} data-id={item.id} data-url={this.url} key={index}>
                                        <div className="exam-box">
                                            <div className="exam-left">
                                                <div className="title">{item.name}</div>
                                                <div className="desc">
                                                    {Util.moreString(Util.delHtmlTag(item.desc), 26)}
                                                </div>
                                                <div className="number-box">
                                                    <span className="yuan">￥</span>
                                                    <span className="number">{Util.toDecimal2(item.price)}</span>
                                                </div>
                                            </div>
                                            <div className="exam-middle">{item.visitNum < 1000 ? item.visitNum : (item.visitNum/10000).toFixed(1)}W人已测</div>
                                            <div className="exam-right">
                                                <img className="cover lazy" data-original={item.shareImage} src={item.shareImage}></img>
                                                {/* <div className="type"> */}
                                                    {/* <img src="/src/images/activity/cp/20190104/jiaobiao.png" alt=""/> */}
                                                    {/* <span>{item.type}</span> */}
                                                {/* </div> */}
                                            </div>
                                        </div>
                                    </a>
                                )
                            })
                        }
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
