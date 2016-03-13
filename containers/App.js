import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { resetErrorMessage } from '../actions'
import Home from '../components/Home'

class Main extends Component {

	constructor(props) {
    super(props)
  }

	render() {
		 const { children } = this.props
		return (
			<div>
				{children} {/* Render page */}
			</div>
		)
	}
} 

Main.propTypes = {
  // Injected by React Redux
  errorMessage: PropTypes.string,
  // Injected by React Router
  children: PropTypes.node
}

function mapStateToProps(state, ownProps) {
  return {
    errorMessage: state.errorMessage,
  }
}


export default connect(mapStateToProps, {
	resetErrorMessage
})(Main)

