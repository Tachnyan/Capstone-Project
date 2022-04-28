import RowElement from '../components/RowElement'
import './StudyGroupsList.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export function StudyGroupsList(props) {
  //build array of rows for study groups table
  //fill each row with data for each study group
  var StudygroupsListRows = []
  props.studygroupsList.forEach(group => StudygroupsListRows.push(<RowElement id = {group.Studygroup_id} course = '!' location = {group.Studygroup_Location} material= {group.Studygroup_Material} numpeople = '3' timeframe = {group.Studygroup_Start.slice(11, 16).concat('-', group.Studygroup_End.slice(11, 16))} />))
  
  function join()
  {
    // Attempts to add user to the chat room first before adding to the database
    // group.Studygroup_id in the post link needs to be the group id of the clicked on row
    // username: this.user I think needs to be the username of the person currently logged in, see below
    axios.post(`https://api.chatengine.io/chats/${group.Studygroup_id}/people/`, {username: this.user}, {headers: {
        "Public-Key": process.env.CHAT_ID,
        // Okay I think things are going to get weird
        // I'm pretty sure this user and secret has to be the user and secret of the chat admin, not whoever's logged in
        "User-Name": adminUsername,
        "User-Secret": adminSecret
    }})
    .then((response) => {
        //callback && callback(response.data);
        if(response.status == 201)
        {
            // Now we actually do the api route to add the user to the database
            // this.state needs to be swapped out
            axios.post(`${process.env.AUTH_URL}/data/studygroup/join`, this.state, {timeout:2000})
            .then((response) => {
                console.log(response.status)
                if(response.status == 200){
                    console.log("Chatroom joined");
            }})
            .catch((err) => {
                console.log(err);
            })
        }
    })
    .catch((err) => {
        console.log(err);
    })
  }

  return (
    <div className="studygroupslist">
      <header>
        <h1>
          Current Study Groups &emsp;&emsp;&emsp;&emsp;&emsp;
          <Link to="/"><button>Back to Menu</button></Link>
          <Link to="/CreateRoom"><button>Create Group</button></Link>
          <Link to="/StudyRoom"><button>Join Group</button></Link>
        </h1>
      </header>
      <div class="TableOverflow">
        <table class="groupstable">
          <thead>
            <RowElement />
          </thead>
          <tbody>
            {StudygroupsListRows}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const studygroupslist = styled.div`
  color:'white'; 
  backgroundColor: 'gray'; 
  font-family: 'Arvo', serif;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('../iesb2.jpg');
  background-position: center;
  /*display: flex;*/
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  overflow-y:scroll;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

const groupstable = styled.table`
  width: 100vh
  &: tr:nth-child(odd) { background-color : #D0EFFF; }
  &: tr:nth-child(even) { background-color : #2A9DF4; }
  &: tr:hover { background-color : #1167B1; }

`

export default StudyGroupsList;
