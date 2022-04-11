import styled from "styled-components";
import { Link } from 'react-router-dom';
import axios from "axios";


export default class AddFriend extends React.Component{

    constructor(props){
        super(props);
        this.friendUsername = document.getElementById("username");
        this.success = document.getElementById("succeed");
        this.failure = document.getElementById("failed");
    }

    componentDidMount()
    {
       this.friendUsername = document.getElementById("username");
       this.success = document.getElementById("succeed");
       this.failure = document.getElementById("failed");
    }

    handleSubmit(event)
    {
        event.preventDefault();
        console.log(event);
        console.log(config);
        if(this.state.first != "" || this.state.last != "")

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
                <InputLine type="text" id="username" placeholder="Enter email"></InputLine>
                <Button type="submit" >Add friend</Button>
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


const ErrorBox = styled.div`
color:red;
display:none;
`

const SuccessBox = styled.div`
color:green;
display:none;
`