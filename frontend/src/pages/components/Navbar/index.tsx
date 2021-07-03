import React from 'react';
import NavLogo from './images/logo.png';
import './styles.css';

const Navbar = () => {

    return (
        <nav className="nav-container">
            <h1><img src={NavLogo} alt="Logo" /></h1>
            <ul>
                <li>Home</li>
                <li>Produtos</li>
                <li>Contatos</li>
            </ul>
        </nav>
    );
}

export default Navbar;