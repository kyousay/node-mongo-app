import React ,{useEffect}from 'react'
import styled from 'styled-components'
import { mediaMobile } from '../../styles/common'
import { calculate } from '../../styles/common'
import { withRouter } from 'react-router'
import LoginForm from './LoginForm'
import Header from '../../containers/common/Header'

const Wrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    background-color: rgba(255,255,255,0.9);
    ${mediaMobile`
        width: auto;
        padding: ${calculate(10,320)}vw
    `}
`

const Login = (props) => {
    useEffect(() => {
        if(sessionStorage.getItem('nogi')){
            props.history.push('/mypage')
        }
    })
    return(
        <Wrapper>
            <Header />
            <LoginForm />
        </Wrapper>
    )
}

export default withRouter(Login)