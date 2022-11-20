import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/result'>Result</Link>
            <Link to='/answer'>Answer</Link>
            <Link to='/blog'>Blog</Link>
        </div>
    );
};

export default Navbar;