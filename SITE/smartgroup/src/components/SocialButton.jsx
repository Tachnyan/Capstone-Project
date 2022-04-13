import styled from "styled-components";
import { Link } from 'react-router-dom'

export default function SocialButton({route},{content}){
    return <Link to={route}><StyledButton>{content}</StyledButton></Link>
}

const StyledButton = styled.button`
    position: relative;
    background: green;
    width: 10%;
    height: 20%;
    padding: 0px;
    margin: 2vh;
    border: none;
    outline: none;
    border-radius: 2rem;
    transition: 0.15s ease-in-out;
    font-size: 2vh;
    :hover{
        background: green;
        transform: translateY(-2px);
        box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.55);
        transition: box-shadow 0.15s ease-in-out;
    }
    :active{
        transform: translateY(2px)
    }
`;
