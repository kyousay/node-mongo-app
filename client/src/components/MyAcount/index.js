import React,{useEffect} from 'react'
import styled from 'styled-components'
import { mediaMobile } from '../../styles/common'
import ImageForm from '../../containers/MyAcount/ImageForm'
import LoginData from './LoginData'
import ApplyHistory from '../../containers/MyAcount/ApplyHistory'
import Header from '../../components/common/Header'

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

const MyAcount = props => {
    useEffect(() => {
        if(!props.user.login){
            props.history.push('/login')
        }
        
    })
    return(
        <Wrapper>
            <Header text={"TopPage"} link={"/"}/>
            <Content>
                <ImageForm />
                <LoginData />
                <ApplyHistory />
            </Content>
        </Wrapper>
    )
}

export default MyAcount