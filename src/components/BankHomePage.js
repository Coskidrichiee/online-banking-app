import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BankHomePage.css';

const BankHomePage = () => {
    const navigate = useNavigate();

    const handleOpenAccountClick = () => {
        navigate('/open-account');
    };

    return (
        <div className="bank-homepage">
            <section id="about-us">
                <header className="homepage-header">
                    <h1 className="header-title">
                        WELCOME TO   
                        <img src="/Citibank.png" alt="Citi Bank Logo" className="header-logo" />
                    </h1>
                    <p>A Bank Built for a World of Complexity.</p>
                </header>
            </section>

            <section className="homepage-services">
                <h2>Our Services</h2>
                <div className="service-cards">
                    <div className="service-card">
                        <h3>Online Banking</h3>
                        <p>Access your account anytime, anywhere.</p>
                    </div>
                    <div className="service-card">
                        <h3>Loans</h3>
                        <p>Flexible loans to suit your needs.</p>
                    </div>
                    <div className="service-card">
                        <h3>Investment</h3>
                        <p>Grow your wealth with our investment options.</p>
                    </div>
                </div>
            </section>

            <section className="homepage-call-to-action">
                <h2>Join Us Today!</h2>
                <p>Experience banking like never before.</p>
                <button className="cta-button" onClick={handleOpenAccountClick}>Open an Account</button>
            </section>

            <section id="atm-locations" >
    <h2>Our ATM Locations</h2>
    <div className="atm-cards">
         <div className="atm-card">
            <img src="/atm7.jpg" alt="ATM 6" className="atm-photo" />
            <p>7480 NW 104TH AVE, DORAL, FL 33178, USA</p>
        </div>
        <div className="atm-card">
            <img src="/atm2.webp" alt="ATM 2" className="atm-photo" />
            <p>1F, NO 185 , ZHONGHUA RD INTERNATIONAL TRADE CENTER, YUZHONG DISTRICT, CHONGQING CHONGQING, NULL 400010</p>
        </div>
        <div className="atm-card">
            <img src="/atm1.jpg" alt="ATM 1" className="atm-photo" />
            <p>TAMPINES PLAZA, #01-01, 5 TAMPINES CENTRAL 1 SINGAPORE, EAST 529541</p>
        </div>
        <div className="atm-card">
            <img src="/atm4.jpg" alt="ATM 4" className="atm-photo" />
            <p>14175 ST. GERMAIN DR CEBTREVILLE,VA 20121</p>
        </div>
        <div className="atm-card">
            <img src="/atm5.jpg" alt="ATM 5" className="atm-photo" />
            <p>11521 US HWY 1 PALM BEACH GARDENS,FL 33408</p>
        </div>
       
        <div className="atm-card">
            <img src="/atm3.webp" alt="ATM 3" className="atm-photo" />
            <p>CALZADA DE GUADALUPE 407 GUSTAVO A MADERO, CIUDAD DE MEXICO 7840</p>
        </div>
    </div>

    {/* Google Map iframe */}
    <div id="map" className="google-map">
        <iframe
            title="Google Map of 5812 S Ellis Ave, Chicago"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.548064836888!2d-87.60438028455513!3d41.78912467922995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e299f1baeede9%3A0x8787e49f7c037bbe!2s5812%20S%20Ellis%20Ave%2C%20Chicago%2C%20IL%2060637%2C%20USA!5e0!3m2!1sen!2sus!4v1696090450425!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
    </div> {/* End of Google Map */}
</section>

        </div>
    );
};

export default BankHomePage;
