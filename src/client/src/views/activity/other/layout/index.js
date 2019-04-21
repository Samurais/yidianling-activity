import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {FooterOnline, Comment, TopLogo, TopBanner, Swiper, Sign} from '../../../../component/layout';

class Page extends Component {

  constructor(props) {

    super(props);

    this.commentList = [
      {
        "face": "https://img.ydlcdn.com/file/2018/03/21/e318f0d28c487d3d31717343aeb65828..jpg!s120x120",
        "name": "w** 评价心理专家黄益寒",
        "time": "2018-03-24",
        "say": "很专业，分析得很好，有些是自己都没想到过或是不以为然的事情原来也是有因果关系的，心情豁然开朗。",
      },
    ];

    this.evaluate = [
      {
        "name": "B**",
        "time": "2017-11-20",
        "say": "非常好的咨询师，看待问题非常的敏锐，及时能发现问题的关键所在，我的问题也迎刃而解。一次非常惊喜的体验，非常感谢！",
      },
    ];

    this.sign = [
      {
        "ico": "https://static.ydlcdn.com/activity/images/activity002/ico_kid_rebellion.png",
        "title": "焦虑抑郁",
        "des": "焦虑症、抑郁症<br/>忧郁症、产后抑郁",
        "num": "212839",
      },
      {
        "ico": "https://static.ydlcdn.com/activity/images/activity002/ico_pressure_insomnia.png",
        "title": "强迫症",
        "des": "行为强迫(反复关门<br />窗)、意向强迫、",
        "num": "259512",
      },
    ];

    this.sign2 = [
      {
        "ico": "https://static.ydlcdn.com/activity/images/update171212/icon_1-1.png",
        "title": "焦虑抑郁",
        "des": "焦虑症、抑郁症<br/>忧郁症、产后抑郁",
      },
      {
        "ico": "https://static.ydlcdn.com/activity/images/update171212/icon_1-2.png",
        "title": "强迫症",
        "des": "行为强迫(反复关门<br />窗)、意向强迫、",
      },
    ];

    this.professorPosterList = [
      {
        "face": "https://img.ydlcdn.com/file/2015/09/196fa0c9b120b8f2.jpg!s200x200",
        "name": "史占彪",
        "des": "中国科学研究院教授、心理研究所主任<br>中国心理卫生协会副秘书长<br>国际EAP协会中国分会秘书长",
      },
      {
        "face": "https://img.ydlcdn.com/file/2016/09/vay7h7hx3lzwf6u7.jpg!s200x200",
        "name": "赵颖",
        "des": "约克大学 Ph. D. -心理学 博士<br>国家二级心理咨询师<br>美国 A.C.H.E 临床催眠治疗师",
      },
    ];

    this.wmsszyqqPosterList = [
      {"cover": "https://static.ydlcdn.com/activity/images/update171212/machine01.png"},
      {"cover": "https://static.ydlcdn.com/activity/images/update171212/machine02.png"},
    ];

    this.expertPosterList = [
      {
        "face": "https://img.ydlcdn.com/file/2015/09/43a596a8a5cf12df.jpg!s200x200",
        "name": "朱浩亮",
        "des": "中科院心理研究所硕士",
        "contact": true,
      },
      {
        "face": "https://img.ydlcdn.com/file/2016/09/p2qc5uxvnnftb9xz.png!s200x200",
        "name": "袁红红",
        "des": "心理健康专家",
        "contact": true,
      },
      {
        "face": "https://img.ydlcdn.com/file/2016/10/31/bpccp9u2d73lh6sv.jpg!s200x200",
        "name": "袁丽娜",
        "des": "心理健康专家",
        "contact": true,
      },
      {
        "face": "https://img.ydlcdn.com/file/2016/09/vay7h7hx3lzwf6u7.jpg!s200x200",
        "name": "赵颖",
        "des": "心理健康专家",
        "contact": true,
      },
      {
        "face": "https://img.ydlcdn.com/file/2015/11/hk0kibxj4uycizdb.jpg!s200x200",
        "name": "许涛",
        "des": "临床心理科主任",
        "contact": true,
      },
    ];
  }

  componentDidMount(){
    $(function(){
      $("img.lazy").attr("src", "/src/images/lazy-1.png").lazyload();
    });
  }

  render() {
    return (
      <div>
        <div className="page-other-layout">

          {/* 按钮 */}
          <h1>按钮小号</h1>
          <a href="javascript:" className="g-btn s blue">蓝色</a>
          <a href="javascript:" className="g-btn s blue fill">蓝色填充</a>

          <a href="javascript:" className="g-btn s green">绿色</a>
          <a href="javascript:" className="g-btn s green fill">绿色填充</a>

          <a href="javascript:" className="g-btn s orange">橙色</a>
          <a href="javascript:" className="g-btn s orange fill">橙色填充</a>

          <h1>按钮中号</h1>
          <a href="javascript:" className="g-btn m blue">蓝色</a>
          <a href="javascript:" className="g-btn m blue fill">蓝色填充</a>

          <a href="javascript:" className="g-btn m green">绿色</a>
          <a href="javascript:" className="g-btn m green fill">绿色填充</a>

          <a href="javascript:" className="g-btn m orange">橙色</a>
          <a href="javascript:" className="g-btn m orange fill">橙色填充</a>

          <h1>按钮大号</h1>
          <a href="javascript:" className="g-btn l blue">蓝色</a>
          <a href="javascript:" className="g-btn l blue fill">蓝色填充</a>

          <a href="javascript:" className="g-btn l green">绿色</a>
          <a href="javascript:" className="g-btn l green fill">绿色填充</a>

          <a href="javascript:" className="g-btn l orange">橙色</a>
          <a href="javascript:" className="g-btn l orange fill">橙色填充</a>

          {/* 评论 */}
          <Comment list={this.commentList} type="2" />
          <br/><br/>

          {/* 评论 */}
          <Comment list={this.evaluate} type="1" />
          <br/><br/>

          {/* 标签 */}
          <Sign list={this.sign} type="1" />

          {/* 标签2 */}
          <Sign list={this.sign2} type="2" />

          {/* 轮播1 */}
          <Swiper list={this.professorPosterList} name="professorPosterSwiper" type="2" />

          {/* 轮播2 */}
          <Swiper list={this.wmsszyqqPosterList} name="wmsszyqqPosterSwiper" type="1" />

          {/* 轮播3 */}
          <Swiper list={this.expertPosterList} name="expertPosterSwiper" type="3" status="2" />

          {/* 底部悬浮 */}
          <FooterOnline
            data={
              [
                {
                  "type": 'online',
                  'fill': true,
                  'color': 'orange',
                  'text': '点击咨询',
                  'tag': false
                },
                {
                  "type": 'online',
                  'fill': true,
                  'color': 'blue',
                  'tag': false
                },
              ]
            }
            bg="white"
          />
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
