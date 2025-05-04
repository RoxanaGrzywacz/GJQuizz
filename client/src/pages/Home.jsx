
import "../assets/styles/home.css";
import QRCode from "react-qr-code";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import {faAppStoreIos} from '@fortawesome/free-brands-svg-icons';
function Home() {
    return (
      <div className="home">

        <h1>Witaj w GJQuizz!</h1>
        <p>Zainstaluj aplikację na swoje urządzenie 👇</p>

        <div className="store-links">

          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGooglePlay} className="store-icon" />
          </a>
    
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faAppStoreIos} className="store-icon" />
          </a>

        </div>

        <div className="qr-codes">

          <QRCode value="#" />

          <QRCode value="#" />

        </div>

      </div>

    );
  }
  
  export default Home;