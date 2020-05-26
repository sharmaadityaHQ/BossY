import React from 'react'
import '../assets/scss/footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-blank"/>
            <div className="footer-section1">
                <h3 className="footer-section1-heading">foton</h3>
                <p className="footer-section1-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since 
                    the 1500s, 
                </p>
                <div className="footer-section1-images">
                    <img alt="twitter" src="../assets/img/twitter.svg"></img>
                    <img alt="facebook" src="../assets/img/facebook.svg"></img>
                    <img alt="google" src="../assets/img/google.svg"></img>
                </div>
            </div>
            <div className="footer-section2">
                <h3>Contact Info</h3>
                <div className="footer-section2-item1">
                    <img alt="map"/>
                    <p>113 Futton street, Suite</p>
                </div>
                <div className="footer-section2-item2">
                    <img alt="pin"></img>
                    <p>New York NY</p>
                </div>
                <div className="footer-section2-item3">
                    <img alt="message"></img>
                    <p>youremail@yourdomain.com</p>
                </div>
                <div className="footer-section2-item4">
                    <img alt="phone"></img>
                    <p>+88 (0) 101 0000</p>
                </div>
            </div>
            <div className="footer-section3">
                <div className="footer-section3-p">
                    <p>If you want to change your wordpress</p>
                </div>
                <div className="footer-section3-content">
                    <img twitter></img>
                    <div>
                    <h3>Qade Interactive</h3>
                    <h5>4 DAYS AGO</h5>
                    </div>
                </div>
            </div>
            <div className="footer-section4">
                <h3>Support and Download</h3>
                <p>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Odio eu feugiat pretium 
                    nibh ipsum consequat. 
                </p>
                <div className="footer-section4-button">
                <button>App Store</button>
                <button>Google play store</button>
                </div>
            </div>
            <div className="footer-blank"/>
        </div>
    )
}

export default Footer;