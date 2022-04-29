import styled from "styled-components";
import { Link } from 'react-router-dom';
import axios from "axios";


export default class AddCourse extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            courseID: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.course = document.getElementById("courseID");
        this.success = document.getElementById("succeed");
        this.failure = document.getElementById("failed");
    }

    componentDidMount()
    {

       this.course = document.getElementById("courseID");
       this.success = document.getElementById("succeed");
       this.failure = document.getElementById("failed");
    }

    handleChange(event)
    {
        let name = event.target.name;
        this.setState({
            [name]:event.target.value
        });
    }

    handleSubmit(event)
    {
        event.preventDefault();
        console.log(event);
        if(this.state.course != "")

        axios.post(`${process.env.AUTH_URL}/data/addcourse`, this.state, {timeout:2000})
        .then((val) => {
            if(val.status == 200){
                console.log("Course Added");
                this.success.style.display = 'block';
                this.failure.style.display = 'none';
            }
        }).catch((err) => {
            console.log(err);   
            this.success.style.display = 'none';
            this.failure.style.display = 'block';
        })
    }

    render(){
        return (
            <Submission id="addcourse" onSubmit={this.handleSubmit}>
                
                <InputLine name="courseID" type="text" id="courseID" placeholder="Enter Course ID" onChange={this.handleChange}></InputLine>
                <Button type="submit" value="Submit" >Add Course</Button>
                <SuccessBox id="succeed">Course added!</SuccessBox>
                <ErrorBox id="failed">Error adding course! Make sure you are entering the correct ID</ErrorBox>
            </Submission>
        )
    }
}

const Submission = styled.form`
    position: relative;
    display: block;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`

const InputLine = styled.input`
    position: relative;
    background: rgba(255, 255, 255, 0.30);
    border-radius: 1rem;
    max-width: 80%;
    max-height: 25%;
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