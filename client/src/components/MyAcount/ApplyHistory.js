import React, {useEffect,useState} from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../Top/SectionTitle'

const ListWrapper = styled.ul`
    margin: 50px;
    padding: 30px 0;
`

const List = styled.li`
    border: 2px solid #cdcdcd;
    display: flex;
    &:not(:first-child) {
        border-top: 0;
    }
`

const Data = styled.p`
    width: 30%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:not(:first-child) {
        border-left: 2px solid #cdcdcd;
    }
`

const Delete = styled.p`
    width: 10%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 2px solid #cdcdcd;
`

const DeleteIcon = styled.div`
    cursor: pointer;
    font-size: 2.0rem;
    color: #9370db;
    &:hover {
        opacity: 0.7;
    }
`




const ApplyHistory = (props) => {
    useEffect(() => {
        props.getHistory({id:props.user.id})
    },[props.applyHistory])
    const dataArray = props.user.applyHistory
    return(
        <>
            <SectionTitle title={"応募履歴"} />
            <ListWrapper>
                <ListItem data={{name:"申し込み名",mail:"メールアドレス",date:"申し込み日時"}} type={false}/>
                {
                    dataArray.map((data,index) => {
                        return(
                            <ListItem data={{...data}} key={index} type={true} delete={props.deleteHistory}/>
                        )
                    })
                }
            </ListWrapper>
        </>
    )
}

const ListItem = (props) => {
    const deleteHistory = () => {
        props.delete({_id:props.data._id,id:props.data.id})
    }
    return(
        <List>
            <Data>{props.data.name}</Data>
            <Data>{props.data.mail}</Data>
            <Data>{props.data.date}</Data>
            { props.type ? <Delete><DeleteIcon onClick={() => deleteHistory()}><i className="fas fa-trash-alt"></i></DeleteIcon></Delete> 
                :   <Delete>削除</Delete> 
            }
        </List>
    )
}

export default ApplyHistory