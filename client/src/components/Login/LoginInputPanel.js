import React,{useState}from 'react'
import styled from 'styled-components'

const Form = styled.form`
    margin: 0 auto;
    text-align: center;
`

const Input = styled.input`
    display: block
    margin: 5px auto;
    font-size: 1.4rem;
    padding: 5px 8px;
    width: 280px;
    border: 1px solid #dddfe2;
`

const Button = styled.button`
    font-size: 1.4rem;
    width: ${props => props.styled.width}px;
    margin: 5px 0px;
    padding: 10px 0px;
    border: none;
    border-radius: 3px;
    color: #fff;
    background-color: ${props => props.styled.bgColor};
    margin: ${props => props.styled.margin};
    padding: ${props => props.styled.padding};
`

Button.defaultProps = {
    styled:{
        width: "0",
        margin: "0",
        padding: "0",
    }
}

const Navi = styled.p`
    position: relative;
    overflow: hidden;
    width: 280px;
    margin: 10px auto 0;
    text-align: center;
    font-size: 1.2rem;
    &::before,&::after {
        content: '';
        position: absolute;
        top: 50%;
        width: 300px;
        border-bottom: 1px solid #ccd0d5;
    }
    &::before {
        right: 63%;
    }
    &::after {
        left: 63%;
    }
`

const Wrapper = styled.div`
    margin: 20px auto;
    text-align: center;
`

const InputForm = (props) => {
    
    const tab = props.tabIndex === 1 ? 2 : 1 
    const [value, setValue] = useState({
        name:"",
        password:"",
    })

    const submitForm = (e) => {
        e.preventDefault()
        const data = {
            ...value
        }
        if(data.name === '' || data.password === '') {
            alert('正しい値を入力してください。')
            return
        }else{
            if(props.tabIndex === 1){
                props.loginAcount(data)
                setValue({
                    name:"",
                    password:""
                })
            }else{
                props.createAcount(data)
                setValue({
                    name:"",
                    password:""
                })
            }
        }
    }
    
    return(
        <>
            <Form onSubmit={(e) => submitForm(e)}>
                <Input type="text" id = "form_name" value={value.name} placeholder="名前" onChange={(e) => setValue({...value,name:e.target.value})} />
                <Input type="password" id ="form_password" value={value.password} placeholder="パスワード" onChange={e => setValue({...value,password:e.target.value})}/>
                <Button type="send" styled={{width:"280",bgColor:"#bf87c1"}}>{props.main}</Button>
            </Form>
                <Navi>または</Navi>
                <Wrapper>
                    <Button styled={{bgColor:"#42b72a",padding: "10px 28px"}} onClick={() => props.tabChange(tab)}>{props.sub}</Button>
                </Wrapper>
        </>
    )
}

export default InputForm