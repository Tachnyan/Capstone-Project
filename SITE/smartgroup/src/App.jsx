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
    color: white;
    display: flex;
    align-items: center;
    flex-direction column;
    height: 60vh;
    width: 40vw;
    background: rgba(0, 0, 0, 0.55);
    border-radius: 1rem;
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(5px);
`;

const TitleBox = styled.div`
    margin: 10%;
    font-size: 2.5rem;
`;


export default App;
