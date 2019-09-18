import React from 'react'
import styled from 'styled-components'
import MV_bg from '../../styles/img/mv3.jpg'
import {hiddenText} from '../../styles/common'

const HiddenText = styled.h1`
    height: 0px;
    ${hiddenText}
`

const MainImage = styled.img`
    width: 100%;
`

export default () => {
    return(
        <section>
            <HiddenText>乃木坂46 2019年9月4日(水)発売！　「夜明けまで強がらなくていい」
                    十一福神メンバー直筆サイン入り生写真＆ポスタープレゼントキャンペーン
            </HiddenText>
            <MainImage src={MV_bg} 
            alt="乃木坂46 2019年9月4日(水)発売！　「夜明けまで強がらなくていい」
                十一福神メンバー直筆サイン入り生写真＆ポスタープレゼントキャンペーン" 
            />
        </section>
    )
}