import React, {Component} from 'react';

class Wechat extends Component {

  constructor(props) {

    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="g-top-banner">
          <img src={this.props.src} />
        </div>
      </div>
    )
  }

}

export default Wechat;
