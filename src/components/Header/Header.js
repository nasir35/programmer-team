import React from 'react';
import './Header.css'

const Header = () => {
    return (
        // adding bootstrap class and my own custom class in the div
        <div className="container header">
            <h1>A Team of Great programmers!</h1>
            <p>Need to solve a Massive technological Error! We need genius people to have advance program to solve the problem!</p>
            <h3>Total Budget: $10 Million</h3>
        </div>
    );
};

export default Header;
