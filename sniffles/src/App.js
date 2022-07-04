import './App.css';
import './index.css'
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <div className="page-container">
        <Nav />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
