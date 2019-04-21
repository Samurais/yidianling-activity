import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Modal,Toast } from 'antd-mobile';
import Util from '../../../../../lib/util';
import Rule from '../../../../../component/rules';
import Wechat from '../../../../../component/wechat';
import API from '../20190130/api';
import Native from '../../../../../component/native';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state={
      showBottom:false,
      showModal:false,
      phone:"",
      redeemCode:""
    };
    this.formData = {
      //兑换码
      redeemCode: "",
      //手机号
      phone: "",
      //验证码
      code: "",
    };
    this.defImg = "/src/images/global/lazy.png";
    this.pageList=[
      {
        "name":"/src/images/qs/20190130/1.jpg"
      },
      {
        "name":"/src/images/qs/20190130/2.png"
      },
      {
        "name":"/src/images/qs/20190130/3.png"
      },
      {
        "name":"/src/images/qs/20190130/4.png"
      },
      {
        "name":"/src/images/qs/20190130/5.png"
      }
    ];
    this.closeModal = this.closeModal.bind(this);
    this.showModal = this.showModal.bind(this);
  }
  componentDidMount() {
    Rule.init({
      "appId": "m-activity",
      "eventId": "/activity/qs/tangka20190218",
      "eventType": "pv",
      "platform": "wap"
    });
    let _this=this;
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
    window.addEventListener("scroll",()=>{
      let formBox=this.refs.formBox;
      let top=formBox.offsetHeight+formBox.offsetTop;
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollTop>top){
        this.setState({
          showBottom:true
        })
      }else{
        this.setState({
          showBottom:false
        })
      }
    })
    let $body = $("body");
    $body .on("click",".js-code", function(){
      console.log(11)
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
  }
  showModal(e){
    e.preventDefault();
    this.setState({
      showModal:true,
      phone:this.formData.phone
    },()=>{
      $("body").bind('touchmove', function(e) {
        e.preventDefault();
      });
    })

  }
  closeModal(e){
    e.preventDefault();
    this.setState({
      showModal:false,
      phone:this.formData.phone
    },()=>{
      $("body").unbind('touchmove');

    })
  }
  change(e){
    this.formData[e.target.name] = e.target.value;
  }

  submit(e){
    let redeemCode = this.formData.redeemCode.trim();
    let phone = this.formData.phone.trim();
    let code = this.formData.code.trim();
    const reg = /^((1[0-9][0-9])|(14[5,7])|(17[0,3,6,7,8])|(19[7]))\d{8}$/;
    let headers = Util.getRequestData("ffrom") || {};
    if(redeemCode == "") {
      Toast.fail("请输入兑换码", 2);
      return;
    }
    // if( ) {
    //   Toast.fail("请输入有效的兑换码", 2);
    //   return;
    // }
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
      "redeemCode": this.formData.redeemCode.trim(),
      "type": 0,
      "version": ""
    },{...headers, bu_ffrom_url,}).then(res => {

      window.location.href = `https://m.yidianling.com/auth/succ/?uid=${res.data.uid}&token=${res.data.accessToken}&target=${"https://m.yidianling.com/listen/"}`;
      // window.location.href = `https://m.yidianling.com/listen/?uid=${res.data.uid}&accessToken=${res.data.accessToken}`;
    });
  }

  render(){
    let {showBottom,showModal,phone}=this.state;
    return(
      <div>
        {/* 微信分享和授权 */}
        <Wechat {...this.props.data.wechat}/>
        {/* 跳转 */}
        <Native />
        <div className="page-activity-qs-20190218">
          <div className="top-container">
            <img className="lazy" data-original={this.pageList[0].name} src={this.defImg}></img>
            <div className="form-box js_hmt_click" ref="formBox" onClick={this.showModal} style={showModal?{"display":"none"}:{}} data-target="/qs/20190130_formboxclick">
              <div className="input-box">
                <input className="input1 disabled"
                       placeholder="请输入兑换码" name="redeemCode" onChange={()=>{null}} type="text" disabled></input>
              </div>
              <div className="input-box">
                <input className="input1 disabled"
                       placeholder="请输入手机号" name="phone" defaultValue={phone} onChange={()=>{null}} type="text" disabled></input>
              </div>
              <div className="input-box">
                <input className="input2 disabled"
                       placeholder="请输入验证码" name="code"  type="text" disabled></input>
                <div className="get-code">获取验证码</div>
              </div>
              <div className="send-btn">免费拨打解忧电话</div>
              <img className="img1"src={this.pageList[4].name}></img>
            </div>
          </div>
          <div className="container">
            <img className="lazy experts" data-original={this.pageList[1].name} onClick={this.showModal} src={this.defImg}></img>
          </div>
          <div className="container">
            <img className="lazy" data-original={this.pageList[2].name} src={this.defImg}></img>
          </div>
          {!!showBottom?<div className="in-bottom"></div>:""}
          {!!showBottom?<div className="bottom-box"><div className="bottom-btn js_hmt_click" onClick={this.showModal} data-target="/qs/20190218_freecall">免费拨打解忧电话</div></div>:""}
          <Modal
            popup
            visible={showModal}
            onClose={this.closeModal}
            className="modal-page-activity-qs-20190218"
            mask={true}
          >
            <div className="form-box">
              <div className="input-box">
                <input className="input1 disabled"
                       placeholder="请输入兑换码" onChange={this.change.bind(this)} name="redeemCode" autoFocus></input>
              </div>
              <div className="input-box">
                <input className="input1"
                       placeholder="请输入手机号" onChange={this.change.bind(this)} defaultValue={phone} name="phone"></input>
              </div>
              <div className="input-box">
                <input className="input2"
                       placeholder="请输入验证码" onChange={this.change.bind(this)} name="code"></input>
                <div className="get-code js-code js_hmt_click" data-target="/qs/20190218_getcode">获取验证码</div>
              </div>
              <div className="send-btn js_hmt_click" onClick={this.submit.bind(this)} data-target="/qs/20190218_freecall">免费拨打解忧电话</div>
              <img className="img1"src={this.pageList[4].name}></img>
            </div>
          </Modal>
        </div>
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

export default Page;
