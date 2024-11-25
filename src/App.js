// App.js
import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AccountSummary from './components/AccountSummary';
import TransactionDetails from './components/TransactionDetails';
import Deposit from './components/Deposit';
import Transfer from './components/Transfer';
import Login from './components/Login';
import BankHomePage from './components/BankHomePage';
import OpenAccountForm from './components/AccountForm';
import AboutUs from './components/AboutUs';
import FeedbackButton from './components/FeedbackButton';
import Profile from './components/UserProfile'; // Ensure this is correctly named
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  // Load user and transactions on app load
  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem('user'));
    if (storedUser) {
      const storedBalance = localStorage.getItem(`balance_${storedUser.username}`);
      const initialBalance = storedBalance ? parseFloat(storedBalance) : 1000; // Default balance is 1000
      setUser({
        ...storedUser,
        balance: initialBalance,
      });

      const storedTransactions = JSON.parse(localStorage.getItem(`transactions_${storedUser.username}`)) || [];
      setTransactions(storedTransactions);
    }
  }, []);

  // Handle login
  const handleLogin = (userData) => {
    const storedBalance = localStorage.getItem(`balance_${userData.username}`);
    const initialBalance = storedBalance ? parseFloat(storedBalance) : 1000;

    const updatedUser = {
      ...userData,
      balance: initialBalance,
    };
    setUser(updatedUser);
    sessionStorage.setItem('user', JSON.stringify(updatedUser));
    navigate('/account-summary');
  };

  // Handle logout
  const handleLogout = () => {
    if (user) {
      localStorage.setItem(`balance_${user.username}`, user.balance); // Save user balance
    }
    setUser(null);
    sessionStorage.removeItem('user');
    navigate('/login');
  };

  // Handle deposit
  const handleDeposit = (amount) => {
    if (user) {
      const updatedUser = { ...user, balance: user.balance + amount };
      const newTransaction = {
        type: 'Deposit',
        amount,
        accountName: user.accountName,
        date: new Date().toLocaleString(),
      };

      setUser(updatedUser);
      sessionStorage.setItem('user', JSON.stringify(updatedUser));
      localStorage.setItem(`balance_${user.username}`, updatedUser.balance);

      const updatedTransactions = [...transactions, newTransaction];
      setTransactions(updatedTransactions);
      localStorage.setItem(`transactions_${user.username}`, JSON.stringify(updatedTransactions));
    }
  };

  // Handle transfer
  const handleTransfer = (amount) => {
    if (user && amount > 0 && amount <= user.balance) {
      const updatedUser = { ...user, balance: user.balance - amount };
      const newTransaction = {
        type: 'Transfer',
        amount,
        accountName: user.accountName,
        date: new Date().toLocaleString(),
      };

      setUser(updatedUser);
      sessionStorage.setItem('user', JSON.stringify(updatedUser));
      localStorage.setItem(`balance_${user.username}`, updatedUser.balance);

      const updatedTransactions = [...transactions, newTransaction];
      setTransactions(updatedTransactions);
      localStorage.setItem(`transactions_${user.username}`, JSON.stringify(updatedTransactions));
    } else {
      alert('Insufficient funds or invalid amount.');
    }
  };

  // Handle deleting a transaction
  const handleDeleteTransaction = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
    localStorage.setItem(`transactions_${user.username}`, JSON.stringify(updatedTransactions));
  };

  return (
    <div className="app">
      <Header user={user} onLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<BankHomePage />} />
          <Route path="/open-account" element={<OpenAccountForm />} />
          <Route path="/account-summary" element={user ? <AccountSummary user={user} /> : <Login onLogin={handleLogin} />} />
          <Route path="/transactions" element={user ? <TransactionDetails transactions={transactions} onDelete={handleDeleteTransaction} /> : <Login onLogin={handleLogin} />} />
          <Route path="/deposit" element={user ? <Deposit onDeposit={handleDeposit} /> : <Login onLogin={handleLogin} />} />
          <Route path="/transfer" element={user ? <Transfer onTransfer={handleTransfer} /> : <Login onLogin={handleLogin} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/profile" element={user ? <Profile user={user} /> : <Login onLogin={handleLogin} />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
      <FeedbackButton />
      <Footer />
    </div>
  );
};

export default App;