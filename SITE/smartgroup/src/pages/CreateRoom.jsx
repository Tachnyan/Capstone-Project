import React, { useEffect }  from 'react';
import styled from "styled-components";
import InputBox from "../components/InputBox";
import CancelButton from "../components/CancelButton";
import CreateButton from "../components/CreateButton";
import Button from "../components/Button";
import axios from 'axios';
import { Navigate } from "react-router";

const MainColumn = styled.form`
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
    @media only screen and (orientation: portrait) {
        flex-direction: column;
        overflow: auto;
    }
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
    @media only screen and (orientation: portrait) {
        white-space: wrap;
        font-size: 1.8vh;
    }
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

const Selector = styled.select`
    position: relative;
    color: white;
    background-color: rgba(0,0,0,0.25);
    width: 80%;
    height: 10%;
    padding: 2vh;
    margin: 1vh;
    border: none;
    outline: none;
    text-align: center;
    font-size: 3vh;
    border-radius: 2rem;
`

const StyledOption = styled.option`
    color: black;
    background-color: rgba(0,0,0,0.25);
`


const ErrorBox = styled.div`
color:red;
display:none;
background: rgba(0,0,0,.5)
`

const SuccessBox = styled.div`
color:green;
display:none;
background: rgba(0,0,0,.5)
`

export default class CreateRoom extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            Course_Subject: "",
            Studygroup_ID: "",
            Studygroup_Material: "",
            Studygroup_Location: "",
            Studygroup_Privacy: "Open",
            Studygroup_Start: "",
            Studygroup_End: ""
        }
        this.state.user = props.user;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.success = document.getElementById("successMessage");
        this.failure = document.getElementById("failMessage");
        this.courseErrMessage = document.getElementById("courseMessage");
    }


    componentDidMount()
    {
        this.success = document.getElementById("successMessage");
        this.failure = document.getElementById("failMessage");
        this.courseErrMessage = document.getElementById("courseMessage");
    }

    handleChange(event){
        let name = event.target.name;
        this.setState({
            [name]:event.target.value
        })
        if(event.target.name == "Course_Subject"){
            const courseExp = new RegExp(/^([A-Za-z]{3,4} [0-9]{3} [0-9]{3})$/);
            console.log(courseExp)
            if(!courseExp.test(this.state.value)){
                this.courseErrMessage.style.display = 'flex';
            }
            else{
                this.courseErrMessage.style.display = 'none';
            }
        }
        console.log(name)
        console.log(event.target.value)
    }

    handleSubmit(event){
        event.preventDefault();
        let fullClass = this.state.Course_Subject;
        const classArray = fullClass.split(" ");
        this.state.Course_Subject = classArray[0];
        this.state.Course_Number = classArray[1];
        this.state.Course_Section = classArray[2];
        this.state.Studygroup_Start = this.state.Studygroup_Start.replace('T', ' ') + ':00';
        this.state.Studygroup_End = this.state.Studygroup_End.replace('T', ' ') + ':00';
        axios.post(`${process.env.AUTH_URL}/data/createstudygroup`, this.state, {timeout:5000})
        .then((response) => {
            console.log(response.status)
            if(response.status == 200){
                console.log("Chatroom created");
                this.success.style.display = 'flex';
                this.failure.style.display = 'none';
            }
        })
        .catch((err) => {
            console.log(err);
            this.success.style.display = 'none';
            this.failure.style.display = 'flex';
        })
        
    }

    // Need help down here
    // Idk what's happening
    render(){
        return(
            <MainColumn onSubmit={this.handleSubmit}>
                <ErrorBox id="courseMessage">Your course does not match the correct pattern.</ErrorBox>
                <MainRow><TitleBox>Course:</TitleBox><InputBox name="Course_Subject" type = "text" id="Course_Subject" placeholder="e.g. CSC 405 002" value={this.state.Course_Subject} onChange={this.handleChange}/></MainRow>
                <MainRow><TitleBox>Description/Study Goals:</TitleBox><InputBox name="Studygroup_Material" type = "text" id="Studygroup_Material" placeholder="e.g. Homework/Upcoming Midterm" value={this.state.Studygroup_Material} onChange={this.handleChange}/></MainRow>
                <MainRow><TitleBox>Start Time:</TitleBox><InputBox name="Studygroup_Start" type = "datetime-local" id="Studygroup_Start" placeholder="e.g. 2022-04-22 17:00:00" value={this.state.Studygroup_Start} onChange={this.handleChange}/></MainRow>
                <MainRow><TitleBox>End Time:</TitleBox><InputBox name="Studygroup_End" type = "datetime-local" id="Studygroup_End" placeholder="e.g. 2022-04-22 18:00:00" value={this.state.Studygroup_End} onChange={this.handleChange}/></MainRow>
                <MainRow><TitleBox>Study Room:</TitleBox><InputBox name="Studygroup_Location" type = "text" id="Studygroup_Location" placeholder="e.g. IESB 216" value={this.state.Studygroup_Location} onChange={this.handleChange}/></MainRow>
                <MainRow style={{justifyContent:'center'}}><CancelButton content = "Cancel"/><CreateButton type="submit" value="Submit" content="Create Room"  onSubmit={this.handleSubmit}/></MainRow>
                <SuccessBox id="successMessage">Your group was created. Navigate to the Study room tab to see it.</SuccessBox>
                <ErrorBox id="failMessage">Your group failed to create. Make sure all fields are entered correctly.</ErrorBox>
            </MainColumn>
        );
    }

}
