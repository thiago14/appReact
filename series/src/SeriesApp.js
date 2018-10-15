import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Router  from './Router'

import rootReducers from './reducers'

const store = createStore(rootReducers)

const SeriesApp = props => (
    <Provider store={store}>
        <Router/>
    </Provider>
)

export default SeriesApp