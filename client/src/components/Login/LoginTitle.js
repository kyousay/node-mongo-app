import React from 'react'
import styled from 'styled-components'

const Title = styled.p`
    font-size: 1.8rem;
    text-align: center;
    padding: 18px 0;
`

const LoginTitle = props => {
    return(
        <Title> {props.title}</Title>
    )
}

export default LoginTitle