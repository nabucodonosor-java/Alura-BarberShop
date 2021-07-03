import React from 'react';
import MainImage from './images/banner.jpg';
import Benefits from './images/beneficios.jpg';
import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <img className="home-main-image" src={MainImage} alt="MainImage" />
            <h2 className="home-title">Sobre a Barbearia Alura</h2>

            <p>Localizada no coração da cidade a <strong>Barbearia Alura</strong> traz para o mercado o que há de melhor para o seu cabelo e barba.
                Fundada em 2019, a Barbearia Alura já é destaque na cidade e conquista novos clientes a cada dia.</p>

            <p className="home-mission-paraph"><em>Nossa missão é: <strong className="red-title">"Proporcionar auto-estima e qualidade de vida aos clientes"</strong>.</em></p>

            <p>Oferecemos profissionais experientes e antenados às mudanças no mundo da moda. O atendimento possui padrão de
                excelência e agilidade, garantindo qualidade e satisfação dos nossos clientes.</p>
            <div className="home-benefits">
                <h3 className="home-title-benefits">Benefícios</h3>
                <ul>
                    <li className="home-items">Atendimento aos clientes</li>
                    <li className="home-items">Espaço diferenciado</li>
                    <li className="home-items">Localização</li>
                    <li className="home-items">Profissionais especializados</li>
                </ul>
                <img className="benefit-image" src={Benefits} alt="BenefitsImage" />
            </div>
        </div>
    );
}

export default Home;