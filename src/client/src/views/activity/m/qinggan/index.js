import React, { Component } from 'react';

import { connect } from 'react-redux';
import Rule from '../../../../component/rules';
import API from '../../servers/test';
import { Toast, InputItem } from 'antd-mobile';

import {storage} from '../../../../lib/compatible';
import Swiper from 'swiper/dist/js/swiper.js';
// import Native,{webviewSystem} from '../../../lib/native';
class Page extends Component {

  constructor(props) {

    super(props)

    this.img=require('../../../../images/activity/m/qinggan/toplist01.png');
    this.img2=require('../../../../images/activity/m/qinggan/toplist02.png');
    this.img3=require('../../../../images/activity/m/qinggan/toplist03.png');
    this.question1=require('../../../../images/activity/m/qinggan/question01.png');
    this.question2=require('../../../../images/activity/m/qinggan/question02.png');
    this.question3=require('../../../../images/activity/m/qinggan/question03.png');
    this.question4=require('../../../../images/activity/m/qinggan/question04.png');
    this.question5=require('../../../../images/activity/m/qinggan/question05.png');
    this.question6=require('../../../../images/activity/m/qinggan/question05.png');

    this.help01=require('../../../../images/activity/m/qinggan/help01.png');
    this.help02=require('../../../../images/activity/m/qinggan/help02.png');
    this.help03=require('../../../../images/activity/m/qinggan/help03.png');
    this.help04=require('../../../../images/activity/m/qinggan/help04.png');
    this.help05=require('../../../../images/activity/m/qinggan/help05.png');
    this.help06=require('../../../../images/activity/m/qinggan/help06.png');

    this.why1=require('../../../../images/activity/m/qinggan/why01.png');
    this.why2=require('../../../../images/activity/m/qinggan/why02.png');
    this.why3=require('../../../../images/activity/m/qinggan/why03.png');
    this.why4=require('../../../../images/activity/m/qinggan/why04.png');
    this.why5=require('../../../../images/activity/m/qinggan/why05.png');
    this.bg='/src/images/activity/m/qinggan/compare_desp.png';

    this.case1=require('../../../../images/activity/m/qinggan/case01.png');
    this.case2=require('../../../../images/activity/m/qinggan/case02.png');
    this.case3=require('../../../../images/activity/m/qinggan/case03.png');
    this.case4=require('../../../../images/activity/m/qinggan/case04.png');

    this.pic1='/src/images/activity/m/qinggan/experts_pic01.png';
    this.pic2='/src/images/activity/m/qinggan/experts_pic02.png';
    this.pic3='/src/images/activity/m/qinggan/experts_pic03.png';
    this.pic4='/src/images/activity/m/qinggan/experts_pic04.png';
    this.banner1='/src/images/activity/m/qinggan/1.jpg';
    this.banner2='/src/images/activity/m/qinggan/2.jpg';
    this.banner3='/src/images/activity/m/qinggan/3.jpg';
    this.banner4='/src/images/activity/m/qinggan/4.jpg';
    this.banner5='/src/images/activity/m/qinggan/5.jpg';
  }
  componentWillUnmount() {

  }

  componentDidMount(){
    $(function(){
      Rule.init();
      var mySwiper = new Swiper('.swiper-container', {
        autoplay:{
          delay: 5000,
          disableOnInteraction: false,
        },
        loop: true,
        pagination: {
          el:'.swiper-pagination'
        },
        paginationType: 'bullets',
        slidesPerView: '1',
        autoplayDisableOnInteraction: false,
        lazyLoading: true,
        centeredSlides: true,
      });


    });

  }
  componentDidUpdate(){

  }
  submit(e){


  }

  render() {
    return (
      <div>
        <div className="page-m-qg">
          <a className="kf_xinnuan" href="">
            <div className="qg_header">
              <div className="qg_header_imga"></div>
              <div className="qg_header_a kf_xinnuan" href="">免费咨询</div>
            </div>
          </a>
         <div className="qg_items">
           <div className="qg_items_list frilst">
             <img className="list_img"src={this.img} alt=""/>
             <p>6000多位专家</p>
           </div>
           <div className="qg_items_list">
             <img className="list_img"src={this.img2} alt=""/>
             <p>250+城市覆盖</p></div>
           <div className="qg_items_list">
             <img className="list_img"src={this.img3} alt=""/>
             <p>100%随时退款</p></div>
         </div>

          <div className="qg_box_help1">
              <h3 className="box_h3">你是否遭受以下困扰？</h3>
            <div className="box_items">
              <div className="box_items_list"><img src={this.question1} alt=""/><p>夫妻不和 </p></div>
              <div className="box_items_list"><img src={this.question2} alt=""/><p>长期争吵</p></div>
              <div className="box_items_list"><img src={this.question3} alt=""/><p>矛盾升级</p></div>
              <div className="box_items_list"><img src={this.question4} alt=""/><p>婆媳矛盾</p></div>
              <div className="box_items_list"><img src={this.question5} alt=""/><p>执意离婚</p></div>
              <div className="box_items_list"><img src={this.question6} alt=""/><p>配偶出轨</p></div>
            </div>
            <a className="box_a kf_xinnuan" href="">
              立即免费咨询
            </a>
          </div>
          <div className="qg_box_help2">
            <h3 className="box_h3">我们能帮你解决什么？</h3>
            <div className="box_items">
              <div className="box_items_list list_1"><img src={ this.help01} alt=""/><p>情感疏导</p>
              <p className="box_p1">针对情感问题，专家仔细分析</p>
              </div>
              <div className="box_items_list "><img src={ this.help02} alt=""/><p>化解矛盾</p>
                <p className="box_p1">及时反馈问题，跟进情况逐步化解矛盾</p>
              </div>
              <div className="box_items_list list_1"><img src={ this.help03} alt=""/><p>分手挽回</p>
                <p className="box_p1">为您分析情感危机因素，量身定制挽回方案</p>
              </div>
              <div className="box_items_list"><img src={ this.help04} alt=""/><p>变心挽回</p>
                <p className="box_p1">以结果为导向，打造完美关系，助你关系破冰</p>
              </div>
              <div className="box_items_list list_1"><img src={ this.help05} alt=""/><p>出轨挽回</p>
                <p className="box_p1">分析出轨原因，找出问题让你的婚姻重回蜜月期</p>
              </div>
              <div className="box_items_list"><img src={ this.help06} alt=""/><p>挽回婚姻</p>
                <p className="box_p1">打造完美关系，助你感情升温</p>
              </div>
            </div>
          </div>
          <div className="qg_box_help3">
            <h3 className="box_h3">为什么选择我们</h3>
            <ul className="box_items">
                <li><img src={this.why1} alt=""/><div className="box_div">
                  <p>提供上门服务</p><span>国家认证婚恋咨询师，支持上门服务</span></div></li>
              <li><img src={this.why2} alt=""/><div className="box_div">
                <p>专注家庭心理服务20年</p><span>中科院顶级专家，20年权威专业经验</span></div></li>
              <li><img src={this.why3} alt=""/><div className="box_div">
                <p>国家认证专家</p><span>100%持证上岗，知名机构受训</span></div></li>
              <li><img src={this.why4} alt=""/><div className="box_div">
                <p>售后保障</p><span>若咨询无效，100%退款</span></div></li>
              <li><img src={this.why5} alt=""/><div className="box_div">
                <p>隐私保障</p><span>严格隐私保护，客户隐私0泄露</span></div></li>
            </ul>
          </div>

          <div className="qg_box_help4">
            <h3 className="box_h3">壹点灵与同行的比较</h3>
            <div className="box_divk">
              <img src={this.bg} alt=""/>
            </div>
            <a  className="box_a kf_xinnuan" href="">立即免费咨询</a>
          </div>
          <div className="qg_box_help5">
            <h3 className="box_h3">客户故事</h3>
            <div className="lunbo_bg">
            <div className="poster swiper-container" id="poster">
              <ul className="swiper-wrapper">

                  <li className="swiper-slide" id="swipera" >

                    <div className="slide_li">
                        <p className="case-desc">王先生自述：男，被女友分手了三次，因此让我怀疑，是不是对一个人越好，越是会让感情变得如此轻贱！？今年三月初，因为我的原因，女友不辞而别，当我回到家的时候，看到她的物品被拿走的一干二净，内心简直像被掏空了一样，很难形容那种滋味！当然，我坚信通过自己的努力会把她重新追回来的，是的，那次我确实成功了！不过从那以后，感觉有些东西变了，例如给对方发微信不回复，我就坐立难安；打电话不接，更是如坐针毡！总希望从对方嘴里获取肯定的答案。整个人变的极为敏感，当初那个意气风发的我早已不见踪影，取而代之的是一个小心翼翼的自己！显然，此时的我已经完全吸引不到女友了，甚至时常让她感觉厌烦！直到上个月初，不出意料的被第三次分手！我整日心不在焉，更别说专注的工作，所以决定放空自己，去朋友的老家梅州-客家之乡！每天我就望着对面的山峦，坐在院子里发呆，其实早晚还是会发微信给女友，但得到的都是冷淡的回应！记得那天是中元节，按照当地的习俗是很隆重的节日，外面传来阵阵的鞭炮声，整个村庄都被节日的氛围充斥着，村民忙着招待来访的亲戚。当时的我和外面地喧嚣形成鲜明的对比，一个人躺在房间里，觉得整个世界都与我无关！原来不是女友对我没感情，而是我自己破坏了与其相处之道！怎样做才能二次吸引对方，突然间我就来了兴致、觉得以往自己的挽回都是一种恶性循环！错过了女友给我的每一次机会！那天晚上老师帮我做了一份文案，算是同女友断联前的最后一次微信！而且让我做好对方不回复的准备。说实在，做到真正不联系，心里特别没底，担心对方就此就把我删了，那我可就永无翻身之日了。在此期间，内心一出现落差或疑惑，老师都会耐心的打电话过来和我沟通，通过女友的朋友圈，分析对方的近况！哦，忘了说，朋友圈的个性签名我一直空着，但是老师帮我写了一条签名～让我感到特别惊叹～按照蔚颖飞老师的话来讲——她是要同我们共情的！哈哈！挽回之路我越发充满信心！当断联超过快一周的时候，我有点不安了！可往往事情就是那么巧妙，那天是周一，我和朋友在音乐吧喝东西，手机显示两条新信息，当我一看是女友的微信，以为自己看错了！！她说新搬的地方没有风扇，要过来取走！！无论怎样，对方确实同我主动讲话了不是嘛！那个兴奋劲，马上找老师求助该怎么去回复！不能错过任何抓住她的机会！按照老师说的，我只简单回复了两个字而已！当看到她站在我面前的时候，真是强忍着内心的激动呀！当晚一切听从老师指挥，我真的把她留住了，即使她从始至终都端着！从那晚以后，我又尝试把她约出来了几次，都没有被拒绝过，而且很自然的让我牵着她的手，因为我更换了交流模式，不再像过去总追问她或是急于表达自己！按照老师说的，我要控制聊天的节奏！诙谐，有趣，适当的强势，过往一切不提！女友对我真的重拾兴趣了！上周五的时候，还让我过去接她过来。到现在为止，我的挽回已经完成了80%，剩下的20%，希望她可以把未来真正托付给我！其实在这将近一个月时间里，老师教给我的不仅仅是挽回女友，更多的是让我内心得到真正的成长！直面问题，不再害怕失去！数不尽的感谢. 如果说心情有深渊，当他向我说出新恋情时，我就在深渊的更低一层，我想，我失去他了。那些天常常感到窒息，失眠，没有食欲，肠胃功能紊乱。煎熬，就是把自己的心切成一片又一片，在放到油锅里烹。自己把自己逼到一条绝望之路。觉得瞬间老了，人生已然看到几十年后的模样。 我特别需要倾诉，就想到心理咨询，淘宝上搜索到了壹点灵，客服介绍了咨询师。 于是，从回顾两年的感情开始，梳理我们三重身份关系，朋友，母子，恋人；从他的童年家庭，解析他的心理；说出我家庭的缺失，生活的困扰。 此后，把信任完全交给咨询师，按照咨询师的解决方案，克制自己行为，保持距离，冷落他，难过时打个咨询电话，每一步都在咨询师指导下完成，并找到自信和力量。 再给自己画点淡妆，穿上裙子，看着镜子里的我，有点成熟，有点知性，翻出几首歌曲练习；把注意力一寸一寸从他身上夺回来，转移到家庭，工作。 逆转出现了，他很快意识到了到前期对我关心不足，开始很努力用各种言语和行动弥补。而我，也在逐渐接受他需要年龄相仿新恋情的客观事实。 我和他，和自己，和生活终于和解了。 艰难的十月，这样过去了。此刻，回顾我和他的感情，仍是七百多天的不悔。我的韶华时光，遇到他的青春年少。或许是前世母子情深，或是当年未了的情缘，来到今生相会，且行且珍惜。 十一月，一切没有结束，是全新格局的开始，请咨询师继续给我力量，让我们的感情维系在一个秘密安全的空间，内心保持距离，转移注意，去依赖，去执念，成长，平衡，掌控。</p>
                      <div className="names">
                        <img src={this.case1} alt=""/>
                          <span>来自宁波的王先生</span>
                      </div>
                  </div>
                  </li>
                <li className="swiper-slide">
                  <div className="slide_li">
                    <p className="case-desc">王先生自述：男，被女友分手了三次，因此让我怀疑，是不是对一个人越好，越是会让感情变得如此轻贱！？今年三月初，因为我的原因，女友不辞而别，当我回到家的时候，看到她的物品被拿走的一干二净，内心简直像被掏空了一样，很难形容那种滋味！当然，我坚信通过自己的努力会把她重新追回来的，是的，那次我确实成功了！不过从那以后，感觉有些东西变了，例如给对方发微信不回复，我就坐立难安；打电话不接，更是如坐针毡！总希望从对方嘴里获取肯定的答案。整个人变的极为敏感，当初那个意气风发的我早已不见踪影，取而代之的是一个小心翼翼的自己！显然，此时的我已经完全吸引不到女友了，甚至时常让她感觉厌烦！直到上个月初，不出意料的被第三次分手！我整日心不在焉，更别说专注的工作，所以决定放空自己，去朋友的老家梅州-客家之乡！每天我就望着对面的山峦，坐在院子里发呆，其实早晚还是会发微信给女友，但得到的都是冷淡的回应！记得那天是中元节，按照当地的习俗是很隆重的节日，外面传来阵阵的鞭炮声，整个村庄都被节日的氛围充斥着，村民忙着招待来访的亲戚。当时的我和外面地喧嚣形成鲜明的对比，一个人躺在房间里，觉得整个世界都与我无关！原来不是女友对我没感情，而是我自己破坏了与其相处之道！怎样做才能二次吸引对方，突然间我就来了兴致、觉得以往自己的挽回都是一种恶性循环！错过了女友给我的每一次机会！那天晚上老师帮我做了一份文案，算是同女友断联前的最后一次微信！而且让我做好对方不回复的准备。说实在，做到真正不联系，心里特别没底，担心对方就此就把我删了，那我可就永无翻身之日了。在此期间，内心一出现落差或疑惑，老师都会耐心的打电话过来和我沟通，通过女友的朋友圈，分析对方的近况！哦，忘了说，朋友圈的个性签名我一直空着，但是老师帮我写了一条签名～让我感到特别惊叹～按照蔚颖飞老师的话来讲——她是要同我们共情的！哈哈！挽回之路我越发充满信心！当断联超过快一周的时候，我有点不安了！可往往事情就是那么巧妙，那天是周一，我和朋友在音乐吧喝东西，手机显示两条新信息，当我一看是女友的微信，以为自己看错了！！她说新搬的地方没有风扇，要过来取走！！无论怎样，对方确实同我主动讲话了不是嘛！那个兴奋劲，马上找老师求助该怎么去回复！不能错过任何抓住她的机会！按照老师说的，我只简单回复了两个字而已！当看到她站在我面前的时候，真是强忍着内心的激动呀！当晚一切听从老师指挥，我真的把她留住了，即使她从始至终都端着！从那晚以后，我又尝试把她约出来了几次，都没有被拒绝过，而且很自然的让我牵着她的手，因为我更换了交流模式，不再像过去总追问她或是急于表达自己！按照老师说的，我要控制聊天的节奏！诙谐，有趣，适当的强势，过往一切不提！女友对我真的重拾兴趣了！上周五的时候，还让我过去接她过来。到现在为止，我的挽回已经完成了80%，剩下的20%，希望她可以把未来真正托付给我！其实在这将近一个月时间里，老师教给我的不仅仅是挽回女友，更多的是让我内心得到真正的成长！直面问题，不再害怕失去！数不尽的感谢. 如果说心情有深渊，当他向我说出新恋情时，我就在深渊的更低一层，我想，我失去他了。那些天常常感到窒息，失眠，没有食欲，肠胃功能紊乱。煎熬，就是把自己的心切成一片又一片，在放到油锅里烹。自己把自己逼到一条绝望之路。觉得瞬间老了，人生已然看到几十年后的模样。 我特别需要倾诉，就想到心理咨询，淘宝上搜索到了壹点灵，客服介绍了咨询师。 于是，从回顾两年的感情开始，梳理我们三重身份关系，朋友，母子，恋人；从他的童年家庭，解析他的心理；说出我家庭的缺失，生活的困扰。 此后，把信任完全交给咨询师，按照咨询师的解决方案，克制自己行为，保持距离，冷落他，难过时打个咨询电话，每一步都在咨询师指导下完成，并找到自信和力量。 再给自己画点淡妆，穿上裙子，看着镜子里的我，有点成熟，有点知性，翻出几首歌曲练习；把注意力一寸一寸从他身上夺回来，转移到家庭，工作。 逆转出现了，他很快意识到了到前期对我关心不足，开始很努力用各种言语和行动弥补。而我，也在逐渐接受他需要年龄相仿新恋情的客观事实。 我和他，和自己，和生活终于和解了。 艰难的十月，这样过去了。此刻，回顾我和他的感情，仍是七百多天的不悔。我的韶华时光，遇到他的青春年少。或许是前世母子情深，或是当年未了的情缘，来到今生相会，且行且珍惜。 十一月，一切没有结束，是全新格局的开始，请咨询师继续给我力量，让我们的感情维系在一个秘密安全的空间，内心保持距离，转移注意，去依赖，去执念，成长，平衡，掌控。</p>
                    <div className="names">
                      <img src={this.case1} alt=""/>
                      <span>来自宁波的王先生</span>
                    </div>
                </div></li>
                <li className="swiper-slide">
                  <div className="slide_li">
                    <p className="case-desc">王先生自述：男，被女友分手了三次，因此让我怀疑，是不是对一个人越好，越是会让感情变得如此轻贱！？今年三月初，因为我的原因，女友不辞而别，当我回到家的时候，看到她的物品被拿走的一干二净，内心简直像被掏空了一样，很难形容那种滋味！当然，我坚信通过自己的努力会把她重新追回来的，是的，那次我确实成功了！不过从那以后，感觉有些东西变了，例如给对方发微信不回复，我就坐立难安；打电话不接，更是如坐针毡！总希望从对方嘴里获取肯定的答案。整个人变的极为敏感，当初那个意气风发的我早已不见踪影，取而代之的是一个小心翼翼的自己！显然，此时的我已经完全吸引不到女友了，甚至时常让她感觉厌烦！直到上个月初，不出意料的被第三次分手！我整日心不在焉，更别说专注的工作，所以决定放空自己，去朋友的老家梅州-客家之乡！每天我就望着对面的山峦，坐在院子里发呆，其实早晚还是会发微信给女友，但得到的都是冷淡的回应！记得那天是中元节，按照当地的习俗是很隆重的节日，外面传来阵阵的鞭炮声，整个村庄都被节日的氛围充斥着，村民忙着招待来访的亲戚。当时的我和外面地喧嚣形成鲜明的对比，一个人躺在房间里，觉得整个世界都与我无关！原来不是女友对我没感情，而是我自己破坏了与其相处之道！怎样做才能二次吸引对方，突然间我就来了兴致、觉得以往自己的挽回都是一种恶性循环！错过了女友给我的每一次机会！那天晚上老师帮我做了一份文案，算是同女友断联前的最后一次微信！而且让我做好对方不回复的准备。说实在，做到真正不联系，心里特别没底，担心对方就此就把我删了，那我可就永无翻身之日了。在此期间，内心一出现落差或疑惑，老师都会耐心的打电话过来和我沟通，通过女友的朋友圈，分析对方的近况！哦，忘了说，朋友圈的个性签名我一直空着，但是老师帮我写了一条签名～让我感到特别惊叹～按照蔚颖飞老师的话来讲——她是要同我们共情的！哈哈！挽回之路我越发充满信心！当断联超过快一周的时候，我有点不安了！可往往事情就是那么巧妙，那天是周一，我和朋友在音乐吧喝东西，手机显示两条新信息，当我一看是女友的微信，以为自己看错了！！她说新搬的地方没有风扇，要过来取走！！无论怎样，对方确实同我主动讲话了不是嘛！那个兴奋劲，马上找老师求助该怎么去回复！不能错过任何抓住她的机会！按照老师说的，我只简单回复了两个字而已！当看到她站在我面前的时候，真是强忍着内心的激动呀！当晚一切听从老师指挥，我真的把她留住了，即使她从始至终都端着！从那晚以后，我又尝试把她约出来了几次，都没有被拒绝过，而且很自然的让我牵着她的手，因为我更换了交流模式，不再像过去总追问她或是急于表达自己！按照老师说的，我要控制聊天的节奏！诙谐，有趣，适当的强势，过往一切不提！女友对我真的重拾兴趣了！上周五的时候，还让我过去接她过来。到现在为止，我的挽回已经完成了80%，剩下的20%，希望她可以把未来真正托付给我！其实在这将近一个月时间里，老师教给我的不仅仅是挽回女友，更多的是让我内心得到真正的成长！直面问题，不再害怕失去！数不尽的感谢. 如果说心情有深渊，当他向我说出新恋情时，我就在深渊的更低一层，我想，我失去他了。那些天常常感到窒息，失眠，没有食欲，肠胃功能紊乱。煎熬，就是把自己的心切成一片又一片，在放到油锅里烹。自己把自己逼到一条绝望之路。觉得瞬间老了，人生已然看到几十年后的模样。 我特别需要倾诉，就想到心理咨询，淘宝上搜索到了壹点灵，客服介绍了咨询师。 于是，从回顾两年的感情开始，梳理我们三重身份关系，朋友，母子，恋人；从他的童年家庭，解析他的心理；说出我家庭的缺失，生活的困扰。 此后，把信任完全交给咨询师，按照咨询师的解决方案，克制自己行为，保持距离，冷落他，难过时打个咨询电话，每一步都在咨询师指导下完成，并找到自信和力量。 再给自己画点淡妆，穿上裙子，看着镜子里的我，有点成熟，有点知性，翻出几首歌曲练习；把注意力一寸一寸从他身上夺回来，转移到家庭，工作。 逆转出现了，他很快意识到了到前期对我关心不足，开始很努力用各种言语和行动弥补。而我，也在逐渐接受他需要年龄相仿新恋情的客观事实。 我和他，和自己，和生活终于和解了。 艰难的十月，这样过去了。此刻，回顾我和他的感情，仍是七百多天的不悔。我的韶华时光，遇到他的青春年少。或许是前世母子情深，或是当年未了的情缘，来到今生相会，且行且珍惜。 十一月，一切没有结束，是全新格局的开始，请咨询师继续给我力量，让我们的感情维系在一个秘密安全的空间，内心保持距离，转移注意，去依赖，去执念，成长，平衡，掌控。</p>
                    <div className="names">
                      <img src={this.case1} alt=""/>
                      <span>来自宁波的王先生</span>
                    </div>
                  </div></li>
                <li className="swiper-slide">
                  <div className="slide_li">
                    <p className="case-desc">王先生自述：男，被女友分手了三次，因此让我怀疑，是不是对一个人越好，越是会让感情变得如此轻贱！？今年三月初，因为我的原因，女友不辞而别，当我回到家的时候，看到她的物品被拿走的一干二净，内心简直像被掏空了一样，很难形容那种滋味！当然，我坚信通过自己的努力会把她重新追回来的，是的，那次我确实成功了！不过从那以后，感觉有些东西变了，例如给对方发微信不回复，我就坐立难安；打电话不接，更是如坐针毡！总希望从对方嘴里获取肯定的答案。整个人变的极为敏感，当初那个意气风发的我早已不见踪影，取而代之的是一个小心翼翼的自己！显然，此时的我已经完全吸引不到女友了，甚至时常让她感觉厌烦！直到上个月初，不出意料的被第三次分手！我整日心不在焉，更别说专注的工作，所以决定放空自己，去朋友的老家梅州-客家之乡！每天我就望着对面的山峦，坐在院子里发呆，其实早晚还是会发微信给女友，但得到的都是冷淡的回应！记得那天是中元节，按照当地的习俗是很隆重的节日，外面传来阵阵的鞭炮声，整个村庄都被节日的氛围充斥着，村民忙着招待来访的亲戚。当时的我和外面地喧嚣形成鲜明的对比，一个人躺在房间里，觉得整个世界都与我无关！原来不是女友对我没感情，而是我自己破坏了与其相处之道！怎样做才能二次吸引对方，突然间我就来了兴致、觉得以往自己的挽回都是一种恶性循环！错过了女友给我的每一次机会！那天晚上老师帮我做了一份文案，算是同女友断联前的最后一次微信！而且让我做好对方不回复的准备。说实在，做到真正不联系，心里特别没底，担心对方就此就把我删了，那我可就永无翻身之日了。在此期间，内心一出现落差或疑惑，老师都会耐心的打电话过来和我沟通，通过女友的朋友圈，分析对方的近况！哦，忘了说，朋友圈的个性签名我一直空着，但是老师帮我写了一条签名～让我感到特别惊叹～按照蔚颖飞老师的话来讲——她是要同我们共情的！哈哈！挽回之路我越发充满信心！当断联超过快一周的时候，我有点不安了！可往往事情就是那么巧妙，那天是周一，我和朋友在音乐吧喝东西，手机显示两条新信息，当我一看是女友的微信，以为自己看错了！！她说新搬的地方没有风扇，要过来取走！！无论怎样，对方确实同我主动讲话了不是嘛！那个兴奋劲，马上找老师求助该怎么去回复！不能错过任何抓住她的机会！按照老师说的，我只简单回复了两个字而已！当看到她站在我面前的时候，真是强忍着内心的激动呀！当晚一切听从老师指挥，我真的把她留住了，即使她从始至终都端着！从那晚以后，我又尝试把她约出来了几次，都没有被拒绝过，而且很自然的让我牵着她的手，因为我更换了交流模式，不再像过去总追问她或是急于表达自己！按照老师说的，我要控制聊天的节奏！诙谐，有趣，适当的强势，过往一切不提！女友对我真的重拾兴趣了！上周五的时候，还让我过去接她过来。到现在为止，我的挽回已经完成了80%，剩下的20%，希望她可以把未来真正托付给我！其实在这将近一个月时间里，老师教给我的不仅仅是挽回女友，更多的是让我内心得到真正的成长！直面问题，不再害怕失去！数不尽的感谢. 如果说心情有深渊，当他向我说出新恋情时，我就在深渊的更低一层，我想，我失去他了。那些天常常感到窒息，失眠，没有食欲，肠胃功能紊乱。煎熬，就是把自己的心切成一片又一片，在放到油锅里烹。自己把自己逼到一条绝望之路。觉得瞬间老了，人生已然看到几十年后的模样。 我特别需要倾诉，就想到心理咨询，淘宝上搜索到了壹点灵，客服介绍了咨询师。 于是，从回顾两年的感情开始，梳理我们三重身份关系，朋友，母子，恋人；从他的童年家庭，解析他的心理；说出我家庭的缺失，生活的困扰。 此后，把信任完全交给咨询师，按照咨询师的解决方案，克制自己行为，保持距离，冷落他，难过时打个咨询电话，每一步都在咨询师指导下完成，并找到自信和力量。 再给自己画点淡妆，穿上裙子，看着镜子里的我，有点成熟，有点知性，翻出几首歌曲练习；把注意力一寸一寸从他身上夺回来，转移到家庭，工作。 逆转出现了，他很快意识到了到前期对我关心不足，开始很努力用各种言语和行动弥补。而我，也在逐渐接受他需要年龄相仿新恋情的客观事实。 我和他，和自己，和生活终于和解了。 艰难的十月，这样过去了。此刻，回顾我和他的感情，仍是七百多天的不悔。我的韶华时光，遇到他的青春年少。或许是前世母子情深，或是当年未了的情缘，来到今生相会，且行且珍惜。 十一月，一切没有结束，是全新格局的开始，请咨询师继续给我力量，让我们的感情维系在一个秘密安全的空间，内心保持距离，转移注意，去依赖，去执念，成长，平衡，掌控。</p>
                    <div className="names">
                      <img src={this.case1} alt=""/>
                      <span>来自宁波的王先生</span>
                    </div>
                  </div></li>
              </ul>
              </div>
              <div className="swiper-pagination"></div>
              <p className="p_style">* 以上内容展示已征得客户同意 *</p>
            </div>
          </div>
          <div className="qg_box_help6">
            <h3 className="box_h3">一流的专家团队</h3>
            <div className="box6_items">
                <div className="itemList">
                   <div className="listimg"><img src={this.pic1} alt=""/></div>
                    <p className="names_p">袁老师</p>
                    <p>从业10年 | 爱心帮助1743人</p>
                  <a className="box6_a kf_xinnuan" href="">立即帮助</a>
                </div>
            </div>
            <div className="box6_items">
              <div className="itemList">
                <div className="listimg"><img src={this.pic2} alt=""/></div>
                <p className="names_p">袁老师</p>
                <p>从业10年 | 爱心帮助1743人</p>
                <a className="box6_a kf_xinnuan" href="">立即帮助</a>
              </div>
            </div>
            <div className="box6_items">
              <div className="itemList">
                <div className="listimg"><img src={this.pic3} alt=""/></div>
                <p className="names_p">袁老师</p>
                <p>从业10年 | 爱心帮助1743人</p>
                <a className="box6_a kf_xinnuan" href="">立即帮助</a>
              </div>
            </div>
            <div className="box6_items">
              <div className="itemList">
                <div className="listimg"><img src={this.pic4} alt=""/></div>
                <p className="names_p">袁老师</p>
                <p>从业10年 | 爱心帮助1743人</p>
                <a className="box6_a kf_xinnuan" href="">立即帮助</a>
              </div>
            </div>
          </div>
          <div className="qg_box_help7">
            <h3 className="box_h3">100多家媒体争相报道 <p>创新模式推动婚恋挽回服务行业发展</p></h3>
          </div>
          <div className="qg_box_help8">
            <h3 className="box_h3">简单 3 步重获幸福</h3>
            <div className="items">
              <div className="items-list">
                <span>01</span>
                <p className="p_text">匹配专家</p>
                <img src="http://nuanwo520.com/images/arrow.png" alt=""/>
                <p className="p_text2">Matching <br/>expert</p>
              </div>
              <div className="items-list">
                <span>02</span>
                <p className="p_text">匹配专家</p>
                <img src="http://nuanwo520.com/images/arrow.png" alt=""/>
                <p className="p_text2">Matching <br/>expert</p>
              </div>
              <div className="items-list">
                <span>03</span>
                <p className="p_text">匹配专家</p>

                <p className="p_text2">Matching <br/>expert</p>
              </div>
              <a  className="ajunp kf_xinnuan" href="">立即免费咨询</a>
            </div>
          </div>

          <div className="qg_box_help9">
            <h3 className="box_h3">关于我们</h3>
            <div className="poster swiper-container" id="poster">
              <ul className="swiper-wrapper">

                <li className="swiper-slide" id="swipera" >
                  <div className="slide_li">
                    <img src={this.banner1} alt=""/>
                  </div>
                </li>
                <li className="swiper-slide" id="swipera" >
                  <div className="slide_li">
                    <img src={this.banner2} alt=""/>
                  </div>
                </li>
                <li className="swiper-slide" id="swipera" >
                  <div className="slide_li">
                    <img src={this.banner3} alt=""/>
                  </div>
                </li>
                <li className="swiper-slide" id="swipera" >
                  <div className="slide_li">
                    <img src={this.banner4} alt=""/>
                  </div>
                </li>
                <li className="swiper-slide" id="swipera" >
                  <div className="slide_li">
                    <img src={this.banner5} alt=""/>
                  </div>
                </li>
              </ul>
              </div>
            <div className="swiper-pagination"></div>
            <p className="weFont">
              情感壹点灵秉承"知心专业，贴心关怀，诚心服务"的理念，力图打造中国最有价值的综合性婚恋服务平台。现有员工300多人，拥有博士、硕士研究生学历者占到10%以上。
              <br/>
              研发运营团队多来自阿里巴巴、百度、携程、5173等知名互联网公司。汇集了国内外4000多位专家，通过各类成熟的实战经验技巧帮助用户挽救婚姻、劝退第三者、挽回爱情、情感疏导。已经成功挽救了5万多个家庭。
            </p>
            <a  className="a-buttom kf_xinnuan" href="">
              查看详情
            </a>
          </div>
          <div className="qg_box_help10">
            <h3 className="box_h3">周一至周日   上午8:00–凌晨01:00</h3>
            <p><span className="win_copyright"></span>
                <span className="win_company"></span>
                <span className="win_copycode"></span></p>
          </div>
          <div className="fotherItems">
            <a  className="oneButton" href="tel:4001141010">电话咨询</a>
            <a  className="twoButton" href="">在线咨询</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Page;
