import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Header.css';

const Header = () => {
    const styles = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 }
    });

    return (
        <animated.header className="header" style={styles}>
            <h1>Festa de Aniversário</h1>
        </animated.header>
    );
};

export default Header;
