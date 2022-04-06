import styled from "styled-components";
import { Link } from 'react-router-dom'


export default function IgnoreUser({content}){
    return (
        <Submission>
            <InputLine type="text" id="username" placeholder="Enter email"></InputLine>
            <Button type="submit">Ignore User</Button>
        </Submission>
    )
}

const Submission = styled.form`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`

const InputLine = styled.input`
    width: 60%;
`

const Button = styled.button`
    position: relative;
    width: 25%;
    height: 2rem;
    padding: 0px;
    margin: 2vh;
    transition: 0.15s ease-in-out;
    font-size: 0.75rem;
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
`