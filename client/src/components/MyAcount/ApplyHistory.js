import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../Top/SectionTitle'

const ListWrapper = styled.ul`
    margin: 50px;
    padding: 30px 0;
`

const List = styled.li`
    padding: 20px;
    border: 2px solid #cdcdcd;
    display: flex;
`

const Data = styled.p`

`


const ApplyHistory = (props) => {
    console.log(props)
    return(
        <>
            <SectionTitle title={"応募履歴"} />
            <ListWrapper>
                {
                    
                }
            </ListWrapper>
        </>
    )
}

const ListItem = (props) => {
    return(
        <List>
            <Data>{props.name}</Data>
            <Data>{props.mail}</Data>
            <Data>{props.date}</Data>
        </List>
    )
}

export default ApplyHistory