/* eslint-disable prettier/prettier */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import contactImage from '../../assets/images/contact.png';
import sampleImage from '../../assets/images/sample.png';
import supervisionImage from '../../assets/images/supervision.png';
import topImage from '../../assets/images/top.png';
import mainhighlight2Image from '../../assets/images/mainhighlight2.png';
import highlight4Image from '../../assets/images/highlight4.png';
import profilerImage from '../../assets/images/profiler.png';

const SingleListing = () => (
  <>
  <Header />
    <section className="singlellisting">
      <div className="container-fluid">
        <div className="row align-items-baseline">
          <div className="col-md-2">
            <div className="smallside">
              <a href="#">
                <img src={contactImage} className="icons" alt="" />
                Contact
              </a>
              <a href="#">
                <img src={sampleImage} className="icons" alt="" /> Get
                a Sample
              </a>
              <a href="#">
                <img
                  src={supervisionImage}
                  className="icons"
                  alt=""
                />
                Supervision
              </a>
              <div className="clientid">
                <small>
                  <b>User ID</b>#48536
                </small>
                <small>
                  <b>Image ID#</b>99999
                </small>
                <small>
                  <b>Creation Date:</b>21.06.2018
                </small>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="monthlywrap">
              <div className="row">
                <div className="col-md-12">
                  <h2>Chile Atacama Desert</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <img
                    src={mainhighlight2Image}
                    className="img-fluid mainhighlight"
                    alt=""
                  />
                  <p className="persp">
                    <b>1/ 6</b> Perspectives
                  </p>
                </div>
                <div className="col-md-12">
                  <div className="owl-carousel owl-theme listingslider">
                    <div className="item">
                      <img
                        src={highlight4Image}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={highlight4Image}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={highlight4Image}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={highlight4Image}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="tags">
      <div className="container mycontainer">
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="top-left">
              <h1 className="content">TAGS</h1>
            </div>
            <div className="tagslist">
              <ul>
                <li>
                  <a href="#">Track Day</a>
                </li>
                <li>
                  <a href="#">Extreme sport</a>
                </li>
                <li>
                  <a href="#">Headwear</a>
                </li>
                <li>
                  <a href="#">Go</a>
                </li>
                <li>
                  <a href="#">Outdoor</a>
                </li>
                <li>
                  <a href="#">Racing driver</a>
                </li>
                <li>
                  <a href="#">Racing car</a>
                </li>
                <li>
                  <a href="#">Redy</a>
                </li>
                <li>
                  <a href="#">Real people</a>
                </li>
                <li>
                  <a href="#">Extreme sport</a>
                </li>
                <li>
                  <a href="#">Porsche</a>
                </li>
                <li>
                  <a href="#">Car</a>
                </li>
                <li>
                  <a href="#">Outdoor</a>
                </li>
                <li>
                  <a href="#">Pascal Schonlau</a>
                </li>
                <li>
                  <a href="#">recom</a>
                </li>
                <li>
                  <a href="#">Redy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="from">
      <div className="container mycontainer">
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="top-left">
              <h1 className="content">FROM</h1>
            </div>
            <div className="fromuser">
              <div className="imageleft">
                <img src={profilerImage} alt="" />
              </div>
              <div className="contentright">
                <h4>THORSTEN JASPER WEESE </h4>
                <p>
                  CGI Director by recom
                  <br /> supervision available
                </p>
                <div className="clientid">
                  <h4>Chile Atacama Desert</h4>
                  <small>
                    <b>Creation Date:</b>21.06.2018
                  </small>
                  <small>
                    <b>User ID</b>#48536
                  </small>
                  <small>
                    <b>Image ID</b>#99999
                  </small>
                </div>
                <div className="actions">
                  <a href="#" className="btn btnstyle3">
                    Show Profile
                  </a>
                </div>
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
            <a href="#" className="btn btnstyle1 back">
              Back
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
    <Footer />
  </>
);

export default SingleListing;
