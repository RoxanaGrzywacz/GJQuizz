import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    return(

        <nav className="navbar">
            <div className="navbar-toggle" onClick={toggleMenu}>
                ☰
            </div>
            <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
                <li><Link to="/">Strona główna</Link></li>
                <li><Link to="/Login">Logowanie</Link></li>
                <li><Link to="/Register">Rejestracja</Link></li>
            </ul>
        </nav>

    );

};

export default Navbar;