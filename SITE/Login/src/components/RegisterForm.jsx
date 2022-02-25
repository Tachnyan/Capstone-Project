import InputBox from "./InputBox";
import Button from "./Button";
import React, { useEffect } from "react"
import styled from "styled-components"
import axios from "axios";
import {config} from "../config"
import { equal } from "assert";

export default class RegisterForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            first:"",
            last:"",
            username:"",
            password:"",
            studentID:""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.errPassMatch = document.getElementById("passMatch")

    
    }

    handleChange(event)
    {
        let name = event.target.name;
        this.setState({
            [name]:event.target.value
        });

        if(name == "passwordConfirm"){
            if (event.target.value != this.state.password){
                this.errPassMatch.style.display = 'flex'
            }else{
                this.errPassMatch.style.display = 'none'
            }
        }
    }

    handleSubmit(event)
    {
        event.preventDefault()
        console.log(event)
        console.log(this.state)
        console.log(config)
        if(this.state.first != "" || this.state.last != "")

        axios.post(config.register, this.state, {timeout:2000})
        .then((val) => {
            if(val.status == 200){
                console.log("register successful")
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    componentDidMount()
    {
       this.errPassMatch = document.getElementById("passMatch")
    }

    render()
    {

        

        return(
            <RegisterInput id="registerInputs" onSubmit={this.handleSubmit}>
                <ErrorBox></ErrorBox>
                <InputLine>
                    <InputBox type="text" name="first" placeholder="first name" value={this.state.first} onChange={this.handleChange}/>
                    <InputBox type="text" name="last" placeholder="last name" value={this.state.last} onChange={this.handleChange}/>
                </InputLine>
                <ErrorBox id="emailPattern">Email must be a valid @latech.edu address</ErrorBox>
                <InputLine>
                    <InputBox type="email" name="username" placeholder="email@latech.edu" value={this.state.username} onChange={this.handleChange}/>
                </InputLine>
                <ErrorBox id="errStudentID">Student ID is invalid</ErrorBox>
                <InputLine>
                    <InputBox type="text" name="studentID" placeholder="Student ID" value={this.state.studentID} onChange={this.handleChange}/>
                </InputLine>
                <ErrorBox id="passPattern"></ErrorBox>
                <InputLine>
                    <InputBox type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                </InputLine>
                <ErrorBox id="passMatch">Password does not match</ErrorBox>
                <InputLine>
                    <InputBox type="password" name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.handleChange}/>
                </InputLine>
                <Button type="submit" value="Submit" content="register"/>
            </RegisterInput>
        );
    }

}


const InputLine = styled.div`
    margin-top: 5%;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 15%;
`;

const RegisterInput = styled.form`
    position: relative;
    display: none;
    align-items: center;
    flex-direction: column;
    margin-top: 5%;
    width: 100%;
    max-height: 60%;
    animation: fadeIn 1s;
    @keyframes fadeIn{
        0%{opacity: 0;}
        100%{opacity:1;}
    }
`;

const ErrorBox = styled.div`
color:red;
display:none;
`
