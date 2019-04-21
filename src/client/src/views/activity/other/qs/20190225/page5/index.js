import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Modal,Toast } from 'antd-mobile';
import Util from '../../../../../../lib/util';
import Rule from '../../../../../../component/rules';
import Wechat from '../../../../../../component/wechat';
import Swiper from 'swiper/dist/js/swiper.js';
import Native from '../../../../../../component/native';
import API from "../../20190130/api";

// 引入布局
import {
  Gywm,
  Zjtd,
  Bdry,
} from '../component';

class Page extends Component {
  constructor(props) {
    super(props);

    this.state={
      display_name: 'none',
      phone:""
    };
    this.formData = {
      redeemCode: "",
      phone: "",
      code: "",
    };

    this.pagePicList1 = [
      {
        "name":"/src/images/qs/20190225/1.jpg",
      },
      {
        "name":"/src/images/qs/20190225/2.jpg",
      },
      {
        "name":"/src/images/qs/20190225/3.jpg",
      },
      {
        "name":"/src/images/qs/20190225/4.jpg",
      },
      {
        "name":"/src/images/qs/20190225/5.jpg",
      },
      {
        "name":"/src/images/qs/20190225/6.jpg",
      },
      {
        "name":"/src/images/qs/20190225/7.jpg",
      }
    ];
    this.pagePicList2 = [
      {
        "name":"/src/images/qs/20190225/9.jpg"
      },
      {
        "name":"/src/images/qs/20190225/10.jpg"
      }
    ];
    this.pagePicList3 = [
      {
        "name":"/src/images/qs/20190225/12.jpg"
      },
      {
        "name":"/src/images/qs/20190225/13.jpg"
      }
    ];
    this.defImg = "/src/images/global/lazy.png";
    this.button="/src/images/qs/20190225/button-E.png";
    this.button2="/src/images/qs/20190225/button2.png";
  }
  componentDidMount() {
    Rule.init();
    let _this=this;
    let $body = $("body");
    // $body .on("click",".js-code", function(){
    $(".js-code").on("click", function(){
      console.log(11);
      if($(".js-code").hasClass('disabled')) return;

      let phone = _this.formData.phone.trim();

      const reg = /^((1[0-9][0-9])|(14[5,7])|(17[0,3,6,7,8])|(19[7]))\d{8}$/;

      if(phone == "") {
        Toast.fail("请输入手机号码", 2);
        return;
      }

      if(!reg.test(phone)) {
        Toast.fail("请输入正确的手机号码", 2);
        return;
      }

      API.userSendLoginSMS({
        phone,
      }).then(res => {
        let num = 60;

        $(".js-code").addClass("disabled");

        Util.tick(num, function(i){
          let n = num - i;

          if( n <= 0 ){
            $(".js-code").removeClass('disabled').html("获取验证码");
            return;
          }

          $(".js-code").html(`重新发送(${n}s)`);
        });
      });
    });
    $(window).scrollTop(0);
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

  getHtml(item,index){
    let element;
    element = item.id? (
      <a className="js_kf" key={index} href="javascript:" data-target={item.id == 1 ? "/qs/20190225":"/qs/20190225_underbanner"}>
        <div className="container">
          <img className="item lazy" data-original={item.name} src={this.defImg} key={index}/>
        </div>
      </a>
    ) :(
      <div className="container" key={index}>
        <img className="item lazy" data-original={item.name} src={this.defImg} key={index}/>
      </div>
    );
    return element;
  }

  display_name() { //编辑按钮的单击事件，修改状态机display_name的取值
    if (this.state.display_name == 'none') {
      this.setState({
        display_name: 'block',
      })
    }
    else if (this.state.display_name == 'block') {
      this.setState({
        display_name: 'none',
      })
    }
  }

  change(e){
    this.formData[e.target.name] = e.target.value;
  }

  submit(e){
    let phone = this.formData.phone.trim();
    let code = this.formData.code.trim();
    const reg = /^((1[0-9][0-9])|(14[5,7])|(17[0,3,6,7,8])|(19[7]))\d{8}$/;
    let headers = Util.getRequestData("ffrom") || {};
    if(phone == "") {
      Toast.fail("请输入手机号码", 2);
      return;
    }
    if(!reg.test(phone)) {
      Toast.fail("请输入正确的手机号码", 2);
      return;
    }
    if(code == ""){
      Toast.fail("请输入验证码", 2);
      return;
    }
    let bu_ffrom_url = window.location.href;
    API.userLoginSMS({
      "channalId": "",
      "code": this.formData.code.trim(),
      "countryCode": "0086",
      "phoneNumber": this.formData.phone.trim(),
      "type": 0,
      "version": ""
    },{...headers, bu_ffrom_url,}).then(res => {

      window.location.href = `https://m.yidianling.com/auth/succ/?uid=${res.data.uid}&token=${res.data.accessToken}&target=${"https://m.yidianling.com/listen/"}`;
      // window.location.href = `https://m.yidianling.com/listen/?uid=${res.data.uid}&accessToken=${res.data.accessToken}`;
    });
  }

  render(){
    let {display_name,phone}=this.state;
    return(
      <div className="page-activity-qs-20190225-page5 page-activity-qs-20190225">
        {/*banner列表*/}
        <ul className="List1-box">
          {this.pagePicList1.map((item,index)=>
            this.getHtml(item,index)
          )}
        </ul>

        {/* 关于我们 */}
        <div className="gywm"><Gywm /></div>

        {/*融资、专家团队title*/}
        {this.pagePicList2.map((item,index)=>
          this.getHtml(item,index)
        )}

        {/*专家团队*/}
        <div className="zjtd"><Zjtd /></div>

        {/* 八大荣誉 */}
        <div className="bdry"><Bdry /></div>

        {/*媒体报道、合作伙伴*/}
        {this.pagePicList3.map((item,index)=>
          this.getHtml(item,index)
        )}

        {/* 免费拨打解忧电话 */}
        <div className='bottom-none'></div>
        <div className='bottom' onClick={this.display_name.bind(this)}>
          <img data-original={this.button} src={this.defImg} className="lazy"/>
        </div>

        <div className="tanchuang" style={{display: this.state.display_name }}>
          <div className="mask" onClick={this.display_name.bind(this)}></div>
          <div className="form-box">
            <div className='wrap'>
              <div className="input-box">
                <input className="input1"
                       placeholder="请输入手机号" type="tel" onChange={this.change.bind(this)} defaultValue={phone} name="phone" autoFocus></input>
              </div>
              <div className="input-box">
                <input className="input2"
                       placeholder="请输入验证码" type="tel" onChange={this.change.bind(this)} name="code"></input>
                <div className="get-code js-code js_hmt_click" data-target="/qs/20190225_getcode">获取验证码</div>
              </div>
              <div className="send-btn2 js_hmt_click" onClick={this.submit.bind(this)} data-target="/qs/20190225_freecall">
                <img src="/src/images/qs/20190225/button2.png" className="lazy"  />
              </div>
            </div>
          </div>
        </div>

      {/* 微信分享和授权 */}
      <Wechat {...this.props.data.wechat}/>
    </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    data: state.data,
  }
};

Page = connect(mapStateToProps)(Page);

export default Page;
