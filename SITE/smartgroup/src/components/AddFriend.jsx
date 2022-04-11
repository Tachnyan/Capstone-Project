import styled from "styled-components";
import { Link } from 'react-router-dom';
import axios from "axios";


export default class AddFriend extends React.Component{

    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.username = document.getElementById("friendUsername");
        this.success = document.getElementById("succeed");
        this.failure = document.getElementById("failed");
    }

    componentDidMount()
    {

       this.username = document.getElementById("friendUsername");
       this.success = document.getElementById("succeed");
       this.failure = document.getElementById("failed");
    }

    handleSubmit(event)
    {
        event.preventDefault();
        console.log(event);
        console.log("Hello");
        if(this.state.username != "")

        axios.post(`${process.env.AUTH_URL}/data/addfriend`, this.state, {timeout:2000})
        .then((val) => {
            if(val.status == 200){
                console.log("Friend request sent");
                this.success.style.display = 'flex';
                this.failure.style.display = 'none';
            }
        }).catch((err) => {
            console.log(err);   
            this.success.style.display = 'none';
            this.failure.style.display = 'flex';
        })
    }

    render(){
        return (
            <Submission id="addfriend" onSubmit={this.handleSubmit}>
                <SuccessBox id="succeed">Friend request sent!</SuccessBox>
                <ErrorBox id="failed">Error sending request!</ErrorBox>
                <InputLine type="text" id="friendUsername" placeholder="Enter email"></InputLine>
                <Button type="submit" value="Submit" >Add friend</Button>
            </Submission>
        )
    }
}

const Submission = styled.form`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`

const InputLine = styled.input`
    position: relative;
    background: rgba(255, 255, 255, 0.30);
    border-radius: 1rem;
    width: 80%;
    height: 25%;
    border: none;
    outline: none;
    margin: 2%;
    color: white;
    text-align: center;
    font-size: 60%;
    transition: 0.15s ease-in-out;
    :hover{
        transform: translateY(-2px);
        box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.55);
        transition: box-shadow 0.15s ease-in-out;
    }
    &:focus{
        transform: translateY(-2px);
        box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.55);
    }
    &::placeholder{
        color: rgba(255, 255, 255, 0.5);
        font-style: italic;
    }
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


const ErrorBox = styled.div`
color:red;
display:none;
`

const SuccessBox = styled.div`
color:green;
display:none;
`