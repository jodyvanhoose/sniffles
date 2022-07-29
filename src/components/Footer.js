import logo from '../logo.svg';
import accuWeatherLogoDark from '../AccuweatherLogoDark.png'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return(
    <footer>
      <div className="footer-container">

        {/* accuweather logo */}
      <img className='accuweather-logo' src={accuWeatherLogoDark} alt="Accuweather logo" />
      
      {/* react logo */}
      <div className='react-text'>
        
        <p>Created with React</p>
        <span><img src={logo} className="App-logo" alt="React logo" /></span>
        
      </div>

      {/* social media icons */}
      <div className='social-icons'>
        <a href="https://github.com/jodyvanhoose" target="blank"><FaGithubSquare /></a>
        <a href="https://www.linkedin.com/in/jody-vanhoose/" target="blank"><FaLinkedin /></a>
      </div>
      
      </div>

    </footer>
  )
}

export default Footer