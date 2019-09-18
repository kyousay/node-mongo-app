import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import styled from 'styled-components'
import { css } from '@emotion/core'
import ClipLoader from 'react-spinners/ClipLoader'
import { mediaMobile } from '../../styles/common'
import { calculate } from '../../styles/common'

const Form = styled.form`
    padding:${(props) => props.styled.padding}
    ${mediaMobile`
        padding: ${calculate(20,320)}vw 0 ;
    `}
`

const NoteText = styled.p`
    margin-top: ${(props) => props.styled.margin}
    font-size: 3.0rem;
    color: #9370db;
    text-align: center;
    padding: 20px
    border: 2px solid  #9370db;
    ${mediaMobile`
        font-size: ${calculate(18,320)}vw;
        margin-top: ${calculate(40,320)}vw;
    `}
`

const FormPartsWrapper = styled.div`
    padding: ${(props) => props.styled.padding};
    font-size: 1.5rem;
    text-align: left;
    ${mediaMobile`
        padding: 0;
        font-size: ${calculate(10,320)}vw;
    `}
`

const ButtonContainer = styled(FormPartsWrapper)`
    text-align: center;
    width: 450px;
    margin: 100px auto 0;
    display: flex;
    justify-content: space-between;
    ${mediaMobile`
        justify-content: unset;
        width: auto;
        flex-direction: column-reverse;
        margin-top: ${calculate(40,320)}vw;
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

const ImageBox = styled.div`
    width: 300px;
    height: 300px;
    margin: 0 auto;
    padding: 20px;
    background-color: #cdcdcd;
    border-radius: 5px;
    ${mediaMobile`
        width: ${calculate(250,320)}vw;
        height: ${calculate(250,320)}vw;
        padding: ${calculate(15,320)}vw;
    `}
`

const Image = styled.img`
    width: 100%;
    height: 100%;
`

const BoxWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin: ${(props) => props.styled.margin}
    padding-bottom: ${(props) => props.styled.padding_bottom}px
    width: ${(props) => props.styled.width}px
    border-bottom: 2px solid #9370db;
    ${mediaMobile`
        width: ${calculate(250,320)}vw;
        padding-bottom ${calculate(2,320)}vw;
        margin-top: ${calculate(40,320)}vw;
        flex-wrap: wrap;
    `}
`

const InputedTitle = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    color: #9370db;
    width:200px;
    padding-top: 10px;
    ${mediaMobile`
        font-size: ${calculate(20,320)}vw;
        width: ${calculate(280,320)}vw;
    `}
`

const InputedInfomation = styled.p`
    font-size: 3rem;
    font-weight: bold;
    color: #9370db;
    width: 400px;
    word-wrap: break-word;
    line-height: 1.5;
    ${mediaMobile`
        width: ${calculate(280,320)}vw;
        font-size: ${calculate(25,320)}vw;
        margin-top: ${calculate(10,320)}vw;
    `}
`

const override = css`
    position: absolute;
    top: 45%;
    left: 45%;
    bordere-color: red;
    ${mediaMobile`
        width: ${calculate(50,320)}vw;
        height: ${calculate(50,320)}vw;
    `}
`

const LoadingWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255,255,255,0.5);
`


class Confirm extends Component {
    componentDidMount() {
        if(this.props.state.image === ""){
            alert("申し訳ございませんが、写真選択からやり直してください。")
            this.props.history.push('/form/receipt')
        }
    }
    sendInformation = (e) => {
        e.preventDefault()
        this.props.changeLoading(true)
        const formData = {
            ...this.props.state
        }
        this.props.postData(formData)
    }
    

    render() {
        const {state} = this.props
        const loadingElement = state.loading ? 
            <LoadingWrapper>
                <ClipLoader css={override} sizeUnit={"px"} size={200} color={"#9370db"} loading={state.loading} />
            </LoadingWrapper>
        : null
        return(
            <>  
                {loadingElement}
                <NoteText styled={{margin:"40px"}}>入力内容をご確認ください</NoteText>
                <Form styled={{padding: "40px 0"}} id="form" action="/upload" method="post" onSubmit={(e) => {this.sendInformation(e)}}>
                    <input type="hidden" name="image" value={state.image} />
                    <input type="hidden" name="FullName" value={state.form.last + state.form.first}/>
                    <input type="hidden" name="kana_FullName" value={state.form.kana_last + state.form.kana_first} />
                    <input type="hidden" name="mail" value={state.form.mail}/>
                    <ImageBox>
                        <Image src={state.image} alt="receiptImage" />
                    </ImageBox>
                    <InputedText {...this.props} text={{title:"氏名",info: state.form.last + " " + state.form.first}} />
                    <InputedText {...this.props} text={{title:"フリガナ",info: state.form.kana_last + " " + state.form.kana_first}} />
                    <InputedText {...this.props} text={{title:"メールアドレス",info: state.form.mail}} />
                    <ButtonContainer styled={{padding: "40px 0"}}>
                        <Link to="/form/text"><Button styled={{backgroundCol: "#ff4500"}}>個人情報入力へ</Button></Link>
                        <Button type="send" styled={{backgroundCol: "#9370db"}}>応募する</Button>
                    </ButtonContainer>
                </Form>
            </>
        )
    }
}

const InputedText = (props) => {
    return(
        <BoxWrapper styled={{margin: "60px auto 0",width: "600",padding_bottom:"10"}}>
            <InputedTitle>{props.text.title}:</InputedTitle>
            <InputedInfomation>{props.text.info}</InputedInfomation>
        </BoxWrapper>
    )
}

export default withRouter(Confirm)