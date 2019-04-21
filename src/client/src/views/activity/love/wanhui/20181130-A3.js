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
        "face": "/src/images/activity/love/wanhui/20181130-A3/p-1-1-lyf.jpg",
        "name": "刘老师",
        "d1": "·心理学博士",
        "d2": "·美国纽约州立大学访问学者",
        "number": "2749"
      },
      {
        "face": "/src/images/activity/love/wanhui/20181130-A3/p-1-2-wpj.jpg",
        "name": "王老师",
        "d1": "·约克大学  Ph. D. -心理学 博士 ",
        "d2": "·英国 A.P.H.P 执业心理治疗师",
        "number": "3385"
      },
      {
        "face": "/src/images/activity/love/wanhui/20181130-A3/p-1-3-hj.jpg",
        "name": "黄老师",
        "d1": "·心理学硕士",
        "d2": "·美国Fordham大学访问学者",
        "number": "1608"
      },
    ];

    this.t2list = [
      {
        "face": "/src/images/activity/love/wanhui/20181130-A3/p-2-1-zly.jpg",
        "name": "赵老师",
        "d1": "·美国密歇根州立大学硕士",
        "d2": "·台湾咨商心理",
        "number": "3268"
      },
      {
        "face": "/src/images/activity/love/wanhui/20181130-A3/p-2-2-la.jpg",
        "name": "蓝老师",
        "d1": "·美国NLP大学授证高级执行师 ",
        "d2": "·复旦大学心理学硕士",
        "number": "7320"
      },
      {
        "face": "/src/images/activity/love/wanhui/20181130-A3/p-2-3-yhh.jpg",
        "name": "余老师",
        "d1": "·大学教授",
        "d2": "·美国A.B.H及P.A.S.H催眠师",
        "number": "6070"
      },
    ];

    this.t3list = [
      {
        "face": "/src/images/activity/love/wanhui/20181130-A3/p-3-1-lqy.jpg",
        "name": "吕老师",
        "d1": "·国际婚姻家庭指导师（高级）",
        "d2": "·美国咨询委员会认证全球生涯教练",
        "number": "2592"
      },
      {
        "face": "/src/images/activity/love/wanhui/20181130-A3/p-3-2-lzz.jpg",
        "name": "刘老师",
        "d1": "·美国心理学会(APA)国际会员",
        "d2": "·中美精神分析联盟(CAPA)会员",
        "number": "1167"
      },
    ];

    this.t4list = [
      {
        "face": "/src/images/activity/love/wanhui/20181130-A3/p-4-1-xw.jpg",
        "name": "项老师",
        "d1": "·国家公派访问学者 ",
        "d2": "·美国NLP大学授证高级执行师",
        "number": "3686"
      },
      {
        "face": "/src/images/activity/love/wanhui/20181130-A3/p-4-2-zyy.jpg",
        "name": "周老师",
        "d1": "·心理学博士",
        "d2": "·温州医科大学副教授",
        "number": "2541"
      },
    ];

    this.t5list = [
      {
        "face": "/src/images/activity/love/wanhui/20181130-A3/p-5-1-yln.jpg",
        "name": "袁老师",
        "d1": "·国际婚姻家庭指导师（高级）",
        "d2": "·美国NAHA 专业芳疗师会员资格",
        "number": "2712"
      },
      {
        "face": "/src/images/activity/love/wanhui/20181130-A3/p-5-2-lmy.jpg",
        "name": "陆老师",
        "d1": "·复旦大学心理学硕士",
        "d2": "·美国心理学会(APA)国际会员",
        "number": "3056"
      },
    ];
    this.newList1 = [
      {
        "name":"黄晶",
        "call":"黄老师",
        "face":"/src/images/activity/love/wanhui/20181130-A3/np-2-hj.jpg",
        "text1":"情感修复",
        "yearth":"6",
        "text2":"成功案例",
        "number":"1608"
      },
      {
        "name":"刘桢桢",
        "face":"/src/images/activity/love/wanhui/20181130-A3/np-2-lzz.jpg",
        "call":"刘老师",
        "text1":"中年情感危机",
        "yearth":"4",
        "text2":"成功案例",
        "number":"1167"
      },
      {
        "name":"陆美月",
        "face":"/src/images/activity/love/wanhui/20181130-A3/np-2-lmy.jpg",
        "call":"陆老师",
        "text1":"感情淡漠",
        "yearth":"7",
        "text2":"成功案例",
        "number":"3056"
      },
      {
        "name":"周莹莹",
        "face":"/src/images/activity/love/wanhui/20181130-A3/np-2-zyy.jpg",
        "call":"周老师",
        "text1":"第三者分离",
        "yearth":"8",
        "text2":"成功案例",
        "number":"2541"
      }
    ];
    this.newList2 = [
      {
        "name":"刘远芳",
        "call":"刘老师",
        "face":"/src/images/activity/love/wanhui/20181130-A3/np-1-lyf.jpg",
        "text1":"婆媳关系",
        "yearth":"7",
        "text2":"成功案例",
        "number":"2749"
      },
      {
        "name":"王佩娟",
        "face":"/src/images/activity/love/wanhui/20181130-A3/np-1-whj.jpg",
        "call":"王老师",
        "text1":"夫妻矛盾",
        "yearth":"6",
        "text2":"成功案例",
        "number":"3385"
      },
      {
        "name":"于海燕",
        "face":"/src/images/activity/love/wanhui/20181130-A3/np-1-yhy.jpg",
        "call":"于老师",
        "text1":"家庭暴力",
        "yearth":"14",
        "text2":"成功案例",
        "number":"6378"
      },
      {
        "name":"袁丽娜",
        "face":"/src/images/activity/love/wanhui/20181130-A3/np-1-yln.jpg",
        "call":"袁老师",
        "text1":"中年情感危机",
        "yearth":"10",
        "text2":"成功案例",
        "number":"2712"
      }
    ];
    this.newList3 = [
      {
        "name":"邓新红",
        "call":"邓老师",
        "face":"/src/images/activity/love/wanhui/20181130-A3/np-3-dxh.jpg",
        "text1":"第三者插足",
        "yearth":"13",
        "text2":"成功案例",
        "number":"4047"
      },
      {
        "name":"单老师",
        "face":"/src/images/activity/love/wanhui/20181130-A3/np-3-dhy.jpg",
        "call":"单老师",
        "text1":"伴侣出轨",
        "yearth":"6",
        "text2":"成功案例",
        "number":"2917"
      }
    ];
    this.newList4 = [
      {
        "name":"蓝奥",
        "call":"蓝老师",
        "face":"/src/images/activity/love/wanhui/20181130-A3/np-4-la.jpg",
        "text1":"性生活",
        "yearth":"13",
        "text2":"成功案例",
        "number":"7320"
      },
      {
        "name":"余汉华",
        "face":"/src/images/activity/love/wanhui/20181130-A3/np-4-yhh.jpg",
        "call":"余老师",
        "text1":"性心理",
        "yearth":"14",
        "text2":"成功案例",
        "number":"6070"
      }
    ];
    this.newList5 = [
      {
        "name":"桑彬彬",
        "call":"桑老师",
        "face":"/src/images/activity/love/wanhui/20181130-A3/np-5-sbb.jpg",
        "text1":"性格不合",
        "yearth":"4",
        "text2":"成功案例",
        "number":"1042"
      },
      {
        "name":"赵伊丽",
        "face":"/src/images/activity/love/wanhui/20181130-A3/np-5-zyl.jpg",
        "call":"赵老师",
        "text1":"恋爱指导",
        "yearth":"2",
        "text2":"成功案例",
        "number":"925"
      }
    ];
    // this.zmdList = [
    //   [{"name": "张****", "act": "开始咨询;"},{"name": "李****", "act": "咨询结束;"}],
    //   [{"name": "陈****", "act": "开始咨询;"},{"name": "马****", "act": "咨询结束;"}],
    //   [{"name": "李****", "act": "开始咨询;"},{"name": "钱****", "act": "咨询结束;"}],
    //   [{"name": "赵****", "act": "开始咨询;"},{"name": "刘****", "act": "咨询结束;"}],
    //   [{"name": "张****", "act": "开始咨询;"},{"name": "马****", "act": "咨询结束;"}],
    //   [{"name": "孙****", "act": "开始咨询;"},{"name": "钱****", "act": "咨询结束;"}],
    // ];
    this.defImg = "/src/images/lazy-1.png";
    this.downloadImg = "/src/images/activity/love/wanhui/20181130-A3/download.png";
    this.downloadUrl = "https://sj.qq.com/myapp/detail.htm?apkName=com.cxzapp.yidianling_atk8";
    this.video = "/src/videos/activity/love/wanhui/20181130-A3/teacher_d.mp4";
    this.videoimg = "/src/images/activity/love/wanhui/20181130-A3/videoimg.png";
    this.number = Util.randomFrom(5000, 6000);

    this.state = {
      modal: false,
      showFixed:true,
      version:1//1使用第一版样式，2使用第二版样式
    }
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
            <img className="icon" src="/src/images/activity/love/wanhui/20181130-A3/close.png"/>
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
    let eventId = "/love/wanhui/m/20181130-A3";

    // 判断是否点击过客服，如果没有，那么
    if (!localStorage.getItem(eventId)) {
      setTimeout(()=>{
        _this.showModal("modal");
      },15000);
    }
    // const _this = this;
    $(function(){

      Rule.init({
        "appId": "m-activity",
        eventId,
        "eventType": "pv",
        "platform": "wap"
      });



      let title =  $("title").text();
      $("title").eq(0).text(Util.moreString(title, 10));

      $("img.lazy").lazyload();

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

    // setTimeout(() => {
    //   this.showModal("modal");
    //   storage.setItem("activityWanHui", 1);
    // }, 5000);

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
        <a href="javascript:" data-target="/love/wanhui/m/20181130-A3_experts" className="js_kf">
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
  getNewHtml(item,index){
    return(
      <a href="javascript:" key={index} className="js_kf" data-target="/love/wanhui/m/20181130-A3_experts">
        <li className="item-container">
          <div className="item-header-box">
            <img className="item-img lazy" data-original={item.face} src={this.defImg}></img>
            <p className="text-1">{item.call}</p>
            {this.state.version == 1 ? (<p className="text-2">{item.text1}</p>):(<p className="text-2 text-strong">从业{item.yearth}年</p>)}
          </div>
          <div className="item-bottom-box">
            <div className="item-bottom-left">
              <p className="text-1">{item.text2}</p>
              <p className="text-2">
                <span>{item.number}</span>个
              </p>
            </div>
            <div className="item-bottom-right">
              立即咨询
            </div>
          </div>
        </li>
      </a>
    )
  }
  getVideo(){
    let element =  this.state.modal ?
    <video className="video" id="video" width="100%" poster={this.videoimg}
     preload="auto"
    //  x-webkit-airplay="allow"
    //  x5-video-player-type="h5"　//启用H5播放器,是wechat安卓版特性
    //  x5-video-player-fullscreen="true"　//全屏设置，设置为 true 是防止横屏
    //  x5-video-orientation="portraint"　//播放器支付的方向，landscape横屏，portraint竖屏，默认值为竖屏
    //  webkit-playsinline="true"　//</div>这个属性是ios 10中设置可以让视频在小窗内播放，也就是不是全屏播放
    //  playsInline={true}　//IOS微信浏览器支持小窗内播放
    height={"0"}
    style={{visibility:"hidden",objectFit: "fill"}}
    >
      <source style={{visibility:"hidden"}} src={this.video} type="video/mp4" />
    </video>
  :
    <video className="video" id="video" width="100%" controls poster={this.videoimg}
     preload="auto"
    //  x-webkit-airplay="allow"
    //  x5-video-player-type="h5"　//启用H5播放器,是wechat安卓版特性
    //  x5-video-player-fullscreen="true"　//全屏设置，设置为 true 是防止横屏
    //  x5-video-orientation="portraint"　//播放器支付的方向，landscape横屏，portraint竖屏，默认值为竖屏
    //  webkit-playsinline="true"　//</div>这个属性是ios 10中设置可以让视频在小窗内播放，也就是不是全屏播放
    //  playsInline={true}　//IOS微信浏览器支持小窗内播放
    style={{objectFit: "fill"}}>
      <source src={this.video} type="video/mp4" />
    </video>
    return element;
  }

  render() {
    return (
      <div>
        <Wechat {...this.wechatData} />

        <div className="page-love-wanhui-20181130-A3">
          {/* {this.getFixedHtml()} */}
          <div className="pic">
            <a href="javascript:" data-target="/love/wanhui/m/20181130-A3_banner" className="js_kf">
              <img src="/src/images/lazy-1.png" data-original="/src/images/activity/love/wanhui/20181130-A3/p1.png" className="lazy" />
            </a>
          </div>
          {/* 视频 */}
          <section>
            <div className="title-box first-title-box">
              <div className="title">
                如何使用心理学解决情感问题
              </div>
              <div className="under-line"></div>
            </div>

            <div className="video-box">
              {this.getVideo()}
            </div>
          </section>
          {/* 挽回婚姻 */}
          <section>
            {/* <div className="pic title mt">
              <img  src="/src/images/lazy-1.png"  data-original="/src/images/activity/love/wanhui/20181130-A3/t1.png" className="lazy" />
            </div> */}
            <div className="title-box first-title-box">
              <div className="title">
                挽回婚姻服务
              </div>
              <div className="under-line"></div>
            </div>

            <div>
              <ul className="big-box">
                {/* {this.t1list.map((item, index) => (
                  this.getHTML(item, index)
                ))} */}
                {this.newList1.map((item,index)=>
                  this.getNewHtml(item,index)
                )}
              </ul>
            </div>
          </section>

          {/* 婚姻家庭 */}
          <section>
            {/* <div className="pic title">
              <img src="/src/images/lazy-1.png" data-original="/src/images/activity/love/wanhui/20181130-A3/t2.png" className="lazy" />
            </div> */}
            <div className="title-box">
              <div className="title">
                婚姻家庭服务
              </div>
              <div className="under-line"></div>
            </div>
            <div>
              <ul className="big-box">
                {/* {this.t2list.map((item, index) => (
                  this.getHTML(item, index)
                ))} */}
                {this.newList2.map((item,index)=>
                  this.getNewHtml(item,index)
                )}
              </ul>
            </div>
          </section>

          {/* 分离第三者 */}
          <section>
            {/* <div className="pic title">
              <img src="/src/images/lazy-1.png" data-original="/src/images/activity/love/wanhui/20181130-A3/t3.png" className="lazy" />
            </div> */}
            <div className="title-box .reset-1">
              <div className="title">
                分离第三者服务
              </div>
              <div className="under-line"></div>
            </div>

            <div>
              <ul className="big-box">
                {/* {this.t3list.map((item, index) => (
                  this.getHTML(item, index)
                ))} */}
                {this.newList3.map((item,index)=>
                  this.getNewHtml(item,index)
                )}
              </ul>
            </div>
          </section>

          {/* 两性问题 */}
          <section>
            {/* <div className="pic title">
              <img src="/src/images/lazy-1.png" data-original="/src/images/activity/love/wanhui/20181130-A3/t5.png" className="lazy" />
            </div> */}
            <div className="title-box reset-2">
              <div className="title">
                两性问题服务
              </div>
              <div className="under-line"></div>
            </div>

            <div>
              <ul className="big-box">
                {/* {this.t4list.map((item, index) => (
                  this.getHTML(item, index)
                ))} */}
                {this.newList4.map((item,index)=>
                  this.getNewHtml(item,index)
                )}
              </ul>
            </div>
          </section>

          {/* 挽回爱情 */}
          <section>
            {/* <div className="pic title">
              <img src="/src/images/lazy-1.png" data-original="/src/images/activity/love/wanhui/20181130-A3/t4.png" className="lazy" />
            </div> */}
            <div className="title-box reset-2">
              <div className="title">
                挽回爱情服务
              </div>
              <div className="under-line"></div>
            </div>

            <div>
              <ul className="big-box">
                {this.newList5.map((item,index)=>
                  this.getNewHtml(item,index)
                )}
              </ul>
            </div>
          </section>

          <div className="pic title setmargin">
            <a href="javascript:" data-target="/love/wanhui/m/20181130-A3_chat_end" className="js_kf">
              <img src="/src/images/lazy-1.png" data-original="/src/images/activity/love/wanhui/20181130-A3/p3.png" className="lazy" />
            </a>
          </div>

          <div className="pic">
            <img src="/src/images/lazy-1.png" data-original="/src/images/activity/love/wanhui/20181130-A3/p4.png" className="lazy" />
          </div>

          <div className="pic">
            <img src="/src/images/lazy-1.png" data-original="/src/images/activity/love/wanhui/20181130-A3/p5.png" className="lazy" />
          </div>

          <div className="copyright">
            <span className="win_copyright"></span>
            <span className="win_company"></span>
            <span className="win_copycode"></span>
          </div>

          <div className="ft">
            <div className="link">
              <a href="javascript:" className="a1 js_kf_phone" data-target="/love/wanhui/m/20181130-A3_phone"></a>
              <a href="javascript:" data-target="/love/wanhui/m/20181130-A3_chat" className="a2 js_kf"></a>
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
            <a href="javascript:" data-target="/love/wanhui/m/20181130-A3_modal" className="js_kf">
              <img src="/src/images/activity/love/wanhui/20181130-A3/modal.png" />
            </a>
          </div>
          <a href="javascript:" className="js_close" data-target="/love/wanhui/m/20181130-A3_close_modal" onClick={this.onClose('modal')}></a>
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

