import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { Router, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history';
import configureStore from './store/configureStore';
import routes from './config/routes'

const history = useRouterHistory(createHashHistory)({ queryKey: false });
const store = configureStore()
const rootEl = document.getElementById('root')

render(
	<Provider store={store}>
		<Router history={history} routes={routes}/>
	</Provider>,
	rootEl
)