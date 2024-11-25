import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router
import { FaUserCircle, FaPlus, FaPaperPlane, FaListAlt } from 'react-icons/fa';
import './Transfer.css'; // Import the CSS file for styling

const Transfer = ({ onTransfer, loginTime }) => {
    const [formData, setFormData] = useState({
        accountName: '',
        accountNumber: '',
        bankName: '',
        amount: '',  // New state field for amount
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const amount = parseFloat(formData.amount);
        if (amount > 0) {
            onTransfer(amount); // Deduct the amount from user's balance
            alert('Transfer Successful'); // Alert the user of successful transfer
            setFormData({    // Reset the form data
                accountName: '',
                accountNumber: '',
                bankName: '',
                amount: ''
            });
        } else {
            alert('Please enter a valid amount.');
        }
    };

    return (
        <div className="transfer-page">
            {/* Sidebar */}
            <aside className="sidebar">
            <div className="login-time">
                    <p><strong>Last Login:</strong> {loginTime}</p>
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

            {/* Transfer Form */}
            <div className="transfer-form-container">
                <h2>Transfer Funds</h2>
                <form className="transfer-form" onSubmit={handleSubmit}>
                    <label>
                        Account Name:
                        <input 
                            type="text" 
                            name="accountName" 
                            value={formData.accountName} 
                            onChange={handleChange} 
                            required
                        />
                    </label>
                    <label>
                        Account Number:
                        <input 
                            type="text" 
                            name="accountNumber" 
                            value={formData.accountNumber} 
                            onChange={handleChange} 
                            required
                        />
                    </label>
                    <label>
                        Bank Name:
                        <input 
                            type="text" 
                            name="bankName" 
                            value={formData.bankName} 
                            onChange={handleChange} 
                            required
                        />
                    </label>
                    <label>
                        Amount:
                        <input 
                            type="number"  // Input type set to number for the amount
                            name="amount" 
                            value={formData.amount} 
                            onChange={handleChange} 
                            required
                        />
                    </label>
                    <button type="submit" className="transfer-button">Transfer</button>
                </form>
            </div>
        </div>
    );
};

export default Transfer;
