import styled from "styled-components";
import { Link } from 'react-router-dom'
import axios from "axios";

export default class SocialButton extends React.Component
{
    constructor(props)
    {
        super(props)
        this.url = props.route;
        this.content = props.content;
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick()
    {
        axios.get(this.url, {timeout:5000})
        .then((val) => {

        }).catch((err) => {
            console.log(err);
        })
    }

    render()
    {
        return(
            <StyledButton onClick={this.handleClick}>{this.content}</StyledButton>
        )
    }   
}

const StyledButton = styled.button`
    position: relative;
    background: rgba(0, 0, 0, 0.35);
    width: 50%;
    max-width: 55%;
    height: 100%;
    padding: 0px;
    margin: 2vh;
    border: solid;
    border-width: 2px;
    outline: none;
    border-radius: 2rem;
    transition: 0.15s ease-in-out;
    font-size: 2vh;
    :hover{
        background: rgba(0, 0, 0, 0.75);
        transform: translateY(-2px);
        box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.55);
        transition: box-shadow 0.15s ease-in-out;
    }
    :active{
        transform: translateY(2px)
    }
`;
