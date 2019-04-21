import React, { Component } from 'react';
import API from '../../servers2/zonghe';
import { Toast, Modal, Carousel, Tabs } from 'antd-mobile';
import TabsComponent from './tabs';

import util from '../../../../lib/util';

class Page extends Component {

  constructor(props) {

    super(props);

    this.state = {
      contactModal: false
    }

    this.enterBanner = [
      {
        "ico": "b-1",
        "url": "https://m.yidianling.com/listen",
      },
      {
        "ico": "b-2",
        "url": "https://m.yidianling.com/experts/category/",
      }
    ];

    this.enterList = [
      {
        "ico": "i-1",
        "name": "心理课程",
        "url": "https://m.yidianling.com/course",
      },
      {
        "ico": "i-2",
        "name": "心理杂志",
        "url": "https://m.yidianling.com/jingyan/",
      },
      {
        "ico": "i-3",
        "name": "心理测试",
        "url": "https://m.yidianling.com/ceshi/",
      },
      {
        "ico": "i-4",
        "name": "免费问答",
        "url": "https://m.yidianling.com/ask/",
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
      { title: '推荐' , modal: "tuijian"},
      { title: '恋爱婚姻' , modal: "love"},
      { title: '亲子教育' , modal: "qinzi"},
      { title: '职场心理' , modal: "job"},
      { title: '情绪压力' , modal: "qingxu"},
      { title: '个人成长' , modal: "personal"},
    ];

  }

  getEnterListHTML(item, index){
    return (
      <li key={index}>
        <a href={item.url} target="_blank" className={"item "+item.ico}></a>
        <p>{item.name}</p>
      </li>
    )
  }

  getCarouselListHTML(item, index){
    return (
      <span key={index}>{item.time}分钟前，用户{item.name1}预约了<em>{item.name2}</em>的咨询</span>
    )
  }

  getEnterBannerHTML(item, index){
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

  onClose(key){
    return () => {
      this.setState({
        [key]: false,
      });
    }
  }

  componentDidMount(){

    $(function(){

      let $totop = $(".totop"),
          H = $(window).height() * 2.5;

      $(window).scroll(function(){
        if($totop.offset().top > H) {
          $totop.show();
        } else {
          $totop.hide();
        }
      });

      $(".totop").on("click", function(){
        $(window).scrollTop(0);
      });
    });

    API.wapProductCateList().then(res => {
      console.log(res)
    })
  }

  render() {

    return (
      <div>
        <div className="page-proxy-bd-zt">
          {/* 头部下载 */}
          <div className="tip-top">
            <div className="logo"></div>
            <div className="user">
              <a href="https://m.yidianling.com/login" className="login"></a>
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

              <div className="zmd-list">
                <Carousel
                  vertical
                  dots={false}
                  dragging={false}
                  swiping={false}
                  autoplay
                  infinite
                >
                  {this.carouselList.map((item, index) => (
                    this.getCarouselListHTML(item, index)
                  ))}
                </Carousel>
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
                <TabsComponent ref="tuijian" name="tuijian" cate="0" cur={true} limit="5" hasMore={true} />
              </div>

              <div className="content-tabs">
                <TabsComponent ref="love" name="love" cate="1" cur={false}  limit="5" hasMore={false} />
              </div>

              <div className="content-tabs">
                <TabsComponent ref="qinzi" name="qinzi" cate="23" cur={false}  limit="8" hasMore={false} />
              </div>

              <div className="content-tabs">
                <TabsComponent ref="job" name="job" cate="22" cur={false} limit="5" hasMore={false} />
              </div>

              <div className="content-tabs">
                <TabsComponent ref="qingxu" name="qingxu" cate="27" cur={false} limit="7" hasMore={false} />
              </div>

              <div className="content-tabs">
                <TabsComponent ref="personal" name="personal" cate="26" cur={false} limit="6" hasMore={false} />
              </div>
            </Tabs>
          </div>

          <div className="footer">
            <div className="control"><a href="https://dat.zoosnet.net/LR/Chatpre.aspx?id=DAT83236505&lng=cn" target="_blank">在线咨询</a></div>
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
              <a href="https://dat.zoosnet.net/LR/Chatpre.aspx?id=DAT83236505&lng=cn" target="_blank" className="a-2"><i></i>在线客服</a>

              <span>早8:00-凌晨1:00</span>
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
