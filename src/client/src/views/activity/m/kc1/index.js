import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Rule from '../../../../component/rules';


// import Native,{webviewSystem} from '../../../lib/native';


class kc1 extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      mainNav: ['报考条件', '学费', '授课方式', '政策介绍'],
      mainNavModal: 'none',
      mainNavModalData: ['报考条件', '报考费用', '报考时间', '授课方式', '政策改革', '报考流程', '课程介绍', '课程时长', '平台资历', '0基础学', '证书含金量', '就业前景', '培训团队', '考试不过', '其他问题'],
      applyForData: [
        {img: '1', title: '报考条件', content1: '报考有学历要求吗？', content2: '报考需要什么专业？'},
        {img: '2', title: '报考费用', content1: '不同级别费用？', content2: '0基础报考多少钱？'},
        {img: '3', title: '报考时间', content1: '截止报名日期？', content2: '下半年几号截止？'},
        {img: '4', title: '授课方式', content1: '授课是网络授课吗？', content2: '如何提供实践？'},
        {img: '5', title: '政策改革', content1: '取消心理资格证？', content2: 'ACI有什么优势？'},
        {img: '6', title: '报考流程', content1: '网上报名的流程是？', content2: '非相关专业怎么报？'},
        {img: '7', title: '课程介绍', content1: '课程有什么？', content2: '课程难学吗？'},
        {img: '8', title: '课程时长', content1: '课程要学习几个月？', content2: ''},
        {img: '9', title: '平台资历', content1: '壹点灵平台是？', content2: ''},
        {img: '10', title: '0基础学', content1: '我完全没基础可学？', content2: '0基础要怎么报考？'},
        {img: '11', title: '证书含金量', content1: '证书国家认可吗？', content2: '证书国际认可吗？'},
        {img: '12', title: '就业前景', content1: '就业前景怎么样？', content2: '就业薪资怎么样？'},
        {img: '13', title: '培训团队', content1: '培训的老师是？', content2: ''},
        {img: '14', title: '考试不过', content1: '考试考不过怎么办？', content2: ''},
        {img: '15', title: '其他咨询', content1: '我还有别的问题？', content2: ''}
      ],
      courcelist: [
        {title: '公共课', imgUrl: '/src/images/activity/m/kc1/course01.png'},
        {title: '基础课', imgUrl: '/src/images/activity/m/kc1/course02.png'},
        {title: '必修课', imgUrl: '/src/images/activity/m/kc1/course03.png'},
        {title: '拓展课', imgUrl: '/src/images/activity/m/kc1/course04.png'},
        {title: '咨询实践', imgUrl: '/src/images/activity/m/kc1/course05.png'},
        {title: '结业考核', imgUrl: '/src/images/activity/m/kc1/course06.png'}
      ]
    }
  }

  componentWillUnmount() {

  }

  componentDidMount() {
    $(function () {
      Rule.init();
    })

  }

  componentDidUpdate() {

  }

  submit(e) {


  }
  baiduClick(){

  }

  showNav(mainNavModal) {
    if (this.state.mainNavModal ==='none') {
      this.setState({
        mainNavModal: 'block'
      })
    } else {
      this.setState({
        mainNavModal: 'none'
      })
    }

    return false;
  }

  render() {
    const t = this;
    const {mainNavModal, mainNav, applyForData, courcelist} = t.state;
    return (
      <div className="kc1">
        <nav className="mainnav">
          {mainNav.map((value) => (<a key={value} className='js_kf mainnav-link' href='#'>{value}</a>))}
          <i className="aside-icon" onClick={t.showNav.bind(t)}/>
          <aside onClick={t.showNav.bind(t)} style={{'display': mainNavModal}}>
            <div className="mainnav-aside">
              <div className='mainnav-aside-title'>选择咨询</div>
              <div className='mainnav-aside-content'>
                {this.state.mainNavModalData.map((value) => (
                  <a key={value} className='js_kf mainnav-aside-link' href='#'>{value}</a>))}
              </div>
            </div>
          </aside>

        </nav>
        <a className="js_kf banner_img" href="#" onClick={this.baiduClick}>
          <span className="banner-txt">

          </span>

        </a>
        <section className="apply-for-content">
          <div className="apply-for-content-title">报考与培训「全攻略」</div>
          <ul className="apply-for-content-list">
            {applyForData.map((value, index, array) => (<li key={index}>
              <span className={`apply-for-icon ico-${value.img}`}></span>
              <span className="title">{value.title}</span>
              <span className="txt">{value.content1}</span>
              <span className="txt">{value.content2}</span>

              <a href="#" className="js_kf btn">点击咨询</a>
            </li>))}
          </ul>
        </section>
        <section className="info-box">
          <div className="info-box-title">
            2018最新政策动态
          </div>
          <div className="info-box-content">
            国家心理咨询师取消<br/>
            2018年政策改革信息<br/>
            2018年心理咨询师报考条件
          </div>
          <a href="#" className="js_kf btn">立即咨询</a>

        </section>
        <section className="info-box">
          <div className="info-box-title">
            四大学习阶段
          </div>
          <div className="info-box-content">
            <div className="learn-image"/>
          </div>
          <a href="#" className="js_kf btn">立即咨询</a>
        </section>
        <section className="cource-list">
          <div className="cource-list-title">
            课程列表
          </div>
          <div className="cource-list-content">
            <ul>
              {courcelist.map((value, index, array) => (
                <li key={index}>
                  <a className="js_kf" href="#">
                    <span className="title"><strong>{index + 1}</strong>{value.title}</span>
                    <img src={value.imgUrl}/>
                  </a>
                </li>
              ))}
            </ul>
            <span className="cource-list-bigimg"/>
            <div className="cource-list-maintxt">线上听课，随时随地</div>
          </div>
          <div className="buttonBox">
            <a href="javascript:" className="js_kf btn">立即咨询</a>
          </div>
        </section>
        <section className="news-info">
          <div className="news-info-title">
            平台权威
          </div>
          <div className="news-info-content">
            <div className="server_pic"/>
            <div className="CCTV_pic"/>
            <div className="reward"/>
            <div className="shizhanbiao"/>
            <a href="javascript:" className="js_kf btn">立即咨询</a>
          </div>
        </section>
        <section className="news-info">
          <div className="news-info-title">
            心理咨询师就业前景
          </div>
          <div className="news-info-content">
            <div className="Contrast_img"/>
            <div className="teacher_pic"/>
            <div className="teacher_txt">
              这就是为什么<br/>
              心理咨询师薪酬这么高的原因
            </div>
            <a href="javascript:" className="js_kf btn">立即咨询</a>
          </div>
        </section>
        <section className="news-info">
          <div className="news-info-title">
            0基础
          </div>
          <div className="news-info-content">
            <div className="promotion"/>
          </div>
        </section>
        <a href="javascript:" className="float_button js_kf">点击咨询所有问题</a>
      </div>
    )
  }
}

export default kc1;
