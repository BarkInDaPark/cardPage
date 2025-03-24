import React from 'react';
import logo from './monocle.png';
import './Homepage.css';
import Navbar from '../components/Navbar'; // Import the Navbar component
import Cards from '../components/Cards';
import { Link, useNavigate } from 'react-router-dom';

function Homepage() {
    const navigate = useNavigate();
    return (
        <div className='homepage'>
            <Navbar /> {/* Add the Navbar component */}
            <button className= 'button' onClick={() => navigate('/cards')}>Enter</button>
            <h1>
                < img src={logo} alt="Logo" className="spin-logo" />
                Gents club!
            </h1>
           
        </div>
    );
}

export default Homepage;