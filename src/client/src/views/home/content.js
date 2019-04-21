import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ThemeSwitch from './ThemeSwitch';
import { connect } from 'react-redux';

class Content extends Component {

	render() {
		return (
			<div>
        <p>{this.props.data}</p>
				<p>this is content</p>
				<ThemeSwitch aaa="ggg" />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.data.data,
	}
}

Content = connect(mapStateToProps)(Content);

export default Content;

Content.propTypes = {
  data: PropTypes.string
}
