import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../assets/styles/header.css";
import logo from '../images/logo.png';

function Header(){

    return(

        <header className="header">
            <div className="header-logo">
                <Link to="/">
                        <img src={logo} alt="GJQuizz logo" width="120" />
                </Link>
            </div>
            <div className="header-nav">
                <Navbar />
            </div>

        </header>

    );

};

export default Header;