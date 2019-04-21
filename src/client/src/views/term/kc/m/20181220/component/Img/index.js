import React, {Component} from 'react';
class Mod extends Component {

  constructor(props) {

    super(props);

    this.imgList = [
      {
        "ico": "/src/images/term/kc/m/20181220/picture1.jpg"
      },
      {
        "ico": "/src/images/term/kc/m/20181220/picture2.jpg"
      },
      {
        "ico": "/src/images/term/kc/m/20181220/picture3.jpg",
        "id":"661"
      },
      {
        "ico": "/src/images/term/kc/m/20181220/picture4.jpg",
        "id":"973"
      },
      {
        "ico": "/src/images/term/kc/m/20181220/picture5.jpg",
        "id":"718"
      },
      {
        "ico": "/src/images/term/kc/m/20181220/picture6.jpg"
      },
      {
        "ico": "/src/images/term/kc/m/20181220/picture7.jpg",
        "id":"732"
      },
      {
        "ico": "/src/images/term/kc/m/20181220/picture8.jpg",
        "id":"977"
      },
      {
        "ico": "/src/images/term/kc/m/20181220/picture9.jpg",
        "id":"1048"
      },
      {
        "ico": "/src/images/term/kc/m/20181220/picture10.jpg"
      },
      {
        "ico": "/src/images/term/kc/m/20181220/picture11.jpg",
        "id":"402"
      },
      {
        "ico": "/src/images/term/kc/m/20181220/picture12.jpg",
        "id":"2280"
      },
      {
        "ico": "/src/images/term/kc/m/20181220/picture13.jpg",
        "id":"2167"
      },
      {
        "ico": "/src/images/term/kc/m/20181220/picture14.jpg"
      },
      {
        "ico": "/src/images/term/kc/m/20181220/picture15.jpg",
        "id":"621"
      },
      {
        "ico": "/src/images/term/kc/m/20181220/picture16.jpg",
        "id":"2231"
      },
      {
        "ico": "/src/images/term/kc/m/20181220/picture17.jpg",
        "id":"1911"
      },
    ];

    this.defImg = "/src/images/global/lazy.png";
    this.url="https://m.ydl.com/course";
  }

  componentDidMount() {}

  getImgList(item, index){
    let element = item.id ? 
    (<a href="javascript:" data-target={index} data-id={item.id} className="js_app_courseDetail js_hmt_click" data-url={this.url}>
      <img data-original={item.ico} src={this.defImg} className="lazy" />
    </a>)
    :
    (<img data-original={item.ico} src={this.defImg} className="lazy" />)
    return (
      <div className="item" key={index}>
        {element} 
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="mod-img">
          {this.imgList.map((item, index) => (
            this.getImgList(item, index)
          ))}
        </div>
      </div>
    )
  }

}

export default Mod;
