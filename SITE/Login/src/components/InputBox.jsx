import styled from "styled-components";

export default function InputBox({type, placeholder, style, name, onChange, pattern}){
    return <StyledInputBox style={style} type={type} pattern={pattern} name={name} placeholder={placeholder} onChange={onChange} />;
}

const StyledInputBox = styled.input`
    position: relative;
    background: rgba(255, 255, 255, 0.30);
    border-radius: 1rem;
    width: 80%;
    height: 100%;
    border: none;
    outline: none;
    margin: 2%;
    color: white;
    text-align: center;
    font-size: 140%;
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
