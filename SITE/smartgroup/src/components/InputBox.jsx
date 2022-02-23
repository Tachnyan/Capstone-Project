import styled from "styled-components";

export default function InputBox({type, placeholder}){
    return <StyledInputBox type = {type} placeholder = {placeholder} />;
}

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
        color: rgba(0, 0, 0, 0.5);
        font-style: italic;
    }
`;