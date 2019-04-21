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
    this.closeDownload = this.closeDownload.bind(this);

    this.t1list = [
      {
        "face": "/src/images/activity/love/wanhui/20181130/p-1-1-lyf.jpg",
        "name": "刘老师",
        "d1": "·心理学博士",
        "d2": "·美国纽约州立大学访问学者",
        "number": "2749"
      },
      {
        "face": "/src/images/activity/love/wanhui/20181130/p-1-2-wpj.jpg",
        "name": "王老师",
        "d1": "·约克大学  Ph. D. -心理学 博士 ",
        "d2": "·英国 A.P.H.P 执业心理治疗师",
        "number": "3385"
      },
      {
        "face": "/src/images/activity/love/wanhui/20181130/p-1-3-hj.jpg",
        "name": "黄老师",
        "d1": "·心理学硕士",
        "d2": "·美国Fordham大学访问学者",
        "number": "1608"
      },
    ];

    this.t2list = [
      {
        "face": "/src/images/activity/love/wanhui/20181130/p-2-1-zly.jpg",
        "name": "赵老师",
        "d1": "·美国密歇根州立大学硕士",
        "d2": "·台湾咨商心理",
        "number": "3268"
      },
      {
        "face": "/src/images/activity/love/wanhui/20181130/p-2-2-la.jpg",
        "name": "蓝老师",
        "d1": "·美国NLP大学授证高级执行师 ",
        "d2": "·复旦大学心理学硕士",
        "number": "7320"
      },
      {
        "face": "/src/images/activity/love/wanhui/20181130/p-2-3-yhh.jpg",
        "name": "余老师",
        "d1": "·大学教授",
        "d2": "·美国A.B.H及P.A.S.H催眠师",
        "number": "6070"
      },
    ];

    this.t3list = [
      {
        "face": "/src/images/activity/love/wanhui/20181130/p-3-1-lqy.jpg",
        "name": "吕老师",
        "d1": "·国际婚姻家庭指导师（高级）",
        "d2": "·美国咨询委员会认证全球生涯教练",
        "number": "2592"
      },
      {
        "face": "/src/images/activity/love/wanhui/20181130/p-3-2-lzz.jpg",
        "name": "刘老师",
        "d1": "·美国心理学会(APA)国际会员",
        "d2": "·中美精神分析联盟(CAPA)会员",
        "number": "1167"
      },
    ];

    this.t4list = [
      {
        "face": "/src/images/activity/love/wanhui/20181130/p-4-1-xw.jpg",
        "name": "项老师",
        "d1": "·国家公派访问学者 ",
        "d2": "·美国NLP大学授证高级执行师",
        "number": "3686"
      },
      {
        "face": "/src/images/activity/love/wanhui/20181130/p-4-2-zyy.jpg",
        "name": "周老师",
        "d1": "·心理学博士",
        "d2": "·温州医科大学副教授",
        "number": "2541"
      },
    ];

    this.t5list = [
      {
        "face": "/src/images/activity/love/wanhui/20181130/p-5-1-yln.jpg",
        "name": "袁老师",
        "d1": "·国际婚姻家庭指导师（高级）",
        "d2": "·美国NAHA 专业芳疗师会员资格",
        "number": "2712"
      },
      {
        "face": "/src/images/activity/love/wanhui/20181130/p-5-2-lmy.jpg",
        "name": "陆老师",
        "d1": "·复旦大学心理学硕士",
        "d2": "·美国心理学会(APA)国际会员",
        "number": "3056"
      },
    ];

    this.zmdList = [
      [{"name": "张****", "act": "开始咨询;"},{"name": "李****", "act": "咨询结束;"}],
      [{"name": "陈****", "act": "开始咨询;"},{"name": "马****", "act": "咨询结束;"}],
      [{"name": "李****", "act": "开始咨询;"},{"name": "钱****", "act": "咨询结束;"}],
      [{"name": "赵****", "act": "开始咨询;"},{"name": "刘****", "act": "咨询结束;"}],
      [{"name": "张****", "act": "开始咨询;"},{"name": "马****", "act": "咨询结束;"}],
      [{"name": "孙****", "act": "开始咨询;"},{"name": "钱****", "act": "咨询结束;"}],
    ];

    this.number = Util.randomFrom(5000, 6000);
    this.downloadImg = "/src/images/activity/love/wanhui/20181130-A4/download.png";
    this.downloadUrl = "https://sj.qq.com/myapp/detail.htm?apkName=com.cxzapp.yidianling_atk8";
    this.state = {
      modal: false,
      showFixed:true
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
    let eventId = "/love/wanhui/m/20181130";

    // 判断是否点击过客服，如果没有，那么
    if (!localStorage.getItem(eventId)) {
      setTimeout(()=>{
        _this.showModal("modal");
      },15000);
    }

    $(function(){
      $("img.lazy").lazyload();

      Rule.init({
        "appId": "m-activity",
        eventId,
        "eventType": "pv",
        "platform": "wap"
      });

      // $("img.lazy").each(function(){
      //   let $this = $(this);
      //   if($this.offset().top <= $(window).height()) {
      //     $this.attr("src", $this.data("original"));
      //   }
      // });
      setTimeout(()=>{
        $("img.lazy").each(function(){
          let _this = $(this);
          let img = _this.data("original");
          _this.attr("src", img);
        });

      },300);
      new Swiper('#zmdList', {
        autoplay: true,
        loop: true,
        spaceBetween: 0,
        noSwiping : true,
        noSwipingClass : 'stop-swiping',
        direction: 'vertical',
      });
      window.addEventListener('scroll', ()=>{
          _this.setState({
            showFixed:false
          })
      });
    });

    // let storage = window.localStorage;

    // if(!!!storage.getItem("activityWanHui")) {
    //   setTimeout(() => {
    //     this.showModal("modal");
    //     storage.setItem("activityWanHui", 1);
    //   }, 15000);
    // }
  }

  getZMDHTML(item, index){
    return (
      <li key={index} className="swiper-slide stop-swiping">
        <span>{item[0].name} {item[0].act}</span>
        <span>{item[1].name} {item[1].act}</span>
      </li>
    );
  }

  getHTML(item, index){
    return (
      <li className="item" key={index}>
        <a href="javascript:" data-target="/love/wanhui/m/20181130_experts" className="js_kf">
          <dl>
            <dt>
              <img data-original={item.face} src="/src/images/lazy-1.png" className="lazy" />
            </dt>

            <dd>
              <strong>{item.name}<i></i></strong>
              <div className="info1">
                <span>{item.d1}</span>
                <span>{item.d2}</span>
              </div>
              <div className="info2">
                <span><em>{item.number}</em>个成功案例</span>
              </div>
              <span className="btn">在线咨询</span>
            </dd>
          </dl>
        </a>
      </li>
    )
  }
  getFixedHtml(){
    let element;
    element = this.state.showFixed ? (
      <a href={this.downloadUrl}>
        <div className="fixed_box">
          <img className="download-img lazy" src={this.defImg} data-original={this.downloadImg}/>
          <div className="middle-box">
            <span>下载壹点灵APP</span>
            <span>有情感烦恼，就找壹点灵</span>
          </div>
          <div className="open">
            立即打开
          </div>
          <div className="close" onClick={this.closeDownload}>
            <img className="icon" src="/src/images/activity/love/wanhui/20181130-A4/close.png"/>
          </div>
        </div>
      </a>
    ):("");
    return element;
  }
  closeDownload(e){
    this.setState((prev)=>{
      console.log(prev);
      return {
        showFixed: !prev.showFixed
      }
    })
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <Wechat {...this.wechatData} />

        <div className="page-love-wanhui-20181130">
          {this.getFixedHtml()}
          <div className="pic">
            <a href="javascript:" data-target="/love/wanhui/m/20181130_banner" className="js_kf">
              <img src="/src/images/lazy-1.png" data-original="/src/images/activity/love/wanhui/20181130/p1.png" className="lazy" />
            </a>
          </div>

          <div className="zmd">
            <div className="info"><i></i>{this.number}位用户在咨询</div>
            <div className="zmd-list swiper-container" id="zmdList">
              <ul className="swiper-wrapper">
                {this.zmdList.map((item, index) => (
                  this.getZMDHTML(item, index)
                ))}
              </ul>
            </div>
          </div>

          <div className="pic">
            <a href="javascript:" data-target="/love/wanhui/m/20181130_rate" className="js_kf">
              <img src="/src/images/activity/love/wanhui/20181130/p2.png" />
            </a>
          </div>

          {/* 婚姻家庭 */}
          <section>
            <div className="pic title mt">
              <img  src="/src/images/lazy-1.png"  data-original="/src/images/activity/love/wanhui/20181130/t1.png" className="lazy" />
            </div>

            <div className="list">
              <ul>
                {this.t1list.map((item, index) => (
                  this.getHTML(item, index)
                ))}
              </ul>
            </div>
          </section>

          {/* 挽回婚姻 */}
          <section>
            <div className="pic title">
              <img src="/src/images/lazy-1.png" data-original="/src/images/activity/love/wanhui/20181130/t2.png" className="lazy" />
            </div>

            <div className="list">
              <ul>
                {this.t2list.map((item, index) => (
                  this.getHTML(item, index)
                ))}
              </ul>
            </div>
          </section>

          {/* 分离第三者 */}
          <section>
            <div className="pic title">
              <img src="/src/images/lazy-1.png" data-original="/src/images/activity/love/wanhui/20181130/t3.png" className="lazy" />
            </div>

            <div className="list">
              <ul>
                {this.t3list.map((item, index) => (
                  this.getHTML(item, index)
                ))}
              </ul>
            </div>
          </section>

          {/* 两性问题 */}
          <section>
            <div className="pic title">
              <img src="/src/images/lazy-1.png" data-original="/src/images/activity/love/wanhui/20181130/t5.png" className="lazy" />
            </div>

            <div className="list">
              <ul>
                {this.t4list.map((item, index) => (
                  this.getHTML(item, index)
                ))}
              </ul>
            </div>
          </section>

          {/* 挽回爱情 */}
          <section>
            <div className="pic title">
              <img src="/src/images/lazy-1.png" data-original="/src/images/activity/love/wanhui/20181130/t4.png" className="lazy" />
            </div>

            <div className="list">
              <ul>
                {this.t5list.map((item, index) => (
                  this.getHTML(item, index)
                ))}
              </ul>
            </div>
          </section>

          <div className="pic title">
            <a href="javascript:" data-target="/love/wanhui/m/20181130_chat_end" className="js_kf">
              <img src="/src/images/lazy-1.png" data-original="/src/images/activity/love/wanhui/20181130/p3.png" className="lazy" />
            </a>
          </div>

          <div className="pic">
            <img src="/src/images/lazy-1.png" data-original="/src/images/activity/love/wanhui/20181130/p4.png" className="lazy" />
          </div>

          <div className="pic">
            <img src="/src/images/lazy-1.png" data-original="/src/images/activity/love/wanhui/20181130/p5.png" className="lazy" />
          </div>

          <div className="copyright">
          <span className="win_copyright"></span>
            <span className="win_company"></span>
            <span className="win_copycode"></span>
          </div>

          <div className="ft">
            <div className="link">
              <a href="javascript:" className="a1 js_kf_phone" data-target="/love/wanhui/m/20181130_phone"></a>
              <a href="javascript:" data-target="/love/wanhui/m/20181130_chat" className="a2 js_kf"></a>
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
            <a href="javascript:" data-target="/love/wanhui/m/20181130_modal" className="js_kf">
              <img src="/src/images/activity/love/wanhui/20181130/modal.png" />
            </a>
          </div>
          <a href="javascript:" className="js_close" data-target="/love/wanhui/m/20181130_close_modal" onClick={this.onClose('modal')}></a>
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

