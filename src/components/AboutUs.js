// AboutUs.js
import React from 'react';
import './AboutUs.css'; // Create a separate CSS file for styling


const AboutUs = () => {
    return (
        <div className="about-us">
            {/* Slogan Section */}
            <section className="slogan-section">
                <div className="slogan-content">
                    <p className="slogan-text">A Bank Built for a World of Complexity.</p> {/* Add your slogan text here */}
                    <img src="./about.avif" alt="Slogan" className="slogan-image" /> {/* Add the image file */}
                </div>
            </section>

            {/* Global Impact Section */}
            <section className="global-impact">
                <p>We live in an increasingly complex world. Companies these days are either born global or are going global at record speed. 
                Business and geopolitics are forging an entirely new dynamic and consumers now expect financial services to be a seamless part of their digital lives.
                 Citi is a bank that’s uniquely positioned for this moment. Through our vast global network and our on-the-ground expertise, 
                 we can connect the dots, anticipate change and empathize the needs of our clients and customers in ways that other banks simply cannot.

                    Citibank plays a significant role in the financial ecosystem by facilitating financial flows globally. 
                    With over 100M+ million customer accounts and a presence in more than 160 countries, we serve millions of clients, 
                    from individuals to large corporations. Our commitment to Environmental, Social, and Governance $1+ trillion (ESG) principles drives our operations.
                </p>
                <h2>Our Global Impact</h2>
                <div className="impact-numbers">
                    <div className="impact-item">
                        <h3 id='me'>100M+ million</h3>
                        <h4 id='me'>Customer Accounts</h4>
                        <p>Through our retail bank, credit cards and wealth management business, 
                        we provide personalized financial guidance supported by leading digital capabilities.</p>

                    </div>
                    <div className="impact-item">
                        <h3 id='we'>$1+ trillion</h3>
                        <h4 id='we'>committed to ESG</h4>
                        <p>We believe in playing a leading role in solving increasingly interconnected societal challenges. 
                        We set goals and we hold ourselves accountable to reaching them.</p>
                    </div>
                    <div className="impact-item">
                        <h3 id='wee'>Nearly $5 trillion</h3>
                        <h4 id='wee'>financial flows</h4>
                        <p>Our global network allows us to move the equivalent of Germany’s 
                        GDP each day across borders, currencies and asset classes.</p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission">
                <img src="./mission.avif" alt="Mission" className="mission-image" />
                <h2>Our Mission</h2>
                <p>
                Citi's mission is to serve as a trusted partner to our clients by responsibly providing financial services that enable growth and economic progress. 
                We have set expectations for how we must act to bring our mission to life. 
                These expectations are at the heart of our Leadership Principles – we take ownership, we deliver with pride and we succeed together.
                </p>
                <button className="my-button">Learn More</button>
            </section>

            {/* Strategy Section */}
            <section className="bank-sections">
            <h1>In This Section</h1>
            <div className='bank-container'>
    <div className="strategy">
    <div class="parent-div">
    <img id="strategy-image" src="./stra.avif" alt="Our Strategy" />
</div>
        <div class="text-container">
    <h2>Our Strategy</h2>
    <p>
        Our strategy focuses on leveraging technology and innovation to provide superior banking experiences. 
        We aim to enhance customer engagement through personalized services and digital solutions that meet the evolving needs of our clients.
    </p>
    <button className="my-button">Learn More</button>
    </div>
    </div>
    <div className="leadership">
        <img src="lead.avif" alt="Leader 1" id="leadership-image" className="leader-photo" />
        <div class="text-container">
        <h2>Leadership</h2>
        <p>Our diverse leadership team is committed to stewarding a firm known for excellence.</p>
        <button className="my-button">Learn More</button>
        </div>
    </div>

    <div className="global">
    <div class="parent-div">
        <img src="./shipping.avif" alt="Mission" id="global-image" className="mission-image" />
        </div>
        <div class="text-container">
        <h2>Global Presence</h2>
        <p>
            With branches in major cities across the globe, Citibank has established a vast network that connects clients to opportunities. 
            Our global presence allows us to deliver a diverse range of financial services tailored to local markets.
        </p>
        <button className="my-button">Learn More</button>
        </div>
    </div>

    <div className="heritage-">
    <div class="parent-div">
        <img src="./heri.avif" alt="Mission" id="heritage-image" className="mission-image" />
        </div>
        <div class="text-container">
        <h2>Heritage</h2>
        <p>
            Founded in 1812, Citibank has a rich history of innovation in the banking industry. 
            We have continuously adapted to meet the changing needs of our clients and the global economy.
        </p>
        <button className="my-button">Learn More</button>
        </div>
    </div>
    </div>
</section>
<section class="business-section">
    <div class="content">
        <h2>Our Businesses</h2>
        <p>
        Through our five businesses, we have the experience and capabilities to meet the banking needs of our clients and customers as they grow across borders and adapt to the digital age.
        </p>
        <button class="my-button">Read More</button>
    </div>
    <div class="image-container">
        <img src="./biz.avif" alt="Business" class="business-image" />
    </div>
</section>
<section class="citi-session">
    <div class="citicontainer">
        <div class="citiimage-container">
            <img src="./citi.avif" alt="Business Infographic" class="business-image" />
        </div>
        <div class="cititext-container">
            <h2>Citi Infographics</h2>
            
            <div class="citiicon-container">
                <span class="arrow-down">&#x2193;</span>  
                <p>
             <a href="https://www.citi.com" target="_blank" rel="noopener noreferrer">Citi at a Glance</a>
                </p>
            </div>
        </div>
    </div>
</section>



        </div>
    );
};

export default AboutUs;
