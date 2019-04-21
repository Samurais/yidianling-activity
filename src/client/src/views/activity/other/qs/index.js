import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import API from '../../servers/test';
import { Toast, InputItem } from 'antd-mobile';

import {storage} from '../../../../lib/compatible';

class Demo extends Component {

  constructor(props) {

    super(props)

    this.img = require('../../../../images/qs/ask@3X.png');

  }

  componentDidMount(){



  }
  submit(e){


  }

  render() {
    return (
      <div >
          <div className="actvity_qs_main">
              <div className="actvity_qs_header"></div>
              <div className="actvity_qs_banner"></div>
              <div className="actvity_qs_wt">

              </div>
            <div className="actvity_qs_we"></div>
            <div className="actvity_qs_wo"></div>
            <div className="actvity_qs_wenda">
              <div className="actvity_qs_img"></div>
                <div className="actvity_qs_item">
                    <div className="actvity_qs_rad">
                      <span>问</span>
                    </div>
                    <p className="actvity_qs_p">点击倾诉后没有反应怎么办？</p>
                  <div className="actvity_qs_item_list">
                    <img src={this.img} alt=""/>
                    <p>出现这个问题一般是由于其中一方电话未拨通导致，请耐心等待或再次点击连接，并确保手机电量、信号充足，如长时间未连接成功可更换一位聆听者试试。</p>
                  </div>
                </div>
              <div className="actvity_qs_item ">
                <div className="actvity_qs_rad  actvity_d">
                  <span>问</span>
                </div>
                <p className="actvity_qs_p">中途电话可以中断吗？</p>
                <div className="actvity_qs_item_list actvity_qs_item2">
                  <img src={this.img} alt=""/>
                  <p>如由于系统问题意外挂断且未满25分钟，服务依然有效，请联系客服处理，如果是通话双方主动挂断则视为主动结束倾诉服务。</p>
                </div>
              </div>
              <div className="actvity_qs_item " >
                <div className="actvity_qs_rad  actvity_d">
                  <span>问</span>
                </div>
                <p className="actvity_qs_p">倾诉完可以点评吗？</p>
                <div className="actvity_qs_item_list actvity_qs_item3">
                  <img src={this.img} alt=""/>
                  <p>通过手机APP倾诉记录，对倾诉进行评价，评价后还能再次获赠最<span className="actvity_qs_item_span2">30元</span>的红包呢。</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Demo;
