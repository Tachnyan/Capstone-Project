import styled from "styled-components";

export default function InputBox({type, placeholder, style, name, onChange, pattern}){
    return <StyledInputBox style={style} type={type} pattern={pattern} name={name} placeholder={placeholder} onChange={onChange} />;
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
        color: rgba(0, 0, 0, 0.8);
        font-style: italic;
    }
    @media only screen and (orientation: portrait) {
        font-size: 2vh;
    }
    @-moz-document url-prefix(){
        font-size: 2vh;
    }
`;