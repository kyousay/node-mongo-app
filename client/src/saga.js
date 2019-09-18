import {  call, fork, put, takeLatest } from 'redux-saga/effects'
import * as Action from './actions/'
import { push } from 'connected-react-router'
import { postDataFactory } from './services/api'

function* postData(action) {
    const api = postDataFactory()
    const data = yield call(api,action.payload)
    yield alert(data.data)
    yield put(Action.changeLoading(false))
    yield put(Action.resetStore)
    yield put(push('/form/complete'))
}

function* waitForAction() {
    yield takeLatest('POST_DATA',postData)
}

export default function* rootSaga() {
    yield fork(waitForAction)
}