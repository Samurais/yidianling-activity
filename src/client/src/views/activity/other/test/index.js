import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Toast, InputItem } from 'antd-mobile';

class Page extends Component {

  constructor(props) {

    super(props)

  }

  componentDidMount(){
    console.log(1)
  }

  render() {
    return (
      <div>
        test
      </div>
    )
  }
}

export default Page;
