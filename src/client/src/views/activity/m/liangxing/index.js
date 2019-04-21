import React, { Component } from "react";
import Rule from '../../../../component/rules';
import Swiper from 'swiper/dist/js/swiper.js';
class Page extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(function(){
      Rule.init();
    })
   }

  render() {
    return (
      <div className="page-m-liangxing">
        liangxing
      </div>
    )
  }
}
export default Page;
