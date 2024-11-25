import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Login.css';

const Login = ({ onLogin }) => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [accountName, setAccountName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = sessionStorage.getItem('user');
        if (user) {
            navigate('/account-summary', { state: JSON.parse(user) });
        }
    }, [navigate]);

    const getUserCredentials = () => {
        const storedCredentials = localStorage.getItem('userCredentials');
        return storedCredentials ? JSON.parse(storedCredentials) : {};
    };

    const setUserCredentials = (newCredentials) => {
        localStorage.setItem('userCredentials', JSON.stringify(newCredentials));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert('Both username and password are required.');
            return;
        }

        const userCredentials = getUserCredentials();
        if (userCredentials[username] && userCredentials[username].password === password) {
            alert('Login successful!');
            const { accountName, accountNumber, phoneNumber, address } = userCredentials[username];
            const balance = userCredentials[username].balance || 1000; // Default balance
            const userData = { accountName, accountNumber, phoneNumber, address, balance };

            // Store user session and navigate to account summary
            sessionStorage.setItem('user', JSON.stringify(userData));
            onLogin(userData);
            navigate('/account-summary', { state: userData });
        } else {
            alert('Invalid username or password.');
        }
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        if (!accountName || !accountNumber || !phoneNumber || !address || !username || !password || !confirmPassword) {
            alert('All fields are required.');
            return;
        }
        if (accountNumber.length !== 10) {
            alert('Account number must be 10 digits long.');
            return;
        }
        if (phoneNumber.length < 10) {
            alert('Phone number must be at least 10 digits long.');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        const existingUserCredentials = getUserCredentials();
        existingUserCredentials[username] = { 
            password, 
            accountName, 
            accountNumber, 
            phoneNumber, 
            address, 
            balance: 1000 // Initialize balance to $1000 for new users
        };
        
        setUserCredentials(existingUserCredentials);
        alert('Sign-up successful! You can now log in.');

        // Reset form fields and switch to login form
        setIsSignUp(false);
        setAccountName('');
        setAccountNumber('');
        setPhoneNumber('');
        setAddress('');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="login">
            <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
            <div className="login-logo">
                <img src="/citi.svg.png" alt="Bank Logo" />
            </div>
            <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
                {isSignUp ? (
                    <>
                        <input
                            type="text"
                            placeholder="Account Name"
                            value={accountName}
                            onChange={(e) => setAccountName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Account Number (10 digits)"
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <label>
                            <input
                                type="checkbox"
                                checked={showPassword}
                                onChange={() => setShowPassword(!showPassword)}
                            />
                            Show Password
                        </label>
                        <button type="submit">Sign Up</button>
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label>
                            <input
                                type="checkbox"
                                checked={showPassword}
                                onChange={() => setShowPassword(!showPassword)}
                            />
                            Show Password
                        </label>
                        <button type="submit">Login</button>
                    </>
                )}
                <p onClick={() => setIsSignUp(!isSignUp)} className="toggle-form">
                    {isSignUp ? 'Already have an account? Login' : 'Don’t have an account? Sign Up'}
                </p>
                <div className="login-section social">
                    <ul className="login-icons">
                        <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    </ul>
                </div>
            </form>
        </div>
    );
};

export default Login;
