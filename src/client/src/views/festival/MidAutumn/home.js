import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link} from "react-router-dom";
import { connect } from 'react-redux';
import API from '../servers/MidAutumn';
import { Toast, InputItem } from 'antd-mobile';

import {storage} from '../../../lib/compatible';

import Wechat from './wechat';

class Demo extends Component {

  constructor(props) {

    super(props)
  }

  componentDidMount(){

    this.refs.link.addEventListener("click", function(){
      if($G.browser == "iOS" || $G.browser == "Android") {
        $G.native.userTolistenlistlink();
      } else {
        window.location.href="https://m.yidianling.com/listen";
      }
    });
  }

	render() {
		return (
			<div>
        <Wechat></Wechat>
        <div className="page-festival-MidAutumn">
          <div className="content">
            <div className="item">
              <div className="title"><i className="t1"></i></div>
              <Link to="/festival/MidAutumn/login" className="link b1"></Link>
            </div>

            <div className="line"></div>

            <div className="item">
              <div className="title"><i className="t2"></i></div>
              <p>活动期间在壹点灵进行倾诉，订单号最后两位数为"15"<br />即享免费倾诉一次；</p>
              <a href="javascript:" ref="link" className="b2"></a>
            </div>
          </div>

          <div className="explain">

            <div className="title"><span>活动说明</span></div>
            <p>
              1.活动时间：即日——9月25日0点<br />
              2.活动期间可以4折的活动价格享受一次原价50元的倾诉服务，以30元红包抵扣的形式进行优惠，每位用户仅限领取一次。<br />
              3.活动期间倾诉成功且订单尾号为15的用户我们额外赠送您一次倾诉，订单号可在我的倾诉记录中查询，免单券在活动结束后统一发放至您的红包账户。<br />
              4.倾诉免单券和倾诉红包具有时效性，请在有效期内使用，过期不补；优惠券不可叠加使用。<br />
              5.活动最终解释权归壹点灵所有。
            </p>
          </div>
        </div>
      </div>
		)
  }
}

export default Demo;
