/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import logowImage from '../../assets/images/logo-w.png';
import longarrowImage from '../../assets/images/longarrow.png';
import plusbImage from '../../assets/images/plus-b.png';
import topImage from '../../assets/images/top.png';

const Register = () => (
  <>
    <Header />
    <div>
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
      <section className="register">
        <div className="container mycontainer">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="top-left">
                <h1 className="content">REGISTER</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="registerform">
                <form>
                  <div className="form-group row">
                    <label className>Name:</label>
                    <div className>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="invalid">
                      <p>
                        <img src={longarrowImage} alt="" /> A Problem with
                        "Name"
                      </p>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className>First Name:</label>
                    <div className>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className>Company:</label>
                    <div className>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className>Street:</label>
                    <div className>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className>City:</label>
                    <div className>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className>E-Mail:</label>
                    <div className>
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className>Repeat E-Mail:</label>
                    <div className>
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className>Phone Number:</label>
                    <div className>
                      <input type="tel" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className>Homepage:</label>
                    <div className>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="filtercheckbox">
                      <input type="checkbox" />
                      <span className="checkmark" />
                      Available for Supervision
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="password">
          <div className="container mycontainer">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="top-left">
                  <h1 className="content">PASSWORD</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="registerform">
                  <form>
                    <div className="form-group row">
                      <label className>Password Security</label>
                      <div className>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className>Password:</label>
                      <div className>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className>Repeat Password:</label>
                      <div className>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="invalid">
                        <p>
                          <img src={longarrowImage} alt="" /> Password does not
                          match
                        </p>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="w-100">
                        Note{' '}
                        <small>
                          Password must contain special
                          <br /> characters and capital letters
                        </small>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="container mycontainer">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="top-left">
                  <h1 className="content">PROFILE</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="registerform">
                  <form>
                    <div className="form-group row">
                      <label className>Title Image</label>
                      <div
                        className="d-flex align-items-center pointer"
                        id="titleimg"
                        onclick="uploads(this.id)"
                      >
                        <input type="file" id="real-file" hidden="hidden" />
                        <img src={plusbImage} alt="" />
                        <small>Upload your Image</small>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className>Profile image</label>
                      <div
                        className="d-flex align-items-center pointer"
                        id="profileimg"
                        onClick="uploads(this.id)"
                      >
                        <input type="file" id="real-file" hidden="hidden" />
                        <img src={plusbImage} alt="" />
                        <small>Upload your Image</small>
                      </div>
                    </div>
                    <div className="form-group row d-block mt-4">
                      <label className="d-block w-100 mb-3">
                        A short text about yourself
                      </label>
                      <div className>
                        <textarea
                          type="text"
                          className="form-control"
                          defaultValue=" "
                        />
                      </div>
                    </div>
                    <div className="termscheck">
                      <p>
                        <a href="#">
                          <b>Click here</b>
                        </a>{' '}
                        to read the Terms and Conditions
                      </p>
                      <label className="filtercheckbox">
                        <input type="checkbox" />
                        <span className="checkmark" />I have read and accept the
                        General Terms and Conditions
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="singlelisting-pagination">
        <div className="container mycontainer">
          <div className="row">
            <div className="col-md-12">
              <a href="#" className="btn btnstyle3 registerat">
                <b>Register</b> at BEAUTIQUE
              </a>
              <h6>
                PAGES <b>1/1</b>
              </h6>
              <div className="movetop">
                <a href="javascript:void(0);">
                  Top <img src={topImage} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </>
);

export default Register;
