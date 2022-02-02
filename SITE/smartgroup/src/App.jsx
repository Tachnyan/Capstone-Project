import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Nav } from './components/Nav'

function App() {
  return (
    <div className="App">
      
      <Nav></Nav>

      <body className='App-body'>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
      </body>

    </div>
  );
}

export default App;
