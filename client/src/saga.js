import {  call, fork, put, takeLatest } from 'redux-saga/effects'
import * as Action from './actions/'
import { push } from 'connected-react-router'
import { postDataFactory,createAcountFactory,loginAcountFactory } from './services/api'

function* postData(action) {
    const api = postDataFactory()
    const data = yield call(api,action.payload)
    yield alert(data.data)
    yield put(Action.changeLoading(false))
    yield put(Action.resetStore())
    yield put(push('/form/complete'))
}

function* createAcount(action) {
    const api = createAcountFactory()
    yield put(Action.changeLoading(true))
    const data = yield call(api,action.payload)
    yield put(Action.changeLoading(false))
    yield alert(data.data)
}

function* loginAcount(action) {
    const api = loginAcountFactory()
    yield put(Action.changeLoading(true))
    const data = yield call(api,action.payload)
    yield put(Action.changeLoading(false))
    yield alert(data.data.text)
    yield put(push('/mypage'))
    sessionStorage.nogi = 'true'
}

function* waitForAction() {
    yield takeLatest('POST_DATA',postData)
    yield takeLatest('CREATE_ACOUNT',createAcount)
    yield takeLatest('LOGIN_ACOUNT',loginAcount)
}

export default function* rootSaga() {
    yield fork(waitForAction)
}