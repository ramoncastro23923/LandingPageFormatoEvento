import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './EventDetails.css';

const EventDetails = () => {
    const styles = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 }
    });

    return (
        <animated.section className="event-details" style={styles}>
            <div className="grid-container">
                <div className="grid-item event">
                    <h2>Detalhes do Evento</h2>
                    <p>Data: 9 de junho</p>
                    <p>Localização: Jundiaí</p>
                </div>
                <div className="grid-item about">
                    <h2>Sobre a Festa</h2>
                    <p>Venha celebrar o aniversário de uma forma inesquecível! Teremos muita música, comida deliciosa e atividades divertidas para todas as idades.</p>
                </div>
                <div className="grid-item schedule">
                    <h2>Programação</h2>
                    <ul>
                        <li>12:00 - Chegada e Boas-vindas</li>
                        <li>13:00 - Almoço</li>
                        <li>15:00 - Jogos e Atividades</li>
                        <li>18:00 - Jantar</li>
                        <li>20:00 - Música e Dança</li>
                    </ul>
                </div>
                <div className="grid-item location">
                    <h2>Localização</h2>
                    <p>Endereço: Rua da Festa, 123, Bairro Feliz, Cidade Alegre</p>
                    <p>Telefone: (11) 1234-5678</p>
                </div>
            </div>
        </animated.section>
    );
};

export default EventDetails;
