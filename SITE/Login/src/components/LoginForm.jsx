import InputBox from "./InputBox";
import Button from "./Button";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import { config } from "../config"
import { render } from "react-dom";

export default class LoginForm extends React.Component 
{
    constructor(props) 
    {
        super(props)
        this.state = {
            username: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) 
    {
        let name = event.target.name;
        this.setState({
            [name]:event.target.value
        });
    }

    handleSubmit(event) 
    {
        event.preventDefault()
        
        axios.post(config.login, this.state, {timeout:2000})
        .then((val) => {
            if(val.status == 200){
                console.log("success")
            }
            window.location.href = config.landing
        }).catch((err) =>{
            console.log(err)
        })
    }

    render() 
    {
        return (
            <LoginInputs id="loginInputs" onSubmit={this.handleSubmit}>
                <InputLine>
                    <InputBox type="text" name="username" placeholder="email" value={this.state.username} onChange={this.handleChange} />
                </InputLine>
                <InputLine>
                    <InputBox type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                </InputLine>
                <Button id="submitButton" value="Submit" content="login" />
            </LoginInputs>
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


const LoginInputs = styled.form`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 5%;
    width: 100%;
    height: 50%;
    animation: fadeIn 1s;
    @keyframes fadeIn{
        0%{opacity: 0;}
        100%{opacity:1;}
    }

`;

