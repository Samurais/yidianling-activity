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
  Popup
} from '../component';

class Page extends Component {
  constructor(props) {
    super(props);

    this.pagePicList1 = [
      {
        "name":"/src/images/qs/20190225/1-B.jpg",
      },
      {
        "name":"/src/images/qs/20190225/1-1.png",
      },
      {
        "name":"/src/images/qs/20190225/2-B.jpg",
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
  }
  componentDidMount() {
    Rule.init();
    let _this=this;
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

  render(){
    return(
      <div className="page-activity-qs-20190225-page2 page-activity-qs-20190225">
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

        {/* 底部弹窗 */}
        <Popup />

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
