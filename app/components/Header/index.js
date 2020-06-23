/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/logo.png';
import loginImage from '../../assets/images/login.png';
import closeImage from '../../assets/images/close.png';
import homeImage from '../../assets/images/home.png';
import registerImage from '../../assets/images/register.png';
import privacyImage from '../../assets/images/privacy.png';
import aboutImage from '../../assets/images/about.png';
import menubarImage from '../../assets/images/menubar.png';
import profileiconImage from '../../assets/images/profileicon.png';

const Header = () => (
  <>
    <header>
      <div className="container-fluid">
        <div id="mySidenav" className="sidenav">
          <a
            href="javascript:void(0)"
            className="closebtn"
            onClick="closeNav()"
          >
            <img src={closeImage} alt="" />
          </a>
          <a href="#">
            <img src={homeImage} alt="" />
            HOME
          </a>
          <a href="#">
            <img src={loginImage} alt="" />
            LOGIN
          </a>
          <a href="#">
            <img src={registerImage} alt="" />
            REGESTRIEREN
          </a>
          <a href="#">
            <img src={privacyImage} alt="" />
            IMPRINT PRAVACY
          </a>
          <a href="#">
            <img src={aboutImage} alt="" />
            ABOUT US
          </a>
          <a className="centermenumobile" to="#">
            IMAGES
          </a>
          <a className="centermenumobile" to="#">
            360 IMAGES
          </a>
          <a className="centermenumobile" to="#">
            HDR-SPHERES
          </a>
          <a className="centermenumobile" to="#">
            SUPERVISION
          </a>
          <a href="javascript:void(0)" onClick="closeNav()">
            <img src={closeImage} alt="" />
            CLOSE
          </a>
        </div>
        <div className="leftmenu">
          <img
            onClick="closeNav()"
            src={menubarImage}
            alt=""
            className="menubar"
          />
          <img src={profileiconImage} alt="" className="profileicon" />
        </div>
        <div className="centermenu">
          <ul>
            <li>
              <Link to="#">IMAGES</Link>
            </li>
            <li>
              <Link to="#">360 IMAGES</Link>
            </li>
            <li>
              <Link to="#">HDR-SPHERES</Link>
            </li>
            <li>
              <Link to="#">SUPERVISION</Link>
            </li>
          </ul>
        </div>
        <div className="rightmenu">
          <div className="searchbar">
            <form className="">
              <input type="text" name="" value="" placeholder="SEARCH" />
            </form>
          </div>
          <div className="logo">
            <img src={logoImage} alt="" />
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Header;
