import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Countdown.css';

const Countdown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
    const [isPast, setIsPast] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const timeLeft = calculateTimeLeft(targetDate);
            setTimeLeft(timeLeft);
            if (timeLeft.total <= 0) {
                setIsPast(true);
                clearInterval(interval);
            } else {
                setIsPast(false);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    const styles = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 }
    });

    return (
        <animated.div className="countdown-container" style={styles}>
            {isPast ? (
                <h2 className="countdown-message">O aniversário já passou!</h2>
            ) : (
                <h2 className="countdown-message">
                    Faltam {timeLeft.days} dias, {timeLeft.hours} horas, {timeLeft.minutes} minutos e {timeLeft.seconds} segundos para o aniversário!
                </h2>
            )}
        </animated.div>
    );
};

const calculateTimeLeft = (targetDate) => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    const timeLeft = {
        total: difference,
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };

    return timeLeft;
};

export default Countdown;
