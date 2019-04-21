import React, {Component} from 'react';
import Title from '../Title';

class Mod extends Component {

  constructor(props) {
    super(props);

    this.defImg = "/src/images/global/lazy.png";

    this.list = [
      {
        "ico": "/src/images/longterm/appdownload/fuwu-1.png",
        "title": "电话倾诉",
        "des": "随时连接，无需预约，情感、情绪、职业、人际关系等问题，一个电话就能搞定。",
        "new": true,
        "sign": "/src/images/longterm/appdownload/ico-3.png",
      },
      {
        "ico": "/src/images/longterm/appdownload/fuwu-2.png",
        "title": "专家私聊",
        "des": "在线与专家语音文字沟通，实时快速解忧问诊。",
        "new": false,
      },
      {
        "ico": "/src/images/longterm/appdownload/fuwu-2.png",
        "title": "预约咨询",
        "des": "预约专家电话、当面或在线咨询，及时解决问题。",
        "new": false,
      },
    ];
  }

  componentDidMount() {}

  getList(item, index){
    return (
      <li>
        <dl>
          <dt><img data-original={item.ico} src={this.defImg} className="lazy" /></dt>
          <dd>
            <strong>{item.title}</strong>
            <p>{item.des}</p>
            {item.new ? <i><img data-original={item.sign} src={this.defImg} className="lazy" /></i> : ""}
          </dd>
        </dl>
      </li>
    )
  }

  render() {
    return (
      <div>
        <div className="mod-fuwu">
          <Title title="/src/images/longterm/appdownload/title-fwys.png" link={this.props.jump} />

          <div className="content">
            <ul>
              {this.list.map((item, index) => (
                this.getList(item, index)
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

}

export default Mod;
