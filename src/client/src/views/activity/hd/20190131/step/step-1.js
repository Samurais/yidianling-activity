
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import engine from '../../../../../lib/canvas/engine';


class Page extends Component {

  constructor(props) {

    super(props);

  }

  componentDidMount() {

    let imgpath = "/src/images/activity/hd/20190131/";

    let manifest = [
      {
        "id": "step-2",
        "src": `${imgpath}step-2.png`,
      },
      {
        "id": "pic-cry",
        "src": `${imgpath}cry.png`,
      },
      {
        "id": "pic-fight",
        "src": `${imgpath}fight.png`,
      },
    ];

    // 当前状态
    let handleProgress = function(progress) {
      $(".loading-progress-bar span i").attr("style", `left:${-100+Math.floor(progress*100)}%`);
      $(".loading-progress-per").html(`${Math.floor(progress*100)}%`);
    };

    // 加载完成
    let handleComplete = function() {

    };

    // 单个加载完毕
    let handleFileLoad = function(res) {
      $(`.${res.item.id}`).html(`<img src="${res.item.src}" />`);
    };

    $(function(){
      engine.LoadQueue({
        manifest,
        handleProgress,
        handleComplete,
        handleFileLoad,
      });
    });
  }

  render() {

    return (
      <div className="step step-1">

        <div className="loading-balloon"></div>

        <div className="loading-progress">
          <span className="loading-progress-bar">
            <span><i></i></span>
          </span>
          <span className="loading-progress-per">0%</span>
          <div className="loading-text">小雨正在准备故事...</div>
        </div>
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
