import React from 'react'
import {TermsSectionTitle} from './SectionTitle'
import styled from 'styled-components'
import { mediaMobile } from '../../styles/common'
import { calculate } from '../../styles/common'

const TextBox = styled.div`
    padding: 40px 0;
    text-align: center;
    ${mediaMobile`
        padding-top: ${calculate(40,320)}vw;
        padding-bottom: ${calculate(40,320)}vw;
    `}

`

const TextTitle = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    color: #696969;
    ${mediaMobile`
        font-size: ${calculate(15,320)}vw;
    `}
`

const StrongText = styled.p`
    margin-top: 10px;
    font-size: 2.0rem;
    font-weight: bold;
    color: #ff8c00;
`

const Tell = styled.span`
    font-size: 3.0rem;
    ${mediaMobile`
        font-size: ${calculate(20,320)}vw;
    `}
`

const DetailText = styled.p`
    margin-top: 10px;
    font-size: 1.2rem;
    color: #696969;
    ${mediaMobile`
        font-size: ${calculate(8,320)}vw;
        margin-top: ${calculate(10,320)}vw;
    `}
`

export default () => {
    return(
        <section>
            <TermsSectionTitle title={"キャンペーンに関するお問い合わせ"} />
            <TextBox>
                <TextTitle>乃木坂LLCイベントインフォメーション</TextTitle>
                <StrongText><Tell>03-5403-2626</Tell>(有料)</StrongText>
                <DetailText>受付時間:10:00~18:00(土・日・祝日・年末年始・弊社定休日を除く)</DetailText>
            </TextBox>
        </section>
    )
}