import React, {Component} from 'react';
import { Modal,Toast } from 'antd-mobile';
import Util from '../../../../../../../../lib/util';
import API from "../../../../20190130/api";

class Mod extends Component {

  constructor(props) {
    super(props);

    // this.state={
    //   display_name: 'none',
    //   phone:""
    // };
    // this.formData = {
    //   redeemCode: "",
    //   phone: "",
    //   code: "",
    // };

    this.button="/src/images/qs/20190225/button.png";
  }

  componentDidMount() {
    let _this=this;
  }

  display_name() { //编辑按钮的单击事件，修改状态机display_name的取值
    if (this.state.display_name == 'none') {
      this.setState({
        display_name: 'block',
      })
    }
    else if (this.state.display_name == 'block') {
      this.setState({
        display_name: 'none',
      })

    }
  }

  render() {
    return (
      <div>
        <div className='bottom-none'></div>
        <div className='bottom' onClick={this.display_name.bind(this)}>
          <img data-original={this.button} src={this.defImg} className="lazy"/>
        </div>
      </div>
    )
  }

}

export default Mod;
