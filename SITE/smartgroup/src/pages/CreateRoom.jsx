import React, { useEffect }  from 'react';
import styled from "styled-components";
import InputBox from "../components/InputBox";
import CancelButton from "../components/CancelButton";
import CreateButton from "../components/CreateButton";
import Button from "../components/Button";
import axios from 'axios';

const MainColumn = styled.form`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction column;
    height: 70vh;
    width: 60vw;
    max-width: 1000px;
    outline: solid;
    color: white;
    background: rgba(0, 0, 0, 0.50);
    border-radius: 1rem;
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.55);
`;

const MainRow = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction row;
    height: 13vh;
    width: 50vw;
    max-width: 1000px;
`;

const TitleBox = styled.div`
    position: relative;
    height: 15%;
    margin: 2vh;
    font-size: 2.5vh;
    white-space: nowrap;
    -webkit-user-select: none;    
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const CheckBox = styled.input`
    position: relative;
    color: white;
    background: rgba(0,0,0,0.25);
    border-radius: 2rem;
    width: 20%;
    height: 20%;
    padding: 2vh;
    margin: 1vh;
`;

const StyledInputBox = styled.input`
    position: relative;
    color: white;
    background: rgba(0,0,0,0.25);
    border-radius: 2rem;
    width: 80%;
    height: 10%;
    padding: 2vh;
    margin: 1vh;
    border: none;
    outline: none;
    text-align: center;
    font-size: 3vh;
    ::placeholder{
        color: rgba(0, 0, 0, 0.8);
        font-style: italic;
    }
`;

export default class CreateRoom extends React.Component
{
    constructor(props)
    {
        super(props);
        this.user = props.user;
        this.secret = props.secret;
        this.state = {
            roomID: "",
            course: "",
            roomLocation: "",
            roomDescription: "",
            numberofPeople: "",
            startTime: "",
            endTime: "",
            timeframe: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.checkbox = document.getElementById("private");
        this.passwordBox = document.getElementById("password");
    }


    componentDidMount()
    {
       this.checkbox = document.getElementById("private");
       this.passwordBox = document.getElementById("password");
    }

    handleChange(event){
        let name = event.target.name;
        this.setState({
            [name]:event.target.value
        })
        if(this.checkbox.checked == true){
            this.passwordBox.disabled = false;
        }
        else{
            this.passwordBox.disabled = true;
            this.passwordBox.value = '';
        }
    }

    handleSubmit(event){
        event.preventDefault();
        console.log("HELLO")
        console.log(event);
        console.log(this.state);
        //This is the part where the room will be made with chatengine first
        //The id will be obtained from the json and put into the id field
        axios.post('https://api.chatengine.io/chats/', {title: this.state.roomDescription}, {headers: {
            "Public-Key": process.env.CHAT_ID,
            //This needs to be the current user's username and password.
            //Could I use the same route for chatLogin maybe?
            //Do I even need to use the route, or are these things already made?
            "User-Name": this.user,
            "User-Secret": this.secret
        }})
        .then((response) => {
            callback && callback(response.data);
            if(response.status == 200)
            {
                this.state.roomID = response.body.id;
                console.log(this.state.roomID);
                
                
            }
            //Get id from the response
            //Actually use the route to send the id and all other stuff to the database
            /*axios.post(`${process.env.AUTH_URL}/data/createroom`, this.state, {timeout:2000})
            .then((val) => {
                if(val.status.statuscode == 200){
                    console.log("Chatroom created");
                }
            })
            .catch((err) => {
                console.log("error");
            })*/
        })
        .catch((err) => {
            console.log(err);
        })
    };

    // Need help down here
    // Idk what's happening
    render(){
        return(
            <MainColumn onSubmit={this.handleSubmit}>
                <MainRow><TitleBox id="course">Course:</TitleBox><InputBox type = "text" placeholder="e.g. CSC-405-002" value={this.state.course} onChange={this.handleChange}/></MainRow>
                <MainRow><TitleBox id="roomDescription">Description/Study Goals:</TitleBox><InputBox type = "text" placeholder="e.g. Homework/Upcoming Midterm" value={this.state.roomDescription} onChange={this.handleChange}/></MainRow>
                <MainRow><TitleBox id="startTime">Start Time:</TitleBox><InputBox name="field3" type = "text" placeholder="e.g. 1:00 pm" value={this.state.startTime} onChange={this.handleChange}/><TitleBox id="endTime">End Time:</TitleBox><InputBox type = "text" placeholder="e.g. 2:00 pm"value={this.state.endTime} onChange={this.handleChange}/></MainRow>
                <MainRow><TitleBox id="roomLocation">Study Room:</TitleBox><InputBox type = "text" placeholder="e.g. IESB 216" value={this.state.roomLocation} onChange={this.handleChange}/></MainRow>
                
                <MainRow style={{justifyContent:'center'}}><CancelButton content = "Cancel"/><Button type="submit" value="Submit" content="Create Room"  onSubmit={this.handleSubmit}/></MainRow>
            </MainColumn>
        );
    }

}
