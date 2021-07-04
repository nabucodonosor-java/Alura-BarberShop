import React from 'react';
import ImgCabelo from './images/cabelo.jpg';
import ImgBarba from './images/cabelo.jpg';
import ImgCB from './images/cabelo+barba.jpg';
import './styles.css';

const Product = () => {

    return ( 
        <div className="product-container">
            <ul className="product-list">
                <li className="product-card"> 
                    <h2>Cabelo</h2>
                    <img src={ImgCabelo} alt="cabelo" />
                    <p>Na tesoura ou na máquina, como o cliente preferir</p>
                    <p className="product-price">R$ 25,00</p>
                </li>
                <li className="product-card">
                    <h2>Barba</h2>
                    <img src={ImgBarba} alt="cabelo" />
                    <p>Corte e desenho profissional de barba</p>
                    <p className="product-price">R$ 18,00</p>
                </li>
                <li className="product-card">
                    <h2>Cabelo + Barba</h2>
                    <img src={ImgCB} alt="cabelo" />
                    <p>Pacote completo barba, cabelo e bigode</p>
                    <p className="product-price">R$ 35,00</p>
                </li>
            </ul>
        </div>
    );
}

export default Product;