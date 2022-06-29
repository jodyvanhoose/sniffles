import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <Nav />
        <Main />
      </div>


        <img src={logo} className="App-logo" alt="logo" />
        
        
    </div>
  );
}

export default App;
