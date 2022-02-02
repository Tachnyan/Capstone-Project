import Header from './components/Header'

function App() {

  const name = 'Brad'
	
  return (
    <div className="container" style={{backgroundColor: 'gray'}}>
	  <button>Back to Menu</button>
	  <button>Create Group</button>
	  <button>Join Group</button>
      <Header title='CurrentStudy Groups'/>
	  <p>Course / Location / Studying / # People / Timeframe</p>
	  <p>This should be a selectable menu of all the available groups</p>
    </div>
  );
}

export default App;
