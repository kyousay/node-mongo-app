import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../styles/img/logo.jpg'
import icon from '../../styles/img/icon.png'

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    background-color: #fff;
    border-bottom: 1px solid #cdcdcd;
`

const HeaderLogo = styled.img`
    width: 300px;
`

const LinkText = styled.p`
    position: relative;
    font-size: 1.5rem;
    font-weight: bold;
    color: #888888;
    padding: 25px 40px;
    margin-right: 20px;
    &::before {
        position: absolute;
        content: '';
        top: 50%;
        right: 5%;
        width: 25px;
        height: 25px;
        transform: translateY(-50%);
        background: url(${icon})no-repeat center center;
    }
`

const Header = (props) => {

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