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
            <a className="js_kf" href="javascript:;" data-target="/m/hangzhou_bottombutton1">
              <img src="/src/images/activity/m/hangzhou/b_1.png"/>
            </a>
            <a className="js_kf" href="javascript:;" data-target="/m/hangzhou_bottombutton2">
              <img src="/src/images/activity/m/hangzhou/b_2.png"/>
            </a>
            <a href="javascript:" className="left_button js_kf_phone" data-target="/m/hangzhou_phone">
              <img src="/src/images/activity/m/hangzhou/b_3.png"/>
            </a>
          </div>
        </div>
    )
  }
}

export default Mod;