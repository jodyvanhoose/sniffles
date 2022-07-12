import logo from './logo.svg';
import './App.css';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return(
    <footer>
      <div className="footer-container">
        {/* <a href="#top">Return to top</a> */}
      <p className='copy'>Copyright &copy; 2022</p>
      <div className='react-text'>
        
        <p>Created with React</p>
        <span><img src={logo} className="App-logo" alt="logo" /></span>

      </div>
      <div className='social-icons'>
        <a href="https://github.com/jodyvanhoose" target="blank"><FaGithubSquare /></a>
        <a href="https://www.linkedin.com/in/jody-vanhoose/" target="_blank"><FaLinkedin /></a>
      </div>
        
      </div>
      
    </footer>
  )
}

export default Footer