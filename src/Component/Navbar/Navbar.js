import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div >
            <div className='header'>
                <h1>Quiz World</h1>
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/result'>Result</Link>
                    <Link to='/answer'>Answer</Link>
                    <Link to='/blog'>Blog</Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;