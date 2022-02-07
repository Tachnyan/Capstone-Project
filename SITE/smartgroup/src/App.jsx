import {Routes, Route} from 'react-router-dom'
import { Dashboard } from './pages/Dashboard.jsx'
import { StudyGroupsList } from './pages/StudyGroupsList'
import { CreateRoom } from './pages/CreateRoom'
import { Nav } from './components/Nav'
import GlobalCSS from './GlobalStyles.css.js'

function App() {
  return (
    <div className="App">
      <GlobalCSS></GlobalCSS>
      <Nav></Nav>

      <body className='App-body'>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/StudyGroupsList" element={<StudyGroupsList/>}/>
          <Route path="/CreateRoom" element={<CreateRoom/>}/>
        </Routes>
      </body>
    </div>
  );
}

export default App;
