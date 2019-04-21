import React, {Component} from 'react';

class Page extends Component {

  constructor(props) {

    super(props);

    // this.state = {
    //   list: this.props.number
    // };

    this.unit = this.props.unit || "";
  }

  componentDidMount() {

    // this.setState({
    //   list: this.props.number || []
    // }, function(){

    //   setTimeout(() => {
    //     $(".g-js-number").find(".item").addClass("move");
    //   }, 300);

    // });
  }

  // update(nums){
  //   this.setState({
  //     list: nums
  //   });
  // }

  getList(item, index) {

    return (
      <span className="number-item move-sign" key={index}>
        <em className={`num-${item}`}>
          <i>0</i>
          <i>1</i>
          <i>2</i>
          <i>3</i>
          <i>4</i>
          <i>5</i>
          <i>6</i>
          <i>7</i>
          <i>8</i>
          <i>9</i>
        </em>
      </span>
    )
  }

  render() {
    return (
      <span className="g-js-number">
        {this.props.number.map((item, index) => (
          this.getList(item, index)
        ))}{this.unit ? <i className="unit">{this.unit}</i> : ''}
      </span>
    )
  }

}

export default Page;
