import '../styles/index.scss'
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import { IconContext } from 'react-icons';



function App() {
  return (
    <IconContext.Provider value={ { color: '#6c98c5', size: '2em' }}>
    <div className="App">
      <div className="page-container">
        <Nav />
        <Main />
      </div>
      <Footer />
    </div>
    </IconContext.Provider>
    
  );
}

export default App;
