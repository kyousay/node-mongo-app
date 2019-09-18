import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createBrowserHistory } from 'history'
import { connectRouter,routerMiddleware, ConnectedRouter } from 'connected-react-router'
import { createStore,applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import AppReducer from './reducers/'

const history = createBrowserHistory()


const rootReducer = combineReducers({
    AppReducer,
    router: connectRouter(history)
})

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(logger,sagaMiddleWare,routerMiddleware(history))
)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)

sagaMiddleWare.run(rootSaga)