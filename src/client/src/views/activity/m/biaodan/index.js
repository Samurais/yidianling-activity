import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import API from '../../servers2/biaodan';
import Rule from '../../../../component/rules';
import { Toast, Modal } from 'antd-mobile';

import {storage} from '../../../../lib/compatible';
import Swiper from 'swiper/dist/js/swiper.js';

import Wechat from '../../../../component/wechat';

class Page extends Component {

  constructor(props) {

    super(props);

    this.wechatData = this.props.data.wechat;

    this.state = {
      modal: false
    }
    this.introList = [
      {
        "ico": "i-1",
        "title": "更权威",
        "content": "全国顶尖心理咨询平台，权威大咖督导",
      },
      {
        "ico": "i-2",
        "title": "更专业",
        "content": "9000+专业咨询师，100%职业资格认证",
      },
      {
        "ico": "i-3",
        "title": "更真实",
        "content": "超过100万的注册用户，你值得信赖的选择",
      },
      {
        "ico": "i-4",
        "title": "更安全",
        "content": "隐私有保障，服务不满意核实后随时退款",
      }
    ];

    this.fuwuList = [
      {
        "pic": "p-1",
        "title": "线上1对1咨询",
        "content": "全球顶尖心理咨询专家为你咨询解答",
      },
      {
        "pic": "p-2",
        "title": "心理测评",
        "content": "上万条心理测评题让你认识真正的自己",
      },
      {
        "pic": "p-3",
        "title": "倾诉热线",
        "content": "专业咨询师在线倾听你的心声",
      },
      {
        "pic": "p-4",
        "title": "精品心理课程",
        "content": "全面专业的心理专家为你普及海量心理知识",
      },
    ];

    this.commentList = [
      {
        "pic": "t-1"
      },
      {
        "pic": "t-2"
      },
      {
        "pic": "t-3"
      },
      {
        "pic": "t-4"
      },
      {
        "pic": "t-5"
      },
    ];

    this.teamList = [
      {
        "face": "face-1",
        "name": "袁丽娜",
        "describe": "浙江理工大学咨询心理学硕士；国家二级心理咨询师；国家二级婚姻家庭咨询师；注册婚姻家庭咨询师执业资格证书",
      },
      {
        "face": "face-2",
        "name": "蓝奥",
        "describe": "中国心理咨询师与催眠师联合会理事；共青团福建省委心理热线特约专家；中国心理学会会员",
      },
      {
        "face": "face-3",
        "name": "蒋阿英",
        "describe": "国家二级咨询师；精神分析师；国内资深婚恋服务专家；国内资深爱情挽回/婚姻挽救专家",
      },
      {
        "face": "face-4",
        "name": "达粉会",
        "describe": "国家二级心理咨询师，国家婚姻家庭咨询师，临床医学背景。十年心理咨询工作经验，积累了丰富的咨询案例经验",
      },
      {
        "face": "face-5",
        "name": "高盼",
        "describe": "从事心理咨询多年；地面咨询与网络咨询相结合；中国心理学会会员；目前婚姻家庭挽回成功率百分之八",
      },
    ];

  }

  // 获取introl列表
  getIntroHTML(item, index) {
    return (
      <dl key={index}>
        <dt className={item.ico}></dt>
        <dd>
          <strong>{item.title}</strong>
          <p>{item.content}</p>
        </dd>
      </dl>
    )
  }

  // 获取fuwu列表
  getFuwuHTML(item, index) {
    return (
      <dl key={index}>
        <dt className={item.pic}></dt>
        <dd>
          <strong>{item.title}</strong>
          <p>{item.content}</p>
        </dd>
      </dl>
    )
  }

  // 获取CommentPoster
  getCommentHTML(item, index) {
    return (
      <li className="swiper-slide" key={index}>
        <div className={item.pic}></div>
      </li>
    )
  }

  // 获取TeamPoster
  getTeamHTML(item, index){
    return (
      <li className="swiper-slide" key={index}>
        <dl>
          <dt className={item.face}></dt>
          <dd>
            <h6>{item.name}</h6>
            <p>{item.describe}</p>
          </dd>
        </dl>
      </li>
    )
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

  componentDidMount(){

    let _this = this;

    const reg = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;

    new Swiper('#comment', {
      autoplay: true,
      loop: true,
      spaceBetween:0,
      parallax:true,
      pagination: {
        el: '.swiper-pagination',
      },
    });

    new Swiper('#team', {
      autoplay: true,
      loop: true,
      spaceBetween:0,
      parallax:true,

      pagination: {
        el: '.swiper-pagination',
      },
    });

    $(function(){
      Rule.init();

      $(".inp_phone").focus(function(){
        $(".footer").hide();
      });

      $(".ck_yuyue").on("click", function(){
        $(".inp_phone").focus();
      });

      $(".inp_phone").on("blur", function(){
        $(".footer").show();
      });

      $(".ck_yuyue_bind").on("click", function(){

        let phone = $(".inp_phone").val();

        if(!reg.test(phone)) {
          Toast.fail("请输入正确的手机号码", 2);
          return;
        }

        API.webUserFloorPage({
          phone: phone,
          ffrom: "shengmaSem_cheshiA",
        }).then(res => {
          _this.showModal('modal');
        });

        return;
      });
    });
  }

  render() {
    return (
      <div>
        <Wechat {...this.wechatData} />
        <div className="page-proxy-bd-yy">

          {/* 头部 */}
          <div className="header">
            <div className="top">
              <span className="logo"></span>
              <a className="phone" href="tel:4001141010"></a>
            </div>
            <div className="banner"></div>
            <div className="title"></div>
          </div>

          {/* 获取 */}
          <div className="obtain">
            <h3><em>免费</em>体验价值99元咨询服务</h3>
            <p>国家认证专家，1对1专业心理咨询</p>
            <div className="form"><input type="tel" name="phone" className="inp_phone" placeholder="请输入预约手机号" /></div>
            <div className="control"><a href="javascript:" className="btn yellow ck_yuyue_bind">预约体验</a></div>
          </div>

          {/* 介绍 */}
          <div className="intro">
            <h3>为什么选择壹点灵</h3>

            <div className="banner"></div>

            <div className="list">
              {this.introList.map((item, index) => (
                this.getIntroHTML(item, index)
              ))}
            </div>
          </div>

          {/* 按钮 */}
          <div className="control"><a href="javascript:" className="btn ck_yuyue">预约体验</a></div>

          {/* 服务 */}
          <div className="fuwu">
            <h3 className="cor1">预约体验可获得以下服务</h3>

            <div className="list">
              {this.fuwuList.map((item, index) => (
                this.getFuwuHTML(item, index)
              ))}
            </div>

            <div className="control"><a href="javascript:" className="btn ck_yuyue">预约体验</a></div>
          </div>

          {/* 评论 */}
          <div className="comment">
            <h3>壹点灵用户这样说</h3>
            <div className="poster swiper-container" id="comment">
              <ul className="swiper-wrapper">
                {this.commentList.map((item, index) => (
                  this.getCommentHTML(item, index)
                ))}
              </ul>

              <div className="swiper-pagination"></div>
            </div>

            <div className="control mtbg"><a href="javascript:" className="btn ck_yuyue">预约体验</a></div>
          </div>

          {/* 专家团队 */}
          <div className="team">
            <h3>权威专家团队</h3>

            <div className="poster">
              <div className="poster swiper-container" id="team">
                <ul className="swiper-wrapper">
                  {this.teamList.map((item, index) => (
                    this.getTeamHTML(item, index)
                  ))}
                </ul>

                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="control mtbg"><a href="javascript:" className="btn ck_yuyue">预约体验</a></div>
          </div>

          {/* 关于我们 */}
          <div className="aboutus">
            <h3>壹点灵心理服务平台</h3>
            <div className="banner"></div>

            <ul>
              <li>
                <h5>上海地址：</h5>
                <p>上海市申长路1398弄1-4号阿里中心T1-305室</p>
              </li>

              <li>
                <h5>杭州地址：</h5>
                <p>杭州市滨江区聚光中心C2座302室</p>
              </li>
            </ul>

            <div className="control mtbg"><a href="javascript:" className="btn ck_yuyue">预约体验</a></div>
          </div>

          {/* 底部 */}
          <div className="footer"><a href="tel:400-114-1010" className="btn1 kf_hotline">电话咨询</a><a href="javascript:" target="_blank" className="btn2 kf_xinnuan">在线咨询</a>
          </div>

        </div>

        <Modal
          visible={this.state.modal}
          transparent
          maskClosable={true}
        >
        <div className="modal-proxy-bd-yy">
          <div className="top"></div>
          <h1>预约成功！</h1>
          <p>我们会尽快与您联系</p>
          <a href="javascript:" onClick={this.onClose('modal')}>我知道了</a>
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

Page = connect(mapStateToProps)(Page);

Page.propTypes = {
  data: PropTypes.string
}

export default Page;
