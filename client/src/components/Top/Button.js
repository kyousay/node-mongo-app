import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { mediaMobile } from '../../styles/common'
import { calculate } from '../../styles/common'

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

export default props => {
    return(
        <Link to="/form/receipt"><Button margin={props.margin}>応募する</Button></Link>
    )
}