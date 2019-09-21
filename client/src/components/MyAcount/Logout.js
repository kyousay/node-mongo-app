import React from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'
import { mediaMobile } from '../../styles/common'
import { calculate } from '../../styles/common'
import { SectionTitle } from '../Top/SectionTitle'

const NaviText = styled.p`
    text-align: center;
    margin-top: 50px;
    font-size: 2.5rem;
`

const Button = styled.div`
    margin: ${props => props.margin}px auto;
    max-width: 500px;
    font-size: 2.5rem;
    background-color: #9370db;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    color: #fff;
    border: none;
    ${mediaMobile`
        max-width: auto;
        width: ${calculate(250,320)}vw;
        font-size: ${calculate(15,320)}vw;
        padding: ${calculate(10,320)}vw;
    `}
    &:hover {
        opacity: 0.8;
    }
`

const Logout = (props) => {
    const purge = () => {
        props.userReset()
    }
    return(
        <>
            <SectionTitle title={"ログアウト"}/>
            <NaviText>ログアウトはこちら</NaviText>
            <Button　margin={50} onClick={() => purge()}>ログアウト</Button>
        </>
    )
}

export default withRouter(Logout)