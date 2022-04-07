import React, { useEffect }  from 'react';
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
    outline: solid;
    color: white;
    background: rgba(0, 0, 0, 0.50);
    border-radius: 1rem;
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.55);
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

const CheckBox = styled.input`
    position: relative;
    color: white;
    background: rgba(0,0,0,0.25);
    border-radius: 2rem;
    width: 20%;
    height: 20%;
    padding: 2vh;
    margin: 1vh;
`;

const StyledInputBox = styled.input`
    position: relative;
    color: white;
    background: rgba(0,0,0,0.25);
    border-radius: 2rem;
    width: 80%;
    height: 10%;
    padding: 2vh;
    margin: 1vh;
    border: none;
    outline: none;
    text-align: center;
    font-size: 3vh;
    ::placeholder{
        color: rgba(0, 0, 0, 0.8);
        font-style: italic;
    }
`;

export default class CreateRoom extends React.Component
{
    constructor(props){
        super(props);
        this.validator = this.validator.bind(this);

        this.checkbox = document.getElementById("private");
        this.passwordBox = document.getElementById("password");
    }


    componentDidMount()
    {
       this.checkbox = document.getElementById("private");
       this.passwordBox = document.getElementById("password");
    }

    validator(){
        if(this.checkbox.checked == true){
            this.passwordBox.disabled = false;
        }
        else{
            this.passwordBox.disabled = true;
        }
    }

    render(){
        return(
            <div>
                <MainColumn>
                    <MainRow><TitleBox>Course:</TitleBox><InputBox type = "text" placeholder="e.g. CSC-405-002"/></MainRow>
                    <MainRow><TitleBox>Description/Study Goals:</TitleBox><InputBox type = "text" placeholder="e.g. Homework/Upcoming Midterm"/></MainRow>
                    <MainRow><TitleBox>Start Time:</TitleBox><InputBox type = "text" placeholder="e.g. 1:00 pm"/><TitleBox>End Time:</TitleBox><InputBox type = "text" placeholder="e.g. 2:00 pm"/></MainRow>
                    <MainRow><TitleBox>Study Room:</TitleBox><InputBox type = "text" placeholder="e.g. IESB 216"/></MainRow>

                    <MainRow><TitleBox>Private Room:</TitleBox><CheckBox type="checkbox" id="private" onChange={this.validator}/><StyledInputBox type="text" placeholder="Password" id="password" disabled/></MainRow>

                    <MainRow style={{justifyContent:'center'}}><CancelButton content = "Cancel"/><CreateButton content = "Create Room"/></MainRow>
                </MainColumn>
            </div>
        );
    }

}
