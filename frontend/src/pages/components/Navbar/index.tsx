import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import NavLogo from './images/logo.png';
import './styles.css';

const Navbar = () => {

    return (
        <nav className="nav-container">
            <Link to="/">
                <h1><img src={NavLogo} alt="Logo" /></h1>
            </Link>
            <div className="nav-div-list">
                <ul className="nav-list">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/products">Produtos</NavLink></li>
                    <li><NavLink to="/contacts">Contatos</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;