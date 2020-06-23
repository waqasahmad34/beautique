/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable arrow-body-style */

import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import topImage from '../../assets/images/top.png';
import logowImage from '../../assets/images/logo-w.png';
import longarrowImage from '../../assets/images/longarrow.png';

const Login = () => {
  return (
    <>
  <Header />
  <section className="registerbanner">
    <div className="container mycontainer">
      <div className="row align-items-center">
        <div className="col-md-12">
          <div className="logow">
            <img src={logowImage} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="register login">
    <div className="container mycontainer">
      <div className="row align-items-center">
        <div className="col-md-12">
          <div className="top-left">
            <h1 className="content">LOGIN</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="registerform">
            <form>
              <div className="form-group row">
                <label className>Email:</label>
                <div className>
                  <input type="text" className="form-control" />
                </div>
                <div className="invalid">
                  <p><img src={longarrowImage} alt="" /> A Problem with "Name"</p>
                </div>
              </div>
              <div className="form-group row">
                <label className>Password:</label>
                <div className>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <input type="submit" className="btn btnstyle3 registerat" defaultValue="LOGIN" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="singlelisting-pagination">
    <div className="container mycontainer">
      <div className="row">
        <div className="col-md-12">
          <h6>PAGES <b>1/1</b></h6>
          <div className="movetop">
            <a href="javascript:void(0);">Top <img src={topImage} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
<Footer />


    </>
  )
}

export default Login