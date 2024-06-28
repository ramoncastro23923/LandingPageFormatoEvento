import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    const birthdayDate = new Date('2024-06-09T00:00:00');

    return (
        <div className="App">
            <Header />
            <Hero />
            <main>
                <Countdown targetDate={birthdayDate} />
                <EventDetails />
            </main>
            <Footer />
        </div>
    );
};

export default App;
