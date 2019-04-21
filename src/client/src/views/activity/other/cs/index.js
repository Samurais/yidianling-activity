import React, { Component } from 'react';

class Cs extends Component {

  constructor(props) {

    super(props);

    this.dataList = [
      {
        title: "MBTI职业性格测评",
        price: "9.90",
        fans: "5.3",
        url: "https://m.yidianling.com/ceshi/start/744",
        img: "https://img.ydlcdn.com/file/2018/08/28/zav5ajllazj4c4xz.PNG",
      },
      {
        title: "职业生涯导航仪",
        price: "9.90",
        fans: "3.9",
        url: "https://m.yidianling.com/ceshi/start/1117",
        img: "http://img.diggme.cn/2018/04/13/cc520d363c7275ec432474e9fa0ba885.jpg",
      },
      {
        title: "职场人际模式评估",
        price: "9.90",
        fans: "3.6",
        url: "https://m.yidianling.com/ceshi/start/1112",
        img: "http://img.diggme.cn/2018/07/06/a3a4eee280a3c49871a799abc9706836.jpg",
      },
      {
        title: "职业兴趣挖掘机",
        price: "9.90",
        fans: "2.4",
        url: "https://m.yidianling.com/ceshi/start/1132",
        img: "http://img.diggme.cn/2018/03/09/9dadf288bb965470d077a419fc32ed66.png",
      },
      {
        title: "职场人际敏锐度评估",
        price: "9.90",
        fans: "4.4",
        url: "https://m.yidianling.com/ceshi/start/1121",
        img: "http://img.diggme.cn/2018/01/05/80d117337a569557bfa113ebb5046b6d.jpg",
      },
      {
        title: "压力应对模式测评",
        price: "9.90",
        fans: "2.5",
        url: "https://m.yidianling.com/ceshi/start/749",
        img: "https://img.ydlcdn.com/file/2018/08/29/dxihblgmhw2ueiao.PNG",
      },
      {
        title: "职场暗黑人格测评",
        price: "9.90",
        fans: "2.8",
        url: "https://m.yidianling.com/ceshi/start/746",
        img: "https://img.ydlcdn.com/file/2018/08/28/g178f0okqim8w0bf.PNG",
      },
      {
        title: "管理优势测评",
        price: "9.90",
        fans: "3.1",
        url: "https://m.yidianling.com/ceshi/start/743",
        img: "https://img.ydlcdn.com/file/2018/08/28/bf914g46bsct821r.PNG",
      },
      {
        title: "成功心态评估",
        price: "9.90",
        fans: "3.7",
        url: "https://m.yidianling.com/ceshi/start/742",
        img: "http://img.diggme.cn/data/upload/img/201704/58ec4fb8e86b7.jpg",
      },
      {
        title: "职场生存力评估",
        price: "9.90",
        fans: "3.9",
        url: "https://m.yidianling.com/ceshi/start/735",
        img: "https://img.ydlcdn.com/file/2018/08/28/a6riks8v6ihqpj61.PNG",
      }

    ]

  }

  componentDidMount(){

  }

  getPriceFilter(str){
    let g = /(¥\d+)(?=\.)/gi;

    let s = str.replace(g, function(){
      return "<em>"+RegExp.$1+"</em>";
    });

    return <span dangerouslySetInnerHTML={{__html: s}}></span>
  }

  getListHTML(item, index) {
    return (
      <li key={index}>
        <a href={item.url}>
          <dl>
            <dt><img src={item.img} /></dt>
            <dd>
              <h1 className="title">{item.title}</h1>
              <p>
                <span className="sp1">{this.getPriceFilter("¥"+item.price)}元</span>
                <span className="sp2">{item.fans}万人气</span>
              </p>
            </dd>
          </dl>
        </a>
      </li>
    )
  }

  render() {
    return (
      <div>
        <div className="page-ceshi-cs">
          <div className="title"></div>

          <div className="list">
            <ul>
              {this.dataList.map((item, index) => (
                this.getListHTML(item, index)
              ))}
            </ul>
          </div>

          <div className="footer">壹点灵心理服务平台提供支持</div>
        </div>
      </div>
    )
  }
}



export default Cs;
