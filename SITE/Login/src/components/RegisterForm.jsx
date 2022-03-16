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
<<<<<<< HEAD
<<<<<<< HEAD
        this.errEmailPattern = document.getElementById("emailPattern");
        this.errRegister = document.getElementById("register");
        this.errNamePattern = document.getElementById("namePattern");
        this.errPassPattern = document.getElementById("passPattern");
=======
>>>>>>> bbfae14e (Made UI updates)

        this.success = document.getElementById("successMessage");
=======
        this.errEmailPattern = document.getElementById("emailPattern");
        this.errRegister = document.getElementById("register");
        this.errNamePattern = document.getElementById("namePattern");
>>>>>>> 17e15b77 (Got error messages displaying properly)
    }
    
    componentDidMount()
    {
       this.errPassMatch = document.getElementById("passMatch");
       this.errEmailPattern = document.getElementById("emailPattern");
       this.errRegister = document.getElementById("register");
       this.errNamePattern = document.getElementById("namePattern");
<<<<<<< HEAD
       this.errPassPattern = document.getElementById("passPattern");
       
       this.success = document.getElementById("successMessage");
=======
>>>>>>> 17e15b77 (Got error messages displaying properly)
    }

    handleChange(event)
    {
        let name = event.target.name;
        this.setState({
            [name]:event.target.value
        });

        if(name == "first" || name == "last"){
<<<<<<< HEAD
<<<<<<< HEAD
            const nameExp = new RegExp('[a-zA-z]+');
            if(nameExp.test(event.target.value)){
                this.errNamePattern.style.display = 'none';
            }
            else{
                this.errNamePattern.style.display = 'flex';
=======
            const nameExp = new RegExp('[a-zA-z]*');
=======
            const nameExp = new RegExp('[a-zA-z]+');
>>>>>>> 17e15b77 (Got error messages displaying properly)
            if(nameExp.test(event.target.value)){
                this.errNamePattern.style.display = 'none';
            }
            else{
<<<<<<< HEAD
                this.errName.style.display = 'flex';
>>>>>>> bbfae14e (Made UI updates)
=======
                this.errNamePattern.style.display = 'flex';
>>>>>>> 17e15b77 (Got error messages displaying properly)
            }
        }

        if(name == "username"){
            const emailExp = new RegExp('\w*@latech.edu');
<<<<<<< HEAD
<<<<<<< HEAD
            if(emailExp.test(event.target.value)){
                this.errEmailPattern.style.display = 'none';
            }
            else{
                this.errEmailPattern.style.display = 'flex';
            }
        }

        if(name == "password"){
            const passExp = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])');
            if(passExp.test(event.target.value)){
                this.errPassPattern.style.display = 'flex';
            }
            else{
                this.errPassPattern.style.display = 'none'
            }
            if(passExp.test(event.target.value)){
                this.errPassPattern.style.display = 'flex';
            }
            else{
                this.errPassPattern.style.display = 'none'
            }
            if(passExp.test(event.target.value)){
                this.errPassPattern.style.display = 'none';
            }
            else{
                this.errPassPattern.style.display = 'flex'
=======
            if(emailExp.test(this.state.username)){
                this.emailPattern.style.display = 'none';
            }
            else{
                this.emailPattern.style.display = 'flex';
>>>>>>> bbfae14e (Made UI updates)
=======
            if(emailExp.test(event.target.value)){
                this.errEmailPattern.style.display = 'none';
            }
            else{
                this.errEmailPattern.style.display = 'flex';
>>>>>>> 17e15b77 (Got error messages displaying properly)
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
<<<<<<< HEAD
                this.success.style.display = 'flex';
            }
        }).catch((err) => {
            console.log(err);   
            this.errRegister.style.display = 'flex';
=======
            }
        }).catch((err) => {
<<<<<<< HEAD
            console.log(err);
            this.registerFail.syle.display = 'flex';
>>>>>>> bbfae14e (Made UI updates)
=======
            console.log(err);   
            this.errRegister.style.display = 'flex';
>>>>>>> 17e15b77 (Got error messages displaying properly)
        })
    }


    render()
    {

        

        return(
            <RegisterInput id="registerInputs" onSubmit={this.handleSubmit}>
<<<<<<< HEAD
<<<<<<< HEAD
                <SuccessBox id="successMessage">Your account was registered. Check your email to validate your account.</SuccessBox>
                <ErrorBox id="register">There was a problem registering your account</ErrorBox>
                <ErrorBox id="namePattern">Please enter your first and last name</ErrorBox>
=======
                <ErrorBox id="registerFail">There was a problem registering your account</ErrorBox>
                <ErrorBox id="errName">Please enter your first and last name</ErrorBox>
>>>>>>> bbfae14e (Made UI updates)
=======
                <ErrorBox id="register">There was a problem registering your account</ErrorBox>
                <ErrorBox id="namePattern">Please enter your first and last name</ErrorBox>
>>>>>>> 17e15b77 (Got error messages displaying properly)
                <InputLine>
                    <InputBox type="text" name="first" placeholder="First Name" value={this.state.first} onChange={this.handleChange}/>
                    <InputBox type="text" name="last" placeholder="Last Name" value={this.state.last} onChange={this.handleChange}/>
                </InputLine>
                <ErrorBox id="emailPattern">Email must be a valid @latech.edu address</ErrorBox>
                <InputLine>
                    <InputBox type="email" name="username" placeholder="email@latech.edu" value={this.state.username} onChange={this.handleChange}/>
                </InputLine>
<<<<<<< HEAD
                <ErrorBox id="passPattern">Your password must contain a capital letter, a lower-case letter, a number, and a special character</ErrorBox>
                <InputLine>
                    <InputBox type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                </InputLine>
                <ErrorBox id="passMatch">Password does not match</ErrorBox>
=======
                <ErrorBox id="passPattern"></ErrorBox>
>>>>>>> bbfae14e (Made UI updates)
                <InputLine>
<<<<<<< HEAD
                    <InputBox type="password" name="passwordConfirm" placeholder="Confirm Password" value={this.state.passwordConfirm} onChange={this.handleChange}/>
=======
                    <InputBox type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
>>>>>>> 59102750 (Added placeholder text to password)
                </InputLine>
                <InputLine>
<<<<<<< HEAD
                    <input type="checkbox" name="conduct" value={this.state.conduct} onChange={this.handleChange}></input>I agree to abide by the Louisiana Tech Student Code of Conduct
=======
                    <InputBox type="password" name="passwordConfirm" placeholder="Confirm Password" value={this.state.passwordConfirm} onChange={this.handleChange}/>
>>>>>>> 59102750 (Added placeholder text to password)
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

const SuccessBox = styled.div`
color:green;
display:none;
`
