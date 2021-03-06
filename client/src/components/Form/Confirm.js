import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import { withRouter, Redirect } from 'react-router'
import styled from 'styled-components'
import { mediaMobile } from '../../styles/common'
import { calculate } from '../../styles/common'

const Form = styled.form`
    padding:${props => props.styled.padding}
    ${mediaMobile`
        padding: ${calculate(20,320)}vw 0 ;
    `}
`

const NoteText = styled.p`
    margin-top: ${props => props.styled.margin}
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
    padding: ${props => props.styled.padding};
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
    background-color: ${props => props.styled.backgroundCol};
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
    margin: ${props => props.styled.margin}
    padding-bottom: ${(props) => props.styled.padding_bottom}px
    width: ${props => props.styled.width}px
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


class Confirm extends Component {
    componentDidMount() {
        if(this.props.app.image === ""){
            alert("申し訳ございませんが、写真選択からやり直してください。")
            this.props.history.push('/form/receipt')
        }
    }
    sendInformation = e => {
        e.preventDefault()
        this.props.changeLoading(true)
        const time = new Date()
        const Year = time.getFullYear()
        const Month = time.getMonth()+1
        const date = time.getDate()
        const Hour = time.getHours()
        const Min = time.getMinutes()
        const data = Object.assign({
            id: this.props.user.id,
            image: this.props.app.image,
            form: {
                ...this.props.app.form
            },
            date: Year + "年" + Month + "月" + date + "日" + Hour + ":" + Min 
        })
        this.props.postData(data)
    }
    

    render() {
        const { app } = this.props
        if(this.props.app.complete){
            this.props.changeComplete(false)
            return <Redirect to="/form/complete"/>
        }
        return(
            <>  
                <NoteText styled={{margin:"40px"}}>入力内容をご確認ください</NoteText>
                <Form styled={{padding: "40px 0"}} id="form" onSubmit={e => {this.sendInformation(e)}}>
                    <input type="hidden" name="image" value={app.image} />
                    <input type="hidden" name="FullName" value={app.form.last + app.form.first}/>
                    <input type="hidden" name="kana_FullName" value={app.form.kana_last + app.form.kana_first} />
                    <input type="hidden" name="mail" value={app.form.mail}/>
                    <ImageBox>
                        <Image src={app.image} alt="receiptImage" />
                    </ImageBox>
                    <InputedText {...this.props} text={{title:"氏名",info: app.form.last + " " + app.form.first}} />
                    <InputedText {...this.props} text={{title:"フリガナ",info: app.form.kana_last + " " + app.form.kana_first}} />
                    <InputedText {...this.props} text={{title:"メールアドレス",info: app.form.mail}} />
                    <ButtonContainer styled={{padding: "40px 0"}}>
                        <Link to="/form/text"><Button styled={{backgroundCol: "#ff4500"}}>個人情報入力へ</Button></Link>
                        <Button type="send" styled={{backgroundCol: "#9370db"}}>応募する</Button>
                    </ButtonContainer>
                </Form>
            </>
        )
    }
}

const InputedText = props => {
    return(
        <BoxWrapper styled={{margin: "60px auto 0",width: "600",padding_bottom:"10"}}>
            <InputedTitle>{props.text.title}:</InputedTitle>
            <InputedInfomation>{props.text.info}</InputedInfomation>
        </BoxWrapper>
    )
}

export default withRouter(Confirm)