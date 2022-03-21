import {Routes, Route} from 'react-router-dom'
import { Dashboard } from './pages/Dashboard.jsx'
import { StudyGroupsList } from './pages/StudyGroupsList'
import { CreateRoom } from './pages/CreateRoom'
import { ProfilePage } from './pages/ProfilePage.jsx'
import { StudyRoom } from './pages/StudyRoom.jsx'

import Nav from './components/Nav'
import GlobalCSS from './GlobalStyles.css.js'


function App() {
  return (
    <div className="App">
      <GlobalCSS></GlobalCSS>
      <Nav></Nav>

      <body className='App-body'>
        <Routes>
          <Route path="/app" element={<Dashboard/>}/>
          <Route path="/app/Profile" element={<ProfilePage/>}/>
          <Route path="/app/StudyGroupsList" element={<StudyGroupsList/>}/>
          <Route path="/app/CreateRoom" element={<CreateRoom/>}/>
          <Route path="/app/StudyRoom" element={<StudyRoom/>}/>
        </Routes>
      </body>
    </div>
  );
}

export default App;
