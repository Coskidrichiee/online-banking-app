import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const user = JSON.parse(sessionStorage.getItem('user'));

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        window.location.reload();
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="header">
            <div className="header-content">
                <img className="logo" src="Citi.svg.png" alt="Bank Logo" />
                <div className="hamburger" onClick={toggleNav}>
                    &#9776;
                </div>
                <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
                    <ul className="nav-links">
                        <li><Link to="/">HOME</Link></li>
                        {/* Updated Link to go to BankHomePage and scroll to ATM locations */}
                        <li>
                            <Link to="/#atm-locations" onClick={() => {
                                toggleNav(); // Close nav when clicked
                                setTimeout(() => {
                                    document.getElementById('atm-locations').scrollIntoView({ behavior: 'smooth' });
                                }, 0); // Use timeout to ensure the navigation completes before scrolling
                            }}>ATM/LOCATIONS</Link>
                        </li>
                        <li><Link to="/about-us">ABOUT US</Link></li>
                        {!user && <li><Link to="/login">Login</Link></li>}
                        {user && (
                            <>
                                <li><Link to="/account-summary">ACCOUNT</Link></li>
                                <li className="username-logout">
                                    <span className="username">{user.accountName}!</span>
                                    <button className="logout-link" onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
