import AppReducer from './AppReducer'
import UserReducer from './UserReducer'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage/session'

const persistConfig = {
    key: 'user', 
    storage,
    whitelist: ["user"]  
  }

const rootReducer = combineReducers({
    app:AppReducer,
    user:UserReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer