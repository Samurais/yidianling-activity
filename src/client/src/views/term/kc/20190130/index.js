
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rule from '../../../../component/rules';

import Native from '../../../../component/native';

import Wechat from '../../../../component/wechat';

// import engine from '../../../../lib/canvas/engine';

class Page extends Component {

  constructor(props) {

    super(props);

    this.url="https://m.ydl.com/course";

    this.defImg = "";

    this.linkData = [
      {
        "des": "过春节你要相亲吗",
        "cls": "link-1",
        "id": "650"
      },
      {
        "des": "如何精准觅爱",
        "cls": "link-2",
        "id": "887"
      },
      {
        "des": "最详尽的女性安全感提升攻略（之一）",
        "cls": "link-3",
        "id": "2177"
      },
      {
        "des": "警惕“渣男”的爱情骗术，避免成为受害者",
        "cls": "link-4",
        "id": "973"
      },
      {
        "des": "婚姻相处之道：丈夫爱指责，我该怎么办？",
        "cls": "link-5",
        "id": "239"
      },
      {
        "des": "女性脱单和恋爱相处指南",
        "cls": "link-6",
        "id": "1815"
      },
      {
        "des": "孩子哭闹发脾气，4个步骤轻松搞定！",
        "cls": "link-7",
        "id": "1256"
      },
      {
        "des": "一招制胜|如何与孩子非暴力沟通？",
        "cls": "link-8",
        "id": "640"
      },
      {
        "des": "情绪管理三步法，让你遇见更完美的自己！",
        "cls": "link-9",
        "id": "388"
      },
      {
        "des": " 如何吸引财富能量丨让金钱更轻松地找到你",
        "cls": "link-10",
        "id": "1082"
      },
      {
        "des": "如何运用潜意识 自我催眠减压",
        "cls": "link-11",
        "id": "872"
      },
    ]
  }

  componentDidMount() {

    let imgpath = "/src/images/term/kc/20190130/";
    let manifest = [
      {
        "id": "p-1",
        "src": `${imgpath}p-1.png`
      },
      {
        "id": "p-2",
        "src": `${imgpath}p-2.png`
      },
      {
        "id": "p-3",
        "src": `${imgpath}p-3.png`
      },
    ];
    let _this = this;

    // // 当前状态
    // let handleProgress = function(progress) {
    //   $(".loading-progress-bar span i").attr("style", `width:${Math.floor(progress*100)}%`);
    // };

    // // 加载完成
    // let handleComplete = function() {
    //   $(".loading-page").addClass("hide");
    //   $(".page-term-kc-20190130-content").addClass("show");
    // };

    // // 单个加载完毕
    // let handleFileLoad = function(res) {
    //   $(`.${res.item.id}`).html(`<img src="${res.item.src}" />`);
    // };

    $(function(){

      Rule.init({
        "appId": "m-activity",
        "eventId": "/kc/20190130",
        "eventType": "pv",
        "platform": "wap"
      });

      // 手机倾斜
      if(window.DeviceOrientationEvent) {

        let alpha, webkitAlpha, beta, gamma, gammaPM;

        window.addEventListener('deviceorientation', function(event) {

          beta = event.beta;
          gamma = event.gamma;

          // 判斷是否為 iOS 裝置
          if(event.webkitCompassHeading) {
            alpha = event.webkitCompassHeading;

          } else {
            alpha = event.alpha;
            webkitAlpha = alpha;
            if(!window.chrome) {
              webkitAlpha = alpha-270;
            }
          }

          gammaPM = gamma >= 0 ? 1 : 0;
          gamma = Math.abs(gamma.toFixed(2));

          beta = beta.toFixed(0);

          if(Math.abs(beta) < 80 && gamma <= 80) {
            if(gammaPM == 0) gamma = -gamma;

            // $("#test").html(`${beta}`)

            beta = (beta-20)/2;
            gamma /= 12;

            $(".act").attr("style", `
              -webkit-transform:translateZ(800px) rotateX(${-beta}deg) rotateZ(${gamma}deg);
              transform:translateZ(800px) rotateX(${-beta}deg) rotateZ(${gamma}deg);
            `);
          }

          // if(gamma <= 10) {

          //   beta = Math.abs(beta.toFixed(2));

          //   // if(beta > 30) beta = 30;

          //   beta = beta;

          //   if(gammaPM == 0) {
          //     gamma = -gamma;
          //   }


          // }




          //$(".act").attr("style", `-webkit-transform:rotate(${gamma}deg);transform:rotate(${gamma}deg)`);


        }, false);
      }

      // engine.LoadQueue({
      //   manifest,
      //   handleProgress,
      //   handleComplete,
      //   handleFileLoad,
      // });

      _this.linkData.map((item, index) => {
        $(`.${item.cls}`).data("id", item.id).data("url", _this.url);
      });

      $(".lazy").each(function(){
        let name = $(this).data("name");
        $(this).attr("src", `${imgpath}${name}.png`);
      });
    });
  }

  render() {

    return (
      <div className="page-term-kc-20190130">

        {/* <div id="test"></div> */}

        {/* <div className="loading-page">
          <div className="loading-progress-bar">
            <span><i></i></span>
          </div>
        </div> */}

        <div className="page-term-kc-20190130-content">

          <div className="pic p-1"><img src={`${this.defImg}`} data-name="p-1" className="lazy" /></div>
          <div className="pic p-2"><img src={`${this.defImg}`} data-name="p-2" className="lazy" /></div>
          <div className="pic p-3"><img src={`${this.defImg}`} data-name="p-3" className="lazy" /></div>

          <div className="pic-title">
            <div className="pic p-18 act"><img src={`${this.defImg}`} data-name="p-18" className="lazy" /></div>
          </div>

          {/* 过春节你要相亲吗 */}
          <div className="item">
            <a href="javascript:" className="link-1 js_app_courseDetail"></a>
            <div className="pic p-4"><img src={`${this.defImg}`} data-name="p-4" className="lazy" /></div>
          </div>

          {/* 如何精准觅爱 */}
          <div className="item">
            <a href="javascript:" className="link-2 js_app_courseDetail"></a>
            <div className="pic p-5">
              <img src={`${this.defImg}`} data-name="p-5" className="lazy" />
            </div>
          </div>

          {/* 最详尽的女性安全感提升攻略（之一）
          警惕“渣男”的爱情骗术，避免成为受害者 */}
          <div className="item">
            <a href="javascript:" className="link-3 l js_app_courseDetail"></a>
            <a href="javascript:" className="link-4 r js_app_courseDetail"></a>
            <div className="pic p-6">
              <img src={`${this.defImg}`} data-name="p-6" className="lazy" />
            </div>
          </div>

          {/* 婚姻相处之道：丈夫爱指责，我该怎么办？ */}
          {/* 女性脱单和恋爱相处指南 */}
          <div className="item">
            <a href="javascript:" className="link-5 l js_app_courseDetail"></a>
            <a href="javascript:" className="link-6 r js_app_courseDetail"></a>
            <div className="pic p-7">
              <img src={`${this.defImg}`} data-name="p-7" className="lazy" />
            </div>
          </div>

          <div className="pic p-8">
            <img src={`${this.defImg}`} data-name="p-8" className="lazy" />
          </div>

          {/* 孩子哭闹发脾气，4个步骤轻松搞定！ */}
          <div className="item">
            <a href="javascript:" className="link-7 js_app_courseDetail"></a>
            <div className="pic p-9">
              <img src={`${this.defImg}`} data-name="p-9" className="lazy" />
            </div>
          </div>

          {/* 一招制胜|如何与孩子非暴力沟通？ */}
          <div className="item">
            <a href="javascript:" className="link-8 js_app_courseDetail"></a>
            <div className="pic p-10">
              <img src={`${this.defImg}`} data-name="p-10" className="lazy" />
            </div>
          </div>

          <div className="pic p-11">
            <img src={`${this.defImg}`} data-name="p-11" className="lazy" />
          </div>

          {/* 情绪管理三步法，让你遇见更完美的自己！ */}
          <div className="item">
            <a href="javascript:" className="link-9 js_app_courseDetail"></a>
            <div className="pic p-12">
              <img src={`${this.defImg}`} data-name="p-12" className="lazy" />
            </div>
          </div>

          {/* 如何吸引财富能量丨让金钱更轻松地找到你
          如何运用潜意识 自我催眠减压 */}
          <div className="item">
            <a href="javascript:" className="link-10 l js_app_courseDetail"></a>
            <a href="javascript:" className="link-11 r js_app_courseDetail"></a>
            <div className="pic p-13">
              <img src={`${this.defImg}`} data-name="p-13" className="lazy" />
            </div>
          </div>

          <div className="pic p-14">
            <img src={`${this.defImg}`} data-name="p-14" className="lazy" />
          </div>
          <div className="pic p-15">
            <img src={`${this.defImg}`} data-name="p-15" className="lazy" />
          </div>
          <div className="pic p-16">
            <img src={`${this.defImg}`} data-name="p-16" className="lazy" />
          </div>
          <div className="pic p-17">
            <img src={`${this.defImg}`} data-name="p-17" className="lazy" />
          </div>
        </div>

        <Wechat {...this.props.data.wechat} />
        <Native />
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
