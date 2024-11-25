import React from 'react';
import './TransactionDetails.css'; // Import the CSS file
import { FaTrash } from 'react-icons/fa'; // Import the trash icon

const TransactionDetails = ({ transactions, onDelete }) => {
    const handleTransactionClick = (transaction) => {
        if (transaction.type === 'transfer') {
            alert(`Transferred to: ${transaction.destinationAccount}`);
        }
    };

    return (
        <div className="transaction-details">
            <h2>Transaction Details</h2>
            {transactions.length === 0 ? (
                <p>No transactions available.</p>
            ) : (
                <ul>
                    {transactions.map((transaction, index) => (
                        <li key={index} onClick={() => handleTransactionClick(transaction)}>
                            <strong>{transaction.type}:</strong> ${transaction.amount.toFixed(2)} by {transaction.accountName} on {transaction.date}
                            <button className="delete-button" onClick={(e) => { e.stopPropagation(); onDelete(index); }}>
                                <FaTrash />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TransactionDetails;


