import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import Router  from './Router'

import rootReducers from './reducers'

const store = createStore(rootReducers, applyMiddleware(reduxThunk))

const SeriesApp = props => (
    <Provider store={store}>
        <Router/>
    </Provider>
)

export default SeriesApp