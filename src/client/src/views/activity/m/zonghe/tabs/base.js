import React, {Component} from 'react';

export default (Wrappedcomponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        pwd: this.props.pwd,
        uid: this.props.uid
      }
      // this.pwd= this.props.pwd;
      // this.uid= this.props.uid;

    }

    componentDidMount() {


      let _this = this.refs[this.props.name];

      if (_this.first && _this.cur) {

        _this.refs[this.props.name].refreshInit();
      }
    }

    componentWillReceiveProps(nextProps) {
      const t = this;
      if (t.state !== nextProps) {
        t.setState({
          pwd: nextProps.pwd,
          uid: nextProps.uid
        });
      }
    }

    setChange(data) {

      let _this = data.refs;

      if (_this.cur) {
        if (_this.first) {

          _this.refs[data.name].refreshInit();
        }
      }
    }


    getRenderListHTML(item, index, rowID) {
      const t = this;
      let exportUrl;
      const thisUrl = window.location.href;
       const {pwd,uid} = this.state;


      if (uid && pwd) {
       // exportUrl = `http://localhost:2001/webdemo/h5/index.html?uid=${uid}&pwd=${pwd}/#/chat/p2p-${item.doctor_uid}`;
        exportUrl =`//static.ydlcdn.com/v4/nim_web_H5/index.html?uid=${uid}&pwd=${pwd}/#/chat/p2p-${item.doctor_uid}`;

      } else {
         if(thisUrl.indexOf('ydl.com')>0){
            exportUrl = `https://m.ydl.com/login?sourceUrl=${thisUrl}`;
         }else{
            exportUrl = `https://m.yidianling.com/login?sourceUrl=${thisUrl}`;

         }
        // exportUrl = `http://testm.yidianling.com/login?sourceUrl=${thisUrl}`;


      }
      //exportUrl = `http://localhost:2001/webdemo/h5/index.html?uid=${t.state.uid}&pwd=${t.state.pwd}/#/chat/p2p-${item.doctor_uid}`;

      return (
        <li className="list" key={index}>
          <dl onClick={() => (
            window.location.href = item.m_url
          )}>
            <dt><span>在线</span><img src={item.doctor_head}/></dt>

            <dd>
              <div className="user">
                <span className="name">{item.doctor_name}<i className={item.sex == 1 ? 'boy' : 'girl'}></i></span>
                <span className="position">{item.title}</span>
              </div>

              <div className="sign">
                {item.tags.map((value, index2, data) => {
                  return (<span kye={index2}>{value}</span>)
                })}
              </div>

              <div className="info">
                <span className="price"><em>{item.service_fee}</em>元起</span>
                <span className="count"><em>{item.zixun_order_num}</em>人向TA咨询过</span>
              </div>
            </dd>
          </dl>

          <a href={exportUrl} className="online-chat"/>
        </li>
      )
    }

    render() {
      return <Wrappedcomponent
        ref={this.props.name}
        setChange={this.setChange}
        getRowHTML={this.getRenderListHTML.bind(this)}
        {...this.props}
      />
    }
  }

  return NewComponent
}
