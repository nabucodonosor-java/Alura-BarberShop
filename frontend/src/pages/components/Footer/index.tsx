import React from 'react';
import LogoBco from './images/logo-branco.png';
import './styles.css';

const Footer = () => {

    return (
        <footer>
            <img src={LogoBco} alt="Logo" />
            <p>&copy; Copyright Barber Shop Alura - 2021</p>
        </footer>
    );
}

export default Footer;