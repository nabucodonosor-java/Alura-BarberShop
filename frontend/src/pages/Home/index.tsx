import React from 'react';
import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Sobre a Barbearia Alura</h1>

            <p>Localizada no coração da cidade a <strong>Barbearia Alura</strong> traz para o mercado o que há de melhor para o seu cabelo e barba.
                Fundada em 2019, a Barbearia Alura já é destaque na cidade e conquista novos clientes a cada dia.</p>

            <p className="home-mission-paraph"><em>Nossa missão é: <strong className="red-title">"Proporcionar auto-estima e qualidade de vida aos clientes"</strong>.</em></p>

            <p>Oferecemos profissionais experientes e antenados às mudanças no mundo da moda. O atendimento possui padrão de
                excelência e agilidade, garantindo qualidade e satisfação dos nossos clientes.</p>
        </div>
    );
}

export default Home;