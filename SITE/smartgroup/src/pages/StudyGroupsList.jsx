import RowElement from '../components/RowElement'
import './StudyGroupsList.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export function StudyGroupsList(props) {
  //build array of rows for study groups table
  //fill each row with data for each study group
  this.user = props.user;
  var StudygroupsListRows = []
  props.studygroupsList.forEach(group => StudygroupsListRows.push(<RowElement id = {group.Studygroup_ID} course = {group.Course_Subject.concat(" ", group.Course_Number, " ", group.Course_Section)} location = {group.Studygroup_Location} material= {group.Studygroup_Material} numpeople = {group.Student_Count} timeframe = {group.Studygroup_Start.slice(11, 16).concat('-', group.Studygroup_End.slice(11, 16))} user = {props.user} />))

  return (
    <div className="studygroupslist">
      <header>
        <h1>
          Current Study Groups &emsp;&emsp;&emsp;&emsp;&emsp;
          <Link to="/app"><button>Back to Menu</button></Link>
          <Link to="/app/CreateRoom"><button>Create Group</button></Link>
          <button>Join Group</button>
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

function join()
{
  //This function is for the onclick for the entries
  //Idk if I'm gonna do a state here
  //Just need the user and the chat id to join a room
  axios.post(`${process.env.AUTH_URL}/data/joinstudygroup`, this.state, {timeout:2000})
  .then((response) => {
    console.log(response.status)
    if(response.status == 200){
        console.log("Chatroom joined");
  }})
  .catch((err) => {
    console.log(err);
  })
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
