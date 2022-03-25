import axios from 'axios'
import {Routes, Route} from 'react-router-dom'
import { Dashboard } from './pages/Dashboard.jsx'
import { StudyGroupsList } from './pages/StudyGroupsList'
import { CreateRoom } from './pages/CreateRoom'
import { ProfilePage } from './pages/ProfilePage.jsx'
import { StudyRoom } from './pages/StudyRoom.jsx'
import { Nav } from './components/Nav'
import GlobalCSS from './GlobalStyles.css.js'

function App() {
  //get profile data from Main API and set to postProfile const
  const [postProfile, setPostProfile] = React.useState([]);
  React.useEffect(() => {
    axios.get('http://127.0.0.1:3009/profile').then((response) => {
      setPostProfile(response.data);
    });
  }, []);

  //get  friends list from Main API and set to postFriends const
  const [postFriends, setPostFriends] = React.useState([]);
  React.useEffect(() => {
    axios.get('http://127.0.0.1:3009/friends').then((response) => {
      setPostFriends(response.data);
    });
  }, []);

  //get  classmate list from Main API and set to postClassmates const
  const [postClassmates, setPostClassmates] = React.useState([]);
  React.useEffect(() => {
    axios.get('http://127.0.0.1:3009/classmates').then((response) => {
      setPostClassmates(response.data);
    });
  }, []);

    //get  studygroups list from Main API and set to postStudygroups const
    const [postStudygroups, setPostStudygroups] = React.useState([]);
    React.useEffect(() => {
      axios.get('http://127.0.0.1:3009/studygroups').then((response) => {
        setPostStudygroups(response.data);
      });
    }, []);
    console.log(postStudygroups)


  return (
    <div className="App">
      <GlobalCSS></GlobalCSS>
      <Nav></Nav>

      <body className='App-body'>
        <Routes>
          <Route path="/app" element={<Dashboard friendsList = {postFriends} classmatesList = {postClassmates}/>}/>
          <Route path="/app/Profile" element={postProfile.map(student =>(<ProfilePage school = "Louisiana Tech University" firstName = {student.Student_First} lastName = {student.Student_Last}/>))}/>
          <Route path="/app/StudyGroupsList" element={<StudyGroupsList studygroupsList = {postStudygroups}/>}/>
          <Route path="/app/CreateRoom" element={<CreateRoom/>}/>
          <Route path="/app/StudyRoom" element={<StudyRoom/>}/>
        </Routes>
      </body>
    </div>
  );
}

export default App;
