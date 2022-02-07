import React from 'react'
import styled from 'styled-components'

export const Dashboard = () => {
    return (
        <main>
            <friendsList>
                <friendsListRow><friendsListHead><td>Friends</td></friendsListHead></friendsListRow>            
                <friendsListRow><td>Charley Brown</td></friendsListRow> 
            </friendsList>
        </main>
    )
}

const main = styled.div`
    background: black;
    color: black;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    width: 75%;
    height: 75%;
`

const friendsList = styled.table`
    outline: solid;
`

const friendsListHead = styled.thead`
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
`

const friendsListRow = styled.tr`

`