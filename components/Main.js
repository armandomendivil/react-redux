import React, { Component } from 'react'
import Home from './Home'

class Main extends Component {

	render() {
		return (
			<div>
				{this.props.children} {/* Render page */}
			</div>
		)
	}
} 

export default Main