import React, { Component } from 'react';
import PropTypes from "prop-types"
class Mod extends Component {
  constructor(props) {

    super(props)

    
  }
  componentWillUnmount() {

  }

  componentDidMount(){
    

  }
  componentDidUpdate(){


  }


  render() {
    let target = this.props.target;
    return (
        <div>
          <div className="new-bottom">
            <a href="javascript:" className="left_button js_kf_phone" data-target={`${target}_phone`}>
              <div className="tel-box">
                <img src="/src/images/activity/m/shanghai/tel_icon.png"></img>
                <span>电话咨询</span>
              </div>
            </a>
            <i className="vertical-line"></i>
            <a className="right_button js_kf" data-target={`${target}_chat`} href="javascript:">
              <div className="tel-box">
                <img src="/src/images/activity/m/shanghai/online_icon.png"></img>
                <span>在线咨询</span>
              </div>
            </a>
          </div>
        </div>
    )
  }
}
Mod.propsTypes={
  target:PropTypes.string
}
export default Mod;