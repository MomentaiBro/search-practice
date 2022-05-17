import SearchBar from './components/SearchBar';
import './App.css';
import MockData from './MOCK_DATA.json'

function App() {
  return (
    <div className="App">
      
        <h1>Search A Name - Any Name!</h1>
        <SearchBar placeholder="Type in a Name" data={MockData}/>

    </div>
  );
}

export default App;
