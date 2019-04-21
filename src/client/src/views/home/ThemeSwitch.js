import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import API from "../../../servers/test";

class ThemeSwitch extends Component {

	constructor() {
		super()
		this.state = { 'themeColor': 'yellow' }
	}

	// dispatch action 去改变颜色
	handleSwitchColor(color) {
		this.props.onSwitchColor(color);
	}

	render() {
		return (
			<div>
        <p>{this.props.themeColor}</p>
        <p>{this.props.aaa}</p>
				<button
					style={{ color: this.props.themeColor }}
					onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
				<button
					style={{ color: this.props.themeColor }}
					onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		themeColor: state.data.themeColor
	}
}
const getServersData = (color) => {

	return (dispatch, getState) => {

		API.test().then( res => {
			dispatch({ type: 'CHANGE_COLOR', data: {"themeColor": color} })
		})

	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onSwitchColor: (color) => {
			dispatch(getServersData(color))
		}
	}
}

ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);

export default ThemeSwitch;

ThemeSwitch.propTypes = {
	themeColor: PropTypes.string,
	onSwitchColor: PropTypes.func
}
