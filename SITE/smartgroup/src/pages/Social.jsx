import React from 'react'
import styled from 'styled-components'
import AddFriend from '../components/AddFriend'
import IgnoreUser from '../components/IgnoreUser'
import SocialButton from '../components/SocialButton'

export const Social = (props) => {
    //build array of rows for friends list table
    //fill each row with name of friend
    var FriendsListRows = []
    props.friendsList.forEach(friend => FriendsListRows.push(<ListRow><Cell>{friend.Student_First} {friend.Student_Last}</Cell><Cell><SocialButton route="/app" content="-"/></Cell></ListRow>))

    //build array of rows for friends list table
    //fill each row with name of classmate
    var ClassmatesListRows = []
    props.classmatesList.forEach(classmate => ClassmatesListRows.push(<ListRow><Cell> {classmate.Student_First} {classmate.Student_Last}</Cell><Cell> <SocialButton route="/app" content="-"/></Cell></ListRow>))
    
    //build array of rows for friends list table
    //fill each row with name of classmate
    var RequestListRows = []
    props.requestList.forEach(classmate => RequestListRows.push(<ListRow><Cell> {classmate.Student_First} {classmate.Student_Last}</Cell><Cell><SocialButton route="/app" content="+"/></Cell><Cell><SocialButton route="/app" content="-"/></Cell></ListRow>))
    
    return (
        <Main>
            <Title>SOCIAL</Title>
            <TopDashboard>
                {/* Friends List */}
                <ListDiv>
                <FriendsListHead><u>Friends</u></FriendsListHead>
                <List>
                    {FriendsListRows}       
                </List>
                <AddFriend/>
                </ListDiv>

                {/* Ignore List */}
                <ListDiv>
                <FriendsListHead><u>Ignored</u></FriendsListHead>
                <List>
                    {ClassmatesListRows}     
                </List>
                <IgnoreUser/>
                </ListDiv>
            </TopDashboard>
            <RequestDiv>
                <ListDiv style = {{width: "85%"}}>
                <FriendsListHead><u>Pending Friend Requests</u></FriendsListHead>
                <RequestList>
                    {RequestListRows}
                </RequestList>
                </ListDiv>
            </RequestDiv>
        </Main>
    )
}

const Title = styled.div`
    color: white;
    margin-bottom: 5%;

`
const RequestList = styled.table`
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-conetent: center;
    align-items: center;
    overflow-y: scroll;
    height: 75%;
    ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
`

const RequestDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 30%;
`

const TopDashboard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 52%;
    margin-bottom: 5%;
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
    overflow: hidden;
    outline: solid;
    width: 40%;
    height: 100%;
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
    flex-direction: column;
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
    overflow-y: scroll;
    height: 90%;
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

const Cell = styled.td`
`