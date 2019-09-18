import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { mediaMobile } from '../../styles/common'
import { calculate } from '../../styles/common'

const TextBox = styled.div`
    width: ${(props) => props.styled.width}px
    margin: ${(props) => props.styled.margin}
    padding: ${(props) => props.styled.padding}
    border: 2px solid #9370db;
    line-height: 1.5;
    text-align: center;
    ${mediaMobile`
        width: auto;
        padding: ${calculate(10,320)}vw;
        margin: ${calculate(40,320)}vw 0 0;
    `}
`

const ThankText = styled.h2`
    font-size: ${(props) => props.styled.font_size}rem
    font-weight: ${(props) => props.styled.font_weight}
    color: ${(props) => props.styled.color}
    ${mediaMobile`
        font-size: ${calculate(16,320)}vw;
    `}
`

const NoteParagragh = styled.p`
    color: #696969;
    font-size: 1.5rem;
    margin-top: 40px;
    ${mediaMobile`
        width: auto;
        font-size: ${calculate(10,320)}vw
        margin: ${calculate(15,320)}vw 0 0;
`}
`

const FormPartsWrapper = styled.div`
    padding: ${(props) => props.styled.padding};
    font-size: 1.5rem;
    text-align: center;
    ${mediaMobile`
       padding: 0;
    `}
`

const ButtonContainer = styled(FormPartsWrapper)`
    text-align: center;
    width: 450px;
    margin: 20px auto 0;
    ${mediaMobile`
        width: ${calculate(250,320)}vw;
        padding-bottom ${calculate(2,320)}vw;
        margin-top: ${calculate(10,320)}vw;
    `}
`

const Button = styled.button`
    width: 200px;
    padding: 20px;
    font-size: 1.5rem;
    background-color: ${(props) => props.styled.backgroundCol};
    color: #fff;
    border-radius: 5px;
    border: none;
    ${mediaMobile`
        margin: ${calculate(20,320)}vw auto 0;
        font-size: ${calculate(15,320)}vw;
        width: ${calculate(200,320)}vw;
        padding: ${calculate(20,320)}vw;
    `}
`

export default () => {
    return(
        <>
            <TextBox styled={{width:"600",margin:"40px auto 0",padding:"40px"}}>
                <ThankText styled={{font_size:"3.0",font_weight:"bold",color:"#9370db"}}>
                    応募受付が完了いたしました。<br></br>
                    ありがとうございました。
                </ThankText>
                <NoteParagragh>
                    応募結果は商品の発送をもって返させていただきます。<br></br>
                    賞品はキャンペーン期間終了後に順次発送いたします。
                </NoteParagragh>
            </TextBox>
            <ButtonContainer styled={{padding:"40px 0"}}>
                <Link to="/"><Button styled={{backgroundCol:"#9370db"}}>トップページに戻る</Button></Link>
            </ButtonContainer>
        </>
    )
}