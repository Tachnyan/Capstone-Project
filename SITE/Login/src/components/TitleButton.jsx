import styled from "styled-components";

export default function TitleButton({content, onClick, style, id}){
    return <StyledTitleButton id = {id}onClick = {onClick} style = {style}>{content}</StyledTitleButton>
}


const StyledTitleButton = styled.button`
    position: relative;
    background: none;
    width: 50%;
    height:60%;
    padding: 0px;
    margin: 2%;
    border: none;
    font-size: 150%;
    color: white;
`;