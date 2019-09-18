import React from 'react'
import styled from 'styled-components'
import { mediaMobile } from '../../styles/common'
import { calculate } from '../../styles/common'
import {SectionTitle} from './SectionTitle'
import {Section} from '../../styles/common'

const Paragragh = styled.p`
    margin-top: 40px;
    font-size: 2rem;
    font-weight: bold;
    color: #9370db;
    ${mediaMobile`
        font-size: ${calculate(15,320)}vw;
        line-height: 1.5;
        margin-top: ${calculate(20,320)}vw;
    `}
`

const DetailTextBox = styled.div`
    margin-top: 40px;
    ${mediaMobile`
        margin-top: ${calculate(30,320)}vw;
    `}
` 
const DetailText = styled.p`
    font-size: 1.5rem;
    color: #696969;
    &:not(:first-child){
        margin-top: 10px;
        ${mediaMobile`
            margin-top: ${calculate(10,320)}vw;
        `}
    }
    ${mediaMobile`
        font-size: ${calculate(10,320)}vw;
        line-height: 1.5
    `}
`

export default () => {
    return(
        <Section>
            <SectionTitle title={"当選者の発表について"}/>
            <Paragragh>厳正な抽選の上、当選者を決定し、賞品の発送をもって発表に返させていただきます。</Paragragh>
            <DetailTextBox>
                <DetailText>＊賞品の落選通知はありません。</DetailText>
                <DetailText>＊賞品の発送は2019年11月中旬頃を予定しています。</DetailText>
                <DetailText>＊賞品の発送は諸事情により遅れることがございます。</DetailText>
                <DetailText>＊抽選結果や抽選方法についてのお問い合わせには一切お答えできません。</DetailText>
            </DetailTextBox>
        </Section>
    )
}