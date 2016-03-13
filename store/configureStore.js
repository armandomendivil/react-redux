import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
	const store = createStore(
		rootReducer,
		initialState,
		compose(
			applyMiddleware(thunk, createLogger())
		)
	)

	if (module.hot) {
		// Enable weback hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextRootRedcuer = require('../reducers').default
			store.replaceReducer(nextRootRedcuer)
		})
	}

	return store
}
