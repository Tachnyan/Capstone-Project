import styled from "styled-components";

export default function Button({content}){
    return <StyledButton>{content}</StyledButton>
}


const StyledButton = styled.button`
    background: rgba(255, 255, 255, 0.7);
    width: 10rem;
    height: 10%;
    padding: 1rem;
    margin: 1rem;
    border: none;
    outline: none;
    border-radius: 2rem;
    transition: 0.15s ease-in-out;
    :hover{
        transform: translateY(-2px);
        box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.55);
        transition: box-shadow 0.15s ease-in-out;
    }
    :active{
        transform: translateY(2px)
    }
`;