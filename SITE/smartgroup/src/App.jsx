import axios from 'axios'
import {Routes, Route} from 'react-router-dom'
import { Dashboard } from './pages/Dashboard.jsx'
import StudyGroupsList from './pages/StudyGroupsList'
import CreateRoom  from './pages/CreateRoom'
import { ProfilePage } from './pages/ProfilePage.jsx'
import { StudyRoom } from './pages/StudyRoom.jsx'
import { Social } from './pages/Social.jsx'

//import { postChatInfo } from './singleton.js'
import Nav from './components/Nav'
import GlobalCSS from './GlobalStyles.css.js'


function App() {
  //get profile data from Main API and set to postProfile const
  const [postProfile, setPostProfile] = React.useState([]);
  React.useEffect(() => {
    axios.get(`${process.env.AUTH_URL}/data/profile`).then((response) => {
      setPostProfile(response.data);
    });
  }, []);

  //get  friends list from Main API and set to postFriends const
  const [postFriends, setPostFriends] = React.useState([]);
  React.useEffect(() => {
    axios.get(`${process.env.AUTH_URL}/data/friends`).then((response) => {
      setPostFriends(response.data);
    });
  }, []);

  //get  classmate list from Main API and set to postClassmates const
  const [postClassmates, setPostClassmates] = React.useState([]);
  React.useEffect(() => {
    axios.get(`${process.env.AUTH_URL}/data/classmates`).then((response) => {
      setPostClassmates(response.data);
    });
  }, []);
  

  //get  studygroups list from Main API and set to postStudygroups const
  const [postStudygroups, setPostStudygroups] = React.useState([]);
  React.useEffect(() => {
    axios.get(`${process.env.AUTH_URL}/data/studygroups`).then((response) => {
      setPostStudygroups(response.data);
    });
  }, []);

  //get  friendrequest list from Main API and set to postFriendRequest const
  const [postFriendRequest, setPostFriendRequest] = React.useState([]);
  React.useEffect(() => {
    axios.get(`${process.env.AUTH_URL}/data/friendrequests`).then((response) => {
      setPostFriendRequest(response.data);
    });
  }, []);


  //get list of ignored users from Main API and set to postIgnoredUsers const
  const [postIgnoredUsers, setPostIgnoredUsers] = React.useState([]);
  React.useEffect(() => {
    axios.get(`${process.env.AUTH_URL}/data/ignorelist`).then((response) => {
      setPostIgnoredUsers(response.data);
    });
  }, []);


  const [postChatInfo, setChatInfo] = React.useState([]);
  React.useEffect(() => {
    axios.get(`${process.env.AUTH_URL}/auth/chatLogin`, {timeout: 2000}).then((response) => {
      setChatInfo(response.data)
    });
  }, []);

   //get student's course list from Main API and set to postCourses const
   const [postCourses, setPostCourses] = React.useState([]);
   React.useEffect(() => {
     axios.get(`${process.env.AUTH_URL}/data/studentcourses`).then((response) => {
       setPostCourses(response.data);
     });
   }, []);

     //get recommended studygroups list from Main API and set to postRecStudygroups const
  const [postRecStudygroups, setPostRecStudygroups] = React.useState([]);
  React.useEffect(() => {
    axios.get(`${process.env.AUTH_URL}/data/recommendedstudygroups`).then((response) => {
      setPostRecStudygroups(response.data);
    });
  }, []);

  return (
    <div className="App">
      <GlobalCSS></GlobalCSS>
      <Nav></Nav>

      <div className='App-body'>
        <Routes>
          <Route path="/app" element={<Dashboard recStudygroups = {postRecStudygroups} friendsList = {postFriends} classmatesList = {postClassmates}/>}/>
          <Route path="/app/Profile" element={postProfile.map(student =>(<ProfilePage school = "Louisiana Tech University" firstName = {student.Student_First} lastName = {student.Student_Last} courseList = {postCourses}/>))}/>
          <Route path="/app/Social" element={<Social friendsList = {postFriends} ignoredList = {postIgnoredUsers} requestList = {postFriendRequest}/>}/>
          <Route path="/app/StudyGroupsList" element={<StudyGroupsList studygroupsList = {postStudygroups} user={postChatInfo.chatUser}/>}/>
          <Route path="/app/CreateRoom" element={<CreateRoom user={postChatInfo.chatUser}/>}/>
          <Route path="/app/StudyRoom" element={<StudyRoom user={postChatInfo.chatUser} secret={postChatInfo.chatSecret}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
