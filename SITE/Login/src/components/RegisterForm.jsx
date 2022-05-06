import InputBox from "./InputBox";
import Button from "./Button";
import React, { useEffect } from "react"
import styled from "styled-components"
import axios from "axios";
import {config} from "../config"


export default class RegisterForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            FirstName:"",
            LastName:"",
            Username:"",
            Password:"",
            ConfirmPassword: "",
            Conduct: false
        }

        this.form = React.createRef()

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
        
        this.errPassMatch = document.getElementById("passMatch");
        this.errEmailPattern = document.getElementById("emailPattern");
        this.errRegister = document.getElementById("register");
        this.errNamePattern = document.getElementById("namePattern");
        this.errPassPattern = document.getElementById("passPattern");
        this.errConductCheck = document.getElementById("conductCheck");

        this.success = document.getElementById("successMessage");
    }
    
    componentDidMount()
    {
       this.errPassMatch = document.getElementById("passMatch");
       this.errEmailPattern = document.getElementById("emailPattern");
       this.errRegister = document.getElementById("register");
       this.errNamePattern = document.getElementById("namePattern");
       this.errPassPattern = document.getElementById("passPattern");
       this.errConductCheck = document.getElementById("conductCheck");
       
       this.success = document.getElementById("successMessage");
    }

    handleChange(event)
    {
        let name = event.target.name;
        let value = event.target.value;
        if (name == "Conduct") value = event.target.checked;
        this.setState({
            [name]:value
        }, () => {
            this.validate(name);
        });
        
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(event);

        var body = {
            Username: this.state.Username,
            Password: this.state.Password,
            FirstName: this.state.FirstName,
            LastName: this.state.LastName
        }

        console.log(this.validate("submit"))
        if (this.validate("submit")) {
            axios.post(config.register, body, { timeout: 2000 })
                .then((val) => {
                    if (val.status == 200) {
                        console.log("register successful");
                        this.success.style.display = 'flex';
                    }
                }).catch((err) => {
                    console.log(err);
                    this.errRegister.style.display = 'flex';
                })
        }
    }

    validate(name)
    {
        let validate = true
        if(name == "FirstName" || name == "submit"){
            const nameExp = new RegExp('[a-zA-z]+');
            if(nameExp.test(this.state.FirstName)){
                this.errNamePattern.style.display = 'none';
            }
            else{
                this.errNamePattern.style.display = 'flex';
                validate = false;
            }
        }

        if(name == "LastName" || name == "submit"){
            const nameExp = new RegExp('[a-zA-z]+');
            if(nameExp.test(this.state.LastName)){
                this.errNamePattern.style.display = 'none';
            }
            else{
                this.errNamePattern.style.display = 'flex';
                validate = false;
            }
        }

        if(name == "Username" || name == "submit"){
            const emailExp = new RegExp("[a-zA-Z0-9]*@(gmail.)?latech.edu");
            if(emailExp.test(this.state.Username)){
                this.errEmailPattern.style.display = 'none';
            }
            else{
                this.errEmailPattern.style.display = 'flex';
                validate = false;
            }
        }

        if(name == "Password" || name == "submit"){
            const passExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
            if(!passExp.test(this.state.Password)){
                this.errPassPattern.style.display = 'flex';
                validate = false;
            }
            else{
                this.errPassPattern.style.display = 'none';
                
            }
        }

        if(name == "ConfirmPassword" || name == "submit"){
            if (this.state.ConfirmPassword != this.state.Password){
                this.errPassMatch.style.display = 'flex';
                validate = false;
            }else{
                this.errPassMatch.style.display = 'none';
            }
        }

        if(name == "Conduct" || name == "submit"){
            if(!this.state.Conduct){
                this.errConductCheck.style.display = 'flex';
                validate = false;
            } else {
                this.errConductCheck.style.display = 'none';
            }
        }

        return validate
    }


    render()
    {
        return(
            <RegisterInput ref={this.form} id="registerInputs" onSubmit={this.handleSubmit}>
                
                <SuccessBox id="successMessage">Your account was registered. Check your email to validate your account.</SuccessBox>
                <ErrorBox id="register">There was a problem registering your account</ErrorBox>
                <ErrorBox id="namePattern">Please enter your first and last name</ErrorBox>
                <InputLine>
                    <InputBox type="text" 
                    name="FirstName" 
                    placeholder="First Name" 
                    value={this.state.first} 
                    onChange={this.handleChange} 
                    />

                    <InputBox type="text" 
                    name="LastName" 
                    placeholder="Last Name" 
                    value={this.state.last} 
                    onChange={this.handleChange} 
                    />
                </InputLine>
                
                <ErrorBox id="emailPattern">Email must be a valid @latech.edu address</ErrorBox>
                <InputLine>
                    <InputBox type="email" 
                    name="Username" 
                    placeholder="email@latech.edu" 
                    value={this.state.username} 
                    onChange={this.handleChange} 
                    />
                </InputLine>
                
                <ErrorBox id="passPattern">Your password must contain a capital letter, a lower-case letter, a number, and a special character</ErrorBox>
                <InputLine>
                    <InputBox type="password" 
                    name="Password" 
                    placeholder="Password" 
                    value={this.state.Password} 
                    onChange={this.handleChange} 
                    />
                </InputLine>
                
                <ErrorBox id="passMatch">Password does not match</ErrorBox>
                <InputLine>
                    <InputBox type="password" 
                    name="ConfirmPassword" 
                    placeholder="Confirm Password" 
                    value={this.state.ConfirmPassword} 
                    onChange={this.handleChange} 
                    />
                </InputLine>
                
                <ErrorBox id="conductCheck">Code of Conduct must be accepted.</ErrorBox>
                <InputLine>
                    <input type="checkbox" 
                    name="Conduct" 
                    value={this.state.Conduct} 
                    onChange={this.handleChange} 
                    ></input>
                    <div>I agree to abide by the Louisiana Tech Student Code of Conduct found in the <a href= "https://www.latech.edu/documents/2018/09/student-handbook.pdf/" target = "_blank">student handbook</a>.</div>
                </InputLine>

                <Button type="submit" value="Submit" content="Register" />
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
