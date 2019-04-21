import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Modal,Toast } from 'antd-mobile';
import Util from '../../../../../lib/util';
import Rule from '../../../../../component/rules';
import Wechat from '../../../../../component/wechat';
import Native from '../../../../../component/native';
class Page extends Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    Rule.init();
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

  render(){
    let {showBottom,showModal,phone}=this.state;
    return(
      <div>
        {/* 微信分享和授权 */}
        <Wechat {...this.props.data.wechat}/>
        {/* 跳转 */}
        <Native />
        <div className="page-activity-qs-20190225">
          20190225
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
