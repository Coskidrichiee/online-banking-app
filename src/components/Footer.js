import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import appleStore from '../assets/apple-store.svg'; // Go up one level to reach 'src'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'; // Correct import for YouTube
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // You can add your own styling here

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h4>Why Citi</h4>
        <ul>
          <li>Our Mission</li>
          <li>Our Values</li>
          <li>Careers</li>
          <li>Investors</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Wealth Management</h4>
        <ul>
          <li>Investment Options</li>
          <li>Retirement Planning</li>
          <li>Financial Advisory</li>
          <li>Trust Services</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Business Banking</h4>
        <ul>
          <li>Small Business</li>
          <li>Corporate Solutions</li>
          <li>Loans</li>
          <li>Merchant Services</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Rates</h4>
        <ul>
          <li>Deposit Rates</li>
          <li>Loan Rates</li>
          <li>Credit Cards</li>
          <li>Mortgages</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Help & Support</h4>
        <ul>
          <li>FAQs</li>
          <li>Contact Us</li>
          <li>Security Center</li>
          <li>Site Map</li>
        </ul>
      </div>

      <div className="footer-section">
        <a  href="/"><FontAwesomeIcon icon={faHouse} size="2x" /></a>
      </div>

      {/* New section with two divs */}
      <div className="footer-download-social">
        {/* App Store Download Icons */}
        <div className="download-section">
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img
              src={appleStore}
              alt="Download on the App Store"
              className="app-download-icon"
            />
          </a>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="app-download-icon"
            />
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="social-section">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </div>
      </div>
      
      <hr />

      {/* New Section for Legal Links */}
      <div className="footer-legal">
        <div className="legal-item">
          <h5>@2024 Citigroup Inc</h5>
        </div>
        <div className="legal-item">
          <a href="/terms-and-conditions" rel="noopener noreferrer">Terms & Conditions</a>
        </div>
        <div className="legal-item">
          <a href="/privacy-policy" rel="noopener noreferrer">Privacy Policy</a>
        </div>
        <div className="legal-item">
          <a href="/notice-at-collection" rel="noopener noreferrer">Notice at Collection</a>
        </div>
        <div className="legal-item">
          <a href="/do-not-sell" rel="noopener noreferrer">Do Not Sell or Share My Personal Information</a>
        </div>
        <div className="legal-item">
          <a href="/accessibility" rel="noopener noreferrer">Accessibility</a>
        </div>
      </div>
      <hr />

      {/* New Section for Importance */}
      <div className="footer-importance">
        <h5>Important Legal Disclosures & Information</h5>
        <p>
        Citibank.com provides information about and access to accounts and financial services provided by Citibank, N.A. and its affiliates in the United States and its territories. It does not, and should not be construed as, an offer, invitation or solicitation of services to individuals outside of the United States.<br/> <br/>
        Terms, conditions and fees for accounts, products, programs and services are subject to change. Not all accounts, products, and services as well as pricing described here are available in all jurisdictions or to all customers. Your eligibility for a particular product and service is subject to a final determination by Citibank. 
        Your country of citizenship, domicile, or residence, if other than the United States, may have laws, rules, and regulations that govern or affect your application for and use of our accounts, products and services, including laws and regulations regarding taxes, exchange and/or capital controls that you are responsible for following. <br/> <br/>
        The products, account packages, promotional offers and services described in this website may not apply to customers of International Personal Bank U.S. in the Citigold® Private Client International, Citigold® International, Citi International Personal, Citi Global Executive Preferred, and Citi Global Executive Account Packages. <br/> <br/>
        Deposit products and services are offered by Citibank, N.A., Member FDIC
        </p>
      </div>

      {/* New Section for Small Image */}
      <div className="footer-small-image-section">
      <img src="/citiredesign.svg" alt="Citi Bank Logo" className="header-logo" />
      </div>
    </footer>
  );
};

export default Footer;


