import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class Page extends Component {

  constructor(props) {

    super(props)

  }

  componentDidMount(){
  }

  render() {
    return (
      <div className="mod-a2">mod-a2 {this.props.dataInfo.text}</div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		data: state.data,
	}
}

Page = connect(mapStateToProps)(Page);

Page.propTypes = {
  data: PropTypes.string
}

export default Page;
