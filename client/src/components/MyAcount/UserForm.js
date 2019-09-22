import React,{Component}from 'react'
import Header from '../../components/common/Header'
import { FormWrapper } from '../../styles/common'
import styled from 'styled-components'
import { mediaMobile } from '../../styles/common'
import { calculate } from '../../styles/common'

const FormPartsWrapper = styled.div`
    padding: ${props => props.styled.padding};
    font-size: 1.5rem;
    text-align: left;
    ${mediaMobile`
        padding: ${calculate(10,320)}vw;
        font-size: ${calculate(10,320)}vw;
    `}
`

const FormPartsInput = styled.input`
    display: block;
    margin-top: ${props => props.styled.margin_top};
    width: ${props => props.styled.width}
    font-size: 2.0rem;
    border-radius: 3px;
    border: 1px solid #cdcdcd;
    outline: none;
    ${mediaMobile`
        margin-top: ${calculate(20,320)}vw;
        font-size: ${calculate(15,320)}vw;
        width: ${calculate(250,320)}vw;
    `}
`

const FormPartsText = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    ${mediaMobile`
        font-size: ${calculate(20,320)}vw;
    `}
`

const InvalidText = styled.p`
    display: none;
    font-size: 1.5rem;
    margin-top: ${props => props.styled.margin_top};
    color: #ff4500;
    ${mediaMobile`
        font-size: ${calculate(10,320)}vw;
        margin-top: ${calculate(15,320)}vw;
    `}
`

const ItemTitle = styled.p`
    font-size: 1.5rem;
    color: #696969;
    margin-top: 30px;
    margin-right: ${props => props.styled.margin_right};
    ${mediaMobile`
        margin-top: ${calculate(20,320)}vw;
        margin-right: 0;
    `}
`

const FlexBox = styled.div`
    display: flex;
    ${mediaMobile`
        flex-direction: column;
    `}
    &:not(:first-of-type){
        margin-left: 40px;
        ${mediaMobile`
            margin: 0;
        `}
    }
`

const ButtonContainer = styled(FormPartsWrapper)`
    text-align: center;
    width: 450px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
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

const Wrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    background-color: rgba(255,255,255,0.9);
    ${mediaMobile`
        width: auto;
    `}
`

const Content = styled.div`
    padding: 50px 20px;
`

class UserForm extends Component {
    constructor(props){
        super(props)
        this.state = {...this.props.user}
    }

    sendInfo = () => {
        this.props.updateDB(this.state)
    }

    setValue = (id,value) => {
        this.setState({[id]:value})
    }
    
    render(){
        return(
            <Wrapper>
                <Header text={"MyPage"} link={"/mypage"} />
                <Content>
                    <FormWrapper padding={40}>
                        <FormName text={"氏名(姓・名)"} note={{name1:"姓",name2:"名"}} margin_value={"35px"} type={{id1:"last",id2:"first"}} {...this.state} setValue={this.setValue}/>
                        <FormName text={"フリガナ(セイ・メイ)"} note={{name1:"セイ",name2:"メイ"}} margin_value={"20px"} type={{id1:"kana_last",id2:"kana_first"}} {...this.state} setValue={this.setValue}/>
                        <FormMail text={"メールアドレス"} type={"mail"} {...this.state} setValue={this.setValue}/>
                        <FormButton {...this.props} state={this.state} sendInfo={this.sendInfo}/>
                    </FormWrapper>
                </Content>
            </Wrapper>
        )
    }
}

const FormName = (props) => {
    const { name1,name2 } = props.note
    const { margin_value } = props
    const { id1,id2 } = props.type
    return(
        
        <FormPartsWrapper styled={{padding:"40px 0"}}>  
            <FormPartsText>{props.text}</FormPartsText>
                <FlexBox>
                    <FlexBox>
                        <ItemTitle styled={{margin_right: margin_value}}>{name1}</ItemTitle>
                        <div>
                            <FormPartsInput type="text" styled={{margin_top: "20px",width: "350px"}} value={props[id1]} onChange={(e) => props.setValue(id1,e.target.value)}/>
                            <InvalidText className="js-validation" styled={{margin_top: "10px"}}>※{name1}<span className="js-invalidText"></span></InvalidText>
                        </div>
                    </FlexBox>
                    <FlexBox>
                        <ItemTitle styled={{margin_right: margin_value}}>{name2}</ItemTitle>
                        <div>
                            <FormPartsInput type="text" styled={{margin_top: "20px",width: "350px"}} value={props[id2]} onChange={(e) => props.setValue(id2,e.target.value)}/>
                            <InvalidText className="js-validation" styled={{margin_top: "10px"}}>※{name2}<span className="js-invalidText"></span></InvalidText>
                        </div>
                    </FlexBox>
                </FlexBox>
        </FormPartsWrapper>
    )
} 

const FormMail = (props) => {
    const { type } = props
    return(
        <FormPartsWrapper styled={{padding:"40px 0"}}>  
            <FormPartsText>{props.text}</FormPartsText>
            <FormPartsInput type="text" styled={{margin_top:"20px",width: "100%"}} value={props[type]} onChange={(e) => props.setValue(type,e.target.value)}/>
            <InvalidText className="js-validation" styled={{margin_top: "10px"}}>※{props.text}<span className="js-invalidText" id={type}></span></InvalidText>
        </FormPartsWrapper>
    )
}

const FormButton = (props) => {
    return(
        <ButtonContainer styled={{padding: "40px 0"}}>
            <Button styled={{backgroundCol: "#ff4500"}} onClick={() => props.sendInfo()}>情報を更新する</Button>
        </ButtonContainer>
    )
}

export default UserForm
