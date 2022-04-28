import styled from "styled-components";

export default function Button({content, id, onClick}){
    return <StyledButton id = {id} onClick={onClick}>{content}</StyledButton>
}


const StyledButton = styled.button`
    position: relative;
    background: green;
    width: fit-content;
    height: 2rem;
    padding: 5px;
    margin: 2vh;
    border: none;
    outline: none;
    border-radius: 2rem;
    transition: 0.15s ease-in-out;
    font-size: 1.15rem;
    color: white;
    :hover{
        background: green;
        transform: translateY(-2px);
        box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.55);
        transition: box-shadow 0.15s ease-in-out;
    }
    :active{
        transform: translateY(2px);
        transition: transform 0.15s;
        box-shadow: none;

    }
    @media only screen and (orientation: portrait) {
        height: fit-content;
        font-size: 2rem;
    }
`;