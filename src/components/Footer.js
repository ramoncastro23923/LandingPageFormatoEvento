import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Footer.css';

const Footer = () => {
    const styles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1500 }
    });

    return (
        <animated.footer className="footer" style={styles}>
            <p>&copy; {new Date().getFullYear()} Meu Aniversário. Todos os direitos reservados.</p>
        </animated.footer>
    );
};

export default Footer;
