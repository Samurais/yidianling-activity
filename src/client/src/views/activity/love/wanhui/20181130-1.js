import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Swiper from 'swiper/dist/js/swiper.js';
import { Modal } from 'antd-mobile';
import Wechat from '../../../../component/wechat';
import Rule from '../../../../component/rules';
import Util from '../../../../lib/util';

class Page extends Component {

  constructor(props) {

    super(props);

    this.wechatData = this.props.data.wechat;
    this.imglist = [
      {
        "face": "/src/images/activity/love/wanhui/20181130-1/img1.jpg"
      },
      {
        "face": "/src/images/activity/love/wanhui/20181130-1/img2.jpg"
      },
      {
        "face": "/src/images/activity/love/wanhui/20181130-1/img3.jpg"
      },
      {
        "face": "/src/images/activity/love/wanhui/20181130-1/img4.jpg"
      },
      {
        "face": "/src/images/activity/love/wanhui/20181130-1/img5.jpg"
      },
    ];

    this.bottomlist = [
      {
        "face": "/src/images/activity/love/wanhui/20181130-1/b1.jpg"
      },
      {
        "face": "/src/images/activity/love/wanhui/20181130-1/b2.jpg"
      },
      {
        "face": "/src/images/activity/love/wanhui/20181130-1/b3.jpg"
      },
      {
        "face": "/src/images/activity/love/wanhui/20181130-1/b4.jpg"
      },
    ];
    // this.t1list = [
    //   {
    //     "face": "/src/images/activity/love/wanhui/p-1-1-lyf.jpg",
    //     "name": "刘老师",
    //     "d1": "·心理学博士",
    //     "d2": "·美国纽约州立大学访问学者",
    //     "number": "2749"
    //   },
    //   {
    //     "face": "/src/images/activity/love/wanhui/p-1-2-wpj.jpg",
    //     "name": "王老师",
    //     "d1": "·约克大学  Ph. D. -心理学 博士 ",
    //     "d2": "·英国 A.P.H.P 执业心理治疗师",
    //     "number": "3385"
    //   },
    //   {
    //     "face": "/src/images/activity/love/wanhui/p-1-3-hj.jpg",
    //     "name": "黄老师",
    //     "d1": "·心理学硕士",
    //     "d2": "·美国Fordham大学访问学者",
    //     "number": "1608"
    //   },
    // ];

    // this.t2list = [
    //   {
    //     "face": "/src/images/activity/love/wanhui/p-2-1-zly.jpg",
    //     "name": "赵老师",
    //     "d1": "·美国密歇根州立大学硕士",
    //     "d2": "·台湾咨商心理",
    //     "number": "3268"
    //   },
    //   {
    //     "face": "/src/images/activity/love/wanhui/p-2-2-la.jpg",
    //     "name": "蓝老师",
    //     "d1": "·美国NLP大学授证高级执行师 ",
    //     "d2": "·复旦大学心理学硕士",
    //     "number": "7320"
    //   },
    //   {
    //     "face": "/src/images/activity/love/wanhui/p-2-3-yhh.jpg",
    //     "name": "余老师",
    //     "d1": "·大学教授",
    //     "d2": "·美国A.B.H及P.A.S.H催眠师",
    //     "number": "6070"
    //   },
    // ];

    // this.t3list = [
    //   {
    //     "face": "/src/images/activity/love/wanhui/p-3-1-lqy.jpg",
    //     "name": "吕老师",
    //     "d1": "·国际婚姻家庭指导师（高级）",
    //     "d2": "·美国咨询委员会认证全球生涯教练",
    //     "number": "2592"
    //   },
    //   {
    //     "face": "/src/images/activity/love/wanhui/p-3-2-lzz.jpg",
    //     "name": "刘老师",
    //     "d1": "·美国心理学会(APA)国际会员",
    //     "d2": "·中美精神分析联盟(CAPA)会员",
    //     "number": "1167"
    //   },
    // ];

    // this.t4list = [
    //   {
    //     "face": "/src/images/activity/love/wanhui/p-4-1-xw.jpg",
    //     "name": "项老师",
    //     "d1": "·国家公派访问学者 ",
    //     "d2": "·美国NLP大学授证高级执行师",
    //     "number": "3686"
    //   },
    //   {
    //     "face": "/src/images/activity/love/wanhui/p-4-2-zyy.jpg",
    //     "name": "周老师",
    //     "d1": "·心理学博士",
    //     "d2": "·温州医科大学副教授",
    //     "number": "2541"
    //   },
    // ];

    // this.t5list = [
    //   {
    //     "face": "/src/images/activity/love/wanhui/p-5-1-yln.jpg",
    //     "name": "袁老师",
    //     "d1": "·国际婚姻家庭指导师（高级）",
    //     "d2": "·美国NAHA 专业芳疗师会员资格",
    //     "number": "2712"
    //   },
    //   {
    //     "face": "/src/images/activity/love/wanhui/p-5-2-lmy.jpg",
    //     "name": "陆老师",
    //     "d1": "·复旦大学心理学硕士",
    //     "d2": "·美国心理学会(APA)国际会员",
    //     "number": "3056"
    //   },
    // ];

    // this.zmdList = [
    //   [{"name": "张****", "act": "开始咨询;"},{"name": "李****", "act": "咨询结束;"}],
    //   [{"name": "陈****", "act": "开始咨询;"},{"name": "马****", "act": "咨询结束;"}],
    //   [{"name": "李****", "act": "开始咨询;"},{"name": "钱****", "act": "咨询结束;"}],
    //   [{"name": "赵****", "act": "开始咨询;"},{"name": "刘****", "act": "咨询结束;"}],
    //   [{"name": "张****", "act": "开始咨询;"},{"name": "马****", "act": "咨询结束;"}],
    //   [{"name": "孙****", "act": "开始咨询;"},{"name": "钱****", "act": "咨询结束;"}],
    // ];

    // this.number = Util.randomFrom(5000, 6000);

    this.state = {
      modal: false
    }
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
    let eventId = "/love/wanhui/m/20181130-1";

    Rule.init({
      "appId": "m-activity",
      eventId,
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
        $(window).scrollTop(1);
      },100)

      // $("img.lazy").each(function(){
      //   let $this = $(this);
      //   if($this.offset().top <= $(window).height()) {
      //     $this.attr("src", $this.data("original"));
      //   }
      // });

      new Swiper('#bottomList', {
        autoplay: true,
        loop: true,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
        },
      });
    });

    let storage = window.localStorage;

    if(!!!storage.getItem("activityWanHui")) {
      setTimeout(() => {
        this.showModal("modal");
        storage.setItem("activityWanHui", 1);
      }, 15000);
    }
  }

  getBottomHTML(item, index){
    return (
      <li key={index} className="swiper-slide">
        <img src={item.face}/>>
      </li>
    );
  }


  getImgHTML(item, index){
    return (
      <li className="item" key={index}>
        <img data-original={item.face} src="/src/images/lazy-1.png" className="lazy" />
      </li>
    )
  }
  render() {
    return (
      <div>
        <Wechat {...this.wechatData} />

        <div className="page-love-wanhui-20181130-1">

          <div className="pic">
            <a href="javascript:" data-target="/love/wanhui/m/20181130-1_banner" className="js_kf">
              <img src="/src/images/lazy-1.png" data-original="/src/images/activity/love/wanhui/20181130-1/p1.jpg" className="lazy" />
            </a>
          </div>

          <div className="pic">
            <a href="javascript:" data-target="/love/wanhui/m/20181130-1_rate" className="js_kf">
              <img src="/src/images/activity/love/wanhui/20181130-1/p2.jpg" />
            </a>
          </div>


          {/* 切图列表 */}
          <section>
            <div className="img-list">
              <ul>
                {this.imglist.map((item, index) => (
                  this.getImgHTML(item, index)
                ))}
              </ul>
            </div>
          </section>

          {/* 底部轮播 */}
          <section className="bottom-box">
            <div className="box">
              <div className="bottom-title">关于我们</div>
              <div className="bottom-list swiper-container" id="bottomList">
                <ul className="swiper-wrapper">
                  {this.bottomlist.map((item, index) => (
                    this.getBottomHTML(item, index)
                  ))}
                </ul>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </section>

          <div className="pic">
            <img src="/src/images/lazy-1.png" data-original="/src/images/activity/love/wanhui/20181130-1/bottom.jpg" className="lazy" />
          </div>

          <div className="ft">
            <div className="link">
              <a href="javascript:" className="a1 js_kf_phone" data-target="/love/wanhui/m/20181130-1_phone"></a>
              <a href="javascript:" className="a2 js_kf" data-target="/love/wanhui/m/20181130-1_chat"></a>
            </div>
          </div>
        </div>

        <Modal
          visible={this.state.modal}
          transparent
          maskClosable={true}
          className="modal-wanhui20181130"
        >
        <div className="modal-content">
          <div className="pic">
            <a href="javascript:" data-target="/love/wanhui/m/20181130-1_modal" className="js_kf">
              <img src="/src/images/activity/love/wanhui/20181130-1/modal.png" />
            </a>
          </div>
          <a href="javascript:" data-target="/love/wanhui/m/20181130-1_close_modal" className="js_close" onClick={this.onClose('modal')}></a>
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

