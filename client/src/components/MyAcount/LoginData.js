import React from 'react'
import styled from 'styled-components'
import {SectionTitle} from '../Top/SectionTitle'
import { mediaMobile } from '../../styles/common'
import { Link } from 'react-router-dom'
import { calculate } from '../../styles/common'

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

const LoginData = () => {
    return(
        <>
            <SectionTitle title={"応募情報変更"}/>
            <NaviText>応募情報の変更はこちら</NaviText>
            <Link to="/mypage/change"><Button　margin={50}>応募情報変更画面へ</Button></Link>
        </>
    )
}

export default LoginData