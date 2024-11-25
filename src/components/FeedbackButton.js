import React, { useState } from 'react';
import './FeedbackButton.css'; // Import your CSS file

const FeedbackButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0); // State to store the user's rating
  const [isSatisfied, setIsSatisfied] = useState(null); // State for Yes/No selection
  const [feedbackCategory, setFeedbackCategory] = useState(""); // State to store selected feedback category

  const handleButtonClick = () => {
    setShowModal(true); // Show modal on button click
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal
  };

  const handleStarClick = (index) => {
    setRating(index); // Set the rating when a star is clicked
  };

  const handleSatisfactionClick = (response) => {
    setIsSatisfied(response); // Set satisfaction state based on Yes/No click
  };

  const handleCategoryChange = (e) => {
    setFeedbackCategory(e.target.value); // Update the selected category
  };

  return (
    <div>
      <button className="feedback-button" onClick={handleButtonClick}>
        Feedback
      </button>

      {showModal && (
        <div className="feedback-modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src="/cittii.png" alt="Citi Bank Logo" className="citiheader-logo" />
            
            {/* Add an ID to the form */}
            <form id="feedback-form">
              {/* Additional content section */}
              <div className="feedback-description">
                <p>Important: Immediate service or tech support is available by using online Chat.</p>
              </div>
              <hr />

              {/* P tag for 'Rate Us' */}
              <p id='ratetag'>Please rate your overall experience:</p>
              
              {/* Star rating div */}
              <div className="rate-us-stars">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`star ${index < rating ? 'filled' : ''}`} // Apply 'filled' class if the star index is less than rating
                    onClick={() => handleStarClick(index + 1)} // Set the rating when the star is clicked
                  >
                    &#9733;
                  </span>
                ))}
              </div>

              {/* New P tag and Yes/No buttons */}
              <p id='yesbuttonp'>Were you able to easily accomplish the purpose of your visit?</p>
              <div className="yes-no-buttons">
                <button 
                  type="button" 
                  className={`yes-button ${isSatisfied === true ? 'selected' : ''}`} 
                  onClick={() => handleSatisfactionClick(true)}
                >
                  Yes
                </button>
                <button 
                  type="button" 
                  className={`no-button ${isSatisfied === false ? 'selected' : ''}`} 
                  onClick={() => handleSatisfactionClick(false)}
                >
                  No
                </button>
              </div>

              {/* Select option for feedback category */}
              <p id='ratetag'>Which category best describes the nature of your feedback?</p>
              <select value={feedbackCategory} onChange={handleCategoryChange} className="feedback-category-select">
                <option value="" disabled>Please Select Option</option>
                <option value="Service">A suggestion</option>
                <option value="Product">Site issue</option>
                <option value="Website">General comment</option>
              </select>

              {/* Comment label and textarea */}
              <label htmlFor="additional-comments">Please enter your comments here:</label>
              <textarea id="additional-comments" placeholder="Please do not enter any confidential information (account number,PIN password, etc.) or provide account related inquiries or requests in your comment." rows="5"></textarea>

              {/* New P tag under textarea */}
              <p id="comment-p">Survey comments will be reviewed for client experience opportunities. This survey is not a formal complaint channel. If you wish to make a complaint, please contact customer service for assistance.</p>
              <button id='btn' type="submit">Submit</button>
            </form>
            <p id="comment-pp">Protected by reCAPTCHA: Privacy & Terms</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackButton;
