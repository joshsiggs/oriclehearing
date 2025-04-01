import React from 'react';
import './style.css';

const Footer = () => {
    return (
    <>
        <footer className="footer">
        <div className="footer-top">
            <div className="footer-links">
                <a href="/privacy">Privacy Terms</a>
                <a href="/contact">Contact Us</a>
                <a href="/terms">Terms &amp; Conditions</a>
                <a href="https://4am.everflowclient.io/affiliate/signup/?q=5J473L&vid=fKeLGBkmPif4Vy4ARsxR6poy1x&n=31SjOgXMPujN">Become an Affiliate</a>
            </div>
            <div className="footer-logo">
                <img src="/images/oricle-logo.png" alt="Website Logo" />
            </div>
        </div>

        <div className="footer-mid">
            <div className='footer-mid-text'>
                <p>
                THIS IS AN ADVERTISEMENT AND NOT AN ACTUAL NEWS ARTICLE, BLOG, OR CONSUMER PROTECTION UPDATE.
                </p>
                <p>
                MARKETING DISCLOSURE: This website is a marketplace. As such, the owner has a monetary connection to the products and services advertised on the site and receives payment for qualified referrals.
                </p>
                <p>
                ADVERTISING DISCLOSURE: This website and the products/services referred to herein are for advertising purposes only. Photographs of persons are models. The website owner solely provides a service to help consumers obtain and compare information.
                </p>
                <p>
                oriclehearing.com ©2024 All Rights Reserved.
                </p>
            </div>
        </div>
        <div className="footer-bottom">
            <div className='footer-bottom-text'>
                <p className="compliance-text">The information provided on this website is for informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. The products mentioned are not intended to diagnose, treat, cure, or prevent any disease. Results may vary from person to person. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.</p>
            </div>
        </div>
        </footer>

        <div className="sticky-cta">
            <button className="cta-button">Apply Discount &amp; Check Availability</button>
        </div>
    </>
    );
};

export default Footer;
