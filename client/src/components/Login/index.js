import React from 'react'
import { withRouter } from 'react-router'
import LoginForm from './LoginForm'

const Login = (props) => {
    return(
        <>
            <LoginForm />
        </>
    )
}

export default withRouter(Login)