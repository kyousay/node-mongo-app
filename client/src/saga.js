import {  call, fork, put, takeLatest } from 'redux-saga/effects'
import * as Action from './actions/'
import { postDataFactory,createAcountFactory,
    loginAcountFactory,upLoadThumbnailFactory,
    updateDBFactory, getHistoryFactory, deleteHistoryFactory } from './services/api'

function* postData(action) {
    const api = postDataFactory()
    try{
        const data = yield call(api,action.payload)
        yield alert(data.data)
        yield put(Action.changeLoading(false))
        yield put(Action.changeComplete(true))
        yield put(Action.resetStore())
    } catch(error) {
        alert(error)
        yield put(Action.changeLoading(false))
    }
}

function* createAcount(action) {
    const api = createAcountFactory()
    yield put(Action.changeLoading(true))
    try{
        const data = yield call(api,action.payload)
        yield put(Action.changeLoading(false))
        yield alert(data.data)
    } catch(error) {
        alert(error)
        yield put(Action.changeLoading(false))
    }
}

function* loginAcount(action) {
    const api = loginAcountFactory()
    yield put(Action.changeLoading(true))
    try{
        const data = yield call(api,action.payload)
        yield alert(data.data.text)
        if(data.data.statusCode){
            yield put(Action.setLoginInfo({
                ...data.data.user
            }))
            yield put(Action.userLogin(true))
            yield put(Action.changeLoading(false))
        }else{
            yield put(Action.changeLoading(false))
        }
    } catch(error) {
        alert(error)
        yield put(Action.changeLoading(false))
    }
}

function* upLoadThumbnail(action) {
    const api = upLoadThumbnailFactory()
    yield put(Action.changeLoading(true))
    try{
        const data = yield call(api,action.payload)
        yield put(Action.changeLoading(false))
        yield put(Action.setThumbnail(data.data.thumbnail))
    } catch(error) {
        alert(error)
        yield put(Action.changeLoading(false))
    }
}

function* updateDB(action) {
    const api = updateDBFactory()
    yield put(Action.changeLoading(true))
    try{
        const data = yield call(api,action.payload)
        yield put(Action.setUserDate(data.data))
        yield put(Action.changeLoading(false))
    } catch (error) {
        alert(error)
        yield put(Action.changeLoading(false))
    }
}

function* getHistory(action) {
    const api = getHistoryFactory()
    yield put(Action.changeLoading(true))
    try {
        const data = yield call(api,action.payload)
        yield put(Action.setHistory(data.data))
        yield put(Action.changeLoading(false))
    } catch (error) {
        alert(error)
        yield put(Action.changeLoading(false))
    }
}

function* deleteHistory(action) {
    const api = deleteHistoryFactory()
    yield put(Action.changeLoading(true))
    try{
        const data = yield call(api,action.payload)
        yield put(Action.setHistory(data.data))
        yield put(Action.changeLoading(false))
    } catch (error) {
        alert(error)
        yield put(Action.changeLoading(false))
    }
}

function* waitForAction() {
    yield takeLatest('POST_DATA',postData)
    yield takeLatest('CREATE_ACOUNT',createAcount)
    yield takeLatest('LOGIN_ACOUNT',loginAcount)
    yield takeLatest('UPLOAD_THUMBNAIL',upLoadThumbnail)
    yield takeLatest('UPDATE_DB',updateDB)
    yield takeLatest('GET_HISTORY',getHistory)
    yield takeLatest('DELETE_HISTORY',deleteHistory)
}

export default function* rootSaga() {
    yield fork(waitForAction)
}