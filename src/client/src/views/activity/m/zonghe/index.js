import React, {Component} from 'react';
import API from '../../servers2/zonghe';
import mAPI from '../../servers_m/zonghe';
import { Toast, Modal, Tabs } from 'antd-mobile';
import TabsComponent from './tabs';
import Swiper from 'swiper/dist/js/swiper.js';
import Rule from '../../../../component/rules';
import BannerTop from './BannerTop';


class Page extends Component {

  constructor(props) {

    super(props);

    this.state = {
      contactModal: false,
      pwd: '',
      uid: ''
    }

    this.enterBanner = [
      {
        "ico": "b-1",
        "url": "https://m.ydl.com/listen",
      },
      {
        "ico": "b-2",
        "url": "https://m.ydl.com/experts/category/",
      }
    ];

    this.enterList = [
      {
        "ico": "i-1",
        "name": "心理课程",
        "url": "https://m.ydl.com/course",
      },
      {
        "ico": "i-2",
        "name": "心理杂志",
        "url": "https://m.ydl.com/jingyan/",
      },
      {
        "ico": "i-3",
        "name": "心理测试",
        "url": "https://m.ydl.com/ceshi/home",
      },
      {
        "ico": "i-4",
        "name": "免费问答",
        "url": "https://m.ydl.com/ask/",
      },
    ];

    this.carouselList = [
      {
        "time": "1",
        "name1": "赵莫某",
        "name2": "李某某",
      },
      {
        "time": "2",
        "name1": "赵莫某",
        "name2": "李某某",
      },
      {
        "time": "3",
        "name1": "赵莫某",
        "name2": "李某某",
      },
      {
        "time": "4",
        "name1": "赵莫某",
        "name2": "李某某",
      },
    ];

    this.tabs = [
      {title: '推荐', modal: "tuijian"},
      {title: '恋爱婚姻', modal: "love"},
      {title: '亲子教育', modal: "qinzi"},
      {title: '职场心理', modal: "job"},
      {title: '情绪压力', modal: "qingxu"},
      {title: '个人成长', modal: "personal"},
    ];

  }

  getEnterListHTML(item, index) {
    return (
      <li key={index}>
        <a href={item.url} target="_blank" className={"item " + item.ico}></a>
        <p>{item.name}</p>
      </li>
    )
  }

  getCarouselListHTML(item, index) {
    return (
      <li key={index} className="swiper-slide">{item.time}分钟前，用户{item.name1}预约了<em>{item.name2}</em>的咨询</li>
    )
  }

  getEnterBannerHTML(item, index) {
    return (
      <a href={item.url} target="_blank" key={index} className={item.ico}></a>
    )
  }

  showModal(key) {
    return () => {
      this.setState({
        [key]: true,
      });
    }
  }

  onClose(key) {
    return () => {
      this.setState({
        [key]: false,
      });
    }
  }

  componentDidMount() {

    $(function () {

      Rule.init({
        "appId": "m-activity",
        "eventId": "home-ydl",
        "eventType": "pv",
        "platform": "wap"
      });

      let $totop = $(".totop"),
        H = $(window).height() * 2.5;

      $(window).scroll(function () {
        if ($totop.offset().top > H) {
          $totop.show();
        } else {
          $totop.hide();
        }
      });

      $(".totop").on("click", function () {
        $(window).scrollTop(0);
      });

      new Swiper('#comment', {
        autoplay: true,
        loop: true,
        spaceBetween: 0,
        direction: 'vertical',
      });
    });

    API.wapProductCateList().then(res => {
      console.log(res)
    })


    mAPI.loginYX_info().then((res) => {
      console.log('res', res)
      this.setState({
        uid: res.data.uid,
        pwd: res.data.pwd
      })
    })
    // $.ajax({
    //   type: "get",
    //   async: true,
    //   url: 'http://m2.ydl.com/wap-user/yx-info',
    //   dataType: "json",
    //   // dataType: "jsonp",
    //   // jsonp: "callback",
    //   xhrFields: {
    //     withCredentials: true
    //   },
    //   success: function (data) {
    //     alert(1)
    //     console.log('data', data)
    //
    //
    //     // openChatYdl();
    //     // console.log( readCookie('uid'))
    //   },
    //   error: function (e) {
    //     console.log('error',e)
    //   }
    // });

  }

  render() {

    return (
      <div>
        <div className="page-proxy-bd-zt">

          <div className="banner-top"><BannerTop /></div>

          {/* 头部下载 */}
          <div className="tip-top">
            <div className="logo"></div>
            <div className="user">
              <a href="//m.ydl.com/login?sourceUrl=//m2.ydl.com/uc" className="login"></a>
              <a href="javascript:" className="contact" onClick={this.showModal('contactModal')}></a>
            </div>
          </div>

          {/* 头部 */}
          <div className="header">
            <div className="poster"></div>
          </div>

          {/* 入口区 */}
          <div className="enter">
            <ul className="list">
              {this.enterList.map((item, index) => (
                this.getEnterListHTML(item, index)
              ))}
            </ul>

            <div className="sign"></div>
          </div>

          <div className="bg-line">
            {/* 标记 */}
            <div className="banner">
              {this.enterBanner.map((item, index) => (
                this.getEnterBannerHTML(item, index)
              ))}
            </div>

            {/* 走马灯 */}
            <div className="zmd">
              <span className="status">我们正在服务</span>
              <div className="zmd-list swiper-container" id="comment">
                <ul className="swiper-wrapper">
                  {this.carouselList.map((item, index) => (
                    this.getCarouselListHTML(item, index)
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 列表 */}
          <div className="content">
            <Tabs
              tabs={this.tabs}
              initialPage={0}
              swipeable={false}
              animated={false}
              useOnPan={false}
              prerenderingSiblingsNumber="6"
              onChange={(tab, index) => {

                let tabs = this.tabs;
                let len = tabs.length;

                for (let i = 0; i < len; i++) {

                  if (i == index) {
                    this.refs[tabs[i].modal].refs[tabs[i].modal].change({
                      cur: true,
                      name: tabs[i].modal
                    });
                  } else {
                    this.refs[tabs[i].modal].refs[tabs[i].modal].change({
                      cur: false,
                      name: tabs[i].modal
                    });
                  }
                }
              }}
            >
              <div className="content-tabs">
                <TabsComponent pwd={this.state.pwd} uid={this.state.uid} ref="tuijian" name="tuijian" cate="0"
                               cur={true} limit="5" hasMore={true}/>
              </div>

              <div className="content-tabs">
                <TabsComponent pwd={this.state.pwd} uid={this.state.uid} ref="love" name="love" cate="1" cur={false}
                               limit="5" hasMore={false}/>
              </div>

              <div className="content-tabs">
                <TabsComponent pwd={this.state.pwd} uid={this.state.uid} ref="qinzi" name="qinzi" cate="23" cur={false}
                               limit="8" hasMore={false}/>
              </div>

              <div className="content-tabs">
                <TabsComponent pwd={this.state.pwd} uid={this.state.uid} ref="job" name="job" cate="22" cur={false}
                               limit="5" hasMore={false}/>
              </div>

              <div className="content-tabs">
                <TabsComponent pwd={this.state.pwd} uid={this.state.uid} ref="qingxu" name="qingxu" cate="27"
                               cur={false} limit="7" hasMore={false}/>
              </div>

              <div className="content-tabs">
                <TabsComponent pwd={this.state.pwd} uid={this.state.uid} ref="personal" name="personal" cate="26"
                               cur={false} limit="6" hasMore={false}/>
              </div>
            </Tabs>
          </div>

          <div className="footer">
            <div className="control"><a href="javascript:" className="js_kf"
                                        target="_blank">咨询客服</a></div>
            <div className="totop"></div>
          </div>
        </div>

        <Modal
          visible={this.state.contactModal}
          transparent
          maskClosable={true}
          className="modal-proxy-bd-zt-contact-wrap"
        >
          <div className="modal-proxy-bd-zt-contact">
            <div className="modal-top"></div>
            <div className="modal-content">
              <a href="tel:4001141010" className="a-1"><i></i>免费热线 (400-114-1010)</a>
              <a href="javascript:" target="_blank"
                 className="a-2 js_kf"><i></i>在线客服</a>

              <span>早8:00-凌晨2:00</span>
            </div>

            <div className="modal-control">
              <a href="javascript:" onClick={this.onClose('contactModal')}></a>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Page;
