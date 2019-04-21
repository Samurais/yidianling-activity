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
class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {
			headimgurl: null,
			nickname: null
		};
		this.bannerimg = '/src/images/activity/cp/banner.png';
		this.hotlist = [
			{
				ico: 'https://img.ydlcdn.com/file/2018/11/30/vz718jca3swbobd4.PNG',
				title: '职场暗黑人格测评',
				subtitle: '你职场工作中的阴暗面有多大？',
				count: '4.7',
				price: '9.9',
				id: '746'
			},
			{
				ico: 'https://img.ydlcdn.com/file/2018/10/25/68164qq3eiljm6zj.jpg',
				title: '职业兴趣挖掘机',
				subtitle: '连喜欢做什么都不知道，和咸鱼有什么区别',
				count: '3.5',
				price: '9.9',
				id: '1132'
			},
			{
				ico: 'https://img.ydlcdn.com/file/2019/03/28/2ss22j3k0hqluglz.jpg',
				title: '管理优势测评',
				subtitle: '在管理中，你最大的优势是什么？',
				count: '2.4',
				price: '19.9',
				id: '743'
			}
		];
		this.newlist = [
			{
				ico: 'https://img.ydlcdn.com/file/2019/01/11/e8g0kyp8eynhbj38.jpg',
				title: '成功心态评估',
				subtitle: '你的成功取决于你的态度',
				count: '2.1',
				price: '9.9',
				id: '742'
			},
			{
				ico: 'https://img.ydlcdn.com/file/2018/08/28/zav5ajllazj4c4xz.PNG',
				title: '职业性格测评',
				subtitle: '你的性格适合什么样的工作？',
				count: '10.8',
				price: '9.9',
				id: '744'
			},
			{
				ico: 'https://img.ydlcdn.com/file/2019/01/11/obmi8qadddwm4jzz.jpg',
				title: '压力应对测试',
				subtitle: '压力来袭时，你的应对方式健康吗？',
				count: '6.5',
				price: '9.9',
				id: '749'
			}
		];
		this.nicelist = [
			{
				ico: 'https://img.ydlcdn.com/file/2018/08/28/hphdook5e5lmknki.PNG',
				title: '工作适合度评估',
				desc: '职业目标期望需求满意度评测',
				count: '5.0',
				price: '12',
				type: '职场',
				id: '737'
			},
			{
				ico: 'https://img.ydlcdn.com/file/2019/01/14/p20eji0hqvttm7u9.jpeg',
				title: '深度思考力评估',
				desc: '测测你的思维优势是什么？',
				count: '3.3',
				price: '9.9',
				type: '职场',
				id: '1125'
			},
			{
				ico: 'https://img.ydlcdn.com/file/2019/01/11/teaw4id3463ponaf.jpg',
				title: '就业综合指导测评',
				desc: '想获得一份好工作，你还差什么？',
				count: '2.4',
				price: '17.4',
				type: '职场',
				id: '1501'
			},
			{
				ico: 'https://img.ydlcdn.com/file/2018/12/21/96qryd8igakk539t.jpg',
				title: '职场人际敏锐度评估',
				desc: '如何构建良好的职场人际关系',
				count: '7.3',
				price: '12',
				type: '职场',
				id: '1531'
			},
			{
				ico: 'https://img.ydlcdn.com/file/2019/03/11/0ewp283ft7w1cytn.jpg',
				title: '决策力专业评估',
				desc: '你还会做多少后悔终生的决定？',
				count: '1.7',
				price: '29.4',
				type: '职场',
				id: '1752'
			}
		];
		// this.defimg = "/src/images/global/lazy.png";
		//跳转的url
		this.url = 'https://m.ydl.com/ceshi/start';
		//底部跳转测评列表
		this.bottomUrl = 'https://m.ydl.com/ceshi';
		//埋点的target信息
		this.target = '/cp/m/20190328';
		console.log(props);
	}

	componentDidMount() {
		Rule.init({
			appId: 'm-activity',
			eventId: '/cp/m/20190328',
			eventType: 'pv',
			platform: 'wap'
		});

		$(function() {
			$('img.lazy').lazyload();

			setTimeout(() => {
				$('img.lazy').each(function() {
					let _this = $(this);
					let img = _this.data('original');

					_this.attr('src', img);
				});
			}, 300);
		});
		console.log('location', location);
		this.setState({
			search: location.search
		});
	}
	setTopBox() {
		// let url=`https://m.ydl.com/ceshi/my-test${location.search}`;
		let { search } = this.state;
		let url = !!search ? `https://m.ydl.com/ceshi/my-test${search}` : `https://m.ydl.com/ceshi/my-test?ttab=no_tab`;
		return (
			<div>
				<div className="top-fixed-box">
					{/* <img className="note" src="/src/images/activity/cp/20190104/top_icon.png"/> */}
					<img className="note" src="/src/images/activity/cp/20190328/mm_ydl.png" />
					<a className="title" href={url}>
						<img src="/src/images/activity/cp/20190328/icon.png" />
					</a>
				</div>
			</div>
		);
	}
	getHotHtml(item, index) {
		return (
			<a
				href="javascript:"
				className="js_app_test_item"
				data-ttab="no_tab"
				data-ffrom="0"
				data-target={`${this.target}_hot`}
				data-id={item.id}
				data-url={this.url}
				key={index}
			>
				<div className="hot-pro-item">
					<div className="cover-box">
						<img className="cover lazy" data-original={item.ico} />
						<p className="count">{item.count}W人已测</p>
					</div>
					<div className="title">{Util.moreString(item.title, 14)}</div>
					<div className="number-box">
						<span className="yuan">￥</span>
						<span className="number">{item.price}</span>
					</div>
				</div>
			</a>
		);
	}
	getNewHtml(item, index) {
		return (
			<a
				href="javascript:"
				className="js_app_test_item"
				data-ttab="no_tab"
				data-ffrom="0"
				data-target={`${this.target}_new`}
				data-id={item.id}
				data-url={this.url}
				key={index}
			>
				<div className="hot-pro-item new-hot-pro-item">
					<div className="cover-box">
						<img className="cover lazy" data-original={item.ico} />
						<p className="count">{item.count}W人已测</p>
					</div>
					<div className="title new-title">{Util.moreString(item.title, 14)}</div>
					<div className="number-box">
						<span className="yuan">￥</span>
						<span className="number">{item.price}</span>
					</div>
				</div>
			</a>
		);
	}
	getNiceHtml(item, index) {
		return (
			<a
				href="javascript:"
				className="js_app_test_item"
				data-ttab="no_tab"
				data-ffrom="0"
				data-target={`${this.target}_nice`}
				data-id={item.id}
				data-url={this.url}
				key={index}
			>
				<div className="exam-box">
					<div className="exam-left">
						<div className="title">{item.title}</div>
						<div className="desc">{Util.moreString(item.desc, 26)}</div>
						<div className="exam-bottom">
							<div className="number-box">
								<span className="yuan">￥</span>
								<span className="number">{item.price}</span>
							</div>
							<div className="exam-middle">{item.count}W人已测</div>
						</div>
					</div>
					<div className="exam-right">
						<img className="cover lazy" data-original={item.ico} />
						<div className="type">{item.type}</div>
					</div>
				</div>
			</a>
		);
	}

	wechatRefresh(self) {
		!!self.refs.wechat.state.author && self.refs.wechat.state.author();
	}

	render() {
		return (
			<div>
				{/* 微信分享和授权 */}
				<Wechat {...this.props.data.wechat} />
				{/* 跳转 */}
				<Native />
				<div className="page-cp-20190328">
					<div className="white-box white-box-1">
						{this.setTopBox()}
						{/* <div className="top-fixed-box">
                            <img className="logo lazy" data-original="/src/images/activity/cp/20190104/logo.png" src={this.defimg}></img>
                            <span className="title">专业心理测评</span>
                        </div> */}
						<div className="banner-box">
							<img className="banner lazy" data-original={this.bannerimg} />
						</div>
						<div className="big-title hot-title">
							<div className="title-left">
								<div className="red-line" />
								<div className="title">
									<span className="title-text">热卖爆款</span>
									<span className="hot-charactor">HOT</span>
								</div>
							</div>
						</div>
						<div className="descript">不容错过的精彩测评</div>
						<div className="hot-pro-scroll">
							<div className="hot-pro-box">
								{this.hotlist.map((item, index) => this.getHotHtml(item, index))}
							</div>
						</div>
					</div>
					<div className="white-box white-box-2">
						<div className="big-title new-title">
							<div className="title-left">
								<div className="red-line" />
								<div className="title">
									<span className="title-text">首发新品</span>
								</div>
							</div>
						</div>
						<div className="descript">用新的视角遇见更好的自己</div>
						<div className="hot-pro-scroll scroll-2">
							<div className="hot-pro-box">
								{this.newlist.map((item, index) => this.getNewHtml(item, index))}
							</div>
						</div>
					</div>
					<div className="white-box white-box-3">
						<div className="big-title nice-title">
							<div className="title-left">
								<div className="red-line" />
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
							{this.nicelist.map((item, index) => this.getNiceHtml(item, index))}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.data
	};
};

Page = connect(mapStateToProps)(Page);

Page.propTypes = {
	data: PropTypes.string
};

export default Page;
