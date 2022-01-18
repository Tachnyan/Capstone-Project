import styled from "styled-components";

export default function LoginTitleButton({content, onClick, id}){
    return <StyledTitleButton id = {id}onClick = {onClick}>{content}</StyledTitleButton>
}


const StyledTitleButton = styled.button`
    position: relative;
    background: none;
    width: 45%;
    height: 5rem;
    padding: 0px;
    margin: 1%;
    border: none;
    font-size: 150%;
    color: white;
    transition: 0.3s;
    :hover{
      color: white !important;
    }
`;
