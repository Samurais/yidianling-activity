
import React, {Component} from 'react';

class Mod extends Component {

  constructor(props) {
    super(props);

    this.defImg = "/src/images/global/lazy.png";
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div className="main-title">
          <img data-original={this.props.title} src={this.defImg} className="lazy" />
          <a href={this.props.link} className="more js_more" data-target={`title-more`}>更多<i></i></a>
        </div>
      </div>
    )
  }

}

export default Mod;
