import React from 'react'
import {Section} from '../../styles/common'
import {SectionTitle} from './SectionTitle'
import styled from 'styled-components'
import { mediaMobile } from '../../styles/common'
import { calculate } from '../../styles/common'
import typeA from '../../styles/img/TypeA.jpg'
import typeB from '../../styles/img/TypeB.jpg'
import typeC from '../../styles/img/TypeC.jpg'
import typeD from '../../styles/img/TypeD.jpg'
import typeN from '../../styles/img/TypeN.jpg'

const Image = styled.img`
    width: 250px;
    height: 250px;
    ${mediaMobile`
        width: ${calculate(250,320)}vw;
        height: ${calculate(250,320)}vw;
    `}
`

const ContentBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 40px 0;
    ${mediaMobile`
        padding: ${calculate(30,320)}vw;
    `}
`

const ImageBox = styled.div`
    font-size: 2.0rem;
    font-weight: bold;
    text-align: center;
    color: #9370db
    &:nth-of-type(n + 4){
        margin-top: 40px;
        ${mediaMobile`
            margin-top: 0;
        `}
    }
    ${mediaMobile`
        font-size: ${calculate(15,320)}vw;
        &:not(:first-child) {
            margin-top: ${calculate(30,320)}vw;
        }
    `}
`

const ImageParagragh = styled.p`
    margin-top: 20px;
    ${mediaMobile`
        margin-top: ${calculate(20,320)}vw;
    `}
`

const Paragragh = styled.p`
    padding: 20px;
    font-size:2.5rem;
    font-weight: bold;
    color: #9370db;
    text-align: center;
    ${mediaMobile`
        padding: 0;
        font-size: ${calculate(14,320)}vw;
    `}
`

const StyleWord = styled.span`
    margin-left: 20px;
    ${mediaMobile`
        margin-left: ${calculate(8,320)}vw;
    `}
`


export default () => {
    return(
        <Section>
            <SectionTitle title={"対象商品"} />
            <ContentBox>
                <Box img={typeA} title={"Type-A"}/>
                <Box img={typeB} title={"Type-B"}/>
                <Box img={typeC} title={"Type-C"}/>
                <Box img={typeD} title={"Type-D"}/>
                <Box img={typeN} title={"通常盤"}/>
            </ContentBox>
            <Paragragh>対象商品：<StyleWord>乃木坂46・24thシングル各タイプ</StyleWord></Paragragh>
        </Section>
    )
}

const Box = (props) => {
    return(
        <ImageBox>
            <Image src={props.img} alt={props.title} />
            <ImageParagragh>{props.title}</ImageParagragh>
        </ImageBox>
    )
}