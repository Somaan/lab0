import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-brand">
                Advanced WebDev
            </div>

            {/* Desktop Navigation Links */}
            <div className="nav-center">
                <div className="nav-links-box">
                    <a href="/">Home</a>
                    <a href="/books">Books</a>
                    <a href="/newsletter">Newsletter</a>
                </div>
            </div>

            {/* Social Icons */}
            <div className="social-box">
                <SocialIcon 
                    url="https://twitter.com" 
                    bgColor="#2d2d2d"
                    fgColor="#fff"
                    style={{ height: 25, width: 25 }}
                />
                <SocialIcon 
                    url="https://facebook.com"
                    bgColor="#2d2d2d"
                    fgColor="#fff"
                    style={{ height: 25, width: 25 }}
                />
                <SocialIcon 
                    url="https://linkedin.com"
                    bgColor="#2d2d2d"
                    fgColor="#fff"
                    style={{ height: 25, width: 25 }}
                />
            </div>

            {/* Mobile Menu Button */}
            <button 
                className="hamburger"
                onClick={() => setIsNavOpen(!isNavOpen)}
            >
                {isNavOpen ? '✕' : '☰'}
            </button>

            {/* Mobile Navigation */}
            {isNavOpen && (
                <div className="mobile-nav">
                    <a href="/">Home</a>
                    <a href="/books">Books</a>
                    <a href="/newsletter">Newsletter</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;