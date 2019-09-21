import React from 'react'
import styled from 'styled-components'
import { mediaMobile } from '../../styles/common'
import { calculate } from '../../styles/common'
import { Route,Switch } from 'react-router-dom'
import Title from './Title'
import ImageForm from '../../containers/Form/ImageForm'
import TextForm from '../../containers/Form/TextForm'
import Confirm from '../../containers/Form/Confirm'
import Complete from './Complete'

const FormWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    background-color: rgba(255,255,255,0.9);
    padding: 50px 40px 20px;
    ${mediaMobile`
        width: auto;
        padding: ${calculate(10,320)}vw
    `}
`

const Form = () => {
    return(
        <FormWrapper>
            <Title />
            <Switch>
                <Route exact path="/form/receipt" component={ImageForm} />
                <Route exact path="/form/text" component={TextForm} />
                <Route exact path="/form/confirm" component={Confirm} />
                <Route exact path="/form/complete" component={Complete} />
                <Route component={ImageForm}/>
            </Switch>
        </FormWrapper>
    )
}

export default Form