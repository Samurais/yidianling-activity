import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Modal, Toast} from 'antd-mobile';
import {getRequestData} from '../../../../component/semComponent/util';
import Wechat from '../../../../component/wechat';
import nativeApp from '../../../../lib/nativeApp';
import jump from "../../../../lib/jumpAPP";
import Swiper from 'swiper/dist/js/swiper.js';
import productApi from '../../servers2/product';

const alertA = Modal.alert;

/***
 * class类名
 * @class NianZhong
 * @param data 数据
 * ***/
class NianZhong extends PureComponent {
  constructor(props) {
    super(props);
    const t = this;
    t.state = {
      baseClass: 'NianZhong',
      data: '',
      height: 1000,
      modalShare: false

    };
    this.expertsUrl = "https://m.ydl.com/experts";
    this.orderUrl = "https://m.ydl.com/order";

    this.target = "/hd/m/20190123";
  }

  // componentWillMount() {
  // }

  componentDidMount() {
    //this.shareConfig()


    let _this = this;

    $(function () {
      const urlData = getRequestData(window.location.href);
      const ffrom = urlData.ffrom;

      nativeApp.init();

      $(".js_wechat_share").on("click", function () {
        let appWechatShare = _this.refs.wechat.state.appWechatShare || function () {
          _this.setState({modalShare: true})
        };
        appWechatShare();
      });
    })

    // $(function () {

    // });
    // const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    const hei = this.state.height;
    const t = this;
    const swiper = new Swiper(".swiper-container", {
      scrollbar: '.swiper-scrollbar',
      direction: "vertical",
      scrollbar: '.wrap-scroll',
      noSwipingClass : 'stop-swiping',
      slidesPerView: 'auto',
      //initialSlide: localStorage.getItem("swiperIndex")?localStorage.getItem("swiperIndex"):0,
      initialSlide: 0,
      mousewheelControl: true,
      mousewheelReleaseOnEdges: true,
      touchRatio: 0.5,
      longSwipesRatio: 0.1,
      // threshold: 50,
      navigation: {
        nextEl: '.point',
        prevEl: '.swiper-button-prev'
      },
      on: {
        slideChangeTransitionEnd: function () {
          // alert(this.activeIndex)
          //localStorage.setItem("swiperIndex",this.activeIndex)
          if (this.activeIndex === 4) {
            // alert(1)
            //   alert(t.state.height)
            const slideHeight = parseInt($(".slide5").css('height'));
            const buttonHeight = parseInt($(".bottom-buttonbox").outerHeight());
            const bannerHeight = parseInt($(".slide5-banner").css('height'));
            console.log('slideHeight', slideHeight)
            console.log('buttonHeight', buttonHeight)

            console.log('bannerHeight', bannerHeight)

            $('.bottom-buttonbox').css({'top': slideHeight - buttonHeight})
          }
        }
      }
    });
    // const swiperV = new Swiper('.swiper-container-v', {
    //   direction: 'vertical',
    //   nested: true,
    //   mousewheelControl: true,
    //   mousewheelReleaseOnEdges: true
    // });

    // $('.swiper-container-v .swiper-wrapper').on('touch', function (e) {
    //   console.log(11111)

    //   e.preventDefault();

    // })
    // setTimeout(() => {
    //   const urlData = getRequestData(window.location.href);
    //   const ffrom = urlData.ffrom;
    //   console.log(window.location.href)
    //   if (ffrom === 'app_ios' || ffrom === 'android_zhuzhan') {
    //     const jumpAPP = jump.init();
    //     const params = {switch: false};
    //     jumpAPP.setParams("down_refresh", params, 'ydl_app');
    //   }

    // }, 0)

    const urlData = getRequestData(window.location.href);
    const postData = {};
    postData.page = '1';
    postData.perPageNum = '50';
    postData.uid = urlData.uid;
    postData.accessToken = urlData.accessToken;
    console.log('postData', postData)

    productApi.activity(postData).then((res) => {
      this.setState({
        data: res.data
      })
    })
  }


  // componentWillReceiveProps(nextProps) {
  // }


  // componentWillUpdate(nextProps, nextState) {

  // }

  // componentDidUpdate() {

  // }

  // shareConfig(event) {
  //   const urlData = getRequestData(window.location.href);
  //   const ffrom = urlData.ffrom;
  //   const browser = jump.webviewSystem();
  //   console.log('ffrom', ffrom)
  //   if (browser === 'wx' || ffrom === 'app_ios' || ffrom === 'android_zhuzhan') {
  //     if (event === 'click') {
  //       this.setState({modalShare: true})
  //     }
  //   } else {
  //     $('.js_wechat_share').hide();
  //   }
  //   if (ffrom === 'app_ios' || ffrom === 'android_zhuzhan') {
  //     // $('.js_wechat_share').hide();
  //   }
  // }


  showModal(e) {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      modal: true,
    });
  }

  // onClose = key => () => {
  //   this.setState({
  //     [key]: false,
  //   });
  // }

  buttonComponent() {
    const t = this;
    return (
      <div className="bottom-button">
        <div className='point' onClick={t.clickButton}>
          <span className="move"></span>
        </div>
      </div>
    )
  }

  wechatRefresh(self) {
    !!self.refs.wechat.state.author && self.refs.wechat.state.author();
  }

  startFSR() {
    const t = this;
    $(".start_box").animate({'margin-top': '-2000px'}, 1000, () => {
      $(".slide1-box .bottom_pic").animate({'opacity': 1}, 500, () => {
        $(".slide1 .point").animate({'opacity': 1}, 500,function(){
          $('.slide1').removeClass('stop-swiping');
        })
      })
    });

  }

  swiperReset(e) {

    const transform = $('.swiper-container-v .swiper-wrapper').css('transform');
    const a = 'matrix(1, 0, 0, 1, 0,';
    const top = transform.replace(a, '').replace(')', '');
    const go0 = 'matrix(1, 0, 0, 1, 0, 0)';

    const slideHeight = parseInt($(".slide5").css('height'));
    const buttonHeight = parseInt($(".bottom-buttonbox").outerHeight());
    const bannerHeight = parseInt($(".slide5-banner").css('height'));
    const contentHeight = parseInt($(".swiper-container-v").css('height'));

    const bottom = slideHeight - buttonHeight - bannerHeight - contentHeight;
    if (top > 0) {
      setTimeout(function () {
        $('.swiper-container-v .swiper-wrapper').css({
          "transform": "translate3d(0px, 0px, 0px)",
          "transition-duration": "300ms"
        });


      }, 100)
    }
    if (top < bottom) {
      setTimeout(function () {
        $('.swiper-container-v .swiper-wrapper').css({
          "transform": "translate3d(0px, "+bottom+"px, 0px)",
          "transition-duration": "300ms"
        });
      }, 100)
    }

  }

  expertButton(value, index) {


    if (this.state.data.isBuy) {
      return (
        <div href="javascript:" className="experts-list-item-ceshi-button js_app_expert_detail"
             data-target={`${this.target}_button1`} data-id={value.doctorId} data-url={this.expertsUrl}>
          立即查看
        </div>
      )
    } else if (value.leftNum === 0) {
      return (
        <div className="experts-list-item-ceshi-button" style={{background:'#bfbfbf'}} data-target={`${this.target}_button2`} onClick={() => {
          Toast.info('此咨询师咨询名额已满，可以找其他咨询师，或明日再来哦~', 5)
          return false;
        }}>名额已满
        </div>
      )
    } else {
      return (
        <div href="javascript:" className="experts-list-item-ceshi-button js_app_order"
             data-target={`${this.target}_button3`} data-id={value.productId} data-url={this.orderUrl}>
          立即咨询
        </div>
      )
    }
  }


  renderComponent() {
    const t = this;
    const {baseClass, data} = t.state;
    return (
      <div className="page-hd-20190123">
        <section className="NianZhong swiper-container">
          {/* 微信分享和授权 */}
          <Wechat {...this.props.data.wechat} ref="wechat"/>


          <div className="swiper-wrapper">

            <div className="swiper-slide slide1 stop-swiping">
              <div className="main-info" id="startBox">
                <div className="start_box">
                  <img className="start_pic" src={`/src/images/activity/hd/20190123/00_bg@2x.png`}/>
                  <div className="start_button_box">
                    <img id="startButton" onClick={() => {
                      t.startFSR();
                    }} src={`/src/images/activity/hd/20190123/00_buttondraw@2x.png`}/>
                    <img src={`/src/images/activity/hd/20190123/00_NO@2x.png`}
                         className="js_wechat_share" />
                  </div>
                </div>
              </div>
              <div className="slide1-box">
                <div className="main-info">
                  <div className="pic_box">
                    <img className="pic_bg" src={`/src/images/activity/hd/20190123/01_pic@2x.png`}/>
                  </div>
                </div>
                <img className="bottom_pic" src={`/src/images/activity/hd/20190123/01_dibu@2x.png`}/>
                {t.buttonComponent()}
              </div>
            </div>
            <div className="swiper-slide slide2">
              <div className="main-info">
                <img src={`/src/images/activity/hd/20190123/02_pic@2x.png`}/>
              </div>
              <img className="bottom_pic" src={`/src/images/activity/hd/20190123/02_dibu@2x.png`}/>
              {t.buttonComponent()}
            </div>
            <div className="swiper-slide slide3">
              <div className="main-info">
                <img src={`/src/images/activity/hd/20190123/03_pic@2x.png`}/>
              </div>
              {t.buttonComponent()}
            </div>
            <div className="swiper-slide slide4">
              <div className="main-info">
                <img src={`/src/images/activity/hd/20190123/04_pic@2x.png`}/>
              </div>
              <img className="bottom_pic" src={`/src/images/activity/hd/20190123/04_dibu@2x.png`}/>
              {t.buttonComponent()}
            </div>
            <div className="swiper-slide slide5">

              {/*<PullToRefresh*/}
              {/*damping={60}*/}
              {/*ref={el => this.ptr = el}*/}
              {/*style={{*/}
              {/*height: this.state.height,*/}
              {/*overflow: 'auto',*/}
              {/*}}*/}
              {/*indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}*/}
              {/*direction={this.state.down ? 'down' : 'up'}*/}
              {/*refreshing={this.state.refreshing}*/}
              {/*onRefresh={() => {*/}
              {/*this.setState({ refreshing: true });*/}
              {/*setTimeout(() => {*/}
              {/*this.setState({ refreshing: false });*/}
              {/*}, 1000);*/}
              {/*}}*/}
              {/*>*/}
              <img className="slide5-banner" src={`/src/images/activity/hd/20190123/05_tit@2x.png`}/>

              <div className="swiper-container swiper-container-v experts-list">
                <div className="swiper-wrapper" onTouchEnd={(e) => {
                  this.swiperReset(e)
                }}>
                  <div className="swiper-slide">
                    {data.list ? data.list.map((value, index) => {
                      return (
                        <div className="experts-list-item" key={index}
                        >
                          <img src={value.doctorHead}
                               className="js_app_expert_detail"
                               data-target={`${this.target}_expert`}
                               data-id={value.doctorId}
                               data-url={this.expertsUrl}
                          />
                          <div className="experts-list-item-content js_app_expert_detail"
                               data-target={`${this.target}_expert`}
                               data-id={value.doctorId}
                               data-url={this.expertsUrl}
                          >
                            <div className="experts-list-item-name">
                              {value.doctorName}
                              <span className="experts-list-item-title">{value.doctorTitle}</span>
                            </div>
                            <div className="experts-list-item-info">
                              咨询次数<span>{value.zixunOrderNum}</span>
                              好评率<span>{value.feedbackRate}%</span>
                            </div>
                            <ul className="experts-list-item-tag">
                              {value.tags ? value.tags.map(((val,index) => {
                                return (<li key={index}>{val}</li>);
                              })) : ''}
                            </ul>
                            <div
                              className="experts-list-item-times">{data.isBuy ? '您的体验机会已用完' : `今日仅剩${value.leftNum}个名额`}</div>
                          </div>
                          {this.expertButton(value, index)}
                        </div>

                      );
                    }) : ''}
                  </div>
                </div>
              </div>
              <div className="bottom-buttonbox">
                <span className="left-button" onClick={this.showModal.bind(t)}/>
                <span className="right-button js_wechat_share" />
              </div>
            </div>


          </div>
          <Modal
            popup
            visible={this.state.modal}
            onClose={() => this.setState({modal: false})}
            animationType="slide-up"
            wrapClassName="page-hd-20190123"
            // afterClose={() => {
            //   alert('afterClose');
            // }}
          >
            <img className="helppic" src={`/src/images/activity/hd/20190123/06@2x.png`}/>
          </Modal>

          <Modal
            popup
            visible={this.state.modalShare}
            onClose={() => this.setState({modalShare: false})}
            wrapClassName="page-hd-20190123"
            className="share_layer"
            // afterClose={() => {
            //   alert('afterClose');
            // }}
          >
            <img className="helppic" src={`/src/images/activity/hd/20190123/share.png`}/>
          </Modal>


        </section>
      </div>)
      ;
  }

  render() {
    const t = this;
    return t.renderComponent();
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  }
}

const NianZhongClass = connect(mapStateToProps)(NianZhong);

NianZhongClass.propTypes = {
  data: PropTypes.string
}

export default NianZhongClass;
