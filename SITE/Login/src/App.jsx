import styled from "styled-components";
import InputBox from "./components/InputBox";
import Button from "./components/Button"
import LoginTitleButton from "./components/LoginTitleButton";
import RegisterTitleButton from "./components/RegisterTitleButton";
import RegisterForm from "./components/RegisterForm"
import LoginForm from "./components/LoginForm"
import { Component } from 'react'
import { render } from "react-dom";

class App extends Component {
    constructor(props) {
        super(props);

        this.screenType = "login";
        this.swapToLogin = this.swapToLogin.bind(this);
        this.swapToRegister = this.swapToRegister.bind(this);
    }

    //function for swapping input form from registration to login
    swapToLogin() {
        if (this.screenType == "register") {
            this.screenType = "login";
            var login = document.getElementById("loginInputs");
            var register = document.getElementById("registerInputs");
            var loginTitleButton = document.getElementById("loginTitleButton");
            var registerTitleButton = document.getElementById("registerTitleButton");
            var submitButton = document.getElementById("submitButton");
            login.style.display = "flex";
            register.style.display = "none";
            loginTitleButton.style.color = "white";
            registerTitleButton.style.color = "grey";
            //submitButton.textContent = "login";
        }
    }

    //function for swapping input form from login to registration
    swapToRegister() {
        if (this.screenType == "login") { 
            this.screenType = "register";
            var login = document.getElementById("loginInputs");
            var register = document.getElementById("registerInputs");
            var loginTitleButton = document.getElementById("loginTitleButton");
            var registerTitleButton = document.getElementById("registerTitleButton");
            var submitButton = document.getElementById("submitButton");
            loginTitleButton.style.color = "grey";
            register.style.display = "flex";
            registerTitleButton.style.color = "white";
            //submitButton.textContent = "register";
            login.style.display = "none";
        }
    }

    render() {
        return (
            //Main input Box containing Title (login/register buttons), input form, and submit button
            <MainInputBox>

                {/* Title (login/register buttons)*/}
                <InputTitleBox>
                    <LoginTitleButton id="loginTitleButton" onClick={this.swapToLogin} content="login" />
                    <RegisterTitleButton id="registerTitleButton" onClick={this.swapToRegister} content="register" />
                </InputTitleBox>

                {/* Login input form (shown by default) */}
                <LoginForm id="loginInputs">
                    {/* <InputLine>
                <InputBox type = "text" placeholder = "email"/>
            </InputLine>
            <InputLine>
                <InputBox type = "password" placeholder = "password"/>
            </InputLine>
            <Button id = "submitButton" onClick={btnContext} content = "login"/> */}
                </LoginForm>

                {/* Register input form */}
                <RegisterForm>
                    {/* <InputLine>
                <InputBox style = {{width: "38%"}} type = "text" placeholder="first name"/>
                <InputBox style = {{width: "38%"}} type = "text" placeholder="last name"/>
            </InputLine>
            <InputLine>
                <InputBox type = "text" placeholder="email"/>
            </InputLine>
            <InputLine>
                <InputBox type="text" placeholder="student ID"/>
            </InputLine>
            <InputLine>
            <InputBox type = "password" placeholder = "password"/>
            </InputLine>
            <InputLine>
            <InputBox type = "password" placeholder = "confirm password"/>
            </InputLine>
            <Button type="button" id = "submitButton" content = "register"/> */}
                </RegisterForm>

                {/* login / register submit button */}

            </MainInputBox>
        )
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


const MainInputBox = styled.div`
    position: relative;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 450px;
    max-width: 400px;
    max-height: 500px;
    background: rgba(0, 0, 0, 0.50);
    border-radius: 1rem;
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(10px);
    @media only screen and (max-width: 600px){
        width: 85vw;
    }
    @media only screen and (orientation:landscape){
        width: 60vw;
        height: 90vh;
    }
}
`;

const InputTitleBox = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height: 10%;
    width: 100%;
    margin: 10%;
    font-size: 200%;
    /*below lines make text not selectable*/
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
`;


export default App;
