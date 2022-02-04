import Header from './components/Header'

function App() {

  const name = 'Brad'
	
  return (
    <div className="container" style={{backgroundColor: 'gray'}}>
	  <button>Back to Menu</button>
	  <button>Create Group</button>
	  <button>Join Group</button>
    <Header title='CurrentStudy Groups'/>
    <table>
      <thead>
        <tr>
          <th>Course</th>
          <th>Location</th>
          <th>Studying</th>
          <th># People</th>
          <th>Timeframe</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>CSC 130</th>
          <th>IESB 216</th>
          <th>Program 1</th>
          <th>3</th>
          <th>2pm-4pm</th>
        </tr>
        <tr>
          <th>CSC 131</th>
          <th>Zoom</th>
          <th>HW 2</th>
          <th>2</th>
          <th>5pm-6pm</th>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default App;
