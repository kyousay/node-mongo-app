import React from 'react'
import styled from 'styled-components'
import {Section} from '../../styles/common'
import {SectionTitle} from './SectionTitle'
import { mediaMobile } from '../../styles/common'
import { calculate } from '../../styles/common'
import step1 from '../../styles/img/step1.png'
import step2 from '../../styles/img/step2.png'
import step3 from '../../styles/img/step3.png'

const ImageContentBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 0 0;
    ${mediaMobile`
        flex-direction: column;
        align-items: center;
        margin-top: ${calculate(40,320)}vw;
        padding-top: 0;
    `}
`

const ImageBox = styled.div`
    width: 250px;
    text-align: center;
    ${mediaMobile`
        width: ${calculate(250,320)}vw;
        &:not(:first-child) {
            margin-top: ${calculate(30,320)}vw;
        }
    `}
`

const Image = styled.img`
    width: 150px;
    ${mediaMobile`
        width: ${calculate(150,320)}vw;
    `}
`

const ImageBoxText = styled.p`
    line-height: 1.4;
    font-size: 1.8rem;
    font-weight: bold;
    color: #9370db;
    margin-top: 20px;
    ${mediaMobile`
        margin-top: ${calculate(20,320)}vw;
        font-size: ${calculate(15,320)}vw;
    `}
`

const TextStep1 = "対象商品のレシート１口を撮影します。"
const TextStep2 = "下にある「応募はこちら」ボタンを押します。"
const TextStep3 = "レシート画像を応募フォームにアップロードして、必要事項を記入して送信すると応募完了です。"

export default () => {
    return(
        <Section>
            <SectionTitle title={"応募方法"}/>
            <ImageContentBox>
                <ImageContent src={step1} text={TextStep1}/>
                <ImageContent src={step2} text={TextStep2}/>
                <ImageContent src={step3} text={TextStep3}/>
            </ImageContentBox>
        </Section>
    )
}

const ImageContent = (props) => {
    return(
        <ImageBox>
            <Image src={props.src}/>
            <ImageBoxText>{props.text}</ImageBoxText>
        </ImageBox>
    )
}