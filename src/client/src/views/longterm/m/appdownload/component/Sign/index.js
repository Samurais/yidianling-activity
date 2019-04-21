import React, {Component} from 'react';

class Mod extends Component {

  constructor(props) {

    super(props);

    this.signList = [
      {
        "ico": "/src/images/longterm/appdownload/sign-1.png",
        "sign": "恋爱咨询",
        "link": this.props.jump,
      },
      {
        "ico": "/src/images/longterm/appdownload/sign-2.png",
        "sign": "情绪压力",
        "link": this.props.jump,
      },
      {
        "ico": "/src/images/longterm/appdownload/sign-3.png",
        "sign": "婚姻咨询",
        "link": this.props.jump,
      },
      {
        "ico": "/src/images/longterm/appdownload/sign-4.png",
        "sign": "人际社交",
        "link": this.props.jump,
      },
      {
        "ico": "/src/images/longterm/appdownload/sign-5.png",
        "sign": "亲子教育",
        "link": this.props.jump,
      },
      {
        "ico": "/src/images/longterm/appdownload/sign-6.png",
        "sign": "个人成长",
        "link": this.props.jump,
      },
      {
        "ico": "/src/images/longterm/appdownload/sign-7.png",
        "sign": "职场咨询",
        "link": this.props.jump,
      },
      {
        "ico": "/src/images/longterm/appdownload/sign-8.png",
        "sign": "全部类别",
        "link": this.props.jump,
      },
    ];

    this.defImg = "/src/images/global/lazy.png";
  }

  componentDidMount() {}

  getSignList(item, index){
    return (
      <div className="item" key={index}>
        <a href={item.link} data-target={`sign-${index}`}>
          <img data-original={item.ico} src={this.defImg} className="lazy" />
          <span>{item.sign}</span>
        </a>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="mod-sign">
          {this.signList.map((item, index) => (
            this.getSignList(item, index)
          ))}
        </div>
      </div>
    )
  }

}

export default Mod;
