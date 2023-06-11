import React from 'react'
import '../App.css';
import Coinranking from '../images/coinranking.png';




const Footer = () => {
  return (
    <div className="footer-container">
      <p className="rights">2023 All rights reserved.</p>

      <div className="powered-by-box">
        <p className="powered-by">
          Powered by <img src={Coinranking} alt='coinranking' className="powered-by-img" />
          <span className="powered-by-text">Coinranking</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;