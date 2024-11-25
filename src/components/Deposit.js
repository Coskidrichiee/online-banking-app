import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Deposit.css'; // Import the CSS file
import { FaUserCircle, FaPlus, FaPaperPlane, FaListAlt } from 'react-icons/fa';

const Deposit = ({ onDeposit }) => {
    const [amount, setAmount] = useState(''); // State for deposit amount

    // Handle input change
    const handleChange = (e) => {
        setAmount(e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const depositAmount = parseFloat(amount); // Convert amount to number
        if (depositAmount > 0) {
            onDeposit(depositAmount); // Call onDeposit with the amount
            alert('Deposit successful!'); // Show success alert
            setAmount(''); // Reset form after submission
        } else {
            alert("Please enter a valid amount.");
        }
    };

    return (
        <div className="container">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="login-time">
                    <p><strong>Last Login:</strong> {new Date().toLocaleString()}</p>
                </div>
                <Link to="/profile" className="sidebar-btn no-decoration">
                    <FaUserCircle /> Profile
                </Link>
                <Link to="/account-summary" className="sidebar-btn no-decoration">
                    <FaUserCircle /> Account Summary
                </Link>
                <Link to="/deposit" className="sidebar-btn no-decoration">
                    <FaPlus /> Add Deposit
                </Link>
                <Link to="/transfer" className="sidebar-btn no-decoration">
                    <FaPaperPlane /> Make Transfer
                </Link>
                <Link to="/transactions" className="sidebar-btn no-decoration">
                    <FaListAlt /> View Transactions
                </Link>
            </aside>

            {/* Deposit Form */}
            <main className="deposit-form">
                <h2>Deposit</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Amount:</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={handleChange}
                            required
                            placeholder="Enter amount"
                        />
                    </div>
                    <button type="submit">Deposit</button>
                </form>
            </main>
        </div>
    );
};

export default Deposit;
