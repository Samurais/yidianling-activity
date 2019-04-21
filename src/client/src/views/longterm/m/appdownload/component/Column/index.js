import React, {Component} from 'react';

class Mod extends Component {

  constructor(props) {
    super(props);

    this.columnList = [
      {
        "ico": "/src/images/longterm/appdownload/column-1.png",
        "title": "预约专家",
        "des": "智能匹配",
        "hot": false,
        "link": this.props.jump,
      },
      {
        "ico": "/src/images/longterm/appdownload/column-2.png",
        "title": "即时倾诉",
        "des": "首单免费",
        "hot": true,
        "link": this.props.jump,
      },
      {
        "ico": "/src/images/longterm/appdownload/column-3.png",
        "title": "心理课堂",
        "des": "送158元礼包",
        "hot": false,
        "link": this.props.jump,
      },
      {
        "ico": "/src/images/longterm/appdownload/column-4.png",
        "title": "心理测试",
        "des": "专业权威",
        "hot": false,
        "link": this.props.jump,
      },
    ];

    this.defImg = "/src/images/global/lazy.png";
  }

  componentDidMount() {}

  getColumnList(item, index) {
    return (
      <div className="item" key={index}>
        <a href={item.link} data-target={`column-${index}`}>
          <div className="info">
            <strong>{item.title}</strong>
            <span>{item.des}</span>
            {
              item.hot ? <i></i> : ""
            }
          </div>
          <img data-original={item.ico} src={this.defImg} className="lazy" />
        </a>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="mod-column">
          {this.columnList.map((item, index) => (
            this.getColumnList(item, index)
          ))}
        </div>
      </div>
    )
  }

}

export default Mod;
