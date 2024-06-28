import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Hero.css';

const Hero = () => {
    const styles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1500 }
    });

    return (
        <animated.section className="hero" style={styles}>
            <div className="hero-content">
                <h1>Bem-vindo à Festa de Aniversário!</h1>
                <p>Junte-se a nós para celebrar o dia 9 de junho com muita alegria e diversão!</p>
            </div>
        </animated.section>
    );
};

export default Hero;
