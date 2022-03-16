import InputBox from "./InputBox";
import Button from "./Button";
import React, { useEffect } from "react"
import styled from "styled-components"
import axios from "axios";
import config from "../config"
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
        
        this.errPassMatch = document.getElementById("passMatch");

    
    }

    handleChange(event)
    {
        let name = event.target.name;
        this.setState({
            [name]:event.target.value
        });

        if(name == "first" || name == "last"){
            const nameExp = new RegExp('[a-zA-z]*');
            if(nameExp.test(event.target.value)){
                this.errName.style.display = 'none';
            }
            else{
                this.errName.style.display = 'flex';
            }
        }

        if(name == "username"){
            const emailExp = new RegExp('\w*@latech.edu');
            if(emailExp.test(this.state.username)){
                this.emailPattern.style.display = 'none';
            }
            else{
                this.emailPattern.style.display = 'flex';
            }
        }

        if(name == "passwordConfirm"){
            if (event.target.value != this.state.password){
                this.errPassMatch.style.display = 'flex';
            }else{
                this.errPassMatch.style.display = 'none';
            }
        }

        if(name == "conduct"){
            if(event.target.value != checked){
                this.errPassMatch.style.display = 'flex';
            }
        }
    }

    handleSubmit(event)
    {
        event.preventDefault();
        console.log(event);
        console.log(this.state);
        console.log(config);
        if(this.state.first != "" || this.state.last != "")

        axios.post(config.register, this.state, {timeout:2000})
        .then((val) => {
            if(val.status == 200){
                console.log("register successful");
            }
        }).catch((err) => {
            console.log(err);
            this.registerFail.syle.display = 'flex';
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
                <ErrorBox id="registerFail">There was a problem registering your account</ErrorBox>
                <ErrorBox id="errName">Please enter your first and last name</ErrorBox>
                <InputLine>
                    <InputBox type="text" name="first" placeholder="First Name" value={this.state.first} onChange={this.handleChange}/>
                    <InputBox type="text" name="last" placeholder="Last Name" value={this.state.last} onChange={this.handleChange}/>
                </InputLine>
                <ErrorBox id="emailPattern">Email must be a valid @latech.edu address</ErrorBox>
                <InputLine>
                    <InputBox type="email" name="username" placeholder="email@latech.edu" value={this.state.username} onChange={this.handleChange}/>
                </InputLine>
                <ErrorBox id="passPattern"></ErrorBox>
                <InputLine>
                    <InputBox type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                </InputLine>
                <ErrorBox id="passMatch">Password does not match</ErrorBox>
                <InputLine>
                    <InputBox type="password" name="passwordConfirm" placeholder="Confirm Password" value={this.state.passwordConfirm} onChange={this.handleChange}/>
                </InputLine>
                <InputLine>
                    <input type="checkbox" name="conduct" value={this.state.conduct} onChange={this.handleChange}></input>I agree to abide by the Louisiana Tech Student Code of Conduct
                </InputLine>
                <Button type="submit" value="Submit" content="Register"/>
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
    width: 95%;
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
