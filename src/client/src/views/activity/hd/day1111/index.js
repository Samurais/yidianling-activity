import React, {Component} from 'react';
import Wechat from "../../../../component/wechat";
import API from "./api";
import Swiper from 'swiper/dist/js/swiper.js';
import jump from "../../../../lib/jumpAPP";
import Util from '../../../../lib/util.js';

class Page extends Component {

  constructor(props) {

    super(props);

    this.state = {
      listData: []
    };

    this.buyList = [{
      "face": "f-1",
      "name": "漂亮小姐姐",
      "say": "确认过衣柜，去年的衣服配不上今年的我",
    },{
      "face": "f-2",
      "name": "猛子的老妈叫虎子",
      "say": "购物车里从网红同款毛边修身短款针织衫，变成婴儿透气纸尿裤，时间都去哪了？",
    },{
      "face": "f-3",
      "name": "日渐消瘦",
      "say": "十一七天假，双十一不应该放十四天假吗？",
    },{
      "face": "f-4",
      "name": "花花公主",
      "say": "一年一度的双十一商家套路大会，别人清空购物车靠买，我清空购物车靠删！",
    },{
      "face": "f-5",
      "name": "一个单身汪",
      "say": "麻麻跟我讲一个人也不要亏待了自己，所以要是你们都不跟我表白我就送自己巧克力了！",
    },{
      "face": "f-6",
      "name": "腿长一米九",
      "say": "成为单身贵族之后烟也戒了，改吃素了，会买猫粮了，供了新主子，没辙啊",
    },{
      "face": "f-7",
      "name": "神奇女侠",
      "say": "凑单拼数学，下单拼手速。每年双十一都觉得自己是个神奇女战士，没有一次抢不到",
    },{
      "face": "f-8",
      "name": "赖床的思考者",
      "say": "为了点赞集能量成功的被好友们屏蔽了，说是双十一之后解除屏蔽，我？！",
    },{
      "face": "f-9",
      "name": "本女王十六只手",
      "say": "有风喝,有土吃,放手买买买,生活凑合过!",
    },{
      "face": "f-10",
      "name": "要成为王的男人",
      "say": "擦亮眼睛,本侦探刚揭穿一家鞋店套路,已被卖家移出群聊!",
    },{
      "face": "f-11",
      "name": "芭比Q",
      "say": "刚收到货就跟我说双11降价,请问我的钱是大风刮来的吗?",
    },{
      "face": "f-12",
      "name": "老年鲤鱼王",
      "say": "双11给自己送了斤枸杞,女友给我补了个保温杯,是在暗示什么?",
    },{
      "face": "f-13",
      "name": "看事不嫌热闹大",
      "say": "又到了围观温柔女神们手撕包裹的季节!",
    }]
  }

  componentDidMount() {

    let jumpApp = jump.init();

    // 判断是否为APP打开
    let isFromApp = Util.getQueryString("isFromApp");

    // 判断是否登录
    let isLogin = !!Util.getQueryString("uid");

    // 如果是app进入
    if(!!isFromApp) {

      let params = {};
      let url = 'ydl_app';
      let action_name = "login";

      // 如果是用户版
      if(isFromApp == 1) {

        // 点击优惠券逻辑
        $(".js-card").bind("click", function(){

          action_name = "login";
          if(isLogin){
            action_name = $(this).data("type");
          }
          url = 'ydl_app';
          params = {};
          jumpApp.setParams(action_name, params, url);
          return false;
        });

        // 点击测试
        $(".js-ceshi").bind("click", function(){
          action_name = "test_detail";
          url = 'ydl_app';
          params = {test_items_id:1016};
          jumpApp.setParams(action_name, params, url);
          return false;
        });

        // 点击课程
        $(".js-kec").bind("click", function(){
          action_name = "course_detail";
          params = {course_id: 2134, url: 'https://h2.yidianling.com/course/2134'};
          url = 'http';
          jumpApp.setParams(action_name, params, url);
          return false;
        });

        // 课程列表
        $(".list").on("click", ".js-link", function(){
          let id = $(this).data("id");
          action_name = "course_detail";
          params = {course_id: 2134, url: `https://h2.yidianling.com/course/${id}`};
          url = 'http';
          jumpApp.setParams(action_name, params, url);

          return false;
        });

        // 课程秒杀
        $(".js-more").bind("click", function(){
          action_name = 'course_list';
          params = {};
          url = 'ydl_app';
          jumpApp.setParams(action_name, params, url);
          return false;
        });

        // 去吐槽
        $(".js-say").bind("click", function(){
          action_name = 'topic_detail';
          params = {id:55};
          jumpApp.setParams(action_name, params, url);
          return false;
        });
      }

      // 如果是专家版
      if(isFromApp == 2) {

        // 隐藏优惠券和评论
        $(".coupon, .buybuybuy").hide();

        // 点击课程
        $(".js-kec").bind("click", function(){
          action_name = "course_detail";
          params = {course_id: 2134, url: 'https://h2.yidianling.com/ex-course/2134'};
          //params = {course_id: 2134, url: 'https://testh2.yidianling.com/ex-course/2134'};
          url = 'http';
          jumpApp.setParams(action_name, params, url);
        });

        // 课程列表
        $(".list").on("click", ".js-link", function(){
          let id = $(this).data("id");
          action_name = "course_detail";
          params = {course_id: 2134, url: `https://h2.yidianling.com/ex-course/${id}`};
          //params = {course_id: 2134, url: `https://testh2.yidianling.com/ex-course/${id}`};
          url = 'http';
          jumpApp.setParams(action_name, params, url);

          return false;
        });

        // 课程秒杀
        $(".js-more").bind("click", function(){
          action_name = 'course_list';
          params = {url:'https://h2.yidianling.com/ex-course/home'};
          //params = {url:'https://testh2.yidianling.com/ex-course/home'};
          url = 'http';
          jumpApp.setParams(action_name, params, url);
          return false;
        });
      }

    } else
      // 如果是m站进入
    {

      // 点击优惠券去首页
      $(".js-card").bind("click", function(){
        window.location.href = "https://m.ydl.com/login?source=double-eleven";
      });

      // 点击评测
      $(".js-ceshi").bind("click", function(){
        window.location.href = "https://m.ydl.com/ceshi/special-list?id=14&cps_channel_p=B.1.1.18092504.18092504";
      });

      // 点击课程
      $(".js-kec").bind("click", function(){
        window.location.href = "https://m.ydl.com/course/2134?source=double-eleven";
      });

      // 更多秒杀
      $(".js-more").bind("click", function(){
        window.location.href = "https://static.ydlcdn.com/v4/kc/wap/index.html?id=15&from=singlemessage&isappinstalled=0";
      });

      // 课程列表
      $(".list").on("click", ".js-link", function(){
        let id = $(this).data("id");

        window.location.href = `https://m.ydl.com/course/${id}?source=double-eleven`;
      });

      // 去吐槽
      $(".js-say").bind("click", function(){
        window.location.href = `https://m.ydl.com/topic/55?source=double-eleven`;
      });
    }

    API.courseApiDoubleEleven({}).then(res => {

      this.setState({
        listData: res.data.courseList,
      });

      // 是否显示限时促销信息
      $(".list li").each(function(){
        let promotion = $(this).data("promotion");

        if(promotion == 1) {
          $(this).find(".sp2").attr("style", "display:inline-block;");
        }
      });
    });

    new Swiper('#comment', {
      autoplay: true,
      loop: true,
      spaceBetween: 0,
      slidesPerView: 4,
      direction: 'vertical',
    });
  }

  getBuyListHTML(item, index){
    return (
      <li key={index} className="swiper-slide">
        <dl>
          <dt className={item.face}></dt>
          <dd>
            <div className="name">{item.name}</div>
            <div className="text"><i></i><p>{item.say}</p></div>
          </dd>
        </dl>
      </li>
    )
  }

  getListDataHTML(item, index){
    return (
      <li key={index} data-promotion={item.is_promotion}>
        <dl>
          <dt><img src={item.pic} /></dt>

          <dd>
            <p>{Util.moreString(item.title, 18)}</p>
            <div className="info">
              <span className="sp1"><i>¥</i>{item.apply_fee}</span>
              <span className="sp2"><i>限时促销</i></span>
            </div>
            <a href="javascript:" className="js-link" data-id={item.id}>立即抢购</a>
          </dd>
        </dl>
      </li>
    )
  }

  render() {

    return (
      <div>
        <Wechat />
        <div className="page-hd-day1111">

          <div className="page-hd-day1111-main">
            {/* banner */}
            <div className="banner"></div>

            {/* 优惠券 */}
            <div className="coupon">
              <div className="title t-1"></div>

              {/* 卡片 */}
              <div className="box mt10">
                <div className="box-content">
                  <div className="card">
                    <a href="javascript:" className="card-1 js-card" data-type="course_list"></a>
                    <a href="javascript:" className="card-2 js-card" data-type="listen_list"></a>
                  </div>
                </div>
              </div>

              {/* 测试 */}
              <div className="box">
                <div className="box-content">
                  <div className="ceshi">
                    <p>双十一快乐花钱指南仪，掌握正确剁手姿势</p>
                    <strong>快来测测你属于哪一种剁手党</strong>
                    <div className="control mt10"><a href="javascript:" className="btn btn-s js-ceshi">立即测试</a></div>
                  </div>
                </div>
              </div>
            </div>

            {/* VIP */}
            <div className="vip">
              {/* 标题 */}
              <div className="title t-2 mt20"></div>

              {/* VIP内容 */}
              <div className="vip_content mt10">
                <div className="control"><a href="javascript:" className="btn btn-b2 js-kec">立即加入</a></div>
              </div>
            </div>

            {/* 促销 */}
            <div className="sale">
              {/* 标题 */}
              <div className="title t-3 mt20"></div>

              {/* 列表 */}
              <div className="list">
                <ul>
                  {this.state.listData.map((item, index) => (
                    this.getListDataHTML(item, index)
                  ))}
                </ul>

                <div className="control"><a href="javascript:" className="btn btn-b btn-b3 mt20 js-more">查看更多秒杀</a></div>
              </div>
            </div>

            {/* 任性买买买 */}
            <div className="buybuybuy">
              {/* 标题 */}
              <div className="title t-4 mt40"></div>

              <div className="box mt10">
                <div className="box-content">
                  <div className="items swiper-container swiper-no-swiping" id="comment">
                    <ul className="swiper-wrapper swiper-no-swiping">
                      {this.buyList.map((item, index) => (
                        this.getBuyListHTML(item, index)
                      ))}
                    </ul>
                  </div>

                  <div className="control mt20"><a href="javascript:" className="btn btn-b js-say">想吐槽 点我呀</a></div>
                </div>
              </div>
            </div>

            {/* 说明 */}
            <div className="explain mt10">
              <div className="box">
                <div className="box-content">
                  <div className="textlist">
                    <strong>活动说明</strong>
                    <div className="text">
                      <p><i>1</i> 新用户注册专享208元大礼包。</p>
                      <p><i>2</i> 领取成功后可至会员中心-红包里查询相关信息。</p>
                      <p><i>3</i> VIP会员卡仅限于咨询师成长课程使用。</p>
                      <p><i>4</i> 会员卡有效期自购买之日起365天。</p>
                      <p><i>5</i> 会员卡购买成功请添加详情页微信或扫描二维码进群。</p>
                      <p><i>6</i> 活动时间：即日起至2018/11/16。</p>
                      <p><i>7</i> 本活动最终解释权归壹点灵所有。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Page;
