import styled from "styled-components";

export default function Button({content, id, onClick}){
    return <StyledButton id = {id} onClick={onClick}>{content}</StyledButton>
}


const StyledButton = styled.button`
    position: relative;
    background: rgba(255, 255, 255, 0.7);
    width: 25%;
    height: 2rem;
    padding: 0px;
    margin: 2vh;
    border: none;
    outline: none;
    border-radius: 2rem;
    transition: 0.15s ease-in-out;
    font-size: 1.15rem;
    color: black;
    :hover{
        transform: translateY(-2px);
        box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.55);
        transition: box-shadow 0.15s ease-in-out;
    }
    :active{
        transform: translateY(2px);
        transition: transform 0.15s;
        box-shadow: none;

    }
`;