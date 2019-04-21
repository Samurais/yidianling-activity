import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Swiper from 'swiper/dist/js/swiper.js';
import Util from '../../../../lib/util';
import API from './api';
import Layout from './components/Layout'
class Page extends Component{
    constructor(props){

        super(props);
        this.state ={
            headimgurl:null,
            nickname: null,
            bannerlist: []
        }
        this.bannerlist = [
            {"image":"https://dummyimage.com/375x400",
            "title":"你的气质最吸引哪种异性？"},
            {"image":"https://dummyimage.com/375x400",
            "title":"你的气质最吸引哪种异性？"},
            {"image":"https://dummyimage.com/375x400",
            "title":"你的气质最吸引哪种异性？"},
        ]
        this.bannersrc = {
            "ico":"https://img.ydlcdn.com/file/2018/11/30/7ik7zsrrxewu1gxl.PNG",
            "title":"你的气质最吸引哪种异性？",
            "price":"9.90",
            "id": "752"
        }
        this.hotlist = [
            {
                "ico":"https://img.ydlcdn.com/file/2018/10/12/vzfy4x4ar1t3rc3e.PNG",
                "title":"专业心理健康测评",
                "subtitle":"为“心”做一次全面体检",
                "count":"20.1",
                "price":"9.90",
                "id":"738"
            },
            {
                "ico":"https://img.ydlcdn.com/file/2018/09/04/tl5pqy7zdad3gpiz.jpg",
                "title":"专业智商测试IQ",
                "subtitle":"8维度评测 智能倾向 职业选择",
                "count":"11.1",
                "price":"9.90",
                "id":"1004"
            },
            {
                "ico":"https://img.ydlcdn.com/file/2018/12/07/dme1uxzslqkgpf4q.PNG",
                "title":"吸引力综合评估",
                "subtitle":"你对谁最有吸引力？",
                "count":"9.1",
                "price":"9.90",
                "id":"1014"
            }
        ];
        this.newlist = [
            {
                "ico":"https://img.ydlcdn.com/file/2018/11/27/pnrdr2yxyymvivmj.jpg",
                "title":"国际标准抑郁症测试题",
                "subtitle":"你的思维方式多容易让你陷入抑郁的深渊？",
                "count":"19.9",
                "price":"9.90",
                "id":"1126"
            },
            {
                "ico":"https://img.ydlcdn.com/file/2018/11/27/1jg999duumesye7o.PNG",
                "title":"焦虑症程度自测",
                "subtitle":"3分钟快速筛查焦虑水平",
                "count":"14.8",
                "price":"9.90",
                "id":"745"
            },
            {
                "ico":"https://img.ydlcdn.com/file/2018/08/28/14kzt4t405o487m0.PNG",
                "title":"恋爱性格匹配探测器",
                "subtitle":"测一测你和Ta的匹配程度",
                "count":"9.1",
                "price":"23.40",
                "id":"730"
            }
        ];
        this.nicelist = [
            {
                "ico":"https://img.ydlcdn.com/file/2018/11/27/ker6b5u1sdz6tuoc.jpg",
                "title":"国际标准情商(EQ)测试",
                "desc":"5分钟，测你的情商是否在线？",
                "count":"13.9",
                "price":"9.90",
                "type":"情感",
                "id":"739"
            },
            {
                "ico":"https://img.ydlcdn.com/file/2018/10/25/g4pfpw8fczuradd7.jpg",
                "title":"出轨倾向评估",
                "desc":"你出轨的几率有多大？",
                "count":"4.5",
                "price":"9.90",
                "type":"情感",
                "id":"1008"
            },
            {
                "ico":"https://img.ydlcdn.com/file/2018/11/29/nf1b2t3ug6azuibl.PNG",
                "title":"恋爱风格评估",
                "desc":"了解你爱Ta的方式，助爱更顺畅",
                "count":"15.8",
                "price":"9.90",
                "type":"情感",
                "id":"732"
            },
            {
                "ico":"https://img.ydlcdn.com/file/2018/08/28/zav5ajllazj4c4xz.PNG",
                "title":"MBTI职业性格测评",
                "desc":"你的性格适合什么样的工作？",
                "count":"10.8",
                "price":"9.90",
                "type":"职场",
                "id":"744"
            },
            {
                "ico":"https://img.ydlcdn.com/file/2018/10/25/lqm9rpfjvxzyn2m3.png",
                "title":"压力源自我筛查器",
                "desc":"你最近感受到的压力从何而来？",
                "count":"6.7",
                "price":"2.99",
                "type":"健康",
                "id":"1129"
            },
            {
                "ico":"https://img.ydlcdn.com/file/2018/10/25/gridul0vnwa64wjw.png",
                "title":"压力应对测试",
                "desc":"压力来袭时，你的应对方式健康吗？",
                "count":"6.5",
                "price":"9.90",
                "type":"健康",
                "id":"749"
            },
            {
                "ico":"https://img.ydlcdn.com/file/2018/10/12/ir70vfwt4k38atec.jpg",
                "title":"性开放度测评",
                "desc":"在这种事情上太保守不太好哦",
                "count":"5.2",
                "price":"19.00",
                "type":"情感",
                "id":"731"
            },
            {
                "ico":"https://img.ydlcdn.com/file/2018/11/29/t1p9dcqwatqqh9cz.PNG",
                "title":"产后抑郁症状风险评估",
                "desc":"高灵敏度和特异度筛查产后抑郁",
                "count":"8.8",
                "price":"17.40",
                "type":"健康",
                "id":"1119"
            }
        ];
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
        API.getCpsBanner().then(res => {
            console.log(res);
            if (res && res.code == 200) {
                this.setState({
                    bannerlist: res.data
                }, function () {
                    new Swiper('#bannerList', {
                        autoplay: true,
                        loop: true,
                        pagination: {
                          el: '.swiper-pagination',
                        },
                    });
                })
            }
        })

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
}
    getHotHtml(item,index){
        return(
            <a href="javascript:" className="js_app_test_item" data-target={`${this.target}_hot`} data-id={item.id} data-url={this.url} key={index}>
                <div className="hot-pro-item">
                    <div className="cover-box">
                        <img  className="cover lazy" data-original={item.ico} src={this.defimg}></img>
                        <p className="count">{item.count}W人已测</p>
                    </div>
                    <div className="title">
                        <span className="c3 b title-bottom">{Util.moreString(item.title, 8)}</span>
                    </div>
                </div>
            </a>
        )
    }
    getNewHtml(item,index){
        return(
            <a href="javascript:" className="js_app_test_item" data-ffrom="0" data-target={`${this.target}_new`} data-id={item.id} data-url={this.url} key={index}>
                <div className="hot-pro-item new-hot-pro-item">
                    <div className="cover-box">
                        <img  className="cover lazy" data-original={item.ico} src={this.defimg}></img>
                        <p className="count">{item.count}W人已测</p>
                    </div>
                    <div className="title">
                        <span className="c3 b title-bottom">{Util.moreString(item.title, 8)}</span>
                    </div>
                </div>
            </a>
        )
    }
    getNiceHtml(item,index){
        return(
            <a href="javascript:" className="js_app_test_item" data-ffrom="0" data-target={`${this.target}_nice`} data-id={item.id} data-url={this.url} key={index}>
                <div className="exam-box">
                    <div className="exam-left">
                        <div className="title">{item.title}</div>
                        <div className="desc">
                            {Util.moreString(item.desc, 26)}
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
        let { bannerlist } = this.state;
        // console.log(bannerlist,"bannerlist")
        return(
            <Layout ffrom={"index"}>
                <div className="white-box white-box-1">
                        <div className="banner-box">
                            <div className="swiper-container" id="bannerList">
                                <ul className="swiper-wrapper">
                                {bannerlist.length>0 && bannerlist.map((item, index) => (
                                    <li key={index} className="swiper-slide">
                                        <a href="javascript:" className="js_app_test_item" data-ffrom="cps_yrww" data-url={item.linkUrl}>
                                        <img className="banner" src={item.image}></img>
                                        </a>
                                    </li>
                                ))}
                                </ul>
                            <div className="swiper-pagination"></div></div>
                        </div>
                    <div className="big-title hot-title">
                        <div className="title-left">
                            <div className="title">
                                <span className="title-text red">热卖</span>
                                <span className="title-text">爆款</span>
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
                            {/* <div className="red-line"></div> */}
                            <div className="title">
                                <span className="title-text blue">新品</span>
                                <span className="title-text">首发</span>
                                <span className="hot-charactor blue">NEW</span>
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
                            {/* <div className="red-line"></div> */}
                            <div className="title">
                                <span className="title-text">精选测评</span>
                            </div>
                        </div>
                    </div>
                    <div className="descript">
                        不容错过的精彩测评
                    </div>
                    <div className="exam-list-box">
                        {this.nicelist.map((item,index)=>
                            this.getNiceHtml(item,index)
                        )}
                    </div>
                </div>
                <div className="bottomWrap">
                    <a href={"/cp/m/20190104/cate"} className={"bottombutton"}>查看更多</a>
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
