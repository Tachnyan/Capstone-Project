import Header from './components/Header'

function App() {

  const name = 'Brad'
	
  return (
    <div className="container" style={{backgroundColor: 'gray'}}>
      <Header title='Header'/>
	  <p>This is a paragraph </p>
	  <p>This is another paragraph </p>
    </div>
  );
}

export default App;