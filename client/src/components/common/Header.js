import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../styles/img/logo.jpg'
import icon from '../../styles/img/icon.png'
import { mediaMobile } from '../../styles/common'
import { calculate } from '../../styles/common'

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    background-color: #fff;
    border-bottom: 1px solid #cdcdcd;
    ${mediaMobile`
        height: 12vw;
    `}
`

const HeaderLogo = styled.img`
    width: 300px;
    ${mediaMobile`
        width: 35vw;
    `}
`

const LinkText = styled.p`
    position: relative;
    font-size: 1.5rem;
    font-weight: bold;
    color: #888888;
    padding: 25px 40px;
    margin-right: 20px;
    ${mediaMobile`
        font-size: ${calculate(10,320)}vw;
        margin-right: 3vw;
    `}
    &::before {
        position: absolute;
        content: '';
        top: 50%;
        right: 5%;
        width: 25px;
        height: 25px;
        transform: translateY(-50%);
        background: url(${icon})no-repeat center center;
        ${mediaMobile`
            background-size: cover;
            left: 70%
            width: ${calculate(25,320)}vw;
            height: ${calculate(25,320)}vw;
        `}
    }
`

const Header = props => {

    return(
        <>
            <HeaderWrapper>
                <HeaderLogo src={logo} />
                    <Link to={`${props.link}`}><LinkText>{props.text}</LinkText></Link>
            </HeaderWrapper>
        </>
    )
}

export default Header