import styled from "styled-components";

export default function RegisterTitleButton({content, onClick, style, id}){
    return <StyledTitleButton id = {id}onClick = {onClick} style = {style}>{content}</StyledTitleButton>
}


const StyledTitleButton = styled.button`
   -webkit-tap-highlight-color: transparent;
    position: relative;
    background: none;
    width: 55%;
    height: 5rem;
    padding: 0px;
    margin: 1%;
    border: none;
    font-size: 150%;
    color: grey;
    transition: 0.3s;
    :hover{
      color: white !important;
    }
`;
