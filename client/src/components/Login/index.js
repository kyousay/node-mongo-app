import React ,{useEffect}from 'react'
import styled from 'styled-components'
import { mediaMobile } from '../../styles/common'
import { withRouter } from 'react-router'
import LoginForm from './LoginForm'
import Header from '../../components/common/Header'

const Wrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    background-color: rgba(255,255,255,0.9);
    ${mediaMobile`
        width: auto;
    `}
`

const Login = props => {
    useEffect(() => {
        if(props.user.login){
            props.history.push('/mypage')
        }
    })
    return(
        <Wrapper>
            <Header text={"TopPage"} link={"/"}/>
            <LoginForm />
        </Wrapper>
    )
}

export default withRouter(Login)