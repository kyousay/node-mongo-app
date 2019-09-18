import React from 'react'
import styled from 'styled-components'
import { mediaMobile } from '../../styles/common'
import { calculate } from '../../styles/common'
import {Section} from '../../styles/common'
import {SectionTitle} from './SectionTitle'

const Paragragh = styled.p`
    margin-top: 40px;
    font-size: 2rem;
    font-weight: bold;
    color: #9370db;
    line-height: 1.5;
    ${mediaMobile`
        font-size: ${calculate(12,320)}vw;
        margin-top: ${calculate(20,320)}vw;
    `}
`

const ParagraghWrapper = styled.div`
    position:relative
    padding-left: 20px;
    ${mediaMobile`
        padding-left: ${calculate(10,320)}vw;
    `}
    &::before{
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        background-color: #ff69b4;
        left: 0;
        top: 46%;
        transform: translateY(-50%);
        ${mediaMobile`
            width: ${calculate(6,320)}vw;
            height: ${calculate(6,320)}vw;
            top: 26%;
        `}
    }
`

const DetailTextBox = styled.div`
    margin-top: 40px;
    ${mediaMobile`
        margin-top: ${calculate(20,320)}vw;
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
        line-height: 1.5;
    `}
`


export default () => {
    return(
        <Section>
            <SectionTitle title={"応募資格"}/>
            <Paragragh>キャンペーン期間中にお買い上げいただいた<br></br>乃木坂46・24thシングルをお買い上げのレシートを1口としてご応募いただけます。</Paragragh>
            <DetailTextBox>
                <DetailText>＊応募はお一人様５回限りとさせていただきます。</DetailText>
                <DetailText>＊本キャンペーンへのご参加は、日本在住の方に限らせていただきます。</DetailText>
                <DetailText>＊賞品の発送先は日本国内にかぎらせていただきます。</DetailText>
                <DetailText>＊18歳未満の方は保護の方が同意のうえで応募してください。</DetailText>
            </DetailTextBox>
            <ParagraghWrapper>
                <Paragragh>レシート有効期限：2019年9月4日(水)〜2019年10月4日(金)</Paragragh>
            </ParagraghWrapper>
        </Section>
    )
}