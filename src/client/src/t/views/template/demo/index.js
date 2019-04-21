import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Mod1 from './a1';
import Mod2 from './a2';

class Page extends Component {

  constructor(props) {

    super(props);

    // 此为服务端返回数据格式
    this.data = {

      // 皮肤
      skin: "",

      moduleConfig: [
        {
          "data": "Mod1", // 所对应的数据
          "position": "Mod2", // 当前位置所展示的view
          "type": "page-header", // 当前模块所匹配的类型
        },
        {
          "data": "Mod2",
          "position": "Mod1",
          "type": "page-footer",
        }
      ],

      moduleData: {
        "Mod1": {
          text: "这个是模块1的数据",
        },
        "Mod2": {
          text: "这个是模块2的数据",
        },
      }
    };

    // 配置模版模块
    this.template = {
      // 此模块是 顶部 import 引入的 Mod1
      "Mod1": (data) => {
        return <Mod1 dataInfo={data} />
      },
      // 此模块是 顶部 import 引入的 Mod2
      "Mod2": (data) => {
        return <Mod2 dataInfo={data} />
      },
    }
  }

  componentDidMount(){}

  // 获取布局列表
  getLayoutHTML(item, index) {

    // 此乃服务端返回的匹配当前模块所对应的”数据“
    let data = this.data.moduleData[item.data];

    // 此乃服务端返回的配置当前“位置”所显示的模块
    let template = this.template[item.position];

    // 此乃最终渲染的view
    let html = "";

    if(!!item.type) {

      if(item.type == "page-header") {
        html = (<div className="header" key={index}>{template(data)}</div>);
      }

      if(item.type == "page-footer") {
        html = (<div className="footer" key={index}>{template(data)}</div>);
      }

    } else {

      html = template(data);
    }

    return html;
  }

  // 获取模块列表
  getModuleHTML(){
    return this.data.moduleConfig.map((item, index) => (
      this.getLayoutHTML(item, index)
    ))
  }

  render() {

    return (
      <div className={`page-m-template-1 ${this.data.skin}`}>
        {this.getModuleHTML()}
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

Page.propTypes = {
  data: PropTypes.string
}

export default Page;
