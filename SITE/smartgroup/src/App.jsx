import styled from "styled-components";
import InputBox from "./components/InputBox";
import Button from "./components/Button"

function App() {
    return(
    <MainInputBox>
        <TitleBox>login</TitleBox>
        <InputBox type = "text" placeholder="email"/>
        <InputBox type = "password" placeholder = "password"/>
        <Button content = "login"/>
    </MainInputBox>
    )
}

const MainInputBox = styled.div`
    position: relative;
    color: white;
    display: flex;
    align-items: center;
    flex-direction column;
    height: 60vh;
    width: 40vw;
    max-width: 400px;
    background: rgba(0, 0, 0, 0.55);
    border-radius: 1rem;
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(5px);
`;

const TitleBox = styled.div`
    position: relative;
    height: 15%;
    margin: 4vh;
    font-size: 5vh;
    /*below lines make text not selectable*/
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
`;


export default App;
