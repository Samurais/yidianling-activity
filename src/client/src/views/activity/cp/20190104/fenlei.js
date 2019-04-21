import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import API from './api';
import util from '../../../../lib/util';
import Layout from './components/Layout'
class Page extends Component{
    constructor(props) {

        super(props);
        this.state = {
            headimgurl: null,
            nickname: null,
            tabs: [],
            list: [],
            page: 1,
            loading: true,
            id: 0,
            total: 0
        }
        this.defimg = "/src/images/global/lazy.png";
        //跳转的url
        this.url = "https://m.ydl.com/ceshi/start";
        //底部跳转测评列表
        this.bottomUrl = "https://m.ydl.com/ceshi";
        //埋点的target信息
        this.target = "/cp/m/20190104";
    }
    componentDidMount() {
        $('.tab-wrap').height($(window).height())
        console.log($('.tab-wrap').height())
      let _this = this;
        API.getCpscategory().then(res => {
            console.log("getCpscategory >>>>>>>>>>>>>>>>>")
            console.log(res)
            this.setState({
                tabs: [{ name: '全部', id: 0 }, ...res.data]
            }, () => {

                    this.loadMore(0);
                    this.loadMoreFun()
            })
        });

        $(function(){
          _this.loadMoreFun();
            $("img.lazy").lazyload();
            setTimeout(()=>{
                $("img.lazy").each(function(){
                let _this = $(this);
                let img = _this.data("original");

                _this.attr("src", img);
                });
            },300)
        });
    }
    loadMoreFun() {
        $(window).off("scroll").on("scroll",()=>{
        let height = $(document).height()-$(window).height()-$(window).scrollTop();
        if (height<=60 && this.state.loading) {
            this.loadMore();
        }
        });
    }
    loadMore(id) {
        let ele = this.refs[id];
        $(ele).addClass("activity").siblings().removeClass("activity");
        if (!id) { id = this.state.id };
        this.setState({loading:false})
        let {page}=this.state;
        let params = {
            testTagId: id,
            onlyFee: 1,
            page
        }
        API.getCpsList(params).then(res => {
            let total = res.data.total;
            let listsData = res.data.list;
            // console.log(listsData,"listsData")
            let {list}=this.state;
            if(listsData.length>0){
                ++page;
                //合并两个数组；
                list=list.concat(listsData);
            }
            this.setState({
                loading: true,
                list,
                page,
                total   //总数量
            });
        })
      }
    getListsData() {
        console.log(1);
    }
    tabClick(id) {
        this.setState({
            id:id,
            page:1,
            list:[]
          },()=>{
              this.loadMore(id);
          })
    }
    getNiceHtml(item,index){
        return(
            <a href="javascript:" className="js_app_test_item" data-ffrom="0" data-target={`${this.target}_nice`} data-id={item.id} data-url={this.url} key={index}>
                <div className="exam-box">
                    <div className="exam-left">
                        <div className="title">{item.title}</div>
                        <div className="desc">
                            {util.moreString(item.desc, 26)}
                        </div>
                        <div className="number-box">
                            <span className="yuan">￥</span>
                            <span className="number">{item.price}</span>
                        </div>
                    </div>
                    <div className="exam-middle">{item.count}W人已测</div>
                    <div className="exam-right">
                        <img className="cover lazy" data-original={item.ico} src={this.defimg}></img>
                        <div className="type">
                            {/* <img src="/src/images/activity/cp/20190104/jiaobiao.png" alt=""/> */}
                            <span>{item.type}</span>
                        </div>
                    </div>
                </div>
            </a>
        )
    }
    render() {
        let { tabs, list, loading,total } = this.state;
          //当全部加载完，取消绑定事件
        return(
            <Layout ffrom={"fenlei"}>
                <div className="cp-fenlei flex" style={{marginTop: "44px" }}>
                    <div className="navs">
                        {tabs.length > 0 && tabs.map((item, index) => {
                            return (
                                <div className="nav" key={index} ref={item.id} onClick={() => { this.tabClick(item.id)}}><span>{item.name}</span></div>
                            )
                        })}
                    </div>
                    <div className="exam-list-box">
                        {
                            list.length > 0 && list.map((item, index) => {
                                return (
                                    <a href="javascript:" className="js_app_test_item" data-ffrom="0" data-target={`${this.target}_nice`} data-id={item.id} data-url={this.url} key={index}>
                                        <div className="exam-box">
                                            <div className="exam-left">
                                                <div className="title">{util.moreString(item.name, 12)}</div>
                                                <div className="desc">
                                                    {util.moreString(util.delHtmlTag(item.desc), 26)}
                                                </div>
                                                {/* <div className="number-box">
                                                    <span className="yuan">￥</span>
                                                    <span className="number">{item.price}</span>
                                                </div> */}
                                            </div>
                                            <div className="exam-middle">{item.visitNum < 1000 ? item.visitNum : (item.visitNum/10000).toFixed(1)}W人已测</div>
                                            <div className="exam-right">
                                                <img className="cover" data-original={item.shareImage} src={item.shareImage}></img>
                                                <div className="type">
                                                    {/* <img src="/src/images/activity/cp/20190104/jiaobiao.png" alt=""/> */}
                                                    <span>{item.testTagName}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                )
                            })
                        }
                        {total === list.length ? <div style={{textAlign: "center", marginTop: "16px", color: "#ccc", fontSize: "10px"}}>没有更多了</div> : ""}
                    </div>
                </div>
            </Layout>
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
