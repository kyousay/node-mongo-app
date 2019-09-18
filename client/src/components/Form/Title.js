import React from 'react'
import styled from 'styled-components'
import { mediaMobile } from '../../styles/common'
import { calculate } from '../../styles/common'
import logo from '../../styles/img/Nogizaka46_logo.png' 

const Title = styled.h1`
    position: relative;
    padding: 40px 0 10px 50px;
    font-size: 3.0rem;
    font-weight: bold;
    text-align: left;
    color: #9370db;
    border-bottom: 2px solid #9370db;
    ${mediaMobile`
        padding: ${calculate(20,320)}vw;
        padding-bottom: ${calculate(10,320)}vw
        padding-left: ${calculate(40,320)}vw;
        font-size: ${calculate(30,320)}vw;
    `}
    &::before {
        content: '';
        position: absolute;
        width: 30px;
        height: 30px;
        left: 10px;
        background-image: url(${logo});
        background-size: cover;
        ${mediaMobile`
            width: ${calculate(28,320)}vw
            height: ${calculate(28,320)}vw
            left: 2%;
        `}
    }
`

export default () => {
    return(
        <Title>応募フォーム</Title>
    )
}