import React from 'react';
import logo from './monocle.png';
import './Homepage.css';
import Navbar from '../components/Navbar'; // Import the Navbar component
import Bricks from '../components/Bricks';
import { Link, useNavigate, Outlet } from 'react-router-dom';

function Homepage() {
    const navigate = useNavigate();
    return (
        <div>
            <div className='homepage'>
                <button className= 'button' onClick={() => navigate('/Bricks')}>Enter</button>
                <h1>
                     < img src={logo} alt="Logo" className="spin-logo" />
                    Gents club!
                </h1>
           
            </div>
            <Navbar />
        </div>
    );
}

export default Homepage;