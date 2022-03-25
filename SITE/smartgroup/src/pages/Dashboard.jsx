import React from 'react'
import styled from 'styled-components'

export const Dashboard = (props) => {
    //build array of rows for friends list table
    //fill each row with name of friend
    var FriendsListRows = []
    props.friendsList.forEach(friend => FriendsListRows.push(<ListRow><td>{friend.Student_first} {friend.Student_last}</td></ListRow>))

    //build array of rows for friends list table
    //fill each row with name of classmate
    var ClassmatesListRows = []
    props.classmatesList.forEach(classmate => ClassmatesListRows.push(<ListRow><td> {classmate.student_first} {classmate.student_last} </td></ListRow>))
    
    return (
        <Main>
            <Title>DASHBOARD</Title>
            {/* Friends List */}
            <ListDiv>
            <FriendsListHead><u>Friends</u></FriendsListHead>
            <List>  
                {FriendsListRows}       
            </List>
            </ListDiv>

            {/* Classmates List */}
            <ListDiv>
            <FriendsListHead><u>Classmates</u></FriendsListHead>
            <List>  
                {ClassmatesListRows}     
            </List>
            </ListDiv>
        </Main>
    )
}

const Title = styled.div`
    position: absolute;
    top: 5%;
    color: white;
`

const ListDiv = styled.div`
    margin: 20px;
    background: rgba(0, 0, 0, 0.50);
    border-radius: 1rem;
    color: white;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    height: 300px;
    overflow: hidden;
    outline: solid;
`

const Main = styled.div`
    outline: solid;
    color: white;
    background: rgba(0, 0, 0, 0.50);
    border-radius: 1rem;
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.55);
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    width: 75vw;
    height: 75vh;
    max-width: 600px;
    max-height: 700px
`

const List = styled.table`
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-conetent: center;
    align-items: center;
    height: 80%;
    width: 70%;
    overflow-y: scroll;
    ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
    }
`

const FriendsListHead = styled.div`
    font-size: 2rem;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
`

const ListRow = styled.tr`
    margin-top: 10%;
    height: 20%;
    width: 100%;
`