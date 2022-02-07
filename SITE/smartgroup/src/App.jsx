import { StudyGroupsList } from './pages/StudyGroupsList'
import {Routes, Route} from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
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
        </Routes>
      </body>

    </div>
  );
}

export default App;