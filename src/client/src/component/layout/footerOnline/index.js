import React, {Component} from 'react';

class Wechat extends Component {

  constructor(props) {

    super(props);

    this.data = this.props.data;

    this.linkLen = this.data.length || 1;

    this.bg = this.props.bg || "white";

    this.cls = `g-footer-online g-footer-${this.linkLen} ${this.bg}`;

  }

  componentDidMount() {
  }

  getOnLink(data, index){

    let cls = " blue ";
    let tag = "";
    let text = "";
    let textDef = {
      "online": "在线咨询",
      "download": "下载APP",
      "phone": "电话咨询",
    }

    if(data.tag === undefined || data.tag) {
      tag = (<i></i>);
    }

    if(data.fill) {
      cls += " fill ";
    }

    if(data.color) {
      cls += ` ${data.color} `;
    }

    text = textDef[data.type] || "button";

    if(data.text){ text = data.text;}

    if(data.type == "online") {

      cls += " ft-btn-online js_kf ";

      return (<a href="javascript:" target="_blank" key={index} className={cls}>{tag}{text}</a>);
    }

    if(data.type == "download") {
      cls += " ft-btn-download ";
      return (<a href="https://m.yidianling.com/app" target="_blank" key={index} className={cls}>{tag}{text}</a>);
    }

    if(data.type == "phone") {
      cls += " ft-btn-phone ";
      return (<a href="tel:400-114-1010" target="_blank" key={index} className={cls}>{tag}{text}</a>);
    }
  }

  getLinkMap (){
    let R = [];

    for(let i=0, d=this.props.link, l=d.length; i<l; i++) {
      let a = {};
      a.type = d[i];
      R.push(a);
    }

    return R;
  }

  getLink(item, index){
    return this.getOnLink(item, index);
  }

  getHTML(){
    return this.props.data.map((item, index) => (
      this.getLink(item, index)
    ));
  }

  render() {
    return (
      <div>
        <div className={this.cls}>
          {this.getHTML()}
        </div>
      </div>
    )
  }

}

export default Wechat;
