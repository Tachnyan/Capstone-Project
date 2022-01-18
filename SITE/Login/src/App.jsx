import styled from "styled-components";
import InputBox from "./components/InputBox";
import Button from "./components/Button"
import TitleButton from "./components/TitleButton";

function App() {
    var screenType = "login";
    function swapToLogin(){
        if(screenType == "register"){
            screenType = "login";
            var login = document.getElementById("loginInputs");
            var register = document.getElementById("registerInputs");
            var loginTitleButton = document.getElementById("loginTitleButton");
            var registerTitleButton = document.getElementById("registerTitleButton");
            var submitButton = document.getElementById("submitButton");
            login.style.display = "flex";
            register.style.display = "none";
            loginTitleButton.style.color = "white";
            registerTitleButton.style.color = "grey";
            submitButton.textContent = "login";
        }
    }

    function swapToRegister(){
        if(screenType == "login"){
            screenType = "register";
            var login = document.getElementById("loginInputs");
            var register = document.getElementById("registerInputs");
            var loginTitleButton = document.getElementById("loginTitleButton");
            var registerTitleButton = document.getElementById("registerTitleButton");
            var submitButton = document.getElementById("submitButton");
            login.style.display = "none";
            register.style.display = "flex";
            loginTitleButton.style.color = "grey";
            registerTitleButton.style.color = "white";
            submitButton.textContent = "register";
        }
    }
    
    return(
    <MainInputBox>

        <TitleBox>
            <TitleButton id = "loginTitleButton" onClick = {swapToLogin} content = "login"/>
            <TitleButton style = {{color: "grey"}} id = "registerTitleButton" onClick = {swapToRegister} content = "register"/>
        </TitleBox>

        <Inputs id = "loginInputs">
            <InputLine>
                <InputBox type = "text" placeholder = "email"/>
            </InputLine>
            <InputLine>
                <InputBox type = "text" placeholder = "password"/>
            </InputLine>
        </Inputs>

        <RegisterInputs id = "registerInputs">
            <InputLine>
                <InputBox type = "text" placeholder="first name"/>
                <InputBox type = "text" placeholder="last name"/>
            </InputLine>
            <InputLine>
                <InputBox type = "text" placeholder="email"/>
            </InputLine>
            <InputLine>
            <InputBox type = "password" placeholder = "password"/>
            </InputLine>
            <InputLine>
            <InputBox type = "confirm password" placeholder = "confirm password"/>
            </InputLine>
        </RegisterInputs>

        
        <Button id = "submitButton" content = "login"/>
    </MainInputBox>
    )
}

const InputLine = styled.div`
    margin-top: 5%;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 15%;
`;


const Inputs = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 10%;
    width: 100%;
    height: 50%;
`;

const RegisterInputs = styled.div`
    position: relative;
    display: none;
    align-items: center;
    flex-direction: column;
    margin-top: 10%;
    width: 100%;
    height: 50%;

`;

const MainInputBox = styled.div`
    position: relative;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 600px;
    width: 400px;
    background: rgba(0, 0, 0, 0.55);
    border-radius: 1rem;
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(5px);
`;

const TitleBox = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height: 15%;
    width: 100%;
    margin: 10%;
    font-size: 200%;
    /*below lines make text not selectable
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
`;


export default App;
