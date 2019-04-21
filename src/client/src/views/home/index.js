import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Demo extends Component {

	render() {
		return (
			<div>
        {this.props.data}
      </div>
		)
	}
}

const mapStateToProps = (state) => {

	return {
		data: state.data,
	}
}

Demo = connect(mapStateToProps)(Demo);

export default Demo;

Demo.propTypes = {
  data: PropTypes.string
}
