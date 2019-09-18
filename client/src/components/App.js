import React,{Component} from 'react'
import styled from 'styled-components'
import { mediaMobile } from '../styles/common'
import { Switch,Route } from 'react-router-dom'
import BaseStyles from '../styles/baseStyles'
import bg from '../styles/img/background.jpeg'
import Top from './Top/'
import Form from './Form/'



const Wrapper = styled.div`
    background: url(${bg});
    width: 100%;
    min-width: 1040px;
    min-height: 100vh;
    ${mediaMobile`
        min-width: auto;
    `}
`



export default class extends Component{
    render(){
        return(
            <>
                <BaseStyles />
                <Wrapper>
                    <Switch>
                        <Route exact path="/" component={Top} />
                        <Route path="/form" component={Form}/>
                        <Route component={Top} />
                    </Switch>
                </Wrapper>
            </>
        )
    }
}