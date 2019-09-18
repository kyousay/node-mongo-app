import { all, call, fork, put, takeLatest } from 'redux-saga/effects'
import * as Action from './actions/'
import { postDataFactory } from './services/api'
import axios from 'axios'

function* postData(action) {
    const api = postDataFactory({baseURL:'http://localhost:8080'})
    const data = yield call(api,action.payload)
    console.log(data)
        
    // }).then(
    //     res=> {
    //     console.log(res)
    //     setTimeout(() => {
    //         this.props.changeLoading(false)
    //         this.props.resetStore()
    //         this.props.history.push('/form/complete')
    //     },3000)
    // }).catch((error) => {
    //     alert(error)
    //     this.props.changeLoading(false)
    // })
}

function* waitForAction() {
    yield takeLatest('POST_DATA',postData)
}

export default function* rootSaga() {
    yield fork(waitForAction)
}