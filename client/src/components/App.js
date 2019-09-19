import React,{Component} from 'react'
import styled from 'styled-components'
import { mediaMobile } from '../styles/common'
import { Switch,Route } from 'react-router-dom'
import BaseStyles from '../styles/baseStyles'
import bg from '../styles/img/background.jpeg'
import Top from './Top/'
import Form from './Form/'
import Login from '../containers/Login/'
import MyAcount from '../containers/MyAcount/'
import UserForm from '../containers/MyAcount/UserForm'
import { css } from '@emotion/core'
import ClipLoader from 'react-spinners/ClipLoader'
import { calculate } from '../styles/common'



const Wrapper = styled.div`
    background: url(${bg});
    width: 100%;
    min-width: 1040px;
    min-height: 100vh;
    ${mediaMobile`
        min-width: auto;
    `}
`

const override = css`
    position: absolute;
    top: 45%;
    left: 45%;
    bordere-color: red;
    ${mediaMobile`
        width: ${calculate(50,320)}vw;
        height: ${calculate(50,320)}vw;
    `}
`

const LoadingWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255,255,255,0.5);
`



export default class extends Component{
    render(){
        const {loading} = this.props.state.AppReducer
        const loadingElement = loading ? 
            <LoadingWrapper>
                <ClipLoader css={override} sizeUnit={"px"} size={200} color={"#9370db"} loading={loading} />
            </LoadingWrapper>
        : null
        return(
            <>
                <BaseStyles />
                {loadingElement}
                <Wrapper>
                    <Switch>
                        <Route exact path="/" component={Top} />
                        <Route path="/form" component={Form}/>
                        <Route path="/login" component={Login} />
                        <Route exact path="/mypage" component={MyAcount} />
                        <Route path="/mypage/change" component={UserForm} />
                        <Route component={Top} />
                    </Switch>
                </Wrapper>
            </>
        )
    }
}