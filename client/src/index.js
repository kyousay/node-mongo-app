import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { HashRouter as Router } from 'react-router-dom'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { createStore,applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import persistedReducer from './reducers/'

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(
    persistedReducer,
    applyMiddleware(logger,sagaMiddleWare)
)

const persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Router>
                <App />
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)

sagaMiddleWare.run(rootSaga)