import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaPlus, FaPaperPlane, FaListAlt } from 'react-icons/fa';

const UserProfile = () => {
  // Initial user details from session
  const [user, setUser] = useState({
    name: '',
    email: '',
    accountNumber: '',
    phone: '',
    address: '',
    profilePic: '', // Adding profile picture
  });

  // State for edit mode
  const [isEditing, setIsEditing] = useState(false);

  // State for updated values
  const [formValues, setFormValues] = useState({ ...user });

  // State to track if the picture has been changed
  const [isPictureChanged, setIsPictureChanged] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle profile picture change
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormValues({ ...formValues, profilePic: reader.result });
        setIsPictureChanged(true); // Set flag to true when picture is changed
      };
      reader.readAsDataURL(file);
    }
  };

  // Save updated details and update session storage
  const saveDetails = () => {
    setUser({ ...formValues });
    sessionStorage.setItem('user', JSON.stringify(formValues)); // Save to sessionStorage
    setIsEditing(false);
    setIsPictureChanged(false); // Reset picture changed flag
  };

  // Fetch user details from session storage on component mount
  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      setFormValues(storedUser);
    }
  }, []);

  return (
    <div style={styles.pageContainer}>
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

      {/* User Profile Content */}
      <div style={styles.profileContainer}>
        <h2 style={styles.header}>User Profile</h2>
        <div style={styles.profileCard}>
          {/* Profile Picture Section */}
          <div style={styles.profilePicContainer}>
            <img
              src={formValues.profilePic || '/default-avatar.png'}
              alt="Profile"
              style={styles.profilePic}
            />
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePicChange}
                style={styles.uploadButton}
              />
              {isPictureChanged && (
                <button
                  onClick={saveDetails}
                  style={{ ...styles.button, backgroundColor: 'green' }}
                >
                  Save Picture
                </button>
              )}
            </div>
          </div>

          {Object.keys(user).map((key) => key !== 'profilePic' && (
            <div key={key} style={styles.detail}>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
              {isEditing ? (
                <input
                  type="text"
                  name={key}
                  value={formValues[key]}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              ) : (
                <span>{user[key]}</span>
              )}
            </div>
          ))}

          <div style={styles.actions}>
            {isEditing ? (
              <button style={styles.button} onClick={saveDetails}>
                Save
              </button>
            ) : (
              <button style={styles.button} onClick={() => setIsEditing(!isEditing)}>
                Edit Profile
              </button>
            )}
            {isEditing && (
              <button
                style={{ ...styles.button, backgroundColor: 'red' }}
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles for the page layout
const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  },
  profileContainer: {
    flex: 1,
    marginLeft: '20px',
    maxWidth: '1000px',
  },
  sidebar: {
    width: '20%',
    background: 'linear-gradient(135deg, black, #0056b3)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    color: '#333',
  },
  profileCard: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  profilePicContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    justifyContent: 'center',
  },
  profilePic: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginRight: '20px',
  },
  uploadButton: {
    padding: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  detail: {
    marginBottom: '15px',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  input: {
    marginLeft: '10px',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '70%',
  },
  actions: {
    marginTop: '20px',
    textAlign: 'center',
  },
  button: {
    margin: '0 10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default UserProfile;
