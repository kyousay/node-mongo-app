import React from 'react'
import styled from 'styled-components'
import { mediaMobile } from '../../styles/common'
import { calculate } from '../../styles/common'
import ImageForm from '../../containers/MyAcont/ImageForm'
import LoginData from './LoginData'
import ApplyHistory from './ApplyHistory'
import Header from '../../containers/common/Header'

const Wrapper = styled.div`
    width: 960px;
    
    margin: 0 auto;
    background-color: rgba(255,255,255,0.9);
    ${mediaMobile`
        width: auto;
        padding: ${calculate(10,320)}vw
    `}
`

const Content = styled.div`
    padding: 50px 20px;
`

const MyAcount = () => {
    return(
        <Wrapper>
            <Header />
            <Content>
                <ImageForm />
                <LoginData />
                <ApplyHistory />
            </Content>
        </Wrapper>
    )
}

export default MyAcount