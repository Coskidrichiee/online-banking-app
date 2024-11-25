import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AccountSummary.css';
import { FaPaperPlane, FaPlus, FaUserCircle, FaListAlt } from 'react-icons/fa';

const AccountSummary = ({ user }) => {
    const {
        accountName = 'John Doe',
        accountNumber = '1234567890',
        swiftCode = 'SWFTXXXXX',
        balance = 0.0,
        accountType = 'Savings',
    } = user || {};

    const [loginTime, setLoginTime] = useState('');
    const [isModalVisible, setModalVisible] = useState(false); // Modal visibility state

    useEffect(() => {
        const currentTime = new Date();
        setLoginTime(currentTime.toLocaleString());
    }, []);

    const handleApplyNowClick = () => {
        setModalVisible(true); // Show the modal
    };

    const closeModal = () => {
        setModalVisible(false); // Hide the modal
    };

    return (
        <div className="account-summary-container">
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

            {/* Main Content */}
            <main className="main-content">
                <div className="overview-and-transfer">
                    <div className="account-header">
                        <h1 style={{ textAlign: 'center' }}>Financial Overview</h1>
                    </div>
                    <div className="button-container">
                        <Link to="/transfer" className="make-transfer-btn no-decoration">
                            <FaPaperPlane /> Make Transfer
                        </Link>
                        <Link to="/deposit" className="add-deposit-btn no-decoration">
                            <FaPlus /> Add Deposit
                        </Link>
                    </div>
                </div>

                <div className="account-details">
                    <h2>Account Details</h2>
                    <p><strong>Account Name:</strong> {accountName}</p>
                    <p><strong>Account Number:</strong> {accountNumber}</p>
                    <p><strong>Swift Code:</strong> {swiftCode}</p>
                    <p><strong>Account Type:</strong> {accountType}</p>
                    <p className="balance"><strong>Balance:</strong> USD{balance.toFixed(2)}</p>
                </div>

                {/* Bank Card Section */}
                <section className="bank-card-section">
                    <div className="bank-card-container">
                        <div className="bank-card-header">
                            <h1>Bank Card</h1>
                            <button className="apply-now-btn" onClick={handleApplyNowClick}>
                                <FaPlus /> Apply Now
                            </button>
                        </div>

                        <div className="bank-card">
                            <div className="card-design">
                                <div className="card-header">
                                    <img src="/citti.png" alt="Company Logo" className="company-logo" />
                                    <p className="card-balance">0.00</p>
                                </div>
                                <p className="iban-number">0000 0000 0000 0000</p>
                                <div className="card-footer">
                                    <div className="cardholder-info">
                                        <p className="cardholder-name">Cardholder:</p>
                                        <p className="cardholder-name">NO NAME</p>
                                    </div>
                                    <div className="expiry-info">
                                        <p className="expiry-date">Expires:</p>
                                        <p className="expiry-date">00/00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Modal */}
                {isModalVisible && (
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Application Unavailable</h2>
                            <p>You cannot apply for an online card now. Please try again later.</p>
                            <button className="close-modal-btn" onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default AccountSummary;
