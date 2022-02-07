import React from 'react'
import styled from 'styled-components'

export const Dashboard = () => {
    return (
        <Main>
            <Title>DASHBOARD</Title>
            {/* Friends List */}
            <ListDiv>
            <FriendsListHead><u>Friends</u></FriendsListHead>
            <List>  
                <body>
                    <ListRow><Cell>Charley Brown</Cell></ListRow>
                    <ListRow><Cell>Than Nguyen</Cell></ListRow>
                    <ListRow><Cell>Brian Mulhair</Cell></ListRow>
                    <ListRow><Cell>James Brooks</Cell></ListRow>
                    <ListRow><Cell>Devin Wilber</Cell></ListRow>
                    <ListRow><Cell>Snoopy</Cell></ListRow>
                    <ListRow><Cell>Charley Brown</Cell></ListRow>
                    <ListRow><Cell>Than Nguyen</Cell></ListRow>
                    <ListRow><Cell>Brian Mulhair</Cell></ListRow>
                    <ListRow><Cell>James Brooks</Cell></ListRow>
                    <ListRow><Cell>Devin Wilber</Cell></ListRow>
                    <ListRow><Cell>Snoopy</Cell></ListRow>
                    <ListRow><Cell>Charley Brown</Cell></ListRow>
                    <ListRow><Cell>Than Nguyen</Cell></ListRow>
                    <ListRow><Cell>Brian Mulhair</Cell></ListRow>
                    <ListRow><Cell>James Brooks</Cell></ListRow>
                    <ListRow><Cell>Devin Wilber</Cell></ListRow>
                    <ListRow><Cell>Snoopy</Cell></ListRow>
                </body>         
            </List>
            </ListDiv>

            {/* Classmates List */}
            <ListDiv>
            <FriendsListHead><u>Classmates</u></FriendsListHead>
            <List>  
                <body>
                    <ListRow><Cell>Scooter Brown</Cell></ListRow>
                    <ListRow><Cell>Charley Cupit</Cell></ListRow>
                    <ListRow><Cell>John Smith</Cell></ListRow>
                    <ListRow><Cell>Alex Brandy</Cell></ListRow>
                    <ListRow><Cell>Luke Crinkle</Cell></ListRow>
                    <ListRow><Cell>Evan Webber</Cell></ListRow>
                    <ListRow><Cell>Adam West</Cell></ListRow>
                    <ListRow><Cell>Post Malone</Cell></ListRow>
                    <ListRow><Cell>Brian Mulhair</Cell></ListRow>
                    <ListRow><Cell>James Brooks</Cell></ListRow>
                    <ListRow><Cell>Devin Wilber</Cell></ListRow>
                    <ListRow><Cell>Snoopy</Cell></ListRow>
                    <ListRow><Cell>Charley Brown</Cell></ListRow>
                </body>         
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
`

const Main = styled.div`
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

const Cell = styled.td`
    
`