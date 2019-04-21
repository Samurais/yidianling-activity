import React, { Component } from "react";
import Rule from '../../../../component/rules';
import Swiper from 'swiper/dist/js/swiper.js';
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.questList = [
      {"url": "https://static.ydlcdn.com/activity/images/activity002/ico_kid_rebellion.png","txt01": "职业压力","txt02": "升职就业压力、焦虑、抑郁","txt03": "72853人已咨询"},
      {"url": "https://static.ydlcdn.com/activity/images/activity002/ico_develop_plan.png","txt01": "职业规划","txt02": "职业规划、自我定位、频繁跳槽","txt03": "23991人已咨询"},
      {"url": "https://static.ydlcdn.com/activity/images/activity002/ico_develop_relationship.png","txt01": "人际关系","txt02": "上下级关系、同事关系、社交障碍","txt03": "19679人已咨询"},
      {"url": "https://static.ydlcdn.com/activity/images/activity002/ico_develop_develope.png","txt01": "个人成长","txt02": "情绪控制、自我认知、性格缺陷、情商","txt03": "7007人已咨询"},
    ]
    this.swiperList = [
      {"name": "朱浩亮","url": "https://img.ydlcdn.com/file/2015/09/43a596a8a5cf12df.jpg!s200x200","detail": "中科院心理研究所硕士"},
      {"name": "马建青","url": "https://img.ydlcdn.com/file/2015/09/d09ec87c78cec905.jpg!s200x200" ,"detail": "浙江大学教授"},
      {"name": "张建新","url": "https://img.ydlcdn.com/file/2015/10/qfpioa5fy8do3f5l.jpg!s200x200","detail": "中科院心理研究所副所长"},
      {"name": "赵颖","url": "https://img.ydlcdn.com/file/2016/09/vay7h7hx3lzwf6u7.jpg!s200x200","detail": "约克大学心理学博士"},
      {"name": "王岫华","url": "https://img.ydlcdn.com/file/2016/08/9n8wbjmvp6zr4r7y.jpg!s200x200","detail": "浙大学心理学硕士"},
    ]
    this.commitList = [
      {"href": "https://m.yidianling.com/experts/2045","txt01": "w** 评价心理专家黄益寒","txt02": "2018-03-24","txt03": "很专业，分析得很好，有些是自己都没想到过或是不以为然的事情原来也是有因果关系的，心情豁然开朗。","url": "https://img.ydlcdn.com/file/2018/03/21/e318f0d28c487d3d31717343aeb65828..jpg!s120x120"},
      {"href": "https://m.yidianling.com/experts/1922","txt01": "刘** 评价心理专家邢宇星","txt02": "2018-03-24","txt03": "喜欢老师的直接，在学习的过程中老师很有耐心！","url": "https://img.ydlcdn.com/file/2018/03/20/12ffffd44c0135d744b10d297b005dc1..jpg!s120x120"},
      {"href": "https://m.yidianling.com/experts/4765","txt01": "秋** 评价心理专家于新萍","txt02": "2018-03-24","txt03": "感恩老师，这是第二次跟老师咨询了，谢谢老师给我的认可，给我力量","url": "https://img.ydlcdn.com/file/2018/03/19/96102f311506c6d3ac410bd7f7c92b3b..jpg!s120x120"},
      {"href": "https://m.yidianling.com/experts/3624","txt01": "邱** 评价心理专家徐黄英","txt02": "2018-03-23","txt03": "我现在状态慢慢变好，尽管有时候还是会刹那间陷入一些情绪中，但是我能很快觉察到自己的情绪。感恩老师的疏导帮助，谢谢您。","url": "https://img.ydlcdn.com/v2/images/avatar_default.png!s120x120"},
      {"href": "https://m.yidianling.com/experts/4031","txt01": "Z** 评价心理专家廖丽萍","txt02": "2018-02-24","txt03": "无法用言语去表达老师的好 真的是义无反顾的帮助 何时何地 只要需要 老师就出现 得到了极大的安慰和亲切感 也对我的事情出谋划策分析到位效果明显 谢谢老师","url": "https://img.ydlcdn.com/file/2015/12/wi62ikf7pgbo3jwz.png!s120x120"},
      {"href": "https://m.yidianling.com/experts/2842","txt01": "雨** 评价心理专家单红妍","txt02": "2018-02-24","txt03": "单老师，在你这里，我哭过，也笑过，思考过，也成长了，希望在以后的生活中，你还是我内心的明灯","url": "https://img.ydlcdn.com/file/2018/01/07/1d5d70faa653f2a6f6fe4c9c52c1fa5b..jpg!s120x120"},
    ]
  }

  componentDidMount() {
    $(function(){

      Rule.init({
        "appId": "m-activity",
        eventId: "/m/zhichang",
        "eventType": "pv",
        "platform": "wap"
      });

      var mySwiper = new Swiper('.swiper-container', {
        loop:true,
        slidesPerView : 2,
        spaceBetween : 20,
        slidesOffsetBefore : 20,
        slidesOffsetAfter: 20,
        freeMode : true
      });
    })
   }



  render() {
    return (
      <div className="page-m-zhichang">
        {/* header */}
        <div className="zhichang-header">
          <div className="top_banner">
            <a className='kf_xinnuan'>
              <img src="https://static.ydlcdn.com/activity/images/activity002/zc_banner.jpg" alt="" />
            </a>
            <img src="https://static.ydlcdn.com/activity/images/activity002/hyzx_banner2.png" alt="" />
          </div>
        </div>

        {/* 我们帮你解决这些问题 */}
        <div className="text1">
          <p className="tt1">--- 我们帮你解决这些问题 ---</p>
          <div className="contInner01">
            {this.questList.map(item => {
              return(
                <a className='kf_xinnuan'>
                  <dl>
                    <dt><img src={item.url} alt="" /></dt>
                    <dd className="txt01">{item.txt01}</dd>
                    <dd className="txt02">{item.txt02}</dd>
                    <dd className="txt03"><span>{item.txt03}</span></dd>
                  </dl>
                </a>
              )
            })}
          </div>
        </div>
        <a className='kf_xinnuan btn1'>更多话题 马上咨询</a>

        {/* 快速预约 */}
        <div className="cont02">
          <div className="top_banner"><img className="blockImge" src="https://static.ydlcdn.com/activity/images/activity002/workflow_hyzx.png" alt="" />
          </div>
        </div>

        {/* 上千位职场心理专家 */}
        <div className="cont03">
          <p className="tt1">上千位职场心理专家</p>
          <p className="tt2">均具备国家颁发的咨询师资质 真实可查询</p>
          <div className="contInner03">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {this.swiperList.map(item => {
                  return (
                    <div className="swiper-slide">
                      <img className="expertImge" src={item.url} alt="" />
                      <p className="name">{item.name}</p>
                      <p className="poster">{item.detail}</p>
                      <a className='kf_xinnuan tag'>马上咨询</a>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <a className='kf_xinnuan btn1'>帮我推荐专家</a>
        </div>

        {/* 受到用户一致评价 */}
        <div className="cont04">
          <p className="tt1">受到用户一致好评</p>
          <div className="contInner04">
            {this.commitList.map(item => {
              return (
                <a href={item.href}>
                <div className="item">
                  <p className="txt01">{item.txt01}</p>
                  <p className="txt02">{item.txt02}</p>
                  <p className="txt03">{item.txt03}</p>
                  <img className="userImge" src={item.url} />
                </div>
              </a>
              )
            })}
          </div>
        </div>
        {/* 各大媒体争相报道 */}
        <div className="cont05">
          <p className="tt1">各大媒体争相报道</p>
          <p className="tt2">创新模式推动心理健康行业发展</p>
          <div>
            <img className="blockImge" src="https://static.ydlcdn.com/activity/images/activity002/media.jpg" alt="" />
          </div>
        </div>
        {/* 权威机构合作背景 */}
        <div className="cont06">
          <p className="tt1">权威机构合作背景</p>
          <p className="tt2">与地方妇联，高校，咨询结构深入合作</p>
          <div>
            <img className="blockImge" src="https://static.ydlcdn.com/activity/images/activity002/organization.jpg" alt="" />
          </div>
        </div>
        {/* 关于我们 */}
        <div className="cont07">
          <p className="tt1">关于我们</p>
          <div>
            <img className="blockImge" src="https://static.ydlcdn.com/activity/images/activity002/about_us.jpg" alt="" />
          </div>
          <p className="txt01">壹点灵，一点阳光，温暖心灵，携手壹点灵，每天都有好心情。</p>
          <p className="txt01">壹点灵隶属于上海袋虎网络信息技术有限公司，秉承“知心专业，贴心关怀，诚心服务” 理念，打造中国最有价值的心理健康服务互联网平台。</p>
        </div>
        {/* footer */}
        <div className="footer">
          <p className="txt01">客服：<a href="tel:400-114-1010" className="number">400-114-1010</a></p>
          <p className="txt02">（工作时间：早08:30-次日凌晨01:00）</p>
          <p className="txt03">
          <span className="win_copyright"></span><br />
            <span className="win_company"></span>
            <span className="win_copycode"></span>
          </p>
        </div>
          <div className="footer-fix">
            <a className="wechat" href="tel:400-114-1010"><i className="icon_wechat"></i>电话咨询</a>
            <a className="online kf_xinnuan">在线咨询</a>
          </div>
        </div>
        )
      }
    }
export default Page;
