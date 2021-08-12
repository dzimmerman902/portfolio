import React from 'react';
import Hero from '../components/Hero';
import NavBar from '../components/Navbar';

export default function Home() {
    return <>
        <div className="absolute">
        <NavBar />
            <Hero />
        <div>Home</div>
        </div>
    </>;
}
