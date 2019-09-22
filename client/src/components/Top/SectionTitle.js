import React from 'react'
import styled from 'styled-components'
import { mediaMobile } from '../../styles/common'
import { calculate } from '../../styles/common'

const ThemeBar = styled.h2`
    font-size: 2.0rem;
    font-weight: bold;
    background-color: #FF1493;
    color: #fff;
    padding: 10px 0;
    text-align: center;
    ${mediaMobile`
        font-size: ${calculate(15,320)}vw;
    `}
`

const TermsThemeBar = styled(ThemeBar)`
    background-color: #ff8c00;
`

export const SectionTitle = props => {
    return(
        <ThemeBar>{props.title}</ThemeBar>
    )
}

export const TermsSectionTitle = props => {
    return(
        <TermsThemeBar>{props.title}</TermsThemeBar>
    )
}