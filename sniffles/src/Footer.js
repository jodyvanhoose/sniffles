import logo from './logo.svg';
import './App.css';

function Footer() {
  return(
    <footer>
      <a href="#top">Return to top</a>
      <p>Copyright &copy;</p>
      <div>
        <p>Powered by React</p>
        <span><img src={logo} className="App-logo" alt="logo" /></span>
      </div>
    </footer>
  )
}

export default Footer