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
          <th scope="col">#</th>
          <th scope="col">Course</th>
          <th scope="col">Location</th>
          <th scope="col">Studying</th>
          <th scope="col"># People</th>
          <th scope="col">Timeframe</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <th>CSC 130</th>
          <th>IESB 216</th>
          <th>Program 1</th>
          <th>3</th>
          <th>2pm-4pm</th>
        </tr>
        <tr>
          <th scope="row">2</th>
          <th>CSC 131</th>
          <th>Zoom</th>
          <th>HW 2</th>
          <th>2</th>
          <th>5pm-6pm</th>
        </tr>
        <tr>
          <th scope="row">3</th>
          <th>Math 240</th>
          <th>IESB 114</th>
          <th>Test 3</th>
          <th>5</th>
          <th>4pm-6pm</th>
        </tr>
        <tr>
          <th scope="row">4</th>
          <th>PHYS 202</th>
          <th>Tolliver</th>
          <th>HW 3</th>
          <th>1</th>
          <th>11am-1pm</th>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default App;
