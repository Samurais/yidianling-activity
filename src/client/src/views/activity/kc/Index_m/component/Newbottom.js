import React, { Component } from 'react';

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
    return (
        <div>
          <div className="new-bottom">
            <a href="javascript:" className="left_button js_kf" data-target="/kc/index_baoming">
              <div className="tel-box">
                <img src="/src/images/activity/kc/index/bottom_icon1.png"></img>
              </div>
            </a>
            <i className="vertical-line"></i>
            <a href="javascript:" className="right_button js_kf" data-target="/kc/index_zixun">
              <div className="tel-box">
                <img src="/src/images/activity/kc/index/bottom_icon2.png"></img>
              </div>
            </a>
          </div>
        </div>
    )
  }
}

export default Mod;
