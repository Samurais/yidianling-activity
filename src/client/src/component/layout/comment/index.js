/**
 * type
 * 1:  {
 *      "name": String,
 *      "time": Date
 *      "say": HTML || String
 *     }
 * 2:  {
 *      "face": Images,
 *      "name": String,
 *      "time": Date
 *      "say": HTML || String
 *     }
 */
import React, {Component} from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import Util from '../../../lib/util.js';

class Page extends Component {

  constructor(props) {

    super(props);

    this.commentList = this.props.list;

    this.type = this.props.type;
  }

  componentDidMount() {}

  get1HTML(item, index) {
    return (
      <li className="item1" key={index}>
        <strong>{item.name} {item.time}</strong>
        <p>{item.say}</p>
      </li>
    )
  }

  get2HTML(item, index) {
    return (
      <li className="item2" key={index}>
        <dl>
          <dt><img data-original={item.face} className="lazy" /></dt>
          <dd>
            <strong className="name">{item.name}</strong>
            <span>{item.time}</span>
            <p dangerouslySetInnerHTML = {{ __html:item.say }}></p>
          </dd>
        </dl>
      </li>
    )
  }

  getCommentList(item, index){

    if(this.type == "1") {
      return this.get1HTML(item, index);
    }

    if(this.type == "2") {
      return this.get2HTML(item, index);
    }
  }

  getHTML(){
    return this.commentList.map((item, index) => (
      this.getCommentList(item, index)
    ));
  }

  render() {
    return (
      <div>
        <div className="g-comment">
          <ul>
            {this.getHTML()}
          </ul>
        </div>
      </div>
    )
  }

}

export default Page;
