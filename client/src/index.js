import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { HashRouter as Router } from 'react-router-dom'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import { PersistGate } from 'redux-persist/integration/react'
import { createStore,applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import AppReducer from './reducers/'

const persistConfig = {
    key: 'root', 
    storage,
    blacklist: ["AppReducer"]  
  }

const rootReducer = combineReducers({
    AppReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

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