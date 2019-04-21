import React, { Component } from 'react';

class Page extends Component {

  constructor(props) {

    super(props);

  }

  componentDidMount(){
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://static.ydlcdn.com/v4/common/service_online_system/index.js';
    head.appendChild(script);
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default Page;
