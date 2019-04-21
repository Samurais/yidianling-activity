/**
 * type
 * 1:  {
 *      "ico": Images,
 *      "title": String,
 *      "des": HTML || String,
 *     }
 * 2:  {
 *      "ico": Images,
 *      "title": String,
 *      "des": HTML || String,
 *      "num": Number
 *     }
 */
import React, {Component} from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import Util from '../../../lib/util.js';

class Page extends Component {

  constructor(props) {

    super(props);

    this.signList = this.props.list;

    this.type = this.props.type;
  }

  componentDidMount() {

  }

  get1HTML(item, index) {

    let numHTML = "";

    if(item.num) {
      numHTML = (
        <span className="g-mt10">{item.num}人已咨询</span>
      )
    }

    return (
      <li className="item item1" key={index}>
        <img data-original={item.ico} className="lazy" />
        <strong dangerouslySetInnerHTML={{ __html: item.title }}></strong>
        <h3 dangerouslySetInnerHTML={{ __html: item.des }}></h3>
        {numHTML}
      </li>
    )
  }

  get2HTML(item, index) {
    return (
      <li className="item item2" key={index}>
        <img data-original={item.ico} className="lazy" />
        <strong dangerouslySetInnerHTML={{ __html: item.title }}></strong>
        <h3 dangerouslySetInnerHTML={{ __html: item.des }}></h3>
      </li>
    )
  }

  getSignList(item, index){

    if(this.type == "1") {
      return this.get1HTML(item, index);
    }

    if(this.type == "2") {
      return this.get2HTML(item, index);
    }

    return this.get1HTML(item, index);
  }

  getHTML(){

    return this.signList.map((item, index) => (
      this.getSignList(item, index)
    ));
  }

  render() {
    return (
      <div>
        <div className="g-sign">
          <ul>
            {this.getHTML()}
          </ul>
        </div>
      </div>
    )
  }

}

export default Page;
