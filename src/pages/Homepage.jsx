import React from 'react';
import logo from './monocle.png';
import './Homepage.css';
import Navbar from '../components/Navbar'; // Import the Navbar component

function Homepage() {
    return (
        <div className='homepage'>
            <Navbar /> {/* Add the Navbar component */}
            <h1>Welcome to gents rooms</h1>
            <img src={logo} alt="Logo" className="spin-logo" />
        </div>
    );
}

export default Homepage;