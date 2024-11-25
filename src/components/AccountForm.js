import React, { useState } from 'react';
import './OpenAccountForm.css';

const OpenAccountForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        country: '',
        city: '',
        address: '',
        confirmAddress: '',
        phoneNumber: '',
        gender: '',
        dateOfBirth: '',
        age: '',
        validID: null, // For file upload
        swiftCode: '', // Added SWIFT Code
    });

    const [page, setPage] = useState(1);

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData({ ...formData, [name]: files[0] }); // Handle file upload
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const validateFields = () => {
        const {
            firstName, lastName, email, confirmEmail, country, city, address,
            confirmAddress, phoneNumber, gender, dateOfBirth, age, validID, swiftCode,
        } = formData;

        return (
            firstName && lastName && email && confirmEmail && email === confirmEmail &&
            country && city && address && confirmAddress && address === confirmAddress &&
            phoneNumber && gender && dateOfBirth && age && validID && swiftCode
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateFields()) {
            alert('Account successfully created!');

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                confirmEmail: '',
                country: '',
                city: '',
                address: '',
                confirmAddress: '',
                phoneNumber: '',
                gender: '',
                dateOfBirth: '',
                age: '',
                validID: null,
                swiftCode: '', // Reset SWIFT code
            });

            setPage(1);
        } else {
            alert('Please fill out all required fields and ensure emails and addresses match.');
        }
    };

    return (
        <div className="open-account-form">
            <div className="bank-logo">
                <img src="/citi.svg.png" alt="Bank Logo" />
            </div>

            {page === 1 && (
                <form className="form-container">
                    <h2>Open an Account</h2>
                    <em>Personal Information:</em>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Email:</label>
                        <input
                            type="email"
                            name="confirmEmail"
                            value={formData.confirmEmail}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Gender:</label>
                        <select name="gender" value={formData.gender} onChange={handleInputChange} required>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Date of Birth:</label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Age:</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-buttons">
                        <button type="button" onClick={() => setPage(2)}>Next</button>
                    </div>
                </form>
            )}

            {page === 2 && (
                <form className="form-container" onSubmit={handleSubmit}>
                    <h2>Open an Account</h2>
                    <em>Contact Information:</em>
                    <div className="form-group">
                        <label>Country:</label>
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>City:</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Address:</label>
                        <input
                            type="text"
                            name="confirmAddress"
                            value={formData.confirmAddress}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Valid ID (Upload):</label>
                        <input
                            type="file"
                            name="validID"
                            accept=".jpg,.jpeg,.png,.pdf"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>SWIFT Code:</label>
                        <input
                            type="text"
                            name="swiftCode"
                            value={formData.swiftCode}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-buttons">
                        <button type="button" onClick={() => setPage(1)}>Back</button>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default OpenAccountForm;
