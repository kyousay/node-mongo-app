import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { mediaMobile } from '../../styles/common'
import { calculate } from '../../styles/common'
import {Section} from '../../styles/common'

const Title = styled.h2`
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
    color: #fff;
    text-stroke: 2px #9370db;
    -webkit-text-stroke: 2px #9370db;
    line-height: 1.5;
    ${mediaMobile`
        font-size: ${calculate(25,320)}vw;
    `}
`

const TextBox = styled.div`
    padding: 40px 0 0;
    text-align: center;
    color: #9370db;
    font-weight: bold;
    ${mediaMobile`
        padding-top: ${calculate(20,320)}vw;
        padding-bottom: ${calculate(20,320)}vw;
    `}
`

const Paragragh = styled.p`
    font-size: 2.0rem;
    line-height: 1.5;
    &:not(:first-child) {
        margin-top: 30px;
        border-top: 1px solid #9370db;
        border-bottom: 1px solid #9370db;
        ${mediaMobile`
            margin-top: ${calculate(15,320)}vw;
        `}
    }
    ${mediaMobile`
        font-size: ${calculate(12,320)}vw;
    `}
    
`

const StrongWord = styled.span`
    font-size: 2.5rem;
    font-weight: bold;
    ${mediaMobile`
        font-size: ${calculate(15,320)}vw;
    `}
`

const ParaTitle = styled.span`
    font-size: 2.0rem;
    color: #FF1493;
    margin-right: 20px;
    ${mediaMobile`
        font-size: ${calculate(12,320)}vw;
    `}
`
export default () => {
    return(
        <Section>
            <Title>乃木坂46の24thシングルを買って当てよう!!</Title>
            <TextBox>
                <Paragragh>抽選で<StrongWord>４６</StrongWord>名様に<br></br>メンバーの特別サイン入りグッズが当たる！！</Paragragh>
                <Button margin={30}/>
                <Paragragh><ParaTitle>応募期間:</ParaTitle>2019年9月4日(水)〜2019年10月4日(金)</Paragragh>
            </TextBox>
        </Section>
    )
}