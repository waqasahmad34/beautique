/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <>
    <footer>
      <div className="container footercontainer">
        <div className="row">
          <div className="link">
            <h3>BEAUTIQUE</h3>
            <Link to="#">About Us</Link>
            <Link to="#">Contact</Link>
          </div>
          <div className="link">
            <h3>SERVICES</h3>
            <Link to="#">Supervision</Link>
            <Link to="#">Newsletter</Link>
            <Link to="#">Questions</Link>
          </div>
          <div className="link">
            <h3>PRODUCT</h3>
            <Link to="#">Images</Link>
            <Link to="#">HDR-Spheres</Link>
            <Link to="#">360-Images</Link>
          </div>
          <div className="link">
            <h3>PRICING</h3>
          </div>
          <div className="link">
            <h3>INFO</h3>
            <Link to="#">Privacy</Link>
            <Link to="#">Imprint</Link>
            <Link to="#">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
