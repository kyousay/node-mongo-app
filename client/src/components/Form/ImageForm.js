import React,{Component}from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FormWrapper } from '../../styles/common'
import { mediaMobile } from '../../styles/common'
import { calculate } from '../../styles/common'
import defaultImage1 from '../../styles/img/kitano.jpg'
import defaultImage2 from '../../styles/img/TypeA.jpg'
import defaultImage3 from '../../styles/img/TypeB.jpg'
import defaultImage4 from '../../styles/img/TypeC.jpg'
import defaultImage5 from '../../styles/img/TypeD.jpg'
import defaultImage6 from '../../styles/img/TypeN.jpg'

const FormText = styled.p`
    padding: 20px 0;
    font-size: 2.0rem;
    font-weight: bold;
    color: #9370db;
    border: 2px solid #9370db;
    text-align: center;
    ${mediaMobile`
        font-size: ${calculate(10,320)}vw;
        padding: ${calculate(15,320)}vw 0;
    `}
`

const Paragragh = styled.p`
    font-size: 2.5rem;
    margin-top: 30px;
    font-weight: bold;
    ${mediaMobile`
        margin-top: ${calculate(30,320)}vw;
        font-size: ${calculate(14,320)}vw;
    `}
`

const TextBox = styled.ul`
    font-size: 2.5rem;
    margin-top: 30px;
    background-color: #cdcdcd;
    padding: 20px 250px;
    display: flex;
    flex-wrap: wrap;
    ${mediaMobile`
        font-size: ${calculate(14,320)}vw;
        margin-top: ${calculate(30,320)}vw;
        padding: ${calculate(20,320)}vw;
    `}
`

const TextBoxContent = styled.li`
    color: #ff4500;
    font-weight: bold;
    :nth-of-type(n + 3) {
        ${mediaMobile`
            margin-top: ${calculate(15,320)}vw;
        `}
    }
`

const UploadText = styled.p`
    margin-top: 20px;
    font-size: 2.0rem;
    line-height: 1.5;
    ${mediaMobile`
        font-size: ${calculate(11,320)}vw;
        margin-top: ${calculate(30,320)}vw;
        font-weight: bold;
    `}
`

const ImageForm = styled.div`
    margin-top: 20px;
    padding: 40px 0;
    display: flex;
    justify-content: center;
    ${mediaMobile`
        flex-direction: column;
        margin-top: ${calculate(20,320)}vw;
        padding: 0;
    `}
`

const ImageInputLabel = styled.label`
    display: block;
    margin-right: 20px;
    font-size: 2.0rem;
    border-radius: 5px;
    padding: 10px;
    color: #fff;
    background-color: #9370db;
    ${mediaMobile`
        font-size: ${calculate(15,320)}vw;
        margin-right: 0;
        padding: ${calculate(8,320)}vw 0;
    `}
`

const PreviewInputBox = styled.div`
    padding: 150px 0 0;
    ${mediaMobile`
        padding: 0;
    `}
`

const PreviewInputText = styled.p`
    width: 180px;
    line-height: 1.5;
    margin: 20px auto 0;
    font-size: 1.5rem;
    color: ${(props) => props.color};
    font-weight: ${(props => props.weight)}
    text-align : center;
    word-break: break-word;
    ${mediaMobile`
        width: ${calculate(180,320)}vw;
        font-size: ${calculate(12,320)}vw;
        margin: ${calculate(10,320)}vw auto 0;
    `}
`

const ImagePreview = styled.img`
    width: 300px;
    height: 300px;
    background-color: #fff;
    border: 1px solid #cdcdcd;
    ${mediaMobile`
        width: ${calculate(250,320)}vw;
        height: ${calculate(250,320)}vw;
    `}
`

const PreviewImageBox = styled.div`
    display: inline-block;
    position: relative;
    padding: 0 0 0 30px;
    ${mediaMobile`
        padding: 0;
        margin-top: ${calculate(20,320)}vw;
    `}
`

const NoteTextBox = styled.div`
    margin: 40px auto 0;
    width: 500px;
    text-align: left;
    color: #ff4500;
    ${mediaMobile`
        margin: ${calculate(20,320)}vw,auto 0;
        width: auto;
    `}
`
const NoteText = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    ${mediaMobile`
        font-size: ${calculate(10,320)}vw;
    `}
    &:not(:first-child){
        margin-top: 20px;
        ${mediaMobile`
            margin-top: ${calculate(20,320)}vw;
            
        `}
    }
`

const InvalidText = styled.p`
    margin-top: 20px;
    font-size: 2.0rem;
    font-weight: bold;
    display: none;
    color: #ff4500;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px auto;
    padding: 40px;
    width: 440px;
    ${mediaMobile`
        margin: ${calculate(40,320)}vw auto 0;
        font-size: ${calculate(15,320)}vw;
        width: auto;
        padding: 0;
        justify-content: unset;
        flex-direction: column-reverse;
    `}
   
`

const Button = styled.button`
    width: 200px;
    padding: 20px;
    font-size: 1.5rem;
    background-color: ${(props) => props.backgroundCol};
    color: #fff;
    border-radius: 5px;
    border: none;
    ${mediaMobile`
        margin: ${calculate(10,320)}vw;
        width: ${calculate(200,320)}vw;
    `}
`



export default class extends Component{
    constructor(props){
        super(props)
        this.state = {
            image: this.props.app.image,
        }
    }

    setPreview = (e) => {
        const files = e.target.files
        if(!files.length) return false
        const flg = this.validation(files)
        if(flg) {
            this.convertImage(files[0])
        }
    }

    emptyNotice = (e) => {
        const errorText = document.getElementsByClassName('js-invalidText')[0]
        if(!this.state.image){
            e.preventDefault()
            errorText.textContent = 'レシートを選択してください'
            errorText.style.display = 'block'
        }else
            errorText.style.display = 'none'
    }

    validation = (files) => {
        const errorText = document.getElementsByClassName('js-invalidText')[0]
        let result = false;
        if(files[0].size < 2000000){
            result = true;
            errorText.style.display = 'none'
        }else{
            errorText.textContent = '画像サイズが大きすぎます'
            errorText.style.display = 'block'
            result = false;
        }
        return result;
    }

    convertImage = (file) => {
        const reader = new FileReader()
        reader.addEventListener('load',() => {
            this.props.setImage(reader.result,file.name)
            this.setState({image:reader.result})
        })
        reader.readAsDataURL(file)
    }

    render(){
        const images = [defaultImage1,defaultImage2,defaultImage3,defaultImage4,defaultImage5,defaultImage6]
        const img = this.state.image ? this.state.image : images[(Math.floor(Math.random() * images.length))]
        const preview = this.state.image ? 
            <PreviewInputText weight={"bold"} color={"#696969"}>{this.props.app.imageName}</PreviewInputText>
            :
            <PreviewInputText weight={"normal"} color={"#cdcdcd"}>未選択</PreviewInputText>
        return(
            <FormWrapper padding={40}>
                <FormText>対象商品ご購入のレシート画像をアップロードしてください</FormText>
                <Paragragh>下記の要素を必ず入れて撮影してください。</Paragragh>
                <TextBox>
                    <TextBoxContent>「購入店舗名」</TextBoxContent>
                    <TextBoxContent>「購入店舗電話番号」</TextBoxContent>
                    <TextBoxContent>「購入日時」</TextBoxContent>
                    <TextBoxContent>「購入商品名」</TextBoxContent>
                </TextBox>
                <UploadText>上記の内容をご確認の上、<br></br>よろしければ、レシート画像をアップロードしてください。</UploadText>
                <ImageForm>
                    <PreviewInputBox>
                        <input id="imageFile" type="file" accept="image/png,image/jpeg" hidden onChange={(e) => this.setPreview(e)}/>
                        <ImageInputLabel htmlFor="imageFile">ファイルを選択</ImageInputLabel>
                        {preview}
                    </PreviewInputBox>
                    <PreviewImageBox>
                        <ImagePreview src={img} alt="レシート画像プレビュー"/>
                        <InvalidText className="js-invalidText"></InvalidText>
                    </PreviewImageBox>
                </ImageForm>
                <NoteTextBox>
                    <NoteText>※JPEG形式、PNG形式の画像ファイルのみ使用できます。</NoteText>
                    <NoteText>※画像は２MB以内のサイズでアップロードしてください。</NoteText>
                    <NoteText>※同一レシートでの応募は無効とさせて頂きます。</NoteText>
                    <NoteText>※アップロードできるレシートは１応募１枚のみです。</NoteText>
                </NoteTextBox>
                <ButtonContainer>
                    <Link to="/"><Button backgroundCol={"#ff4500"}>Topページに戻る</Button></Link>
                    <Link to="/form/text"><Button onClick={(e) =>  this.emptyNotice(e)} backgroundCol={"#9370db"}>お客様情報入力に進む</Button></Link>
                </ButtonContainer>
            </FormWrapper>
        )
    }
}