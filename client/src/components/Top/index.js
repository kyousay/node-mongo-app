import React from　'react'
import styled from 'styled-components'
import { mediaMobile } from '../../styles/common'
import { calculate } from '../../styles/common'
import MV from './MV'
import About from './About'
import TargetItem from './TargetItem'
import Condition from './Condition'
import Way from './Way'
import Announce from './Announce'
import Terms from './Terms'
import Footer from './Footer'
import Header from '../../components/common/Header'

const Top = styled.div`
    position: relative;
    width: 960px;
    margin: 0 auto;
    ${mediaMobile`
        width: auto;
    `}
`

const Content = styled.div`
    padding: 0 40px;
    background-color: rgba(255,255,255,0.9);
    ${mediaMobile`
        padding-left: ${calculate(10,320)}vw;
        padding-right: ${calculate(10,320)}vw;
    `}
`

export default () => {
    return(
        <Top>
            <Header text={"MyPage"} link={"/login"}/>
            <MV />
            <Content>
                <About />
                <TargetItem />
                <Condition />
                <Way />
                <Announce />
                <Terms />
                <Footer />
            </Content>
        </Top>
    )
}