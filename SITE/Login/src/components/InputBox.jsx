import styled from "styled-components";

export default function InputBox({type, placeholder}){
    return <StyledInputBox type = {type} placeholder = {placeholder} />;
}

const StyledInputBox = styled.input`
    position: relative;
    background: rgba(255, 255, 255, 0.30);
    border-radius: 2rem;
    width: 80%;
    height: 10%;
    padding: 2vh;
    margin: 1vh;
    border: none;
    outline: none;
    color: white;
    text-align: center;
    font-size: 2.5vh;
    transition: 0.15s ease-in-out;
    :hover{
        transform: translateY(-2px);
        box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.55);
        transition: box-shadow 0.15s ease-in-out;
    }
    &:focus{
        transform: translateY(-2px);
        box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.55);
    }
    &::placeholder{
        color: rgba(255, 255, 255, 0.5);
        font-style: italic;
    }
`;