import React,{ useState } from 'react'
import styled from 'styled-components'
import LoginTitle from './LoginTitle'
import LoginInputPanel from '../../containers/Login/LoginInputPanel'

const LoginPanel = styled.div`
    padding: 50px 0;
    background-color: #fff;
    box-sizing: unset;
`

const LoginForm = props => {

    const [tabIndex, tabChange] = useState(1)

    const title = tabIndex === 1 ? "乃木坂46にログイン" : "新しいアカウントを作成"
    const buttonText = tabIndex === 1 ? {main:"ログイン",sub:"新しいアカウントを作成"} : {main:"アカウント作成",sub:"乃木坂46にログイン"}
    const tab = {tabIndex:tabIndex,tabChange:tabChange}

    return(
        <LoginPanel>
            <LoginTitle title={title}/>
            <LoginInputPanel {...buttonText}{...tab}/>
        </LoginPanel>
    )
}

export default LoginForm