import React from 'react';
import styled from "styled-components";
import InputBox from "../components/InputBox";
import CancelButton from "../components/CancelButton";
import CreateButton from "../components/CreateButton";

const MainColumn = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction column;
    height: 70vh;
    width: 60vw;
    max-width: 1000px;
    background: lightblue;
`;

const MainRow = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction row;
    height: 13vh;
    width: 50vw;
    max-width: 1000px;
`;

const TitleBox = styled.div`
    position: relative;
    height: 15%;
    margin: 2vh;
    font-size: 2.5vh;
    white-space: nowrap;
    -webkit-user-select: none;    
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export function CreateRoom() {
    return (
        <div>
            <MainColumn>
                <MainRow><TitleBox>Course:</TitleBox><InputBox type = "text" placeholder="e.g. CSC-405-002"/></MainRow>
                <MainRow><TitleBox>Description/Study Goals:</TitleBox><InputBox type = "text" placeholder="e.g. Homework/Upcoming Midterm"/></MainRow>
                <MainRow><TitleBox>Start Time:</TitleBox><InputBox type = "text" placeholder="e.g. 1:00 pm"/><TitleBox>End Time:</TitleBox><InputBox type = "text" placeholder="e.g. 2:00 pm"/></MainRow>
                <MainRow><TitleBox>Study Room:</TitleBox><InputBox type = "text" placeholder="e.g. IESB 216"/></MainRow>
                <MainRow><CancelButton content = "Cancel"/><CreateButton content = "Create Room"/></MainRow>
            </MainColumn>
        </div>
    )
}

export default CreateRoom;
